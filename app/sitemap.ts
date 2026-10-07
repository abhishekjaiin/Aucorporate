import { MetadataRoute } from "next"
import { getPublishedInsights } from "@/lib/public/insights"

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

// Real last-modified dates per page. Update the date when a page's content
// actually changes — do NOT default this to "new Date()" for every page,
// or the freshness signal becomes meaningless to search engines.
type Page = {
  path: string
  priority: number
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
  lastModified: string // ISO date, e.g. "2026-07-27"
}

const pages: Page[] = [
  // Homepage - Highest Priority
  { path: "/", priority: 1.0, changeFrequency: "daily", lastModified: "2026-10-07" },

  // Core Service Hub
  { path: "/services", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-09-11" },

  // 10 Service Pillars
  { path: "/india-business-setup", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-09-25" },
  { path: "/services/accounting-assurance", priority: 0.92, changeFrequency: "weekly", lastModified: "2026-09-11" },
  { path: "/hr-services", priority: 0.92, changeFrequency: "weekly", lastModified: "2026-09-11" },
  { path: "/services/taxation-regulatory", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-09-14" },
  { path: "/outsourcing", priority: 0.92, changeFrequency: "weekly", lastModified: "2026-09-11" },
  { path: "/arbitration-services", priority: 0.92, changeFrequency: "weekly", lastModified: "2026-09-14" },

  // Main Pages
  { path: "/about", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/career", priority: 0.75, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/compliance-calendar", priority: 0.8, changeFrequency: "yearly", lastModified: "2026-10-07" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-07-30" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-07-30" },

  // Doing Business in India Hub + cluster
  { path: "/doing-business-in-india", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-09-11" },
  { path: "/doing-business-in-india/why-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/doing-business-in-india/pre-incorporation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/doing-business-in-india/entry-process", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/doing-business-in-india/incorporation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/doing-business-in-india/post-incorporation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-14" },

  // GCC Setup
  { path: "/gcc-setup-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-23" },

  // Entity-Type Pages
  { path: "/branch-office-in-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/liaison-office-in-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/project-office-in-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/llp-in-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-28" },


  // AI/SaaS Tax Compliance & India Entry Pair
  { path: "/oidar-gst-registration-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-17" },
  { path: "/india-entry-for-saas-companies", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-16" },
  { path: "/global-vat-compliance-ai-saas-companies", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-17" },

  // India Business Setup Cluster
  { path: "/india-business-setup/fdi-channels", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/india-business-setup/company-formation", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-08-31" },
  { path: "/india-business-setup/regulatory-compliance", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-20" },
  { path: "/india-business-setup/banking-taxation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/india-business-setup/timeline-resources", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-11" },

  // Regional India Entry Clusters
  { path: "/india-entry-for-us-companies", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-10-07" },
  { path: "/india-entry-for-us-companies/register-company-in-india-from-usa", priority: 0.95, changeFrequency: "monthly", lastModified: "2026-09-29" },
  { path: "/india-entry-for-us-companies/permanent-establishment-risk-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-29" },
  { path: "/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-30" },
  { path: "/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-30" },
  { path: "/india-entry-for-us-companies/annual-compliance-calendar", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-30" },

  { path: "/india-entry-for-uk-companies", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-08-31" },
  { path: "/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-23" },
  { path: "/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-11" },

  { path: "/india-entry-for-singapore-companies", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-09-14" },
  { path: "/india-entry-for-australian-companies", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-09-14" },
  { path: "/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/india-entry-for-german-companies", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-09-14" },
  { path: "/india-entry-for-japan-companies", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-09-14" },
  { path: "/india-entry-for-china-companies", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-09-14" },

  // Service Pages
  { path: "/services/risk-management", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/services/transaction-advisory", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/services/training-workshops", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-11" },

  // Partners
  { path: "/partners/uniproasia", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-10" },

  // Blog Hub + Articles
  { path: "/blog", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-08-26" },
  { path: "/accounting-outsourcing-firm-for-united-states-cpas-firm", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/blog/india-japan-bis-exemption-high-tech-investment", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-31" },
  { path: "/blog/arbitration-enforcement-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/blog/construction-arbitration-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/blog/doing-business-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/blog/fdi-green-vs-brown-channel", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-31" },
  { path: "/blog/mail-box-dtaa-benefits", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/blog/tax-loan-waiver-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/blog/wholly-owned-subsidiary", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/blog/india-safe-harbour-rules-2026", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/blog/best-state-to-register-company-in-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-30" },

  // Insights Hub (Postgres-backed) — individual published Insight URLs are
  // appended below, fetched live. The index page itself is static here
  // since it exists regardless of how many Insights are published.
  { path: "/insights", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-10-06" },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = pages.map((page) => ({
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
