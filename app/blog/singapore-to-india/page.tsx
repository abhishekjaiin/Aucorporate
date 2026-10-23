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

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "at-a-glance", label: "India subsidiary at a glance" },
  { id: "why-now", label: "Why Singapore companies look at India now" },
  { id: "structure", label: "Which structure should a Singapore company choose?" },
  { id: "steps", label: "How to incorporate, step by step" },
  { id: "money", label: "How money moves between Singapore and the Indian subsidiary" },
  { id: "treaty", label: "The tax treaty, the CECA and the Apostille Convention" },
  { id: "tax", label: "Tax and transfer pricing: what the Singapore parent should know" },
  { id: "sg-law", label: "Singapore law that follows the group into India" },
  { id: "compliance", label: "Annual compliance: what the subsidiary files" },
  { id: "people", label: "People: hiring, secondments and share plans" },
  { id: "cost", label: "What it costs and how long it takes" },
  { id: "mistakes", label: "Six mistakes Singapore companies make" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate can help" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "India-Singapore CECA", desc: "What the 2005 agreement gives a Singapore company, and the EPF exemption.", href: "/blog/singapore-to-india/india-singapore-ceca" },
  { title: "India-Singapore tax treaty, article by article", desc: "Rates, permanent establishment, share gains and relief.", href: "/blog/singapore-to-india/india-singapore-dtaa" },
  { title: "Singapore employees in India: treaty, EPF and CPF", desc: "The 183-day test and who is exempt from provident fund.", href: "/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" },
  { title: "Singapore parent obligations", desc: "Territorial tax, exemption of foreign income, ACRA and Pillar Two.", href: "/blog/singapore-to-india/singapore-parent-obligations" },
  { title: "Documents: ACRA, notary and apostille", desc: "What the Singapore parent must prepare first.", href: "/blog/singapore-to-india/documents-acra-apostille" },
  { title: "Incorporation: who does what", desc: "The Singapore side and the Indian side, step by step.", href: "/blog/singapore-to-india/incorporation-steps" },
  { title: "Subsidiary, branch, LLP, GIFT City or EOR", desc: "Choose the structure for your business model.", href: "/blog/singapore-to-india/structure-options" },
  { title: "Using a Singapore holding company", desc: "Treaty benefits, substance tests and the 2017 change.", href: "/blog/singapore-to-india/singapore-holdco-for-india" },
  { title: "Funding and FEMA", desc: "Equity, ECB loans, valuation and Form FC-GPR.", href: "/blog/singapore-to-india/funding-and-fema" },
  { title: "Getting money out of India", desc: "Dividends, fees, royalties and loans to Singapore.", href: "/blog/singapore-to-india/repatriating-profits" },
  { title: "Transfer pricing", desc: "Form 48, benchmarking and where India differs from IRAS.", href: "/blog/singapore-to-india/transfer-pricing" },
  { title: "Hiring in India", desc: "Contracts, payroll, labour codes and share plans.", href: "/blog/singapore-to-india/hiring-in-india" },
  { title: "Data protection: PDPA and DPDP", desc: "Transfers to India and the new Indian law.", href: "/blog/singapore-to-india/data-protection-pdpa-dpdp" },
  { title: "Contracts, courts and SIAC arbitration", desc: "Enforcing Singapore awards and judgments in India.", href: "/blog/singapore-to-india/contracts-courts-siac" },
  { title: "Compliance calendar", desc: "Indian dates beside the Singapore parent's dates.", href: "/blog/singapore-to-india/compliance-calendar" },
  { title: "Global Capability Centres", desc: "Models, pricing, GST on exports and PE risk.", href: "/blog/singapore-to-india/gcc-for-singapore-companies" },
  { title: "Relocating Singapore staff", desc: "Visas, OCI, FRRO and day-count controls.", href: "/blog/singapore-to-india/relocate-singapore-staff" },
  { title: "Selling, restructuring or closing", desc: "Options, tax by acquisition date and FEMA steps.", href: "/blog/singapore-to-india/exit-and-restructuring" },
  { title: "12 common mistakes", desc: "And the fix for each.", href: "/blog/singapore-to-india/common-mistakes" },
  { title: "143 FAQs on setting up an India subsidiary", desc: "From pre-incorporation to closure.", href: "/blog/singapore-to-india/faq" },
]

