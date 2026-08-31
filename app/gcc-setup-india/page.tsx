import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { LeadForm } from '@/components/LeadForm'
import { TabbedComparison } from '@/components/TabbedComparison'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const gccVsComparisons = [
  {
    title: 'GCC vs BPO/Outsourcing — What’s the Real Difference',
    body: "A BPO (or an outsourcing/accounting-BPO arrangement of the kind AU Corporate itself provides to many clients) is a vendor relationship: a third-party service provider delivers a defined scope of work — bookkeeping, payroll processing, transaction support — under a service agreement, typically serving multiple clients at once. A GCC is the opposite structural choice: the foreign company builds and owns the India team itself, as an internal function, serving nobody but itself.\n\nThe two aren’t mutually exclusive. A GCC still needs a finance and HR back office to run — payroll compliance, statutory bookkeeping, MIS reporting to the parent — and many GCCs use an outsourced accounting or Virtual CFO provider for exactly that function rather than building an in-house finance team from day one. That’s a legitimate, common pairing, but using an outsourcing provider for the back office doesn’t make the entity itself a BPO — it remains a captive GCC that has chosen to outsource one non-core function.",
  },
  {
    title: 'GCC vs a Traditional Subsidiary',
    body: 'Every GCC is, legally, a subsidiary (or branch, or JV) of the foreign parent — there’s no separate "GCC" entity type under Indian company law. What makes a GCC distinct is purpose and scale of intent: a standard India subsidiary might be set up to sell into the Indian market, manage a supply chain, or hold assets, whereas a GCC exists specifically to deliver services or capability back to the parent and its global operations. In practice this shows up in how the entity is resourced (headcount ramps faster and earlier), how it’s governed (KPIs tied to the parent’s global functions rather than local revenue targets), and how intercompany pricing is structured (cost-plus or similar captive-service pricing rather than arm’s-length third-party sales).',
  },
  {
    title: 'GCC vs EOR (Employer of Record) — the Pre-Incorporation Bridge Option',
    body: 'An Employer of Record lets a foreign company hire employees in India through a third-party legal employer, without incorporating an entity at all. It’s a genuinely useful bridge for companies that want to start hiring a small India team before committing to full incorporation, or that need to test the market before deciding on entity structure.\n\nAn EOR is not, however, a substitute for a GCC at any meaningful scale. Cost per head is higher than direct employment once headcount grows, the parent has no local legal entity to contract, invoice, or hold assets through, and certain functions (regulated activities, IP-sensitive work, anything requiring a local bank account or GST registration) simply can’t run through an EOR arrangement. Most companies that go the EOR-first route do so for 6-12 months while entity incorporation and initial compliance registrations are completed in parallel, then transition the EOR-employed staff onto the newly incorporated entity’s own payroll.',
  },
]

const entityOptions = [
  {
    title: 'Private Limited Subsidiary (Wholly Owned Subsidiary)',
    body: 'The default structure for the large majority of GCCs. A WOS gives the parent full control, is well understood by Indian regulators, banks, and employees, and supports the FDI automatic route for most GCC-relevant sectors.',
  },
  {
    title: 'Branch Office',
    body: 'Available under RBI’s branch office framework, typically used where the parent wants an India presence for a narrower, defined purpose (representing the parent, research, or certain professional/consultancy activity) rather than a full commercial operation. A branch office isn’t a separate legal entity — it’s an extension of the foreign parent — which brings different liability and tax treatment than a subsidiary. Few GCCs use a branch office as their primary structure.',
  },
  {
    title: 'BOT/JV (Build-Operate-Transfer or Joint Venture)',
    body: 'Under a BOT model, a third-party operator builds and initially runs the GCC — recruiting, infrastructure, and day-to-day management — with a contractual path for the foreign parent to take over full ownership and operational control after an agreed period. This can shorten time-to-first-hire meaningfully, at the cost of higher ongoing fees during the build phase and a transition event you’ll need to manage carefully. AU Corporate does not operate as a BOT/managed-GCC provider; our role in this model, where clients use one, is on the legal entity, tax, and compliance side, not building or running the center itself.',
  },
  {
    title: 'EOR-First',
    body: 'As covered above — a way to start hiring before incorporation, not a long-term substitute for one.',
  },
]

