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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/singapore-holdco-for-india"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "why", label: "Why companies hold India through Singapore" },
  { id: "history", label: "What changed in 2017" },
  { id: "lob", label: "The tests a holdco must pass" },
  { id: "substance", label: "What substance looks like in practice" },
  { id: "poem", label: "India-side risks beyond the treaty" },
  { id: "alternatives", label: "When not to use a Singapore holdco" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is a Singapore holding company still useful for India after 2017?", a: "Yes, for dividends, financing, neutrality and arbitration. It no longer protects gains on shares acquired on or after 1 April 2017, which India can tax at domestic rates." },
  { q: "What is a shell company under the India-Singapore treaty?", a: "One whose annual operating expenditure in its home state is below SGD 200,000 (Singapore) or INR 5,000,000 (India) over the preceding 24 months. Listed companies are deemed not to be shells." },
  { q: "Are shares bought before 1 April 2017 still protected?", a: "Yes. Gains on shares acquired before that date remain taxable only in Singapore, as long as the Singapore company is not a shell or conduit company and passes the primary purpose test." },
  { q: "Can the Indian tax authority treat a Singapore holdco as an Indian resident?", a: "Yes, if its place of effective management is in India. Keep key decisions, board meetings and management visibly in Singapore." },
  { q: "Does India tax the sale of a Singapore holdco that owns Indian shares?", a: "It can, under the indirect transfer rules, where the shares derive substantial value from Indian assets and the thresholds are met. Test this before any sale." },
  { q: "Do I need a tax residency certificate every year?", a: "Yes. Obtain a certificate from IRAS for each year, and give the Indian payer Form 41 and declarations before each dividend or fee is paid." },
]

const relatedCards = [
  { title: "The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State", desc: "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.", href: "/blog/singapore-to-india/india-singapore-dtaa" },
  { title: "Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146.", href: "/blog/singapore-to-india/repatriating-profits" },
  { title: "Selling, Restructuring or Closing an Indian Subsidiary Held from Singapore: Tax, FEMA and Treaty Steps", desc: "Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback, strike-off, voluntary liquidation and group restructuring.", href: "/blog/singapore-to-india/exit-and-restructuring" },
  { title: "Which Structure Should a Singapore Company Use in India? Subsidiary, Branch, Liaison Office, LLP, GIFT City or Employer of Record", desc: "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax results and a choice by business model.", href: "/blog/singapore-to-india/structure-options" },
]

