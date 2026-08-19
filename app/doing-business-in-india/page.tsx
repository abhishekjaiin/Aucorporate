"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Breadcrumb } from "@/components/Breadcrumb"
import {
  Lightbulb,
  ClipboardList,
  Route,
  Building2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

const cluster = [
  {
    step: "01",
    title: "Why India",
    href: "/doing-business-in-india/why-india",
    icon: Lightbulb,
    desc: "Key reasons global companies are choosing India — market size, growth rate, talent, and strategic advantages for foreign investors.",
  },
  {
    step: "02",
    title: "Pre-Incorporation Planning",
    href: "/doing-business-in-india/pre-incorporation",
    icon: ClipboardList,
    desc: "What to plan before incorporating in India — entity structure, sector approval routes, and documentation foreign companies need upfront.",
  },
  {
    step: "03",
    title: "Market Entry Process",
    href: "/doing-business-in-india/entry-process",
    icon: Route,
    desc: "A step-by-step walkthrough of the India market entry process, from entity selection through incorporation and initial compliance.",
  },
  {
    step: "04",
    title: "Company Incorporation",
    href: "/doing-business-in-india/incorporation",
    icon: Building2,
    desc: "How company incorporation works in India under the Companies Act, 2013 — documentation, filings, and typical timelines.",
  },
  {
    step: "05",
    title: "Post-Incorporation Compliance",
    href: "/doing-business-in-india/post-incorporation",
    icon: ShieldCheck,
    desc: "Ongoing compliance obligations after incorporating in India — accounting, tax filings, FEMA returns, and statutory requirements.",
  },
]

const quickStats = [
  { value: "1.4B+", label: "Population" },
  { value: "$3.7T+", label: "GDP Size" },
  { value: "Top 5", label: "Global Economy" },
  { value: "100K+", label: "Registered Startups" },
]

export default function DoingBusinessInIndiaPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "Doing Business in India" }]} />
      </div>

      {/* HERO */}
      <section className="bg-[#081a42] text-white py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold">Doing Business in India</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            A practical, step-by-step guide for foreign companies entering India —
            from deciding whether India is the right market, through incorporation,
            to staying compliant afterwards.
          </p>
        </motion.div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          {quickStats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-3xl font-bold text-[#081a42]">{stat.value}</h2>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLUSTER NAVIGATION — the actual point of this hub page */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            The Five Stages of Entering India
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Every foreign company's India entry follows roughly the same journey.
            This guide is organized around it — start wherever you are today.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {cluster.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex gap-5 p-6 border rounded-xl hover:shadow-lg hover:border-[#081a42]/30 transition"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#081a42]/5 flex items-center justify-center text-[#081a42]">
                      <Icon size={22} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-gray-400">
                        STEP {item.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-1.5">
                      {item.title}
                      <ArrowRight
                        size={16}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#081a42]"
                      />
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Expand Your Business in India with Confidence
        </h2>
        <p className="max-w-2xl mx-auto text-white/80 mb-6">
          AU Corporate provides end-to-end advisory and compliance support for
          seamless entry and growth in India.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition"
        >
          Talk to Experts
        </Link>
      </section>
    </div>
  )
}
