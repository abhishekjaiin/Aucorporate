import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function IndiaEntryForChinaCompanies() {
  return (
    <RegionClusterTemplate
      title="India Entry for Chinese Companies"
      subtitle="AU Corporate helps Chinese and China-linked companies navigate India's Press Note 3 approval framework, structure compliant FDI, and manage the beneficial ownership documentation that determines which route applies."
      region="China"
      breadcrumbItems={[
              { label: "India Entry for Chinese Companies" },
            ]}
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          FDI from China into India is governed by a materially different framework than most other countries — Press Note 3 (2020) requires prior government approval for investment from any entity where the beneficial owner is situated in, or a citizen of, a country sharing a land border with India, China included. This is not a formality: understanding exactly which route your specific investment falls under is the single most important early decision for a China-linked India entry.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our team has direct experience managing outsourcing and Virtual CFO engagements for Indian subsidiaries of Chinese corporate groups, and handles the FEMA and RBI approval filings this specific route requires.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          What Changed in 2026 — And What Didn't
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">The March 2026 Amendment</h3>
            <p className="text-gray-600 text-sm">India's Union Cabinet approved amendments to Press Note 3 on March 10, 2026 (notified as Press Note 2, 2026 series, effective May 1, 2026). Global entities with up to 10% non-controlling Chinese beneficial ownership can now use the automatic route, subject to sectoral caps — a narrow but real opening after six years of blanket approval requirements.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">What Still Needs Approval</h3>
            <p className="text-gray-600 text-sm">Direct investment from entities incorporated in China or Hong Kong, and any investment involving control or majority ownership, still requires prior government approval regardless of stake size — the 2026 amendment did not remove this.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">60-Day Fast Track</h3>
            <p className="text-gray-600 text-sm">A defined list of priority manufacturing sectors — including capital goods, electronic components, and polysilicon/ingot-wafer manufacturing — qualifies for a 60-day approval timeline, provided majority ownership and control remain with Indian residents.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Beneficial Ownership Mapping</h3>
            <p className="text-gray-600 text-sm">Press Note 3 looks through the full ownership chain, not just the direct investor — a global fund or holding company with Chinese beneficial ownership above the threshold can trigger approval requirements even if the investing entity itself isn't Chinese. This mapping exercise needs to happen before you file, not after.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Full company registration process in India →
          </Link>
          <Link href="/india-business-setup/fdi-channels" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FDI Channels & Investment Routes in India →
          </Link>
          <Link href="/india-business-setup/regulatory-compliance" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Regulatory Compliance for India Business Setup →
          </Link>
          <Link href="/services/risk-management" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Risk Management & Advisory Services →
          </Link>
          <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            GCC Setup in India →
          </Link>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-500">
        Regulatory information current as of the March 2026 Press Note 3 amendment. FDI policy in this area continues to evolve — confirm the current framework with our team before relying on this for a specific transaction.
      </div>
    </RegionClusterTemplate>
  )
}
