import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/LeadForm"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const structureOptions = [
  {
    title: "Wholly Owned Subsidiary (Private Limited)",
    body: "A separate Indian legal entity, 100% owned by the foreign parent, with limited liability and access to the FDI automatic route in most sectors. This is the default choice for a foreign company planning genuine, ongoing commercial activity in India.",
    href: "/india-business-setup/company-formation",
    cta: "Incorporation process",
  },
  {
    title: "Branch Office",
    body: "An extension of the foreign parent — not a separate Indian entity — permitted only for specified activities and subject to RBI approval. Suits a narrower, defined presence rather than full commercial operations.",
    href: "/branch-office-in-india",
    cta: "Branch Office rules",
  },
  {
    title: "Liaison Office",
    body: "A representative, non-revenue-generating presence used for market research or coordinating with Indian counterparts, with no commercial activity permitted.",
    href: "/liaison-office-in-india",
    cta: "Liaison Office rules",
  },
  {
    title: "Project Office",
    body: "A temporary presence set up to execute one specific, time-bound contract or project in India, and wound up once that project ends.",
    href: "/project-office-in-india",
    cta: "Project Office rules",
  },
  {
    title: "LLP",
    body: "A Limited Liability Partnership suits a narrower set of foreign-owned operating businesses where that structure fits the ownership and activity better than a company — FDI-eligible in sectors on the automatic route.",
    href: "/llp-in-india",
    cta: "LLP in India",
  },
]

const operateLinks = [
  { label: "Accounting & Assurance", href: "/services/accounting-assurance", body: "Bookkeeping, financial reporting, and statutory audit support for the subsidiary's finance function." },
  { label: "Taxation & Regulatory", href: "/services/taxation-regulatory", body: "Corporate tax, GST, advance tax, and TDS compliance for the entity." },
  { label: "HR & Payroll", href: "/hr-services", body: "Payroll processing, PF/ESI, and HR compliance as the India team grows." },
  { label: "Transfer Pricing", href: "/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary", body: "Pricing and documentation for transactions between the subsidiary and its foreign parent or group companies." },
  { label: "Corporate Compliance", href: "/india-business-setup/regulatory-compliance", body: "ROC filings, board meetings, AGM, and the annual compliance calendar." },
  { label: "Permanent Establishment Risk", href: "/india-entry-for-us-companies/permanent-establishment-risk-india", body: "Managing PE exposure for the foreign parent alongside its Indian subsidiary." },
]

const closeLinks = [
  { label: "DTAA & withholding tax on repatriation", href: "/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax" },
  { label: "Strike-off and voluntary liquidation", href: "/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation" },
  { label: "Restructuring and transaction advisory", href: "/services/transaction-advisory" },
]

const countryGuides = [
  { label: "US Companies", href: "/india-entry-for-us-companies" },
  { label: "UK Companies", href: "/india-entry-for-uk-companies" },
  { label: "Singapore Companies", href: "/india-entry-for-singapore-companies" },
  { label: "Australian Companies", href: "/india-entry-for-australian-companies" },
  { label: "German Companies", href: "/india-entry-for-german-companies" },
  { label: "Japanese Companies", href: "/india-entry-for-japan-companies" },
  { label: "Chinese Companies", href: "/india-entry-for-china-companies" },
]

