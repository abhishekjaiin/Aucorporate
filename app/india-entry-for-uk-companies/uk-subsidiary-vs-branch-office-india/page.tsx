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

      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Subsidiary vs Branch Office: Full Comparison</h2>
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
              <td className="border border-gray-300 p-4 text-sm">Automatic route available for most sectors; no prior RBI approval needed for incorporation itself — typically 3-5 weeks via the Companies Act process.</td>
              <td className="border border-gray-300 p-4 text-sm">Requires specific RBI approval via an Authorised Dealer bank before commencing operations — generally reserved for companies with an established profit/net-worth track record, and can take 8-12 weeks or more once the AD bank and RBI review stages are factored in.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Permitted activities</td>
              <td className="border border-gray-300 p-4 text-sm">Full commercial operations, manufacturing, and revenue generation as permitted under the sector&apos;s FDI policy.</td>
              <td className="border border-gray-300 p-4 text-sm">Restricted to activities specified in RBI approval — typically export/import trading, professional/consultancy services, or research on behalf of the parent.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Corporate tax rate</td>
              <td className="border border-gray-300 p-4 text-sm">Can elect into India&apos;s concessional domestic-company regime — 22% base rate, ~25.17% effective once surcharge and cess are added — on income earned in India.</td>
              <td className="border border-gray-300 p-4 text-sm">Taxed as a foreign company&apos;s permanent establishment: 35% base rate (cut from 40% by the Finance Act, 2024) plus applicable surcharge and cess, roughly 36-38% effective — and how much profit is attributable to the PE is a common point of dispute with Indian tax authorities.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">India-UK DTAA treatment</td>
              <td className="border border-gray-300 p-4 text-sm">Dividends repatriated to the UK parent are taxed as dividend income — capped at 10% withholding under the treaty (15% for certain property-income vehicles), well below the 20% domestic rate.</td>
              <td className="border border-gray-300 p-4 text-sm">Branch profits are taxed as business income attributable to the Indian permanent establishment, then the after-tax profit repatriated to the UK is not subject to a separate India dividend withholding, since it isn&apos;t a dividend distribution.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Compliance burden</td>
              <td className="border border-gray-300 p-4 text-sm">Standard Companies Act filings (annual return, financial statements, board meetings) plus tax and FEMA compliance.</td>
              <td className="border border-gray-300 p-4 text-sm">Annual activity certificate to the RBI in addition to tax filings; generally lighter corporate compliance since there&apos;s no separate company to maintain, though profit attribution to the PE typically needs its own supporting study for tax purposes.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Which one UK companies typically choose</h3>
        <p className="text-gray-700">
          Companies planning to actually sell into the Indian market — not just liaise or research — almost always go the subsidiary route, since branch offices are restricted to a narrower band of permitted activities and require upfront RBI approval that a subsidiary doesn&apos;t. Branches make more sense for a UK company testing India as a services/consulting base before committing to full market entry. The tax gap reinforces this: subsidiaries can access India&apos;s ~25.17% concessional corporate rate, while branch profits are taxed at roughly 36-38% as a permanent establishment — a material difference for any UK company expecting steady India profits, not just a compliance-effort difference.
        </p>
      </div>

      <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h3 className="font-bold text-lg mb-2">Regulatory watch: RBI&apos;s proposed reforms to branch/liaison office rules</h3>
        <p className="text-gray-700">
          In October 2025, the RBI released draft Foreign Exchange Management (Establishment in India of a Branch or Office) Regulations, 2025 for public consultation, proposing to replace the existing 2016 framework — including removing the current net-worth and profit-track-record eligibility criteria and moving away from a fixed list of permitted activities toward a principle-based approach. As of August 2026 this remains a draft under review and has not been notified; the rules described in the table above are the ones currently in force. UK companies planning a branch office on a multi-quarter timeline should keep an eye on the final regulations before locking in their structure.
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
