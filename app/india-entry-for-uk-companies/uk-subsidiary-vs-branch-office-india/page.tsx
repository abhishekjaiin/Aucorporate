import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function UKSubsidiaryVsBranchPage() {
  return (
    <RegionClusterTemplate
      title="UK Subsidiary vs Branch Office in India"
      subtitle="Structural differences and UK tax implications when choosing how your UK company enters the Indian market."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies", href: "/india-entry-for-uk-companies" },
              { label: "UK Subsidiary vs Branch Office in India" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          UK companies entering India typically choose between a wholly-owned subsidiary (Private Limited company) and a branch office. The right choice depends on your regulatory appetite, tax position, and how independently the Indian operation needs to run.
        </p>
      </div>

      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-4 text-left">Factor</th>
              <th className="border border-gray-300 p-4 text-left">Subsidiary (Private Limited)</th>
              <th className="border border-gray-300 p-4 text-left">Branch Office</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Legal status</td>
              <td className="border border-gray-300 p-4 text-sm">Separate Indian legal entity; UK parent&apos;s liability is limited to its shareholding.</td>
              <td className="border border-gray-300 p-4 text-sm">Not a separate entity — the UK parent is directly liable for the branch&apos;s obligations in India.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">RBI approval</td>
              <td className="border border-gray-300 p-4 text-sm">Automatic route available for most sectors; no prior RBI approval needed for incorporation itself.</td>
              <td className="border border-gray-300 p-4 text-sm">Requires specific RBI approval before commencing operations — generally reserved for companies with an established track record.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Permitted activities</td>
              <td className="border border-gray-300 p-4 text-sm">Full commercial operations, manufacturing, and revenue generation as permitted under the sector&apos;s FDI policy.</td>
              <td className="border border-gray-300 p-4 text-sm">Restricted to activities specified in RBI approval — typically export/import trading, professional/consultancy services, or research on behalf of the parent.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">India-UK DTAA treatment</td>
              <td className="border border-gray-300 p-4 text-sm">Dividends repatriated to the UK parent are taxed as dividend income — capped at 10% withholding under the treaty (15% for certain property-income vehicles), well below the 20% domestic rate.</td>
              <td className="border border-gray-300 p-4 text-sm">Branch profits are taxed as business income attributable to the Indian permanent establishment, then the after-tax profit repatriated to the UK is not subject to a separate India dividend withholding, since it isn&apos;t a dividend distribution.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Compliance burden</td>
              <td className="border border-gray-300 p-4 text-sm">Standard Companies Act filings (annual return, financial statements, board meetings) plus tax and FEMA compliance.</td>
              <td className="border border-gray-300 p-4 text-sm">Annual activity certificate to the RBI in addition to tax filings; generally lighter corporate compliance since there&apos;s no separate company to maintain.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Which one UK companies typically choose</h3>
        <p className="text-gray-700">
          Companies planning to actually sell into the Indian market — not just liaise or research — almost always go the subsidiary route, since branch offices are restricted to a narrower band of permitted activities and require upfront RBI approval that a subsidiary doesn&apos;t. Branches make more sense for a UK company testing India as a services/consulting base before committing to full market entry.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India-UK DTAA & Withholding Rates →
          </Link>
          <Link href="/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            How to Incorporate a Subsidiary from the UK →
          </Link>
          <Link href="/india-entry-for-uk-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for UK Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