const faqs = [
  {
    q: "What is a foreign subsidiary in India?",
    a: "A foreign subsidiary (commonly a Wholly Owned Subsidiary, or WOS) is an Indian Private Limited company in which a foreign parent holds 100% of the shares. It is a separate Indian legal entity with its own liability, distinct from the parent, and is the structure most foreign companies use for genuine, ongoing operations in India.",
  },
  {
    q: "What is the difference between a subsidiary and a branch office?",
    a: "A subsidiary is a separate Indian legal entity with limited liability and access to the FDI automatic route in most sectors. A branch office is an extension of the foreign parent — not a separate entity — requires specific RBI approval, and exposes the parent directly to liabilities arising from its Indian activity.",
  },
  {
    q: "Does a foreign-owned Indian subsidiary need a resident director?",
    a: "Yes. Every Indian company, including a wholly owned foreign subsidiary, must have at least one director who is an Indian citizen and resident — present in India for more than 182 days in the previous financial year.",
  },
  {
    q: "What happens immediately after incorporation?",
    a: "The sequence is broadly: open a corporate bank account, bring in the parent's capital and obtain the resulting Foreign Inward Remittance Certificate (FIRC), file Form FC-GPR with RBI reporting the share allotment within the applicable window, complete tax registrations (PAN, TAN, GST where applicable), and set up accounting and payroll. See our post-incorporation compliance guide for the fuller sequence.",
  },
  {
    q: "What ongoing filings does a foreign subsidiary make every year?",
    a: "Typically the Annual Return on Foreign Liabilities and Assets (FLA) to RBI, a statutory audit, the Annual General Meeting, ROC annual filings (Form AOC-4 and MGT-7/7A), and the corporate income tax return — plus a transfer pricing report (Form 3CEB) where the subsidiary has transactions with its foreign parent or group companies above the applicable threshold.",
  },
  {
    q: "How can a foreign subsidiary repatriate profits to its parent?",
    a: "The main routes are dividends, a share buyback, and a capital reduction — each taxed differently, and each affected by the Double Taxation Avoidance Agreement (DTAA), if any, between India and the parent's home jurisdiction. Which route fits depends on the entity's accumulated profits, capital structure, and the specific treaty involved.",
  },
  {
    q: "How is a foreign subsidiary closed if it's no longer needed?",
    a: "A subsidiary with no liabilities and limited activity can generally be struck off through a fast-track exit process; a more complex entity with liabilities, employees, or litigation to settle generally needs a formal voluntary liquidation instead. Our dedicated guide walks through how to choose between the two and what each involves.",
  },
]

