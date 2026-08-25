"use client"

import { useState } from "react"

const GOLD = "#facc15"

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{q}</span>
        <span className="text-2xl leading-none shrink-0" style={{ color: GOLD }}>{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-gray-600 mt-3 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div>
      {faqs.map((f) => (
        <FaqItem key={f.q} q={f.q} a={f.a} />
      ))}
    </div>
  )
}
