// IndexNow notification helper — https://www.indexnow.org/documentation
//
// Submits one or more changed URLs to the IndexNow API so Bing (and other
// participating search engines) can re-crawl them promptly, instead of
// waiting for their normal crawl schedule. This does NOT replace the
// sitemap and does NOT affect rankings or backlinks — it only speeds up
// discovery of a genuine content change.
//
// INDEXNOW_KEY is a Vercel project environment variable, never committed
// to the repo. The matching key file is served at /<INDEXNOW_KEY>.txt by
// proxy.ts, which reads the same environment variable at request time.
//
// Callers are expected to invoke this only on an actual publish, material
// update, or removal of a specific URL — never on a schedule, and never
// for the whole site at once. A missing key or a failed request is
// swallowed (logged, not thrown): a notification failure must never block
// the content action that triggered it.

const baseUrl = "https://www.theaucorp.com"

export async function notifyIndexNow(paths: string[]): Promise<void> {
  const key = process.env.INDEXNOW_KEY
  if (!key) {
    console.warn("[indexnow] INDEXNOW_KEY is not set — skipping notification for", paths)
    return
  }
  if (paths.length === 0) return

  const urlList = paths.map((path) => `${baseUrl}${path}`)

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "www.theaucorp.com",
        key,
        keyLocation: `${baseUrl}/${key}.txt`,
        urlList,
      }),
    })
    if (!res.ok) {
      console.error(`[indexnow] submission failed with status ${res.status} for`, urlList)
    }
  } catch (err) {
    console.error("[indexnow] submission request failed:", err)
  }
}
