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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "compare", label: "The four structures compared" },
  { id: "subsidiary", label: "Wholly owned subsidiary (private limited company)" },
  { id: "branch", label: "Branch office" },
  { id: "liaison", label: "Liaison office" },
  { id: "llp", label: "Limited Liability Partnership (LLP)" },
  { id: "choose", label: "How to choose" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a liaison office earn revenue?", a: "No. A liaison office can only represent the parent and coordinate with Indian parties. It cannot undertake commercial activity or earn income, and its costs are met by remittances from abroad." },
  { q: "Can a branch office be converted into a subsidiary later?", a: "A business can be moved into a new Indian subsidiary, usually by transferring the activity and assets to the new company. The tax, FEMA and contract consequences should be planned in advance." },
  { q: "Is an LLP cheaper than a private limited company?", a: "Compliance for an LLP can be lighter, but eligibility for foreign investment, funding options and US tax treatment usually matter more for a US parent than compliance cost." },
  { q: "Which structure do most US companies choose?", a: "A wholly owned subsidiary incorporated as a private limited company, because it is a separate entity with limited liability that can carry on full business." },
]

const relatedCards = [
  { title: "Incorporation Process for a US-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/usa-to-india/incorporation-process" },
  { title: "Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan", desc: "Every Indian company needs a resident director who has stayed in India 182 days in the financial year. Who qualifies, options for US parents, and duties.", href: "/blog/usa-to-india/resident-director" },
  { title: "Employer of Record vs. Subsidiary in India: When to Use Each", desc: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for US companies.", href: "/blog/usa-to-india/eor-vs-subsidiary" },
  { title: "US Parent Obligations When You Own an Indian Subsidiary", desc: "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.", href: "/blog/usa-to-india/us-parent-obligations" },
]

export default function SubsidiaryVsBranchVsLiaisonOfficeVsLlpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for a US Company in India?"
        description="Compare the four ways a US company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Subsidiary vs Branch vs Liaison Office vs LLP in India" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: choose your structure"
        title="Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for a US Company in India?"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most US companies choose a wholly owned subsidiary, a private limited company, because it is a separate
          legal entity that can carry on full business, limits the parent&apos;s liability and is taxed as an
          Indian company. A branch office is an extension of the US company with restricted activities, a liaison
          office cannot earn revenue, and an LLP suits narrower cases.
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
                ["Wholly owned subsidiary", "Separate legal entity; any permitted business; limited liability; taxed as a domestic company"],
                ["Branch office", "Extension of the US company; limited permitted activities; RBI approval needed; taxed as a foreign company"],
                ["Liaison office", "Representative only; cannot earn income or invoice; costs funded from abroad; RBI approval needed"],
                ["LLP", "Partnership-style entity; foreign investment allowed only in eligible sectors; US tax treatment can be complex"],
                ["No entity (EOR)", "A provider employs your team for you; useful for testing the market before choosing a structure"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The four structures compared</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Wholly owned subsidiary</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Branch office</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Liaison office</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">LLP</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Legal status", "Separate Indian company", "Part of the US company", "Part of the US company", "Separate legal entity"],
                ["Can earn revenue", "Yes", "Yes, within permitted activities", "No", "Yes"],
                ["Parent's liability", "Generally limited to investment", "Parent is directly liable", "Parent is directly liable", "Limited to contribution"],
                ["Approval", "Automatic route in most sectors; report to the RBI", "RBI approval through an authorized dealer bank", "RBI approval through an authorized dealer bank", "Allowed only in eligible sectors"],
                ["Tax", "Taxed as an Indian company", "Taxed as a foreign company on India profits", "Not taxed if no income, but can create tax exposure", "Taxed as an LLP"],
                ["Best for", "Operations, sales, development centers, GCCs", "Specific parent activities such as consultancy or R&D", "Market research and liaison", "Certain partnership-style setups"],
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

        <h2 id="subsidiary" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Wholly owned subsidiary (private limited company)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          This is the standard route for an operating business. The company has its own registrations, bank
          account, employees and contracts. It needs at least two directors (one resident in India) and two
          shareholders, which in a wholly owned subsidiary are usually the US parent and a nominee holding one
          share. It must keep statutory books, have its accounts audited every year and file annual returns.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Foreign ownership of up to 100% is allowed in most sectors under the automatic route. See the{" "}
          <Link href="/blog/usa-to-india/incorporation-process" className="text-blue-800 font-semibold hover:underline">step-by-step incorporation process</Link>{" "}
          and the{" "}
          <Link href="/blog/usa-to-india/resident-director" className="text-blue-800 font-semibold hover:underline">resident director rules</Link>.
        </p>

        <h2 id="branch" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Branch office</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A branch office carries on specified activities of the parent in India, such as export and import,
          professional or consultancy services, research work in which the parent is engaged, IT and software
          services, and technical support for products the parent supplies. It needs RBI approval, usually applied
          for through an authorized dealer bank, and its activities are limited to those approved.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Because a branch is not a separate entity, the US company is directly liable for it, and its India
          profits are taxed at the rate for foreign companies. Branches are usually chosen where the parent wants
          to perform a defined activity without a separate company.
        </p>

        <h2 id="liaison" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Liaison office</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A liaison office represents the parent in India and passes information between the parent and Indian
          parties. It cannot undertake commercial activity or earn income, and its expenses are met by remittances
          from the parent. It also needs RBI approval. If your plan includes invoicing customers, hiring a sales
          team to close deals, or delivering services, a liaison office will not be enough.
        </p>

        <h2 id="llp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limited Liability Partnership (LLP)</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An LLP is a separate legal entity with partners&apos; liability limited to their contribution. Foreign
          investment in LLPs is permitted only in sectors where 100% foreign ownership is allowed under the
          automatic route and there are no performance conditions linked to the investment. For US parents, an LLP
          is less common because the US tax treatment of the interest and the lack of share-based instruments can
          complicate funding and exit. Confirm the US classification with your US tax adviser before choosing it.
        </p>

        <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to choose</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Choose a subsidiary</strong> if you will hire a team, sign contracts, invoice customers, hold assets or plan to grow in India. This covers most US companies.</li>
          <li><strong>Choose a branch office</strong> if the US company itself wants to perform a defined, permitted activity and you accept direct liability and foreign-company taxation.</li>
          <li><strong>Choose a liaison office</strong> only for representation, market research or relationship building with no revenue.</li>
          <li><strong>Start with an Employer of Record</strong> if you want to hire quickly, test the market and decide later. See{" "}
            <Link href="/blog/usa-to-india/eor-vs-subsidiary" className="text-blue-800 font-semibold hover:underline">EOR vs. subsidiary</Link>.
          </li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Your US tax adviser should confirm how each Indian structure is classified for US tax and what
            reporting it creates, for example Form 5471 for an Indian company. See{" "}
            <Link href="/blog/usa-to-india/us-parent-obligations" className="text-blue-800 font-semibold hover:underline">US parent obligations</Link>.
            A branch or an unplanned presence of US staff can also create a taxable presence in India for the
            parent. See{" "}
            <Link href="/blog/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">tax treaty and PE risk</Link>.
          </li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Opening a liaison office and then invoicing customers or signing contracts, which is outside its permitted scope.</li>
          <li>Choosing a branch to save setup effort without weighing the parent&apos;s direct liability and higher tax rate.</li>
          <li>Deciding the structure before checking whether your sector allows 100% foreign ownership.</li>
          <li>Ignoring the US tax classification of the Indian entity until after the first filing.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We advise on structure, incorporate the Indian entity and handle the RBI and MCA filings.
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
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
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
