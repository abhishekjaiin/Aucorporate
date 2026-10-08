import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { EntitySelectorTool } from '@/components/EntitySelectorTool'
import { ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: 'Should a US company set up an Indian subsidiary or a branch office?',
    a: "Most US companies planning to actually sell into the Indian market — not just liaise or test the water — go the wholly-owned subsidiary route: a separate legal entity with liability limited to the subsidiary's own assets, full commercial flexibility, and access to the automatic FDI route in most sectors. A branch office is legally an extension of the US parent, carries joint liability back to it, and needs specific RBI approval before commencing operations — it tends to suit narrower, shorter-term operations. On the US tax side, a subsidiary is reported annually on Form 5471, while a branch's income flows onto the parent's Form 1120 and is disclosed via Form 8858 instead.",
  },
  {
    q: 'What actually slows down incorporating a subsidiary from the US?',
    a: "Apostille, not the Indian filing itself. The US parent's certificate of incorporation, board resolution, and power of attorney typically need to be notarized in the US and then apostilled, since both countries are Hague Apostille Convention signatories — and that process depends on US notary and Secretary of State turnaround. Starting it in parallel with, not after, Indian name reservation is the most effective way to compress the overall timeline.",
  },
  {
    q: 'What FEMA filings does a US-owned Indian subsidiary need after incorporation?',
    a: "Three recurring RBI filings under FEMA: Form FC-GPR reports share allotment within 30 days of the FDI coming in, Form FC-TRS reports any later transfer of shares between resident and non-resident, and the annual FLA return is a standing yearly obligation for as long as the entity carries foreign investment — filed regardless of whether any transaction happened that year, which is why it's the filing most foreign-owned subsidiaries forget once initial setup is done.",
  },
  {
    q: 'How does transfer pricing work between a US parent and its Indian subsidiary?',
    a: "Any transaction between the two — management fees, cost allocations, IP royalties — is reviewed on both sides: Section 482 of the Internal Revenue Code in the US, India's transfer pricing rules (Sections 161-173 under the Income-tax Act, 2025, effective April 2026) on the Indian side. Both require arm's-length pricing, and the real risk isn't aggressive pricing, it's inconsistency between what's reported to Indian authorities and what shows up on Schedule M of the parent's Form 5471. For large, recurring intercompany transactions, a bilateral Advance Pricing Agreement can bind both the CBDT and the IRS to the same figure for up to nine assessment years.",
  },
  {
    q: 'What drives the cost and timeline of setting up in India from the US?',
    a: 'Entity structure (subsidiary vs. branch carry different registration, audit, and ongoing compliance costs), sector and FDI route (Automatic Route moves faster than Government Route), the number of US-based directors needing apostilled documents (each one adds time more than cost), and whether the engagement is incorporation-only or includes ongoing accounting, payroll, tax, and FEMA compliance. For a standard automatic-route subsidiary, the US-side apostille step is typically the pacing item, not the Indian filing itself.',
  },
]

