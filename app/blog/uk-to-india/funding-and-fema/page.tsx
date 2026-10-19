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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/funding-and-fema"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "instruments", label: "Choosing the instrument" },
  { id: "pricing", label: "The pricing floor and the valuation certificate" },
  { id: "process", label: "Step by step: from the UK bank to the RBI filing" },
  { id: "late", label: "What happens if you miss a deadline" },
  { id: "uk-side", label: "The UK side of funding" },
  { id: "sizing", label: "How much capital to put in" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How does a UK company send money to an Indian subsidiary?", a: "By subscribing to shares in the subsidiary, with a remittance from the parent's own UK bank account to the subsidiary's Indian bank account, valued at not less than fair value. The subsidiary allots the shares within 60 days and files Form FC-GPR within 30 days of allotment." },
  { q: "What is Form FC-GPR?", a: "The RBI form reporting the issue of equity or compulsorily convertible instruments to a non-resident. It is filed on the RBI's portal within 30 days of allotment, with the valuation certificate and the Company Secretary certificate." },
  { q: "Does the UK parent need a valuation before subscribing for shares?", a: "Yes for an unlisted company. Shares issued to a non-resident must be priced at or above fair value, which needs a valuation by a recognised professional, usually relied upon for around 90 days." },
  { q: "Can a UK parent lend money to its Indian subsidiary?", a: "Yes, as an external commercial borrowing under the RBI's rules on cost, maturity and reporting. Interest is taxable in India with Withholding Tax at up to 15% under the treaty, and taxable income in the UK." },
  { q: "What happens if shares are not allotted within 60 days?", a: "The money generally has to be refunded to the parent. Keeping it needs RBI approval, so plan the board meeting and allotment before the funds arrive." },
  { q: "How much capital should a UK parent put into an Indian subsidiary?", a: "There is no minimum, but enough to cover 12 to 18 months of costs is a usual starting point, adjusted for the activity, headcount and compliance costs." },
]

const relatedCards = [
  { title: "Incorporating an Indian Subsidiary from the UK: A Week-by-Week Plan", desc: "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days.", href: "/blog/uk-to-india/incorporation-steps" },
  { title: "Getting Money Out of India: How a UK Parent Receives Dividends, Service Fees, Royalties and Loan Repayments", desc: "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.", href: "/blog/uk-to-india/repatriating-profits" },
  { title: "Choosing an Indian Structure as a UK Company: Subsidiary, Branch, Liaison Office, LLP or Employer of Record", desc: "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through an intermediate company.", href: "/blog/uk-to-india/structure-options" },
  { title: "13 Costly Mistakes UK Companies Make When Setting Up in India", desc: "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.", href: "/blog/uk-to-india/common-mistakes" },
]

