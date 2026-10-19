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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/compliance-calendar"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "monthly", label: "Every month" },
  { id: "quarterly", label: "Every quarter" },
  { id: "annual", label: "Every year" },
  { id: "event", label: "When something happens" },
  { id: "new", label: "What the new Income-tax Act changes" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the first compliance after incorporation?", a: "Appointing the first Auditor within 30 days, filing the commencement declaration (INC-20A) within 180 days, and reporting the received funds (FC-GPR) within 30 days of allotment." },
  { q: "When is the annual return due?", a: "Form MGT-7 is due within 60 days of the AGM. Form AOC-4 for financial statements is due within 30 days of the AGM." },
  { q: "When must the FLA return be filed?", a: "The FLA return must be filed by 15 July each year on the RBI portal." },
  { q: "What happens if a filing deadline is missed?", a: "Late fees, penalties and, for some company filings, director disqualification can follow. Regular compliance avoids all of these." },
  { q: "Do the new tax forms change due dates?", a: "The new tax forms change the names and numbers, and the notified due dates should be confirmed for each tax year." },
  { q: "What annual compliance does the subsidiary have?", a: "Statutory audit, an AGM, filing financial statements and the annual return with the Registrar, income tax return and advance tax, GST and Withholding Tax filings, payroll returns, the FLA return to the RBI, and transfer pricing reporting where applicable." },
  { q: "What is the annual compliance cost of an Indian subsidiary?", a: "The annual compliance cost of an Indian subsidiary depends on its size and scope. It covers bookkeeping, statutory audit, income tax and ROC filings, GST returns, payroll compliance, RBI reporting and, where there are transactions with the Australian parent, a transfer pricing report. Pricing a fixed annual scope up front is practical, because missed filings cost more than staying current." },
  { q: "What happens if the subsidiary stops filing or misses deadlines?", a: "If a subsidiary stops filing or misses deadlines, late fees accrue daily, directors can be disqualified after continued non-filing, the Registrar can strike the company off, and FEMA defaults need compounding with the RBI. Regularizing a lapsed company is possible but costs more than staying current, so a compliance calendar helps." },
  { q: "What are AOC-4 and MGT-7?", a: "AOC-4 is the form for filing the company's financial statements with the Registrar, and MGT-7 is the annual return of shareholders, directors and other details. Both are due after the AGM, and late filing attracts additional fees per day." },
  { q: "What are the AGM requirements?", a: "The first AGM must be held within nine months of the first financial year-end and later ones within six months of each year-end. The AGM approves the audited accounts and other annual business. Shorter notice is possible with member consent." },
  { q: "What is the FLA return?", a: "The Annual Return on Foreign Liabilities and Assets is filed online with the RBI by 15 July each year by Indian companies that have received foreign investment or hold overseas assets. It reports the company's foreign investment holdings and related details." },
  { q: "What are the monthly due dates for GST, Withholding Tax, PF and ESI in India?", a: "For regular monthly filers, GSTR-1 is due by the 11th and GSTR-3B by the 20th of the following month, Withholding Tax is deposited by the 7th, and PF and ESI contributions are paid by the 15th." },
]

