import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Check } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"
import { AuthorLink } from "@/components/AuthorLink"

const heroFacts = [
  { title: "Reasonable Fees", body: "A clear written quote before we start" },
  { title: "Every Tax Deadline Tracked", body: "Income tax, TDS, GST and transfer pricing" },
  { title: "Transfer Pricing In-House", body: "Report and documentation with the parent in mind" },
  { title: "One-Stop Tax Team", body: "From returns to appeals, under one roof" },
]

const quickAnswer = {
  heading: "Corporate Tax, GST and Transfer Pricing for an Indian Subsidiary: The Short Answer",
  text: "An Indian subsidiary of a foreign company pays income tax at an effective rate of about 25.17 percent under the concessional regime (22 percent tax, 10 percent surcharge and 4 percent cess), deducts and deposits TDS on its payments, registers for and files GST returns, and, if it deals with its parent or group companies, prepares a transfer pricing report showing those dealings are at arm's length. AU Corporate, a New Delhi firm of Chartered Accountants serving foreign parents since 2016, prepares and files all of these, and also represents the subsidiary in tax and GST disputes, refund claims and advance rulings, at reasonable fees.",
}

const youGet = [
  "Corporate income tax return filed on time",
  "Advance tax worked out and paid in every instalment",
  "TDS deducted, deposited and reported correctly",
  "GST registration, returns and input credit managed",
  "A transfer pricing report and documentation that stand up to scrutiny",
]

const taxByTax = [
  { tag: "Every Year", title: "Corporate Income Tax Return", body: "Computation of taxable income from the audited accounts, return filing and tax payment, with the group's tax position explained clearly." },
  { tag: "Four Times a Year", title: "Advance Tax", body: "Estimate of the year's tax and payment in each instalment, so the subsidiary avoids interest for short payment." },
  { tag: "Every Month and Quarter", title: "TDS Compliance", body: "Deduction on salaries, vendors, rent and payments abroad, deposit with the government and the quarterly TDS returns." },
  { tag: "Every Month", title: "GST Registration and Returns", body: "Registration, monthly or quarterly returns, input credit reconciliation and refund of unused credit on exports of services." },
  { tag: "Every Year", title: "Tax Audit", body: "Preparation of the schedules and coordination with the auditor where a tax audit applies to the subsidiary." },
  { tag: "Every Year", title: "Transfer Pricing", body: "Study of transactions with the parent, the pricing method, documentation and the accountant's report filed with the return." },
  { tag: "When the Parent Earns from India", title: "DTAA Opinions", body: "Written opinions on whether payments to the parent, such as dividends, fees, royalties and interest, qualify for tax treaty relief, with the documents needed to claim it." },
  { tag: "When Profits Go Abroad", title: "Tax Compliance for Repatriations", body: "Withholding tax on dividends, fees, royalties and loan repayments to the parent, the Chartered Accountant's certificate and the declaration the bank needs before each remittance." },
  { tag: "When an Expat Joins", title: "Expat Taxation", body: "Tax residence, tax on salary and allowances, treaty relief and foreign tax credit for employees posted to India, with their income tax returns." },
  { tag: "When a Notice or Order Arrives", title: "Assessments Before the AO and TPO", body: "Replies to income tax notices, preparation for scrutiny and representation before the Assessing Officer (AO) and, in transfer pricing cases, the Transfer Pricing Officer (TPO)." },
  { tag: "After a Draft Order", title: "Dispute Resolution Panel (DRP)", body: "Objections to a draft assessment order before the Dispute Resolution Panel, which can direct changes before the final order is passed." },
  { tag: "After a Final Order", title: "Appeals Before CIT(A) and ITAT", body: "First appeals before the Commissioner of Income Tax (Appeals) and second appeals before the Income Tax Appellate Tribunal (ITAT), with paperwork and arguments prepared by AU." },
  { tag: "When GST Demands Arise", title: "GST Litigation", body: "Replies to GST notices and show cause notices, personal hearings and appeals against GST orders before the appellate authority and the GST Appellate Tribunal." },
  { tag: "When Input Credit Builds Up", title: "GST Refund", body: "Refund of unused input tax credit and of tax paid on exports of services, from the application to follow-up with the refund officer." },
  { tag: "Before a Doubtful Transaction", title: "GST Advance Ruling", body: "An application to the Authority for Advance Ruling for a binding answer on a GST question, such as classification, credit or liability, before you act." },
]

