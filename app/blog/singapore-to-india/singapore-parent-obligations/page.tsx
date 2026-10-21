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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/singapore-parent-obligations"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "tax", label: "Singapore tax on income from the Indian subsidiary" },
  { id: "gst", label: "GST and services to the subsidiary" },
  { id: "acra", label: "Company law at home: ACRA, controllers and directors" },
  { id: "tp", label: "Transfer pricing and Pillar Two" },
  { id: "law", label: "Criminal law and regulated sectors" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is a dividend from an Indian subsidiary taxable in Singapore?", a: "A foreign dividend received in Singapore can be exempt under the foreign-sourced income exemption if it was subject to tax in India, India's highest corporate rate is at least 15%, and the Comptroller is satisfied. Check with your Singapore tax adviser." },
  { q: "Does Singapore tax the sale of an Indian subsidiary?", a: "Singapore does not tax capital gains, but India taxes gains on shares acquired on or after 1 April 2017. Gains of an income nature, such as for a share trader, can be taxed in Singapore." },
  { q: "Does a Singapore company need to file anything with ACRA when it forms an Indian subsidiary?", a: "No separate ACRA filing is needed for the investment itself. Keep board approvals, update financial statements and registers, and report any change in registrable controllers." },
  { q: "Does the Prevention of Corruption Act apply to the Indian subsidiary?", a: "It applies to acts by Singapore citizens outside Singapore, and a Singapore parent will also be asked about it by banks and auditors. Treat it as a group-wide standard." },
  { q: "Does Pillar Two affect a Singapore parent with an Indian subsidiary?", a: "Only if the group has consolidated revenue of EUR 750 million or more. The Indian rate is usually above 15%, but incentives and special regimes can bring the effective rate down, so in-scope groups should test it yearly." },
]

const relatedCards = [
  { title: "Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146.", href: "/blog/singapore-to-india/repatriating-profits" },
  { title: "Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs", desc: "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.", href: "/blog/singapore-to-india/transfer-pricing" },
  { title: "Compliance Calendar: Indian Dates for the Subsidiary, Beside the Singapore Parent's Dates", desc: "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates alongside and a note on year-end alignment.", href: "/blog/singapore-to-india/compliance-calendar" },
  { title: "Selling, Restructuring or Closing an Indian Subsidiary Held from Singapore: Tax, FEMA and Treaty Steps", desc: "Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback, strike-off, voluntary liquidation and group restructuring.", href: "/blog/singapore-to-india/exit-and-restructuring" },
]

