#!/usr/bin/env node
// Runs after `next build` on Vercel (see vercel.json) and tells IndexNow
// (Bing, Yandex and the other participating engines; Bing also feeds
// ChatGPT search and Copilot) about every page this deploy adds or changes.
//
// "Changed" means: in the freshly built sitemap but not in the live one, or
// with a newer <lastmod> than the live one. The live sitemap is still the
// previous deployment while this runs, so the diff is exactly this deploy's
// changes, driven by the lastModified dates in lib/seo/public-routes.ts.
// Bump a page's lastModified there when its content materially changes.
//
// Only production builds submit. Any failure is logged and the script exits
// 0: a notification problem must never fail a deploy.

import { readFile } from "node:fs/promises"

const HOST = "www.theaucorp.com"
const SITE = `https://${HOST}`
const BUILT_SITEMAP = ".next/server/app/sitemap.xml.body"
const MAX_URLS = 10000 // IndexNow per-request limit

function parseSitemap(xml) {
  const entries = new Map()
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim()
    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? ""
    if (loc) entries.set(loc, lastmod)
  }
  return entries
}

async function main() {
  const dryRun = process.argv.includes("--dry-run")
  if (!dryRun && process.env.VERCEL_ENV !== "production") {
    console.log(`[indexnow] Skipping: not a production build (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unset"}).`)
    return
  }
  const key = process.env.INDEXNOW_KEY
  if (!key && !dryRun) {
    console.warn("[indexnow] Skipping: INDEXNOW_KEY is not set.")
    return
  }

  const built = parseSitemap(await readFile(BUILT_SITEMAP, "utf8"))

  let live = new Map()
  try {
    const res = await fetch(`${SITE}/sitemap.xml`, { headers: { "cache-control": "no-cache" } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    live = parseSitemap(await res.text())
  } catch (err) {
    // Without the live sitemap we can't tell what changed; submitting the
    // whole site on every deploy would look like spam, so do nothing.
    console.warn(`[indexnow] Skipping: could not read the live sitemap (${err.message}).`)
    return
  }

  const changed = [...built].filter(([loc, lastmod]) => !live.has(loc) || lastmod > live.get(loc)).map(([loc]) => loc)
  if (changed.length === 0) {
    console.log("[indexnow] No new or updated pages in this deploy.")
    return
  }
  console.log(`[indexnow] ${changed.length} new or updated page(s):\n  ${changed.join("\n  ")}`)
  if (dryRun) return

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList: changed.slice(0, MAX_URLS) }),
  })
  console.log(`[indexnow] Submission: ${res.status} ${res.statusText}`)
  if (!res.ok) console.warn(await res.text())
}

main().catch((err) => console.warn("[indexnow] Failed (deploy continues):", err))
