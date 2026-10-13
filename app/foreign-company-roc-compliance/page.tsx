import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"

const heroChecklist = [
  { title: "Registration in 30 Days", body: "Form FC-1 filed on time" },
  { title: "Annual FC-3 and FC-4", body: "Prepared and filed" },
  { title: "Authorised Representative", body: "Support if you need one" },
  { title: "Multiple Countries Covered", body: "USA, UK, Singapore, Australia, Germany, Japan and China" },
]

const youGet = [
  "Form FC-1 filed on time",
  "Annual FC-3 and FC-4 filed",
  "Changes reported in Form FC-2",
  "Authorised representative service if needed",
  "A yearly ROC calendar",
]

const handledSteps = [
  { tag: "Within 30 Days", title: "Registration (Form FC-1)", body: "Charter documents, directors, Indian address and authorised representative." },
  { tag: "On Change", title: "Changes (Form FC-2)", body: "Changes in directors, charter documents, address or the authorised representative." },
  { tag: "Every Year", title: "Financial Statements (Form FC-3)", body: "Accounts delivered within six months of the foreign company's year end." },
  { tag: "Every Year", title: "Annual Return (Form FC-4)", body: "Annual return filed within 60 days of the year end." },
  { tag: "When Charges Are Created", title: "Charge Registration", body: "Registration of charges on branch office property in India." },
  { tag: "Every Year", title: "CSR Check", body: "A check on whether CSR applies, with the filings if it does." },
  { tag: "As Needed", title: "Notices and Clean-Up", body: "Replies to ROC notices and late filings for past years." },
]

const needFromYou = [
  { n: "1", title: "Charter Documents", body: "Certificate of incorporation and constitutional documents, certified and translated if not in English." },
  { n: "2", title: "Director Details", body: "Names, addresses and nationality of directors and secretary." },
  { n: "3", title: "Indian Address", body: "Address of the branch office in India." },
  { n: "4", title: "Authorised Representative", body: "Name and details of the person resident in India." },
  { n: "5", title: "Annual Accounts", body: "The foreign company's audited accounts each year." },
]

const calendar = [
  { when: "Within 30 days of setting up", what: "Form FC-1 registration", help: "Prepared and filed" },
  { when: "On change", what: "Form FC-2 for changes in particulars", help: "Prepared and filed" },
  { when: "Within 6 months of year end", what: "Form FC-3 financial statements", help: "Prepared and filed" },
  { when: "Within 60 days of year end", what: "Form FC-4 annual return", help: "Prepared and filed" },
  { when: "When a charge is created", what: "Charge registration", help: "Prepared and filed" },
]

const included = [
  "Form FC-1 Registration",
  "Form FC-2 Changes",
  "Form FC-3 Filing",
  "Form FC-4 Filing",
  "Charge Registration",
  "CSR Applicability Check",
  "Replies to ROC Notices",
  "A Yearly ROC Calendar",
]

const afterLinks = [
  { label: "Branch Office Registration", href: "/branch-office-registration" },
  { label: "Branch Office FEMA and RBI Compliance", href: "/branch-office-fema-rbi-compliance" },
  { label: "Branch Office Tax, GST and Transfer Pricing", href: "/branch-office-tax-gst-transfer-pricing" },
  { label: "Branch Office Accounting, Reporting and Audit", href: "/branch-office-accounting-audit" },
  { label: "Branch Office Payroll and Labour Law Compliance", href: "/branch-office-payroll-compliance" },
]

