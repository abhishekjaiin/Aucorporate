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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/uk-parent-reporting"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "dividends", label: "Dividends: exempt in the UK, taxed once in India" },
  { id: "cfc", label: "CFC rules: when Indian profits can be attributed to the UK" },
  { id: "credit", label: "Foreign tax credit relief for Indian withholding" },
  { id: "tp", label: "UK transfer pricing and the Indian side" },
  { id: "large", label: "Large groups: Pillar Two, country-by-country reports and interest limits" },
  { id: "crime", label: "The UK criminal-law reach: bribery and failure to prevent fraud" },
  { id: "governance", label: "Accounts, governance and the group calendar" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Are dividends from an Indian subsidiary taxed in the UK?", a: "Normally not. A UK company parent usually falls within an exempt class of the distribution exemption in Part 9A of the Corporation Tax Act 2009. The Indian withholding of up to 10% under the treaty is then the cost." },
  { q: "Does a UK parent have to report its Indian subsidiary to HMRC?", a: "The subsidiary's results can be relevant to the UK return through the CFC rules, transfer pricing, foreign tax credit claims and group disclosures. The exact forms depend on the size of the group and the facts, so confirm them with your UK tax adviser." },
  { q: "Do the UK CFC rules apply to an Indian subsidiary?", a: "They can, but a charge arises only if profits are artificially diverted from the UK and no exemption applies. The tax exemption (Indian tax of at least 75% of the UK equivalent), low profits and low profit margin tests often switch the charge off for an operating subsidiary." },
  { q: "Does a small UK company need UK transfer pricing for India?", a: "Generally no, because small and medium-sized enterprises are exempt for dealings with territories that have a suitable treaty. India has no such exemption, so the Indian subsidiary still needs transfer pricing documentation and Form 48." },
  { q: "Can the UK Bribery Act apply to our Indian subsidiary?", a: "Yes. A UK commercial organisation can be liable if a person associated with it, which can include a foreign subsidiary, bribes to obtain or keep business for the group, unless it had adequate procedures to prevent it." },
  { q: "What is the failure to prevent fraud offence for a UK parent with an Indian subsidiary?", a: "From 1 September 2025 a large organisation can be liable if an associated person, which includes a subsidiary and its employees, commits a specified fraud to benefit the organisation, where there is a UK link. Reasonable prevention procedures are the defence." },
]

const relatedCards = [
  { title: "The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State", desc: "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.", href: "/blog/uk-to-india/india-uk-dtaa" },
  { title: "Getting Money Out of India: How a UK Parent Receives Dividends, Service Fees, Royalties and Loan Repayments", desc: "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.", href: "/blog/uk-to-india/repatriating-profits" },
  { title: "Transfer Pricing in India for UK-Owned Subsidiaries: What the Indian Rules Require and How They Differ from the UK", desc: "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits and how it differs from the UK regime.", href: "/blog/uk-to-india/transfer-pricing" },
  { title: "The Compliance Calendar for a UK-Owned Indian Subsidiary, Month by Month, with the UK Parent's Dates Beside It", desc: "A month-by-month compliance calendar for an Indian subsidiary: GST, TDS, provident fund, advance tax, AGM, ROC and RBI filings, mapped against the UK parent's Companies House and HMRC dates.", href: "/blog/uk-to-india/compliance-calendar" },
]

