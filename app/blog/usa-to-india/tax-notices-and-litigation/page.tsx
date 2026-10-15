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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-notices-and-litigation"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "first", label: "The first 72 hours" },
  { id: "types", label: "Common notices" },
  { id: "routes", label: "Appeal and dispute routes" },
  { id: "prevent", label: "Reducing the chance of a notice" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What should be done first on getting a tax notice?", a: "On getting a tax notice, the deadline should be noted, the notice sent to the tax adviser the same day and the supporting records collected." },
  { q: "Can a transfer pricing order be appealed?", a: "A transfer pricing order can be appealed through the Dispute Resolution Panel route or the first appeal, followed by the tribunal." },
  { q: "What is the Mutual Agreement Procedure?", a: "A treaty process in which the Indian and US tax authorities resolve a double taxation case." },
  { q: "Is a GST notice handled differently?", a: "A GST notice is handled differently from an income tax notice, because GST has its own portal, forms and appeal path." },
  { q: "Do notices come to the US parent?", a: "Tax notices are issued to the Indian company, not to the US parent. The parent should be kept informed of anything significant." },
  { q: "What are the DRP and the ITAT?", a: "The Dispute Resolution Panel (DRP) hears objections to a draft assessment order and is available to foreign companies and transfer pricing cases. The Income Tax Appellate Tribunal (ITAT) is the main appellate forum on facts and law, with further appeals to the High Court." },
  { q: "What is the notice period in India?", a: "The notice period in India is set by the employment contract, commonly one to three months for professional roles. State and statutory rules also apply, so it should be written clearly into each contract." },
  { q: "Can EOR employees move into the subsidiary later?", a: "EOR employees can move into the subsidiary later with planning. Employees must agree to the transfer, their service history and benefits such as gratuity and provident fund should carry over, and contracts and notice periods need to be handled, with timing planned so that there is no gap in employment." },
  { q: "What is the deadline to appeal an income tax order in India?", a: "An appeal to the Commissioner (Appeals) is generally due within 30 days of the order, objections to the Dispute Resolution Panel against a transfer pricing draft assessment order are due within 30 days of receiving it, and an appeal to the Income Tax Appellate Tribunal is generally due within 60 days." },
]

const relatedCards = [
  { title: "Transfer Pricing in India: A Guide for US Parents and Their Indian Subsidiaries", desc: "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.", href: "/blog/usa-to-india/transfer-pricing" },
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/usa-to-india/dtaa-pe-risk" },
  { title: "Ten Mistakes US Companies Make When Setting Up in India, and How to Avoid Them", desc: "The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.", href: "/blog/usa-to-india/common-mistakes" },
  { title: "Contracts and Arbitration in India: A Guide for US Companies", desc: "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.", href: "/blog/usa-to-india/contracts-and-arbitration" },
]

export default function TaxNoticesAndLitigationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Tax Notices and Disputes in India: What US Companies Should Do"
        description="What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Handling Indian Tax Notices and Disputes for a US-Owned Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Defend: notices and litigation"
        title="Tax Notices and Disputes in India: What US Companies Should Do"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          If your Indian subsidiary receives a tax notice, do not ignore it and do not reply without reviewing it.
          Note the deadline, send it to your adviser the same day, collect the supporting records and respond on
          the portal on time. Appeals go through the first appellate authority, the Dispute Resolution Panel for
          transfer pricing and the tribunal, with treaty routes available for double taxation.
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
                ["First step", "Read the notice, note the section, the tax year and the response date"],
                ["Where notices arrive", "Income tax e-filing portal, GST portal, email and registered post"],
                ["First appeal", "Commissioner (Appeals) for most income tax orders, generally within 30 days of the order"],
                ["Transfer pricing", "Objections to the Dispute Resolution Panel within 30 days of receiving the draft assessment order, then the Income Tax Appellate Tribunal (appeal generally within 60 days)"],
                ["Double tax", "Mutual Agreement Procedure under the India-US treaty"],
                ["Advance certainty", "Advance Pricing Agreement for future years"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="first" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The first 72 hours</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Read the notice fully. Note the legal section, the tax year or period and the response deadline.</li>
          <li>Forward it to your adviser the same day. Notices are time-bound and some deadlines are short.</li>
          <li>Collect the supporting records: books, invoices, agreements, bank statements and prior filings.</li>
          <li>Confirm that the notice reached the right entity and that the registered email and portal logins are working.</li>
          <li>Apply for more time if the data cannot be assembled by the deadline, in writing and before it expires.</li>
        </ol>

        <h2 id="types" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common notices</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notice type</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it usually means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Intimation or mismatch", "A difference between the return and tax data, such as Withholding Tax credits"],
                ["Scrutiny assessment", "The return has been selected for detailed examination"],
                ["Transfer pricing reference", "A Transfer Pricing Officer will review the intercompany pricing"],
                ["Withholding Tax default", "Short or late deduction or deposit on a payment"],
                ["GST notice", "A mismatch or query on returns, input credit or an export of services claim"],
                ["Penalty or prosecution notice", "A separate proceeding; needs immediate legal review"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Appeal and dispute routes</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Response and assessment</strong>: the first answer is the written reply and supporting records.</li>
          <li><strong>Commissioner (Appeals)</strong>: the first appeal against most assessment orders, within the time stated in the law.</li>
          <li><strong>Dispute Resolution Panel</strong>: for eligible foreign companies and for transfer pricing adjustments, an alternative to the first appeal.</li>
          <li><strong>Income Tax Appellate Tribunal</strong>: the main fact-finding appeal body.</li>
          <li><strong>High Court and Supreme Court</strong>: appeals on questions of law.</li>
          <li><strong>Mutual Agreement Procedure</strong>: government-to-government route for treaty double taxation.</li>
          <li><strong>Advance Pricing Agreement</strong>: avoids future transfer pricing disputes for covered transactions.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-10">
          Time limits and the exact route depend on the order, the Act that applies to the tax year and the amounts
          involved. Always have the order reviewed before choosing a route.
        </p>

        <h2 id="prevent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Reducing the chance of a notice</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Match books to the tax portal each quarter, especially Withholding Tax credits and GST.</li>
          <li>Keep transfer pricing documentation current. See{" "}
            <Link href="/blog/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
          </li>
          <li>Keep treaty documents on file. See{" "}
            <Link href="/blog/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">treaty and PE risk</Link>.
          </li>
          <li>File on time and keep a clean record of responses.</li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Your US management does not need to act on every notice, but they should be told about any transfer pricing adjustment, a permanent establishment question or a demand above an agreed amount.</li>
          <li>Set a reporting line so that notices reach the right person within a day.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Ignoring a notice because the amount looks small.</li>
          <li>Replying without checking the books.</li>
          <li>Missing the appeal time limit.</li>
          <li>Not updating the registered email and mobile number on the portals.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We handle notices, assessments and appeals, from first reply to the tribunal, and coordinate with counsel
          where needed.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Income Tax Appellate Tribunal", href: "https://www.itat.gov.in" },
            { label: "GST portal", href: "https://www.gst.gov.in" },
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
        title="Received an Indian Tax Notice?"
        description="Tell us which notice you've received and the amount involved — we'll map your response options and appeal timeline."
      />
    </main>
  )
}
