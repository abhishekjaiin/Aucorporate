import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { LeadForm } from '@/components/LeadForm'
import { Building2, Users, Clock, FileCheck } from 'lucide-react'

const quickFacts = [
  { icon: Building2, value: '5 Entity Options', label: 'Pvt Ltd, LLP, Branch, Liaison, Project Office' },
  { icon: Users, value: '182-Day Test', label: 'India-Resident Director Required' },
  { icon: Clock, value: '4-6 to 8-12 Wks', label: 'Incorporation vs. Fully Operational' },
  { icon: FileCheck, value: 'Apostille', label: 'Required for US-Issued Documents' },
]

const entityComparison = [
  {
    label: "What it's for",
    values: [
      'Full commercial operations — selling, invoicing, hiring, and raising capital in India without activity restrictions',
      'Professional-services partnerships, joint ventures between known partners, or founders with no near-term plan to raise equity capital',
      'A narrow, RBI-approved list of revenue-generating activities (export/import trading, consultancy, IT/software services, R&D, technical support, representing the parent)',
      'Pure representation and coordination — market research, liaising with Indian contacts — with zero revenue',
      'Executing one specific, already-secured contract for a defined period',
    ],
  },
  {
    label: 'Revenue / representative / time-bound',
    values: [
      'Revenue-generating, unrestricted',
      "Revenue-generating, but can't issue equity or ESOPs",
      'Revenue-generating within a fixed, RBI-approved scope only',
      'Representative only — no revenue permitted at all',
      'Revenue/contract-linked, but bounded to a single project',
    ],
  },
  {
    label: 'Liability',
    values: [
      "Limited to the subsidiary's own assets — a genuinely separate legal entity",
      "Limited to each partner's agreed contribution (except in cases of fraud)",
      'Not a separate entity — the US parent is jointly liable, since a branch is legally an extension of the parent',
      'Same as a branch — an extension of the parent, though the absence of any revenue activity keeps real exposure low in practice',
      'Same as a branch — an extension of the parent for the life of the project',
    ],
  },
  {
    label: 'FDI / establishment route',
    values: [
      'Automatic Route in most sectors, up to 100% foreign ownership, under FEMA (Non-Debt Instruments) Rules',
      'Automatic Route only where the sector permits 100% automatic-route FDI for a company and carries no FDI-linked performance conditions — a narrower, two-part gate than the company route',
      'Not an equity-FDI question at all — separate RBI/AD-bank establishment approval under FEMA 22(R)/2016, generally requiring USD 100,000 minimum net worth and a 5-year profitable track record',
      'Same establishment framework as a branch, with lower thresholds — USD 50,000 net worth and a 3-year profitable track record',
      "Same establishment framework again, but eligibility turns on the underlying contract (how it's funded or sanctioned) rather than the applicant's balance sheet",
    ],
  },
  {
    label: 'Typical compliance burden',
    values: [
      'Higher — ROC filings, statutory audit, board governance, full Companies Act compliance',
      'Lighter — Form 8 and Form 11 annually, statutory audit only above a turnover/contribution threshold',
      'Lower on the corporate-filings side (no separate company to run), but an Annual Activity Certificate and a recurring profit-attribution exercise for tax',
      'Lightest of the five — an Annual Activity Certificate and a fixed multi-year renewal cycle through the AD bank',
      'AAC plus a live GST position from day one, and the highest permanent-establishment tax exposure of the RBI-regulated structures',
    ],
  },
]

const entityColumns = ['Private Limited Company (WOS)', 'LLP', 'Branch Office', 'Liaison Office', 'Project Office']

