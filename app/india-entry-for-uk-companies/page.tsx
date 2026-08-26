import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ArrowRight } from 'lucide-react'

export default function IndiaEntryForUKCompanies() {
  const subPages = [
    {
      title: 'UK Subsidiary vs Branch Office',
      description: 'Understand structural differences and UK tax implications of subsidiary vs branch operations in India',
      href: '/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india',
    },
    {
      title: 'How to Incorporate a Subsidiary',
      description: 'Step-by-step process for incorporating from the UK with UK apostille and notarization requirements',
      href: '/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk',
    },
    {
      title: 'India-UK DTAA & Withholding Rates',
      description: 'India-UK Double Taxation Avoidance Agreement (DTAA) benefits and preferential withholding rates for UK companies',
      href: '/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax',
    },
    {
      title: 'FEMA Compliance',
      description: 'FC-GPR, FC-TRS and annual FLA return filings, plus FEMA structuring guidance for UK-owned Indian subsidiaries',
      href: '/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary',
    },
    {
      title: 'Cost & Timeline',
      description: 'Transparent, structure-based fee quotes and realistic timelines for UK company setup — scoped to your entity choice on a short call',
      href: '/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk',
    },
  ]

  return (
    <RegionClusterTemplate
      title="Doing Business in India: The Complete Guide for UK Companies"
      subtitle="AU Corporate specializes in helping UK companies establish and optimize their Indian operations, with expertise in India-UK DTAA planning, UK-specific compliance, and efficient structure design."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies" },
            ]}
    >
      {/* INTRO & OVERVIEW */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          UK companies entering India can use the India-UK Double Taxation Avoidance Agreement (DTAA) to reduce tax leakage and optimize withholding rates. This page walks through the full journey — entity choice, incorporation, FEMA compliance, and claiming your DTAA treaty rate — with links to the full depth on each step below.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our regulatory compliance practice handles FEMA and RBI filings for our foreign-owned subsidiary clients — including the DTAA documentation UK entities need to claim treaty rates.
        </p>
      </div>

      {/* ENTITY CHOICE */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Choosing a Structure: Subsidiary or Branch Office?</h2>
        <p className="text-gray-700 mb-4">
          Most UK companies planning to actually sell into the Indian market go the wholly-owned subsidiary (Private Limited Company) route — full commercial flexibility, liability limited to the subsidiary&apos;s own assets, and the automatic FDI route for most sectors, typically clearing in 4-6 weeks against 8-12 weeks under the Government Route. A branch office is legally an extension of the UK parent, requires specific RBI approval before commencing operations, and is taxed as a foreign company&apos;s permanent establishment — roughly 36-38% effective versus a subsidiary&apos;s ~25.17% concessional domestic rate, with PE profit attribution a recurring point of dispute with Indian tax authorities.
        </p>
        <p className="text-gray-700">
          See the full{' '}
          <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            subsidiary vs. branch office comparison
          </Link>{' '}
          for the complete tax and timeline breakdown.
        </p>
      </div>

      {/* INCORPORATION PROCESS */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Incorporating From the UK: What Actually Slows Things Down</h2>
        <p className="text-gray-700 mb-4">
          Incorporation follows the standard Companies Act, 2013 process — DSC and DIN for the proposed directors, name reservation, the integrated SPICe+ filing, and the Certificate of Incorporation. The UK-specific bottleneck is FCDO apostille: the UK parent&apos;s certificate of incorporation, board resolution, and any power of attorney need FCDO (Foreign, Commonwealth & Development Office) apostille before Indian authorities will accept them, and that process runs on UK turnaround times independent of anything happening on the Indian side. Starting the apostille process in parallel with, not after, Indian name reservation is what actually compresses the timeline.
        </p>
        <p className="text-gray-700">
          See our{' '}
          <Link href="/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            step-by-step incorporation guide
          </Link>{' '}
          for the full process, or our sitewide{' '}
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            company registration guide
          </Link>{' '}
          for the general mechanics.
        </p>
      </div>

      {/* DTAA */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Claiming Your India-UK DTAA Treaty Rate</h2>
        <p className="text-gray-700 mb-4">
          The India-UK DTAA caps withholding well below India&apos;s 20% domestic rate: 10% on dividends generally (15% for certain property-income distributions), 10% on interest paid to a bank/financial institution (15% otherwise), and 15% on royalties and fees for technical services (10% for equipment royalties). None of that applies automatically — a valid Tax Residency Certificate (TRC) from HMRC is mandatory before the Indian payer can apply the treaty rate instead of the domestic one, alongside a Form 10F self-declaration. The most common way UK companies lose the treaty benefit isn&apos;t eligibility, it&apos;s timing: if the TRC isn&apos;t in place before a payment is processed, the Indian payer defaults to the higher domestic rate and reclaiming the difference afterward is a separate, slower process.
        </p>
        <p className="text-gray-700">
          Full rate table and TRC/Form 10F detail: {' '}
          <Link href="/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            India-UK DTAA &amp; withholding rates
          </Link>.
        </p>
      </div>

      {/* FEMA COMPLIANCE */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ongoing FEMA and RBI Compliance</h2>
        <p className="text-gray-700">
          Once the subsidiary receives FDI from the UK parent, three RBI filings become recurring: Form FC-GPR reports share allotment within 30 days of the investment, Form FC-TRS reports any later transfer between resident and non-resident, and the annual FLA return is a standing yearly obligation regardless of whether any transaction occurred — the filing most foreign-owned subsidiaries forget once initial setup is done. FEMA compliance and DTAA treaty benefits are handled by different authorities (RBI vs. Indian tax authorities) but depend on the same underlying paperwork discipline — a subsidiary with clean FEMA filing history has an easier time when the UK parent later needs a TRC cross-check. Full detail: {' '}
          <Link href="/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance for UK companies
          </Link>.
        </p>
      </div>

      {/* COST AND TIMELINE */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Cost and Timeline: What Actually Drives It</h2>
        <p className="text-gray-700">
          Real drivers: entity structure (subsidiary vs. branch carry different registration, audit, and compliance costs), sector and FDI route, the number of UK-based directors needing FCDO apostille (each one adds time more than cost), and whether the engagement is incorporation-only or includes ongoing accounting, payroll, tax, and FEMA/DTAA compliance. For a standard automatic-route subsidiary, the FCDO apostille step is typically the pacing item, not the Indian filing. See our{' '}
          <Link href="/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            full cost and timeline breakdown
          </Link>.
        </p>
      </div>

      {/* SUB-PAGES GRID */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Explore Our UK India-Entry Services
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
          Comprehensive Services for UK Companies
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
            Outsourcing Services →
          </Link>
          <Link
            href="/gcc-setup-india"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            GCC Setup in India →
          </Link>
        </div>
      </div>

      {/* BREADCRUMB */}
    </RegionClusterTemplate>
  )
}
