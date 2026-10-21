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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/compliance-calendar"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "indian", label: "The Indian calendar" },
  { id: "sg", label: "The Singapore parent's calendar" },
  { id: "align", label: "Aligning two year ends" },
  { id: "quarters", label: "A working year for a 31 December parent" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What are the main Indian filing dates for a subsidiary?", a: "TDS by the 7th, provident fund and ESI by the 15th, GST on the 11th and 20th, advance tax on 15 June, 15 September, 15 December and 15 March, the AGM within six months, and the FLA return by 15 July." },
  { q: "Does the Indian subsidiary need to follow the Singapore year end?", a: "No. Indian companies generally use a 1 April to 31 March year. Prepare a reconciliation or a special-period pack for the parent's consolidation." },
  { q: "When does the Singapore parent file its annual return?", a: "Within seven months of its year end for a non-listed company, after holding its AGM within six months." },
  { q: "When is Form FC-GPR due?", a: "Within 30 days of allotment of shares." },
  { q: "When is director KYC due?", a: "By 30 September each year for directors holding a DIN." },
  { q: "Do dates change under the new Income-tax Act?", a: "Some forms and sections have changed from 1 April 2026. Confirm the current due dates every year." },
]

const relatedCards = [
  { title: "Funding an Indian Subsidiary from Singapore: Equity, Convertible Instruments, ECB Loans and RBI Reporting", desc: "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance mechanics, FC-GPR and annual FLA return.", href: "/blog/singapore-to-india/funding-and-fema" },
  { title: "Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs", desc: "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.", href: "/blog/singapore-to-india/transfer-pricing" },
  { title: "What a Singapore Parent Company Owes at Home When It Owns an Indian Subsidiary", desc: "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings, transfer pricing, Pillar Two and anti-corruption law.", href: "/blog/singapore-to-india/singapore-parent-obligations" },
  { title: "Hiring in India as a Singapore Employer: What Changes from Singapore Practice", desc: "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice.", href: "/blog/singapore-to-india/hiring-in-india" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Compliance Calendar: Indian Dates for the Subsidiary, Beside the Singapore Parent's Dates"
        description="A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates alongside and a note on year-end alignment."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Compliance Calendar for an Indian Subsidiary with a Singapore Parent" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: the annual calendar"
        title="Compliance Calendar: Indian Dates for the Subsidiary, Beside the Singapore Parent's Dates"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary has monthly, quarterly and annual filings on a 31 March year end, while many
          Singapore parents close on 31 December. The result is two calendars that overlap, with tax, audit and
          AGM dates falling in different seasons. This page lists the Indian dates, the Singapore parent&apos;s
          dates beside them and the points where the two must agree, such as the consolidation pack, the
          transfer pricing report and the dividend decision.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="compliance-calendar" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian financial year", "1 April to 31 March"],
                ["Singapore year end", "Often 31 December; ACRA dates run from the parent's own year end"],
                ["Monthly", "TDS deposit by the 7th; provident fund and ESI by the 15th; GST returns on the 11th and 20th"],
                ["Quarterly", "Advance tax 15 June, 15 September, 15 December, 15 March; TDS returns"],
                ["Annual", "Audit, AGM within 6 months, AOC-4 30 days and MGT-7 60 days after the AGM, tax return, Form 48, FLA return by 15 July"],
                ["Singapore", "AGM within 6 months and annual return within 7 months of the parent's year end; tax return each year"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="indian" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian calendar</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Filing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Frequency</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical timing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Authority</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["TDS deposit", "Monthly", "By the 7th of the next month", "Income-tax Act, 2025"],
                ["GST returns", "Monthly or quarterly", "The 11th and 20th", "GST"],
                ["Provident fund and ESI", "Monthly", "By the 15th", "EPFO, ESIC"],
                ["Advance tax", "Quarterly", "15 June, 15 September, 15 December, 15 March", "Income-tax Act, 2025"],
                ["TDS returns", "Quarterly", "Following the quarter", "Income-tax Act, 2025"],
                ["Statutory audit and financial statements", "Annual", "Before the AGM", "Companies Act"],
                ["Annual General Meeting", "Annual", "Within 6 months of the year end", "Companies Act"],
                ["AOC-4 and MGT-7", "Annual", "30 and 60 days after the AGM", "MCA"],
                ["Income tax return and Form 48", "Annual", "By the due date; transfer pricing cases later", "Income-tax Act, 2025"],
                ["FLA return", "Annual", "By 15 July", "RBI"],
                ["Form FC-GPR", "Per share issue", "Within 30 days of allotment", "RBI"],
                ["Director KYC", "Annual", "By 30 September", "MCA"],
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

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Note on the new tax law.</strong> The Income-tax Act, 2025 and the Income-tax Rules, 2026
          apply from 1 April 2026, so form names, sections and some dates have changed. Confirm each year.
        </div>

        <h2 id="sg" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Singapore parent&apos;s calendar</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Timing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Link to India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Estimated chargeable income", "Within 3 months of the parent's year end", "Dividends and fees received in the year"],
                ["AGM", "Within 6 months of the year end", "Needs the Indian subsidiary figures for consolidation"],
                ["Annual return to ACRA", "Within 7 months of the year end", "Controller and ownership data"],
                ["Corporate income tax return", "Annual filing date set by IRAS", "Foreign-sourced income exemption and credits for Indian tax"],
                ["Transfer pricing documentation", "With the tax return", "Must agree with Form 48"],
                ["GST returns", "Quarterly", "Services to the Indian subsidiary"],
                ["Country-by-country report", "Within 12 months of the year end", "Indian entity data"],
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

        <h2 id="align" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Aligning two year ends</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Option 1:</strong> keep both year ends and prepare a reconciliation each year, with the Indian entity&apos;s accounts re-cut to the parent&apos;s year end for consolidation.</li>
          <li><strong>Option 2:</strong> move the parent to a 31 March year end if there is no other constraint.</li>
          <li><strong>Option 3:</strong> ask the Indian statutory auditor to provide a limited review for the parent&apos;s period.</li>
          <li>In every case, agree an internal timetable so that the audit, the AGM and the dividend decision fit both sides.</li>
        </ul>

        <h2 id="quarters" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A working year for a 31 December parent</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Quarter</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Singapore</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["January to March", "Advance tax 15 March; year end 31 March; accounts closing", "Parent audit under way; estimated chargeable income due"],
                ["April to June", "Audit; TDS returns; start of FLA return; advance tax 15 June", "Parent AGM within 6 months"],
                ["July to September", "FLA by 15 July; AGM by 30 September; director KYC; advance tax 15 September", "ACRA annual return within 7 months"],
                ["October to December", "AOC-4 and MGT-7; income tax return and Form 48; advance tax 15 December", "Tax return; transfer pricing documentation"],
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
            { label: "Ministry of Corporate Affairs: filings", href: "https://www.mca.gov.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Keeping India's Calendar Next to Singapore's?"
        description="Tell us your incorporation date and the parent's year-end, and we'll map every ROC, tax and FEMA deadline for the subsidiary."
      />
    </main>
  )
}