const branchLiaisonProject = [
  {
    title: 'Branch Office',
    detail:
      "The right fit if you need to actually trade, invoice, or deliver services in India, but only within a specific list of RBI-permitted activities (export/import, consultancy, IT/software delivery, R&D on the parent's behalf, or acting as the parent's representative). Requires specific RBI approval via an Authorised Dealer bank, generally against a USD 100,000 minimum net worth and a 5-year profitable track record.",
  },
  {
    title: 'Liaison Office',
    detail:
      'The right fit for pure market research or coordination with no revenue intention at all. It cannot invoice Indian customers or earn any income in India; its entire cost base runs on remittances from the US parent. Lower eligibility thresholds than a branch (USD 50,000 net worth, 3-year track record), but a fixed renewal cycle to track.',
  },
  {
    title: 'Project Office',
    detail:
      "The right fit once you've already secured a specific, time-bound contract from an Indian company and need a compliant India presence to execute it, not an ongoing operation. Eligibility turns on how the underlying project is funded or sanctioned, not on your balance sheet — but it also carries the highest permanent-establishment tax exposure of the three, since executing a contract is exactly the activity construction/installation PE clauses in most DTAAs are written to capture.",
  },
]

const documentItems = [
  {
    title: 'Certificate of Incorporation',
    detail: "Your US entity's own state-issued certificate.",
  },
  {
    title: 'Board Resolution',
    detail: 'Authorizing the Indian entity and naming the authorized representative.',
  },
  {
    title: 'Power of Attorney',
    detail: "Authorizing someone to act on the parent's behalf for Indian filings, since the US parent can't sign Indian forms directly.",
  },
  {
    title: 'ID and address proof',
    detail: 'For each proposed director.',
  },
  {
    title: 'Registered-office proof in India',
    detail:
      'A lease deed or NOC plus a recent utility bill (SPICe+ allows a correspondence address at filing if this isn\'t finalized yet, with the registered office confirmed within 30 days of incorporation).',
  },
]

const faqs = [
  {
    q: 'Can a US citizen register a company in India?',
    a: "Yes. A US citizen or US company can hold up to 100% ownership in most of the five structures above under the Automatic Route, without needing prior government approval in the majority of sectors. The mechanism differs by structure — equity ownership for a Private Limited Company or LLP, RBI/AD-bank establishment approval for a Branch, Liaison, or Project Office — but nationality itself isn't a barrier in either case. See the entity-decision section above for which structure actually fits what you're trying to do.",
  },
  {
    q: 'Do I need an Indian resident director to register a company in India?',
    a: "Yes, for a Private Limited Company — Section 149(3) of the Companies Act, 2013 requires at least one director who has spent 182 days or more in India in the relevant period, regardless of how much of the company is foreign-owned. An LLP has a related but distinct requirement (a resident designated partner, tested at 120 days, not 182). If you don't already have someone who qualifies, see our step-by-step incorporation guide for the three practical paths US founders use.",
  },
  {
    q: 'Private limited company vs. LLP vs. branch office — which should a US parent company use?',
    a: "It depends on what you're actually trying to do in India: sell and invoice without restriction (Private Limited Company), run a professional-services partnership with no near-term equity-raise plans (LLP), or operate within a narrower, RBI-approved activity list without a separate legal entity (Branch Office). See the full 5-way entity comparison above — this is the single most important decision on this page, and it's worth working through the table rather than defaulting to whichever structure is mentioned first on a competitor's page.",
  },
  {
    q: 'How much does it cost to register a company in India from the USA?',
    a: 'For a standard Automatic Route Private Limited subsidiary, India-side setup costs typically run roughly ₹55,000 to ₹1,15,000+ (very roughly $650-$1,350+ at typical exchange rates), before US-side apostille costs and ongoing annual compliance. This is not a flat quote — entity structure, sector, and how many directors need apostilled documents all move the number. See our full cost & timeline breakdown for the component-level detail and why we don\'t publish a single flat fee.',
  },
  {
    q: 'How long does it take to register a company in India from the USA?',
    a: 'Automatic Route incorporation itself generally clears in 4-6 weeks; the full path to a fully banked, funded, operational entity runs 8-12 weeks end to end. The gap between those two figures is almost always apostille turnaround and resident-director paperwork on the US/founder side, not the Indian filing being slow. See our full cost & timeline breakdown for the phase-by-phase detail.',
  },
  {
    q: 'What documents does a US parent company need to provide?',
    a: 'A certificate of incorporation, board resolution, and power of attorney — all notarized in the US and then apostilled, not embassy-legalised — plus ID and address proof for each proposed director and registered-office proof in India. See the Documents section above for the full checklist and why apostille (not embassy legalisation) is the correct authentication path for US-issued documents.',
  },
  {
    q: 'Is RUN or Form INC-1 still used to reserve a company name in India?',
    a: "No — SPICe+ Part A now covers name reservation as part of the same integrated filing that carries the rest of incorporation. If a source you're reading describes standalone RUN or Form INC-1 as a separate current step, it's likely describing an earlier version of the process; confirm directly against mca.gov.in's current SPICe+ instructions before relying on any third-party description, including this one.",
  },
  {
    q: 'Does the registration process differ for a US citizen versus other foreign nationals?',
    a: "Not materially on the Indian filing side — the Companies Act and FEMA mechanics described on this page are largely nationality-agnostic, and the same SPICe+/FC-1 pathways, resident-director rule, and FDI-route framework apply regardless of the investor's home country. What's specifically US-flavored here is the apostille point (which depends on the US being a Hague Convention signatory — some other countries require embassy legalisation instead) and the US-side tax consequence of each entity choice (Form 5471 for a subsidiary, Form 8858 for a branch), not the underlying Indian registration steps themselves.",
  },
]

