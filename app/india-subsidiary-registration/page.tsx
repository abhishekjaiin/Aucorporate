import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"

const youGet = [
  "A registered Indian private limited company with its Certificate of Incorporation",
  "PAN and TAN, and GST registration where needed",
  "An Indian bank account with your share capital received",
  "Shares issued to your parent, with share certificates",
  "Foreign investment reported to the RBI in Form FC-GPR",
]

const needFromYou = [
  { n: "1", title: "Board Resolution", body: "Approving the subsidiary, the investment amount, the directors and an authorised representative." },
  { n: "2", title: "Parent Company Documents", body: "Certificate of incorporation, charter documents and proof of registered address." },
  { n: "3", title: "Director and Shareholder Details", body: "Passport, address proof, email and mobile for each director and the nominee shareholder." },
  { n: "4", title: "A Resident Director", body: "At least one director who stays in India 182 days or more in the year. Don't have one? We can provide a professional resident director." },
  { n: "5", title: "An Indian Office Address", body: "Your own leased office or co-working space, or our registered office service if you don't have premises yet." },
  { n: "6", title: "Share Capital", body: "Remitted from abroad to the new company's Indian bank account once it is opened." },
]

const timeline = [
  { wk: "Week 1", title: "Plan", body: "Confirm the FDI route, capital, directors and company name options." },
  { wk: "Weeks 1–2", title: "Documents", body: "Draft everything and guide you through signing and authentication." },
  { wk: "Weeks 2–4", title: "Incorporate", body: "Digital signatures, name approval and incorporation with PAN and TAN." },
  { wk: "Weeks 4–5", title: "Bank and Capital", body: "Open the bank account and receive the share capital from your parent." },
  { wk: "Weeks 5–6", title: "Shares and FC-GPR", body: "Issue shares and report the investment to the RBI within 30 days of allotment." },
]

const included = [
  "Structure and FDI Route Advice",
  "Document Checklist for Your Country",
  "Digital Signatures and Director IDs",
  "Name Reservation",
  "Incorporation with PAN and TAN",
  "Bank Account Opening Support",
  "Share Issue and Share Certificates",
  "Form FC-GPR Filing with the RBI",
]

const countryGuides = [
  { label: "USA", href: "/india-entry-for-us-companies" },
  { label: "UK", href: "/india-entry-for-uk-companies" },
  { label: "Singapore", href: "/india-entry-for-singapore-companies" },
  { label: "Australia", href: "/india-entry-for-australian-companies" },
  { label: "Germany", href: "/india-entry-for-german-companies" },
  { label: "Japan", href: "/india-entry-for-japan-companies" },
  { label: "China", href: "/india-entry-for-china-companies" },
]

