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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/documents-acra-apostille"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "list", label: "The document set for the parent" },
  { id: "apostille", label: "Notary and apostille: how it works in Singapore" },
  { id: "directors", label: "Directors: identity, address and signatures" },
  { id: "beneficial", label: "Showing who owns the parent" },
  { id: "timeline", label: "Timing" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What documents does a Singapore company need to incorporate a subsidiary in India?", a: "ACRA business profile and certificate of incorporation, the constitution, a board resolution approving the investment and the director appointments, and identity and address proof for each foreign director, notarised and apostilled." },
  { q: "Which Singapore documents need an apostille for an Indian subsidiary, and who issues it?", a: "The Singapore parent's ACRA business profile and certificate of incorporation, its constitution, the board resolution approving the investment, and the notarised passports and address proofs of its directors and authorised signatory all need an apostille. The Singapore Academy of Law issues apostilles under the Apostille Act 2020, after a Singapore notary public has signed the private documents. The Apostille Convention has applied to Singapore since 16 September 2021, so no Indian High Commission legalisation is needed." },
  { q: "Does India accept a Singapore apostille?", a: "Yes. India and Singapore are both parties to the Apostille Convention, so an apostilled Singapore document does not need consular legalisation." },
  { q: "Do documents from ACRA need to be apostilled?", a: "Ask the Indian incorporation team which documents they need. Business profiles and certificates are usually apostilled if they will be filed with the Registrar or shown to the bank." },
  { q: "How old can the director address proof be?", a: "Indian authorities generally look for proof issued within the last two months. Check with your adviser before notarising." },
  { q: "Does a Singapore parent have to declare its beneficial owners in India?", a: "Yes. The Indian subsidiary must identify significant beneficial owners (10% or more) and file Form BEN-2. Prepare the ownership chart early." },
]

const relatedCards = [
  { title: "Incorporating a Subsidiary in India from Singapore: Who Does What, in What Order", desc: "A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days.", href: "/blog/singapore-to-india/incorporation-steps" },
  { title: "Which Structure Should a Singapore Company Use in India? Subsidiary, Branch, Liaison Office, LLP, GIFT City or Employer of Record", desc: "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax results and a choice by business model.", href: "/blog/singapore-to-india/structure-options" },
  { title: "Using a Singapore Holding Company for Indian Investments: What the Treaty Gives, and What Substance Is Needed to Keep It", desc: "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk.", href: "/blog/singapore-to-india/singapore-holdco-for-india" },
  { title: "12 Common Mistakes Singapore Companies Make When Entering India, and How to Avoid Each", desc: "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE, FEMA clocks, stamping, data transfers and year-end gaps.", href: "/blog/singapore-to-india/common-mistakes" },
]

