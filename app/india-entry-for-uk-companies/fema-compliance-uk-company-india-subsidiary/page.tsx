import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function FemaComplianceUKCompanyPage() {
  return (
    <RegionClusterTemplate
      title="FEMA Compliance for UK Companies in India"
      subtitle="The recurring RBI and FEMA filings a UK parent's Indian subsidiary needs to stay compliant after incorporation."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies", href: "/india-entry-for-uk-companies" },
              { label: "FEMA Compliance for UK Companies in India" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Once your Indian subsidiary receives foreign direct investment (FDI) from the UK parent, FEMA (Foreign Exchange Management Act) compliance becomes an ongoing obligation. These filings sit alongside — and are separate from — the tax filings needed to claim India-UK DTAA treaty rates on repatriated income.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Filings for a UK-Owned Subsidiary</h2>
        <div className="space-y-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Form FC-GPR</h3>
            <p className="text-gray-600">
              Filed with the RBI within 30 days of allotting shares to the UK parent against inward FDI — the filing that formally records the investment in the subsidiary&apos;s capital structure.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Form FC-TRS</h3>
            <p className="text-gray-600">
              Required for any share transfer between a resident and non-resident — relevant if the UK parent later restructures ownership or brings in a co-investor.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Annual FLA Return</h3>
            <p className="text-gray-600">
              Filed annually with the RBI by every entity that has received FDI, regardless of whether any transaction occurred that year. Not transaction-triggered, which is exactly why it&apos;s the filing most foreign-owned subsidiaries miss.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Where this connects to your DTAA position</h3>
        <p className="text-gray-700">
          FEMA compliance and DTAA treaty benefits are handled by different authorities (RBI vs. Indian tax authorities) but both depend on the same underlying paperwork discipline. A subsidiary with clean FEMA filing history has an easier time when its UK parent later needs a Tax Residency Certificate cross-check or faces scrutiny on a repatriation. We track both calendars together rather than treating them as separate workstreams.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India-UK DTAA & Withholding Rates →
          </Link>
          <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            UK Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-uk-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for UK Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