const faqs = [
  { q: "How much does it cost to register a subsidiary in India?", a: "Registering a subsidiary in India with AU Corporate costs USD 750–1,000, all-inclusive. The fee covers government fees and our professional fees for a subsidiary with INR 10 lakh share capital. Larger share capital or some states cost more, and we confirm a fixed quote before we start." },
  { q: "How long does it take to register a subsidiary in India?", a: "Registering a subsidiary in India typically takes 4–6 weeks from the day we receive your signed and authenticated documents. Notarising and apostilling documents in your own country is usually the longest step, so we prepare the Indian filings in parallel." },
  { q: "What is included in AU Corporate's subsidiary registration fee?", a: "AU Corporate's subsidiary registration fee includes structure and FDI advice, digital signatures and director IDs, name approval, incorporation with PAN and TAN, bank account opening support, share issue to the parent, share certificates and the FC-GPR filing with the RBI." },
  { q: "What is not included in the price?", a: "The subsidiary registration price does not include notary and apostille fees in your country, courier costs, or compliance after incorporation. Ongoing compliance is available from AU Corporate as a separate fixed monthly or annual package." },
  { q: "Can a foreign company own 100% of an Indian subsidiary?", a: "A foreign company can own 100% of an Indian subsidiary in most sectors, under the automatic route with no prior government approval. A few sectors cap foreign ownership or need approval, so AU Corporate checks your business activity against India's FDI rules before you commit." },
  { q: "How many shareholders does an Indian subsidiary need?", a: "An Indian subsidiary needs at least two shareholders. In a wholly owned subsidiary, the foreign parent holds almost all the shares and a nominee, usually a group company or an individual, holds one share on the parent's behalf." },
  { q: "Can we set up a joint venture instead of a wholly owned subsidiary?", a: "A foreign company can set up a joint venture with an Indian or foreign partner instead of a wholly owned subsidiary. Both are private limited companies, so the registration process, timeline and fee are the same; the difference is the ownership split and the shareholders' agreement." },
  { q: "How much share capital should an Indian subsidiary start with?", a: "An Indian subsidiary has no legal minimum share capital. The amount should cover set-up and running costs until the Indian subsidiary earns revenue, and AU Corporate's standard package is priced for INR 10 lakh share capital." },
  { q: "Do our directors need to travel to India to register the subsidiary?", a: "Directors do not need to travel to India to register a subsidiary. Documents are signed and authenticated in their own country and couriered to AU Corporate, although some banks ask for a short video verification of an authorised signatory." },
  { q: "What do you need from us to get started?", a: "To start registering your Indian subsidiary, AU Corporate needs your company details, the proposed directors and shareholders, the planned share capital and an Indian office address if you have one. We then send a fixed quote and a document checklist for your country." },
  { q: "Does an Indian subsidiary need a resident director?", a: "An Indian subsidiary must have at least one resident director, meaning a director who has stayed in India for 182 days or more in the financial year. The other directors can live abroad." },
  { q: "What if we don't have a resident director?", a: "If you don't have a resident director, AU Corporate can provide a professional resident director at a reasonable cost, so you can register your Indian subsidiary without having someone in India yet." },
  { q: "Can we make our Indian employee a resident director?", a: "An Indian employee can be appointed as the resident director if the employee agrees. In practice many employees prefer not to become directors, because a directorship comes with legal responsibilities under Indian company law." },
  { q: "What does a professional resident director provided by AU Corporate do?", a: "A professional resident director provided by AU Corporate signs the secretarial and statutory documents the subsidiary needs. The resident director has no authority over bank operations or vendor and customer contracts, and does not interfere in running the Indian subsidiary in any way." },
  { q: "What if we don't have an office in India yet?", a: "If you don't have an office in India yet, AU Corporate can provide a registered office address, so you can register the subsidiary before you lease premises." },
  { q: "In which Indian state can we register the subsidiary?", a: "An Indian subsidiary can be registered in any state; the state is decided by the registered office address. Government fees and stamp duty vary by state, so AU Corporate confirms the exact cost once the location is known." },
  { q: "Does AU Corporate help open the subsidiary's bank account?", a: "AU Corporate coordinates the subsidiary's bank account opening with the bank and prepares the paperwork. The parent then remits the share capital from abroad into that account." },
  { q: "When can the subsidiary hire employees?", a: "An Indian subsidiary can start hiring once it is incorporated and its bank account is open. Payroll, provident fund and employee insurance registrations are added as needed, and AU Corporate can run payroll from the first month." },
  { q: "Can AU Corporate run the subsidiary after incorporation?", a: "AU Corporate can run your Indian subsidiary after incorporation, including accounting, payroll, GST, TDS, FEMA filings, transfer pricing, audit support and annual returns. Most of our clients stay with us, so they have one team from setup onwards." },
  { q: "Can AU Corporate take over compliance for an existing Indian subsidiary?", a: "AU Corporate can take over compliance for a foreign company's existing Indian subsidiary. We start by reviewing past filings, fix any gaps, and then manage the monthly and annual compliance going forward." },
]

