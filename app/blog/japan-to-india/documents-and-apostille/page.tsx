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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/documents-and-apostille"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "list", label: "The document checklist" },
  { id: "process", label: "How the apostille process works in Japan" },
  { id: "rules", label: "Rules to remember" },
  { id: "translation", label: "Translation" },
  { id: "tips", label: "Tips to avoid delays" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Are India and Japan both members of the Hague Apostille Convention?", a: "Yes. Documents apostilled in Japan are accepted in India without further consular legalization." },
  { q: "Who issues the apostille in Japan?", a: "The Ministry of Foreign Affairs of Japan." },
  { q: "Which Japanese documents need an apostille for an Indian subsidiary, and who issues it?", a: "The Japanese parent's certificate of registered matters and seal certificate, its articles of incorporation, the board resolution authorizing the investment, and the passports and address proofs of its directors and authorized signatory all need an apostille, with English translations. The Ministry of Foreign Affairs of Japan issues apostilles. Official documents from the Legal Affairs Bureau are apostilled directly, while private documents such as board resolutions are notarized and certified by the Legal Affairs Bureau first. No Indian embassy legalization is needed." },
  { q: "Can a board resolution be apostilled directly?", a: "No. A private document must first be notarized by a notary public and the notary's seal certified by the Legal Affairs Bureau." },
  { q: "Do documents in Japanese need translation?", a: "Yes. Indian authorities work in English, so keep an English translation, in the format we advise." },
  { q: "How recent must the documents be?", a: "Official documents should be recent. The Ministry's guidance is within three months of issue at the time of application." },
  { q: "Does the Ministry return documents by post?", a: "Yes, by post, so allow courier time." },
  { q: "What is an apostille?", a: "A certificate under the Hague Convention that confirms the authenticity of a public document so it is valid in another member country." },
  { q: "What documents does a Japanese parent typically need?", a: "Certificate of registered matters, articles of incorporation, board resolution, signatory evidence, and identity and address proofs of directors." },
  { q: "Who arranges notarisation and apostille in Japan?", a: "The Japanese parent company can arrange the steps directly with the relevant Japanese notary, Legal Affairs Bureau and Ministry of Foreign Affairs, or appoint a Japan-based legal or administrative service provider to coordinate them. The correct route depends on the document type." },
  { q: "Can AU Corporate arrange notarisation and apostille in Japan?", a: "Yes. AU Corporate can coordinate the Japan-side process through our Japan-based partner, including helping arrange the appropriate notarisation, authentication or apostille steps and document delivery, subject to the document type and local authority requirements. We first review the documents needed for Indian incorporation, then coordinate the applicable process with our partner and confirm the scope, timeline and fees before proceeding." },
  { q: "Can a Japanese company arrange the apostille without an agent?", a: "Yes. The company can contact the relevant notary and authorities directly. For a private document, the process generally includes notarisation, certification of the notary's seal by the Legal Affairs Bureau, and then an apostille from Japan's Ministry of Foreign Affairs. Check the current requirements for the exact document before proceeding." },
  { q: "What is the difference between notarisation and an apostille?", a: "Notarisation is an act performed by a notary, such as witnessing or authenticating a signature. An apostille is a separate certificate that authenticates the origin of a public document or the relevant official signature and seal for use in another Apostille Convention country. One does not automatically replace the other." },
  { q: "Can notarisation and apostille be completed through a one-stop service in Japan?", a: "Some eligible notaries in certain Japanese prefectures offer a one-stop process for notarisation and the related authentication or apostille steps. Availability depends on the location and document, so confirm eligibility and the current process with the notary before booking." },
]

const relatedCards = [
  { title: "Incorporation Process for a Japanese-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from Japan: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/japan-to-india/incorporation-process" },
  { title: "Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for a Japanese Company in India?", desc: "Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.", href: "/blog/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan", desc: "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Japanese parents, and duties.", href: "/blog/japan-to-india/resident-director" },
  { title: "Ten Mistakes Japanese Companies Make When Setting Up in India, and How to Avoid Them", desc: "The ten most common and costly mistakes Japanese companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.", href: "/blog/japan-to-india/common-mistakes" },
]

