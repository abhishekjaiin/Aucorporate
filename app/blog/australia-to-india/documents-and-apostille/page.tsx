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

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/documents-and-apostille"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "list", label: "Document checklist" },
  { id: "sequence", label: "Notarise first, then apostille" },
  { id: "states", label: "Notaries, states and territories" },
  { id: "tips", label: "Practical tips" },
  { id: "australian-parent", label: "What this means for an Australian parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is an apostille?", a: "A certificate that makes a public document from one Hague Convention country valid in another. It replaces consular legalisation." },
  { q: "Can documents be signed and apostilled electronically?", a: "Some states offer remote notarisation and electronic apostilles, but acceptance of electronic versions varies, so confirm with your adviser first." },
  { q: "What documents does the Australian parent need to provide?", a: "An Australian parent typically provides its Certificate of Incorporation and good standing, a board resolution, identity and address proofs of the signatory and directors, and its charter documents. Foreign documents are notarised and apostilled. The exact checklist depends on the parent's entity type." },
  { q: "What is the time period for registering a company in India?", a: "Registering a company in India typically takes 4 to 6 weeks from receipt of complete documents. The MCA incorporation itself is usually the shortest step, and the main variable is how quickly the apostilled Australian parent documents are ready. Name approval and digital signatures can run in parallel." },
  { q: "Does the Australian parent have to travel to India?", a: "An Australian parent does not have to travel to India to set up a subsidiary. Incorporation can be completed online using apostilled documents and digital signatures. Banks set their own KYC rules, so the bank's verification requirements should be confirmed early." },
  { q: "What documents are needed to remit dividends?", a: "Board and shareholder approvals, the audited accounts showing distributable profits, a Withholding Tax computation with treaty documents (Tax Residency Certificate and Form 41, previously Form 10F), and Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
  { q: "How long does incorporation take?", a: "Incorporation of an Indian subsidiary typically takes 4 to 6 weeks from receipt of complete documents. The main variable is how quickly the apostilled Australian documents are ready." },
  { q: "What is an apostille in Australia?", a: "An apostille is a certificate issued by DFAT under the Hague Apostille Convention that confirms the signature, seal or stamp on a document, so that India accepts it without further legalisation. For a private document it is normally issued after a notary public has signed." },
  { q: "Are India and Australia both members of the Hague Apostille Convention?", a: "Yes. India and Australia are both parties to the Hague Apostille Convention, so a DFAT apostille is accepted for Australian documents used to incorporate a subsidiary in India." },
  { q: "How long does an apostille take in Australia?", a: "It depends on DFAT's current processing time and on how quickly the notary appointment and any ASIC documents are ready. Plan for this step to be the longest in the incorporation timeline and start it first. We confirm the current turnaround before you order." },
  { q: "What does an apostille cost in Australia?", a: "DFAT charges a fee for each document it apostilles, and notaries charge their own fees for the notarisation. Fees change, so check DFAT's current schedule. The cost is small next to the cost of a delayed incorporation." },
  { q: "Does DFAT apostille an ASIC company extract?", a: "It depends on the form of the extract and whether DFAT can verify the issuer's signature. If it cannot, the extract is certified by a notary public and the notary's signature is apostilled. We confirm the route before you order." },
  { q: "Can a notary in any Australian state sign the documents?", a: "Notaries are regulated by each state or territory. Any notary public can notarise, but DFAT must be able to verify the notary's signature and seal, so use a notary on DFAT's records and confirm before the appointment." },
]

const relatedCards = [
  { title: "Incorporation Process for an Australian-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/australia-to-india/incorporation-process" },
  { title: "Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for an Australian Company in India?", desc: "Compare the four ways an Australian company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.", href: "/blog/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan", desc: "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Australian parents, and duties.", href: "/blog/australia-to-india/resident-director" },
  { title: "Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR", desc: "How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.", href: "/blog/australia-to-india/funding-fema-fc-gpr" },
]

