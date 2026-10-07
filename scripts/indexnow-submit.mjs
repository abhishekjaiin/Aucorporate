#!/usr/bin/env node
// Submits changed/new URLs to IndexNow (Bing, and other participating
// engines) so they get crawled faster than waiting on normal discovery.
//
// The verification key lives in two places by design, per the IndexNow
// protocol: as a public static file at /<key>.txt (so engines can confirm
// whoever submits a URL actually controls the site) and in the
// INDEXNOW_KEY env var (server-side only — never imported by a "use
// client" component or shipped in a browser bundle), which this script
// reads so the key isn't duplicated as a literal in multiple source files.
//
// Usage:
//   node scripts/indexnow-submit.mjs https://www.theaucorp.com/a https://www.theaucorp.com/b
//   INDEXNOW_KEY=... node scripts/indexnow-submit.mjs ...

const KEY = process.env.INDEXNOW_KEY
const HOST = "www.theaucorp.com"
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const urls = process.argv.slice(2)

if (!KEY) {
  console.error("INDEXNOW_KEY is not set. Set it in the environment before running this script.")
  process.exit(1)
}

if (urls.length === 0) {
  console.error("Usage: node scripts/indexnow-submit.mjs <url1> <url2> ...")
  process.exit(1)
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
})

console.log(`IndexNow submission: ${res.status} ${res.statusText}`)
if (!res.ok) {
  console.error(await res.text())
  process.exit(1)
}
