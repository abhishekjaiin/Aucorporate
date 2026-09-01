import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"

export default function Page() {
  const section = {
    title: "Our Services",
    id: "services",
    items: [
      {
        title: "Accounting Services",
        desc: "Providing end-to-end accounting support to ensure accurate financial records and compliance.",
      },
      {
        title: "MIS Reporting for Management",
        desc: "Delivering insightful management reports to support strategic planning and decision-making.",
      },
      {
        title: "Financial Statement Preparation",
        desc: "Preparing reliable and compliant financial statements in accordance with applicable standards.",
      },
      {
        title: "IFRS & IND-AS Implementation",
        desc: "Assisting with the transition to IFRS and Ind-AS, and staying compliant with both once you're there.",
      },
      {
        title: "Monthly Payroll Management",
        desc: "End-to-end payroll processing ensuring timely salary disbursement, statutory compliance, and accuracy.",
      },
    ],
  }

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Accounting & Assurance" }]} />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Accounting & Assurance
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mb-10">
          We provide reliable accounting and assurance services to enhance
          financial transparency, strengthen governance, and support informed
          decision-making.
        </p>

        {/* CLICK NAV */}
        <div className="flex gap-4 mb-12 flex-wrap">
          <a
            href={`#${section.id}`}
            className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            Our Services
          </a>
        </div>

        {/* SECTION */}
        <section aria-labelledby={section.id}>
        <Reveal className="mb-20">
          <h2 id={section.id} className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
            Our Services
          </h2>

          {/* GRID */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {section.items.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}

          </div>
        </Reveal>
        </section>

      </div>
    </div>
  )
}
