import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Check } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"

const heroFacts = [
  { title: "From USD 240 per Month", body: "Monthly accounting and bookkeeping, fixed fee" },
  { title: "3-Day Onboarding", body: "Simple set-up, then a fixed monthly calendar" },
  { title: "US GAAP or IFRS Reporting", body: "In the format your parent consolidates" },
  { title: "Audit Support Every Year", body: "We coordinate your statutory auditor end to end" },
]

const quickAnswer = {
  heading: "Accounting, Reporting and Audit Support for an Indian Subsidiary: The Short Answer",
  text: "An Indian subsidiary of a foreign company needs monthly bookkeeping under Indian accounting standards, bank and party reconciliations, a fixed asset register, TDS and GST workings, a monthly reporting pack for the parent in US GAAP or IFRS, and a statutory audit every year. AU Corporate, a New Delhi firm of Chartered Accountants and CPAs serving foreign parents since 2016, handles the seven monthly steps for a fixed monthly fee starting at USD 240, from bookkeeping and reconciliations to TDS and GST workings and parent reporting, with onboarding in 3 days.",
}

const youGet = [
  "Books written up, with bank, vendor and customer balances reconciled",
  "An up-to-date fixed asset register, with depreciation worked out",
  "Your monthly TDS and GST liability calculated, with due dates flagged",
  "Reporting packs in US GAAP or IFRS, with intercompany balances matched",
  "A statutory audit that is prepared, coordinated and closed on time",
]

const monthlySteps = [
  { tag: "Step 1", title: "Monthly Accounting and Bookkeeping", body: "Recording of sales, purchases, expenses, payroll and other entries from your source documents, so the books are complete before anything else is checked." },
  { tag: "Step 2", title: "Bank Reconciliation", body: "Every bank account matched line by line to the books, with unmatched items followed up, so the cash balance is correct at month end." },
  { tag: "Step 3", title: "Vendor and Customer Reconciliation", body: "Where required, balances matched with vendors and customers, so payables and receivables are confirmed before the books are closed." },
  { tag: "Step 4", title: "Fixed Assets Management", body: "New purchases capitalised, the asset register updated and depreciation worked out, so the balance sheet and the tax records stay in step." },
  { tag: "Step 5", title: "Monthly TDS Calculation", body: "Withholding tax liability worked out on payments to vendors, professionals, rent and salaries, with the amount due and the payment date flagged." },
  { tag: "Step 6", title: "Monthly GST Liability Calculation", body: "Output GST, eligible input credit and the net liability worked out from the closed books, ready for the return and payment." },
  { tag: "Step 7", title: "Reporting for the Parent", body: "MIS and financial statements in US GAAP or IFRS, with the intercompany balances reconciled, delivered on your group closing calendar." },
  { tag: "Once a Year", title: "Audit Support", body: "Audit schedules, working papers and auditor queries handled, with the statutory audit coordinated from start to finish." },
]

const needFromYou = [
  { n: "1", title: "Access to Records", body: "Bank statements or read-only bank access, and your existing accounting software or files." },
  { n: "2", title: "Source Documents", body: "Sales invoices, vendor bills, expense claims and payroll inputs, shared each month in a shared folder or through your software." },
  { n: "3", title: "Parent Reporting Format", body: "Your group chart of accounts, reporting template and consolidation calendar, so packs match your system." },
  { n: "4", title: "Past Financials", body: "For an existing subsidiary: prior audited accounts, tax returns and filings, so we can review the opening position." },
  { n: "5", title: "An Approver", body: "One person in the subsidiary or parent who approves payments and answers our queries." },
]

const onboarding = [
  { wk: "Day 1", title: "Kick-Off and Access", body: "A short call to agree scope, then you share software access, bank statements and your parent's reporting template." },
  { wk: "Day 2", title: "Set-Up", body: "We review opening balances, map your chart of accounts to the parent's, and set up the asset register and the TDS and GST workings." },
  { wk: "Day 3", title: "Go-Live", body: "We confirm your named manager, the monthly closing calendar and the document checklist, and the first month's cycle starts." },
]

