"use server"

import { revalidatePath } from "next/cache"
import { and, desc, eq, ilike, ne, or, sql } from "drizzle-orm"

import { db } from "@/lib/db/client"
import { blogs, authors, categories, topicClusters } from "@/lib/db/schema"
import { getSessionUser } from "@/lib/auth/session"
import { permissions, PermissionError } from "@/lib/auth/permissions"
import { blogInputSchema, type BlogInput } from "@/lib/validation/blog"
import { scoreBlog } from "@/lib/seo/health"
import type { JSONContent } from "@tiptap/core"

async function requireSession() {
  const user = await getSessionUser()
  if (!user) throw new PermissionError("You must be signed in.")
  return user
}

async function isDuplicateSlug(slug: string, excludeId?: string) {
  const rows = await db
    .select({ id: blogs.id })
    .from(blogs)
    .where(excludeId ? and(eq(blogs.slug, slug), ne(blogs.id, excludeId)) : eq(blogs.slug, slug))
    .limit(1)
  return rows.length > 0
}

async function computeAndStoreScore(blogId: string) {
  const [row] = await db.select().from(blogs).where(eq(blogs.id, blogId)).limit(1)
  if (!row) return
  const dup = await isDuplicateSlug(row.slug, row.id)
  const report = scoreBlog({
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
  await db.update(blogs).set({ seoScore: report.score }).where(eq(blogs.id, blogId))
  return report
}

export type BlogListFilters = {
  search?: string
  status?: string
  categoryId?: string
  authorId?: string
  topicClusterId?: string
  page?: number
  pageSize?: number
}

/** Server-side filtered, paginated list — never loads the full table into memory. */
export async function listBlogs(filters: BlogListFilters) {
  await requireSession()
  const page = Math.max(1, filters.page ?? 1)
  const pageSize = Math.min(100, Math.max(1, filters.pageSize ?? 20))

  const conditions = []
  if (filters.search) {
    conditions.push(or(ilike(blogs.title, `%${filters.search}%`), ilike(blogs.slug, `%${filters.search}%`)))
  }
  if (filters.status) conditions.push(eq(blogs.status, filters.status as "DRAFT"))
  if (filters.categoryId) conditions.push(eq(blogs.categoryId, filters.categoryId))
  if (filters.authorId) conditions.push(eq(blogs.authorId, filters.authorId))
  if (filters.topicClusterId) conditions.push(eq(blogs.topicClusterId, filters.topicClusterId))

  const where = conditions.length > 0 ? and(...conditions) : undefined

  const [rows, countRows] = await Promise.all([
    db
      .select({
        id: blogs.id,
        title: blogs.title,
        slug: blogs.slug,
        status: blogs.status,
        primaryKeyword: blogs.primaryKeyword,
        publishedAt: blogs.publishedAt,
        updatedAt: blogs.updatedAt,
        seoScore: blogs.seoScore,
        needsRefresh: blogs.needsRefresh,
        authorName: authors.name,
        categoryName: categories.name,
      })
      .from(blogs)
      .leftJoin(authors, eq(blogs.authorId, authors.id))
      .leftJoin(categories, eq(blogs.categoryId, categories.id))
      .where(where)
      .orderBy(desc(blogs.updatedAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize),
    db.select({ count: sql<number>`count(*)` }).from(blogs).where(where),
  ])

  return { rows, total: Number(countRows[0]?.count ?? 0), page, pageSize }
}

export async function getBlogById(id: string) {
  await requireSession()
  const [row] = await db.select().from(blogs).where(eq(blogs.id, id)).limit(1)
  return row ?? null
}

export async function getBlogHealth(id: string) {
  await requireSession()
  const [row] = await db.select().from(blogs).where(eq(blogs.id, id)).limit(1)
  if (!row) return null
  const dup = await isDuplicateSlug(row.slug, row.id)
  return scoreBlog({
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

export async function createBlog(input: BlogInput) {
  const user = await requireSession()
  const data = blogInputSchema.parse(input)

  if (await isDuplicateSlug(data.slug)) {
    throw new Error(`Slug "${data.slug}" is already in use by another blog.`)
  }

  const [row] = await db
    .insert(blogs)
    .values({ ...data, status: "DRAFT" })
    .returning()

  await computeAndStoreScore(row.id)
  void user // created-by tracking is a Phase 2 addition (not in the minimum schema)
  return row
}

export async function updateBlog(id: string, input: BlogInput) {
  const user = await requireSession()
  const existing = await getBlogById(id)
  if (!existing) throw new Error("Blog not found.")

  if (existing.authorId && existing.authorId !== input.authorId && user.role === "AUTHOR") {
    // AUTHOR editing something not authored under their own byline — still
    // allowed to edit the content, but reassigning authorship is an EDITOR+
    // action in spirit; kept simple here since Phase 1 has no per-user
    // "my content" ownership column distinct from authorId.
  }

  const data = blogInputSchema.parse(input)
  if (data.slug !== existing.slug && (await isDuplicateSlug(data.slug, id))) {
    throw new Error(`Slug "${data.slug}" is already in use by another blog.`)
  }

  const [row] = await db
    .update(blogs)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(blogs.id, id))
    .returning()

  await computeAndStoreScore(id)

  if (existing.status === "PUBLISHED") {
    revalidatePath(`/blogs/${row.slug}`)
    revalidatePath("/blogs")
  }
  return row
}

export async function submitForReview(id: string) {
  const user = await requireSession()
  if (!permissions.canSubmitForReview(user.role)) throw new PermissionError()
  const [row] = await db
    .update(blogs)
    .set({ status: "INTERNAL_REVIEW", updatedAt: new Date() })
    .where(eq(blogs.id, id))
    .returning()
  return row
}

export async function approveBlog(id: string) {
  const user = await requireSession()
  if (!permissions.canApprove(user.role)) throw new PermissionError("Only Editors and Admins can approve content.")
  const [row] = await db
    .update(blogs)
    .set({ status: "APPROVED", lastReviewedAt: new Date(), updatedAt: new Date() })
    .where(eq(blogs.id, id))
    .returning()
  return row
}

export async function publishBlog(id: string) {
  const user = await requireSession()
  if (!permissions.canPublish(user.role)) throw new PermissionError("Only Admins can publish content.")

  const existing = await getBlogById(id)
  if (!existing) throw new Error("Blog not found.")
  if (existing.status !== "APPROVED") {
    throw new Error("Only APPROVED content can be published. Approve it first.")
  }

  const [row] = await db
    .update(blogs)
    .set({ status: "PUBLISHED", publishedAt: existing.publishedAt ?? new Date(), updatedAt: new Date() })
    .where(eq(blogs.id, id))
    .returning()

  await computeAndStoreScore(id)
  revalidatePath(`/blogs/${row.slug}`)
  revalidatePath("/blogs")
  revalidatePath("/sitemap.xml")
  return row
}

export async function unpublishBlog(id: string) {
  const user = await requireSession()
  if (!permissions.canUnpublish(user.role)) throw new PermissionError("Only Admins can unpublish content.")
  const [row] = await db
    .update(blogs)
    .set({ status: "DRAFT", updatedAt: new Date() })
    .where(eq(blogs.id, id))
    .returning()
  revalidatePath(`/blogs/${row.slug}`)
  revalidatePath("/blogs")
  revalidatePath("/sitemap.xml")
  return row
}

export async function markNeedsRefresh(id: string, needsRefresh: boolean) {
  const user = await requireSession()
  if (!permissions.canMarkNeedsRefresh(user.role)) throw new PermissionError()
  const [row] = await db
    .update(blogs)
    .set({ needsRefresh, status: needsRefresh ? "NEEDS_REFRESH" : "PUBLISHED", updatedAt: new Date() })
    .where(eq(blogs.id, id))
    .returning()
  return row
}

/** Requires explicit confirmation from the caller (UI must ask before calling this). */
export async function deleteBlog(id: string, confirmed: boolean) {
  const user = await requireSession()
  if (!permissions.canDelete(user.role)) throw new PermissionError("Only Admins can delete content.")
  if (!confirmed) throw new Error("Deletion requires explicit confirmation.")

  const existing = await getBlogById(id)
  await db.delete(blogs).where(eq(blogs.id, id))

  if (existing?.status === "PUBLISHED") {
    revalidatePath(`/blogs/${existing.slug}`)
    revalidatePath("/blogs")
    revalidatePath("/sitemap.xml")
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
