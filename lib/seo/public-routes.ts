/**
 * Single source of truth for every static public page on the site.
 *
 * Both app/sitemap.ts and app/llms-full.txt/route.ts read from this one
 * array. Before this existed, the two were maintained as separate lists
 * that had already drifted — llms-full.txt was missing several
 * high-priority pages that were present here. Add a new static page here
 * once and it appears correctly in both places; nothing else needs
 * updating for a page to stop being invisible to AI crawlers.
 *
 * This array intentionally contains ONLY genuinely public, indexable
 * pages — never /admin, /api, or anything disallowed in robots.txt.
 * Published Insights are not listed here: they come from Postgres and are
 * fetched separately (with the same safe empty-array fallback) by both
 * consumers, exactly as sitemap.ts already did before this refactor.
 */

import { caseStudies } from "@/lib/case-studies"

export type PublicPage = {
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

export const publicPages: PublicPage[] = [
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
  { path: "/india-business-setup/foreign-subsidiary-india", priority: 0.93, changeFrequency: "weekly", lastModified: "2026-10-08" },
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
  // fetched live by each consumer (see getPublishedInsights()). The index
  // page itself is static here since it exists regardless of how many
  // Insights are published.
  { path: "/insights", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-10-06" },

  // Case Studies — the index and each individual case study only appear
  // here once real entries exist in lib/case-studies.ts; an empty listing
  // page isn't worth indexing, and there is nothing to list yet.
  ...(caseStudies.length > 0
    ? [
        { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-10-08" },
        ...caseStudies.map((c) => ({
          path: `/case-studies/${c.slug}`,
          priority: 0.75,
          changeFrequency: "yearly" as const,
          lastModified: "2026-10-08",
        })),
      ]
    : []),
]