const taxRateTable = [
  { component: "Base income tax", rate: "22%", on100: "INR 22.00" },
  { component: "Surcharge", rate: "10% of the tax", on100: "INR 2.20, so tax becomes INR 24.20" },
  { component: "Health and education cess", rate: "4% of tax plus surcharge", on100: "INR 0.97, so tax becomes INR 25.17" },
]

const needFromYou = [
  { n: "1", title: "Audited Accounts or Trial Balance", body: "Only if AU Corporate does not keep your books. Otherwise we already have them." },
  { n: "2", title: "Intercompany Agreements", body: "Service, loan, royalty or purchase agreements with the parent or group companies." },
  { n: "3", title: "Registrations and Portal Access", body: "PAN, TAN, GST registration and tax portal access." },
  { n: "4", title: "Earlier Returns and Notices", body: "Past income tax returns, TDS returns, GST returns, assessment orders and any notices." },
  { n: "5", title: "Payment Records", body: "Details of payments to vendors, professionals, landlords and employees for TDS. Only if AU Corporate does not keep your books." },
]

const workSteps = [
  { wk: "Week 1", title: "Review", body: "Check registrations, past returns, notices and open tax positions." },
  { wk: "Ongoing", title: "Calculate", body: "Work out monthly TDS and GST and quarterly advance tax from the books." },
  { wk: "Ongoing", title: "File", body: "Prepare and file returns before each due date." },
  { wk: "After Year End", title: "Report", body: "Prepare the income tax return, tax audit schedules and transfer pricing report." },
  { wk: "Always", title: "Advise", body: "Flag tax risks and savings in your parent's transactions." },
]

const included = [
  "Corporate Income Tax Return",
  "Advance Tax Calculation",
  "TDS Calculation and Returns",
  "GST Registration and Returns",
  "Input Credit Reconciliation",
  "Support in a Tax Audit",
  "Transfer Pricing Study and Report",
  "Replies to Routine Tax Notices",
  "DTAA Opinions and Treaty Benefit Support",
  "Tax Compliance for Repatriations",
  "Expat Tax Advice and Returns",
  "Representation Before the AO, TPO and DRP",
  "Appeals Before CIT(A) and ITAT",
  "GST Notices, Orders and Appeals",
  "GST Refund Applications",
  "GST Advance Ruling Applications",
]

const calendar = [
  { when: "Before each remittance abroad", what: "Withholding tax, accountant's certificate and bank declaration", how: "Calculated, certified and deposited" },
  { when: "7th of every month", what: "Deposit of TDS for the previous month", how: "Calculated and deposited" },
  { when: "Monthly or quarterly", what: "GST returns and tax payment", how: "Prepared and filed" },
  { when: "15 June, 15 September, 15 December, 15 March", what: "Advance tax instalments", how: "Estimated and paid" },
  { when: "Quarterly, after each quarter", what: "TDS returns", how: "Prepared and filed" },
  { when: "30 September", what: "Tax audit report, where applicable", how: "Schedules prepared with the auditor" },
  { when: "31 October", what: "Transfer pricing accountant's report; income tax return where no transfer pricing applies", how: "Study and report prepared" },
  { when: "30 November", what: "Income tax return where transfer pricing applies", how: "Filed with the report" },
  { when: "Generally 30 days from a draft assessment order", what: "Objections to the Dispute Resolution Panel", how: "Objections prepared and filed" },
  { when: "Generally 30 days from an assessment order", what: "Appeal to the CIT(A)", how: "Appeal and grounds prepared and filed" },
  { when: "Generally 60 days from the CIT(A) order", what: "Appeal to the ITAT", how: "Appeal and paper book prepared and filed" },
  { when: "Generally three months from a GST order", what: "First appeal against a GST order", how: "Appeal prepared with the pre-deposit" },
]

