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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/japan-parent-obligations"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "why", label: "Why the Japanese side matters" },
  { id: "forms", label: "The main Japanese points to discuss with your adviser" },
  { id: "cfc", label: "CFC rules and the Indian subsidiary" },
  { id: "tp", label: "Transfer pricing documentation" },
  { id: "align", label: "Keeping the two sides aligned" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Japanese company have to report its Indian subsidiary?", a: "Generally there are Japanese filings and tests, such as the CFC rules and transfer pricing documentation. Confirm with a Japanese tax adviser." },
  { q: "Is the Indian subsidiary a controlled foreign company?", a: "It depends on the effective tax rate and substance tests applied each year. India's corporate tax rate is generally above the main threshold, but confirm." },
  { q: "Are dividends from India taxed in Japan?", a: "Generally 95% of dividends from a qualifying foreign subsidiary can be exempt, if the holding is at least 25% for six months. Confirm with your adviser." },
  { q: "Does the parent need transfer pricing documentation?", a: "For transactions with the Indian subsidiary, documentation is required unless below the specified thresholds. Confirm with your Japanese adviser." },
  { q: "Does J-SOX cover the Indian subsidiary?", a: "For a listed Japanese parent, material subsidiaries are often in scope. We can support process documentation and testing in India." },
  { q: "Who prepares the Japanese filings?", a: "Your Japanese tax adviser. AU Corporate supplies the Indian information and handles Indian filings." },
  { q: "Will the year-end difference cause problems?", a: "Not if aligned. Many Japanese groups close on 31 March, matching India. Otherwise a reporting bridge solves it." },
]

