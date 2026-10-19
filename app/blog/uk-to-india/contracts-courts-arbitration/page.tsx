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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/contracts-courts-arbitration"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "contracts", label: "The contracts a UK group needs for India" },
  { id: "law-and-seat", label: "Choosing governing law, forum and seat" },
  { id: "judgments", label: "Enforcing an English court judgment in India" },
  { id: "arbitration", label: "Arbitration and awards" },
  { id: "practical", label: "Practical drafting points" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can an English court judgment be enforced in India?", a: "Yes, for a money judgment of a UK superior court. The UK is a reciprocating territory under Section 44A of the Code of Civil Procedure, so the decree can be filed for execution in India, subject to the statutory exceptions." },
  { q: "Are London arbitration awards enforceable in India?", a: "Yes. They are foreign awards under Part II of the Arbitration and Conciliation Act, 1996, and are enforced as a decree if the court is satisfied that no ground for refusal applies." },
  { q: "Should a UK company choose English law for its Indian contracts?", a: "For intercompany and high-value cross-border contracts, often yes, with a clear seat. For local customer and employment terms Indian law will usually govern, and an Indian seat may be easier." },
  { q: "What is the stamp duty risk in Indian contracts?", a: "Unstamped or under-stamped agreements can be inadmissible as evidence until the duty and a penalty are paid. The duty depends on the state and the type of document." },
  { q: "Is mediation available in India before going to court?", a: "Yes. The Mediation Act, 2023 provides for pre-litigation mediation and gives settlement agreements enforceable status." },
]

const relatedCards = [
  { title: "Hiring in India as a UK Employer: How Indian Employment Differs, and What to Put in the Contract", desc: "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share plans to Indian employees.", href: "/blog/uk-to-india/hiring-in-india" },
  { title: "Data Protection for a UK Group with an Indian Subsidiary: UK GDPR Transfers and India's DPDP Act", desc: "How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules, timelines, and practical contract terms.", href: "/blog/uk-to-india/data-protection-uk-gdpr-dpdp" },
  { title: "Selling, Restructuring or Closing an Indian Subsidiary: Options, Tax and RBI Steps for a UK Parent", desc: "How a UK parent can sell, merge, restructure or close an Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with Indian tax, RBI reporting and the UK substantial shareholding exemption.", href: "/blog/uk-to-india/exit-and-restructuring" },
  { title: "The India-UK Trade Agreement (CETA): What It Changes, and What It Does Not, for a UK Company Setting Up in India", desc: "What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double Contributions Convention and what stays unchanged.", href: "/blog/uk-to-india/india-uk-ceta" },
]

