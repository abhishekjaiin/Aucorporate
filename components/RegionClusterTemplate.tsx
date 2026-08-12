'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, TrendingUp, Globe, Award } from 'lucide-react'

interface RegionClusterTemplateProps {
  title: string
  subtitle: string
  children: React.ReactNode
  region: string
}

export function RegionClusterTemplate({
  title,
  subtitle,
  children,
  region,
}: RegionClusterTemplateProps) {
  // Reusable stats (same across all pages)
  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '30+', label: 'Collective Professional Experience' },
    { value: '10+', label: 'Countries Served' },
    { value: '98%', label: 'Client Retention' },
  ]

  // Reusable process flow (same across all pages)
  const processSteps = [
    'Structure & Entity Selection',
    'Incorporation & Registration',
    'Regulatory & FEMA Compliance',
    'Accounting & Payroll Setup',
    'Ongoing Compliance & Scale',
  ]

  return (
    <>
      {/* HERO SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* UNIQUE CONTENT ZONE */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {children}
        </div>
      </section>

      {/* TRUST BAR - FIXED ZONE */}
      <section className="py-12 sm:py-16 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS VISUAL - FIXED ZONE */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Our Proven Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={step} className="relative">
                <div className="bg-white border-2 border-yellow-400 rounded-lg p-4 text-center h-full flex flex-col justify-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    {step}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA - FIXED ZONE */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">
            Ready to Start Your India Entry Journey?
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg">
            Contact AU Corporate today for a personalized consultation tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-yellow-400 text-black hover:bg-yellow-500 text-base py-3"
            >
              <Link href="/contact">
                Book a Consultation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent text-base py-3"
            >
              <a
                href={`https://wa.me/919999010513?text=Hi%20AU%20Corporate,%20I%20would%20like%20to%20discuss%20India%20entry%20for%20my%20${region}%20business.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
