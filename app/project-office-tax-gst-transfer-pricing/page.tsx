import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"
import { AuthorLink } from "@/components/AuthorLink"

const heroChecklist = [
  { title: "Foreign Company Rate", body: "About 36.4% to 38.22% effective" },
  { title: "Lower Deduction Certificate", body: "To cut tax deducted by the client" },
  { title: "Remittance Paperwork", body: "Forms 15CA and 15CB" },
  { title: "Treaty Support Included", body: "Across multiple countries" },
]

const youGet = [
  "Return and tax audit filed on time",
  "Advance tax and TDS managed",
  "Lower deduction certificate where useful",
  "GST registration and returns",
  "Remittance tax paperwork",
]

const taxAreas = [
  { tag: "Before You Bid or Start", title: "Permanent Establishment and Treaty Review", body: "Whether and when the project creates a taxable presence, and the treaty position." },
  { tag: "Every Year", title: "Income Tax Return and Tax Audit", body: "Computation of Indian profits, the return and the tax audit report." },
  { tag: "During the Project", title: "Lower Deduction Certificate", body: "Application to reduce tax deducted by the client." },
  { tag: "Four Times a Year", title: "Advance Tax", body: "Estimate and payment in each instalment." },
  { tag: "Every Month and Quarter", title: "TDS Compliance", body: "Deduction on payments to subcontractors, staff and vendors." },
  { tag: "Every Month", title: "GST Registration and Returns", body: "Registration, returns, input credit and head office supplies." },
  { tag: "Every Year", title: "Transfer Pricing and Profit Attribution", body: "Form 3CEB and documentation for group dealings." },
  { tag: "When Money Goes Abroad", title: "Remittance Tax Compliance", body: "Forms 15CA and 15CB and treaty rates." },
  { tag: "When an Expat Joins", title: "Expat Taxation", body: "Residence, salary tax, treaty relief and returns." },
  { tag: "When a Notice Arrives", title: "Assessments, Appeals and GST Litigation", body: "Representation before tax authorities and tribunals." },
]

const taxRates = [
  { income: "Up to INR 1 crore", base: "35%", surcharge: "None", cess: "4%", effective: "36.4%" },
  { income: "INR 1 crore to 10 crore", base: "35%", surcharge: "2%", cess: "4%", effective: "37.128%" },
  { income: "Above INR 10 crore", base: "35%", surcharge: "5%", cess: "4%", effective: "38.22%" },
]

const needFromYou = [
  { n: "1", title: "Contract", body: "The contract, milestones and payment terms." },
  { n: "2", title: "Audited Accounts", body: "The project office's accounts and the parent's latest accounts." },
  { n: "3", title: "Tax Registrations", body: "PAN, TAN, GST and past returns." },
  { n: "4", title: "Expat Details", body: "Passport, visa and salary details for each expat." },
  { n: "5", title: "Notices", body: "Copies of any tax or GST notices received." },
]

const included = [
  "Permanent Establishment Review",
  "Income Tax Return and Tax Audit",
  "Advance Tax and TDS",
  "GST Registration and Returns",
  "Lower Deduction Certificate",
  "Transfer Pricing Report",
  "Remittance Certificates",
  "Expat Taxation and Treaty Opinions",
]

const afterLinks = [
  { label: "Project Office Registration", href: "/project-office-registration" },
  { label: "Project Office FEMA and RBI Compliance", href: "/project-office-fema-rbi-compliance" },
  { label: "Project Office Accounting, Reporting and Audit", href: "/project-office-accounting-audit" },
  { label: "ROC Compliance for Foreign Company Offices (FC Forms)", href: "/foreign-company-roc-compliance" },
  { label: "Project Office Payroll and Labour Law Compliance", href: "/project-office-payroll-compliance" },
]

