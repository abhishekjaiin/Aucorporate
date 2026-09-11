import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Users, ShieldCheck, FileCheck, Clock } from 'lucide-react'

const quickFacts = [
  { icon: Users, value: '2 + 2', label: 'Min. Shareholders & Directors' },
  { icon: ShieldCheck, value: '182 days', label: "Resident Director's India Stay Test" },
  { icon: FileCheck, value: 'No Minimum', label: 'Paid-Up Capital Requirement' },
  { icon: Clock, value: '180 days', label: 'Deadline to File Form INC-20A' },
]

const shareholderDirectorFacts = [
  {
    title: 'Shareholders',
    detail:
      'A private limited subsidiary needs a minimum of two shareholders. The UK parent typically holds the large majority of shares directly, with a second shareholder — often a group entity or an individual holding a nominal stake — satisfying the two-shareholder minimum.',
  },
  {
    title: 'Directors',
    detail:
      "A minimum of two directors is required. UK-based directors can serve without relocating, but at least one director on the board must meet India's resident-director test — see the section below on sourcing one.",
  },
  {
    title: 'Paid-up capital',
    detail:
      'Private companies in India have had no statutory minimum paid-up capital requirement since the Companies (Amendment) Act, 2015 removed it, so the figure a UK parent commits is a commercial decision rather than a legal floor.',
  },
  {
    title: 'Company name reservation',
    detail:
      "The Registrar will reject a proposed name that's identical or deceptively similar to an existing company or a registered trademark, and certain words (e.g. \"National\", \"Bank\", \"Insurance\") trigger an additional approval step — worth checking before you pick a name that mirrors the UK parent's own branding too closely.",
  },
]

const documentsChecklist = [
  {
    title: 'UK parent company documents',
    detail:
      "Certificate of incorporation, a board resolution authorising the Indian subsidiary and naming its signatories, and a power of attorney where one is used — each notarised by a UK solicitor first, then apostilled by the FCDO. See our apostille cost & turnaround breakdown for what to budget and how long this typically runs.",
  },
  {
    title: 'UK-based director & shareholder KYC',
    detail:
      'Notarised and apostilled passport copies, plus proof of address, for any UK-resident individual who will be a director or an individual shareholder of the Indian entity.',
  },
  {
    title: "Resident director's documents",
    detail:
      "PAN and Aadhaar (or a passport, for a foreign national meeting the residency test) and a recent address proof for the resident director — these follow India's standard KYC process rather than the apostille route.",
  },
  {
    title: 'Registered office proof',
    detail:
      "A recent utility bill or property tax receipt for the Indian registered office address, plus a no-objection letter from the property owner if the premises aren't owned by the subsidiary itself.",
  },
]

const faqs = [
  {
    q: 'How many shareholders and directors does an Indian subsidiary of a UK company need?',
    a: "A minimum of two shareholders and two directors. The UK parent can hold shares directly, with a second shareholder — often a group entity or a nominee with a nominal stake — meeting the two-shareholder minimum. At least one director must meet India's resident-director test; the rest can remain UK-based.",
  },
  {
    q: 'Does a UK director need to travel to India to incorporate the subsidiary?',
    a: "No. Digital Signature Certificates, apostilled UK documents, and the SPICe+ filing itself are all designed to be completed without an India visit — it's the UK-side steps, notarisation and FCDO apostille, that take the calendar time, not an in-person appointment.",
  },
  {
    q: "Who can serve as the resident director if the UK parent doesn't already have someone in India?",
    a: "It doesn't have to be a shareholder or an employee of the parent — a professional resident-director service, an existing India-based hire, or a director already sitting on another group company's board (provided they meet the 182-day test) can all satisfy Section 149(3) of the Companies Act, 2013. Sourcing one adds lead time and an ongoing retainer, so it's worth settling before name reservation rather than mid-incorporation.",
  },
  {
    q: 'Is there a minimum share capital required to register an Indian subsidiary?',
    a: 'No. Private companies in India have had no statutory minimum paid-up capital requirement since the Companies (Amendment) Act, 2015 removed it — the amount is a commercial decision, not a legal floor.',
  },
  {
    q: 'What is Form INC-20A, and why does it matter right after incorporation?',
    a: "It's the declaration of commencement of business, required under Section 10A of the Companies Act, 2013 within 180 days of incorporation, confirming every subscriber has actually paid for the shares they agreed to take. A subsidiary that hasn't received its capital from the UK parent and filed this on time risks the ROC striking the company off the register — which is why it needs to sit on the same calendar as the FC-GPR filing, not after it.",
  },
  {
    q: 'Do all the UK parent company documents need apostille, or only some?',
    a: "The certificate of incorporation, the board resolution authorising the Indian subsidiary, and any power of attorney used in the filing all need it. Documents that only ever exist on the India side — the Indian entity's own MOA/AOA, the resident director's PAN/Aadhaar — don't. Our cost & timeline guide has the full apostille cost and turnaround breakdown.",
  },
  {
    q: 'Can a UK LLP be the shareholder instead of a UK Ltd company?',
    a: "Yes — India's FDI rules don't require the foreign shareholder to be a specific UK entity type; an LLP, a Ltd company, or another corporate structure can all subscribe to shares, provided the underlying sector sits under the Automatic Route or has the necessary Government Route approval. See our UK subsidiary vs branch office comparison for how the India-side structure choice interacts with this.",
  },
]

