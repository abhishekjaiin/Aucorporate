import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Globe, Zap } from 'lucide-react'

export default function IndiaBusinessSetupHub() {
  const setupSteps = [
    {
      step: 1,
      title: 'Why India?',
      description: 'Understand India&apos;s economic potential and market opportunities',
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
      title: 'Post-Incorporation',
      description: 'Ongoing compliance and operational requirements',
      href: '/india-business-setup/post-incorporation',
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
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Complete India Business Setup Guide
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Master the seven-step process to establish your business in India. From understanding market opportunities to post-incorporation compliance, we guide you through every stage.
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
            <div className="relative h-96">
              <Image
                src="/images/india-business-setup.png"
                alt="India business setup and company formation process"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEVEN-STEP FRAMEWORK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Your Seven-Step Mastery Program</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Each step builds on the previous, creating a comprehensive roadmap from decision to operational excellence.
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
                description: '500+ successful setups across 45 countries and all major industries',
              },
              {
                title: 'Regulatory Excellence',
                description: 'Deep relationships with RBI, tax authorities, and government agencies',
              },
              {
                title: 'Cost Optimization',
                description: 'Save 30-40% on setup costs through our streamlined processes',
                href: '/doing-business-in-india/entry-process',
              },
              {
                title: 'Timeline Certainty',
                description: 'Predictable timelines: 8-12 weeks for full operationalization',
              },
              {
                title: 'Post-Setup Support',
                description: 'Ongoing compliance, annual audits, and quarterly reviews included',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="py-16 bg-white border-t">
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
