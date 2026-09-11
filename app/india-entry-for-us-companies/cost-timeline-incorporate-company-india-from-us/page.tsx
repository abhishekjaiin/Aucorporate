import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Timer, Clock, IndianRupee, FileCheck } from 'lucide-react'

const quickStats = [
  { icon: Timer, value: '4-6 weeks', label: 'Automatic Route Incorporation' },
  { icon: Clock, value: '8-12 weeks', label: 'Banked, Funded & Operational' },
  { icon: IndianRupee, value: '₹55K-1.15L+', label: 'Typical India-Side Setup Cost' },
  { icon: FileCheck, value: 'US-side', label: 'Apostille Usually Paces the Timeline' },
]

const setupCostComponents = [
  {
    item: 'Company Registration',
    cost: '₹3,000-5,000',
    usd: '~$35-$60',
    desc: 'MCA filing and name reservation charges. The SPICe+ incorporation filing itself is fee-exempt for authorised capital up to ₹15 lakh, so most of what sits in this line is state-level stamp duty on the incorporation documents.',
  },
  {
    item: 'Legal & Documentation',
    cost: '₹10,000-20,000',
    usd: '~$115-$230',
    desc: 'Drafting the MOA/AOA and board resolutions, plus — specifically for a US parent — coordinating the Indian side of apostille/embassy legalisation once the documents come back authenticated from the US.',
  },
  {
    item: 'Bank Account Setup',
    cost: '₹5,000-10,000',
    usd: '~$60-$115',
    desc: "KYC documentation support and coordination with an RBI-authorised (AD Category-I) bank. Doesn't include the bank's own minimum-balance requirement.",
  },
  {
    item: 'Tax Registration',
    cost: '₹2,000-5,000',
    usd: '~$25-$60',
    desc: 'PAN/TAN arrive automatically with incorporation at no extra cost; this line mainly covers GST registration support once it applies.',
  },
  {
    item: 'Compliance Setup',
    cost: '₹15,000-25,000',
    usd: '~$175-$290',
    desc: 'Statutory registers, first board meeting documentation, EPFO/ESIC setup, and initial accounting and payroll configuration.',
  },
  {
    item: 'Professional Fees',
    cost: '₹20,000-50,000',
    usd: '~$230-$580',
    desc: 'The advisory/CA/CS fee for managing the filing end-to-end. This is the line that moves most with complexity — a foreign director, a Government Route sector, or sourcing a resident director all push it toward the higher end.',
  },
]

const usTimelinePhases = [
  {
    week: 'Weeks 1-2',
    title: 'Entity Setup & US-Side Document Prep',
    desc: "DSC/DIN applications for proposed directors run in parallel with the step most US founders start too late: getting the parent company's certificate of incorporation, board resolution, and power of attorney notarized and then apostilled through the relevant Secretary of State. Starting this the same week as the Indian filing — not after — is the single most effective way to compress the overall timeline.",
  },
  {
    week: 'Weeks 2-4',
    title: 'Name Reservation & SPICe+ Filing',
    desc: 'Name reservation and the SPICe+ incorporation filing (Form INC-32) with the Registrar of Companies. Automatic Route FDI (the default for most US-owned subsidiaries) generally clears within this window; sectors requiring Government Approval Route review add DPIIT and sector-ministry sign-off on top of the standard filing.',
  },
  {
    week: 'Weeks 4-6',
    title: 'Certificate of Incorporation, PAN/TAN & Bank Account',
    desc: "PAN and TAN issue automatically alongside the Certificate of Incorporation. Opening the corporate current account with an RBI-authorised (AD Category-I) bank still needs the MOA/AOA, KYC documents and a board resolution — and a bank account waiting on a US apostille that hasn't landed yet is the most common reason this phase slips, even though the delay didn't originate on the Indian side.",
  },
  {
    week: 'Weeks 6-8',
    title: 'Capital Inflow & FC-GPR',
    desc: 'The US parent wires the initial capital, and Form FC-GPR is filed with the RBI within 30 days of share allotment to formally record the FDI. See our FEMA compliance guide for the filings that follow this one on an ongoing basis.',
  },
  {
    week: 'Weeks 8-12',
    title: 'Fully Operational',
    desc: 'GST registration where applicable, EPFO/ESIC setup, and the annual compliance calendar (RoC filings, the FLA return, board meeting cadence) mapped out before day-to-day operations ramp up.',
  },
]

