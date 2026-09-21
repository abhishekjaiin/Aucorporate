import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { ClickableReveal } from "@/components/ClickableReveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"
import { RelatedResources } from "@/components/RelatedResources"

import {
  ArrowRight,
  CheckCircle2,
  Scale,
  Shield,
  Clock,
  Gavel,
  Globe,
} from "lucide-react"

export default function ArbitrationServicesPage() {
  const quickFacts = [
    { icon: Scale, value: "1996, as amended", label: "Arbitration and Conciliation Act — governing law" },
    { icon: Clock, value: "12 months", label: "Section 29A time limit for a domestic award, +6 months by consent" },
    { icon: Gavel, value: "Ss. 9 & 17", label: "Interim relief from court or the arbitral tribunal" },
    { icon: Globe, value: "Ss. 44-52", label: "Part II — enforcement of New York Convention foreign awards" },
  ]

  const navLinks = [
    { href: "#services", label: "Our Services" },
    { href: "#understanding-arbitration", label: "Arbitration in India" },
    { href: "#approach", label: "Our Approach" },
    { href: "#faqs", label: "FAQs" },
  ]

  const arbitrationBasics = [
    {
      title: "Governing Law",
      desc: "Arbitration seated in India is governed by the Arbitration and Conciliation Act, 1996, as amended in 2015, 2019 and 2021. A draft Arbitration and Conciliation (Amendment) Bill, 2024, released for public consultation, remains under review and is not yet in force.",
    },
    {
      title: "Seat vs. Venue",
      desc: "The seat fixes which country's courts hold supervisory jurisdiction and which procedural law applies; the venue is only where hearings physically happen. Since PASL Wind Solutions v. GE Power Conversion (2021), even two Indian parties may validly choose a foreign seat.",
    },
    {
      title: "Interim Relief",
      desc: "Parties can seek urgent interim measures from a court under Section 9, or from the arbitral tribunal itself under Section 17 once constituted — tribunal orders are enforceable in the same manner as a court order.",
    },
    {
      title: "Award Timelines",
      desc: "Domestic tribunals must render an award within 12 months of completion of pleadings under Section 29A, extendable by 6 months by consent, with any further extension requiring a court application.",
    },
    {
      title: "Enforcing a Domestic Award",
      desc: "A domestic award may be challenged, on narrow grounds, under Section 34, and is enforced as a decree of the court under Section 36 — filing a Section 34 challenge does not by itself stay enforcement.",
    },
    {
      title: "Enforcing a Foreign Award",
      desc: "Foreign awards from a New York Convention country notified as a reciprocating territory are enforced under Part II (Sections 44-52), subject to the narrow refusal grounds in Section 48.",
    },
  ]

  const approachSteps = [
    {
      title: "1. Case & Document Review",
      desc: "We review the underlying contract, correspondence, invoices and ledgers alongside your legal counsel to understand the financial dimensions of the claim or defence.",
    },
    {
      title: "2. Quantification & Analysis",
      desc: "Losses, damages, delayed-payment interest and account reconciliations are quantified using a documented, defensible methodology.",
    },
    {
      title: "3. Expert Report Preparation",
      desc: "Findings are set out in an independent expert report or claim statement built to withstand cross-examination and tribunal scrutiny.",
    },
    {
      title: "4. Hearing & Coordination Support",
      desc: "We remain available through the hearing — briefing your legal team, responding to opposing experts, and providing oral testimony where required.",
    },
  ]

  const faqs = [
    {
      q: "What is the difference between the seat and the venue of an arbitration?",
      a: "The seat of arbitration determines which country's courts have supervisory jurisdiction over the arbitration and which procedural law applies; the venue is simply where hearings are physically held. Under the 'seat as centre of gravity' principle the Supreme Court has applied since Bharat Aluminium Co. v. Kaiser Aluminium Technical Services (BALCO), an arbitration clause should always specify the seat explicitly rather than leaving it to be inferred from the venue.",
    },
    {
      q: "Can two Indian companies choose a foreign seat of arbitration?",
      a: "Yes. In PASL Wind Solutions Pvt. Ltd. v. GE Power Conversion India Pvt. Ltd. (2021), the Supreme Court held that party autonomy under the Arbitration and Conciliation Act, 1996 allows even two Indian companies to choose a foreign seat, and an award from that arbitration is enforced in India as a foreign award under Part II of the Act.",
    },
    {
      q: "How is urgent interim relief obtained during an arbitration seated in India?",
      a: "Before the tribunal is constituted, a party can approach a court directly under Section 9. Once the tribunal is constituted, Section 17 gives it the same power to grant interim measures, and — since the 2015 amendment — courts generally decline to entertain a Section 9 application if the tribunal can grant equally efficacious relief. A tribunal's Section 17 order is enforceable in the same manner as a court order.",
    },
    {
      q: "How long does an arbitration in India take to reach an award?",
      a: "For a domestic arbitration, Section 29A requires the tribunal to render its award within 12 months of the completion of pleadings, extendable by up to 6 months with the parties' consent; any extension beyond that requires a court application and is granted only on sufficient cause. International commercial arbitration seated in India, and arbitrations conducted under institutional rules, follow their own procedural timelines.",
    },
    {
      q: "Is a foreign arbitral award automatically enforceable in India?",
      a: "No. A foreign award — one made in a country notified by the Indian government as a reciprocating territory under the New York Convention — must be brought before an Indian court under Part II (Sections 44-52) of the Act. The court examines only the narrow grounds for refusal listed in Section 48 (such as incapacity, an invalid arbitration agreement, improper notice, or a conflict with India's public policy); once satisfied, the award is deemed a decree of that court.",
    },
    {
      q: "Does challenging a domestic award under Section 34 automatically stop its enforcement?",
      a: "No. Since the 2015 amendment, merely filing a Section 34 application to set aside a domestic award does not by itself stay enforcement under Section 36 — the party challenging the award must separately apply for, and be granted, a stay, which courts frequently condition on depositing part or all of the awarded amount.",
    },
    {
      q: "Do you represent us as legal counsel in the arbitration?",
      a: "No — AU Corporate is not a law firm and does not appear as counsel of record. We work alongside your appointed legal counsel, whether Indian or international, providing the financial claim preparation, quantification and expert witness support described on this page.",
    },
    {
      q: "Should a cross-border contract with an Indian counterparty specify institutional or ad hoc arbitration?",
      a: "Most foreign companies contracting with Indian counterparties now specify institutional arbitration — under bodies such as the Mumbai Centre for International Arbitration (MCIA), the Indian Council of Arbitration (ICA), or an international institution such as the SIAC — for the procedural certainty and administrative support institutional rules provide over ad hoc arbitration. MCIA's updated 2025 Arbitration Rules, for example, added joinder of non-parties, expedited early dismissal and emergency arbitrator procedures broadly in line with major global institutions.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
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

      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Arbitration Services" }]} />
      </div>

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

      {/* ================= QUICK FACTS & NAV ================= */}
      <section className="pt-16 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-8">
            {quickFacts.map((stat) => (
              <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center cursor-pointer">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
                <div className="text-base font-bold text-[#081a42]">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </ClickableReveal>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            {navLinks.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
              >
                {nav.label}
              </a>
            ))}
          </div>

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
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <Reveal>
            <Image
              src="/images/pexels-pixabay-164606.jpg"
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
              src="/images/pexels-followingnyc-16094899.jpg"
              alt="Legal consultation and court proceedings"
              width={600}
              height={450}
              loading="lazy"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </Reveal>

        </div>
      </section>

      {/* ================= UNDERSTANDING ARBITRATION IN INDIA ================= */}
      <section id="understanding-arbitration" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          <Reveal>
            <h2 className="text-3xl font-bold mb-4">
              Understanding Arbitration in India
            </h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
              Foreign companies weighing arbitration against an Indian counterparty, or already inside one, usually need the same regulatory groundwork before the financial work begins. Here is what the Arbitration and Conciliation Act, 1996 actually sets out — and where AU Corporate&rsquo;s role as your financial and expert-witness partner sits alongside your legal counsel.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {arbitrationBasics.map((item) => (
                <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
              ))}
            </div>

            <div className="max-w-4xl bg-white border-l-4 border-yellow-400 rounded-xl p-6 shadow-sm mb-4">
              <h3 className="font-bold text-[#081a42] mb-2">Institutional vs. Ad Hoc Arbitration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Institutions such as the Mumbai Centre for International Arbitration (MCIA) — whose 2025 Arbitration Rules added joinder of non-parties, expedited early dismissal of manifestly unmeritorious claims, and emergency arbitrator procedures — alongside the Indian Council of Arbitration (ICA) and other domestic and international institutions, are increasingly specified by foreign companies over ad hoc arbitration for the procedural certainty institutional rules provide. Where institutional rules allow for one, an India-seated emergency arbitrator&rsquo;s order is treated as an order under Section 17 and is enforceable in the same manner as a tribunal order, following the Supreme Court&rsquo;s 2021 ruling in Amazon.com NV Investment Holdings v. Future Retail Ltd. — though this recognition currently extends only to India-seated emergency arbitration, not to foreign-seated emergency awards.
              </p>
            </div>

            <div className="max-w-4xl bg-white border-l-4 border-yellow-400 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[#081a42] mb-2">Where AU Corporate Fits In</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                AU Corporate is not a law firm and does not appear as counsel of record in arbitration proceedings. We work alongside your appointed legal counsel — Indian or international — providing the claim preparation, quantification and expert witness services described above, regardless of whether the arbitration is ad hoc or institutional, domestically or internationally seated.
              </p>
            </div>

          </Reveal>

        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section id="approach" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          <Reveal>
            <h2 className="text-3xl font-bold mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
              Every engagement is scoped to the specific claim, but the underlying process is consistent across arbitration matters:
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approachSteps.map((step) => (
                <ClickableInfoCard key={step.title} title={step.title} desc={step.desc} />
              ))}
            </div>
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
              <ClickableReveal key={point} className="flex gap-3 cursor-pointer">
                <Shield className="text-yellow-500 mt-1 shrink-0" />
                <div>
                  <p>{point}</p>
                  <p className="mt-1 text-xs font-semibold text-yellow-600">Talk to an expert &rarr;</p>
                </div>
              </ClickableReveal>
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

      {/* ================= MID-PAGE LEAD FORM ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <LeadForm
            title="Facing an Arbitration or Commercial Dispute in India?"
            description="Tell us about the claim, dispute or arbitration you're involved in and our arbitration support team will get in touch to discuss financial analysis and expert witness support."
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faqs" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "Forensic & Risk Management Services",
                href: "/services/risk-management",
                description: "Investigation of financial irregularities, fraud reviews, dispute analysis and risk assessments.",
              },
              {
                label: "Transaction Advisory Services",
                href: "/services/transaction-advisory",
                description: "Financial due diligence, valuation support and transaction reviews for businesses and investors.",
              },
              {
                label: "Accounting & Assurance Services",
                href: "/services/accounting-assurance",
                description: "Financial statement review, accounting analysis and evidence-backed financial reporting.",
              },
              {
                label: "Arbitration Enforcement in India",
                href: "/blog/arbitration-enforcement-india",
                description: "What happens after an award is passed: a case study on enforcing arbitral awards against government entities.",
              },
              {
                label: "Construction Arbitration in India",
                href: "/blog/construction-arbitration-india",
                description: "Strategic lessons from a recent High Court ruling on evidence strategy in construction-sector arbitration.",
              },
            ]}
          />
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
