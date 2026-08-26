import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"

const financeFunction = [
  {
    title: "Outsource everything (typical for year one)",
    desc: "Most newly-incorporated subsidiaries outsource accounting, payroll, and compliance filings to a local firm rather than hiring an in-house finance team for a headcount of a handful of people — the fixed cost of an internal function isn't justified yet, and outsourced providers already know the filing calendar.",
  },
  {
    title: "Hybrid — a local finance lead plus outsourced execution",
    desc: "As headcount and transaction volume grow, many subsidiaries hire one local finance/ops lead who owns the relationship with an outsourced accounting and compliance provider, rather than building a full internal team — this is usually the right stage to add a Virtual CFO function rather than a full-time hire.",
  },
  {
    title: "Full in-house finance team",
    desc: "Makes sense once transaction volume, headcount, or regulatory complexity (multiple states, complex transfer pricing, frequent RBI reporting) justifies dedicated internal capacity — this is a scale decision, not a default to reach for immediately after incorporation.",
  },
]

const secondYearMistakes = [
  {
    title: "Treating year-one compliance as \"done\"",
    desc: "The FEMA, RBI, and RoC filing obligations that started at incorporation don't taper off — the annual FLA return, AOC-4/MGT-7 filings, and statutory audit repeat every year for the life of the entity. Companies that treat the first year's filings as a one-time project rather than an ongoing rhythm are the ones that miss a deadline in year two.",
  },
  {
    title: "Not revisiting entity structure as operations grow",
    desc: "The structure that made sense at incorporation — a lean WOS with a single resident director, a narrow initial share capital — doesn't automatically stay right as headcount, revenue, or related-party transaction volume with the parent grows. Transfer pricing exposure in particular tends to appear quietly as intercompany transactions scale, not as a single dramatic event.",
  },
  {
    title: "Under-investing in governance before it's forced",
    desc: "Independent directors, an audit committee, and a company secretary become mandatory once a company crosses certain size thresholds under the Companies Act — building the governance habits (regular board meetings, documented resolutions, clean minute books) before they're legally required is materially easier than retrofitting them under a compliance deadline.",
  },
]

export default function PostIncorporationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4"><Breadcrumb items={[{ label: "Doing Business in India", href: "/doing-business-in-india" }, { label: "Life After Incorporation" }]} /></div>

      {/* HERO */}
      <section className="bg-[#081a42] text-white py-20 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Life After Incorporation: Strategic Priorities as You Scale
          </h1>
          <p className="max-w-3xl mx-auto text-white/80">
            Incorporation is the start of an ongoing set of obligations, not a project with an end date. This page is about the strategic decisions that follow — how your finance function should evolve, when governance needs to mature, and the mistakes that tend to show up in year two. For the specific compliance checklist and filing deadlines themselves, see our{" "}
            <Link href="/india-business-setup/company-formation" className="underline hover:text-white/90">
              company registration guide&apos;s compliance roadmap
            </Link>{" "}
            and our{" "}
            <Link href="/india-business-setup/regulatory-compliance" className="underline hover:text-white/90">
              full regulatory compliance framework
            </Link>.
          </p>
        </div>
      </section>

      {/* FINANCE FUNCTION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#081a42] mb-2">Building vs. Outsourcing Your Finance Function</h2>
          <p className="text-gray-600 mb-8">There's no fixed rule here — it's a scale decision that should track headcount, transaction volume, and regulatory complexity, not a default made at incorporation and never revisited.</p>
          <div className="grid gap-6">
            {financeFunction.map((f) => (
              <div key={f.title} className="border rounded-xl p-6 hover:shadow-md transition">
                <h3 className="font-semibold mb-2 text-[#081a42]">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND YEAR MISTAKES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#081a42] mb-2">Common Second-Year Mistakes</h2>
          <p className="text-gray-600 mb-8">The mistakes that show up after the first year tend to be about momentum and drift, not a single bad decision.</p>
          <div className="grid gap-6">
            {secondYearMistakes.map((m) => (
              <div key={m.title} className="border rounded-xl p-6 bg-white hover:shadow-md transition">
                <h3 className="font-semibold mb-2 text-[#081a42]">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#081a42]">
          Stay Compliant. Scale Confidently.
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We manage your ongoing compliance and finance function so you can focus on growing your business in India.
        </p>
        <Link href="/contact" className="inline-block bg-[#081a42] text-white px-6 py-3 rounded-lg hover:bg-[#0a2456] transition">
          Talk to Experts
        </Link>
      </section>
    </div>
  )
}
