import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "@/lib/auth"
import { isSlugPublic } from "@/lib/public/blogs"

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
// handleBlogSlug below) — routing to a path with no match sidesteps
// that entirely instead of fighting it from inside the page.
const NOT_FOUND_REWRITE_PREFIX = "/__blog_not_found__"

/**
 * This site's root app/loading.tsx wraps every route in an automatic
 * Suspense boundary (confirmed load-bearing — removing it broke static
 * prerendering of /admin/login's useSearchParams() usage, so it cannot be
 * removed or altered). That boundary means Next streams the page shell
 * with a 200 status before a notFound() call deep in the page body
 * resolves — confirmed with a minimal, zero-logic reproduction containing
 * nothing but `notFound()` in a bare page component, so this is not
 * specific to the Blog feature's own code.
 *
 * The fix happens here, before any React rendering starts: look up
 * whether the slug is public, and if not, rewrite to a path with no
 * matching route at all, so Next's default (and already status-correct)
 * "no route matched" behavior handles it instead of the page's own
 * notFound() call ever running.
 */
const LEGACY_BLOG_SLUGS = new Set([
  "india-japan-bis-exemption-high-tech-investment",
  "india-safe-harbour-rules-2026",
  "construction-arbitration-india",
  "arbitration-enforcement-india",
  "doing-business-india",
  "fdi-green-vs-brown-channel",
  "wholly-owned-subsidiary",
  "mail-box-dtaa-benefits",
  "tax-loan-waiver-india",
  "best-state-to-register-company-in-india",
])

async function handleBlogSlug(req: NextRequest): Promise<NextResponse | null> {
  const match = req.nextUrl.pathname.match(/^\/blog\/([^/]+)$/)
  if (!match) return null

  const slug = decodeURIComponent(match[1])
  if (LEGACY_BLOG_SLUGS.has(slug)) return null

  const isPublic = await isSlugPublic(slug)
  if (isPublic) return null

  const notFoundUrl = new URL(`${NOT_FOUND_REWRITE_PREFIX}/${encodeURIComponent(slug)}`, req.url)
  return NextResponse.rewrite(notFoundUrl)
}
/**
 * Server-side gate for every /admin/* route except the login page itself.
 * This is the actual authorization boundary — page-level checks are a UX
 * nicety, this is what makes unauthenticated access impossible.
 */
export default auth(async (req: NextRequest & { auth: unknown }) => {
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/blog/")) {
    const blogResult = await handleBlogSlug(req)
    if (blogResult) return blogResult
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
  matcher: ["/admin/:path*", "/blog/:slug"],
}
