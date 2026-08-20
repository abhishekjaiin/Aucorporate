import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

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
          <div className="p-6 border-2 border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-3">On the Indian side</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Form 3CEB (transfer pricing audit report) is required if related-party transactions cross the prescribed threshold</li>
              <li>• Contemporaneous documentation must justify the pricing method used</li>
              <li>• Safe Harbour Rules may apply for certain categories (e.g. IT/ITeS services), offering pre-agreed margins that reduce scrutiny</li>
            </ul>
          </div>
          <div className="p-6 border-2 border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-3">On the US side</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Section 482 allows the IRS to reallocate income/deductions between related entities if pricing isn&apos;t arm&apos;s-length</li>
              <li>• Related-party transaction values reported on Schedule M of Form 5471 must tie out to your transfer pricing documentation</li>
              <li>• Subpart F/NCTI inclusion rules can be affected by how intercompany pricing is structured</li>
            </ul>
          </div>
        </div>
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
