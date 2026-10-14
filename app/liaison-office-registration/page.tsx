import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"

const heroChecklist = [
  { title: "Fixed Written Quote", body: "Confirmed before we start" },
  { title: "Permitted Tasks Reviewed", body: "So the office stays compliant" },
  { title: "ROC Registration", body: "Form FC-1 within 30 days" },
  { title: "Multiple Countries Covered", body: "USA, UK, Singapore, Australia, Germany, Japan and China" },
]

const youGet = [
  "Eligibility and route check",
  "Review of planned tasks against the permitted list",
  "Form FNC filed and followed up",
  "Form FC-1 filed with the ROC",
  "PAN, TAN and bank account support",
]

const permittedActivities = [
  { tag: "Can Do", title: "Represent the Parent", body: "Act for the parent or group companies in India, and be their point of contact." },
  { tag: "Can Do", title: "Promote Exports and Imports", body: "Introduce suppliers and buyers and pass on information between India and the parent's country." },
  { tag: "Can Do", title: "Promote Collaborations", body: "Promote technical or financial collaborations between the group and Indian companies." },
  { tag: "Can Do", title: "Be a Communication Channel", body: "Relay messages and information between the parent and Indian companies." },
  { tag: "Cannot Do", title: "Business or Income", body: "No trading, selling, invoicing, commission or fees, and no income of any kind in India." },
]

const comparisonRows = [
  { point: "Purpose", lo: "Represent the parent; no commercial activity", bo: "Carry on the parent's permitted business", po: "Execute one contract awarded by an Indian company" },
  { point: "Can earn income", lo: "No", bo: "Yes, from permitted activities", po: "Yes, from the project" },
  { point: "Funding", lo: "Remittances from the parent only", bo: "Remittances and own earnings", po: "Remittances and project receipts" },
  { point: "Approval", lo: "AD bank via Form FNC; RBI for some applicants", bo: "FEMA approval with eligibility tests", po: "General permission via AD bank if conditions are met" },
  { point: "Duration", lo: "Approved period, extendable", bo: "No fixed end", po: "For the project only" },
  { point: "Main filings", lo: "FNC, AAC, ROC FC forms", bo: "FNC, AAC, ROC FC forms", po: "FNC, AAC, ROC FC forms" },
]

const needFromYou = [
  { n: "1", title: "Audited Accounts", body: "Audited financial statements for the last three years, and a net worth certificate from an accountant." },
  { n: "2", title: "Incorporation Documents", body: "Certificate of incorporation and charter documents, notarised and apostilled." },
  { n: "3", title: "Board Resolution", body: "Approving the liaison office, its tasks and an authorised signatory." },
  { n: "4", title: "Business Plan", body: "The tasks in India, the budget and the parent's group structure." },
  { n: "5", title: "Indian Office Address", body: "A leased office, a co-working space, or a registered address service." },
  { n: "6", title: "Authorised Representative", body: "At least one person resident in India to receive notices for ROC purposes." },
]

const processSteps = [
  { stage: "Week 1", title: "Eligibility", body: "Check net worth, track record, route and planned tasks." },
  { stage: "Weeks 1-2", title: "Form FNC", body: "Prepare the application and the document set." },
  { stage: "Weeks 2-4", title: "Approval and UIN", body: "File with the AD bank, or the RBI where needed, and receive the Unique Identification Number (UIN)." },
  { stage: "Weeks 3-5", title: "ROC, PAN, TAN", body: "File Form FC-1 within 30 days and obtain PAN and TAN." },
  { stage: "Weeks 4-6", title: "Bank Account", body: "Open the liaison office account and receive the first remittance." },
]

const included = [
  "Eligibility and Route Check",
  "Form FNC Preparation and Filing",
  "Follow-up with the AD Bank or RBI",
  "UIN Receipt and Records",
  "Form FC-1 Filing with the ROC",
  "PAN and TAN",
  "Bank Account Opening Support",
  "Annual Compliance Calendar",
]

const countryGuides = [
  { label: "USA", href: "/blog/usa-to-india" },
  { label: "UK", href: "/india-entry-for-uk-companies" },
  { label: "Singapore", href: "/india-entry-for-singapore-companies" },
  { label: "Australia", href: "/india-entry-for-australian-companies" },
  { label: "Germany", href: "/india-entry-for-german-companies" },
  { label: "Japan", href: "/india-entry-for-japan-companies" },
  { label: "China", href: "/india-entry-for-china-companies" },
]

