import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { ClickableReveal } from "@/components/ClickableReveal"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"
import { RelatedResources } from "@/components/RelatedResources"
import { Scale, FileSearch, Landmark, TrendingUp } from "lucide-react"

export default function Page() {
  const section = {
    title: "Transaction Advisory Services",
    id: "services",
    items: [
      {
        title: "Due Diligence Services",
        desc: "Conducting comprehensive due diligence to assess financial, legal, and operational risks.",
      },
      {
        title: "Merger & Acquisition Advisory",
        desc: "Providing strategic advisory for mergers, acquisitions, and business restructuring.",
      },
      {
        title: "Business and Asset Valuations",
        desc: "Delivering accurate valuation of businesses and assets for informed decision-making.",
      },
      {
        title: "Debts & Equity Financing Solutions",
        desc: "Structuring optimal debt and equity financing solutions to support growth.",
      },
      {
        title: "Seed and Venture Capital (VC) Funding",
        desc: "Advising startups and businesses on fundraising from seed and venture capital investors.",
      },
      {
        title: "Strategic Corporate Restructuring",
        desc: "Designing restructuring strategies to improve efficiency and financial performance.",
      },
      {
        title: "IPO Listing & Consulting - SME",
        desc: "Assisting businesses in SME IPO listing with end-to-end advisory support.",
      },
      {
        title: "IPO Listing & Consulting - Main Board",
        desc: "Providing complete advisory for main board IPO listing and capital market readiness.",
      },
    ],
  }

  const diligenceTypes = [
    {
      title: "Financial Due Diligence",
      desc: "Quality-of-earnings analysis, working-capital and debt verification, and testing whether reported numbers reconcile with GST returns, TDS filings and bank statements — not just the audited financial statements.",
    },
    {
      title: "Tax Due Diligence",
      desc: "Reviewing income-tax assessments, GST positions, transfer-pricing exposure, and pending demands or litigation that can transfer to the buyer depending on how the deal is structured.",
    },
    {
      title: "Legal Due Diligence",
      desc: "Corporate records, material contracts and change-of-control clauses, litigation history, IP ownership, and title to key assets and properties.",
    },
    {
      title: "FEMA & Regulatory Due Diligence",
      desc: "Verifying that past foreign investment was reported correctly (FC-GPR/FC-TRS), that sectoral caps and entry-route conditions were met, and whether Press Note 3 approval applies to the current deal.",
    },
    {
      title: "Commercial & Operational Due Diligence",
      desc: "Market position, customer concentration, supply-chain dependencies, and whether the business plan underlying the valuation is actually realistic.",
    },
    {
      title: "HR, IT & ESG Due Diligence",
      desc: "Employment contracts, provident fund and gratuity liabilities, key-person dependency, data-protection posture, and environmental or governance red flags.",
    },
  ]

  const dealStructures = [
    {
      title: "Share Purchase",
      desc: "Ownership changes at the shareholder level; the target entity, its contracts, licences and history transfer with it. Generally the lowest stamp-duty route — 0.015% on dematerialised shares — but the buyer inherits historical tax and legal exposure, which is exactly what due diligence and representations & warranties are built to price and allocate.",
    },
    {
      title: "Asset Purchase",
      desc: "The buyer selects specific assets and liabilities rather than the whole entity, which limits inherited exposure, but usually attracts GST on the assets transferred and state stamp duty on the conveyance, and requires re-executing key contracts and licences in the buyer's name.",
    },
    {
      title: "Slump Sale",
      desc: "A defined concept under the Income-tax Act — transfer of a whole undertaking as a going concern for a lump-sum consideration, without itemising individual assets and liabilities. It can qualify as GST-exempt as a going-concern transfer, but the capital-gains computation and stamp-duty treatment need to be structured carefully to hold up on assessment.",
    },
    {
      title: "Merger / Amalgamation",
      desc: "A tribunal-approved combination of two entities under Sections 230–232 of the Companies Act (typically 9–12 months via the NCLT), or, for a holding company and its wholly owned subsidiary or between small companies, the fast-track route under Section 233, approved by the Regional Director instead of the NCLT.",
    },
  ]

  const ipoTracks = [
    {
      title: "SME IPO",
      desc: "For issuers with post-issue paid-up capital up to Rs 10 crore. Reviewed by the stock exchange (BSE SME or NSE Emerge) rather than SEBI directly. Following SEBI's March 2025 tightening, SME issuers now need minimum EBITDA of Rs 1 crore in at least two of the last three financial years, and the minimum application size has been raised to Rs 2 lakh.",
    },
    {
      title: "Main Board IPO",
      desc: "For larger issuers, with the Draft Red Herring Prospectus reviewed directly by SEBI. The standard profitability track record under ICDR Regulation 6(1) is an average operating profit of at least Rs 15 crore across three of the preceding five years; issuers that don't meet this can pursue an alternate, QIB-anchored route under Regulation 6(2) instead.",
    },
  ]

  const approachSteps = [
    {
      title: "1. Scope & Structure",
      desc: "We start with the commercial objective — acquisition, JV, fundraise, or restructuring — and the entity structure involved, before recommending a transaction route: share purchase, asset purchase, slump sale, or merger.",
    },
    {
      title: "2. Due Diligence & Valuation",
      desc: "Financial, tax, legal and FEMA due diligence run alongside valuation, so findings feed directly into price and deal terms — not into a report nobody reads until after signing.",
    },
    {
      title: "3. Documentation & Regulatory Filings",
      desc: "Transaction documents, FC-GPR/FC-TRS or CCI filings where applicable, and NCLT/Regional Director paperwork for mergers, prepared and tracked against the deal timeline.",
    },
    {
      title: "4. Closing & Post-Deal Follow-Through",
      desc: "Closing conditions and fund flow, followed by the post-closing compliance calendar — RBI reporting, RoC filings, and integration of accounting and payroll — so the deal doesn't stall for lack of follow-through.",
    },
  ]

  const faqs = [
    {
      q: "What's the difference between a share purchase, an asset purchase, and a slump sale?",
      a: "A share purchase transfers ownership of the company itself, so the target's contracts, licences and history — good and bad — come with it, though it's generally the lowest stamp-duty route at 0.015% on dematerialised shares. An asset purchase lets the buyer cherry-pick specific assets and liabilities, which limits inherited exposure but usually attracts GST and stamp duty on the assets transferred. A slump sale — a defined concept under the Income-tax Act — transfers a whole undertaking as a going concern for a lump-sum price without itemising individual assets, and can be structured GST-exempt, but the capital-gains and stamp-duty treatment need careful handling. The right structure depends on the tax profile, liabilities, and licences involved, and locks in outcomes that are hard to unwind after closing.",
    },
    {
      q: "Does every M&A deal in India need CCI approval?",
      a: "No — only where the combination crosses the prescribed asset or turnover thresholds, or, since the 2024 deal-value-threshold amendment, where transaction value exceeds Rs 2,000 crore and the target has substantial business operations in India. Below those thresholds, no mandatory CCI filing is required, though the CCI's green-channel route exists for straightforward deals with no horizontal overlap. The Commission has also moved to a 'material influence' standard for control, so even a minority stake with board or veto rights can trigger a filing obligation — worth checking early, not after terms are agreed.",
    },
    {
      q: "Who can conduct a valuation for an M&A or FEMA transaction in India?",
      a: "It depends on the purpose. For Companies Act matters — mergers, preferential allotments, buybacks — Section 247 requires a Registered Valuer. For FEMA/RBI purposes, such as pricing an inbound share transfer or an FDI issuance, the valuation must be done by a SEBI-registered merchant banker or a practising Chartered Accountant, applying an internationally accepted methodology — commonly DCF, Net Asset Value, or market multiples — on an arm's-length basis. Using the wrong valuer for the wrong purpose is a common, avoidable filing error.",
    },
    {
      q: "How long does a merger take in India — NCLT vs. fast-track?",
      a: "A scheme of merger under Sections 230–232 typically takes roughly 9–12 months through the NCLT, given the multiple stages of shareholder and creditor approval, regulatory no-objections, and tribunal hearings involved. The fast-track route under Section 233 — available only between a holding company and its wholly owned subsidiary, or between two or more small companies — skips the NCLT in favour of Regional Director approval and generally moves considerably faster.",
    },
    {
      q: "What's the eligibility difference between an SME IPO and a main board IPO?",
      a: "SME IPOs are for issuers with post-issue paid-up capital up to Rs 10 crore, reviewed by the exchange (BSE SME or NSE Emerge) rather than SEBI directly, and now require minimum EBITDA of Rs 1 crore in at least two of the last three financial years following SEBI's March 2025 reforms. Main board IPOs are reviewed directly by SEBI, with a standard profitability track record of average operating profit of at least Rs 15 crore across three of the preceding five years under ICDR Regulation 6(1) — or an alternate, QIB-anchored route for issuers without that track record.",
    },
    {
      q: "Do foreign investors need government approval before investing in an Indian target?",
      a: "It depends on the sector and the investor's country. Most sectors allow 100% FDI under the automatic route, but sectors on the government-approval list, and any investment — direct or indirect — from an entity based in, or beneficially owned by someone based in, a country sharing a land border with India, requires prior government approval under Press Note 3 of 2020, regardless of deal value or sector. Checking this before terms are agreed avoids restructuring the deal midway through.",
    },
    {
      q: "Can the same team handle deal execution and the compliance that follows it?",
      a: "Yes — that's a large part of why clients consolidate a transaction with AU Corporate rather than a standalone deal boutique. The team running due diligence and structuring can hand off directly to accounting, tax, FEMA/RBI reporting and company-secretarial support once the deal closes, since these sit within the same firm rather than fragmented across separate vendors.",
    },
    {
      q: "How is fundraising for a startup different from a full M&A transaction?",
      a: "A seed or VC round is typically a minority primary issuance — new shares issued to the investor, usually as compulsorily convertible preference shares or, for eligible startups, convertible notes — structured around a term sheet, cap table and shareholders' agreement, with FEMA pricing and reporting (Form FC-GPR) rather than a change-of-control transaction. An M&A deal more often involves an existing shareholder exiting, a controlling stake changing hands, and the fuller due diligence, valuation and — above the relevant thresholds — CCI process that comes with it.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Transaction Advisory" }]} />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Transaction Advisory Services
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          For a foreign company evaluating an acquisition, joint venture, or fundraising round in India, the deal itself is often the easier half of the transaction — the harder half is structuring it to survive due diligence, Companies Act and FEMA scrutiny, and, above certain thresholds, a Competition Commission of India (CCI) review, without eroding value along the way. We support businesses and investors through the full transaction lifecycle — due diligence, valuation, deal structuring, M&amp;A and JV advisory, debt and equity fundraising, corporate restructuring, and IPO readiness on both the SME and main board platforms. The sections below cover what a due diligence review in India actually tests, how share purchases, asset purchases, slump sales and mergers differ in tax and stamp-duty terms, how valuation works under the Companies Act and FEMA, and what separates an SME listing from a main board one.
        </p>

        {/* QUICK FACTS */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-10">
          {[
            { icon: Scale, value: "Rs 2,000 cr", label: "CCI deal-value threshold triggering mandatory merger notification" },
            { icon: FileSearch, value: "Section 247", label: "Companies Act requirement for a Registered Valuer" },
            { icon: Landmark, value: "0.015%", label: "Stamp duty on transfer of dematerialised shares" },
            { icon: TrendingUp, value: "Rs 10 cr", label: "Post-issue paid-up capital ceiling for SME IPO eligibility" },
          ].map((stat) => (
            <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center cursor-pointer">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
              <div className="text-base font-bold text-[#081a42]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </ClickableReveal>
          ))}
        </div>

        {/* CLICK NAV */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {[
            { href: `#${section.id}`, label: "Our Services" },
            { href: "#due-diligence", label: "Due Diligence" },
            { href: "#deal-structuring", label: "Deal Structuring & Valuation" },
            { href: "#fundraising-ipo", label: "Fundraising & IPO" },
            { href: "#approach", label: "Our Approach" },
            { href: "#faqs", label: "FAQs" },
          ].map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
            >
              {nav.label}
            </a>
          ))}
        </div>

        {/* SECTION: OUR SERVICES */}
        <section aria-labelledby={section.id}>
        <Reveal className="mb-20">
          <h2 id={section.id} className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {section.items.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}

          </div>
        </Reveal>
        </section>

        {/* SECTION: DUE DILIGENCE */}
        <section aria-labelledby="due-diligence">
        <Reveal className="mb-20">
          <h2 id="due-diligence" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            Due Diligence in India: What Actually Gets Tested
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed mb-8">
            &ldquo;Due diligence&rdquo; is not one review — it&apos;s a set of parallel workstreams, and which ones matter most depends on the deal. A financial due diligence review that stops at the audited statements will miss what a GST or FEMA reconciliation would have caught; a legal review that skips change-of-control clauses can leave a buyer surprised post-closing. For foreign investors specifically, sectoral FDI caps, entry-route conditions, and past FC-GPR/FC-TRS filing accuracy sit alongside the standard financial and legal checks.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {diligenceTypes.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>

          <div className="max-w-4xl rounded-xl border-l-4 border-yellow-400 bg-white p-6">
            <h3 className="mb-2 text-lg font-bold text-[#081a42]">FEMA and CCI Checks a Foreign Investor Can&apos;t Skip</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Two checks are specific to cross-border deals. First, any investment — direct or indirect — from an entity based in, or beneficially owned by someone based in, a country sharing a land border with India requires prior government approval under Press Note 3 of 2020, regardless of sector or deal size; most other sectors allow 100% FDI under the automatic route, but a handful still sit on the government-approval list. Second, above the prescribed asset/turnover thresholds, or where transaction value exceeds Rs 2,000 crore and the target has substantial business operations in India, the deal needs CCI notification before closing — and the CCI now applies a &ldquo;material influence&rdquo; standard, so even a well-structured minority stake with board or veto rights can trigger a filing obligation. Both checks are best run at term-sheet stage, not after signing.
            </p>
          </div>
        </Reveal>
        </section>

        {/* SECTION: DEAL STRUCTURING & VALUATION */}
        <section aria-labelledby="deal-structuring">
        <Reveal className="mb-20">
          <h2 id="deal-structuring" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            Deal Structuring & Valuation
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed mb-8">
            How a transaction is structured — share purchase, asset purchase, slump sale, or merger — locks in tax, GST, and stamp-duty outcomes, and determines who carries contingent liabilities after closing. It is a structural decision made upfront, not a documentation choice made at the end.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {dealStructures.map((item) => (
              <ClickableReveal key={item.title} className="rounded-xl border bg-white p-6 cursor-pointer h-full flex flex-col">
                <h3 className="font-bold text-base mb-2 text-[#081a42]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </ClickableReveal>
            ))}
          </div>

          <div className="rounded-xl border-l-4 border-yellow-400 bg-white p-6 max-w-4xl">
            <h3 className="mb-2 text-lg font-bold text-[#081a42]">How Valuation Works: Companies Act vs. FEMA</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              The two regimes overlap but aren&apos;t identical. Under Section 247 of the Companies Act, 2013, valuations for mergers, preferential allotments, buybacks, or sweat-equity issuances must be carried out by a Registered Valuer. Under FEMA, the RBI requires that cross-border share pricing — an inbound FDI issuance or a transfer between a resident and non-resident — be done by a SEBI-registered merchant banker or a practising Chartered Accountant, using an internationally accepted methodology such as Discounted Cash Flow, Net Asset Value, or market multiples, on an arm&apos;s-length basis. Getting the valuer or the methodology wrong for the purpose at hand is one of the more common, and entirely avoidable, filing errors we see.
            </p>
          </div>
        </Reveal>
        </section>

        {/* SECTION: FUNDRAISING & IPO */}
        <section aria-labelledby="fundraising-ipo">
        <Reveal className="mb-20">
          <h2 id="fundraising-ipo" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            Fundraising, Restructuring & IPO Readiness
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed mb-8">
            Not every transaction is an acquisition. A seed or venture-capital round is typically a minority primary issuance — new shares to an investor, structured around a term sheet, cap table and shareholders&apos; agreement, with FEMA pricing and Form FC-GPR reporting rather than a change-of-control process. Debt financing and corporate restructuring carry their own structuring questions — security, covenants, and, for restructuring, whether a scheme of arrangement or a slump sale better achieves the objective. For companies preparing to list, the eligibility path differs sharply depending on the platform:
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {ipoTracks.map((item) => (
              <ClickableReveal key={item.title} className="rounded-xl border bg-white p-6 cursor-pointer h-full flex flex-col">
                <h3 className="font-bold text-base mb-2 text-[#081a42]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </ClickableReveal>
            ))}
          </div>
        </Reveal>
        </section>

        {/* OUR APPROACH */}
        <section aria-labelledby="approach">
          <Reveal className="mb-20">
            <h2 id="approach" className="text-2xl font-semibold mb-3 text-[#081a42] scroll-mt-24">
              Our Approach
            </h2>
            <p className="text-gray-600 max-w-3xl mb-8 leading-relaxed">
              Whether the engagement is an acquisition, a fundraise, or a restructuring, the underlying process runs through the same four stages — scoped differently depending on what brought you to us.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step) => (
                <ClickableInfoCard key={step.title} title={step.title} desc={step.desc} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* MID-PAGE LEAD FORM */}
        <div className="mb-20">
          <LeadForm title="Evaluating a Deal, Fundraise, or Listing in India?" description="Tell us about the transaction you're planning and our transaction advisory team will get in touch." />
        </div>

        {/* FAQS */}
        <section aria-labelledby="faqs">
          <Reveal className="mb-16">
            <h2 id="faqs" className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl">
              <FaqAccordion faqs={faqs} />
            </div>
          </Reveal>
        </section>

        <RelatedResources
          links={[
            {
              label: "Taxation & Regulatory Services",
              href: "/services/taxation-regulatory",
              description: "Direct tax, GST, and FEMA/RBI regulatory compliance for the entity on either side of a deal.",
            },
            {
              label: "Risk Management",
              href: "/services/risk-management",
              description: "Due diligence review, forensic services, and internal-control frameworks.",
            },
            {
              label: "Accounting & Assurance",
              href: "/services/accounting-assurance",
              description: "Statutory audit and financial reporting the numbers behind a deal rely on.",
            },
            {
              label: "FDI & Entry Routes",
              href: "/india-business-setup/fdi-channels",
              description: "Sectoral caps, entry routes, and government-approval requirements for foreign investment.",
            },
          ]}
        />

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
