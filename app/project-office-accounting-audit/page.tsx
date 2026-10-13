import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"

const heroChecklist = [
  { title: "Fixed Monthly Fee", body: "Confirmed in writing" },
  { title: "3-Day Onboarding", body: "From access to go-live" },
  { title: "Head Office Reporting", body: "US GAAP, IFRS or your format" },
  { title: "Multiple Countries Covered", body: "USA, UK, Singapore, Australia, Germany, Japan and China" },
]

const youGet = [
  "Project-wise books written up and reconciled",
  "Head office account reconciled",
  "TDS and GST workings with due dates",
  "Reporting in your group format",
  "Audit and completion accounts support",
]

const steps = [
  { tag: "Step 1", title: "Monthly Project Accounting", body: "Contract revenue, subcontractor costs, expenses and payroll recorded project-wise." },
  { tag: "Step 2", title: "Bank Reconciliation", body: "Every bank account matched to the books, including remittances from the foreign company." },
  { tag: "Step 3", title: "Head Office Account", body: "Funds received and charges from the foreign company recorded and reconciled." },
  { tag: "Step 4", title: "Work in Progress and Retention", body: "Milestones, retention money, advances and guarantees tracked." },
  { tag: "Step 5", title: "Monthly TDS and GST Workings", body: "Tax to be deducted and net GST liability, with due dates flagged." },
  { tag: "Step 6", title: "Reporting for the Head Office", body: "Monthly pack in US GAAP, IFRS or your group format." },
  { tag: "Once a Year and at Completion", title: "Audit Support and Completion Accounts", body: "Audited accounts, tax audit schedules, the Annual Activity Certificate and completion accounts." },
]

const needFromYou = [
  { n: "1", title: "Access to Records", body: "Bank statements or read-only access, and your existing accounting files." },
  { n: "2", title: "Contract and Budget", body: "The contract, milestones and project budget." },
  { n: "3", title: "Source Documents", body: "Invoices, bills, subcontractor bills and payroll inputs each month." },
  { n: "4", title: "Reporting Format", body: "Your chart of accounts, template and closing calendar." },
  { n: "5", title: "An Approver", body: "One person who approves payments and answers our queries." },
]

const cycle = [
  { stage: "Days 1-4", title: "Book", body: "Record the month's transactions." },
  { stage: "Days 3-5", title: "Bank", body: "Reconcile each bank account." },
  { stage: "Days 5-6", title: "Project Position", body: "Update work in progress and retention." },
  { stage: "Days 6-8", title: "Tax Workings", body: "Calculate TDS and GST." },
  { stage: "Days 8-10", title: "Report", body: "Send the pack to the head office." },
]

const included = [
  "Monthly Project Bookkeeping",
  "Bank Reconciliation",
  "Head Office Account Reconciliation",
  "Work in Progress and Retention Tracking",
  "Monthly TDS and GST Workings",
  "Monthly Reporting Pack",
  "Audit Coordination",
  "Completion Accounts",
]

const afterLinks = [
  { label: "Project Office in India (Complete Guide)", href: "/project-office-in-india" },
  { label: "Project Office Registration", href: "/project-office-registration" },
  { label: "Project Office Tax, GST and Transfer Pricing", href: "/project-office-tax-gst-transfer-pricing" },
  { label: "Project Office FEMA and RBI Compliance", href: "/project-office-fema-rbi-compliance" },
  { label: "ROC Compliance for a Project Office (FC Forms)", href: "/project-office-roc-compliance" },
  { label: "Project Office Payroll and Labour Law Compliance", href: "/project-office-payroll-compliance" },
]

