import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { ClickableReveal } from '@/components/ClickableReveal'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { LeadForm } from '@/components/LeadForm'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Timer, Clock, IndianRupee, MapPin } from 'lucide-react'

const setupPhases = [
  {
    week: 'Week 1-2',
    title: 'Entity Selection & Documentation',
    desc: "Choosing between a Private Limited Company/WOS, LLP, or a Branch/Liaison/Project Office, applying for a Digital Signature Certificate (DSC) for each proposed director, and assembling the document set. For a foreign parent, apostille or embassy legalisation of the parent company's documents runs through authorities in the home country rather than anything India-side — it's the single biggest driver of how long this phase actually takes.",
  },
  {
    week: 'Week 2-4',
    title: 'Company Registration & Approvals',
    desc: "Name reservation and the SPICe+ incorporation filing (Form INC-32) with the Registrar of Companies. Automatic Route FDI generally clears within this window; Government Approval Route investments run longer because DPIIT and sector-ministry review sit on top of the standard filing.",
  },
  {
    week: 'Week 4-6',
    title: 'Bank Account & Tax Registration',
    desc: 'PAN and TAN are issued automatically alongside the Certificate of Incorporation, but opening a corporate current account still requires the MOA/AOA, KYC documents and a board resolution, and the account must sit with an RBI-authorised (AD Category-I) bank. A missing apostille on a foreign document is the most common reason this phase slips.',
  },
  {
    week: 'Week 6-8',
    title: 'Compliance Setup & Registrations',
    desc: 'GST registration where the turnover threshold is crossed (or voluntary registration for an entity billing only its overseas parent), capital infusion and the resulting FC-GPR filing to RBI, and setting up statutory registers, EPFO/ESIC and initial payroll and accounting processes.',
  },
  {
    week: 'Week 8-12',
    title: 'Final Operationalization',
    desc: "The entity is banked, funded, registered and ready to invoice, hire and operate. This is also the natural point to have the ongoing compliance calendar — annual RoC filings, the FLA return, board meeting cadence — mapped out before day-to-day operations ramp up.",
  },
]

const setupCosts = [
  {
    item: 'Company Registration',
    cost: '₹3,000-5,000',
    desc: "MCA filing and name reservation charges. The SPICe+ incorporation filing itself is fee-exempt for companies with authorised capital up to ₹15 lakh under the Companies (Registration Offices and Fees) Rules, so most of what sits in this line is state stamp duty on the incorporation documents — which is set state by state rather than nationally, so the same filing can cost noticeably more or less depending on where the registered office is.",
  },
  {
    item: 'Legal & Documentation',
    cost: '₹10,000-20,000',
    desc: 'Drafting the MOA/AOA and board resolutions, plus — for a foreign parent — coordinating apostille or embassy legalisation on documents originating outside India.',
  },
  {
    item: 'Bank Account Setup',
    cost: '₹5,000-10,000',
    desc: "KYC documentation support and coordination with an RBI-authorised (AD Category-I) bank. This doesn't include the bank's own minimum-balance requirement, which sits outside this budget and varies by bank.",
  },
  {
    item: 'Tax Registration',
    cost: '₹2,000-5,000',
    desc: 'PAN/TAN arrive automatically with incorporation at no extra cost; this line mainly covers GST registration support once it applies.',
  },
  {
    item: 'Compliance Setup',
    cost: '₹15,000-25,000',
    desc: 'Statutory registers, first board meeting documentation, EPFO/ESIC setup, and initial accounting and payroll configuration.',
  },
  {
    item: 'Professional Fees',
    cost: '₹20,000-50,000',
    desc: 'The advisory/CA/CS fee for managing the filing end-to-end. This is the line that moves most with entity complexity — a foreign director, a Government Route sector, or sourcing a resident director all push it toward the higher end.',
  },
]

