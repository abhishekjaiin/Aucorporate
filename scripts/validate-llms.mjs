#!/usr/bin/env node
// Drift check for llms.txt / llms-full.txt against the live sitemap.
//
// llms-full.txt is generated at request time from the same publicPages
// array app/sitemap.ts reads (see lib/seo/public-routes.ts), so it cannot
// drift on its own — but this script still verifies that in practice, and
// separately checks llms.txt (the hand-curated overview, which CAN drift
// since it's deliberately not auto-generated) for two failure modes:
//   1. A link in llms.txt that no longer resolves to a real sitemap URL
//      (stale/typo'd URL).
//   2. An important page (the MUST_INCLUDE list below) that isn't linked
//      anywhere in llms.txt (coverage regression).
//
// Usage:
//   node scripts/validate-llms.mjs [baseUrl]
//   baseUrl defaults to http://localhost:3000 — run `pnpm build && pnpm start`
//   (or `pnpm dev`) in another terminal first, or pass the production URL
//   directly, e.g. node scripts/validate-llms.mjs https://www.theaucorp.com
//
// Exit code is non-zero if any check fails, so this is safe to wire into a
// Routine/CI job that just needs a pass/fail signal.

const BASE = process.argv[2] || "http://localhost:3000"

// Pages important enough that llms.txt (the curated file) must link to
// them directly, not only via llms-full.txt. Update this list if the
// site's priority pages change.
const MUST_INCLUDE_IN_LLMS_TXT = [
  "/",
  "/doing-business-in-india",
  "/india-business-setup",
  "/compliance-calendar",
  "/india-entry-for-us-companies",
  "/india-entry-for-us-companies/register-company-in-india-from-usa",
  "/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us",
  "/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us",
  "/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india",
  "/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary",
  "/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary",
  "/india-entry-for-us-companies/permanent-establishment-risk-india",
  "/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax",
  "/india-entry-for-us-companies/annual-compliance-calendar",
  "/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation",
  "/blog",
]

// Utility/meta files that are legitimately cross-referenced from llms.txt
// or llms-full.txt but are never sitemap content pages in their own right.
const NON_CONTENT_PATHS = new Set(["/llms.txt", "/llms-full.txt", "/sitemap.xml", "/robots.txt"])

function extractUrlPaths(text) {
  const matches = [...text.matchAll(/https:\/\/www\.theaucorp\.com(\/[^\s)]*)?/g)]
  const paths = matches.map((m) => (m[1] || "/").replace(/\/$/, "") || "/")
  return new Set(paths.filter((p) => !NON_CONTENT_PATHS.has(p)))
}

async function main() {
  const errors = []

  const sitemapRes = await fetch(`${BASE}/sitemap.xml`)
  const sitemapXml = await sitemapRes.text()
  const sitemapLocs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const sitemapPaths = new Set(
    sitemapLocs.map((loc) => new URL(loc).pathname.replace(/\/$/, "") || "/")
  )
  console.log(`Sitemap: ${sitemapPaths.size} URLs`)

  const llmsRes = await fetch(`${BASE}/llms.txt`)
  const llmsText = await llmsRes.text()
  const llmsPaths = extractUrlPaths(llmsText)
  console.log(`llms.txt: ${llmsPaths.size} linked URLs`)

  const llmsFullRes = await fetch(`${BASE}/llms-full.txt`)
  const llmsFullText = await llmsFullRes.text()
  const llmsFullPaths = extractUrlPaths(llmsFullText)
  console.log(`llms-full.txt: ${llmsFullPaths.size} linked URLs`)

  // Check 1: every llms.txt link resolves to a real sitemap URL.
  for (const path of llmsPaths) {
    if (!sitemapPaths.has(path)) {
      errors.push(`llms.txt links to ${path}, which is not in sitemap.xml (stale or invalid URL)`)
    }
  }

  // Check 2: every llms-full.txt link resolves to a real sitemap URL.
  for (const path of llmsFullPaths) {
    if (!sitemapPaths.has(path)) {
      errors.push(`llms-full.txt links to ${path}, which is not in sitemap.xml (stale or invalid URL)`)
    }
  }

  // Check 3: every sitemap URL is represented in llms-full.txt. This is
  // the main drift check — if this ever fails, the shared publicPages
  // array and the route handler have gone out of sync somehow (expected
  // to never happen in practice, since both read the same array; CMS Blog
  // article URLs are database-driven and intentionally excluded from this
  // check since they aren't in publicPages either).
  for (const path of sitemapPaths) {
    if (path.startsWith("/blog/")) continue
    if (!llmsFullPaths.has(path)) {
      errors.push(`sitemap.xml has ${path}, but llms-full.txt does not link to it`)
    }
  }

  // Check 4: the must-include list is actually linked from llms.txt.
  for (const path of MUST_INCLUDE_IN_LLMS_TXT) {
    if (!llmsPaths.has(path)) {
      errors.push(`llms.txt is missing a required link to ${path}`)
    }
  }

  if (errors.length) {
    console.error(`\n${errors.length} issue(s) found:`)
    for (const e of errors) console.error(`  - ${e}`)
    process.exit(1)
  }

  console.log("\nAll checks passed.")
}

main()
