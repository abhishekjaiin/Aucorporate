import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
      style={{ backgroundColor: NAVY }}
    >
      <Image
        src="/images/pexels-pierre-blache-651604-9280877.jpg"
        alt="View looking up at glass skyscrapers with an airplane overhead, representing global business reach"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundColor: NAVY, opacity: 0.72 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081A42] via-[#081A42]/60 to-transparent" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">

        <h1
          className="mb-5 sm:mb-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Set Up and Run Your India Subsidiary — Incorporation to Annual Compliance
        </h1>

        <p className="mb-9 sm:mb-10 text-white/85 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
          One partner for your India subsidiary: incorporation, accounting, tax, FEMA, secretarial compliance, audit support and expat services.
        </p>

        <div className="mb-6 flex flex-col xs:flex-row gap-3 justify-center items-center">
          <Button
            asChild
            className="text-black text-sm sm:text-base font-semibold px-7 py-2.5 sm:py-3 w-full xs:w-auto"
            style={{ backgroundColor: GOLD }}
          >
            <Link href="/contact">Set Up Your Subsidiary</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-white border-white/50 hover:bg-white/10 text-sm sm:text-base font-semibold px-7 py-2.5 sm:py-3 w-full xs:w-auto bg-transparent"
          >
            <Link href="/india-business-setup">See Entity Options</Link>
          </Button>
        </div>

        <p className="mb-9 sm:mb-10 text-xs sm:text-sm font-medium tracking-wide text-gold">
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
