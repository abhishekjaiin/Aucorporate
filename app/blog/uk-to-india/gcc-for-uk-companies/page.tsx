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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/gcc-for-uk-companies"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "why", label: "Why UK groups build in India" },
  { id: "models", label: "The four operating models" },
  { id: "regulated", label: "Regulated UK firms: moving work to a group company" },
  { id: "economics", label: "Tax and pricing: keeping it defensible" },
  { id: "stages", label: "A staged build" },
  { id: "people", label: "Leadership, culture and governance" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a Global Capability Centre?", a: "A captive centre, usually an Indian subsidiary, that carries out engineering, finance, analytics, operations or support work for its parent group." },
  { q: "How big should a UK company's first India team be?", a: "Many groups start with a pilot of 10 to 20 people, often through an Employer of Record, then form a subsidiary once the model is proven." },
  { q: "Can a PRA- or FCA-regulated firm move work to an Indian group company?", a: "Yes, but the rules for third-party arrangements still apply to a group company, and the activity remains the regulated firm's responsibility. The firm must assess materiality, perform due diligence, put an agreement in place with audit and access rights, and plan for exit." },
  { q: "How is a captive centre priced?", a: "Usually at cost plus a mark-up benchmarked against comparable independent companies, documented in an annual transfer pricing report." },
  { q: "Are services to the UK parent zero-rated for GST?", a: "They can be, as exports of services, if the conditions on place of supply, payment in convertible foreign exchange and the relationship between the parties are met. Confirm the position before invoicing." },
]

const relatedCards = [
  { title: "Choosing an Indian Structure as a UK Company: Subsidiary, Branch, Liaison Office, LLP or Employer of Record", desc: "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through an intermediate company.", href: "/blog/uk-to-india/structure-options" },
  { title: "Transfer Pricing in India for UK-Owned Subsidiaries: What the Indian Rules Require and How They Differ from the UK", desc: "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits and how it differs from the UK regime.", href: "/blog/uk-to-india/transfer-pricing" },
  { title: "Hiring in India as a UK Employer: How Indian Employment Differs, and What to Put in the Contract", desc: "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share plans to Indian employees.", href: "/blog/uk-to-india/hiring-in-india" },
  { title: "Data Protection for a UK Group with an Indian Subsidiary: UK GDPR Transfers and India's DPDP Act", desc: "How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules, timelines, and practical contract terms.", href: "/blog/uk-to-india/data-protection-uk-gdpr-dpdp" },
]

