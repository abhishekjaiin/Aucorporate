import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"

const routesToMarket = [
  {
    title: "Incorporate now (Wholly Owned Subsidiary)",
    desc: "Makes sense once you have committed revenue or a signed customer, need to invoice and contract in your own name in India, or need to hire a local team beyond a handful of people. Gives full operating flexibility and the automatic FDI route in most sectors, at the cost of taking on ongoing compliance from day one.",
  },
  {
    title: "Distributor or reseller partnership",
    desc: "A lower-commitment way to test India demand without setting up a local entity — you sell through an existing India-based partner rather than directly. Faster to start, but you get less pricing and customer-relationship control, and no direct India-side legal presence.",
  },
  {
    title: "Liaison or project office",
    desc: "Useful if you need a India-based presence for market research or coordination, or a specific time-bound project, but aren't ready to generate India-side revenue. Lighter compliance than a subsidiary, but restricted activities and RBI approval-gated.",
  },
  {
    title: "Hiring via an Employer of Record (EOR)",
    desc: "Lets you put one or two people on the ground in India — often the fastest way to validate a hiring need — without incorporating at all. Doesn't work once you need to contract with Indian customers or hold assets locally, and gets expensive as headcount grows beyond a small team.",
  },
]

const timingMistakes = [
  {
    title: "Incorporating before you've validated demand",
    desc: "A subsidiary starts generating compliance obligations (annual filings, statutory audit, FEMA reporting) whether or not the business is actually moving — incorporating on optimism rather than a signed customer or a committed hire is the most common way companies end up paying for compliance on an entity that isn't doing much yet.",
  },
  {
    title: "Waiting too long once the signal is real",
    desc: "The flip side: once you have a real reason to incorporate (a customer needs an India-registered invoicing entity, or you're hiring beyond what an EOR can reasonably support), delaying adds real cost — lost deals that require local contracting, and a slower path to opening a bank account and running payroll properly.",
  },
  {
    title: "Not planning around India's fiscal year-end",
    desc: "India's financial year runs 1 April to 31 March. Incorporating a few weeks before year-end means a short first year with a disproportionate share of first-year compliance overhead relative to how long the entity has actually been operating — timing incorporation to land cleanly within a financial year, where the business case allows it, avoids that.",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-5xl mx-auto">
      <Breadcrumb items={[{ label: "Doing Business in India", href: "/doing-business-in-india" }, { label: "Should You Incorporate?" }]} />

      <h1 className="text-4xl font-bold text-[#081a42] mb-6">
        Should You Incorporate in India Now?
      </h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Incorporating a company in India is a mechanical process once you&apos;ve decided to do it — the harder question most foreign companies actually face is <em>whether</em> and <em>when</em> incorporation is the right move, versus a lighter-weight route to market. This page is about that decision. If you&apos;ve already decided and just need the step-by-step registration process, our{" "}
        <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
          complete company registration guide
        </Link>{" "}
        covers entity types, the SPICe+ filing, documents, and realistic timelines in full.
      </p>

      <h2 className="text-2xl font-bold text-[#081a42] mt-12 mb-4">Incorporation vs. Other Routes to Market</h2>
      <p className="mb-8 text-gray-700 leading-relaxed">
        Incorporation isn&apos;t the only way to have a presence in India, and it isn&apos;t always the right starting point. Here&apos;s how it compares to the other routes companies actually use:
      </p>
      <div className="grid gap-6 mb-12">
        {routesToMarket.map((r) => (
          <div key={r.title} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-[#081a42] mb-2">{r.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#081a42] mt-12 mb-4">Common Timing Mistakes</h2>
      <div className="grid gap-6 mb-12">
        {timingMistakes.map((m) => (
          <div key={m.title} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-[#081a42] mb-2">{m.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 border border-gray-200 rounded-xl bg-gray-50">
        <p className="text-gray-700">
          Decided incorporation is the right move?{" "}
          <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            See the full company registration process →
          </Link>
        </p>
      </div>
    </div>
  )
}
