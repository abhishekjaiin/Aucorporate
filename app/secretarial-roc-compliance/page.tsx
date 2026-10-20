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
  { title: "Every ROC Date Tracked", body: "Reminders before each due date" },
  { title: "Resident Director Service", body: "A professional resident director, if you need one" },
  { title: "Registered Office Service", body: "An Indian address, if you don't have premises" },
]

const quickAnswer = {
  heading: "Secretarial and ROC Compliance for an Indian Subsidiary: The Short Answer",
  text: "Every Indian private limited company must hold board meetings and an annual general meeting, keep statutory registers, and file annual financial statements and an annual return with the Registrar of Companies (ROC) under the Companies Act, 2013. AU Corporate, a New Delhi firm of Company Secretaries, Chartered Accountants and lawyers serving foreign parents since 2016, runs all of this at reasonable fees, including resident director and registered office support. It also handles shifting of the registered office, replies to MCA and ROC notices under Section 206, mergers, and the closure or winding up of an Indian subsidiary.",
}

const youGet = [
  "Board and shareholder meetings held and minuted properly",
  "Annual financial statements and annual return filed with the ROC",
  "Director KYC and director changes filed on time",
  "Statutory registers and share records kept up to date",
  "A resident director and registered office, if you need them",
]

const stepByStep = [
  { tag: "Through the Year", title: "Board Meetings", body: "Notice, agenda, minutes and follow-up for board meetings, with the written resolutions needed between meetings." },
  { tag: "Once a Year", title: "AGM and Shareholder Resolutions", body: "Notice, adoption of accounts, auditor appointment and minutes for the annual general meeting." },
  { tag: "After the AGM", title: "Annual ROC Filings", body: "Filing of the financial statements and the annual return with the Registrar of Companies, with the other yearly forms." },
  { tag: "Every Year and on Change", title: "Director Compliance", body: "Director KYC, appointment and resignation filings and disclosures of interest." },
  { tag: "All the Time", title: "Statutory Registers", body: "Registers of members, directors, charges and share certificates, and the records of beneficial ownership." },
  { tag: "When the Charter Changes", title: "Alterations and Share Capital", body: "Change of name, objects or registered office clause, increase in authorised capital, allotment of shares, share transfers and the related ROC filings." },
  { tag: "When You Move", title: "Shifting of Registered Office", body: "Board and shareholder resolutions, the filing with the ROC and, where the move is to another state, the application to the Regional Director, with GST, PAN and bank records updated." },
  { tag: "When a Notice Arrives", title: "MCA and ROC Notices, Including Section 206", body: "Review of notices from the ROC and the Ministry of Corporate Affairs, such as requests for information or explanation, inspection and inquiry under Section 206 and strike-off notices, with the reply and documents prepared before the due date." },
  { tag: "When the Structure Changes", title: "Mergers and Amalgamations", body: "Merger of group companies, or of a subsidiary into its parent, through an NCLT scheme or the fast-track route, with the approvals, valuation inputs and filings." },
  { tag: "When the Business Ends", title: "Closure and Winding Up", body: "Closure of an Indian subsidiary by strike-off or voluntary liquidation, with final accounts, tax clearance and the return of funds to the parent." },
  { tag: "Before a Funding Round, Audit or Sale", title: "Secretarial Compliance Review", body: "A check of your registers, minutes and ROC filings, with a list of gaps and the cost of fixing them." },
  { tag: "If You Need It", title: "Resident Director and Registered Office", body: "A professional resident director for the statutory documents, and an Indian registered office address." },
]

const needFromYou = [
  { n: "1", title: "Company Documents", body: "Certificate of incorporation, memorandum and articles, and earlier minutes and registers." },
  { n: "2", title: "Director and Shareholder Details", body: "Current directors, shareholders and share holdings, with KYC." },
  { n: "3", title: "Audited Accounts", body: "The financial statements adopted for each year." },
  { n: "4", title: "Digital Signatures", body: "Active digital signatures for the directors who sign the filings." },
  { n: "5", title: "Earlier ROC Filings", body: "Copies of past forms and any notices received." },
]

const workSteps = [
  { wk: "Week 1", title: "Review", body: "Check the registers, past filings and any late forms." },
  { wk: "Week 1", title: "Calendar", body: "Set every meeting and filing date for the year." },
  { wk: "Before Each Date", title: "Prepare", body: "Draft notices, minutes, resolutions and forms." },
  { wk: "On the Date", title: "File", body: "File with the ROC and update the registers." },
  { wk: "Ongoing", title: "Advise", body: "Flag changes in law that affect your Indian subsidiary." },
]

