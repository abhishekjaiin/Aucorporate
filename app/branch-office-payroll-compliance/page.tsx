import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"

const heroChecklist = [
  { title: "Reasonable Monthly Fees", body: "A clear written quote before we start" },
  { title: "On-Time Payroll", body: "Salary, social security and tax paid on due dates" },
  { title: "Labour Codes Ready", body: "Wage structure and registrations reviewed" },
  { title: "FRRO for Expats", body: "Visa, registration and exit support" },
]

const youGet = [
  "Monthly payroll with payslips and a head office summary",
  "Social security and professional tax registered and filed",
  "Labour Codes compliance review",
  "Tax on salary deducted and certified",
  "FRRO and visa support for each expat",
]

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
  { when: "Last working days of the month", what: "Salary payment and payslips", help: "Processed and paid" },
  { when: "By the 7th of the next month", what: "Deposit of tax deducted from salary", help: "Calculated and deposited" },
  { when: "By the 15th of the next month", what: "EPF and ESIC contributions and returns", help: "Calculated, paid and filed" },
  { when: "State-wise, monthly or yearly", what: "Professional tax and labour welfare fund", help: "Registered and paid" },
  { when: "Quarterly", what: "TDS returns on salary", help: "Prepared and filed" },
  { when: "Within 14 days of arrival", what: "FRRO registration of an expat on a long-term visa", help: "Prepared and filed" },
  { when: "By 15 June", what: "Annual tax certificate for each employee", help: "Prepared and issued" },
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

const afterLinks = [
  { label: "Branch Office Registration", href: "/branch-office-registration" },
  { label: "Branch Office Accounting, Reporting and Audit", href: "/branch-office-accounting-audit" },
  { label: "Branch Office FEMA and RBI Compliance", href: "/branch-office-fema-rbi-compliance" },
  { label: "Branch Office Tax, GST and Transfer Pricing", href: "/branch-office-tax-gst-transfer-pricing" },
  { label: "ROC Compliance for Foreign Companies (FC Forms)", href: "/foreign-company-roc-compliance" },
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

const faqsCol1 = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsCol2 = faqs.slice(Math.ceil(faqs.length / 2))

export default function BranchOfficePayrollCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Payroll and Labour Law Compliance" }]} />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Branch Office in India</span>
              <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Payroll, Social Security and Labour Law Compliance for Your India Branch Office
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Payroll processing, social security, professional tax, labour law compliance and FRRO support for expats, so your branch office team is paid correctly and on time.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="https://cal.com/abhishek-jaiin-ybbklq/30min" target="_blank" rel="noreferrer" className="inline-block rounded-lg bg-gold px-6 py-3 font-bold text-[#081a42] hover:bg-gold-dark transition-colors">
                  Book Consultation with an Expert
                </Link>
                <Link href="#contact" className="inline-block rounded-lg border-2 border-white px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
                  Get a Quote
                </Link>
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Payroll and Labour Law Compliance for a Branch Office in India: The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A branch office in India must pay salaries on time, deduct tax at source, comply with social security laws (EPF, ESIC, gratuity), pay professional tax where states levy it, follow the four Labour Codes in force since 21 November 2025, and register its expats with the FRRO. AU Corporate, a New Delhi firm of Chartered Accountants and Company Secretaries, runs all of this at reasonable monthly fees.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Written and reviewed by <strong className="text-gray-700">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pay Your Branch Office Team Correctly, from the First Month</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Indian payroll has several registrations, monthly payments and yearly returns, and each state has its own rules. A branch office is part of the foreign company, so its payroll errors fall on the parent — see the{" "}
                <Link href="/branch-office-registration" className="text-gold-dark font-semibold hover:underline">Branch Office Registration guide</Link>{" "}
                for the structure this sits inside.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate processes payroll, makes statutory payments, handles labour-law registrations and supports expats from visa to exit.
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
          <p className="text-gray-600 leading-relaxed mb-8">The payroll, social security, labour-law and expat work a branch office needs.</p>
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
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin. For an existing payroll, we start from your latest payslips and returns.</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Payroll Compliance Calendar</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when. We track every date for you.</p>
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
          <p className="text-sm text-gray-500 mt-4">Dates and rates depend on the state and establishment size, and can change by notification, so we confirm those that apply to your branch office.</p>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Reasonable monthly fees, confirmed in writing before we start.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-secondary/20 border rounded-lg p-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#081a42] text-xs font-bold text-gold">✓</span>
                <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            <strong>Not included:</strong> salaries and statutory contributions themselves, visa and FRRO government fees, and individual tax returns of employees, which are available as separate services.
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
            title="Need Payroll and Labour-Law Compliance for Your Branch Office?"
            description="Tell us how many employees and expats you have in India, and our team will confirm registrations, payroll setup and FRRO support for your specific situation."
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
