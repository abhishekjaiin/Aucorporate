import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"

const heroChecklist = [
  { title: "Fixed Written Quote", body: "Confirmed before we start" },
  { title: "FEMA Approval Handled", body: "Form FNC through the AD bank or RBI" },
  { title: "ROC Registration", body: "Form FC-1 within 30 days" },
  { title: "Multiple Countries Covered", body: "USA, UK, Singapore, Australia, Germany, Japan and China" },
]

const youGet = [
  "Eligibility and route check (AD bank or RBI)",
  "Form FNC filed and followed up",
  "UIN and approval letter",
  "Form FC-1 filed with the ROC",
  "PAN, TAN and bank account support",
]

const permittedActivities = [
  { tag: "Trade", title: "Export and Import", body: "Export and import of goods by the branch office." },
  { tag: "Services", title: "Professional and IT Services", body: "Professional or consultancy services, IT and software development services." },
  { tag: "Parent Support", title: "Agency and Technical Support", body: "Acting as buying or selling agent, and technical support for the parent's products." },
  { tag: "Research", title: "Research and Collaboration", body: "Research in which the parent is engaged, and promoting technical or financial tie-ups with Indian companies." },
  { tag: "Not Allowed", title: "Retail Trading and Own Manufacturing", body: "A branch office cannot do retail trading or manufacture on its own account. Contract manufacturing through Indian manufacturers is possible." },
]

const needFromYou = [
  { n: "1", title: "Audited Accounts", body: "Audited financial statements for the last five years, and a net worth certificate from an accountant." },
  { n: "2", title: "Incorporation Documents", body: "Certificate of incorporation and charter documents, notarised and apostilled." },
  { n: "3", title: "Board Resolution", body: "Approving the branch office, its activities and an authorised signatory." },
  { n: "4", title: "Business Plan", body: "The activity in India, its funding and the parent's group structure." },
  { n: "5", title: "Indian Office Address", body: "A leased office, a co-working space, or a registered address service." },
  { n: "6", title: "Authorised Representative", body: "At least one person resident in India to receive notices for ROC purposes." },
]

const processSteps = [
  { stage: "Week 1", title: "Eligibility", body: "Check net worth, track record, route and permitted activity." },
  { stage: "Weeks 1-2", title: "Form FNC", body: "Prepare the application and the document set." },
  { stage: "Weeks 2-5", title: "Approval and UIN", body: "File with the AD bank, or the RBI where needed, and receive the Unique Identification Number (UIN)." },
  { stage: "Weeks 4-6", title: "ROC, PAN, TAN", body: "File Form FC-1 within 30 days of setting up the place of business, and obtain PAN and TAN." },
  { stage: "Weeks 6-8", title: "Bank Account", body: "Open the branch office account and receive the first remittance from the head office." },
]

const included = [
  "Eligibility and Route Check",
  "Form FNC Preparation and Filing",
  "Follow-up with the AD Bank or RBI",
  "UIN Receipt and Records",
  "Form FC-1 Filing with the ROC",
  "PAN, TAN and GST Where Needed",
  "Bank Account Opening Support",
  "Annual Compliance Calendar",
]

const countryGuides = [
  { label: "USA", href: "/india-entry-for-us-companies" },
  { label: "UK", href: "/india-entry-for-uk-companies" },
  { label: "Singapore", href: "/india-entry-for-singapore-companies" },
  { label: "Australia", href: "/india-entry-for-australian-companies" },
  { label: "Germany", href: "/india-entry-for-german-companies" },
  { label: "Japan", href: "/india-entry-for-japan-companies" },
  { label: "China", href: "/india-entry-for-china-companies" },
]

const afterLinks = [
  { label: "Branch Office FEMA and RBI Compliance", href: "/branch-office-fema-rbi-compliance" },
  { label: "Branch Office Tax, GST and Transfer Pricing", href: "/branch-office-tax-gst-transfer-pricing" },
  { label: "Branch Office Accounting, Reporting and Audit", href: "/branch-office-accounting-audit" },
  { label: "Branch Office Payroll and Labour Law Compliance", href: "/branch-office-payroll-compliance" },
  { label: "ROC Compliance for Foreign Companies (FC Forms)", href: "/foreign-company-roc-compliance" },
]

