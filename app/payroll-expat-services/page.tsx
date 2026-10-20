import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Check } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"
import { RelatedCaseStudies } from "@/components/case-study/RelatedCaseStudies"

const heroFacts = [
  { title: "Reasonable Monthly Fees", body: "A clear written quote before we start" },
  { title: "On-Time Payroll", body: "Salary, PF, ESI and tax paid on the due dates" },
  { title: "Expat Tax and Social Security", body: "For employees posted to India from abroad" },
  { title: "Take Over Existing Payroll", body: "Start from any month" },
]

const quickAnswer = {
  heading: "Payroll and Expat Services for an Indian Subsidiary: The Short Answer",
  text: "An Indian subsidiary must pay salaries on time, deduct income tax at source, and register for and pay provident fund (PF), employee state insurance (ESI) and state-level taxes. Employees posted from abroad have extra rules on tax residence and social security. AU Corporate, a New Delhi firm of Chartered Accountants and Company Secretaries serving foreign parents since 2016, runs payroll, social security compliance (PF and ESI), professional tax, labour law compliance, recruitment and FRRO registration for expats at reasonable monthly fees.",
}

const youGet = [
  "Monthly payroll with payslips and a payroll summary for the parent",
  "PF, ESI and professional tax registered, paid and filed",
  "Income tax on salary deducted and certified to employees",
  "Employment contracts and HR policies prepared",
  "A clear tax and social security plan for each expat",
]

const stepByStep = [
  { tag: "Before You Hire", title: "Recruitment Services", body: "Job descriptions, sourcing and screening of candidates, interview coordination, offers, reference and background checks, so new hires are ready to join your Indian subsidiary." },
  { tag: "Before the First Hire", title: "Employment Contracts", body: "Offer letters, employment contracts and policies that follow Indian law and match your parent's standards." },
  { tag: "When Someone Joins or Leaves", title: "Employee Onboarding and Exit Formalities", body: "For a new joiner: appointment letter, PAN and bank details, PF and ESI enrolment and payroll set-up. For an exit: notice, final settlement, leave encashment, gratuity, relieving letter and PF exit." },
  { tag: "Every Month", title: "Payroll Processing", body: "Attendance and pay inputs, salary calculation, payslips, bank payment file and a payroll summary for your finance team." },
  { tag: "Every Month", title: "Social Security Compliance", body: "Registration, monthly contributions and returns for provident fund (PF) and employee state insurance (ESI), including the rules for foreign employees and India's social security agreements." },
  { tag: "State by State", title: "Professional Tax, Where Applicable", body: "Registration, deduction, payment and returns in the states that levy professional tax, with the labour welfare fund where the state requires it." },
  { tag: "Every Month and Quarter", title: "Tax on Salary", body: "Income tax deducted from salaries, deposited with the government, with the quarterly TDS return and the annual tax certificate for each employee." },
  { tag: "Always", title: "Labour Law Compliance", body: "Registrations and returns under the four labour codes and the state Shops and Establishments law, covering wages, bonus, gratuity, working hours, leave, contract labour and the Internal Committee under the law on sexual harassment at work." },
  { tag: "When an Expat Joins", title: "Expat Tax and Social Security", body: "Tax residence, tax on salary and allowances, treaty relief and the social security position for employees working in India from other countries." },
  { tag: "When an Expat Arrives", title: "FRRO Registration for Expats", body: "Registration of foreign employees with the Foreigners Regional Registration Office through the e-FRRO portal, with visa extensions and updates." },
  { tag: "Once a Year", title: "Payroll Compliance Review", body: "A check of your payroll, registrations and returns against the labour codes, with a list of errors and the cost of fixing them." },
]

const needFromYou = [
  { n: "1", title: "Employee Details", body: "Name, PAN, bank account, date of joining and pay structure for each employee." },
  { n: "2", title: "Pay Inputs", body: "Attendance, leave, bonuses and deductions for each month, by an agreed date." },
  { n: "3", title: "Company Registrations", body: "PAN, TAN and any existing PF, ESI and professional tax registrations." },
  { n: "4", title: "Expat Documents", body: "Passport, visa, home-country payroll details and the assignment letter for each expat." },
  { n: "5", title: "Earlier Payroll Records", body: "Past payslips, returns and tax certificates for an existing payroll." },
]

