import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"
import { AuthorLink } from "@/components/AuthorLink"

const heroChecklist = [
  { title: "Every RBI Date Tracked", body: "One clear calendar" },
  { title: "Annual Activity Certificate", body: "Prepared with the auditor" },
  { title: "Extension Tracked", body: "Before approval expires" },
  { title: "Multiple Countries Covered", body: "USA, UK, Singapore, Australia, Germany, Japan and China" },
]

const youGet = [
  "Annual Activity Certificate every year",
  "Extension before the approval expires",
  "Remittance records for each year",
  "Additional office applications",
  "A filing register for banks and auditors",
]

const handledFilings = [
  { tag: "Before You Start", title: "Form FNC Application", body: "Eligibility check, Form FNC and documents for the AD bank or RBI, and the UIN." },
  { tag: "After Approval", title: "Bank Account and Remittances", body: "Account opening support and records of every remittance." },
  { tag: "Every Year", title: "Annual Activity Certificate", body: "Audited accounts and a Chartered Accountant's certificate to the AD bank." },
  { tag: "Before Expiry", title: "Extension of Approval", body: "Extension request to the AD bank." },
  { tag: "When You Expand", title: "Additional Offices", body: "Fresh Form FNC with the justification." },
  { tag: "When Something Went Wrong", title: "Compounding", body: "Review of past filings and compounding applications." },
  { tag: "At the End", title: "Closure", body: "Approvals, certificates and remittance of remaining funds." },
]

const needFromYou = [
  { n: "1", title: "Approval Letter", body: "The AD bank or RBI approval letter with the UIN." },
  { n: "2", title: "Remittance Records", body: "Foreign inward remittance certificates for each remittance." },
  { n: "3", title: "Accounts", body: "The liaison office's accounts and expenses for the year." },
  { n: "4", title: "Bank Access", body: "The AD bank contact and the account for foreign remittances." },
  { n: "5", title: "Head Office Documents", body: "Constitutional documents and latest audited accounts of the parent." },
]

const calendar = [
  { when: "Before setting up", what: "Form FNC and approval", help: "Prepared and filed" },
  { when: "Each remittance", what: "Inward remittance records", help: "Prepared" },
  { when: "By 30 September", what: "Annual Activity Certificate with audited accounts", help: "Prepared and filed" },
  { when: "Before approval expires", what: "Extension request", help: "Prepared and filed" },
  { when: "At closure", what: "Closure and remittance of remaining funds", help: "Prepared and filed" },
]

const included = [
  "Review of Past FEMA Filings",
  "Form FNC Preparation and Filing",
  "UIN and Approval Records",
  "Annual Activity Certificate",
  "Extension of Approval",
  "Additional Office Applications",
  "Compounding Applications",
  "A FEMA Calendar",
]

const afterLinks = [
  { label: "Liaison Office Registration", href: "/liaison-office-registration" },
  { label: "Liaison Office Payroll and Labour Law Compliance", href: "/liaison-office-payroll-compliance" },
  { label: "ROC Compliance for a Liaison Office (FC Forms)", href: "/liaison-office-roc-compliance" },
  { label: "Liaison Office Accounting, Reporting and Audit", href: "/liaison-office-accounting-audit" },
  { label: "Liaison Office Tax Compliance", href: "/liaison-office-tax-compliance" },
]

const faqs = [
  { q: "What is FEMA compliance for a liaison office in India?", a: "A liaison office must follow the Foreign Exchange Management Act, 1999 (FEMA) and the 2016 Regulations. This means doing only the permitted liaison tasks, earning no income, funding all costs by inward remittance through banks, and filing an Annual Activity Certificate. AU Corporate manages each step." },
  { q: "What is Form FNC for a liaison office?", a: "Form FNC is the application a foreign company files with an authorised dealer (AD) Category-I bank, or the RBI where needed, to set up a liaison office in India. It gives the parent's details, net worth, tasks and funding. AU Corporate prepares it with the supporting documents." },
  { q: "What is the UIN of a liaison office?", a: "The Unique Identification Number (UIN) is a number allotted to a liaison office once it is approved. The office quotes it in dealings with banks and authorities. AU Corporate records the UIN and keeps the approval letter in your compliance file." },
  { q: "What is the Annual Activity Certificate for a liaison office?", a: "A liaison office submits an Annual Activity Certificate from a Chartered Accountant with its audited accounts to its AD bank, normally by 30 September, confirming that it carried out only permitted activities and met its expenses from remittances. AU Corporate prepares it and confirms the date applicable each year." },
  { q: "How is a liaison office funded?", a: "A liaison office is funded only by inward remittances from the head office through banking channels, and all its expenses are met from them. It cannot earn any income. AU Corporate keeps the remittance certificates and reconciles them to expenses." },
  { q: "Can a liaison office open a bank account and receive payments?", a: "A liaison office can open an account with an AD bank for remittances from its head office and for its expenses. It cannot receive payments, fees or commission for the parent's business. AU Corporate guides the account opening." },
  { q: "How do we extend a liaison office approval?", a: "A liaison office approval is normally for a limited period, typically three years, and the extension is requested from the AD bank before it expires, with the Annual Activity Certificates and accounts. AU Corporate tracks the expiry and prepares the extension." },
  { q: "Can a foreign company open more than one liaison office in India?", a: "Yes, with fresh approval. The parent files a new Form FNC with its AD bank explaining why an additional office is needed. AU Corporate prepares the justification and tracks each office's UIN and certificate separately." },
  { q: "Which applicants need prior RBI approval for a liaison office?", a: "Applicants from Pakistan, Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong and Macau need prior RBI approval, and financial-sector and some other sectors need the relevant regulator's clearance. Sri Lanka applicants also register with the State Police. Russian applicants use the general AD bank route." },
  { q: "What happens if a liaison office does business or earns income?", a: "This is a contravention of the approval. It can lead to compounding with the RBI, tax exposure because the office may be treated as a permanent establishment, and problems with extension or closure. AU Corporate reviews activities and corrects the position early." },
  { q: "What happens if a liaison office misses a FEMA filing?", a: "A missed report or certificate can lead to a contravention that needs to be regularised, often through compounding with the RBI, with a fee based on the amount and delay. AU Corporate reviews past filings, prepares compounding applications and sets a calendar to avoid repeats." },
  { q: "How do we close a liaison office in India?", a: "Closing a liaison office needs AD bank permission, a Chartered Accountant's certificate that liabilities are paid, tax and ROC clearances, and then any remaining funds can be remitted to the head office. AU Corporate manages the closure from the first step to the final remittance." },
  { q: "Are the FEMA rules for liaison offices changing?", a: "They may be. In October 2025 the RBI released draft regulations on setting up offices in India by foreign entities. They were not confirmed as notified when this page was reviewed, so AU Corporate applies the 2016 Regulations and checks for updates." },
  { q: "Can AU Corporate take over FEMA compliance for my existing liaison office?", a: "Yes. AU Corporate reviews your approval, remittances and past certificates, fixes any gaps, and then runs the annual calendar. AU Corporate handles this for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. We also handle compounding where earlier filings were missed." },
]