export default function GccForUkCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Building a Global Capability Centre in India as a UK Company: Models, Staging, Regulation and Pricing"
        description="How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm third-party rules, transfer pricing, PE risk, talent and governance."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Global Capability Centres in India for UK Companies: Models, Regulation and Transfer Pricing" },
        ]}
      />

      <GuideHero
        eyebrow="Operations: captive centres"
        title="Building a Global Capability Centre in India as a UK Company: Models, Staging, Regulation and Pricing"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Global Capability Centre (GCC) is an Indian subsidiary that performs engineering, finance, data,
          operations or support work for the UK group. The usual path is a pilot team through an Employer of
          Record, a subsidiary at 20 to 50 people, and scaled operations on a cost-plus pricing model. UK
          regulated firms must also meet the PRA and FCA third-party rules when work moves to a group company in
          India.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["What it is", "A wholly owned Indian subsidiary providing services to the UK group"],
                ["Typical pricing", "Cost plus a benchmarked mark-up, documented with a transfer pricing study"],
                ["Revenue and GST", "Services to the UK parent can qualify as zero-rated exports of services where conditions are met"],
                ["PE risk", "Managed by keeping the Indian company independent in operations, contracts and day-to-day decisions, and tracking UK staff days"],
                ["Regulated UK firms", "PRA SS2/21 (third-party risk) and FCA SYSC 8 apply to work moved to service providers, including group companies"],
                ["Data", "UK GDPR transfer mechanism and India's DPDP Act both apply"],
                ["Scale path", "Pilot, subsidiary, build, scale, with optional build-operate-transfer"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why UK groups build in India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Capability, not only cost:</strong> engineering, data, cyber, risk, finance operations and product teams that are hard to hire in the UK at pace.</li>
          <li><strong>Time zone:</strong> India&apos;s working day overlaps the UK morning, allowing follow-the-sun support.</li>
          <li><strong>Scale options:</strong> a team can grow from a handful to hundreds under the same legal entity.</li>
          <li><strong>Policy support:</strong> several Indian states have centre-specific policies and incentives; check the current terms and eligibility before choosing a city.</li>
        </ul>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The four operating models</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Good for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Employer of Record pilot", "EOR employs the first team under your direction", "Proof of concept in the first 3 to 9 months", "PE risk if UK managers direct the work; costs per head"],
                ["Captive subsidiary", "Your own Indian company employs the team", "Long-term capability", "Full compliance, transfer pricing and governance"],
                ["Build-operate-transfer", "A partner builds and runs the centre, then transfers it to you", "Groups that want speed without a heavy first-year management load", "Transfer terms, key staff retention, tax on transfer"],
                ["Shared or hybrid", "Part captive, part vendor-run", "Variable demand", "Governance across vendors"],
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

        <h2 id="regulated" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulated UK firms: moving work to a group company</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A UK bank, insurer or investment firm moving work to its Indian group company is treated as using a
          service provider, even though the counterparty is a subsidiary. The firm remains responsible for the
          activity. Expect to cover the PRA&apos;s third-party risk expectations and the FCA&apos;s SYSC 8
          rules: a materiality assessment, due diligence, a written agreement with audit and access rights for
          the firm and its regulators, exit and stressed-exit plans, business continuity, data and security
          controls, and ongoing monitoring. The Indian entity&apos;s own regulators, such as RBI or SEBI for
          financial services work done in India, may also have requirements. Raise the plan with your compliance
          team before the pilot starts.
        </p>

        <h2 id="economics" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and pricing: keeping it defensible</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Pricing:</strong> cost plus a mark-up supported by a benchmarking study, reviewed every year. See <Link href="/blog/uk-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li><strong>GST:</strong> services provided to the UK parent can be zero-rated exports if the place of supply, payment in convertible foreign exchange and other conditions are satisfied.</li>
          <li><strong>Permanent establishment:</strong> keep strategy, contract authority and key staff decisions inside the Indian company or clearly governed, and log UK staff days. See <Link href="/blog/uk-to-india/india-uk-dtaa" className="text-blue-800 font-semibold hover:underline">the treaty guide</Link>.</li>
          <li><strong>UK CFC and anti-avoidance:</strong> document where the strategic control sits. See <Link href="/blog/uk-to-india/uk-parent-reporting" className="text-blue-800 font-semibold hover:underline">UK parent obligations</Link>.</li>
        </ul>

        <h2 id="stages" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A staged build</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Stage 0: define the scope, the roles and the success measures; run a two-city comparison.</li>
          <li>Stage 1: pilot with an EOR, or form the subsidiary and hire the first 10 to 20.</li>
          <li>Stage 2: add leadership, build the compliance and security framework, move to a permanent office.</li>
          <li>Stage 3: scale hiring, add functions and review the pricing and tax position.</li>
          <li>Stage 4: decide whether to keep expanding, add a second site or move to a hub model.</li>
        </ol>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Leadership, culture and governance</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The centre needs a head who is empowered to run it, a UK sponsor, shared objectives, and regular joint
          working with the UK teams. Align hiring bands, performance review cycles and share plans across the
          countries. See{" "}
          <Link href="/blog/uk-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">hiring in India</Link>.
          For regulated firms, ensure the board and risk committees receive reporting on the centre.
        </p>

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
            { label: "Bank of England PRA: SS2/21 on third-party risk management", href: "https://www.bankofengland.co.uk/prudential-regulation/publication/2021/march/outsourcing-and-third-party-risk-management-ss" },
            { label: "FCA Handbook: SYSC 8", href: "https://www.handbook.fca.org.uk/handbook/SYSC/8/" },
            { label: "Income Tax Department (India)", href: "https://www.incometax.gov.in" },
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
        title="Setting Up a GCC in India?"
        description="Tell us the functions and headcount you plan — we'll map the entity, transfer pricing and compliance model for your capability centre."
      />
    </main>
  )
}
