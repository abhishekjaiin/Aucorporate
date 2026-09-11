import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { ClickableReveal } from '@/components/ClickableReveal'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { TabbedComparison } from '@/components/TabbedComparison'
import { RelatedResources } from '@/components/RelatedResources'

import {
  ArrowRight,
  Calculator,
  Headphones,
  Database,
  TrendingUp,
  CheckCircle2,
  Globe,
  Clock,
  Users,
  Zap,
  BarChart3
} from 'lucide-react'

const services = [
  {
    icon: Calculator,
    title: 'Finance & Accounting BPO',
    description: 'Complete finance and accounting outsourcing from bookkeeping to financial analysis.',
    features: [
      'Accounts payable/receivable',
      'Financial reporting',
      'Reconciliation services',
      'Month-end close support',
      'Financial analysis',
    ],
  },
  {
    icon: Database,
    title: 'Back Office Operations',
    description: 'Streamlined back-office services to enhance operational efficiency.',
    features: [
      'Data entry and management',
      'Document processing',
      'Records management',
      'Administrative support',
      'Order processing',
    ],
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Multi-channel customer support services to enhance customer experience.',
    features: [
      'Inbound/outbound support',
      'Technical helpdesk',
      'Email support',
      'Chat support',
      'Social media management',
    ],
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'Business process reengineering and optimization for maximum efficiency.',
    features: [
      'Process assessment',
      'Workflow automation',
      'Quality assurance',
      'Continuous improvement',
      'Performance monitoring',
    ],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Cost Efficiency',
    value: '40-60%',
    description: 'Reduce operational costs while maintaining quality standards.',
  },
  {
    icon: Clock,
    title: '24/7 Operations',
    value: '24/7',
    description: 'Round-the-clock operations for continuous business support.',
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    value: '500+',
    description: 'Access to trained professionals across various domains.',
  },
  {
    icon: BarChart3,
    title: 'Scalability',
    value: '3x',
    description: 'Flexible scaling to meet your business demands.',
  },
]

