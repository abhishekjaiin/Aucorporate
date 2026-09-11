import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Timer, Clock, IndianRupee, FileCheck } from 'lucide-react'

const timelinePhases = [
  {
    week: 'Week 1-2',
    title: 'Entity Selection, DSC/DIN & UK Document Prep',
    desc: "Choosing between a wholly-owned subsidiary, an LLP, or a branch/liaison office, applying for a Digital Signature Certificate (DSC) for each proposed director, and — in parallel, not afterwards — starting notarisation and FCDO apostille on the UK parent's certificate of incorporation, board resolution and power of attorney. Starting this UK-side step early is the single biggest lever a UK founder has over the total timeline.",
  },
  {
    week: 'Week 2-4',
    title: 'Name Reservation & SPICe+ Filing',
    desc: 'Name reservation and the SPICe+ Part B incorporation filing with the Registrar of Companies, covering PAN, TAN, EPFO and ESIC alongside incorporation itself. Automatic Route FDI sectors generally clear within this window; sectors requiring Government Approval Route sign-off run longer because DPIIT and sector-ministry review sit on top of the standard filing.',
  },
  {
    week: 'Week 4-6',
    title: 'Certificate of Incorporation & Bank Account',
    desc: "PAN and TAN arrive automatically with the Certificate of Incorporation, but opening a corporate current account still needs the MOA/AOA, KYC documents and a board resolution, and the account has to sit with an RBI-authorised (AD Category-I) bank. An apostille that's still in transit from the UK is the most common reason this phase slips for a UK-origin entity specifically.",
  },
  {
    week: 'Week 6-8',
    title: 'Capital Inflow & FC-GPR Filing',
    desc: 'Once the account is open, the UK parent remits initial share capital and Form FC-GPR is filed with the RBI within 30 days of share allotment. GST registration is completed here too, where the turnover threshold applies or voluntary registration is chosen for an entity initially billing only its UK parent.',
  },
  {
    week: 'Week 8-12',
    title: 'Operational Readiness',
    desc: 'Statutory registers, payroll and accounting setup, and the ongoing compliance calendar — annual RoC filings, the FLA return, board meeting cadence — are in place before day-to-day operations ramp up. This is the point a straightforward Automatic Route subsidiary is typically banked, funded and ready to invoice.',
  },
]

const costComponents = [
  { item: 'Company Registration', cost: '₹3,000-5,000', desc: 'MCA name reservation and filing charges. The SPICe+ filing itself is fee-exempt for authorised capital up to ₹15 lakh, so most of this line is state stamp duty on the incorporation documents.' },
  { item: 'Legal & Documentation', cost: '₹10,000-20,000', desc: 'Drafting the MOA/AOA and board resolutions on the India side — separate from the UK-side notarisation and apostille cost below.' },
  { item: 'Bank Account Setup', cost: '₹5,000-10,000', desc: "KYC documentation support and coordination with an RBI-authorised (AD Category-I) bank, excluding the bank's own minimum-balance requirement." },
  { item: 'Tax Registration', cost: '₹2,000-5,000', desc: 'PAN/TAN arrive automatically with incorporation; this line mainly covers GST registration support once it applies.' },
  { item: 'Compliance Setup', cost: '₹15,000-25,000', desc: 'Statutory registers, first board meeting documentation, EPFO/ESIC setup, and initial accounting and payroll configuration.' },
  { item: 'Professional Fees', cost: '₹20,000-50,000', desc: 'The advisory/CA/CS fee for managing the filing end-to-end. A foreign director, a Government Route sector, or sourcing a resident director all push this toward the higher end.' },
]

