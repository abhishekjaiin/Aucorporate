'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function BankingTaxationPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          {' > '}
          <Link href="/india-business-setup" className="text-blue-600 hover:underline">India Setup</Link>
          {' > '}
          <span className="text-gray-600">Banking & Taxation</span>
        </div>
      </nav>

      <section className="py-20 bg-linear-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Banking & Taxation Setup</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Establish your financial infrastructure in India. From opening business bank accounts to understanding GST and corporate tax obligations, we guide you through the financial setup.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/india-business-setup/post-incorporation">
              Next: Post-Incorporation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Financial Setup Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Banking Account Setup', 'GST Registration', 'Tax Registration (PAN/TAN)', 'Payroll & Salary Processing', 'Accounting System', 'Annual Filing'].map((item, i) => (
              <div key={i} className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Critical component of your financial setup</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Continue Your Setup</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/india-business-setup/post-incorporation" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Post-Incorporation</h3>
              <p className="text-sm text-gray-600">Ongoing compliance and operational requirements</p>
            </Link>
            <Link href="/contact" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Financial Consultation</h3>
              <p className="text-sm text-gray-600">Expert guidance on banking and taxation</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
