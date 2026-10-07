"use server"

import { eq } from "drizzle-orm"

import { db } from "@/lib/db/client"
import { authors, categories, keywords, topicClusters } from "@/lib/db/schema"
import { getSessionUser } from "@/lib/auth/session"
import { permissions, PermissionError } from "@/lib/auth/permissions"
import {
  authorInputSchema,
  categoryInputSchema,
  keywordInputSchema,
  topicClusterInputSchema,
} from "@/lib/validation/insight"

async function requireTaxonomyPermission() {
  const user = await getSessionUser()
  if (!user) throw new PermissionError("You must be signed in.")
  if (!permissions.canManageTaxonomy(user.role)) {
    throw new PermissionError("Only Editors and Admins can manage this.")
  }
  return user
}

async function requireSession() {
  const user = await getSessionUser()
  if (!user) throw new PermissionError("You must be signed in.")
  return user
}

// ---- Authors ----
export async function listAuthors() {
  await requireSession()
  return db.select().from(authors).orderBy(authors.name)
}

export async function createAuthor(input: unknown) {
  await requireTaxonomyPermission()
  const data = authorInputSchema.parse(input)
  const [row] = await db.insert(authors).values(data).returning()
  return row
}

export async function updateAuthor(id: string, input: unknown) {
  await requireTaxonomyPermission()
  const data = authorInputSchema.parse(input)
  const [row] = await db.update(authors).set({ ...data, updatedAt: new Date() }).where(eq(authors.id, id)).returning()
  return row
}

// ---- Categories ----
export async function listCategories() {
  await requireSession()
  return db.select().from(categories).orderBy(categories.name)
}

export async function createCategory(input: unknown) {
  await requireTaxonomyPermission()
  const data = categoryInputSchema.parse(input)
  const [row] = await db.insert(categories).values(data).returning()
  return row
}

export async function updateCategory(id: string, input: unknown) {
  await requireTaxonomyPermission()
  const data = categoryInputSchema.parse(input)
  const [row] = await db.update(categories).set({ ...data, updatedAt: new Date() }).where(eq(categories.id, id)).returning()
  return row
}

// ---- Topic Clusters ----
export async function listTopicClusters() {
  await requireSession()
  return db.select().from(topicClusters).orderBy(topicClusters.name)
}

export async function createTopicCluster(input: unknown) {
  await requireTaxonomyPermission()
  const data = topicClusterInputSchema.parse(input)
  const [row] = await db.insert(topicClusters).values(data).returning()
  return row
}

export async function updateTopicCluster(id: string, input: unknown) {
  await requireTaxonomyPermission()
  const data = topicClusterInputSchema.parse(input)
  const [row] = await db.update(topicClusters).set({ ...data, updatedAt: new Date() }).where(eq(topicClusters.id, id)).returning()
  return row
}

// ---- Keywords ----
export async function listKeywords() {
  await requireSession()
  return db.select().from(keywords).orderBy(keywords.keyword)
}

export async function createKeyword(input: unknown) {
  await requireTaxonomyPermission()
  const data = keywordInputSchema.parse(input)
  const [row] = await db.insert(keywords).values(data).returning()
  return row
}

export async function updateKeyword(id: string, input: unknown) {
  await requireTaxonomyPermission()
  const data = keywordInputSchema.parse(input)
  const [row] = await db.update(keywords).set({ ...data, updatedAt: new Date() }).where(eq(keywords.id, id)).returning()
  return row
}
