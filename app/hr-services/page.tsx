import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { ClickableReveal } from "@/components/ClickableReveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { CountUp } from "@/components/CountUp"
import { FaqAccordion } from "@/components/FaqAccordion"
import { LeadForm } from "@/components/LeadForm"

import {
  ArrowRight,
} from "lucide-react"

const stats = [
  { value: 5000, suffix: "+", label: "Employees Managed" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 99.9, suffix: "%", label: "Payroll Accuracy", decimals: 1 },
  { value: 10, suffix: "+", label: "Years Experience" },
]

const payrollCompliance = [
  {
    title: "Provident Fund (EPF)",
    desc: "Once headcount reaches 20 employees, EPF registration becomes mandatory under the Employees' Provident Fund & Miscellaneous Provisions Act, 1952 (administered by EPFO). Employees contribute 12% of basic wages plus dearness allowance, matched by a 12% employer contribution split into 3.67% to the EPF account and 8.33% to the Employees' Pension Scheme (EPS), with EPS calculated against a statutory wage ceiling of Rs 15,000/month. Contributions are filed monthly through EPFO's Electronic Challan-cum-Return (ECR).",
  },
  {
    title: "Employees' State Insurance (ESI)",
    desc: "ESI registration is triggered once an establishment employs 10 or more people (in most states) and covers employees earning up to Rs 21,000/month in gross wages (Rs 25,000 for employees with disabilities) — above that ceiling the scheme simply doesn't apply to that employee. The current contribution split — 3.25% employer and 0.75% employee of gross wages, in force since July 2019 — funds medical and cash benefits administered by ESIC.",
  },
  {
    title: "Professional Tax",
    desc: "A state-level tax on salaried employment, deducted by the employer and remitted to the state government — capped at Rs 2,500 per person per year under Article 276 of the Constitution. Applicability and slabs vary by state: Maharashtra, Karnataka, West Bengal and several others levy it, while a handful of states and union territories, including Delhi, don't levy it at all — so this obligation has to be checked state by state, not assumed uniform.",
  },
  {
    title: "Gratuity",
    desc: "Under the Payment of Gratuity Act, 1972, any establishment with 10 or more employees owes gratuity to an employee who completes 5 years of continuous service (the service requirement is waived on death or disablement), calculated as 15/26 of the last drawn basic salary plus dearness allowance for every completed year of service. Payouts are tax-exempt up to Rs 20 lakh under Section 10(10) of the Income Tax Act — a ceiling raised from Rs 10 lakh in 2018.",
  },
  {
    title: "TDS on Salaries",
    desc: "Employers must deduct tax at source on salary payments under Section 192 of the Income Tax Act, based on each employee's estimated annual tax liability, deposit it monthly, file quarterly TDS returns (Form 24Q), and issue Form 16 to every employee after the financial year closes — errors here are one of the most common sources of employee complaints in a first-year foreign-owned entity.",
  },
  {
    title: "Shops & Establishment Registration",
    desc: "Usually the first labour registration a foreign-owned entity needs — required under the applicable state's Shops and Commercial Establishments Act essentially as soon as an office is operational and staff are hired. It governs working hours, holidays and leave entitlements, and is typically a precondition for opening a current account and registering for PF/ESI in several states.",
  },
]

const hrProcessSteps = [
  {
    title: "Payroll Setup & Statutory Registration",
    desc: "We map PF, ESI, professional tax and Shops & Establishment obligations against your actual headcount and the state(s) you're operating in, and complete the registrations before the first payroll run.",
  },
  {
    title: "Monthly Payroll Processing",
    desc: "Salary computation, TDS, payslip generation and statutory challan preparation, run to a fixed monthly cycle so your finance team always knows what's due and when.",
  },
  {
    title: "Compliance Filing & Reporting",
    desc: "PF's ECR, ESI returns, professional tax returns and quarterly TDS filings are submitted to deadline, with MIS reporting back to your India team or overseas finance function.",
  },
  {
    title: "Employee Lifecycle Support",
    desc: "Onboarding paperwork, leave and attendance administration, exits, full-and-final settlement, gratuity calculation and Form 16 issuance — handled end to end, not just the monthly salary run.",
  },
  {
    title: "Ongoing Regulatory Monitoring",
    desc: "As state-level rules under the new Labour Codes are notified, or PF/ESI thresholds and forms change, we flag what actually affects your payroll before it becomes a compliance gap — rather than leaving you to track it yourself.",
  },
]

