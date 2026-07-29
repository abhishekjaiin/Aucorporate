'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function PostIncorporationPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          {' > '}
          <Link href="/india-business-setup" className="text-blue-600 hover:underline">India Setup</Link>
          {' > '}
          <span className="text-gray-600">Post-Incorporation</span>
        </div>
      </nav>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Post-Incorporation Compliance</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            After incorporation, your company must meet ongoing statutory requirements. Understand annual filings, audits, and operational compliance obligations.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/india-business-setup/timeline-resources">
              Final: Timeline & Resources <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Annual Compliance Calendar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {['Annual General Meeting', 'Financial Audit', 'Tax Return Filing', 'GST Returns', 'Statutory Certifications', 'Board Meetings'].map((item, i) => (
              <div key={i} className="p-6 border rounded-lg bg-gradient-to-br from-gray-50 to-white">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Mandatory annual compliance requirement</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Final Step</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/india-business-setup/timeline-resources" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Timeline & Resources</h3>
              <p className="text-sm text-gray-600">Budget, timeline, and helpful resources</p>
            </Link>
            <Link href="/services/accounting-assurance" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Accounting Services</h3>
              <p className="text-sm text-gray-600">Ongoing accounting and audit support</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
