import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export default function HowToIncorporateFromUKPage() {
  return (
    <RegionClusterTemplate
      title="How to Incorporate a Subsidiary in India from the UK"
      subtitle="The step-by-step process, including the apostille and notarization requirements specific to UK-originated documents."
      region="UK"
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Incorporating a wholly-owned Indian subsidiary of a UK parent follows the standard Companies Act, 2013 process — but UK parent-company documents need apostille certification before Indian authorities will accept them, since both the UK and India are signatories to the Hague Apostille Convention.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Process</h2>
        <div className="space-y-4">
          {[
            {
              step: '1. Digital Signature Certificate (DSC) & Director Identification Number (DIN)',
              detail: 'Required for the proposed Indian directors. If a UK-based individual will also serve as director, their documents need apostille certification at this stage.',
            },
            {
              step: '2. Name Reservation (RUN / SPICe+ Part A)',
              detail: 'Reserve the proposed company name with the Registrar of Companies (ROC).',
            },
            {
              step: '3. Apostille & Notarization of UK Parent Documents',
              detail: 'The UK parent company\'s certificate of incorporation, board resolution authorizing the Indian subsidiary, and power of attorney typically need notarization and apostille via the UK\'s FCDO — the step most likely to set your overall pace, since it runs on UK government processing times, not Indian ones.',
            },
            {
              step: '4. SPICe+ Part B Filing',
              detail: 'The integrated incorporation form covering PAN, TAN, EPFO, ESIC, and GST registration (optional) alongside company incorporation.',
            },
            {
              step: '5. Certificate of Incorporation',
              detail: 'Issued by the ROC once all filings are approved — the Indian entity legally exists from this point.',
            },
            {
              step: '6. Bank Account & FDI Inflow',
              detail: 'Open the Indian entity\'s bank account, remit initial capital from the UK parent, and file Form FC-GPR with the RBI within 30 days of share allotment.',
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
        <h3 className="font-bold text-lg mb-2">Where UK-origin entries usually lose time</h3>
        <p className="text-gray-700">
          As with US entries, it&apos;s rarely the Indian filing that slows things down — it&apos;s waiting on apostilled documents from the UK. Starting the FCDO apostille process for your board resolution and incorporation certificate in parallel with the Indian name-reservation step, rather than after it, is the most effective way to compress your timeline.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            UK Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            India-UK DTAA & Withholding Rates →
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
              { '@type': 'ListItem', position: 3, name: 'How to Incorporate a Subsidiary', item: 'https://www.theaucorp.com/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk' },
            ],
          }),
        }}
      />
    </RegionClusterTemplate>
  )
}
