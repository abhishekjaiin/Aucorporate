import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { InlineInquiryCTA } from "@/components/InlineInquiryCTA"
import { FaqAccordion } from "@/components/FaqAccordion"

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
    desc: "Most sectors permit 100% foreign investment under the Automatic Route with no prior approval, but a shorter list of sensitive sectors requires Government Route (DPIIT) approval before the investment can proceed — and a handful of sectors carry sector-specific conditions (minimum capitalization, phased investment caps, local sourcing requirements) even under the Automatic Route. These classifications aren't static — under DPIIT's Press Note No. 1 (2026 Series), issued after Parliament passed the Insurance Laws (Amendment) Act, 2025, insurance companies and intermediaries moved from a 74% cap to 100% FDI under the Automatic Route (subject to at least one of the chairperson, MD or CEO being a resident Indian citizen), effective February 2026. Confirming which bucket your sector falls into against the current DPIIT/FIFP position — not a remembered sector list — is a planning-stage question, not something to discover mid-incorporation. See our full breakdown on the ",
    link: { href: "/india-business-setup/fdi-channels", label: "FDI automatic and government approval routes" },
    tail: " page.",
  },
  {
    title: "Entity structure: choosing the incorporation vehicle",
    desc: "FDI eligibility tells you whether you can invest; it doesn't tell you which vehicle to invest through. A Wholly Owned Subsidiary structured as a Private Limited Company is the default for a foreign parent that wants full ownership, unrestricted revenue-generating activity, and a separate legal identity that limits liability — but a Branch Office, Liaison Office, or Project Office can be the better planning-stage choice where the mandate is narrower (a single contract, market research, or a non-revenue-generating presence) and lighter compliance matters more than operating flexibility. Getting this choice right before filing avoids winding up one structure to stand up another later. See our full ",
    link: { href: "/india-business-setup/company-formation", label: "entity types and company registration guide" },
    tail: " for the complete comparison across all eight structures.",
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
    title: "Documentation and approvals to line up before you file",
    desc: "The document set a foreign parent needs is more time-sensitive than it looks on a checklist: a board resolution authorising the India investment, the parent's Certificate of Incorporation and MOA/AOA, and identity and address proof for the proposed directors typically need to be notarised and, separately, apostilled in the parent's home jurisdiction — a process that runs through that country's own authorities and is the single most common reason an otherwise-ready filing slips by weeks. Deciding early who will serve as the resident director the Companies Act requires (a role that doesn't need to be a shareholder) avoids scrambling for a candidate once everything else is in place. See our ",
    link: { href: "/india-business-setup/company-formation", label: "documents required for company registration" },
    tail: " for the exact document list and the notarisation-versus-apostille distinction.",
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

const faqs = [
  {
    q: "How far ahead of filing should pre-incorporation planning start?",
    a: "There's no fixed rule, but the real pacing factor is usually notarising and apostilling the parent company's documents in its home jurisdiction, not anything on the India side — that alone can take several weeks depending on the country. Where the investment falls under the Government Approval Route rather than the Automatic Route, add another 8-12 weeks for DPIIT and sector-ministry review before filing can even happen. Starting entity structure, FDI eligibility, and document planning 6-8 weeks ahead of a target filing date is a reasonable working assumption for most Automatic Route entries.",
  },
  {
    q: "Do we need a registered office finalised before we start planning?",
    a: "No — a registered office (a virtual office, coworking address, or short-term lease) is needed at the filing stage, not the planning stage, so it doesn't need to be locked in before you've settled entity structure and FDI eligibility. It's worth deciding the state and city early anyway, though, since that choice affects which state-level labour law variations and incentive schemes apply, and some banks separately verify the address before opening a corporate account.",
  },
  {
    q: "What's actually different between pre-incorporation planning and the FDI approval process itself?",
    a: "Confirming which FDI route your sector falls under — Automatic or Government — is a planning-stage question you settle before you file anything. The Government Route approval itself, where it applies, is a separate DPIIT filing and review process that runs as part of getting the investment cleared, not before it — see our FDI automatic and government approval routes page for how that filing process actually works.",
  },
  {
    q: "Which pre-incorporation decisions are the most expensive to change after incorporation?",
    a: "Entity type conversion (moving from a Branch Office to a subsidiary, for instance) generally means winding one structure up and standing up another rather than a simple amendment. JV governance and exit terms set in the shareholders' agreement are similarly hard to renegotiate once capital has moved and the relationship is live. Capital structure and initial share allocation, by contrast, can usually be adjusted through a straightforward corporate action later — the planning-stage cost of getting a decision wrong varies a lot by which decision it is, which is part of why it's worth separating these out rather than treating pre-incorporation planning as one undifferentiated block of work.",
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
          <section
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
            {!s.link && <InlineInquiryCTA />}
          </section>
        ))}
      </div>

      <section aria-labelledby="pre-incorporation-faqs" className="mt-16">
        <h2 id="pre-incorporation-faqs" className="text-2xl font-bold text-[#081a42] mb-4">
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      <div className="mt-12 p-6 border border-gray-200 rounded-xl bg-gray-100">
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
