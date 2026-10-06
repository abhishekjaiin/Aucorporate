import {
  pgTable,
  text,
  varchar,
  timestamp,
  uuid,
  jsonb,
  integer,
  boolean,
  pgEnum,
  uniqueIndex,
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

/**
 * Phase 1 schema for the AU Corporate content/SEO dashboard.
 *
 * Only `insights` is a fully-managed content type with admin UI in Phase 1.
 * `services`, `jurisdictions`, `industries`, `caseStudies`, `resources`,
 * `faqs` are deliberately NOT created here yet (per explicit Phase 1 scope —
 * the existing public pages for these stay hardcoded .tsx files). The
 * foreign-key columns on `insights` (serviceSlug, jurisdictionSlug,
 * industrySlug) are plain text columns, not FKs to tables that don't exist
 * yet, so those relationships can be added later (Phase 2+) by creating the
 * referenced tables and converting these to real foreign keys — without a
 * breaking migration, since the column already holds the right values.
 */

export const userRoleEnum = pgEnum("user_role", ["ADMIN", "EDITOR", "AUTHOR"])

export const insightStatusEnum = pgEnum("insight_status", [
  "DRAFT",
  "INTERNAL_REVIEW",
  "APPROVED",
  "PUBLISHED",
  "NEEDS_REFRESH",
])

export const searchIntentEnum = pgEnum("search_intent", [
  "INFORMATIONAL",
  "COMMERCIAL",
  "TRANSACTIONAL",
  "COMPARISON",
  "REGULATORY",
])

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  passwordHash: text("password_hash").notNull(),
  role: userRoleEnum("role").notNull().default("AUTHOR"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  emailIdx: uniqueIndex("users_email_idx").on(table.email),
}))

export const authors = pgTable("authors", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  bio: text("bio"),
  image: text("image"),
  designation: varchar("designation", { length: 255 }),
  email: varchar("email", { length: 255 }),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: uniqueIndex("authors_slug_idx").on(table.slug),
}))

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: uniqueIndex("categories_slug_idx").on(table.slug),
}))

export const topicClusters = pgTable("topic_clusters", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  description: text("description"),
  primaryKeyword: varchar("primary_keyword", { length: 255 }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: uniqueIndex("topic_clusters_slug_idx").on(table.slug),
}))

export const keywords = pgTable("keywords", {
  id: uuid("id").primaryKey().defaultRandom(),
  keyword: varchar("keyword", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  searchIntent: searchIntentEnum("search_intent"),
  topicClusterId: uuid("topic_cluster_id").references(() => topicClusters.id, { onDelete: "set null" }),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: uniqueIndex("keywords_slug_idx").on(table.slug),
}))

export const insights = pgTable("insights", {
  id: uuid("id").primaryKey().defaultRandom(),

  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  excerpt: text("excerpt"),
  // Tiptap JSON document — a structured, schema-constrained format (not raw
  // HTML), rendered to safe HTML on read via @tiptap/html's generateHTML.
  content: jsonb("content"),

  status: insightStatusEnum("status").notNull().default("DRAFT"),

  authorId: uuid("author_id").references(() => authors.id, { onDelete: "set null" }),
  categoryId: uuid("category_id").references(() => categories.id, { onDelete: "set null" }),
  topicClusterId: uuid("topic_cluster_id").references(() => topicClusters.id, { onDelete: "set null" }),

  // Plain text, not FKs — see file header note. Lets an Insight record
  // which service/jurisdiction/industry it supports today, ready to become
  // a real foreign key once those tables exist, without re-keying data.
  serviceSlug: varchar("service_slug", { length: 255 }),
  jurisdictionSlug: varchar("jurisdiction_slug", { length: 255 }),
  industrySlug: varchar("industry_slug", { length: 255 }),

  featuredImage: text("featured_image"),
  imageAlt: varchar("image_alt", { length: 255 }),

  primaryKeyword: varchar("primary_keyword", { length: 255 }),
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: varchar("meta_description", { length: 500 }),
  canonicalUrl: text("canonical_url"),

  publishedAt: timestamp("published_at", { withTimezone: true }),
  lastReviewedAt: timestamp("last_reviewed_at", { withTimezone: true }),
  needsRefresh: boolean("needs_refresh").notNull().default(false),

  // Snapshot of the last computed deterministic SEO health score
  // (lib/seo/health.ts). Recomputed on every save — this column is a cache
  // for fast list-page rendering, not the source of truth.
  seoScore: integer("seo_score"),

  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: uniqueIndex("insights_slug_idx").on(table.slug),
}))

export const insightKeywords = pgTable("insight_keywords", {
  insightId: uuid("insight_id").notNull().references(() => insights.id, { onDelete: "cascade" }),
  keywordId: uuid("keyword_id").notNull().references(() => keywords.id, { onDelete: "cascade" }),
  isPrimary: boolean("is_primary").notNull().default(false),
}, (table) => ({
  pk: uniqueIndex("insight_keywords_pk").on(table.insightId, table.keywordId),
}))

// Self-referencing many-to-many for "related insights" (Section 15 —
// manual selection in Phase 1; this table is what a future automated
// suggestion engine would also write into).
export const relatedInsights = pgTable("related_insights", {
  insightId: uuid("insight_id").notNull().references(() => insights.id, { onDelete: "cascade" }),
  relatedInsightId: uuid("related_insight_id").notNull().references(() => insights.id, { onDelete: "cascade" }),
}, (table) => ({
  pk: uniqueIndex("related_insights_pk").on(table.insightId, table.relatedInsightId),
}))

export const usersRelations = relations(users, () => ({}))

export const authorsRelations = relations(authors, ({ many }) => ({
  insights: many(insights),
}))

export const categoriesRelations = relations(categories, ({ many }) => ({
  insights: many(insights),
}))

export const topicClustersRelations = relations(topicClusters, ({ many }) => ({
  insights: many(insights),
  keywords: many(keywords),
}))

export const keywordsRelations = relations(keywords, ({ one, many }) => ({
  topicCluster: one(topicClusters, {
    fields: [keywords.topicClusterId],
    references: [topicClusters.id],
  }),
  insightKeywords: many(insightKeywords),
}))

export const insightsRelations = relations(insights, ({ one, many }) => ({
  author: one(authors, { fields: [insights.authorId], references: [authors.id] }),
  category: one(categories, { fields: [insights.categoryId], references: [categories.id] }),
  topicCluster: one(topicClusters, { fields: [insights.topicClusterId], references: [topicClusters.id] }),
  insightKeywords: many(insightKeywords),
  relatedFrom: many(relatedInsights, { relationName: "insightRelated" }),
}))

export const insightKeywordsRelations = relations(insightKeywords, ({ one }) => ({
  insight: one(insights, { fields: [insightKeywords.insightId], references: [insights.id] }),
  keyword: one(keywords, { fields: [insightKeywords.keywordId], references: [keywords.id] }),
}))
