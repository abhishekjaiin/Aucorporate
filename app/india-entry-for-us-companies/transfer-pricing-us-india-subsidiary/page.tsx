import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableReveal } from '@/components/ClickableReveal'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { FaqAccordion } from '@/components/FaqAccordion'

const faqs = [
  {
    q: 'Does our Indian subsidiary need to file Form 3CEB every year?',
    a: "Only in years where aggregate international related-party transactions with the US parent (or any other associated enterprise) exceed ₹1 crore. Below that threshold, the accountant's report isn't required — though ordinary arm's-length pricing still applies to whatever transactions do occur.",
  },
  {
    q: "What's the practical difference between the Local File, Master File, and CbCR?",
    a: "The Local File (governed by Rule 10D) documents the Indian entity's own transactions and is filed alongside Form 3CEB every year that filing is required. The Master File (Form 3CEAA) is a group-wide document required only once the parent group's consolidated revenue and Indian transaction value cross specific thresholds — currently ₹500 crore and ₹50 crore respectively, or ₹10 crore for intangible-property transactions. The Country-by-Country Report (Form 3CEAD) is a much higher-threshold filing (₹5,500 crore consolidated group revenue) that, for most US-parent structures, the US parent ends up filing with the IRS instead, under the India-US CbCR exchange agreement.",
  },
  {
    q: 'If our US parent already files a Country-by-Country Report with the IRS, does the Indian subsidiary have to file one too?',
    a: "Generally no. India and the US have a bilateral agreement for the exchange of CbC reports, so a US parent's own CbCR filing with the IRS is shared with Indian tax authorities directly. Local CbCR filing by the Indian subsidiary becomes relevant only in specific fallback situations — for example, if the exchange mechanism isn't functioning for that year, or the US parent itself isn't obligated to file a CbC report at home.",
  },
  {
    q: "What happens if the transfer pricing figures on Form 3CEB don't match Schedule M of Form 5471?",
    a: "It's one of the fastest ways to draw scrutiny from either tax authority. Neither filing is reviewed by the other jurisdiction's tax authority directly, but a discrepancy is an easy red flag once either return is examined on its own — the fix is keeping both sides reconciled to the same underlying transaction records throughout the year, not just reconstructed at filing time.",
  },
  {
    q: 'Is it worth applying for an Advance Pricing Agreement instead of relying on annual documentation?',
    a: "It depends on transaction volume, how contentious the pricing is likely to be, and how much certainty is worth to your structure. A bilateral APA is slower and more resource-intensive to negotiate than annual Form 3CEB compliance, but it's the only mechanism that binds both the CBDT and the IRS to the same figure — for up to nine assessment years in total once a four-year rollback is combined with a five-year prospective term — which can be worth it for a subsidiary with large, recurring intercompany transactions.",
  },
  {
    q: 'What is the penalty for missing the Form 3CEB deadline?',
    a: "A minimum penalty of ₹1,00,000 under Section 271BA, regardless of transaction size and even in a loss-making year, since the obligation is triggered by the transaction rather than by profit. That's separate from, and can apply in addition to, the 2% (of transaction value, uncapped, assessed per transaction) penalty under Section 271AA for failing to maintain the underlying Rule 10D documentation in the first place.",
  },
  {
    q: 'Can our subsidiary use the 2026 Safe Harbour margin instead of a full transfer pricing study?',
    a: "For IT services, ITeS, KPO, and contract R&D specifically, yes — if the subsidiary's transaction value and reported margin meet the criteria in India's 2026 Safe Harbour rules, electing in removes those transactions from full Transfer Pricing Officer scrutiny for a five-year block period. See our dedicated breakdown of the 15.5% margin and the raised eligibility threshold for the current criteria.",
  },
]

