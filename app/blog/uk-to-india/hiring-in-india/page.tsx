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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/hiring-in-india"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "differences", label: "How Indian employment differs from UK practice" },
  { id: "contract", label: "What to put in the Indian employment contract" },
  { id: "payroll", label: "Payroll and registrations in the first 90 days" },
  { id: "esop", label: "Share plans: extending a UK scheme to Indian employees" },
  { id: "models", label: "Own subsidiary or Employer of Record?" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Do UK employment contracts work in India?", a: "Not unchanged. Indian employment is governed by Indian statutes and state rules, so the notice, benefits, termination, IP and restrictive covenant terms must be rewritten. The UK contract can be the starting point for structure and policy." },
  { q: "Is there redundancy pay in India?", a: "There is no UK-style statutory redundancy for all staff. Retrenchment compensation and notice apply for covered workmen in qualifying establishments, while managerial staff terms come mainly from their contracts." },
  { q: "Does TUPE apply in India?", a: "No. India has no direct equivalent. A transfer of staff between employers usually requires new contracts with continuity of service agreed, or a scheme approved by a court." },
  { q: "What is the provident fund contribution in India?", a: "Twelve per cent of wages from the employer and 12% from the employee, on wages up to the ₹15,000 monthly ceiling, with higher contributions possible by choice." },
  { q: "Can UK shares be granted to Indian employees?", a: "Yes. Indian residents can acquire shares of the foreign parent under the RBI's rules. The exercise is taxed in India as a perquisite, and the cost recharge between the companies needs transfer pricing and tax review." },
  { q: "Are non-compete clauses enforceable in India?", a: "Post-termination non-compete restrictions are generally not enforceable. Confidentiality, IP assignment and non-solicitation drafted with care are the more reliable protections." },
]

const relatedCards = [
  { title: "UK Employees Working in India: Treaty Relief, Indian Residence and the Double Contributions Convention", desc: "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK employees working in India.", href: "/blog/uk-to-india/uk-employees-in-india-dcc" },
  { title: "Data Protection for a UK Group with an Indian Subsidiary: UK GDPR Transfers and India's DPDP Act", desc: "How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules, timelines, and practical contract terms.", href: "/blog/uk-to-india/data-protection-uk-gdpr-dpdp" },
  { title: "Choosing an Indian Structure as a UK Company: Subsidiary, Branch, Liaison Office, LLP or Employer of Record", desc: "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through an intermediate company.", href: "/blog/uk-to-india/structure-options" },
  { title: "Building a Global Capability Centre in India as a UK Company: Models, Staging, Regulation and Pricing", desc: "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm outsourcing rules, transfer pricing, PE risk, talent and governance.", href: "/blog/uk-to-india/gcc-for-uk-companies" },
]