const relatedCards = [
  { title: "Transfer Pricing in India: A Guide for Japanese Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a Japanese company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/japan-to-india/transfer-pricing" },
  { title: "The India-Japan Tax Treaty and Permanent Establishment Risk for Japanese Companies", desc: "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.", href: "/blog/japan-to-india/dtaa-pe-risk" },
  { title: "Audit and Internal Controls for an Indian Subsidiary of a Japanese Group", desc: "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a Japanese group. What to expect and how to prepare.", href: "/blog/japan-to-india/audit-icofr" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/japan-to-india/compliance-calendar" },
]

export default function JapanParentObligationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Japanese Parent Obligations When You Own an Indian Subsidiary"
        description="Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "Japanese Parent Reporting for an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Japan side: reporting"
        title="Japanese Parent Obligations When You Own an Indian Subsidiary"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Japanese company that owns an Indian subsidiary has Japanese obligations of its own: checking the
          controlled foreign company (CFC) rules, applying the foreign dividend exemption, keeping transfer
          pricing documentation for transactions with the subsidiary, including it in J-SOX internal control
          reporting if the parent is listed, and meeting any outward investment reporting. These are Japanese
          requirements, so your Japanese tax adviser should confirm them; we supply the Indian data so the
          numbers match.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="parent-obligations" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["CFC rules", "Japanese company holding 10% or more of a foreign company (with associated persons) may be taxed on the CFC's profits if conditions are met; Indian tax rate is a key test"],
                ["Dividend exemption", "95% of dividends from a qualifying foreign subsidiary (25% holding for six months) can be exempt"],
                ["Transfer pricing", "Documentation for transactions with the Indian subsidiary; local file exemption applies only below specified yen thresholds"],
                ["J-SOX", "Internal control reporting for listed parents; material subsidiaries may be in scope"],
                ["Overseas assets", "Reporting duties for individuals and companies where thresholds are met"],
                ["Who advises", "Your Japanese tax adviser (zeirishi) or tax counsel; AU Corporate provides Indian financial data and coordination"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the Japanese side matters</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India and Japan each tax and report separately. A subsidiary that is fully compliant in India can
          still create Japanese filing duties for its parent. Penalties for missing Japanese returns or
          schedules can be significant, so it is worth setting the process up at the start.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          This page is a general orientation to the Indian-subsidiary side of Japanese reporting. Japanese tax
          and securities law is outside our practice; confirm every point with a Japanese tax adviser or
          counsel.
        </div>

        <h2 id="forms" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The main Japanese points to discuss with your adviser</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it covers</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Input from India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["CFC (anti-tax-haven) rules", "Whether the Indian subsidiary's profits could be added to the parent's taxable income; tests include the entity's effective tax rate and substance", "Indian tax computations and effective tax rate, business substance records"],
                ["Foreign dividend exemption", "95% exemption for dividends from a qualifying subsidiary (25% holding for six months)", "Dividend amounts, dates, Indian Withholding Tax paid"],
                ["Transfer pricing documentation", "Local file and, for large groups, master file and country-by-country reporting", "Indian benchmarking and Form 48 (previously Form 3CEB)"],
                ["J-SOX", "Internal control report under the Financial Instruments and Exchange Act for listed companies", "Process documentation and control testing for the Indian entity"],
                ["Outward investment reporting", "Any notification or report required under the Foreign Exchange and Foreign Trade Act or for statistical purposes", "Date and amount of share capital remitted; FC-GPR confirmation"],
                ["Overseas assets", "Reports on overseas assets for individuals or entities above thresholds", "Shareholding value, bank balances"],
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

        <h2 id="cfc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">CFC rules and the Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Japan can tax a Japanese company on a foreign subsidiary&apos;s profits where the parent holds 10% or
          more and the subsidiary is a CFC. Entities with an effective tax rate below the Japanese threshold can
          be caught unless they have real operations in their own country, and certain passive income can be
          added back. India&apos;s corporate tax rate is generally above the main threshold, but the test is
          applied each year to the specific entity, so confirm it, especially if the subsidiary has low profits
          or tax incentives.
        </p>

        <h2 id="tp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Transfer pricing documentation</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Japan follows the three-tier approach of local file, master file and country-by-country report. The
          local file is required for transactions with a foreign related party above specified yen thresholds,
          and documentation must be provided to the tax authority within a set period of a request. Align the
          Japanese documentation with the Indian benchmarking so both tell the same story. See{" "}
          <Link href="/blog/japan-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing in India</Link>.
        </p>

        <h2 id="align" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping the two sides aligned</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The Indian financial year runs from 1 April to 31 March, while Japanese groups often close on 31 March too, which helps, or on 31 December, which needs a bridge.</li>
          <li>Use the same intercompany agreements and invoices as the source for both countries&apos; filings.</li>
          <li>Make sure intercompany balances agree on both sides at each reporting date.</li>
          <li>Share the Indian books and trial balances with your Japanese team on an agreed calendar.</li>
        </ul>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Many Japanese groups also close their books on 31 March, which aligns with India&apos;s year. If yours does not, plan the reporting bridge early.</li>
          <li>Ask your Japanese adviser to review the structure before you invest, not after the first return is due.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming Indian compliance covers the Japanese side.</li>
          <li>Not testing the CFC rules each year.</li>
          <li>Mismatched intercompany balances between the Indian and Japanese books.</li>
          <li>Not keeping Japanese transfer pricing documentation for services between the parent and the subsidiary.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We provide Indian financial statements, tax computations and reconciliations in a format your Japanese
          team can use, and we work with your Japanese advisers.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/accounting-assurance" className="text-blue-800 font-semibold hover:underline">Accounting and assurance</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: Japan&apos;s{" "}
          <a href="https://www.nta.go.jp/english/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">National Tax Agency</a>,
          the{" "}
          <a href="https://www.incometax.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
          and{" "}
          <a href="https://www.jetro.go.jp/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">JETRO</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/japan-to-india/faq"
          seeAllLabel="See all 216 questions"
          seeAllDescription="Plain-English answers from pre-incorporation to closure, repatriation, ESOPs, capital increases, sale of business and mergers."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "National Tax Agency of Japan", href: "https://www.nta.go.jp/english/" },
            { label: "JETRO: Japan External Trade Organization", href: "https://www.jetro.go.jp/en/" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
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
        title="Reporting on the Indian Subsidiary in Japan?"
        description="Tell us how the group reports, and we'll map the Indian figures your Japanese CFC, foreign tax credit and J-SOX work will need."
      />
    </main>
  )
}