const afterLinks = [
  { label: "Accounting, Reporting and Audit Support", href: "/accounting-reporting-audit-support" },
  { label: "FEMA and RBI Compliance", href: "/fema-rbi-compliance" },
  { label: "Secretarial and ROC Compliance", href: "/secretarial-roc-compliance" },
  { label: "Payroll and Expat Services", href: "/payroll-expat-services" },
  { label: "India Subsidiary Registration", href: "/india-subsidiary-registration" },
]

const faqs = [
  { q: "What taxes does a foreign-owned subsidiary pay in India?", a: "In India, a subsidiary of a foreign company pays corporate income tax on its profits, GST on its supplies, and deducts TDS on payments such as salaries, rent and vendor fees. AU Corporate calculates, files and tracks all three from your accounting records and keeps your parent informed." },
  { q: "What is the effective corporate tax rate for an Indian subsidiary in India?", a: "In India, an Indian subsidiary that opts for the concessional regime pays income tax at 22 percent, plus a 10 percent surcharge on the tax and 4 percent health and education cess on the total, which gives an effective rate of about 25.17 percent. Conditions apply, and AU Corporate confirms the rate and regime for your year before filing." },
  { q: "How much does corporate tax, GST and transfer pricing compliance cost in India?", a: "AU Corporate charges reasonable fees for this service, in US dollars, and confirms a clear written quote before work begins, so there are no surprises. The fee depends on the size of your subsidiary, the volume of work and whether past filings need to be reviewed. Government fees and third-party fees are separate." },
  { q: "What is transfer pricing and does my Indian subsidiary need a report?", a: "In India, transfer pricing rules require transactions between the subsidiary and its foreign parent or group companies to be priced as between independent parties. If your subsidiary has such transactions, it needs an accountant's transfer pricing report filed with the return, and AU Corporate prepares it with the documentation." },
  { q: "When is the transfer pricing report due in India?", a: "In India, for an Indian subsidiary with international transactions, the accountant's transfer pricing report is generally due by 31 October and the income tax return by 30 November following the financial year. AU Corporate confirms the exact dates under the current rules and prepares the study well before them." },
  { q: "Is there a safe harbour for IT services or captive centres in India?", a: "In India, safe harbour rules allow certain transactions, such as IT services, to be accepted at a prescribed margin without a full study if conditions are met. The rules were revised from 1 April 2026. AU Corporate checks if your subsidiary qualifies and compares the safe harbour margin with a full study." },
  { q: "Does an Indian subsidiary need to register for GST?", a: "In India, an Indian subsidiary must register for GST once its turnover crosses the threshold, and many subsidiaries that export services register to claim refund of GST on inputs. AU Corporate checks your business activity and turnover, registers the subsidiary and sets up monthly or quarterly returns." },
  { q: "What is TDS and which payments does an Indian subsidiary deduct it on?", a: "In India, TDS is tax deducted at source by the payer when it pays salaries, rent, professional fees, contractors or payments to non-residents. The subsidiary deposits the tax with the government, usually by the 7th of the next month, and files quarterly returns. AU Corporate calculates and files both." },
  { q: "What is advance tax and when is it paid in India?", a: "In India, advance tax is the income tax an Indian subsidiary pays in instalments during the year, on 15 June, 15 September, 15 December and 15 March, based on its estimated profit. A short payment attracts interest. AU Corporate estimates the profit each quarter and works out each instalment." },
  { q: "When is a tax audit required for an Indian subsidiary?", a: "In India, a tax audit is required when the subsidiary's turnover exceeds the limit set in the income tax law, which differs when most transactions are digital. The tax audit report is generally due by 30 September, or 31 October for transfer pricing cases. AU Corporate checks if it applies." },
  { q: "Does the Income-tax Act, 2025 change anything for my Indian subsidiary?", a: "The Income-tax Act, 2025 and the Income-tax Rules, 2026 apply from 1 April 2026 and replace the 1961 law, with new section numbers and form names. Returns for the year ending 31 March 2026 still follow the earlier law. AU Corporate applies the right law and forms for each year." },
  { q: "What is income tax litigation and when does an Indian subsidiary need it?", a: "In India, income tax litigation means handling a dispute with the tax department over an assessment, from replying to notices to appealing before higher authorities. A subsidiary needs it when an order adds income or reduces a claim. AU Corporate prepares the replies, appeals and arguments at each stage." },
  { q: "What does the Assessing Officer (AO) do in a scrutiny assessment in India?", a: "In India, the Assessing Officer (AO) is the income tax officer who examines the subsidiary's return in a scrutiny assessment, asks for explanations and documents, and passes the assessment order. AU Corporate prepares the replies and attends the hearings so the subsidiary's position is clearly presented." },
  { q: "What is the Transfer Pricing Officer (TPO) and when is a case sent to the TPO?", a: "In India, the Assessing Officer sends a case to the Transfer Pricing Officer (TPO) when the subsidiary has international transactions with its parent or group companies. The TPO decides if the prices were at arm's length and can propose an adjustment. AU Corporate defends the pricing with the transfer pricing study." },
  { q: "What is the Dispute Resolution Panel (DRP) and who can approach it?", a: "In India, the Dispute Resolution Panel (DRP) is a panel of senior tax officers that hears objections to a draft assessment order, for example after a transfer pricing adjustment. An eligible Indian subsidiary can object, generally within 30 days of the draft order. AU Corporate prepares and files the objections." },
  { q: "What is an appeal before the CIT(A) and what is the time limit?", a: "In India, an appeal to the Commissioner of Income Tax (Appeals), or CIT(A), is the first appeal against an assessment order, generally filed within 30 days. The CIT(A) reviews the facts and the law and can change the order. AU Corporate prepares the grounds of appeal and the submissions." },
  { q: "What is the ITAT and when can a subsidiary appeal to it?", a: "In India, the Income Tax Appellate Tribunal (ITAT) hears second appeals against orders of the CIT(A), or directions of the DRP, generally filed within 60 days. It is the last forum for facts. AU Corporate prepares the appeal and the paper book and presents the case." },
  { q: "Do we have to pay the tax demand while an appeal is pending in India?", a: "In India, the tax department can ask for part of the disputed demand to be paid even when an appeal is pending, and the subsidiary can ask for a stay of the rest. AU Corporate prepares the stay application and works out how much needs to be deposited." },
  { q: "What is GST litigation and which notices does it cover?", a: "In India, GST litigation covers disputes over GST notices, show cause notices, demand orders, credit denials and refund rejections. AU Corporate reviews the notice, replies on time, attends hearings and, if needed, files an appeal against the order." },
  { q: "How do I appeal against a GST order in India?", a: "In India, a first appeal against a GST order goes to the appellate authority, generally within three months, with a pre-deposit of part of the disputed tax, and a further appeal goes to the GST Appellate Tribunal. AU Corporate prepares the appeals and the papers." },
  { q: "How do I claim a GST refund on exports of services from India?", a: "In India, exports of services are zero-rated, so an Indian subsidiary can claim a refund of unused input tax credit, or of tax paid on exports, within two years of the relevant date, if the payment is received in foreign currency. AU Corporate prepares the application and follows it up." },
  { q: "What is a GST advance ruling and who can apply?", a: "In India, a GST advance ruling is a written decision from the Authority for Advance Ruling on a question such as classification, credit or liability, before the transaction is carried out. It is binding on the applicant and the tax officer. AU Corporate prepares the application." },
  { q: "Can AU Corporate represent my Indian subsidiary before tax authorities and tribunals, and how are fees charged?", a: "AU Corporate's Chartered Accountants and lawyers prepare and present your subsidiary's case before the AO, TPO, DRP, CIT(A), ITAT and GST authorities. AU Corporate charges reasonable fees, quoted for each matter before work begins. Government charges, deposits and tribunal fees are paid separately." },
  { q: "What is a DTAA and how does it help an Indian subsidiary and its foreign parent?", a: "A Double Taxation Avoidance Agreement (DTAA) is a tax treaty between India and another country that sets which country may tax income such as dividends, interest, royalties and fees, and at what maximum rate. It can lower the tax withheld on payments from the Indian subsidiary to its parent. AU Corporate checks the treaty for your parent's country." },
  { q: "What does a DTAA opinion from AU Corporate cover?", a: "A DTAA opinion from AU Corporate sets out whether a payment between the Indian subsidiary and its parent qualifies for treaty relief, the rate that applies, the documents needed and any risk of a permanent establishment in India. It is written for your finance team and can be shared with auditors and tax advisers." },
  { q: "What documents does a foreign parent need to claim DTAA benefits in India?", a: "To claim treaty benefits in India, a foreign parent generally needs a tax residency certificate from its home country, the information form required by the Indian tax rules, and evidence that it is the real owner of the income. AU Corporate prepares the Indian side and tells you what to obtain from your home tax authority." },
  { q: "How are dividends paid by an Indian subsidiary to its foreign parent taxed?", a: "In India, dividends paid by an Indian subsidiary to a non-resident parent are subject to withholding tax under Indian tax law, and a tax treaty between India and the parent's country may reduce the rate. AU Corporate works out the rate that applies to your parent and deducts and deposits the tax before the dividend is paid." },
  { q: "What tax compliance is needed before an Indian subsidiary sends money to its foreign parent?", a: "Before sending dividends, fees, royalties or loan repayments abroad, the Indian subsidiary must decide whether tax has to be withheld and at what rate, obtain a Chartered Accountant's certificate and give the bank the required declaration. AU Corporate handles each step and deposits the tax, so the bank can release the money." },
  { q: "How is an expat working for an Indian subsidiary taxed in India?", a: "In India, an expat's tax depends on residence. An employee who stays 182 days or more in a tax year is generally a resident and is taxed on salary for work done in India, with possible relief under a tax treaty and credit for foreign tax. AU Corporate works out the position and the tax withheld through payroll." },
  { q: "Does an expat have to file an income tax return in India?", a: "In India, an expat with taxable income, or one who wants to claim treaty relief or a refund, generally has to file an income tax return, even if the Indian subsidiary has deducted tax. AU Corporate prepares the expat's return and the foreign tax credit papers, together with the payroll tax records." },
  { q: "Do the audited accounts feed the income tax return and the transfer pricing report in India?", a: "In India, the income tax return and the transfer pricing report of an Indian subsidiary are prepared from its audited accounts. Intercompany transactions are tagged in the books during the year, so the tax team does not rebuild the data at year end. AU Corporate prepares both from the same books." },
  { q: "Can AU Corporate take over tax compliance for my existing Indian subsidiary?", a: "AU Corporate can take over tax, GST and transfer pricing compliance for an existing subsidiary. We review earlier returns, notices and the transfer pricing file, fix any gaps, and then run the monthly and annual tax calendar from an agreed start date." },
  { q: "Can AU Corporate handle Indian tax for a parent company from my country?", a: "AU Corporate handles tax, GST and transfer pricing for Indian subsidiaries of parent companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. We also explain how the Indian tax position affects your group's tax return." },
]
const faqsLeft = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsRight = faqs.slice(Math.ceil(faqs.length / 2))