const monthlyCycle = [
  { wk: "Days 1–4", title: "1. Book", body: "Record the month's transactions in the books." },
  { wk: "Days 3–5", title: "2. Bank", body: "Reconcile every bank account." },
  { wk: "Days 4–6", title: "3. Vendors and Customers", body: "Reconcile balances, where required." },
  { wk: "Days 5–6", title: "4. Fixed Assets", body: "Update the register and depreciation." },
  { wk: "Days 6–7", title: "5. TDS", body: "Calculate the withholding tax liability." },
  { wk: "Days 6–8", title: "6. GST", body: "Calculate the net GST liability." },
  { wk: "Days 8–10", title: "7. Report", body: "Send the MIS and parent pack." },
]

const included = [
  "Monthly Accounting and Bookkeeping",
  "Bank Reconciliation",
  "Vendor and Customer Reconciliation, If Required",
  "Fixed Assets Register and Depreciation",
  "Monthly TDS (Withholding Tax) Calculation",
  "Monthly GST Liability Calculation",
  "Reporting for the Parent in US GAAP or IFRS",
  "Audit Schedules and Auditor Coordination",
  "Simple 3-Day Onboarding",
  "A Named Manager as Your Single Contact",
]

const calendar = [
  { when: "Every month", what: "Books closed, MIS and parent pack", how: "Prepared and delivered on your group calendar" },
  { when: "Within 30 days of incorporation", what: "Appointment of first auditor", how: "Board resolution and ROC filing" },
  { when: "31 March", what: "Financial year end", how: "Year-end closing checklist and audit preparation" },
  { when: "April–August", what: "Statutory audit", how: "Schedules, working papers, auditor queries" },
  { when: "By 30 September", what: "Financial statements adopted at the AGM", how: "Finalised accounts, support for the AGM and ROC filing" },
  { when: "Following the audit", what: "Income tax return and transfer pricing", how: "Audited accounts handed over to the tax team" },
]

const reportingFrameworks = [
  { tag: "US Parents", title: "US GAAP", body: "Books kept under Indian standards, with the monthly pack restated to US GAAP and reconciled to the statutory numbers." },
  { tag: "Most Other Parents", title: "IFRS", body: "For parents that consolidate under IFRS or IFRS-based standards, with the pack mapped to your group's chart of accounts and template." },
  { tag: "Local Frameworks", title: "Other Group Frameworks", body: "If your parent uses a local framework, such as Japanese or Chinese standards, tell us at the start and we confirm what we can support." },
  { tag: "Every Parent", title: "Your Group Calendar", body: "Closing dates, reporting currency and review calls set to your parent's consolidation deadlines and time zone." },
]

const countryGuides = [
  { label: "USA", href: "/blog/usa-to-india" },
  { label: "UK", href: "/india-entry-for-uk-companies" },
  { label: "Singapore", href: "/india-entry-for-singapore-companies" },
  { label: "Australia", href: "/india-entry-for-australian-companies" },
  { label: "Germany", href: "/india-entry-for-german-companies" },
  { label: "Japan", href: "/india-entry-for-japan-companies" },
  { label: "China", href: "/india-entry-for-china-companies" },
]

const afterLinks = [
  { label: "Corporate Tax, GST and TDS", href: "/corporate-tax-gst-transfer-pricing" },
  { label: "FEMA and RBI Compliance", href: "/fema-rbi-compliance" },
  { label: "Payroll and Expat Services", href: "/payroll-expat-services" },
  { label: "Secretarial and ROC", href: "/secretarial-roc-compliance" },
]