const faqs = [
  { q: "What taxes does a project office of a foreign company pay in India?", a: "A project office pays income tax as a foreign company on profits from the project, deducts and deposits TDS on its payments, and registers for and files GST. AU Corporate prepares and files all of these." },
  { q: "What is the income tax rate for a project office in India?", a: "A foreign company's project office pays 35 percent tax on its income, plus surcharge of 2 percent above INR 1 crore or 5 percent above INR 10 crore, and 4 percent cess, which is about 36.4 to 38.22 percent. Presumptive rules may apply in some cases. Rates can change in the Budget." },
  { q: "Is a project office a permanent establishment in India?", a: "Generally yes. A project office is a fixed place of business, and a construction or installation project can also create a permanent establishment under the treaty once it passes the time test. AU Corporate reviews the treaty and project duration." },
  { q: "Is presumptive taxation available for a project office?", a: "In some cases. India's income tax law has presumptive rules for certain foreign companies, such as civil construction or erection of plant for turnkey power projects, where a fixed percentage of receipts is taken as profit. AU Corporate checks if your contract qualifies and compares it with normal accounts." },
  { q: "Does the Indian client deduct tax on payments to a project office?", a: "Often yes. The client may deduct tax at source on payments to a foreign company, and a lower deduction certificate can reduce it where the project's real profit is lower. AU Corporate applies for the certificate and reconciles the credit." },
  { q: "Does a project office file an income tax return in India?", a: "Yes. A foreign company's project office files its income tax return every year, with a tax audit report where its turnover exceeds the limit. It also pays advance tax in four instalments. AU Corporate prepares and files the return." },
  { q: "What is advance tax and when is it paid?", a: "Advance tax is the tax paid in instalments during the year. A project office pays it by 15 June, 15 September, 15 December and 15 March, based on its estimated income, after credit for tax deducted by the client. AU Corporate estimates and tracks it." },
  { q: "Does transfer pricing apply to a project office in India?", a: "It can. Dealings between the project office and other group companies are tested at arm's length, and a Form 3CEB report is needed above the thresholds. Profit attribution from the foreign company is also reviewed. AU Corporate prepares the report." },
  { q: "Does a project office need to register for GST in India?", a: "Generally yes. A project office registers for GST if its turnover is above the limit or it makes certain supplies, such as works contract services, and files returns monthly or quarterly. AU Corporate checks the limit and registers the project office." },
  { q: "Do GST rules treat the project office and its head office as separate?", a: "Yes. Under GST, a project office and its head office abroad are distinct persons, so services between them are generally not zero-rated exports, and services received from the head office can be an import of services taxed on reverse charge. AU Corporate analyses each case." },
  { q: "What tax paperwork is needed to remit money to the foreign company?", a: "Payments such as fees, royalties or interest need tax analysis, a withholding rate under the treaty where it applies, and Forms 15CA and 15CB. Remittance of surplus needs a Chartered Accountant's certificate. AU Corporate prepares them." },
  { q: "How does a tax treaty help a foreign company with a project office?", a: "India has tax treaties with most countries, including Russia and Sri Lanka, which can reduce tax on certain payments and decide when a construction or installation site becomes a permanent establishment. A tax residency certificate and Form 10F are usually needed. AU Corporate prepares the documents and opinions." },
  { q: "How are expats working in a project office taxed in India?", a: "An expat's salary for work done here is taxable here, whoever pays it, and the residence status, treaty and social security position matter. AU Corporate reviews each expat, deducts tax where needed and prepares their returns." },
  { q: "Is tax clearance needed to close a project office?", a: "Generally yes. The AD bank asks for evidence that taxes are paid before the surplus is remitted, and the tax position should be settled before the project office is closed. AU Corporate prepares the final returns and the paperwork." },
  { q: "Can AU Corporate represent a project office in tax and GST disputes?", a: "Yes. AU Corporate replies to notices and represents the project office before the Assessing Officer, Transfer Pricing Officer, Dispute Resolution Panel, CIT(A) and ITAT, and handles GST notices, appeals and refunds. AU Corporate handles this for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. Fees are agreed in writing." },
]

const faqsCol1 = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsCol2 = faqs.slice(Math.ceil(faqs.length / 2))

export default function ProjectOfficeTaxGstTransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Project Office Tax, GST and Transfer Pricing" }]} />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Project Office in India</span>
              <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Tax, GST and Transfer Pricing for Your India Project Office
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Income tax, permanent establishment review, GST, TDS, transfer pricing, treaty opinions and remittance tax compliance for the project office of a foreign company.
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Tax, GST and Transfer Pricing for a Project Office: The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A project office in India is taxed as a foreign company, at 35 percent plus surcharge and cess, on profits from the project, unless a presumptive rule applies. The Indian client may deduct tax at source, a lower deduction certificate can reduce it, and the project office must pay advance tax, file a return, register for GST and treat its head office as a distinct person under GST. AU Corporate, a New Delhi firm of Chartered Accountants, handles each of these.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Written and reviewed by <AuthorLink className="font-semibold text-gray-700 hover:underline" />, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tax Compliance Built Around the Contract</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The tax outcome of a project depends on the contract, its duration, who deducts tax and the treaty — see the{" "}
                <Link href="/project-office-registration" className="text-gold-dark font-semibold hover:underline">Project Office Registration guide</Link>{" "}
                for how the construction/installation PE position fits the wider structure. Early planning avoids refund delays at the end of the project.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate prepares tax workings from the project books, so the return, audit report and transfer pricing report agree.
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

      {/* TAX AREAS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Handle, Tax by Tax</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The tax areas a project office deals with most often.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {taxAreas.map((item) => (
              <div key={item.title} className="p-6 bg-white border rounded-lg">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7a5c00] bg-[#fffbe6] px-2 py-0.5 rounded mb-3">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAX RATE TABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Income Tax Rate for a Project Office</h2>
          <p className="text-gray-600 leading-relaxed mb-8">A project office pays tax as a foreign company, unless a presumptive rule applies.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="text-left font-bold text-gray-900 mb-2 caption-top">Effective Income Tax Rate for a Project Office of a Foreign Company</caption>
              <thead className="bg-[#081a42] text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold">Taxable Income</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Base Tax</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Surcharge</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Cess</th>
                  <th className="border border-gray-300 p-4 text-left font-bold">Effective Rate</th>
                </tr>
              </thead>
              <tbody>
                {taxRates.map((row, i) => (
                  <tr key={row.income} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="border border-gray-300 p-4 text-sm font-semibold">{row.income}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.base}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.surcharge}</td>
                    <td className="border border-gray-300 p-4 text-sm">{row.cess}</td>
                    <td className="border border-gray-300 p-4 text-sm font-semibold">{row.effective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">Rates apply under the Income-tax Act, 2025 and can change in each Budget, so we confirm them for your year. Treaty or presumptive rules may apply to certain income.</p>
        </div>
      </section>

      {/* NEED FROM YOU */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Need from You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin.</p>
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
            <strong>Not included:</strong> government fees and tax payments, customs duty advice on imported project equipment, and representation in tax disputes, which is quoted separately.
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
            title="Need Tax, GST or Transfer Pricing Support for Your Project Office?"
            description="Tell us about your project office's contract value, head office dealings and any notices received, and our team will confirm the filings and representation you need."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Project Office Tax, GST and Transfer Pricing",
            description:
              "Foreign company tax rate, permanent establishment, lower deduction certificate, presumptive tax, GST, transfer pricing and treaty relief for the India project office of a foreign company.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/project-office-tax-gst-transfer-pricing",
            areaServed: "India",
            serviceType: "Project Office Tax, GST and Transfer Pricing",
          }),
        }}
      />
    </main>
  )
}
