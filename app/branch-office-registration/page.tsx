import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"

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

export default function BranchOfficeRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Branch Office in India", href: "/branch-office-in-india" }, { label: "Branch Office Registration" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">Branch Office in India</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold md:text-5xl">
            Branch Office Registration in India for Foreign Companies
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-white/85">
            Approval under FEMA, UIN, ROC registration, PAN, TAN and a bank account for the branch office of your foreign company — handled end to end by Chartered Accountants and Company Secretaries.
          </p>
          <p className="text-white/70 leading-relaxed">
            A foreign company can open a branch office in India only with approval under FEMA. It applies on Form FNC through an authorised dealer (AD) Category-I bank, normally needing five years of profitable track record and a net worth of USD 100,000, receives a Unique Identification Number (UIN), files Form FC-1 with the Registrar of Companies within 30 days, and then obtains PAN and TAN.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">We Set Up Your Branch Office, End to End</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A branch office is the foreign company itself operating in India, so it needs RBI/AD-bank approval, ROC registration and ongoing filings, but no separate Indian company. For the full eligibility, permitted-activity and tax framework behind this process, see the{" "}
            <Link href="/branch-office-in-india" className="text-gold-dark font-semibold hover:underline">Branch Office in India guide</Link>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            AU Corporate handles the application, the approvals and the registrations from India. You review and sign the documents from your own country.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Eligibility and route check (AD bank or RBI)</li>
            <li>Form FNC filed and followed up</li>
            <li>UIN and approval letter</li>
            <li>Form FC-1 filed with the ROC</li>
            <li>PAN, TAN and bank account support</li>
          </ul>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Branch Office or Subsidiary: A Quick Comparison</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The main differences a foreign finance team looks at before choosing a structure.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white">
              <thead className="bg-gray-100">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What a Branch Office Can Do in India</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Permitted activities under the FEMA 2016 Regulations:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            <li><strong>Export and Import</strong> — export and import of goods by the branch office.</li>
            <li><strong>Professional and IT Services</strong> — professional or consultancy services, IT and software development services.</li>
            <li><strong>Agency and Technical Support</strong> — acting as buying or selling agent, and technical support for the parent&apos;s products.</li>
            <li><strong>Research and Collaboration</strong> — research in which the parent is engaged, and promoting technical or financial tie-ups with Indian companies.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            <strong>Not allowed:</strong> a branch office cannot carry out retail trading or manufacture on its own account. Contract manufacturing through Indian manufacturers is possible. See the hub guide&apos;s{" "}
            <Link href="/branch-office-in-india" className="text-gold-dark font-semibold hover:underline">full list of permitted and prohibited activities</Link>{" "}
            for the complete picture.
          </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Branch Office Registration Works: Process and Timeline</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Branch office setup typically takes 4 to 8 weeks, depending on the bank, the route (AD bank or RBI) and how quickly the parent&apos;s documents are notarised and apostilled. The Indian filings are prepared in parallel with document collection to save time.
          </p>
          <ol className="space-y-4">
            {processSteps.map((step) => (
              <li key={step.stage} className="p-5 border-l-4 border-gold bg-secondary/20 rounded-r-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">{step.stage}</span>
                <h3 className="font-bold text-gray-900 mt-1 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
          <p className="text-gray-600 leading-relaxed mb-6">A fixed fee, confirmed in writing before work starts.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 bg-white border rounded-lg p-3 text-sm">
                <span className="text-gold-dark font-bold">✓</span> {item}
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
          <div className="grid sm:grid-cols-2 gap-3">
            {countryGuides.map((c) => (
              <Link key={c.href} href={c.href} className="flex items-center justify-between gap-2 border rounded-lg px-5 py-4 font-semibold text-gray-900 hover:border-gold-dark hover:shadow-md transition-all">
                {c.label} <span className="text-gold-dark text-sm">Guide →</span>
              </Link>
            ))}
          </div>
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
            title="Ready to Register Your Branch Office in India?"
            description="Tell us where your head office is, what the branch office will do in India, and how many people it will employ — our team will confirm eligibility, the route, and a fixed written quote."
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
                label: "Branch Office FEMA and RBI Compliance",
                href: "/branch-office-fema-rbi-compliance",
                description: "Annual Activity Certificate, profit remittance, additional offices, compounding and closure.",
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
                label: "Branch Office Payroll and Labour Law Compliance",
                href: "/branch-office-payroll-compliance",
                description: "Payroll, EPF/ESIC, professional tax, Labour Codes compliance and FRRO support for expats.",
              },
              {
                label: "ROC Compliance for Foreign Companies (FC Forms)",
                href: "/foreign-company-roc-compliance",
                description: "Form FC-1 registration, FC-2 changes, FC-3 accounts and FC-4 annual return.",
              },
              {
                label: "Company Registration in India",
                href: "/india-business-setup/company-formation",
                description: "The full incorporation guide for readers who need a wholly owned subsidiary instead.",
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
