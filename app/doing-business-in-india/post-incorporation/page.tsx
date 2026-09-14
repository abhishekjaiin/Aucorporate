import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"

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
    title: "Waiting until cash has piled up to think about repatriation",
    desc: "Dividends, royalties, and management fees each carry different tax and transfer-pricing treatment, and the efficient route often depends on decisions made well before the money needs to move. Companies that wait until there's an obvious cash balance to ask how to get it home usually end up choosing whichever route is easiest to set up in a hurry, not the one that made sense from the start.",
  },
  {
    title: "Assuming private-company status means governance thresholds will never apply",
    desc: "The independent director, audit committee, company secretary, and secretarial audit requirements are triggered by paid-up capital, turnover, or borrowings — not by company type. A private subsidiary that raises a large funding round, takes on debt, or scales revenue can cross one of these thresholds well before anyone thinks to check it against the balance sheet.",
  },
]

const repatriationRoutes = [
  {
    title: "Dividends — the default route for ongoing profits",
    desc: "Dividends are the most commonly used repatriation route because they're freely remittable once tax is withheld. Since the Dividend Distribution Tax was abolished in 2020, dividends are taxed in the hands of the recipient shareholder rather than the company, and the applicable withholding rate depends on the tax treaty between India and the parent's home jurisdiction — which makes dividend timing a genuine planning decision, not a formality to handle whenever cash happens to be sitting in the account.",
  },
  {
    title: "Royalties and management fees — tied directly to transfer pricing",
    desc: "Paying the parent a royalty for IP use, or a fee for management or technical services, is a legitimate repatriation route, but every such payment is also a related-party transaction that has to be priced at arm's length and documented. This is usually where transfer pricing scrutiny concentrates, because the amount and structure of these payments are a recurring, deliberate decision rather than a one-off event like a dividend.",
  },
  {
    title: "Buyback and capital reduction — for returning capital, not profit",
    desc: "Share buybacks and capital reduction are the right tool when the goal is returning capital that's no longer needed for operations, rather than distributing ongoing profit. Both involve a separate compliance process under the Companies Act and carry their own tax treatment, so they tend to be a deliberate, one-time decision rather than a recurring repatriation channel.",
  },
]

const governanceMaturity = [
  {
    title: "Independent directors and an audit committee aren't automatic for a private subsidiary",
    desc: "Most foreign-owned Indian subsidiaries are private limited companies. Under Sections 149 and 177 of the Companies Act, 2013, independent director and audit committee requirements apply to listed and public companies, and to any company that crosses specific thresholds — paid-up share capital of ₹10 crore or more, turnover of ₹100 crore or more, or aggregate borrowings/deposits above ₹50 crore — or that becomes a deemed public company as a subsidiary of a public company. A private WOS below those thresholds isn't required to have either, though some choose to build the habit early anyway.",
  },
  {
    title: "A whole-time Company Secretary becomes mandatory at ₹10 crore paid-up capital",
    desc: "Rule 8A of the Companies (Appointment and Remuneration of Managerial Personnel) Rules requires every private company with paid-up share capital of ₹10 crore or more to appoint a whole-time Company Secretary. It's a threshold that a funded, scaling subsidiary can cross faster than founders expect — often without anyone flagging it until an annual filing surfaces the gap.",
  },
  {
    title: "Secretarial audit adds a second layer once borrowing or scale increases",
    desc: "Section 204 and Rule 9 add a secretarial audit requirement for public companies above ₹50 crore paid-up capital or ₹250 crore turnover — and, separately, for any company, public or private, with loans or borrowings from banks or public financial institutions of ₹100 crore or more. It's worth checking this against your actual balance sheet each year rather than assuming it doesn't apply because the entity is private.",
  },
  {
    title: "Build the habits before the thresholds force them",
    desc: "Regular board meetings, documented resolutions, clean minute books, and a formal related-party-transaction approval process cost little to build early and are materially harder to retrofit once a threshold is crossed and a filing deadline is already running. That's the practical case for governance discipline well before any of it is legally mandatory.",
  },
]

