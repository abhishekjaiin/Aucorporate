import { and, desc, eq, inArray } from "drizzle-orm"

import { db } from "@/lib/db/client"
import { blogs, authors, categories, relatedBlogs } from "@/lib/db/schema"

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

export async function getPublishedBlogs() {
  return db
    .select({
      id: blogs.id,
      title: blogs.title,
      slug: blogs.slug,
      excerpt: blogs.excerpt,
      featuredImage: blogs.featuredImage,
      imageAlt: blogs.imageAlt,
      categoryName: categories.name,
      authorName: authors.name,
      publishedAt: blogs.publishedAt,
    })
    .from(blogs)
    .leftJoin(categories, eq(blogs.categoryId, categories.id))
    .leftJoin(authors, eq(blogs.authorId, authors.id))
    .where(inArray(blogs.status, PUBLIC_STATUSES))
    .orderBy(desc(blogs.publishedAt))
}

export async function getPublishedBlogBySlug(slug: string) {
  const [row] = await db
    .select({
      id: blogs.id,
      title: blogs.title,
      slug: blogs.slug,
      excerpt: blogs.excerpt,
      content: blogs.content,
      featuredImage: blogs.featuredImage,
      imageAlt: blogs.imageAlt,
      categoryName: categories.name,
      authorName: authors.name,
      authorBio: authors.bio,
      authorDesignation: authors.designation,
      authorImage: authors.image,
      metaTitle: blogs.metaTitle,
      metaDescription: blogs.metaDescription,
      canonicalUrl: blogs.canonicalUrl,
      publishedAt: blogs.publishedAt,
      updatedAt: blogs.updatedAt,
      topicClusterId: blogs.topicClusterId,
      serviceSlug: blogs.serviceSlug,
      jurisdictionSlug: blogs.jurisdictionSlug,
    })
    .from(blogs)
    .leftJoin(categories, eq(blogs.categoryId, categories.id))
    .leftJoin(authors, eq(blogs.authorId, authors.id))
    .where(and(eq(blogs.slug, slug), inArray(blogs.status, PUBLIC_STATUSES)))
    .limit(1)

  if (!row) return null

  const related = await db
    .select({
      id: blogs.id,
      title: blogs.title,
      slug: blogs.slug,
      excerpt: blogs.excerpt,
    })
    .from(relatedBlogs)
    .innerJoin(blogs, eq(relatedBlogs.relatedBlogId, blogs.id))
    .where(and(eq(relatedBlogs.blogId, row.id), inArray(blogs.status, PUBLIC_STATUSES)))

  return { ...row, related }
}

/**
 * Fallback for the "Related Blogs" section when an article has no
 * manually curated relations yet: other published articles in the same
 * topic cluster. This is a real topical relationship already captured by
 * the existing schema (topicClusterId), not a random "recent posts" list —
 * it simply isn't picked unless the curated `related` list is empty.
 */
export async function getRelatedBlogsByTopicCluster(
  topicClusterId: string,
  excludeBlogId: string,
  limit = 3
) {
  return db
    .select({
      id: blogs.id,
      title: blogs.title,
      slug: blogs.slug,
      excerpt: blogs.excerpt,
    })
    .from(blogs)
    .where(
      and(
        eq(blogs.topicClusterId, topicClusterId),
        inArray(blogs.status, PUBLIC_STATUSES)
      )
    )
    .orderBy(desc(blogs.publishedAt))
    .limit(limit + 1)
    .then((rows) => rows.filter((r) => r.id !== excludeBlogId).slice(0, limit))
}

export async function getPublishedSlugs() {
  const rows = await db.select({ slug: blogs.slug }).from(blogs).where(inArray(blogs.status, PUBLIC_STATUSES))
  return rows.map((r) => r.slug)
}

/**
 * Single indexed existence check, used by proxy.ts to decide — before any
 * page rendering happens — whether a request for /blogs/[slug] should
 * be allowed through or rewritten to a genuinely unmatched path. Kept
 * separate from getPublishedBlogBySlug() because the caller only needs
 * a boolean, not the full row.
 */
export async function isSlugPublic(slug: string): Promise<boolean> {
  const [row] = await db
    .select({ id: blogs.id })
    .from(blogs)
    .where(and(eq(blogs.slug, slug), inArray(blogs.status, PUBLIC_STATUSES)))
    .limit(1)
  return Boolean(row)
}
