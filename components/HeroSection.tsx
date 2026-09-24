"use client"

import { useState } from "react"
import Image from "next/image"
import HeroCarousel, { heroSlides } from "@/components/HeroCarousel"
import { CountUp } from "@/components/CountUp"

const NAVY = "#081A42"
const GOLD = "#facc15"

/* STATS — real, already-established figures */
const stats = [
  { text: "End-to-End", label: "India Entry & Compliance Support" },
  { value: 30, suffix: "+", label: "Years Collective Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { text: "New Delhi", label: "Based, Serving Global Clients" },
] as const

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
      style={{ backgroundColor: NAVY }}
    >
      {/* Only the active slide's image is mounted — with all 3 mounted at
          once (even at opacity 0), the browser laid out and fetched all 3
          full-bleed images on first load since they're all positioned in
          the viewport, which meant the LCP image was competing for
          bandwidth with two images nobody could see yet. This trades the
          crossfade transition for a real reduction in initial page weight. */}
      <Image
        key={heroSlides[activeSlide].image}
        src={heroSlides[activeSlide].image}
        alt={heroSlides[activeSlide].imageAlt}
        fill
        priority={activeSlide === 0}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundColor: NAVY, opacity: 0.72 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081A42] via-[#081A42]/60 to-transparent" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">

        <HeroCarousel onActiveChange={setActiveSlide} />

        <p className="mb-9 sm:mb-10 text-xs sm:text-sm font-medium tracking-wide" style={{ color: GOLD }}>
          India Market Entry &nbsp;•&nbsp; Corporate Advisory &nbsp;•&nbsp; Tax &nbsp;•&nbsp; Accounting &nbsp;•&nbsp; Compliance &nbsp;•&nbsp; HR &amp; Payroll
        </p>

        {/* STATS */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div
                className="flex items-center justify-center min-h-[1.75rem] sm:min-h-[2rem] md:min-h-[2.25rem] text-xl sm:text-2xl md:text-3xl font-bold"
                style={{ color: GOLD, fontFamily: "var(--font-heading)" }}
              >
                {"value" in stat ? <CountUp value={stat.value} suffix={stat.suffix} /> : stat.text}
              </div>
              <div className="min-h-[2rem] sm:min-h-[2.5rem] text-white/70 text-xs sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
