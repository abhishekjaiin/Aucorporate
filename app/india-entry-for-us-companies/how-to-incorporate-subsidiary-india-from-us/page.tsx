import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function HowToIncorporateFromUSPage() {
  return (
    <RegionClusterTemplate
      title="How to Incorporate a Subsidiary in India from the US"
      subtitle="The step-by-step process, including the apostille and notarization requirements specific to US-originated documents."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "How to Incorporate a Subsidiary in India from the US" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Incorporating a wholly-owned Indian subsidiary of a US parent follows the same Companies Act, 2013 framework as any Indian company — but US parent-company documents need to be authenticated in a specific way before Indian authorities will accept them, since the US and India are both signatories to the Hague Apostille Convention.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Process</h2>
        <div className="space-y-4">
          {[
            {
              step: '1. Digital Signature Certificate (DSC) & Director Identification Number (DIN)',
              detail: 'Required for the proposed Indian directors before any filing can begin. If a US-based individual will also be a director, their documents need apostille certification at this stage.',
            },
            {
              step: '2. Name Reservation (RUN / SPICe+ Part A)',
              detail: 'Reserve the proposed company name with the Registrar of Companies (ROC).',
            },
            {
              step: '3. Apostille & Notarization of US Parent Documents',
              detail: 'The US parent company\'s certificate of incorporation, board resolution authorizing the Indian subsidiary, and power of attorney typically need to be notarized in the US and then apostilled — this is the step that most often causes delays if not started early, since it depends on US notary and Secretary of State turnaround times, not anything on the Indian side.',
            },
            {
              step: '4. SPICe+ Part B Filing',
              detail: 'The integrated incorporation form covering PAN, TAN, EPFO, ESIC, and GST registration (optional) alongside company incorporation itself.',
            },
            {
              step: '5. Certificate of Incorporation',
              detail: 'Issued by the ROC once all filings are approved — this is when the Indian entity legally exists.',
            },
            {
              step: '6. Bank Account & FDI Inflow',
              detail: 'Open the Indian entity\'s bank account, remit the initial capital from the US parent, and file Form FC-GPR with the RBI within 30 days of share allotment.',
            },
          ].map((item) => (
            <div key={item.step} className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Where US-origin entries usually lose time</h3>
        <p className="text-gray-700">
          It&apos;s almost never the Indian-side filing that slows things down — it&apos;s waiting on apostilled documents from the US. Starting the apostille process for your board resolution and incorporation certificate in parallel with, not after, the Indian name-reservation step is the single most effective way to compress your overall timeline.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for US Companies →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
