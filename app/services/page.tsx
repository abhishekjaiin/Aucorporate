import Link from 'next/link'
import { HeroBackgroundLight } from '@/components/HeroBackgroundLight'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/Breadcrumb'
import { InquiryForm } from '@/components/InquiryForm'
import { FaqAccordion } from '@/components/FaqAccordion'
import {
  Shield,
  Calculator,
  FileCheck,
  Scale,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  BarChart3,
  Lock,
  Cpu,
  LineChart,
  GraduationCap,
} from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Global Support Services',
    description: 'Scalable business support and outsourcing solutions designed to optimize operations, reduce cost, and improve efficiency.',
    features: ['Finance & Accounting Support', 'Back-office Operations', 'Process Outsourcing', 'Customer Support Solutions', 'Operational Optimization'],
    href: '/outsourcing',
  },
  {
    icon: FileCheck,
    title: 'Accounting & Assurance',
    description: 'Robust financial reporting, audit assurance, and compliance services ensuring transparency and stakeholder confidence.',
    features: ['Statutory & Internal Audit', 'Financial Reporting', 'IFRS / GAAP Compliance', 'SOX & Controls Assurance', 'Process Reviews'],
    href: '/services/accounting-assurance',
  },
  {
    icon: Calculator,
    title: 'Taxation & Regulatory Services',
    description: 'End-to-end tax advisory and regulatory compliance solutions across domestic and international jurisdictions.',
    features: ['Direct & Indirect Tax Advisory', 'International Tax Structuring', 'Transfer Pricing Support', 'Regulatory Compliance', 'Tax Litigation Support'],
    href: '/services/taxation-regulatory',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Integrated risk governance, compliance frameworks, and technology-driven advisory to enhance resilience and business performance.',
    features: ['Enterprise Risk Frameworks', 'Cybersecurity & Controls', 'Digital & IT Advisory', 'Business Continuity Planning', 'Governance & Compliance'],
    href: '/services/risk-management',
  },
  {
    icon: Scale,
    title: 'Arbitration & Dispute Resolution',
    description: 'Strategic dispute resolution services with expertise in commercial arbitration and cross-border conflict management.',
    features: ['Commercial Arbitration', 'Cross-border Disputes', 'Mediation & Negotiation', 'Contract Advisory', 'Expert Opinions'],
    href: '/arbitration-services',
  },
  {
    icon: Users,
    title: 'HR & Payroll Solutions',
    description: 'Comprehensive workforce management solutions covering recruitment, payroll, compliance, and employee lifecycle management.',
    features: ['Talent Acquisition', 'Payroll Processing', 'HR Compliance', 'Performance Management', 'Employee Lifecycle Support'],
    href: '/hr-services',
  },
  {
    icon: LineChart,
    title: 'Transaction Advisory Services',
    description: 'Support through mergers, fundraising, valuations, and restructuring — for businesses navigating a major financial decision.',
    features: ['Due Diligence', 'M&A Advisory', 'Business & Asset Valuations', 'Debt & Equity Financing', 'IPO Listing & Consulting'],
    href: '/services/transaction-advisory',
  },
  {
    icon: GraduationCap,
    title: 'Training & Workshops',
    description: 'Practical, India-specific training programs that build in-house compliance, finance, and audit capability across your team.',
    features: ['Corporate & Tax Compliance Training', 'Internal Audit Training', 'Project Management Training', 'SME IPO Readiness', 'Anti-Money Laundering (AML) Training'],
    href: '/services/training-workshops',
  },
]

const industries = [
  { icon: Briefcase, name: 'Financial Services' },
  { icon: BarChart3, name: 'Healthcare & Life Sciences' },
  { icon: Lock, name: 'Technology & Media' },
  { icon: Cpu, name: 'Manufacturing' },
]

const needMap = [
  { need: 'Set up a company, subsidiary, or branch office in India', href: '/india-business-setup', label: 'India Business Setup' },
  { need: 'Keep your books, prepare financial statements, or manage a statutory audit', href: '/services/accounting-assurance', label: 'Accounting & Assurance' },
  { need: 'File direct tax or GST returns, or handle FEMA/RBI regulatory compliance', href: '/services/taxation-regulatory', label: 'Taxation & Regulatory Services' },
  { need: 'Investigate a suspected fraud, run an internal audit, or strengthen controls', href: '/services/risk-management', label: 'Risk Management' },
  { need: 'Raise capital, evaluate an acquisition, or prepare for an IPO', href: '/services/transaction-advisory', label: 'Transaction Advisory Services' },
  { need: 'Resolve a commercial dispute without going to court', href: '/arbitration-services', label: 'Arbitration & Dispute Resolution' },
  { need: 'Run payroll or manage HR and labour law compliance', href: '/hr-services', label: 'HR & Payroll Solutions' },
  { need: 'Train your in-house finance, audit, or compliance team', href: '/services/training-workshops', label: 'Training & Workshops' },
  { need: 'Outsource back-office finance or accounting operations at scale', href: '/outsourcing', label: 'Global Support Services' },
]

