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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/contracts-courts-siac"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "clause", label: "Choosing law and seat" },
  { id: "awards", label: "Enforcing a SIAC award in India" },
  { id: "judgments", label: "Enforcing a Singapore court judgment" },
  { id: "stamp", label: "Stamp duty and signing" },
  { id: "drafting", label: "Drafting points for Singapore parents" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Singapore-seated SIAC award be enforced in India?", a: "Yes. India notified Singapore as a New York Convention territory, so a SIAC award is enforced as a foreign award under Part II of the Arbitration and Conciliation Act, 1996, on narrow grounds." },
  { q: "Can I enforce a Singapore court judgment in India?", a: "A final money judgment of a court in a reciprocating territory can be executed as a decree under Section 44A. Singapore's Superior Courts have been treated as reciprocating, but check the notification for your court." },
  { q: "Does an unstamped contract hold in Indian courts?", a: "It is not void, but it cannot be used as evidence until stamped and any penalty is paid." },
  { q: "Which SIAC rules apply?", a: "The SIAC Rules 2025 apply to arbitrations commenced on or after 1 January 2025, unless the parties agreed on earlier rules." },
  { q: "Is Indian law excluded if my contract is governed by Singapore law?", a: "No. FEMA, the Companies Act and other mandatory Indian laws still apply to the Indian subsidiary and its contracts." },
  { q: "Can Indian courts help in an arbitration seated in Singapore?", a: "In some cases, for example by granting interim relief to protect assets in India, where the Arbitration and Conciliation Act allows." },
]

const relatedCards = [
  { title: "The India-Singapore CECA: What the 2005 Agreement Gives a Singapore Company Setting Up in India, and What It Leaves Alone", desc: "What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services, people, the EPF exemption and the open review.", href: "/blog/singapore-to-india/india-singapore-ceca" },
  { title: "Moving Personal Data Between Singapore and India: PDPA Transfer Rules and the DPDP Act", desc: "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation, contracts, breach notice, consent, penalties and a build plan.", href: "/blog/singapore-to-india/data-protection-pdpa-dpdp" },
  { title: "Selling, Restructuring or Closing an Indian Subsidiary Held from Singapore: Tax, FEMA and Treaty Steps", desc: "Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback, strike-off, voluntary liquidation and group restructuring.", href: "/blog/singapore-to-india/exit-and-restructuring" },
  { title: "12 Common Mistakes Singapore Companies Make When Entering India, and How to Avoid Each", desc: "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE, FEMA clocks, stamping, data transfers and year-end gaps.", href: "/blog/singapore-to-india/common-mistakes" },
]

