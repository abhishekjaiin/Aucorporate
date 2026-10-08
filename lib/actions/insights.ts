"use server"

import { revalidatePath } from "next/cache"
import { and, desc, eq, ilike, ne, or, sql } from "drizzle-orm"

import { db } from "@/lib/db/client"
import { insights, authors, categories, topicClusters } from "@/lib/db/schema"
import { getSessionUser } from "@/lib/auth/session"
import { permissions, PermissionError } from "@/lib/auth/permissions"
import { insightInputSchema, type InsightInput } from "@/lib/validation/insight"
import { scoreInsight } from "@/lib/seo/health"
import { notifyIndexNow } from "@/lib/seo/indexnow"
import type { JSONContent } from "@tiptap/core"

async function requireSession() {
  const user = await getSessionUser()
  if (!user) throw new PermissionError("You must be signed in.")
  return user
}

async function isDuplicateSlug(slug: string, excludeId?: string) {
  const rows = await db
    .select({ id: insights.id })
    .from(insights)
    .where(excludeId ? and(eq(insights.slug, slug), ne(insights.id, excludeId)) : eq(insights.slug, slug))
    .limit(1)
  return rows.length > 0
}

async function computeAndStoreScore(insightId: string) {
  const [row] = await db.select().from(insights).where(eq(insights.id, insightId)).limit(1)
  if (!row) return
  const dup = await isDuplicateSlug(row.slug, row.id)
  const report = scoreInsight({
    title: row.title,
    metaTitle: row.metaTitle,
    metaDescription: row.metaDescription,
    primaryKeyword: row.primaryKeyword,
    canonicalUrl: row.canonicalUrl,
    slug: row.slug,
    featuredImage: row.featuredImage,
    imageAlt: row.imageAlt,
    authorId: row.authorId,
    categoryId: row.categoryId,
    topicClusterId: row.topicClusterId,
    content: row.content as JSONContent | null,
    status: row.status,
    publishedAt: row.publishedAt,
    isDuplicateSlug: dup,
  })
  await db.update(insights).set({ seoScore: report.score }).where(eq(insights.id, insightId))
  return report
}

export type InsightListFilters = {
  search?: string
  status?: string
  categoryId?: string
  authorId?: string
  topicClusterId?: string
  page?: number
  pageSize?: number
}

/** Server-side filtered, paginated list — never loads the full table into memory. */
export async function listInsights(filters: InsightListFilters) {
  await requireSession()
  const page = Math.max(1, filters.page ?? 1)
  const pageSize = Math.min(100, Math.max(1, filters.pageSize ?? 20))

  const conditions = []
  if (filters.search) {
    conditions.push(or(ilike(insights.title, `%${filters.search}%`), ilike(insights.slug, `%${filters.search}%`)))
  }
  if (filters.status) conditions.push(eq(insights.status, filters.status as "DRAFT"))
  if (filters.categoryId) conditions.push(eq(insights.categoryId, filters.categoryId))
  if (filters.authorId) conditions.push(eq(insights.authorId, filters.authorId))
  if (filters.topicClusterId) conditions.push(eq(insights.topicClusterId, filters.topicClusterId))

  const where = conditions.length > 0 ? and(...conditions) : undefined

  const [rows, countRows] = await Promise.all([
    db
      .select({
        id: insights.id,
        title: insights.title,
        slug: insights.slug,
        status: insights.status,
        primaryKeyword: insights.primaryKeyword,
        publishedAt: insights.publishedAt,
        updatedAt: insights.updatedAt,
        seoScore: insights.seoScore,
        needsRefresh: insights.needsRefresh,
        authorName: authors.name,
        categoryName: categories.name,
      })
      .from(insights)
      .leftJoin(authors, eq(insights.authorId, authors.id))
      .leftJoin(categories, eq(insights.categoryId, categories.id))
      .where(where)
      .orderBy(desc(insights.updatedAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize),
    db.select({ count: sql<number>`count(*)` }).from(insights).where(where),
  ])

  return { rows, total: Number(countRows[0]?.count ?? 0), page, pageSize }
}

export async function getInsightById(id: string) {
  await requireSession()
  const [row] = await db.select().from(insights).where(eq(insights.id, id)).limit(1)
  return row ?? null
}

export async function getInsightHealth(id: string) {
  await requireSession()
  const [row] = await db.select().from(insights).where(eq(insights.id, id)).limit(1)
  if (!row) return null
  const dup = await isDuplicateSlug(row.slug, row.id)
  return scoreInsight({
    title: row.title,
    metaTitle: row.metaTitle,
    metaDescription: row.metaDescription,
    primaryKeyword: row.primaryKeyword,
    canonicalUrl: row.canonicalUrl,
    slug: row.slug,
    featuredImage: row.featuredImage,
    imageAlt: row.imageAlt,
    authorId: row.authorId,
    categoryId: row.categoryId,
    topicClusterId: row.topicClusterId,
    content: row.content as JSONContent | null,
    status: row.status,
    publishedAt: row.publishedAt,
    isDuplicateSlug: dup,
  })
}

export async function createInsight(input: InsightInput) {
  const user = await requireSession()
  const data = insightInputSchema.parse(input)

  if (await isDuplicateSlug(data.slug)) {
    throw new Error(`Slug "${data.slug}" is already in use by another insight.`)
  }

  const [row] = await db
    .insert(insights)
    .values({ ...data, status: "DRAFT" })
    .returning()

  await computeAndStoreScore(row.id)
  void user // created-by tracking is a Phase 2 addition (not in the minimum schema)
  return row
}

export async function updateInsight(id: string, input: InsightInput) {
  const user = await requireSession()
  const existing = await getInsightById(id)
  if (!existing) throw new Error("Insight not found.")

  if (existing.authorId && existing.authorId !== input.authorId && user.role === "AUTHOR") {
    // AUTHOR editing something not authored under their own byline — still
    // allowed to edit the content, but reassigning authorship is an EDITOR+
    // action in spirit; kept simple here since Phase 1 has no per-user
    // "my content" ownership column distinct from authorId.
  }

  const data = insightInputSchema.parse(input)
  if (data.slug !== existing.slug && (await isDuplicateSlug(data.slug, id))) {
    throw new Error(`Slug "${data.slug}" is already in use by another insight.`)
  }

  const [row] = await db
    .update(insights)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(insights.id, id))
    .returning()

  await computeAndStoreScore(id)

  if (existing.status === "PUBLISHED") {
    revalidatePath(`/insights/${row.slug}`)
    revalidatePath("/insights")
    void notifyIndexNow([`/insights/${row.slug}`])
  }
  return row
}

