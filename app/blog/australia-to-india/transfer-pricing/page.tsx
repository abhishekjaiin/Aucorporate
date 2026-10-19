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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/transfer-pricing"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "what", label: "What transfer pricing means for an Indian subsidiary" },
  { id: "methods", label: "The pricing methods" },
  { id: "documents", label: "Documentation and reporting" },
  { id: "safe", label: "Safe harbour, advance pricing and dispute routes" },
  { id: "adjust", label: "What happens if the price is challenged" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is transfer pricing in simple terms?", a: "Transfer pricing is the price charged between related companies. For an Australian parent and its Indian subsidiary, that price must be one that independent parties would have agreed." },
  { q: "Does a small subsidiary need transfer pricing documentation?", a: "A small subsidiary needs transfer pricing compliance for any international transaction with an associated enterprise, which must be at arm's length. Documentation and the accountant's report depend on prescribed thresholds, which should be confirmed for the transaction values." },
  { q: "Which form reports transfer pricing transactions?", a: "Form 48 (previously Form 3CEB under the 1961 Act), certified by a Chartered Accountant." },
  { q: "Can the price be agreed with the tax authority in advance?", a: "The price can be agreed in advance through an Advance Pricing Agreement, which gives certainty for several years but takes time to negotiate." },
  { q: "Can a transfer pricing adjustment cause double taxation?", a: "A transfer pricing adjustment can cause double taxation. The Mutual Agreement Procedure under the India-Australia treaty exists to resolve it." },
  { q: "What is transfer pricing and why does it matter?", a: "Transfer pricing requires transactions between related parties, such as the Indian subsidiary and the Australian parent, to be priced as if between independent parties (the arm's length principle, Section 161 of the Income-tax Act, 2025, previously Section 92). Tax officers review it closely, so agreements and benchmarking should exist from day one." },
  { q: "What are MAP and APA?", a: "The Mutual Agreement Procedure lets the Indian and Australian tax authorities resolve double taxation under the treaty. An Advance Pricing Agreement fixes your transfer pricing method with the authority in advance for several years, giving certainty on large or recurring intercompany transactions." },
  { q: "What is a Global Capability Centre (GCC)?", a: "A GCC is a captive centre that a foreign parent owns in India to deliver engineering, analytics, finance, HR or support work for the group. It is usually a wholly owned subsidiary that charges the parent for its services at arm's-length prices." },
  { q: "Which intercompany transactions must be at arm's length?", a: "Service fees, royalties, cost sharing, loans and interest, guarantees, reimbursements, and the purchase or sale of goods or assets between the subsidiary and any group company abroad. Each needs a written agreement and a pricing method you can defend." },
  { q: "What are the transfer pricing documentation thresholds in India?", a: "Transfer pricing documentation must be maintained in India where international transactions together exceed ₹1 crore, and the accountant's report in Form 48 (previously Form 3CEB) is filed for any international transaction. A master file is needed where group revenue exceeds ₹500 crore and international transactions exceed ₹50 crore, and country-by-country reporting applies at consolidated group revenue of ₹6,400 crore or more." },
]

