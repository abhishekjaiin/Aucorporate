import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const complianceAreas = [
  {
    title: 'Corporate Governance',
    body: "Every India-incorporated company, private or public, is subject to the Companies Act, 2013, administered by the Ministry of Corporate Affairs (MCA) through the Registrar of Companies (RoC) — this obligation starts at incorporation and runs for the life of the entity. Every company must have at least one director who has been resident in India for the requisite period in the preceding calendar year, hold board meetings at a minimum prescribed cadence, and convene an Annual General Meeting each year. Ongoing statutory filings include the annual financial statements (Form AOC-4) and annual return (Form MGT-7/7A) with the RoC, plus event-based filings whenever directors, shareholding, or registered office details change. Companies that cross certain size thresholds take on additional obligations — independent directors, an audit committee, a company secretary — that a standard small subsidiary doesn't carry.",
  },
  {
    title: 'Labor & Employment Laws',
    body: "India's labour law framework changed materially in the last year: the four consolidated Labour Codes — the Code on Wages, the Industrial Relations Code, the Code on Social Security, and the Occupational Safety, Health and Working Conditions Code — took effect on 21 November 2025, replacing 29 separate central labour statutes. Central rules under the codes were notified in mid-2026, and state-level rules are still being finalised at different paces across states, so the practical requirements in a given state should be checked against that state's current rules rather than assumed uniform nationally. Hiring any employee in India triggers Shops & Establishment registration and, once headcount crosses the applicable thresholds, Provident Fund (EPFO) and Employees' State Insurance (ESIC) registration, both of which carry monthly contribution and return obligations for as long as the entity employs staff. The Ministry of Labour & Employment sets the central framework; day-to-day registration and enforcement runs through state labour departments and EPFO/ESIC.",
  },
  {
    title: 'Environmental Compliance',
    body: "Environmental compliance is triggered by physical or industrial activity — a manufacturing unit, factory, or facility with material effluent, emissions, or waste — rather than by incorporation itself, so a pure services or office-based entity (the common profile for a GCC or software subsidiary) typically has limited exposure here. Where it applies, industries in specified categories need Consent to Establish (before construction) and Consent to Operate (before commissioning) from the State Pollution Control Board under the Water Act, 1974 and the Air Act, 1981, with consents renewed periodically thereafter. Larger or higher-impact projects additionally require prior Environmental Clearance from the Ministry of Environment, Forest and Climate Change (MoEFCC) under the EIA Notification, 2006, a process that runs through screening, scoping, public consultation, and technical appraisal. State Pollution Control Boards handle day-to-day consents and monitoring; MoEFCC and the Central Pollution Control Board set the national framework.",
  },
  {
    title: 'Foreign Exchange Regulations',
    body: "Any Indian entity that receives foreign direct investment is subject to the Foreign Exchange Management Act, 1999 (FEMA), administered by the Reserve Bank of India (RBI). The trigger is the investment itself: share allotment to a foreign parent must be reported to RBI through Form FC-GPR within the prescribed window, and any later transfer of shares between a resident and non-resident needs to be reported via Form FC-TRS. Every entity carrying foreign investment on its books — regardless of whether any transaction happened that year — must also file the Annual Return on Foreign Liabilities and Assets (FLA) with RBI every year; this is one of the filings we most often see missed by first-time foreign-owned entities. Which of these obligations apply from day one depends on whether the investment came in through the automatic route or required government approval.",
  },
  {
    title: 'Data Protection (DPDP Act)',
    body: "The Digital Personal Data Protection Act, 2023 (DPDP Act) governs how Indian entities collect, process, and store personal data, and applies to any company processing the personal data of individuals in India — including a captive delivery center or subsidiary handling employee and customer data — regardless of where the parent is headquartered. Implementation has been phased: the DPDP Rules, 2025 were notified in November 2025, establishing the Data Protection Board of India and beginning to operationalise the Act, with the substantive compliance obligations — consent mechanics, data fiduciary duties, cross-border transfer conditions, and grievance-redressal requirements — coming into force in stages over the following months. Because the rollout is still active, the specific obligations and effective dates applicable to a given entity should be checked against the current notification rather than assumed fixed. The Ministry of Electronics and Information Technology (MeitY) and the Data Protection Board of India administer the framework.",
  },
  {
    title: 'Intellectual Property',
    body: "Unlike the other five areas here, IP protection in India isn't an automatic compliance obligation — it exists only where a company actively files and registers its trademarks, patents, designs, or copyrighted works. Trademarks (brand names, logos) are registered under the Trade Marks Act, 1999 and patents under the Patents Act, 1970, both administered by the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM) under the Department for Promotion of Industry and Internal Trade (DPIIT); copyright protection arises automatically on creation under the Copyright Act, 1957, though registration strengthens enforcement. Foreign companies that already hold trademark or patent registrations at home can extend protection into India through the Madrid Protocol (trademarks) or the Patent Cooperation Treaty (patents) rather than filing entirely fresh applications, and registered IP requires periodic renewal to stay in force. For a company setting up in India, the practical trigger is usually incorporation itself — the point at which a brand name, product, or process becomes commercially active in the Indian market and worth protecting locally.",
  },
]

export default function RegulatoryCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Business Setup", href: "/india-business-setup" }, { label: "Regulatory Compliance" }]} />

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Regulatory Compliance Framework</h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl">
            A practical guide to India's regulatory compliance requirements — corporate governance, labor law, environmental rules, foreign exchange, data protection, and intellectual property.
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Compliance in India isn't a single filing — it's six largely independent regimes, each with its own trigger, administering authority, and filing rhythm, running in parallel for the life of the entity. AU Corporate's regulatory compliance practice covers all six areas below, from initial registration through ongoing filings.
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
          <h2 className="text-4xl font-bold mb-4">Key Compliance Areas</h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Each area below is triggered independently — some apply to every India entity from day one, others only where specific activities (manufacturing, foreign investment, personal data processing, IP filings) are actually present.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {complianceAreas.map((item) => (
              <div key={item.title} className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
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
