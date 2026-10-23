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
import { GuideCountryProfile } from "@/components/guide/GuideCountryContext"
import { InquiryTrigger } from "@/components/InquiryTrigger"

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "at-a-glance", label: "India subsidiary at a glance" },
  { id: "country-profile", label: "What is specific to UK companies" },
  { id: "why-now", label: "Why UK companies are looking at India now" },
  { id: "structure", label: "Which structure should a UK company choose?" },
  { id: "steps", label: "How to incorporate, step by step" },
  { id: "money", label: "How money moves between the UK parent and the Indian subsidiary" },
  { id: "treaty", label: "The tax treaty, trade agreement and social security convention" },
  { id: "tax", label: "Tax and transfer pricing: what the UK parent should know" },
  { id: "uk-law", label: "UK law that follows the group into India" },
  { id: "compliance", label: "Annual compliance: what the subsidiary files" },
  { id: "people", label: "People: hiring, secondments and share plans" },
  { id: "cost", label: "What it costs and how long it takes" },
  { id: "mistakes", label: "Six mistakes UK companies make" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate can help" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "India-UK CETA for UK companies", desc: "What the trade agreement changes and what it does not.", href: "/blog/uk-to-india/india-uk-ceta" },
  { title: "India-UK tax treaty, article by article", desc: "Rates, permanent establishment and relief.", href: "/blog/uk-to-india/india-uk-dtaa" },
  { title: "UK employees in India: treaty and social security", desc: "Article 16, residence and the Double Contributions Convention.", href: "/blog/uk-to-india/uk-employees-in-india-dcc" },
  { title: "UK parent obligations", desc: "Dividend exemption, CFC rules, Bribery Act and fraud prevention.", href: "/blog/uk-to-india/uk-parent-reporting" },
  { title: "Documents: Companies House, notary and apostille", desc: "What the UK parent must prepare first.", href: "/blog/uk-to-india/documents-companies-house-apostille" },
  { title: "Incorporation: a 12-week plan", desc: "Week by week from UK board to first payroll.", href: "/blog/uk-to-india/incorporation-steps" },
  { title: "Subsidiary, branch, liaison office or LLP", desc: "Choose the structure and the holding route.", href: "/blog/uk-to-india/structure-options" },
  { title: "Funding and FEMA", desc: "Instruments, valuation and Form FC-GPR.", href: "/blog/uk-to-india/funding-and-fema" },
  { title: "Getting money out of India", desc: "Dividends, fees, royalties and loans to the UK.", href: "/blog/uk-to-india/repatriating-profits" },
  { title: "Transfer pricing", desc: "Form 48, benchmarking and where India differs from the UK.", href: "/blog/uk-to-india/transfer-pricing" },
  { title: "Hiring in India", desc: "Contracts, payroll, labour codes and share plans.", href: "/blog/uk-to-india/hiring-in-india" },
  { title: "Data protection: UK GDPR and DPDP", desc: "Transfers to India and India's new law.", href: "/blog/uk-to-india/data-protection-uk-gdpr-dpdp" },
  { title: "Contracts, courts and arbitration", desc: "Enforcing English judgments and London awards in India.", href: "/blog/uk-to-india/contracts-courts-arbitration" },
  { title: "Compliance calendar", desc: "Indian dates beside the UK parent's dates.", href: "/blog/uk-to-india/compliance-calendar" },
  { title: "Global Capability Centres", desc: "Models, regulated-firm rules and pricing.", href: "/blog/uk-to-india/gcc-for-uk-companies" },
  { title: "Relocating UK staff", desc: "Visas, FRRO, housing and day-count controls.", href: "/blog/uk-to-india/relocate-uk-staff" },
  { title: "Selling, restructuring or closing", desc: "Options, tax and the UK exemption.", href: "/blog/uk-to-india/exit-and-restructuring" },
  { title: "13 common mistakes", desc: "And the fix for each.", href: "/blog/uk-to-india/common-mistakes" },
  { title: "122 FAQs on setting up an India subsidiary", desc: "From pre-incorporation to closure.", href: "/blog/uk-to-india/faq" },
]