const workSteps = [
  { wk: "Days 1-3", title: "Inputs", body: "You share attendance and pay changes." },
  { wk: "Days 3-5", title: "Calculate", body: "We calculate pay, tax and statutory deductions." },
  { wk: "Days 5-6", title: "Approve", body: "You approve the payroll summary." },
  { wk: "Last Working Days", title: "Pay", body: "Salary is paid and payslips are sent." },
  { wk: "By the 15th", title: "Comply", body: "PF, ESI and tax are paid and returns filed." },
]

const included = [
  "Recruitment Support",
  "Employment Contracts and HR Policies",
  "Employee Onboarding and Exit Formalities",
  "Payroll Processing and Payslips",
  "Payroll Summary for the Parent",
  "Social Security Compliance (PF and ESI)",
  "Professional Tax, Where Applicable",
  "Tax on Salary, TDS Returns and Annual Tax Certificates",
  "Labour Law Compliance Under the Labour Codes",
  "Expat Tax and Social Security Advice",
  "FRRO Registration and Updates for Expats",
  "Payroll Compliance Review",
]

const calendar = [
  { when: "Every month, last working days", what: "Salary payment and payslips", how: "Processed and paid" },
  { when: "By the 7th of the next month", what: "Deposit of tax deducted from salary", how: "Calculated and deposited" },
  { when: "By the 15th of the next month", what: "PF and ESI contributions and returns", how: "Calculated, paid and filed" },
  { when: "State-wise, monthly or yearly", what: "Professional tax and labour welfare fund", how: "Registered and paid" },
  { when: "Within 14 days of arrival, for stays over 180 days", what: "FRRO registration of a foreign employee", how: "Registered through the e-FRRO portal" },
  { when: "Before the visa expires", what: "Visa extension through the FRRO", how: "Application prepared and filed" },
  { when: "Quarterly", what: "TDS returns on salary", how: "Prepared and filed" },
  { when: "By 15 June", what: "Annual tax certificate for each employee", how: "Prepared and issued" },
]

const afterLinks = [
  { label: "Accounting, Reporting and Audit Support", href: "/accounting-reporting-audit-support" },
  { label: "Corporate Tax, GST and Transfer Pricing", href: "/corporate-tax-gst-transfer-pricing" },
  { label: "Secretarial and ROC Compliance", href: "/secretarial-roc-compliance" },
  { label: "FEMA and RBI Compliance", href: "/fema-rbi-compliance" },
  { label: "India Subsidiary Registration", href: "/india-subsidiary-registration" },
]