export default function ForeignSubsidiaryIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Business Setup", href: "/india-business-setup" }, { label: "Foreign Subsidiary / WOS" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-dark">Foreign Subsidiary / WOS</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Foreign Subsidiary in India: Setup and Ongoing Operations
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-gray-600">
            This guide covers the full lifecycle a foreign parent company goes through when it sets up and runs a subsidiary in India — deciding on a structure, the FDI and FEMA/RBI rules that apply, incorporating the Indian entity, what happens in the months right after incorporation, ongoing operations, and eventually repatriating profits, restructuring, or closing the entity.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Each stage below links to a dedicated guide with the full detail. If you&apos;re still deciding whether India is the right market at all, start with our broader{" "}
            <Link href="/doing-business-in-india" className="text-gold-dark font-semibold hover:underline">
              Doing Business in India
            </Link>{" "}
            guide instead.
          </p>
        </div>
      </section>

      {/* 1. DECIDE THE STRUCTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Decide the Indian Structure</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Most foreign companies planning genuine operations in India use a Wholly Owned Subsidiary. A handful of narrower situations call for a Branch, Liaison, or Project Office instead, and some operating businesses are better suited to an LLP. The right choice depends on your activities, ownership plans, and how long the presence is meant to last.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {structureOptions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block bg-white p-6 rounded-xl border hover:shadow-lg hover:border-gold/50 transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.body}</p>
                <span className="text-sm font-semibold text-gold-dark">{item.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FDI / FEMA / RBI */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. FDI, FEMA and RBI</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most sectors allow up to 100% foreign investment under the automatic route, meaning no prior government approval is required before a foreign parent invests in an Indian subsidiary. A shorter list of sensitive sectors instead requires government approval. Once the investment is made, the subsidiary has post-facto reporting obligations to RBI under the Foreign Exchange Management Act (FEMA) — principally Form FC-GPR on share allotment, Form FC-TRS on any later share transfer, and the Annual FLA Return for as long as foreign investment sits on the entity&apos;s books.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our dedicated{" "}
            <Link href="/india-business-setup/fdi-channels" className="text-gold-dark font-semibold hover:underline">
              FDI automatic and government approval routes
            </Link>{" "}
            guide covers eligibility and the mechanics of both routes in full.
          </p>
        </div>
      </section>

      {/* 3. INCORPORATE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Incorporate the Indian Company</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Incorporating a Wholly Owned Subsidiary runs through the Ministry of Corporate Affairs&apos; integrated SPICe+ filing: Digital Signature Certificates and Director Identification Numbers for the proposed directors, name reservation, and the incorporation filing itself, which delivers the Certificate of Incorporation together with PAN, TAN, and GST registration (where opted at this stage) in one pass. At least one director must be an Indian resident.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold-dark font-semibold hover:underline">
              company registration guide
            </Link>{" "}
            walks through this process step by step. If your parent company is based in one of the countries below, our country-specific guide covers the same process with jurisdiction-specific detail — document authentication, timelines, and DTAA considerations for that country.
          </p>
          <div className="flex flex-wrap gap-3">
            {countryGuides.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="px-4 py-2 bg-secondary/50 hover:bg-secondary border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:text-gold-dark transition"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POST-INCORPORATION */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Post-Incorporation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once the Certificate of Incorporation is issued, the entity still needs a corporate bank account (opened with an RBI-authorised bank, generally after document apostille where the parent&apos;s documents originate abroad), the parent&apos;s capital infusion and the resulting Foreign Inward Remittance Certificate, the Form FC-GPR filing reporting that share allotment to RBI, GST registration where applicable, and its first accounting and payroll setup.
          </p>
          <p className="text-gray-600 leading-relaxed">
            See our{" "}
            <Link href="/india-business-setup/banking-taxation" className="text-gold-dark font-semibold hover:underline">
              banking and tax setup
            </Link>{" "}
            and{" "}
            <Link href="/doing-business-in-india/post-incorporation" className="text-gold-dark font-semibold hover:underline">
              post-incorporation compliance
            </Link>{" "}
            guides for the full sequence and timing.
          </p>
        </div>
      </section>

      {/* 5. OPERATE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Operate</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Running the subsidiary is an ongoing calendar, not a one-time event: monthly accounting and payroll, quarterly tax filings, and annual statutory compliance, alongside tax and transfer pricing considerations specific to a foreign-owned entity.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {operateLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 p-5 border rounded-lg hover:shadow-md hover:border-gold/50 transition"
              >
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REPATRIATE / RESTRUCTURE / CLOSE */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Repatriate, Restructure or Close</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            A subsidiary&apos;s lifecycle doesn&apos;t end at steady-state operations. Parents eventually move profits home, restructure the entity as the business changes, or — where the subsidiary is no longer needed — wind it down.
          </p>
          <div className="space-y-3">
            {closeLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between p-4 border rounded-lg bg-white hover:shadow-md hover:border-gold/50 transition"
              >
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <ArrowRight className="h-4 w-4 text-gold-dark shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="inquiry-form" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Planning a Foreign Subsidiary in India?"
            description="Tell us about your structure and timeline, and our India entry team will get in touch."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
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

      {/* CLOSING CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Talk to AU Corporate About Your India Subsidiary</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Whether you&apos;re deciding on a structure, mid-incorporation, or already running a subsidiary and want to hand off compliance, AU Corporate&apos;s India entry, taxation, and accounting practices can help.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Foreign Subsidiary (WOS) Setup and Compliance in India",
            description:
              "How a foreign company sets up and runs a wholly owned subsidiary in India: structure, FDI/FEMA/RBI, incorporation, post-incorporation filings, ongoing operations, and repatriation or exit.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/india-business-setup/foreign-subsidiary-india",
            areaServed: "India",
            serviceType: "Foreign Subsidiary / Wholly Owned Subsidiary Advisory",
          }),
        }}
      />
    </main>
  )
}
