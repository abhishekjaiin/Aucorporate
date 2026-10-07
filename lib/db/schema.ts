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
 * Only `blogs` is a fully-managed content type with admin UI in Phase 1.
 * `services`, `jurisdictions`, `industries`, `caseStudies`, `resources`,
 * `faqs` are deliberately NOT created here yet (per explicit Phase 1 scope —
 * the existing public pages for these stay hardcoded .tsx files). The
 * foreign-key columns on `blogs` (serviceSlug, jurisdictionSlug,
 * industrySlug) are plain text columns, not FKs to tables that don't exist
 * yet, so those relationships can be added later (Phase 2+) by creating the
 * referenced tables and converting these to real foreign keys — without a
 * breaking migration, since the column already holds the right values.
 */

export const userRoleEnum = pgEnum("user_role", ["ADMIN", "EDITOR", "AUTHOR"])

export const blogStatusEnum = pgEnum("blog_status", [
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

export const blogs = pgTable("blogs", {
  id: uuid("id").primaryKey().defaultRandom(),

  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  excerpt: text("excerpt"),
  // Tiptap JSON document — a structured, schema-constrained format (not raw
  // HTML), rendered to safe HTML on read via @tiptap/html's generateHTML.
  content: jsonb("content"),

  status: blogStatusEnum("status").notNull().default("DRAFT"),

  authorId: uuid("author_id").references(() => authors.id, { onDelete: "set null" }),
  categoryId: uuid("category_id").references(() => categories.id, { onDelete: "set null" }),
  topicClusterId: uuid("topic_cluster_id").references(() => topicClusters.id, { onDelete: "set null" }),

  // Plain text, not FKs — see file header note. Lets an Blog record
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
  slugIdx: uniqueIndex("blogs_slug_idx").on(table.slug),
}))

export const blogKeywords = pgTable("blog_keywords", {
  blogId: uuid("blog_id").notNull().references(() => blogs.id, { onDelete: "cascade" }),
  keywordId: uuid("keyword_id").notNull().references(() => keywords.id, { onDelete: "cascade" }),
  isPrimary: boolean("is_primary").notNull().default(false),
}, (table) => ({
  pk: uniqueIndex("blog_keywords_pk").on(table.blogId, table.keywordId),
}))

// Self-referencing many-to-many for "related blogs" (Section 15 —
// manual selection in Phase 1; this table is what a future automated
// suggestion engine would also write into).
export const relatedBlogs = pgTable("related_blogs", {
  blogId: uuid("blog_id").notNull().references(() => blogs.id, { onDelete: "cascade" }),
  relatedBlogId: uuid("related_blog_id").notNull().references(() => blogs.id, { onDelete: "cascade" }),
}, (table) => ({
  pk: uniqueIndex("related_blogs_pk").on(table.blogId, table.relatedBlogId),
}))

export const usersRelations = relations(users, () => ({}))

export const authorsRelations = relations(authors, ({ many }) => ({
  blogs: many(blogs),
}))

export const categoriesRelations = relations(categories, ({ many }) => ({
  blogs: many(blogs),
}))

export const topicClustersRelations = relations(topicClusters, ({ many }) => ({
  blogs: many(blogs),
  keywords: many(keywords),
}))

export const keywordsRelations = relations(keywords, ({ one, many }) => ({
  topicCluster: one(topicClusters, {
    fields: [keywords.topicClusterId],
    references: [topicClusters.id],
  }),
  blogKeywords: many(blogKeywords),
}))

export const blogsRelations = relations(blogs, ({ one, many }) => ({
  author: one(authors, { fields: [blogs.authorId], references: [authors.id] }),
  category: one(categories, { fields: [blogs.categoryId], references: [categories.id] }),
  topicCluster: one(topicClusters, { fields: [blogs.topicClusterId], references: [topicClusters.id] }),
  blogKeywords: many(blogKeywords),
  relatedFrom: many(relatedBlogs, { relationName: "blogRelated" }),
}))

export const blogKeywordsRelations = relations(blogKeywords, ({ one }) => ({
  blog: one(blogs, { fields: [blogKeywords.blogId], references: [blogs.id] }),
  keyword: one(keywords, { fields: [blogKeywords.keywordId], references: [keywords.id] }),
}))