const faqs = [
  {
    q: 'How much does it cost for a UK company to set up a subsidiary in India?',
    a: 'There is no single number that fits every UK entrant, which is why we scope rather than quote off a price list. As a reference point, the India-side one-time setup components — government filing, legal documentation, bank account setup, tax registration, compliance setup and professional fees — typically sum to somewhere between roughly ₹55,000 and ₹1,15,000+ depending on entity complexity and state, on top of which a UK company should separately budget for FCDO apostille and UK notary costs, and for recurring annual compliance once the entity is live. See our full cost breakdown for the granular per-item ranges.',
  },
  {
    q: 'How long does it take to incorporate a company in India from the UK?',
    a: "India-side incorporation under the Automatic Route generally clears in 4-6 weeks. The full path from entity selection through a working, banked, funded entity typically runs 8-12 weeks end to end for a UK entrant — longer than the India-only figure because it includes UK document apostille, bank account opening, and the FC-GPR filing. Government Approval Route sectors run 8-12 weeks for the filing alone, before banking and capital inflow.",
  },
  {
    q: "What is apostille, and why does it matter more for UK entrants than the Indian filing does?",
    a: "Apostille is the certification under the Hague Apostille Convention (both the UK and India are signatories) that makes a UK-issued document — typically the parent company's certificate of incorporation, board resolution and power of attorney — legally recognised in India without further embassy legalisation. For a UK parent, a solicitor or notary public must certify the documents first; only then will the FCDO attach the apostille. This runs entirely on UK government processing time, not Indian filing time, which is why it's consistently the pacing item for UK-origin incorporations rather than the SPICe+ filing itself.",
  },
  {
    q: 'How much does UK apostille and notarisation cost, and how long does it take?',
    a: "Budget roughly £40-£90+ per document once notary and FCDO fees are combined, depending on document count and whether standard postal, next-day business, or e-Apostille service is used. The FCDO's published standard postal turnaround runs up to around 25 working days, plus courier time each way — which is why starting this in parallel with Indian name reservation, rather than after incorporation is filed, is the most effective way to compress the overall timeline.",
  },
  {
    q: 'Does a UK company need a resident director in India?',
    a: "Yes — every Indian company needs at least one director who has stayed in India for a total of not less than 182 days in the preceding financial year, so a board made up entirely of UK-based individuals can't incorporate on its own. Where a UK parent doesn't have a resident candidate lined up, sourcing and appointing one adds both time (the paperwork needs to be in place before incorporation) and an ongoing retainer cost that sits outside the one-time setup budget.",
  },
  {
    q: 'Is the Indian government filing fee actually free?',
    a: 'The SPICe+ incorporation filing is fee-exempt for companies with authorised capital up to ₹15 lakh under the Companies (Registration Offices and Fees) Rules — but that covers only the MCA filing fee. Stamp duty on the incorporation documents is a separate, state-level charge that still applies and varies depending on where the registered office is, which is a common gap in "free registration" claims aimed at foreign founders.',
  },
  {
    q: 'Does it cost more to set up a subsidiary than a branch office?',
    a: 'The two carry different cost and compliance profiles rather than one simply costing more than the other — a wholly-owned subsidiary and a branch office differ in audit scope, RBI approval requirements, and ongoing filing obligations. See our UK subsidiary vs branch office comparison for the specifics before assuming either is the cheaper default.',
  },
]

