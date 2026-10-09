import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  Users,
  Building,
  Globe,
  MapPin,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { ClickableReveal } from "@/components/ClickableReveal"
import { Breadcrumb } from "@/components/Breadcrumb"

export default function AboutHero() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">

      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "About" }]} />
      </div>

      {/* HERO */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">

          <Reveal>

            <span className="text-black text-xs sm:text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h1 className="text-gold-dark text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              AU Corporate
            </h1>

            <p className="text-gray-500 text-sm sm:text-base mb-4">
              AU Corporate is a CA-led professional services firm based in New Delhi and Gurugram. Our team includes Chartered Accountants, CPAs, Company Secretaries, lawyers and other business specialists.
            </p>

            <p className="text-gray-500 text-sm sm:text-base mb-6">
              Since 2016, we have helped foreign companies set up and run their businesses in India. Our work includes company setup, FEMA and RBI compliance, tax, accounting and payroll. We also support Indian businesses with tax and compliance.
            </p>

            <Link href="/contact">
              <Button className="bg-gold text-black px-5 sm:px-6 py-2 sm:py-3">
                Get in Touch <ArrowRight className="ml-2" />
              </Button>
            </Link>

          </Reveal>

          <Reveal delay={0.15}>
            <Image
              src="/images/pexels-amar-20624924.jpg"
              alt="Vintage world map, representing AU Corporate's global reach"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </Reveal>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-12 sm:py-24 bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">

          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Who We Are
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mb-4">
              AU Corporate helps businesses manage the rules and day-to-day work involved in setting up and running a business in India.
            </p>

            <p className="text-gray-500 text-sm sm:text-base">
              We work with companies entering India and support them as they grow, with practical advice and ongoing help.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Image
              src="/images/pexels-pixabay-164606.jpg"
              alt="Team work"
              width={500}
              height={350}
              className="rounded-xl shadow w-full h-auto"
            />
          </Reveal>

        </div>
      </section>

      {/* WHO WE WORK WITH — foreign companies entering India, by source country */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Who We Work With
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto text-center mb-10">
              We support foreign companies that want to set up or run a business in India. This includes choosing a suitable business structure, meeting FEMA and RBI reporting requirements, and keeping Indian tax filings aligned with home-country records. Our guidance is especially developed for US companies, and we also support companies from:
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: "United States", href: "/india-entry-for-us-companies" },
              { label: "United Kingdom", href: "/india-entry-for-uk-companies" },
              { label: "Singapore", href: "/india-entry-for-singapore-companies" },
              { label: "Australia", href: "/india-entry-for-australian-companies" },
              { label: "Germany", href: "/india-entry-for-german-companies" },
              { label: "Japan", href: "/india-entry-for-japan-companies" },
              { label: "China", href: "/india-entry-for-china-companies" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="flex items-center gap-2 p-4 border rounded-xl hover:shadow-lg hover:border-gold/50 bg-white transition justify-center text-center"
              >
                <MapPin className="text-gold w-4 h-4 shrink-0" />
                <span className="font-medium text-sm">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION / WHY */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">

          {[
            {
              icon: Eye,
              title: "Our Vision",
              text: "Help clients meet their business needs with practical advice, ethical work and long-term support."
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "Provide reliable services, act ethically and build lasting client relationships."
            },
            {
              icon: Award,
              title: "Why AU?",
              text: "We work with integrity, protect client information and focus on careful, practical work."
            }
          ].map((item, i) => (
            <ClickableReveal
              key={i}
              delay={i * 0.1}
              className="p-5 sm:p-8 border rounded-xl hover:shadow-xl hover:border-gold/50 bg-white transition cursor-pointer"
            >
              <item.icon className="text-gold mb-3" />
              <h3 className="font-bold text-base sm:text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.text}
              </p>
            </ClickableReveal>
          ))}

        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="py-12 sm:py-24 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Our Service Pillars</h2>
          <p className="text-gray-500 text-center text-sm sm:text-base max-w-2xl mx-auto">We provide support across 10 core service areas.</p>
        </div>
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">

          {[
            { icon: Building, title: "India Entry", href: "/doing-business-in-india" },
            { icon: Globe, title: "GCC Advisory", href: "/gcc-setup-india" },
            { icon: Building, title: "Business Setup", href: "/india-business-setup" },
            { icon: Users, title: "Accounting", href: "/services/accounting-assurance" },
            { icon: Users, title: "Payroll", href: "/hr-services" },
            { icon: Award, title: "Tax", href: "/services/taxation-regulatory" },
            { icon: Award, title: "Transfer Pricing", href: "/services/taxation-regulatory" },
            { icon: Award, title: "Virtual CFO", href: "/outsourcing" },
            { icon: Users, title: "HR Outsourcing", href: "/hr-services" },
            { icon: Award, title: "Compliance", href: "/india-business-setup/regulatory-compliance" },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="block">
              <Reveal
                delay={(i % 5) * 0.06}
                className="p-4 sm:p-6 bg-white rounded-xl border text-center hover:shadow-lg hover:border-gold/50 transition"
              >
                <item.icon className="text-gold mx-auto mb-2 sm:mb-3" />
                <p className="font-medium text-sm sm:text-base">
                  {item.title}
                </p>
              </Reveal>
            </Link>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white text-center px-4">

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Support for Your Business in India
        </h2>

        <p className="text-gray-500 mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Talk to AU Corporate about business setup, tax, compliance and ongoing support in India.
        </p>

        <Link href="/contact">
          <Button className="bg-gold text-black px-6 py-3">
            Contact Us <ArrowRight className="ml-2" />
          </Button>
        </Link>

      </section>

    </div>
  )
}
