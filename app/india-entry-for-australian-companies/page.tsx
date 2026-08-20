import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function IndiaEntryForAustralianCompanies() {
  return (
    <RegionClusterTemplate
      title="India Entry for Australian Companies"
      subtitle="AU Corporate helps Australian companies establish and scale their Indian operations, with expertise in India-Australia ECTA benefits, FEMA compliance, and GCC setup."
      region="Australia"
      breadcrumbItems={[
              { label: "India Entry for Australian Companies" },
            ]}
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          India and Australia have deepened trade and investment ties through the India-Australia Economic Cooperation and Trade Agreement (ECTA), in force since December 2022, with both governments agreeing to accelerate negotiations on a broader Comprehensive Economic Cooperation Agreement (CECA) — eleven rounds in — at their July 2026 Annual Summit, alongside a proposed Bilateral Investment Treaty. That momentum is making India an increasingly common expansion destination for Australian companies. We help you choose the right entity structure and stay compliant from incorporation through ongoing operations.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our regulatory compliance practice handles the FEMA and RBI filings foreign-owned subsidiaries need to stay compliant after incorporation.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          What Australian Companies Need to Know
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Entity Structure</h3>
            <p className="text-gray-600 text-sm">Most Australian companies enter via a wholly-owned Private Limited subsidiary under the automatic FDI route for most sectors.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">India-Australia DTAA</h3>
            <p className="text-gray-600 text-sm">Unlike several of India's other major treaties, this one isn't a flat rate: 15% withholding on dividends, interest, and fees for technical services, and a split royalty rate — 10% on equipment-related royalties, 15% on others. Since Finance Act 2023 cut India's domestic royalty/FTS withholding rate to 10%, that domestic rate now often applies instead of the treaty rate, which changes the repatriation-planning math compared to treaties with a lower flat rate.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">FEMA & RBI Filings</h3>
            <p className="text-gray-600 text-sm">Form FC-GPR on share allotment, Form FC-TRS on any transfer, and the annual FLA return — the same core filings that apply to any foreign-owned Indian subsidiary.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">GCC Setup</h3>
            <p className="text-gray-600 text-sm">We support Australian companies setting up a Global Capability Center in India end to end — entity, tax, payroll, and operational setup. See our <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">complete GCC setup guide</Link>.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">
          Comprehensive Services for Australian Companies
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/services/taxation-regulatory" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Taxation & Regulatory Services →
          </Link>
          <Link href="/services/accounting-assurance" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Accounting Services →
          </Link>
          <Link href="/outsourcing" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Outsourcing Services →
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