export default function DocumentsAndApostillePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Documents and Apostille for a Japanese Parent: What to Prepare and in What Order"
        description="Which documents a Japanese parent must prepare to incorporate an Indian subsidiary, and how notarization, translation and apostille work in Japan."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "Documents and Apostille for a Japanese Parent Company" },
        ]}
      />

      <GuideHero
        eyebrow="Set up: documents"
        title="Documents and Apostille for a Japanese Parent: What to Prepare and in What Order"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Japanese parent typically provides its certificate of registered matters, articles of incorporation,
          a board resolution authorizing the investment, a seal certificate or signatory evidence, and identity
          and address proofs for its directors. Public documents such as the registry certificate are apostilled
          by the Ministry of Foreign Affairs of Japan. Private documents such as board resolutions are first
          notarized, then certified by the Legal Affairs Bureau, then apostilled. Documents in Japanese need an
          English translation.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Convention", "Japan and India are both parties to the Hague Apostille Convention, so no consular legalization is needed"],
                ["Public documents", "Certificate of registered matters and similar official records: apostille by the Ministry of Foreign Affairs of Japan"],
                ["Private documents", "Board resolution, power of attorney, declarations: notary, then Legal Affairs Bureau certification, then apostille"],
                ["Freshness", "Official documents should be issued within three months of the apostille application"],
                ["Language", "English translation for documents in Japanese; ask us what India will accept"],
                ["Typical timing", "Apostille preparation is usually the longest step of the 4 to 6 week timeline"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The document checklist</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">From</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Process</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Certificate of registered matters (full certificate)", "Legal Affairs Bureau", "Official document; apostille by the Ministry of Foreign Affairs of Japan"],
                ["Articles of incorporation", "The parent", "Certified copy or notarized, then apostilled as advised"],
                ["Board resolution authorizing the investment and signatories", "The parent", "Notarize, certify the notary's seal, apostille"],
                ["Seal certificate or signatory evidence", "Legal Affairs Bureau", "Official document or notarized declaration; apostille"],
                ["Identity and address proofs of directors and authorized signatory", "Each individual", "Passport copies and address proof, notarized or apostilled as advised"],
                ["English translations", "Translator", "Notarized or certified translation as advised"],
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

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          The exact checklist depends on the parent&apos;s entity type and the Indian filing. We send a tailored
          list at the start.
        </div>

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the apostille process works in Japan</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Order the official documents from the Legal Affairs Bureau close to the filing date, because recent documents are expected.</li>
          <li>For private documents, have the document notarized by a notary public.</li>
          <li>Have the Legal Affairs Bureau certify the notary&apos;s seal.</li>
          <li>Apply to the Ministry of Foreign Affairs of Japan for the apostille, by post or at the service desk. Appointments are required at the Tokyo desk from 5 October 2026.</li>
          <li>Have the English translation prepared and attach it as advised.</li>
          <li>Courier the set to us. We confirm the format Indian authorities will accept before you order.</li>
        </ol>

        <h2 id="rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rules to remember</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The Ministry can apostille only official documents that show a date of issue, the issuer and an official seal. Copies are not certifiable.</li>
          <li>Private documents cannot be apostilled directly; they must be notarized first.</li>
          <li>Documents must be recent. The Ministry&apos;s guidance is that official documents should be within three months of issue at the time of application.</li>
          <li>The Ministry returns documents by post, so plan courier time.</li>
          <li>Keep spare originals if more than one Indian filing needs them; the Ministry does not accept applications for spare copies.</li>
        </ul>

        <h2 id="translation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Translation</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian authorities work in English. A Japanese document needs an English translation, and the
          translation may itself need notarization or certification. Ask us before ordering so the translation
          is done once, in the right format.
        </p>

        <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tips to avoid delays</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Start the apostille steps as soon as you decide to proceed.</li>
          <li>Use the same spelling of names and addresses on every document.</li>
          <li>Check that the signatory named in the board resolution matches the person signing.</li>
          <li>Ask us to review scans before you courier originals.</li>
        </ul>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Appoint one person in Japan to own the document set and the courier schedule. The Ministry and Legal Affairs Bureau steps are sequential.</li>
          <li>If a Japanese notary or translator is unfamiliar with Indian filings, we can send a sample of what is accepted.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Ordering the registry certificate too early and letting it go stale.</li>
          <li>Trying to apostille a private document without notarization.</li>
          <li>Sending Japanese documents without translations.</li>
          <li>Name or address spellings that differ between documents.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We give you a tailored checklist, review scans and handle the Indian filing once documents arrive.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/india-business-setup/company-formation" className="text-blue-800 font-semibold hover:underline">India business setup</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
          <a href="https://www.mofa.go.jp/ca/cs/page22e_000418.html" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Foreign Affairs of Japan</a>,
          the{" "}
          <a href="https://www.mca.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>{" "}
          and the{" "}
          <a href="https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Hague Conference apostille page</a>.
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
            { label: "Ministry of Foreign Affairs of Japan: apostille and authentication", href: "https://www.mofa.go.jp/ca/cs/page22e_000418.html" },
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
        title="Getting Japanese Documents Apostilled for India?"
        description="Tell us which documents your subsidiary needs, and we'll map the Legal Affairs Bureau, notary, MOFA apostille and translation steps."
      />
    </main>
  )
}
