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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/exit-and-restructuring"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "routes", label: "The exit routes" },
  { id: "tax", label: "Tax on a sale" },
  { id: "fema", label: "FEMA on a sale" },
  { id: "close", label: "Closing the subsidiary" },
  { id: "restructure", label: "Restructuring inside the group" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How is the sale of an Indian subsidiary taxed for a Singapore parent?", a: "India taxes the gain on shares acquired on or after 1 April 2017, at 12.5% plus surcharge and cess for unlisted shares held more than 24 months. Shares acquired earlier remain taxable only in Singapore under the treaty if the seller is not a shell company." },
  { q: "Does Singapore tax the gain?", a: "Singapore has no capital gains tax, but gains of an income nature, such as share trading, can be taxed." },
  { q: "What is Form FC-TRS?", a: "The report to the RBI on a transfer of shares between a resident and a non-resident, filed within 60 days." },
  { q: "Can India tax the sale of my Singapore holding company?", a: "It can, if the Singapore company derives substantial value from Indian assets and the thresholds are met. Test this before any sale." },
  { q: "How do I close an Indian subsidiary?", a: "By strike-off if it is dormant with no liabilities, or by voluntary liquidation if it has assets, contracts or disputes, after clearing tax, employee and RBI matters." },
  { q: "Can the buyer withhold tax on the price?", a: "Yes. The buyer must deduct tax on the payment to a non-resident. A lower deduction certificate can reduce or remove it." },
  { q: "Is a group reorganisation tax free?", a: "Not automatically. Exemptions exist for certain intra-group transfers and mergers, but the conditions are strict and must be tested first." },
]

const relatedCards = [
  { title: "Using a Singapore Holding Company for Indian Investments: What the Treaty Gives, and What Substance Is Needed to Keep It", desc: "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk.", href: "/blog/singapore-to-india/singapore-holdco-for-india" },
  { title: "The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State", desc: "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.", href: "/blog/singapore-to-india/india-singapore-dtaa" },
  { title: "Contracts, Courts and Arbitration: Using Singapore as the Seat and Enforcing in India", desc: "How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India, stamping, interim relief and drafting points.", href: "/blog/singapore-to-india/contracts-courts-siac" },
  { title: "12 Common Mistakes Singapore Companies Make When Entering India, and How to Avoid Each", desc: "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE, FEMA clocks, stamping, data transfers and year-end gaps.", href: "/blog/singapore-to-india/common-mistakes" },
]

