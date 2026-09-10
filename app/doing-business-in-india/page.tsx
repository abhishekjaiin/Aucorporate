import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableReveal } from "@/components/ClickableReveal"
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
    title: "Market Entry Strategy",
    href: "/doing-business-in-india/entry-process",
    icon: Route,
    desc: "How to think through the India market entry decision — timeline expectations, risk factors, and the strategic tradeoffs between entity types before you commit.",
  },
  {
    step: "04",
    title: "Should You Incorporate Now?",
    href: "/doing-business-in-india/incorporation",
    icon: Building2,
    desc: "The business case for incorporating in India versus other routes to market — when it makes sense, common timing mistakes, and what changes once you're committed.",
  },
  {
    step: "05",
    title: "Life After Incorporation",
    href: "/doing-business-in-india/post-incorporation",
    icon: ShieldCheck,
    desc: "The strategic decisions that follow incorporation — building vs. outsourcing your finance function, governance as you scale, and common second-year mistakes.",
  },
]

const quickStats = [
  { value: "1.4B+", label: "Population" },
  { value: "$3.7T+", label: "GDP Size" },
  { value: "Top 5", label: "Global Economy" },
  { value: "100K+", label: "Registered Startups" },
]

const diagnostics = [
  {
    situation: "“We haven’t decided if India is the right market for us yet.”",
    href: "/doing-business-in-india/why-india",
    action: "Start with Why India",
  },
  {
    situation: "“We’ve picked India but need FDI eligibility, tax structure, and JV terms settled before we file anything.”",
    href: "/doing-business-in-india/pre-incorporation",
    action: "Read Pre-Incorporation Planning",
  },
  {
    situation: "“We’re weighing subsidiary vs. distributor vs. EOR vs. joint venture as our way in.”",
    href: "/doing-business-in-india/entry-process",
    action: "Read Market Entry Strategy",
  },
  {
    situation: "“We know we want to incorporate — we’re just unsure if now is the right time.”",
    href: "/doing-business-in-india/incorporation",
    action: "Read Should You Incorporate Now?",
  },
  {
    situation: "“We’re already incorporated — what changes strategically from here?”",
    href: "/doing-business-in-india/post-incorporation",
    action: "Read Life After Incorporation",
  },
]

const hubFaqs = [
  {
    q: "What's the difference between this guide and the India Business Setup guide?",
    a: "This guide covers the strategic decisions — whether India is the right market, which entry route fits your business, and how your priorities should shift as you scale. Our india-business-setup guide covers the mechanical process once you've decided to incorporate: entity types, the SPICe+ filing, documents, and timelines. Most companies use both — this one to decide and plan, that one to execute.",
  },
  {
    q: "Do I need to go through these five stages in order?",
    a: "No — they describe a typical journey, not a mandatory sequence. If you've already settled on India and are weighing entry routes, start at Market Entry Strategy. If you're already incorporated, the earlier stages won't be relevant to you — go straight to Life After Incorporation.",
  },
  {
    q: "How long does the full journey take, from evaluating India to running a stable operation?",
    a: "There's no fixed timeline — it depends more on how quickly your own organization moves through market evaluation and internal approvals than on anything India-specific. Once you've committed, the mechanical incorporation steps typically move faster than foreign parent companies expect; document authentication on the parent's side (notarization and apostille) tends to be the real pacing factor, not the Indian filing itself.",
  },
  {
    q: "What's the most common strategic mistake foreign companies make when entering India?",
    a: "The two most common mistakes sit at opposite ends of the same problem: incorporating before there's a signed customer or committed hire to justify it, and delaying incorporation once that signal is real. Both show up often enough that we cover them in detail in our incorporation timing guide.",
  },
  {
    q: "We already have an India subsidiary — is any of this still relevant to us?",
    a: "Yes — the Life After Incorporation stage is written specifically for that point in the journey: building or outsourcing your finance function, governance as you scale, and the mistakes that tend to surface in year two rather than year one.",
  },
]

export default function DoingBusinessInIndiaPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "Doing Business in India" }]} />
      </div>

      {/* HERO */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pexels-pixabay-164606.jpg"
            alt="Singapore skyline at dusk with business professionals walking, representing global business growth"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#081a42]/80" />
        </div>
        <Reveal className="relative z-10 text-white">
          <h1 className="text-5xl font-bold">Doing Business in India</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            The strategic side of India entry — whether India is the right market for you,
            which route to market fits your business, and how your priorities should
            shift as you move from pre-incorporation planning through to running an
            established India operation.
          </p>
          <p className="mt-4 text-sm text-white/60 max-w-2xl mx-auto">
            Already decided to incorporate and just need the procedural walkthrough — entity types, the SPICe+ filing, documents, timelines? See our{" "}
            <Link href="/india-business-setup/company-formation" className="underline hover:text-white">
              complete company registration guide
            </Link>{" "}
            instead.
          </p>
        </Reveal>
      </section>

      {/* QUICK STATS */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          {quickStats.map((stat) => (
            <ClickableReveal key={stat.label} className="cursor-pointer">
              <h2 className="text-3xl font-bold text-[#081a42]">{stat.value}</h2>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="mt-2 text-xs font-semibold text-yellow-600">Talk to an expert &rarr;</p>
            </ClickableReveal>
          ))}
        </div>
      </section>

      {/* OVERVIEW — orientation content, not a rehash of the spoke pages */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            What "Doing Business in India" Actually Involves
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Most foreign companies searching for "doing business in India" aren&apos;t
              looking for a single answer — they&apos;re somewhere in a longer decision
              journey that runs from &ldquo;is this market worth the effort&rdquo; through to
              &ldquo;we&apos;re two years in, what changes now.&rdquo; That journey has a rough,
              predictable shape: assess whether India fits the business case, decide how
              to enter (and whether incorporation is even the right first move), plan the
              entity and tax structure before filing anything, incorporate, and then keep
              making strategic decisions — about governance, the finance function, and
              structure — long after the certificate of incorporation is issued.
            </p>
            <p>
              This page is organized around that shape rather than around forms and filing
              steps. If you need the mechanical, step-by-step process for registering a
              company — entity types, the SPICe+ filing, documents, and timelines — that
              lives on our{" "}
              <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                complete company registration guide
              </Link>. What follows here is the strategic layer: the questions worth
              answering before, during, and after that process, and which of the five
              pages below actually answers the question you have right now.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK DIAGNOSTIC — self-identification wayfinding, distinct from the full cluster cards below */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Which Stage Are You In?
          </h2>
          <div className="grid gap-4">
            {diagnostics.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 bg-white border rounded-xl hover:shadow-md hover:border-[#081a42]/30 transition"
              >
                <p className="text-gray-700 italic">{d.situation}</p>
                <span className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold text-[#081a42] whitespace-nowrap">
                  {d.action}
                  <ArrowRight
                    size={16}
                    className="-translate-x-1 group-hover:translate-x-0 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
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

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {hubFaqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: hubFaqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Expand Your Business in India with Confidence
        </h2>
        <p className="max-w-2xl mx-auto text-white/80 mb-6">
          AU Corporate provides end-to-end advisory and compliance support for
          entry and growth in India.
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
