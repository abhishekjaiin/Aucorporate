import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { InlineInquiryCTA } from "@/components/InlineInquiryCTA"
import { ScenarioSelector } from "@/components/ScenarioSelector"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    q: "Does my SaaS company need GST registration in India if we have Indian customers but no entity?",
    a: "Yes, if you're billing those Indian customers directly — card, UPI, wallet, any payment method where the money comes to you without an app-store intermediary or reseller in between. This is the OIDAR/GST registration obligation this entire page covers, and it applies from your first transaction, regardless of turnover or whether you have any physical presence in India.",
  },
  {
    q: "What is OIDAR under GST?",
    a: "OIDAR stands for Online Information and Database Access or Retrieval — the category under Indian GST law covering digital services delivered over the internet with little to no physical intervention. It's broad by design and, following an October 2023 amendment, explicitly covers SaaS, cloud computing, AI-delivered services, online advertising, and digital education content.",
  },
  {
    q: "Is there a turnover threshold before a foreign SaaS company has to register for GST in India?",
    a: "No. This is one of the most commonly confused points in this space. The Rs 20 lakh / Rs 40 lakh turnover thresholds apply to an already-incorporated Indian business under the domestic GST regime. A foreign OIDAR supplier with no Indian entity is under a completely different, no-threshold rule — registration is required from the first Indian transaction, not once revenue crosses any figure.",
  },
  {
    q: "What's the difference between NTOR and the reverse charge mechanism?",
    a: "NTOR (Non-Taxable Online Recipient) describes an Indian buyer who isn't GST-registered — typically an individual consumer or an unregistered small business — and can't self-assess GST on what they're buying, which is why the obligation to register and remit falls on you, the foreign supplier. Reverse charge applies instead when your Indian customer is itself GST-registered: in that case, the registered business customer accounts for and pays the GST directly, under IGST Act Section 13(12)'s place-of-supply rules, rather than you charging it.",
  },
  {
    q: "How often do we need to file GSTR-5A — and do we still need to file if we had zero Indian transactions that month?",
    a: "GSTR-5A is filed monthly. Yes, you still have to file even in a month with no Indian transactions — a nil return is still a required filing, and skipping it because \"there was nothing to report\" is treated as a missed filing, not a non-event.",
  },
  {
    q: "What happens if a foreign SaaS company doesn't register for GST in India?",
    a: "Non-registration exposes the company to a penalty under CGST Act Section 122 and to interest at 18% per annum on any unpaid tax under Section 50, running from when the tax was originally due. Enforcement in this space has also become considerably more active, with Indian authorities coordinating with the RBI and other agencies to identify offshore suppliers billing Indian customers without a registration, so an unregistered company's exposure isn't just theoretical — it's increasingly detectable.",
  },
  {
    q: "Does the October 2023 OIDAR amendment mean AI companies are covered too, not just \"SaaS\"?",
    a: "Yes. The amendment removed the older \"minimal human intervention\" qualifier and explicitly extended the OIDAR definition to cloud computing and AI-delivered digital services, alongside online advertising and education content. An AI company selling API access, inference, or a model-powered product directly to Indian customers is squarely inside this regime — \"OIDAR\" isn't a SaaS-only rule, even though most existing guidance on this topic is written as if it is.",
  },
  {
    q: "Is the equalisation levy still applicable to our business?",
    a: "No. The 2% equalisation levy was withdrawn in August 2024, and the separate 6% digital-advertising levy was withdrawn in April 2025. Neither applies any longer. What's still relevant for a foreign digital-services company is the OIDAR/GST obligation this page covers, and separately, Significant Economic Presence — an unrelated, direct-tax exposure.",
  },
  {
    q: "What is Significant Economic Presence, and is that the same thing as OIDAR?",
    a: "No — they're genuinely separate regimes. OIDAR/GST is an indirect tax triggered simply by billing Indian customers for digital services. Significant Economic Presence, under Section 9(9) of the Income-tax Act, is a direct-tax (income tax) concept that can apply to a foreign company with sustained, systematic Indian business activity, independent of your GST/OIDAR status entirely.",
  },
  {
    q: "Do we need to set up an Indian entity just to register for GST/OIDAR?",
    a: "No — this is one of the more common misconceptions we run into. OIDAR/GST registration is specifically designed for foreign suppliers without an Indian entity; it uses the non-resident taxable person route rather than requiring incorporation. You only need to think seriously about entity setup once you hit one of the signals in the decision framework above — a signed contract that needs India-registered invoicing, hiring beyond what an Employer of Record can support, or opening an India bank account. Registering for GST on its own isn't one of those signals.",
  },
]