export default function TransferPricingUSIndiaPage() {
  return (
    <RegionClusterTemplate
      title="Transfer Pricing & Section 482 for US-India Subsidiaries"
      subtitle="How Section 482 on the US side and India's transfer pricing rules interact once your subsidiary starts transacting with its US parent."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "Transfer Pricing & Section 482 for US-India Subsidiaries" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Any transaction between your US parent and its Indian subsidiary — management fees, cost allocations, intercompany services, royalty for IP use — is a related-party transaction on both sides of the border. The IRS reviews it under Section 482 of the Internal Revenue Code; Indian tax authorities review the same transaction under India&apos;s own transfer pricing rules — historically Sections 92-92F of the Income Tax Act, 1961, restructured as Sections 161-173 under the Income-tax Act, 2025, which came into effect April 1, 2026. Both require the pricing to reflect an arm&apos;s-length standard, but the documentation and filing mechanics differ.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What This Means in Practice</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ClickableReveal className="p-6 border-2 border-gray-200 rounded-lg cursor-pointer">
            <h3 className="font-bold text-lg mb-3">On the Indian side</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Form 3CEB (transfer pricing audit report) is required if related-party transactions cross the prescribed threshold</li>
              <li>• Contemporaneous documentation must justify the pricing method used</li>
              <li>• Safe Harbour Rules may apply for certain categories (e.g. IT/ITeS services), offering pre-agreed margins that reduce scrutiny</li>
            </ul>
          </ClickableReveal>
          <ClickableReveal className="p-6 border-2 border-gray-200 rounded-lg cursor-pointer">
            <h3 className="font-bold text-lg mb-3">On the US side</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Section 482 allows the IRS to reallocate income/deductions between related entities if pricing isn&apos;t arm&apos;s-length</li>
              <li>• Related-party transaction values reported on Schedule M of Form 5471 must tie out to your transfer pricing documentation</li>
              <li>• Subpart F/NCTI inclusion rules can be affected by how intercompany pricing is structured</li>
            </ul>
          </ClickableReveal>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Documentation Requirements: Form 3CEB, Local File, Master File, and CbCR</h2>
        <p className="text-gray-700 mb-6">
          Form 3CEB is the accountant&apos;s report, not the complete documentation record — Indian transfer pricing compliance actually runs three or four layers deep, and which layers apply to your subsidiary depends on transaction value and consolidated group revenue, not just on whether Form 3CEB itself is due.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <ClickableInfoCard
            title="Form 3CEB — Accountant's Report"
            desc="Required under Section 92E of the Income Tax Act, 1961 once aggregate international related-party transactions cross ₹1 crore in the year. Certified by a chartered accountant and due October 31 of the assessment year (see the Form 48 renumbering note below)."
          />
          <ClickableInfoCard
            title="Local File — Rule 10D Documentation"
            desc="The transaction-level study behind Form 3CEB: functional and risk characterisation of the Indian entity, the transfer pricing method selected, comparability analysis, and the benchmarking study supporting the arm's-length price. Filed alongside Form 3CEB, not as a separate submission."
          />
          <ClickableInfoCard
            title="Master File — Form 3CEAA"
            desc="Required under Section 92D and Rule 10DA where the group's consolidated revenue exceeds ₹500 crore and either aggregate international transactions exceed ₹50 crore, or intangible-property transactions exceed ₹10 crore. Gives Indian tax authorities a group-wide view of the parent's value chain, intangibles strategy, and intercompany financing."
          />
          <ClickableInfoCard
            title="Country-by-Country Report — Form 3CEAD"
            desc="Applies only where consolidated group revenue exceeds ₹5,500 crore, under Section 286 and Rule 10DB. In most US-parent structures, the active India-US CbCR exchange agreement means the Indian subsidiary doesn't file locally at all — the US parent's own CbCR filing with the IRS is exchanged with India instead, unless that exchange mechanism breaks down for a given year."
          />
        </div>
        <p className="text-gray-700 mb-6">
          For most first-generation US-India subsidiaries below the ₹500 crore group-revenue threshold, Form 3CEB and the underlying Local File are the only layers that actually apply — the Master File and CbCR become relevant as the parent group scales.
        </p>
        <p className="text-gray-700">
          Getting this wrong isn&apos;t just a paperwork risk. Failing to maintain the Rule 10D documentation, or maintaining incorrect records, carries a penalty of 2% of the transaction value under Section 271AA — uncapped, and assessed per transaction. Simply missing the Form 3CEB filing deadline is a separate default under Section 271BA, carrying a minimum penalty of ₹1,00,000 regardless of transaction size, including in a loss-making year, since the filing obligation is triggered by the transaction rather than by profit. A further 2%-of-transaction-value penalty under Section 271G applies if the entity fails to produce documentation a Transfer Pricing Officer specifically requests during an audit.
        </p>
      </div>

      <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h3 className="font-bold text-lg mb-2">Regulatory update: Form 3CEB is being renumbered to Form 48</h3>
        <p className="text-gray-700">
          Under the draft Income-tax Rules, 2026 (issued for public consultation by the CBDT under the new Income-tax Act, 2025), Form 3CEB is proposed to be replaced by Form 48 — a more data-rich, structured filing intended to apply from Tax Year 2026-27 onwards. This is still a draft proposal, not yet finalized law, and Form 3CEB remains the operative filing for the current cycle (due October 31, 2026). We&apos;re tracking the CBDT&apos;s final notification and will apply whichever form number is current at the time of your filing.
        </p>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">The practical risk</h3>
        <p className="text-gray-700">
          The most common issue we see isn&apos;t aggressive pricing — it&apos;s inconsistency: the number reported to Indian tax authorities under India&apos;s transfer pricing rules doesn&apos;t match what shows up on Schedule M of the US parent&apos;s Form 5471. That mismatch is one of the easiest things for either tax authority to flag. Keeping both filings reconciled to the same underlying figures is the single highest-value thing a joint US-India advisory relationship does for a subsidiary structure.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/blog/india-safe-harbour-rules-2026" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India's 2026 Safe Harbour Rules: 15.5% IT Margin Explained →
          </Link>
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for US Companies →
          </Link>
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