const industries = [
  'Financial Services',
  'Healthcare',
  'Retail & E-commerce',
  'Technology',
  'Manufacturing',
]

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
    title: 'Bookkeeping & Accounts Payable/Receivable',
    desc: 'Day-to-day transaction recording, vendor and customer ledger management, bank reconciliation, and month-end close — the base layer every other finance function depends on.',
  },
  {
    title: 'Payroll Processing & Statutory Contributions',
    desc: 'Monthly payroll runs, TDS on salaries, and Provident Fund/ESI contributions once headcount crosses the applicable thresholds. Full payroll compliance detail sits under our dedicated HR & payroll practice.',
  },
  {
    title: 'GST & TDS Compliance and Return Filing',
    desc: 'GST registration where applicable, monthly/quarterly return filing, and TDS deposits and returns on salary and vendor payments — kept current against the filing calendar so nothing slips.',
  },
  {
    title: 'Virtual CFO & Financial Controllership',
    desc: 'MIS reporting in the format your global finance team actually needs, budget-vs-actual tracking, cash flow visibility, and board-ready financial packs — without carrying a full-time CFO headcount before your India entity is at the scale that justifies one.',
  },
  {
    title: 'Statutory Audit Coordination & Annual Filings',
    desc: "Coordinating the annual statutory audit, AOC-4/MGT-7 filings with the Registrar of Companies, and — for foreign-invested entities — RBI's annual FLA return alongside any other FEMA reporting the entity is due to make.",
  },
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
    a: "Most commonly: bookkeeping and accounts payable/receivable, monthly payroll processing and statutory contributions, GST and TDS compliance and return filing, MIS reporting and Virtual CFO support, and coordination of the annual statutory audit and RoC/RBI filings. Which mix makes sense depends on your entity's size and how much you want to run through a local finance lead versus an outsourced provider.",
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
    a: "Both, when it's structured properly. Our outsourcing engagements typically combine the transactional work (bookkeeping, payroll, AP/AR) with the compliance calendar it feeds — GST and TDS returns, PF/ESI, and, for foreign-invested entities, RBI reporting including the annual FLA return. Bookkeeping without the compliance layer on top of it leaves exactly the gap that tends to cause a missed deadline.",
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

      <div className="max-w-7xl mx-auto px-4"><Breadcrumb items={[{ label: "Global Support" }]} /></div>

            {/* HERO */}
      <section className="relative py-24 min-h-[80vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/pexels-pixabay-164606.jpg"
            alt="Singapore skyline at dusk with business professionals walking, representing global outsourcing support"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#081a42]/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-white">
          <Reveal>
            <span className="text-gold text-sm font-semibold uppercase">
              Finance, Accounting & Compliance
            </span>

            <h1 className="text-5xl font-bold mt-4 mb-6">
              Accounting & Finance <span className="text-gold">Outsourcing</span> in India
            </h1>

            <p className="text-white/80 mb-8 max-w-2xl">
              Outsourced bookkeeping, payroll, statutory compliance and Virtual CFO support for foreign companies operating in India — a scalable finance function that reduces cost without requiring you to build an in-house India team before your entity is ready for one.
            </p>

            <div className="flex gap-4">
              <Button asChild className="bg-gold text-black">
                <Link href="/contact">Start Outsourcing</Link>
              </Button>

              <Button asChild className="bg-gold text-black">
                <Link href="/doing-business-in-india/why-india">Why India</Link>
              </Button>
            </div>
          </Reveal>
        </div>

      </section> {/* ✅ HERO CLOSED HERE */}


      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <Reveal>
            <h2 className="text-3xl font-bold mb-12">
              Why Choose AU Corporate
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Domain Expertise",
                desc: "Deep specialization across finance, tax, and operations.",
              },
              {
                title: "Global Delivery",
                desc: "Consistent execution across time zones and geographies.",
              },
              {
                title: "Technology Driven",
                desc: "Automation-first approach using modern tools.",
              },
            ].map((item, i) => (
              <Link key={item.title} href="/contact#inquiry-form" className="block">
                <Reveal
                  delay={i * 0.2}
                  className="p-6 border rounded-xl hover:shadow-lg hover:border-gold/50 transition"
                >
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Reveal>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">

          {benefits.map((b, i) => (
            <Link key={b.title} href="/contact#inquiry-form" className="block">
              <Reveal
                delay={i * 0.1}
                className="p-6 bg-white border rounded-xl text-center hover:shadow-lg hover:border-gold/50 transition"
              >
                <b.icon className="text-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-gold">{b.value}</div>
                <div>{b.title}</div>
                <p className="text-xs text-muted-foreground">{b.description}</p>
              </Reveal>
            </Link>
          ))}

        </div>
      </section>

      {/* WHAT YOU CAN OUTSOURCE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-4">
              What Foreign Companies Outsource in India
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              Most foreign parents don&apos;t outsource &ldquo;accounting&rdquo; as one undifferentiated task — they outsource a specific set of finance, payroll and compliance functions that would otherwise mean building an in-house India finance team from scratch. Here&apos;s what that typically covers.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outsourcedFunctions.map((f) => (
              <ClickableInfoCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* OUTSOURCING VS ALTERNATIVES */}
      <section className="py-24 bg-secondary/50">
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
            Further reading: <Link href="/doing-business-in-india/post-incorporation" className="text-gold font-semibold hover:underline">Life After Incorporation</Link> on the build-vs-outsource decision as you scale, and <Link href="/gcc-setup-india" className="text-gold font-semibold hover:underline">GCC Setup in India</Link> for the fuller outsourcing-vs-captive comparison.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-12">How We Work</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Understand Requirements",
              "Design Process",
              "Execute & Manage",
              "Optimize Continuously"
            ].map((step, i) => (
              <ClickableReveal key={step} delay={i * 0.2} className="cursor-pointer">
                <div className="text-gold font-bold text-lg mb-2">
                  0{i + 1}
                </div>
                <p>{step}</p>
                <p className="mt-2 text-xs font-semibold text-gold">Talk to an expert &rarr;</p>
              </ClickableReveal>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-16">
            Comprehensive Outsourcing Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {services.map((s, i) => (
              <Link key={s.title} href="/contact#inquiry-form" className="block">
                <Reveal
                  delay={i * 0.1}
                  className="p-8 border rounded-xl bg-secondary hover:shadow-lg hover:border-gold/50 transition"
                >
                  <s.icon className="text-gold mb-4" />

                  <h3 className="text-xl font-semibold">{s.title}</h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {s.description}
                  </p>

                  <ul className="space-y-2 text-sm">
                    {s.features.map(f => (
                      <li key={f} className="flex gap-2">
                        <CheckCircle2 className="text-gold w-4 h-4 mt-1" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </Link>
            ))}

          </div>
        </div>
      </section>
      {/* DELIVERY MODEL */}
<section className="py-24 bg-secondary/50">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <Reveal>
      <h2 className="text-3xl font-bold mb-12">
        Our Delivery Model
      </h2>
    </Reveal>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        "Strategy & Consulting",
        "Execution & Processing",
        "Monitoring & Optimization",
      ].map((step, i) => (
        <Link key={step} href="/contact#inquiry-form" className="block">
          <Reveal
            delay={i * 0.2}
            className="p-8 bg-white border rounded-xl hover:shadow-lg hover:border-gold/50 transition"
          >
            <div className="text-gold font-bold text-xl mb-2">
              0{i + 1}
            </div>
            <p>{step}</p>
          </Reveal>
        </Link>
      ))}

    </div>
  </div>
</section>

      {/* SOFTWARE EXPERTISE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Accounting & Tax Software Expertise
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We work with the accounting and tax platforms your finance team already uses, so compliance and reporting stay in sync.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">

            {software.map((s, i) => (
              <Link key={s.name} href="/contact#inquiry-form" className="block">
                <Reveal
                  delay={(i % 6) * 0.08}
                  className="p-4 bg-gray-50 border rounded-xl flex items-center justify-center hover:shadow-md hover:border-gold/50 transition"
                >
                  <span className="font-semibold text-gray-700 text-sm sm:text-base text-center">
                    {s.name}
                  </span>
                </Reveal>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-5 gap-4 text-center">

            {industries.map(i => (
              <Link key={i} href="/contact#inquiry-form" className="block p-4 bg-white border rounded-lg hover:shadow-md hover:border-gold/50 transition">
                <Globe className="mx-auto text-gold mb-2" />
                {i}
              </Link>
            ))}

          </div>

        </div>
      </section>
{/* RESULTS */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <Reveal>
      <h2 className="text-3xl font-bold mb-12">
        Proven Results
      </h2>
    </Reveal>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        { value: "60%", label: "Cost Reduction" },
        { value: "3x", label: "Efficiency Increase" },
        { value: "99%", label: "Accuracy" },
      ].map((item, i) => (
        <Link key={item.label} href="/contact#inquiry-form" className="block">
          <Reveal
            delay={i * 0.2}
            className="p-8 border rounded-xl hover:shadow-lg hover:border-gold/50 transition"
          >
            <div className="text-3xl font-bold text-gold mb-2">
              {item.value}
            </div>
            <p>{item.label}</p>
          </Reveal>
        </Link>
      ))}

    </div>
  </div>
</section>

      {/* GLOBAL PARTNER NETWORK */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">
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

      {/* FAQ */}
      <section className="py-24 bg-white">
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
            links={[
              { label: 'Life After Incorporation', href: '/doing-business-in-india/post-incorporation', description: 'The build-vs-outsource decision as your India finance function scales.' },
              { label: 'GCC Setup in India', href: '/gcc-setup-india', description: 'Outsourcing vs. building a captive Global Capability Center.' },
              { label: 'HR & Payroll Services', href: '/hr-services', description: 'Payroll processing and HR statutory compliance in depth.' },
              { label: 'Accounting & Assurance', href: '/services/accounting-assurance', description: 'Statutory audit, MIS reporting, and financial statement preparation.' },
              { label: 'Taxation & Regulatory Services', href: '/services/taxation-regulatory', description: 'GST, TDS, FEMA and direct tax compliance in full.' },
              { label: 'Regulatory Compliance Requirements', href: '/india-business-setup/regulatory-compliance', description: 'The full compliance framework for a foreign-owned Indian entity.' },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Optimize Your Operations?
        </h2>

        <Button asChild className="bg-gold text-black">
          <Link href="/contact">
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>

    </div>
  )
}
