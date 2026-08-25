import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { CountUp } from "@/components/CountUp"

import {
  ArrowRight,
} from "lucide-react"

const stats = [
  { value: 5000, suffix: "+", label: "Employees Managed" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 99.9, suffix: "%", label: "Payroll Accuracy", decimals: 1 },
  { value: 10, suffix: "+", label: "Years Experience" },
]

export default function HRServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pexels-followingnyc-16094899.jpg"
            alt="Globe sculpture in front of city skyscrapers, representing global HR and payroll reach"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#081a42]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <Reveal>
            <h1 className="text-5xl font-bold mb-4">
              HR & Payroll Services
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-6 text-white/80">
              End-to-end HR outsourcing, payroll processing, and compliance solutions.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Button asChild className="bg-yellow-400 text-black hover:scale-105 transition">
              <Link href="/contact">Get Started</Link>
            </Button>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 border-l-4 border-yellow-400 pl-6 max-w-2xl">
            <p className="text-lg md:text-xl italic text-white/90 leading-relaxed">
              “Human is not a resource. A human being is a tremendous possibility.
              If we approach human beings as resources, then we will never unfold
              their innate genius.”
            </p>

            <p className="mt-3 text-yellow-400 font-semibold">
              — Sadhguru
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Recruiter reviewing candidate profiles for permanent placement"
                width={1200}
                height={800}
                loading="lazy"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="text-3xl font-bold mb-4">Permanent Recruitment</h2>
              <p className="text-yellow-500 font-semibold mb-4">Connecting You with Top Talent</p>
              <p className="text-gray-600 mb-4">In today’s competitive job market, finding and retaining top talent is critical.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Advanced recruitment tools</li>
                <li>✔ Industry-specific hiring</li>
                <li>✔ Culture-fit selection</li>
                <li>✔ End-to-end lifecycle</li>
              </ul>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="text-3xl font-bold mb-4">Contract Staffing & Third-Party Payroll</h2>
              <p className="text-yellow-500 font-semibold mb-4">Flexible Workforce Solutions</p>
              <p className="text-gray-600 mb-4">We provide skilled professionals for temporary and project-based roles ensuring flexibility and efficiency.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Quick deployment</li>
                <li>✔ Project staffing</li>
                <li>✔ Diverse talent pool</li>
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaborating on project staffing and talent sourcing"
                width={1200}
                height={800}
                loading="lazy"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                alt="Payroll and HR outsourcing services documentation and processing"
                width={1200}
                height={800}
                loading="lazy"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="text-3xl font-bold mb-4">Payroll & HR Outsourcing</h2>
              <p className="text-yellow-500 font-semibold mb-4">Streamlining HR Operations</p>
              <p className="text-gray-600 mb-4">Accurate payroll, compliance, and HR lifecycle management solutions tailored for business growth.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Payroll processing</li>
                <li>✔ Compliance</li>
                <li>✔ HR lifecycle</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-50 text-center grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold">
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </div>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Simplify Your HR Operations</h2>
        <Button asChild className="bg-yellow-400 text-black hover:scale-105 transition">
          <Link href="/contact">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </section>

      <a
        href="https://www.image2url.com/r2/default/documents/1777026304947-6e16b4f8-c2df-4c55-8d68-8d47a460bda0.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-50"
      >
        📄 <span className="font-medium">View HR Brochure</span>
      </a>
    </div>
  )
}
