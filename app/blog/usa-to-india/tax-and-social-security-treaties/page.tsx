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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties"
const PARENT_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "map", label: "What this guide covers" },
  { id: "two", label: "Two systems, two different answers" },
  { id: "path", label: "A practical path for a US company" },
  { id: "who", label: "Who this is for" },
  { id: "guides", label: "The guides in this series" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const relatedCards = [
  { title: "The India-US Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax", desc: "How the India-US tax treaty works: who qualifies, which taxes it covers, how treaty and domestic law interact, residency, relief from double tax and disputes.", href: "/blog/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide" },
  { title: "India-US DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Included Services", desc: "Treaty rates for payments from India to the US: dividends 15% or 25%, interest 10% or 15%, royalties and fees 10% or 15%. Conditions and how to apply them.", href: "/blog/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "How to Claim India-US Treaty Benefits: Form 6166, Form 41 and Beneficial Ownership", desc: "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.", href: "/blog/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "Tax Residency for US Expats in India: Residency Tests, Treaty Tie-Breaker and Double Tax Relief", desc: "Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion.", href: "/blog/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us" },
  { title: "Social Security for US Expats in India: Is There a US-India Totalization Agreement?", desc: "Is there a US-India social security agreement? What applies to a US expat in India: provident fund, US FICA, double coverage and planning.", href: "/blog/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india" },
  { title: "EPF for International Workers in India: What US Expats and Their Employers Must Know", desc: "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, withdrawal, court rulings and the 2026 EPF Scheme.", href: "/blog/usa-to-india/tax-and-social-security-treaties/epf-international-workers" },
  { title: "US Social Security and FICA for Americans Working in India: Who Pays and When", desc: "When Social Security and Medicare tax apply to Americans working in India: US employer, Indian subsidiary, Section 3121(l) agreements and self-employment.", href: "/blog/usa-to-india/tax-and-social-security-treaties/us-social-security-for-americans-in-india" },
]

const faqs = [
  { q: "Does India have a tax treaty with the United States?", a: "Yes. The India-US double taxation avoidance agreement (DTAA) covers income tax and can reduce Withholding Tax on dividends, interest, royalties and fees, and relieve double taxation." },
  { q: "Is there a social security agreement between India and the US?", a: "We are not aware of a US-India totalization agreement in force as of October 2026. Check the list of agreements on the US Social Security Administration website." },
  { q: "Does the tax treaty cover social security taxes?", a: "No. Article 2 of the India-US treaty excludes US social security taxes from the covered taxes." },
  { q: "Can a US expat pay social security in both India and the US?", a: "Yes, it is possible. Without a totalization agreement, Indian provident fund rules and US FICA or self-employment tax can both apply, depending on the structure." },
  { q: "Which Indian section gives effect to tax treaties now?", a: "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A of the 1961 Act). A treaty applies where it is more beneficial to the taxpayer." },
  { q: "Where should a US company start?", a: "With the payments to the parent: obtain the Tax Residency Certificate and Form 41 before the first remittance. Then plan expat employment and social security." },
  { q: "Do these rules change often?", a: "Yes. Rates, forms and provident fund rules change, and the Income-tax Act, 2025 has renamed many sections and forms. Confirm current rules before acting." },
  { q: "Who prepares US filings such as Form 5471 or FICA reporting?", a: "Your US CPA. AU Corporate provides the Indian financial data and handles the Indian side." },
  { q: "Are there more answers on this topic?", a: "Yes. See the dedicated treaty and social security FAQ page, which answers 50 questions." },
  { q: "Does an Employer of Record change the social security answer?", a: "It changes who the legal employer is, which affects both Indian provident fund and the US FICA analysis. Test it before choosing the model." },
]

const relatedCards2 = [
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/blog/usa-to-india/dtaa-pe-risk" },
  { title: "Repatriating Profits to the US: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/usa-to-india/repatriating-profits" },
  { title: "Sending a US Executive to India: Visa, Housing, Banking and Tax", desc: "How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.", href: "/blog/usa-to-india/expat-visa" },
  { title: "US Parent Obligations When You Own an Indian Subsidiary", desc: "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.", href: "/blog/usa-to-india/us-parent-obligations" },
]

export default function TaxAndSocialSecurityTreatiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="India-US Tax Treaty and Social Security: The Complete Guide for US Companies and Expats"
        description="The India-US tax treaty (DTAA) and social security for US expats: treaty rates, residency, EPF, FICA and the missing totalization agreement."
        datePublished="2026-10-14"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Tax and Social Security Treaties" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: tax and social security"
        title="India-US Tax Treaty and Social Security: The Complete Guide for US Companies and Expats"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          India and the US have a tax treaty (DTAA) that can cut Withholding Tax on dividends, interest,
          royalties and fees paid to a US parent and relieve double tax on expats. They do not, as far as we
          know, have a social security (totalization) agreement, so a US expat in India can owe contributions to
          both countries. Plan the two separately: the treaty is a claim you file; social security is a
          structure you choose.
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
                ["Tax treaty", "Convention between India and the United States for the avoidance of double taxation; applies to income tax, not social security taxes (Article 2)"],
                ["Indian law behind it", "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A of the 1961 Act): treaty applies where more beneficial"],
                ["Social security agreement", "No US-India totalization agreement known to be in force; check the SSA list"],
                ["Indian side for expats", "Provident fund (EPF) rules for international workers; no contribution ceiling unless excluded"],
                ["US side for expats", "FICA or self-employment tax can continue depending on who employs the person"],
                ["Who should read this", "US finance and HR teams paying an Indian subsidiary, or sending staff to India"],
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
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">How does the India-US tax treaty work?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide" className="text-blue-800 font-semibold hover:underline">India-US tax treaty (DTAA) explained</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">What Withholding Tax rate applies to payments to the US?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" className="text-blue-800 font-semibold hover:underline">Treaty withholding rates</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">What documents do we need to claim treaty rates?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents" className="text-blue-800 font-semibold hover:underline">Claiming treaty benefits: Form 6166 and Form 41</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Which country taxes our expat and how is double tax relieved?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us" className="text-blue-800 font-semibold hover:underline">Tax residency for US expats in India</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Is there a social security agreement between the US and India?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india" className="text-blue-800 font-semibold hover:underline">Social security for US expats in India</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Does an expat have to contribute to Indian provident fund?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/usa-to-india/tax-and-social-security-treaties/epf-international-workers" className="text-blue-800 font-semibold hover:underline">EPF for international workers</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Does US Social Security tax still apply to an American in India?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/usa-to-india/tax-and-social-security-treaties/us-social-security-for-americans-in-india" className="text-blue-800 font-semibold hover:underline">US Social Security (FICA) for Americans in India</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Where are the quick answers?</th>
                  <td className="border border-gray-300 p-3"><Link href="/blog/usa-to-india/tax-and-social-security-treaties/faq" className="text-blue-800 font-semibold hover:underline">Treaty and social security FAQs</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="two" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Two systems, two different answers</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A tax treaty and a social security agreement are separate instruments. The India-US tax treaty exists
          and is widely used. It does not cover social security taxes. A social security (totalization)
          agreement would stop a worker paying into two countries for the same job, and the US has such
          agreements with many countries. We are not aware of one with India in force, so each country&apos;s
          rules apply on their own terms.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          As of October 2026 we are not aware of a US-India totalization agreement in force. Check the list on
          the US Social Security Administration website before relying on this.
        </div>

        <h2 id="path" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A practical path for a US company</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Payments to the parent.</strong> Collect the US Tax Residency Certificate and Form 41 (previously Form 10F) before the first dividend, fee or royalty. See <Link href="/blog/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents" className="text-blue-800 font-semibold hover:underline">claiming treaty benefits</Link>.</li>
          <li><strong>Rates.</strong> Confirm the treaty rate for each payment type before remitting. See <Link href="/blog/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" className="text-blue-800 font-semibold hover:underline">withholding rates</Link>.</li>
          <li><strong>People.</strong> For each expat, decide who employs them: the US parent, the Indian subsidiary or an Employer of Record. That choice drives both income tax and social security.</li>
          <li><strong>Social security.</strong> Test Indian provident fund exposure and the US FICA position together, and document the decision.</li>
          <li><strong>Permanent establishment.</strong> Review whether expats or local staff create a taxable presence for the parent. See <Link href="/blog/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">treaty and PE risk</Link>.</li>
        </ol>

        <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who this is for</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>US companies with an Indian subsidiary that pay dividends, service fees, royalties or interest back to the US.</li>
          <li>HR and finance teams seconding or hiring US citizens and green card holders in India.</li>
          <li>US founders relocating to India to run the subsidiary.</li>
        </ul>

        <h2 id="guides" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The guides in this series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Treat treaty paperwork and expat structuring as two workstreams with two owners. The first sits with finance, the second with HR and tax together.</li>
          <li>Ask your US CPA to confirm the US side of every point here. US tax and Social Security are outside AU Corporate&apos;s practice.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming the tax treaty also covers social security.</li>
          <li>Remitting to the parent before treaty documents are in place.</li>
          <li>Moving an expat onto Indian payroll without testing provident fund and FICA first.</li>
          <li>Treating rates quoted on the internet as final without checking the payment type and the tax year.</li>
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
          the{" "}
          <a href="https://www.irs.gov" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service</a>,
          the{" "}
          <a href="https://www.ssa.gov/international/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">US Social Security Administration</a>{" "}
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
          seeAllHref="/blog/usa-to-india/tax-and-social-security-treaties/faq"
          seeAllLabel="Treaty and social security FAQs"
          seeAllDescription="50 plain answers on the India-US tax treaty, withholding rates, expat tax and social security."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards2} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department: tax treaties", href: "https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" },
            { label: "Internal Revenue Service: tax treaties A to Z", href: "https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z" },
            { label: "US Social Security Administration: international programs", href: "https://www.ssa.gov/international/" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 14 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Need Treaty or Social Security Advice for US Staff?"
        description="Tell us about the payments to your US parent and any US staff in India — we'll map the treaty rates, residency position and social security for your case."
      />
    </main>
  )
}