const faqs = [
  { q: "How much does payroll processing cost in India?", a: "AU Corporate charges reasonable fees for this service, in US dollars, and confirms a clear written quote before work begins, so there are no surprises. The fee depends on the size of your subsidiary, the volume of work and whether past filings need to be reviewed. Government fees and third-party fees are separate." },
  { q: "What does payroll for an Indian subsidiary include?", a: "In India, payroll includes calculating salary, deducting tax at source, provident fund, state insurance and professional tax, paying employees, issuing payslips, depositing statutory dues and filing returns. AU Corporate does each of these for you and sends a payroll summary your parent's finance team can use." },
  { q: "What is PF and when is it mandatory in India?", a: "In India, provident fund (PF) is a retirement savings scheme to which the employer and the employee each usually contribute 12 percent of basic pay, up to a wage ceiling. It is mandatory for establishments with 20 or more employees and voluntary below that. AU Corporate registers the Indian subsidiary and files monthly returns." },
  { q: "What is ESI and which employees does it cover?", a: "In India, employee state insurance (ESI) is a health and benefits scheme for employees whose monthly wages are within the notified limit, in establishments above the notified size. Employer and employee both contribute. AU Corporate checks if your subsidiary is covered and handles registration and monthly payment." },
  { q: "When are payroll payments and returns due in India?", a: "In India, tax deducted from salary is generally deposited by the 7th of the next month, and PF and ESI contributions by the 15th. Professional tax follows state rules, and TDS returns are filed quarterly. AU Corporate tracks every date and makes each payment on time." },
  { q: "What is professional tax and does my subsidiary need to pay it?", a: "In India, professional tax is a small state tax on employment, deducted from salaries in states such as Maharashtra, Karnataka and West Bengal, and registered and paid under each state's rules. AU Corporate checks the state of each office and employee and handles registration, payment and returns." },
  { q: "Can a foreign employee work for my Indian subsidiary, and what visa do they need?", a: "In India, a foreign employee generally needs an employment visa, which has a minimum salary condition, and must register with the foreigners regional registration office after arrival if the stay is long. The employee or employer makes the visa application, and AU Corporate explains the tax and payroll side." },
  { q: "How does payroll deduct tax for an expat working in India?", a: "In India, the Indian subsidiary deducts tax from an expat's salary every month, based on the expat's tax residence, salary and allowances and any treaty relief, and deposits it with the government. AU Corporate calculates the monthly deduction, issues the payslip and the annual tax certificate, and coordinates with our tax team for the expat's return." },
  { q: "Do expats have to contribute to provident fund in India?", a: "In India, foreign employees working in covered establishments generally must contribute to provident fund, unless a social security agreement between India and their home country exempts them with a certificate of coverage. AU Corporate checks your country's agreement and handles the registration or exemption." },
  { q: "What employment documents does an Indian subsidiary need?", a: "In India, a subsidiary needs offer letters, employment contracts, policies on leave and conduct, and statutory records, and may need gratuity and bonus provisions. AU Corporate drafts these to follow Indian law and match your parent's standards, and revises them when the law changes." },
  { q: "What is the minimum salary for a foreign employee on an employment visa in India?", a: "In India, an employment visa for a foreign employee generally requires an annual salary above USD 25,000, with exceptions for certain roles such as ethnic cooks and language teachers. The visa is applied for by the employee or the employer. AU Corporate sets up the Indian payroll to match the contract used for the visa." },
  { q: "What is the annual tax certificate for employees in India and when is it issued?", a: "In India, the Indian subsidiary issues each employee an annual tax certificate (called Form 16 under the earlier law) showing the salary paid and tax deducted for the year, generally by 15 June after the year ends. AU Corporate prepares the certificates from the payroll and the quarterly TDS returns." },
  { q: "How are shares or RSUs of a foreign parent given to Indian employees taxed in India?", a: "In India, shares or RSUs of the foreign parent that are allotted to employees are generally taxed as a salary perquisite on the value at the time of allotment, so the Indian subsidiary must deduct tax through payroll. AU Corporate calculates the value and the tax, and reports it in the payroll and the tax certificate." },
  { q: "Does an Indian subsidiary have to pay a bonus to its employees?", a: "In India, the law on bonus applies to establishments above a set number of employees and to employees below a salary limit, and it sets a minimum and a maximum bonus. AU Corporate checks whether it applies to your Indian subsidiary under the current rules, including the labour codes, and includes it in payroll." },
  { q: "How does an Indian subsidiary handle resignation, notice period and final settlement?", a: "In India, the employment contract sets the notice period, and on exit the Indian subsidiary pays the final dues, such as pending salary, leave encashment and gratuity where it applies, and issues a relieving letter. AU Corporate calculates the final settlement, deducts the tax and completes the PF exit records." },
  { q: "What leave and holidays must an Indian subsidiary give employees?", a: "In India, leave and holiday rules depend on the state where the office is, because each state has its own Shops and Establishments law. AU Corporate sets up a leave policy that meets the state rules, tracks leave in payroll and keeps your parent's policy aligned." },
  { q: "How should an Indian subsidiary structure employee salary, and what is CTC?", a: "In India, cost to company (CTC) is the total annual cost of an employee, split into basic pay, allowances, employer PF and other benefits. The structure affects the employee's tax and the PF contribution. AU Corporate designs a compliant salary structure that matches your parent's compensation policy." },
  { q: "Can an Indian subsidiary pay a consultant or contractor instead of hiring an employee?", a: "In India, an Indian subsidiary can engage consultants and contractors, but it must deduct tax on their fees and cannot treat a person who works like an employee as a contractor. AU Corporate reviews each arrangement, sets up the tax deduction and tells you whether it should be payroll instead." },
  { q: "What is social security compliance for an Indian subsidiary?", a: "In India, social security compliance means registering the Indian subsidiary and its employees for provident fund (PF), employee state insurance (ESI) and related schemes, deducting and paying contributions every month and filing the returns. These now fall under the Code on Social Security, 2020. AU Corporate handles the registration, payments and returns." },
  { q: "Does every state in India charge professional tax?", a: "No. In India, professional tax is charged by individual states, such as Maharashtra, Karnataka, West Bengal, Gujarat and Tamil Nadu, and some states, such as Delhi and Haryana, do not charge it. AU Corporate checks the state of each office and employee, and registers and pays only where the tax applies." },
  { q: "What labour laws apply to an Indian subsidiary?", a: "In India, an Indian subsidiary must follow the four labour codes in force since 21 November 2025, on wages, social security, industrial relations, and occupational safety and working conditions, as well as the Shops and Establishments law of its state and the law on sexual harassment at work. AU Corporate checks which provisions apply to your size and state." },
  { q: "What are the four labour codes in India and how do they affect payroll?", a: "The four labour codes replaced 29 central labour laws from 21 November 2025. The Code on Wages gives one definition of wages, which affects how PF, gratuity and bonus are calculated. AU Corporate reviews your salary structure and payroll against the codes and updates both where needed." },
  { q: "Does an Indian subsidiary need an Internal Committee under the POSH law?", a: "In India, an employer with 10 or more employees at a workplace must set up an Internal Committee to hear complaints of sexual harassment, run awareness sessions and file an annual report. AU Corporate sets up the committee, drafts the policy and prepares the annual report." },
  { q: "Does an Indian subsidiary need a Shops and Establishments registration?", a: "In India, an office must generally register under the Shops and Establishments law of its state shortly after it starts, and renew the registration as the state requires. The rules on hours, leave and holidays follow the same law. AU Corporate files the registration and tracks the renewals." },
  { q: "What is FRRO registration and which foreign employees need it?", a: "In India, the Foreigners Regional Registration Office (FRRO) registers foreigners staying on long-term visas. A foreign employee on an employment visa valid for more than 180 days must generally register within 14 days of arrival. AU Corporate files the registration through the e-FRRO portal." },
  { q: "What happens if an expat does not register with the FRRO on time?", a: "A foreigner who does not register on time can face penalties and may have difficulty extending the visa or leaving India. AU Corporate tracks the dates for each expat and files the registration, extension and updates so the employee stays compliant." },
  { q: "Can AU Corporate extend or change an expat's visa details in India?", a: "AU Corporate files visa extensions, changes of address and other updates for foreign employees through the FRRO, with the employer's documents prepared in advance. The first visa application is made by the employee or the employer, and AU Corporate explains the documents needed." },
  { q: "What does onboarding a new employee in an Indian subsidiary involve?", a: "In India, onboarding a new employee involves an appointment letter, PAN and bank details, a PF account number, ESI enrolment where applicable, a tax declaration and set-up in payroll. AU Corporate handles these steps, so the employee is paid correctly from the first month." },
  { q: "Does AU Corporate offer recruitment services for an Indian subsidiary?", a: "AU Corporate helps an Indian subsidiary hire by preparing the job description and salary range, sourcing and screening candidates, coordinating interviews and offers, and carrying out reference and background checks. We then onboard the new hire into payroll. Recruitment fees are quoted separately for each role." },
  { q: "What is a payroll compliance review and when do I need one?", a: "In a payroll compliance review, AU Corporate checks your payroll, PF, ESI, professional tax, TDS and labour law registrations and returns, lists any errors with the cost of fixing them, and corrects the filings. It suits a subsidiary that has changed provider, expects an audit or has not reviewed payroll since the labour codes began." },
  { q: "Can AU Corporate run payroll from the first month?", a: "AU Corporate can run payroll for your Indian subsidiary from its first month, including registrations for PF, ESI and professional tax. Once the Indian subsidiary is incorporated and its bank account is open, we set up payroll and start the monthly cycle." },
  { q: "Can AU Corporate take over payroll for my existing Indian subsidiary?", a: "AU Corporate can take over payroll for an existing subsidiary in any month. We review the latest payslips, registrations and returns, fix any errors, and then run the payroll and compliance cycle from an agreed start date." },
  { q: "What is gratuity and when must an Indian subsidiary pay it?", a: "In India, gratuity is a lump sum paid to an employee on leaving after a minimum period of service, calculated from the last salary and the years of service, in covered establishments. AU Corporate works out the amount for exits and the yearly provision in the books." },
  { q: "Can AU Corporate handle payroll for an expat from my country?", a: "AU Corporate handles payroll and expat compliance for employees from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. We explain how Indian tax and social security interact with your home-country payroll." },
]
const faqsLeft = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsRight = faqs.slice(Math.ceil(faqs.length / 2))

