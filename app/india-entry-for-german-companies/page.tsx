import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function IndiaEntryForGermanyCompanies() {
  return (
    <RegionClusterTemplate
      title="India Entry for German Companies"
      subtitle="AU Corporate helps German companies establish and scale their Indian operations, drawing on direct experience managing outsourcing and Virtual CFO services for Indian subsidiaries of German corporate groups."
      region="Germany"
      breadcrumbItems={[
              { label: "India Entry for German Companies" },
            ]}
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Germany is one of India's largest European trading and investment partners, and German manufacturing, automotive, and engineering companies have been setting up Indian subsidiaries for decades — often as a combination of a manufacturing/services base and an export hub. Our team helps you navigate entity selection, the India-Germany DTAA, and the FEMA compliance obligations that follow incorporation.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our outsourcing and Virtual CFO practice is led by Utsav Dogra, FCA, who has directly managed outsourcing and Virtual CFO engagements for Indian subsidiaries of German corporate groups — giving German clients a partner who already understands how German parent-company reporting expectations map onto Indian statutory requirements.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          What German Companies Need to Know
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Entity Structure</h3>
            <p className="text-gray-600 text-sm">Most German companies enter via a wholly-owned Private Limited subsidiary (GmbH-equivalent), giving full commercial flexibility under the automatic FDI route for most manufacturing and services sectors.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">India-Germany DTAA</h3>
            <p className="text-gray-600 text-sm">One of the cleanest treaty structures in India's network — a flat 10% withholding rate applies uniformly across dividends, interest, royalties, and fees for technical services, simplifying TDS calculations for German parent-subsidiary groups.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">FEMA & RBI Filings</h3>
            <p className="text-gray-600 text-sm">Form FC-GPR on share allotment, Form FC-TRS on any transfer, and the annual FLA return — the same core filings that apply to any foreign-owned Indian subsidiary.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Annual Compliance Calendar</h3>
            <p className="text-gray-600 text-sm">AGM by September 30, AOC-4 and MGT-7 filings in the following weeks, Form 3CEB (transfer pricing) and the income tax return due by October/November — a compliance rhythm German finance teams need mapped against their own reporting calendar.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/blog/india-safe-harbour-rules-2026" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India's 2026 Safe Harbour Rules: 15.5% IT Margin Explained →
          </Link>
          <Link href="/doing-business-in-india/why-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Why Invest in India →
          </Link>
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Company Formation & Entity Types in India →
          </Link>
          <Link href="/services/taxation-regulatory" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Taxation & Regulatory Services →
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