const faqs = [
  { q: "What is a branch office of a foreign company in India?", a: "A branch office (BO) is an office of a foreign company that carries on the parent's permitted business in India. It is not a separate legal entity, so the foreign company is directly liable for its acts. It is set up with approval under the Foreign Exchange Management Act, 1999 (FEMA) and registered with the Registrar of Companies." },
  { q: "Who can open a branch office in India?", a: "Under the FEMA 2016 Regulations, a foreign company needs a profit-making track record in its home country for the preceding five financial years and a net worth of at least USD 100,000 (or equivalent). The application is made in Form FNC through an authorised dealer (AD) Category-I bank. AU Corporate checks eligibility before you apply." },
  { q: "What activities can a branch office carry out in India?", a: "A branch office may export and import goods, give professional or consultancy services, do research the parent is engaged in, promote technical or financial collaborations, act as the parent's buying or selling agent, provide IT and software services, and give technical support for the parent's products. Retail trading and manufacturing on its own account are not allowed." },
  { q: "How do I apply for a branch office in India?", a: "The foreign company files Form FNC with an AD Category-I bank, with its audited accounts, a net worth certificate, incorporation documents and a business plan. Once the bank or the Reserve Bank of India (RBI) approves, a Unique Identification Number (UIN) is allotted. AU Corporate prepares and files the application." },
  { q: "Can a company from Sri Lanka open a branch office in India?", a: "Yes, but an applicant from Sri Lanka needs prior approval of the RBI and must also register with the State Police, so the AD bank cannot approve it alone. AU Corporate prepares the RBI application and the police registration, and allows extra time for the approval." },
  { q: "Can a company from Russia open a branch office in India?", a: "Yes. A Russian company applies through an AD Category-I bank under the general branch office rules, with no separate prior-approval requirement for Russia itself. Banks may carry out additional checks on payments, so AU Corporate prepares the documents and bank paperwork early." },
  { q: "How long does branch office registration take in India?", a: "Branch office setup typically takes 4 to 8 weeks, depending on the bank, the route (AD bank or RBI) and how quickly the parent's documents are notarised and apostilled. AU Corporate prepares the Indian filings in parallel with your documents to save time." },
  { q: "Does a branch office have to register with the Registrar of Companies?", a: "Yes. A foreign company that sets up a place of business must file Form FC-1 with the Registrar of Companies within 30 days, naming at least one authorised representative resident in India. It then files its accounts (Form FC-3) and annual return (Form FC-4) every year." },
  { q: "How is a branch office taxed in India?", a: "A branch office is taxed as a foreign company, at a higher rate than a domestic subsidiary: 35 percent on profits, plus surcharge and 4 percent cess. It also needs PAN, TAN, a tax audit where applicable, and, for dealings with group companies, transfer pricing documentation. AU Corporate confirms the current rate each year." },
  { q: "Can a branch office send its profits to the head office?", a: "Yes. A branch office may remit its net profit to the head office after paying tax, through its AD bank, with audited accounts and a Chartered Accountant's certificate. There is no separate dividend tax on branch profits. AU Corporate prepares the certificate and the bank paperwork." },
  { q: "Should we open a branch office or a subsidiary in India?", a: "A branch office suits a foreign company that wants to carry out its own business in the parent's name, with simple profit repatriation but with direct parent liability and a higher tax rate. A subsidiary is a separate company with limited liability. AU Corporate compares both for your business before you choose." },
  { q: "What compliance does a branch office have every year after setup?", a: "A branch office files an Annual Activity Certificate from a Chartered Accountant with its AD bank, normally by 30 September, and files its income tax return, tax audit report and TDS returns. It also files Forms FC-3 and FC-4 with the ROC and GST returns where it is registered. AU Corporate tracks every date." },
  { q: "Are the rules for branch offices in India changing?", a: "Yes, they may. In October 2025 the RBI released draft regulations that would drop the net worth and profit track-record tests and let AD banks approve most cases. Until they are notified, the 2016 Regulations apply. AU Corporate checks the position on the day you apply." },
  { q: "How much does branch office registration cost in India?", a: "AU Corporate gives a fixed written quote before work starts. The fee depends on the route (AD bank or RBI), the parent's country and the number of documents. Government fees, notary and apostille charges and courier costs are separate." },
  { q: "Can AU Corporate set up a branch office for a parent company from my country?", a: "AU Corporate sets up branch offices for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. We prepare a document checklist for your country so that notarisation and apostille are right the first time." },
]

