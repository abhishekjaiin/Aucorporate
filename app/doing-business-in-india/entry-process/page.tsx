import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableReveal } from "@/components/ClickableReveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { HeroBackground } from "@/components/HeroBackground"

const entryRoutes = [
  {
    title: "Wholly Owned Subsidiary",
    desc: "The default route once India is a committed market, not a test. Gives full operating and pricing control, lets you contract and invoice directly with Indian customers, and accesses the Automatic FDI route in most sectors — at the cost of taking on incorporation and ongoing RoC/FEMA compliance from day one. Typical path: 4-6 weeks to incorporate under the Automatic Route, 8-12 weeks where Government Route approval applies.",
  },
  {
    title: "Joint Venture with an Indian Partner",
    desc: "Pairs your capital and product with a local partner's market access, distribution network, and regulatory familiarity. Often the only practical route in sectors where the Automatic Route caps foreign ownership below 100% (multi-brand retail, defence beyond 74%, certain media). Trade-off is shared control and the extra time needed to negotiate and document the shareholder agreement before incorporation even begins.",
  },
  {
    title: "Distributor or Reseller Partnership",
    desc: "The lowest-commitment way to test India demand — you sell through an existing India-based partner instead of holding a local entity or licence yourself. Fastest to start and requires no FDI filing at all, but you get materially less control over pricing, customer relationships, and brand experience, and no direct India-side legal presence to build on later.",
  },
  {
    title: "Employer of Record (EOR)",
    desc: "Puts a small team on the ground in India — often the fastest way to validate a hiring need or run early business development — without incorporating an entity at all. Works well for a handful of people; it stops working once you need to invoice Indian customers directly, hold assets locally, or scale headcount meaningfully, at which point it becomes a bridge to incorporation rather than a standalone strategy.",
  },
]

const entryRisks = [
  {
    title: "Regulatory Complexity",
    desc: "FEMA, RBI, MCA, and sector-specific approvals rarely move in isolation — a single entry decision (route to market, entity type, sector) can trigger obligations across all three simultaneously, and missing one rarely surfaces until a filing deadline or a bank KYC check catches it.",
  },
  {
    title: "Tax Exposure",
    desc: "Improper structuring — an unclear transfer pricing policy with the parent, the wrong DTAA position, or a permanent establishment risk from an EOR or liaison arrangement that drifts into commercial activity — can create double taxation or unplanned Indian tax liability well before the business is generating meaningful India revenue.",
  },
  {
    title: "Compliance Burden",
    desc: "Statutory audit, RoC annual filings, GST returns, and the Annual FLA return for FDI-funded entities apply every year the entity exists, independent of whether the India business is actively trading — a common surprise for companies that budget for entry but not for the compliance rhythm that follows.",
  },
  {
    title: "Repatriation & Exit Planning",
    desc: "How profits, royalties, or capital eventually flow back to the parent — and how the entity could be wound down if the India strategy changes — are easier questions to answer before incorporation than after. Retrofitting a repatriation or exit structure onto an entity that's already operating is materially more expensive than planning for it upfront.",
  },
  {
    title: "Talent & Operational Risk",
    desc: "Sourcing a resident director, building an initial team, and standing up basic HR/payroll infrastructure are often underestimated relative to the regulatory steps — and an entity that's legally incorporated but operationally unstaffed doesn't actually get a business running in India.",
  },
]

