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

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/funding-fema-fc-gpr"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "steps", label: "How capital goes in, step by step" },
  { id: "instruments", label: "Choosing the instrument" },
  { id: "fcgpr", label: "Form FC-GPR and the FIRMS portal" },
  { id: "sizing", label: "How much to invest" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is Form FC-GPR?", a: "The report an Indian company files with the RBI after issuing shares to a foreign investor, within 30 days of the allotment, through the FIRMS portal." },
  { q: "Is there a minimum capital?", a: "No statutory minimum applies to a private limited company. The amount depends on your plan and the bank's expectations." },
  { q: "Can the parent lend money instead?", a: "Yes, under the ECB framework, which sets conditions on the lender, maturity, interest and use of funds." },
  { q: "What if shares are not allotted within 60 days?", a: "The money must be refunded to the investor within the prescribed period, unless approval to retain it is obtained." },
  { q: "What is Form FC-GPR and when is it due?", a: "Form FC-GPR is the report an Indian company files with the RBI after issuing shares to a foreign investor. It must be filed within 30 days of the share allotment through the RBI's FIRMS portal, with supporting valuation and Company Secretary certificates. Late filing attracts a Late Submission Fee or compounding." },
  { q: "How much capital should the US parent put in?", a: "A US parent should put in enough capital to cover the first year's expenses and set-up costs, with room for growth. Too little strains working capital, and funding mostly by loan can raise transfer pricing and interest-cost issues. The amount should be sized against the business plan." },
  { q: "How can the US parent fund the Indian subsidiary?", a: "A US parent can fund an Indian subsidiary through equity shares, compulsorily convertible preference shares or debentures, or an external commercial borrowing (a loan). Equity is the most common because it is simple to report and carries no repayment obligation. Each route has its own pricing, tax and reporting rules." },
  { q: "What is the 60-day rule for allotting shares?", a: "The company must allot shares within 60 days of receiving the foreign investment. If it does not, the money must be refunded to the investor within the prescribed period unless approval to retain it is obtained. So allot promptly after the funds arrive." },
  { q: "What happens right after the Certificate of Incorporation?", a: "You open the bank account, transfer the funds for share capital, allot shares, file FC-GPR with the RBI, and complete the commencement and registration steps." },
  { q: "What are the steps to incorporate an Indian subsidiary?", a: "Incorporating an Indian subsidiary takes eight steps: confirm FDI eligibility, prepare apostilled US documents, obtain digital signatures, file SPICe+ with the MCA, open the bank account, transfer the funds for share capital, allot shares and report to the RBI, then begin operations." },
  { q: "What is the Late Submission Fee for FC-GPR?", a: "The Late Submission Fee for a late FC-GPR is ₹7,500 plus 0.025% of the amount involved for each year of delay, and the facility is available for up to three years from the due date. Cases outside this route need compounding with the RBI under FEMA." },
  { q: "What are the FEMA deadlines for share capital received from a US parent?", a: "A US parent's investment should be reported on the FIRMS portal within 30 days of receipt, shares must be allotted within 60 days of receipt or the money refunded within a further 15 days, and Form FC-GPR is filed within 30 days of allotment. Share transfers between a resident and a non-resident are reported in Form FC-TRS within 60 days." },
]

