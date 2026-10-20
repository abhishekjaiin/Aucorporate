import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Check } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"
import { RelatedCaseStudies } from "@/components/case-study/RelatedCaseStudies"

const heroFacts = [
  { title: "Reasonable Fees", body: "A clear written quote before we start" },
  { title: "Every RBI Deadline Tracked", body: "Reminders well before each due date" },
  { title: "Works with Your Bank", body: "We coordinate with your authorised dealer bank" },
  { title: "Take Over Existing Filings", body: "We review past reporting and fix gaps" },
]

const quickAnswer = {
  heading: "FEMA and RBI Compliance for an Indian Subsidiary: The Short Answer",
  text: "An Indian company with foreign shareholders or foreign loans must report each share issue, share transfer, loan and its year-end foreign assets and liabilities to the Reserve Bank of India under the Foreign Exchange Management Act, 1999 (FEMA). AU Corporate, a New Delhi firm of Chartered Accountants, Company Secretaries and lawyers serving foreign parents since 2016, prepares and files these reports at reasonable fees and tracks every deadline.",
}

const youGet = [
  "Share issues to the parent reported on time",
  "Share transfers and parent loans reported correctly",
  "The annual foreign liabilities and assets return filed every year",
  "Dividend, fee and loan payments to the parent cleared with the right paperwork",
  "A filing register you can show to auditors, banks and buyers",
]

const filings = [
  { tag: "When Shares Are Issued", title: "FC-GPR Filing", body: "Reporting of every share issue to the foreign parent within 30 days of allotment, with the valuation and company secretary certificates the RBI asks for." },
  { tag: "When Shares Are Transferred", title: "FC-TRS Filing", body: "Reporting of share transfers between a resident and a non-resident within 60 days, with pricing checked against the RBI guidelines." },
  { tag: "When the Parent Lends", title: "ECB Reporting", body: "Loan registration for external commercial borrowings from the parent, and the monthly return that follows, so repayments and interest stay compliant." },
  { tag: "When the Subsidiary Invests", title: "Downstream Investment", body: "Reporting for an Indian subsidiary that invests in another Indian company, and a check that the foreign investment rules are met." },
  { tag: "When Money Goes Abroad", title: "Repatriation of Funds", body: "Dividends, service fees, royalties and loan repayments to the parent, with the tax certificates and bank declarations needed before each remittance." },
  { tag: "Before You Invest", title: "FDI Government Route Approval", body: "Checking whether your business and investor qualify for the automatic route and, where they do not, preparing and following up the government approval application before shares are issued." },
  { tag: "When Something Has Gone Wrong", title: "Late Fees and Compounding", body: "Review of past filings, late submission fees for reporting delays and compounding applications to the RBI for contraventions, prepared and followed up by AU Corporate." },
  { tag: "Every Year", title: "Annual FLA Return", body: "The annual return on foreign liabilities and assets, due every year by 15 July, built from your audited accounts and investment records." },
]

const needFromYou = [
  { n: "1", title: "Investment Records", body: "Share allotment details, share certificates and the foreign inward remittance certificates for each investment." },
  { n: "2", title: "Parent and Investor Details", body: "Name, country, address and constitutional documents of each foreign shareholder or lender." },
  { n: "3", title: "Loan Agreements", body: "Any loan from the parent or a group company, with terms, drawdowns and repayments." },
  { n: "4", title: "Audited Accounts", body: "The latest financial statements, which the annual return is built from." },
  { n: "5", title: "Bank Access", body: "Your authorised dealer bank contact and the account used for foreign remittances." },
]

const workSteps = [
  { wk: "Week 1", title: "Review", body: "Check past filings, the share register and loans for gaps or late reports." },
  { wk: "Week 1", title: "Prepare", body: "Draft the forms and gather the supporting certificates." },
  { wk: "Week 2", title: "Certify", body: "Arrange the valuation report and company secretary certificate where needed." },
  { wk: "Week 2", title: "File", body: "Submit through the authorised dealer bank and the RBI portal." },
  { wk: "Ongoing", title: "Track", body: "Keep a calendar and reminders for every future due date." },
]

const included = [
  "Review of Past FEMA Filings",
  "FDI Route Check and Approval Application",
  "Late Submission Fee and Compounding Applications",
  "Approvals on Complex Transactions Through the AD Bank",
  "FC-GPR and FC-TRS Preparation and Filing",
  "ECB Registration and Monthly Returns",
  "Annual FLA Return",
  "Downstream Investment Reporting",
  "Remittance Paperwork for Repatriation",
  "Coordination with Your Authorised Dealer Bank",
  "A Filing Calendar with Reminders",
]