const decisionFramework = [
  { factor: 'Headcount at launch', wos: 'Any size, especially 20+', bot: 'Large, fast ramp (50-100+ in year one)', branch: 'Small, narrow-purpose presence', eor: 'Under ~10, pre-decision phase' },
  { factor: 'IP sensitivity', wos: 'High — full ownership and control from day one', bot: 'Lower initially — some IP/process exposure to the operator during build phase', branch: 'N/A (not typically IP-generating)', eor: 'N/A' },
  { factor: 'Sector-specific FDI limits', wos: 'Works cleanly where sector is on the automatic route', bot: 'Same underlying FDI rules apply — structure doesn’t bypass sector caps', branch: 'RBI branch approval has its own sector considerations', eor: 'N/A pre-incorporation' },
  { factor: 'Timeline pressure', wos: 'Moderate — incorporation plus registrations takes real weeks', bot: 'Fastest to first hire, since operator infrastructure exists', branch: 'Slower — RBI approval-driven', eor: 'Fastest of all — days, not weeks' },
  { factor: 'Exit/scale flexibility', wos: 'Full flexibility — parent controls all decisions', bot: 'Constrained until the transfer event completes', branch: 'Limited — narrower scope of activity permitted', eor: 'High short-term flexibility, no long-term commitment' },
]

const femaFilings = [
  {
    title: 'FDI Reporting on Incorporation — Form FC-GPR',
    body: 'When the parent company’s investment comes in and shares are allotted to the foreign parent, the Indian entity is required to report the allotment to RBI through Form FC-GPR, filed through the FIRMS portal within a defined window of the share allotment date. This is the filing that formally records the foreign investment against the company on RBI’s books — miss it, or file it late, and you’re looking at compounding and penalty exposure under FEMA, on top of the administrative headache of a delayed record.',
  },
  {
    title: 'Form FC-TRS on Any Share Transfer',
    body: 'If shares in the GCC are ever transferred between a resident and non-resident (for instance, if the ownership structure changes, additional foreign shareholders come in, or shares move between related entities), that transfer needs to be reported to RBI via Form FC-TRS, again within a defined reporting window from the transfer date. Many first-time GCC founders don’t think about this filing at incorporation because there’s no transfer yet — but it becomes relevant the moment cap table changes happen.',
  },
  {
    title: 'The Annual FLA Return — the Filing Most Foreign-Owned Entities Forget',
    body: 'Every Indian entity with foreign direct investment or overseas direct investment on its books is required to file an Annual Return on Foreign Liabilities and Assets (FLA) with RBI, every year, regardless of whether any transaction happened during that year. This is the filing our regulatory compliance practice sees missed most often — not because it’s complex, but because it’s easy to assume that "no activity this year" means "nothing to file." It doesn’t; the obligation is annual and ongoing for as long as the foreign investment sits on the books.',
  },
]

const complianceCalendar = [
  { when: 'Within days of FDI inflow and share allotment', items: 'File Form FC-GPR with RBI reporting the foreign investment.' },
  { when: 'Within the first month or two', items: 'Complete statutory registrations — GST (if applicable at inception), Professional Tax, Shops & Establishment registration, and Provident Fund/ESI (Employees’ State Insurance) registration once headcount crosses the applicable thresholds.' },
  { when: 'Ongoing, monthly', items: 'GST return filings (if registered), TDS deposits and returns on salary and vendor payments, PF and ESI contributions and returns once those registrations are active, payroll compliance generally.' },
  { when: 'Ongoing, quarterly', items: 'Advance tax payments, TDS return filings, board meeting cadence under the Companies Act.' },
  { when: 'Annually', items: 'The FLA return to RBI (regardless of activity level during the year), statutory audit of financial statements, annual ROC filings, Annual General Meeting, income tax return filing, and Form 3CEB — required for any entity with international related-party transactions, with detailed transfer pricing documentation kicking in once transaction value crosses the applicable threshold.' },
  { when: 'As triggered', items: 'Form FC-TRS on any share transfer between resident and non-resident parties; any additional RBI reporting if the funding structure changes.' },
]

const costCategories = [
  { title: 'Incorporation and legal setup', body: 'Professional fees for entity registration, initial compliance registrations, and legal documentation. A relatively modest, largely one-time cost.' },
  { title: 'Infrastructure and real estate', body: 'Office space, IT infrastructure, and facilities, which vary enormously by city and by whether you take a managed/flexible workspace versus a dedicated built-out facility.' },
  { title: 'Technology', body: 'Hardware, software licensing, connectivity, and security infrastructure appropriate to the function the GCC performs.' },
  { title: 'HR and talent', body: 'By far the largest ongoing cost category for most GCCs, covering compensation, benefits, recruitment, and retention, and highly dependent on function, seniority mix, and city.' },
]

