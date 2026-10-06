import { createClient } from "next-sanity"

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "kyo68738"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Published-only, CDN-backed reads — no token required as long as the
  // dataset's default "viewer" access stays public. If the dataset is
  // private, set SANITY_API_READ_TOKEN and wire it in here.
  useCdn: true,
  perspective: "published",
  token: process.env.SANITY_API_READ_TOKEN || undefined,
})
