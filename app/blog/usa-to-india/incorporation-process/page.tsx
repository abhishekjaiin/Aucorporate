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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/incorporation-process"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "steps", label: "The eight steps in detail" },
  { id: "timeline", label: "What drives the 4 to 6 weeks" },
  { id: "first90", label: "Your first 90 days after incorporation" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "official-sources", label: "Official sources" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does incorporation take?", a: "Incorporation of an Indian subsidiary typically takes 4 to 6 weeks from receipt of complete documents. The main variable is how quickly the apostilled US documents are ready." },
  { q: "Does the US parent need to visit India?", a: "A US parent does not need to visit India to incorporate a subsidiary. The process runs online using apostilled documents and digital signatures." },
  { q: "Can the company name be rejected?", a: "A company name can be rejected if it is identical or too similar to an existing company or trademark, or breaks the naming rules. Checking availability and proposing alternatives in advance avoids delay." },
  { q: "What happens right after the Certificate of Incorporation?", a: "You open the bank account, transfer the funds for share capital, allot shares, file FC-GPR with the RBI, and complete the commencement and registration steps." },
  { q: "What is the cost of incorporating a subsidiary company in India?", a: "The cost of incorporating a subsidiary in India has three parts: government fees (MCA filing fees and state stamp duty, which depend on the authorized capital and the state), the cost of notarizing and apostilling US documents, and professional fees. AU Corporate's indicative setup fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about USD 10,300). Annual running costs are additional." },
  { q: "What are the steps to incorporate an Indian subsidiary?", a: "Incorporating an Indian subsidiary takes eight steps: confirm FDI eligibility, prepare apostilled US documents, obtain digital signatures, file SPICe+ with the MCA, open the bank account, transfer the funds for share capital, allot shares and report to the RBI, then begin operations." },
  { q: "How is the company name chosen and approved?", a: "A company name in India is chosen by proposing names on the MCA portal, which approves one if it is not identical or too similar to an existing company or trademark and follows the naming rules. Approval is time-bound, so the incorporation form should be filed soon after the name is cleared." },
  { q: "What is SPICe+?", a: "SPICe+ is the MCA's single online form for incorporation. It carries the Memorandum and Articles of Association and can also apply for PAN, TAN, GST, EPFO and ESIC registrations and a bank account, replacing several separate forms." },
  { q: "What is the time period for registering a company in India?", a: "Registering a company in India typically takes 4 to 6 weeks from receipt of complete documents. The MCA incorporation itself is usually the shortest step, and the main variable is how quickly the apostilled US parent documents are ready. Name approval and digital signatures can run in parallel." },
  { q: "What is the annual compliance cost of an Indian subsidiary?", a: "The annual compliance cost of an Indian subsidiary depends on its size and scope. It covers bookkeeping, statutory audit, income tax and ROC filings, GST returns, payroll compliance, RBI reporting and, where there are transactions with the US parent, a transfer pricing report. Pricing a fixed annual scope up front is practical, because missed filings cost more than staying current." },
  { q: "What are the MCA fee and stamp duty for incorporating a company in India?", a: "The MCA filing fee for SPICe+ is nil where the authorized capital is up to ₹15 lakh, and slab fees apply above that. Name reservation costs ₹1,000 for up to two names, PAN and TAN are issued through SPICe+, and stamp duty on the Memorandum and Articles is a state levy, for example ₹1,010 in Rajasthan and ₹620 in Gujarat at ₹1 lakh of authorized capital." },
  { q: "How long does the MCA take to incorporate a company in India?", a: "The MCA stage of incorporating a company in India typically takes 7 to 15 working days, covering digital signatures, name approval, filing SPICe+ and receiving the Certificate of Incorporation. The overall timeline is usually 4 to 6 weeks, because the apostilled US documents, the bank account and the FEMA steps run alongside." },
]