const postIncorporationFaqs = [
  {
    q: "Do we need independent directors on our India subsidiary's board?",
    a: "Only if you cross specific thresholds under the Companies Act, 2013 — paid-up share capital of ₹10 crore or more, turnover of ₹100 crore or more, borrowings above ₹50 crore, or being a deemed public company as a subsidiary of a public company. A private limited WOS below those thresholds isn't required to appoint independent directors or constitute an audit committee, though nothing prevents doing so voluntarily.",
  },
  {
    q: "When does transfer pricing documentation apply to our India subsidiary?",
    a: "From the first year international related-party transactions cross roughly ₹1 crore — there's no grace period for being newly incorporated. Once that threshold is crossed, Form 3CEB (certified by a chartered accountant) has to be filed with the income tax return, and the pricing of every related-party transaction — royalties, management fees, intercompany services — needs to be supportable at arm's length.",
  },
  {
    q: "What's the best way to repatriate profits from an India subsidiary to a foreign parent?",
    a: "There's no single best route — dividends, royalties/management fees, and buybacks each suit a different purpose (ongoing profit, IP/service payments, or returning capital) and carry different tax and transfer-pricing treatment. It's worth planning the route with your parent's tax advisor before cash builds up, not after.",
  },
  {
    q: "When should we move from outsourced accounting to an in-house finance team?",
    a: "When transaction volume, headcount, or regulatory complexity — multiple states, frequent RBI reporting, complex transfer pricing — justifies dedicated internal capacity. Most subsidiaries pass through an intermediate stage first: a local finance lead paired with an outsourced provider or a Virtual CFO, rather than jumping straight from fully outsourced to a full internal team.",
  },
  {
    q: "Does a private company in India ever need a secretarial audit?",
    a: "Yes, in one specific case: any company — public or private — with loans or borrowings from banks or public financial institutions of ₹100 crore or more must undergo a secretarial audit under Section 204, regardless of company type. Public companies also trigger it at ₹50 crore paid-up capital or ₹250 crore turnover.",
  },
  {
    q: "What compliance obligations from year one repeat every year after incorporation?",
    a: "The annual FLA return to RBI, the AOC-4 and MGT-7 filings with the Registrar of Companies, and the statutory audit all repeat annually for the life of the entity — see our regulatory compliance framework for the full filing calendar. This page focuses on the strategic decisions layered on top of that recurring baseline.",
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

      {/* ORIENTATION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-700 leading-relaxed">
            Once the certificate of incorporation is issued, the questions that matter change shape. Year one is mostly about standing the entity up and clearing its first round of statutory deadlines. From year two onward, the questions become strategic and recurring: how the finance function should evolve as headcount and transaction volume grow, how profits actually get back to the parent, when governance obligations that don&apos;t apply to a small private subsidiary start to apply as it scales, and which of the mistakes below tend to surface once the initial compliance push is behind you.
          </p>
        </div>
      </section>

      {/* FINANCE FUNCTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#081a42] mb-2">Building vs. Outsourcing Your Finance Function</h2>
          <p className="text-gray-600 mb-8">There's no fixed rule here — it's a scale decision that should track headcount, transaction volume, and regulatory complexity, not a default made at incorporation and never revisited.</p>
          <div className="grid gap-6">
            {financeFunction.map((f) => (
              <ClickableInfoCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* REPATRIATION STRATEGY */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#081a42] mb-2">Repatriation Strategy: Getting Profits Back to the Parent</h2>
          <p className="text-gray-600 mb-8">Dividends, royalties/management fees, and buybacks each suit a different purpose and carry different tax and transfer-pricing treatment — the right route is a planning decision, not a default.</p>
          <div className="grid gap-6">
            {repatriationRoutes.map((r) => (
              <ClickableInfoCard key={r.title} title={r.title} desc={r.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE MATURITY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#081a42] mb-2">Governance Maturity: What's Actually Mandatory vs. Good Practice</h2>
          <p className="text-gray-600 mb-8">Most foreign-owned subsidiaries are private companies, and several governance obligations that apply to listed and public companies only kick in for a private company once it crosses specific size thresholds — worth knowing precisely, not assuming either way.</p>
          <div className="grid gap-6">
            {governanceMaturity.map((g) => (
              <ClickableInfoCard key={g.title} title={g.title} desc={g.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* SECOND YEAR MISTAKES */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#081a42] mb-2">Common Second-Year Mistakes</h2>
          <p className="text-gray-600 mb-8">The mistakes that show up after the first year tend to be about momentum and drift, not a single bad decision.</p>
          <div className="grid gap-6">
            {secondYearMistakes.map((m) => (
              <ClickableInfoCard key={m.title} title={m.title} desc={m.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#081a42] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {postIncorporationFaqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-[#081a42]">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: postIncorporationFaqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

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