export default function OidarGstRegistrationIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "OIDAR & GST Registration in India" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">GST Advisory &amp; Compliance</span>
          <h1 className="mb-6 mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            OIDAR &amp; GST Registration in India for Foreign SaaS and AI Companies
          </h1>
          <p className="mb-4 text-sm text-gray-500 italic">
            Last updated: 15 September 2026 — prepared by AU Corporate&apos;s cross-border tax and India business-setup practice.
          </p>
          <p className="text-xl leading-relaxed text-gray-600 mb-4">
            If your company has Indian customers paying you directly by card, UPI, or wallet, and you don&apos;t have an office, a subsidiary, or a bank account in India, there&apos;s a real chance you already have a GST registration obligation here — one that doesn&apos;t wait for you to cross a revenue threshold or decide anything about entering the Indian market.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This page walks through when that obligation applies, what it actually requires (registration, filing, an Indian representative), what happens if it&apos;s ignored, and how it&apos;s genuinely different from the GST rules that apply once a company has an Indian entity. If you&apos;re past the compliance question and actively weighing whether to set up in India, our{" "}
            <Link href="/india-entry-for-saas-companies" className="text-gold font-semibold hover:underline">
              India entry guide for SaaS and AI companies
            </Link>{" "}
            picks up from there.
          </p>
        </div>
      </section>

      {/* NO-THRESHOLD RULE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Do You Actually Need to Register? The No-Threshold Rule for Foreign Digital-Services Providers</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most tax obligations a founder is used to thinking about are tied to something structural — you register once you incorporate, you start paying corporate tax once you&apos;re profitable, you cross a GST threshold once turnover gets big enough. OIDAR/GST doesn&apos;t work that way, and that&apos;s the single most common thing companies get wrong about it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The trigger here is transactional, not structural: you&apos;re providing an online information, database access, or digital-services product, and an individual or unregistered business in India is paying you for it directly — card, UPI, digital wallet, whatever payment rail — without going through an app-store intermediary or a local reseller. That&apos;s it. The moment that first payment clears, you&apos;re in scope. There&apos;s no revenue floor to cross first, no grace period while you figure out the paperwork, and incorporation status is irrelevant — in fact, the whole point of this regime is that it applies precisely because you don&apos;t have an Indian entity.
          </p>
          <div className="p-6 border-l-4 border-gold bg-secondary/30 rounded-r-lg mb-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>This is not the domestic GST turnover threshold.</strong> An Indian company (or an Indian subsidiary of a foreign parent) only has to register for GST once its aggregate turnover crosses Rs 20 lakh for services or Rs 40 lakh for goods in most states — see our{" "}
              <Link href="/services/taxation-regulatory" className="text-gold font-semibold hover:underline">
                taxation &amp; regulatory practice
              </Link>{" "}
              for how that threshold and the ordinary GST compliance calendar work for an already-incorporated entity. A foreign company with no Indian entity, billing Indian customers directly, is under a completely different rule with no equivalent threshold. Confusing the two is a genuinely easy mistake to make — some public guidance on this topic runs the domestic threshold and the OIDAR rule together as if they&apos;re the same test, and they aren&apos;t.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The legal mechanism behind this is the concept of the <strong>Non-Taxable Online Recipient (NTOR)</strong> — broadly, an Indian consumer or unregistered business receiving the service, who isn&apos;t themselves GST-registered and can&apos;t self-assess the tax. Because the recipient can&apos;t account for the tax, the obligation is placed on the supplier instead — you. That&apos;s the structural reason a foreign SaaS or AI company with zero India presence still ends up with an Indian compliance obligation: GST has to land somewhere, and when the buyer can&apos;t be the one to remit it, the seller is.
          </p>
        </div>
      </section>

      {/* WHAT COUNTS AS OIDAR */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Counts as OIDAR — and Why &quot;AI-Delivered Services&quot; Are Now Explicitly In Scope</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            OIDAR stands for <strong>Online Information and Database Access or Retrieval</strong> — the formal category under Indian GST law that covers digital services delivered over the internet with essentially no physical intervention. It&apos;s a broad definition by design, covering everything from cloud software and streaming content to online advertising space and digital courseware.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            What&apos;s changed, and what most competitor guidance on this topic doesn&apos;t mention at all, is that the definition was amended in October 2023 to remove the old &quot;minimal human intervention&quot; qualifier that used to sit at the center of the test. Before that change, a service with meaningful human involvement on the delivery side had a plausible argument for sitting outside OIDAR. That argument is gone. The amendment also made explicit that the definition reaches cloud computing services, AI-delivered digital services, online advertising, and online educational content — closing the exact reading a lot of AI-native companies have been operating under, which is that this is somehow &quot;a SaaS rule&quot; that doesn&apos;t touch a company whose core product is a model or an API rather than a conventional software subscription.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">A SaaS subscription platform</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Billing Indian users or businesses directly for access to software — the clearest, most traditional case.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">An AI API or inference product</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A company selling model access, inference credits, or an AI-powered tool directly to Indian customers is squarely inside OIDAR post-amendment, even though the service is &quot;generated&quot; rather than &quot;hosted&quot; in the traditional SaaS sense.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">A content or data-access platform</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Research databases, media/streaming products, or any service where the value is retrieving or accessing digital information rather than a piece of physical or manually-delivered work.</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mt-6">
            If your product doesn&apos;t fit neatly into &quot;software subscription&quot; but does involve delivering something digital to an Indian customer over the internet with the customer paying you directly, the safer assumption is that it&apos;s in scope until proven otherwise, not the reverse.
          </p>
        </div>
      </section>

      {/* B2B REVERSE CHARGE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">B2B Is Different — the Reverse-Charge Carve-Out</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Everything above describes the B2C — or more precisely, the non-taxable-recipient — case. It works differently once your Indian customer is itself a GST-registered business.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under the place-of-supply rules for cross-border digital services (IGST Act, Section 13(12)), where the recipient is a registered taxable person rather than an NTOR, the liability shifts to them under the <strong>reverse charge mechanism</strong>. Your Indian business customer self-assesses and pays the GST on the import of your service, rather than you charging and remitting it. Practically, this means a company selling primarily to enterprise or other GST-registered Indian businesses has a meaningfully different compliance picture than one selling B2C or to small, unregistered businesses — reverse charge doesn&apos;t eliminate GST from the transaction, it just moves who&apos;s responsible for it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The catch is that most real SaaS and AI businesses aren&apos;t cleanly one or the other. A platform selling to a mix of individual users, small unregistered businesses, and larger GST-registered enterprise customers is running both regimes simultaneously — OIDAR/NTOR liability on one slice of revenue, reverse charge on another — which is exactly the kind of mixed billing pattern where getting the classification wrong on a subset of customers is easy to do without ever specifically checking each buyer&apos;s registration status.
          </p>
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Which Situation Are You In?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Start here if you have Indian customers already — most companies reading this page fall into the first scenario below, but it&apos;s worth reading all three, because the line between &quot;you have an obligation&quot; and &quot;you should think about an entity&quot; isn&apos;t always where founders assume it is.
          </p>
          <ScenarioSelector />
          <p className="text-gray-600 leading-relaxed mt-8">
            This is almost certainly you if you&apos;ve read this far. The rest of this page — registration mechanics, the filing calendar, what happens if you skip it — is written directly for this situation. There&apos;s genuinely no decision to make here about whether to &quot;enter&quot; India; the obligation exists independent of any commercial choice, and the only real decision is how you handle it: in-house, or with an advisory partner running the registration and monthly GSTR-5A filing for you.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            If you&apos;re seeing hybrid signals — a reseller conversation, an EOR hire, an India-specific fundraising conversation — that&apos;s the zone to actively watch, not park. And if you have a signed customer requiring India-registered invoicing, a hiring need beyond what an EOR can support, or a tender that requires an India entity, that&apos;s where this page&apos;s job ends and our{" "}
            <Link href="/india-entry-for-saas-companies" className="text-gold font-semibold hover:underline">
              India entry guide for SaaS and AI companies
            </Link>{" "}
            picks up — entity structuring, FDI eligibility, the tax picture post-incorporation, and exactly how your OIDAR registration transitions once you have an entity.
          </p>
        </div>
      </section>

      {/* MID-PAGE LEAD FORM */}
      <section id="inquiry-form" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Not Sure Which Situation Applies to You?"
            description="Tell us how you're billing Indian customers — directly, through a reseller, through an app store — and our GST advisory team will confirm your OIDAR registration position and what, if anything, needs to happen next."
          />
        </div>
      </section>

      {/* REGISTERING */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Registering: Form GST REG-10, an Indian Representative, and What&apos;s Needed</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once you&apos;ve established that you&apos;re in scope, registration runs through <strong>Form GST REG-10</strong>, filed under CGST Rule 14 — the route specifically for a person supplying OIDAR services into India from outside the country. It&apos;s worth being precise about this because there&apos;s a genuinely different, adjacent form (GST REG-09) for the broader &quot;non-resident taxable person&quot; category, which covers someone who occasionally undertakes physical taxable transactions in India without a fixed place of business — a trade-fair exhibitor, for example. That&apos;s a different fact pattern from a foreign SaaS or AI company with zero physical presence billing Indian customers remotely, and filing under the wrong route is a real, avoidable mistake. The statutory basis for mandatory registration itself sits in <strong>CGST Act, Section 24</strong>, which lists specific categories of suppliers required to register regardless of turnover — a non-resident/OIDAR supplier is one of them.
          </p>
          <p className="text-gray-600 leading-relaxed mb-2">
            A practical requirement that trips a lot of foreign applicants up: you need an <strong>Indian authorized representative</strong> to complete the registration and act as the point of contact with GST authorities on your behalf. This isn&apos;t a formality you can skip by having a director sign the form remotely — it has to be a person or entity actually present in India, which is one of the more common reasons companies bring in an advisory firm to run registration rather than attempt it entirely in-house from abroad.
          </p>
          <InlineInquiryCTA label="We handle OIDAR registration end to end, including standing in as your Indian authorized representative" />
        </div>
      </section>

      {/* COMPLIANCE CALENDAR */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens After Registration — the OIDAR Compliance Calendar</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Registration isn&apos;t the end of the obligation, it&apos;s the start of a recurring one. The core filing is <strong>GSTR-5A</strong>, a monthly return specifically for OIDAR/non-resident suppliers, due on the <strong>20th of the month following the tax period</strong>. One detail that surprises a lot of newly registered companies: the nil-return obligation doesn&apos;t go away just because a given month had zero Indian transactions — a GSTR-5A still has to be filed for that period, on time, or it&apos;s treated as a missed filing regardless of the reason.
          </p>
          <p className="text-gray-600 leading-relaxed mb-2">
            On the invoicing side, the applicable GST rate on OIDAR supplies is <strong>18%</strong>, which needs to show correctly on customer-facing invoices, not just on the internal filing. The exact SAC code your invoices should carry is worth confirming with your advisor rather than assumed — sources aren&apos;t fully consistent on whether the broad services heading or a more specific online-content sub-code is the precise fit for a given OIDAR offering, and getting it right matters more for invoicing than for the underlying tax treatment, which is settled at 18% either way.
          </p>
          <InlineInquiryCTA label="Prefer not to build an internal process around one Indian monthly return? Our accounting & outsourcing team runs GSTR-5A filing for clients" />
        </div>
      </section>

      {/* WHAT HAPPENS IF YOU DON'T REGISTER */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens If You Don&apos;t Register</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The consequences here aren&apos;t hypothetical, and they compound the longer registration is skipped.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>CGST Act, Section 122</strong> sets out the penalty framework for failing to register when required to. <strong>CGST Act, Section 50</strong> separately imposes interest — 18% per annum — on any GST that should have been paid and wasn&apos;t, running from when it was due, not from when the authorities catch up with you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            There&apos;s also a more current, practical risk signal worth naming plainly: enforcement in this space has been getting more active, not less. India&apos;s Directorate General of GST Intelligence has reportedly been working to coordinate with the RBI on foreign-exchange transaction data and with foreign governments on information-sharing, specifically to identify offshore digital-services suppliers billing Indian customers without a registration on file. The practical upshot is that &quot;unregistered and undetected&quot; is a shrinking window, not a stable position — this is a genuinely different risk landscape than it was even a couple of years ago, and treating non-registration as low-risk because it&apos;s gone unnoticed so far isn&apos;t a safe assumption to keep making.
          </p>
        </div>
      </section>

      {/* EQUALISATION LEVY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Equalisation Levy Is Gone — Here&apos;s What Still Applies Instead</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&apos;ve been researching this topic for a while, you may have run into references to India&apos;s equalisation levy and wondered whether it still applies to your business. It doesn&apos;t. The original 2% equalisation levy on e-commerce operators was withdrawn in August 2024, and the separate 6% levy on digital advertising spend was withdrawn in April 2025 under that year&apos;s Finance Bill. If a piece of content you&apos;re reading elsewhere still talks about the equalisation levy as a live obligation, it&apos;s out of date.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            What that withdrawal doesn&apos;t mean is that a foreign digital-services company selling into India has no other exposure to think about. Two things fill that space now, and they&apos;re genuinely different from each other:
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The first is the OIDAR/GST obligation this entire page is about — an indirect tax, triggered by billing Indian customers directly, unrelated to whether you have any physical presence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The second is <strong>Significant Economic Presence</strong> under Section 9(9) of the Income-tax Act, 2025 (a recently-commenced Act, so worth confirming the citation is still current at the time you&apos;re reading this) — a completely separate, direct-tax exposure that can apply to a foreign company with sustained, systematic transactions with Indian customers, independent of GST status entirely. It&apos;s a real consideration, but it&apos;s not this page&apos;s subject, and it&apos;s not the same regime as OIDAR — conflating the two is a mistake worth actively avoiding. Our{" "}
            <Link href="/doing-business-in-india/incorporation" className="text-gold font-semibold hover:underline">
              incorporation-timing guide
            </Link>{" "}
            covers Significant Economic Presence and the broader business-connection risk in full; this page&apos;s scope stays on GST/OIDAR.
          </p>
        </div>
      </section>

      {/* GST ONCE YOU HAVE AN ENTITY */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How This Differs From GST Once You Have an Indian Entity</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Everything above applies specifically to a foreign company with no Indian entity. The picture changes once you incorporate — GST then follows the <strong>ordinary domestic turnover threshold</strong> (Rs 20 lakh for services, Rs 40 lakh for goods in most states), the same rule any other Indian business operates under, rather than the no-threshold OIDAR/NTOR rule this page describes. Our{" "}
            <Link href="/services/taxation-regulatory" className="text-gold font-semibold hover:underline">
              taxation &amp; regulatory practice
            </Link>{" "}
            covers that domestic GST regime, along with the fuller direct tax and compliance calendar that applies once you have an entity on the ground. And GST registration itself works differently at that stage too, alongside the rest of the entity-setup process — our{" "}
            <Link href="/india-business-setup/company-formation" className="text-gold font-semibold hover:underline">
              company registration guide
            </Link>{" "}
            covers SPICe+ and incorporation mechanics in full.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The important thing to understand is that an existing OIDAR registration doesn&apos;t simply vanish the day you incorporate, and it doesn&apos;t automatically merge into the new entity&apos;s GST registration either — they&apos;re two separate registrations under two separate legal persons (the foreign parent and the new Indian subsidiary), and the old one needs to be formally wound down once the new one is in place. That cutover is worth planning deliberately, with your advisor confirming the specific cancellation mechanics, rather than assuming it resolves itself. If incorporation is realistically on your horizon, our{" "}
            <Link href="/india-entry-for-saas-companies" className="text-gold font-semibold hover:underline">
              India entry guide for SaaS and AI companies
            </Link>{" "}
            walks through exactly what changes, including this transition, in the section on GST after incorporation.
          </p>
        </div>
      </section>

      {/* GLOBAL TRENDS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A Note on Global Digital-Services Tax Trends</h2>
          <p className="text-gray-600 leading-relaxed">
            India isn&apos;t alone in taxing digital services at the point of consumption rather than the point of incorporation — the EU&apos;s VAT OSS regime, the UK&apos;s post-Brexit VAT rules for digital services, and similar frameworks elsewhere all work on a broadly comparable logic: if you&apos;re selling digital products to consumers in a jurisdiction, that jurisdiction increasingly expects to collect tax on the sale regardless of where you&apos;re based. We&apos;re not going to attempt a jurisdiction-by-jurisdiction comparison here — that&apos;s better served by dedicated VAT-technology platforms built for exactly that purpose. What&apos;s relevant for a company already navigating India&apos;s OIDAR regime is that this is part of a broader, genuine global trend, not an isolated India-specific quirk, and companies expanding into several markets at once are increasingly running this same qualifying question — do we have an obligation here, based purely on where our customers are — in more than one country simultaneously. Where India specifically is concerned, that&apos;s exactly what we help clients understand and manage as it comes up.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/50">
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Get Your OIDAR/GST Position Confirmed"
            description="Whether you're still working out if this applies to you, ready to register, or already registered and want someone to take the monthly filing off your plate, our GST advisory team works with exactly this client segment — foreign SaaS, AI, and digital-services companies with Indian customers and no local entity."
          />
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "India Entry for SaaS & AI Companies",
                href: "/india-entry-for-saas-companies",
                description: "Thinking beyond compliance? Entity structuring, FEMA and tax for a formal India presence.",
              },
              {
                label: "Taxation & Regulatory Services",
                href: "/services/taxation-regulatory",
                description: "GST, direct tax and compliance once you have an Indian entity.",
              },
              {
                label: "Should You Incorporate in India Now?",
                href: "/doing-business-in-india/incorporation",
                description: "The broader ready/wait decision, including Significant Economic Presence risk.",
              },
              {
                label: "Accounting & Outsourcing",
                href: "/outsourcing",
                description: "Monthly filing and books support, including GSTR-5A.",
              },
            ]}
          />
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
