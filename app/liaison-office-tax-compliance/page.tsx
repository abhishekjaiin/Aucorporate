import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"

const heroChecklist = [
  { title: "No Business Income Expected", body: "But filings still apply" },
  { title: "PE Risk Reviewed", body: "Tasks checked against the law" },
  { title: "TDS and TAN", body: "Salaries, rent and fees" },
  { title: "Multiple Countries Covered", body: "USA, UK, Singapore, Australia, Germany, Japan and China" },
]

const youGet = [
  "TAN and TDS returns filed",
  "Annual statement filed on time",
  "Permanent establishment review",
  "Return and GST position checks",
  "Expat tax support",
]

const taxAreas = [
  { tag: "Before You Start", title: "Permanent Establishment Review", body: "Whether the planned tasks keep the office out of a taxable presence." },
  { tag: "Every Year", title: "Annual Statement", body: "The annual statement of activities within 60 days of the year end." },
  { tag: "Every Month and Quarter", title: "TDS Compliance", body: "TAN, deduction on salaries, rent and fees, deposit and quarterly returns." },
  { tag: "Every Year", title: "Return Check", body: "Whether a return is needed, and filing where it is." },
  { tag: "Each Year", title: "GST Position Check", body: "Whether GST registration is needed." },
  { tag: "When an Expat Joins", title: "Expat Taxation", body: "Residence, salary tax, treaty relief and returns." },
  { tag: "When a Notice Arrives", title: "Notices and Representation", body: "Replies and representation if the office is treated as doing business." },
  { tag: "At Closure", title: "Tax Clearance", body: "Final filings and paperwork for closure." },
]

const needFromYou = [
  { n: "1", title: "Approval Letter", body: "The AD bank approval and UIN." },
  { n: "2", title: "Accounts", body: "The liaison office's accounts and expense records." },
  { n: "3", title: "Tax Registrations", body: "PAN, TAN and past filings." },
  { n: "4", title: "Expat Details", body: "Passport, visa and salary details for each expat." },
  { n: "5", title: "Notices", body: "Copies of any tax notices received." },
]

const included = [
  "Permanent Establishment Review",
  "Annual Statement",
  "TAN and TDS Returns",
  "Return and GST Checks",
  "Expat Taxation",
  "Treaty Opinions",
  "Notice Replies",
  "Closure Tax Paperwork",
]

const afterLinks = [
  { label: "Liaison Office Registration", href: "/liaison-office-registration" },
  { label: "Liaison Office FEMA and RBI Compliance", href: "/liaison-office-fema-rbi-compliance" },
  { label: "Liaison Office Accounting, Reporting and Audit", href: "/liaison-office-accounting-audit" },
  { label: "ROC Compliance for a Liaison Office (FC Forms)", href: "/liaison-office-roc-compliance" },
  { label: "Liaison Office Payroll and Labour Law Compliance", href: "/liaison-office-payroll-compliance" },
]

const faqs = [
  { q: "Does a liaison office pay income tax in India?", a: "Generally no business income tax, because a liaison office earns no income. It still deducts TDS on salaries, rent and fees, files an annual statement and keeps proper records. AU Corporate checks the position each year." },
  { q: "Can a liaison office become a permanent establishment in India?", a: "Yes, if it does more than liaison. A liaison office limited to representing the parent, collecting information and promoting the parent's trade is generally outside the taxable business connection, but selling, negotiating or concluding contracts can create a permanent establishment. AU Corporate reviews activities." },
  { q: "What annual statement must a liaison office file with the tax department?", a: "A liaison office must furnish an annual statement of its activities to the tax authorities within 60 days of the end of the financial year (Form 49C under the earlier law). AU Corporate prepares and files it, and checks the form number under the current law." },
  { q: "Does a liaison office file an income tax return in India?", a: "Usually there is no business income to report, but AU Corporate checks each year whether a return is needed, for example if any income arises, and files it where required. Employees' own returns are handled separately." },
  { q: "Is money received from the head office taxable?", a: "No. Inward remittances from the head office to fund a liaison office's expenses are not income of the office. AU Corporate keeps the bank certificates to show this to the AD bank and tax authorities." },
  { q: "What is TDS and which payments does a liaison office deduct it on?", a: "TDS is tax deducted at source. A liaison office deducts it on salaries, rent and fees to professionals and vendors, deposits it with the government and files quarterly returns. It needs a TAN. AU Corporate calculates, deposits and files." },
  { q: "Does a liaison office need GST registration in India?", a: "Generally not, because it makes no supplies. A liaison office may still need registration in some cases, such as on reverse charge for certain services, and AU Corporate checks each year. It cannot charge GST or invoice customers." },
  { q: "Does transfer pricing apply to a liaison office?", a: "Generally no, because a liaison office earns no income and does not sell to the group. But if a liaison office starts earning, such as through commission, that would breach its approval and bring tax and transfer pricing exposure. AU Corporate flags this early." },
  { q: "How does a tax treaty help a foreign company with a liaison office?", a: "India has tax treaties with most countries, including Russia and Sri Lanka, under which activities that are preparatory or auxiliary may not create a permanent establishment. A tax residency certificate and Form 10F may be needed. AU Corporate prepares the documents and opinions." },
  { q: "How are expats working in a liaison office taxed in India?", a: "An expat's salary for work done here is taxable here, whoever pays it, and the residence status, treaty and social security position matter. AU Corporate reviews each expat, deducts tax where needed and prepares their returns." },
  { q: "What if the tax department says the liaison office is doing business?", a: "AU Corporate reviews the facts and the office's activities, replies to the notice and represents the foreign company, with documents showing the office only liaised. Fees are agreed in writing." },
  { q: "Is tax clearance needed to close a liaison office?", a: "Generally yes. The AD bank asks for evidence that taxes and liabilities are cleared before closing funds are remitted. AU Corporate prepares the final filings and the paperwork." },
  { q: "Can AU Corporate represent a liaison office in tax matters?", a: "Yes. AU Corporate replies to notices and represents the foreign company before the tax authorities and tribunals, and handles any GST notice. AU Corporate handles this for foreign companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan and China. Fees are agreed in writing." },
]

