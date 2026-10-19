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

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/incorporation-steps"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "plan", label: "The plan, week by week" },
  { id: "details", label: "What happens in each stage, and what the UK parent should expect" },
  { id: "first-90", label: "The first 90 days after incorporation" },
  { id: "cost", label: "Cost and how to avoid delay" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does it take to incorporate an Indian subsidiary from the UK?", a: "About 4 to 6 weeks from complete documents, mostly depending on name approval and the Registrar. The overall project to a working bank account, payroll and first filings usually takes around 12 weeks." },
  { q: "Do UK directors have to travel to India to incorporate?", a: "No. The incorporation runs online. Directors need Digital Signature Certificates and identity papers that are notarised and apostilled, but nobody has to travel." },
  { q: "How many directors and shareholders does an Indian private company need?", a: "At least two directors, one of whom must be resident in India, and at least two shareholders. In a wholly owned subsidiary the second shareholder is usually a nominee or group company." },
  { q: "How soon must shares be allotted after funds arrive from the UK?", a: "Within 60 days of receiving the money, otherwise the funds generally have to be refunded and a delay needs RBI approval. Form FC-GPR is due within 30 days of allotment." },
  { q: "What is INC-20A and when is it due?", a: "The declaration of commencement of business, filed within 180 days of incorporation by a company that has issued shares, confirming that subscribers have paid for them." },
  { q: "Does the UK parent need a registered office in India?", a: "The subsidiary does. The registered office is a physical address in India, and it can be a serviced office if the owner consents and the documents are in order." },
]

const relatedCards = [
  { title: "Documents a UK Parent Needs for an Indian Subsidiary: Companies House Papers, Notarisation and the Apostille", desc: "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes that cost weeks.", href: "/blog/uk-to-india/documents-companies-house-apostille" },
  { title: "Funding an Indian Subsidiary from the UK: Instruments, Pricing Floor, Valuation and RBI Reporting", desc: "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day allotment rule and Form FC-GPR.", href: "/blog/uk-to-india/funding-and-fema" },
  { title: "Choosing an Indian Structure as a UK Company: Subsidiary, Branch, Liaison Office, LLP or Employer of Record", desc: "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through an intermediate company.", href: "/blog/uk-to-india/structure-options" },
  { title: "The Compliance Calendar for a UK-Owned Indian Subsidiary, Month by Month, with the UK Parent's Dates Beside It", desc: "A month-by-month compliance calendar for an Indian subsidiary: GST, TDS, provident fund, advance tax, AGM, ROC and RBI filings, mapped against the UK parent's Companies House and HMRC dates.", href: "/blog/uk-to-india/compliance-calendar" },
]