const faqsCol1 = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsCol2 = faqs.slice(Math.ceil(faqs.length / 2))

export default function BranchOfficeRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Branch Office Registration" }]} />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Branch Office in India</span>
              <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Branch Office Registration in India for Foreign Companies
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Approval under FEMA, UIN, ROC registration, PAN, TAN and a bank account for the branch office of your foreign company — handled end to end by Chartered Accountants and Company Secretaries.
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Branch Office Registration in India: The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A foreign company can open a branch office in India only with approval under FEMA. It applies on Form FNC through an authorised dealer (AD) Category-I bank, normally needing five years of profitable track record and a net worth of USD 100,000, receives a Unique Identification Number, files Form FC-1 with the Registrar of Companies within 30 days, and then obtains PAN and TAN. AU Corporate, a New Delhi firm of Chartered Accountants and Company Secretaries serving foreign companies since 2016, handles the full process.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Written and reviewed by <strong className="text-gray-700">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">We Set Up Your Branch Office, End to End</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A branch office is the foreign company itself operating in India, so it needs RBI/AD-bank approval, ROC registration and ongoing filings, but no separate Indian company.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate handles the application, the approvals and the registrations from India. You review and sign the documents from your own country.
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

      {/* COMPARISON */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Branch Office or Subsidiary: A Quick Comparison</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The main differences a foreign finance team looks at before choosing a structure.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white">
              <thead className="bg-[#081a42] text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold">Point</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Branch Office</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Subsidiary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Legal status</td>
                  <td className="border border-gray-300 p-4 text-sm">Not a separate entity; part of the foreign company</td>
                  <td className="border border-gray-300 p-4 text-sm">Separate Indian company</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Liability</td>
                  <td className="border border-gray-300 p-4 text-sm">Foreign company is directly liable</td>
                  <td className="border border-gray-300 p-4 text-sm">Limited to its share capital</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Approval</td>
                  <td className="border border-gray-300 p-4 text-sm">FEMA approval via Form FNC (AD bank or RBI)</td>
                  <td className="border border-gray-300 p-4 text-sm">Foreign investment rules; FC-GPR reporting</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Activities</td>
                  <td className="border border-gray-300 p-4 text-sm">Only permitted activities; no retail trading or own manufacturing</td>
                  <td className="border border-gray-300 p-4 text-sm">Any activity allowed under FDI policy</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Income tax</td>
                  <td className="border border-gray-300 p-4 text-sm">Foreign company rate: 35% plus surcharge and cess</td>
                  <td className="border border-gray-300 p-4 text-sm">Domestic rate: about 25.17% (concessional regime)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Profit repatriation</td>
                  <td className="border border-gray-300 p-4 text-sm">Net profit after tax, with CA certificate</td>
                  <td className="border border-gray-300 p-4 text-sm">Dividends, with withholding tax</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Main filings</td>
                  <td className="border border-gray-300 p-4 text-sm">FNC, AAC, ROC Forms FC-1, FC-3, FC-4</td>
                  <td className="border border-gray-300 p-4 text-sm">ROC annual forms, FC-GPR, FLA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">Rates are for general guidance and change in the Budget. Our team confirms the rate applicable for your year.</p>
        </div>
      </section>

      {/* PERMITTED ACTIVITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What a Branch Office Can Do in India</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Permitted activities under the FEMA 2016 Regulations.</p>
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
            Indian filings are prepared while your documents are notarised. Branch office setup typically takes 4 to 8 weeks, depending on the bank, the route (AD bank or RBI) and how quickly the parent&apos;s documents are notarised and apostilled.
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
            <Link href="/branch-office-fema-rbi-compliance" className="text-gold-dark font-semibold hover:underline">Branch Office FEMA and RBI Compliance</Link>.
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
            title="Ready to Register Your Branch Office in India?"
            description="Tell us where your head office is, what the branch office will do in India, and how many people it will employ — our team will confirm eligibility, the route, and a fixed written quote."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Branch Office Registration",
            description:
              "Register a branch office of your foreign company in India: Form FNC, RBI and AD bank approval, UIN, ROC Form FC-1, PAN and TAN.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/branch-office-registration",
            areaServed: "India",
            serviceType: "Branch Office Registration",
          }),
        }}
      />
    </main>
  )
}
