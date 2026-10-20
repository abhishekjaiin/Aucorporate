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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/share-valuation"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "why", label: "Why valuation matters" },
  { id: "methods", label: "Common methods" },
  { id: "when", label: "When you need a fresh valuation" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Who can issue the valuation certificate?", a: "An eligible professional as defined in the FEMA rules, such as a Chartered Accountant or a merchant banker, depending on the transaction." },
  { q: "Is a valuation needed for a wholly owned subsidiary at incorporation?", a: "A valuation is needed for a wholly owned subsidiary at incorporation for shares issued to the foreign parent, because the pricing must comply with the valuation rules and the filing is supported by a certificate." },
  { q: "Can shares be issued at a premium?", a: "Shares can be issued at a premium in India. The price cannot be below fair value, but it can be higher." },
  { q: "How long is a valuation valid?", a: "There is no single validity that fits every case, so obtain one close to the transaction date." },
  { q: "What is Form FC-GPR and when is it due?", a: "Form FC-GPR is the report an Indian company files with the RBI after issuing shares to a foreign investor. It must be filed within 30 days of the share allotment through the RBI's FIRMS portal, with supporting valuation and Company Secretary certificates. Late filing attracts a Late Submission Fee or compounding." },
  { q: "What is a valuation certificate and when is it required?", a: "Shares issued to a non-resident cannot be priced below fair value. A Chartered Accountant or other eligible professional certifies the value using an internationally accepted method. It supports the FC-GPR filing and later share issues and transfers." },
  { q: "What is Form FC-GPR?", a: "The report an Indian company files with the RBI after issuing shares to a foreign investor, within 30 days of the allotment, through the FIRMS portal." },
  { q: "What is the FIRMS portal?", a: "The FIRMS portal is the RBI's Foreign Investment Reporting and Management System, where Indian companies file foreign investment reports such as FC-GPR through the Single Master Form. The company needs portal access and supporting certificates from a Company Secretary or Chartered Accountant." },
  { q: "How old can a valuation certificate be for FEMA filings?", a: "A valuation certificate for FEMA filings should not be more than 90 days old at the time of the transaction or filing. It is issued by a Chartered Accountant or a SEBI-registered merchant banker." },
]

const relatedCards = [
  { title: "Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR", desc: "How a Japanese parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.", href: "/blog/japan-to-india/funding-fema-fc-gpr" },
  { title: "ESOPs for Indian Employees of a Japanese Parent: FEMA, Tax and Cost Recharge", desc: "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a Japanese parent.", href: "/blog/japan-to-india/esop" },
  { title: "Restructuring, Mergers and Exit: Your Options for an Indian Subsidiary", desc: "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps.", href: "/blog/japan-to-india/restructuring-and-exit" },
  { title: "Repatriating Profits to Japan: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a Japanese parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/japan-to-india/repatriating-profits" },
]

export default function ShareValuationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Share Valuation for Foreign Investment: Pricing Rules and Certificates"
        description="Why shares issued to a Japanese parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "Share Valuation for Foreign Investment in India" },
        ]}
      />

      <GuideHero
        eyebrow="Fund: valuation"
        title="Share Valuation for Foreign Investment: Pricing Rules and Certificates"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Shares issued to a non-resident cannot be priced below fair value. A Chartered Accountant or other
          eligible professional certifies the value using an internationally accepted pricing method, and the
          certificate supports the FC-GPR filing. Valuation is also needed for later issues, share transfers,
          conversions and ESOPs.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="share-valuation" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Pricing rule", "Shares issued or sold to a non-resident: not below fair value; shares bought from a non-resident by a resident: not above fair value"],
                ["Who certifies", "A Chartered Accountant or SEBI-registered merchant banker for FEMA purposes; a registered valuer where company law requires one"],
                ["Methods", "Internationally accepted methods such as discounted cash flow, net asset value and comparables"],
                ["When needed", "Share issue, capital increase, share transfer, loan conversion, ESOP"],
                ["Linked filings", "Form FC-GPR within 30 days of allotment for issues; Form FC-TRS within 60 days of transfer or receipt of consideration, whichever is earlier, for transfers between residents and non-residents"],
                ["Freshness", "The valuation certificate should not be more than 90 days old at the time of the transaction or filing"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why valuation matters</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          FEMA prevents foreign investors from buying shares at a price below fair value, and from receiving
          more than fair value on certain exits. The valuation is evidence that the price complies, and it is
          checked in the RBI filing. The company may also need a registered valuer&apos;s report under company
          law for some private placements.
        </p>

        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common methods</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Net asset value:</strong> for early-stage or asset-heavy entities.</li>
          <li><strong>Discounted cash flow:</strong> for businesses with forecastable cash flows.</li>
          <li><strong>Market comparables:</strong> for companies where comparable data exists.</li>
          <li><strong>Recent transaction price:</strong> can be a reference point, but does not replace a certificate.</li>
        </ul>

        <h2 id="when" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When you need a fresh valuation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Each time the company issues shares to a foreign investor.</li>
          <li>When shares are transferred between a resident and a non-resident.</li>
          <li>When an external commercial borrowing is converted into equity.</li>
          <li>When the Indian company grants ESOPs, or for the tax value of exercised ESOPs.</li>
          <li>For a merger, demerger or buyback.</li>
        </ul>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>For a newly formed wholly owned subsidiary, the valuation is usually straightforward, but it still has to be documented. The Japanese parent should expect to sign a representation and keep the valuation with the investment records for the Japanese group&apos;s audit.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Issuing shares at face value without checking the pricing floor.</li>
          <li>Using an old valuation for a new issue.</li>
          <li>Treating the valuation as a formality and not keeping the workings.</li>
          <li>Using the wrong certifier for the particular transaction.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our valuation team prepares share capital and ESOP valuations that support your RBI filings.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/transaction-advisory" className="text-blue-800 font-semibold hover:underline">Transaction advisory</Link>
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
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/japan-to-india/faq"
          seeAllLabel="See all 216 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 20 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Valuing Shares for a Japanese Investment?"
        description="Tell us the purpose, whether a share issue, a transfer or an exit, and we'll map the valuation method and timeline."
      />
    </main>
  )
}