export default function IncorporationStepsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Incorporating an Indian Subsidiary from the UK: A Week-by-Week Plan"
        description="A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "Incorporating an Indian Subsidiary from the UK: A 12-Week Plan" },
        ]}
      />

      <GuideHero
        eyebrow="Incorporation: UK parent"
        title="Incorporating an Indian Subsidiary from the UK: A Week-by-Week Plan"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UK parent can usually incorporate an Indian private limited company in 4 to 6 weeks once the
          apostilled documents are ready, and be fully operational within 12 weeks. The sequence is fixed:
          confirm the sector rules, legalise the UK papers, obtain digital signatures and DINs, reserve the name
          and file SPICe+, open the bank account, send the capital, allot shares within 60 days, and report to
          the RBI within 30 days of allotment.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Entity", "Private limited company under the Companies Act, 2013, wholly owned by the UK parent where the sector allows 100% FDI"],
                ["Minimum people", "Two directors (at least one resident in India, for 182 days or more in the year) and two shareholders; the second shareholder can be a UK nominee or another group company"],
                ["Main filing", "SPICe+ (integrated incorporation form) with the MoA, AoA and linked PAN, TAN and registrations"],
                ["Travel", "Not needed: the process runs online with apostilled documents and digital signatures"],
                ["RBI", "Shares allotted within 60 days of receiving funds; Form FC-GPR within 30 days of allotment"],
                ["Commencement", "Declaration of commencement (INC-20A) within 180 days of incorporation"],
                ["Typical timeline", "4 to 6 weeks to incorporate from complete documents; about 12 weeks to bank, payroll and first filings"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The plan, week by week</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Week</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Step</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Output</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0", "Confirm the sector against the FDI Policy; choose the structure and the Indian directors", "Parent and adviser", "Decision note and shareholder plan"],
                ["0 to 3", "Prepare, notarise and legalise the UK documents", "Parent", "Apostilled set"],
                ["1 to 2", "Apply for Digital Signature Certificates and Director Identification Numbers", "Directors and adviser", "DSCs and DINs"],
                ["2 to 3", "Propose the company name; draft the MoA and AoA; confirm the registered office", "Adviser", "Name approval and drafts"],
                ["3 to 4", "File SPICe+ with the linked applications", "Adviser", "Certificate of Incorporation with CIN, PAN, TAN"],
                ["4 to 5", "Open the bank account; pass the first board resolutions; appoint the first Auditor", "Directors", "Bank account and first minutes"],
                ["5 to 6", "Remit the share capital from the UK; allot shares within 60 days of receipt", "Parent and board", "Allotment and share certificates"],
                ["6 to 8", "File Form FC-GPR on the RBI portal with the valuation and a Company Secretary certificate; file INC-20A", "Adviser", "RBI acknowledgement; commencement filing"],
                ["8 to 12", "Register for GST, provident fund, ESI and professional tax where needed; set up payroll and books", "Adviser and HR", "Operational compliance"],
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

        <h2 id="details" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What happens in each stage, and what the UK parent should expect</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Pre-checks:</strong> a UK company can own up to 100% in most sectors under the Automatic Route. A few sectors have caps, conditions or need approval, so check before choosing a business description.</li>
          <li><strong>Directors:</strong> the Resident Director can be an Indian professional, a UK colleague who spends 182 days in India or an adviser-nominated director. See <Link href="/blog/uk-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link> for the trade-offs.</li>
          <li><strong>Name and filing:</strong> the name is approved on the MCA portal and the filing is made with a physical registered office address in India. A coworking space works if the owner gives consent and the utility proof is acceptable.</li>
          <li><strong>Beneficial ownership:</strong> the subsidiary must record and disclose significant beneficial owners of the parent. Have the parent&apos;s PSC register and ownership chart ready.</li>
          <li><strong>Bank account:</strong> the bank will ask for the UK parent&apos;s documents, ultimate owner details and the board resolution, and often for a call with a UK director.</li>
          <li><strong>Capital:</strong> send funds from the parent&apos;s UK bank account only, in sterling or another permitted currency, with the right purpose code on the remittance.</li>
        </ul>

        <h2 id="first-90" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The first 90 days after incorporation</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Appoint the first Auditor within 30 days of incorporation and file the notice.</li>
          <li>File INC-20A within 180 days and before starting business.</li>
          <li>Complete the FC-GPR filing on time. Late filing needs a late submission fee or compounding.</li>
          <li>Register for GST where turnover or the nature of supply requires it, and for provident fund and ESI once staff are hired.</li>
          <li>Put the intercompany services agreement in place before the first invoice. See <Link href="/blog/uk-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Set up the monthly reporting pack that your UK finance team needs.</li>
        </ol>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost and how to avoid delay</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Cost has three parts: government fees and stamp duty (these vary by state and authorised capital),
          professional fees for the incorporation and filings, and the ongoing cost of accounting, audit and
          compliance. AU Corporate&apos;s indicative setup fee for share capital up to ₹10 lakh (about £7,900 at
          an indicative ₹126.9 per pound in mid-October 2026) is USD 750 to 1,000, and the full costing depends
          on your plan. Delay almost always comes from three things: UK documents started late, mismatched names
          across papers, and funds sent before the bank account and board resolution are ready.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          Rates and the indicative setup fee change; confirm the current costing with us before you commit.
        </div>

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
            { label: "Ministry of Corporate Affairs: SPICe+ and company filings", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India: FEMA and FIRMS portal", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
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
        title="Ready to Start Incorporation?"
        description="Tell us your sector, share capital and target start date — we'll reply with your SPICe+ document checklist and a fixed quote."
      />
    </main>
  )
}