const faqs = [
  { q: "What accounting does a project office in India have to keep?", a: "A project office must keep books of account for the project at its place of business, record transactions with the foreign company, and prepare annual accounts for the ROC, tax authorities and its AD bank. AU Corporate maintains the books monthly, project by project." },
  { q: "Why does project accounting differ from normal accounting?", a: "A project office accounts for one contract, so its books track contract revenue, costs, work in progress, retention money and milestone billing against the project value. AU Corporate sets up a project-wise chart of accounts." },
  { q: "How is revenue recognised for a project office?", a: "Revenue on long contracts is generally recognised as work is performed, such as by the percentage of completion, as the contract and the accounting standard followed require, with tax treatment checked separately. AU Corporate sets up the policy and the monthly workings." },
  { q: "Is an audit mandatory for a project office in India?", a: "In practice, yes. A project office needs audited accounts for its AD bank and ROC filings, a Chartered Accountant's Annual Activity Certificate, and a tax audit where its turnover exceeds the limit. AU Corporate coordinates each of these with the auditor." },
  { q: "How are transactions with the foreign company recorded?", a: "Funds received from the foreign company are recorded in a head office account, and charges from it are recorded as expenses only where allowed. Each item is reconciled to bank and remittance records. AU Corporate maintains this account every month." },
  { q: "How are retention money, advances and bank guarantees accounted for?", a: "Retention money held by the client, advances received and bank guarantees given are tracked separately from revenue and costs, with release dates and conditions. AU Corporate records them against each contract milestone and flags due dates." },
  { q: "Can I get monthly reports in US GAAP, IFRS or my head office format?", a: "Yes. AU Corporate converts the Indian books into your group's chart of accounts and reporting format (US GAAP, IFRS or another standard), including foreign exchange differences, and delivers a monthly pack on your closing calendar." },
  { q: "What does the monthly project reporting pack include?", a: "The pack includes a trial balance, project profit and loss, balance sheet, cash position, head office account, cost against budget, tax liabilities and a payroll summary. AU Corporate can adjust it to your group template." },
  { q: "How quickly will I receive monthly accounts for my project office?", a: "AU Corporate delivers the monthly pack within about 8 to 10 days of the month end, depending on how quickly you share documents. We agree a closing calendar to match your group's timetable." },
  { q: "How long does it take to start accounting for a project office?", a: "AU Corporate normally onboards a project office in about 3 days from receiving access to your records and documents. We review opening balances, map project accounts and set up the monthly calendar." },
  { q: "What are the TDS and GST workings in the monthly accounts?", a: "Each month AU Corporate calculates tax to be deducted on payments to subcontractors, vendors, professionals, rent and salaries, and the net GST liability after input credit, so due dates and amounts are clear before returns are filed." },
  { q: "What accounts are needed when the project is completed?", a: "Closing needs final accounts up to completion, a Chartered Accountant's certificate showing the surplus, and proof that liabilities are paid or provided for. AU Corporate prepares the completion accounts and certificates." },
  { q: "What is the financial year of a project office in India?", a: "For income tax, a project office follows the Indian year from 1 April to 31 March. Its foreign company may use a different year for its own accounts, and the ROC filings follow that year. AU Corporate aligns the two." },
  { q: "Can AU Corporate take over the accounts of my existing project office?", a: "Yes. AU Corporate reviews your records, fixes errors and backlogs, and runs the monthly cycle from an agreed date. AU Corporate handles this for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. We prepare the reporting pack in your home format." },
]

const faqsCol1 = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsCol2 = faqs.slice(Math.ceil(faqs.length / 2))

export default function ProjectOfficeAccountingAuditPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Project Office in India", href: "/project-office-in-india" }, { label: "Project Office Accounting, Reporting and Audit" }]} />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Project Office in India</span>
              <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Accounting, Reporting and Audit Support for Your India Project Office
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Project-wise accounting, head office reconciliation, TDS and GST workings, reporting for the foreign company and audit support through project completion.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="https://cal.com/abhishek-jaiin-ybbklq/30min" target="_blank" rel="noreferrer" className="inline-block rounded-lg bg-gold px-6 py-3 font-bold text-[#081a42] hover:bg-gold-dark transition-colors">
                  Book Consultation with an Expert
                </Link>
                <Link href="#contact" className="inline-block rounded-lg border-2 border-white px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
                  Get a Quote
                </Link>
              </div>
              <p className="text-sm text-white/70">150+ Regular Clients · Chartered Accountants and Company Secretaries · Since 2016</p>
            </div>
            <aside className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <ul className="space-y-4">
                {heroChecklist.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-[#081a42]">✓</span>
                    <div>
                      <strong className="block text-white">{item.title}</strong>
                      <span className="block text-sm text-white/70">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER + INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-r-xl border-l-4 border-gold bg-[#fffbe6] p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Accounting, Reporting and Audit for a Project Office: The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A project office in India must keep project-wise books of account, record transactions with the foreign company, prepare audited accounts for its filings, and report to its head office. AU Corporate, a New Delhi firm of Chartered Accountants and CPAs, runs monthly project bookkeeping, bank and head office reconciliations, work in progress and retention tracking, TDS and GST workings, reporting in US GAAP or IFRS, and audit and completion support, for a fixed monthly fee.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Written and reviewed by <strong className="text-gray-700">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Clean Project Books in India, Reporting Your Head Office Understands</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A project office accounts for one contract, so costs, milestones, retention and tax must be tracked per project, and completion accounts are needed to remit the surplus — see the{" "}
                <Link href="/project-office-in-india" className="text-gold-dark font-semibold hover:underline">Project Office in India guide</Link>{" "}
                for how this fits into the wider compliance picture.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate runs the cycle for you: bookkeeping, month-end close, reporting and audit coordination, reviewed by Chartered Accountants.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">You Get</h3>
              <ul className="space-y-3">
                {youGet.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-gold" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do for You, Step by Step</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The accounting steps a project office follows each month, plus audit support once a year.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((item) => (
              <div key={item.title} className="p-6 bg-white border rounded-lg">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7a5c00] bg-[#fffbe6] px-2 py-0.5 rounded mb-3">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEED FROM YOU */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Need from You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Five items to get started. Share them on day one, and onboarding is typically complete in about 3 days.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {needFromYou.map((item) => (
              <div key={item.n} className="p-6 bg-secondary/20 border rounded-lg">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#081a42] text-sm font-bold text-gold">{item.n}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CYCLE */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How the Monthly Cycle Works</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The same steps every month, so your head office knows when to expect the numbers.</p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {cycle.map((step) => (
              <li key={step.stage} className="border-t-4 border-gold bg-white rounded-b-lg p-5 shadow-sm">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7a5c00] bg-[#fffbe6] px-2 py-0.5 rounded mb-2">{step.stage}</span>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Fixed monthly fee, confirmed in writing before we start.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-secondary/20 border rounded-lg p-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#081a42] text-xs font-bold text-gold">✓</span>
                <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            <strong>Not included:</strong> the auditor&apos;s own fee, government fees, and filing of tax returns, which are separate services from the same team — see{" "}
            <Link href="/project-office-tax-gst-transfer-pricing" className="text-gold-dark font-semibold hover:underline">Project Office Tax, GST and Transfer Pricing</Link>.
          </p>
        </div>
      </section>

      {/* AFTER / CROSS-LINKS */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex-1 min-w-[260px]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">One Team for the Rest of Your Project Office Compliance</h2>
              <p className="text-gray-600">Your project office accounts, tax returns, RBI filings and ROC forms must agree with each other. The same team handles each of them.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {afterLinks.map((link) => (
                <Link key={link.href} href={link.href} className="inline-block rounded-full border border-[#081a42] px-5 py-2.5 text-sm font-semibold text-[#081a42] hover:bg-[#081a42] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Questions Before You Start</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-2">Straight answers to the questions foreign finance teams ask most about a project office in India.</p>
          <p className="text-sm text-gray-500 text-center">
            Written and reviewed by <strong className="text-gray-700">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
          </p>
          <p className="text-sm text-gray-500 text-center mb-10">This is general guidance based on Indian law and practice as at the date above. It is not advice for your specific case, and rules can change.</p>
          <div className="grid sm:grid-cols-2 gap-x-10">
            <FaqAccordion faqs={faqsCol1} />
            <FaqAccordion faqs={faqsCol2} />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* LEAD FORM */}
      <section className="py-16 bg-secondary/50" id="contact">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Need Monthly Accounting and Audit Support for Your Project Office?"
            description="Tell us about your project office's reporting format and head office requirements, and our team will confirm onboarding and a fixed monthly fee."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Project Office Accounting, Reporting and Audit",
            description:
              "Project-wise accounting, head office reconciliation, retention and work in progress, TDS and GST workings, reporting in US GAAP or IFRS and audit support for the India project office.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/project-office-accounting-audit",
            areaServed: "India",
            serviceType: "Project Office Accounting, Reporting and Audit",
          }),
        }}
      />
    </main>
  )
}