export default function IndiaSubsidiaryRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Foreign Subsidiary in India", href: "/india-business-setup/foreign-subsidiary-india" }, { label: "India Subsidiary Registration" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">Foreign Subsidiary in India</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold md:text-5xl">
            India Subsidiary Registration for Foreign Companies
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-white/85">
            Incorporation of your wholly owned subsidiary or joint venture, including name approval, PAN and TAN, bank account opening, share issue to the parent and FC-GPR filing.
          </p>
          <p className="text-white/70 leading-relaxed">
            150+ subsidiaries incorporated for parent companies from 10+ countries, since 2016. We handle the whole registration from India: structure, filings, bank account, share issue and the RBI reporting — you sign a handful of documents in your own country, and we do the rest.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-12 bg-gray-100 border-y">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "USD 750–1,000", label: "All-inclusive registration fee" },
              { value: "4–6 Weeks", label: "From signed documents to FC-GPR" },
              { value: "150+", label: "Subsidiaries incorporated" },
              { value: "Since 2016", label: "Serving foreign parent companies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-600 mb-1">{stat.value}</div>
                <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">We Set Up Your Indian Subsidiary, End to End</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            An Indian subsidiary is a private limited company owned by your parent company. It can hire staff, sign contracts, invoice customers and bill your parent, with its liability kept separate from yours. For the full step-by-step incorporation process and FDI eligibility rules, see our{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold-dark font-semibold hover:underline">company registration guide</Link>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            AU Corporate handles the whole registration from India: structure, filings, bank account, share issue and the RBI reporting. You sign a handful of documents in your own country, and we do the rest.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-4">You Get</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {youGet.map((item) => (<li key={item}>{item}</li>))}
          </ul>
        </div>
      </section>

      {/* WHAT WE NEED FROM YOU */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Need from You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Six things from the parent company. We send a checklist for your country, so documents are authenticated correctly the first time.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {needFromYou.map((item) => (
              <div key={item.title} className="p-6 bg-white border rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[#081a42] text-yellow-400 font-bold text-sm flex items-center justify-center mb-3">{item.n}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE STEPS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How AU Helps, in Five Steps</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We prepare the Indian filings while your documents are being authenticated, so the two don&apos;t hold each other up.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {timeline.map((step) => (
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
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            One all-inclusive price of USD 750–1,000, with a fixed quote confirmed before we start.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border rounded-lg p-4">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#081a42] text-yellow-400 text-xs font-bold flex items-center justify-center mt-0.5">✓</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Not included:</strong> notary and apostille fees in your country, courier costs, and compliance after incorporation. Government fees and stamp duty vary by state and share capital, so larger capital or some states cost more.
          </p>
        </div>
      </section>

      {/* SETTING UP FROM YOUR COUNTRY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Setting Up from Your Country</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Documents, authentication, tax treaties and reporting differ by country. Choose yours for a detailed guide.
          </p>
          <div className="flex flex-wrap gap-3">
            {countryGuides.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="px-4 py-2 bg-secondary/50 hover:bg-secondary border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:text-gold-dark transition"
              >
                {c.label} Guide →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER SETUP */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">After Setup, We Can Run It for You</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Accounting, payroll, GST, TDS, FEMA filings, transfer pricing, secretarial compliance and audit support, from the same team that set up your Indian subsidiary.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/accounting-reporting-audit-support" className="px-4 py-2 border border-[#081a42] text-[#081a42] rounded-full text-sm font-semibold hover:bg-[#081a42] hover:text-white transition">Accounting and Reporting</Link>
            <Link href="/fema-rbi-compliance" className="px-4 py-2 border border-[#081a42] text-[#081a42] rounded-full text-sm font-semibold hover:bg-[#081a42] hover:text-white transition">FEMA and RBI Compliance</Link>
            <Link href="/corporate-tax-gst-transfer-pricing" className="px-4 py-2 border border-[#081a42] text-[#081a42] rounded-full text-sm font-semibold hover:bg-[#081a42] hover:text-white transition">Tax and Transfer Pricing</Link>
            <Link href="/secretarial-roc-compliance" className="px-4 py-2 border border-[#081a42] text-[#081a42] rounded-full text-sm font-semibold hover:bg-[#081a42] hover:text-white transition">Secretarial Compliance</Link>
            <Link href="/payroll-expat-services" className="px-4 py-2 border border-[#081a42] text-[#081a42] rounded-full text-sm font-semibold hover:bg-[#081a42] hover:text-white transition">Payroll and Expat Services</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
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
      <section className="py-16 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Ready to Register Your Indian Subsidiary?"
            description="Tell us where your parent company is, your planned share capital and when you want to start, and we'll reply with a fixed quote and a document checklist for your country."
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "Foreign Subsidiary in India — Full Guide",
                href: "/india-business-setup/foreign-subsidiary-india",
                description: "The complete lifecycle hub this registration guide sits under: structure, FDI/FEMA, incorporation, operation and exit.",
              },
              {
                label: "Accounting, Reporting and Audit Support",
                href: "/accounting-reporting-audit-support",
                description: "Monthly bookkeeping, reconciliations and US GAAP/IFRS reporting once the subsidiary is incorporated.",
              },
              {
                label: "FEMA and RBI Compliance",
                href: "/fema-rbi-compliance",
                description: "FC-GPR, FC-TRS, the annual FLA return and ECB reporting that follow the initial share allotment.",
              },
              {
                label: "Corporate Tax, GST and Transfer Pricing",
                href: "/corporate-tax-gst-transfer-pricing",
                description: "Corporate tax returns, GST registration and transfer pricing for the newly incorporated entity.",
              },
              {
                label: "Secretarial and ROC Compliance",
                href: "/secretarial-roc-compliance",
                description: "Board meetings, AGM and annual ROC filings once the company is on the register.",
              },
              {
                label: "Payroll and Expat Services",
                href: "/payroll-expat-services",
                description: "Payroll, PF/ESI and employment contracts for your first hires in India.",
              },
              {
                label: "Company Registration in India",
                href: "/india-business-setup/company-formation",
                description: "The full SPICe+ incorporation process and FDI eligibility rules behind this registration service.",
              },
              {
                label: "FDI Automatic vs Government Route",
                href: "/india-business-setup/fdi-channels",
                description: "Which sectors clear under the automatic route versus needing prior government approval before shares are issued.",
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
            name: "India Subsidiary Registration",
            description:
              "Incorporation of a wholly owned subsidiary or joint venture in India, including name approval, PAN and TAN, bank account opening, share issue to the parent and FC-GPR filing.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/india-subsidiary-registration",
            areaServed: "India",
            serviceType: "Incorporation of Indian Subsidiaries for Foreign Companies",
          }),
        }}
      />
    </main>
  )
}
