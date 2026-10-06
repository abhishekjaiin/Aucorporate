"use server"

import { desc, eq, sql } from "drizzle-orm"

import { db } from "@/lib/db/client"
import { insights, authors, categories } from "@/lib/db/schema"
import { auth } from "@/lib/auth"
import { PermissionError } from "@/lib/auth/permissions"

export async function getDashboardStats() {
  const session = await auth()
  if (!session?.user) throw new PermissionError("You must be signed in.")

  const [statusCounts, avgScoreRow, needsRefreshRow, recentlyUpdated, recentDrafts, pendingReview] = await Promise.all([
    db
      .select({ status: insights.status, count: sql<number>`count(*)` })
      .from(insights)
      .groupBy(insights.status),
    db.select({ avg: sql<number>`avg(${insights.seoScore})` }).from(insights).where(sql`${insights.seoScore} is not null`),
    db.select({ count: sql<number>`count(*)` }).from(insights).where(eq(insights.needsRefresh, true)),
    db
      .select({ id: insights.id, title: insights.title, status: insights.status, updatedAt: insights.updatedAt })
      .from(insights)
      .orderBy(desc(insights.updatedAt))
      .limit(5),
    db
      .select({ id: insights.id, title: insights.title, updatedAt: insights.updatedAt })
      .from(insights)
      .where(eq(insights.status, "DRAFT"))
      .orderBy(desc(insights.updatedAt))
      .limit(5),
    db
      .select({
        id: insights.id,
        title: insights.title,
        authorName: authors.name,
        categoryName: categories.name,
        updatedAt: insights.updatedAt,
      })
      .from(insights)
      .leftJoin(authors, eq(insights.authorId, authors.id))
      .leftJoin(categories, eq(insights.categoryId, categories.id))
      .where(eq(insights.status, "INTERNAL_REVIEW"))
      .orderBy(desc(insights.updatedAt))
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
