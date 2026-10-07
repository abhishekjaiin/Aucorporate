import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/HeroSection"
import { FaqAccordion } from "@/components/FaqAccordion"
import { InquiryForm } from "@/components/InquiryForm"
import { ClickableReveal } from "@/components/ClickableReveal"
import { InquiryCard } from "@/components/InquiryCard"
import { ComplianceCalendarCTA } from "@/components/ComplianceCalendarCTA"

import {
  Calculator,
  FileCheck,
  Scale,
  Users,
  Building2,
  ArrowRight,
  Compass,
  Landmark,
  ShieldCheck,
  Globe2,
  MessageCircle,
  Layers,
} from "lucide-react"

/* NAVY / GOLD DESIGN SYSTEM — matches registercompanyinindia.com */
const NAVY = "#081A42"
const ROYAL_BLUE = "#1e3a8a"
const GOLD = "#facc15"

/* SERVICES */
const services = [
  {
    icon: Building2,
    title: "India Business Setup",
    description: "Entity selection, incorporation, and registration for foreign and domestic companies entering India.",
    href: "/india-business-setup",
  },
  {
    icon: FileCheck,
    title: "Accounting & Assurance",
    description: "Bookkeeping, financial reporting, and audit support to keep your India finance function running.",
    href: "/services/accounting-assurance",
  },
  {
    icon: Calculator,
    title: "Taxation & Regulatory",
    description: "Corporate tax, GST, transfer pricing, and regulatory compliance for businesses operating in India.",
    href: "/services/taxation-regulatory",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    description: "Payroll processing, statutory compliance, and HR administration for your India team.",
    href: "/hr-services",
  },
  {
    icon: Scale,
    title: "Arbitration & Dispute Resolution",
    description: "Professional dispute resolution and legal advisory for commercial disputes in India.",
    href: "/arbitration-services",
  },
  {
    icon: Landmark,
    title: "Global Support & Outsourcing",
    description: "Scalable accounting, tax, and back-office outsourcing to support India operations when needed.",
    href: "/outsourcing",
  },
]

/* BUSINESS STRUCTURES */
const structures = [
  {
    title: "Private Limited Company",
    description: "For entrepreneurs, startups, and businesses operating commercially in India. The most common structure for genuine India operations.",
    href: "/india-business-setup/company-formation",
  },
  {
    title: "Wholly Owned Subsidiary",
    description: "For foreign companies seeking full control over their Indian operations, with limited liability and access to the automatic FDI route in most sectors.",
    href: "/blog/wholly-owned-subsidiary",
  },
  {
    title: "Branch Office",
    description: "For eligible foreign companies carrying out permitted representative or specific commercial activities in India, subject to RBI approval.",
    href: "/branch-office-in-india",
  },
  {
    title: "Liaison Office",
    description: "For foreign companies establishing an initial representative presence in India, with restrictions on commercial activity.",
    href: "/liaison-office-in-india",
  },
  {
    title: "Project Office",
    description: "For foreign companies executing a specific, time-bound project in India.",
    href: "/project-office-in-india",
  },
  {
    title: "LLP",
    description: "For businesses where a Limited Liability Partnership structure suits the ownership and operating model.",
    href: "/llp-in-india",
  },
]

/* INDUSTRIES — broad support framing, not claiming deep specialist certification */
const industries = [
  "Manufacturing",
  "Technology & GCCs",
  "Logistics & Supply Chain",
  "Consumer & Retail",
  "Professional Services",
  "Startups & E-Commerce",
]

/* FEATURED INSIGHTS — real published posts, no fabricated articles */
const featuredInsights = [
  {
    title: "India's 2026 Safe Harbour Rules: 15.5% IT Margin Explained",
    category: "Transfer Pricing",
    excerpt: "Union Budget 2026 consolidated IT, ITeS, KPO and contract R&D into a single Safe Harbour category at 15.5% margin, with the threshold raised from Rs 300 crore to Rs 2,000 crore.",
    slug: "india-safe-harbour-rules-2026",
  },
  {
    title: "FDI in India: Green Channel vs Brown Channel",
    category: "India Entry",
    excerpt: "The regulatory framework behind FDI in India — automatic vs government route, and what Green Channel vs Brown Channel approval actually means for your entry.",
    slug: "fdi-green-vs-brown-channel",
  },
  {
    title: "Wholly Owned Subsidiary in India: Incorporation Process & Compliance",
    category: "Business Setup",
    excerpt: "Step-by-step incorporation process for a wholly owned subsidiary in India, including FEMA compliance and RBI reporting requirements.",
    slug: "wholly-owned-subsidiary",
  },
]