const hrFaqs = [
  {
    q: "What does HR and payroll outsourcing in India actually include?",
    a: "Beyond running the monthly salary calculation, it covers statutory registration (PF, ESI, professional tax, Shops & Establishment), monthly payroll processing and payslip generation, TDS deduction and filing, PF/ESI/PT compliance filings to deadline, and employee lifecycle administration — onboarding, exits, full-and-final settlement and gratuity calculation. The compliance layer around payroll is usually the part a newly set-up foreign-owned entity lacks in-house, not the salary math itself.",
  },
  {
    q: "What's the difference between an Employer of Record (EOR) and payroll outsourcing?",
    a: "Under an EOR arrangement, the third-party provider is the legal employer of record for statutory purposes — used when a foreign company wants to hire in India before it has its own entity. Under payroll outsourcing, your own Indian entity remains the legal employer, and the provider only handles payroll processing and compliance administration on your behalf. Most foreign companies use an EOR-style arrangement briefly during market entry, then move to direct hiring under their own subsidiary with payroll outsourcing once the entity is incorporated.",
  },
  {
    q: "Does a foreign company need an Indian entity to hire employees in India?",
    a: "Not immediately — an EOR-style arrangement can let you hire before an entity exists, which is useful for testing the market or bringing on a first small team quickly. But it's typically a transitional measure: once headcount or timeline justifies it, most foreign parents incorporate their own subsidiary (see our company registration guide) and hire directly, since an owned entity gives full control over IP assignment and employment contract terms and removes the per-employee EOR markup as the team grows.",
  },
  {
    q: "What is the minimum employee count that triggers PF and ESI registration?",
    a: "PF registration becomes mandatory at 20 employees; ESI registration becomes mandatory at 10 employees in most states. Many employers register earlier anyway, since crossing either threshold mid-year still requires registration from that point, and retrofitting compliance onto an already-running payroll is more disruptive than registering upfront.",
  },
  {
    q: "How has the Labour Codes reform affected payroll compliance?",
    a: "The four consolidated Labour Codes — the Code on Wages, the Industrial Relations Code, the Code on Social Security, and the Occupational Safety, Health and Working Conditions Code — took effect on 21 November 2025, replacing 29 separate central labour statutes. Central rules have been notified, but state-level rules are still being finalised at different paces across states, so the practical wage-definition and procedural requirements applicable to a given payroll should be checked against that state's current rules rather than assumed fixed. This is exactly the kind of ongoing monitoring an outsourced payroll provider is built to track on your behalf.",
  },
  {
    q: "How much does payroll outsourcing cost in India?",
    a: "It depends on headcount, entity complexity and how many states you're operating in — operating across multiple states adds professional tax and Shops & Establishment complexity that affects the scope of work. Most providers, including AU Corporate, price per employee per month rather than a flat fee, so an accurate quote needs your actual team size and locations — talk to us and we'll size it against your specific setup.",
  },
  {
    q: "What happens during an employee's full-and-final settlement?",
    a: "Last-drawn salary is prorated to the exit date, unused leave is encashed per policy, gratuity is calculated and paid if the employee has completed 5 years of service, TDS is trued up against the employee's actual annual income, any outstanding dues or recoveries are netted off, and a relieving/experience letter is issued — all reconciled and paid out within the company's or state's statutory settlement timeline.",
  },
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

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hiring in India involves more than issuing an offer letter — it means registering for Provident Fund and ESI once headcount crosses the applicable threshold, deducting and filing TDS on every salary run, calculating gratuity correctly, and staying current as India's labour law framework itself shifts under the four consolidated Labour Codes that took effect in November 2025. For a foreign parent standing up its first India team, that compliance layer is usually the part that's genuinely unfamiliar — not the recruiting or the salary math.
            </p>
            <p className="text-gray-700 leading-relaxed">
              AU Corporate's HR & Payroll Services cover that layer end to end: permanent recruitment, contract staffing, and monthly payroll processing with full statutory compliance — built specifically around what a foreign-owned subsidiary needs, whether you're hiring your first employee in India or scaling a team of hundreds. The sections below cover what Indian payroll compliance actually involves, how an Employer of Record arrangement compares to hiring under your own entity, and how our service works in practice.
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
              <p className="text-gray-600 mb-4">In today’s competitive job market, finding and retaining top talent is critical — particularly for a foreign-owned entity that doesn't yet have local brand recognition to draw candidates on its own. We source, screen and manage the hiring process against the role and compensation benchmarks that work in the Indian market, so the entity you're building is staffed by people who fit both the role and the culture.</p>
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
              <p className="text-gray-600 mb-4">We provide skilled professionals for temporary and project-based roles ensuring flexibility and efficiency. This is also the model most foreign companies use to bring on their first few people in India before an entity is fully operational — we handle the statutory employer obligations while you direct the day-to-day work, so headcount doesn't have to wait on incorporation.</p>
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
              <p className="text-gray-600 mb-4">Accurate payroll, compliance, and HR lifecycle management solutions tailored for business growth. This is the core of what we do for an already-incorporated subsidiary: your entity stays the legal employer, and we run the monthly payroll cycle, statutory filings and employee lifecycle administration behind it — see the compliance breakdown and process below for exactly what that covers.</p>
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
          <ClickableReveal key={s.label} className="cursor-pointer">
            <div className="text-3xl font-bold">
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </div>
            <p>{s.label}</p>
            <p className="mt-2 text-xs font-semibold text-yellow-600">Talk to an expert &rarr;</p>
          </ClickableReveal>
        ))}
      </section>

      {/* PAYROLL COMPLIANCE BREAKDOWN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">What Indian Payroll Compliance Actually Involves</h2>
          <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
            Running payroll in India isn't just computing a salary — it's a set of independent statutory obligations, each with its own trigger, contribution rate, and filing rhythm. Here's what a foreign-owned entity is actually on the hook for once it starts hiring:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {payrollCompliance.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
          <p className="mt-8 max-w-4xl leading-relaxed text-gray-600 text-sm">
            For the other five compliance regimes a foreign-owned entity carries alongside labour law — corporate governance, environmental, FEMA, data protection and IP — see our <Link href="/india-business-setup/regulatory-compliance" className="text-yellow-700 font-semibold hover:underline">full regulatory compliance framework</Link>.
          </p>
        </div>
      </section>

      {/* EOR VS OWN ENTITY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Employer of Record vs. Hiring Under Your Own Entity</h2>
          <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
            Foreign companies entering India generally choose between two hiring models, and the right one depends mostly on timing and team size rather than a fixed rule:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white p-6">
              <h3 className="text-lg font-bold mb-2 text-[#081a42]">Employer of Record (EOR)</h3>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">
                A third-party provider becomes the legal employer of record for statutory purposes — payroll, PF, ESI, gratuity and TDS run under their registrations, not yours — while you direct the employee's day-to-day work. This lets you hire in India before an entity exists, which is useful for testing the market or onboarding a first small team quickly.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                The tradeoff: EOR pricing scales per employee, so it gets more expensive relative to a subsidiary as headcount grows, and because the EOR is the legal employer, arrangements like IP assignment and equity typically need to route through your own entity anyway once you have one.
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6">
              <h3 className="text-lg font-bold mb-2 text-[#081a42]">Own Entity + Payroll Outsourcing</h3>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">
                Your India subsidiary (see our <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">company registration guide</Link>) is the legal employer, and a provider like AU Corporate handles payroll processing, statutory filings and employee lifecycle administration on your behalf — you keep full control over employment contracts, IP assignment and the brand your employees work under.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                The tradeoff is upfront: incorporation typically runs 4-12 weeks before the entity can operate. For most companies planning a team beyond a handful of people, or planning to stay in India for more than a year or two, this ends up the more cost-effective and controlled route once that setup time is accounted for.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-4xl leading-relaxed text-gray-600 text-sm">
            In practice, many foreign parents use an EOR-style arrangement as a bridge — hiring a first employee or two while incorporation is underway — and transition to their own entity's payroll once it's operational. Talk to us about which stage you're at; the right starting point depends on your specific timeline and headcount plan.
          </p>
        </div>
      </section>

      {/* HOW OUR HR & PAYROLL SERVICE WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">How Our HR & Payroll Service Works</h2>
          <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
            Once you're ready to hire — whether it's your first employee or you're standing up a full team — this is the sequence we follow:
          </p>
          <div className="relative space-y-4">
            <div aria-hidden="true" className="absolute left-[35px] top-9 bottom-9 hidden w-px bg-yellow-200 sm:block" />
            {hrProcessSteps.map((step, index) => (
              <ClickableReveal key={step.title} className="relative flex gap-5 rounded-xl border bg-gray-50 p-6 cursor-pointer">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">{index + 1}</div>
                <div>
                  <h3 className="font-bold text-base mb-1 text-[#081a42]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
                  <p className="mt-2 text-xs font-semibold text-yellow-600">Talk to an expert &rarr;</p>
                </div>
              </ClickableReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <LeadForm title="Ready to Set Up Payroll for Your India Team?" description="Tell us your headcount, states of operation, and where you are in the entity-setup process — our HR & payroll team will get back to you with next steps." />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center md:text-4xl">Frequently Asked Questions</h2>
          <FaqAccordion faqs={hrFaqs} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: hrFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* NEXT STEPS */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Continue Your Journey</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/india-business-setup/company-formation" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
              <h3 className="mb-2 font-semibold">Company Registration</h3>
              <p className="text-sm text-gray-600">Set up the entity your India team will be employed under</p>
            </Link>
            <Link href="/india-business-setup/regulatory-compliance" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
              <h3 className="mb-2 font-semibold">Regulatory Compliance</h3>
              <p className="text-sm text-gray-600">The full six-regime compliance framework, including labour law</p>
            </Link>
            <Link href="/gcc-setup-india" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
              <h3 className="mb-2 font-semibold">GCC Setup in India</h3>
              <p className="text-sm text-gray-600">Building a captive delivery or R&amp;D team? Start here</p>
            </Link>
            <Link href="/outsourcing" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
              <h3 className="mb-2 font-semibold">Business Process Outsourcing</h3>
              <p className="text-sm text-gray-600">Finance, accounting and back-office support beyond HR</p>
            </Link>
            <Link href="/contact" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
              <h3 className="mb-2 font-semibold">Talk to Our HR Team</h3>
              <p className="text-sm text-gray-600">Get a payroll quote sized to your headcount and states</p>
            </Link>
          </div>
        </div>
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