const calendar = [
  { when: "Before shares are issued", what: "Government approval, where the automatic route does not apply", how: "Application prepared and followed up" },
  { when: "Within 30 days of share allotment", what: "FC-GPR report of shares issued to the foreign investor", how: "Prepared with valuation and certificates, then filed" },
  { when: "Within 60 days of a share transfer", what: "FC-TRS report of the transfer", how: "Pricing checked and report filed" },
  { when: "Monthly, early in the following month", what: "ECB return for any parent loan", how: "Prepared from the loan and bank records" },
  { when: "Before each remittance abroad", what: "Tax certificates and bank declarations", how: "Prepared for the bank and the accountant" },
  { when: "By 15 July each year", what: "Annual return on foreign liabilities and assets", how: "Built from audited accounts and filed" },
  { when: "Within 30 days of a downstream investment", what: "Downstream investment report", how: "Prepared and filed" },
]

const afterLinks = [
  { label: "Accounting, Reporting and Audit Support", href: "/accounting-reporting-audit-support" },
  { label: "Corporate Tax, GST and Transfer Pricing", href: "/corporate-tax-gst-transfer-pricing" },
  { label: "Secretarial and ROC Compliance", href: "/secretarial-roc-compliance" },
  { label: "Payroll and Expat Services", href: "/payroll-expat-services" },
  { label: "India Subsidiary Registration", href: "/india-subsidiary-registration" },
]

