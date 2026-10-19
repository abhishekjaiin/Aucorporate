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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/common-mistakes"
const PARENT_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "list", label: "The 13 mistakes, with real consequences" },
  { id: "checklist", label: "Pre-filing checklist" },
  { id: "how", label: "How to avoid all 13" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the most expensive mistake?", a: "Missing the FEMA timelines for allotment and reporting, because regularization takes time and can involve compounding." },
  { q: "Can mistakes be fixed later?", a: "Many mistakes in Indian compliance can be fixed later through late filing, regularization or compounding, but at extra cost and effort. Prevention is cheaper." },
  { q: "Is a checklist needed for every filing?", a: "A single plan with owners and dates works better than a checklist for every filing, and it should be set up at the start of the engagement." },
  { q: "What happens if the subsidiary stops filing or misses deadlines?", a: "If a subsidiary stops filing or misses deadlines, late fees accrue daily, directors can be disqualified after continued non-filing, the Registrar can strike the company off, and FEMA defaults need compounding with the RBI. Regularizing a lapsed company is possible but costs more than staying current, so a compliance calendar helps." },
  { q: "What is Form FC-GPR and when is it due?", a: "Form FC-GPR is the report an Indian company files with the RBI after issuing shares to a foreign investor. It must be filed within 30 days of the share allotment through the RBI's FIRMS portal, with supporting valuation and Company Secretary certificates. Late filing attracts a Late Submission Fee or compounding." },
  { q: "Can EOR employees move into the subsidiary later?", a: "EOR employees can move into the subsidiary later with planning. Employees must agree to the transfer, their service history and benefits such as gratuity and provident fund should carry over, and contracts and notice periods need to be handled, with timing planned so that there is no gap in employment." },
  { q: "What is Form INC-20A?", a: "Form INC-20A is the declaration of commencement of business (Section 10A of the Companies Act, 2013), filed within 180 days of incorporation, confirming that shareholders have paid for their shares. Missing it brings penalties and can lead to the company being struck off." },
  { q: "What are the DRP and the ITAT?", a: "The Dispute Resolution Panel (DRP) hears objections to a draft assessment order and is available to foreign companies and transfer pricing cases. The Income Tax Appellate Tribunal (ITAT) is the main appellate forum on facts and law, with further appeals to the High Court." },
  { q: "Can a branch office be converted into a subsidiary later?", a: "A business can be moved into a new Indian subsidiary, usually by transferring the activity and assets to the new company. The tax, FEMA and contract consequences should be planned in advance." },
  { q: "What is the most common mistake foreign companies make when setting up in India?", a: "The most common mistake foreign companies make in India is treating setup as a series of separate filings instead of one plan. Incorporation is only the start, and the FEMA, tax, transfer pricing and payroll steps that follow are where most breaches arise." },
  { q: "What is the penalty for not filing Form INC-20A?", a: "The penalty for not filing Form INC-20A is ₹50,000 on the company and ₹1,000 per day on each officer in default, up to ₹1,00,000 each, under Section 10A of the Companies Act, 2013. The company also cannot commence business or borrow until the form is filed." },
  { q: "What happens if Form FC-GPR is filed late?", a: "If Form FC-GPR is filed late, the delay is generally regularized by paying a Late Submission Fee, which depends on the amount involved and the length of the delay. Delays outside what the fee route covers, or related breaches, need compounding with the RBI under FEMA, which takes more time and cost than filing on time." },
  { q: "Can a foreign parent be reimbursed for pre-incorporation expenses?", a: "A foreign parent can recover pre-incorporation expenses by receiving equity in the subsidiary against them, up to 5% of the authorized capital or USD 500,000, whichever is less, subject to conditions in the RBI's foreign investment rules. Costs outside these conditions can create a FEMA issue, so the recovery route should be decided before the costs are incurred." },
  { q: "Why do foreign companies face FEMA problems after incorporation?", a: "Foreign companies face FEMA problems after incorporation mostly because of sequence and timing: funds are received, shares allotted and reports filed in the wrong order or after the deadline. These contraventions usually arise from misunderstanding the steps rather than intent." },
]

