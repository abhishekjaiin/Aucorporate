'use client'

import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function IndiaEntryForJapanCompanies() {
  return (
    <RegionClusterTemplate
      title="India Entry for Japanese Companies"
      subtitle="AU Corporate helps Japanese companies establish and scale their Indian operations, with expertise in India-Japan DTAA planning, FEMA compliance, and manufacturing-sector entry structuring."
      region="Japan"
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Japan is consistently one of India's largest sources of FDI, particularly in automotive, electronics, and industrial manufacturing — sectors where Japanese companies often combine a wholly-owned subsidiary with joint-venture partnerships depending on the specific line of business. Our team helps you evaluate the JV-vs-wholly-owned-subsidiary decision, navigate the India-Japan DTAA, and manage the FEMA compliance obligations that follow incorporation.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our regulatory compliance work is led by Rimpi Jain, Company Secretary, who handles the FEMA and RBI filings foreign-owned subsidiaries need — including the documentation Japanese entities require to access DTAA benefits on dividend and royalty repatriation.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          What Japanese Companies Need to Know
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">JV vs Wholly-Owned Subsidiary</h3>
            <p className="text-gray-600 text-sm">Manufacturing-heavy Japanese entrants often weigh a joint venture (local partner access, faster market entry) against a wholly-owned subsidiary (full control, cleaner IP protection) — the right call depends on sector, distribution needs, and risk appetite.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">India-Japan DTAA</h3>
            <p className="text-gray-600 text-sm">A flat 10% withholding rate applies across dividends, interest, and royalties/fees for technical services — well below India's 20% domestic withholding rate on non-resident dividends, subject to a valid Tax Residency Certificate.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Transfer Pricing on Intercompany Flows</h3>
            <p className="text-gray-600 text-sm">Intercompany loans, management fees, and royalty/IP licensing arrangements between a Japanese parent and Indian subsidiary must be arm's-length documented under Section 92 — particularly relevant given how common hybrid equity-plus-debt funding structures are for Japanese manufacturing entrants.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">FEMA & RBI Filings</h3>
            <p className="text-gray-600 text-sm">Form FC-GPR on share allotment, Form FC-TRS on any transfer, and the annual FLA return — the same core filings that apply to any foreign-owned Indian subsidiary, JV or wholly-owned.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/blog/india-safe-harbour-rules-2026" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India's 2026 Safe Harbour Rules: 15.5% IT Margin Explained →
          </Link>
          <Link href="/india-business-setup/fdi-channels" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FDI Channels & Investment Routes in India →
          </Link>
          <Link href="/doing-business-in-india/why-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Why Invest in India →
          </Link>
          <Link href="/services/transaction-advisory" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transaction & Business Advisory Services →
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theaucorp.com' },
              { '@type': 'ListItem', position: 2, name: 'India Entry for Japanese Companies', item: 'https://www.theaucorp.com/india-entry-for-japan-companies' },
            ],
          }),
        }}
      />
    </RegionClusterTemplate>
  )
}