const relatedCards = [
  { title: "Documents Required from the US Parent, and How to Get Them Apostilled", desc: "Which documents a US parent must prepare to incorporate an Indian subsidiary, and how notarization and apostille work for US state and federal documents.", href: "/blog/usa-to-india/documents-and-apostille" },
  { title: "Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan", desc: "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for US parents, and duties.", href: "/blog/usa-to-india/resident-director" },
  { title: "Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR", desc: "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.", href: "/blog/usa-to-india/funding-fema-fc-gpr" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/usa-to-india/compliance-calendar" },
]

export default function IncorporationProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Incorporation Process for a US-Owned Indian Subsidiary, Step by Step"
        description="The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Incorporation Process for an Indian Subsidiary, Step by Step" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: incorporation"
        title="Incorporation Process for a US-Owned Indian Subsidiary, Step by Step"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Incorporating an Indian subsidiary takes eight steps: confirm FDI eligibility, prepare apostilled US
          documents, obtain digital signatures, file SPICe+ with the MCA, open the bank account, transfer the funds
          for share capital, allot shares and report to the RBI, then begin operations. The typical timeline is 4 to
          6 weeks from receipt of complete documents.
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
                ["Typical timeline", "4 to 6 weeks from receipt of complete documents"],
                ["Main incorporation form", "SPICe+ (with the Memorandum and Articles of Association)"],
                ["Registrations through SPICe+", "PAN, TAN, and, where applied for, GST, EPFO, ESIC and a bank account"],
                ["MCA fee and name reservation", "Nil for authorized capital up to ₹15 lakh, with slab fees above that; name reservation costs ₹1,000 for up to two names; PAN and TAN are issued through SPICe+"],
                ["Stamp duty", "A state levy on the Memorandum and Articles; for example ₹1,010 in Rajasthan and ₹620 in Gujarat at ₹1 lakh of authorized capital"],
                ["MCA processing time", "Typically 7 to 15 working days from digital signatures to the Certificate of Incorporation; the overall 4 to 6 weeks includes apostilled documents, the bank account and FEMA steps"],
                ["RBI report", "Form FC-GPR within 30 days of share allotment"],
                ["Commencement", "Form INC-20A within 180 days of incorporation"],
                ["First Auditor", "Appointed by the board within 30 days of incorporation"],
                ["Travel to India", "Not required"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The eight steps in detail</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Confirm FDI eligibility.</strong> Check your activity against the FDI Policy. Most services and technology activities are on the Automatic Route, which needs no prior approval. Some sectors have caps or conditions.</li>
          <li><strong>Prepare the US parent&apos;s documents.</strong> Certificate of Incorporation and good standing, board resolution, identity and address proofs, and charter documents, notarized and apostilled. See{" "}
            <Link href="/blog/usa-to-india/documents-and-apostille" className="text-blue-800 font-semibold hover:underline">documents and apostille</Link>.
          </li>
          <li><strong>Get digital signatures.</strong> Each proposed director needs a Digital Signature Certificate (DSC) to sign the filings electronically.</li>
          <li><strong>Reserve the name and file SPICe+.</strong> The name is approved on the MCA portal, and the SPICe+ form is filed with the Memorandum and Articles. A registered office address in India with proof is required. At least one director must be resident in India. See{" "}
            <Link href="/blog/usa-to-india/resident-director" className="text-blue-800 font-semibold hover:underline">Resident Director rules</Link>.
          </li>
          <li><strong>Receive the Certificate of Incorporation.</strong> The MCA issues it with the Corporate Identification Number (CIN), and the company receives its PAN and TAN.</li>
          <li><strong>Open the bank account and transfer the funds for share capital.</strong> The US parent transfers the subscription money by inward remittance through an authorized dealer bank, which issues the foreign inward remittance certificate.</li>
          <li><strong>Allot shares and report to the RBI.</strong> Allot shares within 60 days of receiving the funds. File Form FC-GPR within 30 days of allotment with a valuation certificate and a Company Secretary&apos;s certificate. See{" "}
            <Link href="/blog/usa-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">funding and FC-GPR</Link>.
          </li>
          <li><strong>Commence business.</strong> File Form INC-20A within 180 days, appoint the first Auditor, hold the first board meeting and complete GST, payroll and other registrations that apply.</li>
        </ol>

        <h2 id="timeline" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What drives the 4 to 6 weeks</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The MCA incorporation itself is usually the shortest step once documents are ready. The main variable is
          how quickly the apostilled US documents are prepared. Name approval and digital signatures run alongside
          document preparation, so starting them early keeps the timeline within range. Delays most often come from
          incomplete or incorrectly notarized documents, so a checklist on day one saves time.
        </p>

        <h2 id="first90" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Your first 90 days after incorporation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Hold the first board meeting (within 30 days of incorporation) and record the appointment of the first Auditor.</li>
          <li>Open the bank account, transfer the share capital, allot the shares and file Form FC-GPR.</li>
          <li>File Form INC-20A once the subscription money is paid.</li>
          <li>Complete GST, provident fund, ESI, professional tax and other registrations that apply to your business.</li>
          <li>Set up accounting, payroll and a compliance calendar so that every filing has an owner and a date. See the{" "}
            <Link href="/blog/usa-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.
          </li>
          <li>Sign the intercompany agreement with the US parent before the first service is delivered.</li>
        </ul>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Your US team needs to provide the parent-side documents, a board resolution and one authorized signatory.
          Everything else can be completed remotely by your India adviser. Plan the intercompany agreement and
          funding amount in parallel so that no step waits on a decision.
        </p>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Starting incorporation before the apostilled documents are ready.</li>
          <li>Transferring funds before the bank account and share allotment plan are ready.</li>
          <li>Missing the 60-day allotment and 30-day FC-GPR timelines.</li>
          <li>Forgetting Form INC-20A and the first Auditor appointment, which carry penalties.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We prepare and file the incorporation, handle the bank and RBI steps, and set up your compliance calendar
          from day one.
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
          Last updated 14 October 2026. General information only, not legal or tax advice. Indian rules change often;
          confirm current requirements before acting.
        </p>
      </article>
    </main>
  )
}
