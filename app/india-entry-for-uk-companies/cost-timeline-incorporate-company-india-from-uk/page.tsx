'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function CostTimelineUKPage() {
  return (
    <RegionClusterTemplate
      title="Cost & Timeline: Incorporating a Company in India from the UK"
      subtitle="What actually drives the cost and timeline of an India entry — and why a single flat number rarely fits."
      region="UK"
    >
      <h1 className="sr-only">Cost and Timeline to Incorporate a Company in India from the UK</h1>

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          A single flat quote for "India company setup" is a rough average dressed up as precision. The real cost and timeline for a UK company depends on a handful of specific choices — getting those right the first time matters more than shaving a few days off the process.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Actually Drives Cost</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold mb-2">Entity structure</h3>
            <p className="text-gray-600 text-sm">A wholly-owned subsidiary has different registration, audit, and ongoing compliance costs than a branch office.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold mb-2">Sector & FDI route</h3>
            <p className="text-gray-600 text-sm">Automatic-route sectors move faster and cheaper than sectors requiring government approval.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold mb-2">Number of directors & apostille documents</h3>
            <p className="text-gray-600 text-sm">Each UK-based director needing FCDO apostille adds cost and — usually the bigger factor — time.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold mb-2">Ongoing scope</h3>
            <p className="text-gray-600 text-sm">Whether you need incorporation only, or incorporation plus ongoing accounting, payroll, tax, and FEMA/DTAA compliance, changes the engagement significantly.</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Typical Timeline Shape</h2>
        <p className="text-gray-700 mb-4">
          For a standard automatic-route Private Limited subsidiary with straightforward documentation, incorporation itself generally moves faster than the FCDO apostille step on the UK side — UK document authentication tends to be the pacing item, not the Indian filing. Post-incorporation, bank account opening and the FC-GPR filing add further time before the entity is fully operational for fund transfers.
        </p>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Why we don&apos;t publish a flat fee</h3>
        <p className="text-gray-700 mb-4">
          We could give you a number that&apos;s wrong for your situation, or we could ask you five questions and give you a number that&apos;s right. We do the second one — it takes one short call.
        </p>
        <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
          <Link href="/contact">Get a Scoped Quote</Link>
        </Button>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            How to Incorporate a Subsidiary from the UK →
          </Link>
          <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            UK Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-uk-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for UK Companies
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
              { '@type': 'ListItem', position: 2, name: 'India Entry for UK Companies', item: 'https://www.theaucorp.com/india-entry-for-uk-companies' },
              { '@type': 'ListItem', position: 3, name: 'Cost & Timeline', item: 'https://www.theaucorp.com/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk' },
            ],
          }),
        }}
      />
    </RegionClusterTemplate>
  )
}