export default function ExitAndRestructuringPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Selling, Restructuring or Closing an Indian Subsidiary Held from Singapore: Tax, FEMA and Treaty Steps"
        description="Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback, strike-off, voluntary liquidation and group restructuring."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Selling, Restructuring or Closing an Indian Subsidiary Owned from Singapore" },
        ]}
      />

      <GuideHero
        eyebrow="Exit: sale, restructure, close"
        title="Selling, Restructuring or Closing an Indian Subsidiary Held from Singapore: Tax, FEMA and Treaty Steps"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore parent can sell the Indian subsidiary&apos;s shares, sell the Singapore holding company,
          buy back shares, merge or reorganise, or close the company by strike-off or voluntary liquidation.
          India taxes the gain on shares acquired on or after 1 April 2017 at domestic rates (12.5% for unlisted
          shares held more than 24 months, plus surcharge and cess), while shares acquired earlier are protected
          by the treaty if the seller is not a shell company. Singapore has no capital gains tax, so the Indian
          tax is usually the main cost.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="restructuring-and-exit" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Gains on shares bought before 1 April 2017", "Taxable only in Singapore under the treaty, if the seller passes the shell and primary purpose tests"],
                ["Gains on shares bought on or after 1 April 2017", "Taxable in India at domestic rates; 12.5% for unlisted shares held more than 24 months, plus surcharge and cess"],
                ["Withholding on the sale", "The buyer deducts tax under Section 393; a lower deduction certificate can reduce it"],
                ["FEMA", "Sale to an Indian resident follows pricing and reporting rules (Form FC-TRS)"],
                ["Indirect transfers", "Sale of the Singapore holdco can be taxed in India where it derives substantial value from Indian assets"],
                ["Closure", "Strike-off for a dormant company; voluntary liquidation for one with assets or liabilities"],
                ["Singapore side", "No capital gains tax; gains of an income nature can be taxed"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The exit routes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main steps</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sell the Indian shares", "Singapore parent sells to a buyer", "Capital gains per treaty and acquisition date; buyer withholds", "Valuation, SPA, FC-TRS, lower deduction certificate, treaty papers"],
                ["Sell the Singapore holdco", "Buyer purchases the holding company", "Indirect transfer rules may apply", "Test the substantial value and thresholds; get advice early"],
                ["Buyback", "Company repurchases shares", "Taxed as capital gain or deemed dividend depending on the route", "Companies Act procedure; solvency tests; FEMA reporting"],
                ["Merger or demerger", "Court-approved scheme or fast-track", "Tax-neutral if conditions are met", "NCLT or Regional Director route; valuation; stamp duty"],
                ["Group reorganisation", "Move shares between group companies", "Exemptions may apply for intra-group transfers; conditions are strict", "Test before moving; avoid triggering a gain"],
                ["Strike-off", "Dormant company applies to be struck off", "Not a taxable sale", "Clear liabilities and filings first"],
                ["Voluntary liquidation", "Solvent company wound up under the insolvency code", "Gains on distribution can be taxed", "Declaration of solvency, liquidator, creditor notice"],
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

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax on a sale</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Acquired before 1 April 2017:</strong> the treaty allocates the gain to Singapore, so India does not tax it if the seller is not a shell or conduit company and the primary purpose test is met. Keep the tax residency certificate and substance records.</li>
          <li><strong>Acquired on or after 1 April 2017:</strong> India taxes the gain. For unlisted shares held more than 24 months the rate is 12.5% plus surcharge and cess; shorter holdings are taxed at higher rates.</li>
          <li><strong>Withholding:</strong> the buyer must deduct tax on the payment to a non-resident. Apply for a lower deduction certificate where the treaty exempts the gain or the gain is small.</li>
          <li><strong>Cost of acquisition:</strong> keep share certificates, FC-GPR acknowledgements and valuation papers; the cost base depends on them.</li>
          <li><strong>Singapore:</strong> no capital gains tax on the sale, but a gain of an income nature, such as for a trader in shares, may be taxed.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty position by acquisition date is in{" "}
          <Link href="/blog/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">the tax treaty guide</Link>,
          and the substance tests are in{" "}
          <Link href="/blog/singapore-to-india/singapore-holdco-for-india" className="text-blue-800 font-semibold hover:underline">Using a Singapore holding company for India</Link>.
        </p>

        <h2 id="fema" className="text-2xl font-bold text-gray-900 mt-12 mb-4">FEMA on a sale</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A transfer from a non-resident to a resident is reported on Form FC-TRS within 60 days of the transfer or receipt of funds, whichever is earlier.</li>
          <li>Pricing and deferred consideration rules decide the permitted price and payment terms. Check the current rules before signing.</li>
          <li>Remittance of proceeds goes through an authorised dealer bank with the tax payment evidence and Form 145 and, where required, Form 146.</li>
          <li>A sale between two non-residents is outside the pricing rules but still has Indian tax consequences.</li>
        </ul>

        <h2 id="close" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Closing the subsidiary</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Board and shareholders decide to close and appoint the people to manage the process.</li>
          <li>Complete the pending filings: audit, ROC, tax, GST, provident fund, ESI and RBI.</li>
          <li>Settle employees, creditors and tax liabilities; arrange for tax clearances where needed.</li>
          <li>Choose the route: strike-off if dormant with no liabilities, or voluntary liquidation if there are assets, contracts or disputes.</li>
          <li>Repatriate the funds through the banking channel with the tax and audit certificates.</li>
          <li>Close bank accounts, registrations and the FEMA record with the RBI.</li>
        </ol>

        <h2 id="restructure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Restructuring inside the group</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Singapore group may move the Indian shares to a different holding company, convert a branch into a
          subsidiary, or merge Indian entities after an acquisition. Each step has tax, FEMA and stamp duty
          effects, and the order matters. Do not move the Indian shares between group companies without testing
          the Indian tax result, the shell and primary purpose tests for the new holder and any indirect
          transfer exposure.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.iras.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">IRAS</a>,{" "}
          <a href="https://www.acra.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">ACRA</a>{" "}
          and the{" "}
          <a href="https://www.sal.org.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Singapore Academy of Law (apostilles)</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/singapore-to-india/faq"
          seeAllLabel="See all 143 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 21 October 2026. General information only, not legal or tax advice. Indian and Singapore
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Restructuring or Exiting from Singapore?"
        description="Tell us the current structure and your goal, and we'll map the ROC, tax and FEMA steps for a clean sale, merger or closure."
      />
    </main>
  )
}
