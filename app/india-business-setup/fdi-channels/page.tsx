import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default function FDIChannelsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          {' > '}
          <Link href="/india-business-setup" className="text-blue-600 hover:underline">India Setup</Link>
          {' > '}
          <span className="text-gray-600">FDI Channels</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">FDI Investment Channels in India</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Understand the automatic and government approval routes for foreign direct investment. India offers multiple pathways for foreign entities to establish and invest, each with distinct timelines, approvals, and regulatory requirements.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/india-business-setup/company-formation">
              Next: Company Formation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">FDI Framework Overview</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Automatic Route */}
            <div className="border-2 border-green-200 rounded-lg p-8 bg-green-50">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-900">Automatic Route</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">No government approval required</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Direct RBI compliance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Timeline: 4-6 weeks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Most sectors eligible</span>
                </li>
              </ul>
              <p className="text-green-800 font-semibold text-sm bg-white p-3 rounded">Most foreign investors use the Automatic Route due to faster processing and reduced bureaucracy.</p>
            </div>

            {/* Government Approval */}
            <div className="border-2 border-blue-200 rounded-lg p-8 bg-blue-50">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-900">Government Approval Route</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">FIPB/DPIIT approval required</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Restricted sectors only</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Timeline: 8-12 weeks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Strategic sectors</span>
                </li>
              </ul>
              <p className="text-blue-800 font-semibold text-sm bg-white p-3 rounded">Required for multi-brand retail, insurance, atomic energy, and other sensitive sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATIC ROUTE DETAILS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Automatic Route - Key Details</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold text-lg mb-4 text-yellow-600">Eligible Sectors</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Manufacturing & processing</li>
                <li>• Services sector</li>
                <li>• IT & software</li>
                <li>• Real estate (with conditions)</li>
                <li>• Infrastructure development</li>
                <li>• Most service sectors</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold text-lg mb-4 text-yellow-600">Restricted Sectors</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Multi-brand retail trading</li>
                <li>• Insurance</li>
                <li>• Atomic energy</li>
                <li>• Telecommunications (with limits)</li>
                <li>• Broadcasting</li>
                <li>• Civil aviation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold text-lg mb-4 text-yellow-600">Documentation</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Incorporation certificate</li>
                <li>• Director identification</li>
                <li>• Share transfer documents</li>
                <li>• FEMA Form FC-TRS</li>
                <li>• RBI compliance filing</li>
                <li>• Bank account proof</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNMENT APPROVAL DETAILS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Government Approval Route - Process</h2>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'DPIIT Application',
                description: 'Submit application to Department for Promotion of Industry and Internal Trade with business plan and documentation',
              },
              {
                step: 2,
                title: 'Preliminary Review',
                description: 'DPIIT reviews application for completeness and sector alignment (2-3 weeks)',
              },
              {
                step: 3,
                title: 'Sector Ministry Consultation',
                description: 'Relevant ministry reviews and provides clearance for sensitive sectors (3-4 weeks)',
              },
              {
                step: 4,
                title: 'FIPB/DPIIT Approval',
                description: 'Final approval from FIPB or DPIIT interdepartmental committee (2-3 weeks)',
              },
              {
                step: 5,
                title: 'RBI Compliance',
                description: 'Post-approval FEMA filings and RBI notification (1-2 weeks)',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 p-6 border rounded-lg bg-gradient-to-r from-gray-50 to-white">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTOR-SPECIFIC RULES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Sector-Specific FDI Rules</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { sector: 'Retail Trading', rule: 'Single brand: 100% auto; Multi-brand: requires approval, min $100M investment' },
              { sector: 'Insurance', rule: 'Requires government approval; Max 49% foreign equity in operating company' },
              { sector: 'Telecommunications', rule: 'Requires approval; Foreign equity limit: 74% in operating entities' },
              { sector: 'Real Estate', rule: 'NRIs allowed; Foreign investor limits apply; Minimum investment required' },
              { sector: 'Banking', rule: 'Requires RBI approval; Automatic FDI up to 5% (now 20% with approval)' },
              { sector: 'E-commerce', rule: 'Marketplace model allowed (automatic); Inventory model restricted' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{item.sector}</h3>
                <p className="text-gray-600 text-sm">{item.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Continue Your Journey</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/india-business-setup/company-formation" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Company Formation</h3>
              <p className="text-sm text-gray-600">Entity registration and incorporation process</p>
            </Link>

            <Link href="/services/taxation-regulatory" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">FEMA Compliance Services</h3>
              <p className="text-sm text-gray-600">Expert FDI documentation and RBI filing support</p>
            </Link>

            <Link href="/contact" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Schedule Consultation</h3>
              <p className="text-sm text-gray-600">Discuss your FDI strategy with our experts</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
