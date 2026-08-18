import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function IndiaUKDTAAPage() {
  return (
    <RegionClusterTemplate
      title="India-UK DTAA & Withholding Tax Rates"
      subtitle="How the India-UK Double Taxation Avoidance Agreement reduces withholding tax on dividends, interest, and royalties for your Indian subsidiary."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies", href: "/india-entry-for-uk-companies" },
              { label: "India-UK DTAA & Withholding Tax Rates" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          The India-UK DTAA (signed 1993, updated by a 2012 Protocol in force since December 2013, with MLI modifications applying from FY 2020-21) caps how much withholding tax India can apply to income flowing from your Indian subsidiary back to the UK — well below India&apos;s domestic withholding rates.
        </p>
      </div>

      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-4 text-left">Income Type</th>
              <th className="border border-gray-300 p-4 text-left">Treaty Rate</th>
              <th className="border border-gray-300 p-4 text-left">Domestic Rate (No Treaty)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Dividends</td>
              <td className="border border-gray-300 p-4 text-sm">10% (general); 15% for certain property-income-derived distributions</td>
              <td className="border border-gray-300 p-4 text-sm">20%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Interest</td>
              <td className="border border-gray-300 p-4 text-sm">10% if paid to a bank/financial institution; 15% in other cases</td>
              <td className="border border-gray-300 p-4 text-sm">20%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Royalties / Fees for Technical Services</td>
              <td className="border border-gray-300 p-4 text-sm">15% generally; 10% for equipment royalties</td>
              <td className="border border-gray-300 p-4 text-sm">20%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">
          Rates shown are treaty caps before applicable surcharge and cess under Indian domestic law. Actual withholding uses whichever of the treaty rate or domestic rate is more beneficial to the taxpayer.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What You Need to Actually Claim These Rates</h2>
        <div className="space-y-4">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Tax Residency Certificate (TRC)</h3>
            <p className="text-gray-600">Mandatory to access treaty rates. Without a valid TRC from HMRC, the Indian payer must apply domestic withholding rates instead — meaning up to double the tax on dividends and interest.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Form 10F</h3>
            <p className="text-gray-600">A self-declaration filed alongside the TRC confirming beneficial ownership and treaty eligibility details not captured on the TRC itself.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">No Permanent Establishment Declaration (if applicable)</h3>
            <p className="text-gray-600">Relevant where the UK parent wants to confirm it isn&apos;t creating a taxable presence in India beyond the subsidiary itself.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">The most common way UK companies lose the treaty benefit</h3>
        <p className="text-gray-700">
          It isn&apos;t treaty eligibility — it&apos;s paperwork timing. If the TRC isn&apos;t in place before a dividend or interest payment is processed, the Indian payer is required to withhold at the higher domestic rate by default, and reclaiming the difference afterward is a slower, separate process. Getting the TRC and Form 10F organized before your first repatriation, not after, is what actually protects the treaty rate.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            UK Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for UK Companies →
          </Link>
          <Link href="/india-entry-for-uk-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for UK Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