const faqsCol1 = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsCol2 = faqs.slice(Math.ceil(faqs.length / 2))

export default function LiaisonOfficeTaxCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Liaison Office Tax Compliance" }]} />

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Liaison Office in India</span>
              <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                Tax Compliance for Your India Liaison Office
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                TDS, annual statement, permanent establishment review, GST position and expat tax for the liaison office of a foreign company.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="https://cal.com/abhishek-jaiin-ybbklq/30min" target="_blank" rel="noreferrer" className="inline-block rounded-lg bg-gold px-6 py-3 font-bold text-[#081a42] hover:bg-gold-dark transition-colors">
                  Book Consultation with an Expert
                </Link>
                <InquiryTrigger className="inline-block rounded-lg border-2 border-white px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
                  Get a Quote
                </InquiryTrigger>
              </div>
              <p className="text-sm text-white/70">150+ Regular Clients · Chartered Accountants and Company Secretaries · Since 2016</p>
            </div>
            <aside className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <ul className="space-y-4">
                {heroChecklist.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-[#081a42]">✓</span>
                    <div>
                      <strong className="block text-white">{item.title}</strong>
                      <span className="block text-sm text-white/70">{item.body}</span>
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
          <div className="rounded-r-xl border-l-4 border-gold bg-[#fffbe6] p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Tax Compliance for a Liaison Office: The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              A liaison office in India earns no income, so it generally pays no business income tax, but it must deduct TDS with a TAN, file an annual statement of activities within 60 days of the year end, and avoid doing anything that could make it a permanent establishment. AU Corporate, a New Delhi firm of Chartered Accountants, prepares each filing and reviews its tasks against the tax rules.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Written and reviewed by <strong className="text-gray-700">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tax Compliance That Keeps the Office Within Its Role</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The main tax risk of a liaison office is not the rate but the activity: if it sells, negotiates or earns, the foreign company may be taxed in India — see the{" "}
                <Link href="/liaison-office-registration" className="text-gold-dark font-semibold hover:underline">Liaison Office Registration guide</Link>{" "}
                for how this fits the wider structure.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate handles the filings and reviews the tasks so the office stays within its role.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">You Get</h3>
              <ul className="space-y-3">
                {youGet.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-gold" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TAX AREAS */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Handle, Tax by Tax</h2>
          <p className="text-gray-600 leading-relaxed mb-8">The tax areas a liaison office deals with most often.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {taxAreas.map((item) => (
              <div key={item.title} className="p-6 bg-white border rounded-lg">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7a5c00] bg-[#fffbe6] px-2 py-0.5 rounded mb-3">{item.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEED FROM YOU */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Need from You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Five items to begin.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {needFromYou.map((item) => (
              <div key={item.n} className="p-6 bg-secondary/20 border rounded-lg">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#081a42] text-sm font-bold text-gold">{item.n}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Reasonable fees, confirmed in writing before we start.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white border rounded-lg p-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#081a42] text-xs font-bold text-gold">✓</span>
                <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            <strong>Not included:</strong> government fees and tax payments, and representation in formal tax disputes, which is quoted separately.
          </p>
        </div>
      </section>

      {/* AFTER / CROSS-LINKS */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex-1 min-w-[260px]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">One Team for the Rest of Your Liaison Office Compliance</h2>
              <p className="text-gray-600">Your liaison office accounts, tax returns, RBI filings and ROC forms must agree with each other. The same team handles each of them.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {afterLinks.map((link) => (
                <Link key={link.href} href={link.href} className="inline-block rounded-full border border-[#081a42] px-5 py-2.5 text-sm font-semibold text-[#081a42] hover:bg-[#081a42] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Questions Before You Start</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-2">Straight answers to the questions foreign finance teams ask most about a liaison office in India.</p>
          <p className="text-sm text-gray-500 text-center">
            Written and reviewed by <strong className="text-gray-700">Abhishek Jaiin</strong>, Chartered Accountant (ICAI Membership No. 544646) · Last reviewed: 9 October 2026
          </p>
          <p className="text-sm text-gray-500 text-center mb-10">This is general guidance based on Indian law and practice as at the date above. It is not advice for your specific case, and rules can change.</p>
          <div className="grid sm:grid-cols-2 gap-x-10">
            <FaqAccordion faqs={faqsCol1} />
            <FaqAccordion faqs={faqsCol2} />
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
      <section className="py-16 bg-secondary/50" id="contact">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Need Tax Compliance Support for Your Liaison Office?"
            description="Tell us about your liaison office's tasks, expats and any notices received, and our team will confirm the filings and reviews you need."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Liaison Office Tax Compliance",
            description:
              "TDS, annual statement, permanent establishment risk, GST position and expat tax for the India liaison office of a foreign company.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/liaison-office-tax-compliance",
            areaServed: "India",
            serviceType: "Liaison Office Tax Compliance",
          }),
        }}
      />
    </main>
  )
}
