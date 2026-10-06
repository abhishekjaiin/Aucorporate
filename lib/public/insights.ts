import { and, desc, eq, inArray } from "drizzle-orm"

import { db } from "@/lib/db/client"
import { insights, authors, categories, relatedInsights } from "@/lib/db/schema"

/**
 * Public-facing queries. Both are hard-scoped at the SQL level to the two
 * statuses that represent genuinely live content — PUBLISHED and
 * NEEDS_REFRESH — never DRAFT/INTERNAL_REVIEW/APPROVED. NEEDS_REFRESH is
 * included deliberately: it means "this published article needs an
 * editorial update," not "take it down." Flagging something as stale must
 * never silently 404 a live page — only the explicit Unpublish action
 * (which sets status back to DRAFT) does that. No caching layer or static
 * generation can leak a draft/review/approved status, since these queries
 * never return rows in those statuses to begin with.
 */
const PUBLIC_STATUSES = ["PUBLISHED", "NEEDS_REFRESH"] as const

export async function getPublishedInsights() {
  return db
    .select({
      id: insights.id,
      title: insights.title,
      slug: insights.slug,
      excerpt: insights.excerpt,
      featuredImage: insights.featuredImage,
      imageAlt: insights.imageAlt,
      categoryName: categories.name,
      authorName: authors.name,
      publishedAt: insights.publishedAt,
    })
    .from(insights)
    .leftJoin(categories, eq(insights.categoryId, categories.id))
    .leftJoin(authors, eq(insights.authorId, authors.id))
    .where(inArray(insights.status, PUBLIC_STATUSES))
    .orderBy(desc(insights.publishedAt))
}

export async function getPublishedInsightBySlug(slug: string) {
  const [row] = await db
    .select({
      id: insights.id,
      title: insights.title,
      slug: insights.slug,
      excerpt: insights.excerpt,
      content: insights.content,
      featuredImage: insights.featuredImage,
      imageAlt: insights.imageAlt,
      categoryName: categories.name,
      authorName: authors.name,
      authorBio: authors.bio,
      authorDesignation: authors.designation,
      metaTitle: insights.metaTitle,
      metaDescription: insights.metaDescription,
      canonicalUrl: insights.canonicalUrl,
      publishedAt: insights.publishedAt,
      updatedAt: insights.updatedAt,
    })
    .from(insights)
    .leftJoin(categories, eq(insights.categoryId, categories.id))
    .leftJoin(authors, eq(insights.authorId, authors.id))
    .where(and(eq(insights.slug, slug), inArray(insights.status, PUBLIC_STATUSES)))
    .limit(1)

  if (!row) return null

  const related = await db
    .select({
      id: insights.id,
      title: insights.title,
      slug: insights.slug,
      excerpt: insights.excerpt,
    })
    .from(relatedInsights)
    .innerJoin(insights, eq(relatedInsights.relatedInsightId, insights.id))
    .where(and(eq(relatedInsights.insightId, row.id), inArray(insights.status, PUBLIC_STATUSES)))

  return { ...row, related }
}

export async function getPublishedSlugs() {
  const rows = await db.select({ slug: insights.slug }).from(insights).where(inArray(insights.status, PUBLIC_STATUSES))
  return rows.map((r) => r.slug)
}
