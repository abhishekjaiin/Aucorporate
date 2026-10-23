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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/data-protection-pdpa-dpdp"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "pdpa", label: "PDPA: sending data from Singapore to India" },
  { id: "dpdp", label: "India: the DPDP Act and Rules" },
  { id: "compare", label: "A comparison" },
  { id: "plan", label: "A build plan for one privacy programme" },
  { id: "sectors", label: "Sector rules on top" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Singapore company send personal data to its Indian subsidiary?", a: "Yes, if it complies with the PDPA's Transfer Limitation Obligation, usually through a contract giving comparable protection." },
  { q: "When do India's DPDP duties start?", a: "The Rules were notified on 13 November 2025 and the main duties take effect on 13 May 2027." },
  { q: "What is the PDPA penalty?", a: "Up to SGD 1 million or 10% of annual turnover in Singapore for larger organisations, whichever is higher." },
  { q: "What is the DPDP penalty?", a: "Up to INR 250 crore for serious breaches such as failing to keep reasonable security safeguards." },
  { q: "Does India allow transfers of personal data to Singapore?", a: "Yes. The DPDP Act allows cross-border transfer except to countries the government restricts by notification." },
  { q: "Do I need a Data Protection Officer in both countries?", a: "Singapore requires one for organisations covered by the PDPA. India requires one for significant data fiduciaries, and appointing one early is good practice." },
  { q: "How quickly must a data breach be reported in Singapore?", a: "The PDPC expects notice within three calendar days after the organisation assesses that the breach is notifiable." },
]

const relatedCards = [
  { title: "Hiring in India as a Singapore Employer: What Changes from Singapore Practice", desc: "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice.", href: "/blog/singapore-to-india/hiring-in-india" },
  { title: "Setting Up a Global Capability Centre in India for a Singapore Group: Models, Pricing, Tax and Risk", desc: "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST on exports, PE risk, MAS third-party rules and talent.", href: "/blog/singapore-to-india/gcc-for-singapore-companies" },
  { title: "Contracts, Courts and Arbitration: Using Singapore as the Seat and Enforcing in India", desc: "How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India, stamping, interim relief and drafting points.", href: "/blog/singapore-to-india/contracts-courts-siac" },
  { title: "12 Common Mistakes Singapore Companies Make When Entering India, and How to Avoid Each", desc: "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE, FEMA clocks, stamping, data transfers and year-end gaps.", href: "/blog/singapore-to-india/common-mistakes" },
]

export default function DataProtectionPdpaDpdpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Moving Personal Data Between Singapore and India: PDPA Transfer Rules and the DPDP Act"
        description="How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation, contracts, breach notice, consent, penalties and a build plan."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "Data Protection for Singapore Companies in India: PDPA Transfers and India's DPDP Act" },
        ]}
      />

      <GuideHero
        eyebrow="Data: PDPA and DPDP"
        title="Moving Personal Data Between Singapore and India: PDPA Transfer Rules and the DPDP Act"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore company that sends personal data to its Indian subsidiary must satisfy the PDPA&apos;s
          Transfer Limitation Obligation, usually through a contract that gives the data comparable protection,
          and the Indian subsidiary must meet India&apos;s Digital Personal Data Protection Act as its duties
          take effect. The DPDP Rules were notified on 13 November 2025 and the main duties start on 13 May
          2027, so the practical plan is to build one privacy programme that meets both laws.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="data-protection" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Singapore law", "Personal Data Protection Act 2012, enforced by the PDPC"],
                ["Transfer rule", "Transfer Limitation Obligation: data sent outside Singapore must receive protection comparable to the PDPA, by contract, binding corporate rules, consent or another prescribed means"],
                ["Breach notice", "Notify the PDPC and affected people when a breach is notifiable; the PDPC expects notice within three calendar days of assessing it as notifiable"],
                ["Penalty (Singapore)", "Up to SGD 1 million or 10% of annual turnover in Singapore, whichever is higher, for larger organisations"],
                ["Indian law", "Digital Personal Data Protection Act, 2023; Rules notified 13 November 2025"],
                ["Indian timing", "Main duties from 13 May 2027, with earlier steps such as the Board and consent managers"],
                ["Indian penalty", "Up to INR 250 crore for serious failures such as security safeguards"],
                ["Cross-border", "DPDP permits transfer outside India except to countries the government restricts"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="pdpa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">PDPA: sending data from Singapore to India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Transfer Limitation Obligation says that an organisation may transfer personal data out of
          Singapore only if it takes appropriate steps to ensure the recipient provides a standard of protection
          comparable to the PDPA. In practice a Singapore company does this with an intra-group data transfer
          agreement, binding corporate rules for a larger group, or consent where it is properly given.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Contract:</strong> a data transfer agreement that mirrors PDPA protection obligations: purpose limits, security, retention, breach notice and onward transfer limits.</li>
          <li><strong>Accountability:</strong> the Singapore organisation remains responsible for data it holds, and for data processed for it by the Indian subsidiary as a data intermediary.</li>
          <li><strong>Data Protection Officer:</strong> appoint one and publish contact details.</li>
          <li><strong>Notification:</strong> a breach that is likely to cause significant harm, or affects a large number of people, is notifiable.</li>
        </ul>

        <h2 id="dpdp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India: the DPDP Act and Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Who is covered:</strong> processing of digital personal data within India, and outside India if connected to offering goods or services in India.</li>
          <li><strong>Notice and consent:</strong> clear notice and free, specific consent for most processing, with allowed &apos;legitimate uses&apos; such as employment purposes.</li>
          <li><strong>Data fiduciary duties:</strong> security safeguards, breach notice to the Data Protection Board and to affected people, erasure when the purpose ends.</li>
          <li><strong>Significant data fiduciaries:</strong> larger or riskier processors face extra duties, including an audit and an impact assessment.</li>
          <li><strong>Children&apos;s data:</strong> verifiable parental consent before processing a child&apos;s data.</li>
          <li><strong>Timeline:</strong> the Rules were notified on 13 November 2025 and the main obligations take effect on 13 May 2027.</li>
        </ul>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">PDPA (Singapore)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">DPDP Act (India)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Scope", "Personal data of individuals, with business contact exceptions", "Digital personal data and non-digital data that is digitised"],
                ["Grounds", "Consent, deemed consent, legitimate interests, business improvement", "Consent and listed legitimate uses"],
                ["Cross-border", "Transfer Limitation Obligation", "Allowed unless the destination is restricted by notification"],
                ["Breach notice", "PDPC and individuals, with timelines", "Board and individuals, under the Rules"],
                ["Officer", "Data Protection Officer required", "Data Protection Officer for significant fiduciaries"],
                ["Maximum penalty", "Up to SGD 1 million or 10% of Singapore turnover", "Up to INR 250 crore per breach category"],
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

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A build plan for one privacy programme</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Map what personal data moves between Singapore and India and why: employee, customer, supplier and marketing data.</li>
          <li>Sign an intra-group data transfer agreement that satisfies the PDPA and states the DPDP duties of the Indian entity.</li>
          <li>Choose a single breach response procedure with clocks that satisfy both regulators.</li>
          <li>Update notices and consent flows for Indian individuals before 13 May 2027.</li>
          <li>Set retention periods and a deletion routine that both laws accept.</li>
          <li>Train the Indian team and test the process with a tabletop breach exercise.</li>
        </ol>

        <h2 id="sectors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sector rules on top</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Banks, insurers and other financial institutions regulated by the MAS must also satisfy MAS
          third-party and technology risk expectations when an Indian group company processes their data, and
          Indian regulators have their own data-localisation rules for payments data. Check your sector rules
          before moving workloads.
        </p>

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
            { label: "Personal Data Protection Commission, Singapore", href: "https://www.pdpc.gov.sg/" },
            { label: "MeitY: Digital Personal Data Protection", href: "https://www.meity.gov.in/" },
            { label: "Monetary Authority of Singapore", href: "https://www.mas.gov.sg/" },
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
        title="Moving Personal Data Between Singapore and India?"
        description="Tell us what data flows where, and we'll map PDPA transfer rules, the DPDP Act and the contract terms you need."
      />
    </main>
  )
}
