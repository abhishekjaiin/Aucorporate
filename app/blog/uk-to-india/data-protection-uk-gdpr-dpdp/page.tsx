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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/data-protection-uk-gdpr-dpdp"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "two-regimes", label: "Two regimes that meet in one subsidiary" },
  { id: "uk-to-india", label: "Sending UK personal data to India" },
  { id: "dpdp", label: "India's DPDP Act: what applies and when" },
  { id: "exemption", label: "The processor exemption that helps captive centres" },
  { id: "governance", label: "Setting up governance in the Indian subsidiary" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is India adequate for UK GDPR transfers?", a: "No. India does not currently have a UK adequacy regulation, so a UK controller sending personal data to an Indian subsidiary needs a transfer mechanism such as the International Data Transfer Agreement or the UK Addendum, plus a transfer risk assessment." },
  { q: "What is India's DPDP Act?", a: "India's Digital Personal Data Protection Act, 2023, which the Digital Personal Data Protection Rules, 2025 bring into effect in phases. The main duties and penalties begin on 13 May 2027." },
  { q: "Does the DPDP Act apply to an Indian captive centre working for a UK company?", a: "Yes, to processing in India, but processing personal data of people outside India under a contract with a foreign party is largely exempt from the notice and consent duties. The security safeguards still apply." },
  { q: "How fast must a data breach be reported in India?", a: "Without delay to the Data Protection Board and affected individuals, with a detailed report to the Board within 72 hours, once the main provisions apply on 13 May 2027. UK GDPR reporting duties can apply in parallel." },
  { q: "Can personal data be transferred out of India?", a: "Generally yes, unless the destination is restricted by government notification. Sector regulators and specified data sets can have stricter local storage rules." },
  { q: "Who is the controller and who is the processor between a UK parent and an Indian subsidiary?", a: "For UK customer data the UK parent is normally the controller and the Indian subsidiary its processor, with the terms set out in the intercompany services agreement. For the subsidiary's own employees, the Indian company is the data fiduciary." },
]

const relatedCards = [
  { title: "Hiring in India as a UK Employer: How Indian Employment Differs, and What to Put in the Contract", desc: "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share plans to Indian employees.", href: "/blog/uk-to-india/hiring-in-india" },
  { title: "Building a Global Capability Centre in India as a UK Company: Models, Staging, Regulation and Pricing", desc: "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm outsourcing rules, transfer pricing, PE risk, talent and governance.", href: "/blog/uk-to-india/gcc-for-uk-companies" },
  { title: "Contracts, Courts and Arbitration in India for UK Companies: Enforcing English Judgments and Awards", desc: "How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments and arbitral awards in India.", href: "/blog/uk-to-india/contracts-courts-arbitration" },
  { title: "What a UK Parent Must Handle on Its Own Side When It Owns an Indian Subsidiary", desc: "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.", href: "/blog/uk-to-india/uk-parent-reporting" },
]

export default function DataProtectionUkGdprDpdpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Data Protection for a UK Group with an Indian Subsidiary: UK GDPR Transfers and India's DPDP Act"
        description="How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules, timelines, and practical contract terms."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Data Protection for UK Companies in India: UK GDPR, the DPDP Act and Transfers to India" },
        ]}
      />

      <GuideHero
        eyebrow="Data: UK GDPR and DPDP"
        title="Data Protection for a UK Group with an Indian Subsidiary: UK GDPR Transfers and India's DPDP Act"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary that handles personal data of UK customers or staff makes that data a restricted
          transfer under UK GDPR, because India does not have UK adequacy. The UK group needs a transfer
          mechanism, a risk assessment and security terms. India&apos;s Digital Personal Data Protection Act
          applies on top, with the main obligations starting on 13 May 2027. Processing only for a foreign
          controller under contract is largely exempt from the Indian notice and consent duties, but not from
          the security safeguards.
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
                ["UK to India transfers", "Restricted transfers under UK GDPR; no UK adequacy for India; use the International Data Transfer Agreement or the UK Addendum to the EU standard clauses, with a transfer risk assessment"],
                ["Indian law", "Digital Personal Data Protection Act, 2023 and Rules, notified 13 November 2025"],
                ["Phasing of the Rules", "Board and procedural provisions from 13 November 2025; consent manager provisions from 13 November 2026; main duties and penalties from 13 May 2027"],
                ["Breach reporting", "To the Data Protection Board of India without delay, with a detailed report within 72 hours, in addition to UK reporting duties where UK GDPR applies"],
                ["Penalties", "Up to ₹250 crore under the Act for failure to take security safeguards"],
                ["Cross-border transfer from India", "Permitted unless to a country restricted by notification; sector rules and specified data may be restricted"],
                ["Regulators", "Information Commissioner's Office (UK) and Data Protection Board of India"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="two-regimes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Two regimes that meet in one subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          UK GDPR applies to personal data the UK group controls, wherever the processing happens. The DPDP Act
          applies to digital personal data processed in India, and to processing outside India for offering
          goods or services to people in India. An Indian captive centre working for the UK parent will
          therefore usually sit under both: the UK parent as the controller under UK GDPR, the Indian company as
          its processor, and the Indian company as a data fiduciary for its own employees and Indian customers.
        </p>

        <h2 id="uk-to-india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sending UK personal data to India</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Map the data flows: what personal data goes to India, whose data it is, why and who has access.</li>
          <li>Choose the transfer mechanism. India does not have a UK adequacy regulation, so use the International Data Transfer Agreement, or the UK Addendum to the EU standard contractual clauses, or binding corporate rules for a large group.</li>
          <li>Complete a transfer risk assessment covering Indian law on government access and the safeguards in place.</li>
          <li>Put the processor terms in the intercompany services agreement: purposes, security, sub-processors, audit rights, breach notice and return or deletion.</li>
          <li>Update privacy notices for UK individuals so that they name India as a destination and the safeguard.</li>
          <li>Re-test the position whenever the Data (Use and Access) Act reforms and UK guidance change the transfer test.</li>
        </ol>

        <h2 id="dpdp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India&apos;s DPDP Act: what applies and when</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Date</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What starts</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["13 November 2025", "The Rules are notified; the Data Protection Board of India and procedural provisions begin"],
                ["13 November 2026", "Rules for consent managers, including registration requirements"],
                ["13 May 2027", "Main duties: notice and consent, security, retention, breach notification, children's data, rights of data principals, cross-border rules, and the Board's full penalty powers"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Notice and consent:</strong> clear, itemised notice and a way to withdraw consent. Employment has some legitimate-use grounds.</li>
          <li><strong>Security:</strong> reasonable safeguards such as encryption, access controls, logging and backups, and processor contract terms. Logs must be kept for a year.</li>
          <li><strong>Breaches:</strong> notify the Board and affected individuals without delay and report in detail within 72 hours.</li>
          <li><strong>Significant data fiduciaries:</strong> larger or riskier processors can be designated, with impact assessments, audits and possible localisation requirements.</li>
        </ul>

        <h2 id="exemption" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The processor exemption that helps captive centres</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Act exempts most notice and consent duties for processing personal data of people outside India
          under a contract with a foreign party. A captive centre handling UK customer data for its UK parent
          can often rely on this, but the exemption does not remove the duty to keep the data secure, and it
          does not cover the Indian company&apos;s own employee or Indian customer data. Do not assume it covers
          everything: document which data sets fall under it.
        </p>

        <h2 id="governance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting up governance in the Indian subsidiary</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Name a privacy lead in India who reports to the UK data protection officer or privacy team.</li>
          <li>Align the group&apos;s information-security standards with the Indian entity&apos;s controls, because the security duty applies under both laws.</li>
          <li>Include data protection in employee contracts and onboarding. See <Link href="/blog/uk-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">hiring in India</Link>.</li>
          <li>Treat data localisation as a live possibility for regulated sectors such as financial services, payments and telecoms.</li>
          <li>Review the position each year, because the Indian Rules phase in and UK law is still being updated.</li>
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
            { label: "ICO: international transfers under UK GDPR", href: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/" },
            { label: "Ministry of Electronics and Information Technology (India)", href: "https://www.meity.gov.in" },
            { label: "Mondaq: India's DPDP framework comes into effect", href: "https://www.mondaq.com/india/privacy-protection/1708314/update-indias-digital-personal-data-protection-framework-comes-into-effect" },
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
        title="Moving UK Personal Data to India?"
        description="Tell us what data your Indian team will handle — we'll map the UK GDPR transfer mechanism and the DPDP Act obligations."
      />
    </main>
  )
}