const included = [
  "Board Meeting Notices and Minutes",
  "AGM Papers and Minutes",
  "Annual Financial Statement and Annual Return Filings",
  "Director KYC and Director Changes",
  "Statutory Registers and Share Records",
  "Auditor Appointment Filings",
  "Commencement of Business Declaration",
  "Alteration of Name, Objects and Share Capital",
  "Shifting of the Registered Office",
  "Replies to ROC and MCA Notices, Including Section 206",
  "Merger and Amalgamation Filings",
  "Strike-Off and Voluntary Liquidation Filings",
  "Secretarial Compliance Review",
]

const calendar = [
  { when: "Within 30 days of incorporation", what: "First board meeting and appointment of first auditor", how: "Papers drafted and filing made" },
  { when: "Within 180 days of incorporation", what: "Declaration of commencement of business", how: "Prepared and filed" },
  { when: "Every quarter", what: "Board meeting, at least four a year", how: "Notice, minutes and records" },
  { when: "By 30 September", what: "Annual general meeting", how: "Papers, minutes and resolutions" },
  { when: "Within 30 days of the AGM", what: "Financial statements filed with the ROC", how: "Prepared and filed" },
  { when: "Within 60 days of the AGM", what: "Annual return filed with the ROC", how: "Prepared and filed" },
  { when: "Within 15 days of a change of registered office", what: "Notice of the new address to the ROC", how: "Resolutions and filing prepared" },
  { when: "Within 30 days of allotment of shares", what: "Return of allotment of shares", how: "Prepared and filed with the RBI report" },
  { when: "As stated in the notice", what: "Reply to an ROC or MCA notice", how: "Reply and documents prepared before the date" },
  { when: "By 30 June and half-yearly", what: "Return of deposits and MSME payment return, where applicable", how: "Prepared and filed" },
]

const afterLinks = [
  { label: "Accounting, Reporting and Audit Support", href: "/accounting-reporting-audit-support" },
  { label: "FEMA and RBI Compliance", href: "/fema-rbi-compliance" },
  { label: "Corporate Tax, GST and Transfer Pricing", href: "/corporate-tax-gst-transfer-pricing" },
  { label: "Payroll and Expat Services", href: "/payroll-expat-services" },
  { label: "India Subsidiary Registration", href: "/india-subsidiary-registration" },
]

