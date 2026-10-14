import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"
import { InquiryTrigger } from "@/components/InquiryTrigger"

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "at-a-glance", label: "India subsidiary at a glance" },
  { id: "structure", label: "Which structure should a US company choose in India?" },
  { id: "steps", label: "How to incorporate an Indian subsidiary, step by step" },
  { id: "money", label: "How money moves between the US parent and the Indian subsidiary" },
  { id: "tax", label: "Tax and transfer pricing: what the US parent should know" },
  { id: "compliance", label: "Annual compliance: what an Indian subsidiary files" },
  { id: "hiring", label: "Hiring in India: your own subsidiary or an Employer of Record?" },
  { id: "cost", label: "What it costs and how long it takes" },
  { id: "mistakes", label: "Six mistakes US companies make when setting up in India" },
  { id: "beyond", label: "Beyond setup: audit, disputes, contracts and restructuring" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate can help" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "Subsidiary vs. branch vs. liaison office vs. LLP", desc: "Compare the four structures and choose.", href: "/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Incorporation process, step by step", desc: "Forms, sequence and realistic timelines.", href: "/blog/usa-to-india/incorporation-process" },
  { title: "Documents and apostille by US state", desc: "What the US parent must prepare first.", href: "/blog/usa-to-india/documents-and-apostille" },
  { title: "Resident director rules", desc: "Who can act and how to plan for it.", href: "/blog/usa-to-india/resident-director" },
  { title: "Funding the subsidiary: FEMA and FC-GPR", desc: "Capital infusion and RBI reporting.", href: "/blog/usa-to-india/funding-fema-fc-gpr" },
  { title: "Share valuation for foreign investment", desc: "Pricing rules and valuation certificates.", href: "/blog/usa-to-india/share-valuation" },
  { title: "Repatriating profits to the US", desc: "Dividends, royalties, fees, Forms 145 and 146, treaty relief.", href: "/blog/usa-to-india/repatriating-profits" },
  { title: "EOR vs. subsidiary in India", desc: "When to use each, and how to convert.", href: "/blog/usa-to-india/eor-vs-subsidiary" },
  { title: "Transfer pricing for US parents", desc: "Form 48, benchmarking and audits.", href: "/blog/usa-to-india/transfer-pricing" },
  { title: "Tax treaty and PE risk", desc: "DTAA, withholding and permanent establishment.", href: "/blog/usa-to-india/dtaa-pe-risk" },
  { title: "US parent obligations", desc: "Form 5471, FBAR and other US-side reporting.", href: "/blog/usa-to-india/us-parent-obligations" },
  { title: "Annual compliance calendar", desc: "Every filing, owner and deadline.", href: "/blog/usa-to-india/compliance-calendar" },
  { title: "Statutory, internal and ICOFR audit", desc: "For US-listed parents and their auditors.", href: "/blog/usa-to-india/audit-icofr" },
  { title: "Tax notices and disputes", desc: "Before the TPO, DRP and ITAT.", href: "/blog/usa-to-india/tax-notices-and-litigation" },
  { title: "Intercompany agreements, arbitration and litigation", desc: "Protecting your contracts in India.", href: "/blog/usa-to-india/contracts-and-arbitration" },
  { title: "ESOPs for Indian employees of a US parent", desc: "Granting, taxing and reporting ESOPs.", href: "/blog/usa-to-india/esop" },
  { title: "Restructuring, mergers and exit", desc: "Scale, reorganize or close the entity.", href: "/blog/usa-to-india/restructuring-and-exit" },
  { title: "Sending US executives to India", desc: "Visa, housing and tax for expats.", href: "/blog/usa-to-india/expat-visa" },
  { title: "Common mistakes US companies make", desc: "Avoidable errors, and how to avoid them.", href: "/blog/usa-to-india/common-mistakes" },
  { title: "Hiring and payroll in India", desc: "Employment contracts, PF, ESI and payroll compliance.", href: "/blog/usa-to-india/hiring-and-payroll" },
  { title: "100 FAQs on setting up an India subsidiary", desc: "From pre-incorporation to closure.", href: "/blog/usa-to-india/faq" },
]

