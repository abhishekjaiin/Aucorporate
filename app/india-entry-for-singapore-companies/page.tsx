import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function IndiaEntryForSingaporeCompanies() {
  return (
    <RegionClusterTemplate
      title="India Entry for Singapore Companies"
      subtitle="AU Corporate helps Singapore-based companies establish and scale their Indian operations, with expertise in India-Singapore DTAA planning, FEMA compliance, and GCC setup."
      region="Singapore"
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Singapore is one of the largest sources of FDI into India, and many Singapore-headquartered companies — including regional holding structures for global groups — use it as the base for their India entry. Our team helps you navigate entity selection, the India-Singapore DTAA, and the FEMA compliance obligations that follow incorporation.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our regulatory compliance work is led by Rimpi Jain, Company Secretary, who handles the FEMA and RBI filings foreign-owned subsidiaries need — including the documentation Singapore entities require to access DTAA benefits.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          What Singapore Companies Need to Know
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Entity Structure</h3>
            <p className="text-gray-600 text-sm">Most Singapore companies enter via a wholly-owned Private Limited subsidiary, giving full commercial flexibility under the automatic FDI route for most sectors.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">India-Singapore DTAA</h3>
            <p className="text-gray-600 text-sm">Reduces withholding tax on dividends, interest, and royalties repatriated to Singapore, subject to a valid Tax Residency Certificate and Form 10F being in place before repatriation.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">FEMA & RBI Filings</h3>
            <p className="text-gray-600 text-sm">Form FC-GPR on share allotment, Form FC-TRS on any transfer, and the annual FLA return — the same core filings that apply to any foreign-owned Indian subsidiary.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">GCC Setup</h3>
            <p className="text-gray-600 text-sm">Singapore is a common staging base for companies setting up a Global Capability Center in India — we support the entity, tax, and operational setup end to end.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">
          Comprehensive Services for Singapore Companies
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theaucorp.com' },
              { '@type': 'ListItem', position: 2, name: 'India Entry for Singapore Companies', item: 'https://www.theaucorp.com/india-entry-for-singapore-companies' },
            ],
          }),
        }}
      />
    </RegionClusterTemplate>
  )
}