/* WHY AU CORPORATE — 6 PILLARS */
const pillars = [
  {
    icon: Layers,
    title: "One Trusted Partner",
    description: "Company setup, finance, tax, compliance, and HR — brought together instead of coordinated across five different providers.",
  },
  {
    icon: Compass,
    title: "India Expertise",
    description: "Direct experience with India's regulatory and commercial environment — not a generic global platform layered onto local rules.",
  },
  {
    icon: Globe2,
    title: "International Perspective",
    description: "Built for businesses operating across borders, with a team that understands how foreign parent-company reporting maps onto Indian requirements.",
  },
  {
    icon: MessageCircle,
    title: "Practical Advice",
    description: "Complex regulatory requirements explained in plain business language, not dense legal or accounting jargon.",
  },
  {
    icon: ShieldCheck,
    title: "Responsive Support",
    description: "Organised, accessible communication — you always know who to reach and where things stand.",
  },
  {
    icon: ArrowRight,
    title: "Long-Term Partnership",
    description: "Support that continues well past incorporation — accounting, tax, and compliance for as long as you operate in India.",
  },
]

/* HOW WE WORK — 5 STEPS */
const process = [
  {
    step: "01",
    title: "Understand",
    description: "We understand your business, objectives, and specific India requirements before recommending anything.",
  },
  {
    step: "02",
    title: "Advise",
    description: "We identify the right entity structure and scope of services for your situation — with a clear timeline and fee structure.",
  },
  {
    step: "03",
    title: "Implement",
    description: "Our team coordinates incorporation, registrations, and documentation end to end.",
  },
  {
    step: "04",
    title: "Operate",
    description: "We support accounting, taxation, payroll, and day-to-day compliance once you're up and running.",
  },
  {
    step: "05",
    title: "Grow",
    description: "We stay engaged as your India business evolves — ongoing advisory, not a one-time engagement.",
  },
]

/* LIFECYCLE */
const lifecycle = [
  { title: "Enter", description: "Market entry & structuring", href: "/doing-business-in-india" },
  { title: "Establish", description: "Company formation & registrations", href: "/india-business-setup/company-formation" },
  { title: "Operate", description: "Accounting, tax & payroll", href: "/services/accounting-assurance" },
  { title: "Comply", description: "Corporate & regulatory compliance", href: "/india-business-setup/regulatory-compliance" },
  { title: "Grow", description: "Advisory & strategic support", href: "/services" },
]

