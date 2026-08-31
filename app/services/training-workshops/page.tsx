import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"

export default function Page() {
  const services = [
    {
      title: "Compliances Training under Corporate & Tax Laws",
      desc: "Providing training on corporate and tax compliance to ensure regulatory adherence.",
    },
    {
      title: "Project Management Training",
      desc: "Equipping teams with project planning, execution, and monitoring skills.",
    },
    {
      title: "Internal Audit Training",
      desc: "Enhancing audit capabilities with practical internal audit methodologies.",
    },
    {
      title: "SME - IPO Readiness",
      desc: "Preparing SMEs for IPO with structured guidance on compliance and processes.",
    },
    {
      title: "Anti-Money Laundering (AML)",
      desc: "Training on AML frameworks to identify and prevent financial crimes.",
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
        <p className="text-gray-600 mb-10 max-w-3xl">
          Our Training & Workshop programs are designed to equip professionals
          and organizations with practical knowledge in compliance, finance,
          audit, and business management, ensuring improved efficiency and
          regulatory adherence.
        </p>

        {/* CLICK NAV */}
        <div className="flex gap-4 mb-12">
          <a
            href="#services"
            className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            Our Services
          </a>
        </div>

        {/* SECTION */}
        <section aria-labelledby="services">
        <Reveal className="mb-20">
          <h2 id="services" className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
            Our Services
          </h2>

          {/* GRID */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((item) => (
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

      </div>
    </div>
  )
}
