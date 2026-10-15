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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/audit-icofr"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "types", label: "The audits an Indian subsidiary may face" },
  { id: "statutory", label: "The statutory audit step by step" },
  { id: "icofr", label: "Internal controls over financial reporting" },
  { id: "prepare", label: "How to prepare for audit" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is audit mandatory for a small Indian subsidiary?", a: "Audit is mandatory for a small Indian subsidiary, because every company must have its financial statements audited each year, whatever its size (Section 139 of the Companies Act, 2013)." },
  { q: "When must the first Auditor be appointed?", a: "Within 30 days of incorporation." },
  { q: "Does India require internal controls reporting?", a: "India requires internal controls reporting: the Auditor of the company reports on internal financial controls for most companies (Section 143(3)(i) of the Companies Act, 2013). A US parent's ICOFR requirement under the Sarbanes-Oxley Act is separate." },
  { q: "Can the same firm do the books and the audit?", a: "The same firm cannot do the books and the audit of a company, because the Auditor must be independent of the accounting work." },
  { q: "Can a US GAAP reporting package be prepared from the Indian books?", a: "A US GAAP reporting package can be prepared from the Indian books in the format the group needs." },
  { q: "Does the subsidiary need a statutory audit?", a: "An Indian subsidiary needs a statutory audit, because every company must have its accounts audited by a Chartered Accountant appointed as Statutory Auditor, regardless of turnover (Section 139 of the Companies Act, 2013). The audited financial statements are approved at the AGM and filed with the Registrar." },
  { q: "Is a statutory audit mandatory for an Indian subsidiary?", a: "A statutory audit is mandatory for every company in India under Section 139 of the Companies Act, 2013, irrespective of turnover. The first Auditor is appointed by the board within 30 days of incorporation (Section 139(6)), and later Auditors are appointed by shareholders." },
  { q: "What is ICOFR and does the India subsidiary need it?", a: "ICOFR is internal control over financial reporting, which a US-listed parent must assess under the Sarbanes-Oxley Act. Material subsidiaries are often brought into scope, so the Indian entity may need documented controls and testing. Indian company law also has its own internal financial controls reporting by the Auditor." },
  { q: "What annual compliance does the subsidiary have?", a: "Statutory audit, an AGM, filing financial statements and the annual return with the Registrar, income tax return and advance tax, GST and Withholding Tax filings, payroll returns, the FLA return to the RBI, and transfer pricing reporting where applicable." },
  { q: "Is an internal audit mandatory for an Indian subsidiary?", a: "An internal audit is mandatory under Section 138 of the Companies Act, 2013 for a private company with turnover of ₹200 crore or more or outstanding borrowings above ₹100 crore from banks or financial institutions. The internal Auditor can be an employee but cannot be the Statutory Auditor." },
  { q: "Does the Auditor have to report on internal financial controls for a small private company?", a: "A private company is exempt from the Auditor's internal financial controls report under Section 143(3)(i) of the Companies Act, 2013 if its turnover is below ₹50 crore and its borrowings are below ₹25 crore, with no default in filing. The Board must still maintain internal financial controls." },
]

const relatedCards = [
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/usa-to-india/compliance-calendar" },
  { title: "US Parent Obligations When You Own an Indian Subsidiary", desc: "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.", href: "/blog/usa-to-india/us-parent-obligations" },
  { title: "Ten Mistakes US Companies Make When Setting Up in India, and How to Avoid Them", desc: "The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.", href: "/blog/usa-to-india/common-mistakes" },
  { title: "Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/usa-to-india/transfer-pricing" },
]

