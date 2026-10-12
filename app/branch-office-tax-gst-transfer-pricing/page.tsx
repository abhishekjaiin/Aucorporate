import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"

const taxAreas = [
  { tag: "Every Year", title: "Income Tax Return and Tax Audit", body: "Computation of Indian profits, the return and the tax audit report." },
  { tag: "Four Times a Year", title: "Advance Tax", body: "Estimate and payment in each instalment." },
  { tag: "Every Month and Quarter", title: "TDS Compliance", body: "Deduction, deposit and quarterly returns." },
  { tag: "Every Month", title: "GST Registration and Returns", body: "Registration, returns and input credit, with analysis of head office supplies." },
  { tag: "Every Year", title: "Transfer Pricing and Profit Attribution", body: "Form 3CEB and documentation for group dealings." },
  { tag: "When Profit Goes Abroad", title: "Remittance Tax Compliance", body: "Forms 15CA and 15CB and treaty rates for each remittance." },
  { tag: "When an Expat Joins", title: "Expat Taxation", body: "Residence, salary tax, treaty relief and returns." },
  { tag: "When a Notice Arrives", title: "Assessments, Appeals and GST Litigation", body: "Representation before tax and GST authorities and tribunals." },
  { tag: "Before a Doubtful Transaction", title: "DTAA and Advance Ruling Opinions", body: "Treaty opinions and advance rulings for certainty before you act." },
]

const taxRates = [
  { income: "Up to INR 1 crore", base: "35%", surcharge: "None", cess: "4%", effective: "36.4%" },
  { income: "INR 1 crore to 10 crore", base: "35%", surcharge: "2%", cess: "4%", effective: "37.128%" },
  { income: "Above INR 10 crore", base: "35%", surcharge: "5%", cess: "4%", effective: "38.22%" },
]

const needFromYou = [
  { n: "1", title: "Audited Accounts", body: "The branch office's accounts and the parent's latest accounts." },
  { n: "2", title: "Tax Registrations", body: "PAN, TAN, GST and past returns." },
  { n: "3", title: "Head Office Agreements", body: "Agreements for services, loans or cost sharing with the head office." },
  { n: "4", title: "Expat Details", body: "Passport, visa and salary details for each expat." },
  { n: "5", title: "Notices", body: "Copies of any tax or GST notices received." },
]

const included = [
  "Income Tax Return and Tax Audit",
  "Advance Tax",
  "TDS Returns",
  "GST Registration and Returns",
  "Transfer Pricing Report",
  "Remittance Certificates",
  "Expat Taxation",
  "Tax Treaty Opinions",
]

const faqs = [
  { q: "What taxes does a branch office of a foreign company pay in India?", a: "A branch office pays income tax as a foreign company on profits attributable to its Indian business, deducts and deposits TDS on its payments, and registers for and files GST. AU Corporate prepares and files all of these." },
  { q: "What is the income tax rate for a branch office in India?", a: "A foreign company's branch office pays 35 percent tax on its income, plus surcharge of 2 percent above INR 1 crore or 5 percent above INR 10 crore, and 4 percent cess. The effective rate is about 36.4 to 38.22 percent. Rates can change in the Budget." },
  { q: "Is a branch office a permanent establishment in India?", a: "Generally yes. A branch office is a fixed place of business, so it is a permanent establishment of the foreign company, and profits attributable to it are taxed in India under the income tax law and the tax treaty. AU Corporate computes the attributable profit." },
  { q: "How are the profits of a branch office decided for tax?", a: "Profits are worked out from the branch office's own audited accounts, with deductions for expenses of the Indian business, and head office expenses allowed only within the limit in the law. AU Corporate computes the income and prepares the return." },
  { q: "Does a branch office file an income tax return in India?", a: "Yes. A foreign company's branch office files its income tax return every year, with a tax audit report where its turnover exceeds the limit. It also pays advance tax in four instalments. AU Corporate prepares and files the return." },
  { q: "What is advance tax and when is it paid?", a: "Advance tax is the tax paid in instalments during the year. A branch office pays it by 15 June, 15 September, 15 December and 15 March, based on its estimated income. AU Corporate estimates the tax and tracks each date." },
  { q: "Does transfer pricing apply to a branch office in India?", a: "It can. Dealings between the branch office and other group companies are tested at arm's length, and a Form 3CEB report is needed above the thresholds. Profit attribution to the branch office from the head office is also reviewed. AU Corporate prepares the report." },
  { q: "Does a branch office need to register for GST in India?", a: "Generally yes. A branch office registers for GST if its turnover is above the limit or it makes certain supplies, and files returns monthly or quarterly. AU Corporate checks the limit for your services and registers the branch office." },
  { q: "Can a branch office claim GST export benefits on services to its head office?", a: "Usually not. Under GST, a branch office and its head office abroad are treated as distinct persons, so services between them are generally not zero-rated exports. AU Corporate reviews each arrangement before invoicing." },
  { q: "Does GST apply on services received from the head office?", a: "Often yes. Under GST, services a branch office receives from its head office abroad can be an import of services, taxed on reverse charge, with input credit where allowed. AU Corporate analyses the position for each type of charge." },
  { q: "What is TDS and which payments does a branch office deduct it on?", a: "TDS is tax deducted at source. A branch office deducts it on salaries, rent, fees to professionals and vendors and payments abroad, deposits it with the government and files quarterly returns. AU Corporate calculates, deposits and files." },
  { q: "What tax paperwork is needed to remit money to the head office?", a: "Payments to the head office such as fees, royalties or interest need tax analysis, a withholding rate under the treaty where it applies, and Forms 15CA and 15CB. Profit remittance needs a Chartered Accountant's certificate. AU Corporate prepares them." },
  { q: "How does a tax treaty help a foreign company with a branch office?", a: "India has tax treaties with most countries, including Russia and Sri Lanka, which can reduce tax on certain payments and decide how a permanent establishment is taxed. A tax residency certificate and Form 10F are usually needed. AU Corporate prepares the documents and opinions." },
  { q: "How are expats working in a branch office taxed in India?", a: "An expat's salary for work done here is taxable here, whoever pays it, and the residence status, treaty and social security position matter. AU Corporate reviews each expat, deducts tax where needed and prepares their returns." },
  { q: "Can AU Corporate represent a branch office in tax and GST disputes?", a: "Yes. AU Corporate replies to notices and represents the branch office before the Assessing Officer, Transfer Pricing Officer, Dispute Resolution Panel, CIT(A) and ITAT, and handles GST notices, appeals and refunds. AU Corporate handles this for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. Fees are agreed in writing." },
]

export default function BranchOfficeTaxGstTransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Branch Office in India", href: "/branch-office-in-india" }, { label: "Tax, GST and Transfer Pricing" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">Branch Office in India</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold md:text-5xl">
            Tax, GST and Transfer Pricing for Your India Branch Office
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-white/85">
            Income tax, GST, TDS, transfer pricing, treaty opinions, remittance tax compliance and expat tax for the branch office of a foreign company.
          </p>
          <p className="text-white/70 leading-relaxed">
            A branch office in India is taxed as a foreign company, at 35 percent plus surcharge and cess, on profits attributable to its Indian business. It must deduct TDS, pay advance tax, file a return, register for GST, and treat its head office as a distinct person under GST.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Compliance That Matches Your Head Office Expectations</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A branch office pays more tax than a subsidiary and has its own rules on head office expenses and GST — see the{" "}
            <Link href="/branch-office-in-india" className="text-gold-dark font-semibold hover:underline">Branch Office in India guide</Link>{" "}
            for how the PE tax position fits the wider structure. Mistakes fall on the foreign company directly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            AU Corporate prepares tax workings directly from the books, so the return, audit report and transfer pricing report agree.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Return and tax audit filed on time</li>
            <li>Advance tax paid in each instalment</li>
            <li>TDS deducted and reported</li>
            <li>GST registration and returns</li>
            <li>Remittance tax paperwork</li>
          </ul>
        </div>
      </section>

      {/* TAX AREAS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Handle, Tax by Tax</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The tax areas a branch office deals with most often.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {taxAreas.map((item) => (
              <div key={item.title} className="p-6 bg-white border rounded-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAX RATE TABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Income Tax Rate for a Branch Office</h2>
          <p className="text-gray-600 leading-relaxed mb-8">A branch office pays tax as a foreign company, at a higher rate than a domestic subsidiary.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="text-left font-bold text-gray-900 mb-2 caption-top">Effective Income Tax Rate for a Branch Office of a Foreign Company</caption>
              <thead className="bg-gray-100">
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
          <p className="text-sm text-gray-500 mt-4">Rates apply under the Income-tax Act, 2025 and can change in each Budget, so we confirm them for your year. Treaty rates may apply to certain income.</p>
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
            <strong>Not included:</strong> government fees and tax payments, and representation in tax disputes, which is quoted separately.
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
            title="Need Tax, GST or Transfer Pricing Support for Your Branch Office?"
            description="Tell us about your branch office's turnover, head office dealings and any notices received, and our team will confirm the filings and representation you need."
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
                label: "Branch Office FEMA and RBI Compliance",
                href: "/branch-office-fema-rbi-compliance",
                description: "Annual Activity Certificate, profit remittance, additional offices, compounding and closure.",
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
                label: "Taxation and Regulatory Services",
                href: "/services/taxation-regulatory",
                description: "AU Corporate's broader domestic and international tax advisory services.",
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
            name: "Branch Office Tax, GST and Transfer Pricing",
            description:
              "Foreign company tax rate, advance tax, TDS, GST, transfer pricing, permanent establishment, treaty relief and litigation for the India branch office of a foreign company.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/branch-office-tax-gst-transfer-pricing",
            areaServed: "India",
            serviceType: "Branch Office Tax, GST and Transfer Pricing",
          }),
        }}
      />
    </main>
  )
}