const faqs = [
  { q: "Can a Singapore company own 100% of an Indian subsidiary?", a: "Yes, in most sectors. India allows 100% foreign ownership under the Automatic Route for most activities. A few sectors have caps, conditions or need approval, and an owner in a country that shares a land border with India can trigger extra approval under Press Note 3, so check both before committing." },
  { q: "Does a Singapore company need to send anyone to India to set up a subsidiary?", a: "No. The filing is online. Directors need Digital Signature Certificates and notarised, apostilled identity documents. Singapore is only two and a half hours ahead of India, so calls with the Indian bank and advisers are easy." },
  { q: "How long does it take to set up an Indian subsidiary from Singapore?", a: "Usually four to six weeks from complete documents, and around twelve weeks to a working bank account, payroll and first filings." },
  { q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about S$13,500 at an indicative ₹74.0 per Singapore dollar on 21 October 2026). The costing depends on your plan." },
  { q: "What is the withholding rate on dividends from India to Singapore?", a: "Under the treaty, 10% if the Singapore company holds at least 25% of the Indian company's capital and 15% otherwise. Singapore adds no tax withholding on its side. The Indian payer applies it under Section 393 on receipt of the residency certificate and Form 41." },
  { q: "Can India tax the sale of Indian shares by a Singapore company?", a: "Yes for shares acquired on or after 1 April 2017, at full Indian domestic rates since 1 April 2019. Shares acquired before 1 April 2017 remain taxable only in Singapore, unless the seller is a shell or conduit company." },
  { q: "Are Singapore citizens exempt from EPF in India?", a: "Yes, under the CECA, as explained by the Singapore Mission in Mumbai and an EPFO circular of 14 March 2017. No form is required, but the employer should keep a copy of the passport." },
  { q: "Is a Singapore holding company still useful for India after 2017?", a: "Yes, for dividends, financing, neutrality and arbitration. It no longer protects gains on shares acquired on or after 1 April 2017, which India can tax at domestic rates." },
  { q: "Can a Singapore company send personal data to its Indian subsidiary?", a: "Yes, if it complies with the PDPA's Transfer Limitation Obligation, usually through a contract giving comparable protection." },
  { q: "Can a Singapore-seated SIAC award be enforced in India?", a: "Yes. India notified Singapore as a New York Convention territory, so a SIAC award is enforced as a foreign award under Part II of the Arbitration and Conciliation Act, 1996, on narrow grounds." },
  { q: "How should a Singapore parent fund its Indian subsidiary?", a: "Usually through equity or compulsorily convertible instruments, which are FDI. Loans from the parent are ECB and follow separate rules. A mix is common." },
  { q: "How is a dividend from India taxed on its way to a Singapore parent?", a: "India withholds tax at the treaty rate, 10% if the parent holds 25% or more and 15% otherwise, provided the residency certificate and Form 41 are given. Singapore can exempt the dividend under the foreign-sourced income exemption." },
  { q: "Does CECA let a Singapore company operate in India without an Indian entity?", a: "No. To hold property, employ people or contract locally, a Singapore company needs an Indian subsidiary or an approved branch or liaison office, and has to follow FEMA and the FDI Policy." },
]