export default function SingaporeHoldcoForIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Using a Singapore Holding Company for Indian Investments: What the Treaty Gives, and What Substance Is Needed to Keep It"
        description="How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Using a Singapore Holding Company for India: Treaty Benefits, Substance and Limits" },
        ]}
      />

      <GuideHero
        eyebrow="Holding: the Singapore holdco"
        title="Using a Singapore Holding Company for Indian Investments: What the Treaty Gives, and What Substance Is Needed to Keep It"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore holding company is a common way to own Indian subsidiaries because Singapore has no
          capital gains tax, exempts dividends it pays, and has a tax treaty with India that caps withholding
          and, for older holdings, protects gains. Since 1 April 2017 that protection has narrowed: gains on
          shares bought on or after that date are taxable in India, and the shell company test and principal
          purpose test can deny benefits to a holding company with little substance. A Singapore holdco still
          works when it has real management, real spend and a commercial reason.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="holdco" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "Treaty rate 10% where the holding is 25% or more; Singapore exempts what it pays on"],
                ["Gains, shares bought before 1 April 2017", "Taxable only in Singapore (grandfathered), not for shell or conduit companies"],
                ["Gains, shares bought on or after 1 April 2017", "Taxable in India at domestic rates; transitional 50% cap ended on 31 March 2019"],
                ["Shell test", "Annual operating expenditure below SGD 200,000 in Singapore (or INR 5,000,000 in India) over the preceding 24 months, unless listed"],
                ["Indian anti-avoidance", "Principal purpose test (MLI), Article 24A, domestic GAAR (benefit threshold INR 3 crore) and Place of Effective Management"],
                ["Sale of the Singapore holdco", "India can tax the indirect transfer of shares that derive substantial value from Indian assets"],
                ["Land-border owners", "Press Note 3 (2020) requires government approval where the beneficial owner is in or a citizen of a land-border country; check the current policy"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why companies hold India through Singapore</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Neutral jurisdiction</strong> for a group with investors from several countries.</li>
          <li><strong>No capital gains tax</strong> at the Singapore level, and a participation-style approach to share disposals.</li>
          <li><strong>One-tier dividends:</strong> a Singapore company&apos;s dividends are not taxed again in the hands of its shareholders.</li>
          <li><strong>Banking, legal and arbitration infrastructure</strong> that investors know, including a Singapore-seated arbitration clause for shareholder agreements.</li>
          <li><strong>Access to a treaty network</strong> for onward investment and financing.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          None of these needs treaty shopping. They are commercial reasons, and the tests below reward holding
          companies that can show them.
        </p>

        <h2 id="history" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What changed in 2017</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Until 31 March 2017, the treaty gave Singapore the sole right to tax gains on Indian shares, subject
          to a limitation of benefits clause from 2005 that denied the benefit to shell companies. The Third
          Protocol (signed 30 December 2016, in force 27 February 2017) moved to source taxation for shares
          acquired on or after 1 April 2017. Gains up to 31 March 2019 were capped at 50% of the Indian rate,
          and gains after that are taxed at the full Indian rate.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Shares acquired before 1 April 2017 are grandfathered. A Singapore holdco that held them continues to
          be taxed only in Singapore, if it passes the shell and primary purpose tests.
        </p>

        <h2 id="lob" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The tests a holdco must pass</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Test</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it asks</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What helps a holdco</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Residence", "Is the company a Singapore tax resident, with a residency certificate?", "Board meets in Singapore; decisions made by directors there"],
                ["Beneficial ownership", "Does it own the income, or pass it on?", "Own risk and functions; no obligation to pay the income onward"],
                ["Shell/conduit (Article 24A)", "Does it spend at least SGD 200,000 a year in Singapore over the preceding 24 months?", "Real payroll, rent, audit and services; listed status if applicable"],
                ["Primary purpose (Article 24A)", "Was the arrangement made mainly to obtain the benefit?", "Written commercial rationale and business plan"],
                ["Principal purpose test (MLI)", "Was obtaining the treaty benefit one of the principal purposes?", "Evidence that the structure serves non-tax goals"],
                ["Indian GAAR", "Is it an impermissible avoidance arrangement with a tax benefit over INR 3 crore?", "Commercial substance; consistent behaviour over time"],
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

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Legal point.</strong> A June 2025 Mumbai Tribunal decision (Prashant Kothari) held that the
          limitation provision does not on its own remove treaty protection on gains. Another bench could take a
          different view, so build the substance as if the provision applies.
        </div>

        <h2 id="substance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What substance looks like in practice</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Directors who decide:</strong> at least one or two Singapore-resident directors with genuine authority, and minutes that show real discussion.</li>
          <li><strong>Spend:</strong> payroll, premises, audit, company secretary and professional fees that comfortably exceed the SGD 200,000 threshold.</li>
          <li><strong>Control and management:</strong> board meetings in Singapore, key decisions made there, and bank accounts operated from Singapore.</li>
          <li><strong>Documents:</strong> a board paper stating why Singapore was chosen, the holding plan, and the investor mix.</li>
          <li><strong>Tax residency certificate:</strong> obtained each year before dividends or sale proceeds are paid.</li>
        </ul>

        <h2 id="poem" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India-side risks beyond the treaty</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Place of Effective Management:</strong> a foreign company can be an Indian tax resident if key management and commercial decisions are in substance made in India. Keep decision-making visibly in Singapore.</li>
          <li><strong>Indirect transfers:</strong> selling shares in the Singapore holdco can be taxed in India if the shares derive substantial value from Indian assets. Thresholds and exemptions apply and should be tested before a sale.</li>
          <li><strong>GAAR:</strong> applies from 1 April 2017 to arrangements with a tax benefit above INR 3 crore that lack commercial substance.</li>
          <li><strong>Dividends from India:</strong> subject to Withholding Tax at the treaty rate with proper documents. See <Link href="/blog/singapore-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.</li>
          <li><strong>Ownership questions:</strong> bank and regulator KYC will trace the chain to individual owners.</li>
        </ul>

        <h2 id="alternatives" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When not to use a Singapore holdco</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The group has a single parent and no further Asian plans: a direct holding from the parent&apos;s own country can be simpler.</li>
          <li>The holdco would have no staff or spend: expect the shell test to apply.</li>
          <li>The Indian shares were acquired on or after 1 April 2017 and the main goal is capital gains relief: it will not be available as it was.</li>
          <li>An ultimate owner is in a land-border country: Press Note 3 approval may be needed and should be planned first.</li>
        </ul>

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
            { label: "IRAS: protocols amending the Singapore-India DTA", href: "https://www.iras.gov.sg/media/docs/default-source/dtas/protocol-amending-singapore-india-dta-(ratified)(mli)(1-oct-2019).pdf?sfvrsn=dd28a790_0" },
            { label: "VJM Global: Singapore-India tax treaty guide (secondary source)", href: "https://www.vjmglobal.com/feeds/blog/singapore-india-tax-treaty" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Holding India Through a Singapore Company?"
        description="Tell us the group structure, and we'll review treaty eligibility, substance and the Indian filings for the holding company route."
      />
    </main>
  )
}