export default function SingaporeParentObligationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What a Singapore Parent Company Owes at Home When It Owns an Indian Subsidiary"
        description="Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings, transfer pricing, Pillar Two and anti-corruption law."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Singapore Parent Obligations: Tax, ACRA and Law for a Company with an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Singapore parent: tax and law at home"
        title="What a Singapore Parent Company Owes at Home When It Owns an Indian Subsidiary"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore parent is taxed at 17% on income arising in or received in Singapore, with no capital
          gains tax, and foreign dividends received from an Indian subsidiary can be exempt if the conditions
          for foreign-sourced income exemption are met. It must still keep ACRA filings, registers of
          controllers and transfer pricing papers in order, apply the Prevention of Corruption Act to its Indian
          team and, for large groups, check the Pillar Two top-up tax. This page lists the Singapore-side points
          that your Singapore advisers should confirm; we advise on the Indian side.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="parent-obligations" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Corporate tax", "17% headline rate; territorial, so foreign income is taxed only when received in Singapore, and may be exempt"],
                ["Capital gains", "Singapore has no capital gains tax, subject to the rule that gains of an income nature are taxed"],
                ["Dividends", "One-tier system: Singapore company dividends are tax exempt in shareholders' hands"],
                ["Foreign-sourced income exemption", "Foreign dividends, foreign branch profits and foreign service income received in Singapore can be exempt if the income was subject to tax abroad, the highest corporate rate there is at least 15%, and the Comptroller is satisfied the exemption benefits the person"],
                ["GST", "9% on local supplies; exports of services can be zero-rated where the conditions are met"],
                ["Annual filings", "AGM within 6 months and annual return within 7 months of the year end for a non-listed company; tax return (Form C-S or C) each year"],
                ["Large groups", "Pillar Two top-up taxes from 1 January 2025 for groups with consolidated revenue of EUR 750 million or more"],
                ["Anti-corruption", "Prevention of Corruption Act reaches acts by Singapore citizens outside Singapore"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Singapore tax on income from the Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Singapore taxes income accruing in or derived from Singapore, and income received in Singapore from
          abroad. A company&apos;s dividends from an Indian subsidiary are foreign-sourced. When they are
          remitted to Singapore, they can be exempt if three conditions are met: the income was subject to tax
          in India, India&apos;s highest corporate tax rate is at least 15%, and the Comptroller of Income Tax
          is satisfied that the exemption is beneficial to the person. India&apos;s corporate tax rates meet the
          rate condition in the usual case, but the paperwork is the parent&apos;s to keep.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Service fees and royalties from India:</strong> these are taxable in Singapore as business income. Indian Withholding Tax can be credited against Singapore tax on the same income.</li>
          <li><strong>Interest from India:</strong> taxable in Singapore; the same credit applies.</li>
          <li><strong>Capital gains on the Indian subsidiary:</strong> Singapore does not tax capital gains, but the gain is taxed in India under the treaty for shares acquired on or after 1 April 2017. See <Link href="/blog/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">the tax treaty guide</Link>.</li>
          <li><strong>Losses:</strong> losses in an Indian subsidiary are not relieved against Singapore profits unless the group relief rules apply. They stay in India.</li>
        </ul>

        <h2 id="gst" className="text-2xl font-bold text-gray-900 mt-12 mb-4">GST and services to the subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Singapore GST is charged at 9% on supplies made in Singapore. A Singapore parent that provides
          management, IT or other services to an Indian subsidiary can often zero-rate the supply as an
          international service, but only where the legal and beneficiary conditions are satisfied. India&apos;s
          own GST also applies to the receipt, usually through the reverse charge mechanism in the Indian
          subsidiary&apos;s return. Agree on this in the services agreement so that both sides charge and claim
          consistently.
        </p>

        <h2 id="acra" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Company law at home: ACRA, controllers and directors</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Annual cycle:</strong> a non-listed company holds its AGM within 6 months and files its annual return within 7 months of the financial year end. Small private companies may be exempt from audit.</li>
          <li><strong>Registers:</strong> a Singapore company must keep a register of registrable controllers and a register of nominee directors, and report changes to ACRA.</li>
          <li><strong>Director duties:</strong> Singapore directors owe statutory duties of honesty and diligence under the Companies Act. A board that approves an Indian investment should record why, how it is funded and who monitors it.</li>
          <li><strong>Financial reporting:</strong> if the Singapore parent consolidates the Indian subsidiary, align the Indian 31 March year end and the Singapore reporting date, or prepare a bridging accounts pack.</li>
        </ul>

        <h2 id="tp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Transfer pricing and Pillar Two</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Singapore requires contemporaneous transfer pricing documentation when related-party transaction
          thresholds are crossed, and IRAS accepts a defined mark-up for routine support services. India has no
          such blanket exemption. Singapore group billing must agree with the Indian Form 48 and benchmarking.
          See{" "}
          <Link href="/blog/singapore-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Groups with consolidated revenue of EUR 750 million or more are in scope of Singapore&apos;s
          Multinational Enterprise Top-up Tax and Domestic Top-up Tax from 1 January 2025. India&apos;s
          corporate tax rate is generally higher than the 15% minimum, but tax incentives or special regimes in
          the Indian subsidiary can reduce the effective rate, so in-scope groups should model the Indian
          effective rate each year.
        </p>

        <h2 id="law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Criminal law and regulated sectors</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Prevention of Corruption Act:</strong> a Singapore citizen who corruptly deals abroad can be treated as if the act took place in Singapore. Train the Indian team and keep gifts and agents under control.</li>
          <li><strong>Sanctions and export controls:</strong> Singapore and Indian rules both apply to goods and technology moved between group companies.</li>
          <li><strong>MAS-regulated parents:</strong> banks, insurers and other regulated entities must follow MAS outsourcing rules if work moves to the Indian subsidiary.</li>
          <li><strong>Listed parents:</strong> SGX listing rules may require disclosure of material subsidiaries and acquisitions.</li>
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
            { label: "IRAS: tax exemption of foreign-sourced income", href: "https://www.iras.gov.sg/irashome/Businesses/Companies/Working-out-Corporate-Income-Taxes/Companies-Receiving-Foreign-Income/Tax-Exemption-of-Foreign-Sourced-Income/" },
            { label: "ACRA", href: "https://www.acra.gov.sg/" },
            { label: "IRAS", href: "https://www.iras.gov.sg/" },
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
        title="Reporting on the Indian Subsidiary in Singapore?"
        description="Tell us how the group reports, and we'll supply the Indian figures your Singapore tax, ACRA and audit work needs."
      />
    </main>
  )
}