const journeyStages = [
  {
    stage: 'Stage 1',
    name: 'Decide',
    description: 'Work out which entity actually fits your plans in India.',
    pages: [
      {
        title: 'Foreign Subsidiary / WOS in India',
        description: 'Start with the broader subsidiary lifecycle before moving into the US-specific incorporation and compliance guides',
        href: '/india-business-setup/foreign-subsidiary-india',
      },
      {
        title: 'US Subsidiary vs Branch Office',
        description: 'Understand the structural differences and tax implications of subsidiary vs branch operations',
        href: '/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india',
      },
    ],
  },
  {
    stage: 'Stage 2',
    name: 'Set Up',
    description: 'Incorporate, register, and plan the cost and timeline from the US side.',
    pages: [
      {
        title: 'Register a Company from the USA',
        description: 'Compare all five entity options — subsidiary, LLP, branch, liaison, project office — and the registration process, cost and timeline',
        href: '/india-entry-for-us-companies/register-company-in-india-from-usa',
      },
      {
        title: 'How to Incorporate a Subsidiary',
        description: 'Step-by-step process for incorporating a subsidiary from the US with apostille requirements',
        href: '/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us',
      },
      {
        title: 'Cost & Timeline',
        description: 'Transparent, structure-based fee quotes and realistic timelines for US company setup — no fixed number fits every entity, so we scope it on a short call',
        href: '/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us',
      },
    ],
  },
  {
    stage: 'Stage 3',
    name: 'Get Compliant',
    description: 'Stay current on the recurring FEMA, RBI, and Companies Act filings a US-owned subsidiary owes every year.',
    pages: [
      {
        title: 'FEMA Compliance',
        description: 'FC-GPR, FC-TRS and annual FLA return filings, with deadline tracking for US-owned Indian subsidiaries',
        href: '/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary',
      },
      {
        title: 'Annual Compliance Calendar',
        description: 'AOC-4, MGT-7, DIR-3 KYC, board meetings and AGM — the full annual MCA-ROC filing cycle for a US-owned subsidiary, with FEMA dates shown alongside',
        href: '/india-entry-for-us-companies/annual-compliance-calendar',
      },
    ],
  },
  {
    stage: 'Stage 4',
    name: 'Manage Tax Risk',
    description: 'Keep US and Indian filings reconciled on intercompany pricing, assess permanent establishment exposure, and plan how profits come back to the parent.',
    pages: [
      {
        title: 'Transfer Pricing & Section 482',
        description: 'Section 482 transfer pricing and Form 5471 implications for US parent companies',
        href: '/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary',
      },
      {
        title: 'Permanent Establishment Risk',
        description: 'The four ways a US company triggers PE in India, current case law, and whether a subsidiary or an EOR actually removes the exposure',
        href: '/india-entry-for-us-companies/permanent-establishment-risk-india',
      },
      {
        title: 'DTAA & Repatriation Tax Guide',
        description: 'DTAA rates, withholding tax and the repatriation routes available to a US parent — dividend, royalty, management fee, or the 2026 buyback reform',
        href: '/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax',
      },
    ],
  },
  {
    stage: 'Stage 5',
    name: 'Operate, Grow, or Exit',
    description: 'Run the finance function, scale toward a captive center, or wind the entity down cleanly.',
    pages: [
      {
        title: 'Accounting & Assurance',
        description: 'Statutory audit, financial reporting, and Ind AS/IFRS reconciliation support once the subsidiary is operating',
        href: '/services/accounting-assurance',
      },
      {
        title: 'Outsourced Finance & Virtual CFO',
        description: 'One option for running day-to-day bookkeeping, payroll, and MIS reporting without building a full in-house India finance team from day one',
        href: '/outsourcing',
      },
      {
        title: 'Closing an Indian Subsidiary',
        description: 'Strike-off vs voluntary liquidation, RBI remittance rules, and Form 5471 deconsolidation for a US parent winding down',
        href: '/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation',
      },
    ],
  },
]