const faqsCol1 = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsCol2 = faqs.slice(Math.ceil(faqs.length / 2))

export default function LiaisonOfficeFemaRbiCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Liaison Office FEMA and RBI Compliance" }]} />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Liaison Office in India</span>
              <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                FEMA and RBI Compliance for Your India Liaison Office
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Form FNC, Annual Activity Certificate, extension of approval, compounding and closure for the liaison office of your foreign company.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="https://cal.com/abhishek-jaiin-ybbklq/30min" target="_blank" rel="noreferrer" className="inline-block rounded-lg bg-gold px-6 py-3 font-bold text-[#081a42] hover:bg-gold-dark transition-colors">
                  Book Consultation with an Expert
                </Link>
                <InquiryTrigger className="inline-block rounded-lg border-2 border-white px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
                  Get a Quote
                </InquiryTrigger>
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">FEMA and RBI Compliance for a Liaison Office: The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A liaison office in India operates under FEMA and the terms of its Form FNC approval. It must carry out only liaison tasks, earn no income, fund all expenses by inward remittance through banks, file an Annual Activity Certificate from a Chartered Accountant with its AD bank each year, and extend its approval before it expires. AU Corporate, a New Delhi firm of Chartered Accountants and Company Secretaries, prepares and files all of this.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Written and reviewed by <AuthorLink className="font-semibold text-gray-700 hover:underline" />, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">FEMA Compliance Without the Penalties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A missed certificate, an expired approval or any income earned can lead to compounding and delay extension and closure — see the{" "}
                <Link href="/liaison-office-registration" className="text-gold-dark font-semibold hover:underline">Liaison Office Registration guide</Link>{" "}
                for the eligibility and approval framework this ongoing compliance sits on top of.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate keeps a live record of your approval, remittances and filings, and prepares every certificate before it is due.
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

      {/* FILINGS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Handle, Filing by Filing</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The FEMA and RBI work a liaison office needs, in the order it arises.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {handledFilings.map((item) => (
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
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin. For an existing liaison office, we start with a review of what has been filed.</p>
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

      {/* CALENDAR */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The FEMA and RBI Calendar for a Liaison Office</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when. Dates can change by notification, so we confirm those that apply to your liaison office.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white">
              <thead className="bg-[#081a42] text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold">When</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">What</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">How AU Helps</th>
                </tr>
              </thead>
              <tbody>
                {calendar.map((row, i) => (
                  <tr key={row.when} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="border border-gray-300 p-4 font-semibold text-sm whitespace-nowrap">{row.when}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.what}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.help}</td>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Reasonable fees, confirmed in writing before we start.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-secondary/20 border rounded-lg p-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#081a42] text-xs font-bold text-gold">✓</span>
                <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            <strong>Not included:</strong> compounding fees payable to the RBI, bank charges, and tax and ROC filings, which are separate services from the same team — see{" "}
            <Link href="/liaison-office-tax-compliance" className="text-gold-dark font-semibold hover:underline">Liaison Office Tax Compliance</Link>{" "}
            and{" "}
            <Link href="/liaison-office-roc-compliance" className="text-gold-dark font-semibold hover:underline">ROC Compliance for a Liaison Office</Link>.
          </p>
        </div>
      </section>

      {/* AFTER / CROSS-LINKS */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex-1 min-w-[260px]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">One Team for the Rest of Your Liaison Office Compliance</h2>
              <p className="text-gray-600">Your liaison office accounts, tax returns, RBI filings and ROC forms must agree with each other. The same team handles each of them.</p>
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
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-2">Straight answers to the questions foreign finance teams ask most about a liaison office in India.</p>
          <p className="text-sm text-gray-500 text-center">
            Written and reviewed by <AuthorLink className="font-semibold text-gray-700 hover:underline" />, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
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
            title="Need Ongoing FEMA and RBI Compliance for Your Liaison Office?"
            description="Tell us about your liaison office's approval date and remittance history, and our team will confirm the Annual Activity Certificate and extension calendar for your situation."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Liaison Office FEMA and RBI Compliance",
            description:
              "Form FNC, UIN, Annual Activity Certificate, extension, additional offices, compounding and closure for the India liaison office of a foreign company.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/liaison-office-fema-rbi-compliance",
            areaServed: "India",
            serviceType: "Liaison Office FEMA and RBI Compliance",
          }),
        }}
      />
    </main>
  )
}