export default function CostTimelineUKPage() {
  return (
    <RegionClusterTemplate
      title="Cost & Timeline: Incorporating a Company in India from the UK"
      subtitle="What actually drives the cost and timeline of an India entry — and why a single flat number rarely fits."
      region="UK"
      breadcrumbItems={[
              { label: "India Entry for UK Companies", href: "/india-entry-for-uk-companies" },
              { label: "Cost & Timeline: Incorporating a Company in India from the UK" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          A single flat quote for "India company setup" is a rough average dressed up as precision. The real cost and timeline for a UK company depends on a handful of specific choices — getting those right the first time matters more than shaving a few days off the process. For a UK entrant specifically, one variable outweighs the rest: UK document apostille almost always paces the whole project, not the Indian filing.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { icon: Timer, value: '4-6 weeks', label: 'Automatic Route (India-side)' },
          { icon: Clock, value: '8-12 weeks', label: 'Full Setup, End to End' },
          { icon: IndianRupee, value: '₹55K-1.15L+', label: 'Typical One-Time Setup Cost' },
          { icon: FileCheck, value: '1-3 weeks', label: 'UK FCDO Apostille Turnaround' },
        ].map((stat) => (
          <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm cursor-pointer">
            <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
            <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </ClickableReveal>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Actually Drives Cost</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ClickableInfoCard title="Entity structure" desc="A wholly-owned subsidiary has different registration, audit, and ongoing compliance costs than a branch office." />
          <ClickableInfoCard title="Sector & FDI route" desc="Automatic-route sectors move faster and cheaper than sectors requiring government approval." />
          <ClickableInfoCard title="Number of directors & apostille documents" desc="Each UK-based director needing FCDO apostille adds cost and — usually the bigger factor — time." />
          <ClickableInfoCard title="Ongoing scope" desc="Whether you need incorporation only, or incorporation plus ongoing accounting, payroll, tax, and FEMA/DTAA compliance, changes the engagement significantly." />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What the Cost Components Typically Look Like</h2>
        <p className="text-gray-700 mb-6">
          These aren&apos;t a quote — they&apos;re the components a scoped quote is built from, so you can see roughly where the money goes before you ask us the five questions that turn this into a real number. For the full per-item breakdown alongside the ongoing annual compliance costs that follow registration, see our <Link href="/india-business-setup/timeline-resources" className="text-yellow-600 hover:text-yellow-700 font-semibold">timeline &amp; budget guide</Link>.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {costComponents.map((item) => (
            <div key={item.item} className="p-6 bg-white border rounded-2xl shadow-sm h-full flex flex-col">
              <h3 className="font-semibold text-lg mb-1 text-[#081a42] leading-snug">{item.item}</h3>
              <p className="text-xl font-bold text-yellow-600 mb-2">{item.cost}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-700">
          On top of these India-side components, a UK founder should separately budget for UK notary and FCDO apostille fees (typically £40-£90+ per document — see below) and, once the entity is operating, recurring annual compliance: statutory audit, RoC filings, income tax, GST where registered, and the Annual FLA return to RBI for as long as foreign investment is on the books.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Timeline: Phase by Phase</h2>
        <p className="text-gray-700 mb-6">
          For a standard Automatic Route Private Limited subsidiary with straightforward documentation, incorporation itself generally moves faster than the FCDO apostille step on the UK side — UK document authentication tends to be the pacing item, not the Indian filing. Post-incorporation, bank account opening and the FC-GPR filing add further time before the entity is fully operational for fund transfers.
        </p>
        <div className="space-y-4">
          {timelinePhases.map((item) => (
            <ClickableReveal key={item.week} className="flex flex-col sm:flex-row gap-3 sm:gap-6 p-6 border rounded-lg bg-gradient-to-r from-yellow-50 to-white cursor-pointer">
              <div className="font-bold text-yellow-600 min-w-fit">{item.week}</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </ClickableReveal>
          ))}
        </div>
      </div>

      <div className="mb-12 rounded-xl border-l-4 border-yellow-400 bg-gray-50 p-6">
        <h3 className="font-bold text-lg mb-2 text-[#081a42]">The UK-Specific Step: Notarisation &amp; FCDO Apostille</h3>
        <p className="text-gray-700 mb-3">
          Because both the UK and India are signatories to the Hague Apostille Convention, a UK parent company&apos;s certificate of incorporation, board resolution authorising the Indian subsidiary, and power of attorney need a two-stage process before Indian authorities will accept them: a UK solicitor or notary public certifies the documents first, then the FCDO attaches the official apostille — the FCDO will not apostille a document that hasn&apos;t been signed by a UK solicitor first.
        </p>
        <p className="text-gray-700">
          Budget roughly £40-£90+ per document once notary and FCDO fees are combined, and plan around the FCDO&apos;s published standard postal turnaround of up to 25 working days, plus courier time each way (faster next-day or e-Apostille options exist for registered business applicants). Because this runs entirely on UK processing time rather than anything the Indian filing can expedite, starting it the moment the decision to incorporate is made — in parallel with Indian name reservation, not after it — is the single most effective way to compress the overall timeline.
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
          <Link href="/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            How to Incorporate a Subsidiary from the UK →
          </Link>
          <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            UK Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-business-setup/timeline-resources" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Full India Setup Timeline &amp; Budget Breakdown →
          </Link>
          <Link href="/india-entry-for-uk-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for UK Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
