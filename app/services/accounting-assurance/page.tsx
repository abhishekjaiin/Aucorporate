import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { ClickableReveal } from "@/components/ClickableReveal"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"
import { ShieldCheck, CalendarClock, BookOpenCheck, FileText } from "lucide-react"

export default function Page() {
  const section = {
    title: "Our Services",
    id: "services",
    items: [
      {
        title: "Statutory Audit Support",
        desc: "Preparing your books, schedules and supporting documentation for the annual statutory audit every Indian company must undergo under the Companies Act, 2013, and coordinating directly with your appointed independent auditor.",
      },
      {
        title: "Bookkeeping & Financial Record-Keeping",
        desc: "Maintaining accrual-basis, double-entry books of account as required under Section 128 of the Companies Act — kept audit-ready throughout the year rather than reconstructed at year-end.",
      },
      {
        title: "Accounting Services",
        desc: "Providing end-to-end accounting support to ensure accurate financial records and compliance.",
      },
      {
        title: "MIS Reporting for Management",
        desc: "Delivering insightful management reports to support strategic planning and decision-making.",
      },
      {
        title: "Financial Statement Preparation",
        desc: "Preparing reliable and compliant financial statements in accordance with applicable standards.",
      },
      {
        title: "IFRS & IND-AS Implementation",
        desc: "Assisting with the transition to IFRS and Ind-AS, and staying compliant with both once you're there.",
      },
      {
        title: "Monthly Payroll Management",
        desc: "End-to-end payroll processing ensuring timely salary disbursement, statutory compliance, and accuracy.",
      },
    ],
  }

  const auditTypes = [
    {
      title: "Statutory Audit",
      desc: "Mandatory every year for every company incorporated in India — private or public, profitable or not, at any turnover — under Sections 139 and 143 of the Companies Act, 2013. Conducted by an independent chartered accountant appointed at the AGM; there is no small-company or low-turnover exemption from the audit itself.",
    },
    {
      title: "Tax Audit",
      desc: "A separate requirement under Section 44AB of the Income Tax Act, triggered once turnover crosses the applicable threshold — a different test, a different engagement, and a different report (Form 3CD) from the statutory audit, even though most operating subsidiaries end up needing both in the same year.",
    },
    {
      title: "Internal Audit",
      desc: "Mandatory for a private company under Rule 13 of the Companies (Accounts) Rules, 2014 once turnover reaches Rs 200 crore, or borrowings from banks/financial institutions exceed Rs 100 crore, at any point in the preceding year — a later-stage threshold most newly-set-up foreign subsidiaries won't hit right away, but worth planning for.",
    },
  ]

  const calendarItems = [
    {
      title: "Monthly",
      desc: "TDS deducted from payments generally deposited by the 7th of the following month; GST returns (GSTR-1/GSTR-3B, or quarterly under the QRMP scheme for smaller filers); payroll statutory deductions processed alongside each salary run.",
    },
    {
      title: "Quarterly",
      desc: "TDS returns (Form 24Q/26Q); advance tax instalments due 15 June, 15 September, 15 December and 15 March, cumulative to 100% of the year's estimated tax liability by the final instalment.",
    },
    {
      title: "Annually",
      desc: "Statutory audit and AGM; Form AOC-4 and Form MGT-7/7A filed with the RoC following the AGM; income tax return and tax audit report where the turnover threshold is crossed; Form 3CEB transfer pricing certification where international related-party transactions exist; GSTR-9 annual return once GST turnover exceeds Rs 2 crore (with the GSTR-9C reconciliation statement layering in above Rs 5 crore); and the FLA return to RBI for as long as the entity carries foreign investment on its books.",
    },
  ]

  const engagementSteps = [
    {
      title: "Books setup & standardisation",
      desc: "We map your chart of accounts to what an Indian statutory audit and Ind AS/regular GAAP reporting expect, and align it with your parent's own chart of accounts where a consolidation feed is needed — done once, upfront, rather than reconciled retroactively at year-end.",
    },
    {
      title: "Monthly close & MIS",
      desc: "Bookkeeping, bank reconciliations, TDS and GST workings, and payroll are processed on a monthly cadence, with MIS reports delivered on a schedule your India and parent-company finance teams can both plan around.",
    },
    {
      title: "Quarterly & statutory-deadline reviews",
      desc: "Advance tax instalments, TDS returns and GST filings are reviewed against the compliance calendar each quarter, so nothing is assembled for the first time in the week a deadline falls due.",
    },
    {
      title: "Year-end audit & filing support",
      desc: "We prepare audit schedules and supporting documentation ahead of the statutory audit, coordinate directly with your appointed independent auditor, and carry the resulting numbers through to AOC-4, MGT-7, the tax return and the FLA return.",
    },
  ]

  const faqs = [
    {
      q: "Is statutory audit mandatory even for a small, low-turnover Indian subsidiary?",
      a: "Yes — there is no turnover or profitability threshold that exempts a company from statutory audit under the Companies Act, 2013. ‘Small company’ status does relax a handful of other compliance items (for example, a small company isn’t required to include a cash-flow statement in its financial statements), but the requirement to have annual accounts audited by an independent chartered accountant applies to every company, from its first financial year onward.",
    },
    {
      q: "Who appoints our statutory auditor, and how often does that need to be renewed?",
      a: "The board appoints the company’s first auditor within 30 days of incorporation, to hold office until the conclusion of the first AGM. From that AGM onward, shareholders appoint the statutory auditor for a five-year term under Section 139 of the Companies Act — and since a 2018 amendment removed the annual-ratification requirement, that appointment doesn’t need to be re-confirmed every year. What does recur every year is the audit itself, the AGM, and the AOC-4/MGT-7 filings that follow it.",
    },
    {
      q: "What accounting records are we legally required to maintain, and for how long?",
      a: "Section 128 of the Companies Act requires every company to maintain proper books of account on an accrual basis, under the double-entry system, at its registered office (or another India location notified to the Registrar), and to preserve them for at least eight financial years. This is a standalone compliance obligation, not just good practice — an auditor working from incomplete or non-accrual-basis books generally can’t issue an unqualified audit opinion, which is why bookkeeping quality and statutory-audit readiness are really the same workstream rather than two separate ones.",
    },
    {
      q: "What's the difference between statutory audit, tax audit, and internal audit?",
      a: "They’re three separate requirements under two different laws, and an Indian subsidiary can be subject to more than one in the same year: statutory audit (Companies Act, mandatory for every company regardless of size), tax audit (Income Tax Act Section 44AB, triggered once turnover crosses the applicable threshold, reported on Form 3CD), and internal audit (Companies Act, mandatory for a private company only once it crosses specified turnover or borrowing thresholds under the Companies (Accounts) Rules, 2014 — a later-stage requirement most newly-set-up subsidiaries won’t hit immediately, but worth planning for).",
    },
    {
      q: "When does GST registration and ongoing monthly GST compliance start for a new subsidiary?",
      a: "GST registration isn’t automatic on incorporation — it’s triggered once aggregate turnover crosses the applicable threshold, currently Rs 20 lakh for a services business in most states and Rs 40 lakh for goods, the same thresholds covered in our company registration guide. Many foreign-owned entities register voluntarily well before crossing that threshold, particularly where the Indian entity invoices only its overseas parent, since registration allows filing a Letter of Undertaking and treating those invoices as zero-rated exports. Once registered, GST compliance becomes a recurring monthly (or quarterly, under the QRMP scheme for smaller filers) obligation rather than a one-time filing.",
    },
    {
      q: "Do we get a dedicated accounting team, or is this handled on an ad hoc basis?",
      a: "Engagements are run by a consistent team assigned to your entity — not a rotating pool picking up tickets — because statutory audit, tax and RoC filings all draw on the same books, and continuity matters more here than in generic data-entry bookkeeping. The cadence is set upfront: monthly close and MIS, quarterly review against the compliance calendar (advance tax, TDS returns, GST), and a year-end push aligned to your AGM and audit timeline, rather than reactive work picked up only when a deadline is close.",
    },
    {
      q: "How is AU Corporate's accounting and audit service different from a generic bookkeeping vendor?",
      a: "A bookkeeping vendor can enter transactions and reconcile accounts; getting a foreign-owned subsidiary through a clean statutory audit, an accurate tax position, and its RoC and FEMA filings in the same year takes accounting, tax and company-secretarial work drawing on the same numbers at the same time. Our accounting and assurance team sits inside the same firm that handles company registration, FEMA/RBI reporting and tax advisory for the same clients, so the books we keep are built from month one to support the audit, the return, and the filings that ultimately rely on them.",
    },
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Accounting & Assurance" }]} />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Accounting & Assurance Services in India
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mb-6 leading-relaxed">
          For a foreign parent running an Indian subsidiary, accounting isn&apos;t a back-office task to tidy up once a year — it&apos;s the record a statutory auditor has to sign off on annually under the Companies Act, 2013, the source data behind your GST and income-tax filings, and very often the same numbers your parent company&apos;s own group auditor relies on for consolidation. We provide end-to-end bookkeeping, MIS reporting, Ind AS/IFRS-aligned financial statement preparation, monthly payroll, and statutory audit support built around that reality, kept audit- and compliance-ready throughout the year rather than assembled at the last minute. The sections below cover what statutory audit actually requires, how it differs from tax audit and internal audit, when Ind AS applies versus regular Indian GAAP, and the recurring filing calendar that good bookkeeping feeds into.
        </p>

        {/* QUICK FACTS */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-10">
          {[
            { icon: ShieldCheck, value: "Every company", label: "No turnover exemption from statutory audit" },
            { icon: CalendarClock, value: "5-year term", label: "Auditor appointment at the AGM" },
            { icon: BookOpenCheck, value: "8 years", label: "Minimum book-of-account retention" },
            { icon: FileText, value: "Apr-Mar", label: "Standard financial year in India" },
          ].map((stat) => (
            <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center cursor-pointer">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
              <div className="text-base font-bold text-[#081a42]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </ClickableReveal>
          ))}
        </div>

        {/* CLICK NAV */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {[
            { href: `#${section.id}`, label: "Our Services" },
            { href: "#statutory-audit", label: "Statutory Audit" },
            { href: "#compliance-calendar", label: "Compliance Calendar" },
            { href: "#how-we-work", label: "How We Work" },
            { href: "#why-au-corporate", label: "Why AU Corporate" },
            { href: "#faqs", label: "FAQs" },
          ].map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
            >
              {nav.label}
            </a>
          ))}
        </div>

        {/* SECTION */}
        <section aria-labelledby={section.id}>
        <Reveal className="mb-20">
          <h2 id={section.id} className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
            Our Services
          </h2>

          {/* GRID */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {section.items.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}

          </div>
        </Reveal>
        </section>

        {/* STATUTORY AUDIT */}
        <section aria-labelledby="statutory-audit">
        <Reveal className="mb-20">
          <h2 id="statutory-audit" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            Statutory Audit in India: What the Companies Act Actually Requires
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed mb-8">
            Every company incorporated in India — private or public, profitable or not, at any turnover — must have its annual financial statements audited by an independent chartered accountant, under Sections 139 and 143 of the Companies Act, 2013. There is no small-company or low-turnover exemption from the audit itself: the board appoints the first auditor within 30 days of incorporation to hold office until the first AGM, and from that AGM onward shareholders appoint the statutory auditor for a five-year term that, since a 2018 amendment, no longer needs annual ratification. What&apos;s easy to conflate — and what we help clients untangle — is that &ldquo;audit&rdquo; in India isn&apos;t one thing:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {auditTypes.map((item) => (
              <ClickableReveal key={item.title} className="rounded-xl border bg-white p-6 cursor-pointer h-full flex flex-col">
                <h3 className="font-bold text-base mb-2 text-[#081a42]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </ClickableReveal>
            ))}
          </div>

          <div className="mt-10 rounded-xl border-l-4 border-yellow-400 bg-white p-6">
            <h3 className="mb-2 text-lg font-bold text-[#081a42]">Ind AS or Regular Indian GAAP: Which Applies to Your Subsidiary?</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              It depends on where your entity sits in the broader Ind AS roadmap, not just its own size. Ind AS — India&apos;s IFRS-converged accounting standard — is mandatory for listed companies and for unlisted companies meeting specified net-worth thresholds under the MCA&apos;s phased roadmap, and once it applies to a company it continues to apply in later years even if the company later falls below the threshold, and typically extends to that company&apos;s Indian holding, subsidiary, joint-venture and associate companies too. A newly incorporated, standalone foreign-owned subsidiary that isn&apos;t itself over the net-worth threshold, and has no Indian holding or associate company already in the Ind AS net, will generally report under regular Indian Accounting Standards for statutory purposes — while often also preparing a separate IFRS or US GAAP reconciliation to feed the parent&apos;s own consolidation, which is a contractual reporting need rather than a statutory one, and is where our IFRS &amp; Ind AS implementation service typically comes in.
            </p>
          </div>

          <div className="mt-6 rounded-xl border-l-4 border-yellow-400 bg-white p-6">
            <h3 className="mb-2 text-lg font-bold text-[#081a42]">Can Your India Entity Follow Your Parent&apos;s Financial Year Instead of April-March?</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Generally, no — not without specific approval. Indian law requires every company to follow an April-to-March financial year (Section 2(41) of the Companies Act, 2013), and the narrow exception that lets a company align its year with a foreign holding, subsidiary, joint-venture or associate company instead requires an application to, and approval from, the National Company Law Tribunal (NCLT) — it isn&apos;t available simply by electing it at incorporation. In practice, most foreign-owned Indian subsidiaries run on the standard April-March year rather than pursue that route, and instead handle any calendar mismatch with the parent through a separate management reporting cycle rather than changing the statutory year itself.
            </p>
          </div>
        </Reveal>
        </section>

        {/* COMPLIANCE CALENDAR */}
        <section aria-labelledby="compliance-calendar">
        <Reveal className="mb-20">
          <h2 id="compliance-calendar" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            The Accounting & Filing Calendar Behind the Numbers
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed mb-8">
            Good bookkeeping isn&apos;t a once-a-year exercise — it&apos;s what makes the recurring filing calendar below possible without a scramble each time it comes around. This sits alongside the one-time, incorporation-linked filings (FC-GPR, the annual FLA return, AOC-4/MGT-7) covered in our <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">company registration compliance roadmap</Link>:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {calendarItems.map((item) => (
              <ClickableReveal key={item.title} className="rounded-xl border bg-white p-6 cursor-pointer h-full flex flex-col">
                <h3 className="font-bold text-base mb-2 text-[#081a42]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </ClickableReveal>
            ))}
          </div>
        </Reveal>
        </section>

        {/* HOW WE WORK */}
        <section aria-labelledby="how-we-work">
        <Reveal className="mb-20">
          <h2 id="how-we-work" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            How the Engagement Actually Works
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed mb-8">
            &ldquo;Outsourced accounting&rdquo; can mean anything from a freelancer entering transactions to a full finance function running on a fixed cadence. For a foreign-owned subsidiary that has to close a statutory audit, a tax return and RoC filings off the same set of books, the cadence matters as much as the task list. Here&apos;s how a typical engagement runs:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step, index) => (
              <ClickableReveal key={step.title} className="rounded-xl border bg-white p-6 cursor-pointer h-full flex flex-col">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">{index + 1}</div>
                <h3 className="font-bold text-base mb-2 text-[#081a42]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </ClickableReveal>
            ))}
          </div>
        </Reveal>
        </section>

        {/* WHY AU CORPORATE */}
        <section aria-labelledby="why-au-corporate">
        <Reveal className="mb-20">
          <h2 id="why-au-corporate" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            Why AU Corporate, Not a Generic Bookkeeping Vendor
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed mb-4">
            A bookkeeping vendor can enter transactions and reconcile bank accounts. Getting a foreign-owned Indian subsidiary through a clean statutory audit, an accurate tax position, and its RoC/FEMA filings in the same year takes accounting, tax, and company-secretarial input working from the same numbers at the same time — which is why our accounting and assurance team sits inside the same firm that handles <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">company registration</Link>, FEMA/RBI reporting, and <Link href="/services/taxation-regulatory" className="text-yellow-700 font-semibold hover:underline">tax advisory</Link> for the same clients.
          </p>
          <p className="text-gray-600 max-w-4xl leading-relaxed">
            In practice that means books built from month one to support the audit, the tax return, and the RBI/RoC filings that draw on them, rather than three separate vendors reconciling after the fact; Ind AS/IFRS-literate reporting where your Indian entity needs to feed into a parent-company consolidation on a different GAAP; and a compliance calendar tracked against your actual incorporation date and AGM date, not a generic reminder list.
          </p>
        </Reveal>
        </section>

        {/* MID-PAGE LEAD FORM */}
        <div className="mb-20">
          <LeadForm title="Need Accounting & Audit Support for Your India Entity?" description="Tell us about your Indian subsidiary's accounting, bookkeeping or statutory audit needs and our accounting & assurance team will get in touch." />
        </div>

        {/* FAQ */}
        <section aria-labelledby="faqs">
        <Reveal className="mb-20">
          <h2 id="faqs" className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </Reveal>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        {/* RELATED */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          <Link href="/india-business-setup/company-formation" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
            <h3 className="mb-2 font-semibold text-[#081a42]">Company Registration</h3>
            <p className="text-sm text-gray-600">Incorporation and the post-incorporation compliance roadmap</p>
          </Link>
          <Link href="/india-business-setup/banking-taxation" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
            <h3 className="mb-2 font-semibold text-[#081a42]">Banking &amp; Taxation</h3>
            <p className="text-sm text-gray-600">Bank account sequencing, GST, and tax registration</p>
          </Link>
          <Link href="/services/taxation-regulatory" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
            <h3 className="mb-2 font-semibold text-[#081a42]">Taxation &amp; Regulatory</h3>
            <p className="text-sm text-gray-600">Direct tax, GST, transfer pricing and FEMA compliance</p>
          </Link>
          <Link href="/outsourcing" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
            <h3 className="mb-2 font-semibold text-[#081a42]">Global Support Services</h3>
            <p className="text-sm text-gray-600">Back-office and finance &amp; accounting outsourcing</p>
          </Link>
        </div>

      </div>
    </div>
  )
}
