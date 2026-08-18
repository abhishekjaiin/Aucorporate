import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function CostTimelineUSPage() {
  return (
    <RegionClusterTemplate
      title="Cost & Timeline: Incorporating a Company in India from the US"
      subtitle="What actually drives the cost and timeline of an India entry — and why a single flat number rarely fits."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "Cost & Timeline: Incorporating a Company in India from the US" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Every India-entry quote we&apos;ve seen quoted as a single flat number online is a rough average dressed up as precision. The real cost and timeline for a US company depends on a handful of specific choices you make early — and getting those choices right the first time is usually worth more than shaving a few days off the process.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Actually Drives Cost</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold mb-2">Entity structure</h3>
            <p className="text-gray-600 text-sm">A wholly-owned subsidiary (Private Limited) has different registration, audit, and ongoing compliance costs than a branch or liaison office.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold mb-2">Sector & FDI route</h3>
            <p className="text-gray-600 text-sm">Automatic-route sectors move faster and cheaper than sectors requiring government approval.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold mb-2">Number of directors & apostille documents</h3>
            <p className="text-gray-600 text-sm">Each US-based director needing apostilled documents adds both cost and — usually the bigger factor — time, since it depends on US notary/Secretary of State processing.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold mb-2">Ongoing scope</h3>
            <p className="text-gray-600 text-sm">Whether you need us for incorporation only, or incorporation plus ongoing accounting, payroll, tax, and FEMA compliance, changes the engagement significantly.</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Typical Timeline Shape</h2>
        <p className="text-gray-700 mb-4">
          For a standard automatic-route Private Limited subsidiary with straightforward documentation, incorporation itself (DSC/DIN through Certificate of Incorporation) generally moves faster than the apostille step on the US side — the US document authentication is usually the pacing item, not the Indian filing. Post-incorporation, bank account opening and the FC-GPR filing add further time before the entity is fully operational for fund transfers.
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
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            How to Incorporate a Subsidiary from the US →
          </Link>
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
