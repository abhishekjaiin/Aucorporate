"use client"

import { useState } from "react"
import { X, MessageSquareText } from "lucide-react"
import { Web3Form } from "@/components/Web3Form"

/**
 * Sitewide lead-generation sidebar — a persistent inquiry form docked to the
 * right edge that stays in view while scrolling. Only shown on large desktop
 * viewports (2xl+, ~1536px) where a reserved gutter (see app/layout.tsx's
 * `2xl:pr-[340px]` on <main>) guarantees it never overlaps page content, even
 * on wide sections that use max-w-7xl. Below 2xl, FloatingInquiryCTA's
 * button/modal (lg+) and mobile bar (<lg) remain the lead-gen entry point,
 * so there's never more than one lead-gen surface competing for attention
 * at a given viewport width.
 */
export function StickyInquirySidebar() {
  const [collapsed, setCollapsed] = useState(false)

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        aria-label="Open quick enquiry form"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-l-xl bg-[#081a42] px-2.5 py-4 text-white shadow-lg transition hover:bg-[#0d2a5c] 2xl:flex"
      >
        <MessageSquareText className="h-4 w-4 text-gold" aria-hidden="true" />
        <span className="text-[11px] font-semibold [writing-mode:vertical-rl] rotate-180">
          Quick Enquiry
        </span>
      </button>
    )
  }

  return (
    <aside
      aria-label="Quick enquiry"
      className="fixed right-4 top-28 z-40 hidden max-h-[calc(100vh-9rem)] w-[300px] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl 2xl:block"
    >
      <div className="flex items-start justify-between rounded-t-2xl bg-[#081a42] px-5 py-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">Talk to AU Corporate</span>
          <h3 className="mt-1 text-base font-bold text-white">Quick Enquiry</h3>
        </div>
        <button
          type="button"
          onClick={() => setCollapsed(true)}
          aria-label="Minimize enquiry form"
          className="shrink-0 rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <div className="p-4">
        <Web3Form compact />
      </div>
    </aside>
  )
}
