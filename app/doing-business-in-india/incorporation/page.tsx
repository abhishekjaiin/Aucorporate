import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { FaqAccordion } from "@/components/FaqAccordion"

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

const readySignals = [
  "You have a signed customer contract, purchase order, or letter of intent that requires invoicing from an India-registered entity",
  "You need to hire beyond what an EOR can reasonably support — typically more than a handful of people, or roles that need locally administered statutory benefits",
  "You need to hold inventory, assets, or IP in India, or sign leases and vendor contracts in your own name rather than through a partner",
  "You're already generating recurring India-side revenue in a way that could trigger business-connection tax exposure even without a local entity (see below)",
  "A customer, government tender, or sector-specific license requires proof of an India-registered entity before you can even bid",
]

const waitSignals = [
  "You're still validating demand and haven't closed a paying India customer or a committed hire",
  "A distributor, reseller, or local partner can service the opportunity you have today without you contracting directly",
  "You need a short, time-bound presence for a single project or a market-research trip — a project or liaison office, or no local presence at all, may be enough",
  "You're within a few weeks of India's 31 March financial year-end and the business case doesn't require operating before then",
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

const faqs = [
  {
    q: "How long can we operate in India before we're required to incorporate?",
    a: "There's no fixed day-count trigger under Indian company law — nothing in the Companies Act forces incorporation based on how long you've been active in the market. The real trigger is usually commercial (a signed customer needing India-side invoicing, or a hiring need an EOR can't cover) or tax-driven (see business-connection risk below), not a calendar deadline. That said, the longer revenue-generating activity continues without a local entity, the harder it becomes to argue there's no business connection in India for tax purposes.",
  },
  {
    q: "Can we invoice Indian customers without an India entity?",
    a: "Yes, mechanically — many foreign companies invoice Indian customers directly from abroad, particularly for software, services, or exports. The complication isn't the invoicing itself but the tax and withholding position on both sides: the Indian customer may need to withhold tax on payments to a non-resident, and if the arrangement starts to look like a business connection (an agent negotiating locally, a local team fulfilling the contract), the exposure covered below starts to apply. A handful of one-off transactions rarely becomes a live issue; ongoing, systematic revenue is worth reviewing before it compounds.",
  },
  {
    q: "Does hiring through an Employer of Record (EOR) trigger any incorporation requirement?",
    a: "Not automatically — an EOR employs the individual on its own Indian entity, which is a legitimate way to put people on the ground without incorporating yourself. It stops working cleanly once headcount grows large enough that EOR per-head costs exceed the cost of running your own entity, or once those hires need to do things an EOR arrangement isn't built for — signing contracts on the company's behalf, holding assets, or being part of a locally invoicing team.",
  },
  {
    q: "What's the actual downside of incorporating too early?",
    a: "An Indian subsidiary generates compliance obligations from the day the Certificate of Incorporation is issued — statutory audit, annual RoC filings (Form AOC-4 and MGT-7/7A), and the annual FLA return to RBI if there's foreign investment on the books — regardless of whether the business is actually trading yet. Incorporating well ahead of a validated need means carrying that overhead, and the professional fees that go with it, on an entity that isn't generating revenue.",
  },
  {
    q: "Should we set up a liaison office first and convert to a subsidiary later?",
    a: "It can work as a sequencing strategy, but a liaison office can't generate India-side revenue — it's restricted to non-commercial activities like market research and coordination, and it's RBI-approval-gated. If you're fairly confident you'll need a full operating entity within a year or so, going straight to a Wholly Owned Subsidiary is usually simpler than standing up a liaison office and separately incorporating and winding it down later. A liaison office is a better fit where the purpose really is time-bound research or coordination, not a staging step toward a subsidiary you already expect to need.",
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

      <section aria-labelledby="decision-checklist">
        <h2 id="decision-checklist" className="text-2xl font-bold text-[#081a42] mt-12 mb-4">A Quick Decision Checklist</h2>
        <p className="mb-8 text-gray-700 leading-relaxed">
          Before weighing entry routes in detail, it&apos;s worth a fast gut-check against the signals that actually separate &ldquo;incorporate now&rdquo; from &ldquo;not yet.&rdquo; None of these is decisive on its own, but the more that apply on one side, the clearer the call:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-[#081a42]">Signals you&apos;re ready to incorporate</h3>
            <ul className="space-y-3">
              {readySignals.map((s) => (
                <li key={s} className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-yellow-400">{s}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-[#081a42]">Signals you&apos;re not there yet</h3>
            <ul className="space-y-3">
              {waitSignals.map((s) => (
                <li key={s} className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-300">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="routes-to-market">
        <h2 id="routes-to-market" className="text-2xl font-bold text-[#081a42] mt-12 mb-4">Incorporation vs. Other Routes to Market</h2>
        <p className="mb-8 text-gray-700 leading-relaxed">
          Incorporation isn&apos;t the only way to have a presence in India, and it isn&apos;t always the right starting point. Here&apos;s how it compares to the other routes companies actually use:
        </p>
        <div className="grid gap-6 mb-12">
          {routesToMarket.map((r) => (
            <ClickableInfoCard key={r.title} title={r.title} desc={r.desc} />
          ))}
        </div>
      </section>

      <section aria-labelledby="timing-mistakes">
        <h2 id="timing-mistakes" className="text-2xl font-bold text-[#081a42] mt-12 mb-4">Common Timing Mistakes</h2>
        <div className="grid gap-6 mb-12">
          {timingMistakes.map((m) => (
            <ClickableInfoCard key={m.title} title={m.title} desc={m.desc} />
          ))}
        </div>
      </section>

      <section aria-labelledby="pe-risk">
        <h2 id="pe-risk" className="text-2xl font-bold text-[#081a42] mt-12 mb-4">The Real Cost of Waiting Too Long: Business Connection Risk</h2>
        <div className="rounded-xl border-l-4 border-yellow-400 bg-gray-100 p-6 mb-12">
          <p className="text-sm text-gray-700 leading-relaxed">
            Delaying incorporation isn&apos;t only a cost in lost deals — left long enough, it can create a live tax exposure. Under Section 9 of the Income-tax Act, 2025 (India&apos;s current income tax law, effective from the 2026-27 assessment year and the successor to the identically structured business-connection provision in the 1961 Act), income earned through a &ldquo;business connection&rdquo; in India is deemed to accrue here and becomes taxable — whether or not the foreign company has registered any entity. A dependent agent taking orders on the company&apos;s behalf, or a &ldquo;Significant Economic Presence&rdquo; under Section 9(9) — a codified threshold covering systematic or continuous transactional engagement with Indian customers — can be enough to trigger it. Where India has a tax treaty with the parent&apos;s jurisdiction, that treaty generally caps India&apos;s taxing right to profits attributable to an actual Permanent Establishment under the treaty&apos;s PE article, which is narrower than the domestic business-connection test — but that protection has to be actively claimed and supported, not assumed. In practice, a company that keeps closing India business through agents, resellers, or a growing remote sales motion without ever incorporating can end up with an unplanned India tax filing obligation anyway, minus the structure — a local entity, transfer pricing documentation, a clean profit-attribution position — that would normally support it. It&apos;s one of the more concrete reasons the &ldquo;wait and see&rdquo; posture has a real expiry date once India-facing revenue is actually flowing.
          </p>
        </div>
      </section>

      <section aria-labelledby="incorporation-faqs">
        <h2 id="incorporation-faqs" className="text-2xl font-bold text-[#081a42] mt-12 mb-6">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
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

      <div className="mt-12 p-6 border border-gray-200 rounded-xl bg-gray-100">
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
