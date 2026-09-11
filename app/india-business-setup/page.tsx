import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FaqAccordion } from '@/components/FaqAccordion'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'
import { ArrowRight, CheckCircle, Globe, Zap, AlertCircle } from 'lucide-react'

const entitySnapshot = [
  {
    name: 'Private Limited Company (WOS)',
    desc: 'The default vehicle for most foreign investment — a wholly owned subsidiary with full operating flexibility and limited liability.',
  },
  {
    name: 'Limited Liability Partnership (LLP)',
    desc: 'Combines partnership flexibility with limited liability; less commonly used than a Private Limited Company for FDI-funded operating businesses.',
  },
  {
    name: 'Branch Office',
    desc: 'An extension of the foreign parent rather than a separate Indian entity — permitted only for specified activities and RBI-approval gated.',
  },
  {
    name: 'Liaison Office',
    desc: 'A non-revenue-generating representative presence, used purely for market research or coordination with Indian counterparts.',
  },
  {
    name: 'Project Office',
    desc: 'A temporary presence set up to execute a specific contract or project in India.',
  },
  {
    name: 'Joint Venture (JV)',
    desc: 'An Indian entity co-owned with a local partner, typically structured as a Private Limited Company under a shareholders’ agreement.',
  },
]

const timelineGlance = [
  { week: 'Week 1-2', activity: 'Entity selection and documentation — choosing the right structure and assembling apostilled parent-company documents' },
  { week: 'Week 2-4', activity: 'Company registration and approvals — SPICe+ filing, and DPIIT approval if the Government Route applies' },
  { week: 'Week 4-6', activity: 'Bank account opening and tax registration — PAN/TAN, GST where applicable, and capital remittance' },
  { week: 'Week 6-8', activity: 'Compliance setup — FEMA/RBI reporting, labour registrations, and internal process training' },
  { week: 'Week 8-12', activity: 'Final operationalization — the point at which most entities are fully banked, compliant, and trading' },
]

const hubFaqs = [
  {
    q: 'Where should I start if I’m setting up a business in India for the first time?',
    a: 'Start by confirming the two things that determine everything downstream: which entity type fits what you actually want to do in India, and whether your sector falls under the Automatic Route or needs Government Route approval. Those two answers dictate the timeline, the documentation, and which of this guide’s five sections you need first. If you’re still validating the market opportunity itself, our Why India overview is the right starting point instead.',
  },
  {
    q: 'Can a foreign company or individual own 100% of an Indian entity?',
    a: 'Yes, in most sectors. Manufacturing, most services, IT and software, and infrastructure development all permit 100% foreign ownership under the Automatic Route with no prior government approval. A shorter list of sensitive sectors — multi-brand retail, insurance, defence beyond certain limits, and a handful of others — caps foreign equity or requires Government Route approval instead. See our FDI Channels guide for the full sector-by-sector breakdown.',
  },
  {
    q: 'Do I need to travel to India to incorporate a company?',
    a: 'No — the SPICe+ filing, Digital Signature Certificate application, DIN application and name reservation are all completed online through the MCA21 V3 portal. The steps that can’t be done remotely are outside the portal itself, mainly getting the foreign parent’s documents apostilled in its home country. Our Company Formation guide walks through the exact document set and sequencing.',
  },
  {
    q: 'What’s the difference between the Automatic Route and the Government Route, and which one applies to me?',
    a: 'The Automatic Route covers most sectors and requires no prior government approval before the investment is made — the entity simply completes its RBI reporting afterward, and this typically clears in 4-6 weeks. The Government Route applies to a shorter list of sensitive sectors and requires DPIIT and sector-ministry approval before the investment can proceed, which usually takes 8-12 weeks. Our FDI Channels guide has the full sector table.',
  },
  {
    q: 'How long does the entire process take, from entity decision to a working, banked company?',
    a: 'Most foreign-owned entities are fully incorporated, banked, and operational within 8-12 weeks end to end, assuming an Automatic Route sector and no major document delays. That figure covers entity selection, incorporation, bank account opening, capital remittance and initial compliance setup — see our Timeline & Resources page for the week-by-week breakdown and budget.',
  },
  {
    q: 'Is a local resident director or office required to set up a business in India?',
    a: 'Yes for a company: at least one director must have stayed in India for a total of not less than 182 days in the preceding financial year, under Section 149(3) of the Companies Act, 2013. That director doesn’t need to be a shareholder and is often appointed specifically to satisfy this requirement, so an all-foreign-national board can still incorporate as long as one qualifying resident director is on the board from day one. A registered office address in India is also required from incorporation onward.',
  },
]

