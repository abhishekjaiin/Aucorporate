import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"

import {
  ArrowRight,
  CheckCircle2,
  Scale,
  FileText,
  Shield,
} from "lucide-react"

export default function ArbitrationServicesPage() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Arbitration Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arbitration services assist parties involved in commercial and financial disputes by providing independent financial analysis and expert support.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Expert Witness support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We assist with expert reports, valuation analysis, damages assessment and financial opinions.",
      },
    },
    {
      "@type": "Question",
      name: "Which disputes can benefit from Arbitration Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contract disputes, partnership disputes, delayed payment claims, shareholder disputes and valuation disagreements.",
      },
    },
  ],
}
  return (
    <div className="min-h-screen pt-20">
      <Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

      {/* ================= HERO ================= */}
      <section className="relative py-24 min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/pexels-amar-20624924.jpg"
            alt="Vintage world map, representing cross-border arbitration and dispute resolution"
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
              Arbitration Services
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-white/80 max-w-2xl">
              Structured financial expertise to support claims, disputes, and arbitration proceedings with clarity and precision.
            </p>
          </Reveal>

          <Reveal delay={0.4} className="mt-6">
            <Button asChild className="bg-yellow-400 text-black">
              <Link href="/contact">
                Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          <Reveal>
            <p className="text-gray-700 leading-relaxed mb-6">
              Disputes involving contracts, accounts, valuations, delayed payments, partnerships, commercial transactions, and financial claims often require clear financial analysis and structured presentation of facts.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Arbitration Services are designed to support businesses, professionals, and legal teams with accurate financial expertise during arbitration proceedings.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-700 leading-relaxed">
              We provide independent, professional, and well-documented assistance to help clients present claims, defend positions, and strengthen their case with credible financial evidence.
            </p>
          </Reveal>

        </div>
      </section>

      {/* ================= SERVICE 1 ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <Reveal>
            <Image
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80"
              alt="Dispute resolution and negotiation process"
              width={600}
              height={450}
              loading="lazy"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold mb-4">
              1. Arbitration Claim Preparation
            </h2>

            <p className="text-gray-600 mb-4">
              A well-prepared claim is critical in any arbitration matter. We assist clients in organizing financial records, quantifying losses, and preparing a clear claim supported by facts and calculations.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Review of contracts, invoices, ledgers",
                "Quantification of claims & damages",
                "Interest & delayed payment analysis",
                "Reconciliation of accounts",
                "Claim statements & schedules",
                "Breach-related financial impact",
                "Response to counterclaims",
                "Coordination with legal counsel",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="text-yellow-500 w-4 h-4 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

          </Reveal>

        </div>
      </section>

      {/* ================= SERVICE 2 ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <Reveal>
            <h2 className="text-3xl font-bold mb-4">
              2. Arbitration Expert Witness Services
            </h2>

            <p className="text-gray-600 mb-4">
              Financial disputes often require expert opinion on accounting, valuation, damages, or commercial losses.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Independent expert reports",
                "Loss of profit & damages",
                "Business & asset valuation",
                "Review of opposing claims",
                "Transaction analysis",
                "Accounting opinions",
                "Hearing assistance",
                "Oral testimony support",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="text-yellow-500 w-4 h-4 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

          </Reveal>

          <Reveal delay={0.1}>
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
              alt="Legal consultation and court proceedings"
              width={600}
              height={450}
              loading="lazy"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </Reveal>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">

            {[
              "Strong expertise in accounting & finance",
              "Practical dispute understanding",
              "Independent & objective approach",
              "Evidence-backed financial analysis",
              "Confidential handling",
              "Timely execution",
            ].map((point) => (
              <div key={point} className="flex gap-3">
                <Shield className="text-yellow-500 mt-1" />
                <p>{point}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-10">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Manufacturing",
              "Real Estate & Construction",
              "Trading & Distribution",
              "Professional Services",
              "Infrastructure",
              "Partnership Disputes",
              "MSMEs",
              "Growing Businesses",
            ].map((item) => (
              <Link key={item} href="/contact#inquiry-form" className="block p-4 border rounded-lg hover:shadow-md hover:border-yellow-400 transition">
                {item}
              </Link>
            ))}

          </div>

        </div>
      </section>

{/* FAQ SECTION */}
<section className="py-24 bg-white">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">
      {[
        {
          q: "What are Arbitration Services?",
          a: "Arbitration services provide independent financial analysis, claim preparation, dispute support and expert assistance during arbitration proceedings.",
        },
        {
          q: "Do you provide Expert Witness support?",
          a: "Yes. We assist with expert reports, valuation reviews, damages calculations and financial opinions for arbitration matters.",
        },
        {
          q: "Which disputes commonly require arbitration support?",
          a: "Contract disputes, shareholder disputes, partnership disputes, delayed payment claims, valuation disagreements and commercial disputes.",
        },
        {
          q: "Can you quantify damages and losses?",
          a: "Yes. We assist clients in assessing financial losses, lost profits, damages and claim calculations using documented financial evidence.",
        },
      ].map((faq) => (
        <Link key={faq.q} href="/contact#inquiry-form" className="block border rounded-xl p-6 hover:shadow-lg hover:border-yellow-400 transition">
          <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
          <p className="text-gray-600">{faq.a}</p>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* RELATED SERVICES */}
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-12">
      Related Services
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <Link
        href="/services/risk-management"
        className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
      >
        <h3 className="font-semibold mb-2">
          Forensic & Risk Management Services
        </h3>

        <p className="text-sm text-gray-600">
          Investigation of financial irregularities, fraud reviews, dispute analysis and risk assessments.
        </p>
      </Link>

      <Link
        href="/services/transaction-advisory"
        className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
      >
        <h3 className="font-semibold mb-2">
          Transaction Advisory Services
        </h3>

        <p className="text-sm text-gray-600">
          Financial due diligence, valuation support and transaction reviews for businesses and investors.
        </p>
      </Link>

      <Link
        href="/services/accounting-assurance"
        className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
      >
        <h3 className="font-semibold mb-2">
          Accounting & Assurance Services
        </h3>

        <p className="text-sm text-gray-600">
          Financial statement review, accounting analysis and evidence-backed financial reporting.
        </p>
      </Link>

    </div>

  </div>
</section>

{/* WHY FINANCIAL EXPERTISE MATTERS */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-4">

    <h2 className="text-3xl font-bold mb-8">
      Financial Expertise in Arbitration Proceedings
    </h2>

    <div className="space-y-5 text-gray-700 leading-relaxed">

      <p>
        Arbitration proceedings often involve complex financial matters that require
        detailed analysis and objective evaluation. Financial experts play an important
        role in helping arbitrators understand commercial transactions, accounting
        records, valuation methodologies and damages calculations.
      </p>

      <p>
        Businesses involved in contractual disputes, shareholder disagreements,
        partnership conflicts and delayed payment claims frequently require support
        in quantifying losses and presenting evidence-backed financial conclusions.
      </p>

      <p>
        Professional arbitration support may include claim preparation, expert
        reports, business valuation, damages assessment, reconciliation of accounts,
        review of opposing claims and assistance during hearings.
      </p>

      <p>
        At AU Corporate, our team assists businesses, legal professionals and
        stakeholders with independent financial analysis designed to support
        arbitration proceedings with clarity, accuracy and credibility.
      </p>

    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">
          Confidential & Professional Support
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We work closely with clients and legal professionals while maintaining strict confidentiality and high professional standards.
        </p>

        <Button asChild className="bg-yellow-400 text-black">
          <Link href="/contact">
            Speak to an Expert <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

    </div>
  )
}
