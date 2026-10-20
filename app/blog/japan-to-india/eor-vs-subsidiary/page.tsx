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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/eor-vs-subsidiary"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "compare", label: "EOR and subsidiary side by side" },
  { id: "how", label: "How an EOR works" },
  { id: "eor-when", label: "When an EOR is the right choice" },
  { id: "sub-when", label: "When a subsidiary is the better choice" },
  { id: "convert", label: "Moving from an EOR to your own subsidiary" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How quickly can a Japanese company hire through an EOR?", a: "Usually within weeks, because no company needs to be incorporated first. The timing depends on the EOR's onboarding and the candidate's notice period with their current employer." },
  { q: "Can an EOR team be converted into a subsidiary?", a: "Yes. Employees agree to move to the new company, service history is carried over and payroll is switched on an agreed date. Planning the transfer avoids gaps in employment and benefits." },
  { q: "Does an EOR remove tax risk for the Japanese company?", a: "An Employer of Record does not remove tax risk for the Japanese company. An EOR handles employment compliance, but a permanent establishment can still arise if staff in India conclude contracts or act as the company's fixed place of business." },
  { q: "Is an EOR cheaper than a subsidiary?", a: "An EOR is usually cheaper than a subsidiary for a small team and a short period. As headcount grows, an own subsidiary can be cheaper, so both should be compared against the hiring plan." },
  { q: "What is an Employer of Record and how does it work?", a: "An EOR is the legal employer of your India team. It issues the employment contracts, runs payroll, pays statutory dues and handles compliance, while you direct the day-to-day work. You pay a service fee on top of the employee cost." },
  { q: "Can EOR employees move into the subsidiary later?", a: "EOR employees can move into the subsidiary later with planning. Employees must agree to the transfer, their service history and benefits such as gratuity and provident fund should carry over, and contracts and notice periods need to be handled, with timing planned so that there is no gap in employment." },
  { q: "Can a liaison office earn revenue?", a: "A liaison office cannot earn revenue. It can only represent the parent and coordinate with Indian parties, cannot undertake commercial activity or earn income, and its costs are met by remittances from abroad." },
  { q: "Can a branch office be converted into a subsidiary later?", a: "A business can be moved into a new Indian subsidiary, usually by transferring the activity and assets to the new company. The tax, FEMA and contract consequences should be planned in advance." },
]

