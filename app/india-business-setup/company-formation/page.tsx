'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CompanyFormationPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          {' > '}
          <Link href="/india-business-setup" className="text-blue-600 hover:underline">India Setup</Link>
          {' > '}
          <span className="text-gray-600">Company Formation</span>
        </div>
      </nav>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Company Formation in India</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Complete guide to registering your Indian company entity. From entity selection to statutory filings, we cover every step of the incorporation process.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/india-business-setup/regulatory-compliance">
              Next: Regulatory Compliance <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Entity Types in India</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Private Limited Company', features: ['Minimum 2 shareholders', 'Separate legal entity', 'Limited liability', 'Recommended for most foreign investments'] },
              { name: 'Public Company', features: ['Minimum 7 shareholders', 'Listed on stock exchange', 'Higher compliance', 'Not recommended for initial setup'] },
            ].map((entity, i) => (
              <div key={i} className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-4">{entity.name}</h3>
                <ul className="space-y-2">
                  {entity.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <span className="text-yellow-600 font-bold">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Next Steps</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/doing-business-in-india/incorporation" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Incorporation Services</h3>
              <p className="text-sm text-gray-600">Full-service support: registration, FDI compliance, GST, and more</p>
            </Link>
            <Link href="/india-business-setup/regulatory-compliance" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-sm text-gray-600">Statutory requirements and ongoing compliance</p>
            </Link>
            <Link href="/contact" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Schedule Consultation</h3>
              <p className="text-sm text-gray-600">Get expert assistance with company formation</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
