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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/common-mistakes"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "setup", label: "Setup mistakes" },
  { id: "money", label: "Money and RBI mistakes" },
  { id: "tax", label: "Tax mistakes" },
  { id: "people", label: "People and data mistakes" },
  { id: "uk-law", label: "UK-law mistakes" },
  { id: "checklist", label: "A pre-filing checklist" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the most common mistake UK companies make in India?", a: "Treating India as a copy of UK practice: using UK contracts unchanged, assuming UK transfer pricing exemptions apply, and starting UK documents too late are the most frequent." },
  { q: "What are the deadlines UK companies most often miss?", a: "The 60-day allotment after the funds arrive, the 30-day Form FC-GPR filing after allotment and the INC-20A commencement filing within 180 days of incorporation." },
  { q: "Do UK transfer pricing exemptions apply in India?", a: "No. UK small and medium-sized enterprises are generally exempt from UK transfer pricing, but India has no size exemption, so the Indian subsidiary still needs documentation and Form 48." },
  { q: "Does the UK Bribery Act apply to the Indian subsidiary?", a: "It can apply to the UK parent through the conduct of its Indian subsidiary or agents. Adequate procedures are the defence, so put them in place before operations start." },
]

const relatedCards = [
  { title: "Incorporating an Indian Subsidiary from the UK: A Week-by-Week Plan", desc: "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days.", href: "/blog/uk-to-india/incorporation-steps" },
  { title: "Funding an Indian Subsidiary from the UK: Instruments, Pricing Floor, Valuation and RBI Reporting", desc: "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day allotment rule and Form FC-GPR.", href: "/blog/uk-to-india/funding-and-fema" },
  { title: "Documents a UK Parent Needs for an Indian Subsidiary: Companies House Papers, Notarisation and the Apostille", desc: "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes that cost weeks.", href: "/blog/uk-to-india/documents-companies-house-apostille" },
  { title: "Transfer Pricing in India for UK-Owned Subsidiaries: What the Indian Rules Require and How They Differ from the UK", desc: "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits and how it differs from the UK regime.", href: "/blog/uk-to-india/transfer-pricing" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="13 Costly Mistakes UK Companies Make When Setting Up in India"
        description="The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "13 Mistakes UK Companies Make Setting Up in India, and How to Avoid Them" },
        ]}
      />

      <GuideHero
        eyebrow="Mistakes: UK companies"
        title="13 Costly Mistakes UK Companies Make When Setting Up in India"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The costliest mistakes UK companies make in India are starting the UK paperwork late, missing the
          60-day allotment and 30-day FC-GPR deadlines, skipping the valuation, assuming UK transfer pricing
          exemptions apply in India, letting UK staff drift into a permanent establishment, sending data without
          a transfer mechanism, and forgetting that UK bribery and fraud-prevention laws follow the group into
          India.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="common-mistakes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Number of mistakes", "13, grouped by setup, money, tax, people and UK law"],
                ["Most common cause", "Treating India as a copy of UK practice"],
                ["Cheapest fixes", "A calendar, a valuation file and an intercompany agreement before the first invoice"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="setup" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setup mistakes</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Starting the UK documents late.</strong> Notarisation and apostille lead times set the pace for the whole project. Start before you choose the name. See <Link href="/blog/uk-to-india/documents-companies-house-apostille" className="text-blue-800 font-semibold hover:underline">documents and apostille</Link>.</li>
          <li><strong>Mismatched names and addresses.</strong> Differences between the Companies House record, passports and resolutions cause rejections and repeated notarisation.</li>
          <li><strong>Overlooking the Resident Director rule.</strong> Plan the director who has spent 182 days in India before you file. See <Link href="/blog/uk-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.</li>
        </ol>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Money and RBI mistakes</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Missing the 60-day and 30-day clocks.</strong> Allot shares within 60 days of the money arriving and file Form FC-GPR within 30 days of allotment. See <Link href="/blog/uk-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li><strong>Skipping the valuation.</strong> Shares issued to a UK investor at less than fair value breach the pricing floor.</li>
          <li><strong>Paying related parties without an agreement.</strong> Fees and royalties paid without a signed agreement and benchmarking are what tax officers pick on. See <Link href="/blog/uk-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">getting money out</Link>.</li>
        </ol>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax mistakes</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Assuming the UK transfer pricing SME exemption applies in India.</strong> It does not. See <Link href="/blog/uk-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li><strong>Not claiming the treaty rate properly.</strong> Without the HMRC certificate of residence and Form 41, the higher domestic rate is deducted.</li>
          <li><strong>Letting UK staff create a permanent establishment.</strong> Count days against the 90-day and 30-day tests. See <Link href="/blog/uk-to-india/india-uk-dtaa" className="text-blue-800 font-semibold hover:underline">the treaty guide</Link>.</li>
        </ol>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">People and data mistakes</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Using the UK contract unchanged.</strong> Indian statutes and state rules apply. See <Link href="/blog/uk-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">hiring in India</Link>.</li>
          <li><strong>Sending staff without a certificate of coverage.</strong> The Double Contributions Convention only helps if the certificate is in place. See <Link href="/blog/uk-to-india/uk-employees-in-india-dcc" className="text-blue-800 font-semibold hover:underline">UK employees in India</Link>.</li>
          <li><strong>Moving UK personal data to India without a transfer mechanism.</strong> India has no UK adequacy. See <Link href="/blog/uk-to-india/data-protection-uk-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link>.</li>
        </ol>

        <h2 id="uk-law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">UK-law mistakes</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Forgetting that UK law follows the group.</strong> The Bribery Act and the failure-to-prevent-fraud offence can reach conduct by the Indian subsidiary. Put anti-bribery and fraud-prevention procedures in place before the first hire. See <Link href="/blog/uk-to-india/uk-parent-reporting" className="text-blue-800 font-semibold hover:underline">UK parent obligations</Link>.</li>
        </ol>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A pre-filing checklist</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>UK documents notarised and apostilled with consistent names.</li>
          <li>Sector checked against the FDI Policy and the Resident Director confirmed.</li>
          <li>Board resolution, valuation and funding plan agreed with allotment and FC-GPR dates in the calendar.</li>
          <li>Intercompany agreements signed and the transfer pricing approach agreed.</li>
          <li>Treaty documents (HMRC certificate, Form 41) ready for the first payment.</li>
          <li>Secondment, certificate of coverage and day-count log ready for UK staff.</li>
          <li>Data transfer mechanism, anti-bribery and anti-fraud policies in place.</li>
        </ul>

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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Income Tax Department (India)", href: "https://www.incometax.gov.in" },
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
        title="Avoid These India Entry Mistakes"
        description="Tell us your planned structure and timeline — we'll flag the traps specific to UK companies before you incorporate."
      />
    </main>
  )
}
