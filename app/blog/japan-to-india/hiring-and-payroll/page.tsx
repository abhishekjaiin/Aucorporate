import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"
import { GuideCountryContext } from "@/components/guide/GuideCountryContext"

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/hiring-and-payroll"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "before", label: "Before the first hire" },
  { id: "contract", label: "What an Indian employment contract should cover" },
  { id: "benefits", label: "Statutory benefits and deductions" },
  { id: "payroll", label: "The monthly payroll cycle" },
  { id: "codes", label: "India's labour codes" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the notice period in India?", a: "The notice period in India is set by the employment contract, commonly one to three months for professional roles. State and statutory rules also apply, so it should be written clearly into each contract." },
  { q: "Does an Indian subsidiary have to register for provident fund?", a: "Establishments above the prescribed employee limit must register, and many companies register earlier. Confirm the position for your headcount and state." },
  { q: "Can at-will employment be used in India?", a: "At-will employment cannot be used in India. Employment in India is contract based, and termination must follow the contract and applicable law." },
  { q: "What is gratuity?", a: "A lump sum paid to an employee on leaving after the qualifying period of service, typically five years. The rules are being consolidated in the labour codes, so confirm the current position." },
  { q: "Can EOR employees move into the subsidiary later?", a: "EOR employees can move into the subsidiary later with planning. Employees must agree to the transfer, their service history and benefits such as gratuity and provident fund should carry over, and contracts and notice periods need to be handled, with timing planned so that there is no gap in employment." },
  { q: "What is an Employer of Record and how does it work?", a: "An EOR is the legal employer of your India team. It issues the employment contracts, runs payroll, pays statutory dues and handles compliance, while you direct the day-to-day work. You pay a service fee on top of the employee cost." },
  { q: "What are the employer's payroll obligations?", a: "Pay salaries, deduct and deposit Withholding Tax on salaries, contribute to provident fund and ESI, issue payslips and file the periodic returns. Salary structures should be designed to be both tax-efficient and compliant." },
  { q: "How do ESOPs for Indian employees of a Japanese parent work?", a: "The Japanese parent grants options or restricted stock units to employees of the Indian subsidiary under its plan. FEMA overseas investment rules and reporting apply to the employees, and tax arises on exercise or vesting as salary, with Withholding Tax, and again as capital gains on sale." },
  { q: "What statutory benefits apply to employees in India?", a: "Employees in India typically receive provident fund, ESI for eligible wages, gratuity after the qualifying service period, bonus where applicable, professional tax in some states, and leave benefits. India's labour codes are consolidating these, so the current position for the state and headcount should be confirmed." },
  { q: "What visa does a Japanese executive need?", a: "A Japanese executive needs an employment visa to work in India, because a business visa suits only short meetings. An employment visa typically has a minimum salary condition, and longer stays require registration with the Foreigners Regional Registration Office." },
  { q: "What are the employer contributions for PF and ESI in India?", a: "Employers in India contribute 12% of wages to the provident fund (8.33% to pension and 3.67% to provident fund within the wage ceiling), 0.5% to the EDLI scheme, and 3.25% of wages to ESI for employees earning up to ₹21,000 a month. Employees contribute 12% to the provident fund and 0.75% to ESI." },
]