const faqs = [
  { q: "What is ROC compliance for a foreign company with a branch office in India?", a: "A foreign company that sets up a place of business must register with the Registrar of Companies (ROC) under Chapter XXII of the Companies Act, 2013, and then file its accounts and annual return every year. AU Corporate prepares and files each form." },
  { q: "What is Form FC-1 and when must it be filed?", a: "Form FC-1 is the registration form of a foreign company with the ROC. It must be filed within 30 days of setting up a place of business, with the charter documents, the list of directors, the registered office address and the authorised representative. AU Corporate prepares and files it." },
  { q: "What documents are needed for Form FC-1?", a: "Form FC-1 needs a certified copy of the foreign company's charter documents (translated into English where needed), the registered office address abroad and in India, the list of directors and secretary, and details of at least one authorised representative resident in India. AU Corporate prepares the checklist." },
  { q: "Who is the authorised representative of a branch office?", a: "A foreign company must name at least one person resident in India who is authorised to accept notices and legal service on its behalf. AU Corporate can act for you or help you choose, and keeps the ROC records updated when the person changes." },
  { q: "What is Form FC-2 and when is it filed?", a: "Form FC-2 reports a change in the registered particulars of a foreign company, such as its directors, charter documents, Indian address or authorised representative. It is filed within a set period after the change. AU Corporate tracks changes and files the form." },
  { q: "What is Form FC-3 and when is it due?", a: "Form FC-3 delivers the foreign company's financial statements to the ROC. It is due every year within six months of the end of the foreign company's financial year. AU Corporate prepares the filing and confirms the exact set of accounts required." },
  { q: "What is Form FC-4 and when is it due?", a: "Form FC-4 is the annual return of a foreign company. It is due every year within 60 days of the close of the financial year. AU Corporate prepares and files it with the supporting details." },
  { q: "Does a branch office need board meetings, an AGM or Indian directors?", a: "No. A branch office is part of the foreign company, so it has no Indian board meetings, AGM or resident-director requirement. The foreign company's own governance applies. It only files the FC forms and names an authorised representative. AU Corporate confirms what applies to you." },
  { q: "Does a foreign company have to display its name at the branch office?", a: "Yes. A foreign company must show its name and the country of incorporation outside every office and on business letters and notices, along with whether its members' liability is limited. AU Corporate checks your signage and stationery." },
  { q: "Does CSR apply to the branch office of a foreign company in India?", a: "It can. The CSR rules apply to a foreign company with a branch or project office if it meets the net worth, turnover or profit test of the Companies Act. AU Corporate checks each year against the current thresholds." },
  { q: "Do charges on branch office assets need to be registered with the ROC?", a: "Yes, where a branch office creates a charge on its property in India, such as a bank loan secured on assets, it must be registered with the ROC within the prescribed time. AU Corporate prepares and files the form." },
  { q: "What happens if a foreign company misses an FC filing?", a: "A missed FC filing can lead to fines on the company and its officers, with a daily penalty for continued delay, and notices from the ROC. AU Corporate reviews past filings, files late forms and sets a calendar to avoid repeats." },
  { q: "Can AU Corporate take over ROC compliance for my existing branch office?", a: "Yes. AU Corporate reviews your earlier FC forms and ROC records, files anything overdue, and then runs the yearly calendar. AU Corporate handles this for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. We prepare country-specific documents for FC-1 and for later changes." },
]

const faqsCol1 = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsCol2 = faqs.slice(Math.ceil(faqs.length / 2))

export default function ForeignCompanyRocCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "ROC Compliance for Foreign Companies" }]} />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Branch Office in India</span>
              <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                ROC Compliance for the India Branch Office of a Foreign Company
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Form FC-1 registration, annual accounts (FC-3), annual return (FC-4), changes and authorised representative for foreign companies in India.
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">ROC Compliance for a Branch Office: The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A foreign company that sets up a branch office in India must file Form FC-1 with the Registrar of Companies within 30 days, name an authorised representative resident in India, and then file its financial statements in Form FC-3 within six months and its annual return in Form FC-4 within 60 days of its year end. AU Corporate, a New Delhi firm of Company Secretaries and Chartered Accountants, runs all of this.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Written and reviewed by <strong className="text-gray-700">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Law Compliance for a Foreign Company, Handled from India</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A branch office has no Indian board meetings or AGM, but it has a short list of fixed filings with the ROC, and missing them leads to fines. See the{" "}
                <Link href="/branch-office-registration" className="text-gold-dark font-semibold hover:underline">Branch Office Registration guide</Link>{" "}
                for how ROC registration under Section 380 fits alongside the separate RBI/AD-bank approval.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate prepares each form, keeps your records and tracks every date. Your directors abroad review and sign.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Handle, Step by Step</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The ROC work a foreign company&apos;s branch office needs through its life.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {handledSteps.map((item) => (
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
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin. For an existing branch office, we also review earlier filings.</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The ROC Calendar for a Branch Office</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when. Dates can change by notification, so we confirm those that apply to your branch office.</p>
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
            <strong>Not included:</strong> government filing fees, additional fees for earlier delays, notary and translation costs, and the authorised representative service, which is quoted separately where needed.
          </p>
        </div>
      </section>

      {/* AFTER / CROSS-LINKS */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex-1 min-w-[260px]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">One Team for the Rest of Your Branch Office Compliance</h2>
              <p className="text-gray-600">Your branch office accounts, tax returns, RBI filings and ROC forms must agree with each other. The same team handles each of them.</p>
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
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-2">Straight answers to the questions foreign finance teams ask most about a branch office in India.</p>
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
            title="Need ROC Compliance for Your Foreign Company's Branch Office?"
            description="Tell us when your branch office was set up and its financial year end, and our team will confirm the FC-1, FC-3 and FC-4 filing calendar for your situation."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "ROC Compliance for Foreign Companies",
            description:
              "Form FC-1 registration, FC-2 changes, FC-3 accounts, FC-4 annual return, authorised representative and CSR check for the India branch office of a foreign company.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/foreign-company-roc-compliance",
            areaServed: "India",
            serviceType: "ROC Compliance for Foreign Companies",
          }),
        }}
      />
    </main>
  )
}