/* FAQ */
const faqs = [
  {
    q: "Can a foreign company establish a business in India?",
    a: "Yes. Most sectors permit up to 100% foreign investment under the automatic route, meaning no prior government approval is required. Some sectors and source countries have additional requirements — we assess this as part of entry planning.",
  },
  {
    q: "What is the best structure for entering India?",
    a: "It depends on your activities, ownership plans, and long-term intent. A wholly-owned Private Limited subsidiary suits most companies planning genuine operations; branch, liaison, and project offices suit narrower, specific use cases.",
  },
  {
    q: "What is the difference between a subsidiary and a branch office?",
    a: "A subsidiary is a separate Indian legal entity with limited liability and access to the automatic FDI route in most sectors. A branch office is an extension of the foreign parent, requires specific RBI approval, and exposes the parent directly to Indian liabilities.",
  },
  {
    q: "Does an Indian company need a resident director?",
    a: "Yes — every Indian company, including a wholly-owned foreign subsidiary, must have at least one director who is both an Indian citizen and resident (present in India for more than 182 days in the previous financial year).",
  },
  {
    q: "Can AU Corporate help with bank account opening and ongoing accounting?",
    a: "Yes — we support corporate bank account setup after incorporation, and provide ongoing accounting, bookkeeping, and financial reporting as part of our outsourcing services.",
  },
  {
    q: "What tax registrations are required after incorporation?",
    a: "Typically PAN, TAN, and GST registration (where applicable based on turnover or business activity), followed by ongoing corporate tax and GST compliance.",
  },
  {
    q: "Can AU Corporate manage payroll and HR compliance?",
    a: "Yes — payroll processing, PF/ESI compliance, employment contracts, and HR administration are part of our HR & Payroll services.",
  },
  {
    q: "What does it cost to establish a business in India?",
    a: "Cost depends on entity structure, sector, number of directors, and ongoing service scope — we scope this precisely on a short consultation rather than quoting a flat number that may not fit your situation.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= SUBSIDIARY STATS ================= */}
      <section className="border-b bg-white py-8 sm:py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-gray-200 sm:grid-cols-4">
          {[
            ["150+", "Subsidiaries incorporated"],
            ["150+", "Regular clients"],
            ["10+", "Parent countries"],
            ["30+", "Years of combined experience"],
          ].map(([value, label]) => (
            <div key={label} className="px-3 text-center sm:px-6">
              <div className="font-heading text-2xl font-bold text-[#0E1B4D] sm:text-3xl">{value}</div>
              <div className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SUBSIDIARY LIFECYCLE ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-[#0E1B4D] sm:text-4xl">
              Your India Subsidiary, Handled at Every Stage
            </h2>
            <p className="mt-4 text-gray-600">
              From the board resolution in your home country to every annual filing in India.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-[#FFD21F] lg:block" aria-hidden="true" />
            {[
              ["01", "Plan", "Before incorporation", "Entity choice, FDI route, parent documents"],
              ["02", "Incorporate", "Weeks 1–5", "Name approval, incorporation, PAN/TAN, bank account"],
              ["03", "Post-incorporation", "First 180 days", "FC-GPR, share certificates, first auditor, commencement of business"],
              ["04", "Operate", "Every month", "Accounting, GST, TDS, payroll, reporting to the parent"],
              ["05", "Comply", "Every year, in date order", "FLA return, audit support, AGM, ROC returns, transfer pricing report and income tax return"],
            ].map(([number, title, timing, description]) => (
              <div key={number} className="relative z-10 flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFD21F] bg-[#0E1B4D] font-heading text-sm font-bold text-white">
                  {number}
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0E1B4D]">{title}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#8F6B00]">{timing}</p>
                <p className="mt-4 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>

          <ComplianceCalendarCTA />
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-4 font-heading text-blue">
            Complete Business Support for India
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            From setting up your Indian entity to managing ongoing operations, our services support your business at every stage.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="p-6 bg-white border rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-yellow-50">
                  <service.icon size={20} style={{ color: GOLD }} />
                </div>
                <h3 className="font-semibold font-heading">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS STRUCTURE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading text-blue">
            What's the Right Structure for Your India Business?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            The right structure depends on your activities, ownership, sector, and applicable regulations — here's a starting point.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {structures.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="block p-6 border rounded-xl hover:shadow-lg hover:border-yellow-300 transition-all duration-300"
              >
                <h3 className="font-semibold mb-2 font-heading text-blue">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500">{s.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild style={{ backgroundColor: GOLD }} className="text-black">
              <Link href="/contact">Not Sure Which Structure Is Right? Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading text-blue">
            Industries We Work With
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our services support businesses across a range of sectors operating in India.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 bg-white border rounded-full text-sm font-semibold"
                style={{ color: NAVY }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT TEASER ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-heading text-blue">
              Growing Together. Building Value.
            </h2>
            <p className="text-gray-600 mb-4">
              AU Corporate is a multidisciplinary consultancy firm based in New Delhi, with a diversified team of Chartered Accountants, CPAs, Company Secretaries, Cost Accountants, Lawyers, Industry Specialists, Ex-Bankers, and MBAs.
            </p>
            <p className="text-gray-600 mb-6">
              Established in 2016, we provide innovative solutions to complex business challenges and act as a catalyst for the growth of our clients across India and globally.
            </p>
            <Button asChild style={{ backgroundColor: GOLD }} className="text-black">
              <Link href="/about">Know More About Us</Link>
            </Button>
          </div>
          <div className="p-8 rounded-2xl bg-blue">
            <p className="text-yellow-400 text-sm font-semibold mb-3 tracking-wide uppercase">Our Approach</p>
            <p className="text-white/90 text-lg leading-relaxed font-heading">
              One Partner. Multiple Business Needs. AU Corporate brings market entry, accounting, tax, compliance, and advisory together — so you don&apos;t have to coordinate five different providers.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY AU CORPORATE ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading text-blue">
            Why Businesses Choose AU Corporate
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <InquiryCard
                key={p.title}
                title={p.title}
                description={p.description}
                className="block p-6 bg-white border rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                titleClassName="font-semibold mb-2"
                titleStyle={{ fontFamily: "var(--font-heading)" }}
                descriptionClassName="text-sm text-gray-500"
                icon={
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-yellow-50">
                    <p.icon size={20} style={{ color: ROYAL_BLUE }} />
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDIA MARKET ENTRY / COUNTRY LINKS ================= */}
      <section className="relative py-24 text-white overflow-hidden bg-blue">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">

          <h2 className="text-3xl font-bold mb-4 font-heading">
            Planning to Expand Into India?
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto mb-12">
            India can be one of the world's most attractive growth markets — but entering successfully requires the right structure, local knowledge, and regulatory planning.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
            <Link href="/india-business-setup" className="block p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="font-semibold mb-2 text-gold font-heading">
                India Business Setup
              </h3>
              <p className="text-white/70 text-sm">
                End-to-end assistance for company formation, regulatory approvals, and setup in India.
              </p>
            </Link>

            <Link href="/doing-business-in-india" className="block p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="font-semibold mb-2 text-gold font-heading">
                Market Entry
              </h3>
              <p className="text-white/70 text-sm">
                Strategic advisory for entering Indian markets, ensuring compliance, tax efficiency, and sustainable growth.
              </p>
            </Link>
          </div>

          <div className="mb-10">
            <p className="text-white/70 text-sm mb-4">
              Entering from: our most developed guide is for US companies, alongside dedicated guides for each country below.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { href: "/india-entry-for-us-companies", label: "US Companies" },
                { href: "/india-entry-for-uk-companies", label: "UK Companies" },
                { href: "/india-entry-for-singapore-companies", label: "Singapore Companies" },
                { href: "/india-entry-for-australian-companies", label: "Australia Companies" },
                { href: "/india-entry-for-german-companies", label: "Germany Companies" },
                { href: "/india-entry-for-japan-companies", label: "Japan Companies" },
                { href: "/india-entry-for-china-companies", label: "China Companies" },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm font-semibold transition"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <Button
            asChild
            aria-label="Plan Your India Entry"
            className="text-black hover:scale-105 transition"
            style={{ backgroundColor: GOLD }}
          >
            <Link href="/doing-business-in-india/why-india">
              Plan Your India Entry
            </Link>
          </Button>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading text-blue">
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* ================= INSIGHTS ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading text-blue">
            Stay Informed. Stay Ahead.
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Taxation, compliance, and market-entry insights from our team.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredInsights.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-6 bg-white border rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-wide mb-3 text-gold-dark">
                  {post.category}
                </span>
                <h3 className="font-semibold mb-2 flex-1 font-heading">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-sm font-semibold text-blue">
                  Read More →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild aria-label="View All Insights" style={{ backgroundColor: GOLD }} className="text-black">
              <Link href="/blog">View All Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= RELATED RESOURCES ================= */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 font-heading text-blue">
            Related Resources
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/taxation-regulatory" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                Taxation &amp; Regulatory Services
              </h3>
              <p className="text-sm text-gray-600">
                Expert guidance on tax planning, compliance frameworks, and regulatory requirements for businesses in India.
              </p>
            </Link>

            <Link href="/doing-business-in-india" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                Complete India Entry Guide
              </h3>
              <p className="text-sm text-gray-600">
                Step-by-step guidance for foreign companies entering the Indian market with compliance and tax efficiency.
              </p>
            </Link>

            <Link href="/services/accounting-assurance" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                Accounting &amp; Assurance Services
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive financial reporting, IFRS compliance, and assurance services for growing businesses.
              </p>
            </Link>

            <Link href="/gcc-setup-india" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                GCC Setup in India
              </h3>
              <p className="text-sm text-gray-600">
                Entity choice, FEMA/RBI filings, and Safe Harbour tax rules for setting up a Global Capability Center in India.
              </p>
            </Link>

            <Link href="/oidar-gst-registration-india" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                OIDAR &amp; GST Registration for Foreign SaaS Companies
              </h3>
              <p className="text-sm text-gray-600">
                No Indian entity, but Indian customers? When OIDAR/GST registration is mandatory for foreign SaaS and AI companies, and what it requires.
              </p>
            </Link>

            <Link href="/india-entry-for-saas-companies" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                India Entry for AI &amp; SaaS Companies
              </h3>
              <p className="text-sm text-gray-600">
                Entity structuring, FEMA/RBI basics, and tax treatment for AI, SaaS, and technology companies setting up in India.
              </p>
            </Link>

            <Link href="/global-vat-compliance-ai-saas-companies" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                Global VAT &amp; Sales Tax Compliance
              </h3>
              <p className="text-sm text-gray-600">
                Managed VAT/sales-tax registration and filing across the US, EU, UK, Japan and more for AI and SaaS companies selling globally.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INQUIRY FORM ================= */}
      <section id="inquiry-form" className="py-20 bg-gray-100 scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4">
          <InquiryForm
            title="Tell Us What You Need Help With"
            description="Share a few details and our team will get back to you within 24 hours."
          />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center text-white bg-blue">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 font-heading">
            Ready to Build Your Business in India?
          </h2>
          <p className="text-white/70 mb-8">
            Whether you're entering India for the first time or already operating here, AU Corporate can help you navigate the next step.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <Button asChild style={{ backgroundColor: GOLD }} className="text-black">
              <Link href="/contact">Talk to an AU Corporate Expert</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white/40 hover:bg-white/10 bg-transparent">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