export default function RegisterCompanyFromUSPage() {
  return (
    <RegionClusterTemplate
      title="How to Register a Company in India from the USA"
      subtitle="Compare entity options, the resident-director rule, and the real registration process, cost and timeline for a US parent company."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "Register a Company in India from the USA" },
            ]}
    >

      <div className="mb-12">
        <p className="mb-4 text-sm text-gray-500">
          Last updated: 29 September 2026 — prepared by AU Corporate&apos;s India entry practice.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          You&apos;ve decided to register a company in India from the USA — this page is about <em>how</em>, not <em>whether</em>. In short: you&apos;ll choose a structure (Private Limited subsidiary, LLP, Branch, Liaison, or Project Office), file through the Ministry of Corporate Affairs or the RBI depending on which one, and clear India&apos;s resident-director and apostille requirements — typically 4-6 weeks to incorporate and 8-12 weeks to be fully operational. If you&apos;re still weighing whether India is the right move at all, start with{' '}
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            the full guide to doing business in India as a US company
          </Link>
          ; everything below assumes you&apos;ve moved past that question and are now choosing a structure, understanding the filing path it triggers, and getting a realistic read on cost and timeline.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Five structures are available to a US parent company: a wholly-owned subsidiary (Private Limited Company), an LLP, a Branch Office, a Liaison Office, or a Project Office. Nearly every guide on this topic online defaults straight to &quot;form a Private Limited Company&quot; without walking through why — or without giving the other four options real consideration. That default is right for most US companies planning to actually operate and sell in India, but it isn&apos;t right for everyone, and a US parent evaluating a narrower or time-bound presence deserves the same quality of reasoning, not a footnote. That&apos;s what the section below does. Our team includes CA and US CPA-qualified professionals, so the entity choice below is framed against both the Indian filing mechanics and how each structure lands on your US tax filings — not just the Indian side in isolation.
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

      <div className="mb-12" id="which-entity-should-you-register-the-5-way-decision">
        <h2 className="text-2xl font-bold mb-6">Which Entity Should You Register? (The 5-Way Decision)</h2>
        <p className="text-gray-700 mb-6">
          The right structure depends on one question more than any other: what are you actually trying to do in India — sell and invoice directly, run a narrower revenue-generating activity, maintain a purely representative presence, execute one specific contract, or something else? Legal labels matter less than that functional answer, so the comparison below is organized around it.
        </p>

        <h3 className="text-xl font-bold mb-4">Compare the five structures at a glance</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-4 text-left font-bold">&nbsp;</th>
                {entityColumns.map((col) => (
                  <th key={col} className="border border-gray-300 p-4 text-left font-bold">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {entityComparison.map((row, i) => (
                <tr key={row.label} className={i % 2 === 1 ? 'bg-gray-100' : undefined}>
                  <td className="border border-gray-300 p-4 font-semibold align-top">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="border border-gray-300 p-4 text-sm align-top">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-4">Why most US companies default to a Private Limited subsidiary</h3>
        <p className="text-gray-700 mb-6">
          A Private Limited Company doesn&apos;t need RBI or Central Government pre-approval to accept FDI in most sectors, isn&apos;t restricted to a fixed list of permitted activities the way a branch is, and gives full commercial flexibility to hire, contract, and invoice as any Indian company would. That combination — no pre-approval gate, no activity ceiling — is why it&apos;s the default answer for a US company that expects to actually build revenue in India rather than test the water. It comes with a real cost: higher compliance obligations (statutory audit, board governance, ROC filings) than any of the other four structures. See our full{' '}
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            full subsidiary vs. branch office comparison
          </Link>{' '}
          for the side-by-side breakdown, including the India tax-rate differential and how each structure shows up on your US return (Form 5471 vs. Form 8858).
        </p>

        <h3 className="text-xl font-bold mb-4">When an LLP fits instead — and when FDI rules block it</h3>
        <p className="text-gray-700 mb-6">
          An LLP suits a founding team that doesn&apos;t plan to raise institutional or venture capital — an LLP has no share capital, so it can&apos;t issue equity or ESOPs, which rules it out for most VC-backed operating companies but makes it a reasonable fit for a professional-services partnership or a closely-held joint venture. The catch is the FDI gate: automatic-route investment into an LLP requires the sector to permit 100% automatic-route FDI <em>for a company</em> <strong>and</strong> carry no FDI-linked performance conditions — a sector can clear the first test and still fail the second, closing the LLP automatic route even where the equivalent company investment would sail through. This is a genuinely different, more restrictive test than the one a Private Limited Company faces, and it&apos;s worth working through deliberately rather than assuming the same clearance carries over. See{' '}
          <Link href="/llp-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            LLP registration in India: eligibility, process, FDI and compliance
          </Link>{' '}
          for the full automatic-route decision sequence and the LLP-specific FDI-LLP(I) reporting mechanism.
        </p>

        <h3 className="text-xl font-bold mb-4">When a Branch, Liaison, or Project Office fits better than a subsidiary</h3>
        <p className="text-gray-700 mb-6">
          Not every US company setting up in India needs a subsidiary. If your India presence is narrowly scoped, representative-only, or tied to one specific contract, one of the three RBI-regulated, FEMA-established structures below is often a better fit — and each is registered through a genuinely different mechanism than SPICe+ incorporation: Form FC-1, filed with the Registrar of Companies under Section 380 of the Companies Act, 2013, within 30 days of establishing the place of business in India, after RBI/AD-bank approval is in hand.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          {branchLiaisonProject.map((item) => (
            <ClickableInfoCard key={item.title} title={item.title} desc={item.detail} />
          ))}
        </div>
        <p className="text-gray-700 mb-4">
          See the full{' '}
          <Link href="/branch-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Branch Office in India: RBI approval, setup and compliance
          </Link>
          ,{' '}
          <Link href="/liaison-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Liaison Office in India: RBI approval, eligibility and compliance
          </Link>
          , and{' '}
          <Link href="/project-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Project Office in India: RBI approval, registration and compliance
          </Link>{' '}
          guides for the full mechanics of each.
        </p>
        <p className="text-gray-700">
          One caveat on the net-worth and track-record figures above, since it&apos;s easy to miss if you&apos;re just skimming for numbers: RBI has a pending, unnotified October 2025 draft reform (the draft FEMA Establishment in India of a Branch or Office Regulations, 2025) that proposes removing the Branch and Liaison Office eligibility thresholds altogether, among other changes. It hasn&apos;t been gazetted and isn&apos;t law — plan against the figures above, not the draft — but the Branch Office and Liaison Office guides linked above carry the regulatory-watch detail if you want to track it before you file.
        </p>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Still weighing a subsidiary against a full-scope branch?</h3>
        <p className="text-gray-700">
          A short call usually resolves it faster than reading five more comparison pages — tell us what your India operation is actually supposed to do, and we&apos;ll confirm the structure that fits before you file anything.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Registration Process — Which Filing Path Your Entity Choice Triggers</h2>
        <p className="text-gray-700 mb-6">
          Once you&apos;ve settled on a structure, the entity decision above determines which filing path you&apos;re actually on. A Private Limited Company or LLP incorporates through the Ministry of Corporate Affairs under the Companies Act, 2013 framework — SPICe+ for a company, the RUN-LLP/FiLLiP sequence for an LLP. A Branch, Liaison, or Project Office doesn&apos;t incorporate at all; it&apos;s <em>established</em> under FEMA, through RBI/AD-bank approval followed by Form FC-1 registration with the ROC. These are genuinely different mechanisms, not two names for the same process, and mixing them up is a real, checkable error.
        </p>
        <p className="text-gray-700 mb-6">
          For the subsidiary route specifically, the sequence runs: entity and director selection → DSC and DIN for proposed directors → name reservation and the SPICe+ Part B filing itself (which bundles PAN, TAN, and — through the linked AGILE-PRO-S form — EPFO, ESIC, and optional GST registration) → Certificate of Incorporation → bank account opening and capital inflow → Form FC-GPR filed with the RBI within 30 days of share allotment. The resident-director requirement (below) has to be resolved before you can file at all, and apostille (also below) is almost always what actually paces the timeline. See the full{' '}
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            step-by-step SPICe+ incorporation guide
          </Link>{' '}
          for the worked mechanics of every step in this sequence.
        </p>

        <h3 className="text-xl font-bold mb-4">SPICe+ Part A now covers name reservation — a currency correction</h3>
        <p className="text-gray-700">
          If you&apos;ve read that name reservation runs through a standalone RUN form or &quot;Form INC-1,&quot; that&apos;s describing a step that&apos;s been folded into SPICe+ Part A — the integrated web form on the MCA&apos;s V3 portal now handles name reservation as part of the same filing that carries the rest of the incorporation. This isn&apos;t a minor stylistic point: a decent amount of published guidance on this topic (some of it fairly recent) still describes standalone RUN/INC-1 as the current mechanism, which can leave a first-time filer expecting a form that isn&apos;t the one they&apos;ll actually be filing. Worth checking directly against{' '}
          <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            mca.gov.in
          </a>
          &apos;s own SPICe+ instructions before you rely on any third-party guide&apos;s description of the current process, including this one.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Resident Director Requirement (Read This Before You File)</h2>
        <p className="text-gray-700 mb-6">
          Under Section 149(3) of the Companies Act, 2013, every Indian company — regardless of foreign ownership — must have at least one director who has been physically present in India for a total of 182 days or more in the relevant period. This applies to a Private Limited Company; an LLP has a related but distinct rule (a resident designated partner, currently tested at 120 days following the LLP (Amendment) Act, 2021 — not 182, a figure that&apos;s still frequently misapplied across published guidance covering both structures). Either way, it&apos;s a genuine gating question, not a formality: you can&apos;t file without naming someone who satisfies it, and there&apos;s no real US equivalent to plan around in advance.
        </p>
        <p className="text-gray-700">
          If you don&apos;t already have an India-resident individual to appoint, this is worth resolving before you&apos;re mid-filing, not after. The three practical paths — relocating a team member long enough to clear the threshold, appointing a trusted India-based individual, or engaging a professional nominee resident director through a CA/CS firm — are covered in full, including what a nominee arrangement actually costs and how operational control stays with you, in{' '}
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            the three ways US founders resolve the resident-director requirement
          </Link>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Documents You&apos;ll Need from the US Side</h2>
        <p className="text-gray-700 mb-6">
          Everything below either originates with your US parent company or depends on it, so it&apos;s worth getting moving before the Indian-side filing starts:
        </p>
        <ul className="space-y-3 text-gray-700 mb-6">
          {documentItems.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong> — {item.detail}
            </li>
          ))}
        </ul>
        <p className="text-gray-700">
          The one genuinely US-specific point in this list: your certificate of incorporation, board resolution, and power of attorney need to be notarized in the US and then <strong>apostilled</strong> — not embassy-legalised — since the US and India are both signatories to the Hague Apostille Convention. That distinction matters because embassy legalisation is a different, slower process some first-time filers assume applies by default; it doesn&apos;t, for a US-originated document. Apostille turnaround through your home state&apos;s Secretary of State is, more often than the Indian filing itself, the actual pacing item on your timeline. For the full document-by-document detail and what apostille typically costs, see{' '}
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            the step-by-step SPICe+ incorporation guide
          </Link>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">FDI Route: Automatic vs. Government Approval</h2>
        <p className="text-gray-700">
          Whichever entity you choose, the sector you&apos;re operating in determines whether your FDI clears under the Automatic Route (no prior government sign-off — the investment is made first and reported to RBI afterwards) or the Government Route (DPIIT and, where relevant, a sector ministry approve the investment before it&apos;s made). Most sectors relevant to a US company entering India sit under the Automatic Route, which is a large part of why Private Limited subsidiaries move faster than the alternatives requiring Government Route review. See{' '}
          <Link href="/india-business-setup/fdi-channels" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FDI Automatic Route vs. Government Approval Route
          </Link>{' '}
          for the full sector-by-sector breakdown, since the specific caps and conditions genuinely vary by industry and aren&apos;t something to assume from a general rule.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Cost and Timeline</h2>
        <p className="text-gray-700">
          Automatic Route incorporation itself typically clears in <strong>4-6 weeks</strong>; the full path to a fully banked, funded, and operational entity generally runs <strong>8-12 weeks</strong> end to end, once bank account opening, capital inflow, and the FC-GPR filing are factored in. On cost, India-side setup — government filing, legal documentation, bank account coordination, tax registration, compliance setup, and professional fees combined — typically runs from roughly <strong>₹55,000 to ₹1,15,000+</strong> for a standard Automatic Route Private Limited subsidiary, before the US-side apostille costs and ongoing annual compliance that sit outside that figure entirely. These are incorporation-and-setup numbers, not a quote for your specific structure — entity choice, sector, the number of directors needing apostilled documents, and whether a resident director already exists all move both figures meaningfully. For the full component-level breakdown and the phase-by-phase timeline, see{' '}
          <Link href="/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            the full cost &amp; timeline breakdown
          </Link>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Happens After Incorporation</h2>
        <p className="text-gray-700 mb-4">
          The Certificate of Incorporation is the start of the compliance calendar, not the end of it. Once the entity is funded, Form FC-GPR reports share allotment to the RBI within 30 days, and from there a recurring FEMA filing rhythm begins — Form FC-TRS for any later share transfer, and the annual FLA return for as long as the entity carries foreign investment. See{' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance after incorporation
          </Link>{' '}
          for the full filing calendar and deadlines.
        </p>
        <p className="text-gray-700 mb-4">
          One thing worth flagging early rather than after your first year of operations: once your Indian entity starts transacting with the US parent — management fees, cost allocations, IP royalties — those transactions become related-party dealings reviewed on both sides of the border. See our{' '}
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            transfer pricing &amp; Section 482 guide
          </Link>{' '}
          when that becomes relevant to your structure.
        </p>
        <p className="text-gray-700">
          And the Companies Act side of the annual cycle — AOC-4, MGT-7, DIR-3 KYC, board meetings and AGM — is covered in full on our{' '}
          <Link href="/india-entry-for-us-companies/annual-compliance-calendar" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            annual compliance calendar
          </Link>.
        </p>
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

      <div className="mb-12">
        <LeadForm
          title="Not Sure Which Structure Fits Your India Entry?"
          description="Whether you're weighing a Private Limited subsidiary against an LLP or a Branch Office, or you've already settled on a structure and need to work through the resident-director requirement and filing sequence, our India entry team — CA and US CPA-qualified — can confirm the right structure and next steps for your specific business."
        />
      </div>

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            How to Incorporate a Subsidiary from the US →
          </Link>
          <Link href="/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Cost &amp; Timeline: Incorporating from the US →
          </Link>
          <Link href="/llp-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            LLP Registration in India →
          </Link>
          <Link href="/branch-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Branch Office in India →
          </Link>
          <Link href="/liaison-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Liaison Office in India →
          </Link>
          <Link href="/project-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Project Office in India →
          </Link>
          <Link href="/india-business-setup/fdi-channels" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FDI Automatic vs. Government Route →
          </Link>
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            The general (non-US-specific) company registration process in India →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
