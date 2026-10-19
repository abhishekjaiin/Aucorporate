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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/exit-and-restructuring"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "options", label: "The options compared" },
  { id: "sale", label: "Selling the shares: sequence" },
  { id: "uk-tax", label: "The UK side of an exit" },
  { id: "closure", label: "Closing the subsidiary cleanly" },
  { id: "restructure", label: "Restructuring before an exit" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How is the sale of an Indian subsidiary taxed for a UK parent?", a: "India taxes the gain under its domestic law, with 12.5% (plus surcharge and cess) for unlisted shares held more than 24 months. The treaty does not cap capital gains, and the UK often exempts the gain under the substantial shareholding exemption." },
  { q: "What is a slump sale?", a: "A transfer of an undertaking as a whole for a lump sum, without values for individual assets. The company pays the tax on the gain, and the proceeds are paid up to the parent later." },
  { q: "How do I close an Indian subsidiary?", a: "By strike-off if it is dormant, or voluntary liquidation if it has assets. You need final audited accounts, tax and GST closure, employee settlements and RBI compliant remittance of the proceeds." },
  { q: "Do I need RBI approval to sell my Indian subsidiary?", a: "Not generally for a compliant sale, but the price must satisfy FEMA pricing rules and the transfer must be reported in time through the authorised dealer bank." },
  { q: "Is a share buyback tax efficient for a UK parent?", a: "Since October 2024 buyback proceeds are taxed as dividends in the shareholder's hands in India, with a capital loss on the shares. Check the UK result and the treaty rate before using it." },
]

const relatedCards = [
  { title: "The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State", desc: "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.", href: "/blog/uk-to-india/india-uk-dtaa" },
  { title: "What a UK Parent Must Handle on Its Own Side When It Owns an Indian Subsidiary", desc: "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.", href: "/blog/uk-to-india/uk-parent-reporting" },
  { title: "Contracts, Courts and Arbitration in India for UK Companies: Enforcing English Judgments and Awards", desc: "How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments and arbitral awards in India.", href: "/blog/uk-to-india/contracts-courts-arbitration" },
  { title: "Getting Money Out of India: How a UK Parent Receives Dividends, Service Fees, Royalties and Loan Repayments", desc: "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.", href: "/blog/uk-to-india/repatriating-profits" },
]