const faqs = [
  { q: "What is FEMA compliance for an Indian subsidiary of a foreign company?", a: "In India, FEMA compliance means reporting every foreign investment, share transfer, loan from abroad and year-end foreign asset or liability of the subsidiary to the Reserve Bank of India under the Foreign Exchange Management Act, 1999. AU Corporate prepares and files these reports for foreign parents and tracks each deadline." },
  { q: "What is Form FC-GPR and when must it be filed in India?", a: "In India, FC-GPR is the report an Indian subsidiary files with the RBI after issuing shares to a foreign investor. It must be filed within 30 days of the allotment of shares, with the supporting valuation and company secretary certificates. AU Corporate prepares and files it through your authorised dealer bank." },
  { q: "What is Form FC-TRS and when is it needed?", a: "In India, FC-TRS is the report filed when shares of an Indian subsidiary are transferred between a resident and a non-resident, in either direction. It must be filed within 60 days of the transfer or receipt of funds, and the price must meet the RBI pricing guidelines. AU Corporate checks both before filing." },
  { q: "What is the annual FLA return and who must file it?", a: "In India, the annual return on foreign liabilities and assets (FLA return) must be filed every year by 15 July by any Indian company that has received foreign investment or has made overseas investment. AU Corporate prepares it from your audited accounts and investment records, even if there was no new investment during the year." },
  { q: "Can my parent company lend money to the Indian subsidiary?", a: "In India, a foreign parent can lend to its subsidiary as an external commercial borrowing, subject to RBI rules on the eligible lender, minimum maturity, interest rate ceilings and end use. AU Corporate checks eligibility, helps register the loan through your bank and files the monthly return that follows." },
  { q: "How can an Indian subsidiary send dividends, fees or royalties to its foreign parent?", a: "In India, a subsidiary can pay dividends, service fees, royalties and loan repayments to its parent through its authorised dealer bank, after withholding the right tax and giving the bank the required tax certificates. AU Corporate prepares the paperwork for each remittance so the bank can process it without delay." },
  { q: "How is the price of shares issued to a foreign investor decided?", a: "In India, shares of an unlisted company issued to a non-resident must be priced at or above the fair value, which is certified by an independent chartered accountant or an eligible valuer using an accepted method. AU Corporate arranges the valuation and uses it in the FC-GPR filing." },
  { q: "What is a downstream investment and does it need reporting?", a: "In India, a downstream investment is an investment by an Indian subsidiary that is owned or controlled by non-residents into another Indian company. It must follow the foreign investment rules and be reported to the RBI. AU Corporate checks the structure and prepares the report if your subsidiary invests in another Indian company." },
  { q: "How much does FEMA and RBI compliance cost in India?", a: "AU Corporate charges reasonable fees for this service, in US dollars, and confirms a clear written quote before work begins, so there are no surprises. The fee depends on the size of your subsidiary, the volume of work and whether past filings need to be reviewed. Government fees and third-party fees are separate." },
  { q: "Can AU Corporate take over FEMA filings for my existing Indian subsidiary?", a: "AU Corporate can take over FEMA and RBI filings for an existing subsidiary of any foreign company. We start by reviewing every share issue, transfer, loan and annual return filed so far, fix any gaps, and then keep a calendar so each future filing is made on time." },
  { q: "Which documents does AU Corporate need to file FC-GPR?", a: "To file FC-GPR in India, AU Corporate needs the board and shareholder resolutions, the share allotment details, the foreign inward remittance certificate from the bank, the investor's details and the valuation report. We prepare the company secretary certificate and the form and file them through your authorised dealer bank." },
  { q: "Does a foreign company need government approval to invest in India?", a: "In most sectors, a foreign company can invest in an Indian subsidiary under the automatic route, with no prior approval, and report the investment afterwards. A few sectors need government approval, and so does an investment from a country that shares a land border with India. AU Corporate checks your case before you invest." },
  { q: "What is the difference between the automatic route and the government route for FDI in India?", a: "In India, under the automatic route a foreign investor invests without prior permission and only reports to the RBI afterwards. Under the government route, the investor must first get approval from the government through the ministry for that sector. AU Corporate checks which route applies to your business activity and investor." },
  { q: "How do I apply for FDI approval in India?", a: "In India, an application for FDI approval is filed online on the government's Foreign Investment Facilitation Portal and examined by the ministry in charge of the sector. AU Corporate prepares the application and documents, files it, answers the ministry's queries and follows it up. The decision and its timing rest with the government." },
  { q: "Does an investor from a country that borders India need approval?", a: "In India, an investment where the investor, or its beneficial owner, is from a country sharing a land border with India needs government approval under Press Note 3 of 2020. The rules have been reviewed since, so AU Corporate checks the current position and your ownership chain before you invest." },
  { q: "What is compounding under FEMA and when is it needed?", a: "In India, compounding is a way to settle a FEMA contravention by applying to the RBI and paying an amount it decides, instead of facing formal proceedings. It is used for matters such as shares issued without a needed approval or in breach of pricing rules. AU Corporate prepares and follows up the application." },
  { q: "What happens if an FC-GPR or FLA return is filed late in India, and is compounding needed?", a: "In India, a delay in filing a report such as FC-GPR or the FLA return can usually be regularised by paying a late submission fee, which rises with the length of the delay, with no need for compounding. Other contraventions, such as breaking pricing or approval rules, need compounding. AU Corporate checks which route applies to each delay." },
  { q: "What happens if shares were issued to my foreign parent before approval or in breach of the rules?", a: "In India, shares issued without a needed approval or against the rules are a FEMA contravention. AU Corporate reviews what happened, checks if it can be regularised, and prepares a compounding application with the supporting papers. The RBI decides whether and on what terms the matter is settled, so we do not promise an outcome." },
  { q: "How much does compounding cost in India?", a: "In India, the compounding amount is decided by the RBI, based on the amount involved and the length of the delay, following its published guidelines. AU Corporate gives you an estimate before applying and explains the likely range. AU Corporate charges reasonable fees for preparing the application, and the RBI amount is paid separately." },
  { q: "Within what time must shares be issued after foreign money is received, and can the time be extended?", a: "In India, shares must generally be issued within 60 days of receiving the foreign investment money, and if they are not, the money has to be refunded. Any exception or delay needs permission. AU Corporate prepares the request and supporting papers and follows it up with the AD bank and the RBI." },
  { q: "Which complex transactions need RBI approval through the AD bank in India?", a: "In India, some transactions need approval from the RBI, usually through your authorised dealer (AD) bank, such as external borrowings outside the standard limits, extension of time to receive export payment, write-off of dues, conversion of loans into equity and regularising past remittances. AU Corporate prepares the request, and we confirm which ones apply to you." },
  { q: "Can AU Corporate handle FEMA filings for a parent company from my country?", a: "AU Corporate handles FEMA and RBI filings for parent companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. The RBI rules are the same for every foreign investor, and we adjust the documents to match your home-country records." },
]
const faqsLeft = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsRight = faqs.slice(Math.ceil(faqs.length / 2))