const annualCosts = [
  { title: 'Statutory Audit', desc: 'Every Indian company must have its financial statements audited annually, regardless of size or turnover — there is no small-company exemption from the audit itself.' },
  { title: 'ROC Annual Filing', desc: 'Financial statements (Form AOC-4) and the annual return (Form MGT-7/7A) are due every year with the Registrar of Companies, alongside the Annual General Meeting.' },
  { title: 'Income Tax Return', desc: "Filed annually under the Income Tax Act, 2025 (which replaced the 1961 Act from 1 April 2026), plus advance tax instalments through the year where applicable." },
  { title: 'GST Returns', desc: 'Monthly and annual return filings for any entity that has registered for GST — voluntary or threshold-triggered — for as long as the registration stays active.' },
  { title: 'Annual FLA Return', desc: 'Any entity holding foreign investment on its books must file the Annual Return on Foreign Liabilities and Assets with RBI every year, independent of whether any transaction happened that year.' },
  { title: 'Company Secretary / Resident Director Retainer', desc: 'Many foreign-owned entities retain a company secretary and, where the board is otherwise entirely foreign, a resident director to satisfy the Companies Act residency requirement — an ongoing cost most first-time budgets miss.' },
]

const faqs = [
  {
    q: 'How long does it actually take to register a company in India?',
    a: "Incorporation itself typically clears in 4-6 weeks under the Automatic Route, or 8-12 weeks where the investment requires Government Approval Route review. The full path from entity selection through a working, banked, funded entity generally runs 8-12 weeks end to end — the gap between a fast quoted filing time and that real-world range is usually name resubmission, DSC processing for a foreign director, apostille turnaround, and resident-director paperwork, not the MCA filing itself being slow.",
  },
  {
    q: 'What is the total cost of registering a company in India?',
    a: 'Setup costs — government filing fees, stamp duty, legal documentation, bank account setup, tax registration, compliance setup and professional fees combined — typically run from roughly ₹55,000 at the low end to well over ₹1,15,000 depending on entity complexity, state, and whether a foreign director or Government Route sector is involved. On top of that, budget for ongoing annual compliance (audit, RoC filings, income tax, GST, and the FLA return where FDI is involved) as a recurring cost, not a one-time one.',
  },
  {
    q: 'Is the government filing fee for company registration really free?',
    a: 'The SPICe+ incorporation filing itself is fee-exempt for companies with authorised capital up to ₹15 lakh under the Companies (Registration Offices and Fees) Rules — but that only covers the MCA filing fee. Stamp duty on the incorporation documents is a separate, state-level charge that still applies and varies significantly depending on where the registered office is, which is why "free registration" claims online can be misleading if they don\'t separate the two.',
  },
  {
    q: 'Why does the same company cost more to register in one state than another?',
    a: "Stamp duty is the largest state-variable cost in the setup budget. It's set by each state's own stamp act rather than nationally, so the same authorised capital and document set can attract a nominal amount in some states and a noticeably higher figure in others. This is worth checking for the specific state a registered office will sit in rather than assuming a single national number applies.",
  },
  {
    q: 'What ongoing costs come after the company is registered?',
    a: 'Beyond the one-time setup budget, every Indian company carries recurring annual obligations: a statutory audit, RoC annual filings (AOC-4 and MGT-7/7A), an income tax return, GST returns where registered, and — for a foreign-owned entity — the Annual FLA return to RBI every year it holds foreign investment. Combined, these typically run in a similar order of magnitude to the one-time setup cost, repeated annually, and are frequently underestimated in first-year budgets that only price the registration itself.',
  },
  {
    q: 'Does the setup budget above include GST registration and a bank account?',
    a: "GST registration itself carries no separate government fee — it's the professional support and documentation around it that shows up in the Tax Registration line. Bank account setup is budgeted for the KYC and coordination work, but not for the bank's own minimum-balance requirement, which is a separate commercial term set by the bank rather than a registration cost.",
  },
  {
    q: 'What is a resident director, and why does it affect timeline and cost?',
    a: "Every Indian company needs at least one director who has stayed in India for a total of not less than 182 days in the preceding financial year — a board made up entirely of foreign nationals can't incorporate on its own. Where a foreign parent doesn't have a resident candidate lined up, sourcing and appointing one adds both time (paperwork has to be in place before incorporation) and an ongoing retainer cost that isn't part of the one-time setup budget.",
  },
]

