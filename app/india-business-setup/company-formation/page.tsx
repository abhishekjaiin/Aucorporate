import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { HubSpotLeadForm } from '@/components/HubSpotLeadForm'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const entityTypes = [
  { name: 'Private Limited Company', features: ['Minimum 2 shareholders', 'Separate legal entity', 'Limited liability', 'Recommended for most foreign investments'] },
  { name: 'Public Company', features: ['Minimum 7 shareholders', 'Listed on stock exchange', 'Higher compliance', 'Not recommended for initial setup'] },
]

const incorporationSteps = [
  'Choose the appropriate Indian entity and ownership structure.',
  'Check the applicable FDI policy, sectoral conditions and approval route.',
  'Prepare corporate, identity, address and foreign-parent documents.',
  'Complete name, director and incorporation filings with the MCA.',
  'Complete post-incorporation registrations, banking and tax requirements.',
  'Complete applicable FEMA/RBI reporting and ongoing statutory compliance.',
]

export default function CompanyFormationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'India Business Setup', href: '/india-business-setup' }, { label: 'Company Formation' }]} />
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">India Company Formation</span>
          <h1 className="mb-6 mt-3 max-w-4xl text-4xl font-bold text-gray-900 md:text-5xl">Company Formation in India for Foreign Companies and Investors</h1>
          <p className="mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">Complete guide to registering your Indian company entity. From entity selection to statutory filings, we cover every step of the incorporation process.</p>
          <p className="mb-8 max-w-3xl leading-relaxed text-gray-600">AU Corporate supports international businesses with India company incorporation, foreign-owned subsidiary setup, FDI structuring, documentation, tax registrations and post-incorporation compliance.</p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500"><Link href="/india-business-setup/regulatory-compliance">Next: Regulatory Compliance <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </section>

      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4"><div className="mb-10 max-w-3xl"><h2 className="text-4xl font-bold text-gray-900">Entity Types in India</h2><p className="mt-4 leading-relaxed text-gray-600">The right legal structure depends on ownership, business activity, FDI rules, commercial objectives and the level of control required by the foreign investor.</p></div><div className="grid gap-8 md:grid-cols-2">{entityTypes.map((entity) => <div key={entity.name} className="rounded-xl border p-6"><h3 className="mb-4 text-lg font-bold">{entity.name}</h3><ul className="space-y-2">{entity.features.map((feature) => <li key={feature} className="flex gap-2 text-gray-700"><span className="font-bold text-yellow-600">•</span>{feature}</li>)}</ul></div>)}</div></div></section>

      <section className="bg-gray-50 py-20"><div className="mx-auto max-w-7xl px-4"><h2 className="text-3xl font-bold text-gray-900 md:text-4xl">How to Register a Company in India</h2><p className="mt-4 max-w-3xl leading-relaxed text-gray-600">For foreign investors, incorporation is only one part of establishing an Indian presence. FDI, documentation, tax, banking and post-incorporation reporting should be planned together.</p><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{incorporationSteps.map((step, index) => <div key={step} className="rounded-xl border bg-white p-6"><div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">{index + 1}</div><p className="leading-relaxed text-gray-700">{step}</p></div>)}</div></div></section>

      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4"><h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Foreign Company Registration and FDI Considerations</h2><p className="mt-4 max-w-4xl leading-relaxed text-gray-600">Where a foreign company or overseas shareholder invests in an Indian entity, the structure should be assessed against the applicable FDI policy, sector-specific conditions and reporting requirements. The incorporation documentation may also require foreign corporate documents and resolutions. The MCA&apos;s SPICe+ instructions specifically address cases where a proposed company has a foreign company or overseas body corporate as a subscriber.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{['Entity and ownership structure', 'FDI route and sector conditions', 'Foreign shareholder documentation', 'FEMA/RBI and post-incorporation compliance'].map((item) => <div key={item} className="rounded-xl border p-5"><CheckCircle2 className="mb-3 h-5 w-5 text-yellow-600" /><p className="text-sm font-medium text-gray-800">{item}</p></div>)}</div></div></section>

      <section className="bg-gray-50 py-16"><div className="mx-auto max-w-7xl px-4"><HubSpotLeadForm title="Planning to Set Up Your Business in India?" description="Tell us about your company formation requirements and our India business team will get in touch." /></div></section>

      <section className="border-t bg-white py-16"><div className="mx-auto max-w-7xl px-4"><h2 className="mb-8 text-2xl font-bold">Next Steps</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><Link href="/doing-business-in-india/incorporation" className="rounded-lg border p-6 transition hover:shadow-md"><h3 className="mb-2 font-semibold">Incorporation Services</h3><p className="text-sm text-gray-600">Full-service support: registration, FDI compliance, GST, and more</p></Link><Link href="/india-business-setup/regulatory-compliance" className="rounded-lg border p-6 transition hover:shadow-md"><h3 className="mb-2 font-semibold">Regulatory Compliance</h3><p className="text-sm text-gray-600">Statutory requirements and ongoing compliance</p></Link><Link href="/contact" className="rounded-lg border p-6 transition hover:shadow-md"><h3 className="mb-2 font-semibold">Schedule Consultation</h3><p className="text-sm text-gray-600">Get expert assistance with company formation</p></Link></div></div></section>
    </main>
  )
}
