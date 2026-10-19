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
  { path: "/branch-office-registration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/branch-office-fema-rbi-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/foreign-company-roc-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/branch-office-tax-gst-transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/branch-office-accounting-audit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/branch-office-payroll-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/project-office-registration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-13" },
  { path: "/project-office-fema-rbi-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-13" },
  { path: "/project-office-tax-gst-transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-13" },
  { path: "/project-office-accounting-audit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-13" },
  { path: "/project-office-payroll-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-13" },
  { path: "/liaison-office-registration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/liaison-office-fema-rbi-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/liaison-office-tax-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/liaison-office-accounting-audit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/liaison-office-payroll-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/llp-in-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-28" },

  // AI/SaaS Tax Compliance & India Entry Pair
  { path: "/oidar-gst-registration-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-17" },
  { path: "/india-entry-for-saas-companies", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-16" },
  { path: "/global-vat-compliance-ai-saas-companies", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-17" },

  // India Business Setup Cluster
  { path: "/india-business-setup/fdi-channels", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-11" },
  { path: "/india-business-setup/company-formation", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-08-31" },
  { path: "/india-subsidiary-registration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/accounting-reporting-audit-support", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/fema-rbi-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/corporate-tax-gst-transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/secretarial-roc-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/payroll-expat-services", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-12" },
  { path: "/india-business-setup/regulatory-compliance", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-20" },
  { path: "/india-business-setup/banking-taxation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/india-business-setup/timeline-resources", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-11" },


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

  // USA to India guide cluster
  { path: "/blog/usa-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/incorporation-process", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/documents-and-apostille", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/resident-director", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/funding-fema-fc-gpr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/share-valuation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/repatriating-profits", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/eor-vs-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/dtaa-pe-risk", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/us-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/compliance-calendar", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/audit-icofr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/tax-notices-and-litigation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/contracts-and-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/esop", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/restructuring-and-exit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/expat-visa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/global-vat", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/hiring-and-payroll", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/blog/usa-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },

  // Australia to India guide cluster
  { path: "/blog/australia-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/incorporation-process", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/documents-and-apostille", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/resident-director", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/funding-fema-fc-gpr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/share-valuation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/repatriating-profits", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/eor-vs-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/india-australia-dtaa", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/dtaa-pe-risk", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/foreign-employee-treaty-ssa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/australian-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/compliance-calendar", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/audit-icofr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/tax-notices-and-litigation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/contracts-and-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/esop", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/restructuring-and-exit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/expat-visa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/global-vat", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/hiring-and-payroll", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/blog/australia-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-15" },

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
