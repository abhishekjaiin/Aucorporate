"use client"

import { openInquiryModal } from "@/lib/inquiry-modal"

/** Informational service-detail card with no page of its own to link to —
 *  clicking it opens the sitewide inquiry modal instead of sitting inert. */
export function ClickableInfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openInquiryModal}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          openInquiryModal()
        }
      }}
      className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col cursor-pointer"
    >
      <h3 className="font-semibold text-lg mb-3 text-[#081a42] leading-snug">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      <p className="mt-4 text-xs font-semibold text-gold-dark">Talk to an expert →</p>
    </div>
  )
}
