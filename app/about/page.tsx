import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { FaqAccordion } from "@/components/FaqAccordion"
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard"
import { caseStudies } from "@/lib/case-studies"
import { AUTHOR_LINKEDIN, OFFICES, OFFICE_ADDRESSES_SCHEMA } from "@/lib/site"

const CAL_LINK = "https://cal.com/abhishek-jaiin-ybbklq/30min"

// Plain, quotable facts. Each one is also stated on the page it links to;
// keep them in step when fees, timelines or offices change.
const facts: [string, React.ReactNode][] = [
  ["Firm", "AU Corporate, a CA-led professional services firm"],
  ["Founded", "2016"],
  ["Led by", <>Abhishek Jaiin, Chartered Accountant (ICAI membership no. 544646)</>],
  ["Head office", OFFICES.newDelhi.lines],
  ["Second office", OFFICES.gurugram.lines],
  [
    "Team",
    "Chartered Accountants, CPAs, Company Secretaries, Cost Accountants, lawyers, industry specialists, ex-bankers and MBAs",
  ],
  [
    "Clients",
    "Foreign companies setting up and running subsidiaries, branch, liaison and project offices in India, and Indian businesses needing the same regulatory support",
  ],
  [
    "Parent companies served",
    "More than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE",
  ],
  ["Subsidiary registration fee", "USD 750 to 1,000, all-inclusive, with a fixed quote before work starts"],
  ["Monthly accounting", "From USD 240 per month"],
  ["Typical incorporation time", "4 to 6 weeks from signed documents to the FC-GPR filing"],
  ["Contact", "+91-9999010513 · partner@theaucorp.com"],
]

const services: { title: string; text: string; href: string }[] = [
  {
    title: "India Subsidiary Registration",
    text: "Wholly owned subsidiaries and joint ventures: name approval, SPICe+, PAN and TAN, bank account, share issue and FC-GPR.",
    href: "/india-subsidiary-registration",
  },
  {
    title: "Accounting, Reporting and Audit Support",
    text: "Monthly books, reporting packs in US GAAP or IFRS for the parent, and statutory audit coordination.",
    href: "/accounting-reporting-audit-support",
  },
  {
    title: "FEMA and RBI Compliance",
    text: "FC-GPR, FC-TRS, the annual FLA return, ECB reporting, repatriation, and compounding of past defaults.",
    href: "/fema-rbi-compliance",
  },
  {
    title: "Corporate Tax, GST and Transfer Pricing",
    text: "Tax returns, advance tax, TDS, GST, tax audit, transfer pricing studies and tax disputes.",
    href: "/corporate-tax-gst-transfer-pricing",
  },
  {
    title: "Secretarial and ROC Compliance",
    text: "Board meetings, AGM, annual ROC filings, director KYC, registers, and resident director support.",
    href: "/secretarial-roc-compliance",
  },
  {
    title: "Payroll and Expat Services",
    text: "Payroll, PF and ESI, employment contracts, and tax and social security for expats in India.",
    href: "/payroll-expat-services",
  },
  {
    title: "Branch, Liaison and Project Offices",
    text: "RBI approval, registration and the yearly compliance of offices of foreign companies.",
    href: "/branch-office-registration",
  },
  {
    title: "Global Capability Centres",
    text: "Setting up and running captive centres, including safe harbour transfer pricing.",
    href: "/gcc-setup-india",
  },
  {
    title: "Arbitration and Disputes",
    text: "Arbitration, enforcement of awards and commercial dispute support in India.",
    href: "/arbitration-services",
  },
]

const countries: { label: string; href?: string }[] = [
  { label: "USA", href: "/blog/usa-to-india" },
  { label: "UK", href: "/blog/uk-to-india" },
  { label: "Australia", href: "/blog/australia-to-india" },
  { label: "Japan", href: "/blog/japan-to-india" },
  { label: "Singapore", href: "/blog/singapore-to-india" },
  { label: "Germany" },
  { label: "China" },
  { label: "Hong Kong" },
  { label: "Spain" },
  { label: "France" },
  { label: "UAE" },
]

const principles = [
  {
    title: "Tax, law and banking in one team",
    text: "Chartered Accountants, Company Secretaries, lawyers and ex-bankers work in-house, so work is not handed off to another firm.",
  },
  {
    title: "Reporting the parent understands",
    text: "Monthly packs in US GAAP or IFRS, with both sides of intercompany transactions reconciled.",
  },
  {
    title: "One named point of contact",
    text: "Each subsidiary has a named manager who knows its filings, deadlines and history.",
  },
  {
    title: "Written, fixed quotes",
    text: "Fees are confirmed in writing before work starts, with no hourly billing for routine compliance.",
  },
]

