"use server"

import { desc, eq, sql } from "drizzle-orm"

import { db } from "@/lib/db/client"
import { blogs, authors, categories } from "@/lib/db/schema"
import { auth } from "@/lib/auth"
import { PermissionError } from "@/lib/auth/permissions"

export async function getDashboardStats() {
  const session = await auth()
  if (!session?.user) throw new PermissionError("You must be signed in.")

  const [statusCounts, avgScoreRow, needsRefreshRow, recentlyUpdated, recentDrafts, pendingReview] = await Promise.all([
    db
      .select({ status: blogs.status, count: sql<number>`count(*)` })
      .from(blogs)
      .groupBy(blogs.status),
    db.select({ avg: sql<number>`avg(${blogs.seoScore})` }).from(blogs).where(sql`${blogs.seoScore} is not null`),
    db.select({ count: sql<number>`count(*)` }).from(blogs).where(eq(blogs.needsRefresh, true)),
    db
      .select({ id: blogs.id, title: blogs.title, status: blogs.status, updatedAt: blogs.updatedAt })
      .from(blogs)
      .orderBy(desc(blogs.updatedAt))
      .limit(5),
    db
      .select({ id: blogs.id, title: blogs.title, updatedAt: blogs.updatedAt })
      .from(blogs)
      .where(eq(blogs.status, "DRAFT"))
      .orderBy(desc(blogs.updatedAt))
      .limit(5),
    db
      .select({
        id: blogs.id,
        title: blogs.title,
        authorName: authors.name,
        categoryName: categories.name,
        updatedAt: blogs.updatedAt,
      })
      .from(blogs)
      .leftJoin(authors, eq(blogs.authorId, authors.id))
      .leftJoin(categories, eq(blogs.categoryId, categories.id))
      .where(eq(blogs.status, "INTERNAL_REVIEW"))
      .orderBy(desc(blogs.updatedAt))
      .limit(10),
  ])

  const counts: Record<string, number> = {}
  for (const row of statusCounts) counts[row.status] = Number(row.count)

  return {
    total: Object.values(counts).reduce((a, b) => a + b, 0),
    draft: counts.DRAFT ?? 0,
    internalReview: counts.INTERNAL_REVIEW ?? 0,
    approved: counts.APPROVED ?? 0,
    published: counts.PUBLISHED ?? 0,
    needsRefresh: Number(needsRefreshRow[0]?.count ?? 0),
    averageSeoScore: avgScoreRow[0]?.avg != null ? Math.round(Number(avgScoreRow[0].avg)) : null,
    recentlyUpdated,
    recentDrafts,
    pendingReview,
  }
}
