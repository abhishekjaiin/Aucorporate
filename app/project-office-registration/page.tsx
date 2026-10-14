import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"

const heroChecklist = [
  { title: "Fixed Written Quote", body: "Confirmed before we start" },
  { title: "General Permission Checked", body: "AD bank route where conditions are met" },
  { title: "ROC Registration", body: "Form FC-1 within 30 days" },
  { title: "Multiple Countries Covered", body: "USA, UK, Singapore, Australia, Germany, Japan and China" },
]

const youGet = [
  "Route check against the contract and funding",
  "Form FNC filed and followed up",
  "Form FC-1 filed with the ROC",
  "PAN, TAN and bank account support",
  "A calendar for annual and closing filings",
]

const comparisonRows = [
  { point: "Purpose", po: "Execute one contract awarded by an Indian company", bo: "Carry on the parent's permitted business", lo: "Represent the parent; no commercial activity" },
  { point: "Duration", po: "For the project only", bo: "No fixed end", lo: "Approved period" },
  { point: "Approval", po: "General permission via AD bank if conditions are met; otherwise RBI", bo: "FEMA approval; net-worth and track-record tests apply", lo: "AD bank or RBI" },
  { point: "Can earn income", po: "Yes, from the project", bo: "Yes, from permitted activities", lo: "No" },
  { point: "Income tax", po: "Foreign company rate on project profits", bo: "Foreign company rate", lo: "Not taxed on income, as it earns none, but still files returns" },
  { point: "Main filings", po: "FNC, AAC, ROC FC-1, FC-3, FC-4", bo: "FNC, AAC, ROC FC-1, FC-3, FC-4", lo: "FNC, AAC, ROC" },
]

const qualifyConditions = [
  { tag: "Contract", title: "An Indian Awarding Company", body: "The foreign company has secured a contract from an Indian company to execute the project." },
  { tag: "Clearance", title: "Regulatory Clearances", body: "The project has the regulatory clearances it needs." },
  { tag: "Funding 1", title: "Inward Remittance", body: "The project is funded directly by inward remittance from abroad." },
  { tag: "Funding 2", title: "International Financing Agency", body: "The project is funded by a bilateral or multilateral international financing agency." },
  { tag: "Funding 3", title: "Term Loan to the Awarding Company", body: "The Indian company awarding the contract has a term loan from a public financial institution or bank for the project." },
]

const needFromYou = [
  { n: "1", title: "Contract", body: "The contract or award letter from the Indian company." },
  { n: "2", title: "Funding Evidence", body: "Proof of the funding condition the project meets." },
  { n: "3", title: "Charter Documents", body: "Certificate of incorporation and constitutional documents, notarised and apostilled." },
  { n: "4", title: "Board Resolution", body: "Approving the project office and an authorised signatory." },
  { n: "5", title: "Latest Accounts", body: "Audited financial statements of the foreign company." },
  { n: "6", title: "Site Address", body: "Project site or office address in India, and an authorised representative." },
]

const processSteps = [
  { stage: "Week 1", title: "Route Check", body: "Check the contract, funding and clearances to decide AD bank or RBI." },
  { stage: "Weeks 1-2", title: "Form FNC", body: "Prepare the application and the document set." },
  { stage: "Weeks 2-4", title: "Approval", body: "File with the AD bank, or the RBI where needed." },
  { stage: "Weeks 3-5", title: "ROC, PAN, TAN", body: "File Form FC-1 within 30 days and obtain PAN and TAN." },
  { stage: "Weeks 4-6", title: "Bank Account", body: "Open the project office account and receive the first remittance." },
]

const included = [
  "Route Check (AD Bank or RBI)",
  "Form FNC Preparation and Filing",
  "Follow-up with the AD Bank or RBI",
  "Approval Records",
  "Form FC-1 Filing with the ROC",
  "PAN, TAN and GST Where Needed",
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
  { label: "Project Office Payroll and Labour Law Compliance", href: "/project-office-payroll-compliance" },
  { label: "Project Office FEMA and RBI Compliance", href: "/project-office-fema-rbi-compliance" },
  { label: "ROC Compliance for a Project Office (FC Forms)", href: "/project-office-roc-compliance" },
  { label: "Project Office Accounting, Reporting and Audit", href: "/project-office-accounting-audit" },
  { label: "Project Office Tax, GST and Transfer Pricing", href: "/project-office-tax-gst-transfer-pricing" },
]

