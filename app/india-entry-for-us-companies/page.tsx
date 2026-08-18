import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
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
      title="India Entry for US Companies"
      subtitle="AU Corporate helps US companies establish, scale, and optimize their Indian operations with expertise in GAAP to Ind AS reconciliation, transfer pricing, and Section 482 compliance."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies" },
            ]}
    >
      {/* INTRO & OVERVIEW */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Expanding into India presents significant opportunities for US companies, but requires careful navigation of regulatory, tax, and compliance frameworks. Our team specializes in guiding US corporations through every stage of India entry—from entity selection and incorporation to ongoing FEMA compliance and transfer pricing management.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our team includes Gulshan Grover, CA and US CPA, giving US clients a direct line to someone who understands both Indian statutory requirements and US GAAP/reporting expectations from the other side of the desk.
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
        </div>
      </div>

      {/* BREADCRUMB JSON-LD SCHEMA */}
    </RegionClusterTemplate>
  )
}
