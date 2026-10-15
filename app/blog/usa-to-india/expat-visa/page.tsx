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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/expat-visa"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "structure", label: "Decide the assignment structure" },
  { id: "steps", label: "The relocation steps" },
  { id: "tax", label: "Tax and social security" },
  { id: "housing", label: "Housing, banking and local registrations" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a US executive work on a business visa?", a: "A US executive cannot work in India on a business visa. A business visa is for meetings and similar activities, and working for an Indian company needs an employment visa." },
  { q: "Who sponsors the visa?", a: "The Indian company that will employ or host the executive sponsors the application. Conditions such as minimum salary can apply." },
  { q: "Do expats pay Indian income tax?", a: "Income earned for work done in India is taxable in India. The treatment of other income depends on tax residency and the India-US tax treaty." },
  { q: "Does sending an executive create a permanent establishment?", a: "Sending an executive to India can create a permanent establishment, particularly if the executive negotiates or concludes contracts for the US company. The structure should be reviewed before the move." },
  { q: "What visa does a US executive need?", a: "A US executive needs an employment visa to work in India, because a business visa suits only short meetings. An employment visa typically has a minimum salary condition, and longer stays require registration with the Foreigners Regional Registration Office." },
  { q: "Can EOR employees move into the subsidiary later?", a: "EOR employees can move into the subsidiary later with planning. Employees must agree to the transfer, their service history and benefits such as gratuity and provident fund should carry over, and contracts and notice periods need to be handled, with timing planned so that there is no gap in employment." },
  { q: "How do ESOPs for Indian employees of a US parent work?", a: "The US parent grants options or restricted stock units to employees of the Indian subsidiary under its plan. FEMA overseas investment rules and reporting apply to the employees, and tax arises on exercise or vesting as salary, with Withholding Tax, and again as capital gains on sale." },
  { q: "Does the US parent have to travel to India?", a: "A US parent does not have to travel to India to set up a subsidiary. Incorporation can be completed online using apostilled documents and digital signatures. Banks set their own KYC rules, so the bank's verification requirements should be confirmed early." },
  { q: "What statutory benefits apply to employees in India?", a: "Employees in India typically receive provident fund, ESI for eligible wages, gratuity after the qualifying service period, bonus where applicable, professional tax in some states, and leave benefits. India's labour codes are consolidating these, so the current position for the state and headcount should be confirmed." },
  { q: "Can Indian employees receive US parent shares?", a: "Indian employees can receive US parent shares under the parent's plan, subject to FEMA overseas investment rules and reporting. The tax and withholding treatment needs to be set up in advance." },
  { q: "What is the minimum salary for an Indian employment visa?", a: "An Indian employment visa generally needs the foreign national to earn at least USD 25,000 a year, with limited exceptions. A foreigner staying more than 180 days must register with the FRRO within 14 days of arrival." },
]

const relatedCards = [
  { title: "Hiring and Payroll in India for US Companies: Contracts, PF, ESI and Gratuity", desc: "How US companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/usa-to-india/hiring-and-payroll" },
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/usa-to-india/dtaa-pe-risk" },
  { title: "US Parent Obligations When You Own an Indian Subsidiary", desc: "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.", href: "/blog/usa-to-india/us-parent-obligations" },
  { title: "Employer of Record vs. Subsidiary in India: When to Use Each", desc: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for US companies.", href: "/blog/usa-to-india/eor-vs-subsidiary" },
]

export default function ExpatVisaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Sending a US Executive to India: Visa, Housing, Banking and Tax"
        description="How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Sending a US Executive to India: Visa, Housing and Tax" },
        ]}
      />

      <GuideHero
        eyebrow="Mobilize: expats"
        title="Sending a US Executive to India: Visa, Housing, Banking and Tax"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US executive who will work in India needs an employment visa sponsored by the Indian company,
          registration with the Foreigners Regional Registration Office for longer stays, housing, a local bank
          account and a tax and social security plan. The assignment can also create a permanent establishment
          risk for the US parent, so the structure and documents should be settled before the move.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Right visa", "A business visa is for meetings. Working in India needs an employment visa, generally for a salary of at least USD 25,000 a year"],
                ["Registration", "Foreigners on stays of more than 180 days register with the FRRO within 14 days of arrival"],
                ["Tax residency", "Resident if present in India for 182 days or more in the year, or for 60 days in the year and 365 days in the preceding four years; this decides how much income is taxable in India"],
                ["Social security", "India and the US do not have a social security agreement, so provident fund can apply to foreign workers"],
                ["Parent's risk", "Seconded staff can create a permanent establishment for the US company"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Decide the assignment structure</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Secondment from the US</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Local employment in India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Employer", "US parent, with staff working for the Indian company", "The Indian subsidiary"],
                ["Contract", "Assignment letter plus a secondment agreement between the entities", "Indian employment contract"],
                ["Payroll", "Often split between the US and India", "Indian payroll"],
                ["Cost recharge", "Parent recharges the cost to the subsidiary, which needs transfer pricing support", "None"],
                ["Permanent establishment risk", "Needs careful review", "Lower, if the employee acts only for the subsidiary"],
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

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The relocation steps</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Agree the assignment structure and terms.</li>
          <li>The Indian company sponsors an employment visa and the executive applies.</li>
          <li>On arrival, the executive registers with the FRRO if the stay requires it.</li>
          <li>Arrange housing, a rental agreement and a local bank account.</li>
          <li>Set up payroll, Withholding Tax and the tax residency tracker.</li>
          <li>File the Indian tax return and coordinate with the US CPA for the US return.</li>
        </ol>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and social security</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India taxes income earned for work done in India. Whether other income is also taxed depends on
          residency, which is based on days of presence under the income tax law. The US taxes its citizens on
          worldwide income, with credits for tax paid in India. The India-US tax treaty can help, and your US
          adviser should model the position for each person.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          India and the US do not have a social security agreement. A foreign worker in India can therefore be
          required to contribute to provident fund, in addition to US social security obligations that your US
          adviser will confirm.
        </p>

        <h2 id="housing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Housing, banking and local registrations</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Short-term serviced accommodation or a leased home, with a proper rental agreement.</li>
          <li>A resident bank account once the visa and registrations are in place.</li>
          <li>Mobile, utilities and address proof, which are needed for most local registrations.</li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Before sending anyone, review whether the assignment creates a permanent establishment, for example
            if the executive negotiates or concludes contracts for the US company. See{" "}
            <Link href="/blog/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">tax treaty and PE risk</Link>.
          </li>
          <li>If the parent recharges salary to the subsidiary, document it in an agreement and include it in
            transfer pricing. See{" "}
            <Link href="/blog/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
          </li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Sending an executive on a business visa to work.</li>
          <li>Missing the FRRO registration for a long stay.</li>
          <li>Not tracking days in India, which decides tax residency.</li>
          <li>Having no assignment agreement or cost-recharge terms.</li>
          <li>Skipping the permanent establishment review.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We handle visas, accommodation, bank account operations and tax filings for expats of foreign companies.
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
          and the <a href="https://www.gst.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">GST portal</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/blog/usa-to-india/faq" />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Indian Visa Online (Ministry of Home Affairs)", href: "https://indianvisaonline.gov.in" },
            { label: "Foreigners Regional Registration Office (FRRO)", href: "https://indianfrro.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />
        <p className="text-sm text-gray-500 mt-6">
          Last updated 14 October 2026. General information only, not legal or tax advice. Indian rules change often;
          confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending US Staff to India?"
        description="Tell us who's relocating and for how long — we'll map the visa, FRRO registration and payroll steps needed."
      />
    </main>
  )
}
