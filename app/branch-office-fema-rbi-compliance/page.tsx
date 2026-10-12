import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"

const handledFilings = [
  { tag: "Before You Start", title: "Form FNC Application", body: "Eligibility check, Form FNC and documents for the AD bank or RBI, and the UIN." },
  { tag: "After Approval", title: "Bank Account and Remittances", body: "Account-opening support and records of every inward remittance from the head office." },
  { tag: "Every Year", title: "Annual Activity Certificate", body: "Audited accounts and a Chartered Accountant's certificate to the AD bank." },
  { tag: "When Profit Is Remitted", title: "Profit Remittance", body: "Tax certificates, CA certificate and bank declarations before each remittance." },
  { tag: "When Fees Are Paid Abroad", title: "Payments to the Head Office", body: "Forms 15CA and 15CB and tax analysis for fees, royalties and cost allocations." },
  { tag: "When You Expand", title: "Additional Offices", body: "Fresh Form FNC with the justification for each additional office." },
  { tag: "When Something Went Wrong", title: "Compounding", body: "Review of past filings and compounding applications to the RBI." },
  { tag: "At the End", title: "Closure", body: "Winding-up approvals, certificates and remittance of closing proceeds." },
]

const needFromYou = [
  { n: "1", title: "Approval Letter", body: "The AD bank or RBI approval letter with the UIN." },
  { n: "2", title: "Remittance Records", body: "Foreign inward remittance certificates for each remittance." },
  { n: "3", title: "Audited Accounts", body: "The latest audited accounts of the branch office." },
  { n: "4", title: "Bank Access", body: "The AD bank contact and the account for foreign remittances." },
  { n: "5", title: "Head Office Documents", body: "Constitutional documents and the latest audited accounts of the parent." },
]

const calendar = [
  { when: "Before setting up", what: "Form FNC and approval" },
  { when: "After approval", what: "UIN recorded and bank account opened" },
  { when: "Each remittance", what: "Inward remittance records; profit remittance paperwork" },
  { when: "By 30 September", what: "Annual Activity Certificate with audited accounts" },
  { when: "When an office is added", what: "Fresh Form FNC" },
]

const included = [
  "Review of Past FEMA Filings",
  "Form FNC Preparation and Filing",
  "UIN and Approval Records",
  "Annual Activity Certificate",
  "Profit Remittance Paperwork",
  "Forms 15CA and 15CB",
  "Compounding Applications",
  "A FEMA Calendar with Reminders",
]

const faqs = [
  { q: "What is FEMA compliance for a branch office in India?", a: "A branch office of a foreign company must follow the Foreign Exchange Management Act, 1999 (FEMA) and the 2016 Regulations on establishing branch offices. This means working only within permitted activities, using its designated bank account, receiving funds from abroad through banks, and filing an Annual Activity Certificate. AU Corporate manages each step." },
  { q: "What is Form FNC for a branch office?", a: "Form FNC is the application a foreign company files with an authorised dealer (AD) Category-I bank, or the RBI where needed, to set up a branch office in India. It gives the parent's details, net worth, activities and funding. AU Corporate prepares it with the supporting documents." },
  { q: "What is the UIN of a branch office?", a: "The Unique Identification Number (UIN) is a number allotted to a branch office once it is approved. The branch office quotes it in dealings with banks and authorities. AU Corporate records the UIN and keeps the approval letter in your compliance file." },
  { q: "What is the Annual Activity Certificate and when is it due?", a: "A branch office submits an Annual Activity Certificate from a Chartered Accountant, with audited accounts, to its AD bank, normally by 30 September, confirming that it carried out only permitted activities. AU Corporate prepares the certificate and the accounts, and confirms the date applicable each year." },
  { q: "How is a branch office funded from the head office?", a: "A branch office is funded by inward remittances from the head office through banking channels, and its expenses are met from those remittances or its own earnings from permitted activities. AU Corporate keeps the remittance records and bank certificates each year." },
  { q: "Can a branch office send its profit to the head office?", a: "Yes. A branch office can remit its net profit to the head office through its AD bank after paying tax, on audited accounts and a Chartered Accountant's certificate. AU Corporate prepares the certificate and the bank paperwork before each remittance." },
  { q: "Can the head office charge the branch office for services or expenses?", a: "Yes, but payments to the head office, such as service fees, royalties or cost allocations, need tax analysis, bank paperwork (Forms 15CA and 15CB) and a claim limited under the income tax law. AU Corporate reviews each payment type before it is remitted." },
  { q: "Can a foreign company open more than one branch office in India?", a: "Yes. An existing branch office's parent files a fresh Form FNC with its AD bank explaining why an additional office is needed. AU Corporate prepares the justification and the application, and tracks each office's UIN and Annual Activity Certificate separately." },
  { q: "Which applicants need prior RBI approval for a branch office?", a: "Applicants from Pakistan, Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong and Macau need prior RBI approval, and sectors such as defence, telecom and broadcasting need Government clearance. Sri Lanka applicants also register with the State Police. Russian applicants use the general AD bank route." },
  { q: "What happens if a branch office misses a FEMA filing?", a: "A missed report or certificate can lead to a contravention that needs to be regularised, often through compounding with the RBI, with a fee based on the amount and delay. AU Corporate reviews past filings, prepares compounding applications and sets a calendar to avoid repeats." },
  { q: "How do we close a branch office in India?", a: "Closing a branch office needs AD bank permission, a Chartered Accountant's certificate that all liabilities are paid or provided for, tax clearance, and the ROC and RBI formalities, before winding-up proceeds can be remitted. AU Corporate manages the closure from the first step to the final remittance." },
  { q: "Can a branch office be converted into an Indian subsidiary?", a: "It can be, with approvals under FEMA and the foreign investment rules, and the branch office's assets and liabilities move to the new company on agreed terms. Tax consequences need advice first. AU Corporate maps the steps and costs for your case." },
  { q: "Are the FEMA rules for branch offices changing?", a: "They may be. In October 2025 the RBI released draft regulations that would remove net worth and track-record tests and simplify additional offices and remittances. They were not confirmed as notified when this page was reviewed, so AU Corporate applies the 2016 Regulations and checks for updates." },
  { q: "Can AU Corporate take over FEMA compliance for my existing branch office?", a: "Yes. AU Corporate reviews your approval letter, UIN, remittances and past certificates, fixes any gaps, and then runs the annual calendar. AU Corporate handles this for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. We also handle compounding where earlier filings were missed." },
]

export default function BranchOfficeFemaRbiCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Branch Office in India", href: "/branch-office-in-india" }, { label: "FEMA and RBI Compliance" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">Branch Office in India</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold md:text-5xl">
            FEMA and RBI Compliance for Your India Branch Office
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-white/85">
            Form FNC, UIN, Annual Activity Certificate, profit remittance, compounding and closure for the branch office of your foreign company.
          </p>
          <p className="text-white/70 leading-relaxed">
            A branch office in India operates under FEMA and the RBI-approved terms of its Form FNC. It must receive funds through banking channels, stay within permitted activities, file an Annual Activity Certificate from a Chartered Accountant with its AD bank each year, and remit profit only after tax with the proper certificates.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">FEMA Compliance Without the Penalties</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FEMA compliance is separate from company law and tax. A missed certificate or an improper remittance can lead to compounding and delay later transactions. See the{" "}
            <Link href="/branch-office-in-india" className="text-gold-dark font-semibold hover:underline">Branch Office in India guide</Link>{" "}
            for the eligibility and approval framework this ongoing compliance sits on top of.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            AU Corporate keeps a live record of your approval, remittances and filings, and prepares every certificate before it is due.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Annual Activity Certificate filed every year</li>
            <li>Profit remittances cleared with the right paperwork</li>
            <li>Remittance records for each year</li>
            <li>Additional office applications prepared</li>
            <li>A filing register for banks and auditors</li>
          </ul>
        </div>
      </section>

      {/* FILINGS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Handle, Filing by Filing</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The FEMA and RBI work a branch office needs, in the order it arises.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {handledFilings.map((item) => (
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
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin. For an existing branch office, we start with a review of what has been filed.</p>
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

      {/* CALENDAR */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The FEMA and RBI Calendar for a Branch Office</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when. Dates can change by notification, so we confirm those that apply to your branch office.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold">When</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">What</th>
                </tr>
              </thead>
              <tbody>
                {calendar.map((row, i) => (
                  <tr key={row.when} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="border border-gray-300 p-4 font-semibold text-sm whitespace-nowrap">{row.when}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Reasonable fees, confirmed in writing before work starts.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 bg-secondary/20 border rounded-lg p-3 text-sm">
                <span className="text-gold-dark font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            <strong>Not included:</strong> compounding fees payable to the RBI, bank charges, and tax and ROC filings, which are separate services from the same team — see{" "}
            <Link href="/branch-office-tax-gst-transfer-pricing" className="text-gold-dark font-semibold hover:underline">Branch Office Tax, GST and Transfer Pricing</Link>{" "}
            and{" "}
            <Link href="/foreign-company-roc-compliance" className="text-gold-dark font-semibold hover:underline">ROC Compliance for Foreign Companies</Link>.
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
            title="Need Ongoing FEMA and RBI Compliance for Your Branch Office?"
            description="Tell us about your branch office's approval date and remittance history, and our team will confirm the Annual Activity Certificate and filing calendar for your situation."
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
                label: "Branch Office Accounting, Reporting and Audit",
                href: "/branch-office-accounting-audit",
                description: "Monthly bookkeeping, head office account reconciliation and audit support.",
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
                label: "Ongoing Regulatory Compliance",
                href: "/india-business-setup/regulatory-compliance",
                description: "The broader FEMA/FDI compliance landscape for entities carrying foreign investment.",
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
            name: "Branch Office FEMA and RBI Compliance",
            description:
              "Form FNC, UIN, Annual Activity Certificate, profit remittance, additional offices, compounding and closure for the India branch office of a foreign company.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/branch-office-fema-rbi-compliance",
            areaServed: "India",
            serviceType: "Branch Office FEMA and RBI Compliance",
          }),
        }}
      />
    </main>
  )
}
