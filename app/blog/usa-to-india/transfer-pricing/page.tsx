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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/transfer-pricing"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "what", label: "What transfer pricing means for an Indian subsidiary" },
  { id: "methods", label: "The pricing methods" },
  { id: "documents", label: "Documentation and reporting" },
  { id: "safe", label: "Safe harbour, advance pricing and dispute routes" },
  { id: "adjust", label: "What happens if the price is challenged" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is transfer pricing in simple terms?", a: "It is the price charged between related companies. For a US parent and its Indian subsidiary, that price must be one that independent parties would have agreed." },
  { q: "Does a small subsidiary need transfer pricing documentation?", a: "Any international transaction with an associated enterprise must be at arm's length. Documentation and the accountant's report depend on prescribed thresholds. We confirm which apply to you." },
  { q: "Which form reports transfer pricing transactions?", a: "Form 48 (previously Form 3CEB under the 1961 Act), certified by a chartered accountant." },
  { q: "Can we agree the price with the tax authority in advance?", a: "Yes, through an advance pricing agreement. It gives certainty for several years but takes time to negotiate." },
  { q: "Can a transfer pricing adjustment cause double taxation?", a: "It can. The mutual agreement procedure under the India-US treaty exists to resolve it." },
]

const relatedCards = [
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/usa-to-india/dtaa-pe-risk" },
  { title: "Tax Notices and Disputes in India: What US Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and advance pricing agreements.", href: "/blog/usa-to-india/tax-notices-and-litigation" },
  { title: "Contracts and Arbitration in India: A Guide for US Companies", desc: "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.", href: "/blog/usa-to-india/contracts-and-arbitration" },
  { title: "US Parent Obligations When You Own an Indian Subsidiary", desc: "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.", href: "/blog/usa-to-india/us-parent-obligations" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries"
        description="How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Transfer Pricing in India for US-Owned Subsidiaries" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Transfer pricing rules require transactions between your US company and its Indian subsidiary, such as
          service fees, royalties, loans and cost sharing, to be priced as if the two were unrelated (the arm&apos;s
          length principle). The Indian company must keep documentation, report the transactions in an
          accountant&apos;s report in Form 48 (previously Form 3CEB) and be ready for a transfer pricing audit.
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
                ["Principle", "Arm's length pricing for international transactions with associated enterprises"],
                ["Accountant's report", "Form 48 (previously Form 3CEB), certified by a chartered accountant"],
                ["Provisions", "Sections 161 to 172 of the Income-tax Act, 2025 (previously Chapter X, Sections 92 to 92F of the 1961 Act)"],
                ["Documentation", "Maintained annually where the prescribed thresholds are crossed; the master file and country-by-country reporting apply only to larger groups"],
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
          If your Indian subsidiary provides services to the US parent, the price the parent pays must be one that
          an independent party would have paid. The same applies to loans, royalties, guarantees and shared costs.
          Indian tax authorities test both sides: whether the subsidiary earned enough, and whether payments
          leaving India were fair.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          The rules apply to international transactions with associated enterprises. A US parent and its Indian
          subsidiary are associated enterprises by definition.
        </p>

        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The pricing methods</h2>
        <div className="overflow-x-auto mb-4">
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
                ["Transactional net margin", "Compares the net profit margin with that of comparable companies", "Most captive service and development centers"],
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
          For captive development and support centers, the transactional net margin method with a cost-based
          margin is the most common starting point. The right method depends on the facts.
        </p>

        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documentation and reporting</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Sign an intercompany agreement before services begin, describing the services, pricing basis and payment terms.</li>
          <li>Keep contemporaneous records: functional analysis, invoices, evidence of services actually provided.</li>
          <li>Prepare an annual benchmarking study using comparable companies.</li>
          <li>Have a chartered accountant certify Form 48 (previously Form 3CEB) where international transactions exist.</li>
          <li>File the report on time and keep the documentation ready for a transfer pricing audit.</li>
        </ol>
        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          Due dates and thresholds for the new Act&apos;s forms are being clarified through notifications. We
          confirm the current dates for your tax year at the start of each cycle.
        </div>

        <h2 id="safe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour, advance pricing and dispute routes</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Safe harbour</strong> (Section 167 of the 2025 Act): prescribed margins for certain transactions, which tax authorities accept if the conditions are met. Eligibility is narrow and the margins are fixed by rules.</li>
          <li><strong>Advance pricing agreement</strong> (Sections 168 and 169): an agreement with the tax authority on the method and price for several years. It gives certainty but takes time.</li>
          <li><strong>Mutual agreement procedure</strong>: for double taxation that results from an adjustment, the two tax authorities can resolve it under the treaty.</li>
          <li><strong>Dispute resolution panel and tribunal</strong>: routes to challenge a transfer pricing order. See{" "}
            <Link href="/blog/usa-to-india/tax-notices-and-litigation" className="text-blue-800 font-semibold hover:underline">tax notices and litigation</Link>.
          </li>
        </ul>

        <h2 id="adjust" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What happens if the price is challenged</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Transfer Pricing Officer can propose an adjustment to the subsidiary&apos;s income. The difference can
          be taxed, and a secondary adjustment (Section 170 of the 2025 Act) may require the excess money to be
          brought back to India or treated as a deemed loan with interest. Penalties can apply for missing or
          incorrect documentation.
        </p>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>The price the US parent pays is also tested by the IRS. A fair, documented price protects you on both sides.</li>
          <li>If the Indian subsidiary acts mainly for the parent, a cost-plus service model is common. The US side should be reviewed by your US tax adviser.</li>
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
        <p className="text-gray-600 leading-relaxed mb-2">
          We prepare benchmarking studies and documentation, certify Form 48 (previously Form 3CEB) and support
          transfer pricing audits and appeals.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Central Board of Direct Taxes", href: "https://incometaxindia.gov.in" },
            { label: "Institute of Chartered Accountants of India", href: "https://www.icai.org" },
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