export default function UkParentReportingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What a UK Parent Must Handle on Its Own Side When It Owns an Indian Subsidiary"
        description="The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "UK Parent Obligations for an Indian Subsidiary: CFC Rules, Dividend Exemption and Transfer Pricing" },
        ]}
      />

      <GuideHero
        eyebrow="UK parent: reporting and exposure"
        title="What a UK Parent Must Handle on Its Own Side When It Owns an Indian Subsidiary"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UK parent with an Indian subsidiary should plan for five things: dividends are normally exempt but
          Indian withholding is a cost; the controlled foreign company (CFC) rules can attribute profits only
          where they are artificially diverted from the UK; Indian tax on interest, royalties and fees can be
          credited; UK transfer pricing and Pillar Two may apply by size; and the UK Bribery Act and the new
          failure-to-prevent-fraud offence can reach what the Indian team does. Your UK adviser confirms each;
          this page tells you what to ask.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends from the subsidiary", "Normally exempt under the distribution exemption (Part 9A, Corporation Tax Act 2009); Indian withholding of up to 10% is the cost"],
                ["CFC regime", "Part 9A, Taxation (International and Other Provisions) Act 2010: charge only for profits artificially diverted from the UK; several exemptions"],
                ["Foreign tax credit", "Part 2, TIOPA 2010: credit for Indian tax on income taxed in the UK, limited to the UK tax on it"],
                ["UK transfer pricing", "Part 4, TIOPA 2010; small and medium-sized enterprises are generally outside it for dealings with treaty territories"],
                ["Large groups", "Country-by-country reporting and UK multinational top-up tax at consolidated revenue of EUR 750 million or more"],
                ["Criminal-law reach", "Bribery Act 2010 (failure to prevent bribery) and Economic Crime and Corporate Transparency Act 2023 (failure to prevent fraud, from 1 September 2025)"],
                ["Accounting", "Indian subsidiary consolidated in group accounts under UK-adopted IFRS or FRS 102; Indian accounts follow Ind AS or the Companies Act schedules"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dividends: exempt in the UK, taxed once in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A UK company that owns a controlling interest in the Indian subsidiary will normally fall within an
          exempt class of the distribution exemption (Part 9A, Corporation Tax Act 2009), so a dividend is not
          UK taxable income. The Indian withholding at up to 10% under the treaty is therefore usually the only
          tax on the dividend. Where an exempt class is not met, or a dividend is part of arrangements designed
          to reduce tax, the exemption can fail, so check the conditions at the time of payment. Compare
          dividends with other routes in{" "}
          <Link href="/blog/uk-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">getting money out of India</Link>.
        </p>

        <h2 id="cfc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">CFC rules: when Indian profits can be attributed to the UK</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The UK charges a UK company on the profits of a foreign company it controls only if those profits are,
          in broad terms, artificially diverted from the UK and the company does not fall into an exemption. An
          Indian services subsidiary doing real work for the group is a normal case, but the test turns on
          facts.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Gateways:</strong> profits come into charge only if they pass a gateway, which looks at where the important decisions, risk management and asset control are exercised. If the &quot;significant people functions&quot; for the assets and risks sit in the UK, the profits may be treated as UK-derived.</li>
          <li><strong>Tax exemption:</strong> where the Indian tax paid is at least 75% of what UK tax would have been, the CFC charge is generally switched off. India&apos;s corporate tax on a domestic company is well above that threshold.</li>
          <li><strong>Low profits and low profit margin:</strong> small profits, or accounting profits of no more than 10% of operating expenses, are also exempt.</li>
          <li><strong>Exempt period and excluded territories</strong> are further routes. Check whether India appears on the current excluded-territories list, because that decides how much work the other exemptions need to do.</li>
          <li><strong>Action:</strong> document who controls the Indian entity&apos;s strategy, risk and IP, and keep the board and management minutes consistent with that.</li>
        </ul>

        <h2 id="credit" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Foreign tax credit relief for Indian withholding</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Interest, royalties and service fees paid by the Indian subsidiary are taxable in the UK. The Indian
          Withholding Tax can be credited against UK corporation tax on the same income, up to the UK tax on
          that income and limited to the treaty rate. A UK parent that did not claim the treaty rate in India
          may find the excess is not creditable, and the unrelieved amount can be a deduction instead. Keep the
          Indian Withholding Tax certificate for each payment, along with the invoice and the treaty documents.
        </p>

        <h2 id="tp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">UK transfer pricing and the Indian side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          UK transfer pricing (Part 4 of the Taxation (International and Other Provisions) Act 2010) requires
          arm&apos;s length terms between connected companies, but small and medium-sized enterprises are
          normally exempt for dealings with companies in territories that have a treaty with a
          non-discrimination article, and India qualifies. The surprise is that India has no such exemption. The
          Indian subsidiary needs a transfer pricing study and Form 48 even where the UK parent does not, and
          the two sets of papers must agree. See{" "}
          <Link href="/blog/uk-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="large" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Large groups: Pillar Two, country-by-country reports and interest limits</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>UK multinational top-up tax (Pillar Two):</strong> applies to groups with consolidated revenue of EUR 750 million or more in at least two of the previous four years. India&apos;s corporate tax is generally above 15%, but the calculation is done at jurisdiction level and the India figures must feed it.</li>
          <li><strong>Country-by-country report:</strong> filed by the UK ultimate parent in the UK, with India requiring a notification of the reporting entity. See <Link href="/blog/uk-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">the compliance calendar</Link>.</li>
          <li><strong>Corporate Interest Restriction:</strong> limits net interest deductions above GBP 2 million a year for the UK group; the interest the UK parent earns from an Indian loan is part of the calculation.</li>
          <li><strong>Controlled foreign company reporting:</strong> disclose CFC positions in the company tax return where required.</li>
        </ul>

        <h2 id="crime" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The UK criminal-law reach: bribery and failure to prevent fraud</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          These two UK laws matter because the Indian team&apos;s conduct can become a UK parent&apos;s problem.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Bribery Act 2010, section 7:</strong> a UK commercial organisation is guilty if a person associated with it, including a subsidiary or agent anywhere in the world, bribes to win business for it, unless it had adequate procedures. Licensing, customs and tax officials make India a place to design controls carefully.</li>
          <li><strong>Failure to prevent fraud (Economic Crime and Corporate Transparency Act 2023):</strong> from 1 September 2025, a large organisation can be liable where an associated person, which includes a subsidiary and its employees, commits a specified fraud intending to benefit the organisation, and there is a UK link. A &quot;large&quot; organisation meets two of three tests: more than 250 employees, more than GBP 36 million turnover, more than GBP 18 million balance sheet. The defence is reasonable fraud-prevention procedures.</li>
          <li><strong>Practical set-up:</strong> a group anti-bribery and fraud policy translated into the Indian subsidiary, training, third-party due diligence on Indian agents, a whistleblowing line and an annual review.</li>
        </ul>

        <h2 id="governance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Accounts, governance and the group calendar</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian subsidiary prepares statutory accounts for the year ending 31 March, which is also the
          usual year end for UK groups. That helps consolidation, but the Indian accounts follow the Companies
          Act and Ind AS, so a UK adjustment bridge to UK-adopted IFRS or FRS 102 is needed. For premium-listed
          groups, the UK Corporate Governance Code&apos;s internal-controls declaration also pulls material
          subsidiaries into scope. Indian company law also requires the subsidiary&apos;s Auditor to report on
          internal financial controls. Keep a list of dates that both sides depend on, such as the Indian audit
          sign-off and the UK group reporting timetable.
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
            { label: "Corporation Tax Act 2009, Part 9A: company distributions", href: "https://www.legislation.gov.uk/ukpga/2009/4/part/9A" },
            { label: "Taxation (International and Other Provisions) Act 2010, Part 9A: controlled foreign companies", href: "https://www.legislation.gov.uk/ukpga/2010/8/part/9A" },
            { label: "UK Government: guidance on the failure to prevent fraud offence", href: "https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta" },
            { label: "Ministry of Justice: Bribery Act 2010 guidance", href: "https://www.justice.gov.uk/legal-and-publications/bribery-act-2010-guidance" },
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
        title="UK Parent Reporting for Your Indian Subsidiary?"
        description="Tell us your group structure — we'll map the India-side information your UK tax adviser needs for CFC, dividend exemption and transfer pricing."
      />
    </main>
  )
}
