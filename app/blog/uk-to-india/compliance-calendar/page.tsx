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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/compliance-calendar"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "monthly", label: "Recurring monthly and quarterly filings" },
  { id: "annual", label: "Annual filings across the Indian year" },
  { id: "uk-dates", label: "The UK parent's dates beside them" },
  { id: "event", label: "Event-based filings" },
  { id: "process", label: "Running the calendar as one project" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the financial year of an Indian subsidiary?", a: "1 April to 31 March. Most UK groups also report to 31 March, which makes consolidation and audit timetables easier to align." },
  { q: "When must the Indian subsidiary hold its AGM?", a: "Within six months of the financial year end, so by 30 September, and the first AGM within nine months of the first year end." },
  { q: "When is advance tax due in India?", a: "On 15 June, 15 September, 15 December and 15 March, in instalments." },
  { q: "What is the deadline for TDS payment in India?", a: "By the 7th of the following month. Quarterly TDS returns follow on 31 July, 31 October, 31 January and 31 May." },
  { q: "Does the Indian audit date affect the UK parent's filing deadline?", a: "Indirectly. The UK parent needs the Indian audited accounts to consolidate and to finalise its Companies House accounts, which are due 9 months after the year end for a private company." },
]

const relatedCards = [
  { title: "Incorporating an Indian Subsidiary from the UK: A Week-by-Week Plan", desc: "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days.", href: "/blog/uk-to-india/incorporation-steps" },
  { title: "Funding an Indian Subsidiary from the UK: Instruments, Pricing Floor, Valuation and RBI Reporting", desc: "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day allotment rule and Form FC-GPR.", href: "/blog/uk-to-india/funding-and-fema" },
  { title: "What a UK Parent Must Handle on Its Own Side When It Owns an Indian Subsidiary", desc: "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.", href: "/blog/uk-to-india/uk-parent-reporting" },
  { title: "13 Costly Mistakes UK Companies Make When Setting Up in India", desc: "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.", href: "/blog/uk-to-india/common-mistakes" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The Compliance Calendar for a UK-Owned Indian Subsidiary, Month by Month, with the UK Parent's Dates Beside It"
        description="A month-by-month compliance calendar for an Indian subsidiary: GST, TDS, provident fund, advance tax, AGM, ROC and RBI filings, mapped against the UK parent's Companies House and HMRC dates."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Compliance Calendar for an Indian Subsidiary of a UK Company: Month by Month Against the UK Year" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: calendar"
        title="The Compliance Calendar for a UK-Owned Indian Subsidiary, Month by Month, with the UK Parent's Dates Beside It"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary has recurring monthly filings (TDS on the 7th, GST on the 11th and 20th,
          provident fund and ESI by the 15th), quarterly advance tax, and annual ROC, tax and RBI filings, all
          on a year that ends on 31 March. Because most UK groups also close on 31 March, the Indian audit, the
          UK consolidation and the UK Companies House and corporation tax dates can be planned as one timetable.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="compliance-calendar" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian financial year", "1 April to 31 March; the company cannot change it without a legal process"],
                ["Annual General Meeting", "Within six months of the year end (by 30 September), first AGM within nine months of the first year end"],
                ["Advance tax", "15 June, 15 September, 15 December and 15 March"],
                ["Annual returns", "AOC-4 within 30 days of the AGM; MGT-7 within 60 days of the AGM"],
                ["RBI", "Form FC-GPR within 30 days of each share allotment; FLA return by 15 July"],
                ["UK parent (31 March year end)", "Companies House accounts due 9 months after the year end; corporation tax payment 9 months and 1 day; company tax return 12 months"],
                ["Caution", "Due dates and form names change, especially under the Income-tax Act, 2025. Confirm each year."],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="monthly" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Recurring monthly and quarterly filings</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Filing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Frequency</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical date</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Authority</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["TDS and TCS deposit", "Monthly", "By the 7th of the next month", "Income tax"],
                ["GSTR-1 (outward supplies)", "Monthly or quarterly", "By the 11th of the next month, if monthly", "GST"],
                ["Provident fund and ESI", "Monthly", "By the 15th of the next month", "EPFO and ESIC"],
                ["GSTR-3B (summary and tax payment)", "Monthly or quarterly", "By the 20th of the next month, if monthly", "GST"],
                ["TDS returns", "Quarterly", "31 July, 31 October, 31 January, 31 May", "Income tax"],
                ["Advance tax instalments", "Quarterly", "15 June, 15 September, 15 December, 15 March", "Income tax"],
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

        <h2 id="annual" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual filings across the Indian year</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Month</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why it matters for a UK parent</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["April", "New financial year starts; update the day-count log for UK staff; set intercompany pricing", "Aligns with the treaty day tests"],
                ["May", "TDS return for Q4; finalise audit preparation", "Feeds UK group year-end"],
                ["June", "First advance tax instalment (15 June); return of deposits (30 June) where applicable", ""],
                ["July", "Foreign Liabilities and Assets (FLA) return by 15 July; TDS return for Q1", "Reports the UK parent's investment to the RBI"],
                ["August to September", "Statutory audit signed; AGM by 30 September; directors' KYC (30 September); tax audit report by the due date", "UK consolidation needs the audited numbers"],
                ["October", "File AOC-4 and MGT-7 after the AGM; income tax return (31 October for most companies; later for transfer pricing cases), with Form 48 before it", "Transfer pricing report must match the UK agreements"],
                ["November to December", "Second and third advance tax; Form 48 where due; half-yearly MSME reporting as applicable", ""],
                ["January to March", "Advance tax by 15 March; staff provident fund and gratuity reviews; board approval of next year's budget and intercompany pricing", "Year-end price true-ups"],
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
          These are the usual dates for a company with a 31 March year end. Extensions and rule changes happen
          often, so check the current notifications each year.
        </div>

        <h2 id="uk-dates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The UK parent&apos;s dates beside them</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">UK item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Normal timing for a 31 March year end</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Link to India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Annual accounts to Companies House (private company)", "Within 9 months of the year end, so by 31 December", "Consolidation needs the Indian audited accounts"],
                ["Corporation tax payment (non-large company)", "9 months and 1 day after the period end", "Indian tax paid, dividends and fees feed the computation"],
                ["Company tax return and computations", "Within 12 months of the period end", "Foreign tax credit claim needs Indian Withholding Tax certificates"],
                ["Confirmation statement", "At least every 12 months", "Confirm the PSC and director details match the Indian filings"],
                ["Country-by-country report (groups of EUR 750 million or more)", "12 months after the group year end", "India requires notification of the reporting entity"],
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

        <h2 id="event" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Event-based filings</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Allotment of shares: Form FC-GPR within 30 days, return of allotment with the Registrar.</li>
          <li>Change of director, registered office or auditor: file the relevant ROC forms within the prescribed days.</li>
          <li>New hire above the thresholds: provident fund and ESI registration; professional tax enrolment.</li>
          <li>New loan from the parent: ECB registration and monthly reporting.</li>
          <li>Payments to the UK parent: Forms 145 and 146 before remittance.</li>
        </ul>

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Running the calendar as one project</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Agree a single close timetable with the UK finance team in April.</li>
          <li>Hold a monthly checklist meeting for the 7th, 11th, 15th and 20th deadlines.</li>
          <li>Use a shared tracker for annual items with an owner for each.</li>
          <li>Circulate the audit timetable as soon as the UK group&apos;s year-end plan is set.</li>
          <li>Review changes every quarter, and especially after the Union Budget and RBI circulars.</li>
        </ol>

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
            { label: "Income Tax Department (India)", href: "https://www.incometax.gov.in" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "GST portal", href: "https://www.gst.gov.in" },
            { label: "Companies House", href: "https://www.gov.uk/government/organisations/companies-house" },
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
        title="Stay Ahead of India's Compliance Calendar"
        description="Tell us your incorporation date — we'll map every ROC, tax and FEMA deadline alongside your UK parent's dates."
      />
    </main>
  )
}
