"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const GOLD = "#facc15"

export const heroSlides = [
  {
    h1: "Company Registration in India for Foreign Businesses",
    copy: "From entity selection to incorporation, FEMA compliance, and banking — we manage your India market entry end-to-end, so you're operating in weeks, not months.",
    primaryCta: { label: "Start Your India Entry", href: "/contact" },
    secondaryCta: { label: "See Entity Options", href: "/india-business-setup" },
  },
  {
    h1: "Corporate Tax, GST & FEMA Compliance for Companies in India",
    copy: "Transfer pricing, GST, and regulatory filings — we keep foreign-owned entities compliant with India's requirements year-round, not just at setup.",
    primaryCta: { label: "Talk to a Tax Advisor", href: "/contact" },
    secondaryCta: { label: "Explore Tax Services", href: "/services/taxation-regulatory" },
  },
  {
    h1: "Accounting, Payroll & Virtual CFO Outsourcing in India",
    copy: "Bookkeeping, payroll, and Virtual CFO support — run your India operations without building an in-house finance team from scratch.",
    primaryCta: { label: "Explore Outsourcing Services", href: "/outsourcing" },
    secondaryCta: { label: "Book a Consultation", href: "/contact" },
  },
]

const ROTATION_MS = 7000

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length)
  }

  useEffect(() => {
    if (paused) return

    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, ROTATION_MS)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused])

  const slide = heroSlides[active]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
      aria-roledescription="carousel"
      aria-label="AU Corporate services"
    >
      <div className="transition-opacity duration-200">
        {/* Exactly one h1 exists in the DOM at all times. */}
        <h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 sm:mb-6 leading-[1.15] tracking-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.7)] min-h-[3.5em] sm:min-h-[2.5em] flex items-center justify-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {slide.h1}
        </h1>

        <p className="text-white/85 mb-9 sm:mb-10 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto [text-shadow:0_1px_8px_rgba(0,0,0,0.7)] min-h-[3em]">
          {slide.copy}
        </p>

        <div className="flex flex-col xs:flex-row gap-3 justify-center items-center mb-6">
          <Button
            asChild
            aria-label={slide.primaryCta.label}
            className="text-black text-sm sm:text-base font-semibold px-7 py-2.5 sm:py-3 w-full xs:w-auto"
            style={{ backgroundColor: GOLD }}
          >
            <Link href={slide.primaryCta.href}>{slide.primaryCta.label}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            aria-label={slide.secondaryCta.label}
            className="text-white border-white/50 hover:bg-white/10 text-sm sm:text-base font-semibold px-7 py-2.5 sm:py-3 w-full xs:w-auto bg-transparent"
          >
            <Link href={slide.secondaryCta.href}>{slide.secondaryCta.label}</Link>
          </Button>
        </div>
      </div>

      <div className="flex gap-2 justify-center mb-3" role="tablist" aria-label="Hero slide selector">
        {heroSlides.map((s, i) => (
          <button
            key={s.h1}
            role="tab"
            aria-selected={i === active}
            aria-label={`Show slide ${i + 1}: ${s.h1}`}
            onClick={() => goTo(i)}
            className="h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            style={{
              width: i === active ? "28px" : "8px",
              backgroundColor: i === active ? GOLD : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