export default function ContractsCourtsSiacPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts, Courts and Arbitration: Using Singapore as the Seat and Enforcing in India"
        description="How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India, stamping, interim relief and drafting points."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Contracts, Courts and SIAC Arbitration: Enforcing Singapore Awards and Judgments in India" },
        ]}
      />

      <GuideHero
        eyebrow="Disputes: contracts and arbitration"
        title="Contracts, Courts and Arbitration: Using Singapore as the Seat and Enforcing in India"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore parent can choose Singapore law and a Singapore-seated SIAC arbitration for its
          shareholder, services and licence agreements, and then enforce an award in India as a foreign award
          under Part II of the Arbitration and Conciliation Act, 1996, because India has notified Singapore as a
          Convention territory. Singapore judgments can be enforced as decrees if Singapore is treated as a
          reciprocating territory for the court that gave them. Indian mandatory law, FEMA and stamp duty still
          apply regardless of the chosen law.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Seat", "Singapore is a common neutral seat for India-related arbitration; SIAC Rules 2025 apply to arbitrations commenced from 1 January 2025"],
                ["Enforcement of awards", "Part II of the Arbitration and Conciliation Act, 1996 (New York Convention awards); Singapore was notified as a Convention territory (notification dated 6 July 1999)"],
                ["Enforcement of judgments", "Section 44A of the Code of Civil Procedure for judgments of reciprocating territories; Singapore courts have been treated as reciprocating; check the notification for the specific court"],
                ["Stamp duty", "An unstamped agreement is not void but cannot be used as evidence in India until stamped and any penalty is paid"],
                ["Public policy", "An Indian court can refuse enforcement only on narrow grounds such as public policy"],
                ["FEMA", "Payment of awards and settlement amounts needs the right banking route and reporting"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="clause" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing law and seat</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Choice</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical position</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to check</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Governing law of the shareholder agreement", "Singapore law is common for a Singapore parent; Indian law for local contracts", "FEMA and the Companies Act apply regardless; some clauses (for example certain exit and put options) need care under Indian law"],
                ["Seat", "Singapore, with SIAC rules", "Seat decides the supervisory courts; Indian courts can still grant interim help in aid of arbitration where the Act allows"],
                ["Rules", "SIAC Rules 2025 with an emergency arbitrator, expedited procedure and joinder", "Check whether the contract names the SIAC correctly and the number of arbitrators"],
                ["Language", "English", "Keep all exhibits in English or translated"],
                ["Governing law of intercompany agreements", "Indian law where the Indian subsidiary needs to enforce locally", "Align with the transfer pricing documentation"],
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

        <h2 id="awards" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Enforcing a SIAC award in India</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Obtain the award and a certified copy of the arbitration agreement.</li>
          <li>File an enforcement petition before the High Court with jurisdiction over the assets of the debtor or the person.</li>
          <li>The court checks the formal requirements and the grounds in Section 48 of the Act, which are narrow and include public policy.</li>
          <li>If satisfied, the award is deemed a decree of the court and is executed as a decree.</li>
          <li>Plan for payment: remittance of the proceeds needs the right route through an authorised dealer bank.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          Indian courts have enforced foreign awards even where neither party had a connection with India, if
          the assets are in the court&apos;s jurisdiction. The Karnataka High Court did so for a
          Singapore-seated award on 18 February 2022, as an interim step, and the position continues to develop.
        </p>

        <h2 id="judgments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Enforcing a Singapore court judgment</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A money judgment from a court in a reciprocating territory can be executed in India as if it were an
          Indian decree by filing a certified copy and a certificate from the original court. India has notified
          Singapore as a reciprocating territory, as we understand the notification for its Superior Courts, and
          your Indian counsel should confirm the position for your court. The judgment must be final and
          conclusive on the merits, and exceptions apply, such as fraud, lack of jurisdiction or a breach of
          Indian public policy. Because arbitration awards generally travel better, most parent-subsidiary
          agreements choose arbitration.
        </p>

        <h2 id="stamp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Stamp duty and signing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Stamp duty is state-based and depends on the instrument and the amount.</li>
          <li>An unstamped agreement is not void, but it cannot be used as evidence until stamped and any penalty is paid. Stamp before signing where possible.</li>
          <li>Use electronic stamping or the state&apos;s e-stamp system where available.</li>
          <li>Authorise signatories by board resolution of the Indian subsidiary, and record the signing date and place.</li>
        </ul>

        <h2 id="drafting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Drafting points for Singapore parents</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Name the SIAC and the seat precisely; ambiguity invites litigation about the clause.</li>
          <li>Include a tiered clause with negotiation first, then arbitration, with a short fuse to avoid delay.</li>
          <li>State the governing law of the arbitration agreement itself.</li>
          <li>Say who bears costs, the language, the number of arbitrators and the confidentiality terms.</li>
          <li>Add an Indian address for service on the subsidiary and a process agent.</li>
          <li>Consider emergency relief and interim measures, and keep evidence of the assets and bank accounts you may need to attach.</li>
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
            { label: "LiveLaw: Karnataka High Court on enforcing a Singapore-seated award", href: "https://www.livelaw.in/amp/news-updates/karnataka-high-court-chief-justice-ritu-raj-awasthi-justice-suraj-govindaraj-arbitration-award-195671" },
            { label: "Singapore International Arbitration Centre", href: "https://siac.org.sg/" },
            { label: "Ministry of Law and Justice (India)", href: "https://lawmin.gov.in/" },
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
        title="Drafting Contracts with an SIAC Clause?"
        description="Tell us the counterparties and contract types, and we'll outline governing law, seat and enforcement options for India."
      />
    </main>
  )
}
