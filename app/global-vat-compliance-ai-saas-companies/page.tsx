import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import {
  ArrowRight,
  AlertTriangle,
  FileSpreadsheet,
  Users2,
  UploadCloud,
  ClipboardCheck,
  Send,
} from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Funding & M&A Risk",
    body: "Unresolved global tax liabilities are one of the most common red flags that stall Series A/B funding rounds or acquisition due diligence — investors and acquirers expect a clean cross-border compliance record before they'll close.",
  },
  {
    icon: FileSpreadsheet,
    title: "Software Fatigue",
    body: "Automated tax tools force your engineering team to build and maintain API integrations that break the moment you change your billing logic, add a plan, or switch processors — a maintenance burden most SaaS teams didn't sign up for.",
  },
  {
    icon: Users2,
    title: "B2B vs. B2C Chaos",
    body: "Sorting raw billing logs to validate business tax IDs versus individual consumer transactions — and applying the right treatment to each — is an operational task most finance teams aren't set up to run every month.",
  },
]

const howItWorks = [
  {
    icon: UploadCloud,
    step: "01",
    title: "Raw Data Export",
    body: "At the end of your billing cycle, download and send us your transactional data — Stripe, PayPal, Chargebee, or your native billing platform's export. No API integration required.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Custom Sorting & Preparation",
    body: "Our cross-border tax team cleans the data, separates B2B (reverse-charge/exempt) from B2C transactions, calculates local-currency values, and prepares the returns for each jurisdiction you're active in.",
  },
  {
    icon: Send,
    step: "03",
    title: "Global Filing & Reporting",
    body: "We file directly with the relevant tax authority in each active jurisdiction and send you clear, consolidated reports — so you know exactly what was filed, where, and when.",
  },
]

const jurisdictionGroups = [
  {
    region: "Americas",
    items: [
      { label: "United States", note: "State sales tax & economic nexus" },
      { label: "Canada", note: "GST/HST" },
    ],
  },
  {
    region: "Europe",
    items: [
      { label: "United Kingdom", note: "HMRC VAT" },
      { label: "European Union", note: "One Stop Shop (OSS)" },
      { label: "Switzerland", note: "VAT" },
      { label: "Liechtenstein", note: "VAT" },
      { label: "Serbia", note: "VAT" },
    ],
  },
  {
    region: "Asia-Pacific",
    items: [
      { label: "Japan", note: "Consumption tax (JCT)" },
      { label: "South Korea", note: "VAT" },
      { label: "Singapore", note: "GST" },
      { label: "China", note: "VAT" },
      { label: "India", note: "OIDAR / GST", href: "/oidar-gst-registration-india" },
    ],
  },
  {
    region: "Emerging Markets",
    items: [{ label: "Turkey", note: "Digital services VAT" }],
  },
]

const comparisonRows = [
  {
    factor: "Integration effort",
    software: "Forces your engineers to build and maintain complex API code against your billing stack.",
    au: "Zero dev-team effort — just send us your raw billing CSV exports.",
  },
  {
    factor: "Data handling",
    software: "Flags errors but leaves your finance team to manually fix transaction-level details.",
    au: "Human data scrubbing — we clean, sort, and process your logs, separating B2B from B2C correctly.",
  },
  {
    factor: "Jurisdiction coverage",
    software: "Often upsells you heavily to cover non-Western or less common digital-services markets.",
    au: "One partner across the US, UK, EU, Japan, Korea, Singapore, China, Turkey and beyond.",
  },
  {
    factor: "Filing",
    software: "Prepares returns; you (or your team) still file, or pay extra for a filing add-on.",
    au: "We file directly with the relevant tax authority in each active jurisdiction.",
  },
]

const faqs = [
  {
    q: "Do we owe VAT or sales tax if we don't have an office in a country?",
    a: "In most jurisdictions that tax digital services, yes — the obligation is triggered by where your customer is, not where you're incorporated or whether you have a local office. The EU's OSS regime, the UK's VAT rules for digital services, and most US state economic-nexus rules all work this way for a foreign SaaS or AI company selling directly to customers there.",
  },
  {
    q: "Is there a revenue threshold before we need to register anywhere?",
    a: "It varies by jurisdiction, and this is exactly the kind of detail that's easy to get wrong by assuming one country's rule applies everywhere. Some markets (like the EU's OSS for non-EU digital-services suppliers) have no minimum threshold at all; others, including many US states, apply an economic-nexus threshold. We map this against your actual customer base rather than assuming a single global rule.",
  },
  {
    q: "How do you handle B2B customers differently from B2C?",
    a: "Most VAT/GST regimes shift the tax obligation to the business customer under a reverse-charge mechanism when the buyer is itself tax-registered, while a B2C sale to an individual or unregistered business generally leaves the obligation with you as the seller. Getting this classification right for every transaction is the core of what our data-sorting step handles.",
  },
  {
    q: "What billing platforms do you work with?",
    a: "We work from standard transaction exports out of Stripe, PayPal, Chargebee, and most other billing or subscription-management platforms. If you're on something less common, let us know in your message and we'll confirm we can work with the export format.",
  },
  {
    q: "How is this different from an automated tax tool?",
    a: "Automated tax software still requires your engineering team to integrate and maintain an API connection, and typically stops at calculating and flagging tax — it doesn't file on your behalf in every market without an added filing product. Our model is a managed service: you send us data, we handle sorting, preparation, and the actual filing with each tax authority.",
  },
  {
    q: "Do you also help with India-specific OIDAR/GST registration?",
    a: "Yes — India is one of the jurisdictions we cover, and it has its own distinct no-threshold registration rule for foreign digital-services suppliers. See our dedicated guide on OIDAR & GST registration in India for the India-specific mechanics; this page covers the broader global picture.",
  },
]

export default function GlobalVatComplianceAiSaasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Global VAT & Sales Tax Compliance for AI & SaaS Companies" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">GST/VAT Advisory &amp; Compliance</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Global VAT &amp; Sales Tax Compliance for AI &amp; SaaS Companies
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-gray-600">
            Protect your international scaling. We handle remote-seller tax registration, data sorting, and monthly filing across the US, EU, UK, Japan, Singapore and more. You sell globally — we keep you compliant without spending your engineering team's time on it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Link href="#inquiry-form">
                Book a Tax Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/oidar-gst-registration-india">Explore Our OIDAR &amp; SaaS Guides</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cross-Border Digital-Services Tax Is Broken for AI Companies</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            If you're an AI or SaaS platform selling globally through subscriptions or API access, you're triggering remote-seller tax obligations automatically — often without realizing it. Whether it's B2C sales into the EU, the UK, Japan, or US state-level economic-nexus rules, tax authorities expect compliance even when you have no local office.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="p-6 bg-secondary/30 rounded-xl border">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-yellow-50">
                  <p.icon size={20} className="text-gold" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROP / COMPARISON */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">A Managed Global Tax Compliance Service — Not Another Tool to Maintain</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Unlike rigid automated tax software that dumps sorting and filing work back on your team, AU Corporate runs this as an end-to-end managed service.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left text-sm">Factor</th>
                  <th className="border border-gray-300 p-3 text-left text-sm">Rigid Automated Software</th>
                  <th className="border border-gray-300 p-3 text-left text-sm">AU Corporate Managed Service</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.factor}>
                    <td className="border border-gray-300 p-3 font-semibold text-sm">{row.factor}</td>
                    <td className="border border-gray-300 p-3 text-xs text-gray-600">{row.software}</td>
                    <td className="border border-gray-300 p-3 text-xs text-gray-600">{row.au}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Compliance in 3 Simple Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((s) => (
              <div key={s.step} className="relative p-6 border rounded-xl bg-secondary/30">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 bg-white border-2 border-gold text-[#081a42]">
                  {s.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JURISDICTIONS */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">One Partner. Complete Global Coverage.</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            We monitor changing digital-services tax laws across markets so you don&apos;t have to. Jurisdictions we cover:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {jurisdictionGroups.map((g) => (
              <div key={g.region} className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-gray-900 mb-4">{g.region}</h3>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li key={item.label} className="flex items-center justify-between text-sm">
                      {item.href ? (
                        <Link href={item.href} className="font-semibold text-gold hover:underline">
                          {item.label} →
                        </Link>
                      ) : (
                        <span className="font-semibold text-gray-800">{item.label}</span>
                      )}
                      <span className="text-gray-500">{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE LEAD FORM */}
      <section id="inquiry-form" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Ready to Remove Global Tax Risk From Your Financials?"
            description="Speak to an expert who understands SaaS, APIs, and the digital economy. Tell us which billing platform you use (Stripe, PayPal, Chargebee, or other) and which markets you're active in — we'll get back to you within 24 hours."
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

      {/* CLOSING */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Talk to AU Corporate&apos;s Global Tax Compliance Practice</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Whether you're just starting to see international revenue or already juggling registrations across several markets, our team can map your current exposure and take the ongoing filing off your plate.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 mb-12">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <RelatedResources
            links={[
              {
                label: "OIDAR & GST Registration for Foreign SaaS Companies",
                href: "/oidar-gst-registration-india",
                description: "The India-specific no-threshold registration rule for foreign digital-services suppliers.",
              },
              {
                label: "India Entry for AI & SaaS Companies",
                href: "/india-entry-for-saas-companies",
                description: "Entity structuring, FEMA and tax for a formal India presence.",
              },
              {
                label: "Taxation & Regulatory Services",
                href: "/services/taxation-regulatory",
                description: "Corporate tax, GST, transfer pricing and regulatory compliance for businesses in India.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
