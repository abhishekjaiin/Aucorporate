import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"

const handledSteps = [
  { tag: "Before the First Hire", title: "Employment Contracts and HR Policies", body: "Offer letters, contracts and leave and conduct policies that follow the Labour Codes and the state Shops and Establishments law." },
  { tag: "Every Month", title: "Payroll Processing", body: "Salary inputs, calculation, payslips, bank file and a payroll summary for the head office." },
  { tag: "Every Month", title: "Social Security Compliance", body: "Registration, contributions and returns for EPF, pension and ESIC, and gratuity and maternity benefit where they apply, with international-worker rules for expats." },
  { tag: "State-wise", title: "Professional Tax and Welfare Fund", body: "Registration, payment and returns for professional tax and the labour welfare fund in each state where applicable." },
  { tag: "Every Month and Quarter", title: "Tax on Salary", body: "Tax deducted from salary, deposited, with quarterly TDS returns and the annual tax certificate." },
  { tag: "Ongoing", title: "Labour Laws Compliance", body: "Registrations, registers, wage structure under the 50 percent rule, contract-labour checks and the POSH committee where required." },
  { tag: "When an Expat Joins", title: "Expat Employment and FRRO", body: "Employment-visa support letters, FRRO registration, extensions and exit permits, tax residence, treaty relief and social security position." },
  { tag: "On Joining and Leaving", title: "Employee Joining and Exit Formalities", body: "Onboarding records and registrations when someone joins, and final settlement, gratuity, PF exit and relieving letter when they leave." },
]

const needFromYou = [
  { n: "1", title: "Employee Details", body: "Name, PAN, bank account, date of joining and pay structure." },
  { n: "2", title: "Pay Inputs", body: "Attendance, leave, bonuses and deductions each month." },
  { n: "3", title: "Branch Registrations", body: "UIN, PAN, TAN and any EPF, ESIC and professional tax registrations." },
  { n: "4", title: "Expat Documents", body: "Passport, visa, assignment letter and head-office payroll details." },
  { n: "5", title: "Earlier Records", body: "Past payslips, returns and tax certificates." },
]

const calendar = [
  { when: "Last working days of the month", what: "Salary payment and payslips" },
  { when: "By the 7th of the next month", what: "Deposit of tax deducted from salary" },
  { when: "By the 15th of the next month", what: "EPF and ESIC contributions and returns" },
  { when: "State-wise, monthly or yearly", what: "Professional tax and labour welfare fund" },
  { when: "Quarterly", what: "TDS returns on salary" },
  { when: "Within 14 days of arrival", what: "FRRO registration of an expat on a long-term visa" },
  { when: "By 15 June", what: "Annual tax certificate for each employee" },
]

const included = [
  "Payroll Processing and Payslips",
  "Payroll Summary for the Head Office",
  "Social Security Registration, Payment and Returns",
  "Professional Tax Where Applicable",
  "Tax on Salary and TDS Returns",
  "Labour Laws Compliance Review",
  "FRRO Support for Expats",
  "Employment Contracts and HR Policies",
]