const faqs = [
  { q: "What is secretarial and ROC compliance for an Indian subsidiary?", a: "In India, secretarial compliance means holding board and shareholder meetings, keeping statutory registers and filing annual forms with the Registrar of Companies (ROC) under the Companies Act, 2013. AU Corporate, through its Company Secretaries, runs all of this for Indian subsidiaries of foreign companies on a set calendar." },
  { q: "How much does secretarial and ROC compliance cost in India?", a: "AU Corporate charges reasonable fees for this service, in US dollars, and confirms a clear written quote before work begins, so there are no surprises. The fee depends on the size of your subsidiary, the volume of work and whether past filings need to be reviewed. Government fees and third-party fees are separate." },
  { q: "What are the annual filings an Indian private limited company must make with the ROC?", a: "In India, a private limited company must file its financial statements within 30 days of the AGM and its annual return within 60 days of the AGM, along with director KYC, auditor appointment and other forms. AU Corporate prepares and files each of these every year." },
  { q: "How many board meetings must an Indian subsidiary hold each year?", a: "In India, a private limited company must hold at least four board meetings a year, with no more than 120 days between two meetings, though small companies and one person companies have relaxations. AU Corporate schedules the meetings, prepares the notices and minutes and keeps the records." },
  { q: "When must an Indian subsidiary hold its annual general meeting?", a: "In India, an Indian subsidiary must hold its first AGM within nine months of its first year end and later AGMs within six months of the financial year end, which is normally by 30 September. AU Corporate prepares the notice, the adoption of accounts and the minutes." },
  { q: "What happens if an Indian subsidiary misses a ROC filing?", a: "In India, a late ROC filing attracts additional fees for every day of delay, and continued default can lead to penalties on the company and its directors and, in serious cases, disqualification of directors. AU Corporate reviews missed filings, files them and tells you the cost before we proceed." },
  { q: "What does a professional resident director from AU Corporate do?", a: "In India, every company must have at least one director who has stayed in India for 182 days or more in the financial year. AU Corporate can provide a professional resident director who signs the secretarial and statutory documents. The resident director has no authority over bank operations or vendor and customer contracts and does not interfere in running the Indian subsidiary." },
  { q: "Can AU Corporate provide a registered office address in India?", a: "AU Corporate can provide a registered office address in India so a subsidiary can register and receive official notices before it leases premises. The address is used on ROC records and tax registrations, and AU Corporate forwards the notices received." },
  { q: "What is director KYC and who must do it in India?", a: "In India, director KYC is the periodic confirmation of each director's identity, address and contact details with the Ministry of Corporate Affairs, required for every director with a director identification number. AU Corporate files it for each director so their DIN stays active." },
  { q: "When must a new Indian subsidiary appoint its first auditor and declare commencement of business?", a: "In India, the board must appoint the first auditor within 30 days of incorporation, and the company must file a declaration of commencement of business within 180 days, once the shareholders have paid in their capital. AU Corporate prepares both filings for new subsidiaries." },
  { q: "What statutory registers must an Indian subsidiary maintain?", a: "In India, an Indian subsidiary must maintain registers of members, directors and key personnel, charges, share transfers and beneficial owners, as well as minutes books and share certificates. AU Corporate keeps these registers up to date and ready for inspection by auditors or regulators." },
  { q: "What is the Registrar of Companies (ROC) in India?", a: "In India, the Registrar of Companies (ROC) is the government office under the Ministry of Corporate Affairs that registers companies and keeps their public records. An Indian subsidiary files its annual financial statements, annual return and changes in directors with the ROC online. AU Corporate prepares and files each of these." },
  { q: "Can directors based abroad sign ROC filings and attend board meetings from outside India?", a: "Directors based abroad can sign ROC filings using a digital signature certificate, and in most cases they can attend board meetings by video conference. AU Corporate prepares the documents and the signing links, so directors do not have to travel to India to keep the Indian subsidiary compliant." },
  { q: "What are a DIN and a digital signature certificate, and does every director need them?", a: "In India, a Director Identification Number (DIN) is a unique number for each director, and a digital signature certificate (DSC) is the electronic signature used to sign ROC filings. Every director of an Indian subsidiary needs both. AU Corporate obtains them for directors and keeps the DSC valid for filings." },
  { q: "How does an Indian subsidiary appoint or remove a director in India?", a: "In India, a director is appointed by a board or shareholder resolution after the director gives consent and holds a DIN, and the change must be filed with the ROC, generally within 30 days. AU Corporate prepares the resolutions, consent forms and the filing for each appointment or resignation." },
  { q: "What is significant beneficial ownership and does an Indian subsidiary have to report it?", a: "In India, a significant beneficial owner is an individual who ultimately holds or controls a set share of the company, directly or through a foreign parent. The Indian subsidiary must obtain declarations and keep a register, and file the details with the ROC. AU Corporate collects the declarations from your parent and files them." },
  { q: "Does an Indian subsidiary need a company secretary?", a: "In India, a private company needs a full-time company secretary only if its paid-up share capital is INR 10 crore or more. Other subsidiaries can use an external professional. AU Corporate's Company Secretaries handle the meetings, registers and ROC filings, so you do not have to hire in India." },
  { q: "How does an Indian subsidiary shift its registered office within the same city in India?", a: "Within the same city, town or village, the board passes a resolution and the Indian subsidiary files a notice of the new address with the ROC, generally within 15 days. AU Corporate prepares the resolution and the filing, and updates the address on the PAN, GST, bank and other records." },
  { q: "How does an Indian subsidiary shift its registered office to another city or state in India?", a: "A move to another city within the same state generally needs a special resolution of the shareholders and ROC filings, and the Regional Director's approval if the ROC jurisdiction changes. A move to another state also needs an amendment of the memorandum, public notice and the Regional Director's confirmation. AU Corporate prepares and follows up the application." },
  { q: "What is a notice under Section 206 of the Companies Act and what does it mean?", a: "Section 206 of the Companies Act, 2013 allows the Registrar of Companies to ask a company for information or an explanation, and to order an inspection or inquiry into its books if it doubts compliance. A notice is not a finding of any offence, but it needs a complete and timely reply. AU Corporate reviews the notice, collects the documents and prepares the reply." },
  { q: "How should an Indian subsidiary respond to an MCA or ROC notice?", a: "An Indian subsidiary should read the notice carefully, note the reply date, collect the books and filings it asks for, and reply in writing before the deadline, because ignoring a notice can lead to penalties on the company and its directors. AU Corporate prepares the reply, has the board approve it, files it and asks for more time where needed." },
  { q: "What is a strike-off notice under Section 248 and how can an Indian subsidiary respond?", a: "Under Section 248 of the Companies Act, the ROC can send a notice proposing to remove a company from the register if it has not carried on business or filed its returns for a period, and the company can reply to show that it is active. AU Corporate prepares the reply, files the pending returns and explains the options if the name has already been removed." },
  { q: "Can an Indian subsidiary merge with its parent or another Indian company?", a: "An Indian subsidiary can merge with another Indian company through a scheme of merger or amalgamation approved by the National Company Law Tribunal (NCLT) under Sections 230 to 232 of the Companies Act. AU Corporate prepares the scheme, the valuation inputs, the board and shareholder approvals and the filings." },
  { q: "What is a fast-track merger under Section 233 of the Companies Act?", a: "A fast-track merger under Section 233 is a simpler process, without NCLT hearings, which is available for the merger of a wholly owned subsidiary into its holding company and of two or more small companies. The approval comes from the Regional Director after members and creditors approve. AU Corporate checks if your merger qualifies and prepares the filings." },
  { q: "Can a foreign company merge with its Indian subsidiary?", a: "A merger between an Indian company and a foreign company is allowed under Section 234 of the Companies Act and the cross-border merger rules under FEMA, if the conditions are met and the foreign company is in a notified jurisdiction. AU Corporate checks the route, the valuation and the RBI reporting before you begin." },
  { q: "What are the ways to close an Indian subsidiary in India?", a: "An Indian subsidiary can be closed by striking off the company under Section 248, by voluntary liquidation under the Insolvency and Bankruptcy Code, 2016, or by winding up through the NCLT. Strike-off suits a company with no business and no liabilities, and voluntary liquidation suits a solvent company with assets and operations. AU Corporate recommends the route after reviewing your accounts." },
  { q: "What is the process for voluntary liquidation of a solvent Indian subsidiary?", a: "In voluntary liquidation under the Insolvency and Bankruptcy Code, the directors make a declaration of solvency, the shareholders pass a special resolution, a liquidator is appointed, the liquidator realises the assets and pays creditors, and the NCLT passes the order of dissolution. AU Corporate prepares the declaration, the resolutions and the filings and works with the liquidator." },
  { q: "Can an Indian subsidiary with no business be struck off the ROC register?", a: "A company that did not start business within a year of incorporation, or has not carried on business for the last two financial years, can apply to the ROC for removal of its name under Section 248, with affidavits, an indemnity bond and a statement of accounts. AU Corporate checks whether the subsidiary qualifies and prepares the application." },
  { q: "What happens to the parent's investment and the bank balance when an Indian subsidiary is closed?", a: "When an Indian subsidiary is closed, it pays its liabilities and taxes, and the remaining funds can be returned to the foreign parent as liquidation proceeds, with reports to the RBI and certificates from the bank and a Chartered Accountant. AU Corporate handles the FEMA reporting and the remittance so the parent can receive the money." },
  { q: "What is a dormant company and can an Indian subsidiary be made dormant?", a: "A dormant company is one formed for a future project or to hold an asset or intellectual property, or one with no significant accounting transaction, and it can apply to the ROC for dormant status. A dormant company has fewer annual compliances. AU Corporate checks whether the subsidiary qualifies and files the application." },
  { q: "How does an Indian subsidiary change its name or increase its authorised capital?", a: "To change its name, an Indian subsidiary passes a special resolution and applies to the ROC for name approval and the change. To increase its authorised capital, it amends the memorandum by a shareholders' resolution and files with the ROC, paying the additional fee. AU Corporate prepares the resolutions and makes both filings." },
  { q: "What is the return of allotment and when is it due?", a: "When an Indian subsidiary allots shares, it must file a return of allotment with the ROC within 30 days. For shares issued to a foreign parent, the FC-GPR report to the RBI is also due within 30 days, and AU Corporate prepares and files both so they agree." },
  { q: "Can AU Corporate review our secretarial records before a funding round, audit or sale?", a: "AU Corporate reviews your registers, minutes, share records and ROC filings, lists the gaps with the cost of fixing them, and files the missing forms, so that the Indian subsidiary is ready for due diligence by an investor, an auditor or a buyer." },
  { q: "Can AU Corporate take over secretarial compliance for my existing Indian subsidiary?", a: "AU Corporate can take over secretarial compliance for an existing subsidiary at any point. We review the registers, minutes and ROC filings, file any missing forms, and then run the meeting and filing calendar from an agreed start date." },
  { q: "Can AU Corporate handle secretarial compliance for a parent company from my country?", a: "AU Corporate handles secretarial and ROC compliance for Indian subsidiaries of parent companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. Your directors can sign electronically, so travel is not needed." },
]
const faqsLeft = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsRight = faqs.slice(Math.ceil(faqs.length / 2))

