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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/documents-companies-house-apostille"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "list", label: "The checklist for a UK company" },
  { id: "apostille", label: "Notarisation and the UK apostille, step by step" },
  { id: "companies-house", label: "Companies House points to watch" },
  { id: "india-side", label: "What happens on the Indian side" },
  { id: "mistakes", label: "Mistakes that cost weeks" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which UK documents need an apostille for an Indian subsidiary, and who issues it?", a: "An apostille is a Hague Convention certificate that makes a UK public document valid in India. The UK parent's certificate of incorporation, articles of association, board resolution, Companies House profile or good standing certificate, and the notarised passports and address proofs of its directors and authorised signatory all need one. The FCDO Legalisation Office issues apostilles, on paper or as an e-apostille, after a UK notary public has signed the private documents. No Indian High Commission legalisation is needed." },
  { q: "Do UK documents need Indian embassy legalisation as well?", a: "No. India and the UK are both parties to the Hague Apostille Convention, so an apostille replaces embassy legalisation." },
  { q: "Does a UK solicitor or commissioner for oaths count as a notary?", a: "Usually not. For documents going to India, a notary public is the safe choice. Check with your adviser before notarising each document type." },
  { q: "What documents does a UK parent need to provide?", a: "Typically the certificate of incorporation, articles of association, a board resolution authorising the investment and the signatory, a Companies House profile or certificate of good standing, and notarised identity and address proof for directors and signatories." },
  { q: "Can UK documents be signed and apostilled electronically?", a: "Some steps can be, because the UK offers an e-apostille service. The Indian filing must accept the electronic version, so confirm that first to avoid doing the process twice." },
  { q: "Which UK entities can own an Indian subsidiary?", a: "Limited companies, public companies, limited liability partnerships and limited partnerships can all be shareholders. Trusts and partnerships hold through their trustees or partners, which adds documents and review." },
]

const relatedCards = [
  { title: "Incorporating an Indian Subsidiary from the UK: A Week-by-Week Plan", desc: "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days.", href: "/blog/uk-to-india/incorporation-steps" },
  { title: "Choosing an Indian Structure as a UK Company: Subsidiary, Branch, Liaison Office, LLP or Employer of Record", desc: "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through an intermediate company.", href: "/blog/uk-to-india/structure-options" },
  { title: "Funding an Indian Subsidiary from the UK: Instruments, Pricing Floor, Valuation and RBI Reporting", desc: "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day allotment rule and Form FC-GPR.", href: "/blog/uk-to-india/funding-and-fema" },
  { title: "13 Costly Mistakes UK Companies Make When Setting Up in India", desc: "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.", href: "/blog/uk-to-india/common-mistakes" },
]

export default function DocumentsCompaniesHouseApostillePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Documents a UK Parent Needs for an Indian Subsidiary: Companies House Papers, Notarisation and the Apostille"
        description="The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes that cost weeks."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Documents for an Indian Subsidiary from the UK: Companies House, Notary and Apostille" },
        ]}
      />

      <GuideHero
        eyebrow="Documents: UK parent"
        title="Documents a UK Parent Needs for an Indian Subsidiary: Companies House Papers, Notarisation and the Apostille"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UK parent typically needs its certificate of incorporation, articles, a board resolution, and
          identity and address proof for each director and signatory. UK papers are notarised if needed and then
          legalised with an apostille issued by the UK Foreign, Commonwealth and Development Office (FCDO).
          Indian authorities accept the apostille without further embassy legalisation. Start this first,
          because it is usually the slowest step.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Core UK documents", "Certificate of incorporation; articles of association; board resolution; Companies House company profile or certificate of good standing; identity and address proof for directors and signatories"],
                ["Notary", "A UK notary public for private documents and signatures; solicitors and commissioners for oaths are not enough for most uses"],
                ["Apostille", "Issued in the UK by the FCDO Legalisation Office under the Hague Apostille Convention; India accepts it"],
                ["Format", "Paper or e-apostille; confirm that the Indian filing will accept the electronic version before ordering"],
                ["Translation", "Not needed for English documents"],
                ["Validity", "Many Indian forms want identity and address proofs that are no more than a couple of months old"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The checklist for a UK company</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Used for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Certificate of incorporation", "Proof that the parent exists", "Companies House copy; legalise a certified copy, not a screenshot"],
                ["Articles of association", "Authority and objects of the parent", "Check that investing in a subsidiary is within the articles"],
                ["Board resolution", "Approves the investment, names the authorised signatory and the directors of the Indian company", "Signed by a director and, if asked, the company secretary"],
                ["Certificate of good standing or company profile", "Shows the company is active and not struck off", "Banks and the registrar sometimes ask for it"],
                ["Directors' identity and address proof", "Director appointments, KYC and the digital signature", "Passport plus a recent address document, notarised and apostilled"],
                ["Power of attorney", "Lets a named person sign filings for the parent in India", "Notarised and apostilled; scope should list incorporation and the RBI filings"],
                ["Persons with significant control (PSC) details", "Ultimate beneficial owner disclosures to the bank and the registrar", "The UK PSC register is a useful starting point"],
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

        <p className="text-gray-600 leading-relaxed mb-10">
          The exact list depends on the parent&apos;s entity type. A UK limited company, public company, limited
          liability partnership and limited partnership each produce different papers.
        </p>

        <h2 id="apostille" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notarisation and the UK apostille, step by step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Gather the originals, or certified copies, and decide which are &quot;public documents&quot; (such as Companies House certificates) and which are private (such as resolutions and powers of attorney).</li>
          <li>Have private documents signed in front of a UK notary public, who notarises the signature and seal.</li>
          <li>Submit the notarised and public documents to the FCDO Legalisation Office for the apostille, by the online service for e-apostilles or by post for paper ones.</li>
          <li>Receive the apostilled set and scan a copy for the Indian team.</li>
          <li>Send the originals to India if the filing needs paper, or confirm that the scans are enough for the Registrar and the bank.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          Allow for the notary&apos;s appointment, any Companies House copy time, the FCDO&apos;s turnaround and
          courier time if paper is used. These vary by week, so we advise starting the legalisation before
          choosing the company name, not after.
        </p>

        <h2 id="companies-house" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Companies House points to watch</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Directors must verify their identity under the Economic Crime and Corporate Transparency Act 2023 reforms, so make sure the person named in the UK register and the person signing in India are the same, with identical names.</li>
          <li>The registered office and director addresses on the register should match the documents provided. Differences are a common reason for queries from the Indian registrar and the bank.</li>
          <li>A company that is overdue with accounts or the confirmation statement may be flagged. Bring filings up to date before applying for a certificate of good standing.</li>
        </ul>

        <h2 id="india-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What happens on the Indian side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian director candidates need Digital Signature Certificates, and non-resident directors&apos;
          identity and address documents are generally attested by a notary or apostilled. The parent&apos;s
          documents support the Memorandum and Articles, the subscription, and the bank&apos;s
          know-your-customer checks. The Registrar&apos;s review of the incorporation form can also ask for the
          parent&apos;s ultimate beneficial owner details. See{" "}
          <Link href="/blog/uk-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">the incorporation timeline</Link>.
        </p>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes that cost weeks</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Legalising a document that is not signed in the way India expects, then having to redo it.</li>
          <li>Mismatched names, such as a middle name in the passport but not on the resolution.</li>
          <li>A power of attorney that does not mention the RBI filings or the bank account.</li>
          <li>Using stale address proofs.</li>
          <li>Ordering paper apostilles when the Indian authority would have accepted an electronic one, or the reverse.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">HMRC</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/companies-house" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies House</a>{" "}
          and the{" "}
          <a href="https://www.gov.uk/get-document-legalised" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">UK legalisation service for apostilles</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/uk-to-india/faq"
          seeAllLabel="See all 122 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "GOV.UK: get a document legalised (apostille)", href: "https://www.gov.uk/get-document-legalised" },
            { label: "Companies House", href: "https://www.gov.uk/government/organisations/companies-house" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 19 October 2026. General information only, not legal or tax advice. Indian and UK rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Need Your UK Documents Apostilled for India?"
        description="Tell us which documents your subsidiary needs — we'll map the Companies House, notary and FCDO apostille steps from the UK side."
      />
    </main>
  )
}