export default function ExitAndRestructuringPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Selling, Restructuring or Closing an Indian Subsidiary: Options, Tax and RBI Steps for a UK Parent"
        description="How a UK parent can sell, merge, restructure or close an Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with Indian tax, RBI reporting and the UK substantial shareholding exemption."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Selling, Restructuring or Closing an Indian Subsidiary: A Guide for UK Parents" },
        ]}
      />

      <GuideHero
        eyebrow="Exit: UK parent"
        title="Selling, Restructuring or Closing an Indian Subsidiary: Options, Tax and RBI Steps for a UK Parent"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UK parent can leave an Indian subsidiary by selling the shares, selling the business as a slump
          sale, merging it into another company, buying back shares, or closing it by strike-off or liquidation.
          India taxes the gain in most cases, the treaty does not cap it, and the UK often exempts it under the
          substantial shareholding exemption, so the Indian tax is usually the final cost. Plan the RBI pricing
          and reporting and the tax clearances before signing.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="restructuring-and-exit" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Share sale", "Long-term gain on unlisted shares held more than 24 months at 12.5% (plus surcharge and cess); short term at higher rates"],
                ["Treaty", "Article 14: no cap; India taxes under domestic law"],
                ["UK relief", "Substantial shareholding exemption: generally 10% or more held for 12 months in a trading company or group"],
                ["Slump sale", "Business sold for a lump sum; gain taxed in the company"],
                ["RBI", "Pricing and reporting on a transfer of shares between a non-resident and a resident"],
                ["Closure", "Strike-off for dormant companies or voluntary liquidation; closing remittance needs documents and tax clearances"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The options compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Key steps</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sale of shares", "The UK parent sells to a buyer", "Capital gains tax on the gain in the parent's hands", "Valuation and pricing under FEMA, tax withholding by the buyer, reporting the transfer to the RBI"],
                ["Slump sale", "The company sells its undertaking as a going concern", "Gain taxed in the company; the parent then receives proceeds by dividend or capital return", "Net worth computation, valuation, transfer of contracts and staff"],
                ["Merger or demerger", "Amalgamation with another group or third-party company through a court-supervised scheme", "Tax-neutral if conditions are met", "Scheme approval by the National Company Law Tribunal, valuation, shareholder and creditor approvals"],
                ["Buyback", "The company buys back shares from the parent", "Taxed as a dividend in the parent's hands from October 2024, with a capital loss on the shares", "Companies Act limits and board approvals"],
                ["Strike-off", "Dormant company removed from the register", "Final accounts and tax returns still needed", "No operations for a period, creditors cleared, forms filed"],
                ["Voluntary liquidation", "Solvent company wound up", "Tax on liquidation proceeds and on assets sold", "Declaration of solvency, liquidator, creditors, final accounts"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="sale" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling the shares: sequence</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Value the company and agree a price that satisfies FEMA pricing rules for a sale by a non-resident to a resident, or a sale to another non-resident.</li>
          <li>Run tax and legal due diligence on the Indian side, and review the UK substantial shareholding exemption conditions.</li>
          <li>Sign the share purchase agreement with representations, indemnities and any earn-out, and include the withholding mechanics.</li>
          <li>The buyer withholds tax on the capital gain, subject to a lower deduction certificate if obtained.</li>
          <li>Report the transfer to the RBI in the prescribed time through the authorised dealer bank, with the valuation and purchase agreement.</li>
          <li>Receive the proceeds, file the Indian return and claim relief in the UK return where relevant.</li>
        </ol>

        <h2 id="uk-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The UK side of an exit</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A UK company&apos;s gain on shares in a trading subsidiary is often exempt under the substantial
          shareholding exemption (Schedule 7AC to the Taxation of Chargeable Gains Act 1992), if it has held at
          least 10% for 12 months within the previous six years and the trading conditions are met. Where the
          exemption applies, the Indian tax on the gain is a cost, not a credit. Where it does not, the Indian
          tax can be credited. Check the conditions well before signing, because the holding period and trading
          status are tested over time.
        </p>

        <h2 id="closure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Closing the subsidiary cleanly</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Stop operations, settle employees including gratuity and provident fund, and clear lease and contract exits.</li>
          <li>Close the GST, provident fund, ESI and professional tax registrations after final returns.</li>
          <li>Obtain a closing audit and final tax returns, with transfer pricing reporting up to the date of closing.</li>
          <li>Choose the route: strike-off for a dormant company, or voluntary liquidation for one with assets.</li>
          <li>Remit the closing proceeds through the authorised dealer bank with the Chartered Accountant&apos;s certificate and Forms 145 and 146.</li>
          <li>Close the RBI reporting trail and keep the records for the legal retention period.</li>
        </ul>

        <h2 id="restructure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Restructuring before an exit</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Common pre-exit steps include converting preference shares, cleaning up intercompany balances, moving
          IP, and transferring staff. Each has tax, RBI and transfer pricing consequences, and a scheme of
          arrangement needs tribunal time. Align the sequence with the UK group&apos;s plan, and check the
          position under the principal purpose test if the restructuring creates a new holding layer.
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Taxation of Chargeable Gains Act 1992, Schedule 7AC (substantial shareholding exemption)", href: "https://www.legislation.gov.uk/ukpga/1992/12/schedule/7AC" },
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
        title="Planning to Restructure or Exit Your India Entity?"
        description="Tell us your current structure and goal — we'll map the ROC, tax and FEMA steps for a clean restructuring or exit."
      />
    </main>
  )
}
