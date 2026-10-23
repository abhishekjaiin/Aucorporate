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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "compare", label: "The five structures side by side" },
  { id: "why-sub", label: "Why the subsidiary is usually the answer" },
  { id: "holding", label: "Direct holding or an intermediate company?" },
  { id: "people", label: "Directors and ownership: UK practical points" },
  { id: "eor", label: "When an Employer of Record is the right first step" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which structure do most UK companies choose in India?", a: "A wholly owned private limited company. It limits liability, can earn revenue and employ staff, is taxed at the domestic company rate and is the easiest vehicle to sell or restructure." },
  { q: "What is the difference between a branch office and a subsidiary in India?", a: "A branch is part of the UK company, needs RBI approval, is limited to specified activities and is taxed as a foreign company. A subsidiary is a separate Indian company that can carry out its own business." },
  { q: "Can a UK company open a liaison office in India?", a: "Yes, with RBI approval through an authorised dealer bank, if it has a profit record for the previous three years and net worth of at least USD 50,000. The office can liaise and research but cannot earn income or invoice." },
  { q: "Should a UK company hold its Indian subsidiary directly?", a: "In most cases yes. Direct holding keeps the treaty and UK exemption position simple. An intermediate holding company must pass the principal purpose test and needs real substance." },
  { q: "Is an Employer of Record better than a subsidiary?", a: "Only at the start. An Employer of Record is faster and needs no capital, but it cannot contract in your name, and it becomes costly as the team grows. Most groups convert to a subsidiary after the first year or ten hires." },
]

const relatedCards = [
  { title: "Incorporating an Indian Subsidiary from the UK: A Week-by-Week Plan", desc: "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days.", href: "/blog/uk-to-india/incorporation-steps" },
  { title: "Documents a UK Parent Needs for an Indian Subsidiary: Companies House Papers, Notarisation and the Apostille", desc: "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes that cost weeks.", href: "/blog/uk-to-india/documents-companies-house-apostille" },
  { title: "The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State", desc: "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.", href: "/blog/uk-to-india/india-uk-dtaa" },
  { title: "Building a Global Capability Centre in India as a UK Company: Models, Staging, Regulation and Pricing", desc: "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm third-party rules, transfer pricing, PE risk, talent and governance.", href: "/blog/uk-to-india/gcc-for-uk-companies" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Choosing an Indian Structure as a UK Company: Subsidiary, Branch, Liaison Office, LLP or Employer of Record"
        description="How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through an intermediate company."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Subsidiary, Branch, Liaison Office or LLP: Choosing a Structure in India from the UK" },
        ]}
      />

      <GuideHero
        eyebrow="Structure: UK parent"
        title="Choosing an Indian Structure as a UK Company: Subsidiary, Branch, Liaison Office, LLP or Employer of Record"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most UK companies choose a wholly owned private limited company because it limits liability to the
          capital invested, can invoice and employ freely, and is taxed at the domestic company rate. A branch
          or liaison office needs RBI approval and track-record tests, and a branch is taxed at the higher
          foreign-company rate. Use an Employer of Record to test the market, and hold the Indian company
          directly from the UK unless an intermediate holding company has real substance.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Default choice", "Wholly owned private limited company"],
                ["Branch office", "RBI approval; the UK company needs a profit record for the five preceding years and net worth of at least USD 100,000; taxed as a foreign company"],
                ["Liaison office", "RBI approval; the UK company needs a profit record for the three preceding years and net worth of at least USD 50,000; no income, no invoicing"],
                ["LLP", "FDI allowed only in eligible sectors; treated as transparent in some jurisdictions, which complicates UK tax treatment"],
                ["Employer of Record", "No entity, no capital; the EOR is the legal employer; good for the first hires"],
                ["Holding", "Direct from the UK is the baseline; an intermediate holding company must pass the treaty's principal purpose test"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The five structures side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Can earn revenue?</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax in India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Liability</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Right for a UK company that</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Private limited subsidiary", "Yes", "Domestic company rate; dividends taxed on payment", "Limited to capital", "Plans sales, development or a captive centre"],
                ["Branch office", "Specified activities only", "Foreign company rate on profits; no dividend tax", "The UK company is directly liable", "Needs to carry out the parent's own business in India, such as export and import or consultancy"],
                ["Liaison office", "No", "No income; costs funded from the UK", "The UK company is directly liable", "Wants market research and liaison only"],
                ["LLP", "Yes (eligible sectors)", "LLP rate; distributions not taxed again", "Limited to contribution", "Fits a partnership or professional services model, after tax review"],
                ["Employer of Record", "No: the EOR employs on your behalf", "Service fee only; PE risk remains", "Contractual", "Wants staff in weeks, with no entity, to test the market"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                  <td className="border border-gray-300 p-3">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why-sub" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the subsidiary is usually the answer</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Ring-fenced liability:</strong> a claim in India reaches the subsidiary, not the UK parent, subject to the usual exceptions.</li>
          <li><strong>Lower tax rate:</strong> a domestic company pays a lower headline rate than a foreign company&apos;s branch. The branch also faces the permanent establishment tests directly.</li>
          <li><strong>Commercial credibility:</strong> Indian customers, landlords, banks and employees deal more easily with an Indian company.</li>
          <li><strong>Clean exit:</strong> a sale of shares is easier than a sale of branch assets.</li>
        </ul>

        <h2 id="holding" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Direct holding or an intermediate company?</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A UK company can hold the Indian company directly, which keeps the 10% treaty dividend rate and the UK
          distribution exemption in view. Some groups insert a holding company in a third country for regional
          reasons. That structure must now pass the Multilateral Instrument&apos;s principal purpose test, so it
          needs staff, decision-making and a business reason beyond the treaty rate. The UK CFC and substance
          rules also apply. We would test the structure before recommending anything other than a direct
          holding.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Directors and ownership: UK practical points</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The Indian company needs a resident director. Options include a senior hire, a UK colleague who relocates, or an adviser-nominated director with a clear services agreement and indemnity.</li>
          <li>A UK group often uses a UK parent plus a second group company as shareholder. Choose the second shareholder so that its own tax and compliance burdens are small.</li>
          <li>Directors of the Indian company have statutory duties under the Companies Act, 2013, personal liability for some filings and potential disqualification for non-compliance, so brief UK nominees properly.</li>
        </ul>

        <h2 id="eor" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When an Employer of Record is the right first step</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An Employer of Record (EOR) employs your people in India under its own entity and charges you a fee.
          It suits the first one to ten hires and the first year of a market test. The limits are that it cannot
          sign customer contracts for you, it does not remove permanent establishment risk if your managers
          direct the work, and the cost per head rises with scale. Plan the move to a subsidiary when headcount,
          contracts or assets in India make the EOR the wrong tool, and agree conversion terms with the EOR at
          the outset.
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
            { label: "Reserve Bank of India: branch and liaison office rules", href: "https://www.rbi.org.in" },
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
        title="Not Sure Which Entity Type Fits?"
        description="Tell us your planned activities in India — sales, delivery or back-office — and we'll recommend the right structure for a UK parent."
      />
    </main>
  )
}
