import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { decisionScenarios } from "@/lib/decision-framework"

/** Shared "Which Situation Are You In?" decision framework, rendered identically
 *  on the OIDAR/GST compliance guide and the India-entry-for-SaaS-companies guide.
 *  Each scenario is a native <details> element, so every answer is in the
 *  server-rendered HTML and the tool works without JavaScript. */
export function ScenarioSelector() {
  return (
    <div className="rounded-2xl border-2 border-yellow-400 bg-white p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">Interactive Tool</span>
        <h3 className="mt-1 text-xl md:text-2xl font-bold text-[#081a42]">Which Situation Are You In?</h3>
        <p className="mt-2 text-sm text-gray-600">
          Select the scenario that matches where you are today, and we&apos;ll point you to what applies.
        </p>
      </div>

      <div className="space-y-3">
        {decisionScenarios.map((s) => (
          <details key={s.id} name="decision-scenario" className="group rounded-xl border border-gray-200 transition open:border-yellow-400 open:bg-gray-50">
            <summary className="cursor-pointer list-none p-4 text-sm text-gray-700 hover:bg-yellow-50 rounded-xl [&::-webkit-details-marker]:hidden">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gold-dark mb-1">{s.name}</span>
              <span className="font-medium">{s.signal}</span>
            </summary>
            <div className="px-4 pb-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
                <p className="text-sm leading-relaxed text-gray-600 mb-4">{s.consequence}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pl-8">
                <Link href={s.link.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-700 hover:underline">
                  {s.link.label} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact#inquiry-form" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#081a42] hover:underline">
                  Confirm this with our team <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
