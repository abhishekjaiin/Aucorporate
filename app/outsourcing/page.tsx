import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { TabbedComparison } from '@/components/TabbedComparison'
import { LeadForm } from '@/components/LeadForm'
import { RelatedResources } from '@/components/RelatedResources'

import { ArrowRight } from 'lucide-react'

const software = [
  { name: "QuickBooks" },
  { name: "Xero" },
  { name: "Zoho Books" },
  { name: "SAP" },
  { name: "Oracle NetSuite" },
  { name: "Tally" },
]

const outsourcedFunctions = [
  {
    title: 'Accounting & Bookkeeping',
    desc: 'Day-to-day transaction recording, vendor and customer ledger management, and bank reconciliation — the base layer every other finance function depends on.',
  },
  {
    title: 'Monthly Accounting & Closing',
    desc: 'A fixed monthly close — reconciliations, accruals and review — so your books are current every month rather than reconstructed at year-end.',
  },
  {
    title: 'MIS Reporting & Reporting to the Foreign Parent',
    desc: 'Management reports in the format your global finance team actually needs — budget-vs-actual tracking, cash flow visibility, and board-ready packs that feed your parent company’s own reporting cycle.',
  },
  {
    title: 'GST & TDS Accounting Support',
    desc: 'GST registration where applicable, monthly/quarterly return filing, and TDS deposits and returns on salary and vendor payments — kept current against the filing calendar.',
  },
  {
    title: 'Payroll Support',
    desc: 'Payroll accounting and statutory contribution entries coordinated with your monthly close. Full payroll processing and HR compliance sit under our dedicated HR & payroll practice.',
  },
  {
    title: 'Intercompany Accounting',
    desc: 'Recording and reconciling transactions between your Indian entity and its foreign parent or group companies — intercompany invoices, cost allocations and balances kept consistent on both sides.',
  },
  {
    title: 'Audit Support & Ongoing Compliance',
    desc: "Preparing schedules and supporting documentation for the annual statutory audit, coordinating with your appointed independent auditor, and carrying the resulting numbers through to AOC-4/MGT-7 and — for foreign-invested entities — RBI's annual FLA return.",
  },
]

const whoWeWorkWith = [
  'Foreign companies operating in India',
  'Foreign-owned Indian subsidiaries',
  'US companies with Indian subsidiaries',
  'Newly incorporated Indian subsidiaries',
  'Foreign parent companies establishing or growing their India operations',
  'Companies that need India accounting and finance support without immediately building a large local finance team',
]

const howItWorks = [
  { step: 'Understand', desc: 'We review your entity structure, parent-reporting needs, and current finance setup.' },
  { step: 'Set Up', desc: 'Chart of accounts, systems and the compliance calendar are mapped to your entity before the first month runs.' },
  { step: 'Record', desc: 'Bookkeeping, reconciliations and payroll entries are processed on a fixed monthly cycle.' },
  { step: 'Report', desc: 'MIS and reporting packs go to your India team and your foreign parent on a schedule they can plan around.' },
  { step: 'Comply', desc: 'GST, TDS, RoC and RBI filings are tracked against the compliance calendar and the annual statutory audit.' },
]

const outsourcingComparisons = [
  {
    title: 'Outsourcing vs. an In-House Finance Team',
    body: "There's no fixed rule here — it's a scale decision that should track headcount, transaction volume, and regulatory complexity, not a default made at incorporation and never revisited. Most newly incorporated subsidiaries outsource accounting, payroll, and compliance filings entirely in year one rather than hiring an in-house finance team for a handful of people — the fixed cost of an internal function isn't justified yet, and an outsourced provider already knows the filing calendar.\n\nAs headcount and transaction volume grow, many companies move to a hybrid model: one local finance or operations lead in India who owns the relationship with an outsourced provider, with a Virtual CFO layered in for board-level reporting rather than a full-time in-house CFO hire. A full in-house finance team tends to make sense once transaction volume, headcount, or regulatory complexity — multiple state registrations, complex transfer pricing, frequent RBI reporting — justifies dedicated internal capacity. It's a scale decision, not a default to reach for immediately after incorporation.",
  },
  {
    title: 'Outsourcing vs. a GCC (Global Capability Center)',
    body: "Outsourcing and a Global Capability Center solve different problems, and it's worth being precise about which one you actually need. A finance and accounting outsourcing arrangement — the kind covered on this page — is a vendor relationship: a third-party provider delivers a defined scope of work under a service agreement, typically serving multiple clients at once. A GCC is the opposite structural choice: the foreign company builds and owns an India team itself, as an internal function serving nobody but itself.\n\nThe two aren't mutually exclusive. A GCC still needs a finance and HR back office to run, and many GCCs use an outsourced accounting or Virtual CFO provider for exactly that function rather than building an in-house finance team from day one — that's a legitimate, common pairing. If what you're actually evaluating is a captive delivery center rather than a vendor relationship for finance and accounting specifically, that's a separate decision worth its own comparison.",
  },
]