const faqs = [
  { q: "What is the monthly cost for accounting and bookkeeping in India?", a: "In India, the monthly cost for accounting and bookkeeping provided by AU Corporate starts at USD 240 per month. The final fixed fee depends on the number of monthly transactions, bank accounts and employees, the services you add and the reporting your parent company requires. AU Corporate confirms a written fixed quote before starting, with no hourly charges." },
  { q: "Is the AU Corporate price in US dollars, and does it include GST?", a: "AU Corporate quotes its accounting and bookkeeping fees in US dollars, starting at USD 240 per month, so the price is the same for a parent company in the USA, Europe, the UK, Australia or Asia. Indian GST, where it applies, is shown separately in the written quote, and the Indian subsidiary can normally claim it back as input credit." },
  { q: "Are there any hourly charges or hidden fees for accounting services in India?", a: "AU Corporate charges no hourly fees for its monthly accounting service in India. You receive a written fixed monthly quote, starting at USD 240, before work begins. The statutory auditor's own fee is paid to the audit firm and is separate, and the filing of GST and TDS returns, payroll and FEMA compliance are quoted separately." },
  { q: "What does monthly accounting and bookkeeping in India include?", a: "In India, AU Corporate's monthly accounting service covers seven steps in order: accounting and bookkeeping, bank reconciliation, vendor and customer reconciliation where required, fixed assets management, monthly TDS calculation, monthly GST liability calculation, and reporting for the parent company. Audit support is added once a year." },
  { q: "Can AU Corporate work with parent companies from my country?", a: "AU Corporate works with parent companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. The Indian books are the same for every parent, and the monthly pack is set up in your group's reporting framework, chart of accounts, currency and closing calendar." },
  { q: "How do I get monthly financial reports in US GAAP or IFRS from my subsidiary in India?", a: "AU Corporate keeps your Indian subsidiary's statutory books under Indian accounting standards and prepares the monthly or quarterly reporting pack in US GAAP or IFRS. Each pack includes a reconciliation between Indian GAAP and your group framework, so the numbers agree with the audited statutory accounts." },
  { q: "What is included in the monthly MIS and reporting pack for the parent company?", a: "The monthly MIS pack from AU Corporate for an Indian subsidiary includes the trial balance, profit and loss account, balance sheet, cash flow, budget-versus-actual comparison, intercompany balances and short management commentary. The pack follows your group's chart of accounts and template, so your consolidation team can use it without reworking the numbers." },
  { q: "How quickly will I receive the monthly accounts for my Indian subsidiary?", a: "AU Corporate delivers the monthly pack for an Indian subsidiary on a closing calendar agreed with your group finance team, typically within the first 7 to 10 working days of the following month. We set the dates at the start of the engagement to match your parent's consolidation deadlines and time zone." },
  { q: "How long does it take to start accounting and bookkeeping services in India?", a: "AU Corporate onboards a new accounting client in India in 3 days. On day 1 we hold a short kick-off call and you share software access, bank statements and your parent's reporting template. On day 2 we review opening balances and set up the chart of accounts, asset register and tax workings. On day 3 we confirm your manager and calendar, and the first month starts." },
  { q: "Which accounting software can my Indian subsidiary use?", a: "In India, AU Corporate works in the software your subsidiary already uses, such as Tally, Zoho Books, QuickBooks or Xero, or sets one up if you are starting from scratch. We can also post into your group ERP. The data and the access always remain with your Indian subsidiary." },
  { q: "How are transactions with the parent company recorded in India?", a: "AU Corporate records every transaction between the Indian subsidiary and the parent or group companies, such as service fees, cost recharges, loans and share capital, and reconciles both sides each month. Matching balances before the group close avoids consolidation differences and gives a clean base for transfer pricing and FEMA reporting." },
  { q: "Is a statutory audit mandatory for a subsidiary in India?", a: "In India, a statutory audit is mandatory for every private limited company, whatever its size or turnover, under the Companies Act, 2013. The audited financial statements are adopted at the annual general meeting, filed with the Registrar of Companies and used for the income tax return." },
  { q: "Who performs the statutory audit for a subsidiary in India?", a: "In India, the statutory audit must be signed by an independent auditor appointed by the Indian subsidiary. AU Corporate prepares your subsidiary for the audit and coordinates the process with the auditor, so you have one point of contact, and we can introduce reputable audit firms if you do not have one." },
  { q: "What does audit support for an Indian subsidiary cover?", a: "AU Corporate's audit support for an Indian subsidiary covers preparing the audit schedules and working papers, answering the auditor's queries, tracking open items, finalising the financial statements and getting the audit report signed. We then support the board meeting, the AGM and the ROC filing of the audited accounts." },
  { q: "Can AU Corporate support my parent's group audit of the Indian subsidiary?", a: "AU Corporate prepares group audit packs, component auditor questionnaires and the specific schedules your parent's auditors ask for, alongside the Indian statutory audit. The subsidiary answers both sets of requests once, which cuts duplicate work and keeps the two audits consistent." },
  { q: "What is the financial year in India and when must the accounts be audited?", a: "In India, most Indian subsidiaries follow the financial year from 1 April to 31 March, because Indian tax law requires it, unless the parent has an approved exception. The statutory audit is normally completed in the six months after year end, so the audited accounts can be adopted at the annual general meeting." },
  { q: "Can AU Corporate take over the accounting of my existing subsidiary in India?", a: "AU Corporate can take over the accounting of an existing Indian subsidiary at any point in the year, with the same 3-day onboarding. We review past books, bank reconciliations and filings, fix any gaps or backlogs, agree the closing calendar with your parent and run the monthly cycle from the start date." },
  { q: "What if the books of my Indian subsidiary are behind or have errors?", a: "If the books of your Indian subsidiary are behind, AU Corporate first writes them up from bank statements and source documents, then reconciles and corrects errors and reports any tax or compliance exposure we find. We give you a fixed fee for the clean-up before starting, so the backlog does not become an open-ended cost." },
  { q: "What does bank reconciliation involve each month in India?", a: "AU Corporate matches every transaction in each Indian bank account to the books each month, follows up unmatched or unexplained items, and prepares a reconciliation statement showing the book and bank balances agree. This confirms the cash balance reported to your parent is correct and catches errors, duplicate payments and missing entries early." },
  { q: "When does AU Corporate reconcile vendor and customer balances?", a: "AU Corporate reconciles vendor and customer balances where required, for example when you have large or disputed balances, many invoices or an audit coming up. We match our ledger to the party statements, list differences and follow them up, so payables and receivables are confirmed before the books close." },
  { q: "What does fixed assets management include for an Indian subsidiary?", a: "AU Corporate adds new purchases to the fixed asset register, capitalises them correctly, tracks sales and write-offs and works out depreciation every month. We keep the book depreciation under Indian standards and, where your parent needs it, under US GAAP or IFRS, along with the income tax depreciation records." },
  { q: "How is the monthly TDS (withholding tax) liability calculated in India?", a: "In India, AU Corporate reviews the month's payments to vendors, professionals, landlords and employees, applies the correct TDS section and rate, checks lower deduction certificates and PAN status, and works out the tax to be deducted and deposited. We tell you the amount and the due date, which is generally the 7th of the following month." },
  { q: "How is the monthly GST liability calculated in India?", a: "In India, AU Corporate works out output GST on your sales and eligible input tax credit on your purchases, matches the credit with the supplier data in the GST portal, and calculates the net GST payable for the month. We give you the liability and due date so the return and payment can be filed on time." },
  { q: "Does AU Corporate file the GST and TDS returns, or only calculate the liability?", a: "AU Corporate's monthly accounting service calculates the TDS and GST liability and flags the amounts and due dates. Filing the returns and making the payments are available as a separate tax compliance service from the same team, so the figures in the books always agree with what is reported to the tax authorities." },
  { q: "Can the reporting pack follow my parent company's chart of accounts?", a: "AU Corporate maps the Indian subsidiary's ledger to your parent's chart of accounts during the 3-day onboarding, so each monthly pack uses the same account structure, currency and layout your group uses. This avoids manual remapping by your consolidation team and keeps month-to-month figures comparable." },
  { q: "How does AU Corporate keep my financial data secure?", a: "AU Corporate uses access-controlled cloud tools, restricts client files to the engagement team and works under a confidentiality agreement. You keep ownership of the books and the software access at all times, and you can ask for a complete export of your data whenever you want." },
  { q: "Who will manage my accounts in India, and who reviews the work?", a: "Every subsidiary gets a named manager at AU Corporate who knows your books, your deadlines and your parent's reporting requirements. Chartered Accountants and CPAs on the team review the monthly close and the reporting pack before they reach your parent, so you have one contact and reviewed numbers." },
]
const faqsLeft = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsRight = faqs.slice(Math.ceil(faqs.length / 2))

