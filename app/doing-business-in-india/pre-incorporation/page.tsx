import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"

const planningAreas = [
  {
    title: "Market feasibility and entry strategy",
    desc: "Before structuring anything, the real question is whether India demand justifies a local entity at all right now, or whether a lighter entry mode (a distributor, an EOR hire, a liaison presence) makes more sense until demand is proven. Feasibility work at this stage is about sizing the addressable market realistically against India-specific factors — regional demand concentration, price sensitivity relative to your home market, and how long a typical India sales cycle actually runs for your category — rather than extrapolating from global growth numbers.",
  },
  {
    title: "Competitive and industry landscape",
    desc: "India's competitive landscape in most sectors includes a mix of large domestic conglomerates, well-funded local startups, and other foreign entrants who arrived earlier — understanding which of these you're actually competing with (and on what: price, service quality, speed of delivery, local relationships) shapes both your entry timeline and how much initial investment the business case can support.",
  },
  {
    title: "FDI eligibility and sectoral conditions",
    desc: "Most sectors permit 100% foreign investment under the Automatic Route with no prior approval, but a shorter list of sensitive sectors requires Government Route (DPIIT) approval before the investment can proceed — and a handful of sectors carry sector-specific conditions (minimum capitalization, phased investment caps, local sourcing requirements) even under the Automatic Route. Confirming which bucket your sector falls into is a planning-stage question, not something to discover mid-incorporation. See our full breakdown on the ",
    link: { href: "/india-business-setup/fdi-channels", label: "FDI automatic and government approval routes" },
    tail: " page.",
  },
  {
    title: "Tax-efficient structure design",
    desc: "Structuring decisions made before incorporation — the parent-subsidiary capital structure, how the DTAA between India and the parent's home jurisdiction will apply to future repatriation, and how intercompany transactions (management fees, royalties, cost allocations) will be priced — are far cheaper to design correctly upfront than to unwind after the entity is running and generating actual related-party transaction history that a transfer pricing audit could examine.",
  },
  {
    title: "Joint ventures and local partnerships",
    desc: "Where a JV or strategic local partnership is the right entry route (common in sectors with local-sourcing conditions, or where distribution relationships matter more than manufacturing capability), the planning-stage work is largely commercial and legal: identifying the right partner, agreeing governance and exit terms in the shareholders' agreement before capital moves, and confirming the JV structure itself doesn't trigger different FDI conditions than a standalone WOS would.",
  },
  {
    title: "Growth and expansion roadmap",
    desc: "The entity structure and initial capitalization that make sense for a pilot operation testing India demand look different from what a company planning to scale to multiple states and a large local team needs from day one — planning roughly where the business is headed over 2-3 years, not just the first transaction, avoids a structure that has to be unwound and rebuilt once growth actually happens.",
  },
  {
    title: "Location and industrial zone strategy",
    desc: "Where the entity is physically based affects state-level compliance (labour law implementation varies by state), access to sector-specific incentives (SEZs, industrial corridors, and state-level PLI-adjacent schemes), and practical factors like proximity to customers, suppliers, or a specific talent pool — this is a real strategic input to structuring, not just an operational detail to settle later.",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-5xl mx-auto">
      <Breadcrumb items={[{ label: "Doing Business in India", href: "/doing-business-in-india" }, { label: "Pre-Incorporation" }]} />

      <h1 className="text-4xl font-bold text-[#081a42] mb-6">
        Pre-Incorporation Planning
      </h1>

      <p className="mb-10 text-gray-700 leading-relaxed">
        The decisions made before you incorporate — entity structure, tax and repatriation design, sector eligibility, and how the business is positioned to grow — are materially cheaper to get right upfront than to fix after the entity is live and has real transaction history. This page covers the strategic planning questions; once you&apos;ve worked through them, our{" "}
        <Link href="/india-business-setup/company-formation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
          complete company registration guide
        </Link>{" "}
        covers the actual step-by-step incorporation process.
      </p>

      <div className="grid gap-6">
        {planningAreas.map((s) => (
          <div
            key={s.title}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg text-[#081a42] mb-2">
              {s.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {s.desc}
              {s.link && (
                <Link href={s.link.href} className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  {s.link.label}
                </Link>
              )}
              {s.tail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 border border-gray-200 rounded-xl bg-gray-50">
        <p className="text-gray-700">
          Still weighing whether incorporation is the right move at all?{" "}
          <Link href="/doing-business-in-india/incorporation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            See our incorporation decision guide →
          </Link>
        </p>
      </div>
    </div>
  )
}