export default function FemaRbiCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Subsidiary Registration", href: "/india-subsidiary-registration" }, { label: "FEMA and RBI Compliance" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex-[1.4] min-w-0">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Foreign Subsidiary in India</span>
              <h1 className="mb-5 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                FEMA and RBI Compliance for Your India Subsidiary
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                FC-GPR, FC-TRS, the annual FLA return, ECB reporting for parent loans and repatriation of funds, handled by one team so every foreign investment filing reaches the RBI on time.
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
              Written and reviewed by <strong className="text-[#081a42]">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) &middot; Last reviewed: <time dateTime="2026-10-09">9 October 2026</time>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Foreign Investment Reporting, Without the Penalties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                FEMA reporting is separate from company law and tax filings, and a missed RBI deadline attracts late submission fees that grow with the delay. Many subsidiaries find this out only when a bank or an auditor asks for proof of a filing made years earlier.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate keeps a live record of every foreign investment in your subsidiary, prepares each report with the supporting certificates and files it through your authorised dealer bank. Your finance team abroad sees one clear calendar instead of a set of RBI forms. For how incoming equity is itself reported after incorporation, see our{" "}
                <Link href="/india-subsidiary-registration" className="text-gold-dark font-semibold hover:underline">India subsidiary registration guide</Link>.
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

      {/* FILING BY FILING */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Handle, Filing by Filing</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The RBI filings an Indian subsidiary of a foreign company is most likely to need, in the order they usually arise.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {filings.map((item) => (
              <div key={item.title} className="p-6 bg-white border border-gray-200 rounded-lg">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE NEED */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Need from You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin. For an existing subsidiary we start with a review of what has already been filed.</p>
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

      {/* HOW WE WORK */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work, in Five Steps</h2>
          <p className="text-gray-600 leading-relaxed mb-8">We prepare each filing while the bank and the valuer complete their part, so nothing waits on anything else.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workSteps.map((step) => (
              <div key={step.title} className="border-t-4 border-gold bg-white rounded-b-lg p-4 shadow-sm">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{step.wk}</span>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Reasonable fees, confirmed in writing before we start.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-secondary/30 border border-gray-200 rounded-lg p-4">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#081a42] text-gold text-xs font-bold flex items-center justify-center mt-0.5">&#10003;</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Not included:</strong> valuation fees paid to the independent valuer, bank charges, late submission fees and any compounding fees payable to the RBI, and the filing of tax returns, which are available as separate services from the same team.
          </p>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The FEMA and RBI Filing Calendar</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when, for an Indian subsidiary with foreign investment. We track every date for you.</p>
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
          <p className="text-sm text-gray-600 mt-4">Deadlines depend on the type of transaction and can be changed by the RBI, so we confirm the dates that apply to your subsidiary.</p>
        </div>
      </section>

      {/* CASE STUDY */}
      <RelatedCaseStudies serviceSlug="fema-rbi-compliance" />

      {/* AFTER SETUP */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-8 items-center justify-between border border-gray-200 rounded-2xl p-8 bg-secondary/30">
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">One Team for the Rest of Your Compliance</h2>
              <p className="text-gray-600">FEMA reports must agree with your books, your tax filings and your company records. The same team handles all of them, so the numbers match everywhere.</p>
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
            title="Need Your FEMA and RBI Filings Reviewed or Taken Over?"
            description="Tell us where your parent company is, the investments and loans in your subsidiary, and what has been filed so far, and we'll reply with a clear quote."
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
                description: "The incorporation and initial FC-GPR filing that precedes ongoing FEMA/RBI compliance.",
              },
              {
                label: "Accounting, Reporting and Audit Support",
                href: "/accounting-reporting-audit-support",
                description: "The books and audited accounts that the Annual FLA Return and investment records are built from.",
              },
              {
                label: "Corporate Tax, GST and Transfer Pricing",
                href: "/corporate-tax-gst-transfer-pricing",
                description: "Withholding tax and treaty relief on dividends, fees and royalties remitted to the parent.",
              },
              {
                label: "Secretarial and ROC Compliance",
                href: "/secretarial-roc-compliance",
                description: "The ROC-side return of allotment that is filed alongside FC-GPR for every share issue.",
              },
              {
                label: "Payroll and Expat Services",
                href: "/payroll-expat-services",
                description: "Payroll and employment support for the India team your subsidiary funds through its RBI-reported investment.",
              },
              {
                label: "FDI Automatic vs Government Route",
                href: "/india-business-setup/fdi-channels",
                description: "Which sectors clear under the automatic route versus needing prior government approval before FC-GPR can be filed.",
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
            name: "FEMA and RBI Compliance",
            description:
              "Form FC-GPR, FC-TRS, ECB reporting, downstream investment reporting, repatriation of funds, FDI government route approval and the Annual FLA Return for Indian subsidiaries of foreign companies.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/fema-rbi-compliance",
            areaServed: "India",
            serviceType: "FEMA and RBI Regulatory Compliance for Indian Subsidiaries",
          }),
        }}
      />
    </main>
  )
}
