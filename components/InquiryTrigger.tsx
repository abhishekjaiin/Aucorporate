"use client"

import { openInquiryModal } from "@/lib/inquiry-modal"

/** Drop-in replacement for an `<a href="#contact">`/`<Link href="#contact">`
 *  CTA: opens the sitewide inquiry modal in place instead of scrolling (or
 *  navigating) to a form elsewhere on the page. Takes no className default
 *  so callers can carry over their exact existing button styling unchanged. */
export function InquiryTrigger({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <button type="button" onClick={openInquiryModal} className={className}>
      {children}
    </button>
  )
}