export async function submitForReview(id: string) {
  const user = await requireSession()
  if (!permissions.canSubmitForReview(user.role)) throw new PermissionError()
  const [row] = await db
    .update(insights)
    .set({ status: "INTERNAL_REVIEW", updatedAt: new Date() })
    .where(eq(insights.id, id))
    .returning()
  return row
}

export async function approveInsight(id: string) {
  const user = await requireSession()
  if (!permissions.canApprove(user.role)) throw new PermissionError("Only Editors and Admins can approve content.")
  const [row] = await db
    .update(insights)
    .set({ status: "APPROVED", lastReviewedAt: new Date(), updatedAt: new Date() })
    .where(eq(insights.id, id))
    .returning()
  return row
}

export async function publishInsight(id: string) {
  const user = await requireSession()
  if (!permissions.canPublish(user.role)) throw new PermissionError("Only Admins can publish content.")

  const existing = await getInsightById(id)
  if (!existing) throw new Error("Insight not found.")
  if (existing.status !== "APPROVED") {
    throw new Error("Only APPROVED content can be published. Approve it first.")
  }

  const [row] = await db
    .update(insights)
    .set({ status: "PUBLISHED", publishedAt: existing.publishedAt ?? new Date(), updatedAt: new Date() })
    .where(eq(insights.id, id))
    .returning()

  await computeAndStoreScore(id)
  revalidatePath(`/insights/${row.slug}`)
  revalidatePath("/insights")
  revalidatePath("/sitemap.xml")
  void notifyIndexNow([`/insights/${row.slug}`])
  return row
}

export async function unpublishInsight(id: string) {
  const user = await requireSession()
  if (!permissions.canUnpublish(user.role)) throw new PermissionError("Only Admins can unpublish content.")
  const [row] = await db
    .update(insights)
    .set({ status: "DRAFT", updatedAt: new Date() })
    .where(eq(insights.id, id))
    .returning()
  revalidatePath(`/insights/${row.slug}`)
  revalidatePath("/insights")
  revalidatePath("/sitemap.xml")
  void notifyIndexNow([`/insights/${row.slug}`])
  return row
}

export async function markNeedsRefresh(id: string, needsRefresh: boolean) {
  const user = await requireSession()
  if (!permissions.canMarkNeedsRefresh(user.role)) throw new PermissionError()
  const [row] = await db
    .update(insights)
    .set({ needsRefresh, status: needsRefresh ? "NEEDS_REFRESH" : "PUBLISHED", updatedAt: new Date() })
    .where(eq(insights.id, id))
    .returning()
  return row
}

/** Requires explicit confirmation from the caller (UI must ask before calling this). */
export async function deleteInsight(id: string, confirmed: boolean) {
  const user = await requireSession()
  if (!permissions.canDelete(user.role)) throw new PermissionError("Only Admins can delete content.")
  if (!confirmed) throw new Error("Deletion requires explicit confirmation.")

  const existing = await getInsightById(id)
  await db.delete(insights).where(eq(insights.id, id))

  if (existing?.status === "PUBLISHED") {
    revalidatePath(`/insights/${existing.slug}`)
    revalidatePath("/insights")
    revalidatePath("/sitemap.xml")
    void notifyIndexNow([`/insights/${existing.slug}`])
  }
}

export async function listAuthorsActive() {
  await requireSession()
  return db.select().from(authors).where(eq(authors.isActive, true)).orderBy(authors.name)
}

export async function listCategoriesAll() {
  await requireSession()
  return db.select().from(categories).orderBy(categories.name)
}

export async function listTopicClustersAll() {
  await requireSession()
  return db.select().from(topicClusters).orderBy(topicClusters.name)
}
