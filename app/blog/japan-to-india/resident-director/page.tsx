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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/resident-director"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "rule", label: "The rule" },
  { id: "options", label: "Options for a Japanese parent" },
  { id: "control", label: "Keeping control as the parent" },
  { id: "compliance", label: "Ongoing compliance for directors" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a foreign national be the Resident Director?", a: "A foreign national can be the Resident Director if they have stayed in India for at least 182 days in the financial year (Section 149(3) of the Companies Act, 2013). Citizenship is not the test." },
  { q: "How many directors does a private company need?", a: "At least two, and at least one must be resident in India." },
  { q: "Can the Japanese parent's CEO be a director?", a: "The Japanese parent's CEO can be a director of the Indian subsidiary, because foreign nationals can be directors. They need a Digital Signature Certificate and a Director Identification Number." },
  { q: "What if no director meets the residency requirement during the year?", a: "The company is not compliant with the Companies Act and can face penalties, so the board should be reconstituted before the year ends." },
  { q: "How many directors and shareholders does an Indian subsidiary need?", a: "A private limited company in India needs at least two directors (Section 149(1) of the Companies Act, 2013) and two shareholders (Section 3(1)(b)), and at least one director must be resident in India, meaning a stay of 182 days or more in the year (Section 149(3)). In a wholly owned subsidiary, the Japanese parent holds nearly all the shares and a nominee holds the balance." },
  { q: "Can Japanese executives be directors of the Indian subsidiary?", a: "Japanese executives can be directors of the Indian subsidiary. Foreign nationals can be directors once they obtain a digital signature and a Director Identification Number, but at least one director must be a resident of India. Directors carry statutory duties and liabilities, so they should be chosen with that in mind." },
  { q: "What is a Digital Signature Certificate and how does a foreign director get one?", a: "A Digital Signature Certificate (DSC) lets a director sign MCA filings electronically. A foreign director obtains one using a passport and address proof, usually with attestation or apostille and a verification step, and the process can be completed remotely." },
  { q: "Does the Indian subsidiary need a director who lives in India?", a: "An Indian subsidiary needs at least one director who has stayed in India for 182 days or more in the financial year (Section 149(3) of the Companies Act, 2013). A private limited company also needs at least two directors in total (Section 149(1)). Directors can be foreign nationals, but at least one must meet the residency test." },
  { q: "Who controls the Indian subsidiary: the board or the Japanese parent?", a: "The Board of Directors manages the company, and the parent controls the board by appointing and removing directors as its shareholder. Matters that need parent approval can be written into the Articles or an intercompany agreement. Directors still owe legal duties to the Indian company." },
  { q: "Does the Japanese parent need its board's approval first?", a: "A Japanese parent usually needs its board's approval before setting up an Indian subsidiary. The board passes a resolution approving the investment, naming the authorized signatory and directors, and authorizing documents to be signed for India. The charter, shareholder agreements and any investor consent rights should be checked before the resolution is drafted." },
]

const relatedCards = [
  { title: "Incorporation Process for a Japanese-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from Japan: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/japan-to-india/incorporation-process" },
  { title: "Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for a Japanese Company in India?", desc: "Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.", href: "/blog/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/japan-to-india/compliance-calendar" },
  { title: "Ten Mistakes Japanese Companies Make When Setting Up in India, and How to Avoid Them", desc: "The ten most common and costly mistakes Japanese companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.", href: "/blog/japan-to-india/common-mistakes" },
]

export default function ResidentDirectorPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan"
        description="Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Japanese parents, and duties."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "Resident Director Requirement for an Indian Company" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: directors"
        title="Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every company in India must have at least one director who has stayed in India for 182 days or more in
          the financial year. A private limited company also needs at least two directors in total. Directors
          can be foreign nationals, but at least one must meet the residency test, so plan this before filing
          the incorporation.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="resident-director" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Minimum directors (private company)", "Two (Section 149(1) of the Companies Act, 2013)"],
                ["Resident Director", "At least one who has stayed in India 182 days or more in the financial year"],
                ["Foreign nationals as directors", "Allowed, with a Digital Signature Certificate and a Director Identification Number; at least one director must be resident in India, meaning a stay of 182 days or more in the financial year"],
                ["Annual KYC", "Each director files Form DIR-3 KYC by 30 September every year"],
                ["Who can be the Resident Director", "An Indian resident executive, a hired local executive or a professional Resident Director"],
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
          The Companies Act, 2013 requires every company to have at least one director who has stayed in India
          for a total of at least 182 days in the financial year (1 April to 31 March). For a newly incorporated
          company, the requirement applies proportionately for the year in which it is incorporated. The
          director does not have to be an Indian citizen, but must satisfy the stay requirement.
        </p>

        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Options for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>An existing executive who is based in India or will relocate.</strong> Best where you plan to station a country head in India.</li>
          <li><strong>A senior local hire.</strong> Many Japanese companies hire a country manager who becomes the Resident Director.</li>
          <li><strong>A professional Resident Director.</strong> An independent person who serves as director for a fee, used where no executive will be resident yet. Understand that this person carries statutory duties and liabilities and will want protections such as indemnity and clear reserved matters.</li>
        </ul>

        <h2 id="control" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping control as the parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The parent appoints and removes directors as shareholder. Reserved matters that need parent approval
          can be written into the Articles or an intercompany agreement. The Resident Director still owes duties
          to the Indian company and must act in its interest, so decisions and approvals should be documented
          properly.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Ongoing compliance for directors</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Directors need a Director Identification Number, keep their KYC up to date, and sign annual filings.
          Directors of companies that stop filing for continuous periods can be disqualified, so ongoing
          compliance matters for everyone on the board.
        </p>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Decide who will be the Resident Director before the incorporation filing. If it is a professional director, agree the scope of authority, indemnity and the reporting line to your Japanese team in writing.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Treating the Resident Director as a formality and not documenting authority and indemnity.</li>
          <li>Leaving the choice until after name and document preparation, which delays the filing.</li>
          <li>Assuming a foreign executive who visits India occasionally will meet the 182-day test.</li>
          <li>Appointing a person who is also a director in many unrelated companies without understanding their liability exposure.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We can advise on the choice and, where needed, arrange a professional Resident Director.
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
          seeAllHref="/blog/japan-to-india/faq"
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
        title="Need a Resident Director Alongside Your Japanese Board?"
        description="Tell us your planned board, and we'll map the options for meeting India's 182-day resident director rule."
      />
    </main>
  )
}
