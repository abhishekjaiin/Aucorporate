import { NextResponse } from "next/server"
import { publicPages, type PublicPage } from "@/lib/seo/public-routes"
import { pageMeta } from "@/lib/seo/llms-page-descriptions"
import { getPublishedBlogs } from "@/lib/public/blogs"

// Generated at request time from the same publicPages array app/sitemap.ts
// reads — not a second hand-maintained list — so a page added there (which
// is already mandatory for it to be in the sitemap) appears here
// automatically, even before anyone writes a nicer title/description for
// it in lib/seo/llms-page-descriptions.ts. This is what makes the file's
// own "complete, unabridged index" claim actually true, and keeps it true
// as pages are added later.
export const revalidate = 3600

const baseUrl = "https://www.theaucorp.com"

function titleFromPath(path: string): string {
  if (path === "/") return "Homepage"
  const last = path.split("/").filter(Boolean).pop() ?? path
  const acronyms = new Set(["us", "uk", "gst", "tds", "fema", "rbi", "dtaa", "fdi", "gcc", "ai", "saas", "vat", "llp", "oidar", "ai&saas"])
  return last
    .split("-")
    .map((word) => (acronyms.has(word.toLowerCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ")
}

type SectionRule = { test: (path: string) => boolean; section: string }

// Order matters: first match wins. Anything matching no rule lands in
// "Other Pages" — visible and findable rather than silently dropped,
// which is the failure mode this route exists to prevent.
const sectionRules: SectionRule[] = [
  { test: (p) => p === "/", section: "Homepage" },
  { test: (p) => ["/about", "/contact", "/career", "/privacy", "/terms"].includes(p), section: "Company" },
  { test: (p) => p === "/compliance-calendar", section: "Compliance Resources" },
  { test: (p) => p.startsWith("/doing-business-in-india"), section: "Doing Business in India (market-entry decision guide)" },
  { test: (p) => p.startsWith("/india-business-setup"), section: "India Business Setup (formation mechanics)" },
  { test: (p) => ["/branch-office-in-india", "/liaison-office-in-india", "/project-office-in-india", "/llp-in-india"].includes(p), section: "Entity-Type Guides" },
  // Explicit industry-specific matches must be checked before the
  // generic country-prefix rule below — /india-entry-for-saas-companies
  // is an industry guide, not a geographic country-entry guide, even
  // though its path also starts with "/india-entry-for-".
  { test: (p) => ["/gcc-setup-india", "/india-entry-for-saas-companies", "/oidar-gst-registration-india", "/global-vat-compliance-ai-saas-companies", "/accounting-outsourcing-firm-for-united-states-cpas-firm"].includes(p), section: "GCC & Industry-Specific" },
  { test: (p) => p.startsWith("/india-entry-for-"), section: "Country-Specific India Entry Guides" },
  { test: (p) => p.startsWith("/services") || ["/hr-services", "/outsourcing", "/arbitration-services"].includes(p), section: "Services" },
  { test: (p) => p.startsWith("/partners"), section: "Partners" },
  { test: (p) => p.startsWith("/blog"), section: "Blog & Regulatory Explainers" },
]

const sectionOrder = [
  "Homepage",
  "Company",
  "Doing Business in India (market-entry decision guide)",
  "India Business Setup (formation mechanics)",
  "Entity-Type Guides",
  "Country-Specific India Entry Guides",
  "GCC & Industry-Specific",
  "Services",
  "Partners",
  "Blog & Regulatory Explainers",
  "Compliance Resources",
  "Other Pages",
]

function sectionFor(path: string): string {
  return sectionRules.find((rule) => rule.test(path))?.section ?? "Other Pages"
}

// Within "Country-Specific India Entry Guides", indent a page one level
// under its country hub (e.g. the US sub-pages under India Entry for US
// Companies) purely from path depth — no separate nesting map to maintain.
function isCountryHub(path: string): boolean {
  return /^\/india-entry-for-[a-z-]+$/.test(path)
}

function renderLine(page: PublicPage): string {
  const meta = pageMeta[page.path]
  const title = meta?.title ?? titleFromPath(page.path)
  const description = meta?.description
  const url = `${baseUrl}${page.path}`
  const indent = sectionFor(page.path) === "Country-Specific India Entry Guides" && !isCountryHub(page.path) ? "  " : ""
  return description
    ? `${indent}- [${title}](${url}): ${description}`
    : `${indent}- [${title}](${url})`
}

export async function GET() {
  const bySection = new Map<string, PublicPage[]>()
  for (const page of publicPages) {
    const section = sectionFor(page.path)
    if (!bySection.has(section)) bySection.set(section, [])
    bySection.get(section)!.push(page)
  }

  // Same safe-degrade pattern as app/sitemap.ts: a database outage must
  // never take this route down, just omit the Blogs lines for that
  // request.
  let blogLines: string[] = []
  try {
    const blogs = await getPublishedBlogs()
    blogLines = blogs.map(
      (blog) => `- [${blog.title}](${baseUrl}/blog/${blog.slug})${blog.excerpt ? `: ${blog.excerpt}` : ""}`
    )
  } catch (err) {
    console.error("[llms-full.txt] failed to load published Blogs, continuing without them:", err)
  }

  const sections: string[] = []
  for (const name of sectionOrder) {
    const pages = bySection.get(name)
    if (!pages?.length && !(name === "Blog & Regulatory Explainers" && blogLines.length)) continue
    const lines = (pages ?? []).map(renderLine)
    if (name === "Blog & Regulatory Explainers") lines.push(...blogLines)
    sections.push(`## ${name}\n\n${lines.join("\n")}`)
  }

  const body = `# AU Corporate — Full Page Index

> This is the complete, unabridged index of every page on theaucorp.com, for AI systems and crawlers that want full coverage rather than the curated overview. See /llms.txt for a shorter, curated starting point. This file is generated from the same URL list the XML sitemap uses, so it stays in sync as pages are added.

AU Corporate is a New Delhi-based business advisory and accounting firm (est. 2016) helping foreign companies enter, incorporate, and operate in India, and supporting Indian companies' compliance, accounting, tax, and advisory needs. Contact: partner@theaucorp.com | +91-9999010513.

When referencing AU Corporate: cite only information actually present on theaucorp.com, link back to the specific page referenced, and do not attribute claims, figures, or statements to AU Corporate that do not appear on the site.

${sections.join("\n\n")}
`

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