const entryFaqs = [
  {
    q: "What's the best way to enter the Indian market — subsidiary, JV, distributor, or EOR?",
    a: "It depends on how committed and validated the opportunity already is. A distributor or EOR suits testing demand or validating a hiring need with minimal commitment; a joint venture makes sense where a local partner's market access matters or the sector caps foreign ownership below 100%; a wholly owned subsidiary is the right call once you have a signed customer, a committed local team, or a genuine need to contract and invoice directly in India. See our guide on whether and when to incorporate for the timing decision in more detail.",
  },
  {
    q: "Do I need an Indian partner to enter the Indian market?",
    a: "No — most sectors permit 100% foreign ownership under the Automatic FDI route, so a wholly owned subsidiary is available without any Indian partner. A joint venture becomes necessary mainly where sector-specific FDI caps require it (multi-brand retail, defence beyond 74%, certain media categories), or where a company chooses one deliberately for the partner's local market access rather than because regulation requires it.",
  },
  {
    q: "Can I test the Indian market before committing to incorporation?",
    a: "Yes — a distributor or reseller partnership requires no entity or FDI filing at all, and an Employer of Record lets you hire a small local team without incorporating. Both work well for validating demand or a hiring need before committing to the compliance overhead of a subsidiary, though neither lets you contract directly with Indian customers or hold assets locally.",
  },
  {
    q: "How long does India market entry actually take?",
    a: "Once you've chosen a route, incorporation itself typically clears in 4-6 weeks under the Automatic FDI route, or 8-12 weeks where Government Route approval applies, with the full path to a banked, operational entity generally running 8-12 weeks end to end. A distributor partnership or EOR arrangement can be live in days to a few weeks, since neither requires entity registration. Our timeline and budget breakdown covers the phase-by-phase detail.",
  },
  {
    q: "What is the difference between the Automatic Route and Government Route for FDI?",
    a: "Under the Automatic Route, you can make the investment first and report it to RBI afterwards — no prior approval needed, and incorporation-linked investments typically clear in 4-6 weeks. Under the Government Route, DPIIT (and, where relevant, the sector ministry) must approve the investment before it's made, which typically takes 8-12 weeks. Which route applies is determined by sector, not deal size — see our FDI channels guide for the current sector-by-sector breakdown.",
  },
  {
    q: "What are the biggest risks foreign companies face entering India?",
    a: "The recurring ones are regulatory complexity across FEMA, RBI, and MCA simultaneously; tax exposure from unclear transfer pricing or permanent establishment risk; the ongoing compliance burden that continues every year regardless of trading activity; and under-planning for repatriation or exit before the entity is already operating. None of these are unusual individually — the risk is usually in not planning for all of them together before committing to a route.",
  },
]

