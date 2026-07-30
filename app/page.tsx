"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import {
  Calculator,
  FileCheck,
  Scale,
  Users,
  Building2,
  ArrowRight,
  GraduationCap,
} from "lucide-react"

/* SERVICES */
const services = [
  {
    icon: Building2,
    title: "Global Support Services",
    description: "Scalable business process outsourcing to optimize your operations.",
    href: "/outsourcing",
  },
  {
    icon: FileCheck,
    title: "Accounting Services",
    description: "Comprehensive accounting services and financial assurance.",
    href: "/services/accounting-assurance",
  },
  {
    icon: Calculator,
    title: "Taxation & Regulatory",
    description: "Expert guidance on tax planning and compliance frameworks.",
    href: "/services/taxation-regulatory",
  },
  {
    icon: Scale,
    title: "Arbitration Services",
    description: "Professional dispute resolution and legal advisory.",
    href: "/arbitration-services",
  },
  {
    icon: Users,
    title: "HR & Payroll Solutions",
    description: "End-to-end HR and payroll management services.",
    href: "/hr-services",
  },
  {
    icon: GraduationCap,
    title: "Training & Workshops",
    description: "Training programs for skills, compliance and performance.",
    href: "/services/training-workshops",
  },
]

/* STATS */
const stats = [
  { value: 500, suffix: "+", label: "Client Served" },
  { value: 30, suffix: "+", label: "Collective Professional Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
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

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">

        <motion.div
          animate={{
            scale: [1.1, 1.15, 1.1],
            x: ["-2%", "2%", "-2%"],
            y: ["-2%", "2%", "-2%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://cdn.imageurlgenerator.com/uploads/d3d75a3f-28c7-4fa4-9ba4-6aa76dd8d091.webp"
            alt="AU Corporate Hero"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-3 sm:px-4 max-w-5xl">

          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-yellow-400 mb-1 leading-tight">
            AU Corporate
          </h1>

          <p className="text-white/80 mb-6 sm:mb-8 text-base xs:text-lg sm:text-2xl md:text-3xl font-bold leading-relaxed">
            Growing Together
          </p>

          <p className="text-white/70 mb-6 sm:mb-8 text-xs xs:text-sm sm:text-base md:text-lg px-1">
            India Entry | GCC Advisory | Business Setup | Accounting | Payroll | Tax | Transfer Pricing | Virtual CFO | HR Outsourcing | Compliance
          </p>

          <Button
            asChild
            aria-label="Get Started"
            className="bg-yellow-400 text-black text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3"
          >
            <Link href="/contact">
              Get Started
            </Link>
          </Button>

          {/* STATS */}
          <div className="mt-8 sm:mt-12 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
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

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Business Solutions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                aria-label={service.title}
                className="p-6 bg-white border rounded-xl hover:shadow-lg transition"
              >
                <service.icon className="text-yellow-500 mb-4" />

                <h3 className="font-semibold">
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

      {/* ================= INDIA SECTION ================= */}
      <section className="relative py-24 text-white overflow-hidden">

        <Image
          src="https://cdn.corenexis.com/files/c/5753696720.jpg"
          alt="Doing Business in India"
          fill
          loading="lazy"
          sizes="100vw"
          quality={70}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Doing Business in India
          </h2>

          <p className="text-white/80 text-sm sm:text-lg max-w-3xl mx-auto mb-12">
            AU Corporate enables global businesses to enter, establish, and scale in India with complete regulatory, tax, and compliance support.
          </p>

          {/* ✅ 3 ORIGINAL CONTENT BOXES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">

            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="text-yellow-400 font-semibold mb-2">
                Why India
              </h3>

              <p className="text-white/70 text-sm">
                India offers one of the fastest-growing economies with strong global investment opportunities and a large consumer base.
              </p>
            </div>

            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="text-yellow-400 font-semibold mb-2">
                Incorporation
              </h3>

              <p className="text-white/70 text-sm">
                End-to-end assistance for company formation, regulatory approvals, and seamless setup in India.
              </p>
            </div>

            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="text-yellow-400 font-semibold mb-2">
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
              <Link
                href="/india-entry-for-us-companies"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm font-semibold transition"
              >
                US Companies
              </Link>
              <Link
                href="/india-entry-for-uk-companies"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm font-semibold transition"
              >
                UK Companies
              </Link>
              <Link
                href="/india-entry-for-singapore-companies"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm font-semibold transition"
              >
                Singapore Companies
              </Link>
              <Link
                href="/india-entry-for-australian-companies"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm font-semibold transition"
              >
                Australia Companies
              </Link>
            </div>
          </div>

          <Button
            asChild
            aria-label="Explore India Opportunity"
            className="bg-yellow-400 text-black hover:scale-105 transition"
          >
            <Link href="/doing-business-in-india/why-india">
              Explore India Opportunity
            </Link>
          </Button>

        </div>
      </section>

      {/* ================= BLOG CTA ================= */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">
          Insights & Knowledge Hub
        </h2>

        <p className="text-gray-500 mb-6">
          Stay updated with taxation and compliance insights.
        </p>

        <Button
          asChild
          aria-label="Explore Blog"
          className="bg-yellow-400 text-black"
        >
          <Link href="/blog">
            Explore Blog
          </Link>
        </Button>
      </section>

      {/* ================= RELATED RESOURCES ================= */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            Related Resources
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/services/taxation-regulatory"
              className="p-6 border rounded-lg hover:shadow-md transition group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-yellow-500">
                Taxation & Regulatory Services
              </h3>
              <p className="text-sm text-gray-600">
                Expert guidance on tax planning, compliance frameworks, and regulatory requirements for businesses in India.
              </p>
            </Link>

            <Link
              href="/doing-business-in-india"
              className="p-6 border rounded-lg hover:shadow-md transition group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-yellow-500">
                Complete India Entry Guide
              </h3>
              <p className="text-sm text-gray-600">
                Step-by-step guidance for foreign companies entering the Indian market with compliance and tax efficiency.
              </p>
            </Link>

            <Link
              href="/services/accounting-assurance"
              className="p-6 border rounded-lg hover:shadow-md transition group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-yellow-500">
                Accounting & Assurance Services
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive financial reporting, IFRS compliance, and assurance services for growing businesses.
              </p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