const faqs = [
  { q: "Can a UK company own 100% of an Indian subsidiary?", a: "Yes, in most sectors. India allows 100% foreign ownership under the Automatic Route for most activities. A few sectors have caps, conditions or need government approval, so check your activity against the FDI Policy first." },
  { q: "Does a UK company need to visit India to set up a subsidiary?", a: "No. The incorporation is online. Directors need Digital Signature Certificates and apostilled identity documents, and nobody has to travel." },
  { q: "How long does it take to set up an Indian subsidiary from the UK?", a: "Usually 4 to 6 weeks from complete documents, and around 12 weeks to a working bank account, payroll and first filings." },
  { q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about £7,900 at an indicative ₹126.9 per pound in mid-October 2026). The costing depends on your plan." },
  { q: "What is the withholding tax on dividends under the India-UK DTAA?", a: "Article 11 caps Indian tax on a dividend paid to a UK company at 10% of the gross amount, or 15% for certain property investment vehicles. The domestic rate for non-residents is 20% plus surcharge and cess, so the treaty rate is lower where the documents are in place." },
  { q: "How many days in India create a permanent establishment under the India-UK DTAA?", a: "Services furnished through employees create a PE after more than 90 days in any 12 months, and services to an associated enterprise after more than 30 days in any 12 months. Building and construction projects create one after more than 6 months." },
  { q: "Do UK employees in India have to pay provident fund?", a: "A foreign national working in an Indian establishment is an international worker and generally contributes to provident fund on full wages, unless an agreement with their home country exempts them. The India-UK Double Contributions Convention, in force from 15 July 2026, exempts a worker on a covered temporary assignment who holds a certificate of coverage." },
  { q: "Is India adequate for UK GDPR transfers?", a: "No. India does not currently have a UK adequacy regulation, so a UK controller sending personal data to an Indian subsidiary needs a transfer mechanism such as the International Data Transfer Agreement or the UK Addendum, plus a transfer risk assessment." },
  { q: "Can an English court judgment be enforced in India?", a: "Yes, for a money judgment of a UK superior court. The UK is a reciprocating territory under Section 44A of the Code of Civil Procedure, so the decree can be filed for execution in India, subject to the statutory exceptions." },
  { q: "How does a UK company send money to an Indian subsidiary?", a: "By subscribing to shares in the subsidiary, with a remittance from the parent's own UK bank account to the subsidiary's Indian bank account, valued at not less than fair value. The subsidiary allots the shares within 60 days and files Form FC-GPR within 30 days of allotment." },
  { q: "How does a UK parent receive dividends from an Indian subsidiary?", a: "The subsidiary declares a dividend out of distributable profits, deducts Withholding Tax at 10% where the treaty documents are on file, files Form 145 and, where required, Form 146, and pays the net amount to the parent within 30 days of declaration." },
  { q: "Does the CETA reduce Indian tax on dividends paid to a UK parent?", a: "No. CETA is a trade agreement. Withholding Tax on dividends, interest, royalties and fees is governed by the Income-tax Act, 2025 and the 1993 India-UK tax treaty, which caps dividends at 10%." },
]

