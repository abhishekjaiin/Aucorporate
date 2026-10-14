import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/contracts-and-arbitration"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "which", label: "Which contracts an Indian subsidiary needs" },
  { id: "clause", label: "Writing a good arbitration clause" },
  { id: "enforce", label: "Enforcing an award" },
  { id: "seat", label: "Seat in India or abroad" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Do we need a written agreement between parent and subsidiary?", a: "Yes. It supports transfer pricing, tax and legal positions and should be in place before services begin." },
  { q: "Can we choose US law for a contract with an Indian customer?", a: "Often yes, but certain Indian laws apply regardless. Take advice on the clause." },
  { q: "Are foreign arbitral awards enforceable in India?", a: "Awards from notified reciprocating countries can be enforced under the New York Convention framework, subject to the conditions in Indian law." },
  { q: "What is Section 34?", a: "The section of the Arbitration and Conciliation Act that allows an award made in India to be challenged on limited grounds." },
  { q: "Does stamp duty apply to agreements?", a: "Many agreements need stamping, with rates set by the state. Unstamped documents can cause trouble in evidence." },
]

const relatedCards = [
  { title: "Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/usa-to-india/transfer-pricing" },
  { title: "Tax Notices and Disputes in India: What US Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and advance pricing agreements.", href: "/blog/usa-to-india/tax-notices-and-litigation" },
  { title: "Hiring and Payroll in India for US Companies: Contracts, PF, ESI and Gratuity", desc: "How US companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/usa-to-india/hiring-and-payroll" },
  { title: "Restructuring, Mergers and Exit: Your Options for an Indian Subsidiary", desc: "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps.", href: "/blog/usa-to-india/restructuring-and-exit" },
]

export default function ContractsAndArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts and Arbitration in India: A Guide for US Companies"
        description="Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Contracts and Arbitration in India for US Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Defend: contracts and arbitration"
        title="Contracts and Arbitration in India: A Guide for US Companies"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Put the key terms in writing before work starts: an intercompany agreement with the parent, customer and
          vendor contracts, and employment and IP terms. Use an arbitration clause that names the seat, the rules
          and the language. India is a party to the New York Convention, which helps foreign awards be enforced
          here, subject to the conditions of Indian law.
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
                ["Core contracts", "Intercompany services agreement, customer and vendor agreements, employment and IP agreements, shareholder terms"],
                ["Stamp duty", "Applies to many agreements; the rate depends on the state and the document"],
                ["Arbitration law", "Arbitration and Conciliation Act, 1996"],
                ["Foreign awards", "Enforceable under the New York Convention framework, with conditions"],
                ["Domestic challenges", "Challenge to an award under Section 34; enforcement under Section 36"],
                ["Dispute choice", "Court, arbitration or mediation, set in the contract"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="which" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which contracts an Indian subsidiary needs</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Contract</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Intercompany services agreement</th>
                <td className="border border-gray-300 p-3">Supports transfer pricing, Withholding Tax positions and the permanent establishment analysis</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Customer agreements</th>
                <td className="border border-gray-300 p-3">Scope, payment, liability, data protection and governing law</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Vendor and landlord agreements</th>
                <td className="border border-gray-300 p-3">Lease terms, stamp duty and local compliance</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employment and IP agreements</th>
                <td className="border border-gray-300 p-3">
                  Confidentiality, IP assignment and notice terms. See{" "}
                  <Link href="/blog/usa-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">
                    hiring and payroll
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Shareholder or investment terms</th>
                <td className="border border-gray-300 p-3">Governance, funding, transfer and exit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="clause" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Writing a good arbitration clause</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Name the seat of arbitration; it decides which court supervises the process.</li>
          <li>Choose institutional rules or specify the appointment process for the arbitrators.</li>
          <li>State the language and the number of arbitrators.</li>
          <li>Choose the governing law of the contract.</li>
          <li>Add a step for negotiation or mediation before arbitration, if you want one.</li>
          <li>Check stamping and signature formalities so the clause is enforceable.</li>
        </ul>

        <h2 id="enforce" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Enforcing an award</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A foreign award from a country that India has notified as a reciprocating party under the New York
          Convention can be enforced in India, subject to the grounds in the law. An award made in India can be
          challenged on limited grounds under Section 34 and is enforced like a court decree under Section 36.
          Public policy, procedural fairness and jurisdiction are the main grounds raised.
        </p>

        <h2 id="seat" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Seat in India or abroad</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Many US parents prefer a neutral or foreign seat for disputes with the subsidiary&apos;s customers, while
          others choose an Indian seat for speed of enforcement against local assets. Both are possible. The right
          choice depends on where the counterparty&apos;s assets are and on the cost and speed of each route. We
          help you decide with counsel.
        </p>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Intercompany agreements should be signed by authorized signatories on both sides and match the invoices and the payments.</li>
          <li>Match your US contract templates to Indian law: stamp duty, data protection and employment terms often need local changes.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Signing without stamp duty and then finding the document inadmissible or delayed in evidence.</li>
          <li>An arbitration clause with no seat or rules.</li>
          <li>Using a US template with Indian employees unchanged.</li>
          <li>No written agreement between the parent and the subsidiary.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We support contracts, arbitration and dispute resolution, and work with Indian and US counsel.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/arbitration-services" className="text-blue-800 font-semibold hover:underline">Arbitration services</Link>
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
            { label: "Department of Legal Affairs: Arbitration and Conciliation Act", href: "https://legalaffairs.gov.in" },
            { label: "UNCITRAL: New York Convention", href: "https://uncitral.un.org/en/texts/arbitration/conventions/foreign_arbitral_awards" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />
        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 October 2026. General information only, not legal or tax advice. Indian rules change often;
          confirm current requirements before acting.
        </p>
      </article>
    </main>
  )
}