export default function HiringInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring in India as a UK Employer: How Indian Employment Differs, and What to Put in the Contract"
        description="How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share plans to Indian employees."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Hiring in India as a UK Employer: Contracts, Payroll, Labour Codes and Share Plans" },
        ]}
      />

      <GuideHero
        eyebrow="People: hiring in India"
        title="Hiring in India as a UK Employer: How Indian Employment Differs, and What to Put in the Contract"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Indian employment is contract-led and statute-heavy: there is no UK-style statutory redundancy or
          TUPE, but employers must register for provident fund and ESI, pay gratuity after five years of
          service, follow state shop and establishment rules and comply with the four labour codes. A UK
          employer can use its own handbook as a base but must rebuild notice, benefits, IP, restrictive
          covenants and termination terms under Indian law.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Employer", "The Indian subsidiary (or an Employer of Record) must be the employer"],
                ["Provident fund", "Employer and employee each contribute 12% of wages up to the wage ceiling of ₹15,000 a month, with higher voluntary contributions possible"],
                ["ESI", "Applies to employees earning up to ₹21,000 a month"],
                ["Gratuity", "Payable after five years of continuous service, with the labour codes allowing earlier payment in some fixed-term cases"],
                ["Professional tax", "State-specific; deducted from salary in states that levy it"],
                ["Labour codes", "The four labour codes are notified as effective from 21 November 2025, with state rules still settling"],
                ["Payroll", "Monthly; provident fund and ESI by the 15th of the next month; salary TDS by the 7th"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="differences" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Indian employment differs from UK practice</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">UK habit</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Contract", "Statement of terms plus statutory rights", "Appointment letter and handbook; rights come from statute and state laws, and the contract must not go below them"],
                ["Probation and notice", "One to three months; statutory minimum notice", "Set by contract and sector rules; one to three months is common, longer for senior staff"],
                ["Redundancy", "Statutory redundancy pay and consultation", "Retrenchment compensation and notice for covered \"workmen\" and conditions for larger units; for managerial staff terms depend on the contract"],
                ["Transfer of business", "TUPE protects employees", "No direct equivalent; transfers need new contracts or a court-approved scheme"],
                ["Pension", "Auto-enrolment", "Employees' Provident Fund and the Pension Scheme; gratuity as an additional benefit"],
                ["Health cover", "Private medical insurance as a perk", "ESI for lower earners; group health insurance is expected by most professionals"],
                ["Restrictive covenants", "Enforceable if reasonable", "Post-termination non-competes are generally unenforceable; confidentiality and IP assignment clauses are enforceable"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="contract" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What to put in the Indian employment contract</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Role, reporting line and place of work, and the working hours and leave policy under the state&apos;s shops and establishment rules.</li>
          <li>Compensation structure: basic, allowances, provident fund, gratuity and variable pay, expressed as cost to company and as monthly take-home.</li>
          <li>Intellectual property assignment, confidentiality and data protection clauses, written for Indian law and linked to your UK policies. See <Link href="/blog/uk-to-india/data-protection-uk-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link>.</li>
          <li>Notice and termination terms, with cause and notice kept consistent with the standing orders and the labour codes.</li>
          <li>Anti-bribery, anti-fraud and conduct policies from the UK parent, so the Bribery Act and fraud-prevention defences apply in practice. See <Link href="/blog/uk-to-india/uk-parent-reporting" className="text-blue-800 font-semibold hover:underline">UK parent obligations</Link>.</li>
          <li>A prevention of sexual harassment policy and an Internal Committee where the headcount requires one.</li>
        </ul>

        <h2 id="payroll" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Payroll and registrations in the first 90 days</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Register the establishment under the state shops and establishment law.</li>
          <li>Register for provident fund and ESI once the thresholds are met, and for professional tax where the state requires.</li>
          <li>Set up salary processing with TDS under the income tax rules and monthly provident fund and ESI payments.</li>
          <li>Issue pay slips, maintain the registers and the Form 16 cycle at year end.</li>
          <li>Start the monthly payroll reconciliation against the books.</li>
        </ol>

        <h2 id="esop" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Share plans: extending a UK scheme to Indian employees</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          UK tax-advantaged schemes such as EMI and CSOP are built around UK taxpayers and do little for Indian
          employees, so grant under an international plan or a purpose-designed Indian arrangement. Indian
          employees can receive shares of the UK parent under the RBI&apos;s overseas investment rules, with the
          reporting handled according to the current rules. The tax follows the Indian perquisite regime: on
          exercise, the difference between fair market value and the exercise price is taxed as salary, with
          capital gains tax on a later sale. If the Indian subsidiary reimburses the UK parent for the cost,
          treat that as an intercompany service with Withholding Tax, GST and transfer pricing considerations.
          Keep valuation, vesting and leaver rules consistent with the UK plan rules.
        </p>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Own subsidiary or Employer of Record?</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Use an Employer of Record for the first hires while the entity is formed or the market tested, then
          move employees across, agreeing the transfer terms and continuity of service upfront. See{" "}
          <Link href="/blog/uk-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.
          A subsidiary is the right employer when the team is more than a handful, when it will sign customer
          contracts or when you wish to build a centre such as the one in{" "}
          <Link href="/blog/uk-to-india/gcc-for-uk-companies" className="text-blue-800 font-semibold hover:underline">our guide to captive centres</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">HMRC</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/companies-house" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies House</a>{" "}
          and the{" "}
          <a href="https://www.gov.uk/get-document-legalised" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">UK legalisation service for apostilles</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/uk-to-india/faq"
          seeAllLabel="See all 122 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Labour and Employment (India)", href: "https://labour.gov.in" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Employees' State Insurance Corporation", href: "https://www.esic.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 19 October 2026. General information only, not legal or tax advice. Indian and UK rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Hiring Your First Employees in India?"
        description="Tell us your planned headcount and roles — we'll map payroll, PF/ESI registration and employment contracts for your subsidiary."
      />
    </main>
  )
}
