import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function RegulatoryCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          {' > '}
          <Link href="/india-business-setup" className="text-blue-600 hover:underline">India Setup</Link>
          {' > '}
          <span className="text-gray-600">Regulatory Compliance</span>
        </div>
      </nav>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Regulatory Compliance Framework</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Navigate the complex regulatory landscape with our comprehensive compliance guide. From labor laws to environmental regulations, stay compliant with Indian requirements.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/india-business-setup/banking-taxation">
              Next: Banking & Taxation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Key Compliance Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {['Corporate Governance', 'Labor & Employment Laws', 'Environmental Compliance', 'Foreign Exchange Regulations', 'Data Protection (DPDP Act)', 'Intellectual Property'].map((item, i) => (
              <div key={i} className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Critical compliance requirements and filing deadlines</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Next Steps</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/india-business-setup/banking-taxation" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Banking & Taxation</h3>
              <p className="text-sm text-gray-600">Financial setup and tax obligations</p>
            </Link>
            <Link href="/contact" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">Get compliance guidance from our team</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