const afterLinks = [
  { label: "Liaison Office Payroll and Labour Law Compliance", href: "/liaison-office-payroll-compliance" },
  { label: "Liaison Office FEMA and RBI Compliance", href: "/liaison-office-fema-rbi-compliance" },
  { label: "ROC Compliance for a Liaison Office (FC Forms)", href: "/liaison-office-roc-compliance" },
  { label: "Liaison Office Accounting, Reporting and Audit", href: "/liaison-office-accounting-audit" },
  { label: "Liaison Office Tax Compliance", href: "/liaison-office-tax-compliance" },
]

const faqs = [
  { q: "What is a liaison office in India?", a: "A liaison office (LO), also called a representative office, is an office of a foreign company that represents the parent in India and acts as a communication channel. It cannot do business or earn income, is not a separate legal entity, and is funded entirely by the parent. It needs approval under FEMA." },
  { q: "Who can open a liaison office in India?", a: "Under the FEMA 2016 Regulations, a foreign company needs a profit-making track record of three years in its home country and a net worth of at least USD 50,000 (or equivalent). It applies in Form FNC through an authorised dealer (AD) Category-I bank. AU Corporate checks eligibility before you apply." },
  { q: "What tasks can a liaison office carry out in India?", a: "A liaison office may represent the parent or group companies, promote exports and imports between India and the parent's country, promote technical or financial collaborations between the parent group and Indian companies, and act as a communication channel between the parent and Indian companies." },
  { q: "What can a liaison office not do in India?", a: "A liaison office cannot undertake any commercial, trading or industrial activity, cannot earn any income, and cannot invoice customers or receive fees, commission or payments for the parent's business. All its expenses must be met from remittances from the parent." },
  { q: "Can a liaison office do market research and find leads?", a: "Collecting market information and introducing the parent to Indian companies fits within representing the parent and acting as a communication channel. Selling, taking orders for payment, invoicing or receiving commission does not. AU Corporate checks your task list against the approval." },
  { q: "Can a liaison office sign contracts or sell on behalf of the parent?", a: "No. A liaison office cannot carry on business, so binding commercial contracts, sales and trading by the office are outside its permitted work. Such activity belongs in a branch office or a subsidiary. AU Corporate advises on the right structure." },
  { q: "Can a liaison office help the parent find suppliers or customers in India?", a: "Yes, as promotion. A liaison office may identify and introduce Indian suppliers or buyers and pass on information, which promotes exports and imports. It cannot buy, sell, invoice or pay vendors on its own account. AU Corporate reviews each task." },
  { q: "Can a liaison office provide technical support or after-sales service?", a: "No. Technical support for the parent's products is a permitted activity of a branch office, not of a liaison office, because it involves commercial work. A liaison office should only liaise and communicate. AU Corporate helps you choose the structure." },
  { q: "How do I apply for a liaison office in India?", a: "The foreign company files Form FNC with an AD Category-I bank, with its audited accounts, a net worth certificate, incorporation documents and a business plan. Once approved, a Unique Identification Number (UIN) is allotted. It then files Form FC-1 with the ROC within 30 days. AU Corporate handles each filing." },
  { q: "How long is a liaison office approval valid?", a: "Liaison office approval is normally given for a limited period, typically three years, and can be extended through the AD bank before it expires. Please check the period in your approval letter. AU Corporate tracks the expiry date and prepares the extension." },
  { q: "Can a company from Sri Lanka open a liaison office in India?", a: "Yes, but an applicant from Sri Lanka needs prior RBI approval, and must also register with the State Police, so the AD bank cannot approve it alone. AU Corporate prepares the RBI application and the police registration, and allows extra time." },
  { q: "Can a company from Russia open a liaison office in India?", a: "Yes. A Russian company applies through an AD Category-I bank under the general liaison office rules, with no separate prior-approval requirement for Russia itself. Banks may carry out additional checks on payments, so AU Corporate prepares the bank paperwork early." },
  { q: "How long does liaison office registration take in India?", a: "Liaison office setup typically takes 3 to 6 weeks, depending on the bank, the route (AD bank or RBI) and how quickly the parent's documents are notarised and apostilled. AU Corporate works in parallel to save time." },
  { q: "Should we open a liaison office, branch office or project office?", a: "Choose a liaison office to represent the parent without earning income, a branch office to carry on the parent's business, and a project office to execute one awarded contract. AU Corporate compares them for your business." },
  { q: "Can a liaison office be converted into a branch office?", a: "Not automatically. A parent that wants to carry on business should apply for a branch office or a subsidiary, and close or convert the liaison office with approvals. AU Corporate plans the transition so the tax position stays clean." },
  { q: "How much does liaison office registration cost in India?", a: "AU Corporate gives a fixed written quote before work starts. The fee depends on the route (AD bank or RBI), the parent's country and the number of documents. Government fees, notary and apostille charges and courier costs are separate." },
  { q: "Can AU Corporate set up a liaison office for a company from my country?", a: "AU Corporate sets up liaison offices for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. We prepare a document checklist for your country so that notarisation and apostille are right the first time." },
]