export default function SecretarialRocCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Subsidiary Registration", href: "/india-subsidiary-registration" }, { label: "Secretarial and ROC Compliance" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex-[1.4] min-w-0">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Foreign Subsidiary in India</span>
              <h1 className="mb-5 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Secretarial and ROC Compliance for Your India Subsidiary
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Board meetings, AGM, annual ROC filings, director KYC, statutory registers, and resident director and registered office support, run by Company Secretaries on a set calendar.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Law Compliance, Handled from India</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Company law compliance in India has many small, fixed dates, and a missed filing carries additional fees for every day of delay and penalties on the company and its directors. Most foreign parents do not see these dates until a notice arrives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate keeps the subsidiary&apos;s records, prepares the meeting papers and files every form with the ROC. Your directors abroad sign documents electronically or in a short batch, and we manage the rest.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Handle, Step by Step</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The secretarial work an Indian subsidiary needs through the year.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {stepByStep.map((item) => (
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
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin. For an existing subsidiary we also review earlier filings.</p>
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
          <p className="text-gray-600 leading-relaxed mb-8">We prepare the papers before each date, so your directors only review and sign.</p>
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
            <strong>Not included:</strong> government filing fees and stamp duty, NCLT and Regional Director fees, the fees of valuers and liquidators, additional fees for earlier delays, the statutory auditor&apos;s fee, and the resident director or registered office service, which is quoted separately where you need it.
          </p>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Yearly Secretarial and ROC Calendar</h2>
          <p className="text-gray-600 leading-relaxed mb-8">What is due, and when, for an Indian private company. We track every date for you.</p>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-[#081a42] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">When</th>
                  <th className="text-left px-4 py-3 font-semibold">What</th>
                  <th className="text-left px-4 py-3 font-semibold">How AU Helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
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
          <p className="text-sm text-gray-600 mt-4">Dates assume a 1 April to 31 March financial year and can change by notification. Small companies have some relaxations, and we confirm what applies to yours.</p>
        </div>
      </section>

      {/* AFTER SETUP */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-8 items-center justify-between border border-gray-200 rounded-2xl p-8 bg-secondary/30">
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">One Team for the Rest of Your Compliance</h2>
              <p className="text-gray-600">Secretarial filings must agree with your accounts, FEMA reports and tax returns. The same team handles each of them.</p>
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

      <RelatedCaseStudies serviceSlug="secretarial-roc-compliance" />

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
            title="Need Secretarial or ROC Compliance Support?"
            description="Tell us where your parent company is, when the subsidiary was incorporated and whether you need a resident director or registered office, and we'll reply with a clear quote."
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
                description: "The incorporation that creates the company this secretarial calendar then runs for.",
              },
              {
                label: "Accounting, Reporting and Audit Support",
                href: "/accounting-reporting-audit-support",
                description: "The audited financial statements that are adopted at the AGM and filed with the ROC.",
              },
              {
                label: "FEMA and RBI Compliance",
                href: "/fema-rbi-compliance",
                description: "The FC-GPR filing to the RBI that runs alongside the ROC's return of allotment for every share issue.",
              },
              {
                label: "Corporate Tax, GST and Transfer Pricing",
                href: "/corporate-tax-gst-transfer-pricing",
                description: "The tax return and transfer pricing report prepared from the same audited accounts adopted at the AGM.",
              },
              {
                label: "Payroll and Expat Services",
                href: "/payroll-expat-services",
                description: "Payroll and employment support for the India team your subsidiary is governed to employ.",
              },
              {
                label: "Regulatory Compliance Framework",
                href: "/india-business-setup/regulatory-compliance",
                description: "The broader six-regime compliance landscape, including corporate governance, that this page details.",
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
            name: "Secretarial and ROC Compliance",
            description:
              "Board meetings, AGM, annual ROC filings, director KYC, statutory registers, registered office shifting, replies to MCA/ROC notices under Section 206, mergers and winding up for Indian subsidiaries of foreign companies.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/secretarial-roc-compliance",
            areaServed: "India",
            serviceType: "Secretarial and ROC Compliance for Indian Subsidiaries",
          }),
        }}
      />
    </main>
  )
}
