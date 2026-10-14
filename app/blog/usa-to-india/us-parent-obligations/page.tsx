import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/us-parent-obligations"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "why", label: "Why the US side matters" },
  { id: "forms", label: "The main US filings to discuss with your CPA" },
  { id: "regimes", label: "International tax regimes that can apply" },
  { id: "align", label: "Keeping the two sides aligned" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a US company have to report its Indian subsidiary to the IRS?", a: "Generally yes, commonly on Form 5471 with the US tax return. Confirm with your US CPA." },
  { q: "Is Form 5471 prepared by AU Corporate?", a: "No. US filings are prepared by your US CPA. We supply the Indian financial information they need." },
  { q: "Do we need to file an FBAR for the Indian bank account?", a: "A US person with a financial interest in or signature authority over foreign accounts above the threshold must file. Your US adviser will confirm." },
  { q: "Will the Indian financial year cause problems?", a: "It needs planning, because the Indian year ends 31 March. A reporting bridge solves this." },
]

const relatedCards = [
  { title: "Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/usa-to-india/transfer-pricing" },
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/usa-to-india/dtaa-pe-risk" },
  { title: "Audit and Internal Controls for an Indian Subsidiary of a US Group", desc: "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a US group. What to expect and how to prepare.", href: "/blog/usa-to-india/audit-icofr" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/usa-to-india/compliance-calendar" },
]

export default function UsParentObligationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="US Parent Obligations When You Own an Indian Subsidiary"
        description="US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "US Parent Reporting for an Indian Subsidiary: 5471, FBAR and More" },
        ]}
      />

      <GuideHero
        eyebrow="US side: reporting"
        title="US Parent Obligations When You Own an Indian Subsidiary"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US company that owns an Indian subsidiary generally reports it to the IRS, usually on Form 5471 with
          its US tax return, and may also need to report foreign bank accounts (FBAR and Form 8938) and consider
          international tax regimes that tax foreign income. These are US requirements, so your US CPA should
          confirm them; we coordinate the Indian side so the numbers match.
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
                ["Form 5471", "Information return for US persons with an interest in a foreign corporation, filed with the US income tax return"],
                ["FBAR (FinCEN Form 114)", "Report of foreign financial accounts whose combined value exceeds $10,000 at any time in the year; due 15 April with an automatic extension to 15 October; up to $10,000 penalty for a non-willful failure"],
                ["Form 5471 penalty", "$10,000 per foreign corporation per year, plus $10,000 for each 30 days of continued failure beyond 90 days after IRS notice, up to $50,000 more"],
                ["Form 8938", "Statement of specified foreign financial assets, where thresholds are met"],
                ["International tax regimes", "Rules that can tax a foreign subsidiary's income in the US currently; review with a US adviser"],
                ["Who advises", "Your US CPA or tax counsel; AU Corporate provides the Indian financial data in the required form"],
                ["Our role", "Indian books, tax computations and the information your US team asks for"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the US side matters</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India and the US each tax and report separately. A subsidiary that is fully compliant in India can still
          create US filing duties for its parent. Penalties for missing US information returns can be significant,
          so it is worth setting the process up at the start.
        </p>
        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          This page is a general orientation to the Indian-subsidiary side of a US filing. US tax law is outside
          our practice; confirm every point with a US CPA or tax counsel.
        </div>

        <h2 id="forms" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The main US filings to discuss with your CPA</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Filing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it covers</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Input from India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Form 5471", "Information about the foreign corporation, its shareholders, income statement and balance sheet, and certain transactions", "Financial statements in US GAAP or as the form requires, shareholding and related-party transactions"],
                ["FBAR (FinCEN Form 114)", "Foreign financial accounts held or controlled by a US person", "Indian bank account details and peak balances"],
                ["Form 8938", "Specified foreign financial assets above thresholds", "Value of the shareholding and accounts"],
                ["Transfer pricing alignment", "Pricing of intercompany transactions on the US side", "Indian benchmarking and Form 48 (previously Form 3CEB)"],
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

        <h2 id="regimes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">International tax regimes that can apply</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The US taxes some foreign subsidiary income on a current basis through regimes such as Subpart F and the
          global intangible low-taxed income rules (recently renamed and amended). Whether and how they apply to a
          service-based Indian subsidiary depends on the structure and the year. Your US adviser should model this
          before the subsidiary starts earning.
        </p>

        <h2 id="align" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping the two sides aligned</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Use the same financial year data, or agree a bridge between the Indian year (April to March) and the US year.</li>
          <li>Share Indian books and trial balances with your US CPA on an agreed calendar.</li>
          <li>Make sure intercompany balances agree on both sides at each reporting date.</li>
          <li>Use one set of intercompany agreements and invoices as the source for both tax filings.</li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Indian financial year runs from 1 April to 31 March, while many US groups report on a calendar year. Plan the reporting bridge early.</li>
          <li>Ask your US CPA to review the structure before you invest, not after the first return is due.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming Indian compliance covers US reporting.</li>
          <li>Learning about Form 5471 only after the first US return is due.</li>
          <li>Mismatched intercompany balances between the Indian and US books.</li>
          <li>Not planning for the different financial years.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We provide Indian financial statements, tax computations and reconciliations in a format your US CPA can
          use, and we work with your US advisers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services" className="text-blue-800 font-semibold hover:underline">USA accounting and tax</Link>
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
            { label: "Internal Revenue Service", href: "https://www.irs.gov" },
            { label: "FinCEN: FBAR", href: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts" },
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
          Last updated 7 October 2026. General information only, not legal or tax advice. Indian rules change often;
          confirm current requirements before acting.
        </p>
      </article>
    </main>
  )
}