const faqs = [
  { q: 'What is a Global Capability Center (GCC)?', a: 'A GCC is a captive unit that a foreign company sets up in India — legally an Indian entity, typically a Private Limited subsidiary — to deliver services, R&D, or operational capability directly to itself, under its own control and ownership, rather than through a third-party vendor.' },
  { q: 'What’s the difference between a GCC and a BPO?', a: 'A BPO is a third-party vendor relationship serving multiple clients under a service agreement. A GCC is owned and controlled by the foreign parent it serves, exists to deliver capability back to that single parent, and typically carries a much larger headcount ambition and deeper IP/process ownership than a vendor engagement would.' },
  { q: 'Can a foreign company set up a GCC in India directly?', a: 'Yes. Most GCC-relevant activities — IT/ITES, R&D, engineering, shared services — qualify for the FDI automatic route, meaning a foreign company can hold up to 100% ownership of the Indian entity without needing prior government approval, subject to standard post-facto RBI reporting once the entity is incorporated and funded. Certain sectors carry different conditions, so it’s worth confirming your specific activity’s FDI status before assuming automatic-route access.' },
  { q: 'Is a GCC different from a subsidiary?', a: 'Every GCC is legally a subsidiary (or branch, or JV); the "GCC" label describes the purpose and operating model — a captive delivery/capability center for the parent — rather than a distinct legal entity type. What differs from a typical subsidiary is scale of intent, headcount ramp, and how intercompany pricing and governance are structured.' },
  { q: 'Which entity structure is best for a GCC in India?', a: 'For most companies, a Private Limited wholly owned subsidiary is the default and most straightforward structure. Branch office, BOT/JV, and EOR-first each fit specific situations. The right answer depends on headcount plans, IP sensitivity, sector FDI conditions, timeline pressure, and how much control you want from day one — see the decision framework above.' },
  { q: 'What is the FEMA/RBI approval and reporting process for a GCC in India?', a: 'Most GCC-relevant FDI qualifies for the automatic route, so there’s no prior approval step — the obligation is reporting after the fact. Form FC-GPR reports the initial share allotment to RBI, Form FC-TRS reports any subsequent share transfer between resident and non-resident parties, and the Annual FLA Return is a mandatory yearly filing for as long as the entity carries foreign investment on its books.' },
  { q: 'How long does it take to set up a GCC in India?', a: 'Legal entity registration (incorporation through initial FDI reporting) is the faster phase; full operational readiness (infrastructure, hiring, all statutory registrations active) takes meaningfully longer and depends on city, sector, and headcount ambitions.' },
  { q: 'What does it cost to set up a GCC in India?', a: 'Costs break into incorporation/legal setup, infrastructure and real estate, technology, and HR/talent — with HR/talent typically the largest ongoing category by far.' },
  { q: 'Which are the best cities for a GCC in India?', a: 'Bengaluru, Hyderabad, Pune, Chennai, the NCR/Gurgaon region, and Mumbai remain the established hubs, each with different sector strengths, alongside a growing set of Tier-2 cities (Coimbatore, Kochi, Jaipur, Ahmedabad) being evaluated for cost and talent-retention reasons.' },
  { q: 'Is it worth hiring a consulting firm to set up a GCC in India?', a: 'It depends on what kind of firm you mean. A build-operate-transfer or managed-GCC provider is a different commercial relationship than legal/tax/compliance advisory. For most first-time entrants, advisory support on incorporation, FEMA/RBI compliance, and tax structuring is worth engaging, given how unforgiving the FEMA reporting timelines are and how expensive it is to unwind an entity-structure mistake later.' },
  { q: 'Do I need a GIFT City / IFSC entity for my GCC?', a: 'No — GIFT City/IFSC is a distinct structuring option relevant primarily to financial services, fintech, and other IFSC-eligible activities, with its own regulator (IFSCA) and tax treatment. It isn’t the default path for a standard GCC, but it’s worth evaluating early and specifically if your business activity is IFSC-eligible.' },
]

