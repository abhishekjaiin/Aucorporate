"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react"

type Option = {
  id: string
  question: string
  entity: string
  reasoning: string
  link?: { href: string; label: string }
}

const options: Option[] = [
  {
    id: "operate",
    question: "Operate, invoice, hire staff and hold assets in India in our own name",
    entity: "Private Limited Company (Wholly Owned Subsidiary)",
    reasoning:
      "This is the default vehicle for a foreign parent that wants full operating flexibility — a separate legal entity with limited liability, no restriction on the activities it can carry out, and 100% ownership retained by the parent.",
    link: { href: "/blog/wholly-owned-subsidiary", label: "Read the full WOS incorporation guide" },
  },
  {
    id: "test",
    question: "Test the market or liaise with local partners — no India-side revenue",
    entity: "Liaison Office",
    reasoning:
      "A representative, non-revenue-generating presence used purely for market research or coordination with Indian counterparts. It carries far lighter compliance than an operating entity, but cannot invoice or generate revenue in India.",
  },
  {
    id: "project",
    question: "Execute a single, time-limited contract or project",
    entity: "Project Office",
    reasoning:
      "A temporary presence set up specifically to execute a defined contract or project in India, rather than an ongoing commercial operation.",
  },
  {
    id: "branch",
    question: "Operate with a narrower, defined purpose — parent bears the liability",
    entity: "Branch Office",
    reasoning:
      "More operational latitude than a Liaison Office, but still legally the foreign company itself rather than an independent Indian entity — permitted only for specified activities and subject to RBI approval.",
  },
  {
    id: "jv",
    question: "Co-own the entity with a local Indian partner",
    entity: "Joint Venture",
    reasoning:
      "Typically structured as a Private Limited Company under a shareholders' agreement with the local partner, combining foreign capital/technology with local market knowledge and relationships.",
  },
]

export function EntitySelectorTool() {
  const [selected, setSelected] = useState<Option | null>(null)

  return (
    <div className="rounded-2xl border-2 border-yellow-400 bg-white p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold">Interactive Tool</span>
        <h3 className="mt-1 text-xl md:text-2xl font-bold text-[#081a42]">Which Entity Type Is Right for You?</h3>
        <p className="mt-2 text-sm text-gray-600">Select what your India operation is primarily there to do, and we&apos;ll point you to the right structure.</p>
      </div>

      {!selected ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt)}
              className="text-left rounded-xl border border-gray-200 p-4 text-sm font-medium text-gray-700 transition hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md"
            >
              {opt.question}
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-xl bg-gray-50 p-6">
          <div className="mb-3 flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Recommended structure</p>
              <h4 className="text-lg font-bold text-[#081a42]">{selected.entity}</h4>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 mb-4">{selected.reasoning}</p>
          <div className="flex flex-wrap items-center gap-4">
            {selected.link && (
              <Link href={selected.link.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-700 hover:underline">
                {selected.link.label} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            <Link href="/contact#inquiry-form" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#081a42] hover:underline">
              Confirm this with our team <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setSelected(null)}
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-600"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Start over
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