const relatedCards = [
  { title: "Share Valuation for Foreign Investment: Pricing Rules and Certificates", desc: "Why shares issued to a US parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.", href: "/blog/usa-to-india/share-valuation" },
  { title: "Repatriating Profits to the US: Dividends, Fees, Royalties, Loans and the Paperwork", desc: "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.", href: "/blog/usa-to-india/repatriating-profits" },
  { title: "Incorporation Process for a US-Owned Indian Subsidiary, Step by Step", desc: "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.", href: "/blog/usa-to-india/incorporation-process" },
  { title: "Compliance Calendar for an Indian Subsidiary: What Is Due and When", desc: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.", href: "/blog/usa-to-india/compliance-calendar" },
]

export default function FundingFemaFcGprPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR"
        description="How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
        ]}
      />

      <GuideHero
        eyebrow="Fund: capital infusion"
        title="Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US parent funds its Indian subsidiary mainly by subscribing to equity shares, or by compulsorily
          convertible instruments or an external commercial borrowing. Shares must be allotted within 60 days of
          receiving the funds, priced at no less than fair value, and reported to the RBI through Form FC-GPR
          within 30 days of allotment.
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
                ["Common instruments", "Equity shares, compulsorily convertible preference shares (CCPS), compulsorily convertible debentures (CCD)"],
                ["Loans", "External commercial borrowing (ECB) with conditions on lender, maturity, cost and end use"],
                ["Allotment deadline", "Within 60 days of receiving the funds"],
                ["Pricing", "Not below fair value, certified by a Chartered Accountant or SEBI-registered merchant banker; the valuation certificate should not be more than 90 days old"],
                ["Deadlines", "Allot shares within 60 days of receiving the funds (otherwise refund within a further 15 days); report the advance receipt on the FIRMS portal within 30 days of receipt; file FC-GPR within 30 days of allotment"],
                ["Late filing", "Late Submission Fee of ₹7,500 plus 0.025% of the amount involved per year of delay, available for up to three years from the due date; other cases need compounding with the RBI"],
                ["Annual return", "FLA return on the RBI portal by 15 July each year"],
                ["RBI report", "Form FC-GPR within 30 days of allotment, filed on FIRMS"],
                ["Annual return", "FLA return by 15 July"],
                ["Basis", "FEMA, 1999 and the Non-Debt Instruments Rules, 2019"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How capital goes in, step by step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The company is incorporated and the bank account is open.</li>
          <li>The parent transfers the subscription money by inward remittance through the authorized dealer
            bank. The bank issues the foreign inward remittance certificate.
          </li>
          <li>The board approves the allotment at a price supported by a valuation certificate.</li>
          <li>The company allots the shares within 60 days of receiving the funds. If it does not, the money must
            be refunded.
          </li>
          <li>The company files a return of allotment with the Registrar and Form FC-GPR with the RBI within 30
            days of allotment.
          </li>
        </ol>

        <h2 id="instruments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the instrument</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Instrument</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Used for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to note</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Equity shares", "Standard funding of a wholly owned subsidiary", "Simplest to report; no repayment obligation"],
                ["CCPS or CCD", "Staged funding or investor rights", "Must convert into equity; conversion price or formula fixed upfront"],
                ["External commercial borrowing (ECB)", "Loan from the parent", "Eligible lender, minimum maturity, interest ceiling and end-use conditions; registered with the RBI; interest attracts Withholding Tax and transfer pricing review"],
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

        <h2 id="fcgpr" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Form FC-GPR and the FIRMS portal</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Form FC-GPR is the report of an issue of shares to a foreign investor. It is filed by the Indian company
          on the RBI&apos;s FIRMS portal through the Single Master Form, with supporting certificates from a
          Company Secretary and a valuation certificate from an eligible professional, and with the details of the
          remittance from the bank. Late filing attracts a Late Submission Fee or compounding.
        </p>

        <h2 id="sizing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How much to invest</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          There is no statutory minimum capital for a private limited company. Size the investment to the first
          year&apos;s expenses and set-up costs, with room for growth. Funding mostly by loan raises interest,
          Withholding Tax and transfer pricing questions, so many groups fund the entity mainly through equity.
        </p>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
          <li>Treasury should send funds only after the bank account is open and the allotment plan is agreed.
            Keep the remittance advice, valuation certificate and board approvals together so the RBI filing can be
            completed on time.
          </li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Missing the 60-day allotment window, which forces a refund of the investment.</li>
          <li>Filing FC-GPR late or with mismatched details from the bank.</li>
          <li>Issuing shares without a valuation certificate or below fair value.</li>
          <li>Sending money before the company exists or the account is open.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          We handle the valuation, the allotment documents and the FC-GPR filing.
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
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
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

      <GuideLeadForm
        title="Funding Your Indian Subsidiary?"
        description="Tell us your planned investment amount and structure — we'll map the FC-GPR filing and FEMA reporting timeline."
      />
    </main>
  )
}