const relatedCards = [
  { title: "Incorporation Process for a US-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/usa-to-india/incorporation-process" },
  { title: "Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR", desc: "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.", href: "/blog/usa-to-india/funding-fema-fc-gpr" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/usa-to-india/compliance-calendar" },
  { title: "Tax Notices and Disputes in India: What US Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.", href: "/blog/usa-to-india/tax-notices-and-litigation" },
  { title: "India-US Tax Treaty and Social Security: The Complete Guide for US Companies and Expats", desc: "The India-US tax treaty (DTAA) and social security for US expats: treaty rates, residency, EPF, FICA and the missing totalization agreement.", href: "/blog/usa-to-india/tax-and-social-security-treaties" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Ten Mistakes US Companies Make When Setting Up in India, and How to Avoid Them"
        description="The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
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
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The most common mistakes foreign companies make in India are holding shares in the wrong names,
          sending funds in the wrong sequence, filing FC-GPR late, issuing shares without a valuation, paying
          the parent without treaty documents, and missing the first Auditor and INC-20A deadlines. Each carries
          a defined penalty or regularization cost and is easy to prevent when planned at the start.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="common-mistakes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Most costly", "Missed FEMA reporting and share allotment deadlines"],
                ["Most common", "No intercompany agreement before the first invoice"],
                ["Most avoidable", "Late Auditor appointment and missed first filings"],
                ["Best prevention", "A single plan covering structure, funding, tax, people and compliance"],
                ["Basis", "Public RBI and ROC orders, the Companies Act, 2013 and industry guidance, not client files"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The 13 mistakes, with real consequences</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Choosing the structure by default.</strong> <em>What goes wrong:</em> A company picks a liaison or branch office to move quickly, then starts commercial work that the office is not permitted to do, which breaches RBI and FEMA conditions. <em>Consequence:</em> The activity is restricted, and the company often has to convert to a subsidiary later. <em>Fix:</em> Match the structure to the planned activity before incorporating. See <Link href="/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" className="text-blue-800 font-semibold hover:underline">structure comparison</Link>.</li>
          <li><strong>Holding the shares in the wrong names.</strong> <em>What goes wrong:</em> To speed up incorporation, shares are sometimes placed with local individuals or a foreign individual instead of the parent company. <em>Consequence:</em> Ownership, control and FEMA reporting become unclear and harder to fix later. <em>Fix:</em> The parent holds the shares. Where a nominee holds one share to meet the two-shareholder minimum (Section 3(1)(b) of the Companies Act, 2013), record it in writing on behalf of the parent.</li>
          <li><strong>Ignoring the Resident Director requirement.</strong> <em>What goes wrong:</em> The board is formed with foreign directors only. <em>Consequence:</em> The company does not meet Section 149(3) of the Companies Act, 2013, which needs at least one director who has stayed in India for 182 days in the financial year. <em>Fix:</em> Appoint a Resident Director at the start. See <Link href="/blog/usa-to-india/resident-director" className="text-blue-800 font-semibold hover:underline">Resident Director</Link>.</li>
          <li><strong>Sending funds in the wrong sequence.</strong> <em>What goes wrong:</em> The parent wires share capital before the bank account, valuation and allotment plan are ready. Opening a bank account with foreign shareholders can also take longer than expected. <em>Consequence:</em> Shares must be allotted within 60 days of receiving the funds or the money must be refunded, and the inward remittance must be reported. Practitioners report that this sequence produces most FEMA contraventions for foreign subsidiaries, usually from misunderstanding the steps rather than intent. <em>Fix:</em> Agree the sequence and the bank timeline before any transfer. See <Link href="/blog/usa-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li><strong>Filing FC-GPR late.</strong> <em>What goes wrong:</em> The 30-day filing window after allotment passes unnoticed. <em>Consequence:</em> A delay is generally regularized by paying a Late Submission Fee, which depends on the amount involved and the length of the delay, and the facility is generally available for up to three years from the due date. Other cases need compounding with the RBI. The RBI publishes its compounding orders: in one, an Indian company that filed about 1 year 11 months late on a share issue of about ₹2 crore had the contravention compounded for ₹1.1 lakh. The amount is small, but the time and management attention are not. <em>Fix:</em> Put the 30-day date in the calendar on the day of allotment.</li>
          <li><strong>Starting too small, or paying set-up costs without a plan.</strong> <em>What goes wrong:</em> The company is incorporated with nominal share capital and then needs repeated capital increases, each needing a valuation, allotment and FC-GPR. Or the parent pays pre-incorporation expenses and later wants to recover them. <em>Consequence:</em> Under the RBI&apos;s foreign investment rules, equity can be issued against pre-incorporation expenses only up to 5% of the authorized capital or USD 500,000, whichever is less, subject to conditions. Costs outside these conditions can create a FEMA issue. <em>Fix:</em> Budget at least the first 12 months when sizing capital, and decide how pre-incorporation costs will be recovered before they are incurred.</li>
          <li><strong>Skipping the valuation.</strong> <em>What goes wrong:</em> Shares are issued at a convenient price without a valuation. <em>Consequence:</em> Shares cannot be issued to a non-resident below fair value, and the FC-GPR needs the valuation certificate. <em>Fix:</em> Obtain the valuation before every issue. See <Link href="/blog/usa-to-india/share-valuation" className="text-blue-800 font-semibold hover:underline">share valuation</Link>.</li>
          <li><strong>No intercompany agreement.</strong> <em>What goes wrong:</em> Services start and invoices go out without a signed agreement or benchmarking. <em>Consequence:</em> Deductions, Withholding Tax and arm&apos;s length pricing (Section 161 of the Income-tax Act, 2025, previously Section 92 of the Income-tax Act, 1961) rest on weak evidence, and transfer pricing is a frequent area of scrutiny. <em>Fix:</em> Sign the agreement before the first service and keep documentation every year. See <Link href="/blog/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li><strong>Paying the parent without treaty documents.</strong> <em>What goes wrong:</em> The first payment goes out before the parent&apos;s Tax Residency Certificate and Form 41 (previously Form 10F) are on file. <em>Consequence:</em> The higher domestic Withholding Tax rate (Section 393 of the Income-tax Act, 2025, previously Section 195 of the Income-tax Act, 1961) is applied, and treaty relief is denied or delayed. <em>Fix:</em> Request the treaty documents from the US side before the first payment. See <Link href="/blog/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">treaty and PE risk</Link>.</li>
          <li><strong>Using a US employment contract.</strong> <em>What goes wrong:</em> A US template, including at-will terms, is used for Indian employees. <em>Consequence:</em> Indian law requires its own notice, benefits and IP terms, so the contract may not hold. <em>Fix:</em> Use Indian-law contracts from the first hire. See <Link href="/blog/usa-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">hiring and payroll</Link>.</li>
          <li><strong>Missing the first compliances.</strong> <em>What goes wrong:</em> The first Auditor appointment and Form INC-20A are forgotten after incorporation. <em>Consequence:</em> The Auditor must be appointed within 30 days of incorporation (Section 139(6) of the Companies Act, 2013). For INC-20A (Section 10A), the penalty is ₹50,000 on the company and ₹1,000 per day on each officer in default, up to ₹1,00,000 each, and the company cannot start business or borrow until it is filed. ROC adjudication orders have imposed the penalty even for a one-day delay. <em>Fix:</em> Put both dates in the compliance calendar on day one. See <Link href="/blog/usa-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.</li>
          <li><strong>Treating compliance as separate filings.</strong> <em>What goes wrong:</em> The company files its Companies Act returns but misses FEMA reporting or transfer pricing, or assumes incorporation means it is ready to operate. <em>Consequence:</em> Each regime has its own deadlines and penalties, and a gap in one is not covered by compliance in another. <em>Fix:</em> Give one owner the whole sequence, with one calendar across company law, FEMA, tax and payroll.</li>
          <li><strong>Not planning the exit.</strong> <em>What goes wrong:</em> Closing or selling is considered only when the group wants to leave. <em>Consequence:</em> Closing or selling a subsidiary has its own tax, FEMA and Registrar steps, and plans made late cost more. <em>Fix:</em> Decide the likely exit route when choosing the structure. See <Link href="/blog/usa-to-india/restructuring-and-exit" className="text-blue-800 font-semibold hover:underline">restructuring and exit</Link>.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          <em>Source note:</em> These mistakes and consequences come from public RBI compounding orders,
          Registrar of Companies penalty orders, the Companies Act, 2013, the RBI&apos;s foreign investment
          rules and published industry guidance. They are not client cases, and amounts shown are examples from
          published orders, not predictions.
        </p>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pre-filing checklist</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Structure confirmed for the activity and the plan.</li>
          <li>Names and background of directors and shareholders agreed, with one Resident Director.</li>
          <li>Documents apostilled or notarized as required.</li>
          <li>Funding plan and valuation ready; bank account and FEMA reporting steps understood.</li>
          <li>Intercompany agreement drafted.</li>
          <li>Treaty documents requested from the US side.</li>
          <li>Compliance calendar and responsibilities assigned.</li>
        </ul>

        <h2 id="how" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to avoid all 13</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Treat the setup as one project rather than a list of filings. A single owner who understands company
          law, FEMA, tax and payroll will catch the dependencies between them, which is where most mistakes
          happen.
        </p>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Most mistakes are about timing. Share your plan with us before you transfer funds or sign contracts.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Treating India as a series of separate filings instead of one plan.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See also: Treaty and expat mistakes:{" "}
          <Link href="/blog/usa-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">India-US tax treaty and social security guide</Link>.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We handle the whole sequence, from structure to ongoing compliance, so the dependencies are managed in
          one place.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/india-business-setup/company-formation" className="text-blue-800 font-semibold hover:underline">India business setup</Link>
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
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/usa-to-india/faq"
          seeAllLabel="See all 216 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

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
          Last updated 14 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Avoid These India Entry Mistakes"
        description="Tell us your planned structure and timeline — we'll flag the compliance traps specific to your sector before you incorporate."
      />
    </main>
  )
}
