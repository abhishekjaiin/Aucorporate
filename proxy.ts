import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "@/lib/auth"
import { isSlugPublic } from "@/lib/public/insights"

// Next.js 16's Proxy convention (the renamed middleware.ts) always runs on
// the Node.js runtime now — no separate opt-in needed (an explicit
// `runtime = "nodejs"` export is in fact rejected at build time) — which
// is what makes the `pg`-backed check below possible at all.

// Guaranteed to match no real route anywhere in app/ (no catch-all exists
// at the app root) — rewriting here hands the request to Next's own
// default "no matching route" 404 pipeline, which independently renders
// app/not-found.tsx AND correctly sets a 404 status. That default
// pipeline is confirmed working correctly; the problem this file works
// around is specific to notFound() calls deep inside a page that has
// already started streaming a response (see the comment on
// handleInsightSlug below) — routing to a path with no match sidesteps
// that entirely instead of fighting it from inside the page.
const NOT_FOUND_REWRITE_PREFIX = "/__insights_not_found__"

/**
 * This site's root app/loading.tsx wraps every route in an automatic
 * Suspense boundary (confirmed load-bearing — removing it broke static
 * prerendering of /admin/login's useSearchParams() usage, so it cannot be
 * removed or altered). That boundary means Next streams the page shell
 * with a 200 status before a notFound() call deep in the page body
 * resolves — confirmed with a minimal, zero-logic reproduction containing
 * nothing but `notFound()` in a bare page component, so this is not
 * specific to the Insights feature's own code.
 *
 * The fix happens here, before any React rendering starts: look up
 * whether the slug is public, and if not, rewrite to a path with no
 * matching route at all, so Next's default (and already status-correct)
 * "no route matched" behavior handles it instead of the page's own
 * notFound() call ever running.
 */
async function handleInsightSlug(req: NextRequest): Promise<NextResponse | null> {
  const match = req.nextUrl.pathname.match(/^\/insights\/([^/]+)$/)
  if (!match) return null

  const slug = decodeURIComponent(match[1])
  const isPublic = await isSlugPublic(slug)
  if (isPublic) return null

  const notFoundUrl = new URL(`${NOT_FOUND_REWRITE_PREFIX}/${encodeURIComponent(slug)}`, req.url)
  return NextResponse.rewrite(notFoundUrl)
}

/**
 * IndexNow key verification file, served at /<INDEXNOW_KEY>.txt with the
 * key itself as the exact body, per the IndexNow protocol. The key lives
 * only in this Vercel project's INDEXNOW_KEY environment variable — never
 * committed to the repo or hardcoded here — so this is the only place
 * that needs it. Any other *.txt path (robots.txt, llms.txt, ...) simply
 * doesn't match and falls through to its own existing route unaffected.
 */
function handleIndexNowKeyFile(req: NextRequest): NextResponse | null {
  const key = process.env.INDEXNOW_KEY
  if (!key) return null
  if (req.nextUrl.pathname !== `/${key}.txt`) return null
  return new NextResponse(key, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}

/**
 * Server-side gate for every /admin/* route except the login page itself.
 * This is the actual authorization boundary — page-level checks are a UX
 * nicety, this is what makes unauthenticated access impossible.
 */
export default auth(async (req: NextRequest & { auth: unknown }) => {
  const { pathname } = req.nextUrl

  const indexNowResult = handleIndexNowKeyFile(req)
  if (indexNowResult) return indexNowResult

  if (pathname.startsWith("/insights/")) {
    const insightResult = await handleInsightSlug(req)
    if (insightResult) return insightResult
    return NextResponse.next()
  }

  if (!pathname.startsWith("/admin")) return NextResponse.next()
  if (pathname === "/admin/login") return NextResponse.next()

  if (!req.auth) {
    const loginUrl = new URL("/admin/login", req.url)
    loginUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/admin/:path*", "/insights/:slug", "/:file.txt"],
}
