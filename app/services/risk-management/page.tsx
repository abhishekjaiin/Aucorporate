import Image from "next/image"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"

export default function RiskManagementPage() {
  const sections = [
    {
      title: "Risk Management Services",
      id: "erm",
      items: [
        {
          title: "Enterprise Risk Management (ERM)",
          desc: "Identifying, assessing, and mitigating enterprise-wide risks aligned with business strategy.",
        },
        {
          title: "Internal Control Framework",
          desc: "Designing and implementing robust internal control systems for operational efficiency.",
        },
        {
          title: "Risk Assessment & Gap Analysis",
          desc: "Evaluating risk exposure and identifying gaps in controls and compliance.",
        },
        {
          title: "Process Improvement & SOP Design",
          desc: "Optimizing business processes with structured SOPs to enhance efficiency and control.",
        },
      ],
    },

    {
      title: "Forensic Services",
      id: "forensic",
      items: [
        {
          title: "Fraud Investigation",
          desc: "In-depth investigation into suspected fraud and financial misconduct.",
        },
        {
          title: "Forensic Audit",
          desc: "Audit procedures to uncover irregularities and financial discrepancies.",
        },
        {
          title: "Litigation Support",
          desc: "Expert reporting and support for legal disputes and proceedings.",
        },
        {
          title: "Data Analytics & Fraud Detection",
          desc: "Using analytics to identify anomalies and fraud risks.",
        },
      ],
    },

    {
      title: "Special Audit & Review",
      id: "audit",
      items: [
        {
          title: "Internal Audit",
          desc: "Independent evaluation of internal processes and governance.",
        },
        {
          title: "Compliance Audit",
          desc: "Ensuring adherence to statutory and regulatory requirements.",
        },
        {
          title: "Operational Audit",
          desc: "Assessing efficiency and effectiveness of business operations.",
        },
        {
          title: "Due Diligence Review",
          desc: "Comprehensive review for investments, mergers, and acquisitions.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Risk Management" }]} />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Risk Management Services
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mb-10">
          We help organizations identify, assess, and mitigate risks through structured frameworks, forensic insights, and audit-driven assurance.
        </p>

        {/* NAV BUTTONS */}
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

        {/* OPTIONAL HERO IMAGE (like Tax page feel) */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Risk Management"
            width={1200}
            height={500}
            className="w-full h-[300px] object-cover"
          />
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
                <div
                  key={item.title}
                  className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  <h3 className="font-semibold text-lg mb-3 text-[#081a42] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>

          </Reveal>
          </section>
        ))}

      </div>
    </div>
  )
}