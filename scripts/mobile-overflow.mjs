#!/usr/bin/env node
// Sweeps every route in sitemap.xml at common mobile viewports, checking for
// horizontal overflow (the most common mobile layout regression on this
// site — a fixed-width element or un-wrapped flex row pushing past the
// screen edge) and any console errors.
//
// Requires Playwright (not a project dependency — this is a manual/CI audit
// tool, not something the live site needs). If it's not already available:
//   npx playwright install chromium
// then run with plain `node`, or point PLAYWRIGHT_PKG at wherever the
// `playwright` package actually lives (e.g. a global install) via NODE_PATH.
//
// Usage:
//   node scripts/mobile-overflow.mjs [baseUrl]
//   baseUrl defaults to http://localhost:3000

import { createRequire } from "node:module"

const BASE = process.argv[2] || "http://localhost:3000"

const VIEWPORTS = [
  { name: "iPhone SE", width: 375, height: 667 },
  { name: "iPhone 14", width: 390, height: 844 },
  { name: "iPad Mini (portrait)", width: 768, height: 1024 },
]

async function getRoutes() {
  const res = await fetch(`${BASE}/sitemap.xml`)
  const xml = await res.text()
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  return locs.map((loc) => new URL(loc).pathname)
}

async function main() {
  let chromium
  try {
    // createRequire (not a bare `import()`) so NODE_PATH-based resolution
    // works for a Playwright install that lives outside this project's own
    // node_modules — e.g. a global install in a CI/session sandbox.
    const require = createRequire(import.meta.url)
    ;({ chromium } = require("playwright"))
  } catch {
    console.error(
      "Playwright isn't installed. Run `npx playwright install chromium` " +
        "(or point NODE_PATH at a global install) and try again."
    )
    process.exit(1)
  }

  const routes = await getRoutes()
  console.log(`Sweeping ${routes.length} routes x ${VIEWPORTS.length} viewports against ${BASE}\n`)

  const browser = await chromium.launch()
  const issues = []

  for (const route of routes) {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } })
      const consoleErrors = []
      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text())
      })

      try {
        await page.goto(`${BASE}${route}`, { waitUntil: "networkidle", timeout: 30000 })
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth
        )
        if (overflow > 0) {
          issues.push({ route, viewport: vp.name, overflow })
          console.log(`  OVERFLOW  ${route} @ ${vp.name} (${vp.width}px): ${overflow}px`)
        }
        // Sandbox/CI network restrictions produce ERR_TUNNEL_CONNECTION_FAILED
        // noise unrelated to the page itself — filter those out here so real
        // console errors (a broken import, a runtime exception) still surface.
        const realErrors = consoleErrors.filter((e) => !e.includes("ERR_TUNNEL_CONNECTION_FAILED"))
        if (realErrors.length) {
          console.log(`  CONSOLE ERRORS  ${route} @ ${vp.name}:`)
          for (const e of realErrors) console.log(`    ${e}`)
        }
      } catch (err) {
        console.log(`  FAILED TO LOAD  ${route} @ ${vp.name}: ${err.message}`)
      } finally {
        await page.close()
      }
    }
  }

  await browser.close()

  console.log(`\n${issues.length} overflow issue(s) found.`)
  if (issues.length) process.exit(1)
  console.log("PASSED — no horizontal overflow at any tested viewport.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
