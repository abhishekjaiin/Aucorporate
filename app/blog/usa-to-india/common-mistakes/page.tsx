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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/common-mistakes"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "list", label: "The ten mistakes" },
  { id: "checklist", label: "Pre-filing checklist" },
  { id: "how", label: "How to avoid all ten" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the most expensive mistake?", a: "Missing the FEMA timelines for allotment and reporting, because regularization takes time and can involve compounding." },
  { q: "Can mistakes be fixed later?", a: "Many can, through late filing, regularization or compounding, but at extra cost and effort. Prevention is cheaper." },
  { q: "Do we need a checklist for every filing?", a: "A single plan with owners and dates is better. We provide one at the start of each engagement." },
]

const relatedCards = [
  { title: "Incorporation Process for a US-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/usa-to-india/incorporation-process" },
  { title: "Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR", desc: "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.", href: "/blog/usa-to-india/funding-fema-fc-gpr" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/usa-to-india/compliance-calendar" },
  { title: "Tax Notices and Disputes in India: What US Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and advance pricing agreements.", href: "/blog/usa-to-india/tax-notices-and-litigation" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Ten Mistakes US Companies Make When Setting Up in India, and How to Avoid Them"
        description="The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "10 Common Mistakes US Companies Make Setting Up in India" },
        ]}
      />

      <GuideHero
        eyebrow="Avoid the pitfalls"
        title="Ten Mistakes US Companies Make When Setting Up in India, and How to Avoid Them"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The most common mistakes are choosing the wrong structure, missing the FEMA deadlines for reporting
          foreign funds, appointing no resident director, skipping the share valuation, paying the parent without
          treaty documents, hiring without Indian-law contracts, and letting compliance dates slip. Each is easy to
          prevent when planned at the start.
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
                ["Most costly", "Missed FEMA reporting and share allotment deadlines"],
                ["Most common", "No intercompany agreement before the first invoice"],
                ["Most avoidable", "Late auditor appointment and missed first filings"],
                ["Best prevention", "A single plan covering structure, funding, tax, people and compliance"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The ten mistakes</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Choosing the structure by default.</strong> A subsidiary, branch, liaison office and LLP differ in tax, control and permitted activity. See{" "}
            <Link href="/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" className="text-blue-800 font-semibold hover:underline">structure comparison</Link>.
          </li>
          <li><strong>Ignoring the resident director requirement.</strong> At least one director must have stayed in India for 182 days in the financial year. See{" "}
            <Link href="/blog/usa-to-india/resident-director" className="text-blue-800 font-semibold hover:underline">resident director</Link>.
          </li>
          <li><strong>Sending funds before the plan is ready.</strong> Shares must be allotted within 60 days of receiving the funds or the money must be refunded. See{" "}
            <Link href="/blog/usa-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.
          </li>
          <li><strong>Missing the FC-GPR filing.</strong> It is due within 30 days of allotment, and late filing needs regularization.</li>
          <li><strong>Skipping the valuation.</strong> Shares cannot be issued below fair value. See{" "}
            <Link href="/blog/usa-to-india/share-valuation" className="text-blue-800 font-semibold hover:underline">share valuation</Link>.
          </li>
          <li><strong>No intercompany agreement.</strong> Without one, transfer pricing and Withholding Tax positions are weak. See{" "}
            <Link href="/blog/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
          </li>
          <li><strong>Paying the parent without treaty documents.</strong> The higher domestic Withholding Tax rate is applied. See{" "}
            <Link href="/blog/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">treaty and PE risk</Link>.
          </li>
          <li><strong>Using a US employment contract.</strong> Indian law requires its own notice, benefits and IP terms. See{" "}
            <Link href="/blog/usa-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">hiring and payroll</Link>.
          </li>
          <li><strong>Missing the first compliances.</strong> Auditor within 30 days, INC-20A within 180 days. See{" "}
            <Link href="/blog/usa-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.
          </li>
          <li><strong>Not planning the exit.</strong> Closing or selling a subsidiary has its own rules. See{" "}
            <Link href="/blog/usa-to-india/restructuring-and-exit" className="text-blue-800 font-semibold hover:underline">restructuring and exit</Link>.
          </li>
        </ol>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pre-filing checklist</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Structure confirmed for the activity and the plan.</li>
          <li>Names and background of directors and shareholders agreed, with one resident director.</li>
          <li>Documents apostilled or notarized as required.</li>
          <li>Funding plan and valuation ready; bank account and FEMA reporting steps understood.</li>
          <li>Intercompany agreement drafted.</li>
          <li>Treaty documents requested from the US side.</li>
          <li>Compliance calendar and responsibilities assigned.</li>
        </ul>

        <h2 id="how" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to avoid all ten</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Treat the setup as one project rather than a list of filings. A single owner who understands company law,
          FEMA, tax and payroll will catch the dependencies between them, which is where most mistakes happen.
        </p>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Most mistakes are about timing. Share your plan with us before you transfer funds or sign contracts.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Treating India as a series of separate filings instead of one plan.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We handle the whole sequence, from structure to ongoing compliance, so the dependencies are managed in one
          place.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/india-business-setup/company-formation" className="text-blue-800 font-semibold hover:underline">India business setup</Link>
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
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
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
