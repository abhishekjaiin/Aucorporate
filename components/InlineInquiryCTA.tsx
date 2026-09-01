"use client"

import { openInquiryModal } from "@/lib/inquiry-modal"

/** Small text-style CTA for content already wrapped in a semantic element
 *  (e.g. <section>) where the whole block shouldn't become a giant button —
 *  opens the sitewide inquiry modal on click. */
export function InlineInquiryCTA({ label = "Talk to an expert about this" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={openInquiryModal}
      className="mt-2 inline-block text-sm font-semibold text-gold-dark hover:underline"
    >
      {label} →
    </button>
  )
}