const relatedCards = [
  { title: "Audit and Internal Controls for an Indian Subsidiary of an Australian Group", desc: "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of an Australian group. What to expect and how to prepare.", href: "/blog/australia-to-india/audit-icofr" },
  { title: "Hiring and Payroll in India for Australian Companies: Contracts, PF, ESI and Gratuity", desc: "How Australian companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/australia-to-india/hiring-and-payroll" },
  { title: "Thirteen Mistakes Australian Companies Make When Setting Up in India, and How to Avoid Them", desc: "The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.", href: "/blog/australia-to-india/common-mistakes" },
  { title: "Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR", desc: "How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.", href: "/blog/australia-to-india/funding-fema-fc-gpr" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Compliance Calendar for an Indian Subsidiary: What Is Due and When"
        description="The recurring compliance of an Australian-owned Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "India Subsidiary Compliance Calendar for Australian Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Operate: compliance"
        title="Compliance Calendar for an Indian Subsidiary: What Is Due and When"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary has recurring compliance every month (GST, Withholding Tax, payroll dues), every
          quarter (Withholding Tax statements) and every year (financial statements, annual returns to the
          Registrar, income tax return, audit and the foreign liabilities and assets return), plus event-based
          filings. Dates are fixed by law and change; use this page as a map and confirm each date with your
          adviser.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Financial year", "1 April to 31 March"],
                ["Annual general meeting", "By 30 September for a 31 March year end (Section 96 of the Companies Act, 2013)"],
                ["Financial statements to Registrar", "Form AOC-4, within 30 days of the AGM"],
                ["Annual return to Registrar", "Form MGT-7, within 60 days of the AGM"],
                ["Foreign liabilities and assets return", "Annually by 15 July"],
                ["Withholding Tax and payroll", "Withholding Tax deposited by the 7th and PF and ESI by the 15th of the following month; GST returns monthly (GSTR-1 by the 11th, GSTR-3B by the 20th for regular monthly filers); Withholding Tax statements quarterly"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="monthly" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Every month</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Deposit Withholding Tax on salaries and payments by the 7th of the following month.</li>
          <li>File GST returns for the month or quarter as applicable.</li>
          <li>Pay provident fund and ESI contributions and file returns.</li>
          <li>Pay professional tax where the state levies it.</li>
          <li>Close the books and reconcile the bank account and intercompany balances.</li>
        </ul>

        <h2 id="quarterly" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Every quarter</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>File Withholding Tax statements: Form 138 for salaries (previously Form 24Q), Form 140 for resident payments (previously Form 26Q) and Form 144 for non-resident payments (previously Form 27Q).</li>
          <li>Pay advance tax in instalments as required.</li>
          <li>Hold board meetings as required by company law, with at least the minimum number each year and gaps within the permitted limit.</li>
        </ul>

        <h2 id="annual" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Every year</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Compliance</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Timing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Statutory audit", "Before the AGM", "Appoint the first Auditor within 30 days of incorporation (Section 139(6) of the Companies Act, 2013) and file Form ADT-1 within 15 days of appointment"],
                ["Annual general meeting", "Within 6 months of year end", "Adopt financial statements"],
                ["Form AOC-4", "30 days after the AGM", "Financial statements to the Registrar"],
                ["Form MGT-7", "60 days after the AGM", "Annual return"],
                ["Income tax return", "31 October after the tax year for companies; 30 November where Form 48 is required", "Tax year 2026-27 is the first year under the Income-tax Act, 2025; the previous year's return continues under the 1961 Act"],
                ["Advance tax", "15 June, 15 September, 15 December and 15 March (Section 408 of the Income-tax Act, 2025, previously Section 211 of the Income-tax Act, 1961)", "15%, 45%, 75% and 100% of the estimated tax for the year; interest on a shortfall under Section 425 (previously Section 234C)"],
                ["Form 48 (previously Form 3CEB)", "31 October after the tax year", "Required for any international transaction, whatever its value; ₹1 lakh penalty for not filing"],
                ["Tax audit report in Form 26 (previously Forms 3CA/3CB and 3CD)", "30 September after the tax year (31 October where Form 48 is required)", "If turnover exceeds ₹1 crore (₹10 crore where cash receipts and payments are each within 5%)"],
                ["Foreign liabilities and assets return", "15 July", "Filed on the RBI portal"],
                ["Director KYC", "Annually", "For each director"],
                ["Declarations by directors and Auditors", "Annually", "Under company law"],
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

        <h2 id="event" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When something happens</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Event</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Filing</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Foreign funds received for shares</th>
                  <td className="border border-gray-300 p-3">Form FC-GPR through the RBI FIRMS portal, within 30 days of allotment</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Change in directors</th>
                  <td className="border border-gray-300 p-3">Director change form with the Registrar</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Change of registered office or Auditor</th>
                  <td className="border border-gray-300 p-3">Relevant Registrar form</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Commencement of business</th>
                  <td className="border border-gray-300 p-3">Declaration Form INC-20A, within 180 days of incorporation</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Share transfer to or from a non-resident</th>
                  <td className="border border-gray-300 p-3">Form FC-TRS where applicable</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sale of the subsidiary or an exit</th>
                  <td className="border border-gray-300 p-3">See <Link href="/blog/australia-to-india/restructuring-and-exit" className="text-blue-800 font-semibold hover:underline">restructuring and exit</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="new" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the new Income-tax Act changes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Income-tax Act, 2025 applies from tax year 2026-27 (previously assessment years under the 1961
          Act). Many forms have new numbers and sections have been renumbered, but the underlying compliance is
          largely the same. We map your calendar to the new names and confirm due dates each year.
        </p>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Missing a Registrar filing leads to a daily additional fee and can disqualify directors, so build the calendar into your group close.</li>
          <li>Share the calendar with your Australian finance team so Indian deadlines appear in the global compliance plan.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Missing INC-20A, the first Auditor appointment or the FC-GPR deadline in the first months.</li>
          <li>Treating GST and Withholding Tax as year-end tasks.</li>
          <li>Forgetting director KYC and the FLA return.</li>
          <li>Using the Australian 30 June year end for Indian filing dates.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run the compliance calendar for you: reminders, preparation, filing and records, so nothing is
          missed.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/accounting-assurance" className="text-blue-800 font-semibold hover:underline">Accounting and compliance</Link>{" "}
          ·{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
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
        <GuideFaqList faqs={faqs} seeAllHref="/blog/australia-to-india/faq" seeAllCount={266} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "GST portal", href: "https://www.gst.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 15 October 2026. General information only, not legal or tax advice. Indian and Australian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Stay Ahead of India's Compliance Calendar"
        description="Tell us your incorporation date and financial year-end — we'll map every ROC, tax and FEMA deadline your subsidiary must hit."
      />
    </main>
  )
}
