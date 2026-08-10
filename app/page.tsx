"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import GlobeHero from "@/components/GlobeHero"

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
const NAVY = "#071A33"
const ROYAL_BLUE = "#155EEF"
const GOLD = "#D6A84F"

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
    icon: Landmark,
    title: "Global Support & Outsourcing",
    description: "Scalable accounting, tax, and back-office outsourcing to run your India operations without building it alone.",
    href: "/outsourcing",
  },
  {
    icon: Scale,
    title: "Arbitration & Dispute Resolution",
    description: "Professional dispute resolution and legal advisory for commercial disputes in India.",
    href: "/arbitration-services",
  },
]

/* BUSINESS STRUCTURES */
const structures = [
  {
    title: "Private Limited Company",
    description: "For entrepreneurs, startups, and businesses operating commercially in India. The most common structure for genuine India operations.",
  },
  {
    title: "Wholly Owned Subsidiary",
    description: "For foreign companies seeking full control over their Indian operations, with limited liability and access to the automatic FDI route in most sectors.",
  },
  {
    title: "Branch Office",
    description: "For eligible foreign companies carrying out permitted representative or specific commercial activities in India, subject to RBI approval.",
  },
  {
    title: "Liaison Office",
    description: "For foreign companies establishing an initial representative presence in India, with restrictions on commercial activity.",
  },
  {
    title: "Project Office",
    description: "For foreign companies executing a specific, time-bound project in India.",
  },
  {
    title: "LLP",
    description: "For businesses where a Limited Liability Partnership structure suits the ownership and operating model.",
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
  { title: "Enter", description: "Market entry & structuring" },
  { title: "Establish", description: "Company formation & registrations" },
  { title: "Operate", description: "Accounting, tax & payroll" },
  { title: "Comply", description: "Corporate & regulatory compliance" },
  { title: "Grow", description: "Advisory & strategic support" },
]

/* STATS — real, already-established figures */
const stats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 30, suffix: "+", label: "Collective Professional Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
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

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(latest) {
          setDisplay(Math.floor(latest))
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{q}</span>
        <span className="text-2xl leading-none shrink-0" style={{ color: GOLD }}>{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-gray-600 mt-3 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
        style={{ backgroundColor: NAVY }}
      >
        <GlobeHero />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 text-center px-3 sm:px-4 max-w-5xl">

          <h1
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug max-w-4xl mx-auto [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Build Your Business in India With Confidence
          </h1>

          <p className="text-white/80 mb-4 text-xs xs:text-sm sm:text-base md:text-lg px-1 max-w-2xl mx-auto [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
            From entering the Indian market to managing your day-to-day operations, AU Corporate provides end-to-end corporate, tax, accounting, compliance, and advisory solutions for businesses in India and around the world.
          </p>

          <p className="mb-8 text-[11px] xs:text-xs sm:text-sm tracking-wide" style={{ color: GOLD }}>
            India Market Entry &nbsp;•&nbsp; Corporate Advisory &nbsp;•&nbsp; Tax &nbsp;•&nbsp; Accounting &nbsp;•&nbsp; Compliance &nbsp;•&nbsp; HR &amp; Payroll
          </p>

          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <Button
              asChild
              aria-label="Talk to an Expert"
              className="text-black text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3"
              style={{ backgroundColor: GOLD }}
            >
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              aria-label="Explore Our Services"
              className="text-white border-white/40 hover:bg-white/10 text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 bg-transparent"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>

          {/* STATS */}
          <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: GOLD, fontFamily: "var(--font-heading)" }}>
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-10 border-b" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm font-semibold mb-6" style={{ color: "#667085" }}>
            HELPING BUSINESSES NAVIGATE INDIA WITH CONFIDENCE
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-semibold" style={{ color: NAVY }}>
            <span>India Market Entry</span>
            <span>Corporate Compliance</span>
            <span>Tax &amp; Accounting</span>
            <span>HR &amp; Payroll</span>
            <span>International Advisory</span>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROP / LIFECYCLE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
            India Is Full of Opportunity. We Make It Easier to Navigate.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-4">
            India offers enormous opportunity for international and domestic businesses — but establishing and operating a business here means navigating corporate law, taxation, accounting, FEMA/FDI regulation, payroll, and ongoing statutory compliance.
          </p>
          <p className="font-semibold mb-14" style={{ color: ROYAL_BLUE }}>
            AU Corporate brings these services together under one roof — one partner, multiple business needs.
          </p>

          <div className="flex flex-wrap justify-center items-stretch gap-4">
            {lifecycle.map((l, i) => (
              <div key={l.title} className="flex items-center gap-4">
                <div className="w-32 p-4 rounded-xl border" style={{ borderColor: "#e5e7eb" }}>
                  <div className="font-bold mb-1" style={{ color: ROYAL_BLUE, fontFamily: "var(--font-heading)" }}>{l.title}</div>
                  <div className="text-xs text-gray-500">{l.description}</div>
                </div>
                {i < lifecycle.length - 1 && (
                  <ArrowRight className="hidden sm:block shrink-0" size={18} style={{ color: GOLD }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-20" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
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
                aria-label={service.title}
                className="p-6 bg-white border rounded-xl hover:shadow-lg transition"
              >
                <service.icon className="mb-4" style={{ color: GOLD }} />
                <h3 className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
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
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
            What's the Right Structure for Your India Business?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            The right structure depends on your activities, ownership, sector, and applicable regulations — here's a starting point.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {structures.map((s) => (
              <div key={s.title} className="p-6 border rounded-xl">
                <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>{s.title}</h3>
                <p className="text-sm text-gray-500">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild style={{ backgroundColor: GOLD }} className="text-black">
              <Link href="/contact">Not Sure Which Structure Is Right? Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= WHY AU CORPORATE ================= */}
      <section className="py-20" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
            Why Businesses Choose AU Corporate
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="p-6 bg-white border rounded-xl">
                <p.icon className="mb-4" style={{ color: ROYAL_BLUE }} />
                <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                <p className="text-sm text-gray-500">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
            A Simple, Structured Approach
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            From first conversation to fully operational in India — our process removes uncertainty at every stage.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item) => (
              <div key={item.step}>
                <div className="text-4xl font-bold mb-3" style={{ color: GOLD, fontFamily: "var(--font-heading)" }}>
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild style={{ backgroundColor: GOLD }} className="text-black">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= INDIA MARKET ENTRY / COUNTRY LINKS ================= */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Planning to Expand Into India?
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto mb-12">
            India can be one of the world's most attractive growth markets — but entering successfully requires the right structure, local knowledge, and regulatory planning.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md">
              <h3 className="font-semibold mb-2" style={{ color: GOLD, fontFamily: "var(--font-heading)" }}>
                India Business Setup
              </h3>
              <p className="text-white/70 text-sm">
                End-to-end assistance for company formation, regulatory approvals, and seamless setup in India.
              </p>
            </div>

            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md">
              <h3 className="font-semibold mb-2" style={{ color: GOLD, fontFamily: "var(--font-heading)" }}>
                Market Entry
              </h3>
              <p className="text-white/70 text-sm">
                Strategic advisory for entering Indian markets, ensuring compliance, tax efficiency, and sustainable growth.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-white/70 text-sm mb-4">Entering from:</p>
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
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
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

      {/* ================= BLOG CTA ================= */}
      <section className="py-20 text-center" style={{ backgroundColor: "#F4F8FC" }}>
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
          India Business Insights
        </h2>

        <p className="text-gray-500 mb-6">
          Stay updated with taxation, compliance, and market-entry insights.
        </p>

        <Button asChild aria-label="Explore Blog" style={{ backgroundColor: GOLD }} className="text-black">
          <Link href="/blog">Explore Blog</Link>
        </Button>
      </section>

      {/* ================= RELATED RESOURCES ================= */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
            Related Resources
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/taxation-regulatory" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Taxation &amp; Regulatory Services
              </h3>
              <p className="text-sm text-gray-600">
                Expert guidance on tax planning, compliance frameworks, and regulatory requirements for businesses in India.
              </p>
            </Link>

            <Link href="/doing-business-in-india" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Complete India Entry Guide
              </h3>
              <p className="text-sm text-gray-600">
                Step-by-step guidance for foreign companies entering the Indian market with compliance and tax efficiency.
              </p>
            </Link>

            <Link href="/services/accounting-assurance" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Accounting &amp; Assurance Services
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive financial reporting, IFRS compliance, and assurance services for growing businesses.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center text-white" style={{ backgroundColor: NAVY }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
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
