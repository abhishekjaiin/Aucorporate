import { z } from "zod"

export const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export const blogInputSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(255),
  slug: z.string().trim().toLowerCase().regex(slugPattern, "Slug must be lowercase letters, numbers and hyphens only"),
  excerpt: z.string().trim().max(500).optional().nullable(),
  content: z.unknown().optional().nullable(), // Tiptap JSON document
  authorId: z.string().uuid().optional().nullable(),
  categoryId: z.string().uuid().optional().nullable(),
  topicClusterId: z.string().uuid().optional().nullable(),
  serviceSlug: z.string().trim().max(255).optional().nullable(),
  jurisdictionSlug: z.string().trim().max(255).optional().nullable(),
  industrySlug: z.string().trim().max(255).optional().nullable(),
  featuredImage: z.string().trim().max(2048).optional().nullable(),
  imageAlt: z.string().trim().max(255).optional().nullable(),
  primaryKeyword: z.string().trim().max(255).optional().nullable(),
  metaTitle: z.string().trim().max(255).optional().nullable(),
  metaDescription: z.string().trim().max(500).optional().nullable(),
  canonicalUrl: z.string().trim().max(2048).optional().nullable(),
})

export type BlogInput = z.infer<typeof blogInputSchema>

export const authorInputSchema = z.object({
  name: z.string().trim().min(1).max(255),
  slug: z.string().trim().toLowerCase().regex(slugPattern),
  bio: z.string().trim().max(2000).optional().nullable(),
  image: z.string().trim().max(2048).optional().nullable(),
  designation: z.string().trim().max(255).optional().nullable(),
  email: z.string().trim().email().optional().nullable().or(z.literal("")),
  isActive: z.boolean().default(true),
})

export const categoryInputSchema = z.object({
  name: z.string().trim().min(1).max(255),
  slug: z.string().trim().toLowerCase().regex(slugPattern),
  description: z.string().trim().max(1000).optional().nullable(),
})

export const topicClusterInputSchema = z.object({
  name: z.string().trim().min(1).max(255),
  slug: z.string().trim().toLowerCase().regex(slugPattern),
  description: z.string().trim().max(1000).optional().nullable(),
  primaryKeyword: z.string().trim().max(255).optional().nullable(),
})

export const keywordInputSchema = z.object({
  keyword: z.string().trim().min(1).max(255),
  slug: z.string().trim().toLowerCase().regex(slugPattern),
  searchIntent: z.enum(["INFORMATIONAL", "COMMERCIAL", "TRANSACTIONAL", "COMPARISON", "REGULATORY"]).optional().nullable(),
  topicClusterId: z.string().uuid().optional().nullable(),
  notes: z.string().trim().max(1000).optional().nullable(),
})