export default function TimelineResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Business Setup", href: "/india-business-setup" }, { label: "Timeline & Resources" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">India Company Setup Timeline & Budget Breakdown</h1>
          <p className="mb-4 text-sm text-gray-500">Last updated: 10 September 2026 — prepared by AU Corporate&apos;s company registration and compliance practice.</p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            A realistic, phase-by-phase timeline and a full cost breakdown — one-time setup costs and the recurring annual compliance costs that follow — for setting up a company in India, plus the specific reasons real-world timelines and budgets differ from the numbers quoted at a glance.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Timer, value: '4-6 weeks', label: 'Automatic Route' },
              { icon: Clock, value: '8-12 weeks', label: 'Full Setup (End to End)' },
              { icon: IndianRupee, value: '₹55K-1.15L+', label: 'Typical One-Time Setup Cost' },
              { icon: MapPin, value: 'State-specific', label: 'Stamp Duty Variance' },
            ].map((stat) => (
              <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white/70 p-4 text-center backdrop-blur-sm cursor-pointer">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
                <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </ClickableReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT DETERMINES YOUR TIMELINE */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Actually Determines Your Timeline</h2>
          <p className="leading-relaxed text-gray-600">
            There isn&apos;t a single number that applies to every company, because the timeline is driven by a handful of variables that differ from one setup to the next: the entity type chosen (a Private Limited Company/WOS moves differently than a Branch or Liaison Office — see our <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">company registration guide</Link> for the full comparison), whether the investment falls under the Automatic Route or requires Government Approval Route review (covered in full on our <Link href="/india-business-setup/fdi-channels" className="text-yellow-700 font-semibold hover:underline">FDI channels</Link> page), whether any proposed director is a foreign national whose documents need apostille or embassy legalisation, and whether a resident director already exists or needs to be sourced. The phase-by-phase breakdown below assumes a standard Private Limited Company/WOS under the Automatic Route — the most common path for a foreign parent — and flags where each of these variables typically adds time.
          </p>
        </div>
      </section>

      {/* SETUP TIMELINE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Setup Timeline: Phase by Phase</h2>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-10">
            The full journey from entity selection to a working, banked, funded entity generally runs <strong>8-12 weeks</strong>, matching the ranges on our <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">company registration guide</Link>. Here&apos;s what happens in each window and, more importantly, what actually drives how long it takes:
          </p>
          <div className="space-y-4">
            {setupPhases.map((item, i) => (
              <ClickableReveal key={i} className="flex flex-col sm:flex-row gap-3 sm:gap-6 p-6 border rounded-lg bg-gradient-to-r from-yellow-50 to-white cursor-pointer">
                <div className="font-bold text-yellow-600 min-w-fit">{item.week}</div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </ClickableReveal>
            ))}
          </div>

          <div className="mt-10 rounded-xl border-l-4 border-yellow-400 bg-white p-6">
            <h3 className="mb-2 text-lg font-bold text-[#081a42]">Why Real-World Timelines Run Longer Than the &ldquo;Official&rdquo; Filing Time</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              A number sometimes quoted for the SPICe+ filing alone — a matter of days once submitted correctly — isn&apos;t the same as the timeline a first-time foreign parent should plan for. The gap is almost always explained by a small, recurring set of delays: a proposed company name being rejected and needing resubmission, a foreign director&apos;s Digital Signature Certificate taking longer to process than a resident director&apos;s, apostille turnaround on the parent company&apos;s documents (which runs through the home country&apos;s own authorities, not anything India-side can expedite), and resident-director appointment paperwork not being lined up before incorporation is filed. None of these are unusual, and none of them reflect a slow MCA process — they&apos;re simply the difference between the fastest possible filing and what actually happens end to end.
            </p>
          </div>
        </div>
      </section>

      {/* ONE-TIME SETUP COSTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">One-Time Setup Costs</h2>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-10">
            These are the costs incurred once, to get from entity selection to an operational company. Two figures get conflated a lot in this space: the government filing fee (modest, and often nil for the incorporation filing itself) and the professional/advisory fee sitting on top of it, which is what actually varies most with entity complexity.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {setupCosts.map((item, i) => (
              <ClickableReveal key={i} className="bg-white p-6 rounded-lg border cursor-pointer h-full flex flex-col">
                <h3 className="font-bold text-gray-900 mb-2">{item.item}</h3>
                <p className="text-2xl font-bold text-yellow-600 mb-3">{item.cost}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </ClickableReveal>
            ))}
          </div>
          <p className="mt-8 max-w-4xl leading-relaxed text-gray-600">
            A few items commonly sit outside these ranges and are worth budgeting for separately: a registered office lease or virtual office arrangement, any travel cost for a foreign director who needs to be in India in person, and the receiving bank&apos;s own minimum-balance requirement. None of these are registration costs in the strict sense, but all of them show up in a first-year budget.
          </p>
        </div>
      </section>

      {/* STATE VARIANCE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Costs Vary by State</h2>
          <p className="leading-relaxed text-gray-600">
            Stamp duty on the incorporation documents is the single largest state-variable line in the setup budget, because it&apos;s set under each state&apos;s own stamp act rather than a uniform national schedule — the same authorised capital and document set can attract close to a nominal amount in some states and a noticeably higher figure in others. This is one of the more common surprises for a foreign parent comparing quotes across advisors, since two accurate quotes for the same entity type can differ meaningfully purely because of where the registered office sits. It&apos;s worth confirming the applicable stamp duty for the specific state in question rather than assuming a single figure applies nationally, since state stamp acts are amended independently of central company law and change on their own schedule.
          </p>
        </div>
      </section>

      {/* ONGOING ANNUAL COSTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ongoing Annual Compliance Costs (Beyond the Setup Budget)</h2>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-10">
            The one-time setup budget above is only part of the picture — registering a company is the start of the compliance relationship, not the end of it. Recurring annual costs (audit, RoC filings, income tax, GST where applicable, and RBI reporting for FDI-funded entities) typically run in a similar order of magnitude to the one-time setup cost, repeated every year, and are the line first-time budgets most often leave out entirely. For the full compliance framework these sit inside, see our <Link href="/india-business-setup/regulatory-compliance" className="text-yellow-700 font-semibold hover:underline">regulatory compliance guide</Link>.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {annualCosts.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE LEAD FORM */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <LeadForm title="Need an Exact Timeline and Budget for Your Setup?" description="Every one of the variables on this page — entity type, FDI route, director nationality, state — changes your specific numbers. Tell us about your setup and we'll walk through the real timeline and cost for your situation." />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-10 text-center">Frequently Asked Questions</h2>
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
      </section>

      {/* CONTINUE YOUR JOURNEY */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Continue Your Journey</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/india-business-setup/company-formation" className="p-6 border rounded-lg bg-white hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Company Registration</h3>
              <p className="text-sm text-gray-600">Entity types and the full SPICe+ incorporation process</p>
            </Link>
            <Link href="/india-business-setup/fdi-channels" className="p-6 border rounded-lg bg-white hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">FDI Channels</h3>
              <p className="text-sm text-gray-600">Automatic and government approval routes for foreign investment</p>
            </Link>
            <Link href="/india-business-setup/regulatory-compliance" className="p-6 border rounded-lg bg-white hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Regulatory Compliance</h3>
              <p className="text-sm text-gray-600">The full six-regime compliance framework</p>
            </Link>
            <Link href="/india-business-setup/banking-taxation" className="p-6 border rounded-lg bg-white hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Banking &amp; Taxation</h3>
              <p className="text-sm text-gray-600">Bank account sequencing, GST, and tax registration</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Ready to Begin?</h2>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6">
            <Link href="/contact">Start Your India Setup Journey</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
