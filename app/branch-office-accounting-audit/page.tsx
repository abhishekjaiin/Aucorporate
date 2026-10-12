import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"

const steps = [
  { tag: "Step 1", title: "Monthly Accounting and Bookkeeping", body: "Sales, purchases, expenses and payroll recorded from your source documents." },
  { tag: "Step 2", title: "Bank Reconciliation", body: "Every bank account matched to the books, including remittances from the head office." },
  { tag: "Step 3", title: "Head Office Account", body: "Funds received and charges from the head office recorded and reconciled." },
  { tag: "Step 4", title: "Fixed Assets", body: "Asset register and depreciation worked out for the books and for tax." },
  { tag: "Step 5", title: "Monthly TDS and GST Workings", body: "Tax to be deducted and net GST liability, with due dates flagged." },
  { tag: "Step 6", title: "Reporting for the Head Office", body: "Monthly pack in US GAAP, IFRS or your group format." },
  { tag: "Once a Year", title: "Audit Support", body: "Audited accounts, tax audit schedules and the Annual Activity Certificate coordinated." },
]

const needFromYou = [
  { n: "1", title: "Access to Records", body: "Bank statements or read-only access, and your existing accounting files." },
  { n: "2", title: "Source Documents", body: "Invoices, bills, expense claims and payroll inputs each month." },
  { n: "3", title: "Head Office Reporting Format", body: "Your chart of accounts, template and closing calendar." },
  { n: "4", title: "Past Financials", body: "Earlier audited accounts and tax filings for an existing branch office." },
  { n: "5", title: "An Approver", body: "One person who approves payments and answers our queries." },
]

const cycle = [
  { stage: "Days 1-4", title: "Book", body: "Record the month's transactions." },
  { stage: "Days 3-5", title: "Bank", body: "Reconcile each bank account." },
  { stage: "Days 5-6", title: "Head Office Account", body: "Reconcile funds and charges." },
  { stage: "Days 6-8", title: "Tax Workings", body: "Calculate TDS and GST." },
  { stage: "Days 8-10", title: "Report", body: "Send the pack to the head office." },
]

const included = [
  "Monthly Bookkeeping",
  "Bank Reconciliation",
  "Head Office Account Reconciliation",
  "Fixed Asset Register",
  "Monthly TDS and GST Workings",
  "Monthly Reporting Pack",
  "Audit Coordination",
  "Annual Activity Certificate Support",
]

const faqs = [
  { q: "What accounting does a branch office in India have to keep?", a: "A branch office must keep books of account for its Indian business at its place of business, record transactions with the head office, and prepare annual accounts for the ROC, tax authorities and its AD bank. AU Corporate maintains the books monthly." },
  { q: "How is a branch office's accounting different from a subsidiary's?", a: "A branch office is part of the foreign company, so its books include a head office account instead of share capital, and there is no separate company-law audit. It still needs audited accounts for filings. AU Corporate sets up the books accordingly." },
  { q: "Is an audit mandatory for a branch office in India?", a: "In practice, yes. A branch office needs audited accounts for its AD bank and ROC filings, a Chartered Accountant's Annual Activity Certificate, and a tax audit where its turnover exceeds the limit. AU Corporate coordinates each of these with the auditor." },
  { q: "How are transactions with the head office recorded in India?", a: "Funds received from the head office are recorded in a head office account, and charges from the head office are recorded as expenses only where allowed. Each item is reconciled to bank and remittance records. AU Corporate maintains this account every month." },
  { q: "Can head office expenses be claimed in the branch office's accounts?", a: "Only within limits. Deduction for head office expenses allocated to the branch office is capped under the income tax law, and payments need tax analysis. AU Corporate separates allowed and disallowed amounts in the books." },
  { q: "Can I get monthly reports in US GAAP, IFRS or my head office format?", a: "Yes. AU Corporate converts the Indian books into your group's chart of accounts and reporting format (US GAAP, IFRS or another standard), including foreign exchange differences, and delivers a monthly pack on your closing calendar." },
  { q: "What does the monthly reporting pack for the head office include?", a: "The pack includes a trial balance, profit and loss, balance sheet, cash and bank position, head office account, tax liabilities and a payroll summary. AU Corporate can adjust it to your group template." },
  { q: "How quickly will I receive monthly accounts for my branch office?", a: "AU Corporate delivers the monthly pack within about 8 to 10 days of the month end, depending on how quickly you share documents. We agree a closing calendar to match your group's timetable." },
  { q: "How long does it take to start accounting for a branch office?", a: "AU Corporate normally onboards a branch office in about 3 days from receiving access to your records and documents. We review opening balances, map accounts and set up the monthly calendar." },
  { q: "Which accounting software can a branch office use?", a: "A branch office can use any reliable software, such as Tally, Zoho Books, QuickBooks or Xero, or its group system. AU Corporate works with your chosen software and keeps backup records in India." },
  { q: "What are the TDS and GST workings in the monthly accounts?", a: "Each month AU Corporate calculates tax to be deducted on payments to vendors, professionals, rent and salaries, and the net GST liability after input credit, so the due dates and amounts are clear before returns are filed." },
  { q: "What does audit support for a branch office cover?", a: "AU Corporate prepares schedules and working papers, answers auditor queries and coordinates the audit of the branch office accounts, the tax audit and the Annual Activity Certificate, so each is closed on time." },
  { q: "What is the financial year of a branch office in India?", a: "For income tax, a branch office follows the Indian year from 1 April to 31 March. Its foreign company may use a different year for its own accounts, and the ROC filings follow that year. AU Corporate aligns the two." },
  { q: "Can AU Corporate take over the accounts of my existing branch office?", a: "Yes. AU Corporate reviews your records, fixes errors and backlogs, and runs the monthly cycle from an agreed date. AU Corporate handles this for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. We prepare the reporting pack in your home format." },
]

export default function BranchOfficeAccountingAuditPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Branch Office in India", href: "/branch-office-in-india" }, { label: "Accounting, Reporting and Audit" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">Branch Office in India</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold md:text-5xl">
            Accounting, Reporting and Audit Support for Your India Branch Office
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-white/85">
            Monthly accounting, head office account reconciliation, TDS and GST workings, reporting for the head office and audit support.
          </p>
          <p className="text-white/70 leading-relaxed">
            A branch office in India must keep books of account for its Indian business, record transactions with the head office, prepare audited accounts for its filings, and report to the head office. AU Corporate runs monthly bookkeeping, bank and head office reconciliations, TDS and GST workings, reporting in US GAAP or IFRS, and audit support, for a fixed monthly fee.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Clean Books in India, Reporting Your Head Office Understands</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A branch office has no share capital, so its books centre on the head office account and the Indian taxes it must follow — see the{" "}
            <Link href="/branch-office-in-india" className="text-gold-dark font-semibold hover:underline">Branch Office in India guide</Link>{" "}
            for how this fits into the wider compliance picture. Part-time bookkeeping often leaves gaps.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            AU Corporate runs the cycle for you: bookkeeping, month-end close, reporting and audit coordination, reviewed by Chartered Accountants.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Books written up and reconciled</li>
            <li>Head office account reconciled</li>
            <li>TDS and GST workings with due dates</li>
            <li>Reporting in your group format</li>
            <li>Audit and Annual Activity Certificate support</li>
          </ul>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do for You, Step by Step</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The accounting steps a branch office follows each month, plus audit support once a year.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((item) => (
              <div key={item.title} className="p-6 bg-white border rounded-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
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
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CYCLE */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How the Monthly Cycle Works</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The same steps every month, so your head office knows when to expect the numbers.</p>
          <ol className="space-y-4">
            {cycle.map((step) => (
              <li key={step.stage} className="p-5 border-l-4 border-gold bg-white rounded-r-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">{step.stage}</span>
                <h3 className="font-bold text-gray-900 mt-1 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Fixed monthly fee, confirmed in writing before work starts.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 bg-secondary/20 border rounded-lg p-3 text-sm">
                <span className="text-gold-dark font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            <strong>Not included:</strong> the auditor&apos;s own fee, government fees, and filing of tax returns, which are separate services from the same team — see{" "}
            <Link href="/branch-office-tax-gst-transfer-pricing" className="text-gold-dark font-semibold hover:underline">Branch Office Tax, GST and Transfer Pricing</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
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
      <section className="py-16 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Need Monthly Accounting and Audit Support for Your Branch Office?"
            description="Tell us about your branch office's reporting format and head office requirements, and our team will confirm onboarding and a fixed monthly fee."
          />
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "Branch Office in India (Complete Guide)",
                href: "/branch-office-in-india",
                description: "The full hub guide to RBI approval, eligibility, permitted activities, tax and closure.",
              },
              {
                label: "Branch Office Registration",
                href: "/branch-office-registration",
                description: "Form FNC, RBI/AD-bank approval, UIN and ROC Form FC-1 for setting up a new branch office.",
              },
              {
                label: "Branch Office Tax, GST and Transfer Pricing",
                href: "/branch-office-tax-gst-transfer-pricing",
                description: "Foreign-company tax rate, advance tax, TDS, GST and transfer pricing for the branch.",
              },
              {
                label: "Branch Office FEMA and RBI Compliance",
                href: "/branch-office-fema-rbi-compliance",
                description: "Annual Activity Certificate, profit remittance, additional offices, compounding and closure.",
              },
              {
                label: "ROC Compliance for Foreign Companies (FC Forms)",
                href: "/foreign-company-roc-compliance",
                description: "Form FC-1 registration, FC-2 changes, FC-3 accounts and FC-4 annual return.",
              },
              {
                label: "Branch Office Payroll and Labour Law Compliance",
                href: "/branch-office-payroll-compliance",
                description: "Payroll, EPF/ESIC, professional tax, Labour Codes compliance and FRRO support for expats.",
              },
              {
                label: "Accounting and Assurance Services",
                href: "/services/accounting-assurance",
                description: "AU Corporate's broader audit, reporting and compliance-assurance services.",
              },
            ]}
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Branch Office Accounting, Reporting and Audit",
            description:
              "Monthly accounting, head office reconciliation, TDS and GST workings, reporting in US GAAP or IFRS and audit support for the India branch office of a foreign company.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/branch-office-accounting-audit",
            areaServed: "India",
            serviceType: "Branch Office Accounting, Reporting and Audit",
          }),
        }}
      />
    </main>
  )
}
