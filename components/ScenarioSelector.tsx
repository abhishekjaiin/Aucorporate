"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react"
import { decisionScenarios, type DecisionScenario } from "@/lib/decision-framework"

/** Shared "Which Situation Are You In?" decision framework, rendered identically
 *  on the OIDAR/GST compliance guide and the India-entry-for-SaaS-companies guide.
 *  Modeled on components/EntitySelectorTool.tsx's click-to-reveal pattern. */
export function ScenarioSelector() {
  const [selected, setSelected] = useState<DecisionScenario | null>(null)

  return (
    <div className="rounded-2xl border-2 border-yellow-400 bg-white p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">Interactive Tool</span>
        <h3 className="mt-1 text-xl md:text-2xl font-bold text-[#081a42]">Which Situation Are You In?</h3>
        <p className="mt-2 text-sm text-gray-600">
          Select the scenario that matches where you are today, and we&apos;ll point you to what applies.
        </p>
      </div>

      {!selected ? (
        <div className="grid gap-3 md:grid-cols-3">
          {decisionScenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(s)}
              className="text-left rounded-xl border border-gray-200 p-4 text-sm text-gray-700 transition hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md"
            >
              <span className="block text-xs font-semibold uppercase tracking-wider text-gold-dark mb-2">{s.name}</span>
              <span className="font-medium">{s.signal}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-xl bg-gray-100 p-6">
          <div className="mb-3 flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{selected.name}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 mb-4">{selected.consequence}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href={selected.link.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-700 hover:underline">
              {selected.link.label} <ArrowRight className="h-4 w-4" />
            </Link>
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
