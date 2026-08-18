import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'

export default function TimelineResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Business Setup", href: "/india-business-setup" }, { label: "Timeline & Resources" }]} />

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Timeline & Resources</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Complete timeline for India business setup, budget breakdown, and essential resources for your journey.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Setup Timeline</h2>
          <div className="space-y-4">
            {[
              { week: 'Week 1-2', activity: 'Entity Selection & Documentation' },
              { week: 'Week 2-4', activity: 'Company Registration & Approvals' },
              { week: 'Week 4-6', activity: 'Bank Account & Tax Registration' },
              { week: 'Week 6-8', activity: 'Compliance Setup & Training' },
              { week: 'Week 8-12', activity: 'Final Operationalization' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 border rounded-lg bg-gradient-to-r from-yellow-50 to-white">
                <div className="font-bold text-yellow-600 min-w-fit">{item.week}</div>
                <div className="text-gray-700">{item.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Budget Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { item: 'Company Registration', cost: '₹3,000-5,000' },
              { item: 'Legal & Documentation', cost: '₹10,000-20,000' },
              { item: 'Bank Account Setup', cost: '₹5,000-10,000' },
              { item: 'Tax Registration', cost: '₹2,000-5,000' },
              { item: 'Compliance Setup', cost: '₹15,000-25,000' },
              { item: 'Professional Fees', cost: '₹20,000-50,000' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border">
                <h3 className="font-bold text-gray-900 mb-2">{item.item}</h3>
                <p className="text-2xl font-bold text-yellow-600">{item.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Ready to Begin?</h2>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6">
            <Link href="/contact">Start Your India Setup Journey</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