const relatedCards = [
  { title: "The India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk for Australian Companies", desc: "How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/australia-to-india/dtaa-pe-risk" },
  { title: "Tax Notices and Disputes in India: What Australian Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.", href: "/blog/australia-to-india/tax-notices-and-litigation" },
  { title: "Contracts and Arbitration in India: A Guide for Australian Companies", desc: "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.", href: "/blog/australia-to-india/contracts-and-arbitration" },
  { title: "Australian Parent Obligations When You Own an Indian Subsidiary", desc: "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets, transfer pricing and thin capitalisation. A guide for Australian finance teams.", href: "/blog/australia-to-india/australian-parent-obligations" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing in India: A Guide for Australian Parents and Their Indian Subsidiaries"
        description="How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "Transfer Pricing in India for Australian-Owned Subsidiaries" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing in India: A Guide for Australian Parents and Their Indian Subsidiaries"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Transfer pricing rules require transactions between your Australian company and its Indian subsidiary,
          such as service fees, royalties, loans and cost sharing, to be priced as if the two were unrelated
          (the arm&apos;s length principle). The Indian company must keep documentation, report the transactions
          in an accountant&apos;s report in Form 48 (previously Form 3CEB) and be ready for a transfer pricing
          audit.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Principle", "Arm's length pricing for international transactions with associated enterprises"],
                ["Accountant's report", "Form 48 (previously Form 3CEB), certified by a Chartered Accountant"],
                ["Penalties", "2% of the value of each international transaction for failing to maintain documentation, ₹1 lakh for not filing the accountant's report in Form 48, and ₹5 lakh for not filing the master file"],
                ["Provisions", "Sections 161 to 172 of the Income-tax Act, 2025 (previously Chapter X, Sections 92 to 92F of the 1961 Act)"],
                ["Documentation", "Maintained annually where international transactions together exceed ₹1 crore; the master file applies where group revenue exceeds ₹500 crore and international transactions exceed ₹50 crore (₹10 crore for intangibles); country-by-country reporting applies at consolidated group revenue of ₹6,400 crore or more"],
                ["Common transactions", "Software development and support services, management fees, royalties, loans, cost allocations"],
                ["Typical safeguard", "Intercompany agreement plus a benchmarking study each year"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What transfer pricing means for an Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          If your Indian subsidiary provides services to the Australian parent, the price the parent pays must
          be one that an independent party would have paid. The same applies to loans, royalties, guarantees and
          shared costs. Indian tax authorities test both sides: whether the subsidiary earned enough, and
          whether payments leaving India were fair.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The rules apply to international transactions with associated enterprises. An Australian parent and
          its Indian subsidiary are associated enterprises by definition.
        </p>

        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The pricing methods</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Often used for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Comparable uncontrolled price", "Compares the price with prices between independent parties", "Goods, loans, royalties with close comparables"],
                ["Resale price", "Starts from the resale price and deducts a normal margin", "Distribution"],
                ["Cost plus", "Cost of providing the service plus a mark-up", "Services, contract manufacturing"],
                ["Transactional net margin", "Compares the net profit margin with that of comparable companies", "Most captive service and development centres"],
                ["Profit split", "Splits combined profit on a fair basis", "Highly integrated operations"],
                ["Other method", "Any other method prescribed by the rules", "Where the above do not fit"],
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

        <p className="text-gray-600 leading-relaxed mb-10">
          For captive development and support centres, the transactional net margin method with a cost-based
          margin is the most common starting point. The right method depends on the facts.
        </p>

        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documentation and reporting</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Sign an intercompany agreement before services begin, describing the services, pricing basis and payment terms.</li>
          <li>Keep contemporaneous records: functional analysis, invoices, evidence of services actually provided.</li>
          <li>Prepare an annual benchmarking study using comparable companies.</li>
          <li>Have a Chartered Accountant certify Form 48 (previously Form 3CEB) where international transactions exist.</li>
          <li>File the report on time and keep the documentation ready for a transfer pricing audit.</li>
        </ol>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          Due dates and thresholds for the new Act&apos;s forms are being clarified through notifications. We
          confirm the current dates for your tax year at the start of each cycle.
        </div>

        <h2 id="safe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour, advance pricing and dispute routes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Safe harbour</strong> (Section 167 of the 2025 Act): prescribed margins for certain transactions, which tax authorities accept if the conditions are met. Eligibility is narrow and the margins are fixed by rules.</li>
          <li><strong>Advance Pricing Agreement</strong> (Sections 168 and 169): an agreement with the tax authority on the method and price for several years. It gives certainty but takes time.</li>
          <li><strong>Mutual Agreement Procedure</strong>: for double taxation that results from an adjustment, the two tax authorities can resolve it under the treaty.</li>
          <li><strong>Dispute Resolution Panel and tribunal</strong>: routes to challenge a transfer pricing order. See <Link href="/blog/australia-to-india/tax-notices-and-litigation" className="text-blue-800 font-semibold hover:underline">tax notices and litigation</Link>.</li>
        </ul>

        <h2 id="adjust" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What happens if the price is challenged</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Transfer Pricing Officer can propose an adjustment to the subsidiary&apos;s income. The difference
          can be taxed, and a secondary adjustment (Section 170 of the 2025 Act) may require the excess money to
          be brought back to India or treated as a deemed loan with interest. Penalties can apply for missing or
          incorrect documentation.
        </p>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The price the Australian parent pays is also tested by the ATO under Division 815 of the Income Tax Assessment Act 1997, with its own documentation expectations. A fair, documented price protects you on both sides.</li>
          <li>If the Indian subsidiary acts mainly for the parent, a cost-plus service model is common. The Australian side should be reviewed by your Australian tax adviser, including the local file, master file and country-by-country reporting that apply to groups with global revenue of A$1 billion or more.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Starting services without an intercompany agreement.</li>
          <li>Paying the subsidiary on a round-number fee that nobody has benchmarked.</li>
          <li>Leaving out loans, guarantees or shared costs from the transfer pricing report.</li>
          <li>Filing Form 48 (previously Form 3CEB) late or with a mismatch to the financial statements.</li>
          <li>Treating the study as a one-time exercise instead of an annual one.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare benchmarking studies and documentation, certify Form 48 (previously Form 3CEB) and support
          transfer pricing audits and appeals.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Central Board of Direct Taxes", href: "https://incometaxindia.gov.in" },
            { label: "Institute of Chartered Accountants of India", href: "https://www.icai.org" },
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
        title="Need a Transfer Pricing Study for India?"
        description="Tell us your intercompany transactions with the Australian parent — we'll map your transfer pricing documentation and filing obligations."
      />
    </main>
  )
}