export default function AccountingReportingAuditSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Subsidiary Registration", href: "/india-subsidiary-registration" }, { label: "Accounting, Reporting and Audit Support" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex-[1.4] min-w-0">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Foreign Subsidiary in India</span>
              <h1 className="mb-5 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Accounting, Reporting and Audit Support for Your India Subsidiary
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Monthly accounting, reconciliations, fixed assets, TDS and GST workings and reporting for the parent in US GAAP or IFRS, plus audit support, with onboarding in 3 days.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="https://cal.com/abhishek-jaiin-ybbklq/30min" className="inline-block px-5 py-3 rounded-lg font-bold text-sm bg-gold text-[#081a42] hover:bg-gold-dark transition">Book Consultation with an Expert</a>
                <InquiryTrigger className="inline-block px-5 py-3 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition">Get a Fixed Quote</InquiryTrigger>
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
              Written and reviewed by <strong className="text-[#081a42]">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) &middot; Last reviewed: <time dateTime="2026-10-09">9 October 2026</time>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Clean Books in India, Reporting Your Parent Understands</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                An Indian subsidiary has to keep books under Indian law, close them every month for the group, and have them audited every year. Doing this with a part-time bookkeeper usually means late packs, reconciliation gaps and last-minute audit queries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate runs the whole cycle for you: bookkeeping, month-end close, reporting to the parent and audit coordination. Chartered Accountants and CPAs review the work, so your finance team abroad gets numbers it can rely on.
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

      {/* STEP BY STEP */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do for You, Step by Step</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Seven services in the order they happen each month, plus audit support once a year. Each one feeds the next, so the numbers reaching your parent are already reconciled.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {monthlySteps.map((step) => (
              <div key={step.title} className="p-6 bg-white border border-gray-200 rounded-lg">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{step.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE NEED */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Need from You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Five things to get started. Share them on day 1 and we complete the set-up in 3 days.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {needFromYou.map((item) => (
              <div key={item.title} className="p-5 bg-secondary/30 border border-gray-200 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#081a42] text-gold font-bold text-sm flex items-center justify-center mb-3">{item.n}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Onboarding in 3 Days</h2>
          <p className="text-gray-600 leading-relaxed mb-8">You share access and documents, and we do the set-up. By day 3 your subsidiary is on a fixed monthly calendar.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {onboarding.map((step) => (
              <div key={step.title} className="border-t-4 border-gold bg-white rounded-b-lg p-4 shadow-sm">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{step.wk}</span>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONTHLY CYCLE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How the Monthly Cycle Works</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The same seven steps every month, so your parent always knows when to expect the numbers.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {monthlyCycle.map((step) => (
              <div key={step.title} className="border-t-4 border-gold bg-white rounded-b-lg p-4 shadow-sm border border-gray-100">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{step.wk}</span>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{step.title}</h3>
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
          <p className="text-gray-600 leading-relaxed mb-8">
            Monthly accounting and bookkeeping starts at USD 240 per month. The final fixed fee depends on your volumes and the services you add, and we confirm it in writing before we start.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#081a42] text-gold text-xs font-bold flex items-center justify-center mt-0.5">&#10003;</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Not included:</strong> the statutory auditor&apos;s own fee, which is paid to the audit firm, and the filing of GST and TDS returns, payroll, FEMA and secretarial compliance, which are available as separate services from the same team. The fee depends on transaction volumes, number of bank accounts and employees, and the reporting frequency.
          </p>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Yearly Accounting and Audit Calendar</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when, for an Indian subsidiary with a 1 April to 31 March financial year. We track every date for you.</p>
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
          <p className="text-sm text-gray-600 mt-4">Dates reflect the standard Indian financial year (1 April to 31 March). Actual deadlines depend on your year end and can change, so we confirm them for your subsidiary.</p>
        </div>
      </section>

      {/* REPORTING FRAMEWORKS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Reporting in Your Parent&apos;s Framework</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What changes from one parent company to the next is the reporting framework, not the Indian books. Tell us what your group uses and we set the pack up that way.</p>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {reportingFrameworks.map((item) => (
              <div key={item.title} className="p-6 bg-white border border-gray-200 rounded-lg">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-3">Planning your India entry? See our guides by country:</p>
          <div className="flex flex-wrap gap-3">
            {countryGuides.map((c) => (
              <Link key={c.href} href={c.href} className="px-4 py-2 bg-white hover:bg-secondary border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:text-gold-dark transition">
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER SETUP */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-8 items-center justify-between border border-gray-200 rounded-2xl p-8 bg-secondary/30">
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">One Team for the Rest of Your Compliance</h2>
              <p className="text-gray-600">
                Your books are only as good as the filings that sit on them. The same team handles GST, TDS, payroll, FEMA, transfer pricing and secretarial compliance, so everything agrees.
              </p>
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
      <section className="py-20 bg-secondary/30" id="faq">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Questions Before You Start</h2>
          <p className="text-gray-600 mb-6">Straight answers to the questions foreign finance teams ask most. Can&apos;t find yours? Ask us in the form below.</p>
          <p className="text-sm text-gray-600 mb-1">
            Written and reviewed by <strong className="text-[#081a42]">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) &middot; Last reviewed: <time dateTime="2026-10-09">9 October 2026</time>
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
      <section className="py-16 bg-white" id="contact">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Need Monthly Accounting and Reporting for Your India Subsidiary?"
            description="Tell us about your subsidiary, your parent's reporting format and roughly how many transactions you have each month, and we'll reply with a fixed monthly quote."
          />
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "India Subsidiary Registration",
                href: "/india-subsidiary-registration",
                description: "Incorporation, PAN/TAN, bank account and FC-GPR filing, for readers who haven't yet set up their entity.",
              },
              {
                label: "FEMA and RBI Compliance",
                href: "/fema-rbi-compliance",
                description: "FC-GPR, FC-TRS and the annual FLA return that rely on the same books and reconciled intercompany balances.",
              },
              {
                label: "Corporate Tax, GST and Transfer Pricing",
                href: "/corporate-tax-gst-transfer-pricing",
                description: "The tax returns, GST filings and transfer pricing report prepared from the same audited accounts.",
              },
              {
                label: "Secretarial and ROC Compliance",
                href: "/secretarial-roc-compliance",
                description: "Board meetings, AGM and annual ROC filings that depend on the audited financial statements.",
              },
              {
                label: "Payroll and Expat Services",
                href: "/payroll-expat-services",
                description: "Payroll processing and statutory contributions that feed into the monthly books.",
              },
              {
                label: "Accounting & Assurance Services",
                href: "/services/accounting-assurance",
                description: "AU Corporate's broader accounting, audit and reporting assurance practice.",
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
            name: "Accounting, Reporting and Audit Support",
            description:
              "Monthly accounting and bookkeeping, bank and vendor reconciliation, fixed assets, TDS and GST liability calculation, reporting for the parent in US GAAP or IFRS, and audit support for Indian subsidiaries.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/accounting-reporting-audit-support",
            areaServed: "India",
            serviceType: "Outsourced Accounting, Reporting and Audit Coordination for Indian Subsidiaries",
          }),
        }}
      />
    </main>
  )
}
