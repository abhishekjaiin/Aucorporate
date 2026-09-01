import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"

export default function Page() {
  const section = {
    title: "Transaction Advisory Services",
    id: "services",
    items: [
      {
        title: "Due Diligence Services",
        desc: "Conducting comprehensive due diligence to assess financial, legal, and operational risks.",
      },
      {
        title: "Merger & Acquisition Advisory",
        desc: "Providing strategic advisory for mergers, acquisitions, and business restructuring.",
      },
      {
        title: "Business and Asset Valuations",
        desc: "Delivering accurate valuation of businesses and assets for informed decision-making.",
      },
      {
        title: "Debts & Equity Financing Solutions",
        desc: "Structuring optimal debt and equity financing solutions to support growth.",
      },
      {
        title: "Seed and Venture Capital (VC) Funding",
        desc: "Advising startups and businesses on fundraising from seed and venture capital investors.",
      },
      {
        title: "Strategic Corporate Restructuring",
        desc: "Designing restructuring strategies to improve efficiency and financial performance.",
      },
      {
        title: "IPO Listing & Consulting - SME",
        desc: "Assisting businesses in SME IPO listing with end-to-end advisory support.",
      },
      {
        title: "IPO Listing & Consulting - Main Board",
        desc: "Providing complete advisory for main board IPO listing and capital market readiness.",
      },
    ],
  }

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Transaction Advisory" }]} />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Transaction Advisory Services
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mb-10">
          Our transaction advisory services support businesses through complex financial decisions including mergers, fundraising, restructuring, and capital market transactions.
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