const regionLinks = [
  { label: 'US', href: '/india-entry-for-us-companies' },
  { label: 'UK', href: '/india-entry-for-uk-companies' },
  { label: 'Singapore', href: '/india-entry-for-singapore-companies' },
  { label: 'Australia', href: '/india-entry-for-australian-companies' },
  { label: 'Germany', href: '/india-entry-for-german-companies' },
  { label: 'Japan', href: '/india-entry-for-japan-companies' },
  { label: 'China', href: '/india-entry-for-china-companies' },
]

export default function GCCSetupIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'GCC Setup in India' }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Global Capability Centers</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            GCC Setup in India: A Complete Guide to Entity Structure, Compliance, and Costs
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-gray-600">
            A Global Capability Center (GCC) is one of the more consequential entities a foreign parent company will ever set up in India — not because the incorporation itself is unusually complex, but because of what follows it. A GCC typically grows headcount faster than a standard subsidiary, moves money across borders more frequently through intercompany service charges, and stays under continuous scrutiny from RBI, the tax department, and its own board back home.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This guide walks through the decisions in the order a CFO or corporate-development lead actually has to make them: whether a GCC is the right model at all, which entity structure to use, how incorporation and FDI reporting work, what ongoing FEMA/RBI and tax obligations look like, and what a realistic cost and timeline picture looks like. If you&apos;re still evaluating India broadly rather than a GCC specifically, our <Link href="/doing-business-in-india/entry-process" className="text-gold font-semibold hover:underline">market entry process</Link> guide covers that earlier-stage decision.
          </p>
        </div>
      </section>

      {/* WHAT IS A GCC */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is a GCC (Global Capability Center)?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Global Capability Center is a wholly owned or majority-controlled unit that a foreign company sets up in India to deliver services — engineering, product development, finance and accounting, data analytics, customer operations, R&D — directly to itself, as a captive extension of the parent organization rather than as a vendor relationship. The defining feature is control: the parent designs the operating model, sets the KPIs, and owns the IP and output, even though the entity is legally Indian and the workforce is India-based.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            That single distinction — captive versus vendor — is what separates a GCC from almost every other India-entry structure a foreign company might consider, and it&apos;s worth being precise about it before going further.
          </p>
          <TabbedComparison tabs={gccVsComparisons} />
        </div>
      </section>

      {/* 2026 SNAPSHOT */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The GCC Opportunity in India: 2026 Snapshot</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            India remains the largest GCC destination globally by a wide margin. According to NASSCOM and Zinnov&apos;s &ldquo;GCC Value Orbit: From Delivery Engine to Enterprise Nerve Centre&rdquo; report (July 2026), the country&apos;s GCC base has reached 2,117 centers, generating $98.4 billion in annual revenue and employing roughly 2.36 million professionals. The center of gravity has also shifted: what were once largely IT-services delivery hubs are increasingly R&D, product engineering, and enterprise-function centers with genuine decision-making authority devolved from the parent.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These figures are NASSCOM and Zinnov&apos;s data, not AU Corporate&apos;s — cited here because they set useful context for a company weighing the decision. For the broader case behind India&apos;s growth as a destination, see our guide on <Link href="/doing-business-in-india/why-india" className="text-gold font-semibold hover:underline">why companies are choosing India</Link>.
          </p>
        </div>
      </section>

      {/* IS A GCC RIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Is a GCC the Right Model for Your Company?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Not every company that could benefit from an India presence needs a GCC specifically. A GCC makes the most sense when the work being moved to India is core enough to the business that you want direct control over quality, IP, and talent — not simply the cheapest available delivery. If the work is genuinely commoditized and vendor-interchangeable, a BPO or outsourcing relationship is usually faster to stand up and easier to unwind.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Building the Internal Business Case</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            The internal sign-off conversation for a GCC is rarely just a cost-savings pitch anymore — boards and CFOs increasingly ask for a case built on talent access, operating leverage, and strategic control. Building that case is a strategic and financial exercise your own leadership and finance team are best placed to lead; where AU Corporate&apos;s regulatory compliance and Virtual CFO practices add value is translating the eventual decision into an entity structure and compliance plan that doesn&apos;t box you in later. Our <Link href="/doing-business-in-india/pre-incorporation" className="text-gold font-semibold hover:underline">feasibility and pre-incorporation planning</Link> guide is a useful companion resource at this earlier stage.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Is It Worth Hiring a Consulting Firm to Set Up a GCC in India?</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            This is a fair question, and the honest answer is: it depends on what you&apos;re actually buying. If &ldquo;consulting firm&rdquo; means a build-operate-transfer or managed-GCC provider that will recruit, house, and run your India team for you — that&apos;s a real, sometimes appropriate model, but it&apos;s a fundamentally different commercial relationship than legal/tax/compliance advisory.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If instead you mean advisory support for incorporation, FEMA/RBI compliance, tax structuring, and post-incorporation statutory filings, a firm with genuine depth in Indian regulatory mechanics is worth engaging for most first-time entrants. A company with in-house India expertise may reasonably choose to handle setup internally. What you shouldn&apos;t do is treat &ldquo;hire a consultant&rdquo; and &ldquo;build-operate-transfer vendor&rdquo; as the same decision — they solve different problems.
          </p>
        </div>
      </section>

      {/* ENTITY STRUCTURE */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing Your Entity Structure</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Options</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {entityOptions.map((item) => (
              <Link key={item.title} href="#inquiry-form" className="block bg-white p-6 rounded-xl border hover:shadow-lg hover:border-gold/50 transition">
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </Link>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">A Decision Framework, Not Just a List</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Most guidance on this topic stops at naming the options above. In practice, the right structure depends on a handful of concrete factors specific to your situation:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left text-sm">Factor</th>
                  <th className="border border-gray-300 p-3 text-left text-sm">Favors WOS (Pvt Ltd)</th>
                  <th className="border border-gray-300 p-3 text-left text-sm">Favors BOT/JV</th>
                  <th className="border border-gray-300 p-3 text-left text-sm">Favors Branch Office</th>
                  <th className="border border-gray-300 p-3 text-left text-sm">Favors EOR-First</th>
                </tr>
              </thead>
              <tbody>
                {decisionFramework.map((row) => (
                  <tr key={row.factor}>
                    <td className="border border-gray-300 p-3 font-semibold text-sm">{row.factor}</td>
                    <td className="border border-gray-300 p-3 text-xs text-gray-600">{row.wos}</td>
                    <td className="border border-gray-300 p-3 text-xs text-gray-600">{row.bot}</td>
                    <td className="border border-gray-300 p-3 text-xs text-gray-600">{row.branch}</td>
                    <td className="border border-gray-300 p-3 text-xs text-gray-600">{row.eor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            Sector-specific FDI conditions can change which route is realistically available to you, so treat this table as a starting framework to bring into a conversation with counsel or an advisor, not a final answer.
          </p>
          <p className="text-gray-700 italic">
            If you&apos;d like a compliance calendar and entity recommendation specific to your headcount plan and sector, <Link href="/contact" className="text-gold font-semibold not-italic hover:underline">talk to AU Corporate&apos;s regulatory compliance practice</Link> directly.
          </p>
        </div>
      </section>

      {/* FDI ROUTE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The FDI Route: Automatic vs. Government Approval</h2>
          <p className="text-gray-600 leading-relaxed">
            Most GCC-relevant sectors — IT and ITES, R&D and engineering services, shared services and back-office operations — qualify for the FDI automatic route, meaning 100% foreign ownership is permitted without prior government approval; the only requirement is post-facto reporting to RBI once funds are received and shares are allotted. A smaller set of sectors carry conditions or require government-route approval, and these conditions do shift from time to time, so it&apos;s worth confirming your specific sector&apos;s current status. Our <Link href="/india-business-setup/fdi-channels" className="text-gold font-semibold hover:underline">FDI automatic and government approval routes</Link> guide covers the full mechanics of both routes.
          </p>
        </div>
      </section>

      {/* STEP BY STEP */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Set Up a GCC in India: Step by Step</h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Incorporation Mechanics (SPICe+, MCA)</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Incorporation itself follows the same path as any other Private Limited company in India: name reservation, filing the integrated SPICe+ form with the Ministry of Corporate Affairs, obtaining a Certificate of Incorporation, and opening a bank account to receive the initial FDI inflow (our <Link href="/india-business-setup/banking-taxation" className="text-gold font-semibold hover:underline">banking and tax setup</Link> guide covers this in more detail). Our <Link href="/india-business-setup/company-formation" className="text-gold font-semibold hover:underline">SPICe+ incorporation process</Link> and <Link href="/doing-business-in-india/incorporation" className="text-gold font-semibold hover:underline">company incorporation and legal registration</Link> content covers this mechanically in full; nothing about the SPICe+ process itself differs for a GCC versus any other foreign-owned subsidiary — what differs is what happens immediately after, on the FEMA/RBI reporting side.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Choosing a Location</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            City choice for a GCC is genuinely a separate workstream from the legal and compliance decisions this guide focuses on. At a factual level, the established hubs remain Bengaluru, Hyderabad, Pune, Chennai, the NCR/Gurgaon region, and Mumbai, each with different sector strengths, alongside a growing set of Tier-2 cities (Coimbatore, Kochi, Jaipur, Ahmedabad) being evaluated for cost and talent-retention reasons. We&apos;re covering city comparison at this overview level deliberately; a fuller comparison sits outside AU Corporate&apos;s core advisory lane and is better handled alongside a location-specific real estate or workforce advisor.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">GIFT City / IFSC as a Structuring Option</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            GIFT City (Gujarat International Finance Tec-City), operating under the International Financial Services Centres Authority (IFSCA), is a distinct structuring option worth being aware of, particularly for GCCs in financial services, fintech, or certain other IFSC-eligible activities. IFSCA acts as a unified regulator for IFSC entities, in place of the fragmented RBI/SEBI/IRDAI oversight a standard onshore entity might sit under, and IFSC entities carry a distinct tax and indirect-tax treatment from a standard domestic GCC.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is a genuinely different structuring path, not a variant of the standard route. We&apos;ve kept this section informational rather than walking through GIFT City structuring as something AU Corporate has directly executed — if a GIFT City/IFSC structure looks like a fit for your GCC, it&apos;s worth a direct conversation to confirm current eligibility and the specific regulatory framework that would apply.
          </p>
        </div>
      </section>

      {/* FEMA & RBI COMPLIANCE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">FEMA & RBI Compliance for a GCC</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            This is where most competitor guides on this topic stop at naming FEMA (the Foreign Exchange Management Act, 1999) and RBI as the governing framework, without walking through what actually gets filed and when. For a GCC receiving foreign investment — which is every GCC, by definition — three filings matter most.
          </p>
          <div className="space-y-6 mb-8">
            {femaFilings.map((item) => (
              <Link key={item.title} href="#inquiry-form" className="block p-6 border border-gray-200 rounded-lg bg-secondary/30 hover:shadow-lg hover:border-gold/50 transition">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Because these three filings — FC-GPR, FC-TRS, and the annual FLA return — are the ones we consistently see foreign-owned entities in India get wrong or miss, they&apos;re also the anchor of the compliance calendar below. See our broader <Link href="/india-business-setup/regulatory-compliance" className="text-gold font-semibold hover:underline">regulatory compliance requirements</Link> and <Link href="/doing-business-in-india/post-incorporation" className="text-gold font-semibold hover:underline">post-incorporation compliance obligations</Link> guides for the fuller picture beyond FEMA/RBI specifically.
          </p>
        </div>
      </section>

      {/* TAX & TRANSFER PRICING */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax and Transfer Pricing for a GCC</h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Tax and GST Registration for a Standard GCC Entity</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            A standard, non-IFSC GCC entity is taxed as any other Indian Private Limited company — most GCCs incorporated as new entities opt into the concessional corporate tax regime available to domestic companies, which brings the effective tax rate down from the standard rate, subject to giving up certain exemptions and deductions. On GST, a pure exporter of services — the standard GCC fact pattern, billing only its foreign parent — is not compulsorily registered simply because it invoices a foreign entity; the ordinary Rs 20 lakh aggregate turnover threshold applies the same way it would for any other services business. What&apos;s different in practice is that many GCCs choose to register voluntarily, even before crossing that threshold, so they can file a Letter of Undertaking (LUT) and invoice the parent as a zero-rated export without charging IGST — that&apos;s a deliberate commercial choice, not a legal registration mandate triggered by the intercompany billing itself.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe Harbour Rules and the 2026 Margin Change</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Because a GCC is, by definition, providing services to its own parent rather than to unrelated third parties, the pricing of that intercompany service — and whether tax authorities accept it as arm&apos;s-length — is a first-order tax consideration, not a footnote. India&apos;s safe harbour rules give eligible captive service providers, including many GCCs, a way to have their transfer pricing accepted without a full transfer-pricing audit, provided the entity&apos;s margin on qualifying transactions meets a specified threshold. Rather than re-deriving the mechanics and figures here, see our dedicated coverage of <Link href="/blog/india-safe-harbour-rules-2026" className="text-gold font-semibold hover:underline">India&apos;s 2026 Safe Harbour Rules</Link> for the full detail on eligibility, margin thresholds, and what they mean for a GCC or subsidiary specifically.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">A Worked Example — Intercompany Pricing for a Captive Service Center</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            To make the safe harbour concept concrete: imagine a foreign parent&apos;s India GCC operates as a captive software-engineering center, incurring INR 40 crore in total annual operating costs (salaries, infrastructure, overheads) to deliver services exclusively to the parent. Under a cost-plus intercompany pricing arrangement, the GCC would invoice the parent for its costs plus an agreed markup — the margin needs to be set such that the GCC&apos;s reported operating margin on that cost base falls within the range tax authorities will accept without triggering a detailed transfer-pricing scrutiny. If the applicable safe harbour margin threshold were, illustratively, in the mid-teens percentage range, the GCC&apos;s invoiced revenue to the parent — and correspondingly its taxable profit in India — would be calculated to land at or above that margin on the INR 40 crore cost base.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            This example is illustrative only, meant to show how the pieces connect rather than to state the current applicable percentage — the actual threshold is covered in the safe harbour guide linked above and should be confirmed against the current notification before being applied to a real intercompany pricing decision. Getting this calculation right, and documenting it properly, is exactly the kind of work our transfer pricing and international tax practice handles.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">DTAA Relief on Cross-Charges to the Parent</h3>
          <p className="text-gray-600 leading-relaxed">
            Where a GCC makes payments to its parent (management fees, royalties for shared IP or software, reimbursements) or the parent receives dividend or service income from the GCC, the applicable Double Taxation Avoidance Agreement between India and the parent&apos;s home jurisdiction can reduce withholding tax rates, provided substance and documentation requirements are met. Rates vary by treaty partner, so see our region-specific guides — for example, <Link href="/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax" className="text-gold font-semibold hover:underline">India-UK DTAA withholding rates</Link> — and our note on <Link href="/blog/mail-box-dtaa-benefits" className="text-gold font-semibold hover:underline">treaty-benefit substance requirements</Link>.
          </p>
        </div>
      </section>

      {/* COMPLIANCE CALENDAR */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The GCC Compliance Calendar: What Happens After Incorporation</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Nearly every competitor guide on this topic treats compliance as something that happens once, at setup. In practice, a GCC&apos;s compliance obligations are a running calendar for the life of the entity, and the volume of it tends to surprise first-time founders more than any individual filing&apos;s complexity does. A representative first-year calendar for a newly incorporated GCC looks roughly like this:
          </p>
          <div className="space-y-3 mb-8">
            {complianceCalendar.map((row) => (
              <Link key={row.when} href="#inquiry-form" className="flex flex-col sm:flex-row gap-2 sm:gap-6 p-4 border rounded-lg hover:shadow-md hover:border-gold/50 transition">
                <div className="font-bold text-gold min-w-[220px] text-sm">{row.when}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{row.items}</div>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            This calendar is deliberately the GCC-relevant version — a larger, faster headcount ramp than a typical subsidiary, and the transfer-pricing/safe-harbour dimension layered on top of the standard filings — rather than the general case, which our <Link href="/doing-business-in-india/post-incorporation" className="text-gold font-semibold hover:underline">post-incorporation compliance obligations</Link> guide covers for any foreign-owned Indian entity. Payroll-specific compliance is covered in more depth in our <Link href="/hr-services" className="text-gold font-semibold hover:underline">payroll and HR compliance</Link> resources, and ongoing statutory audit and assurance work is covered under <Link href="/services/accounting-assurance" className="text-gold font-semibold hover:underline">statutory audit and assurance</Link>.
          </p>
          <p className="text-gray-700 italic">
            Most of the missed-deadline problems we see aren&apos;t from any single filing being hard — they&apos;re from nobody owning the calendar as a whole once the excitement of incorporation wears off. If it would help to have a compliance calendar built out against your specific entity structure and headcount plan, <Link href="/contact" className="text-gold font-semibold not-italic hover:underline">that&apos;s a conversation worth having with our regulatory compliance practice</Link>.
          </p>
        </div>
      </section>

      {/* COST OVERVIEW */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Does a GCC Cost in India? (Overview)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A realistic GCC cost picture breaks into a small number of named categories rather than one lump &ldquo;cost to set up a GCC&rdquo; figure, which is where a lot of thin content on this topic stops short:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {costCategories.map((item) => (
              <Link key={item.title} href="#inquiry-form" className="block bg-white p-5 rounded-lg border hover:shadow-lg hover:border-gold/50 transition">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Each of these categories deserves its own detailed treatment against a specific headcount and city plan rather than a generic total figure, which is why we&apos;re keeping this section at overview depth here and are building out a dedicated cost guide with full category-by-category numbers and a worked total-cost example.
          </p>
        </div>
      </section>

      {/* TIMELINE OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Long Does It Take to Set Up a GCC in India? (Overview)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Timeline is best understood in two distinct phases, which is a distinction a lot of &ldquo;a few months&rdquo; competitor claims gloss over.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Link href="#inquiry-form" className="block p-5 border rounded-lg bg-secondary/30 hover:shadow-lg hover:border-gold/50 transition">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Legal entity registration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">From name reservation through incorporation, initial FDI inflow, and FC-GPR filing — the faster phase, largely a function of document readiness and how quickly the parent can complete its own KYC and remittance steps.</p>
            </Link>
            <Link href="#inquiry-form" className="block p-5 border rounded-lg bg-secondary/30 hover:shadow-lg hover:border-gold/50 transition">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Full operational readiness</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Office fit-out, IT and security infrastructure, initial hiring, statutory registrations completing — takes considerably longer and depends heavily on city, function, and headcount ramp ambitions.</p>
            </Link>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We&apos;re deliberately not putting a single number on either phase here, since realistic ranges depend on specifics that vary too much to generalize responsibly — a dedicated timeline guide with phase-by-phase ranges is planned as a follow-up resource. In the meantime, our <Link href="/india-business-setup/timeline-resources" className="text-gold font-semibold hover:underline">general incorporation timeline and budgeting</Link> guide covers the non-GCC-specific baseline these phases build on.
          </p>
        </div>
      </section>

      {/* BUILDING & OPERATING */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Building and Operating Your GCC Team</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Getting the legal entity and compliance mechanics right is necessary but not sufficient — the GCCs that succeed operationally, per NASSCOM&apos;s own research on the topic, tend to share a few characteristics beyond compliance: clear governance linking the India team to the parent&apos;s global functions, KPIs that reflect genuine ownership rather than vendor-style output metrics, and a deliberate talent strategy rather than opportunistic hiring.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Once the entity is operational, the recurring operational needs are largely finance and HR: bookkeeping, MIS reporting to the parent, payroll processing, and statutory HR compliance as headcount grows. This is the &ldquo;Operate&rdquo; phase our <Link href="/outsourcing" className="text-gold font-semibold hover:underline">accounting outsourcing and Virtual CFO support</Link> and <Link href="/hr-services" className="text-gold font-semibold hover:underline">payroll and HR compliance</Link> practices are built around — keeping the finance and compliance backbone reliable as the India team scales, so your local leadership can focus on the actual capability the center exists to deliver.
          </p>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="inquiry-form" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm title="Planning a GCC in India?" description="Tell us about your entity structure and headcount plans, and our regulatory compliance team will get in touch." />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />

      {/* CLOSING CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Talk to AU Corporate&apos;s Regulatory Compliance Practice</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            If you&apos;re planning a GCC in India — whether you&apos;re still building the internal business case or already have a launch date in mind — AU Corporate&apos;s regulatory compliance, transfer pricing, and outsourcing/Virtual CFO practices can walk through entity structure, FEMA/RBI filing obligations, and the compliance calendar specific to your headcount and sector.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 mb-12">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { label: 'Transfer pricing and tax advisory', href: '/services/taxation-regulatory' },
              { label: 'Statutory audit and assurance', href: '/services/accounting-assurance' },
              { label: 'Accounting outsourcing and Virtual CFO support', href: '/outsourcing' },
              { label: 'Payroll and HR compliance', href: '/hr-services' },
              { label: 'Regulatory compliance requirements', href: '/india-business-setup/regulatory-compliance' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 p-4 border rounded-lg hover:shadow-md transition text-sm font-medium text-gray-700 hover:text-gold">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">If your parent company is based in one of these regions, see our region-specific India entry guide:</h3>
            <div className="flex flex-wrap gap-3">
              {regionLinks.map((r) => (
                <Link key={r.href} href={r.href} className="text-sm text-gold hover:underline font-semibold">
                  {r.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
