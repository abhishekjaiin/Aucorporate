import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { RelatedResources } from "@/components/RelatedResources"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Globe2, ShieldCheck } from "lucide-react"

const services = [
  { title: "Company Registration", desc: "Incorporation and registration support for setting up an entity in Hong Kong, Singapore or Mainland China." },
  { title: "Accounting Services", desc: "Cloud-based bookkeeping and financial reporting, accessible online from anywhere." },
  { title: "Tax Advisory", desc: "Corporate tax requirements, advisory and compliance across Hong Kong and Singapore." },
  { title: "Audit Services", desc: "Audit support and financial review through UniproAsia's online service platform." },
  { title: "Corporate Compliance", desc: "Ongoing corporate maintenance and statutory compliance requirements." },
  { title: "Payroll Outsourcing", desc: "Payroll administration, HR support and compliance reporting for your regional team." },
  { title: "Business Support", desc: "General business and administrative support for companies operating across Asia." },
  { title: "Going Global", desc: "End-to-end support taking a business from market selection through company setup and growth." },
  { title: "Partnership Services", desc: "Opportunities for consultants, service providers and entrepreneurs expanding across Asia's markets." },
]

const regions = [
  { name: "Hong Kong", copy: "Company registration, corporate maintenance, accounting and tax support for a Hong Kong entity." },
  { name: "Singapore", copy: "Company formation and ongoing corporate compliance for businesses entering Southeast Asia." },
  { name: "China", copy: "Regional business and sourcing support across Mainland China." },
]

export default function UniproAsiaPartnerPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "Global Support", href: "/outsourcing" }, { label: "UniproAsia Partnership" }]} />
      </div>

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=80"
          alt="Hong Kong and Singapore skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#081a42]/70" />
        <Reveal className="relative z-10 max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-4">
            AU Corporate &times; UniproAsia
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Your Partner Beyond India: Hong Kong, Singapore &amp; China
          </h1>
          <p className="mt-5 text-lg text-white/80">
            AU Corporate works with UniproAsia to support clients expanding beyond
            India into Hong Kong, Singapore and Mainland China — company formation,
            accounting, tax, audit and compliance, handled by a trusted regional partner.
          </p>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section aria-labelledby="about-uniproasia" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600 mb-3">
              About UniproAsia
            </p>
            <h2 id="about-uniproasia" className="text-3xl font-bold text-[#081a42] mb-4">
              A Trusted Global Corporate Services Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              UniproAsia (Unipro Consulting Limited) is a corporate services provider
              based in Hong Kong, with a presence across Hong Kong, Singapore and
              Mainland China. They help businesses set up and stay compliant through
              company registration, accounting, tax advisory, audit and corporate
              compliance — delivered through a cloud-based, technology-driven platform.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For AU Corporate clients whose India entry is one part of a wider Asia
              expansion, UniproAsia is who we work with for the Hong Kong, Singapore
              and China side of that plan.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src="https://images.unsplash.com/photo-1581091012184-7c7f8e84f3b5?auto=format&fit=crop&w=1200&q=80"
              alt="Business partnership handshake"
              width={1000}
              height={700}
              loading="lazy"
              className="rounded-2xl w-full h-auto object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* WHY THIS PARTNERSHIP */}
      <section aria-labelledby="why-partnership" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <h2 id="why-partnership" className="text-3xl font-bold text-[#081a42]">
              Why We Work With UniproAsia
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A single point of coordination for clients whose plans extend beyond India.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8">
            <Reveal className="text-center">
              <div className="w-14 h-14 mx-auto rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
                <Building2 className="text-[#081a42]" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Integrated Services</h3>
              <p className="text-sm text-gray-600">Company setup, accounting, tax and compliance handled together, not across disconnected vendors.</p>
            </Reveal>
            <Reveal delay={0.1} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
                <Globe2 className="text-[#081a42]" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Regional Coverage</h3>
              <p className="text-sm text-gray-600">Hong Kong, Singapore and Mainland China — the markets clients most often expand into alongside India.</p>
            </Reveal>
            <Reveal delay={0.2} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
                <ShieldCheck className="text-[#081a42]" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ongoing Compliance</h3>
              <p className="text-sm text-gray-600">Corporate maintenance and statutory compliance stay current after the entity is set up, not just at formation.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section aria-labelledby="uniproasia-services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-12">
            <h2 id="uniproasia-services" className="text-3xl font-bold text-[#081a42]">
              What UniproAsia Covers
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              Ask us about any of these for your Hong Kong, Singapore or China expansion.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL PRESENCE */}
      <section aria-labelledby="regional-presence" className="py-20 bg-[#081a42] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400 mb-3">
              Regional Reach
            </p>
            <h2 id="regional-presence" className="text-3xl font-bold">
              Connecting Businesses Across Asia
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {regions.map((r) => (
              <Reveal key={r.name} className="border border-white/15 bg-white/[0.03] rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-yellow-400">{r.name}</h3>
                <p className="text-sm text-white/70">{r.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#081a42] mb-4">
            Planning to Expand Beyond India?
          </h2>
          <p className="text-gray-600 mb-8">
            Tell us about your plans and we&apos;ll help coordinate the India side
            directly, and connect you with UniproAsia for Hong Kong, Singapore or China.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/contact">
              Talk to AU Corporate <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <p className="mt-6 text-xs text-gray-400">
            Learn more about UniproAsia directly at{" "}
            <a
              href="https://uniproasia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:underline"
            >
              uniproasia.com
            </a>
            .
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <RelatedResources
          links={[
            { label: "Global Support & Outsourcing", href: "/outsourcing", description: "AU Corporate's own accounting, payroll and BPO services in India." },
            { label: "Why India", href: "/doing-business-in-india/why-india", description: "The case for India as part of a wider Asia expansion." },
            { label: "GCC Setup in India", href: "/gcc-setup-india", description: "Building a Global Capability Center alongside a regional footprint." },
          ]}
        />
      </div>
    </div>
  )
}
