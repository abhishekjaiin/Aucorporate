"use client"

import { useState } from "react"

const GOLD = "var(--gold-dark)"

function FaqItem({ q, a, compact }: { q: string; a: string; compact?: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={compact ? "border-b border-gray-200 py-3.5" : "border-b border-gray-200 py-5"}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left gap-4"
        aria-expanded={open}
      >
        <span className={compact ? "text-sm font-semibold font-heading" : "font-semibold font-heading"}>{q}</span>
        <span className={compact ? "text-lg leading-none shrink-0 text-gold" : "text-2xl leading-none shrink-0 text-gold"}>{open ? "−" : "+"}</span>
      </button>
      {open && <p className={compact ? "text-gray-600 mt-2 text-xs leading-relaxed" : "text-gray-600 mt-3 text-sm leading-relaxed"}>{a}</p>}
    </div>
  )
}

export function FaqAccordion({ faqs, compact }: { faqs: { q: string; a: string }[]; compact?: boolean }) {
  return (
    <div>
      {faqs.map((f) => (
        <FaqItem key={f.q} q={f.q} a={f.a} compact={compact} />
      ))}
    </div>
  )
}
