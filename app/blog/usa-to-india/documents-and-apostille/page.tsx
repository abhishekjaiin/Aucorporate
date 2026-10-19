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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/documents-and-apostille"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "list", label: "Document checklist" },
  { id: "sequence", label: "Notarize first, then apostille" },
  { id: "states", label: "State differences" },
  { id: "tips", label: "Practical tips" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is an apostille?", a: "A certificate that makes a public document from one Hague Convention country valid in another. It replaces consular legalization." },
  { q: "Are India and the US both members of the Hague Apostille Convention?", a: "India and the US are both members of the Hague Apostille Convention. Documents apostilled in the US are accepted in India without further consular legalization." },
  { q: "Can documents be signed and apostilled electronically?", a: "Some states offer remote notarization and electronic apostilles, but acceptance of electronic versions varies, so confirm with your adviser first." },
  { q: "How long does an apostille take?", a: "An apostille takes from a few days to a few weeks, depending on the state and the service level chosen. This is usually the main variable in the overall incorporation timeline." },
  { q: "What documents does the US parent need to provide?", a: "A US parent typically provides its Certificate of Incorporation and good standing, a board resolution, identity and address proofs of the signatory and directors, and its charter documents. Foreign documents are notarized and apostilled. The exact checklist depends on the parent's entity type." },
  { q: "What is the time period for registering a company in India?", a: "Registering a company in India typically takes 4 to 6 weeks from receipt of complete documents. The MCA incorporation itself is usually the shortest step, and the main variable is how quickly the apostilled US parent documents are ready. Name approval and digital signatures can run in parallel." },
  { q: "Does the US parent have to travel to India?", a: "A US parent does not have to travel to India to set up a subsidiary. Incorporation can be completed online using apostilled documents and digital signatures. Banks set their own KYC rules, so the bank's verification requirements should be confirmed early." },
  { q: "What documents are needed to remit dividends?", a: "Board and shareholder approvals, the audited accounts showing distributable profits, a Withholding Tax computation with treaty documents (Tax Residency Certificate and Form 41, previously Form 10F), and Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
  { q: "How long does incorporation take?", a: "Incorporation of an Indian subsidiary typically takes 4 to 6 weeks from receipt of complete documents. The main variable is how quickly the apostilled US documents are ready." },
  { q: "What is the cost of incorporating a subsidiary company in India?", a: "The cost of incorporating a subsidiary in India has three parts: government fees (MCA filing fees and state stamp duty, which depend on the authorized capital and the state), the cost of notarizing and apostilling US documents, and professional fees. AU Corporate's indicative setup fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about USD 10,300). Annual running costs are additional." },
  { q: "What does an apostille cost in the US?", a: "A US state apostille typically costs $10 to $20 per document (for example $15 in Texas, $20 in California and $10 in New York), and a federal document costs $20 at the US Department of State. Processing ranges from same-day at some state counters to 20 or more business days by mail." },
]

const relatedCards = [
  { title: "Incorporation Process for a US-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/usa-to-india/incorporation-process" },
  { title: "Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for a US Company in India?", desc: "Compare the four ways a US company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.", href: "/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan", desc: "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for US parents, and duties.", href: "/blog/usa-to-india/resident-director" },
  { title: "Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR", desc: "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.", href: "/blog/usa-to-india/funding-fema-fc-gpr" },
]

export default function DocumentsAndApostillePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Documents Required from the US Parent, and How to Get Them Apostilled"
        description="Which documents a US parent must prepare to incorporate an Indian subsidiary, and how notarization and apostille work for US state and federal documents."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Documents and Apostille for an India Subsidiary (US Parent)" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: documents"
        title="Documents Required from the US Parent, and How to Get Them Apostilled"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US parent typically provides its Certificate of Incorporation and good standing, a board resolution,
          charter documents and identity and address proofs of its signatory and directors. These foreign documents
          are notarized and apostilled before use in India. Apostille preparation is usually the longest part of
          the timeline, so start it first.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Documents from the US parent", "Certificate of Incorporation, good standing, charter documents, board resolution, signatory authorization"],
                ["Documents for individuals", "Passport, address proof and, for directors, a Digital Signature Certificate"],
                ["Legalization", "Notarize, then apostille (US and India are both parties to the Hague Apostille Convention)"],
                ["Cost and time", "State apostille fees mostly range from $10 to $20 per document (for example $15 in Texas, $20 in California, $10 in New York); federal documents cost $20 at the US Department of State; processing ranges from same-day at some state counters to 20 or more business days by mail"],
                ["Apostille authority", "State Secretary of State for state documents; US Department of State for federal documents"],
                ["India-side documents", "Registered office proof, owner's consent and a utility bill"],
                ["Main risk", "Wrongly notarized or incomplete documents that must be redone"],
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
        <div className="overflow-x-auto mb-10">
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
                ["Certificate of Incorporation or formation of the US parent", "US parent (state filing)", "Yes"],
                ["Certificate of good standing", "US parent (state filing)", "Yes"],
                ["Charter documents (bylaws, operating agreement)", "US parent", "Yes, usually notarized first"],
                ["Board resolution authorizing the investment and signatory", "US parent board", "Yes, notarized and apostilled"],
                ["Passport and address proof of the signatory and foreign directors", "Individuals", "Usually notarized or attested; confirm the format required"],
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

        <h2 id="sequence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notarize first, then apostille</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An apostille is a certificate under the Hague Convention that confirms the authenticity of the signature,
          seal or stamp on a public document, so that it is valid in another member country. For a private
          document, such as a board resolution, the sequence is: sign before a notary, then have the notary&apos;s
          authority apostilled by the Secretary of State of the state where the notary is commissioned. For a
          certificate issued by the state, the Secretary of State issues the apostille directly. Federal documents
          are apostilled by the US Department of State.
        </p>

        <h2 id="states" className="text-2xl font-bold text-gray-900 mt-12 mb-4">State differences</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Processing times, fees, mail-in or online options and expedited services differ by state. Some states
          issue electronic apostilles, and acceptance of electronic versions varies. We confirm the format Indian
          authorities will accept before you order, so you do not repeat the process.
        </p>

        <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical tips</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Order certified copies of state filings first, since apostille is placed on the certified copy.</li>
          <li>Keep dates consistent: the resolution date, signing date and notarization date should be in logical order.</li>
          <li>Obtain good standing and certificates close to the filing date, because recent documents are usually expected.</li>
          <li>Use the exact legal name and address of the US parent everywhere, matching the state records.</li>
          <li>Send one complete courier set of originals to India only if your adviser asks for physical originals.</li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Your corporate secretary or counsel can usually order the state documents; your adviser prepares the draft board resolution and signatory forms so they can be signed once. Check that your charter and any investor agreements allow the investment before the board resolution is signed.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Notarizing a document with the wrong notary type or missing seal, so the apostille is refused.</li>
          <li>Apostilling a photocopy instead of a certified copy.</li>
          <li>Mismatches between the parent&apos;s name or address on different documents.</li>
          <li>Waiting until after incorporation planning to start the US documents.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We give you a checklist and drafts for your entity type, and advise on the format Indian authorities will
          accept.
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
            { label: "US Department of State: apostille requirements", href: "https://www.state.gov/apostille-requirements/" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Hague Conference on Private International Law: Apostille Convention", href: "https://www.hcch.net" },
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
        title="Need Your US Documents Apostilled for India?"
        description="Tell us which documents your subsidiary needs — we'll map the apostille, notarization and translation steps from the US side."
      />
    </main>
  )
}