export default function AuditIcofrPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Audit and Internal Controls for an Indian Subsidiary of a US Group"
        description="Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a US group. What to expect and how to prepare."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Audit and ICOFR for Indian Subsidiaries of US Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Assure: audit and controls"
        title="Audit and Internal Controls for an Indian Subsidiary of a US Group"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary must have its financial statements audited each year by an independent Chartered
          Accountant. Depending on size and activity, it may also need a tax audit, GST audit and internal audit. If
          your US group is listed or follows SOX, the subsidiary is usually part of your internal controls over
          financial reporting (ICOFR) scope as well.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Statutory audit", "Required for every company; the first Auditor is appointed within 30 days of incorporation"],
                ["Auditor", "An independent Chartered Accountant or firm appointed under Section 139 of the Companies Act, 2013; the first Auditor is appointed within 30 days of incorporation"],
                ["Tax audit", "Where turnover exceeds ₹1 crore (₹10 crore where cash receipts and payments are each within 5%), reported in Form 26 (previously Forms 3CA/3CB and 3CD)"],
                ["Internal financial controls report", "The Auditor reports on internal financial controls (Section 143(3)(i) of the Companies Act, 2013) unless the private company has turnover below ₹50 crore and borrowings below ₹25 crore with no default in filing; the Board must maintain the controls regardless"],
                ["CARO 2020", "Applies to all companies; the exemption is limited to small private companies (revenue up to ₹10 crore and borrowings up to ₹1 crore, among other conditions) that are not a holding or subsidiary of a public company"],
                ["GST audit and reconciliation", "As required by current GST law"],
                ["Internal audit", "Mandatory under Section 138 of the Companies Act, 2013 for a private company with turnover of ₹200 crore or more or borrowings above ₹100 crore; recommended for US group subsidiaries below that"],
                ["Group audit support", "Information for the US Auditors of the consolidated financials"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="types" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The audits an Indian subsidiary may face</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Audit</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Statutory audit", "Opinion on the annual financial statements under the Companies Act", "Independent Chartered Accountant"],
                ["Tax audit", "Report to the tax authority on books and tax positions where thresholds apply", "Chartered Accountant"],
                ["GST audit and reconciliation", "Checks GST returns against books where required", "As the GST law prescribes"],
                ["Transfer pricing certificate", "Accountant's report in Form 48 (previously Form 3CEB)", "Chartered Accountant"],
                ["Internal audit", "Independent review of processes and controls", "Internal or outsourced"],
                ["Group reporting audit", "Reporting package or review for the US parent's Auditors", "Local or group Auditor"],
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

        <h2 id="statutory" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The statutory audit step by step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Appoint the Auditor and file the appointment with the Registrar.</li>
          <li>Close the books and prepare the financial statements under Indian accounting standards.</li>
          <li>Auditor reviews, raises queries and finalizes the report.</li>
          <li>Board approves the accounts and the AGM adopts them.</li>
          <li>File Form AOC-4 and Form MGT-7 with the Registrar.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian subsidiaries report under Indian accounting standards. Your US group may also need a US GAAP or
          IFRS reporting package, which we prepare from the Indian books.
        </p>

        <h2 id="icofr" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Internal controls over financial reporting</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A US-listed parent must assess controls over financial reporting for material subsidiaries. For an Indian
          subsidiary this usually means documenting key processes (payroll, procure-to-pay, revenue, close), testing
          the controls and fixing gaps. India has its own requirement for internal financial controls to be reported
          by the Auditor of the company.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Define the processes and risks in scope with your US controllers.</li>
          <li>Segregate duties among preparation, approval and payment.</li>
          <li>Keep evidence of review and approval for key controls.</li>
          <li>Test controls on a schedule and track remediation.</li>
        </ul>

        <h2 id="prepare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to prepare for audit</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Maintain monthly closes with reconciled bank, payroll, tax and intercompany balances.</li>
          <li>Keep invoices, contracts and approvals in an organized file.</li>
          <li>Share the audit calendar with your US team and Auditors.</li>
          <li>Resolve prior-year points before the next cycle starts.</li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Tell us early if your group needs a reporting package or SOX testing in India, so the process is built in rather than added in the last month.</li>
          <li>Choose an Auditor for the Indian company that is independent of the team doing the bookkeeping.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Appointing the first Auditor late.</li>
          <li>Using the same team for bookkeeping and audit.</li>
          <li>Leaving internal controls undocumented until the US Auditors ask.</li>
          <li>Not agreeing the timeline between the Indian and group audits.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We support audits and assurance: statutory and tax audit coordination, internal audit, ICOFR and reporting
          packages for US groups.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/accounting-assurance" className="text-blue-800 font-semibold hover:underline">Accounting and assurance</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources:{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
          and the <a href="https://www.gst.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">GST portal</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/blog/usa-to-india/faq" />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Institute of Chartered Accountants of India", href: "https://www.icai.org" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />
        <p className="text-sm text-gray-500 mt-6">
          Last updated 14 October 2026. General information only, not legal or tax advice. Indian rules change often;
          confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Need Help With Your Statutory Audit or ICFR?"
        description="Tell us your financial year-end and group reporting standard — we'll map the audit, ICFR documentation and filing timeline for your subsidiary."
      />
    </main>
  )
}