const faqs = [
  { q: "How much does branch office payroll cost in India?", a: "AU Corporate charges a reasonable monthly fee and confirms a written quote before work begins. The fee depends on the number of employees, expats and states. Salary, statutory contributions and government fees are separate." },
  { q: "What does payroll for a branch office in India include?", a: "Payroll includes calculating salary, deducting tax at source, social security contributions and professional tax, paying employees, issuing payslips, and depositing dues and filing returns. AU Corporate does each step and sends a payroll summary your head office can use." },
  { q: "What is social security compliance for a branch office in India?", a: "Social security compliance covers the Employees' Provident Fund (EPF) and pension, state insurance (ESIC), gratuity and maternity benefit, under the Code on Social Security, 2020. AU Corporate checks which apply to your branch office, registers it and files the monthly returns." },
  { q: "When must a branch office register for EPF and ESIC?", a: "EPF generally applies to establishments with 20 or more employees, and ESIC to establishments above the notified size for employees within the wage limit. Smaller offices can register voluntarily for EPF. AU Corporate checks your headcount and wages against the current limits." },
  { q: "Do expats working in a branch office have to contribute to EPF in India?", a: "Foreign employees are generally treated as international workers and contribute to EPF on full salary, unless a social security agreement with their country and a certificate of coverage exempts them. AU Corporate checks the agreement and handles registration or exemption." },
  { q: "Does India have a social security agreement with Russia or Sri Lanka?", a: "As far as we know, no agreement is in force with Russia or Sri Lanka, so expats from those countries are generally covered under EPF as international workers without exemption. Please confirm against the EPFO's current list. AU Corporate checks this before the employee arrives." },
  { q: "What is professional tax and does a branch office pay it?", a: "Professional tax is a state tax deducted from salaries in states such as Maharashtra, Karnataka and West Bengal, where it needs registration. AU Corporate checks each state where your branch office or staff are located, and handles registration, payment and returns." },
  { q: "Which labour laws apply to a branch office in India?", a: "The four Labour Codes on wages, industrial relations, social security and workplace safety have been in force since 21 November 2025, with central rules notified on 8 May 2026 and state rules still following. State Shops and Establishments laws also apply. AU Corporate maps these to your branch office." },
  { q: "What is the 50 percent wage rule under the Labour Codes?", a: "The Code on Wages requires wages (basic pay and dearness allowance) to be at least 50 percent of total remuneration. This raises the base for PF, gratuity and bonus. AU Corporate reviews your salary structure and revises payslips to follow the rule." },
  { q: "What is FRRO registration and when must an expat register?", a: "A foreign national on a visa valid for more than 180 days must register with the Foreigners Regional Registration Office (FRRO) within 14 days of arrival. Extensions and exit permits also go through FRRO. AU Corporate prepares the employer documents and supports the e-FRRO filings." },
  { q: "What visa does an expat need to work in a branch office in India?", a: "An expat generally needs an employment visa, which has a minimum annual salary condition of USD 25,000 with exceptions for roles such as language teachers. The branch office or the head office sponsors it. AU Corporate sets up the Indian payroll to match the contract used for the visa." },
  { q: "How is an expat's salary taxed when working in a branch office in India?", a: "Salary for work done in India is taxable here whoever pays it. Whether the branch office deducts tax depends on who pays and who bears the cost, and treaty relief may apply. AU Corporate reviews the arrangement, deducts tax correctly and coordinates the expat's return." },
  { q: "What happens when an employee joins or leaves a branch office?", a: "On joining, the branch office collects KYC and bank details, registers the employee for social security and professional tax, and issues an offer letter. On exit, it pays pending salary, leave encashment and gratuity where due, completes the PF exit records and issues a relieving letter. AU Corporate handles each step." },
  { q: "Can AU Corporate take over the payroll of my existing branch office?", a: "Yes. AU Corporate can take over payroll in any month, review the latest payslips, registrations and returns, fix errors and run the cycle from an agreed date. We can also run payroll from the first month once the branch office has its UIN, PAN, TAN and bank account." },
  { q: "Can AU Corporate handle payroll for expats from my country?", a: "AU Corporate handles payroll and expat compliance for employees from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. We explain how Indian tax, social security and visa rules fit with the home-country payroll." },
]

export default function BranchOfficePayrollCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Branch Office in India", href: "/branch-office-in-india" }, { label: "Payroll and Labour Law Compliance" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">Branch Office in India</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold md:text-5xl">
            Payroll, Social Security and Labour Law Compliance for Your India Branch Office
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-white/85">
            Payroll processing, social security, professional tax, labour law compliance and FRRO support for expats, so your branch office team is paid correctly and on time.
          </p>
          <p className="text-white/70 leading-relaxed">
            A branch office in India must pay salaries on time, deduct tax at source, comply with social security laws (EPF, ESIC, gratuity), pay professional tax where states levy it, follow the four Labour Codes in force since 21 November 2025, and register its expats with the FRRO.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pay Your Branch Office Team Correctly, from the First Month</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Indian payroll has several registrations, monthly payments and yearly returns, and each state has its own rules. A branch office is part of the foreign company, so its payroll errors fall on the parent — see the{" "}
            <Link href="/branch-office-in-india" className="text-gold-dark font-semibold hover:underline">Branch Office in India guide</Link>{" "}
            for the structure this sits inside.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            AU Corporate processes payroll, makes statutory payments, handles labour-law registrations and supports expats from visa to exit.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Monthly payroll with payslips and a head office summary</li>
            <li>Social security and professional tax registered and filed</li>
            <li>Labour Codes compliance review</li>
            <li>Tax on salary deducted and certified</li>
            <li>FRRO and visa support for each expat</li>
          </ul>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Handle, Step by Step</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The payroll, social security, labour-law and expat work a branch office needs.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {handledSteps.map((item) => (
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
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin. For an existing payroll, we start from your latest payslips and returns.</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Payroll Compliance Calendar</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when. Dates and rates depend on the state and establishment size, and can change by notification.</p>
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
          <p className="text-gray-600 leading-relaxed mb-6">Reasonable monthly fees, confirmed in writing before work starts.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 bg-secondary/20 border rounded-lg p-3 text-sm">
                <span className="text-gold-dark font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            <strong>Not included:</strong> salaries and statutory contributions themselves, visa and FRRO government fees, and individual tax returns of employees, which are available as separate services.
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
            title="Need Payroll and Labour-Law Compliance for Your Branch Office?"
            description="Tell us how many employees and expats you have in India, and our team will confirm registrations, payroll setup and FRRO support for your specific situation."
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
                label: "HR and Payroll Solutions",
                href: "/hr-services",
                description: "AU Corporate's broader workforce, payroll and compliance services beyond branch offices.",
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
            name: "Branch Office Payroll and Labour Law Compliance",
            description:
              "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/branch-office-payroll-compliance",
            areaServed: "India",
            serviceType: "Branch Office Payroll and Labour Law Compliance",
          }),
        }}
      />
    </main>
  )
}
