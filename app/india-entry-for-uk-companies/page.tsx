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
      title="India Entry for UK Companies"
      subtitle="AU Corporate specializes in helping UK companies establish and optimize their Indian operations, with expertise in India-UK DTAA planning, UK-specific compliance, and efficient structure design."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies" },
            ]}
    >
      {/* INTRO & OVERVIEW */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          UK companies looking to enter India can leverage the India-UK Double Taxation Avoidance Agreement (DTAA) to minimize tax leakage and optimize withholding rates. Our specialized team understands UK tax residency rules, apostille documentation requirements, and the unique compliance obligations for UK-controlled Indian subsidiaries.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our regulatory compliance work is led by Rimpi Jain, Company Secretary, who handles FEMA and RBI filings for our foreign-owned subsidiary clients — including the DTAA documentation UK entities need to claim treaty rates.
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
        </div>
      </div>

      {/* BREADCRUMB */}
    </RegionClusterTemplate>
  )
}