export default function FundingAndFemaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding an Indian Subsidiary from the UK: Instruments, Pricing Floor, Valuation and RBI Reporting"
        description="How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day allotment rule and Form FC-GPR."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Funding an Indian Subsidiary from the UK: FEMA, Pricing, Valuation and Form FC-GPR" },
        ]}
      />

      <GuideHero
        eyebrow="Funding: UK parent"
        title="Funding an Indian Subsidiary from the UK: Instruments, Pricing Floor, Valuation and RBI Reporting"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UK parent can fund its Indian subsidiary with equity shares, mandatorily convertible instruments or
          an external commercial borrowing. Shares must be issued at or above fair value supported by a
          valuation, allotted within 60 days of the money arriving, and reported to the RBI in Form FC-GPR
          within 30 days of allotment. Funds should come from the parent&apos;s own UK bank account with the
          right purpose code, so the bank can issue the remittance certificate the filing needs.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="funding-fema-fc-gpr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Equity route", "Equity shares or fully and mandatorily convertible preference shares or debentures"],
                ["Loan route", "External Commercial Borrowing (ECB) from the UK parent, with its own RBI rules on cost, maturity and reporting"],
                ["Pricing", "Not below fair value for shares issued to a non-resident, determined by a recognised valuation method"],
                ["Valuer", "A Chartered Accountant, SEBI-registered merchant banker or cost accountant, as the rules allow"],
                ["Allotment", "Within 60 days of receiving the money; otherwise a refund is required"],
                ["Reporting", "Form FC-GPR on the RBI portal within 30 days of allotment"],
                ["Annual return", "Foreign Liabilities and Assets (FLA) return by 15 July"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="instruments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the instrument</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Instrument</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it is</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Use it when</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Equity shares", "Ordinary shares issued to the UK parent", "Almost always at setup", "Pricing floor and valuation at each issue"],
                ["Compulsorily convertible preference shares (CCPS)", "Preference shares that must convert into equity", "Group wants a fixed return profile, or a tranche funded now and converted later", "Conversion price must be fixed or formula-based when issued"],
                ["Optionally convertible instruments", "Convertible at the holder's option", "Rarely", "Treated as debt under FEMA, so the ECB rules apply"],
                ["External Commercial Borrowing", "A loan from a foreign equity holder", "Bridging or when interest deductions are wanted", "Rate and maturity limits; monthly reporting; withholding on interest"],
                ["Inter-company trade credit and service fees", "Operating balances", "Day-to-day settlement", "Transfer pricing and the timing rules for payments to related parties"],
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

        <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The pricing floor and the valuation certificate</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Shares issued to a UK investor in an unlisted Indian company must not be priced below fair value. The
          valuation is prepared on an internationally accepted method, typically discounted cash flow, by a
          recognised professional, and is generally relied upon for a limited period, often about 90 days, so
          the issue should follow soon after. A start-up with no history is valued on its business plan; an
          established company on its financials. Keep the valuation file ready, because both the RBI portal and
          the tax authorities can ask for it.
        </p>

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step by step: from the UK bank to the RBI filing</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The board of the Indian company passes a resolution on the issue, and shareholders approve it where the Companies Act requires.</li>
          <li>Obtain the valuation and confirm the price per share.</li>
          <li>The UK parent remits the amount from its own UK bank account to the Indian company&apos;s bank account, quoting the purpose of the remittance as share subscription.</li>
          <li>The Indian bank issues the foreign inward remittance certificate (FIRC) or electronic equivalent.</li>
          <li>Allot the shares within 60 days of receipt and issue share certificates.</li>
          <li>File Form FC-GPR on the RBI portal within 30 days of allotment, with the valuation certificate, the Company Secretary certificate and the bank documents.</li>
          <li>Update the registers, file the return of allotment with the Registrar and keep the pack for the Auditor.</li>
        </ol>

        <h2 id="late" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What happens if you miss a deadline</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A delay in allotment beyond 60 days generally means the money has to go back to the parent, with RBI
          approval needed to keep it. A delay in filing Form FC-GPR is regularised by paying a late submission
          fee, which grows with the delay and the amount, and large or long delays may need compounding. These
          are fixable, but the cost and the time are easy to avoid with a calendar. See{" "}
          <Link href="/blog/uk-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">the compliance calendar</Link>.
        </p>

        <h2 id="uk-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The UK side of funding</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>UK banks apply anti-money-laundering checks to a large overseas payment, so brief the bank and have the board resolution, ownership chart and the subsidiary&apos;s bank details ready.</li>
          <li>UK has no exchange controls, so sterling can be converted and sent freely. Compare exchange rates and fees, and avoid sending the money before the Indian bank account and board resolution are ready.</li>
          <li>An investment in the subsidiary is not tax-deductible in the UK, but interest on a parent loan is income taxable in the UK. See <Link href="/blog/uk-to-india/uk-parent-reporting" className="text-blue-800 font-semibold hover:underline">UK parent obligations</Link>.</li>
        </ul>

        <h2 id="sizing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How much capital to put in</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          There is no statutory minimum, but the practical amount covers at least 12 to 18 months of costs:
          salaries, rent, professional fees and a buffer for tax and compliance. Fresh capital later is possible
          by a further issue at a new valuation. Equity cannot easily be returned, whereas loans can be repaid,
          so mix the two thoughtfully with advice on pricing and withholding.
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
            { label: "Reserve Bank of India: Foreign Exchange Management (Non-debt Instruments) Rules and FIRMS portal", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
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
        title="Funding Your Indian Subsidiary?"
        description="Tell us your planned investment amount and structure — we'll map the valuation, FC-GPR filing and FEMA reporting timeline."
      />
    </main>
  )
}