export default function DocumentsAndApostillePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Documents Required from the Australian Parent, and How to Get Them Apostilled"
        description="Which documents an Australian parent must prepare to incorporate an Indian subsidiary, and how notarisation and DFAT apostille work for Australian company documents."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "Documents and Apostille for an India Subsidiary (Australian Parent)" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: documents"
        title="Documents Required from the Australian Parent, and How to Get Them Apostilled"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Australian parent typically provides its ASIC company extract (or Certificate of Registration),
          constitution, a directors&apos; resolution authorising the investment and the signatory, and identity
          and address proofs of its signatory and directors. These Australian documents are notarised and then
          apostilled by the Department of Foreign Affairs and Trade (DFAT) before use in India. Apostille
          preparation is usually the longest step of incorporation, so start it first.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Documents from the Australian parent", "ASIC company extract or Certificate of Registration, constitution, directors' resolution, signatory authorisation"],
                ["Documents for individuals", "Passport, address proof and, for directors, a Digital Signature Certificate"],
                ["Legalisation", "Notarise, then apostille (Australia and India are both parties to the Hague Apostille Convention)"],
                ["Apostille authority", "DFAT is the single Australian authority that issues apostilles, for public documents and for notaries' signatures"],
                ["Cost and time", "DFAT charges a fee per document and its processing times change; notaries charge their own fees. We confirm the current fee and turnaround before you order"],
                ["India-side documents", "Registered office proof, owner's consent and a utility bill"],
                ["Main risk", "Wrongly notarised or incomplete documents that must be redone"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Document checklist</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">From whom</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Apostille needed?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["ASIC company extract (current) or Certificate of Registration of the Australian parent", "Australian parent (ASIC)", "Yes, once DFAT confirms it can apostille the form you hold; otherwise a notarised certified copy is apostilled"],
                ["Constitution of the Australian parent", "Australian parent", "Yes, usually notarised first"],
                ["Directors' resolution authorising the investment and the signatory", "Australian parent board", "Yes, notarised and apostilled"],
                ["Passport and address proof of the signatory and foreign directors", "Individuals", "Usually notarised or attested; confirm the format required"],
                ["Registered office proof, rent agreement or ownership proof, utility bill", "India side", "No"],
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

        <h2 id="sequence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notarise first, then apostille</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An apostille is a certificate under the Hague Convention that confirms the authenticity of the
          signature, seal or stamp on a public document, so that it is valid in another member country. For a
          private document, such as a directors&apos; resolution, the sequence is: sign before a notary public,
          then have DFAT apostille the notary&apos;s signature and seal. For a document issued by an Australian
          authority, such as an ASIC extract, DFAT can apostille it directly where it can verify the
          issuer&apos;s signature, or the extract is first certified by a notary.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Because DFAT must be able to verify the notary, use a notary public whose signature is on DFAT&apos;s
          records, and confirm that before the signing appointment.
        </p>

        <h2 id="states" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notaries, states and territories</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Apostilles are issued federally by DFAT, so there is one process for the whole country. The
          differences are at the notary stage: notaries are commissioned and regulated by each state or
          territory, appointments and fees vary, and some will sign remotely while others require you to attend
          in person. Electronic signing and electronic apostilles are not accepted for every purpose, so we
          confirm the format Indian authorities will accept before you order and you do not repeat the process.
        </p>

        <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical tips</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Order the ASIC extract close to the filing date, because recent documents are usually expected.</li>
          <li>Keep dates consistent: the resolution date, signing date and notarisation date should be in logical order.</li>
          <li>Use the exact legal name, ACN and registered address of the Australian parent everywhere, matching the ASIC record.</li>
          <li>Check that the signatory named in the resolution is the person who signs before the notary.</li>
          <li>Send one complete courier set of originals to India only if your adviser asks for physical originals.</li>
        </ul>

        <h2 id="australian-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for an Australian parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Your company secretary or counsel can usually obtain the ASIC extract and constitution; your adviser prepares the draft directors&apos; resolution and signatory forms so they can be signed once. Check that your constitution and any financing or shareholder agreements allow the investment before the resolution is signed.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Notarising a document with a notary whose signature DFAT cannot verify, so the apostille is refused.</li>
          <li>Apostilling a photocopy instead of a certified copy or an original.</li>
          <li>Mismatches between the parent&apos;s name, ACN or address on different documents.</li>
          <li>Waiting until after incorporation planning to start the Australian documents.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We give you a checklist and drafts for your entity type, and advise on the format Indian authorities
          will accept.
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
        <GuideFaqList faqs={faqs} seeAllHref="/blog/australia-to-india/faq" seeAllCount={266} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Department of Foreign Affairs and Trade: apostilles and authentications", href: "https://www.dfat.gov.au/" },
            { label: "Australian Securities and Investments Commission", href: "https://asic.gov.au/" },
            { label: "Hague Conference: Apostille Convention", href: "https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 15 October 2026. General information only, not legal or tax advice. Indian and Australian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Need Your Australian Documents Apostilled for India?"
        description="Tell us which documents your subsidiary needs — we'll map the notarisation and DFAT apostille steps from the Australian side."
      />
    </main>
  )
}