export default function IndiaBusinessSetupHub() {
  const setupSteps = [
    {
      step: 1,
      title: 'Why India?',
      description: "Understand India's economic potential and market opportunities",
      href: '/doing-business-in-india/why-india',
      icon: Globe,
    },
    {
      step: 2,
      title: 'FDI Channels',
      description: 'Learn automatic and government approval routes for investment',
      href: '/india-business-setup/fdi-channels',
      icon: Zap,
    },
    {
      step: 3,
      title: 'Company Formation',
      description: 'Complete guide to registering your Indian entity',
      href: '/india-business-setup/company-formation',
      icon: CheckCircle,
    },
    {
      step: 4,
      title: 'Regulatory Compliance',
      description: 'Navigate legal requirements and statutory filings',
      href: '/india-business-setup/regulatory-compliance',
      icon: CheckCircle,
    },
    {
      step: 5,
      title: 'Banking & Taxation',
      description: 'Setup banking accounts and understand tax obligations',
      href: '/india-business-setup/banking-taxation',
      icon: CheckCircle,
    },
    {
      step: 6,
      title: 'Life After Incorporation',
      description: 'Strategic priorities as you scale — finance function, governance, second-year mistakes',
      href: '/doing-business-in-india/post-incorporation',
      icon: CheckCircle,
    },
    {
      step: 7,
      title: 'Timeline & Resources',
      description: 'Budgeting, timelines, and helpful resources',
      href: '/india-business-setup/timeline-resources',
      icon: CheckCircle,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "India Business Setup" }]} />
      </div>
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Complete India Business Setup Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Setting up in India means working through market entry, incorporation, compliance, and banking — usually in that order. This guide walks through each stage, with links to the detail you need at each one.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
                <Link href="/doing-business-in-india/why-india">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ORIENTATION OVERVIEW */}
      <section className="py-20 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">How Setting Up a Business in India Actually Works</h2>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-6">
            &ldquo;India business setup&rdquo; isn&apos;t one filing — it&apos;s four separate decisions that happen roughly in sequence: which entity structure fits what you want to do here, whether your sector needs prior government approval before the investment can proceed, how to actually get that entity incorporated and banked, and what ongoing compliance the entity takes on once it exists. Most of the confusion foreign companies run into comes from treating these as one step rather than four, or starting the paperwork before the entity and route decisions are settled. This page is the map; the five sections linked below are where each decision gets made in full detail.
          </p>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-12">
            Two numbers are worth anchoring on before anything else: a foreign-owned entity going through the <strong>Automatic Route</strong> (no prior government approval needed) typically incorporates in <strong>4-6 weeks</strong>, while one requiring <strong>Government Route</strong> approval takes <strong>8-12 weeks</strong>. Either way, the full path from entity selection through a working, banked, compliant entity generally runs <strong>8-12 weeks</strong> overall — see the timeline snapshot further down this page.
          </p>

          <h3 className="text-2xl font-bold mb-2 text-gray-900">Entity Options at a Glance</h3>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-8">
            Six structures cover almost every foreign company entering India. A Private Limited Company (wholly owned subsidiary) is the default for a business that wants to trade, hire and hold assets in its own name; the others suit narrower purposes.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
            {entitySnapshot.map((entity) => (
              <ClickableInfoCard key={entity.name} title={entity.name} desc={entity.desc} />
            ))}
          </div>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-16">
            For the full decision framework — including a One Person Company (available only to certain resident Indian/NRI individuals, not to a foreign national or corporate parent) — see the complete entity comparison on our{' '}
            <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">
              Company Formation
            </Link>{' '}
            page.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-bold text-green-900">Automatic Route</h4>
              </div>
              <p className="text-sm text-green-900">No prior government approval — most sectors, including manufacturing, IT/software and most services. Typical timeline: 4-6 weeks.</p>
            </div>
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-bold text-blue-900">Government Route</h4>
              </div>
              <p className="text-sm text-blue-900">DPIIT and sector-ministry approval required — multi-brand retail, insurance, defence beyond certain limits, and other sensitive sectors. Typical timeline: 8-12 weeks.</p>
            </div>
          </div>
          <p className="mt-6 max-w-4xl leading-relaxed text-gray-600">
            Unsure which route your sector falls under? The{' '}
            <Link href="/india-business-setup/fdi-channels" className="text-yellow-700 font-semibold hover:underline">
              FDI Channels
            </Link>{' '}
            guide has the full sector-by-sector table.
          </p>
        </div>
      </section>

      {/* SEVEN-STEP FRAMEWORK */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">The Path to Setting Up in India</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Each stage builds on the last — start wherever you are today.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {setupSteps.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.step}
                  href={item.href}
                  className="group p-6 border rounded-lg hover:shadow-lg hover:border-yellow-400 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-yellow-600">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                      <ArrowRight className="w-4 h-4 text-yellow-400 mt-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE AT A GLANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Setup Timeline at a Glance</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            A realistic, stage-by-stage view of the roughly 8-12 weeks it takes most foreign-owned entities to go from entity decision to fully operational.
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {timelineGlance.map((item, i) => (
              <ClickableReveal key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 p-6 border rounded-lg bg-gray-50 cursor-pointer">
                <div className="font-bold text-yellow-600 min-w-[100px]">{item.week}</div>
                <div className="text-gray-700">{item.activity}</div>
              </ClickableReveal>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link href="/india-business-setup/timeline-resources" className="text-yellow-700 font-semibold hover:underline">
              See the full week-by-week timeline and budget breakdown →
            </Link>
          </p>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose AU Corporate</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'End-to-End Expertise',
                description: 'We handle every step from FDI documentation to compliance audits',
              },
              {
                title: 'Proven Track Record',
                description: 'A track record of successful India setups across industries and geographies',
              },
              {
                title: 'Regulatory Excellence',
                description: 'Deep relationships with RBI, tax authorities, and government agencies',
              },
              {
                title: 'Cost Optimization',
                description: 'Streamlined processes that help you avoid the unnecessary costs and delays of a fragmented approach',
                href: '/doing-business-in-india/entry-process',
              },
              {
                title: 'Timeline Certainty',
                description: 'Clear, realistic timelines agreed upfront, so there are no surprises along the way',
              },
              {
                title: 'Post-Setup Support',
                description: 'Ongoing compliance, annual audits, and quarterly reviews included',
              },
            ].map((benefit, index) => (
              <Link key={index} href={benefit.href || '/contact#inquiry-form'} className="block bg-white p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-10 text-center">Frequently Asked Questions</h2>
          <FaqAccordion faqs={hubFaqs} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: hubFaqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* RELATED RESOURCES */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Complementary Services</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/doing-business-in-india" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Complete India Entry Guide</h3>
              <p className="text-sm text-gray-600">
                Comprehensive guide for foreign companies entering the Indian market
              </p>
            </Link>

            <Link href="/services/taxation-regulatory" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Taxation & Regulatory Services</h3>
              <p className="text-sm text-gray-600">
                Expert guidance on tax planning and regulatory compliance
              </p>
            </Link>

            <Link href="/services/accounting-assurance" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Accounting & Assurance</h3>
              <p className="text-sm text-gray-600">
                Financial reporting and IFRS compliance services
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Establish Your India Operations?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Our team of India experts is ready to guide you through every step of the process.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6">
            <Link href="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