export default function HowToIncorporateFromUKPage() {
  return (
    <RegionClusterTemplate
      title="How to Incorporate a Subsidiary in India from the UK"
      subtitle="The step-by-step process, including the apostille and notarization requirements specific to UK-originated documents."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies", href: "/india-entry-for-uk-companies" },
              { label: "How to Incorporate a Subsidiary in India from the UK" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Incorporating a wholly-owned Indian subsidiary of a UK parent follows the standard Companies Act, 2013 process — but UK parent-company documents need apostille certification before Indian authorities will accept them, since both the UK and India are signatories to the Hague Apostille Convention.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {quickFacts.map((stat) => (
          <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm cursor-pointer">
            <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
            <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </ClickableReveal>
        ))}
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
              detail: 'Open the Indian entity\'s bank account, remit initial capital from the UK parent, and file Form FC-GPR with the RBI within 30 days of share allotment. A share-capital company must also file Form INC-20A within 180 days of incorporation, declaring that subscribers have actually paid for their shares — miss it and the ROC can move to strike the company off the register.',
            },
          ].map((item) => (
            <ClickableInfoCard key={item.step} title={item.step} desc={item.detail} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Shareholders, Directors & Capital: What a UK Parent Needs</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {shareholderDirectorFacts.map((item) => (
            <ClickableInfoCard key={item.title} title={item.title} desc={item.detail} />
          ))}
        </div>
      </div>

      <div className="mb-12 rounded-xl border-l-4 border-yellow-400 bg-gray-50 p-6">
        <h3 className="font-bold text-lg mb-2 text-[#081a42]">The Resident Director Requirement, in Detail</h3>
        <p className="text-gray-700 mb-3">
          Under Section 149(3) of the Companies Act, 2013, every Indian company — including a wholly-owned UK subsidiary — must have at least one director who stayed in India for a total of not less than 182 days in the preceding financial year. A board made up entirely of UK-based individuals can&apos;t incorporate on its own; this is a fixed requirement, not a negotiable one.
        </p>
        <p className="text-gray-700">
          The resident director doesn&apos;t need to be a shareholder or an employee of the UK parent. Common routes are a professional resident-director service, an India-based hire brought on ahead of incorporation, or — for groups that already have another Indian entity — a director who sits on that board and independently meets the 182-day test. Because their documentation needs to be in place before the SPICe+ filing goes in, this is worth settling in parallel with UK document apostille, not after it, and it carries its own ongoing retainer cost separate from the one-time setup budget covered in our <Link href="/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold">cost &amp; timeline guide</Link>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Documents Checklist for a UK Parent Company</h2>
        <p className="text-gray-700 mb-6">
          What the UK side of the file typically needs to have ready before the Indian filing can be completed:
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {documentsChecklist.map((item) => (
            <ClickableInfoCard key={item.title} title={item.title} desc={item.detail} />
          ))}
        </div>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Where UK-origin entries usually lose time</h3>
        <p className="text-gray-700">
          As with US entries, it&apos;s rarely the Indian filing that slows things down — it&apos;s waiting on apostilled documents from the UK. Starting the FCDO apostille process for your board resolution and incorporation certificate in parallel with the Indian name-reservation step, rather than after it, is the most effective way to compress your timeline. For per-document cost estimates and the FCDO&apos;s published turnaround, see our <Link href="/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold">cost &amp; timeline breakdown</Link>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Cost & Timeline: Incorporating from the UK →
          </Link>
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
    </RegionClusterTemplate>
  )
}