const outsourcingFaqs = [
  {
    q: 'What accounting and finance functions can a foreign company outsource in India?',
    a: "Most commonly: bookkeeping and the monthly close, GST and TDS compliance and return filing, MIS and parent-company reporting, intercompany accounting, payroll support, and coordination of the annual statutory audit and RoC/RBI filings. Which mix makes sense depends on your entity's size and how much you want to run through a local finance lead versus an outsourced provider.",
  },
  {
    q: 'What is a Virtual CFO, and does my India entity need one?',
    a: "A Virtual CFO delivers the reporting, budgeting, and cash-flow oversight a full-time CFO would, without the fixed cost of a full-time hire — typically the right addition once a subsidiary moves past outsourcing everything in year one toward a hybrid model with a local finance lead. It's a scale decision, not something every entity needs from the day it incorporates.",
  },
  {
    q: 'Is outsourcing the same as setting up a Global Capability Center (GCC) in India?',
    a: "No. Outsourcing is a vendor relationship for a defined scope of work, typically serving multiple clients under a service agreement. A GCC is a captive unit the foreign company builds and owns itself. Many GCCs still outsource their own back-office finance function rather than building an in-house team from day one — the two aren't mutually exclusive, but they are different structural decisions.",
  },
  {
    q: 'Does outsourcing cover statutory compliance — GST, TDS, FEMA/RBI reporting — or just bookkeeping?',
    a: "Both, when it's structured properly. Our outsourcing engagements typically combine the transactional work (bookkeeping, payroll support, intercompany accounting) with the compliance calendar it feeds — GST and TDS returns, and, for foreign-invested entities, RBI reporting including the annual FLA return. Bookkeeping without the compliance layer on top of it leaves exactly the gap that tends to cause a missed deadline.",
  },
  {
    q: 'How is intercompany accounting handled between our Indian subsidiary and the parent?',
    a: "We record and reconcile transactions between your Indian entity and its foreign parent or group companies — intercompany invoices, cost allocations, and balances — so both sides of the relationship stay consistent and the numbers feed cleanly into your parent's own consolidation.",
  },
  {
    q: 'Which accounting software do you work with?',
    a: 'We work with the platforms your finance team already uses — including QuickBooks, Xero, Zoho Books, SAP, Oracle NetSuite, and Tally — so your outsourced India function stays in sync with your global reporting stack rather than requiring a separate system.',
  },
  {
    q: 'How is confidentiality handled for an outsourced finance function?',
    a: 'Engagements run under confidentiality agreements, with access to your financial systems and records limited to the specific team members working on your account.',
  },
  {
    q: 'Can an outsourcing partner help beyond India — Hong Kong, Singapore, or China?',
    a: "Yes, through our partnership with UniproAsia for clients whose expansion also covers Hong Kong, Singapore, or Mainland China — company formation, accounting, tax and compliance, coordinated alongside your India entity rather than handled as a separate relationship.",
  },
  {
    q: 'When does it make sense to move from outsourced to an in-house finance team?',
    a: 'Generally once transaction volume, headcount, or regulatory complexity — multiple state registrations, complex transfer pricing, frequent RBI reporting — justifies dedicated internal capacity. Most subsidiaries outsource fully in year one, add a local finance lead alongside outsourced execution as they scale, and only build a full in-house team once that complexity threshold is clearly crossed.',
  },
]

