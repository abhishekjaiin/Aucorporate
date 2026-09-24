import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { EntitySelectorTool } from "@/components/EntitySelectorTool"
import { ScenarioSelector } from "@/components/ScenarioSelector"
import { ArrowRight } from "lucide-react"

const countryLinks = [
  { label: "US", href: "/india-entry-for-us-companies" },
  { label: "UK", href: "/india-entry-for-uk-companies" },
  { label: "Singapore", href: "/india-entry-for-singapore-companies" },
  { label: "Germany", href: "/india-entry-for-german-companies" },
  { label: "Japan", href: "/india-entry-for-japan-companies" },
  { label: "China", href: "/india-entry-for-china-companies" },
  { label: "Australia", href: "/india-entry-for-australian-companies" },
]

const faqs = [
  {
    q: "What is the best entity structure for a foreign SaaS company expanding to India?",
    a: "For the large majority of SaaS companies, it's a Wholly Owned Subsidiary structured as a Private Limited Company — full ownership retained by the parent, no restriction on the activities it can carry out, and the ability to invoice Indian customers, hold IP and hire staff directly. The narrower structures (Branch Office, Liaison Office, Project Office, Joint Venture) fit specific situations — no local revenue generation, a single time-limited project, or a co-owned venture with a local partner — but they're the exception for a SaaS business, not the default. Run your specific situation through the entity-selector tool above if you're not sure which bucket you fall into.",
  },
  {
    q: "Do we need to set up an entity if we already have Indian customers and are OIDAR-registered?",
    a: "Not automatically, no. Being OIDAR-registered means you're meeting a compliance obligation as a foreign supplier with no India entity — it doesn't by itself mean you should incorporate. The signals that actually mean it's time are concrete: a customer or tender requiring an India-registered invoice, hiring needs an Employer of Record can't reasonably support, or opening a local bank account and raising India-specific capital. Being OIDAR-registered is often the state you're already in right before those signals show up, not a reason to incorporate on its own — see the three-scenario framework above.",
  },
  {
    q: "Is India's SaaS/software sector 100% open to foreign investment?",
    a: "For most SaaS, AI-application and general software-services businesses, yes — they sit within the 100% Automatic Route, meaning no prior government approval is required before the parent invests. Some adjacent activities (certain data-handling, fintech-adjacent, or broadcasting-adjacent functionality) can carry different sectoral conditions, so it's worth confirming your specific product's classification rather than assuming the general software category covers every part of your business. Our FDI channels guide has the full sector table.",
  },
  {
    q: "How does GST work once we've incorporated, versus the OIDAR rule we were under before?",
    a: "Before incorporation, GST liability for a foreign digital-services supplier runs under the OIDAR/NTOR rule — no turnover threshold, liability from the first Indian transaction. After incorporation, your new entity's GST position follows the ordinary domestic turnover threshold instead (Rs 20 lakh for services, Rs 40 lakh for goods, in most states) — the same rule any Indian company registers under. Your existing OIDAR registration doesn't just disappear, and it doesn't automatically convert into the new entity's GST registration either — they're two separate registrations under two separate legal persons (the foreign parent and the new Indian subsidiary), so the old OIDAR registration needs to be formally wound down on its own once the new entity's GST registration is in place, while your India-billing activity moves onto the new entity's ordinary GSTR-1/GSTR-3B filing cadence.",
  },
  {
    q: "What FEMA/RBI filings does a SaaS subsidiary need after incorporation?",
    a: "The core three are Form FC-GPR (reporting the initial share allotment to your foreign parent, filed via the FIRMS portal within a defined window from allotment), Form FC-TRS (for any later share transfer between a resident and non-resident), and the annual FLA return (a standing yearly filing for as long as the entity carries foreign investment, whether or not any transaction happened that year). These sit alongside the entity's ordinary RoC annual filings and statutory audit — our taxation and regulatory practice and regulatory compliance guide cover the full mechanics.",
  },
  {
    q: "How is our Indian subsidiary taxed, and does Significant Economic Presence affect when we should incorporate?",
    a: "Once incorporated, your subsidiary is taxed as an ordinary Indian domestic company — most SaaS/AI subsidiaries elect into the concessional 22% rate (around 25.17% with surcharge and cess) under Section 200 of the Income-tax Act, 2025 (previously Section 115BAA under the 1961 Act). Significant Economic Presence (Section 9(9) of the Income-tax Act, 2025) is a separate consideration that matters before incorporation: it's a direct-tax exposure that can arise purely from the scale of your India-sourced digital revenue or user base, independent of whether you've set up an entity at all. It's not a reason to panic-incorporate, but it is a real reason \"we'll get to it eventually\" carries a cost the longer India revenue keeps growing without a local entity behind it.",
  },
  {
    q: "Should we set up a Global Capability Center instead of a standard subsidiary?",
    a: "Only if what you're actually building is a captive engineering, R&D or delivery operation rather than a commercial entity that primarily invoices local customers — that's a different scale of presence with its own hiring and operational profile. If you're a founder or CFO evaluating a standard commercial or compliance-driven India entry, a GCC is very likely the wrong frame; our GCC setup guide is there for the subset of readers who are actually building at that scale.",
  },
  {
    q: "Is a Wholly Owned Subsidiary the same thing as a Private Limited Company?",
    a: "A Wholly Owned Subsidiary isn't a separate legal category under the Companies Act — it's a Private Limited Company where 100% of the shares happen to be held by a single foreign parent. Every WOS is a Private Limited Company; not every Private Limited Company is a WOS (plenty have multiple or local shareholders). The distinction matters for describing ownership, not for which compliance regime applies — a WOS follows the same Companies Act, FEMA and tax framework as any other Private Limited Company.",
  },
]

