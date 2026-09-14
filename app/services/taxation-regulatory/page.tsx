import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { ClickableReveal } from "@/components/ClickableReveal"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"
import { Percent, Layers, FileCheck2, CalendarClock } from "lucide-react"

export default function Page() {
  const sections = [
    {
      title: "Direct Taxation",
      id: "direct",
      intro:
        "An Indian subsidiary is taxed as a domestic company regardless of how much of its capital is foreign-owned. Most newly incorporated subsidiaries opt into the concessional 22% corporate tax rate (plus applicable surcharge and cess) rather than the standard 25% or 30% rate that otherwise applies depending on turnover; a narrower 15% rate is available to new manufacturing companies meeting specific conditions — see our banking & taxation guide for the full rate breakdown. A foreign company operating through a branch or project office rather than an incorporated subsidiary is taxed differently, and generally less favourably, than an incorporated subsidiary — one of several reasons most foreign parents structure India entry as a wholly owned subsidiary. All of this now sits under the Income Tax Act, 2025, which replaced the 1961 Act for periods beginning on or after 1 April 2026. Our direct tax practice covers:",
      items: [
        {
          title: "International Taxation Litigation & Advisory",
          desc: "Providing advisory and litigation support on cross-border taxation matters.",
        },
        {
          title: "Advance Pricing Agreement (APA)",
          desc: "Assisting in APA planning and execution to ensure transfer pricing certainty.",
        },
        {
          title: "Transfer Pricing Services",
          desc: "Ensuring compliance with transfer pricing regulations and documentation requirements.",
        },
        {
          title: "Corporate Tax",
          desc: "Advising on corporate tax planning, structuring, and compliance strategies.",
        },
        {
          title: "Income Tax Litigation Handling & Advisory",
          desc: "Managing tax disputes and providing strategic litigation support.",
        },
        {
          title: "Expat Taxation & Return Filing",
          desc: "Managing tax compliance and filings for expatriates working in India.",
        },
        {
          title: "DTAA Advisory & Compliance",
          desc: "Advising on Double Taxation Avoidance Agreements for cross-border tax efficiency.",
        },
        {
          title: "Direct Tax Return & Compliance",
          desc: "Ensuring accurate filing and compliance of all direct tax obligations.",
        },
      ],
    },

    {
      title: "Goods & Service Tax (GST)",
      id: "gst",
      intro:
        "GST registration is triggered once aggregate turnover crosses the applicable threshold — Rs 20 lakh for a services business in most states (lower in a handful of special-category states) and Rs 40 lakh for a goods-only supplier — not by incorporation or foreign ownership itself. Many foreign-owned entities register voluntarily well before crossing that threshold, particularly where the Indian entity bills only its overseas parent, since registration allows filing a Letter of Undertaking (LUT) and invoicing exports as zero-rated rather than charging GST. Once registered, GST compliance becomes a recurring monthly (or quarterly, under the QRMP scheme for smaller filers) obligation: GSTR-1 and GSTR-3B returns, e-invoicing once aggregate turnover crosses Rs 5 crore in any financial year since 2017-18, and the GSTR-9 annual return once turnover exceeds Rs 2 crore (with the GSTR-9C reconciliation statement layering in above Rs 5 crore). A cross-border point worth flagging early: payments an Indian entity makes to its foreign parent for services — a management fee, a software licence, a group recharge — are generally treated as an import of services and taxed under the reverse charge mechanism (RCM), with the Indian entity itself liable to pay the GST rather than the parent charging it.",
      items: [
        {
          title: "GST Registration",
          desc: "Assisting businesses with GST registration, start to finish.",
        },
        {
          title: "GST Compliance",
          desc: "Ensuring timely filing and compliance with GST laws and regulations.",
        },
        {
          title: "GST Refund",
          desc: "Managing refund claims and resolving GST demands effectively.",
        },
        {
          title: "GST E-Invoice and E-Way Bill",
          desc: "Implementing and managing e-invoicing and e-way bill systems.",
        },
        {
          title: "GST Health Check-Up",
          desc: "Reviewing GST compliance to identify risks and improvement areas.",
        },
        {
          title: "GST Annual Return and GST Audit",
          desc: "Preparing and filing GST returns and conducting audits for compliance.",
        },

        // ✅ NEW ADDITIONS
        {
          title: "GST Litigation",
          desc: "Handling GST disputes, assessments, and appeal proceedings before authorities.",
        },
        {
          title: "GST Advisory & Opinion",
          desc: "Providing expert advisory and legal opinions on complex GST matters.",
        },
        {
          title: "GST Advance Ruling (AAR)",
          desc: "Applying to the GST Authority for Advance Ruling for binding certainty on the tax treatment of a proposed transaction before it's undertaken, reducing later dispute risk.",
        },
      ],
    },

    {
      title: "Regulatory Services",
      id: "regulatory",
      intro:
        "Beyond direct tax and GST, a foreign-owned entity's regulatory footprint depends on what it actually does in India. FEMA compliance applies to any entity holding foreign investment on its books — see our regulatory compliance framework for the fuller RBI reporting sequence (Form FC-GPR, Form FC-TRS, the annual FLA return) this triggers. FCRA registration is relevant only to NGOs and not-for-profits receiving foreign contributions, not to commercial subsidiaries. FSSAI registration or licensing is triggered by handling, manufacturing or selling food products; MSME (Udyam) registration is optional but unlocks specific government benefits and payment-protection provisions for smaller entities; and an Import-Export Code (IEC) from the DGFT is a one-time registration required before any cross-border trade in goods can begin. Trade licenses, by contrast, are issued at the municipal/local-body level and depend on the specific business activity and location.",
      items: [
        {
          title: "FEMA Compliance Services",
          desc: "Ensuring compliance with foreign exchange regulations under FEMA.",
        },
        {
          title: "FCRA Registration",
          desc: "Assisting NGOs and entities with FCRA registration and compliance.",
        },
        {
          title: "Trade License Registration",
          desc: "Facilitating trade license approvals for business operations.",
        },
        {
          title: "FSSAI Registration",
          desc: "Obtaining food safety licenses for businesses in the food sector.",
        },
        {
          title: "MSME Registration",
          desc: "Registering businesses under MSME to avail government benefits.",
        },
        {
          title: "Import-Export Code (IEC) Registration",
          desc: "Assisting in obtaining IEC for international trade operations.",
        },
      ],
    },

    {
      title: "Secretarial & Legal",
      id: "legal",
      intro:
        "Corporate secretarial compliance runs on its own calendar under the Companies Act, 2013 — Form AOC-4 (financial statements) and Form MGT-7/MGT-7A (annual return) filed with the Registrar of Companies every year following the Annual General Meeting, alongside the statutory audit our accounting & assurance practice supports directly. SEBI compliance applies only to listed entities or those raising capital from the public markets — most foreign-owned subsidiaries won't encounter it unless a listing or public fundraise is specifically planned. IPR registration (trademarks, patents, designs) isn't a mandatory compliance item, but is worth doing early: foreign companies that already hold trademark or patent protection at home can extend it into India through the Madrid Protocol or the Patent Cooperation Treaty rather than filing entirely fresh applications. Labour law and contract management round out the ongoing legal workstream alongside tax and secretarial filings.",
      items: [
        {
          title: "Company Incorporation & Statutory Registrations",
          desc: "Providing end-to-end company incorporation and regulatory registrations.",
        },
        {
          title: "Corporate Secretarial Services",
          desc: "Managing compliance with corporate laws and secretarial requirements.",
        },
        {
          title: "SEBI Compliance Services",
          desc: "Ensuring compliance with SEBI regulations for listed entities.",
        },
        {
          title: "Intellectual Property Rights (IPR) Services",
          desc: "Protecting intellectual property through registration and advisory services.",
        },
        {
          title: "Labour Law Services",
          desc: "Ensuring compliance with labour laws and employment regulations.",
        },
        {
          title: "Contract Management Services",
          desc: "Drafting, reviewing, and managing business contracts effectively.",
        },
        {
          title: "Corporate Legal Advisory Services",
          desc: "Providing legal advisory for corporate and business matters.",
        },
      ],
    },
  ]

  const taxCalendar = [
    {
      title: "Monthly",
      desc: "TDS deducted from vendor and salary payments generally deposited by the 7th of the following month; GST returns (GSTR-1/GSTR-3B, or quarterly under the QRMP scheme for smaller filers) filed on a monthly or quarterly cadence depending on turnover.",
    },
    {
      title: "Quarterly",
      desc: "TDS returns (Form 24Q/26Q); advance tax instalments due 15 June, 15 September, 15 December and 15 March, cumulative to 100% of the year's estimated tax liability by the final instalment.",
    },
    {
      title: "Annually",
      desc: "Income tax return and tax audit report (Form 3CD) where the turnover threshold under Section 44AB is crossed; Form 3CEB transfer pricing certification — due 31 October, with the ITR itself due 30 November — wherever international related-party transactions exist; GSTR-9 annual return above Rs 2 crore GST turnover (GSTR-9C above Rs 5 crore); AOC-4 and MGT-7/7A filed with the RoC following the AGM; and the FLA return to RBI for as long as the entity carries foreign investment on its books.",
    },
  ]

  const transferPricingPoints = [
    {
      title: "Form 3CEB — No Minimum Threshold",
      desc: "An accountant's report in Form 3CEB is required for every international transaction with an associated enterprise, however small — there's no de minimis exemption from the filing requirement itself.",
    },
    {
      title: "Rule 10D Documentation — Rs 1 Crore Threshold",
      desc: "Detailed transfer pricing documentation under Rule 10D becomes mandatory once the aggregate value of a company's international transactions exceeds Rs 1 crore in the financial year — a separate, higher bar from the Form 3CEB filing requirement itself.",
    },
    {
      title: "Safe Harbour Rules (2026) for IT, ITeS, KPO & Contract R&D",
      desc: "The Finance Act 2026 consolidated software development, ITeS, KPO and contract R&D into a single Safe Harbour category at a unified 15.5% margin on operating expenses, raised the eligibility threshold from Rs 300 crore to Rs 2,000 crore, and set a 5-year block period once opted in — automated, rule-based approval with no case-by-case Transfer Pricing Officer review. See our full breakdown of the 2026 Safe Harbour Rules.",
    },
    {
      title: "Advance Pricing Agreement (APA)",
      desc: "A separate route to binding, multi-year certainty on transfer pricing, negotiated directly with the CBDT rather than relying on Safe Harbour margins — generally worth exploring where transaction volumes or complexity make an audit-by-audit transfer pricing defence costly.",
    },
    {
      title: "DTAA Relief on Repatriation",
      desc: "Where India has a Double Taxation Avoidance Agreement with the parent's home jurisdiction, that treaty typically caps withholding tax on dividends, royalties and fees for technical services below the domestic rate — claimable with a Tax Residency Certificate and, in most cases, Form 10F. See our banking & taxation guide for the full repatriation and withholding mechanics.",
    },
  ]

  const faqs = [
    {
      q: "What is the corporate tax rate for a foreign-owned company in India?",
      a: "An Indian subsidiary is taxed as a domestic company regardless of how much of its capital is foreign-owned. Most newly incorporated subsidiaries opt into the concessional 22% rate (plus applicable surcharge and cess); the standard rate for a domestic company that doesn't opt in is 25% or 30% depending on turnover, and a narrower 15% concessional rate applies to new manufacturing companies meeting specific conditions. A foreign company operating through a branch rather than an incorporated subsidiary is taxed differently, and generally less favourably — one reason most foreign parents choose the subsidiary route. See our banking & taxation guide for the full rate breakdown.",
    },
    {
      q: "Is GST registration mandatory for every India entity from day one?",
      a: "No — GST registration is triggered once aggregate turnover crosses the applicable threshold (Rs 20 lakh for services in most states, Rs 40 lakh for goods), not by incorporation or foreign ownership itself. Many foreign-owned entities register voluntarily earlier anyway, particularly where the Indian entity invoices only its overseas parent, since registration allows filing a Letter of Undertaking and invoicing exports as zero-rated.",
    },
    {
      q: "What is the reverse charge mechanism (RCM), and why does it matter for payments to our foreign parent?",
      a: "Under RCM, the recipient of a supply — rather than the supplier — is liable to pay GST directly to the government. Payments an Indian entity makes to its foreign parent for services (a management fee, a software licence, a group recharge) are generally treated as an import of services and fall under RCM, meaning the Indian entity itself has to account for and pay the GST, and can generally then claim input tax credit on it, subject to the usual eligibility conditions.",
    },
    {
      q: "Do we need to file Form 3CEB even for small transactions with our parent company?",
      a: "Yes. Form 3CEB has no minimum-value threshold — it's required for every international transaction with an associated enterprise, however small. The Rs 1 crore threshold that's often mentioned alongside it applies to a separate, higher-bar requirement: maintaining detailed transfer pricing documentation under Rule 10D, not the Form 3CEB filing itself.",
    },
    {
      q: "What happens if we miss a GST, TDS or income tax filing deadline?",
      a: "A missed deadline generally attracts late fees and interest on the amount due, and — depending on the filing — can also affect input tax credit eligibility or trigger closer scrutiny on subsequent filings. It compounds rather than resets: a company that's chronically late on GST or TDS filings tends to accumulate a compliance history that makes future assessments and refunds slower, which is why we build the recurring filing calendar into the engagement from month one rather than reacting to individual deadlines.",
    },
    {
      q: "Is FCRA registration relevant to our commercial subsidiary?",
      a: "No — FCRA (Foreign Contribution Regulation Act) registration applies to NGOs, societies and not-for-profits that receive foreign contributions or donations, not to a commercial, revenue-generating subsidiary receiving FDI. A commercial entity's foreign capital is reported through FEMA/RBI channels (Form FC-GPR and the annual FLA return) rather than FCRA.",
    },
    {
      q: "What's the difference between MSME (Udyam) registration and an Import-Export Code (IEC)?",
      a: "They serve entirely different purposes and aren't substitutes for each other. MSME/Udyam registration is an optional classification based on investment and turnover that unlocks specific government benefits, such as payment-protection provisions and priority-sector considerations. An IEC, issued by the DGFT, is a one-time registration that's mandatory before any cross-border trade in goods can begin, regardless of the entity's size or MSME status.",
    },
    {
      q: "How does AU Corporate coordinate tax, GST, FEMA and secretarial compliance for one entity?",
      a: "These four workstreams draw on the same underlying transactions and the same books, so we run them through one coordinated team rather than four separate vendors reconciling after the fact — the same structure our accounting & assurance practice uses for the books that feed into these filings, and the same team that handles company registration and FEMA/RBI reporting from incorporation onward.",
    },
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Taxation & Regulatory" }]} />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Taxation & Regulatory Services in India
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mb-8 leading-relaxed">
          For a foreign-owned company operating in India, taxation and regulatory compliance isn&apos;t one filing — it&apos;s four largely independent workstreams running in parallel for the life of the entity: direct tax (corporate income tax, TDS, tax audit, transfer pricing), GST (registration, returns, e-invoicing, refunds), sector- and activity-specific regulatory registrations (FEMA, FCRA, FSSAI, MSME, IEC), and corporate secretarial and legal compliance under the Companies Act. We provide end-to-end advisory and compliance execution across all four, built around what a foreign parent&apos;s Indian subsidiary actually has to file, when, and under which law — not a generic checklist. The sections below cover what each workstream involves, the recurring compliance calendar behind it, and how transfer pricing and DTAA relief specifically affect a foreign-owned entity.
        </p>

        {/* QUICK FACTS */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-10">
          {[
            { icon: Percent, value: "22%", label: "Concessional Corporate Tax Rate" },
            { icon: Layers, value: "Rs 20L / 40L", label: "GST Threshold (Services / Goods)" },
            { icon: FileCheck2, value: "Rs 1 Cr", label: "TP Documentation Threshold (Rule 10D)" },
            { icon: CalendarClock, value: "Apr - Mar", label: "Standard Compliance Year" },
          ].map((stat) => (
            <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center cursor-pointer">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
              <div className="text-base font-bold text-[#081a42]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </ClickableReveal>
          ))}
        </div>

        {/* CLICK NAV */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {[...sections.map((sec) => ({ href: `#${sec.id}`, label: sec.title })),
            { href: "#calendar", label: "Compliance Calendar" },
            { href: "#transfer-pricing", label: "Transfer Pricing & DTAA" },
            { href: "#faqs", label: "FAQs" },
          ].map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
            >
              {nav.label}
            </a>
          ))}
        </div>

        {/* SECTIONS */}
        {sections.map((section, i) => (
          <section key={section.title} aria-labelledby={section.id}>
          <Reveal delay={i * 0.1} className="mb-20">
            <h2 id={section.id} className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
              {section.title}
            </h2>

            <p className="text-gray-600 max-w-4xl leading-relaxed mb-8">{section.intro}</p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {section.items.map((item) => (
                <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
              ))}

            </div>
          </Reveal>
          </section>
        ))}

        {/* COMPLIANCE CALENDAR */}
        <section aria-labelledby="calendar">
        <Reveal className="mb-20">
          <h2 id="calendar" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            The Tax & Regulatory Compliance Calendar
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed mb-8">
            Direct tax, GST and secretarial filings run on independent but overlapping schedules. This sits alongside the one-time, incorporation-linked filings (FC-GPR, the annual FLA return) covered in our <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">company registration compliance roadmap</Link>, and the books-driven audit calendar covered in full on our <Link href="/services/accounting-assurance" className="text-yellow-700 font-semibold hover:underline">accounting &amp; assurance</Link> page:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {taxCalendar.map((item) => (
              <ClickableReveal key={item.title} className="rounded-xl border bg-white p-6 cursor-pointer h-full flex flex-col">
                <h3 className="font-bold text-base mb-2 text-[#081a42]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </ClickableReveal>
            ))}
          </div>
        </Reveal>
        </section>

        {/* TRANSFER PRICING & DTAA */}
        <section aria-labelledby="transfer-pricing">
        <Reveal className="mb-20">
          <h2 id="transfer-pricing" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            Transfer Pricing, Safe Harbour & DTAA Relief
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed mb-8">
            Almost every foreign-owned Indian entity has international related-party transactions with its parent — management fees, software licences, cost recharges, intercompany services — and those transactions carry their own compliance regime, separate from ordinary corporate tax and GST:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {transferPricingPoints.map((item) => (
              <ClickableReveal key={item.title} className="rounded-xl border bg-white p-6 cursor-pointer h-full flex flex-col">
                <h3 className="font-bold text-base mb-2 text-[#081a42]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </ClickableReveal>
            ))}
          </div>
          <p className="mt-8 text-gray-600 max-w-4xl leading-relaxed">
            If your India entity is a Global Capability Centre or software/ITeS delivery operation, the 2026 Safe Harbour changes are worth reading in full — see our <Link href="/blog/india-safe-harbour-rules-2026" className="text-yellow-700 font-semibold hover:underline">dedicated breakdown of the 15.5% margin and Rs 2,000 crore threshold</Link>, or our <Link href="/gcc-setup-india" className="text-yellow-700 font-semibold hover:underline">GCC setup guide</Link> for the broader entity and operational picture.
          </p>
        </Reveal>
        </section>

        {/* WHY AU CORPORATE */}
        <section aria-labelledby="why-au-corporate">
        <Reveal className="mb-20">
          <h2 id="why-au-corporate" className="text-2xl font-semibold mb-4 text-[#081a42] scroll-mt-24">
            Why AU Corporate, Not Four Separate Vendors
          </h2>
          <p className="text-gray-600 max-w-4xl leading-relaxed">
            Direct tax, GST, FEMA/regulatory and corporate secretarial compliance all draw on the same underlying transactions and the same books — a management fee to the parent is simultaneously a transfer pricing question, a GST reverse-charge question, and potentially an FEMA reporting question, depending on how it&apos;s structured. Running these through four disconnected vendors means the same fact pattern gets re-explained four times, often with gaps between them. Our taxation and regulatory practice sits inside the same firm that handles <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">company registration</Link> and <Link href="/services/accounting-assurance" className="text-yellow-700 font-semibold hover:underline">accounting &amp; assurance</Link> for the same clients, so the compliance calendar, the books, and the filings are built from one coordinated view of the entity rather than reconciled after the fact.
          </p>
        </Reveal>
        </section>

        {/* MID-PAGE LEAD FORM */}
        <div className="mb-20">
          <LeadForm title="Need Tax or Regulatory Compliance Support for Your India Entity?" description="Tell us about your Indian entity's direct tax, GST, FEMA or secretarial compliance needs and our taxation & regulatory team will get in touch." />
        </div>

        {/* FAQ */}
        <section aria-labelledby="faqs">
        <Reveal className="mb-20">
          <h2 id="faqs" className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </Reveal>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        {/* RELATED */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          <Link href="/india-business-setup/company-formation" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
            <h3 className="mb-2 font-semibold text-[#081a42]">Company Registration</h3>
            <p className="text-sm text-gray-600">Incorporation and the post-incorporation compliance roadmap</p>
          </Link>
          <Link href="/india-business-setup/banking-taxation" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
            <h3 className="mb-2 font-semibold text-[#081a42]">Banking &amp; Taxation</h3>
            <p className="text-sm text-gray-600">Bank account sequencing, GST and corporate tax rates in detail</p>
          </Link>
          <Link href="/india-business-setup/regulatory-compliance" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
            <h3 className="mb-2 font-semibold text-[#081a42]">Regulatory Compliance</h3>
            <p className="text-sm text-gray-600">The full six-regime compliance framework beyond tax and GST</p>
          </Link>
          <Link href="/services/accounting-assurance" className="rounded-lg border p-6 transition hover:shadow-md bg-white">
            <h3 className="mb-2 font-semibold text-[#081a42]">Accounting &amp; Assurance</h3>
            <p className="text-sm text-gray-600">The books and statutory audit behind every filing on this page</p>
          </Link>
        </div>

      </div>
    </div>
  )
}
