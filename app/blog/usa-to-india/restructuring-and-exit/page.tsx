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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/restructuring-and-exit"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "routes", label: "The main routes compared" },
  { id: "sale", label: "Selling the shares" },
  { id: "slump", label: "Selling the business as a going concern" },
  { id: "merger", label: "Mergers and demergers" },
  { id: "close", label: "Closing the subsidiary" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a slump sale?", a: "The transfer of an undertaking as a going concern for a lump sum, without values assigned to individual assets and liabilities. The gain is taxed as capital gains on the net worth transferred." },
  { q: "Can we merge the Indian subsidiary into another group company?", a: "Yes. A merger is done through a scheme, and a fast-track route exists for a holding company and its wholly owned subsidiary." },
  { q: "How is a dormant Indian company closed?", a: "By applying to the registrar for strike-off after clearing dues and filing pending returns, if the company has not carried on business for the relevant period." },
  { q: "How do we send the surplus to the US on closure?", a: "After liabilities and taxes are settled, surplus funds are remitted through the bank with the required certificates, and the closure is reported to the RBI." },
]

const relatedCards = [
  { title: "Share Valuation for Foreign Investment: Pricing Rules and Certificates", desc: "Why shares issued to a US parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.", href: "/blog/usa-to-india/share-valuation" },
  { title: "Repatriating Profits to the US: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/usa-to-india/repatriating-profits" },
  { title: "ESOPs for Indian Employees of a US Parent: FEMA, Tax and Cost Recharge", desc: "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a US parent.", href: "/blog/usa-to-india/esop" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/usa-to-india/compliance-calendar" },
]

export default function RestructuringAndExitPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Restructuring, Mergers and Exit: Your Options for an Indian Subsidiary"
        description="Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Restructuring, Mergers and Exit for an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Scale and exit"
        title="Restructuring, Mergers and Exit: Your Options for an Indian Subsidiary"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary can be restructured, sold or closed in several ways: a sale of shares, a sale of the
          business as a going concern (a slump sale), a merger or demerger through a scheme, a buyback or capital
          reduction, or closure through strike-off or voluntary liquidation. Each route has its own tax, FEMA and
          Companies Act steps, so choose the route before you invest, not at exit.
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
                ["Share sale", "The parent sells its shares; FEMA pricing and reporting apply; capital gains tax"],
                ["Slump sale", "The business is sold as a going concern for a lump sum"],
                ["Merger or demerger", "Through a scheme approved by the tribunal; a fast-track route exists for a holding company and its wholly owned subsidiary"],
                ["Buyback or capital reduction", "Returns cash to the parent within company-law limits"],
                ["Strike-off", "For a company with no business for two financial years or none started within a year; special resolution with 75% member consent; Form STK-2 with a ₹10,000 fee; typically 3 to 6 months (Section 248 of the Companies Act, 2013)"],
                ["Voluntary liquidation", "For a solvent company; wound up under the insolvency code"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The main routes compared</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it is</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to plan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Share sale", "The parent sells shares of the Indian company to a buyer", "FEMA pricing and Form FC-TRS within 60 days; long-term capital gains at 12.5% where the shares are held more than 24 months; treaty relief; buyer's due diligence"],
                ["Slump sale", "Sale of an undertaking as a going concern for a lump sum", "Capital gains on net worth; contracts, employees and licences transfer by agreement; stamp duty"],
                ["Merger or demerger", "Combining or splitting companies through a scheme", "Tribunal process; valuation; tax neutrality conditions; fast track for holding and wholly owned subsidiary"],
                ["Buyback", "Company buys back its own shares from the parent", "Limits on size and frequency; tax treatment has changed recently, so check the cost"],
                ["Capital reduction", "Company reduces its share capital and returns funds", "Normally needs tribunal approval; creditor protection"],
                ["Strike-off", "Registrar removes a dormant company", "Dues cleared and filings up to date; two years of no business"],
                ["Voluntary liquidation", "A solvent company is wound up by a liquidator", "Declaration of solvency; creditor and shareholder resolutions; final accounts"],
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

        <h2 id="sale" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling the shares</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A sale of shares by the US parent to an Indian resident or to another non-resident follows FEMA pricing
          rules, which differ by the direction of the sale, and is reported to the RBI within the prescribed time
          through the authorized dealer bank. The seller pays capital gains tax in India, subject to the India-US
          tax treaty. Selling the US parent itself can also create Indian tax under the indirect transfer rules when
          the parent derives substantial value from India.
        </p>

        <h2 id="slump" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling the business as a going concern</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          In a slump sale the buyer acquires the undertaking, with its assets, liabilities and contracts, for a lump
          sum. The gain is taxed as capital gains on the net worth transferred. Employees, licences and contracts
          need to be transferred by agreement, so the deal documents matter.
        </p>

        <h2 id="merger" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mergers and demergers</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A merger or demerger is carried out through a scheme approved by the tribunal. A simpler fast-track route
          is available for a merger between a holding company and its wholly owned subsidiary. Cross-border mergers
          are permitted under FEMA and company-law rules and follow specific conditions.
        </p>

        <h2 id="close" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Closing the subsidiary</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the route: strike-off for a dormant company or voluntary liquidation for a solvent company with operations.</li>
          <li>Settle liabilities, employee dues, taxes and statutory filings.</li>
          <li>Close the bank accounts and finalize the accounts.</li>
          <li>Obtain the approvals and file the closure forms with the Registrar.</li>
          <li>Remit surplus funds to the US parent through the bank with the required certificates, and report the closure to the RBI.</li>
        </ol>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>The US tax result of a sale, merger or liquidation, including final reporting of the foreign corporation, depends on your structure. Confirm it with your US tax adviser before choosing the route. See{" "}
            <Link href="/blog/usa-to-india/us-parent-obligations" className="text-blue-800 font-semibold hover:underline">US parent obligations</Link>.
          </li>
          <li>For funds returned to the parent, see{" "}
            <Link href="/blog/usa-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.
          </li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Choosing the exit route only when the buyer appears.</li>
          <li>Overlooking FEMA pricing and reporting on a share sale.</li>
          <li>Closing a company with pending filings or tax matters.</li>
          <li>Letting a dormant company run up late fees instead of closing it properly.</li>
          <li>Not planning the US tax result.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We advise on restructuring and exit planning, valuation, tax, FEMA filings and the legal documents.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/transaction-advisory" className="text-blue-800 font-semibold hover:underline">Transaction advisory</Link>{" "}
          &middot;{" "}
          <Link href="/india-business-setup/company-formation" className="text-blue-800 font-semibold hover:underline">India business setup</Link>
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Insolvency and Bankruptcy Board of India", href: "https://ibbi.gov.in" },
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