export default function IndiaEntryForSaasCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Business Setup", href: "/india-business-setup" }, { label: "India Entry for AI, SaaS and Technology Companies" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold-dark">India Business Setup</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            India Entry for AI, SaaS and Technology Companies: Entity Structuring, FEMA and Tax
          </h1>
          <p className="mb-4 text-sm text-gray-500 italic">
            Last updated: 15 September 2026 — prepared by AU Corporate&apos;s cross-border tax and India business-setup practice.
          </p>
          <p className="text-xl leading-relaxed text-gray-600 mb-4">
            If you run an AI, SaaS or technology company and you&apos;re reading this, you&apos;ve probably already got Indian customers, Indian usage, or an Indian team you&apos;re managing remotely — and you&apos;re now asking a different question than &quot;do we owe GST here.&quot; You&apos;re asking whether it&apos;s time to actually set up in India: open an entity, hire directly, bank locally, hold your own contracts.
          </p>
          <p className="text-gray-600 leading-relaxed">
            That&apos;s a structuring decision, not a compliance trigger, and it deserves a different kind of answer than a registration checklist. This guide walks through how that call actually gets made, what entity structure fits a digital-services business specifically, and what changes — tax, FEMA, GST — once you incorporate.
          </p>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AI, SaaS and Tech Companies Are Entering India Now</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We&apos;ve been seeing more international AI, SaaS and technology companies reach this point earlier than they expect to — often while they&apos;re still routing all their India revenue through a foreign entity, with no local office at all. Two things are usually driving it. First, most software, SaaS and AI-application businesses sit within India&apos;s 100% automatic-route FDI category, meaning there&apos;s no government approval gate to clear before you invest — you incorporate, remit capital, and report the transaction to RBI after the fact rather than asking permission before it. That alone removes a step that trips up founders coming from more regulated sectors. Second, India&apos;s own demand side for enterprise software, AI tooling and SaaS has kept growing, and a meaningful share of that demand — enterprise procurement teams, government tenders, larger customers doing vendor due diligence — increasingly expects to see an India-registered counterparty on the contract, not an invoice from a foreign entity with no local presence behind it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            None of that means every company with Indian customers should incorporate immediately — plenty shouldn&apos;t, yet. It means the decision has become a live one earlier in a company&apos;s growth than it used to be, and it&apos;s worth having an actual framework for making it rather than defaulting to &quot;we&apos;ll figure it out when a customer asks.&quot;
          </p>
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Which Situation Are You In?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Start here if you&apos;re deciding whether to formalize a presence in India. This is the same framework we use with clients directly, and it&apos;s built around three situations — not two — because most companies don&apos;t jump straight from &quot;no presence&quot; to &quot;full subsidiary.&quot; Most sit in the middle for a while first.
          </p>
          <ScenarioSelector />
          <p className="text-gray-600 leading-relaxed mt-8">
            If Scenario 1 is where you are — you&apos;re billing Indian customers but have no other India footprint — this page isn&apos;t the one you need yet. Our full{" "}
            <Link href="/oidar-gst-registration-india" className="text-gold-dark font-semibold hover:underline">
              OIDAR &amp; GST registration guide for foreign SaaS and AI companies
            </Link>{" "}
            covers exactly that obligation: when it applies, how to register, and what the filing calendar looks like. Come back here once one of the Scenario 3 signals shows up.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            If you&apos;re already OIDAR-registered and sitting in Scenario 2, the watch-list above is the thing to check against every quarter, not a box you tick once. Our{" "}
            <Link href="/doing-business-in-india/incorporation" className="text-gold-dark font-semibold hover:underline">
              incorporation-timing guide
            </Link>{" "}
            runs the same &quot;ready or not yet&quot; judgment call for the general case — the signals above are that same checklist, specific to a company that&apos;s already billing India directly and knows its OIDAR status.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            And if you&apos;re in Scenario 3 — this is genuinely the core of this page, so the rest of it is written for you. A signed customer that needs an India-registered invoice, hiring that&apos;s outgrown what an Employer of Record can reasonably carry, or a tender that simply won&apos;t accept a foreign-entity bid are not soft signals. They&apos;re the specific, concrete triggers where the calculus stops being &quot;should we&quot; and starts being &quot;how, and how fast.&quot; The sections below walk through exactly that: which entity fits a SaaS/AI business, what it costs you in tax and FEMA reporting once it exists, and what happens to the OIDAR registration you may already be carrying.
          </p>
        </div>
      </section>

      {/* ENTITY STRUCTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing Your Entity Structure for a SaaS/AI Business</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For a SaaS or AI company that has reached Scenario 3, the entity conversation is usually shorter than founders expect, because one structure fits the overwhelming majority of cases: a <strong>Wholly Owned Subsidiary (WOS)</strong>, set up as a Private Limited Company under the Companies Act, 2013, with 100% of the shares held by the foreign parent.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The reason it fits so consistently isn&apos;t tradition — it&apos;s that a SaaS/AI go-to-market model needs exactly what a WOS gives you and doesn&apos;t need what the alternatives restrict. You&apos;re invoicing Indian customers directly, which needs a revenue-generating entity, not a Liaison Office (which can&apos;t invoice at all). You want to hold your own IP, contracts and, eventually, local team — which needs full operating flexibility, not the narrower, RBI-approval-gated activity list a Branch Office is limited to. And you&apos;re not bringing on a local partner to co-own the business, which is the one scenario where a Joint Venture actually makes more sense than 100% ownership.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-secondary/30 p-5 rounded-lg border">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Liaison Office</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Fits a company that only wants a representative, non-revenue-generating presence for market research or partner coordination, with no intent to bill Indian customers from the India side at all. Rare for a SaaS business that&apos;s already past Scenario 2.</p>
            </div>
            <div className="bg-secondary/30 p-5 rounded-lg border">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Branch Office</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Fits a narrower, defined set of permitted activities where the parent is comfortable bearing the liability directly rather than ring-fencing it in a separate Indian entity; RBI approval-gated and less commonly used by digital-services companies than by, say, a services or project-execution business.</p>
            </div>
            <div className="bg-secondary/30 p-5 rounded-lg border">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Project Office</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Fits a single, time-limited contract, not an ongoing SaaS or platform business.</p>
            </div>
            <div className="bg-secondary/30 p-5 rounded-lg border">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Joint Venture</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Fits a company that specifically wants a local partner&apos;s market access or relationships baked into the ownership structure, not just as a reseller.</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            The entity-selection tool below is the same interactive component the site already uses on our general company-formation guide — it walks through this same operate/test/project/branch/JV decision from a slightly more general angle, and it&apos;s worth running your own situation through it even if a WOS is already the likely answer, since it also flags the smaller number of cases where it isn&apos;t.
          </p>
          <EntitySelectorTool />
          <p className="text-gray-600 leading-relaxed mt-8">
            For the actual mechanics of getting a WOS incorporated — the SPICe+ filing, Digital Signature Certificates, Director Identification Numbers, the resident-director requirement, and realistic timelines (roughly 4-6 weeks under the Automatic Route once documentation is in order) — we don&apos;t re-run that process here. Our{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold-dark font-semibold hover:underline">
              company registration guide
            </Link>{" "}
            covers the full step-by-step SPICe+ process, document checklist and timeline in detail; treat this page as the &quot;which structure, and why, for a SaaS/AI business specifically&quot; layer that sits in front of it.
          </p>
        </div>
      </section>

      {/* FDI ROUTE */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">FDI Route and Sector Eligibility for SaaS/AI</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The good news for most readers here is short: the majority of SaaS, AI-application and general software-services sectors sit under the <strong>100% Automatic Route</strong> for foreign direct investment, meaning no prior government approval is needed before the parent invests — the reporting happens after the fact, through RBI&apos;s FC-GPR filing, rather than as a gate you have to clear first. That&apos;s a genuinely useful, low-friction fact if you&apos;ve been assuming India requires a lengthy approval process before you can even fund the entity; for most SaaS/AI businesses, it doesn&apos;t.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The caveat worth knowing rather than assuming away: sector classification isn&apos;t always as clean as &quot;software&quot; for a business whose product touches an adjacent regulated space — certain data-handling, fintech-adjacent, or broadcasting-adjacent functionality can pull parts of a business into a different sectoral bucket with its own conditions. If your product sits close to one of those edges, it&apos;s worth confirming classification specifically rather than assuming the general software category applies wholesale. For the full sector-by-sector Automatic Route vs. Government Route table, see our{" "}
            <Link href="/india-business-setup/fdi-channels" className="text-gold-dark font-semibold hover:underline">
              FDI channels guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* TAX */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Treatment Once You Incorporate</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once your India entity exists, it&apos;s taxed the same way any other Indian domestic company is — on its own India-source profits, not by reference to the parent&apos;s home-country tax position. Most SaaS/AI subsidiaries elect into the concessional corporate tax regime under Section 200 of the Income-tax Act, 2025 (the provision previously numbered Section 115BAA under the 1961 Act), which brings the base rate down to <strong>22%</strong> — around 25.17% once surcharge and cess are added — in exchange for giving up certain exemptions and incentives most digital-services businesses weren&apos;t planning to claim anyway. Whether that election makes sense for your specific entity is worth confirming with your tax advisor rather than assumed, but for a straightforward SaaS/AI subsidiary it&apos;s the norm rather than the exception. For the full domestic tax-compliance calendar, see our{" "}
            <Link href="/services/taxation-regulatory" className="text-gold-dark font-semibold hover:underline">
              taxation and regulatory practice
            </Link>
            .
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            There&apos;s a real cost to waiting too long to make this decision, and it isn&apos;t just &quot;your competitors get there first.&quot; Under <strong>Section 9(9) of the Income-tax Act, 2025</strong>, a foreign company can trigger a taxable presence in India — a <strong>Significant Economic Presence</strong> — purely through the scale of its India-sourced digital transactions or active user base, independent of whether it has incorporated anything here at all. That&apos;s a separate, direct-tax exposure from the GST/OIDAR obligation covered on our compliance page — different tax, different trigger, different consequence — but it&apos;s the reason &quot;we&apos;ll incorporate eventually&quot; isn&apos;t a cost-free holding pattern once revenue and usage are both growing. The specific revenue and user-count thresholds that define SEP are set by the CBDT and are worth confirming against the current notification before you rely on them for planning; our{" "}
            <Link href="/doing-business-in-india/incorporation" className="text-gold-dark font-semibold hover:underline">
              incorporation-timing guide
            </Link>{" "}
            covers the fuller decision checklist and the SEP exposure in more depth than belongs on this page.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Once there&apos;s a parent-subsidiary relationship in place, transfer pricing starts to matter too — management fees charged to the subsidiary, software or IP licensing arrangements, and group cost recharges all need to be priced at arm&apos;s length and documented, not set informally between related entities. This is a real compliance line item, not a footnote, but it&apos;s also not something a company evaluating whether to incorporate needs full documentation depth on yet — our taxation and regulatory practice covers the transfer pricing and DTAA mechanics in full once you&apos;re at that stage.
          </p>
        </div>
      </section>

      {/* GST AFTER INCORPORATION */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">GST After You Incorporate — How It&apos;s Different From the OIDAR Rule You May Already Be Under</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is the point where the two obligations that can look similar from the outside actually diverge, and it&apos;s worth being precise about it rather than leaving readers to guess.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before incorporation, if you were billing Indian customers directly with no India entity, you were (or should have been) registered under the <strong>OIDAR/NTOR rule</strong> — no turnover threshold, liability from the first transaction, because the rule exists specifically for a foreign supplier with no local presence. Once you incorporate an Indian entity, that changes. Your new entity&apos;s GST position runs on the <strong>ordinary domestic turnover threshold</strong> instead — the same Rs 20 lakh (services) / Rs 40 lakh (goods) framework any other Indian company registers under, once its turnover crosses that line. These are genuinely two different rules for two different situations, not the same rule described two ways, and it&apos;s a common enough point of confusion that it&apos;s worth stating plainly: don&apos;t assume your pre-incorporation OIDAR registration and your post-incorporation domestic GST position are the same filing continuing under a new name.
          </p>
          <p className="text-gray-600 leading-relaxed">
            What actually happens to the existing OIDAR registration matters practically, too — it doesn&apos;t just vanish the day your Certificate of Incorporation is issued, and it doesn&apos;t automatically merge into the new entity&apos;s GST registration either. They&apos;re two separate registrations under two separate legal persons — the foreign parent (OIDAR/NRTP) and the new Indian subsidiary (ordinary GST) — so your India-billing activity moves onto the new entity&apos;s GSTR-1/GSTR-3B cadence, while the old OIDAR registration needs to be formally wound down on its own, rather than assumed to convert automatically. Worth planning that cutover deliberately with your advisor, confirming the specific cancellation steps, rather than assuming it resolves itself. If you&apos;re not yet incorporated and want the full detail on the OIDAR side of this — registration mechanics, GSTR-5A filing cadence, what happens if you don&apos;t register — that&apos;s the full subject of our{" "}
            <Link href="/oidar-gst-registration-india" className="text-gold-dark font-semibold hover:underline">
              OIDAR &amp; GST registration guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FEMA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">FEMA and RBI Compliance for a SaaS/AI Subsidiary</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once your India entity has foreign investment on its books, a small set of recurring RBI filings under the Foreign Exchange Management Act, 1999 (FEMA) come with it. <strong>Form FC-GPR</strong> reports the initial share allotment to the foreign parent — filed via the FIRMS portal, within a defined window from the date of allotment (30 days is the window we work to; worth confirming against the current RBI master direction rather than treating it as fixed indefinitely). <strong>Form FC-TRS</strong> covers any later transfer of shares between a resident and a non-resident, if that ever happens. And the <strong>annual FLA (Foreign Liabilities and Assets) return</strong> is a standing yearly obligation for as long as the entity carries foreign investment on its books — due every year regardless of whether any transaction happened in that particular year, which is the part first-time founders most often miss.
          </p>
          <p className="text-gray-600 leading-relaxed">
            None of these are optional or symbolic — a missed FC-GPR window, for instance, has to be resolved through RBI&apos;s compounding process rather than a simple late fee, and that history sits on the entity&apos;s compliance record. We&apos;re not walking through the full filing mechanics here; our{" "}
            <Link href="/services/taxation-regulatory" className="text-gold-dark font-semibold hover:underline">
              taxation and regulatory practice
            </Link>{" "}
            and{" "}
            <Link href="/india-business-setup/regulatory-compliance" className="text-gold-dark font-semibold hover:underline">
              regulatory compliance guide
            </Link>{" "}
            both cover FEMA reporting in the depth an entity actually operating in India needs.
          </p>
        </div>
      </section>

      {/* POST-INCORPORATION */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Post-Incorporation: What Changes Operationally</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Incorporation is the start of an ongoing compliance relationship, not a one-time filing you complete and move past. Someone has to run the monthly (or quarterly) GST filings, keep the books in a form that satisfies both Indian statutory requirements and whatever reporting your parent needs for consolidation, and manage the RoC annual filings and audit. For most foreign-owned entities in their first couple of years, that&apos;s a Virtual CFO / outsourced accounting arrangement rather than a full in-house finance function — our{" "}
            <Link href="/outsourcing" className="text-gold-dark font-semibold hover:underline">
              outsourcing
            </Link>{" "}
            and{" "}
            <Link href="/services/accounting-assurance" className="text-gold-dark font-semibold hover:underline">
              accounting &amp; assurance
            </Link>{" "}
            teams support exactly this, and it&apos;s worth lining up before the entity&apos;s first filing deadline rather than after.
          </p>
          <p className="text-gray-600 leading-relaxed">
            On the GST side specifically, this is where the GSTR-5A → GSTR-1/GSTR-3B transition mentioned above actually plays out in practice — the switch from the OIDAR filing calendar to the entity&apos;s ordinary domestic filing calendar is a real operational cutover, not just a label change, and it&apos;s worth having whoever runs your compliance calendar plan for it explicitly around your incorporation date.
          </p>
        </div>
      </section>

      {/* MID-PAGE LEAD FORM */}
      <section id="inquiry-form" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Deciding Whether to Set Up in India?"
            description="Tell us where you are in the process — still weighing the decision, ready to incorporate, or already OIDAR-registered and watching for the trigger — and our India business-setup team will walk through the specifics with you."
          />
        </div>
      </section>

      {/* GCC CROSS-LINK */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Building a Full Delivery or Engineering Center Instead?</h2>
          <p className="text-gray-600 leading-relaxed">
            Not every reader on this page is deciding between &quot;compliance-only&quot; and &quot;a standard commercial subsidiary.&quot; Some are actually further along — planning to build a full captive engineering, R&amp;D or delivery center in India rather than a commercial entity that primarily invoices local customers. That&apos;s a genuinely different scale and structure of India presence, with its own hiring, tax and operational considerations. If that&apos;s closer to what you&apos;re evaluating, our{" "}
            <Link href="/gcc-setup-india" className="text-gold-dark font-semibold hover:underline">
              Global Capability Center setup guide
            </Link>{" "}
            covers that path in depth — it&apos;s a different guide for a different buyer, not an upsell from this one.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
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
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* END-OF-PAGE CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Ready to Structure Your India Entry?"
            description="Whether you're still confirming which scenario you're in or you already have the signal that means it's time — a signed customer, a hiring need an EOR can't cover, a tender that requires an India entity — our team handles entity structuring, FEMA/RBI reporting and the tax setup that follows incorporation for AI, SaaS and technology companies specifically."
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "OIDAR & GST Registration for Foreign SaaS and AI Companies",
                href: "/oidar-gst-registration-india",
                description: "Billing Indian customers but no entity yet? The compliance obligation that applies before you incorporate.",
              },
              {
                label: "Company Registration in India",
                href: "/india-business-setup/company-formation",
                description: "The full step-by-step SPICe+ incorporation process, documents and timeline.",
              },
              {
                label: "FDI Automatic and Government Approval Routes",
                href: "/india-business-setup/fdi-channels",
                description: "The full sector-by-sector Automatic vs. Government Route table.",
              },
              {
                label: "Should You Incorporate Now?",
                href: "/doing-business-in-india/incorporation",
                description: "Incorporation timing and Significant Economic Presence exposure.",
              },
              {
                label: "Taxation & Regulatory Compliance",
                href: "/services/taxation-regulatory",
                description: "The full direct tax, GST and transfer pricing compliance calendar once incorporated.",
              },
              {
                label: "Global Capability Center Setup in India",
                href: "/gcc-setup-india",
                description: "Building a captive engineering or delivery center rather than a standard commercial subsidiary.",
              },
            ]}
          />
        </div>
      </section>

      {/* COUNTRY CALLOUT GRID */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Entering India From a Specific Country</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Some of the practical detail that affects how your entry actually plays out — applicable DTAA rates, FEMA reporting specifics, subsidiary-vs-branch tradeoffs — is genuinely country-specific rather than universal to every foreign parent. If you&apos;re planning entry from one of the following markets, our country-specific India entry guides cover that jurisdiction&apos;s particular considerations in more depth than a general SaaS/AI page can:
          </p>
          <div className="flex flex-wrap gap-3">
            {countryLinks.map((c) => (
              <Link key={c.href} href={c.href} className="px-4 py-2 bg-white border rounded-lg text-sm font-semibold text-gold-dark hover:underline hover:shadow-md transition">
                {c.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/contact">
              Talk to an AU Corporate Expert <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
