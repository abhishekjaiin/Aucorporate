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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/resident-director"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "rule", label: "The rule" },
  { id: "options", label: "Options for a US parent" },
  { id: "control", label: "Keeping control as the parent" },
  { id: "compliance", label: "Ongoing compliance for directors" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a foreign national be the resident director?", a: "Yes, if they have stayed in India for at least 182 days in the financial year. Citizenship is not the test." },
  { q: "How many directors does a private company need?", a: "At least two, and at least one must be resident in India." },
  { q: "Can the US parent's CEO be a director?", a: "Yes. Foreign nationals can be directors. They need a digital signature certificate and a director identification number." },
  { q: "What if no director meets the residency requirement during the year?", a: "The company is not compliant with the Companies Act and can face penalties, so the board should be reconstituted before the year ends." },
]

const relatedCards = [
  { title: "Incorporation Process for a US-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/usa-to-india/incorporation-process" },
  { title: "Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for a US Company in India?", desc: "Compare the four ways a US company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.", href: "/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/usa-to-india/compliance-calendar" },
  { title: "Ten Mistakes US Companies Make When Setting Up in India, and How to Avoid Them", desc: "The ten most common and costly mistakes US companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.", href: "/blog/usa-to-india/common-mistakes" },
]

export default function ResidentDirectorPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan"
        description="Every Indian company needs a resident director who has stayed in India 182 days in the financial year. Who qualifies, options for US parents, and duties."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Resident Director Requirement for an Indian Company" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: directors"
        title="Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every company in India must have at least one director who has stayed in India for 182 days or more in
          the financial year. A private limited company also needs at least two directors in total. Directors can
          be foreign nationals, but at least one must meet the residency test, so plan this before filing the
          incorporation.
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
                ["Minimum directors (private company)", "Two"],
                ["Resident director", "At least one who has stayed in India 182 days or more in the financial year"],
                ["Foreign nationals as directors", "Allowed, with a digital signature certificate"],
                ["Who can be the resident director", "An Indian resident executive, a hired local executive or a professional resident director"],
                ["Duties", "Statutory duties and liabilities apply to all directors"],
                ["Basis", "Companies Act, 2013, Section 149"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rule" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The rule</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Companies Act, 2013 requires every company to have at least one director who has stayed in India for
          a total of at least 182 days in the financial year (1 April to 31 March). For a newly incorporated
          company, the requirement applies proportionately for the year in which it is incorporated. The director
          does not have to be an Indian citizen, but must satisfy the stay requirement.
        </p>

        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Options for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>An existing executive who is based in India or will relocate.</strong> Best where you plan to
            station a country head in India.
          </li>
          <li><strong>A senior local hire.</strong> Many US companies hire a country manager who becomes the
            resident director.
          </li>
          <li><strong>A professional resident director.</strong> An independent person who serves as director for
            a fee, used where no executive will be resident yet. Understand that this person carries statutory
            duties and liabilities and will want protections such as indemnity and clear reserved matters.
          </li>
        </ul>

        <h2 id="control" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping control as the parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The parent appoints and removes directors as shareholder. Reserved matters that need parent approval can
          be written into the Articles or an intercompany agreement. The resident director still owes duties to
          the Indian company and must act in its interest, so decisions and approvals should be documented
          properly.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Ongoing compliance for directors</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Directors need a director identification number, keep their KYC up to date, and sign annual filings.
          Directors of companies that stop filing for continuous periods can be disqualified, so ongoing
          compliance matters for everyone on the board.
        </p>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide who will be the resident director before the incorporation filing. If it is a professional
            director, agree the scope of authority, indemnity and the reporting line to your US team in writing.
          </li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Treating the resident director as a formality and not documenting authority and indemnity.</li>
          <li>Leaving the choice until after name and document preparation, which delays the filing.</li>
          <li>Assuming a foreign executive who visits India occasionally will meet the 182-day test.</li>
          <li>Appointing a person who is also a director in many unrelated companies without understanding their
            liability exposure.
          </li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We can advise on the choice and, where needed, arrange a professional resident director.
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