export default function IndiaEntryForUSCompanies() {
  const subPages = journeyStages.flatMap((s) => s.pages)

  return (
    <RegionClusterTemplate
      title="Doing Business in India: The Complete Guide for US Companies"
      subtitle="AU Corporate helps US companies establish, scale, and optimize their Indian operations with expertise in GAAP to Ind AS reconciliation, transfer pricing, and Section 482 compliance."
      region="US"
      breadcrumbItems={[
              { label: "Doing Business in India", href: "/doing-business-in-india" },
              { label: "India Entry for US Companies" },
            ]}
    >
      {/* INTRO & OVERVIEW */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          <strong>Who this is for:</strong> US companies considering, establishing, operating, or expanding an Indian presence. <strong>What it covers:</strong> deciding on the right Indian structure, incorporation and setup, FEMA/RBI and corporate compliance, transfer pricing and permanent establishment risk, DTAA and repatriation, and the ongoing operations, growth, or exit that follow — the full lifecycle, in one connected guide.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          This builds on the general framework in{' '}
          <Link href="/doing-business-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Doing Business in India
          </Link>{' '}
          — that page covers the strategic questions every foreign company faces; this one covers what's specific to doing it from the US, including the regulatory, tax, and compliance frameworks that don&apos;t map cleanly onto US structures.
        </p>
        <p className="text-lg text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          Our team includes CA and US CPA-qualified professionals, giving US clients a direct line to expertise in both Indian statutory requirements and US GAAP/reporting expectations from the other side of the desk.
        </p>
      </div>

      {/* JOURNEY MAP — the five stages this page is organized around */}
      <div className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {journeyStages.map((s, i) => (
            <a
              key={s.stage}
              href={`#stage-${i + 1}`}
              className="p-4 rounded-lg border-2 border-yellow-300 bg-white hover:bg-yellow-50 hover:shadow-md transition text-center"
            >
              <div className="text-xs font-semibold text-yellow-600 uppercase tracking-wide mb-1">{s.stage}</div>
              <div className="font-bold text-sm text-[#081a42]">{s.name}</div>
            </a>
          ))}
        </div>
      </div>

      {/* STAGE 1 — DECIDE */}
      <div id="stage-1" className="mb-6 scroll-mt-24">
        <span className="text-xs font-bold uppercase tracking-wide text-yellow-600">Stage 1 of 5 — Decide</span>
      </div>

      {/* ENTITY CHOICE */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Choosing a Structure: Subsidiary or Branch Office?</h2>
        <p className="text-gray-700 mb-4">
          Most US companies planning to actually sell into the Indian market — not just liaise or test the water — go the wholly-owned subsidiary (Private Limited Company) route: a separate legal entity with liability limited to the subsidiary&apos;s own assets, full commercial flexibility, and access to the automatic FDI route in most sectors. A branch office is legally an extension of the US parent rather than a separate entity, carries joint liability back to the parent, and requires specific RBI approval before commencing operations — it tends to suit narrower, shorter-term operations rather than a company planning to build a real India presence.
        </p>
        <p className="text-gray-700">
          On the US tax side, this choice matters beyond India: a subsidiary is a separate foreign corporation reported annually on Form 5471, with possible Subpart F/NCTI income inclusions even without a cash distribution, while a branch&apos;s income flows directly onto the parent&apos;s own Form 1120 and is disclosed via Form 8858 instead. See the full{' '}
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            subsidiary vs. branch office comparison
          </Link>{' '}
          for the side-by-side breakdown.
        </p>
      </div>

      <div className="mb-12">
        <EntitySelectorTool />
      </div>

      {/* STAGE 2 — SET UP */}
      <div id="stage-2" className="mb-6 scroll-mt-24">
        <span className="text-xs font-bold uppercase tracking-wide text-yellow-600">Stage 2 of 5 — Set Up</span>
      </div>

      {/* INCORPORATION PROCESS */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Incorporating From the US: What Actually Slows Things Down</h2>
        <p className="text-gray-700 mb-4">
          Incorporation follows the same Companies Act, 2013 framework as any Indian company — DSC and DIN for the proposed directors, name reservation, the integrated SPICe+ Part B filing (PAN, TAN, EPFO, ESIC, and GST registration in one pass), and the Certificate of Incorporation. The part that&apos;s specific to a US parent, and the part that most often causes delay, is apostille: the US parent&apos;s certificate of incorporation, board resolution, and power of attorney typically need to be notarized in the US and then apostilled, since the US and India are both Hague Apostille Convention signatories. That process depends on US notary and Secretary of State turnaround, not anything on the Indian side — starting it in parallel with, not after, Indian name reservation is the single most effective way to compress the overall timeline.
        </p>
        <p className="text-gray-700">
          See our{' '}
          <Link href="/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            step-by-step incorporation guide
          </Link>{' '}
          for the full process, or our sitewide{' '}
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            company registration guide
          </Link>{' '}
          for the general (non-US-specific) mechanics.
        </p>
      </div>

      {/* COST AND TIMELINE — grouped into Set Up, since it's a setup-decision
          input, not an ongoing-operations topic. */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Cost and Timeline: What Actually Drives It</h2>
        <p className="text-gray-700">
          Any single flat number quoted online for India entry is a rough average dressed up as precision. The real drivers are entity structure (subsidiary vs. branch carry different registration, audit, and ongoing compliance costs), sector and FDI route (Automatic Route moves faster and cheaper than Government Route), the number of US-based directors needing apostilled documents (each one adds time, usually more than cost), and whether the engagement is incorporation-only or includes ongoing accounting, payroll, tax, and FEMA compliance. For a standard automatic-route subsidiary with straightforward documentation, the US-side apostille step is typically the pacing item, not the Indian filing itself. See our{' '}
          <Link href="/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            full cost and timeline breakdown
          </Link>.
        </p>
      </div>

      {/* STAGE 3 — GET COMPLIANT */}
      <div id="stage-3" className="mb-6 scroll-mt-24">
        <span className="text-xs font-bold uppercase tracking-wide text-yellow-600">Stage 3 of 5 — Get Compliant</span>
      </div>

      {/* FEMA COMPLIANCE */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ongoing FEMA and RBI Compliance</h2>
        <p className="text-gray-700 mb-4">
          Once the subsidiary is incorporated and receives FDI from the US parent, three RBI filings under FEMA become recurring obligations: Form FC-GPR reports share allotment within 30 days of the FDI coming in, Form FC-TRS reports any later transfer of shares between resident and non-resident, and the annual FLA return is a standing yearly obligation for as long as the entity carries foreign investment — filed regardless of whether any transaction happened that year, which is exactly why it&apos;s the filing most foreign-owned subsidiaries forget once initial setup is done. US corporate calendars and RBI filing calendars don&apos;t align on their own, so this needs active tracking rather than assuming it&apos;ll get flagged automatically.
        </p>
        <p className="text-gray-700 mb-4">
          Full detail on deadlines and filing mechanics: {' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            FEMA compliance for US companies
          </Link>.
        </p>
        <p className="text-gray-700">
          For the Companies Act/MCA-ROC side of the annual calendar — AOC-4, MGT-7, DIR-3 KYC, board meetings and the AGM, shown alongside these same FEMA dates — see our{' '}
          <Link href="/india-entry-for-us-companies/annual-compliance-calendar" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            annual compliance calendar for foreign subsidiaries
          </Link>.
        </p>
      </div>

      {/* STAGE 4 — MANAGE TAX RISK */}
      <div id="stage-4" className="mb-6 scroll-mt-24">
        <span className="text-xs font-bold uppercase tracking-wide text-yellow-600">Stage 4 of 5 — Manage Tax Risk</span>
      </div>

      {/* TRANSFER PRICING */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Transfer Pricing: Where US and Indian Filings Have to Agree</h2>
        <p className="text-gray-700 mb-4">
          Any transaction between the US parent and its Indian subsidiary — management fees, cost allocations, intercompany services, IP royalties — is a related-party transaction reviewed on both sides: Section 482 of the Internal Revenue Code on the US side, India&apos;s own transfer pricing rules (restructured as Sections 161-173 under the Income-tax Act, 2025, effective April 1, 2026) on the Indian side. Both require arm&apos;s-length pricing, but the real risk isn&apos;t aggressive pricing — it&apos;s inconsistency: the figure reported to Indian authorities not matching what shows up on Schedule M of the US parent&apos;s Form 5471. That mismatch is one of the easiest things for either tax authority to flag, which is why keeping both filings reconciled to the same underlying numbers is the single highest-value thing a joint US-India advisory relationship does.
        </p>
        <p className="text-gray-700 mb-4">
          Form 3CEB (the Indian transfer pricing audit report, due October 31 for the current cycle) is proposed to be replaced by a more data-rich Form 48 from Tax Year 2026-27 under draft Income-tax Rules, 2026 — still a proposal, not yet finalized. See our full{' '}
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            transfer pricing &amp; Section 482 guide
          </Link>{' '}
          for the complete breakdown, including Safe Harbour Rules for IT/ITeS services.
        </p>
        <p className="text-gray-700">
          For a subsidiary with large, recurring intercompany transactions, a bilateral{' '}
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Advance Pricing Agreement (APA)
          </Link>{' '}
          can bind both the CBDT and the IRS to the same figure for up to nine assessment years, though it&apos;s slower and more resource-intensive to negotiate than annual Form 3CEB compliance.
        </p>
      </div>

      {/* PERMANENT ESTABLISHMENT RISK */}
      <div className="mb-12">
        <p className="text-gray-700 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
          A related question on the tax-risk side: does your current India activity already create a taxable presence, with or without an entity? Permanent establishment (PE) risk is a function of what your people and contracts actually do in India, not of whether you&apos;ve incorporated anything — see our full{' '}
          <Link href="/india-entry-for-us-companies/permanent-establishment-risk-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            permanent establishment risk analysis for US companies
          </Link>{' '}
          for the four-way typology, current case law, and whether a subsidiary or an EOR actually removes the exposure.
        </p>
      </div>

      {/* REPATRIATION / DTAA */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Repatriating Profits: Dividend, Royalty, or Buyback</h2>
        <p className="text-gray-700">
          Once the subsidiary is profitable, the India-US DTAA sets the withholding tax rate on whichever route moves money back to the parent — dividend, royalty, or management fee each carry different rates and documentation, and the 2026 buyback reform changed how that route is taxed on the Indian side. See our full{' '}
          <Link href="/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            DTAA &amp; repatriation tax guide
          </Link>{' '}
          for the rates and the route-by-route comparison.
        </p>
      </div>

      {/* STAGE 5 — OPERATE, GROW, OR EXIT */}
      <div id="stage-5" className="mb-6 scroll-mt-24">
        <span className="text-xs font-bold uppercase tracking-wide text-yellow-600">Stage 5 of 5 — Operate, Grow, or Exit</span>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Running the Entity Once It&apos;s Live</h2>
        <p className="text-gray-700 mb-4">
          Once the subsidiary is incorporated and the compliance calendar is running, the ongoing decision is how to resource the finance function — not whether to resource it. Most US parents start with the recurring bookkeeping, payroll, and statutory filings handled by{' '}
          <Link href="/services/accounting-assurance" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            accounting and assurance support
          </Link>{' '}
          on the India side, with{' '}
          <Link href="/outsourcing" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            outsourced bookkeeping and Virtual CFO support
          </Link>{' '}
          available as one option for running day-to-day finance work without building a full in-house India team from day one — useful in the early years, but a scale decision to revisit rather than a default that fits every subsidiary indefinitely.
        </p>
        <p className="text-gray-700 mb-4">
          As the India presence grows, some US parents evolve the subsidiary into a captive{' '}
          <Link href="/gcc-setup-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Global Capability Center
          </Link>{' '}
          rather than a standard operating entity. And if the actual need is narrower — specifically outsourcing accounting or tax-preparation work rather than running a subsidiary — our separate look at{' '}
          <Link href="/accounting-outsourcing-firm-for-united-states-cpas-firm" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            accounting outsourcing to India for US businesses and CPA firms
          </Link>{' '}
          covers how to evaluate that as a standalone decision.
        </p>
        <p className="text-gray-700">
          On the other end, if the entity no longer fits the business, see our guide to{' '}
          <Link href="/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            closing an Indian subsidiary
          </Link>{' '}
          — strike-off vs. voluntary liquidation, RBI remittance rules, and Form 5471 deconsolidation for the US parent.
        </p>
      </div>

      {/* SUB-PAGES GRID — grouped by journey stage, not a flat list */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Every Page in This Journey, by Stage
        </h2>
        <p className="text-gray-600 mb-8">
          The full depth behind each stage above, grouped the same way.
        </p>
        <div className="space-y-10">
          {journeyStages.map((s, i) => (
            <div key={s.stage}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-yellow-600 mb-1">
                {s.stage}: {s.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{s.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {s.pages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition group"
                  >
                    <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-600 flex items-center gap-2">
                      {page.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2 text-[#081a42]">{item.q}</h3>
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

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

      {/* RELATED SERVICES */}
      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">
          Comprehensive Services for US Companies
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/india-business-setup/company-formation"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Full company registration process in India →
          </Link>
          <Link
            href="/services/taxation-regulatory"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Taxation & Regulatory Services →
          </Link>
          <Link
            href="/services/accounting-assurance"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Accounting Services →
          </Link>
          <Link
            href="/gcc-setup-india"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            GCC Setup in India →
          </Link>
          <Link
            href="/accounting-outsourcing-firm-for-united-states-cpas-firm"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Evaluating Accounting Outsourcing to India? →
          </Link>
          <Link
            href="/outsourcing"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Outsourced Finance Support →
          </Link>
        </div>
      </div>

      {/* BREADCRUMB JSON-LD SCHEMA */}
    </RegionClusterTemplate>
  )
}
