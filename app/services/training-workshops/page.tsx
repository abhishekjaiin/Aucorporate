import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"

export default function Page() {
  const services = [
    {
      title: "Compliances Training under Corporate & Tax Laws",
      desc: "Structured sessions on the recurring compliance obligations that fall on any India-incorporated company — Companies Act, 2013 filing and board-process requirements, Income-tax Act return and TDS obligations, and GST return and reconciliation cycles. Especially useful for finance and secretarial staff at Indian subsidiaries of foreign parents who need to map global HQ policy onto India-specific statutory deadlines.",
    },
    {
      title: "Project Management Training",
      desc: "Practical project planning, execution, and monitoring skills for teams running cross-functional or cross-border projects, with an emphasis on the governance and reporting discipline Indian auditors and regulators expect a project — and the spend behind it — to be documented against.",
    },
    {
      title: "Internal Audit Training",
      desc: "Internal audit methodology, risk-based audit planning, and control-testing techniques, aimed at building an internal audit function capable of supporting statutory audit readiness and the audit-committee reporting most boards — Indian and overseas — now treat as standard governance practice.",
    },
    {
      title: "SME - IPO Readiness",
      desc: "A structured walkthrough of the compliance, financial reporting, and corporate governance standards a company needs in place before a listing — board composition, related-party disclosures, and financial statement readiness — for promoters and finance teams who want to close gaps early rather than under listing-timeline pressure.",
    },
    {
      title: "Anti-Money Laundering (AML)",
      desc: "AML and KYC frameworks relevant to regulated and non-regulated entities alike, covering red-flag identification, reporting obligations, and how AML controls typically get scrutinised during due diligence, statutory audit, or a funding round.",
    },
  ]

  const audiences = [
    {
      title: "Finance & Accounts Teams at India Subsidiaries",
      desc: "For finance staff at the India arm of a foreign parent who need a working grasp of India-specific statutory deadlines, filing formats, and audit expectations that sit alongside — and sometimes sit in tension with — global finance policies set at headquarters.",
    },
    {
      title: "HR & Compliance Officers",
      desc: "For HR and compliance staff responsible for statutory registers, board and secretarial support, and the internal controls that come up during due diligence, statutory audit, or a group-level compliance review.",
    },
    {
      title: "Promoters & Boards Preparing for a Listing",
      desc: "For SME promoters and board members who want governance and financial-reporting practices IPO-ready well ahead of time, rather than fixing gaps once a listing process is already underway.",
    },
    {
      title: "In-House Legal & Secretarial Teams",
      desc: "For legal and company secretarial staff who need a practical, working understanding of the corporate and tax law changes affecting board process, filings, and disclosures — not just the headline coverage of a new rule.",
    },
  ]

  const differentiators = [
    {
      title: "Trainers Who Do the Work, Not Just Teach It",
      desc: "Sessions are led by professionals from AU Corporate's own compliance, tax, audit, and secretarial practices, so the training reflects how the regulatory process actually runs in practice, not a licensed slide deck.",
    },
    {
      title: "Built Around Indian Law, Not a Global Template",
      desc: "Content is anchored in the statutes your India entity actually has to comply with — the Companies Act, 2013, Income-tax Act, CGST/IGST Acts, and FEMA, 1999 — rather than a global compliance-training template with an India module added on.",
    },
    {
      title: "Scoped to Your Team, Not a Fixed Public Course",
      desc: "Every session is scoped to the size, sector, and stage of your team — a five-person finance function at a newly incorporated subsidiary needs a different session than a governance refresher for an established board.",
    },
    {
      title: "Can Be Tied to Your Actual Compliance Calendar",
      desc: "For clients who already work with AU Corporate on regulatory compliance, tax, or audit, training can be timed around your entity's real filing calendar and past findings, rather than dropped in as a generic annual slot.",
    },
  ]

  const faqs = [
    {
      q: "Who is this training for — is it only for large companies?",
      a: "No. We work with finance, HR, secretarial, and audit teams at companies of every size — from a newly incorporated India subsidiary of a foreign parent with a handful of staff, to an established company preparing its board and finance function for an IPO.",
    },
    {
      q: "Is the training specific to foreign-owned companies, or relevant to any Indian company?",
      a: "Both. The underlying regulatory content — Companies Act, Income Tax, GST, FEMA, internal audit, AML — applies to any India-incorporated entity. We tailor emphasis and examples for foreign-owned subsidiaries when that's the audience, since their teams are often reconciling India-specific obligations against a global parent company's policies for the first time.",
    },
    {
      q: "What formats are these workshops delivered in?",
      a: "Sessions can be structured as in-person workshops, virtual sessions, or a blended format, and run as either a one-off session on a specific topic or a recurring series tied to your compliance calendar — the right format depends on your team's size, location, and the topic.",
    },
    {
      q: "How is this different from a generic corporate training provider?",
      a: "Generic training vendors typically license a standard curriculum, with delivery kept separate from any advisory work. Our sessions are delivered by the professionals within AU Corporate's compliance, tax, audit, and secretarial practices, so the content reflects live regulatory practice and can be scoped around issues specific to your entity rather than a fixed public course outline.",
    },
    {
      q: "Can training be combined with your other compliance or audit services?",
      a: "Yes. For clients who also use AU Corporate for regulatory compliance, tax, internal audit, or company secretarial support, training is often most useful when timed around your actual filing calendar or a specific gap identified during that ongoing work — though it's equally available as a standalone engagement.",
    },
    {
      q: "Do you offer these as individual workshops or only as a bundled program?",
      a: "Each area above — corporate and tax compliance, project management, internal audit, IPO readiness, and AML — can be booked as an individual workshop or combined into a broader program, depending on what your team needs.",
    },
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Training & Workshops" }]} />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Training & Workshops
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-4 max-w-3xl">
          Our Training & Workshop programs are designed to equip professionals
          and organizations with practical knowledge in compliance, finance,
          audit, and business management, ensuring improved efficiency and
          regulatory adherence.
        </p>
        <p className="text-gray-600 mb-10 max-w-3xl">
          These sessions are built for finance, HR, secretarial, and audit
          teams working inside Indian companies — including the India arm of
          a foreign parent, where staff often need to understand
          India-specific obligations that sit alongside, and sometimes
          conflict with, policies set by headquarters overseas. Sessions are
          led by AU Corporate's own compliance, tax, audit, and secretarial
          professionals, and are scoped to your team rather than delivered
          off a fixed public course outline.
        </p>

        {/* CLICK NAV */}
        <div className="flex gap-4 mb-12 flex-wrap">
          <a
            href="#services"
            className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            Our Services
          </a>
          <a
            href="#who-its-for"
            className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            Who It&apos;s For
          </a>
          <a
            href="#why-au-corporate"
            className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            Why AU Corporate
          </a>
          <a
            href="#faqs"
            className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            FAQs
          </a>
        </div>

        {/* SERVICES */}
        <section aria-labelledby="services">
        <Reveal className="mb-20">
          <h2 id="services" className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
            Our Services
          </h2>

          {/* GRID */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}

          </div>
        </Reveal>
        </section>

        {/* WHO IT'S FOR */}
        <section aria-labelledby="who-its-for">
        <Reveal className="mb-20">
          <h2 id="who-its-for" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            Who It&apos;s For
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            These programs are designed around the roles that actually carry
            India compliance responsibility inside a company, not a generic
            &ldquo;employee training&rdquo; audience.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </Reveal>
        </section>

        {/* WHY AU CORPORATE */}
        <section aria-labelledby="why-au-corporate">
        <Reveal className="mb-20">
          <h2 id="why-au-corporate" className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
            Why Train With AU Corporate
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </Reveal>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faqs">
        <Reveal className="mb-20">
          <h2 id="faqs" className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white border rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-[#081a42] mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </Reveal>
        </section>

        {/* RELATED SERVICES */}
        <Reveal className="mb-20">
          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <h2 className="text-lg font-semibold text-[#081a42] mb-4">
              Related Services
            </h2>
            <p className="text-sm text-gray-600 mb-4 max-w-3xl">
              Training pairs naturally with AU Corporate's ongoing advisory
              work — if your team needs more than a workshop, these practices
              cover the underlying compliance and reporting itself:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link href="/services/taxation-regulatory" className="text-gold-dark hover:underline">
                Taxation & Regulatory Services →
              </Link>
              <Link href="/services/accounting-assurance" className="text-gold-dark hover:underline">
                Accounting & Assurance →
              </Link>
              <Link href="/india-business-setup/regulatory-compliance" className="text-gold-dark hover:underline">
                India Regulatory Compliance →
              </Link>
              <Link href="/hr-services" className="text-gold-dark hover:underline">
                HR & Payroll Solutions →
              </Link>
            </div>
          </div>
        </Reveal>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </div>
  )
}