export default function UkToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from the UK: The 2026 Guide"
        description="How UK companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-UK tax treaty, CETA, staff and compliance. By a Chartered Accountant."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK" },
        ]}
      />

      <GuideHero
        eyebrow="Guide for UK companies"
        title="How to Set Up a Subsidiary in India from the UK: The 2026 Guide"
        dek="Structure, incorporation, FEMA/RBI filings, the India-UK treaty, CETA and compliance for UK companies entering India — in plain terms, with the form names your advisers will use."
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          A UK company can own up to 100% of an Indian subsidiary in most sectors. The usual route is a private
          limited company: UK documents notarised and apostilled, digital signatures and director IDs, one
          SPICe+ filing, a bank account, share capital remitted from the UK and reported to the RBI. It takes 4
          to 6 weeks to incorporate. Since 15 July 2026 the India-UK trade agreement and social security
          convention make staffing easier, and the 1993 tax treaty caps Indian withholding at 10% on dividends.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide is written for the founders, finance directors and operations leads of UK companies
          deciding how to enter India. It follows the order of the decisions: structure, set-up, money, tax,
          UK-side duties, compliance and people. Each section links to a deeper guide. Indian tax law changed on
          1 April 2026, when the Income-tax Act, 2025 replaced the 1961 Act; where a form has a new name, we
          show the new name with the earlier one in brackets.
        </p>

        <h2 id="at-a-glance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India subsidiary at a glance</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to know</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Typical structure", "Wholly owned private limited company under the Companies Act, 2013"],
                ["Foreign ownership", "Up to 100% in most sectors under the Automatic Route; a few sectors have caps or need approval"],
                ["Directors and shareholders", "At least two directors and two shareholders; a wholly owned subsidiary uses a nominee or group company as the second shareholder"],
                ["Resident Director", "At least one director who has stayed in India 182 days or more in the financial year"],
                ["Minimum capital", "None by law; plan 12 to 18 months of costs"],
                ["Registered office", "A physical address in India"],
                ["Incorporation filing", "SPICe+ with the MoA and AoA, linked to PAN, TAN and other registrations"],
                ["Travel", "Not required"],
                ["RBI reporting", "Form FC-GPR within 30 days of share allotment; allotment within 60 days of receiving funds"],
                ["Financial year", "1 April to 31 March, which matches the usual UK group year end"],
                ["Governing laws", "Companies Act, 2013; FEMA, 1999 and the Non-Debt Instruments Rules, 2019; the Income-tax Act, 2025; GST laws"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <GuideCountryProfile country="uk" />

        <h2 id="why-now" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why UK companies are looking at India now</h2>
        <GuideAnswerBox>
          Three things changed in 2025 and 2026: the India-UK trade agreement, the social security convention
          and India&apos;s new data protection rules.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Trade agreement:</strong> the CETA came into force on 15 July 2026 and gives UK service firms defined market access and staff mobility routes. See <Link href="/blog/uk-to-india/india-uk-ceta" className="text-blue-800 font-semibold hover:underline">India-UK CETA for UK companies</Link>.</li>
          <li><strong>Social security:</strong> the Double Contributions Convention, in force the same day, ends double contributions for staff on temporary assignment. See <Link href="/blog/uk-to-india/uk-employees-in-india-dcc" className="text-blue-800 font-semibold hover:underline">UK employees in India: treaty and social security</Link>.</li>
          <li><strong>Data rules:</strong> India&apos;s Digital Personal Data Protection Rules were notified in November 2025, with main duties from 13 May 2027, so build the controls now. See <Link href="/blog/uk-to-india/data-protection-uk-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: UK GDPR and DPDP</Link>.</li>
          <li><strong>Capability centres:</strong> more UK groups are building captive teams, a model covered in <Link href="/blog/uk-to-india/gcc-for-uk-companies" className="text-blue-800 font-semibold hover:underline">Global Capability Centres</Link>.</li>
        </ul>

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which structure should a UK company choose?</h2>
        <GuideAnswerBox>
          Most choose a wholly owned private limited company. A branch or liaison office needs RBI approval and
          track-record tests; an Employer of Record fits a first pilot.
        </GuideAnswerBox>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Key limits</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wholly owned subsidiary", "Sales, development, captive centres", "Two directors (one resident), annual audit and ROC compliance"],
                ["Branch office", "The parent's own activities such as consultancy or trade", "RBI approval; taxed as a foreign company; parent directly liable"],
                ["Liaison office", "Market research and liaison", "No income or invoicing; RBI approval; costs funded from the UK"],
                ["LLP", "Partnership-style set-ups in eligible sectors", "Tax treatment needs review in the UK and India"],
                ["Employer of Record", "First hires without an entity", "The EOR is the legal employer; not a long-term substitute"],
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

        <p className="text-gray-600 leading-relaxed mb-10">
          Full comparison, including whether to hold directly from the UK:{" "}
          <Link href="/blog/uk-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">Subsidiary, branch, liaison office or LLP</Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to incorporate, step by step</h2>
        <GuideAnswerBox>
          Nine steps take a UK parent from board decision to a compliant subsidiary. The sequence matters
          because each step feeds the next.
        </GuideAnswerBox>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Check the sector.</strong> Match your activity to the FDI Policy to confirm the Automatic Route.</li>
          <li><strong>Prepare and legalise the UK documents.</strong> Certificate of incorporation, articles, board resolution and identity papers, notarised and apostilled by the FCDO.</li>
          <li><strong>Choose the Resident Director.</strong> An Indian hire, a relocating UK colleague or an adviser-nominated director.</li>
          <li><strong>Get DSCs and DINs.</strong> Digital signatures and director IDs for each proposed director.</li>
          <li><strong>Reserve the name and file SPICe+.</strong> The Registrar issues the Certificate of Incorporation with the CIN, PAN and TAN.</li>
          <li><strong>Open the bank account.</strong> The bank checks the UK parent&apos;s documents and ultimate owners.</li>
          <li><strong>Send the capital from the UK.</strong> From the parent&apos;s own account, after the valuation is ready.</li>
          <li><strong>Allot shares and report to the RBI.</strong> Allot within 60 days; file Form FC-GPR within 30 days of allotment.</li>
          <li><strong>Commence business.</strong> File INC-20A within 180 days, appoint the Auditor and register for GST, provident fund and ESI.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Typical timeline: 4 to 6 weeks to incorporate</strong> from complete documents. Deeper guides:{" "}
          <Link href="/blog/uk-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">Incorporation: a 12-week plan</Link>{" "}
          and{" "}
          <Link href="/blog/uk-to-india/documents-companies-house-apostille" className="text-blue-800 font-semibold hover:underline">Documents: Companies House, notary and apostille</Link>.
        </p>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How money moves between the UK parent and the Indian subsidiary</h2>
        <GuideAnswerBox>
          Money goes in through shares or a loan, and comes out through dividends, fees, royalties, interest and
          loan repayments. Each route has its own tax, paperwork and UK result.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Going in:</strong> equity or compulsorily convertible instruments, priced at or above fair value, with an ECB for loans.</li>
          <li><strong>Reporting in:</strong> Form FC-GPR and the annual FLA return by 15 July.</li>
          <li><strong>Coming out:</strong> dividends (10% under the treaty, normally exempt in the UK); fees and royalties priced at arm&apos;s length; interest at up to 15%.</li>
          <li><strong>Paperwork out:</strong> Form 145, and Form 146 where a Chartered Accountant certifies the payment.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/blog/uk-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">Funding and FEMA</Link>{" "}
          and{" "}
          <Link href="/blog/uk-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Getting money out of India</Link>.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The tax treaty, trade agreement and social security convention</h2>
        <GuideAnswerBox>
          Three agreements matter to a UK parent, and they do three different jobs: the tax treaty limits
          withholding and defines permanent establishment, the CETA opens services and mobility, and the Double
          Contributions Convention avoids double social security.
        </GuideAnswerBox>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Agreement</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it does</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Key numbers</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Guide</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India-UK tax treaty (1993, as modified by the MLI)</th>
                  <td className="border border-gray-300 p-3">Caps Indian withholding and sets permanent establishment tests</td>
                  <td className="border border-gray-300 p-3">Dividends 10%; interest 15%; royalties and technical fees 15% (equipment 10%); services PE after 90 days, or 30 days for services to an associated enterprise</td>
                  <td className="border border-gray-300 p-3"><Link href="/blog/uk-to-india/india-uk-dtaa" className="text-blue-800 font-semibold hover:underline">India-UK tax treaty, article by article</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India-UK CETA (in force 15 July 2026)</th>
                  <td className="border border-gray-300 p-3">Services access, staff mobility, digital trade, dispute rules</td>
                  <td className="border border-gray-300 p-3">Business visitors up to 90 days; intra-corporate transferees up to three years, as reported</td>
                  <td className="border border-gray-300 p-3"><Link href="/blog/uk-to-india/india-uk-ceta" className="text-blue-800 font-semibold hover:underline">India-UK CETA for UK companies</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Double Contributions Convention (in force 15 July 2026)</th>
                  <td className="border border-gray-300 p-3">Keeps a detached worker in the home scheme</td>
                  <td className="border border-gray-300 p-3">Up to five years per the Indian government; certificate of coverage needed</td>
                  <td className="border border-gray-300 p-3"><Link href="/blog/uk-to-india/uk-employees-in-india-dcc" className="text-blue-800 font-semibold hover:underline">UK employees in India: treaty and social security</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and transfer pricing: what the UK parent should know</h2>
        <GuideAnswerBox>
          An Indian subsidiary pays Indian tax on its Indian profits, and the parent&apos;s exposure comes from
          payments, people and pricing between the two.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Transfer pricing:</strong> Indian rules apply with no small-company exemption, even where the UK parent is exempt from UK transfer pricing.</li>
          <li><strong>Withholding Tax:</strong> payments to the UK parent suffer Indian withholding under Section 393 of the Income-tax Act, 2025, reduced by the treaty where the documents are in place.</li>
          <li><strong>Permanent establishment:</strong> UK staff days and contract authority can create a taxable presence, and the UK treaty&apos;s 30-day test for services to a group company is short.</li>
          <li><strong>GST:</strong> services to the UK parent can be zero-rated exports.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/blog/uk-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing</Link>,{" "}
          <Link href="/blog/uk-to-india/india-uk-dtaa" className="text-blue-800 font-semibold hover:underline">India-UK tax treaty, article by article</Link>{" "}
          and{" "}
          <Link href="/blog/uk-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Getting money out of India</Link>.
        </p>

        <h2 id="uk-law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">UK law that follows the group into India</h2>
        <GuideAnswerBox>
          UK duties do not stop at the border. They shape what the Indian team does, and what the UK parent must
          be able to show.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Tax:</strong> dividend exemption, CFC rules and foreign tax credit relief on the UK side.</li>
          <li><strong>Criminal law:</strong> the Bribery Act 2010 and the failure to prevent fraud offence can reach the subsidiary&apos;s conduct.</li>
          <li><strong>Data:</strong> UK GDPR treats a transfer to India as a restricted transfer.</li>
          <li><strong>Regulated firms:</strong> PRA and FCA third-party rules apply when work moves to a group company in India.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See{" "}
          <Link href="/blog/uk-to-india/uk-parent-reporting" className="text-blue-800 font-semibold hover:underline">UK parent obligations</Link>,{" "}
          <Link href="/blog/uk-to-india/data-protection-uk-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: UK GDPR and DPDP</Link>{" "}
          and{" "}
          <Link href="/blog/uk-to-india/gcc-for-uk-companies" className="text-blue-800 font-semibold hover:underline">Global Capability Centres</Link>.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual compliance: what the subsidiary files</h2>
        <GuideAnswerBox>
          The subsidiary has monthly, quarterly and annual filings, on a 31 March year end that suits most UK
          groups.
        </GuideAnswerBox>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Filing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Frequency</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical timing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Authority</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Statutory audit and financial statements", "Annual", "Before the AGM", "Companies Act"],
                ["Annual General Meeting", "Annual", "Within 6 months of the year end", "Companies Act"],
                ["AOC-4 and MGT-7", "Annual", "30 and 60 days after the AGM", "MCA"],
                ["Income tax return and Form 48", "Annual", "By the due date; transfer pricing cases later", "Income-tax Act, 2025"],
                ["Advance tax", "Quarterly", "15 June, 15 September, 15 December, 15 March", "Income-tax Act, 2025"],
                ["TDS deposit and returns", "Monthly and quarterly", "7th of the next month; quarterly returns", "Income-tax Act, 2025"],
                ["GST returns", "Monthly or quarterly", "11th and 20th", "GST"],
                ["Provident fund and ESI", "Monthly", "By the 15th", "EPFO, ESIC"],
                ["FLA return", "Annual", "By 15 July", "RBI"],
                ["Form FC-GPR", "Per share issue", "Within 30 days of allotment", "RBI"],
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

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <strong>Note on the new tax law.</strong> The Income-tax Act, 2025 and the Income-tax Rules, 2026
          apply from 1 April 2026, so form names and sections have changed. Confirm each year.
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          The maintained version, with the UK dates beside it, is in the{" "}
          <Link href="/blog/uk-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">Compliance calendar</Link>.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">People: hiring, secondments and share plans</h2>
        <GuideAnswerBox>
          Indian employment is contract and statute driven. UK staff on assignment need the right visa, a tax
          plan and a certificate of coverage.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Hiring locally:</strong> provident fund, ESI, gratuity, the labour codes and state rules. See <Link href="/blog/uk-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">Hiring in India</Link>.</li>
          <li><strong>Sending UK staff:</strong> visas, registration and day counts. See <Link href="/blog/uk-to-india/relocate-uk-staff" className="text-blue-800 font-semibold hover:underline">Relocating UK staff</Link> and <Link href="/blog/uk-to-india/uk-employees-in-india-dcc" className="text-blue-800 font-semibold hover:underline">UK employees in India: treaty and social security</Link>.</li>
          <li><strong>Share plans:</strong> Indian employees can receive UK parent shares, taxed as a perquisite on exercise.</li>
        </ul>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What it costs and how long it takes</h2>
        <GuideAnswerBox>
          Cost has three parts: one-time setup, recurring compliance and variable items such as transfer pricing
          and disputes.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>One-time:</strong> government fees and stamp duty (by state and authorised capital), professional fees and the valuation.</li>
          <li><strong>Recurring:</strong> accounting, statutory audit, GST, TDS, payroll and ROC filings.</li>
          <li><strong>Variable:</strong> transfer pricing documentation, tax notices, secondments and legal work.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Indicative setup fee:</strong> AU Corporate&apos;s fee for setting up the subsidiary is USD
          750 to USD 1,000 for share capital up to ₹10 lakh (about £7,900 at an indicative ₹126.9 per pound in
          mid-October 2026). The costing depends on your plan.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-between bg-[#fffbe6] border border-gold-dark rounded-xl p-5 mb-10">
          <div>
            <strong className="block text-gray-900">Get a costing for your plan</strong>
            <p className="text-sm text-gray-600 mt-0.5">Tell us what you plan to set up and we will prepare a costing and book a call.</p>
          </div>
          <InquiryTrigger className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-[#081a42] hover:bg-gold-dark transition-colors whitespace-nowrap">
            Discuss your costing with our team
          </InquiryTrigger>
        </div>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Six mistakes UK companies make</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Starting UK documents late.</strong> The notary and apostille step sets the pace.</li>
          <li><strong>Missing the 60-day and 30-day RBI clocks.</strong> Late reporting costs fees or compounding.</li>
          <li><strong>Assuming UK transfer pricing exemptions apply in India.</strong> They do not.</li>
          <li><strong>Letting UK staff drift into a permanent establishment.</strong> Count days and limit contract authority.</li>
          <li><strong>Moving UK personal data without a transfer mechanism.</strong> India has no UK adequacy.</li>
          <li><strong>Forgetting the UK Bribery Act and fraud-prevention duties.</strong> They reach the Indian team.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          More detail:{" "}
          <Link href="/blog/uk-to-india/common-mistakes" className="text-blue-800 font-semibold hover:underline">13 common mistakes</Link>.
        </p>

        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The full guide series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate can help</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a New Delhi-based advisory firm, established in 2016, that supports foreign companies
          at every stage of an Indian subsidiary. We work with UK finance teams and advisers so that the Indian
          and UK positions agree.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { n: "1", title: "Set up", desc: "Choose the structure and incorporate.", chips: ["Entity structuring", "Wholly owned subsidiary", "SPICe+ incorporation", "Bank account support"], href: "/india-business-setup/company-formation" },
            { n: "2", title: "Fund and FEMA", desc: "Bring capital in and report it.", chips: ["FEMA", "FC-GPR", "Share valuation", "ECB"] },
            { n: "3", title: "Operate", desc: "Books, payroll and indirect taxes, with a UK reporting pack.", chips: ["Accounting and bookkeeping", "GST", "Withholding Tax", "Payroll", "Monthly MIS", "UK consolidation support"], href: "/services/accounting-assurance" },
            { n: "4", title: "People and relocation", desc: "Hire, pay and relocate your team.", chips: ["Employer of Record", "HR services", "Expat visa", "Certificate of coverage support"], href: "/hr-services" },
            { n: "5", title: "Repatriate funds", desc: "Move money to the UK with the paperwork and treaty position in order.", chips: ["Forms 145 and 146", "India-UK treaty relief", "Dividends", "Royalties and service fees", "Intercompany agreements"], highlight: true },
            { n: "6", title: "Tax and transfer pricing", desc: "Keep the India position defensible.", chips: ["Direct and indirect tax", "Transfer pricing", "Form 48", "PE review", "CbCR filing (parent-prepared report)"], href: "/services/taxation-regulatory" },
            { n: "7", title: "Audit and assurance", desc: "Satisfy Indian law and your UK Auditors.", chips: ["Statutory audit", "Internal audit", "Internal financial controls", "GST and tax audit"], href: "/services/accounting-assurance" },
            { n: "8", title: "Legal, disputes and arbitration", desc: "Defend your position and protect contracts.", chips: ["Tax litigation", "Arbitration support", "Agreement drafting and vetting"], href: "/arbitration-services" },
            { n: "9", title: "Restructure and exit", desc: "Scale, reorganise or leave.", chips: ["Restructuring", "Mergers and acquisitions", "Due diligence", "Valuation", "Winding up"], href: "/services/transaction-advisory" },
          ].map((stage) => (
            <div key={stage.n} className={`relative rounded-xl border p-5 bg-white ${stage.highlight ? "border-2 border-gold bg-[#fffbe6]" : ""}`}>
              <span className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#081a42] text-gold text-xs font-bold">{stage.n}</span>
              <h3 className="font-bold text-gray-900 mb-1 pr-8">{stage.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{stage.desc}</p>
              <ul className="flex flex-wrap gap-1.5 mb-2">
                {stage.chips.map((chip) => (
                  <li key={chip} className="text-xs font-semibold bg-secondary/50 text-[#081a42] rounded-full px-2.5 py-1">{chip}</li>
                ))}
              </ul>
              {stage.href && (
                <Link href={stage.href} className="text-sm font-bold text-blue-800 hover:underline">View service &rarr;</Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Scope note:</strong> we handle the Indian side. UK tax, UK company law and UK regulatory
          advice come from your UK advisers, and we coordinate with them.
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

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/uk-to-india/faq"
          seeAllLabel="See all 122 questions"
          seeAllDescription="Plain answers from pre-incorporation to closure, including the treaty, CETA, staff, data and exit."
        />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on the Companies Act, 2013, FEMA and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, the Income-tax Act, 2025, the 1993 India-UK tax convention (HMRC consolidated text), the India-UK CETA and Double Contributions Convention announcements, and India's Digital Personal Data Protection Rules, 2025. Rules change often. We review this page at least quarterly and show the review date at the top."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "HMRC: India tax treaties", href: "https://www.gov.uk/government/publications/india-tax-treaties" },
            { label: "PIB: CETA and the Double Contributions Convention", href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2274280&reg=48&lang=2" },
          ]}
        />

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 19 October 2026. General information only, not legal or tax advice. Indian and UK rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Ready to Set Up Your Subsidiary in India?"
        description="Tell us about your UK parent company, timeline and sector — we'll reply with an entry structure recommendation and compliance overview for your case."
      />
    </main>
  )
}
