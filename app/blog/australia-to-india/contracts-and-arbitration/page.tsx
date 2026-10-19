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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/contracts-and-arbitration"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "which", label: "Which contracts an Indian subsidiary needs" },
  { id: "clause", label: "Writing a good arbitration clause" },
  { id: "enforce", label: "Enforcing an award" },
  { id: "seat", label: "Seat in India or abroad" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is a written agreement needed between parent and subsidiary?", a: "Yes. It supports transfer pricing, tax and legal positions and should be in place before services begin." },
  { q: "Can Australian law be chosen for a contract with an Indian customer?", a: "Australian law can often be chosen for a contract with an Indian customer, but certain Indian laws apply regardless. Advice should be taken on the clause." },
  { q: "Are foreign arbitral awards enforceable in India?", a: "Awards from notified reciprocating countries can be enforced under the New York Convention framework, subject to the conditions in Indian law." },
  { q: "What is Section 34?", a: "The section of the Arbitration and Conciliation Act that allows an award made in India to be challenged on limited grounds." },
  { q: "Does stamp duty apply to agreements?", a: "Stamp duty applies to many agreements in India, with rates set by the state. Unstamped documents can cause trouble in evidence." },
  { q: "Can disputes with the parent or vendors go to arbitration?", a: "Disputes with the parent or vendors can go to arbitration if the contract has an arbitration clause. The seat, rules and governing law should be chosen carefully. India and Australia are both parties to the New York Convention, so a foreign arbitral award is generally enforceable in India under Part II of the Arbitration and Conciliation Act, 1996, subject to its conditions." },
  { q: "Which intercompany transactions must be at arm's length?", a: "Service fees, royalties, cost sharing, loans and interest, guarantees, reimbursements, and the purchase or sale of goods or assets between the subsidiary and any group company abroad. Each needs a written agreement and a pricing method you can defend." },
  { q: "What are MAP and APA?", a: "The Mutual Agreement Procedure lets the Indian and Australian tax authorities resolve double taxation under the treaty. An Advance Pricing Agreement fixes your transfer pricing method with the authority in advance for several years, giving certainty on large or recurring intercompany transactions." },
  { q: "Who controls the Indian subsidiary: the board or the Australian parent?", a: "The Board of Directors manages the company, and the parent controls the board by appointing and removing directors as its shareholder. Matters that need parent approval can be written into the Articles or an intercompany agreement. Directors still owe legal duties to the Indian company." },
  { q: "Can an intercompany loan be repaid to the Australian parent?", a: "An intercompany loan can be repaid to the Australian parent under the ECB terms. Principal and interest are paid through the bank, interest attracts Withholding Tax subject to treaty relief, and the repayment is reported to the RBI. Repaying outside the approved terms can be a FEMA violation, so the schedule should be followed." },
  { q: "Does the subsidiary reimburse the parent for ESOP costs?", a: "An Indian subsidiary often reimburses the parent for ESOP costs through a cost recharge under an agreement. Deductibility, transfer pricing and Withholding Tax on these recharges are frequently disputed, so the arrangement should be documented carefully from the start." },
  { q: "Is there a time limit for arbitration awards in India?", a: "A domestic arbitration award in India must be made within 12 months of the completion of pleadings, extendable by 6 months with the parties' consent (Section 29A of the Arbitration and Conciliation Act, 1996). International commercial arbitration is not covered by this limit." },
]

const relatedCards = [
  { title: "Transfer Pricing in India: A Guide for Australian Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/australia-to-india/transfer-pricing" },
  { title: "Tax Notices and Disputes in India: What Australian Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.", href: "/blog/australia-to-india/tax-notices-and-litigation" },
  { title: "Hiring and Payroll in India for Australian Companies: Contracts, PF, ESI and Gratuity", desc: "How Australian companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/australia-to-india/hiring-and-payroll" },
  { title: "Restructuring, Mergers and Exit: Your Options for an Indian Subsidiary", desc: "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps.", href: "/blog/australia-to-india/restructuring-and-exit" },
]

export default function ContractsAndArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts and Arbitration in India: A Guide for Australian Companies"
        description="Contracts between an Australian parent and its Indian subsidiary: governing law, arbitration clauses, the New York Convention and enforcing awards in India."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "Contracts and Arbitration in India for Australian Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Defend: contracts and arbitration"
        title="Contracts and Arbitration in India: A Guide for Australian Companies"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Put the key terms in writing before work starts: an intercompany agreement with the parent, customer
          and vendor contracts, and employment and IP terms. Use an arbitration clause that names the seat, the
          rules and the language. India is a party to the New York Convention, which helps foreign awards be
          enforced here, subject to the conditions of Indian law.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Core contracts", "Intercompany services agreement, customer and vendor agreements, employment and IP agreements, shareholder terms"],
                ["Stamp duty", "Applies to many agreements; the rate depends on the state and the document"],
                ["Arbitration law", "Arbitration and Conciliation Act, 1996"],
                ["Foreign awards", "Enforceable under Part II of the Arbitration and Conciliation Act, 1996, with conditions; India and Australia are both parties to the New York Convention"],
                ["Time limit", "A domestic arbitration award must be made within 12 months of completion of pleadings, extendable by 6 months with the parties' consent (Section 29A); international commercial arbitration is not covered"],
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
        <div className="overflow-x-auto mb-8">
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
                  <td className="border border-gray-300 p-3">Confidentiality, IP assignment and notice terms. See <Link href="/blog/australia-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">hiring and payroll</Link></td>
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
          Many Australian parents prefer a neutral or foreign seat for disputes with the subsidiary&apos;s
          customers, while others choose an Indian seat for speed of enforcement against local assets. Both are
          possible. The right choice depends on where the counterparty&apos;s assets are and on the cost and
          speed of each route. We help you decide with counsel. Australian parties often choose Singapore or
          London as a neutral seat; an Australian seat, with the Australian Centre for International Commercial
          Arbitration (ACICA) rules and the International Arbitration Act 1974, is also available, and
          Australian courts enforce foreign awards under that Act.
        </p>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Intercompany agreements should be signed by authorised signatories on both sides and match the invoices and the payments.</li>
          <li>Match your Australian contract templates to Indian law: stamp duty, data protection and employment terms often need local changes.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Signing without stamp duty and then finding the document inadmissible or delayed in evidence.</li>
          <li>An arbitration clause with no seat or rules.</li>
          <li>Using an Australian template with Indian employees unchanged.</li>
          <li>No written agreement between the parent and the subsidiary.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We support contracts, arbitration and dispute resolution, and work with Indian and Australian counsel.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/arbitration-services" className="text-blue-800 font-semibold hover:underline">Arbitration services</Link>
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
        <GuideFaqList faqs={faqs} seeAllHref="/blog/australia-to-india/faq" seeAllCount={266} />

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
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 15 October 2026. General information only, not legal or tax advice. Indian and Australian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Drafting Contracts for Your India Entity?"
        description="Tell us the counterparties and contract types involved — we'll outline the enforceability and arbitration clauses that hold up in Indian courts."
      />
    </main>
  )
}