export default function EntryProcessPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4"><Breadcrumb items={[{ label: "Doing Business in India", href: "/doing-business-in-india" }, { label: "Entry Process" }]} /></div>

      {/* HERO (FIXED - NO WHY INDIA) */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white">

        <HeroBackground />

        <div className="absolute inset-0 bg-[#081a42]/25" />

        <Reveal className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl font-bold">
            India Entry Process & Business Structures
          </h1>

          <p className="mt-5 text-lg text-white/80">
            A structured roadmap for global companies entering India — covering market evaluation,
            regulatory approvals, entity setup, taxation, and operational launch strategy.
          </p>
        </Reveal>
      </section>

      {/* STRATEGIC CONTEXT (FROM WHY INDIA INSIGHT BUT REPOSITIONED) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <Reveal className="text-center mb-14">
            <h2 className="text-3xl font-bold">
              Why India is a Strategic Entry Market
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              India’s economic transformation, digital infrastructure, and supply chain integration
              make it a key destination for global expansion strategies. For the full investment
              case — sector opportunities, growth drivers, and how India compares to other markets —
              see our{" "}
              <Link href="/doing-business-in-india/why-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                Why India guide
              </Link>. This page picks up from there: once India is the right market, how do you
              actually get in?
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Market Scale Advantage</h3>
              <p className="text-sm text-gray-600">
                India offers one of the largest consumer bases globally, enabling long-term demand visibility.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Policy & Reform Ecosystem</h3>
              <p className="text-sm text-gray-600">
                Liberal FDI regime, GST implementation, and digital compliance systems simplify entry.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Digital Infrastructure</h3>
              <p className="text-sm text-gray-600">
                UPI, Aadhaar, GSTN enable efficient business operations and scalability.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Global Supply Chain Shift</h3>
              <p className="text-sm text-gray-600">
                India is a key beneficiary of China+1 manufacturing diversification strategy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ROUTES TO MARKET */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <Reveal className="text-center mb-14">
            <h2 className="text-3xl font-bold">
              Four Ways to Enter the Indian Market
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Incorporating a subsidiary isn&apos;t the only way in, and it isn&apos;t always the right
              starting point. The route that fits depends on how validated your India opportunity
              already is — how much control you need, how fast you need to move, and how much
              compliance overhead you&apos;re ready to take on now versus later.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {entryRoutes.map((r) => (
              <ClickableInfoCard key={r.title} title={r.title} desc={r.desc} />
            ))}
          </div>

          <p className="text-center text-gray-600 mt-10 text-sm">
            Already decided a subsidiary is the right move and just weighing whether now is the
            right time?{" "}
            <Link href="/doing-business-in-india/incorporation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              See our incorporation-timing guide →
            </Link>
          </p>
        </div>
      </section>

      {/* ENTRY PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-6">
            Step-by-Step Entry Process
          </h2>

          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            This is the execution sequence once you&apos;ve chosen to incorporate. Regulatory
            timing is the biggest variable: incorporation-linked FDI typically clears in{" "}
            <strong>4-6 weeks</strong> under the Automatic Route, or <strong>8-12 weeks</strong>{" "}
            where Government Route approval applies — see our{" "}
            <Link href="/india-business-setup/fdi-channels" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              FDI channels guide
            </Link>{" "}
            for which sectors need which route, and our{" "}
            <Link href="/india-business-setup/timeline-resources" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              timeline and budget breakdown
            </Link>{" "}
            for the full phase-by-phase detail.
          </p>

          <div className="relative">

            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 hidden md:block" />

            {[
              {
                title: "Market Feasibility & Entry Strategy",
                desc: "Validate demand, size the opportunity, and decide which route to market fits — subsidiary, joint venture, distributor, or EOR — before committing to any registration step.",
              },
              {
                title: "Business Structure Selection",
                desc: "Choose the legal entity (Private Limited subsidiary, LLP, branch, or liaison office) based on the sector's FDI eligibility, the control and liability profile you need, and the compliance load you're ready to carry.",
              },
              {
                title: "Regulatory & FDI Compliance Review",
                desc: "Confirm whether your sector sits under the Automatic Route (self-report to RBI after investing, 4-6 weeks) or the Government Route (DPIIT approval required before investing, 8-12 weeks) — this single determination drives most of the overall timeline.",
              },
              {
                title: "Entity Incorporation in India",
                desc: "Name reservation and SPICe+ filing with the Registrar of Companies. For a foreign parent, apostille or embassy legalisation of home-country documents is usually the actual pacing factor, not the Indian filing itself.",
              },
              {
                title: "Tax & Banking Setup",
                desc: "PAN/TAN issue automatically with the Certificate of Incorporation; opening a corporate account with an RBI-authorised (AD Category-I) bank and completing GST registration where applicable follow shortly after.",
              },
              {
                title: "Operational Launch",
                desc: "Capital infusion and the resulting FC-GPR filing to RBI, initial hiring and payroll setup, and standing up the statutory registers and board processes the entity needs from day one.",
              },
              {
                title: "Ongoing Compliance & Reporting",
                desc: "Statutory audit, annual RoC filings (AOC-4/MGT-7), GST returns, and the Annual FLA return for FDI-funded entities repeat every year the entity exists — this is a permanent rhythm, not a one-time step.",
              },
            ].map((step, i) => (
              <Reveal
                key={step.title}
                delay={(i % 7) * 0.1}
                className={`relative flex md:items-center mb-14 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#081a42] rounded-full border-4 border-white" />

                <div className="bg-white border rounded-2xl p-6 md:w-[45%] shadow-sm hover:shadow-lg transition">
                  <h3 className="font-semibold text-lg mb-2">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.desc}
                  </p>
                </div>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* BUSINESS STRUCTURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-4">
            Legal Entity Structures for a Direct Presence
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            If you&apos;ve settled on a route that involves a registered India presence — as a
            subsidiary or as the Indian entity in a joint venture — these are the structures
            available, each with a different control, liability, and compliance profile.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { title: "Wholly Owned Subsidiary (Pvt Ltd)", desc: "An independent Indian legal entity, up to 100% foreign-owned in most sectors. Full commercial flexibility — can contract, invoice, hire, and hold assets directly — with limited liability for the parent, at the cost of full annual compliance (audit, RoC filings, GST, FLA return)." },
              { title: "LLP Structure", desc: "A partnership-based model with lower ongoing compliance than a Pvt Ltd company, but FDI into an LLP is only permitted under the Automatic Route in sectors where 100% FDI is allowed with no performance-linked conditions — narrower eligibility than a subsidiary, so it suits a smaller subset of businesses." },
              { title: "Branch Office", desc: "A foreign company's direct presence in India, not a separate Indian legal entity — the foreign parent is directly liable. Requires specific RBI approval, and permitted activities are narrower than a subsidiary's (typically export/import, consultancy, and R&D for the parent's business)." },
              { title: "Liaison Office", desc: "The lightest-touch registered presence — a representative and communication channel between the parent and Indian contacts, with no commercial or revenue-generating activity permitted at all. Useful for market research or coordination ahead of a bigger commitment, gated by RBI approval and periodic renewal." },
            ].map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}

          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-4">
            Key Entry Risks to Consider
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            None of these are unusual on their own — the risk is in not planning for all of them
            together before you&apos;ve committed to a route and an entity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entryRisks.map((r) => (
              <ClickableInfoCard key={r.title} title={r.title} desc={r.desc} />
            ))}
          </div>
        </div>
      </section>
      {/* AU SUPPORT AGAINST ENTRY RISKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl font-bold">
              How{" "}
              <span className="text-[#facc15]">AU Corporate</span>{" "}
              Mitigates Entry Risks
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We transform regulatory complexity into a structured, compliant and predictable
              India entry journey for global businesses.
            </p>
          </Reveal>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Regulatory Navigation",
                desc: "End-to-end handling of FEMA, RBI and MCA approvals with compliance accuracy.",
              },
              {
                title: "Optimal Structuring",
                desc: "Tax-efficient entity structuring aligned with long-term business goals.",
              },
              {
                title: "Tax Risk Management",
                desc: "Transfer pricing, DTAA planning and corporate tax optimization.",
              },
              {
                title: "Faster Market Entry",
                desc: "Reduced incorporation timelines through structured execution planning.",
              },
              {
                title: "Ongoing Compliance Support",
                desc: "Accounting, payroll, ROC filings and FEMA reporting managed end-to-end.",
              },
              {
                title: "Strategic Advisory",
                desc: "Beyond compliance — supporting expansion, scaling and investment strategy.",
              },
            ].map((item, i) => (
              <ClickableReveal
                key={item.title}
                delay={(i % 6) * 0.12}
                className="p-6 border rounded-xl bg-white cursor-pointer relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >

                {/* GOLD ACCENT BAR */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#facc15]" />

                {/* HOVER GLOW EFFECT */}
                <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-[#facc15] transition" />

                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#facc15]" />
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>

                <p className="mt-3 text-xs font-semibold text-gold-dark relative">
                  Talk to an expert →
                </p>

              </ClickableReveal>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {entryFaqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2">{item.q}</h3>
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
            mainEntity: entryFaqs.map((item) => ({
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
      <section className="bg-[#081a42] text-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your India Entry Journey
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          Build a compliant and scalable business structure in India with expert guidance.
        </p>

        <Link href="/contact" className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg">
          Talk to Experts
        </Link>
      </section>

    </div>
  )
}