const engagementSteps = [
  { title: 'Scope', description: 'We start with a short consultation to understand your business, entity structure, and the specific service or services you need.' },
  { title: 'Engage', description: 'You get a clear proposal — scope, timeline, and fees — before any work begins. No open-ended retainers without visibility.' },
  { title: 'Deliver', description: 'A named team of CAs, CS, and domain specialists handles the work, with a single point of contact for updates.' },
  { title: 'Support', description: 'Most engagements continue beyond the first deliverable — ongoing compliance, advisory, and reporting as your business evolves.' },
]

const faqs = [
  {
    q: 'What services does AU Corporate offer?',
    a: 'AU Corporate provides accounting & assurance, taxation & regulatory compliance, risk management, transaction advisory, training & workshops, HR & payroll, global support/outsourcing, and arbitration & dispute resolution — covering a business from India entry through ongoing operations and growth.',
  },
  {
    q: "I'm a foreign company setting up in India — where should I start?",
    a: 'Start with entity structuring and incorporation under India Business Setup, then bring in accounting, tax, and payroll support once you are operational. Most of our India-entry clients engage us for both in a single coordinated engagement.',
  },
  {
    q: 'Can I engage AU Corporate for a single service, or does everything come as a bundle?',
    a: 'Either. Many clients start with one service — a statutory audit, GST compliance, or a due diligence review — and expand the relationship over time. There is no requirement to bundle services.',
  },
  {
    q: 'Does AU Corporate work with startups and SMEs, or only larger companies?',
    a: 'Both. Our client base spans early-stage startups and SMEs that need lean, ongoing compliance support, as well as larger domestic and foreign-owned companies with more complex regulatory, tax, or transaction requirements.',
  },
  {
    q: 'How is a service engagement priced?',
    a: 'Fees depend on the scope of work, entity size, and whether the engagement is one-time (an audit, a valuation) or ongoing (monthly accounting, retainer-based compliance). We scope and quote this during the initial consultation rather than publishing a flat rate.',
  },
  {
    q: 'Can one team handle accounting, tax, and HR together?',
    a: 'Yes — this is one of the reasons clients consolidate with AU Corporate. A single engagement team can coordinate accounting, tax filings, payroll, and compliance, which reduces the handoffs and gaps that come with using separate vendors for each function.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: 'Services' }]} />
      </div>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroBackgroundLight />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              <span className="text-[#081a42]">Comprehensive Solutions for</span>
              <span className="text-gold"> Business Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From strategic consulting to operational excellence, we deliver integrated solutions that address your most complex business challenges and drive sustainable growth.
            </p>
          </div>

          <div id="inquiry-form" className="scroll-mt-24">
            <InquiryForm
              title="Discuss Your Business Requirement"
              description="Tell us what support you need and our team will help you identify the right service and next step."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">One Partner, Every Stage</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#081a42] mt-3 mb-5">A Single Team Across Your Business Lifecycle</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AU Corporate is a multidisciplinary consultancy founded in 2016, with teams based in New Delhi and Gurugram and a client base spanning both foreign companies entering India and domestic businesses scaling their operations here. Our team brings together Chartered Accountants, CPAs, Company Secretaries, Cost Accountants, lawyers, ex-bankers, and industry specialists under one roof, so a single engagement can cover incorporation, accounting, tax, compliance, and advisory without you coordinating across multiple vendors.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The eight service areas below make up our core practice — each with its own dedicated page covering the full scope of what we do, who it&apos;s for, and how an engagement typically works. This page is the starting point: a map of what AU Corporate covers, so you can go straight to the service that matches what you need. If you&apos;re not sure which one fits, the &quot;Not Sure Where to Start&quot; guide further down maps common business needs directly to the right team.
          </p>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group p-8 rounded-xl bg-white border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">{service.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className="inline-flex items-center text-blue text-sm font-medium hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="not-sure" className="py-24 bg-secondary/50 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Quick Guide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Not Sure Where to Start?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Most enquiries fall into one of these situations. Find yours below and go straight to the team that handles it.</p>
          </div>
          <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
            {needMap.map((item) => (
              <Link
                key={item.need}
                href={item.href}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 bg-white hover:bg-secondary/50 transition-colors duration-200"
              >
                <span className="text-sm text-foreground">{item.need}</span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue shrink-0">
                  {item.label} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Industry Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Serving Diverse Industries</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our deep industry knowledge enables us to deliver tailored solutions that address sector-specific challenges and opportunities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Link key={industry.name} href="#inquiry-form" className="block p-6 rounded-xl bg-secondary border border-border text-center hover:border-gold/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-medium text-foreground">{industry.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Our Engagement Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Whichever service you engage us for, the process starts the same way — a clear scope before any commitment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementSteps.map((step, i) => (
              <div key={step.title} className="p-6 rounded-xl bg-white border border-border">
                <span className="text-3xl font-bold text-gold/40">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Frequently Asked Questions</h2>
          </div>
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

      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">Let&apos;s discuss how our services can help you achieve your business objectives.</p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg">
            <Link href="/contact">Contact Our Team<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
