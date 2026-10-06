import type { Image, PortableTextBlock } from "sanity"

import { client } from "./client"

export type InsightPost = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  body: PortableTextBlock[]
  featuredImage?: Image & { alt?: string }
  author?: string
  category?: string
  tags?: string[]
  publishedAt: string
  updatedAt?: string
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  relatedArticles?: { _id: string; title: string; slug: string; excerpt?: string }[]
}

const postProjection = /* groq */ `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  featuredImage,
  author,
  category,
  tags,
  publishedAt,
  updatedAt,
  metaTitle,
  metaDescription,
  canonicalUrl,
  "relatedArticles": relatedArticles[]->{
    _id,
    title,
    "slug": slug.current,
    excerpt
  }
}`

/**
 * Both fetch helpers swallow errors and log instead of throwing. This
 * repo's sandbox blocks outbound egress to api.sanity.io, so a local
 * `pnpm build` here must not hard-fail when Sanity is unreachable — and
 * in production (Vercel, where egress is open), a transient Sanity
 * outage should degrade to an empty list rather than taking the whole
 * site down. Phase 2 can tighten this once a monitoring/alerting story
 * exists for a silent-empty-list failure mode.
 */
export async function getAllInsightPosts(): Promise<InsightPost[]> {
  try {
    return await client.fetch(
      /* groq */ `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postProjection}`
    )
  } catch (err) {
    console.error("[sanity] getAllInsightPosts failed:", err)
    return []
  }
}

export async function getInsightPostBySlug(slug: string): Promise<InsightPost | null> {
  try {
    return await client.fetch(
      /* groq */ `*[_type == "post" && slug.current == $slug][0] ${postProjection}`,
      { slug }
    )
  } catch (err) {
    console.error("[sanity] getInsightPostBySlug failed:", err)
    return null
  }
}

export async function getAllInsightSlugs(): Promise<string[]> {
  try {
    const slugs: string[] = await client.fetch(
      /* groq */ `*[_type == "post" && defined(slug.current)].slug.current`
    )
    return slugs
  } catch (err) {
    console.error("[sanity] getAllInsightSlugs failed:", err)
    return []
  }
}