export default function ContractsCourtsArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts, Courts and Arbitration in India for UK Companies: Enforcing English Judgments and Awards"
        description="How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments and arbitral awards in India."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Contracts, Courts and Arbitration for UK Companies in India: English Judgments, LCIA and Indian Courts" },
        ]}
      />

      <GuideHero
        eyebrow="Disputes: UK parent"
        title="Contracts, Courts and Arbitration in India for UK Companies: Enforcing English Judgments and Awards"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UK company can choose English law and an English or Indian seat for its contracts, and the UK is a
          reciprocating territory under Section 44A of India&apos;s Code of Civil Procedure, so a money judgment
          of a UK superior court can be enforced in India by filing it for execution. Arbitral awards from
          London are enforceable as foreign awards under the New York Convention. The sensible choice depends on
          the counterparty&apos;s assets, the speed needed and the subject matter.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Governing law", "English law is allowed in cross-border contracts; Indian law is unavoidable for statutory matters such as employment, tax, company law and real estate"],
                ["Judgments", "UK is a reciprocating territory under Section 44A CPC; a decree of a UK superior court is executable in India as if passed by an Indian district court"],
                ["Arbitral awards", "Enforceable as foreign awards under Part II of the Arbitration and Conciliation Act, 1996 (New York Convention)"],
                ["Seat choices", "London (LCIA, ICC), Singapore, or India; each has trade-offs"],
                ["Stamp duty", "Unstamped or under-stamped agreements can be inadmissible in Indian courts until the duty and penalty are paid"],
                ["Mediation", "The Mediation Act, 2023 offers pre-litigation mediation and enforceable settlements"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="contracts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The contracts a UK group needs for India</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Contract</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Between</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points for the UK parent</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Intercompany services agreement", "UK parent and Indian subsidiary", "Scope, benefit, cost base and mark-up, invoicing, data processing terms; supports transfer pricing and Withholding Tax"],
                ["Shareholder and subscription documents", "UK parent (and any minority holders)", "Pricing floor, valuation, reserved matters, exit rights"],
                ["IP licence or assignment", "UK parent and Indian subsidiary", "Ownership of work product, royalties, and moral rights; compliance with the transfer pricing arm's length test"],
                ["Customer and vendor contracts", "Indian subsidiary and third parties", "Indian law usually applies; GST, payment terms and stamp duty"],
                ["Employment and contractor agreements", "Indian subsidiary and individuals", "Indian statutes govern; see hiring guide"],
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

        <h2 id="law-and-seat" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing governing law, forum and seat</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Intercompany contracts:</strong> English law with a London or Singapore seat works, but India may still treat the agreement as subject to Indian public policy, and tax authorities can read it as evidence. Some groups choose Indian law and an Indian seat for simplicity.</li>
          <li><strong>Contracts with Indian customers:</strong> an Indian seat and Indian law is often the practical choice, because enforcement is local and an Indian counterparty is more willing to sign.</li>
          <li><strong>High-value or sensitive disputes:</strong> a foreign seat gives familiar procedure, but the award must still be enforced in India against Indian assets.</li>
          <li><strong>Express terms:</strong> name the institution, seat, language, number of arbitrators and rules. Ambiguous clauses lead to preliminary fights.</li>
        </ul>

        <h2 id="judgments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Enforcing an English court judgment in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Section 44A of the Code of Civil Procedure treats the UK as a reciprocating territory. A decree of a
          UK superior court for a sum of money, other than a tax, fine or penalty, can be executed in India by
          filing a certified copy with a certificate of satisfaction from the court, in the same way as a decree
          of an Indian district court. The judgment must not fall within the exceptions to conclusiveness, such
          as a lack of jurisdiction, fraud or a result contrary to Indian law. Non-money orders, and judgments
          of lower UK courts, usually need a fresh suit in India based on the judgment. India has not extended
          reciprocal status to every country, so this is a real advantage of English litigation for UK companies
          with Indian counterparties.
        </p>

        <h2 id="arbitration" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Arbitration and awards</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The UK is a notified territory under the New York Convention for the purposes of Part II of the
          Arbitration and Conciliation Act, 1996, so a London award is enforced in India as a decree once the
          court is satisfied that the award is a foreign award and no ground for refusal applies. Public policy
          remains a narrow ground for refusal. Interim relief from Indian courts may be available in aid of a
          foreign-seated arbitration, subject to the agreement. Indian-seated arbitration with an institutional
          rule set is increasingly used and gives easier access to Indian courts for interim relief.
        </p>

        <h2 id="practical" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical drafting points</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Make sure the agreements are properly stamped under the law of the state where they are signed or first received.</li>
          <li>Authorise a person to sign and give evidence of authority; the apostille for signatories signed in the UK. See <Link href="/blog/uk-to-india/documents-companies-house-apostille" className="text-blue-800 font-semibold hover:underline">documents and apostille</Link>.</li>
          <li>Provide for notices to an address in India and an email address, and for service on the UK parent.</li>
          <li>Include limited, clear indemnity and liability caps. Indian courts enforce reasonable limitation clauses but dislike penalty clauses.</li>
          <li>Where payment crosses borders, state the currency and who bears tax and exchange differences. See <Link href="/blog/uk-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">getting money out</Link>.</li>
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
            { label: "India Code: Code of Civil Procedure, 1908, Section 44A (reciprocating territories)", href: "https://www.indiacode.nic.in" },
            { label: "India Code: Arbitration and Conciliation Act, 1996 and Mediation Act, 2023", href: "https://www.indiacode.nic.in" },
            { label: "London Court of International Arbitration", href: "https://www.lcia.org" },
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
        title="Drafting Contracts for Your India Entity?"
        description="Tell us the counterparties and contract types involved — we'll outline governing law, seat and enforcement options that hold up in India."
      />
    </main>
  )
}
