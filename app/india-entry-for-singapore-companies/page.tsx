import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function IndiaEntryForSingaporeCompanies() {
  return (
    <RegionClusterTemplate
      title="India Entry for Singapore Companies"
      subtitle="AU Corporate helps Singapore-based companies establish and scale their Indian operations, with expertise in India-Singapore DTAA planning, FEMA compliance, and GCC setup."
      region="Singapore"
      breadcrumbItems={[
              { label: "India Entry for Singapore Companies" },
            ]}
    >
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Singapore has been India's single largest source of FDI for seven consecutive years, with cumulative investment since 2000 approaching $195 billion — ahead of every other country, including the US. Many Singapore-headquartered companies, including regional holding structures for global groups, use it as the base for their India entry, in large part because of the country's role as a global financial hub and gateway for private equity and venture capital into India. Our team helps you navigate entity selection, the India-Singapore DTAA, and the FEMA compliance obligations that follow incorporation.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our regulatory compliance practice handles the FEMA and RBI filings foreign-owned subsidiaries need — including the documentation Singapore entities require to access DTAA benefits.
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
            <h3 className="font-bold text-lg mb-2">India-Singapore DTAA Rates</h3>
            <p className="text-gray-600 text-sm">10% withholding on dividends where the recipient holds at least 25% of the paying company's shares (15% otherwise), 10% on interest from banks/financial institutions (15% otherwise), and a flat 10% on royalties and fees for technical services.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Capital Gains &amp; Grandfathering</h3>
            <p className="text-gray-600 text-sm">Gains on Indian shares acquired after 1 April 2017 are taxable in India under the treaty; shares acquired before that date remain grandfathered under the older capital-gains exemption. Acquisition timing matters for any Singapore holding structure.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Limitation of Benefits (LOB)</h3>
            <p className="text-gray-600 text-sm">Treaty benefits are denied to entities without genuine economic substance. Your Singapore entity needs to satisfy at least one test: listed on a recognised exchange, under 50% of gross income paid to non-residents with at least 50% beneficial ownership held in India or Singapore, or an active trade or business beyond investment holding — the same substance question at the center of{" "}
              <Link href="/blog/mail-box-dtaa-benefits" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                the Tiger Global mailbox-company ruling
              </Link>.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">FEMA &amp; RBI Filings</h3>
            <p className="text-gray-600 text-sm">Form FC-GPR on share allotment, Form FC-TRS on any transfer, and the annual FLA return — the same core filings that apply to any foreign-owned Indian subsidiary.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">GCC Setup</h3>
            <p className="text-gray-600 text-sm">Singapore is a common staging base for companies setting up a Global Capability Center in India — we support the entity, tax, and operational setup end to end. See our <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">complete GCC setup guide</Link>.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">
          Comprehensive Services for Singapore Companies
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/india-business-setup/company-formation" className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold">
            Full company registration process in India →
          </Link>
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
