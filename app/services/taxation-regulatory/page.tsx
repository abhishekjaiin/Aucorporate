import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"

export default function Page() {
  const sections = [
    {
      title: "Direct Taxation",
      id: "direct",
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
          title: "GST APA (Advance Pricing Arrangement)",
          desc: "Assisting in GST-related pricing arrangements for tax certainty and dispute avoidance.",
        },
      ],
    },

    {
      title: "Regulatory Services",
      id: "regulatory",
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

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Taxation & Regulatory" }]} />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Taxation & Regulatory Services
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mb-10">
          We provide end-to-end taxation and regulatory advisory services to help businesses stay compliant, optimize tax structures, and navigate complex legal frameworks efficiently.
        </p>

        {/* CLICK NAV */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {sections.map((sec) => (
            <a
              key={sec.title}
              href={`#${sec.id}`}
              className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
            >
              {sec.title}
            </a>
          ))}
        </div>

        {/* SECTIONS */}
        {sections.map((section, i) => (
          <section key={section.title} aria-labelledby={section.id}>
          <Reveal delay={i * 0.1} className="mb-20">
            <h2 id={section.id} className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
              {section.title}
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {section.items.map((item) => (
                <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
              ))}

            </div>
          </Reveal>
          </section>
        ))}

      </div>
    </div>
  )
}