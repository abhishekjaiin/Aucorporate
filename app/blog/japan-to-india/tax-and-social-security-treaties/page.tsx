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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india"

const toc = [
  { id: "map", label: "What this guide covers" },
  { id: "two", label: "Two instruments, two sets of conditions" },
  { id: "path", label: "A practical path for a Japanese company" },
  { id: "who", label: "Who this is for" },
  { id: "guides", label: "The guides in this series" },
  { id: "japanese-parent", label: "What this means for a Japanese parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const relatedCards = [
  { title: "The India-Japan Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax", desc: "How the India-Japan tax treaty works: who qualifies, taxes covered, treaty versus domestic law, residency, relief from double tax and disputes.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" },
  { title: "India-Japan DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Technical Services", desc: "Treaty rates for payments from India to Japan: 10% on dividends, interest, royalties and fees for technical services, against 20% domestic rates.", href: "/blog/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "How to Claim India-Japan Treaty Benefits: Certificate of Residence, Form 41 and Beneficial Ownership", desc: "Documents a Japanese company needs to claim India-Japan treaty rates: certificate of residence, Form 41 (previously Form 10F) and no-PE declaration.", href: "/blog/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "Tax Residency for Japanese Expats in India: Residency Tests, Treaty Rules and Double Tax Relief", desc: "Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit.", href: "/blog/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan" },
  { title: "The Japan-India Social Security Agreement: Detached Workers, Certificate of Coverage and Totalization", desc: "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" },
  { title: "EPF for International Workers in India: What Japanese Expats and Their Employers Must Know", desc: "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme.", href: "/blog/japan-to-india/tax-and-social-security-treaties/epf-international-workers" },
  { title: "Japanese Social Insurance for Employees Sent to India: Pension, Health and Employment Insurance", desc: "What happens to Japanese pension, health and employment insurance when an employee is sent to India: the Certificate of Coverage and who pays what.", href: "/blog/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india" },
]

const faqs = [
  { q: "Does India have a tax treaty with Japan?", a: "Yes. The India-Japan double taxation avoidance agreement (DTAA) covers income tax and caps Indian Withholding Tax at 10% on dividends, interest, royalties and fees for technical services." },
  { q: "Is there a social security agreement between India and Japan?", a: "Yes. The Agreement between Japan and India on Social Security has been in force since 1 October 2016. It covers pension systems and allows detached workers to stay in their home system." },
  { q: "Does the tax treaty cover social security contributions?", a: "No. The treaty covers income taxes. Social security contributions are handled by the separate social security agreement." },
  { q: "Can a Japanese expat avoid Indian provident fund?", a: "Yes, if the person is a detached worker covered by the Japan-India agreement and holds a valid Certificate of Coverage. Without it, the Indian international worker rules can apply." },
  { q: "How long can a Japanese employee stay in the Japanese pension system while in India?", a: "The initial detachment period is five years. Longer periods are possible if the institutions of both countries agree." },
  { q: "Does the agreement cover Japanese health insurance?", a: "No. It covers pensions. Health insurance is outside the agreement, so confirm the position separately." },
  { q: "Which Indian section gives effect to tax treaties now?", a: "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A of the 1961 Act). A treaty applies where it is more beneficial to the taxpayer." },
  { q: "Where should a Japanese company start?", a: "With the payments to the parent: obtain the Japanese certificate of residence and Form 41 before the first remittance. Then plan expat employment and the Certificate of Coverage." },
  { q: "Do these rules change often?", a: "Yes. Rates, forms and provident fund rules change, and the Income-tax Act, 2025 has renamed many sections and forms. Confirm current rules before acting." },
  { q: "Are there more answers on this topic?", a: "Yes. See the dedicated treaty and social security FAQ page, which answers 50 questions." },
]

const relatedCards2 = [
  { title: "The India-Japan Tax Treaty and Permanent Establishment Risk for Japanese Companies", desc: "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent establishment risk.", href: "/blog/japan-to-india/dtaa-pe-risk" },
  { title: "Repatriating Profits to Japan: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a Japanese parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/japan-to-india/repatriating-profits" },
  { title: "Sending a Japanese Executive to India: Visa, Housing, Banking and Tax", desc: "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.", href: "/blog/japan-to-india/expat-visa" },
  { title: "Japanese Parent Obligations When You Own an Indian Subsidiary", desc: "Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting.", href: "/blog/japan-to-india/japan-parent-obligations" },
]

export default function TaxAndSocialSecurityTreatiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="India-Japan Tax Treaty and Social Security Agreement: The Complete Guide for Japanese Companies and Expats"
        description="The India-Japan tax treaty (DTAA) and Social Security Agreement for Japanese companies and expats: 10% treaty rates, residency, EPF and pensions."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "Tax and Social Security Treaties" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: tax and social security"
        title="India-Japan Tax Treaty and Social Security Agreement: The Complete Guide for Japanese Companies and Expats"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          India and Japan have both a tax treaty (DTAA) and a social security agreement. The treaty caps Indian
          Withholding Tax at 10% on dividends, interest, royalties and fees for technical services paid to a
          Japanese parent, and relieves double tax on expats. The social security agreement lets a Japanese
          employee sent to India stay in the Japanese pension system for an initial five years and avoid Indian
          provident fund contributions, if the right certificate is in place.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Tax treaty", "Convention between India and Japan for the avoidance of double taxation; covers income taxes, not social security contributions"],
                ["Treaty rate caps", "10% on dividends, interest, and royalties and fees for technical services (Articles 10, 11 and 12)"],
                ["Indian law behind it", "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A of the 1961 Act): treaty applies where more beneficial"],
                ["Social security agreement", "Agreement between Japan and India on Social Security, in force since 1 October 2016; covers pensions (Japan: National Pension and Employees' Pension Insurance; India: EPS and EPF)"],
                ["Detached worker period", "Initially five years, with extensions possible by agreement of both countries' institutions"],
                ["Proof needed", "Japanese certificate of residence (tax) and a Certificate of Coverage (social security)"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="map" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this guide covers</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Question</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Guide</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">How does the India-Japan tax treaty work?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" className="text-blue-800 font-semibold hover:underline">India-Japan tax treaty (DTAA) explained</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">What Withholding Tax rate applies to payments to Japan?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" className="text-blue-800 font-semibold hover:underline">Treaty withholding rates</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">What documents do we need to claim treaty rates?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" className="text-blue-800 font-semibold hover:underline">Claiming treaty benefits: certificate of residence and Form 41</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Which country taxes our expat and how is double tax relieved?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan" className="text-blue-800 font-semibold hover:underline">Tax residency for Japanese expats in India</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">How does the Japan-India social security agreement work?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" className="text-blue-800 font-semibold hover:underline">Japan-India Social Security Agreement</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Does a Japanese expat have to contribute to Indian provident fund?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/japan-to-india/tax-and-social-security-treaties/epf-international-workers" className="text-blue-800 font-semibold hover:underline">EPF for international workers</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">What happens to Japanese social insurance when someone is sent to India?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india" className="text-blue-800 font-semibold hover:underline">Japanese social insurance for expats in India</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Where are the quick answers?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/japan-to-india/tax-and-social-security-treaties/faq" className="text-blue-800 font-semibold hover:underline">Treaty and social security FAQs</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="two" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Two instruments, two sets of conditions</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The tax treaty and the social security agreement are separate. The tax treaty reduces income tax at
          source and relieves double taxation. The social security agreement covers pension contributions and
          benefits only. Neither replaces the other, and each has its own paperwork: a certificate of residence
          from the Japanese tax office for the treaty, and a Certificate of Coverage for the social security
          agreement.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          The social security agreement covers pension systems. Japanese health insurance, and the Indian ESI
          scheme, are outside it. Confirm the position for each benefit before an assignment.
        </div>

        <h2 id="path" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A practical path for a Japanese company</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Payments to the parent.</strong> Obtain the Japanese certificate of residence and prepare Form 41 (previously Form 10F) before the first dividend, fee or royalty. See <Link href="/blog/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" className="text-blue-800 font-semibold hover:underline">claiming treaty benefits</Link>.</li>
          <li><strong>Rates.</strong> Confirm the 10% treaty rate and the category of each payment before remitting. See <Link href="/blog/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" className="text-blue-800 font-semibold hover:underline">withholding rates</Link>.</li>
          <li><strong>People.</strong> Decide who employs each expat. A secondment that keeps the employment relationship with the Japanese parent is what the detached worker rule is built for.</li>
          <li><strong>Social security.</strong> Apply for the Certificate of Coverage before departure and give a copy to the Indian payroll. See <Link href="/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" className="text-blue-800 font-semibold hover:underline">the agreement</Link>.</li>
          <li><strong>Permanent establishment.</strong> Review whether expats or local staff create a taxable presence for the parent. See <Link href="/blog/japan-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">treaty and PE risk</Link>.</li>
        </ol>

        <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who this is for</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Japanese companies with an Indian subsidiary that pay dividends, service fees, royalties or interest back to Japan.</li>
          <li>HR and finance teams sending Japanese employees to India on assignment (haken or shukko).</li>
          <li>Japanese founders and managers relocating to India to run the subsidiary.</li>
        </ul>

        <h2 id="guides" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The guides in this series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="japanese-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Treat treaty paperwork and expat structuring as two workstreams with two owners. The first sits with finance, the second with HR and tax together.</li>
          <li>Ask your Japanese tax adviser (zeirishi) to confirm the Japanese side of every point here. Japanese tax and social insurance are outside AU Corporate&apos;s practice.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Sending an expat without a Certificate of Coverage and then discovering Indian provident fund applies.</li>
          <li>Remitting to the parent before treaty documents are in place.</li>
          <li>Assuming the agreement covers health insurance.</li>
          <li>Moving the employee onto the Indian subsidiary&apos;s payroll and losing the detached worker position.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We handle Withholding Tax and treaty claims on remittances, and we structure and run expat payroll,
          provident fund and tax filings in India.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/services/taxation-regulatory" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>{" "}
          ·{" "}
          <Link href="/hr-services" className="text-blue-800 font-semibold hover:underline">HR and payroll</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
          <a href="https://www.incometax.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>,
          Japan&apos;s{" "}
          <a href="https://www.nta.go.jp/english/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">National Tax Agency</a>,
          the{" "}
          <a href="https://www.nenkin.go.jp/international/agreement/noteseach/notesindia.html" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Japan Pension Service</a>{" "}
          and the{" "}
          <a href="https://www.epfindia.gov.in" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Employees&apos; Provident Fund Organisation</a>.
        </p>

        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/japan-to-india/tax-and-social-security-treaties/faq"
          seeAllLabel="Treaty and social security FAQs"
          seeAllDescription="50 plain answers on the India-Japan tax treaty, withholding rates, expat tax and the social security agreement."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards2} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department: tax treaties", href: "https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" },
            { label: "National Tax Agency of Japan", href: "https://www.nta.go.jp/english/" },
            { label: "Japan Pension Service: Japan-India Social Security Agreement", href: "https://www.nenkin.go.jp/international/agreement/noteseach/notesindia.html" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
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
        title="Treaty or Social Security Questions for Japanese Staff?"
        description="Tell us about payments to Japan and any Japanese staff in India, and we'll map the treaty rates, residency and social security position."
      />
    </main>
  )
}