const relatedCards = [
  { title: "Hiring and Payroll in India for Japanese Companies: Contracts, PF, ESI and Gratuity", desc: "How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.", href: "/blog/japan-to-india/hiring-and-payroll" },
  { title: "Incorporation Process for a Japanese-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from Japan: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/japan-to-india/incorporation-process" },
  { title: "Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for a Japanese Company in India?", desc: "Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control.", href: "/blog/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "The India-Japan Tax Treaty and Permanent Establishment Risk for Japanese Companies", desc: "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.", href: "/blog/japan-to-india/dtaa-pe-risk" },
  { title: "The Japan-India Social Security Agreement: Detached Workers, Certificate of Coverage and Totalization", desc: "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" },
]

export default function EorVsSubsidiaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Employer of Record vs. Subsidiary in India: When to Use Each"
        description="Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Japanese companies."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "EOR vs Subsidiary in India: Right for a Japanese Company?" },
        ]}
      />

      <GuideHero
        eyebrow="Launch: EOR or entity"
        title="Employer of Record vs. Subsidiary in India: When to Use Each"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Employer of Record (EOR) legally employs your team in India on your behalf, so you can hire within
          weeks without an entity. A subsidiary gives you direct control, a local contracting and banking
          vehicle and a base for long-term growth. Many Japanese companies start with an EOR to test the market
          and convert to a subsidiary once the team or investment grows.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="eor-vs-subsidiary" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["EOR", "The provider is the legal employer; you direct the work; you pay employee cost plus a service fee"],
                ["Subsidiary", "Your own Indian company; you are the employer; incorporation typically takes 4 to 6 weeks from complete documents"],
                ["Contracting with Indian customers", "Possible through a subsidiary; not through an EOR"],
                ["Compliance", "EOR handles payroll and employment filings; a subsidiary carries full company, tax and payroll compliance"],
                ["Tax presence in India", "An EOR does not by itself remove permanent establishment risk for the Japanese company"],
                ["Typical path", "Start with an EOR, convert to a subsidiary as the team and investment grow"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">EOR and subsidiary side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Employer of Record</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Wholly owned subsidiary</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Time to first hire", "Weeks", "After incorporation (4 to 6 weeks from complete documents), the bank account and payroll registrations"],
                ["Legal employer", "The EOR", "Your Indian company"],
                ["Payroll and statutory filings", "Handled by the EOR", "Handled by the company, usually with an adviser"],
                ["Customer contracts, assets and IP in India", "Not held by the EOR for you", "Held by the subsidiary"],
                ["Control over HR policy", "Shared with the EOR's standard terms", "Full"],
                ["Setup effort", "Low", "Incorporation, FEMA reporting and ongoing company compliance"],
                ["Best for", "A small team, a trial period, speed", "A larger team, long-term operations, direct contracting"],
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

        <h2 id="how" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How an EOR works</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>You choose the candidate and agree the role and pay.</li>
          <li>The EOR issues an Indian employment contract and becomes the employer on record.</li>
          <li>The EOR runs payroll, deducts Withholding Tax on salary, pays provident fund and other statutory dues and files the returns.</li>
          <li>You manage the employee&apos;s day-to-day work and pay the EOR the employee cost plus a service fee.</li>
        </ol>

        <h2 id="eor-when" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When an EOR is the right choice</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>You want to start hiring within weeks, before an entity exists.</li>
          <li>You are testing the market with a handful of hires.</li>
          <li>You do not yet need to sign customer contracts or hold assets in India.</li>
          <li>You want to defer incorporation until the business case is clear.</li>
        </ul>

        <h2 id="sub-when" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When a subsidiary is the better choice</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>You plan a larger team or a development center.</li>
          <li>You need to invoice Indian customers, hold assets or own IP locally.</li>
          <li>You want direct control over employment terms, benefits and culture.</li>
          <li>The service fee on a growing headcount makes your own entity cheaper to run.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          There is no fixed headcount at which a subsidiary wins. It depends on salaries, growth plans and how
          much compliance you want to carry. We can compare the two options for your plan.
        </p>

        <h2 id="convert" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Moving from an EOR to your own subsidiary</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Incorporate the subsidiary and complete the registrations for provident fund, ESI and professional tax.</li>
          <li>Agree the transfer with each employee, including offer letters on equivalent terms.</li>
          <li>Carry over service history so that benefits such as gratuity are protected.</li>
          <li>Handle notice periods, provident fund transfers and final settlements with the EOR.</li>
          <li>Switch payroll to the subsidiary on a clean month-start date.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          Plan the timing so there is no gap in employment. A good EOR contract states the conversion terms and
          any fee at the start.
        </p>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>An EOR is a way to employ people, not a way to avoid a taxable presence. If staff in India negotiate or conclude contracts for the Japanese company, or work from a fixed place for it, the Japanese company can be treated as having a permanent establishment. See <Link href="/blog/japan-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">tax treaty and PE risk</Link>.</li>
          <li>Make sure your EOR agreement covers IP assignment to your company, confidentiality, data protection and what happens on conversion.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Staying on an EOR long after the team has grown, paying fees that exceed the cost of your own entity.</li>
          <li>Treating EOR staff as contractors of the Japanese company, which blurs who the employer is.</li>
          <li>Letting EOR staff sign customer contracts without a permanent establishment review.</li>
          <li>Not agreeing IP assignment and conversion terms in the EOR contract.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See also: Expats on an EOR:{" "}
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" className="text-blue-800 font-semibold hover:underline">social security for Japanese expats in India</Link>.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We provide Employer of Record and HR services and can convert your EOR team into your own subsidiary.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>{" "}
          ·{" "}
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
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/japan-to-india/faq"
          seeAllLabel="See all 216 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 20 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="EOR or a Subsidiary for Your First Hires?"
        description="Tell us your planned headcount and timeline in India, and we'll compare cost, control and compliance for a Japanese parent."
      />
    </main>
  )
}