const faqsCol1 = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsCol2 = faqs.slice(Math.ceil(faqs.length / 2))

export default function LiaisonOfficeRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Liaison Office Registration" }]} />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Liaison Office in India</span>
              <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Liaison Office Registration in India for Foreign Companies
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Approval under FEMA, UIN, ROC registration, PAN, TAN and a bank account for the liaison office of your foreign company, handled by Chartered Accountants and Company Secretaries.
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Liaison Office Registration in India: The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A foreign company can open a liaison office in India, to represent it and act as a communication channel without earning income, only with approval under FEMA. It applies in Form FNC through an authorised dealer bank, normally needing three years of profits and a net worth of USD 50,000, receives a Unique Identification Number, files Form FC-1 with the Registrar of Companies within 30 days, and then obtains PAN and TAN. Applicants from Sri Lanka need prior RBI approval. AU Corporate, a New Delhi firm of Chartered Accountants and Company Secretaries serving foreign companies since 2016, handles the full process.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Written and reviewed by <strong className="text-gray-700">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">We Set Up Your Liaison Office, End to End</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A liaison office is the foreign company itself, represented in India without doing business. It needs approval, ROC registration and yearly filings, but no separate Indian company.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate handles the application, the approvals and the registrations from India, and checks your planned tasks so the office stays within what is permitted.
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

      {/* PERMITTED ACTIVITIES */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What a Liaison Office Can and Cannot Do</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The tasks a liaison office is approved for, and the lines it must not cross.</p>
          <ol className="grid sm:grid-cols-2 gap-5">
            {permittedActivities.map((item) => (
              <li key={item.title} className="p-6 bg-white border rounded-lg">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7a5c00] bg-[#fffbe6] px-2 py-0.5 rounded mb-3">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Liaison Office, Branch Office or Project Office: A Quick Comparison</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The main differences a foreign company looks at before choosing a structure.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white">
              <caption className="text-left font-bold text-gray-900 mb-2 caption-top">Liaison Office vs Branch Office vs Project Office in India</caption>
              <thead className="bg-[#081a42] text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold">Point</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Liaison Office</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Branch Office</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Project Office</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.point} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="border border-gray-300 p-4 font-semibold text-sm">{row.point}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.lo}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.bo}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.po}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">Eligibility tests and conditions differ for each office. Our team confirms the right choice for your case.</p>
        </div>
      </section>

      {/* WHAT WE NEED */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents and Information We Need From You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Six items from the head office. We send a document checklist tailored to your country.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {needFromYou.map((item) => (
              <div key={item.n} className="p-6 bg-white border rounded-lg">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#081a42] text-sm font-bold text-gold">{item.n}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How AU Helps, in Five Steps</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Indian filings are prepared while your documents are notarised. Liaison office setup typically takes 3 to 6 weeks, depending on the bank, the route (AD bank or RBI) and how quickly the parent&apos;s documents are notarised and apostilled.
          </p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step) => (
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
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-6">A fixed fee, confirmed in writing before work starts.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white border rounded-lg p-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#081a42] text-xs font-bold text-gold">✓</span>
                <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            <strong>Not included:</strong> government fees, notary and apostille costs in your country, courier costs, and ongoing compliance after registration, which is available as a separate service — see{" "}
            <Link href="/liaison-office-fema-rbi-compliance" className="text-gold-dark font-semibold hover:underline">Liaison Office FEMA and RBI Compliance</Link>.
          </p>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Setting Up from Your Country</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Documents, authentication and approvals differ by country.</p>
          <div className="flex flex-wrap gap-3">
            {countryGuides.map((c) => (
              <Link key={c.href} href={c.href} className="inline-block rounded-full border border-[#081a42] px-5 py-2.5 text-sm font-semibold text-[#081a42] hover:bg-[#081a42] hover:text-white transition-colors">
                {c.label} <span className="text-xs">Guide →</span>
              </Link>
            ))}
          </div>
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
            title="Ready to Register Your Liaison Office in India?"
            description="Tell us where your head office is, what the liaison office will do in India, and how many people it will employ — our team will confirm eligibility, the route, and a fixed written quote."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Liaison Office Registration",
            description:
              "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, ROC Form FC-1, PAN, TAN, permitted tasks and FAQs, with a fixed-fee quote.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/liaison-office-registration",
            areaServed: "India",
            serviceType: "Liaison Office Registration",
          }),
        }}
      />
    </main>
  )
}