export default function OutsourcingPage() {
  return (
    <div className="min-h-screen pt-20">

      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Accounting & Assurance", href: "/services/accounting-assurance" },
            { label: "Outsourcing" },
          ]}
        />
      </div>

      {/* HERO */}
      <section className="relative py-24 min-h-[70vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/pexels-pixabay-164606.jpg"
            alt="Business professionals at work, representing outsourced finance and accounting support"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#081a42]/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-white">
          <Reveal>
            <span className="text-gold-dark text-sm font-semibold uppercase">
              Accounting & Finance
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 max-w-3xl">
              Finance & Accounting Outsourcing for Foreign Companies in India
            </h1>

            <p className="text-white/80 mb-4 max-w-2xl">
              Foreign companies and their Indian subsidiaries don&apos;t always need a full in-house finance team from day one. AU Corporate supports the accounting, reporting and ongoing compliance work your India entity needs — bookkeeping, monthly closing, GST/TDS accounting, MIS and parent-company reporting, intercompany accounting, and audit support — so you have a reliable finance function without building one from scratch.
            </p>
            <p className="text-white/80 mb-8 max-w-2xl">
              This is particularly useful for a newly incorporated subsidiary, or a growing India operation that isn&apos;t yet at the scale that justifies a full local finance department.
            </p>

            <div className="flex gap-4">
              <Button asChild className="bg-gold text-black">
                <Link href="/contact">Talk to Us</Link>
              </Button>

              <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
                <Link href="/services/accounting-assurance">Accounting & Assurance</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK NAV */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="flex gap-4 flex-wrap">
          {[
            { href: "#what-we-support", label: "What We Support" },
            { href: "#how-it-works", label: "How It Works" },
            { href: "#who-we-work-with", label: "Who We Work With" },
            { href: "#alternatives", label: "Outsourcing vs. Alternatives" },
            { href: "#faqs", label: "FAQs" },
          ].map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
            >
              {nav.label}
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Last updated: 7 October 2026 — prepared by AU Corporate&apos;s accounting and finance practice.
        </p>
      </div>

      {/* WHAT WE SUPPORT */}
      <section id="what-we-support" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-4">
              What We Support
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              Foreign parents don&apos;t usually outsource &ldquo;accounting&rdquo; as one undifferentiated task — they outsource a specific set of finance, reporting and compliance functions that would otherwise mean building an in-house India finance team from scratch. Here&apos;s what that typically covers.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outsourcedFunctions.map((f) => (
              <ClickableInfoCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-secondary/50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            A straightforward process, not an elaborate framework.
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="p-5 bg-white border rounded-xl">
                <div className="text-gold-dark font-bold text-lg mb-2">0{i + 1}</div>
                <h3 className="font-semibold mb-2">{item.step}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section id="who-we-work-with" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who We Work With</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whoWeWorkWith.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 border rounded-lg bg-secondary/40">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTSOURCING VS ALTERNATIVES */}
      <section id="alternatives" className="py-20 bg-secondary/50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-4">
              Outsourcing vs. the Alternatives
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
              The two questions we hear most often from foreign companies evaluating this decision.
            </p>
          </Reveal>

          <TabbedComparison tabs={outsourcingComparisons} />

          <p className="text-sm text-muted-foreground text-center mt-6">
            Further reading: <Link href="/doing-business-in-india/post-incorporation" className="text-gold-dark font-semibold hover:underline">Life After Incorporation</Link> on the build-vs-outsource decision as you scale, and <Link href="/gcc-setup-india" className="text-gold-dark font-semibold hover:underline">GCC Setup in India</Link> for the fuller outsourcing-vs-captive comparison.
          </p>
        </div>
      </section>

      {/* SOFTWARE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-2xl font-bold mb-4">
            Accounting Software We Work With
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            We work with the platforms your finance team already uses, so compliance and reporting stay in sync.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {software.map((s) => (
              <div
                key={s.name}
                className="p-4 bg-gray-100 border rounded-xl flex items-center justify-center"
              >
                <span className="font-semibold text-gray-700 text-sm sm:text-base text-center">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PARTNER NETWORK */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold mb-4">
              Expanding Beyond India Too?
            </h2>
            <p className="text-muted-foreground mb-8">
              We partner with UniproAsia for clients whose expansion plans also cover
              Hong Kong, Singapore or Mainland China — company formation, accounting,
              tax and compliance, coordinated alongside your India entity.
            </p>
            <Button asChild variant="outline">
              <Link href="/partners/uniproasia">
                See the UniproAsia Partnership <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* MID-PAGE LEAD FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <LeadForm
            title="Need an Outsourced Finance Function for Your India Entity?"
            description="Tell us about your Indian subsidiary or India operations and our accounting and finance team will get in touch."
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {outsourcingFaqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-[#081a42]">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: outsourcingFaqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />

      {/* RELATED RESOURCES */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <RelatedResources
            title="Related Services"
            links={[
              { label: 'Accounting & Assurance', href: '/services/accounting-assurance', description: 'Statutory audit, bookkeeping, and financial statement preparation.' },
              { label: 'HR & Payroll Services', href: '/hr-services', description: 'Payroll processing and HR statutory compliance in depth.' },
              { label: 'Taxation & Regulatory Services', href: '/services/taxation-regulatory', description: 'GST, TDS, FEMA and direct tax compliance in full.' },
              { label: 'India Entry for US Companies', href: '/india-entry-for-us-companies', description: 'Entity choice, FEMA and transfer pricing for a US-owned subsidiary.' },
              { label: 'Life After Incorporation', href: '/doing-business-in-india/post-incorporation', description: 'The build-vs-outsource decision as your India finance function scales.' },
              { label: 'GCC Setup in India', href: '/gcc-setup-india', description: 'Outsourcing vs. building a captive Global Capability Center.' },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Set Up Your India Finance Function?
        </h2>

        <Button asChild className="bg-gold text-black">
          <Link href="/contact">
            Talk to Us <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Finance & Accounting Outsourcing for Foreign Companies in India",
            description:
              "Outsourced bookkeeping, monthly accounting, GST/TDS accounting support, MIS and parent-company reporting, intercompany accounting, and audit support for foreign companies and their Indian subsidiaries.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/outsourcing",
            areaServed: "India",
            serviceType: "Finance & Accounting Outsourcing",
          }),
        }}
      />
    </div>
  )
}
