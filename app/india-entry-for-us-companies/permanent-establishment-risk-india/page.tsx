import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { LeadForm } from '@/components/LeadForm'
import { Scale, Clock, Building2, AlertTriangle } from 'lucide-react'

const quickFacts = [
  { icon: Scale, value: '4 PE Types', label: 'Fixed Place, Service, Dependent Agent, Construction' },
  { icon: Clock, value: '90-Day Threshold', label: 'Service PE Under the India-US DTAA' },
  { icon: AlertTriangle, value: 'No Minimum Days', label: 'Service PE for an Associated Enterprise' },
  { icon: Building2, value: '120-Day Threshold', label: 'Construction PE Under the India-US DTAA' },
]

const faqs = [
  {
    q: 'Does hiring in India create a permanent establishment?',
    a: "Not automatically. It depends on whether the person has habitual authority to negotiate or conclude contracts on the US company's behalf — the Dependent Agent PE test. An employee handling purely technical or internal work, with no contract-negotiation authority, sits differently under this test than one effectively running India sales. See the hiring and consulting section above for the fuller analysis, including how the test differs for independent consultants.",
  },
  {
    q: 'Does an Indian subsidiary create PE for its US parent company?',
    a: 'No, not by default. Under the "virtual projection" standard from ADIT v. E-Funds IT Solution Inc. (Supreme Court), mere incorporation and access to the subsidiary\'s premises is insufficient — the parent needs effective, sustained operational control over the subsidiary\'s business for a PE finding to follow. A subsidiary gives you the structure to make a "no PE" position defensible; it doesn\'t make that position automatic.',
  },
  {
    q: 'Does using an Employer of Record (EOR) eliminate PE risk in India?',
    a: "It reduces certain exposure but doesn't eliminate it. An EOR resolves whether an individual is legally and properly engaged in India, but PE exposure turns on conduct and control — who negotiates contracts, who directs day-to-day work — not on which employment vehicle someone sits under. See the EOR section above for the specific conduct that creates residual exposure even inside an EOR arrangement.",
  },
  {
    q: 'How many days can a US employee work or travel in India before triggering a Service PE?',
    a: "Under the India-US DTAA, the Service PE threshold is 90 days in any 12-month period — but that threshold only applies to services furnished to an unrelated party. Where the services are furnished to an associated enterprise, such as a US parent servicing its own Indian subsidiary, there's no minimum-day safe harbor at all: even a single day of qualifying service activity can create Service PE exposure.",
  },
  {
    q: 'What is a Dependent Agent Permanent Establishment (DAPE)?',
    a: 'An activity-based PE category, not a time-based one. It arises where a person in India — employee, consultant, or agent — habitually negotiates or concludes contracts on the US company\'s behalf, or habitually secures orders wholly or mainly for it, without being genuinely independent. See the four-way typology above for the full test and its grounding case law.',
  },
  {
    q: 'Does a liaison office count as a permanent establishment in India?',
    a: 'RBI approval to operate a liaison office does not itself prevent a PE finding. A liaison office is restricted to non-commercial activity — market research and coordination — and if its actual activity drifts into something that functions as commercial activity, it can support a PE finding on the same basis as any other location or arrangement.',
  },
  {
    q: 'What activities are "preparatory or auxiliary" and excluded from PE?',
    a: "Activities that support the main business without being a core part of it — a representative scouting suppliers rather than negotiating final terms, a server used for data storage rather than running revenue-generating operations. The distinction is functional: what the activity actually does for the business, not what it's labeled.",
  },
  {
    q: 'What happens if a US company is found to have a PE in India?',
    a: "Profits attributable to the PE are taxed at the higher foreign-company corporate rate plus applicable surcharge and cess, rather than the lower domestic concessional rates (22%/25%/30%/15%) a properly incorporated subsidiary can elect into. It also triggers a compliance cascade — PAN, TAN, ITR-6 filing, and arm's-length documentation supporting the profit attributed to the PE — along with penalty exposure under Section 270A of the Income-tax Act, 1961 (Section 439 under the Income-tax Act, 2025) for related non-compliance.",
  },
  {
    q: "Does incorporating an Indian subsidiary eliminate the US parent's own PE risk?",
    a: "No. A subsidiary structures a documented, defensible tax position for the subsidiary itself, but it doesn't automatically wall off the US parent's own separate, conduct-based PE exposure — if the parent's own staff or agents continue operating in India independent of the subsidiary, that exposure can survive incorporation. See the decision-path section above.",
  },
]