export default function CorporateTaxGstTransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Subsidiary Registration", href: "/india-subsidiary-registration" }, { label: "Corporate Tax, GST and Transfer Pricing" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex-[1.4] min-w-0">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Foreign Subsidiary in India</span>
              <h1 className="mb-5 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Corporate Tax, GST and Transfer Pricing for Your India Subsidiary
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Corporate tax returns, advance tax, TDS, GST registration and returns, tax audit, and transfer pricing for transactions with your parent, from one team of Chartered Accountants.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="https://cal.com/abhishek-jaiin-ybbklq/30min" className="inline-block px-5 py-3 rounded-lg font-bold text-sm bg-gold text-[#081a42] hover:bg-gold-dark transition">Book Consultation with an Expert</a>
                <InquiryTrigger className="inline-block px-5 py-3 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition">Get a Quote</InquiryTrigger>
              </div>
              <p className="text-sm text-white/70">150+ Subsidiaries Incorporated &middot; 150+ Regular Clients &middot; Since 2016</p>
            </div>
            <aside className="flex-1 min-w-[280px] rounded-2xl border border-white/20 bg-white/5 p-6 md:p-7" aria-label="Service summary">
              <ul className="space-y-5">
                {heroFacts.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Check size={13} strokeWidth={3} className="text-[#081a42]" />
                    </span>
                    <div>
                      <strong className="block text-white font-bold">{f.title}</strong>
                      <span className="block text-sm text-white/70">{f.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER + INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-14 rounded-r-xl border-l-4 border-gold bg-[#fffbe6] p-6 md:p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{quickAnswer.heading}</h2>
            <p className="text-gray-700 leading-relaxed mb-3">{quickAnswer.text}</p>
            <p className="text-sm text-gray-600">
              Written and reviewed by <AuthorLink className="font-semibold text-[#081a42] hover:underline" />, Chartered Accountant (ICAI Membership No. 544646) &middot; Last reviewed: <time dateTime="2026-10-09">9 October 2026</time>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Compliance That Matches Your Parent&apos;s Expectations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Indian tax has many dates and many forms, and the penalties for a mistake fall on the subsidiary and its directors. Transfer pricing matters most because tax officers examine dealings between the subsidiary and its foreign parent closely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate prepares the tax workings directly from your books, so the return, the audit report and the transfer pricing report all agree. You receive a single calendar and clear summaries your finance team abroad can follow &mdash; see our{" "}
                <Link href="/accounting-reporting-audit-support" className="text-gold-dark font-semibold hover:underline">accounting, reporting and audit support</Link>{" "}
                for how those books are kept in step.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">You Get</h3>
              <ul className="space-y-3">
                {youGet.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Check size={11} strokeWidth={3} className="text-[#081a42]" />
                    </span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TAX BY TAX */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Handle, Tax by Tax</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The tax areas an Indian subsidiary deals with most often.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {taxByTax.map((item) => (
              <div key={item.title} className="p-6 bg-white border border-gray-200 rounded-lg">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAX RATE */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Income Tax Rate for an Indian Subsidiary</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Most Indian subsidiaries pay tax under the concessional regime for domestic companies. This is how the effective rate is built up.
          </p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-[#081a42] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Component</th>
                  <th className="text-left px-4 py-3 font-semibold">Rate</th>
                  <th className="text-left px-4 py-3 font-semibold">On INR 100 of Taxable Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {taxRateTable.map((row) => (
                  <tr key={row.component}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.component}</td>
                    <td className="px-4 py-3 text-gray-600">{row.rate}</td>
                    <td className="px-4 py-3 text-gray-600">{row.on100}</td>
                  </tr>
                ))}
                <tr className="bg-yellow-50">
                  <td className="px-4 py-3 font-bold text-gray-900">Effective Rate</td>
                  <td className="px-4 py-3 font-bold text-gray-900">About 25.17%</td>
                  <td className="px-4 py-3 font-bold text-gray-900">INR 25.17</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            The concessional regime applies if the Indian subsidiary chooses it and meets its conditions, which include giving up certain deductions and incentives. Rates, surcharge and cess can change in each Budget, and the Income-tax Act, 2025 applies from 1 April 2026, so we confirm the position for your year. Dividends, royalties and fees paid to the parent are taxed separately.
          </p>
        </div>
      </section>

      {/* WHAT WE NEED */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Need from You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">If AU Corporate keeps your books, we already hold your accounts and need only the other items. If another provider keeps them, we need the first and last items as well.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {needFromYou.map((item) => (
              <div key={item.title} className="p-5 bg-white border border-gray-200 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#081a42] text-gold font-bold text-sm flex items-center justify-center mb-3">{item.n}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work, in Five Steps</h2>
          <p className="text-gray-600 leading-relaxed mb-8">We keep the tax calendar running all year, so the annual return is not a scramble.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workSteps.map((step) => (
              <div key={step.title} className="border-t-4 border-gold bg-white rounded-b-lg p-4 shadow-sm border border-gray-100">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{step.wk}</span>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Reasonable fees, confirmed in writing before we start.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#081a42] text-gold text-xs font-bold flex items-center justify-center mt-0.5">&#10003;</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Not included:</strong> government taxes, interest and penalties, any amount deposited to appeal or to stay a demand, court and tribunal fees, and the tax auditor&apos;s own fee. Litigation is quoted for each matter, and matters beyond the ITAT or the GST Appellate Tribunal are quoted separately. Dates and form numbers changed with the Income-tax Act, 2025 and the Income-tax Rules, 2026, which apply from 1 April 2026, so we confirm what applies to your year.
          </p>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Corporate Tax Calendar for an Indian Subsidiary</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when, for an Indian subsidiary with a 1 April to 31 March year. We track every date for you.</p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-[#081a42] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">When</th>
                  <th className="text-left px-4 py-3 font-semibold">What</th>
                  <th className="text-left px-4 py-3 font-semibold">How AU Helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {calendar.map((row) => (
                  <tr key={row.what}>
                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{row.when}</td>
                    <td className="px-4 py-3 text-gray-600">{row.what}</td>
                    <td className="px-4 py-3 text-gray-600">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">Dates are the usual ones for an Indian subsidiary and can change by notification, so we confirm them for your subsidiary each year.</p>
        </div>
      </section>

      {/* AFTER SETUP */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-8 items-center justify-between border border-gray-200 rounded-2xl p-8 bg-white">
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">One Team for the Rest of Your Compliance</h2>
              <p className="text-gray-600">Tax is only as good as the books behind it. The same team handles your accounts, FEMA filings and secretarial compliance.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {afterLinks.map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 border border-[#081a42] text-[#081a42] rounded-full text-sm font-semibold hover:bg-[#081a42] hover:text-white transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Questions Before You Start</h2>
          <p className="text-gray-600 mb-6">Straight answers to the questions foreign finance teams ask most. Can&apos;t find yours? Ask us in the form below.</p>
          <p className="text-sm text-gray-600 mb-1">
            Written and reviewed by <AuthorLink className="font-semibold text-[#081a42] hover:underline" />, Chartered Accountant (ICAI Membership No. 544646) &middot; Last reviewed: <time dateTime="2026-10-09">9 October 2026</time>
          </p>
          <p className="text-sm text-gray-500 mb-10">
            This is general guidance based on Indian law and practice as at the date above. It is not advice for your specific case, and rules can change.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10">
            <FaqAccordion faqs={faqsLeft} />
            <FaqAccordion faqs={faqsRight} />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* LEAD FORM */}
      <section className="py-16 bg-secondary/30" id="contact">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Need Corporate Tax, GST or Transfer Pricing Support?"
            description="Tell us where your parent company is, the nature of your Indian business and whether you deal with your parent or group companies, and we'll reply with a clear quote."
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "India Subsidiary Registration",
                href: "/india-subsidiary-registration",
                description: "Incorporation and initial PAN/TAN/GST registration, for readers who haven't yet set up their entity.",
              },
              {
                label: "Accounting, Reporting and Audit Support",
                href: "/accounting-reporting-audit-support",
                description: "The books and audited accounts the income tax return and transfer pricing report are built from.",
              },
              {
                label: "FEMA and RBI Compliance",
                href: "/fema-rbi-compliance",
                description: "The RBI reporting that sits alongside withholding tax on dividends, fees and royalties remitted abroad.",
              },
              {
                label: "Secretarial and ROC Compliance",
                href: "/secretarial-roc-compliance",
                description: "Board and AGM approvals for adopting the audited accounts the tax return relies on.",
              },
              {
                label: "Payroll and Expat Services",
                href: "/payroll-expat-services",
                description: "Payroll TDS and expat tax residence rules that feed into the subsidiary's overall tax position.",
              },
              {
                label: "Banking & Taxation Setup",
                href: "/india-business-setup/banking-taxation",
                description: "The initial banking, GST and tax registration steps that precede ongoing compliance.",
              },
            ]}
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Corporate Tax, GST and Transfer Pricing",
            description:
              "Corporate income tax returns, advance tax, TDS, GST registration and returns, tax audit, transfer pricing, DTAA opinions, repatriation tax compliance, expat taxation, and tax and GST litigation for Indian subsidiaries of foreign companies.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/corporate-tax-gst-transfer-pricing",
            areaServed: "India",
            serviceType: "Corporate Tax, GST and Transfer Pricing Compliance for Indian Subsidiaries",
          }),
        }}
      />
    </main>
  )
}
