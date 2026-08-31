import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { EntitySelectorTool } from '@/components/EntitySelectorTool'
import { ArrowRight } from 'lucide-react'

export default function IndiaEntryForUSCompanies() {
  const subPages = [
    {
      title: 'US Subsidiary vs Branch Office',
      description: 'Understand the structural differences and tax implications of subsidiary vs branch operations',
      href: '/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india',
    },
    {
      title: 'How to Incorporate a Subsidiary',
      description: 'Step-by-step process for incorporating a subsidiary from the US with apostille requirements',
      href: '/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us',
    },
    {
      title: 'FEMA Compliance',
      description: 'FC-GPR, FC-TRS and annual FLA return filings, with deadline tracking for US-owned Indian subsidiaries',
      href: '/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary',
    },
    {
      title: 'Transfer Pricing & Section 482',
      description: 'Section 482 transfer pricing and Form 5471 implications for US parent companies',
      href: '/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary',
    },
    {
      title: 'Cost & Timeline',
      description: 'Transparent, structure-based fee quotes and realistic timelines for US company setup — no fixed number fits every entity, so we scope it on a short call',
      href: '/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us',
    },
  ]

  return (
    <RegionClusterTemplate
      title="Doing Business in India: The Complete Guide for US Companies"
      subtitle="AU Corporate helps US companies establish, scale, and optimize their Indian operations with expertise in GAAP to Ind AS reconciliation, transfer pricing, and Section 482 compliance."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies" },
            ]}
    >
      {/* INTRO & OVERVIEW */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Expanding into India presents significant opportunities for US companies, but requires navigating regulatory, tax, and compliance frameworks that don&apos;t map cleanly onto US structures. This page walks through the full journey — entity choice, incorporation, ongoing FEMA compliance, and the transfer pricing mechanics that connect your US and Indian filings — with links to the full depth on each step below.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our team includes CA and US CPA-qualified professionals, giving US clients a direct line to expertise in both Indian statutory requirements and US GAAP/reporting expectations from the other side of the desk.
        </p>
      </div>

      {/* ENTITY CHOICE */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Choosing a Structure: Subsidiary or Branch Office?</h2>
        <p className="text-gray-700 mb-4">
          Most US companies planning to actually sell into the Indian market — not just liaise or test the water — go the wholly-owned subsidiary (Private Limited Company) route: a separate legal entity with liability limited to the subsidiary&apos;s own assets, full commercial flexibility, and access to the automatic FDI route in most sectors. A branch office is legally an extension of the US parent rather than a separate entity, carries joint liability back to the parent, and requires specific RBI approval before commencing operations — it tends to suit narrower, shorter-term operations rather than a company planning to build a real India presence.
        </p>
        <p className="text-gray-700">
          On the US tax side, this choice matters beyond India: a subsidiary is a separate foreign corporation reported annually on Form 5471, with possible Subpart F/NCTI income inclusions even without a cash distribution, while a branch&apos;s income flows directly onto the parent&apos;s own Form 1120 and is disclosed via Form 8858 instead. See the full{' '}
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            subsidiary vs. branch office comparison
          </Link>{' '}
          for the side-by-side breakdown.
        </p>
      </div>

      <div className="mb-12">
        <EntitySelectorTool />
      </div>

      {/* INCORPORATION PROCESS */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Incorporating From the US: What Actually Slows Things Down</h2>
        <p className="text-gray-700 mb-4">
          Incorporation follows the same Companies Act, 2013 framework as any Indian company — DSC and DIN for the proposed directors, name reservation, the integrated SPICe+ Part B filing (PAN, TAN, EPFO, ESIC, and GST registration in one pass), and the Certificate of Incorporation. The part that&apos;s specific to a US parent, and the part that most often causes delay, is apostille: the US parent&apos;s certificate of incorporation, board resolution, and power of attorney typically need to be notarized in the US and then apostilled, since the US and India are both Hague Apostille Convention signatories. That process depends on US notary and Secretary of State turnaround, not anything on the Indian side — starting it in parallel with, not after, Indian name reservation is the single most effective way to compress the overall timeline.
        </p>
        <p className="text-gray-700">
          See our{' '}
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            step-by-step incorporation guide
          </Link>{' '}
          for the full process, or our sitewide{' '}
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            company registration guide
          </Link>{' '}
          for the general (non-US-specific) mechanics.
        </p>
      </div>

      {/* FEMA COMPLIANCE */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ongoing FEMA and RBI Compliance</h2>
        <p className="text-gray-700 mb-4">
          Once the subsidiary is incorporated and receives FDI from the US parent, three RBI filings under FEMA become recurring obligations: Form FC-GPR reports share allotment within 30 days of the FDI coming in, Form FC-TRS reports any later transfer of shares between resident and non-resident, and the annual FLA return is a standing yearly obligation for as long as the entity carries foreign investment — filed regardless of whether any transaction happened that year, which is exactly why it&apos;s the filing most foreign-owned subsidiaries forget once initial setup is done. US corporate calendars and RBI filing calendars don&apos;t align on their own, so this needs active tracking rather than assuming it&apos;ll get flagged automatically.
        </p>
        <p className="text-gray-700">
          Full detail on deadlines and filing mechanics: {' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance for US companies
          </Link>.
        </p>
      </div>

      {/* TRANSFER PRICING */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Transfer Pricing: Where US and Indian Filings Have to Agree</h2>
        <p className="text-gray-700 mb-4">
          Any transaction between the US parent and its Indian subsidiary — management fees, cost allocations, intercompany services, IP royalties — is a related-party transaction reviewed on both sides: Section 482 of the Internal Revenue Code on the US side, India&apos;s own transfer pricing rules (restructured as Sections 161-173 under the Income-tax Act, 2025, effective April 1, 2026) on the Indian side. Both require arm&apos;s-length pricing, but the real risk isn&apos;t aggressive pricing — it&apos;s inconsistency: the figure reported to Indian authorities not matching what shows up on Schedule M of the US parent&apos;s Form 5471. That mismatch is one of the easiest things for either tax authority to flag, which is why keeping both filings reconciled to the same underlying numbers is the single highest-value thing a joint US-India advisory relationship does.
        </p>
        <p className="text-gray-700">
          Form 3CEB (the Indian transfer pricing audit report, due October 31 for the current cycle) is proposed to be replaced by a more data-rich Form 48 from Tax Year 2026-27 under draft Income-tax Rules, 2026 — still a proposal, not yet finalized. See our full{' '}
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            transfer pricing &amp; Section 482 guide
          </Link>{' '}
          for the complete breakdown, including Safe Harbour Rules for IT/ITeS services.
        </p>
      </div>

      {/* COST AND TIMELINE */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Cost and Timeline: What Actually Drives It</h2>
        <p className="text-gray-700">
          Any single flat number quoted online for India entry is a rough average dressed up as precision. The real drivers are entity structure (subsidiary vs. branch carry different registration, audit, and ongoing compliance costs), sector and FDI route (Automatic Route moves faster and cheaper than Government Route), the number of US-based directors needing apostilled documents (each one adds time, usually more than cost), and whether the engagement is incorporation-only or includes ongoing accounting, payroll, tax, and FEMA compliance. For a standard automatic-route subsidiary with straightforward documentation, the US-side apostille step is typically the pacing item, not the Indian filing itself. See our{' '}
          <Link href="/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            full cost and timeline breakdown
          </Link>.
        </p>
      </div>

      {/* SUB-PAGES GRID */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Explore Our US India-Entry Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition group"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-600 flex items-center gap-2">
                {page.title}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
              </h3>
              <p className="text-gray-600 text-sm">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* RELATED SERVICES */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">
          Comprehensive Services for US Companies
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/india-business-setup/company-formation"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Full company registration process in India →
          </Link>
          <Link
            href="/services/taxation-regulatory"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Taxation & Regulatory Services →
          </Link>
          <Link
            href="/services/accounting-assurance"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Accounting Services →
          </Link>
          <Link
            href="/outsourcing"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Accounting Outsourcing →
          </Link>
          <Link
            href="/gcc-setup-india"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            GCC Setup in India →
          </Link>
        </div>
      </div>

      {/* BREADCRUMB JSON-LD SCHEMA */}
    </RegionClusterTemplate>
  )
}
