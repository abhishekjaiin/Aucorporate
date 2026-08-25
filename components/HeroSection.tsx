"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useInView, animate } from "framer-motion"
import HeroCarousel, { heroSlides } from "@/components/HeroCarousel"

const NAVY = "#081A42"
const GOLD = "#facc15"

/* STATS — real, already-established figures */
const stats = [
  { text: "End-to-End", label: "India Entry & Compliance Support" },
  { value: 30, suffix: "+", label: "Years Collective Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { text: "New Delhi", label: "Based, Serving Global Clients" },
] as const

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

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
      style={{ backgroundColor: NAVY }}
    >
      {heroSlides.map((slide, i) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={i === 0}
          sizes="100vw"
          className="object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: activeSlide === i ? 1 : 0 }}
        />
      ))}
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
