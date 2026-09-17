"use client"

import { useState } from "react"
import { X, MessageSquareText } from "lucide-react"
import { Web3Form } from "@/components/Web3Form"

/**
 * Sitewide lead-generation tab — a slim "Quick Enquiry" trigger docked to the
 * right edge on large desktop viewports (2xl+, ~1536px), replacing
 * FloatingInquiryCTA's role at that breakpoint. Starts collapsed: it never
 * reserves page width or opens itself, and only expands into a form when
 * clicked, as a floating overlay on top of whatever's underneath — so it
 * never shrinks or reflows page content. Below 2xl, FloatingInquiryCTA's
 * button/modal (lg+) and mobile bar (<lg) remain the lead-gen entry point.
 *
 * Both the tab and the panel stay mounted and cross-fade/slide via CSS
 * transitions rather than swapping in an out abruptly, so opening/closing
 * reads as one continuous motion instead of a jarring pop.
 */
export function StickyInquirySidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open quick enquiry form"
        className={`fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-l-xl bg-[#081a42] px-2.5 py-4 text-white shadow-lg transition-all duration-300 ease-out hover:bg-[#0d2a5c] hover:px-3 2xl:flex ${
          open ? "pointer-events-none translate-x-8 opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <MessageSquareText className="h-4 w-4 text-gold" aria-hidden="true" />
        <span className="text-[11px] font-semibold [writing-mode:vertical-rl] rotate-180">
          Quick Enquiry
        </span>
      </button>

      <aside
        aria-label="Quick enquiry"
        aria-hidden={!open}
        className={`fixed right-4 top-28 z-40 hidden max-h-[calc(100vh-9rem)] w-[300px] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl transition-all duration-300 ease-out 2xl:block ${
          open ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between rounded-t-2xl bg-[#081a42] px-5 py-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">Talk to AU Corporate</span>
            <h3 className="mt-1 text-base font-bold text-white">Quick Enquiry</h3>
            <p className="mt-1 text-xs text-white/60">We&apos;ll get back to you within 24 hours.</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close enquiry form"
            className="shrink-0 rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="p-5">
          <Web3Form compact />
        </div>
      </aside>
    </>
  )
}
