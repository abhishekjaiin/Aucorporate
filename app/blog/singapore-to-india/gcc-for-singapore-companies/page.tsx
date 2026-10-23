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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/gcc-for-singapore-companies"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "models", label: "The three models" },
  { id: "pricing", label: "Pricing the centre" },
  { id: "gst", label: "Indian GST on exports of services" },
  { id: "pe", label: "Avoiding a permanent establishment" },
  { id: "controls", label: "Controls for regulated groups" },
  { id: "start", label: "A practical start" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a Global Capability Centre?", a: "A captive team in India that performs technology, finance, analytics or operations work for the parent group. The usual form is an Indian subsidiary paid cost plus a mark-up." },
  { q: "How is a GCC priced for tax?", a: "Normally cost plus a mark-up from a benchmarking study, under a services agreement with the Singapore entity, and reviewed each year." },
  { q: "Are GCC services to Singapore exempt from GST in India?", a: "They can be zero-rated as exports of services if the recipient is outside India, payment is in convertible foreign exchange and the other conditions are met." },
  { q: "Does a GCC create a permanent establishment for the Singapore parent?", a: "Not by itself if the Indian entity is a separate low-risk provider, but Singapore staff directing the work or concluding contracts in India can create one." },
  { q: "Does MAS regulate a captive centre in India?", a: "MAS regulates the Singapore financial institution, and expects controls over work done by a group company in India, as for any third-party arrangement." },
  { q: "Should we use build-operate-transfer?", a: "It reduces early risk and time, but check the transfer terms, tax on the transfer and who owns the know-how." },
]

const relatedCards = [
  { title: "Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs", desc: "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.", href: "/blog/singapore-to-india/transfer-pricing" },
  { title: "Moving Personal Data Between Singapore and India: PDPA Transfer Rules and the DPDP Act", desc: "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation, contracts, breach notice, consent, penalties and a build plan.", href: "/blog/singapore-to-india/data-protection-pdpa-dpdp" },
  { title: "Hiring in India as a Singapore Employer: What Changes from Singapore Practice", desc: "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice.", href: "/blog/singapore-to-india/hiring-in-india" },
  { title: "Which Structure Should a Singapore Company Use in India? Subsidiary, Branch, Liaison Office, LLP, GIFT City or Employer of Record", desc: "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax results and a choice by business model.", href: "/blog/singapore-to-india/structure-options" },
]

export default function GccForSingaporeCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Setting Up a Global Capability Centre in India for a Singapore Group: Models, Pricing, Tax and Risk"
        description="How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST on exports, PE risk, MAS third-party rules and talent."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Global Capability Centres in India for Singapore Companies: Models, Pricing and Tax" },
        ]}
      />

      <GuideHero
        eyebrow="Operate: the captive centre"
        title="Setting Up a Global Capability Centre in India for a Singapore Group: Models, Pricing, Tax and Risk"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Global Capability Centre (GCC) is a captive team in India that does technology, finance, analytics
          or operations work for the Singapore group, and the usual form is an Indian subsidiary paid cost plus
          a mark-up. The legal work is the same as for any subsidiary, but three issues decide success: pricing
          that survives Indian and Singapore transfer pricing review, export-of-services treatment for GST, and
          keeping Singapore managers from creating a permanent establishment. Regulated Singapore financial
          groups also need MAS controls on third-party arrangements.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="gcc" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Models", "Captive subsidiary; build-operate-transfer with a partner; hybrid or shared service with a partner running part of the operation"],
                ["Pricing", "Cost plus a mark-up from benchmarking, usually under a services agreement with the Singapore entity"],
                ["GST", "Services supplied to a recipient outside India, paid in convertible foreign exchange, can be zero-rated as exports if the conditions are met"],
                ["PE risk", "Singapore staff who direct or conclude contracts in India can create a taxable presence"],
                ["Regulation", "MAS expectations on third-party arrangements for financial institutions; Indian sector rules if the work touches Indian customers"],
                ["Talent", "Large technical hiring pools in several Indian cities; wage inflation and attrition need budgeting"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The three models</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Captive subsidiary", "You own and run the Indian entity", "Core functions, long-term, high control", "Set-up time and management bandwidth"],
                ["Build-operate-transfer", "A partner builds and runs the centre, then transfers it to you", "Speed and low initial risk", "Transfer terms, tax on the transfer, knowledge ownership"],
                ["Hybrid", "You hold the entity; a partner runs part of operations", "Mixed models while you build capability", "Split responsibilities; data access"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pricing the centre</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The Indian entity is normally characterised as a low-risk service provider paid cost plus a mark-up.</li>
          <li>The mark-up comes from a benchmarking study of independent companies with similar functions, and is reviewed each year.</li>
          <li>IRAS accepts a published mark-up for routine support services on the Singapore side; India still wants its own benchmarking. See <Link href="/blog/singapore-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Document the service scope, hours and cost base, and keep time and cost records for audit.</li>
        </ul>

        <h2 id="gst" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian GST on exports of services</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A supply of services by the Indian entity to the Singapore group can be zero-rated as an export if the
          recipient is outside India, the service is delivered there, payment is in convertible foreign exchange
          and the supplier and recipient are not merely establishments of a distinct person. The last point
          matters for a branch. A subsidiary is a separate person, so the structure helps. File the right
          documents and claim input credit refunds.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Avoiding a permanent establishment</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep contract-making authority with the Indian entity for Indian customers and with the Singapore entity for Singapore customers.</li>
          <li>Do not let Singapore staff run the Indian team day to day from India beyond defined visit days.</li>
          <li>Keep intercompany agreements, invoices and board minutes consistent with the stated risk profile.</li>
          <li>Review the thresholds in <Link href="/blog/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">the tax treaty guide</Link>: services staff above 90 days (30 days for services to an associated enterprise) are a risk.</li>
        </ul>

        <h2 id="controls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Controls for regulated groups</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Document the arrangement with the Indian group company, the risk assessment and the exit plan for MAS-regulated entities.</li>
          <li>Make sure the Indian entity can give your auditors and regulators access to records and premises.</li>
          <li>Test business continuity from the Indian site.</li>
          <li>Align data security with the data protection programme. See <Link href="/blog/singapore-to-india/data-protection-pdpa-dpdp" className="text-blue-800 font-semibold hover:underline">PDPA and DPDP</Link>.</li>
        </ul>

        <h2 id="start" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A practical start</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Define scope: functions, headcount in years one to three, and the target cost.</li>
          <li>Choose the city, the premises model (managed office, coworking or own lease) and the hiring plan.</li>
          <li>Form the subsidiary and sign the services agreement before work starts.</li>
          <li>Hire leaders first, then the team, with a knowledge transfer plan from Singapore.</li>
          <li>Review the pricing and the tax position after the first year.</li>
        </ol>

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
            { label: "Monetary Authority of Singapore: third-party risk guidelines", href: "https://www.mas.gov.sg/" },
            { label: "CBIC: GST", href: "https://www.cbic.gov.in/" },
            { label: "IRAS: transfer pricing", href: "https://www.iras.gov.sg/" },
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
        title="Setting Up a GCC in India from Singapore?"
        description="Tell us the functions and headcount, and we'll map the entity, transfer pricing and compliance for your capability centre."
      />
    </main>
  )
}