export default function DocumentsAcraApostillePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Documents a Singapore Company Must Prepare to Set Up an Indian Subsidiary: ACRA, Notary and Apostille"
        description="The document checklist for a Singapore parent forming an Indian subsidiary: ACRA business profile, constitution, board resolution, director identity papers, notarisation and the Singapore Academy of Law apostille."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Documents for an Indian Subsidiary: ACRA Records, Notary and Apostille from Singapore" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: documents and apostille"
        title="Documents a Singapore Company Must Prepare to Set Up an Indian Subsidiary: ACRA, Notary and Apostille"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore parent needs a certified set of company documents for the Indian incorporation: the ACRA
          business profile and certificate of incorporation, the constitution, a board resolution approving the
          investment, and identity and address proof for each foreign director. Private documents are notarised,
          and the Singapore Academy of Law issues the apostille that India accepts, since the Apostille
          Convention entered into force for Singapore on 16 September 2021. Start this step first because it
          sets the pace.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Apostille authority", "Singapore Academy of Law (Apostille Act 2020)"],
                ["In force for Singapore", "16 September 2021; India is also a party to the Convention"],
                ["Company records", "ACRA business profile (BizFile+), certificate of incorporation, constitution, register of controllers extract"],
                ["Approval", "Board resolution authorising the investment, the subsidiary name, the director appointments and a signatory"],
                ["Director papers", "Passport copy (and NRIC for citizens and PRs), address proof, passport-size photograph"],
                ["Validity", "Indian authorities look for recent documents; address proofs usually need to be less than two months old"],
                ["Language", "English documents need no translation"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The document set for the parent</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">From</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treatment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["ACRA business profile with directors and shareholders", "ACRA through BizFile+", "Download the latest profile; apostille the version Indian authorities will see"],
                ["Certificate of incorporation", "ACRA", "Certified copy, then apostille"],
                ["Constitution", "Parent company secretary", "Certified true copy by a director or company secretary, notarised, apostilled"],
                ["Board resolution approving the Indian investment", "Parent board", "Signed, notarised, apostilled"],
                ["Authority for the signatory or authorised representative", "Parent board", "Included in the resolution or a power of attorney"],
                ["Latest audited financial statements, if requested by the bank", "Parent", "Often required by Indian banks; not always apostilled"],
                ["Register of registrable controllers extract", "Parent", "Needed to explain the ownership chain to the Indian bank and to file the significant beneficial owner declaration"],
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

        <h2 id="apostille" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notary and apostille: how it works in Singapore</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Singapore joined the Hague Apostille Convention on 16 September 2021 through the Apostille Act 2020,
          and the Singapore Academy of Law is the competent authority that issues Singapore apostilles. India is
          also a party, so the Indian authorities accept an apostilled Singapore document without consular
          legalisation by the Indian High Commission.
        </p>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Prepare the documents in final form and have the signatory sign before a Singapore notary public where the document is private (for example the board resolution or a power of attorney).</li>
          <li>Submit the notarised documents to the Singapore Academy of Law for the apostille. Allow time for the electronic submission and processing.</li>
          <li>Scan and courier the originals, or upload the electronic apostille if the Indian side agrees to verify it online.</li>
          <li>Keep the originals with the parent. The Indian incorporation agent files scanned copies with SPICe+, and the bank may ask to see originals.</li>
        </ol>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Check with the Indian side first.</strong> Ask your Indian adviser or bank which documents
          they need apostilled before you notarise anything. An unneeded apostille costs time, and a missing one
          holds up the filing.
        </div>

        <h2 id="directors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Directors: identity, address and signatures</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Foreign director:</strong> passport copy, address proof, photograph and a mobile and email for DIN and DSC. A Singapore NRIC alone does not replace the passport for a foreign director on Indian forms.</li>
          <li><strong>Notarisation of identity:</strong> a notary certifies that each copy is a true copy of the original, then the apostille is added.</li>
          <li><strong>DSC and DIN:</strong> each proposed director needs a Digital Signature Certificate and a Director Identification Number. A foreign director&apos;s DSC usually involves a video verification or an attested form.</li>
          <li><strong>Resident Director:</strong> at least one director must have stayed in India for 182 days or more in the financial year. A Singapore parent often appoints an Indian professional or a relocating manager. See <Link href="/blog/singapore-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">the incorporation guide</Link>.</li>
        </ul>

        <h2 id="beneficial" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Showing who owns the parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian law asks for significant beneficial owners, meaning individuals who hold or control 10% or more
          of the company directly or through others. A Singapore holding company with several layers of owners
          should prepare an ownership chart and be ready to file Form BEN-2 within the deadline after the
          subsidiary is formed, and to answer bank KYC questions about the ultimate owners. Where an ultimate
          owner is in or a citizen of a country sharing a land border with India, Press Note 3 of 2020 can
          require government approval for the investment, so review ownership before you commit.
        </p>

        <h2 id="timeline" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Singapore side:</strong> allow several working days for the notary and apostille once documents are final, longer if the board needs to meet.</li>
          <li><strong>Time zone:</strong> Singapore is two and a half hours ahead of India, which makes same-day signing and Indian bank calls easy.</li>
          <li><strong>Rework:</strong> the most common delay is an address proof older than two months or a name on the passport that differs from the ACRA record. Fix names before notarising.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.iras.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">IRAS</a>,{" "}
          <a href="https://www.acra.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">ACRA</a>{" "}
          and the{" "}
          <a href="https://www.sal.org.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Singapore Academy of Law (apostilles)</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/singapore-to-india/faq"
          seeAllLabel="See all 143 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Singapore Ministry of Law: Singapore accedes to the Apostille Convention", href: "https://www.mlaw.gov.sg/news/press-releases/2021-01-19-singapore-accedes-to-the-apostille-convention/" },
            { label: "Singapore Academy of Law", href: "https://www.sal.org.sg/" },
            { label: "ACRA", href: "https://www.acra.gov.sg/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 21 October 2026. General information only, not legal or tax advice. Indian and Singapore
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Getting ACRA Documents Ready for India?"
        description="Tell us which documents your subsidiary needs, and we'll map the ACRA, notary and Singapore Academy of Law apostille steps."
      />
    </main>
  )
}