const faqs = [
  {
    q: 'How much does it cost to register a company in India from the US?',
    a: "There's no single accurate number, but the components are consistent: India-side setup costs — government filing, stamp duty, legal documentation, bank account setup, tax registration, compliance setup and professional fees combined — typically run from roughly ₹55,000 at the low end to well over ₹1,15,000 (very roughly $650-$1,350+ at typical exchange rates, which fluctuate) depending on entity complexity, the state of the registered office, and whether a Government Route sector is involved. On top of that, a US parent should budget separately for apostille/document-authentication costs on the US side and for the ongoing India-side annual compliance that follows incorporation — see our full setup cost and timeline breakdown for the complete picture."
  },
  {
    q: 'How long does it take a US company to incorporate a subsidiary in India?',
    a: 'Incorporation itself typically clears in 4-6 weeks under the Automatic Route, or 8-12 weeks where the sector requires Government Approval Route review. The full path from entity selection through a working, banked, funded entity generally runs 8-12 weeks end to end for a US-owned subsidiary — the gap between a fast-quoted MCA filing time and that real-world range is almost always apostille turnaround, DSC processing for a US-based director, and resident-director paperwork, not the Indian filing itself being slow.',
  },
  {
    q: "What's the single biggest cause of delay for a US parent company specifically?",
    a: "Apostille turnaround on the parent company's documents. It runs through the home-state Secretary of State (and, before that, a US notary), not through anything on the Indian side — so nothing an Indian advisor does can expedite it. The practical fix is starting the apostille process the same week the Indian name-reservation step begins, rather than waiting for India-side filings to progress first.",
  },
  {
    q: 'Do I need to apostille documents to register a company in India from the US, and what does that cost?',
    a: "Yes. Since the US and India are both signatories to the Hague Apostille Convention, a US parent's certificate of incorporation, board resolution authorizing the Indian subsidiary, and power of attorney typically need to be notarized in the US and then apostilled by the relevant Secretary of State before Indian authorities will accept them. State apostille fees are modest on their own — commonly in the $5-$25 per-document range — but add a notary fee beforehand and, if you use a professional apostille service to handle the courier and turnaround, all-in cost per document set is commonly $20-$100+. Fees and processing times vary by state, so it's worth checking your specific Secretary of State's schedule directly.",
  },
  {
    q: 'What US tax obligations come with owning an Indian subsidiary?',
    a: "A US person owning 10% or more of the Indian subsidiary generally has to file Form 5471 annually with their US return — a filing requirement that applies even if the subsidiary made no distribution and even if no US tax is ultimately due, and that carries a $10,000-per-form penalty for missing it. Depending on the subsidiary's income, Subpart F/NCTI (formerly GILTI) rules can also trigger a US income inclusion without any cash actually being repatriated. This sits alongside, not instead of, India-side compliance — see our transfer pricing guide for how the two sides need to stay reconciled, and coordinate this with a US international tax CPA in parallel with the India-side setup rather than after it.",
  },
  {
    q: 'Does the setup cost change depending on which Indian state the company is registered in?',
    a: "Yes — stamp duty on the incorporation documents is set by each state's own stamp act rather than a national schedule, so the same entity and authorised capital can cost noticeably more or less to register purely based on where the registered office sits. Our timeline & cost resource breaks out the full state-variance picture alongside the ongoing annual compliance costs that follow registration.",
  },
  {
    q: "Why won't AU Corporate just give a flat number for a US-based client?",
    a: "Because the honest answer depends on five things that vary from one client to the next: entity structure, FDI route, number of directors needing apostilled documents, whether a resident director already exists, and ongoing scope beyond incorporation. A flat number published online is either padded to cover the worst case or optimistic and wrong for most readers — a short scoping call gets you a number that's actually right for your situation.",
  },
]

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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickStats.map((stat) => (
            <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm cursor-pointer">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
              <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </ClickableReveal>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Actually Drives Cost</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ClickableInfoCard title="Entity structure" desc="A wholly-owned subsidiary (Private Limited) has different registration, audit, and ongoing compliance costs than a branch or liaison office." />
          <ClickableInfoCard title="Sector & FDI route" desc="Automatic-route sectors move faster and cheaper than sectors requiring government approval." />
          <ClickableInfoCard title="Number of directors & apostille documents" desc="Each US-based director needing apostilled documents adds both cost and — usually the bigger factor — time, since it depends on US notary/Secretary of State processing." />
          <ClickableInfoCard title="Ongoing scope" desc="Whether you need us for incorporation only, or incorporation plus ongoing accounting, payroll, tax, and FEMA compliance, changes the engagement significantly." />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What the India-Side Setup Budget Typically Looks Like</h2>
        <p className="text-gray-700 mb-6">
          We don&apos;t quote a flat total, but the components that make it up are consistent from one Private Limited subsidiary to the next. These are typical ranges — what the pieces usually look like — not a fixed quote for your specific setup:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {setupCostComponents.map((c) => (
            <ClickableReveal key={c.item} className="bg-white p-6 rounded-lg border cursor-pointer h-full flex flex-col">
              <h3 className="font-bold text-gray-900 mb-2">{c.item}</h3>
              <p className="text-xl font-bold text-yellow-600 mb-1">{c.cost}</p>
              <p className="text-xs text-gray-400 mb-3">{c.usd}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </ClickableReveal>
          ))}
        </div>
        <p className="mt-6 text-gray-700">
          Combined, these components typically land somewhere between roughly <strong>₹55,000 and ₹1,15,000+</strong> (very roughly <strong>$650-$1,350+</strong> at typical exchange rates, which move independently of the rupee figure) for a standard Automatic Route Private Limited subsidiary — before ongoing annual compliance, which runs in a similar order of magnitude every year after that. For the full phase-by-phase breakdown and the state-by-state stamp duty variance behind the Company Registration line, see our <Link href="/india-business-setup/timeline-resources" className="text-yellow-600 hover:text-yellow-700 font-semibold">India setup timeline &amp; budget resource</Link>.
        </p>
      </div>

      <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h3 className="font-bold text-lg mb-2">What Most Cost Guides Leave Out: The US Side of the Ledger</h3>
        <p className="text-gray-700 mb-4">
          Almost every cost breakdown for registering a company in India — including the India-side numbers above — stops at the Indian rupee figure. For a US parent, two more real costs sit outside that number entirely:
        </p>
        <ul className="space-y-2 text-gray-700 text-sm mb-4">
          <li>• <strong>Apostille & document authentication.</strong> Notarizing and apostilling the parent company&apos;s certificate of incorporation, board resolution, and power of attorney runs through your home state&apos;s own Secretary of State, not through India. State fees are modest on their own (commonly $5-$25 per document), but a notary fee plus a professional apostille/courier service typically puts the all-in cost per document set at $20-$100+, and — more importantly — this step is usually what paces the entire timeline, not the Indian filing.</li>
          <li>• <strong>US-side tax compliance for the new entity.</strong> A US person owning 10%+ of the Indian subsidiary generally has to file Form 5471 annually, with a $10,000-per-form penalty for missing it even when no US tax is ultimately owed, and Subpart F/NCTI (formerly GILTI) rules can trigger a US income inclusion without any distribution being made. This is a real, recurring cost of the structure — see our <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">transfer pricing guide</Link> for how it interacts with India-side related-party rules, and our <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">FEMA compliance guide</Link> for the RBI filings that follow incorporation.</li>
        </ul>
        <p className="text-gray-700 text-sm">
          Neither of these shows up in the India-side setup budget, and both are worth pricing in before you compare quotes.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Timeline: Phase by Phase for a US-Based Parent</h2>
        <p className="text-gray-700 mb-6">
          For a standard Automatic Route Private Limited subsidiary with straightforward documentation, incorporation itself (DSC/DIN through Certificate of Incorporation) generally moves faster than the apostille step on the US side — US document authentication is usually the pacing item, not the Indian filing. Post-incorporation, bank account opening and the FC-GPR filing add further time before the entity is fully operational for fund transfers.
        </p>
        <div className="space-y-4">
          {usTimelinePhases.map((item) => (
            <ClickableReveal key={item.week} className="flex flex-col sm:flex-row gap-3 sm:gap-6 p-6 border rounded-lg bg-gradient-to-r from-yellow-50 to-white cursor-pointer">
              <div className="font-bold text-yellow-600 min-w-fit sm:min-w-[110px]">{item.week}</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </ClickableReveal>
          ))}
        </div>
        <p className="mt-6 text-gray-700 text-sm">
          Plan on <strong>4-6 weeks</strong> for Automatic Route incorporation itself and <strong>8-12 weeks</strong> end to end for a fully banked, funded, operating entity. Sectors that require Government Approval Route review typically push the incorporation step itself toward the 8-12 week end of that range, before bank account and FC-GPR timing add on top.
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
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
      </div>

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

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            How to Incorporate a Subsidiary from the US →
          </Link>
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for US Companies →
          </Link>
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transfer Pricing &amp; Section 482 for US Parent Companies →
          </Link>
          <Link href="/india-business-setup/timeline-resources" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Full India Setup Timeline &amp; Budget Breakdown →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
