"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Breadcrumb } from "@/components/Breadcrumb"
import { TrendingUp, Globe, Users, Shield, Landmark, Cpu, Briefcase, BarChart3 } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
}

export default function WhyIndiaPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4"><Breadcrumb items={[{ label: "Doing Business in India", href: "/doing-business-in-india" }, { label: "Why India" }]} /></div>

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">

        <Image
          src="/images/pexels-followingnyc-16094899.jpg"
          alt="Globe sculpture in front of city skyscrapers, representing India's role in the global economy"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#081a42]/70" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-5xl font-bold">
            Why India?
          </h1>

          <p className="mt-5 text-lg text-white/80">
            India is transitioning from an emerging market to a global economic anchor —
            driven by scale, reforms, digital transformation, and manufacturing expansion.
          </p>
        </motion.div>
      </section>
      {/* WHY INDIA - DEEP INSIGHT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold">
              Why India is Becoming a Global Business Growth Engine
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              India is no longer viewed only as an emerging market — it is now a
              structural pillar in global supply chains, digital transformation,
              and long-term capital deployment strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  1. Structural Economic Transformation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  India is undergoing a long-term shift from a consumption-heavy economy
                  to a balanced model driven by manufacturing, services exports, and digital infrastructure.
                  This transformation is supported by policy reforms, capital inflows, and rising private investment.
                </p>
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  2. Shift in Global Supply Chains
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Global companies are actively diversifying away from single-country dependency strategies.
                  India is emerging as a key alternative manufacturing and sourcing destination under the
                  “China + 1” and “China + India + ASEAN” strategy frameworks.
                </p>
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  3. Policy-Led Investment Environment
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  India has introduced one of the most aggressive FDI liberalisation frameworks globally,
                  allowing automatic approvals in most sectors, reducing entry barriers, and promoting ease of doing business
                  through digital compliance systems.
                </p>
              </div>

            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  4. Capital Market & Investor Confidence
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  India has consistently ranked among the top destinations for FDI inflows in Asia.
                  Strong IPO activity, private equity participation, and sovereign wealth fund investments
                  reflect long-term confidence in India’s economic trajectory.
                </p>
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  5. Digital & Innovation Ecosystem
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  India has built one of the world’s largest digital public infrastructure systems
                  (UPI, Aadhaar, GSTN), enabling rapid scaling of fintech, SaaS, AI, and platform-based businesses.
                  This makes India a natural hub for digital-first global expansion.
                </p>
              </div>

              <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">
                  6. Long-Term Demographic Advantage
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Unlike aging developed economies, India offers a long runway of workforce expansion,
                  consumption growth, and urbanisation — making it one of the few large-scale markets
                  with sustained demand visibility over the next 20–30 years.
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* INVESTMENT THESIS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            India Investment Thesis (2026 Outlook)
          </h2>

          <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
            Global firms are increasingly shifting capital toward India due to structural economic shifts,
            supply chain diversification, and policy-driven reforms.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              {
                title: "Consumption Driven Economy",
                desc: "India is powered by domestic consumption, not just exports — creating stable long-term demand.",
              },
              {
                title: "Supply Chain Diversification",
                desc: "Global companies are adopting China+1 strategy, positioning India as a manufacturing hub.",
              },
              {
                title: "Digital First Economy",
                desc: "UPI, fintech, AI adoption, and SaaS ecosystems are reshaping business models.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 border rounded-xl hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* KEY DRIVERS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Key Growth Drivers of India Economy
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              {
                icon: <Users />,
                title: "Demographic Dividend",
                desc: "65% population under 35 → largest young workforce globally.",
              },
              {
                icon: <TrendingUp />,
                title: "Fast GDP Expansion",
                desc: "India among top 3 fastest-growing major economies.",
              },
              {
                icon: <Cpu />,
                title: "Tech Transformation",
                desc: "AI, SaaS, fintech, and startup ecosystem expansion.",
              },
              {
                icon: <BarChart3 />,
                title: "Capital Market Growth",
                desc: "Rising IPO activity and strong equity inflows.",
              },
              {
                icon: <Landmark />,
                title: "Government Reforms",
                desc: "GST, PLI schemes, FDI liberalisation.",
              },
              {
                icon: <Globe />,
                title: "Global Trade Integration",
                desc: "FTAs with UAE, UK, ASEAN improving trade access.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 bg-white border rounded-xl hover:shadow-lg transition"
              >
                <div className="text-[#081a42] mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* SECTOR OPPORTUNITIES WITH IMAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold">
              High-Growth Sector Opportunities in India
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              India offers diversified investment opportunities across sectors driven by
              policy support, digital transformation, and global supply chain realignment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Pharmaceuticals & Life Sciences",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
                desc: "Global leader in generics, vaccines and contract manufacturing.",
                stat: "20% global supply share",
              },
              {
                title: "IT Services & SaaS",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                desc: "India dominates global IT outsourcing and digital services delivery.",
                stat: "$350B+ industry",
              },
              {
                title: "Automobile & EV",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
                desc: "Rapid EV adoption and manufacturing ecosystem expansion.",
                stat: "4th largest auto market",
              },
              {
                title: "Renewable Energy",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
                desc: "Massive solar, wind and green hydrogen expansion pipeline.",
                stat: "500+ GW target",
              },
              {
                title: "Infrastructure & Construction",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
                desc: "Smart cities, highways, logistics and real estate boom.",
                stat: "$1T+ pipeline",
              },
              {
                title: "Financial Services & Fintech",
                image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
                desc: "UPI-driven digital economy transforming financial systems.",
                stat: "1B+ monthly transactions",
              },
            ].map((sector, i) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >

                {/* IMAGE */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <span className="text-xs bg-[#081a42] text-white px-3 py-1 rounded-full">
                    {sector.stat}
                  </span>

                  <h3 className="font-semibold text-lg mt-3 group-hover:text-[#081a42] transition">
                    {sector.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {sector.desc}
                  </p>

                  <div className="mt-4 text-sm text-yellow-600 font-medium opacity-0 group-hover:opacity-100 transition">
                    Explore opportunity →
                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* INDIA VS GLOBAL MARKETS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Global Companies Choose India Over Other Markets
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="p-8 border rounded-xl">
              <h3 className="font-semibold text-lg mb-4">India Advantages</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Large domestic consumption base</li>
                <li>• Lower operating & labor costs</li>
                <li>• Strong IT + engineering talent pool</li>
                <li>• Government incentives & FDI reforms</li>
                <li>• Strategic Asia-Pacific location</li>
              </ul>
            </div>

            <div className="p-8 border rounded-xl">
              <h3 className="font-semibold text-lg mb-4">Compared to Other Markets</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Lower dependency on exports than China</li>
                <li>• Higher scalability than Southeast Asia</li>
                <li>• More cost-efficient than EU / US</li>
                <li>• Strong legal framework (common law system)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* AU CORPORATE STRATEGY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            How AU Corporate Supports Global Entry into India
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Market Entry Strategy & Feasibility Study",
              "Entity Setup (Subsidiary / LLP / JV / Branch)",
              "FEMA, RBI & Regulatory Compliance Advisory",
              "Tax Structuring & Transfer Pricing Support",
              "Accounting, Payroll & Compliance Management",
              "Ongoing Strategic Business Advisory",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 bg-white border rounded-lg hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700">✔ {item}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Why do foreign companies set up business in India?",
                a: "India combines a large and growing consumer market, a young and skilled English-speaking workforce, and an increasingly liberalized FDI regime — most sectors now permit up to 100% foreign investment under the automatic route, with no prior government approval required.",
              },
              {
                q: "Which entity type is best for a foreign company entering India?",
                a: "A wholly-owned Private Limited subsidiary is the most common choice for foreign companies planning genuine operations in India — it offers full commercial flexibility, limited liability, and access to the automatic FDI route in most sectors. Branch and liaison offices suit narrower, representative-only use cases and require specific RBI approval.",
              },
              {
                q: "How long does it take to set up a company in India as a foreign entity?",
                a: "Core incorporation (DSC, DIN, name reservation through Certificate of Incorporation) typically moves faster than most foreign parent companies expect — the real pacing factor is usually document authentication on the foreign parent's side (notarization and apostille), not the Indian filing itself.",
              },
              {
                q: "Can a foreign company own property in India?",
                a: "A wholly-owned Indian subsidiary, once incorporated, can own property in India like any other Indian company. Branch, liaison, and project offices can only do so with specific RBI approval, and liaison offices in particular face significant restrictions on any form of commercial activity.",
              },
              {
                q: "Does a foreign company need an Indian director?",
                a: "Yes — under the Companies Act, 2013, every Indian company, including a wholly-owned foreign subsidiary, must have at least one director who is both an Indian citizen and an Indian resident (defined as having stayed in India for more than 182 days in the previous financial year).",
              },
            ].map((item) => (
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
            mainEntity: [
              {
                "@type": "Question",
                name: "Why do foreign companies set up business in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "India combines a large and growing consumer market, a young and skilled English-speaking workforce, and an increasingly liberalized FDI regime — most sectors now permit up to 100% foreign investment under the automatic route, with no prior government approval required.",
                },
              },
              {
                "@type": "Question",
                name: "Which entity type is best for a foreign company entering India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A wholly-owned Private Limited subsidiary is the most common choice for foreign companies planning genuine operations in India — it offers full commercial flexibility, limited liability, and access to the automatic FDI route in most sectors. Branch and liaison offices suit narrower, representative-only use cases and require specific RBI approval.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to set up a company in India as a foreign entity?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Core incorporation (DSC, DIN, name reservation through Certificate of Incorporation) typically moves faster than most foreign parent companies expect — the real pacing factor is usually document authentication on the foreign parent's side (notarization and apostille), not the Indian filing itself.",
                },
              },
              {
                "@type": "Question",
                name: "Can a foreign company own property in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A wholly-owned Indian subsidiary, once incorporated, can own property in India like any other Indian company. Branch, liaison, and project offices can only do so with specific RBI approval, and liaison offices in particular face significant restrictions on any form of commercial activity.",
                },
              },
              {
                "@type": "Question",
                name: "Does a foreign company need an Indian director?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — under the Companies Act, 2013, every Indian company, including a wholly-owned foreign subsidiary, must have at least one director who is both an Indian citizen and an Indian resident (defined as having stayed in India for more than 182 days in the previous financial year).",
                },
              },
            ],
          }),
        }}
      />

      {/* CTA */}
      <section className="bg-[#081a42] text-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Explore India's Opportunity?
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-6">
          From strategy to execution, we help global businesses enter India with confidence,
          compliance, and clarity.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Schedule Consultation
        </Link>
      </section>

    </div>
  )
}