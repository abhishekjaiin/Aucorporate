import { MetadataRoute } from "next"
import { getPublishedInsights } from "@/lib/public/insights"
import { publicPages } from "@/lib/seo/public-routes"

// Without this, a route that queries the database at request time still
// gets frozen as fully static at build time (confirmed live: a sitemap
// built with zero published Insights stayed stuck at zero forever under
// `next start`, never re-querying). This ISR window is the safety net;
// publishInsight()/unpublishInsight() additionally call
// revalidatePath("/sitemap.xml") for near-immediate updates on actual
// publish/unpublish actions, so this interval rarely needs to fire on its
// own.
export const revalidate = 3600

const baseUrl = "https://www.theaucorp.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = publicPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // A database outage must never take down the sitemap for the other ~85
  // static routes above — degrade to zero Insight entries instead of
  // throwing. Only PUBLISHED rows are ever returned by this query (see
  // lib/public/insights.ts), so draft/review/approved content can never
  // leak into the public sitemap.
  let insightEntries: MetadataRoute.Sitemap = []
  try {
    const insights = await getPublishedInsights()
    insightEntries = insights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: insight.publishedAt ?? new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  } catch (err) {
    console.error("[sitemap] failed to load published Insights, continuing without them:", err)
  }

  return [...staticEntries, ...insightEntries]
}