export default function PermanentEstablishmentRiskPage() {
  return (
    <RegionClusterTemplate
      title="Permanent Establishment Risk in India for US Companies"
      subtitle="The four ways a US company triggers PE in India, the current case law, and whether a subsidiary or an EOR actually removes the exposure."
      region="US"
      breadcrumbItems={[
              { label: "Doing Business in India", href: "/doing-business-in-india" },
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "Permanent Establishment Risk in India" },
            ]}
    >

      <div className="mb-12">
        <p className="mb-4 text-sm text-gray-500">
          Last updated: 29 September 2026 — prepared by AU Corporate&apos;s taxation and regulatory compliance practice.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          A US company doesn&apos;t need an Indian entity to owe Indian tax. Permanent establishment (PE) risk is a function of what your people and contracts actually do in India — not whether you&apos;ve filed a Certificate of Incorporation. It can exist before you&apos;ve registered anything, and, in a different form, it can survive after you have.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          That distinction is the reason this page exists separately from our guide to{' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance for US companies after incorporation
          </Link>
          : FEMA compliance is what happens once you have a subsidiary. PE risk is a question you&apos;re exposed to whether or not you ever incorporate one, and it doesn&apos;t go away just because you eventually do.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          It also has real consequences on your side of the border. A PE finding in India changes what your US tax team has to reconcile — profit attribution feeds into the same intercompany figures that show up on Schedule M of Form 5471 for a subsidiary structure, or directly onto Form 1120 via Form 8858 for a branch. Our team includes CA and US CPA-qualified professionals for exactly this reason: an India PE question is rarely just an India question by the time it&apos;s resolved.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickFacts.map((stat) => (
            <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm cursor-pointer">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
              <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </ClickableReveal>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Is Permanent Establishment, and Why India Asserts It Aggressively</h2>
        <p className="text-gray-700 mb-4">
          Permanent establishment is a treaty concept. Under Article 5 of the{' '}
          <a href="https://www.irs.gov/pub/irs-trty/india.pdf" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            India-US Double Taxation Avoidance Agreement
          </a>
          , a US company only becomes taxable in India on business profits if it has a PE there — a fixed place of business, a dependent agent, or activity crossing a specific duration threshold, depending on the type. Without a PE, India generally can&apos;t tax your business profits even if you&apos;re earning revenue from Indian customers.
        </p>
        <p className="text-gray-700 mb-4">
          India&apos;s own domestic law runs a parallel, broader test. Section 9 of the Income-tax Act, 2025 — the current Act, effective from the 2026-27 assessment year and the direct successor to the identically structured &quot;business connection&quot; provision in the 1961 Act — deems income accruing through a business connection in India to be taxable, whether or not a treaty PE exists. A dependent agent taking orders on your behalf, or a codified &quot;Significant Economic Presence&quot; under Section 9(9) covering systematic or continuous transactional engagement with Indian customers, can trigger this test on its own.
        </p>
        <p className="text-gray-700">
          The treaty protection is generally narrower and more favorable to you than the domestic test — but it isn&apos;t automatic. It has to be actively claimed and supported with a documented position, not assumed because a treaty exists. A US company that never checks its position against Article 5 and simply hopes the domestic business-connection test doesn&apos;t apply is taking on more exposure than it needs to.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Four Ways a US Company Can Trigger PE in India</h2>
        <p className="text-gray-700 mb-6">
          Indian tax authorities and tribunals organize PE exposure into four recognized categories. Each has a different trigger, and each calls for a different way to avoid or mitigate it.
        </p>

        <h3 className="text-xl font-bold mb-3">Fixed Place PE</h3>
        <p className="text-gray-700 mb-4">
          A fixed place PE exists where a US company has a physical location in India — an office, a warehouse, a dedicated workspace — through which its business is wholly or partly carried on. The Supreme Court&apos;s decision in <em>Formula One World Championship Ltd. v. CIT</em> (2017) is the leading authority on what actually counts: the Court applied a test of stability, productivity, and dependence, asking whether the location was genuinely at the foreign enterprise&apos;s disposal and used for its business, not merely accessible to it. This ruling arose under the India-UK treaty, not the India-US treaty, so the specific treaty language differs — but its reasoning on the disposal/stability test has been applied by Indian courts and tribunals across other treaties, India-US included, which is why it remains the standard reference point here. A short-term coworking desk used occasionally is a different fact pattern from a leased, dedicated office your India team occupies indefinitely.
        </p>
        <p className="text-gray-700 mb-8">
          Practical mitigation is mostly a workspace decision: short-term, non-exclusive arrangements rather than a standing leased office reduce the &quot;at your disposal&quot; element the Formula One test turns on.
        </p>

        <h3 className="text-xl font-bold mb-3">Service PE — The 90-Day Threshold</h3>
        <p className="text-gray-700 mb-4">
          A Service PE arises when a US company furnishes services in India through employees or other personnel, and that presence exceeds the treaty&apos;s duration threshold. Under the India-US DTAA, that threshold is <strong>90 days in any 12-month period</strong> — a figure we also cite for comparison against the more generous 183-day threshold under the India-Australia treaty on our{' '}
          <Link href="/india-entry-for-australian-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Australian entry guide
          </Link>
          , since it&apos;s a treaty-specific number that varies by country and worth getting right rather than assuming.
        </p>
        <p className="text-gray-700 mb-4">
          Where the services are furnished to an associated enterprise (a related party — a US parent servicing its own Indian subsidiary, for instance), the 90-day threshold doesn&apos;t apply at all: the India-US DTAA sets no minimum-day safe harbor for related-party services, meaning even a single day of qualifying service activity can create Service PE exposure. The logic isn&apos;t arbitrary: services rendered to a related party are treated as inherently more likely to reflect sustained operational integration between the two entities, rather than a one-off, arm&apos;s-length engagement — the same reasoning that makes tax authorities look harder at related-party dealings generally, transfer pricing included. In practice, this makes the related-party fact pattern the higher-risk one of the two, not the lower-risk one the 90-day headline threshold might suggest.
        </p>
        <p className="text-gray-700 mb-8">
          <em>Morgan Stanley &amp; Co.</em> (Supreme Court, 2007) is the leading case distinguishing genuine service activity from stewardship activity — oversight functions a parent performs to protect its own investment, rather than to deliver a service, don&apos;t count toward the Service PE threshold in the same way.
        </p>

        <h3 className="text-xl font-bold mb-3">Dependent Agent PE (DAPE)</h3>
        <p className="text-gray-700 mb-4">
          Unlike Fixed Place and Service PE, a Dependent Agent PE is activity-based, not time-based. It arises where a person in India — an employee, a consultant, an agent — habitually negotiates or concludes contracts on the US company&apos;s behalf, or habitually secures orders wholly or mainly for it, without being genuinely independent.
        </p>
        <p className="text-gray-700 mb-8">
          The controlling standard is the &quot;virtual projection&quot; test from <em>ADIT v. E-Funds IT Solution Inc.</em> (Supreme Court) — the same precedent that underpins the subsidiary-specific question below. The test asks whether the Indian person or entity has become, in substance, an extension of the US company&apos;s own business operations, exercising real authority on its behalf, rather than acting as a genuinely separate party that happens to transact with it.
        </p>

        <h3 className="text-xl font-bold mb-3">Construction PE</h3>
        <p className="text-gray-700 mb-8">
          A building site, or a construction, assembly, or installation project, becomes a PE once it exceeds the treaty&apos;s duration threshold — <strong>120 days in any 12-month period</strong> under the India-US DTAA. This is the least relevant of the four categories for most of our US clients, who are typically software, services, or GCC operations rather than construction contractors, so we cover it here for completeness rather than depth.
        </p>

        <h3 className="text-xl font-bold mb-3">&quot;Preparatory or Auxiliary&quot; Activities — What&apos;s Excluded</h3>
        <p className="text-gray-700">
          Not every India-facing activity counts toward PE, even where it happens through a fixed location or personnel. Activities that are genuinely preparatory or auxiliary to the main business — rather than a core part of it — are excluded under Article 5&apos;s standard carve-outs. The distinction is functional, not formal: a representative in India scouting potential suppliers is preparatory; the same representative negotiating final purchase terms is not. A server used purely for data storage or display is auxiliary; the same server running revenue-generating transactions is not. The label a company puts on the activity doesn&apos;t control — what the activity actually does for the business does.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Does an Indian Subsidiary Create PE for Its US Parent?</h2>
        <p className="text-gray-700 mb-4">
          This is the single most load-bearing question on this topic, and the most commonly misunderstood. The answer is no — not automatically.
        </p>
        <p className="text-gray-700 mb-4">
          Incorporating a wholly owned Indian subsidiary and having access to its premises does not, by itself, create a PE for the US parent. The controlling standard again comes from <em>ADIT v. E-Funds IT Solution Inc.</em>: mere availability of premises, or the fact that a subsidiary exists and is owned by the US company, is insufficient. What matters is whether the US parent exercises effective, sustained operational control over the subsidiary&apos;s activities — to the point that the subsidiary functions as a &quot;virtual projection&quot; of the parent&apos;s own business, rather than as a genuinely separate operating entity conducting its own business and dealing with its parent at arm&apos;s length.
        </p>
        <p className="text-gray-700 mb-4">
          This is a real, fact-specific line, not a formality to note and move past. Consider how little room there is on the Service PE side even inside a properly structured subsidiary relationship: a US company sends a three-person team to Bangalore for two weeks to support its Indian subsidiary&apos;s operations. Because the Indian subsidiary is an associated enterprise, that visit is already sufficient to create Service PE exposure, since there&apos;s no minimum-day threshold at all for services furnished to a related enterprise — unlike the 90-day safe harbor that applies to unrelated-party services, a single day of qualifying activity here is enough to count. A subsidiary structure gives you the framework to manage this properly — documented intercompany agreements, arm&apos;s-length service pricing, a clear line between the subsidiary&apos;s own management and the parent&apos;s oversight — but it doesn&apos;t make the underlying conduct-based analysis go away.
        </p>
        <p className="text-gray-700">
          The practical takeaway: incorporating a subsidiary is what makes a defensible &quot;no PE for the parent&quot; position achievable, through proper transfer-pricing documentation and a genuine operational separation — it is not, on its own, what makes that position true.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Does Hiring or Engaging a Consultant in India Create PE?</h2>
        <p className="text-gray-700 mb-4">
          This depends on who you&apos;re engaging and how, and it&apos;s worth treating as two separate legal questions rather than one general &quot;hiring creates PE&quot; rule of thumb.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>An employee</strong> is assessed under the Dependent Agent PE test described above: does this person have habitual authority to negotiate or conclude contracts on the US company&apos;s behalf, or to habitually secure orders for it? An employee whose role is purely technical delivery, internal support, or research — with no contract or deal-negotiation authority — sits differently under this test than an employee effectively running India sales.
        </p>
        <p className="text-gray-700">
          <strong>An independent consultant</strong> is assessed against an additional layer: whether the consultant is genuinely legally and economically independent of the US company, not merely structured on paper as a separate engagement while functioning, in substance, as an extension of the company&apos;s own sales or operations function. A consultant who works exclusively for one US company, takes day-to-day direction indistinguishable from an employee&apos;s, and negotiates deals on that company&apos;s behalf looks much more like a dependent agent than an independent contractor, regardless of what the engagement letter calls the relationship. Genuine independence — multiple clients, autonomy over how the work gets done, no habitual contract-negotiation authority for your business specifically — is what actually supports a &quot;not a dependent agent&quot; position, not the label on the contract.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Does Using an Employer of Record (EOR) Eliminate PE Risk in India?</h2>
        <p className="text-gray-700 mb-4">
          The precise legal point is this: PE exposure is a function of conduct and control — who negotiates and concludes contracts, who directs day-to-day work, whether the activity in India is habitual rather than merely preparatory or auxiliary. It is not a function of which employment vehicle the person in India sits under.
        </p>
        <p className="text-gray-700 mb-4">
          An EOR is one legitimate, lawful route to put people on the ground in India without incorporating an entity yourself, and it genuinely reduces one specific category of exposure: it resolves the question of whether the individual is even legally and properly engaged in India at all — payroll, statutory benefits, local labor-law compliance run through the EOR&apos;s own Indian entity rather than through an unregistered arrangement. That&apos;s a real risk it takes off the table.
        </p>
        <p className="text-gray-700 mb-4">
          What it does not do, by itself, is wall off dependent-agent or fixed-place exposure if the underlying conduct on the ground still looks like the US company operating directly in India. The employment vehicle is a payroll and compliance layer; it doesn&apos;t change who is actually negotiating deals, directing daily work, or exercising decision-making authority in India. If an EOR-employed person in India habitually negotiates contract terms with Indian customers, or a US manager is directing that person&apos;s day-to-day work as if they were a direct-report employee of the US company rather than of the EOR, that conduct can still support a Dependent Agent PE finding — the EOR arrangement sitting underneath it doesn&apos;t change the substance of what&apos;s happening.
        </p>
        <p className="text-gray-700 mb-2">The residual exposure worth naming specifically:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Habitual involvement in negotiating deal terms or pricing with Indian customers, by an EOR-employed individual</li>
          <li>De facto day-to-day operational control exercised by the US company over the EOR-employed staff&apos;s work — instructions, performance management, and reporting lines that function identically to a direct employment relationship</li>
          <li>Local decision-making authority — where pricing, contract terms, or deal approval genuinely happen in India rather than being set and approved from the US</li>
        </ul>
        <p className="text-gray-700">
          What supports a defensible &quot;no PE&quot; position under an EOR arrangement, if it&apos;s ever examined, is largely a documentation and operating-practice question: where contract-signing authority formally sits and is exercised, how instructions to India-based staff are issued and from where, and whether pricing and deal terms are genuinely set and approved in the US rather than locally. These are the same practical questions worth answering whether the India-based person is engaged through an EOR, a contractor, or your own subsidiary — the vehicle changes the payroll and compliance mechanics, not the underlying PE analysis.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Happens If a US Company Is Found to Have a PE in India</h2>
        <p className="text-gray-700 mb-4">
          A PE finding changes how your India-attributable profits are taxed, and it triggers a compliance cascade that doesn&apos;t exist if you have no Indian tax presence at all.
        </p>
        <p className="text-gray-700 mb-4">
          On the rate itself: profits attributable to a PE are taxed as a foreign company, at the higher non-domestic corporate tax rate applicable to foreign companies, plus applicable surcharge and cess. That&apos;s a structurally worse position than the{' '}
          <Link href="/services/taxation-regulatory" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            domestic concessional corporate tax rates
          </Link>{' '}
          a properly incorporated Indian subsidiary can elect into — 22% concessional, 25% or 30% standard depending on turnover, or 15% for qualifying new manufacturing companies. The exact effective foreign-company PE rate depends on the applicable Finance Act rate schedule for the assessment year in question and isn&apos;t stated here as a specific figure pending final confirmation against that primary source — but the mechanism itself is the point worth understanding: a PE finding puts you on the higher, less favorable side of that rate structure instead of the lower rate a subsidiary can access.
        </p>
        <p className="text-gray-700 mb-4">
          Beyond the rate, a PE finding brings its own compliance obligations that a company with no Indian presence never had to think about: obtaining a PAN and TAN, filing an ITR-6 corporate return, and maintaining arm&apos;s-length transfer-pricing documentation to support how much profit is actually attributable to the PE — the same underlying discipline our{' '}
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            transfer pricing &amp; Section 482 guide
          </Link>{' '}
          covers for an incorporated subsidiary&apos;s intercompany dealings, applied here to profit attribution rather than intercompany pricing. Non-compliance around a PE finding also carries penalty exposure under Section 270A of the Income-tax Act, 1961 (renumbered as Section 439 under the Income-tax Act, 2025) — the under-reporting and misreporting of income provision — stated here as a mechanism rather than a specific penalty percentage or multiple.
        </p>
        <p className="text-gray-700">
          None of this is retroactively avoidable once a PE position is asserted — it&apos;s a downstream consequence of the underlying conduct, which is why the typology, case law, and EOR analysis above are worth getting right ahead of time rather than after an assessment starts.
        </p>
      </div>

      <div className="mb-12">
        <LeadForm
          title="Not Sure Whether Your India Activity Creates PE Exposure?"
          description="Tell us about your India activity — contractors, an EOR arrangement, or an existing subsidiary — and our tax team will assess your exposure and walk through next steps."
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recent Case Law: What Tribunals Are Actually Deciding</h2>
        <p className="text-gray-700 mb-6">
          Organized by the PE type each case actually defines, rather than by date, since that&apos;s the more useful reference when you&apos;re trying to match a fact pattern to the relevant precedent:
        </p>

        <h3 className="text-lg font-bold mb-3">Fixed Place PE</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
          <li>
            <em>Formula One World Championship Ltd. v. CIT</em> (Supreme Court, 2017) — established the stability, productivity, and dependence test for whether a location is genuinely at a foreign enterprise&apos;s disposal. This ruling arose under the India-UK treaty, not the India-US treaty, so the specific treaty language differs — but its reasoning on the disposal/stability test has been applied by Indian courts and tribunals across other treaties, India-US included.
          </li>
          <li>
            <em>CIT v. Clifford Chance Pte Ltd.</em> (Delhi High Court, reported December 2025) — reaffirmed a physical-presence requirement for PE findings, rejecting an assertion of a &quot;virtual&quot; Service PE. This ruling arose under the India-Singapore treaty, not the India-US treaty, so the specific treaty language differs — but its reasoning on physical presence as a genuine requirement, rather than something that can be asserted without it, is directly relevant to how Indian courts are currently approaching PE questions generally.
          </li>
        </ul>

        <h3 className="text-lg font-bold mb-3">Service PE</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
          <li>
            <em>Morgan Stanley &amp; Co.</em> (Supreme Court, 2007) — the leading authority distinguishing stewardship activities (a parent overseeing its own investment) from genuine service delivery that counts toward a Service PE.
          </li>
        </ul>

        <h3 className="text-lg font-bold mb-3">Dependent Agent PE / Subsidiary-as-PE</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
          <li>
            <em>ADIT v. E-Funds IT Solution Inc.</em> (Supreme Court) — the &quot;virtual projection&quot; standard governing when a subsidiary or agent&apos;s conduct becomes attributable to the foreign parent as its own PE. This is the direct precedent behind the subsidiary question addressed above.
          </li>
        </ul>

        <h3 className="text-lg font-bold mb-3">Recent Live Example</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            An Income Tax Appellate Tribunal ruling on <em>Booking.com</em> (reported February 2026) set aside a large PE-based tax demand against the company. We&apos;re citing this as a current illustration of how contested and fact-specific PE findings actually are in practice — tax authorities don&apos;t always prevail.
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">A Liaison Office Is Still Subject to PE Rules</h2>
        <p className="text-gray-700">
          A liaison office is the lightest-touch registered India presence available — RBI-approval-gated, restricted to non-commercial activities like market research and coordination between the parent and Indian contacts, with no revenue-generating activity permitted. RBI approval to operate one is not, on its own, protection against a PE finding. If a liaison office&apos;s actual activity drifts beyond genuine market research and coordination into something that functions as commercial activity — negotiating terms, servicing customers, directing sales — it can support a PE finding on the same fixed-place or dependent-agent basis as any other location or arrangement, regardless of the RBI approval it operates under. For the ongoing RBI filing mechanics once you&apos;ve moved past a liaison office into an incorporated subsidiary, see our{' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance for US companies after incorporation
          </Link>{' '}
          guide.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Decision Path — Before, During, and After Incorporation</h2>

        <h3 className="text-xl font-bold mb-3">No Entity Yet — Contractor or EOR-Only Activity</h3>
        <p className="text-gray-700 mb-6">
          Exposure exists here even with zero registered Indian presence. This is exactly the ground covered above: a contractor or EOR-employed individual habitually negotiating deals, or a US team accumulating person-days in India that cross the Service PE threshold, can create exposure whether or not you&apos;ve filed a single incorporation document. &quot;We haven&apos;t set up an entity yet&quot; is not the same as &quot;we have no Indian tax exposure yet.&quot;
        </p>

        <h3 className="text-xl font-bold mb-3">Deciding Whether to Incorporate</h3>
        <p className="text-gray-700 mb-6">
          Whether and when to actually incorporate is a broader commercial and timing decision than this page covers — signed customers needing India-side invoicing, hiring needs beyond what an EOR can support, and India&apos;s fiscal year-end all factor in. We&apos;ve built{' '}
          <Link href="/doing-business-in-india/incorporation#pe-risk" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            our decision checklist for whether and when to incorporate
          </Link>{' '}
          specifically for that question; it&apos;s worth reading alongside this page rather than duplicated here.
        </p>

        <h3 className="text-xl font-bold mb-3">What Changes Once You Incorporate</h3>
        <p className="text-gray-700 mb-6">
          A subsidiary gives you a properly structured, documented Indian taxpayer, with the transfer-pricing support that makes a &quot;no PE for the parent&quot; position actually defensible — the framework described in the subsidiary/E-Funds section above. See our{' '}
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            subsidiary vs. branch office comparison
          </Link>{' '}
          if you haven&apos;t yet settled on which structure fits.
        </p>

        <h3 className="text-xl font-bold mb-3">What Does NOT Change — Residual PE Exposure Survives Incorporation</h3>
        <p className="text-gray-700">
          Incorporating a subsidiary does not, on its own, wall off the US parent&apos;s own separate PE exposure. If the parent&apos;s own staff continue traveling to India and negotiating deals directly, or the parent maintains its own dependent agents in India independent of the subsidiary&apos;s operations, that conduct can still create a PE for the parent itself — a subsidiary existing alongside it doesn&apos;t automatically absorb or eliminate that separate exposure. Once incorporated, the ongoing RBI and FEMA filing mechanics take over from here — see{' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance for US companies after incorporation
          </Link>{' '}
          for that detail, which we don&apos;t duplicate on this page.
        </p>
      </div>

      <div className="mb-12">
        <LeadForm
          title="Have a Subsidiary Already, or Still Deciding How to Structure Your India Presence?"
          description="Whether you're pre-incorporation and using contractors or an EOR, mid-decision on structure, or already running an Indian subsidiary, our tax team can review your specific India activity and tell you where you actually stand on PE exposure — and what documentation would support your position if it were ever examined."
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Doing Business in India: The Complete Guide for US Companies →
          </Link>
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for US Companies After Incorporation →
          </Link>
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transfer Pricing &amp; Section 482 for US-India Subsidiaries →
          </Link>
          <Link href="/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            DTAA &amp; Withholding Tax Rates for US Parent Companies →
          </Link>
          <Link href="/doing-business-in-india/incorporation#pe-risk" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Our Decision Checklist for Whether and When to Incorporate →
          </Link>
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
