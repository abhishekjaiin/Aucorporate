#!/usr/bin/env node
// Sitewide technical/on-page/schema audit.
//
// Reads the live sitemap.xml, fetches every route's rendered HTML, and checks:
//   - exactly one <h1> per page, no skipped heading levels
//   - <title> and meta description present and within safe SERP display length
//   - every application/ld+json block parses as valid JSON
//   - canonical URLs are present and do not point at another route
//   - no duplicate titles/descriptions across pages
//
// Usage:
//   node scripts/seo-audit.mjs [baseUrl]
//   baseUrl defaults to http://localhost:3000 — run `pnpm build && pnpm start`
//   (or `pnpm dev`) in another terminal first, or pass the production URL
//   directly, e.g. node scripts/seo-audit.mjs https://www.theaucorp.com
//
// Exit code is non-zero if any check fails, so this is safe to wire into a
// Routine/CI job that just needs a pass/fail signal.

const BASE = process.argv[2] || "http://localhost:3000"
const CANONICAL_BASE = process.env.SEO_CANONICAL_BASE || "https://www.theaucorp.com"

function normalizedUrl(value) {
  try {
    const url = new URL(value)
    const pathname = url.pathname.replace(/\/$/, "") || "/"
    return `${url.origin}${pathname}`
  } catch {
    return null
  }
}

async function getRoutes() {
  const res = await fetch(`${BASE}/sitemap.xml`)
  const xml = await res.text()
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  return locs.map((loc) => new URL(loc).pathname)
}

function extractHeadings(html) {
  const body = html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ")
  const matches = [...body.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)]
  return matches.map((m) => ({
    level: Number(m[1]),
    text: m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
  })).filter((h) => h.text)
}

function extractJsonLd(html) {
  const matches = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  return matches.map((m) => m[1])
}

async function main() {
  console.log(`Auditing ${BASE} ...\n`)
  const routes = await getRoutes()
  console.log(`Found ${routes.length} routes in sitemap.xml\n`)

  const results = []
  let jsonLdBlocks = 0
  let jsonLdInvalid = 0
  const typeCounts = {}

  for (const route of routes) {
    const res = await fetch(`${BASE}${route}`, { headers: { "User-Agent": "seo-audit-script" } })
    const html = await res.text()

    const headings = extractHeadings(html)
    const h1s = headings.filter((h) => h.level === 1)
    const titleMatch = html.match(/<title>([^<]*)<\/title>/)
    const descMatch = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/)
    const canonicalMatch =
      html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i) ||
      html.match(/<link[^>]*href="([^"]+)"[^>]*rel="canonical"/i)

    let runningMax = 0
    const skips = []
    for (const h of headings) {
      if (h.level > runningMax + 1 && runningMax !== 0) skips.push([runningMax, h.level, h.text])
      runningMax = Math.max(runningMax, h.level)
    }

    for (const block of extractJsonLd(html)) {
      jsonLdBlocks++
      try {
        const parsed = JSON.parse(block)
        const t = parsed["@type"] || "?"
        typeCounts[t] = (typeCounts[t] || 0) + 1
      } catch (e) {
        jsonLdInvalid++
        console.log(`  INVALID JSON-LD on ${route}: ${e.message}`)
      }
    }

    results.push({
      route,
      status: res.status,
      h1Count: h1s.length,
      title: titleMatch?.[1] ?? null,
      desc: descMatch?.[1] ?? null,
      canonical: canonicalMatch?.[1] ?? null,
      skips,
    })
  }

  const noH1 = results.filter((r) => r.h1Count === 0)
  const multiH1 = results.filter((r) => r.h1Count > 1)
  const noTitle = results.filter((r) => !r.title)
  const noDesc = results.filter((r) => !r.desc)
  const badTitleLen = results.filter((r) => r.title && (r.title.length < 10 || r.title.length > 65))
  const badDescLen = results.filter((r) => r.desc && (r.desc.length < 50 || r.desc.length > 165))
  const skipIssues = results.filter((r) => r.skips.length)
  const badStatus = results.filter((r) => r.status !== 200)
  const missingCanonical = results.filter((r) => !r.canonical)
  const wrongCanonical = results.filter((r) => {
    if (!r.canonical) return false
    const expected = `${CANONICAL_BASE}${r.route === "/" ? "" : r.route}`
    return normalizedUrl(r.canonical) !== normalizedUrl(expected)
  })

  const titleCounts = {}
  const descCounts = {}
  for (const r of results) {
    if (r.title) titleCounts[r.title] = (titleCounts[r.title] || 0) + 1
    if (r.desc) descCounts[r.desc] = (descCounts[r.desc] || 0) + 1
  }
  const dupTitles = Object.entries(titleCounts).filter(([, c]) => c > 1)
  const dupDescs = Object.entries(descCounts).filter(([, c]) => c > 1)

  const section = (label, items, render = (r) => r.route) => {
    console.log(`=== ${label} (${items.length}) ===`)
    for (const item of items) console.log(`  ${render(item)}`)
    console.log()
  }

  section("NON-200 STATUS", badStatus, (r) => `${r.route} -> ${r.status}`)
  section("NO H1", noH1)
  section("MULTIPLE H1", multiH1)
  section("NO TITLE", noTitle)
  section("NO META DESCRIPTION", noDesc)
  section("MISSING CANONICAL (warning)", missingCanonical)
  section("CANONICAL DOES NOT MATCH ROUTE", wrongCanonical, (r) => `${r.route} -> ${r.canonical}`)
  section("TITLE LENGTH OUT OF RANGE (<10 or >65 chars)", badTitleLen, (r) => `${r.route} (${r.title.length}) ${r.title}`)
  section("META DESC LENGTH OUT OF RANGE (<50 or >165 chars)", badDescLen, (r) => `${r.route} (${r.desc.length})`)
  section("HEADING LEVEL SKIPS", skipIssues, (r) => `${r.route} ${JSON.stringify(r.skips)}`)
  section("DUPLICATE TITLES", dupTitles, ([t, c]) => `[${c}x] ${t}`)
  section("DUPLICATE META DESCRIPTIONS", dupDescs, ([d, c]) => `[${c}x] ${d.slice(0, 80)}...`)

  console.log(`JSON-LD: ${jsonLdBlocks} blocks checked, ${jsonLdInvalid} invalid`)
  console.log("Schema type distribution:")
  for (const [t, c] of Object.entries(typeCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(c).padStart(3)}  ${t}`)
  }

  const failed = badStatus.length || noH1.length || multiH1.length || noTitle.length || noDesc.length || wrongCanonical.length || jsonLdInvalid
  if (failed) {
    console.log("\nFAILED — see issues above.")
    process.exit(1)
  }
  console.log("\nPASSED — no critical issues.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