export default function SingaporeToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from Singapore: The 2026 Guide"
        description="How Singapore companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-Singapore tax treaty, holding companies, staff and compliance. By a Chartered Accountant."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore" },
        ]}
      />

      <GuideHero
        eyebrow="Guide for Singapore companies"
        title="How to Set Up a Subsidiary in India from Singapore: The 2026 Guide"
        dek="Structure, incorporation, FEMA/RBI filings, the India-Singapore treaty, CECA and holding structures for Singapore companies entering India, in plain terms."
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          A Singapore company can own up to 100% of an Indian subsidiary in most sectors. The usual route is a
          private limited company: Singapore documents notarised and apostilled by the Singapore Academy of Law,
          digital signatures and director IDs, one SPICe+ filing, a bank account, and share capital remitted
          from Singapore and reported to the RBI. It takes four to six weeks to incorporate. The 1994 tax treaty
          caps Indian withholding on dividends at 10% for a 25% holder, but since 1 April 2017 India can tax
          gains on shares acquired from that date, so holding structures need real substance.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide is written for the founders, finance directors and operations leads of Singapore companies
          deciding how to enter India. It follows the order of the decisions: structure, set-up, money, tax,
          Singapore-side duties, compliance and people. Each section links to a deeper guide. Indian tax law
          changed on 1 April 2026, when the Income-tax Act, 2025 replaced the 1961 Act; where a form has a new
          name, we show the new name with the earlier one in brackets.
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
                ["Financial year", "1 April to 31 March, which differs from the common 31 December year end of Singapore parents"],
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

        <h2 id="why-now" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Singapore companies look at India now</h2>
        <GuideAnswerBox>
          Three things shape the decision in 2026: a deepening government partnership, a tax treaty whose
          share-gains rules changed in 2017, and India&apos;s new data protection rules.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Partnership:</strong> India and Singapore moved to a Comprehensive Strategic Partnership in 2024, and the fourth Ministerial Roundtable in August 2026 named green economy, fintech, semiconductors and industrial parks as growth areas. See <Link href="/blog/singapore-to-india/india-singapore-ceca" className="text-blue-800 font-semibold hover:underline">India-Singapore CECA</Link>.</li>
          <li><strong>Treaty:</strong> the Third Protocol means gains on Indian shares acquired on or after 1 April 2017 can be taxed in India, so a holding company must show substance. See <Link href="/blog/singapore-to-india/singapore-holdco-for-india" className="text-blue-800 font-semibold hover:underline">Using a Singapore holding company</Link>.</li>
          <li><strong>Data rules:</strong> India&apos;s Digital Personal Data Protection Rules were notified in November 2025, with main duties from 13 May 2027, so build the controls now. See <Link href="/blog/singapore-to-india/data-protection-pdpa-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: PDPA and DPDP</Link>.</li>
          <li><strong>Capability centres:</strong> Singapore headquarters increasingly run captive teams in India, a model covered in <Link href="/blog/singapore-to-india/gcc-for-singapore-companies" className="text-blue-800 font-semibold hover:underline">Global Capability Centres</Link>.</li>
        </ul>

        <GuideCountryProfile country="singapore" />
        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which structure should a Singapore company choose?</h2>
        <GuideAnswerBox>
          Most choose a wholly owned private limited company. A branch or liaison office needs RBI approval and
          track-record tests; a GIFT City unit fits financial services; an Employer of Record fits a first
          pilot.
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
                ["Liaison office", "Market research and liaison", "No income or invoicing; RBI approval; costs funded from Singapore"],
                ["LLP", "Partnership-style set-ups in eligible sectors", "Tax treatment needs review in Singapore and India"],
                ["GIFT City unit", "Fund management, fintech and treasury for non-residents", "IFSCA licensing; different FEMA and tax rules"],
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
          Full comparison, including whether to hold through a Singapore holding company:{" "}
          <Link href="/blog/singapore-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">Subsidiary, branch, LLP, GIFT City or EOR</Link>{" "}
          and{" "}
          <Link href="/blog/singapore-to-india/singapore-holdco-for-india" className="text-blue-800 font-semibold hover:underline">Using a Singapore holding company</Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to incorporate, step by step</h2>
        <GuideAnswerBox>
          Eight steps take a Singapore parent from board decision to a compliant subsidiary. The sequence
          matters because each step feeds the next.
        </GuideAnswerBox>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Check the sector.</strong> Match your activity to the FDI Policy to confirm the Automatic Route, and check the owner chain for land-border country ownership.</li>
          <li><strong>Prepare and legalise the Singapore documents.</strong> ACRA records, constitution, board resolution and identity papers, notarised and apostilled by the Singapore Academy of Law.</li>
          <li><strong>Choose the Resident Director.</strong> An Indian hire, a relocating colleague or an adviser-nominated director.</li>
          <li><strong>Get DSCs and DINs.</strong> Digital signatures and director IDs for each proposed director.</li>
          <li><strong>Reserve the name and file SPICe+.</strong> The Registrar issues the Certificate of Incorporation with the CIN, PAN and TAN.</li>
          <li><strong>Open the bank account and send the capital.</strong> From the parent&apos;s own account, after the valuation is ready.</li>
          <li><strong>Allot shares and report to the RBI.</strong> Allot within 60 days; file Form FC-GPR within 30 days of allotment.</li>
          <li><strong>Commence business.</strong> File INC-20A within 180 days, appoint the auditor and register for GST, provident fund and ESI.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Typical timeline: 4 to 6 weeks to incorporate</strong> from complete documents. Deeper guides:{" "}
          <Link href="/blog/singapore-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">Incorporation: who does what</Link>{" "}
          and{" "}
          <Link href="/blog/singapore-to-india/documents-acra-apostille" className="text-blue-800 font-semibold hover:underline">Documents: ACRA, notary and apostille</Link>.
        </p>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How money moves between Singapore and the Indian subsidiary</h2>
        <GuideAnswerBox>
          Money goes in through shares or a loan, and comes out through dividends, fees, royalties, interest and
          loan repayments. Each route has its own tax, paperwork and Singapore result.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Going in:</strong> equity or compulsorily convertible instruments, priced at or above fair value, with an ECB for loans.</li>
          <li><strong>Reporting in:</strong> Form FC-GPR and the annual FLA return by 15 July.</li>
          <li><strong>Coming out:</strong> dividends (10% under the treaty for a 25% holder, then possibly exempt in Singapore); fees and royalties priced at arm&apos;s length; interest at up to 10% or 15%.</li>
          <li><strong>Paperwork out:</strong> Form 145, and Form 146 where a Chartered Accountant certifies the payment.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/blog/singapore-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">Funding and FEMA</Link>{" "}
          and{" "}
          <Link href="/blog/singapore-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Getting money out of India</Link>.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The tax treaty, the CECA and the Apostille Convention</h2>
        <GuideAnswerBox>
          Three agreements matter to a Singapore parent, and they do different jobs: the tax treaty limits
          withholding and shapes gains, the CECA covers trade, investment and the citizen EPF exemption, and the
          Apostille Convention removes consular legalisation of documents.
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
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India-Singapore tax treaty (1994, with protocols and the MLI)</th>
                  <td className="border border-gray-300 p-3">Caps Indian withholding, sets permanent establishment tests and allocates share gains</td>
                  <td className="border border-gray-300 p-3">Dividends 10% (25% holding) or 15%; interest 10% banks or 15%; royalties and technical fees 10%; services PE after 90 days, or 30 days for services to an associated enterprise</td>
                  <td className="border border-gray-300 p-3"><Link href="/blog/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">India-Singapore tax treaty, article by article</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India-Singapore CECA (2005)</th>
                  <td className="border border-gray-300 p-3">Trade, services, investment and movement of people</td>
                  <td className="border border-gray-300 p-3">Singapore citizens exempt from EPF; third review open since 2018</td>
                  <td className="border border-gray-300 p-3"><Link href="/blog/singapore-to-india/india-singapore-ceca" className="text-blue-800 font-semibold hover:underline">India-Singapore CECA</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Hague Apostille Convention (in force for Singapore 16 September 2021)</th>
                  <td className="border border-gray-300 p-3">One apostille from the Singapore Academy of Law replaces consular legalisation</td>
                  <td className="border border-gray-300 p-3">Notary plus apostille; India is a party</td>
                  <td className="border border-gray-300 p-3"><Link href="/blog/singapore-to-india/documents-acra-apostille" className="text-blue-800 font-semibold hover:underline">Documents: ACRA, notary and apostille</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and transfer pricing: what the Singapore parent should know</h2>
        <GuideAnswerBox>
          An Indian subsidiary pays Indian tax on its Indian profits, and the parent&apos;s exposure comes from
          payments, people, pricing and the way the shares are held.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Transfer pricing:</strong> Indian rules apply with no small-company exemption, even where IRAS accepts a fixed mark-up on routine support services.</li>
          <li><strong>Withholding Tax:</strong> payments to the Singapore parent suffer Indian withholding under Section 393 of the Income-tax Act, 2025, reduced by the treaty where the documents are in place.</li>
          <li><strong>Permanent establishment:</strong> Singapore staff days and contract authority can create a taxable presence, and the treaty&apos;s 30-day test for services to a group company is short.</li>
          <li><strong>Gains:</strong> shares acquired on or after 1 April 2017 are taxable in India on sale, while Singapore has no capital gains tax.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/blog/singapore-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing</Link>,{" "}
          <Link href="/blog/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">India-Singapore tax treaty, article by article</Link>{" "}
          and{" "}
          <Link href="/blog/singapore-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Getting money out of India</Link>.
        </p>

        <h2 id="sg-law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Singapore law that follows the group into India</h2>
        <GuideAnswerBox>
          Singapore duties do not stop at the border. They shape what the Indian team does and what the
          Singapore parent must be able to show.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Tax:</strong> territorial taxation, foreign-sourced income exemption for dividends, no capital gains tax, and Pillar Two top-up for in-scope groups.</li>
          <li><strong>Company law:</strong> ACRA filings, registers of controllers and director duties.</li>
          <li><strong>Criminal law:</strong> the Prevention of Corruption Act reaches acts of Singapore citizens abroad.</li>
          <li><strong>Data:</strong> the PDPA limits transfers of personal data to India without comparable protection.</li>
          <li><strong>Regulated firms:</strong> MAS expectations on third-party arrangements apply when work moves to a group company in India.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See{" "}
          <Link href="/blog/singapore-to-india/singapore-parent-obligations" className="text-blue-800 font-semibold hover:underline">Singapore parent obligations</Link>,{" "}
          <Link href="/blog/singapore-to-india/data-protection-pdpa-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: PDPA and DPDP</Link>{" "}
          and{" "}
          <Link href="/blog/singapore-to-india/gcc-for-singapore-companies" className="text-blue-800 font-semibold hover:underline">Global Capability Centres</Link>.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual compliance: what the subsidiary files</h2>
        <GuideAnswerBox>
          The subsidiary has monthly, quarterly and annual filings on a 31 March year end, which often differs
          from the parent&apos;s own year end.
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
          The maintained version, with the Singapore dates beside it, is in the{" "}
          <Link href="/blog/singapore-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">Compliance calendar</Link>.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">People: hiring, secondments and share plans</h2>
        <GuideAnswerBox>
          Indian employment is contract and statute driven. Singapore staff on assignment need the right visa, a
          tax plan and an answer on provident fund.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Hiring locally:</strong> provident fund, ESI, gratuity, the labour codes and state rules. See <Link href="/blog/singapore-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">Hiring in India</Link>.</li>
          <li><strong>Sending Singapore staff:</strong> visas, OCI, registration and day counts. See <Link href="/blog/singapore-to-india/relocate-singapore-staff" className="text-blue-800 font-semibold hover:underline">Relocating Singapore staff</Link> and <Link href="/blog/singapore-to-india/singapore-employees-in-india-epf-cpf" className="text-blue-800 font-semibold hover:underline">Singapore employees in India: treaty, EPF and CPF</Link>.</li>
          <li><strong>Share plans:</strong> Indian employees can receive Singapore parent shares, taxed as a perquisite on exercise.</li>
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
          750 to USD 1,000 for share capital up to ₹10 lakh (about S$13,500 at an indicative ₹74.0 per Singapore
          dollar on 21 October 2026). The costing depends on your plan.
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

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Six mistakes Singapore companies make</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Assuming Singapore&apos;s lack of capital gains tax follows the shares.</strong> India taxes gains on shares acquired on or after 1 April 2017.</li>
          <li><strong>Paying without treaty papers.</strong> No residency certificate or Form 41 means withholding at the domestic rate.</li>
          <li><strong>Holding through a Singapore company with no substance.</strong> The shell test and principal purpose test can deny benefits.</li>
          <li><strong>Missing the 60-day and 30-day RBI clocks.</strong> Late reporting costs fees or compounding.</li>
          <li><strong>Assuming permanent residents share the citizen EPF exemption.</strong> The published exemption names Singapore citizens.</li>
          <li><strong>Letting Singapore staff drift into a permanent establishment.</strong> Count days and limit contract authority.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          More detail:{" "}
          <Link href="/blog/singapore-to-india/common-mistakes" className="text-blue-800 font-semibold hover:underline">12 common mistakes</Link>.
        </p>

        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The full guide series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate can help</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a New Delhi-based advisory firm, established in 2016, that supports foreign companies
          at every stage of an Indian subsidiary. We work with Singapore finance teams and advisers so that the
          Indian and Singapore positions agree.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { n: "1", title: "Set up", desc: "Choose the structure and incorporate.", chips: ["Entity structuring", "Wholly owned subsidiary", "SPICe+ incorporation", "Bank account support"], href: "/india-business-setup/company-formation" },
            { n: "2", title: "Fund and FEMA", desc: "Bring capital in and report it.", chips: ["FEMA", "FC-GPR", "Share valuation", "ECB"] },
            { n: "3", title: "Operate", desc: "Books, payroll and indirect taxes, with a Singapore reporting pack.", chips: ["Accounting and bookkeeping", "GST", "Withholding Tax", "Payroll", "Monthly MIS", "Singapore consolidation support"], href: "/services/accounting-assurance" },
            { n: "4", title: "People and relocation", desc: "Hire, pay and relocate your team.", chips: ["Employer of Record", "HR services", "Expat visa", "EPF exemption file"], href: "/hr-services" },
            { n: "5", title: "Repatriate funds", desc: "Move money to Singapore with the paperwork and treaty position in order.", chips: ["Forms 145 and 146", "India-Singapore treaty relief", "Dividends", "Royalties and service fees", "Intercompany agreements"], highlight: true },
            { n: "6", title: "Tax and transfer pricing", desc: "Keep the India position defensible.", chips: ["Direct and indirect tax", "Transfer pricing", "Form 48", "PE review", "CbCR filing (parent-prepared report)"], href: "/services/taxation-regulatory" },
            { n: "7", title: "Audit and assurance", desc: "Satisfy Indian law and your Singapore auditors.", chips: ["Statutory audit", "Internal audit", "Internal financial controls", "GST and tax audit"], href: "/services/accounting-assurance" },
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
          <strong>Scope note:</strong> we handle the Indian side. Singapore tax, Singapore company law and
          Singapore regulatory advice come from your Singapore advisers, and we coordinate with them.
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

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/blog/singapore-to-india/faq"
          seeAllLabel="See all 143 questions"
          seeAllDescription="Plain answers from pre-incorporation to closure, including the treaty, CECA, staff, data and exit."
        />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on the Companies Act, 2013, FEMA and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, the Income-tax Act, 2025, the 1994 India-Singapore tax agreement and its protocols (IRAS), the India-Singapore CECA materials of the Singapore Government, and India's Digital Personal Data Protection Rules, 2025. Rules change often. We review this page at least quarterly and show the review date at the top."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "IRAS: Avoidance of double taxation agreements", href: "https://www.iras.gov.sg/irashome/Businesses/Companies/Working-out-Corporate-Income-Taxes/Companies-Receiving-Foreign-Income/Avoidance-of-Double-Taxation-Agreements--DTAs-/" },
            { label: "Singapore Mission in Mumbai: EPF exemption", href: "https://mumbai.mfa.gov.sg/mission-updates/exemption-for-singapore-citizens-contributing-to-indias-employees-provident-fund-organisation/" },
          ]}
        />

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 21 October 2026. General information only, not legal or tax advice. Indian and Singapore
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Planning an Indian Subsidiary from Singapore?"
        description="Tell us about your Singapore company, your timeline and your sector, and we'll reply with a recommended structure and a compliance overview."
      />
    </main>
  )
}
