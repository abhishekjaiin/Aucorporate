import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function FemaComplianceUSCompanyPage() {
  return (
    <RegionClusterTemplate
      title="FEMA Compliance for US Companies in India"
      subtitle="The recurring RBI and FEMA filings a US parent's Indian subsidiary needs to stay compliant after incorporation."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "FEMA Compliance for US Companies in India" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Once your Indian subsidiary is incorporated and receives foreign direct investment (FDI) from the US parent, FEMA (Foreign Exchange Management Act) compliance becomes an ongoing obligation — not a one-time task. Missing a filing deadline can hold up future fund remittances and, in some cases, attract penalties from the RBI.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Filings for a US-Owned Subsidiary</h2>
        <div className="space-y-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Form FC-GPR</h3>
            <p className="text-gray-600">
              Filed with the RBI within 30 days of allotting shares to the US parent against inward FDI. This is the filing that formally records the foreign investment in the subsidiary&apos;s capital structure.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Form FC-TRS</h3>
            <p className="text-gray-600">
              Required whenever shares are transferred between a resident and non-resident — relevant if the US parent later transfers shares, brings in a co-investor, or restructures ownership.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Annual FLA Return</h3>
            <p className="text-gray-600">
              The Foreign Liabilities and Assets return is filed annually with the RBI by every Indian entity that has received FDI or made overseas investment, regardless of whether there was any transaction that year. This is the filing most foreign-owned subsidiaries forget once the initial setup is done.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Why this trips up US parent companies specifically</h3>
        <p className="text-gray-700">
          US corporate calendars and Indian RBI filing calendars don&apos;t align, and the FLA return in particular is easy to miss because it isn&apos;t triggered by a transaction — it&apos;s an annual requirement regardless of activity. We track these deadlines against your subsidiary&apos;s actual filing history so nothing falls through between your US finance team and your Indian entity.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transfer Pricing & Section 482 for US Parent Companies →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