const relatedCards = [
  { title: "Employer of Record vs. Subsidiary in India: When to Use Each", desc: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Japanese companies.", href: "/blog/japan-to-india/eor-vs-subsidiary" },
  { title: "Sending a Japanese Executive to India: Visa, Housing, Banking and Tax", desc: "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.", href: "/blog/japan-to-india/expat-visa" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/japan-to-india/compliance-calendar" },
  { title: "ESOPs for Indian Employees of a Japanese Parent: FEMA, Tax and Cost Recharge", desc: "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a Japanese parent.", href: "/blog/japan-to-india/esop" },
  { title: "EPF for International Workers in India: What Japanese Expats and Their Employers Must Know", desc: "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme.", href: "/blog/japan-to-india/tax-and-social-security-treaties/epf-international-workers" },
  { title: "The Japan-India Social Security Agreement: Detached Workers, Certificate of Coverage and Totalization", desc: "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" },
]

export default function HiringAndPayrollPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring and Payroll in India for Japanese Companies: Contracts, PF, ESI and Gratuity"
        description="How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "Hiring in India: Contracts, Payroll and Statutory Compliance" },
        ]}
      />

      <GuideHero
        eyebrow="Launch: people and payroll"
        title="Hiring and Payroll in India for Japanese Companies: Contracts, PF, ESI and Gratuity"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          To hire in India, the Indian company (or an Employer of Record) issues employment contracts, registers
          for provident fund, ESI where applicable and professional tax, runs payroll with Withholding Tax on
          salary, and files the periodic returns. Gratuity, bonus and leave rules also apply, and India&apos;s
          labour codes are consolidating several of these rules, so confirm the current position for your state
          and headcount.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Registrations", "Provident fund (EPFO), ESI where applicable, professional tax and state shops and establishment registration"],
                ["Monthly", "Salary, Withholding Tax on salary, provident fund and ESI contributions"],
                ["Withholding Tax on salary", "Deposited by the 7th of the following month"],
                ["Quarterly statement", "Form 138 (previously Form 24Q) for salary Withholding Tax"],
                ["Employment model", "Contract-based; there is no at-will employment in India"],
                ["Labour Codes", "The four Labour Codes took effect on 21 November 2025, with central rules notified on 8 May 2026; allowances excluded from wages cannot exceed 50% of total pay"],
                ["Post-employment non-compete", "Generally not enforceable in India"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="before" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Before the first hire</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the employer: your subsidiary or an Employer of Record.</li>
          <li>Register the company for provident fund, ESI (where applicable), professional tax and the state establishment registration.</li>
          <li>Prepare an employment contract and a policy handbook that fit Indian law.</li>
          <li>Set up payroll, the salary structure and the company&apos;s bank arrangements.</li>
          <li>Agree IP assignment and confidentiality terms in every contract.</li>
        </ol>

        <h2 id="contract" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What an Indian employment contract should cover</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Designation, place of work, probation and confirmation.</li>
          <li>Compensation structure and benefits, stated as cost to company with its components.</li>
          <li>Notice period and termination terms. Termination follows the contract and the law, so the terms must be written for Indian law.</li>
          <li>Confidentiality, IP assignment and data protection duties.</li>
          <li>Restrictions after employment. Non-compete clauses that apply after employment are generally unenforceable in India, so protect the business through confidentiality, IP and non-solicitation drafting.</li>
        </ul>

        <h2 id="benefits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Statutory benefits and deductions</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it is</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Provident fund", "Employer 12% and employee 12% of wages; the employer's 12% splits into 8.33% pension and 3.67% provident fund within the wage ceiling, plus 0.5% for EDLI insurance. Mandatory for establishments with 20 or more employees"],
                ["ESI", "Employer 3.25% and employee 0.75% of wages for employees earning up to ₹21,000 a month (₹25,000 for persons with disabilities), in establishments with 10 or more employees"],
                ["Gratuity", "15 days' wages for each completed year of service, after five years of continuous service (one year for fixed-term employees under the Labour Codes in force since 21 November 2025)"],
                ["Bonus", "Statutory bonus of 8.33% to 20% of wages for eligible employees, within the wage limit set by the Code on Wages"],
                ["Professional tax", "A state tax capped at ₹2,500 per employee a year, deducted by the employer where the state levies it"],
                ["Leave and holidays", "Governed by state establishment law and the company's policy"],
                ["Withholding Tax on salary", "Deducted from salary each month and deposited with the government"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="payroll" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The monthly payroll cycle</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Collect attendance, leave and changes to pay.</li>
          <li>Compute salary, statutory deductions and Withholding Tax.</li>
          <li>Pay salaries and issue payslips.</li>
          <li>Deposit Withholding Tax by the 7th of the next month and provident fund and ESI by the 15th.</li>
          <li>File the quarterly Withholding Tax statement and the periodic statutory returns.</li>
        </ol>

        <h2 id="codes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India&apos;s labour codes</h2>
        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          India has consolidated many central labour laws into four labour codes covering wages, industrial
          relations, social security and occupational safety. The codes have been brought into force in phases
          and state rules vary, so we confirm the current position for each state and headcount before drafting
          contracts.
        </div>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Do not copy a Japanese offer letter. Indian contracts need notice periods, statutory benefits and IP clauses written for Indian law.</li>
          <li>If you offer equity to Indian employees, see <Link href="/blog/japan-to-india/esop" className="text-blue-800 font-semibold hover:underline">ESOPs for Indian employees of a Japanese parent</Link>.</li>
          <li>Personal data of Indian employees is subject to India&apos;s data protection law, so agree how HR data is shared with the Japanese team.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Hiring people as consultants when they are in substance employees, which creates statutory exposure.</li>
          <li>Starting work before provident fund, ESI and professional tax registrations are in place.</li>
          <li>Copying a Japanese employment contract unchanged, when it may not work under Indian law.</li>
          <li>Leaving out IP assignment and confidentiality clauses.</li>
          <li>Ignoring state-level registrations and professional tax.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See also: Hiring foreign nationals:{" "}
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties/epf-international-workers" className="text-blue-800 font-semibold hover:underline">EPF for international workers</Link>{" "}
          and{" "}
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" className="text-blue-800 font-semibold hover:underline">social security for Japanese expats in India</Link>.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run HR services, payroll and Employer of Record arrangements for foreign companies in India.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources:{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
          and the{" "}
          <a href="https://www.gst.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">GST portal</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/japan-to-india/faq"
          seeAllLabel="See all 216 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Employees' State Insurance Corporation", href: "https://www.esic.gov.in" },
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 20 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Building Your Team in India?"
        description="Tell us your planned roles and headcount, and we'll set up payroll, PF and ESI registration and employment contracts for the subsidiary."
      />
    </main>
  )
}