export default function PayrollExpatServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Subsidiary Registration", href: "/india-subsidiary-registration" }, { label: "Payroll and Expat Services" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex-[1.4] min-w-0">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Foreign Subsidiary in India</span>
              <h1 className="mb-5 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Payroll and Expat Services for Your India Subsidiary
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Payroll processing, PF and ESI, employment contracts, and tax and social security compliance for expats working in India, so your team in India is paid correctly and on time.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="https://cal.com/abhishek-jaiin-ybbklq/30min" className="inline-block px-5 py-3 rounded-lg font-bold text-sm bg-gold text-[#081a42] hover:bg-gold-dark transition">Book Consultation with an Expert</a>
                <InquiryTrigger className="inline-block px-5 py-3 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition">Get a Quote</InquiryTrigger>
              </div>
              <p className="text-sm text-white/70">150+ Subsidiaries Incorporated &middot; 150+ Regular Clients &middot; Since 2016</p>
            </div>
            <aside className="flex-1 min-w-[280px] rounded-2xl border border-white/20 bg-white/5 p-6 md:p-7" aria-label="Service summary">
              <ul className="space-y-5">
                {heroFacts.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Check size={13} strokeWidth={3} className="text-[#081a42]" />
                    </span>
                    <div>
                      <strong className="block text-white font-bold">{f.title}</strong>
                      <span className="block text-sm text-white/70">{f.body}</span>
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
          <div className="mb-14 rounded-r-xl border-l-4 border-gold bg-[#fffbe6] p-6 md:p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{quickAnswer.heading}</h2>
            <p className="text-gray-700 leading-relaxed mb-3">{quickAnswer.text}</p>
            <p className="text-sm text-gray-600">
              Written and reviewed by <strong className="text-[#081a42]">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) &middot; Last reviewed: <time dateTime="2026-10-09">9 October 2026</time>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pay Your India Team Correctly, from the First Month</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Indian payroll involves several registrations, monthly payments and yearly returns, and each state has its own rules. Mistakes show up in employees&apos; pay, in tax notices and in provident fund records that are hard to correct later.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate processes your payroll, makes the statutory payments, issues payslips and tax certificates, and prepares the employment documents. For expats, we explain the tax and social security position before the employee arrives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">You Get</h3>
              <ul className="space-y-3">
                {youGet.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Check size={11} strokeWidth={3} className="text-[#081a42]" />
                    </span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STEP BY STEP */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Handle, Step by Step</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The payroll and expat work an Indian subsidiary needs, in the order it arises.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {stepByStep.map((item) => (
              <div key={item.title} className="p-6 bg-white border border-gray-200 rounded-lg">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE NEED */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Need from You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin. For an existing payroll we start from your latest payslips and returns.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {needFromYou.map((item) => (
              <div key={item.title} className="p-5 bg-secondary/30 border border-gray-200 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#081a42] text-gold font-bold text-sm flex items-center justify-center mb-3">{item.n}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW MONTHLY PAYROLL WORKS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How the Monthly Payroll Works</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The same steps every month, so your employees always know when they will be paid.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workSteps.map((step) => (
              <div key={step.title} className="border-t-4 border-gold bg-white rounded-b-lg p-4 shadow-sm">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{step.wk}</span>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Reasonable monthly fees, confirmed in writing before we start.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#081a42] text-gold text-xs font-bold flex items-center justify-center mt-0.5">&#10003;</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Not included:</strong> the salary and statutory contributions themselves, visa and immigration application fees, recruitment fees for each role, and the individual tax returns of employees, which are available separately from the same team.
          </p>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Payroll Compliance Calendar</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when, for an Indian subsidiary. We track every date for you.</p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-[#081a42] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">When</th>
                  <th className="text-left px-4 py-3 font-semibold">What</th>
                  <th className="text-left px-4 py-3 font-semibold">How AU Helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {calendar.map((row) => (
                  <tr key={row.what}>
                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{row.when}</td>
                    <td className="px-4 py-3 text-gray-600">{row.what}</td>
                    <td className="px-4 py-3 text-gray-600">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">Dates and rates depend on the state and the size of the company and can change by notification, so we confirm those that apply to your subsidiary.</p>
        </div>
      </section>

      {/* CASE STUDY */}
      <RelatedCaseStudies serviceSlug="payroll-expat-services" />

      {/* AFTER SETUP */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-8 items-center justify-between border border-gray-200 rounded-2xl p-8 bg-secondary/30">
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">One Team for the Rest of Your Compliance</h2>
              <p className="text-gray-600">Payroll figures must agree with your books, tax returns and statutory records. The same team handles each of them.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {afterLinks.map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 border border-[#081a42] text-[#081a42] rounded-full text-sm font-semibold hover:bg-[#081a42] hover:text-white transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30" id="faq">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Questions Before You Start</h2>
          <p className="text-gray-600 mb-6">Straight answers to the questions foreign finance teams ask most. Can&apos;t find yours? Ask us in the form below.</p>
          <p className="text-sm text-gray-600 mb-1">
            Written and reviewed by <strong className="text-[#081a42]">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) &middot; Last reviewed: <time dateTime="2026-10-09">9 October 2026</time>
          </p>
          <p className="text-sm text-gray-500 mb-10">
            This is general guidance based on Indian law and practice as at the date above. It is not advice for your specific case, and rules can change.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10">
            <FaqAccordion faqs={faqsLeft} />
            <FaqAccordion faqs={faqsRight} />
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
      <section className="py-16 bg-white" id="contact">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Need Payroll or Expat Support for Your India Team?"
            description="Tell us where your parent company is, how many employees you have in India, and whether any expats are working there, and we'll reply with a clear quote."
          />
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "India Subsidiary Registration",
                href: "/india-subsidiary-registration",
                description: "Incorporation and bank account opening, which must be complete before payroll can start.",
              },
              {
                label: "Accounting, Reporting and Audit Support",
                href: "/accounting-reporting-audit-support",
                description: "The monthly books that payroll costs and statutory dues flow into.",
              },
              {
                label: "FEMA and RBI Compliance",
                href: "/fema-rbi-compliance",
                description: "FEMA considerations for expat secondment structures and parent-funded costs.",
              },
              {
                label: "Corporate Tax, GST and Transfer Pricing",
                href: "/corporate-tax-gst-transfer-pricing",
                description: "Expat tax residence, treaty relief and foreign tax credit covered in more depth.",
              },
              {
                label: "Secretarial and ROC Compliance",
                href: "/secretarial-roc-compliance",
                description: "Board approvals and statutory records for the entity employing your India team.",
              },
              {
                label: "HR & Payroll Solutions",
                href: "/hr-services",
                description: "AU Corporate's broader HR, workforce and payroll compliance practice.",
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
            name: "Payroll, PF, ESI and Expat Services",
            description:
              "Payroll processing, social security compliance (PF and ESI), professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats working for Indian subsidiaries of foreign companies.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/payroll-expat-services",
            areaServed: "India",
            serviceType: "Payroll and Expat Compliance Services for Indian Subsidiaries",
          }),
        }}
      />
    </main>
  )
}