const faqs = [
  { q: "Can a US company own 100% of an Indian subsidiary?", a: "Yes, in most sectors. India permits 100% foreign ownership under the automatic route, which needs no prior government approval. A few sectors have ownership caps, conditions or an approval requirement, so the answer depends on your business activity. We check the sector position before you commit to a structure." },
  { q: "What is the best way for a US company to enter India?", a: "For most operating businesses, a wholly owned subsidiary incorporated as a private limited company is the standard route. It is a separate legal entity with limited liability and can carry on full business. Branch and liaison offices have restricted activities, and an Employer of Record works well as a first step before you incorporate." },
  { q: "Does the Indian subsidiary need a director who lives in India?", a: "Yes. Every company in India must have at least one director who has stayed in India for 182 days or more in the financial year. A private limited company also needs at least two directors in total. Directors can be foreign nationals, but at least one must meet the residency test." },
  { q: "How long does it take to set up a subsidiary in India?", a: "Typically 4 to 6 weeks from receipt of complete documents. The MCA incorporation is usually the shortest step, and the main variable is how quickly the apostilled US documents are ready. No travel to India is required." },
  { q: "How much does it cost to set up an Indian subsidiary?", a: "AU Corporate's indicative setup fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about USD 10,300). Annual running costs for accounting, audit, tax, payroll and filings are additional and depend on your scope. Contact us for a costing tailored to your plan." },
  { q: "What is Form FC-GPR and when is it due?", a: "Form FC-GPR is the report an Indian company files with the RBI after issuing shares to a foreign investor. It must be filed within 30 days of the share allotment through the RBI's FIRMS portal, with supporting valuation and company secretary certificates. Late filing attracts a late submission fee or compounding." },
  { q: "How can profits be repatriated from India to the US?", a: "Common routes are dividends, service fees, royalties and loan repayments. Each involves Indian Withholding Tax, which the India-US tax treaty can reduce, and fees and royalties must meet transfer pricing rules. Remittances abroad usually need Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
  { q: "Should we use an Employer of Record or our own subsidiary?", a: "Use an Employer of Record (EOR) if you want to hire quickly or test the market without an entity. Set up a subsidiary if you plan a larger team, need to contract directly in India, or want long-term control. Many companies begin with an EOR and move the team into a subsidiary later." },
  { q: "Does an Indian subsidiary create US tax obligations for the parent?", a: "It can. A US company that owns a foreign subsidiary may have US reporting such as Form 5471, and its income may be affected by US international tax rules. These depend on your structure, so confirm the position with your US tax adviser. Our India team coordinates with them." },
  { q: "Can we sell or close the Indian subsidiary later?", a: "Yes. Options include selling the shares or the business, merging the subsidiary into another group company, or closing it through strike-off or voluntary liquidation. Each route has its own tax and RBI reporting steps, so plan the exit before you invest." },
]

export default function UsaToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from the USA: The 2026 Guide"
        description="How US companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
      />

      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "How to Set Up a Subsidiary in India from the USA" }]} />

      <GuideHero
        eyebrow="Guide for US companies"
        title="How to Set Up a Subsidiary in India from the USA: The 2026 Guide"
        dek="Structure, incorporation, FEMA/RBI filings, tax and compliance for US companies entering India — in plain terms, with the form names your advisers will use."
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          A US company can own up to 100% of an Indian subsidiary in most sectors without prior government approval
          (the automatic route). The usual vehicle is a private limited company, incorporated through the MCA&apos;s
          SPICe+ form, funded by share capital, and reported to the RBI within 30 days of share allotment. At least
          one director must be a resident of India.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide is for US founders, CFOs and COOs deciding how to enter India. It explains the structure, the
          process, the flow of money, tax, and the compliance an Indian subsidiary carries every year, in plain
          terms and with the form names your advisers will use. Each section links to a deeper guide.
        </p>

        <h2 id="at-a-glance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India subsidiary at a glance</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Typical structure", "Wholly owned subsidiary incorporated as a private limited company under the Companies Act, 2013"],
                ["Foreign ownership", "Up to 100% in most sectors under the automatic route. A few sectors have caps, conditions or approval requirements."],
                ["Directors and shareholders", "At least two directors and two shareholders. In a wholly owned subsidiary the second shareholder is usually a nominee or group entity holding one share."],
                ["Resident director", "At least one director who has stayed in India for 182 days or more in the financial year"],
                ["Minimum capital", "No statutory minimum. The practical amount depends on your activity, funding needs and the bank."],
                ["Registered office", "A physical address in India is mandatory"],
                ["Incorporation route", "MCA's SPICe+ integrated form, which can also apply for PAN, TAN, GST, EPFO, ESIC and a bank account"],
                ["Travel to India", "Not required. The process runs online using apostilled documents and digital signatures."],
                ["RBI reporting", "Form FC-GPR within 30 days of allotting shares to the US parent, filed on the RBI's FIRMS portal"],
                ["Annual obligations", "Statutory audit, ROC filings, income tax return, GST and Withholding Tax where applicable, payroll compliance, the FLA return to the RBI, and transfer pricing reporting where applicable"],
                ["Governing laws", "Companies Act, 2013; FEMA, 1999 and the Non-Debt Instruments Rules, 2019; Consolidated FDI Policy; Income-tax Act, 2025 (replacing the Income-tax Act, 1961 from 1 April 2026) and GST law"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which structure should a US company choose in India?</h2>
        <GuideAnswerBox>
          Most US companies choose a wholly owned subsidiary (a private limited company). It is a separate legal
          entity, can carry on full business operations, limits the parent&apos;s liability and is taxed as a
          domestic company. Branch offices, liaison offices and LLPs exist but suit narrower situations.
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
                ["Wholly owned subsidiary (private limited)", "Operations, sales, development centers, global capability centers", "Two directors (one resident), annual audit and ROC compliance"],
                ["Branch office", "Specific activities of the parent, such as export and import, consultancy, R&D or IT services", "Needs RBI approval; acts as an extension of the US company and is taxed as a foreign company"],
                ["Liaison office", "Market research and liaison with no revenue", "Cannot earn income or invoice; costs are funded from abroad; needs RBI approval"],
                ["LLP", "Certain partnership-style set-ups", "FDI allowed only in eligible sectors; US tax treatment can be complex, so check with your US adviser"],
                ["No entity (Employer of Record)", "Hiring quickly or testing the market", "The EOR is the legal employer; not a long-term substitute at scale"],
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
          Not sure which fits? Read the full comparison:{" "}
          <Link href="/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" className="text-blue-800 font-semibold hover:underline">
            Subsidiary vs. branch vs. liaison office vs. LLP
          </Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to incorporate an Indian subsidiary, step by step</h2>
        <GuideAnswerBox>
          Incorporation takes eight steps: confirm FDI eligibility, prepare apostilled US documents, obtain digital
          signatures, file SPICe+, open a bank account, transfer the funds for share capital, allot shares and
          report to the RBI, then begin formal operations. The longest delays usually come from US document
          apostille.
        </GuideAnswerBox>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Confirm FDI eligibility.</strong> Check your business activity against the FDI Policy. Most services and technology activities are on the automatic route; some sectors have caps or conditions.</li>
          <li><strong>Prepare the US parent&apos;s documents.</strong> Typically the certificate of incorporation and good standing, a board resolution authorizing the investment and signatories, and identity and address proofs of the directors and authorized signatory. US documents are usually notarized and apostilled before use in India.</li>
          <li><strong>Get digital signatures.</strong> Each proposed director needs a Digital Signature Certificate (DSC) to sign the incorporation forms electronically.</li>
          <li><strong>Reserve the name and file SPICe+.</strong> The name is approved on the MCA portal, and SPICe+ is filed with the Memorandum and Articles of Association. A registered office address in India, with proof, is required.</li>
          <li><strong>Receive the Certificate of Incorporation.</strong> The MCA issues it with the Corporate Identification Number (CIN), along with the company&apos;s PAN and TAN.</li>
          <li><strong>Open the bank account and transfer the funds for share capital.</strong> The US parent transfers the subscription money to the company&apos;s Indian bank account by inward remittance through an authorized dealer bank, which issues the foreign inward remittance certificate.</li>
          <li><strong>Allot shares and report to the RBI.</strong> Shares must be allotted within 60 days of receiving the funds, otherwise the money must be refunded. Form FC-GPR is filed within 30 days of allotment, with a valuation certificate and a company secretary&apos;s certificate.</li>
          <li><strong>Commence business.</strong> File Form INC-20A (declaration of commencement) within 180 days of incorporation, appoint the first statutory auditor, and complete the GST, payroll and other registrations that apply to you.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Typical end-to-end timeline: 4 to 6 weeks</strong> from receipt of complete documents. Deeper
          guides:{" "}
          <Link href="/blog/usa-to-india/incorporation-process" className="text-blue-800 font-semibold hover:underline">Incorporation process</Link>{" "}
          and{" "}
          <Link href="/blog/usa-to-india/documents-and-apostille" className="text-blue-800 font-semibold hover:underline">Documents and apostille</Link>.
        </p>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How money moves between the US parent and the Indian subsidiary</h2>
        <GuideAnswerBox>
          The US parent invests by subscribing to shares, or convertible instruments, in the Indian company through
          banking channels. Each investment is reported to the RBI under FEMA, with the share price supported by a
          valuation. Money returns to the US as dividends, service fees, royalties or loan repayments, each with its
          own tax and compliance steps.
        </GuideAnswerBox>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Going in:</strong> equity shares are the most common route. Convertible preference shares, convertible debentures and external commercial borrowings have their own rules. Shares issued to a non-resident cannot be priced below fair value, certified by an eligible professional.</li>
          <li><strong>Reporting:</strong> Form FC-GPR for share issues, within 30 days of allotment, and the annual FLA return (due by 15 July) for foreign assets and liabilities.</li>
          <li><strong>Coming out:</strong> dividends, which attract withholding tax; service fees and royalties, which are subject to transfer pricing and withholding tax; and loan repayments under ECB rules. Remittances abroad typically need Form 145 (previously Form 15CA) and, where required, a chartered accountant&apos;s Form 146 (previously Form 15CB).</li>
          <li><strong>Treaty relief:</strong> the India-US tax treaty (DTAA) can reduce withholding rates, subject to conditions such as a US tax residency certificate.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/blog/usa-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">Funding and FC-GPR</Link>,{" "}
          <Link href="/blog/usa-to-india/share-valuation" className="text-blue-800 font-semibold hover:underline">Share valuation</Link>,{" "}
          <Link href="/blog/usa-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Repatriating profits</Link>.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and transfer pricing: what the US parent should know</h2>
        <GuideAnswerBox>
          An Indian subsidiary pays Indian tax on its Indian profits. Any transaction between it and the US parent,
          such as service fees, royalties, cost sharing or loans, must be priced at arm&apos;s length and
          documented. This is called transfer pricing, and it is one of the most reviewed areas in Indian tax
          audits.
        </GuideAnswerBox>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Transfer pricing documentation:</strong> where international transactions with associated enterprises exist, the company needs a transfer pricing study and a chartered accountant&apos;s report in Form 48 (previously Form 3CEB) under Section 172 of the Income-tax Act, 2025 (previously Section 92E of the Income-tax Act, 1961). Arm&apos;s length pricing itself is governed by Section 161 (previously Section 92).</li>
          <li><strong>Withholding Tax:</strong> payments to the US parent may attract Withholding Tax under Section 393 of the Income-tax Act, 2025 (previously Section 195 of the Income-tax Act, 1961), which the treaty can reduce.</li>
          <li><strong>Permanent establishment (PE) risk:</strong> US employees working in India, or contracts negotiated by the parent&apos;s staff, can create a taxable presence for the US company. Structure and agreements matter.</li>
          <li><strong>GST:</strong> services provided to the US parent can qualify as zero-rated exports if the conditions are met, but registration, invoicing and refund rules must be followed.</li>
          <li><strong>US-side reporting:</strong> a US company that owns a foreign subsidiary may have US filings such as Form 5471. Our India team coordinates with your US CPA, who confirms the US position.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/blog/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing</Link>,{" "}
          <Link href="/blog/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">Tax treaty and PE risk</Link>,{" "}
          <Link href="/blog/usa-to-india/us-parent-obligations" className="text-blue-800 font-semibold hover:underline">US parent obligations</Link>.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual compliance: what an Indian subsidiary files</h2>
        <GuideAnswerBox>
          An Indian subsidiary has monthly, quarterly and annual filings across the Ministry of Corporate Affairs,
          the income tax and GST authorities, the RBI and labour law agencies. Missing a deadline usually triggers
          late fees or penalties, and some defaults also affect the directors.
        </GuideAnswerBox>
        <div className="overflow-x-auto mb-4">
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
                ["Statutory audit and financial statements", "Annual", "Completed before the AGM", "Companies Act"],
                ["Annual General Meeting", "Annual", "Within 6 months of year end (first AGM within 9 months of the first year end)", "Companies Act"],
                ["AOC-4 (financial statements)", "Annual", "Within 30 days of the AGM", "MCA"],
                ["MGT-7 (annual return)", "Annual", "Within 60 days of the AGM", "MCA"],
                ["Income tax return", "Annual", "By the due date set for the tax year; companies needing a tax audit or transfer pricing report have a later date (confirm each year)", "Income-tax Act, 2025"],
                ["Advance tax", "Quarterly", "15 June, 15 September, 15 December, 15 March", "Income-tax Act, 2025"],
                ["Tax audit report: Form 26 (previously Forms 3CA/3CB and 3CD)", "Annual, if applicable", "With the income tax return due date", "Income-tax Act, 2025"],
                ["Form 48 (previously Form 3CEB), transfer pricing report", "Annual, if applicable", "Before the income tax return due date (confirm each year)", "Income-tax Act, 2025"],
                ["Withholding Tax payment and returns", "Monthly and quarterly", "Deposit by the 7th of the next month; quarterly statements in Forms 138, 140 and 144 (previously Forms 24Q, 26Q and 27Q)", "Income-tax Act, 2025"],
                ["GST returns", "Monthly or quarterly", "As per registration", "GST"],
                ["Provident fund and ESI", "Monthly", "By the 15th of the next month", "EPFO, ESIC"],
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
          <strong>Note on the new tax law.</strong> The Income-tax Act, 2025 and the Income-tax Rules, 2026 apply
          from 1 April 2026 (tax year 2026-27 onward). This guide gives the new form and section names, with the
          earlier names under the Income-tax Act, 1961 in brackets. Returns and reports for earlier years still
          follow the 1961 Act and its old forms. Dates and form applicability should be confirmed each year.
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          The complete, maintained version of this table is in our{" "}
          <Link href="/blog/usa-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">Annual compliance calendar</Link>.
        </p>

        <h2 id="hiring" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hiring in India: your own subsidiary or an Employer of Record?</h2>
        <GuideAnswerBox>
          An Employer of Record (EOR) legally employs your team in India on your behalf, so you can hire without an
          entity. A subsidiary gives you full control, a local contracting vehicle and a base for long-term growth.
          Many US companies start with an EOR and convert to a subsidiary once the team or investment grows.
        </GuideAnswerBox>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Choose an EOR when</strong> you want to start within weeks, are testing the market, or need a handful of hires.</li>
          <li><strong>Choose a subsidiary when</strong> you plan a larger team, need to sign contracts or hold assets in India, or want direct control over employment terms and IP.</li>
          <li><strong>Either way,</strong> employment brings statutory obligations: provident fund, ESI, gratuity, professional tax, state establishment rules and India&apos;s labour codes.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/blog/usa-to-india/eor-vs-subsidiary" className="text-blue-800 font-semibold hover:underline">EOR vs. subsidiary</Link>{" "}
          and{" "}
          <Link href="/blog/usa-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">Hiring and payroll</Link>.
        </p>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What it costs and how long it takes</h2>
        <GuideAnswerBox>
          Total cost has two parts: one-time setup (government fees, stamp duty, professional fees, registered
          office) and recurring running cost (accounting, audit, tax and payroll compliance, plus any resident
          director or office arrangement). The timeline depends mainly on how quickly the US documents are
          apostilled.
        </GuideAnswerBox>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>One-time:</strong> MCA and stamp duty (varies by state and authorized capital), professional fees, digital signatures, registered office set-up and bank charges.</li>
          <li><strong>Recurring:</strong> accounting and bookkeeping, statutory audit, GST, Withholding Tax and income tax filings, payroll, RBI filings, and any resident director or virtual office service.</li>
          <li><strong>Variable:</strong> transfer pricing documentation, tax notices, ESOPs, valuation and legal work as the entity grows.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-6">
          <strong>Indicative setup fee:</strong> AU Corporate&apos;s fee for setting up the subsidiary is USD 750 to
          USD 1,000 for share capital up to ₹10 lakh (about USD 10,300 at ₹96.77 per US dollar on 7 October
          2026). The final quote depends on your structure, state and scope of services.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-between bg-[#fffbe6] border border-gold-dark rounded-xl p-5 mb-10">
          <div>
            <strong className="block text-gray-900">Get a costing for your plan</strong>
            <p className="text-sm text-gray-600 mt-0.5">Tell us what you plan to set up and we will prepare a costing and book a call to walk you through it.</p>
          </div>
          <InquiryTrigger className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-[#081a42] hover:bg-gold-dark transition-colors whitespace-nowrap">
            Discuss your costing
          </InquiryTrigger>
        </div>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Six mistakes US companies make when setting up in India</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Starting documents late.</strong> Notarization and apostille lead times can hold up the whole process.</li>
          <li><strong>Missing RBI timelines.</strong> Allotting shares late, or filing FC-GPR late, leads to fees or compounding.</li>
          <li><strong>Skipping the pricing check.</strong> Shares issued to non-residents need a compliant valuation. Getting it wrong creates a FEMA issue.</li>
          <li><strong>No intercompany agreement or transfer pricing file.</strong> Fees and royalties without agreements and benchmarking are what tax officers review first.</li>
          <li><strong>Overlooking the resident director rule.</strong> Plan it before filing, not after.</li>
          <li><strong>Posting staff or negotiating contracts from the US without a PE review.</strong> Check the permanent establishment position before seconding executives.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-10">
          More detail:{" "}
          <Link href="/blog/usa-to-india/common-mistakes" className="text-blue-800 font-semibold hover:underline">Common mistakes</Link>.
        </p>

        <h2 id="beyond" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Beyond setup: audit, disputes, contracts and restructuring</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An Indian subsidiary needs support well after incorporation. These guides cover what US parents usually
          ask about next.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><Link href="/blog/usa-to-india/audit-icofr" className="text-blue-800 font-semibold hover:underline">Statutory, internal and ICOFR audit</Link> for US-listed parents and their auditors</li>
          <li><Link href="/blog/usa-to-india/tax-notices-and-litigation" className="text-blue-800 font-semibold hover:underline">Tax notices and disputes</Link> before the TPO, DRP and ITAT</li>
          <li><Link href="/blog/usa-to-india/contracts-and-arbitration" className="text-blue-800 font-semibold hover:underline">Intercompany agreements, arbitration and court litigation</Link></li>
          <li><Link href="/blog/usa-to-india/esop" className="text-blue-800 font-semibold hover:underline">ESOPs for Indian employees of a US parent</Link></li>
          <li><Link href="/blog/usa-to-india/restructuring-and-exit" className="text-blue-800 font-semibold hover:underline">Restructuring, mergers and exit</Link></li>
          <li><Link href="/blog/usa-to-india/expat-visa" className="text-blue-800 font-semibold hover:underline">Sending US executives to India: visa, housing and tax</Link></li>
          <li><Link href="/blog/usa-to-india/global-vat" className="text-blue-800 font-semibold hover:underline">Global VAT for SaaS and AI companies</Link></li>
        </ul>

        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The full guide series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate can help</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          AU Corporate is a New Delhi-based advisory firm, established in 2016, that supports foreign companies
          across the India lifecycle. One team covers every stage below, so your US team deals with one point of
          contact.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { n: "1", title: "Set up", desc: "Choose the right structure and incorporate your Indian entity.", chips: ["Entity structuring", "Wholly owned subsidiary", "Branch and liaison office", "SPICe+ incorporation", "MCA compliance"], href: "/india-business-setup/company-formation" },
            { n: "2", title: "Fund and FEMA", desc: "Bring capital in legally and report it to the RBI.", chips: ["FEMA", "RBI reporting", "FC-GPR", "Share valuation", "ESOP valuation"] },
            { n: "3", title: "Operate", desc: "Keep books, payroll and indirect taxes in order every month, for India and for the US parent.", chips: ["Accounting", "GST", "Withholding Tax", "Payroll", "Monthly MIS"], href: "/services/accounting-assurance" },
            { n: "4", title: "People and expats", desc: "Hire, pay and relocate your team.", chips: ["Employer of Record (EOR)", "HR services", "Payroll compliance", "Expat visa", "Expat tax filings"], href: "/hr-services" },
            { n: "5", title: "Repatriate funds", desc: "Move money back to the US parent, with the paperwork and tax position in order.", chips: ["Forms 145 and 146", "DTAA treaty relief", "Withholding Tax", "Dividends and royalties"], highlight: true },
            { n: "6", title: "Tax and transfer pricing", desc: "Keep the group's India tax position defensible.", chips: ["Direct and indirect tax", "Transfer pricing", "Form 48", "International taxation"], href: "/services/taxation-regulatory" },
            { n: "7", title: "Audit and assurance", desc: "Satisfy Indian law and your US auditors.", chips: ["Statutory audit", "Internal audit", "ICOFR audit", "GST and income tax audit"], href: "/services/accounting-assurance" },
            { n: "8", title: "Legal, disputes and arbitration", desc: "Defend your position and protect your contracts.", chips: ["Tax litigation (TPO, DRP, ITAT)", "Arbitration", "Court litigation", "Agreement drafting"], href: "/arbitration-services" },
            { n: "9", title: "Restructure and grow", desc: "Scale, reorganize or exit.", chips: ["Business restructuring", "M&A", "Due diligence", "Exit and winding up"], href: "/services/transaction-advisory" },
            { n: "10", title: "Beyond India", desc: "Indirect tax for digital businesses worldwide.", chips: ["Global VAT", "SaaS and AI companies", "100+ jurisdictions"], href: "/blog/usa-to-india/global-vat" },
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
        <p className="text-sm text-gray-500 mb-10">
          <strong>Scope note:</strong> we file Country-by-Country Reports (CbCR) in India when the global report has
          been prepared by the parent group. We do not prepare the global CbCR report itself.
        </p>

        <GuideCTA
          title="Talk to us about your India plan"
          description="A 30-minute call to cover structure, timeline and compliance for your case."
        />

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/blog/usa-to-india/faq" />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on the Companies Act, 2013, the Foreign Exchange Management Act, 1999 and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, and guidance from the Ministry of Corporate Affairs and the Reserve Bank of India. Indian rules, forms and due dates change often. We review this page at least quarterly and after major budget or RBI changes, and show the date of the last review at the top. This page is general information, not legal or tax advice."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India: FEMA and FIRMS portal", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "GST portal", href: "https://www.gst.gov.in" },
          ]}
        />

        <GuideAuthorBio />
        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 October 2026. General information only, not legal or tax advice. Indian rules change often;
          confirm current requirements before acting.
        </p>
      </article>
    </main>
  )
}

function GuideCTAInline() {
  const { InquiryTrigger } = require("@/components/InquiryTrigger")
  return (
    <InquiryTrigger className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-[#081a42] hover:bg-gold-dark transition-colors whitespace-nowrap">
      Discuss your costing
    </InquiryTrigger>
  )
}