const faqs = [
  {
    q: "What is AU Corporate?",
    a: "AU Corporate is a CA-led professional services firm in New Delhi and Gurugram, founded in 2016. It helps foreign companies set up and run businesses in India: subsidiary registration, accounting, FEMA and RBI compliance, tax and transfer pricing, company secretarial work and payroll.",
  },
  {
    q: "Who leads AU Corporate?",
    a: "AU Corporate is led by Abhishek Jaiin, a Chartered Accountant (ICAI membership no. 544646). He advises foreign parent companies on entity structuring, FEMA and RBI compliance, transfer pricing and cross-border tax.",
  },
  {
    q: "Where is AU Corporate located?",
    a: `AU Corporate's head office is at ${OFFICES.newDelhi.lines}. It also has an office at ${OFFICES.gurugram.lines}. Clients outside India work with the firm remotely.`,
  },
  {
    q: "Which countries does AU Corporate work with?",
    a: "AU Corporate has served parent companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. It publishes detailed India entry guides for US, UK, Australian, Japanese and Singapore companies.",
  },
  {
    q: "How much does AU Corporate charge to set up an Indian subsidiary?",
    a: "Registering an Indian subsidiary with AU Corporate costs USD 750 to 1,000, all-inclusive, for a subsidiary with INR 10 lakh share capital. Monthly accounting starts at USD 240 per month. A fixed written quote is confirmed before work starts.",
  },
  {
    q: "Does a foreign company need to visit India to work with AU Corporate?",
    a: "No. Incorporation and ongoing compliance run online, using apostilled documents and digital signatures. AU Corporate works with clients by email and video call across time zones.",
  },
  {
    q: "Can AU Corporate help outside India?",
    a: "For Hong Kong, Singapore and Mainland China, AU Corporate works with its partner UniproAsia, so clients can coordinate India and these markets through one relationship.",
  },
]

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.theaucorp.com/about#webpage",
      url: "https://www.theaucorp.com/about",
      name: "About AU Corporate",
      about: { "@id": "https://www.theaucorp.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": "https://www.theaucorp.com/#organization",
      name: "AU Corporate",
      url: "https://www.theaucorp.com",
      logo: "https://www.theaucorp.com/logo.png",
      foundingDate: "2016",
      description:
        "CA-led professional services firm in New Delhi and Gurugram that helps foreign companies set up and run subsidiaries in India: incorporation, accounting, FEMA and RBI compliance, tax, transfer pricing, secretarial compliance and payroll.",
      telephone: "+91-9999010513",
      email: "partner@theaucorp.com",
      address: OFFICE_ADDRESSES_SCHEMA,
      founder: { "@id": "https://www.theaucorp.com/#abhishek-jaiin" },
      areaServed: "IN",
      knowsAbout: [
        "India subsidiary registration",
        "FEMA and RBI compliance",
        "Transfer pricing in India",
        "Indian corporate tax and GST",
        "Company secretarial and ROC compliance",
        "Payroll and expat tax in India",
        "Global Capability Centres in India",
      ],
      sameAs: [
        "https://www.linkedin.com/company/a-u-corporate/",
        "https://www.instagram.com/aucorporate/",
        "https://www.facebook.com/profile.php?id=61593816719018",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.theaucorp.com/#abhishek-jaiin",
      name: "Abhishek Jaiin",
      jobTitle: "Chartered Accountant",
      worksFor: { "@id": "https://www.theaucorp.com/#organization" },
      image: "https://www.theaucorp.com/images/authors/abhishek-jaiin.jpg",
      sameAs: [AUTHOR_LINKEDIN],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Chartered Accountant, ICAI membership no. 544646",
        recognizedBy: { "@type": "Organization", name: "The Institute of Chartered Accountants of India" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Breadcrumb items={[{ label: "About" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#081a42] to-[#0d2a5c] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">About AU Corporate</span>
          <h1 className="mt-3 mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            A CA-Led Firm That Sets Up and Runs Indian Subsidiaries for Foreign Companies
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/85">
            AU Corporate is a professional services firm in New Delhi and Gurugram, founded in 2016 and led by Chartered
            Accountant Abhishek Jaiin. We help foreign parent companies incorporate in India and then handle the
            subsidiary&apos;s accounting, FEMA and RBI filings, tax, transfer pricing, company secretarial work and payroll,
            with one team accountable for all of it.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 font-semibold text-[#081a42] hover:opacity-90"
            >
              Book a 30-minute call <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/contact" className="rounded-lg border border-white/40 px-5 py-3 font-semibold hover:bg-white/10">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-[#081a42] sm:text-3xl">AU Corporate at a Glance</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Key facts about AU Corporate</caption>
              <tbody className="divide-y">
                {facts.map(([k, v]) => (
                  <tr key={k} className="odd:bg-gray-50">
                    <th scope="row" className="w-1/3 px-4 py-3 text-left align-top font-semibold text-[#081a42]">
                      {k}
                    </th>
                    <td className="px-4 py-3 align-top text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-2xl font-bold text-[#081a42] sm:text-3xl">What We Do</h2>
          <p className="mb-8 max-w-3xl text-gray-600">
            The full life of a foreign-owned Indian entity, from incorporation to annual compliance, restructuring and
            exit. Each service has its own page with the process, deadlines and fees.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col rounded-xl border bg-white p-5 transition hover:border-gold/60 hover:shadow-lg"
              >
                <h3 className="mb-1.5 font-semibold text-[#081a42] group-hover:underline">{s.title}</h3>
                <p className="flex-1 text-sm text-gray-600">{s.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 md:grid-cols-[180px_1fr]">
          <Image
            src="/images/authors/abhishek-jaiin.jpg"
            alt="Abhishek Jaiin, Chartered Accountant and head of AU Corporate"
            width={180}
            height={180}
            className="h-40 w-40 rounded-full object-cover md:h-44 md:w-44"
          />
          <div>
            <h2 className="mb-1 text-2xl font-bold text-[#081a42] sm:text-3xl">Who Leads AU Corporate</h2>
            <p className="mb-3 font-semibold text-gray-800">Abhishek Jaiin, Chartered Accountant (ICAI membership no. 544646)</p>
            <p className="mb-4 leading-relaxed text-gray-600">
              Abhishek Jaiin leads AU Corporate and advises foreign parent companies on entity structuring, FEMA and RBI
              compliance, transfer pricing and cross-border tax. He writes and reviews the firm&apos;s India entry guides
              and service pages.
            </p>
            <a
              href={AUTHOR_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#081a42] hover:underline"
            >
              Abhishek Jaiin on LinkedIn <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-gray-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#081a42] sm:text-3xl">How We Work</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl border bg-white p-5">
                <h3 className="mb-1.5 font-semibold text-[#081a42]">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-gray-600">
            <strong className="text-gray-800">Our mission</strong> is to give clients tailored, practical solutions with
            ethical practice, independence and confidentiality, and to build long-term relationships rather than one-off
            engagements.
          </p>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-2xl font-bold text-[#081a42] sm:text-3xl">Who We Work With</h2>
          <p className="mb-8 max-w-3xl text-gray-600">
            Parent companies from more than 10 countries, from start-ups opening a first Indian subsidiary to groups
            running captive centres. We publish full India entry guides for companies from the USA, UK, Australia, Japan
            and Singapore.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {countries.map((c) =>
              c.href ? (
                <Link
                  key={c.label}
                  href={c.href}
                  className="flex items-center justify-center gap-2 rounded-xl border bg-white p-3 text-center text-sm font-semibold text-[#081a42] transition hover:border-gold/60 hover:shadow"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {c.label} guide
                </Link>
              ) : (
                <span
                  key={c.label}
                  className="flex items-center justify-center gap-2 rounded-xl border bg-white p-3 text-center text-sm font-medium text-gray-600"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-gray-300" aria-hidden="true" />
                  {c.label}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      {caseStudies.length > 0 && (
        <section className="bg-gray-100 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-2xl font-bold text-[#081a42] sm:text-3xl">Recent Work</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.slice(0, 3).map((c) => (
                <CaseStudyCard key={c.slug} study={c} />
              ))}
            </div>
            <p className="mt-6">
              <Link href="/case-studies" className="font-semibold text-[#081a42] hover:underline">
                All case studies →
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* OFFICES */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-[#081a42] sm:text-3xl">Our Offices</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.values(OFFICES).map((o) => (
              <address key={o.label} className="rounded-xl border p-5 not-italic">
                <p className="mb-1 font-semibold text-[#081a42]">{o.label}</p>
                <p className="text-gray-600">{o.lines}</p>
              </address>
            ))}
          </div>
          <p className="mt-4 text-gray-600">
            Phone <a href="tel:+919999010513" className="font-semibold text-[#081a42] hover:underline">+91-9999010513</a> ·
            Email{" "}
            <a href="mailto:partner@theaucorp.com" className="font-semibold text-[#081a42] hover:underline">
              partner@theaucorp.com
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-[#081a42] sm:text-3xl">Questions About AU Corporate</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-[#081a42] sm:text-3xl">Planning Your India Entry?</h2>
        <p className="mx-auto mb-8 max-w-xl text-gray-600">
          Tell us where your parent company is and what you need in India. We reply with a recommended structure and a
          fixed quote.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-[#081a42] hover:opacity-90"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  )
}
