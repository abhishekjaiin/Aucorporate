"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

/**
 * Fades and lifts the page content in on every client-side navigation
 * (navbar, in-page links, back/forward), so a new page visibly "arrives".
 *
 * Runs via the Web Animations API on a pathname change rather than by
 * re-keying the subtree: nothing remounts, so nested layouts keep their
 * state, and it works in every browser (unlike the View Transitions API).
 * The first load is not animated, so content and LCP are never delayed,
 * and users who prefer reduced motion get no animation at all. Hash links
 * and search-param changes don't change the pathname, so they don't animate.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    ref.current?.animate(
      [
        { opacity: 0, transform: "translateY(16px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      // No fill: once finished, the transform is gone, so it never creates a
      // containing block for fixed-position elements (modals) inside the page.
      { duration: 400, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    )
  }, [pathname])

  return <div ref={ref}>{children}</div>
}