const faqs = [
  { q: "What is a project office in India?", a: "A project office (PO) is a temporary place of business that a foreign company sets up to execute one specific project awarded by an Indian company. It is not a separate legal entity, may carry out only the project's activities, and is closed when the project ends." },
  { q: "Who can set up a project office in India?", a: "A foreign company that has secured a contract from an Indian company to execute a project in India can set up a project office. It must meet the funding and clearance conditions for general permission, or otherwise apply to the Reserve Bank of India (RBI). AU Corporate checks which route applies." },
  { q: "What are the conditions for a project office under general permission?", a: "The project needs its regulatory clearances where required, and one funding condition: direct inward remittance from abroad, funding by a bilateral or multilateral international financing agency, or a term loan to the Indian awarding company from a public financial institution or bank. AU Corporate checks the contract against these." },
  { q: "When is RBI approval needed for a project office?", a: "Prior RBI approval is needed where the funding conditions are not met, where the applicant is from a country such as Sri Lanka that needs prior approval, or where a restricted sector such as defence or telecom is involved. AU Corporate prepares the RBI application." },
  { q: "What can a project office do in India?", a: "A project office may carry out only the activity relating to the project in the contract. It cannot take up other business, and cannot continue after the project is complete. AU Corporate checks the contract scope and the approval wording." },
  { q: "How do I apply for a project office in India?", a: "The foreign company files Form FNC with an authorised dealer (AD) Category-I bank with the contract, funding evidence and company documents. It then files Form FC-1 with the Registrar of Companies within 30 days, and obtains PAN, TAN and a bank account. AU Corporate handles each filing." },
  { q: "What documents are needed to set up a project office?", a: "The AD bank asks for the contract or award letter, evidence of the funding condition, the foreign company's charter documents and latest accounts, a board resolution and project details such as value, duration and site address. AU Corporate prepares a checklist for your country." },
  { q: "How long does project office registration take in India?", a: "Project office setup under general permission typically takes about 3 to 6 weeks, and longer if RBI approval is needed. The main variables are the AD bank and how quickly the foreign company's documents are notarised and apostilled. AU Corporate works in parallel to save time." },
  { q: "Can a company from Sri Lanka set up a project office in India?", a: "Yes, but a Sri Lankan applicant needs prior RBI approval, and registration with the State Police, so general permission through the AD bank is not enough on its own. AU Corporate prepares the RBI application, and allows extra time for the approval." },
  { q: "Can a company from Russia set up a project office in India?", a: "Yes. A Russian company applies through an AD Category-I bank under general permission if the contract and funding conditions are met, with no separate prior-approval rule for Russia itself. Banks may carry out additional checks on payments, so AU Corporate prepares the bank paperwork early." },
  { q: "What is the difference between a project office and a branch office?", a: "A project office is temporary and tied to one contract, while a branch office carries on the parent's permitted business with no fixed end. A project office is usually quicker to set up where general permission applies. AU Corporate compares both for your business." },
  { q: "Can a project office hire staff and bring expats to India?", a: "Yes. A project office may employ local staff and expats for the project, subject to labour law, social security and visa rules. Project visas are available only in certain sectors such as power and steel. AU Corporate supports payroll and FRRO registration for your team." },
  { q: "What happens when the project is complete?", a: "The project office is closed through the AD bank, and the surplus of the project is remitted to the foreign company after tax, with a Chartered Accountant's certificate. AU Corporate manages the closure from the last invoice to the final remittance." },
  { q: "How much does project office registration cost in India?", a: "AU Corporate gives a fixed written quote before work starts. The fee depends on the route (AD bank or RBI), the foreign company's country and the number of documents. Government fees, notary and apostille charges and courier costs are separate." },
  { q: "Can AU Corporate set up a project office for a company from my country?", a: "AU Corporate sets up project offices for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. We prepare a document checklist for your country so that notarisation and apostille are right the first time." },
]

const faqsCol1 = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsCol2 = faqs.slice(Math.ceil(faqs.length / 2))

export default function ProjectOfficeRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Project Office Registration" }]} />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Project Office in India</span>
              <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Project Office Registration in India for Foreign Companies
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Approval, ROC registration, PAN, TAN and a bank account for the project office of your foreign company, handled by Chartered Accountants and Company Secretaries.
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Project Office Registration in India: The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A foreign company that has secured a contract from an Indian company can set up a project office in India under general permission through an authorised dealer bank, if the project has its clearances and meets a funding condition. It files Form FNC, then Form FC-1 with the Registrar of Companies within 30 days, and obtains PAN and TAN. Applicants from Sri Lanka need prior RBI approval. AU Corporate, a New Delhi firm of Chartered Accountants and Company Secretaries serving foreign companies since 2016, handles the full process.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Written and reviewed by <strong className="text-gray-700">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">We Set Up Your Project Office, End to End</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A project office is the foreign company itself executing one Indian contract, so it needs RBI/AD-bank approval, ROC registration and ongoing filings, but no separate Indian company.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate handles the application, the approvals and the registrations from India. You review and sign the documents from your own country.
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

      {/* COMPARISON */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Office, Branch Office or Liaison Office: A Quick Comparison</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The main differences a foreign contractor looks at before choosing a structure.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white">
              <caption className="text-left font-bold text-gray-900 mb-2 caption-top">Project Office vs Branch Office vs Liaison Office in India</caption>
              <thead className="bg-[#081a42] text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold">Point</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Project Office</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Branch Office</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Liaison Office</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.point} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="border border-gray-300 p-4 font-semibold text-sm">{row.point}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.po}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.bo}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.lo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            A project office suits a foreign company with one awarded Indian contract.
          </p>
        </div>
      </section>

      {/* WHAT YOU NEED TO QUALIFY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Need to Qualify</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The conditions a project office has to meet under general permission.</p>
          <ol className="grid sm:grid-cols-2 gap-5">
            {qualifyConditions.map((item) => (
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
          <p className="text-gray-600 leading-relaxed mb-8">Six items from the foreign company. We send a document checklist tailored to your country.</p>
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
            Indian filings are prepared while your documents are notarised. Project office setup under general permission typically takes about 3 to 6 weeks, and longer if RBI approval is needed.
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
            <Link href="/project-office-fema-rbi-compliance" className="text-gold-dark font-semibold hover:underline">Project Office FEMA and RBI Compliance</Link>.
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
            title="Ready to Register Your Project Office in India?"
            description="Tell us where your head office is, what the project office will do in India, and how many people it will employ — our team will confirm the route, eligibility, and a fixed written quote."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Project Office Registration",
            description:
              "Set up a project office in India for a contract awarded by an Indian company: general permission, Form FNC, ROC Form FC-1, PAN and TAN.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/project-office-registration",
            areaServed: "India",
            serviceType: "Project Office Registration",
          }),
        }}
      />
    </main>
  )
}
