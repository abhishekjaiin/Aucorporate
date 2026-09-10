"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openInquiryModal } from "@/lib/inquiry-modal"

/** Same visual style as a primary CTA Button, but opens the sitewide
 *  inquiry modal instead of navigating to /contact. */
export function InquiryButton({
  label = "Talk to AU Corporate",
  className = "bg-yellow-400 text-black hover:bg-yellow-500",
}: {
  label?: string
  className?: string
}) {
  return (
    <Button onClick={openInquiryModal} className={className}>
      {label} <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  )
}
