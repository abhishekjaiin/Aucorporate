import { MetadataRoute } from "next"

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
  { path: "/", priority: 1.0, changeFrequency: "daily", lastModified: "2026-08-26" },

  // Core Service Hub
  { path: "/services", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-08-26" },

  // 10 Service Pillars
  { path: "/india-business-setup", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-08-26" },
  { path: "/services/accounting-assurance", priority: 0.92, changeFrequency: "weekly", lastModified: "2026-05-04" },
  { path: "/hr-services", priority: 0.92, changeFrequency: "weekly", lastModified: "2026-05-04" },
  { path: "/services/taxation-regulatory", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-05-04" },
  { path: "/outsourcing", priority: 0.92, changeFrequency: "weekly", lastModified: "2026-08-26" },
  { path: "/arbitration-services", priority: 0.92, changeFrequency: "weekly", lastModified: "2026-08-26" },

  // Main Pages
  { path: "/about", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/career", priority: 0.75, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-07-30" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-07-30" },

  // Doing Business in India Hub + cluster
  { path: "/doing-business-in-india", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-08-25" },
  { path: "/doing-business-in-india/why-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/doing-business-in-india/pre-incorporation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/doing-business-in-india/entry-process", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/doing-business-in-india/incorporation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-25" },
  { path: "/doing-business-in-india/post-incorporation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-25" },

  // GCC Setup
  { path: "/gcc-setup-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-26" },

  // India Business Setup Cluster
  { path: "/india-business-setup/fdi-channels", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/india-business-setup/company-formation", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-08-25" },
  { path: "/india-business-setup/regulatory-compliance", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-20" },
  { path: "/india-business-setup/banking-taxation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-20" },
  { path: "/india-business-setup/timeline-resources", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-04" },

  // Regional India Entry Clusters
  { path: "/india-entry-for-us-companies", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },

  { path: "/india-entry-for-uk-companies", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },

  { path: "/india-entry-for-singapore-companies", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-australian-companies", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-german-companies", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-japan-companies", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-08-26" },
  { path: "/india-entry-for-china-companies", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-08-26" },

  // Service Pages
  { path: "/services/risk-management", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/services/transaction-advisory", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/services/training-workshops", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-05-04" },

  // Blog Hub + Articles
  { path: "/blog", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-05-04" },
  { path: "/blog/arbitration-enforcement-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/blog/construction-arbitration-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-24" },
  { path: "/blog/doing-business-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/blog/fdi-green-vs-brown-channel", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/blog/mail-box-dtaa-benefits", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/blog/tax-loan-waiver-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/blog/wholly-owned-subsidiary", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-04" },
  { path: "/blog/india-safe-harbour-rules-2026", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-07-30" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
