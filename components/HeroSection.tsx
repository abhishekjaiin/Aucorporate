"use client"

import Link from "next/link"
import { Building2, Calculator, FileCheck, Landmark, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAVY = "#0E1B4D"
const GOLD = "#FFD21F"

const partnerServices = [
  "Incorporation",
  "Monthly accounting and reporting",
  "FEMA compliance",
  "Secretarial compliance",
  "Tax compliance",
  "Services for expats",
  "Annual audit support and filings",
]

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-16 lg:pt-20"
      style={{ backgroundColor: NAVY }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
        <div className="text-left">
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.45rem]">
            Indian Subsidiary Incorporation to Ongoing Compliance — AU Corporate Handles It All
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            An India-based, CA-led professional services firm supporting foreign companies with market entry, subsidiary setup and ongoing operations in India.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild style={{ backgroundColor: GOLD }} className="font-bold text-[#0E1B4D] hover:bg-[#F2B705]">
              <Link href="https://cal.com/abhishekjaiin-ybbklq/30min" target="_blank" rel="noreferrer">
                Book consultation with an expert
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link href="/india-business-setup">
                See entity options
              </Link>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF4B8]">
              <Building2 size={20} style={{ color: NAVY }} />
            </div>
            <h2 className="font-heading text-xl font-bold text-[#0E1B4D]">
              One partner for
            </h2>
          </div>

          <ul className="space-y-3">
            {partnerServices.map((service) => (
              <li key={service} className="flex items-start gap-3 text-sm font-medium text-[#243047]">
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFD21F] text-[10px] font-bold text-[#0E1B4D]">
                  ✓
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
