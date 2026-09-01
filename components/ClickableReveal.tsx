"use client"

import { Reveal } from "@/components/Reveal"
import { openInquiryModal } from "@/lib/inquiry-modal"

/** Same fade-in wrapper as Reveal, but the whole element opens the sitewide
 *  inquiry modal on click — for content cards with no page of their own to
 *  link to. Kept separate from Reveal itself since Reveal is reused sitewide
 *  for many non-interactive purposes. */
export function ClickableReveal({
  children,
  className,
  delay,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <Reveal className={className} delay={delay} onClick={openInquiryModal}>
      {children}
    </Reveal>
  )
}
