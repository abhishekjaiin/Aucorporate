'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Users, Zap, Shield } from 'lucide-react'

export default function WhyIndiaPage() {
  const economicAdvantages = [
    {
      title: 'Fastest Growing Major Economy',
      description: '7-8% CAGR expected through 2030, outpacing global averages',
      stat: '7.2%',
      label: 'Average Growth',
    },
    {
      title: 'Large Consumer Base',
      description: '1.4+ billion population with rising disposable incomes',
      stat: '₹5L Cr',
      label: 'Digital Economy',
    },
    {
      title: 'Strategic Location',
      description: 'Gateway to South Asian markets with SAARC proximity',
      stat: '40+',
      label: 'Trade Partners',
    },
    {
      title: 'Cost Competitiveness',
      description: '40-60% cost advantage vs developed markets',
      stat: '40-60%',
      label: 'Cost Savings',
    },
  ]

  const industryStrengths = [
    {
      sector: 'IT & Software',
      strength: 'World\'s largest IT services hub',
      highlight: '$227B industry, 5M+ professionals',
    },
    {
      sector: 'Pharmaceuticals',
      strength: 'Generic drug manufacturing powerhouse',
      highlight: '20% of global generics, $48B market',
    },
    {
      sector: 'Manufacturing',
      strength: 'Make in India initiative attracts $100B FDI',
      highlight: 'Electronics, textiles, automotive growth',
    },
    {
      sector: 'Services',
      strength: 'BPO, KPO, and consulting excellence',
      highlight: '$200B market, 30% global BPO share',
    },
  ]

  const successFactors = [
    'English-speaking workforce and technical talent pool',
    'Predictable regulatory framework and transparent policies',
    'Membership in WTO and multiple trade agreements',
    'World-class infrastructure in metro cities',
    'Deep expertise in compliance and governance',
    'Government support for foreign investors',
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          {' > '}
          <Link href="/india-business-setup" className="text-blue-600 hover:underline">India Setup</Link>
          {' > '}
          <span className="text-gray-600">Why India</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Why India? The Strategic Case
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover why India is the optimal destination for global business expansion. From economic growth to talent abundance, understand the compelling reasons driving $100B+ annual FDI.
              </p>
              <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
                <Link href="/india-business-setup/fdi-channels">
                  Next: FDI Channels <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/why-india-advantages.png"
                alt="India economic advantages and business opportunities"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMIC ADVANTAGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Economic Advantages</h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl">
            India's macroeconomic fundamentals create a compelling investment thesis for 2024 and beyond.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {economicAdvantages.map((advantage, index) => (
              <div key={index} className="p-8 border rounded-lg bg-gradient-to-br from-gray-50 to-white">
                <div className="mb-4">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{advantage.stat}</div>
                  <div className="text-sm text-gray-600 font-semibold">{advantage.label}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY STRENGTHS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Industry Strengths</h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl">
            India excels across multiple high-value sectors, creating diversified opportunity across industries.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {industryStrengths.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-yellow-600 mb-3">{industry.sector}</h3>
                <p className="text-lg font-semibold text-gray-900 mb-3">{industry.strength}</p>
                <p className="text-gray-600">{industry.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE ANALYSIS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">India vs Global Competitors</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 font-semibold">Factor</th>
                  <th className="text-left py-4 px-4 font-semibold">India</th>
                  <th className="text-left py-4 px-4 font-semibold">vs China</th>
                  <th className="text-left py-4 px-4 font-semibold">vs SE Asia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold">Growth Rate</td>
                  <td className="py-4 px-4">7-8%</td>
                  <td className="py-4 px-4">✓ Higher</td>
                  <td className="py-4 px-4">✓ Higher</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold">English Proficiency</td>
                  <td className="py-4 px-4">High</td>
                  <td className="py-4 px-4">✓ Better</td>
                  <td className="py-4 px-4">Comparable</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold">Cost Advantage</td>
                  <td className="py-4 px-4">40-60%</td>
                  <td className="py-4 px-4">✓ Higher</td>
                  <td className="py-4 px-4">Comparable</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold">Regulatory Certainty</td>
                  <td className="py-4 px-4">High</td>
                  <td className="py-4 px-4">✓ Better</td>
                  <td className="py-4 px-4">✓ Better</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Market Size</td>
                  <td className="py-4 px-4">1.4B+</td>
                  <td className="py-4 px-4">Comparable</td>
                  <td className="py-4 px-4">✓ Larger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SUCCESS FACTORS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Key Success Factors</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {successFactors.map((factor, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-lg border">
                <div className="flex-shrink-0">
                  <Shield className="w-6 h-6 text-yellow-600 mt-1" />
                </div>
                <p className="text-gray-700">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Continue Your Journey</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/india-business-setup" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Back to Setup Overview</h3>
              <p className="text-sm text-gray-600">
                View all seven steps in your India business setup process
              </p>
            </Link>

            <Link href="/india-business-setup/fdi-channels" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">FDI Investment Channels</h3>
              <p className="text-sm text-gray-600">
                Learn about automatic and government approval investment routes
              </p>
            </Link>

            <Link href="/doing-business-in-india" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Complete India Guide</h3>
              <p className="text-sm text-gray-600">
                Comprehensive India entry and operational guide
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore India Opportunities?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Schedule a consultation with our India specialists to discuss your expansion strategy.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
