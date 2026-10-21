import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

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

/** "Which entity type is right for you?" picker. Each option is a native
 *  <details> element, so every recommendation is in the server-rendered HTML
 *  and the tool works without JavaScript. */
export function EntitySelectorTool() {
  return (
    <div className="rounded-2xl border-2 border-yellow-400 bg-white p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">Interactive Tool</span>
        <h3 className="mt-1 text-xl md:text-2xl font-bold text-[#081a42]">Which Entity Type Is Right for You?</h3>
        <p className="mt-2 text-sm text-gray-600">Select what your India operation is primarily there to do, and we&apos;ll point you to the right structure.</p>
      </div>

      <div className="space-y-3">
        {options.map((opt) => (
          <details key={opt.id} name="entity-selector" className="group rounded-xl border border-gray-200 transition open:border-yellow-400 open:bg-gray-50">
            <summary className="cursor-pointer list-none rounded-xl p-4 text-sm font-medium text-gray-700 hover:bg-yellow-50 [&::-webkit-details-marker]:hidden">
              {opt.question}
            </summary>
            <div className="px-4 pb-5">
              <div className="mb-3 flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-600" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Recommended structure</p>
                  <h4 className="text-lg font-bold text-[#081a42]">{opt.entity}</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">{opt.reasoning}</p>
              <div className="flex flex-wrap items-center gap-4">
                {opt.link && (
                  <Link href={opt.link.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-700 hover:underline">
                    {opt.link.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
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
