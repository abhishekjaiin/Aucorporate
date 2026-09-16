# Draft: OIDAR & GST Registration in India for Foreign SaaS and AI Companies (Page A of the compliance/entry pair)

## Metadata
Title: GST & OIDAR Registration for Foreign SaaS Companies in India (2026 Guide)
Meta description: No Indian entity, but Indian customers? Here's when OIDAR/GST registration is mandatory, the GSTR-5A filing calendar, and what non-compliance actually costs.
URL: /oidar-gst-registration-india

(Both match Stage 6 exactly — no tweaks made.)

---

## Page Content

# OIDAR & GST Registration in India for Foreign SaaS and AI Companies

*Last updated 2026 · Compliance guide for foreign digital-services providers*

[Breadcrumb: Home / OIDAR & GST Registration in India]

If your company has Indian customers paying you directly by card, UPI, or wallet, and you don't have an office, a subsidiary, or a bank account in India, there's a real chance you already have a GST registration obligation here — one that doesn't wait for you to cross a revenue threshold or decide anything about entering the Indian market. This page walks through when that obligation applies, what it actually requires (registration, filing, an Indian representative), what happens if it's ignored, and how it's genuinely different from the GST rules that apply once a company has an Indian entity. If you're past the compliance question and actively weighing whether to set up in India, our [India entry guide for SaaS and AI companies](/india-entry-for-saas-companies) picks up from there.

---

## Do You Actually Need to Register? The No-Threshold Rule for Foreign Digital-Services Providers

Most tax obligations a founder is used to thinking about are tied to something structural — you register once you incorporate, you start paying corporate tax once you're profitable, you cross a GST threshold once turnover gets big enough. OIDAR/GST doesn't work that way, and that's the single most common thing companies get wrong about it.

The trigger here is transactional, not structural: you're providing an online information, database access, or digital-services product, and an individual or unregistered business in India is paying you for it directly — card, UPI, digital wallet, whatever payment rail — without going through an app-store intermediary or a local reseller. That's it. The moment that first payment clears, you're in scope. There's no revenue floor to cross first, no grace period while you figure out the paperwork, and incorporation status is irrelevant — in fact, the whole point of this regime is that it applies precisely *because* you don't have an Indian entity.

**This is not the domestic GST turnover threshold.** An Indian company (or an Indian subsidiary of a foreign parent) only has to register for GST once its aggregate turnover crosses Rs 20 lakh for services or Rs 40 lakh for goods in most states — see our [taxation & regulatory practice](/services/taxation-regulatory) for how that threshold and the ordinary GST compliance calendar work for an already-incorporated entity. A foreign company with no Indian entity, billing Indian customers directly, is under a completely different rule with no equivalent threshold. Confusing the two is a genuinely easy mistake to make — some public guidance on this topic runs the domestic threshold and the OIDAR rule together as if they're the same test, and they aren't.

The legal mechanism behind this is the concept of the **Non-Taxable Online Recipient (NTOR)** — broadly, an Indian consumer or unregistered business receiving the service, who isn't themselves GST-registered and can't self-assess the tax. Because the recipient can't account for the tax, the obligation is placed on the supplier instead — you. That's the structural reason a foreign SaaS or AI company with zero India presence still ends up with an Indian compliance obligation: GST has to land somewhere, and when the buyer can't be the one to remit it, the seller is.

---

## What Counts as OIDAR — and Why "AI-Delivered Services" Are Now Explicitly In Scope

OIDAR stands for **Online Information and Database Access or Retrieval** — the formal category under Indian GST law that covers digital services delivered over the internet with essentially no physical intervention. It's a broad definition by design, covering everything from cloud software and streaming content to online advertising space and digital courseware.

What's changed, and what most competitor guidance on this topic doesn't mention at all, is that the definition was amended in October 2023 to remove the old "minimal human intervention" qualifier that used to sit at the center of the test. *[Writer's note: exact CBIC notification number and effective date to be confirmed by Stage 9 — do not publish without verification.]* Before that change, a service with meaningful human involvement on the delivery side had a plausible argument for sitting outside OIDAR. That argument is gone. The amendment also made explicit that the definition reaches cloud computing services, AI-delivered digital services, online advertising, and online educational content — closing the exact reading a lot of AI-native companies have been operating under, which is that this is somehow "a SaaS rule" that doesn't touch a company whose core product is a model or an API rather than a conventional software subscription.

It's worth being concrete about what actually falls inside this, because "OIDAR" as a term doesn't tell a founder much on its own:

- **A SaaS subscription platform** billing Indian users or businesses directly for access to software — the clearest, most traditional case.
- **An AI API or inference product** — a company selling model access, inference credits, or an AI-powered tool directly to Indian customers is squarely inside OIDAR post-amendment, even though the service is "generated" rather than "hosted" in the traditional SaaS sense.
- **A content or data-access platform** — research databases, media/streaming products, or any service where the value is retrieving or accessing digital information rather than a piece of physical or manually-delivered work.

If your product doesn't fit neatly into "software subscription" but does involve delivering something digital to an Indian customer over the internet with the customer paying you directly, the safer assumption is that it's in scope until proven otherwise, not the reverse.

---

## B2B Is Different — the Reverse-Charge Carve-Out

Everything above describes the B2C — or more precisely, the non-taxable-recipient — case. It works differently once your Indian customer is itself a GST-registered business.

Under the place-of-supply rules for cross-border digital services (IGST Act, Section 13(12)), where the recipient is a registered taxable person rather than an NTOR, the liability shifts to them under the **reverse charge mechanism**. Your Indian business customer self-assesses and pays the GST on the import of your service, rather than you charging and remitting it. Practically, this means a company selling primarily to enterprise or other GST-registered Indian businesses has a meaningfully different compliance picture than one selling B2C or to small, unregistered businesses — reverse charge doesn't eliminate GST from the transaction, it just moves who's responsible for it.

The catch is that most real SaaS and AI businesses aren't cleanly one or the other. A platform selling to a mix of individual users, small unregistered businesses, and larger GST-registered enterprise customers is running both regimes simultaneously — OIDAR/NTOR liability on one slice of revenue, reverse charge on another — which is exactly the kind of mixed billing pattern where getting the classification wrong on a subset of customers is easy to do without ever specifically checking each buyer's registration status.

---

## Which Situation Are You In?

*[ScenarioSelector component — shared decision framework, defined once in `lib/decision-framework.ts` and imported identically on this page and on `/india-entry-for-saas-companies`. Three click-to-reveal cards, each with signal/consequence text below, a "confirm this with our team" link into the inquiry modal, and a `link` field routing to the relevant page/anchor. Fallback if the component isn't ready by launch: three static `ClickableReveal` cards in a `grid md:grid-cols-3`, each linking out via a standard `Link` component rather than `ClickableInfoCard`, since these need real navigation targets.]*

Start here if you have Indian customers already — most companies reading this page fall into the first scenario below, but it's worth reading all three, because the line between "you have an obligation" and "you should think about an entity" isn't always where founders assume it is.

**Scenario 1 — Compliance-only, no entity.**
Signal: You're billing Indian customers directly (card, UPI, wallet — not through an app-store intermediary or a reseller) for a SaaS subscription, AI product, or digital-services product, with no India office, no local staff, no India bank account, and no plan yet to change that.
Consequence: You're in scope for OIDAR/GST registration from the first transaction — no turnover threshold, no grace period. This is a compliance obligation, not an entry decision.

This is almost certainly you if you've read this far. The rest of this page — registration mechanics, the filing calendar, what happens if you skip it — is written directly for this situation. There's genuinely no decision to make here about whether to "enter" India; the obligation exists independent of any commercial choice, and the only real decision is how you handle it (in-house, or with an advisory partner running the registration and monthly GSTR-5A filing for you — more on that below).

**Scenario 2 — Hybrid / testing the market.**
Signal: You're already OIDAR-registered (or should be) and starting to see signals that push beyond pure compliance — exploring a local reseller or distributor relationship, considering a small support/customer-success presence via an Employer of Record, having early conversations about India-specific fundraising, or a prospect/government tender asking whether you have an India-registered entity.
Consequence: Not yet a trigger on its own, but each of these signals is a countdown, not a coincidence — this is the zone to actively watch, not park.

If any of that describes you, it's worth reading the "ready" signals in Scenario 3 below now, before they arrive — and our [incorporation-timing guide](/doing-business-in-india/incorporation) runs the same ready/wait judgment call in more general terms, which is directly applicable once you're weighing these specific signals (an existing OIDAR registration, a digital-services billing pattern) against them.

**Scenario 3 — Ready to incorporate.**
Signal: You have a signed customer or purchase order that requires India-registered invoicing; you need to hire beyond what an EOR can reasonably support; you're about to open an India bank account, hold local assets, or raise India-specific capital; or a customer/tender requires proof of an India-registered entity before you can even bid.
Consequence: Entity setup (almost always a Wholly Owned Subsidiary for a SaaS/AI business) is now the right call. Your existing OIDAR registration and your new entity's GST registration are two separate registrations under two separate legal persons — the OIDAR obligation doesn't just disappear, but it also doesn't automatically convert into the new one; the old registration needs to be formally wound down once the new entity's GST registration is in place.

This is where this page's job ends and Page B's begins. Our [India entry guide for SaaS and AI companies](/india-entry-for-saas-companies) covers entity structuring, FDI eligibility, the tax picture post-incorporation, and exactly how your OIDAR registration transitions into ordinary GST filing once you have an entity — worth reading in full once any of Scenario 3's signals show up.

*[Mid-page LeadForm placement: "Not sure which situation applies to you?" / "Tell us how you're billing Indian customers and our GST advisory team will confirm your registration position." — positioned immediately after the decision framework, the point a reader has just self-identified and is primed to act.]*

---

## Registering: Form GST REG-10, an Indian Representative, and What's Needed

Once you've established that you're in scope, registration runs through **Form GST REG-10**, filed under CGST Rule 14 — the route specifically for a person supplying OIDAR services into India from outside the country. It's worth being precise about this because there's a genuinely different, adjacent form (GST REG-09) for the broader "non-resident taxable person" category, which covers someone who occasionally undertakes physical taxable transactions in India without a fixed place of business — a trade-fair exhibitor, for example. That's a different fact pattern from a foreign SaaS or AI company with zero physical presence billing Indian customers remotely, and filing under the wrong route is a real, avoidable mistake. The statutory basis for mandatory registration itself sits in **CGST Act, Section 24**, which lists specific categories of suppliers required to register regardless of turnover — a non-resident/OIDAR supplier is one of them.

A practical requirement that trips a lot of foreign applicants up: you need an **Indian authorized representative** to complete the registration and act as the point of contact with GST authorities on your behalf. This isn't a formality you can skip by having a director sign the form remotely — it has to be a person or entity actually present in India, which is one of the more common reasons companies bring in an advisory firm to run registration rather than attempt it entirely in-house from abroad. Our GST advisory practice handles this end to end — completing REG-10, appointing and standing in as the Indian representative where needed, and getting the registration issued — rather than a company having to work out the mechanics of appointing a local representative from scratch.

---

## What Happens After Registration — the OIDAR Compliance Calendar

Registration isn't the end of the obligation, it's the start of a recurring one. The core filing is **GSTR-5A**, a monthly return specifically for OIDAR/non-resident suppliers, due on the **20th of the month following the tax period**. *[Writer's note: confirm the current due date and filing frequency for GSTR-5A with Stage 9 — cadence and deadlines are the kind of detail that shifts with CBIC notifications and needs a live check before publishing.]* One detail that surprises a lot of newly registered companies: the nil-return obligation doesn't go away just because a given month had zero Indian transactions — a GSTR-5A still has to be filed for that period, on time, or it's treated as a missed filing regardless of the reason.

On the invoicing side, the applicable GST rate on OIDAR supplies is **18%**, which needs to show correctly on customer-facing invoices, not just on the internal filing. The exact SAC code your invoices should carry is worth confirming with your advisor rather than assumed — sources aren't fully consistent on whether the broad services heading or a more specific online-content sub-code is the precise fit for a given OIDAR offering, and getting it right matters more for invoicing than for the underlying tax treatment, which is settled at 18% either way.

This is the point where most companies decide whether to run GST filing in-house or hand it to someone who does it as a matter of course — a monthly return with a fixed deadline and a nil-filing trap is a small but real recurring compliance load, and our [accounting & outsourcing team](/outsourcing) handles exactly this kind of recurring monthly filing for clients who'd rather not build the internal process for a single Indian return cycle.

---

## What Happens If You Don't Register

The consequences here aren't hypothetical, and they compound the longer registration is skipped.

**CGST Act, Section 122** sets out the penalty framework for failing to register when required to. **CGST Act, Section 50** separately imposes interest — 18% per annum — on any GST that should have been paid and wasn't, running from when it was due, not from when the authorities catch up with you.

There's also a more current, practical risk signal worth naming plainly: enforcement in this space has been getting more active, not less. India's Directorate General of GST Intelligence has reportedly been working to coordinate with the RBI on foreign-exchange transaction data and with foreign governments on information-sharing, specifically to identify offshore digital-services suppliers billing Indian customers without a registration on file. The practical upshot is that "unregistered and undetected" is a shrinking window, not a stable position — this is a genuinely different risk landscape than it was even a couple of years ago, and treating non-registration as low-risk because it's gone unnoticed so far isn't a safe assumption to keep making.

---

## The Equalisation Levy Is Gone — Here's What Still Applies Instead

If you've been researching this topic for a while, you may have run into references to India's equalisation levy and wondered whether it still applies to your business. It doesn't. The original 2% equalisation levy on e-commerce operators was withdrawn in August 2024, and the separate 6% levy on digital advertising spend was withdrawn in April 2025 under that year's Finance Bill. *[Writer's note: confirm both withdrawal dates precisely with Stage 9 — these need to be exactly right given the past-tense framing is load-bearing for this section.]* If a piece of content you're reading elsewhere still talks about the equalisation levy as a live obligation, it's out of date.

What that withdrawal doesn't mean is that a foreign digital-services company selling into India has no other exposure to think about. Two things fill that space now, and they're genuinely different from each other:

The first is the OIDAR/GST obligation this entire page is about — an indirect tax, triggered by billing Indian customers directly, unrelated to whether you have any physical presence.

The second is **Significant Economic Presence** under Section 9(9) of the Income-tax Act, 2025 (a recently-commenced Act, so worth confirming the citation is still current at the time you're reading this) — a completely separate, direct-tax exposure that can apply to a foreign company with sustained, systematic transactions with Indian customers, independent of GST status entirely. It's a real consideration, but it's not this page's subject, and it's not the same regime as OIDAR — conflating the two is a mistake worth actively avoiding. Our [incorporation-timing guide](/doing-business-in-india/incorporation) covers Significant Economic Presence and the broader business-connection risk in full; this page's scope stays on GST/OIDAR.

---

## How This Differs From GST Once You Have an Indian Entity

Everything above applies specifically to a foreign company with no Indian entity. The picture changes once you incorporate — GST then follows the **ordinary domestic turnover threshold** (Rs 20 lakh for services, Rs 40 lakh for goods in most states), the same rule any other Indian business operates under, rather than the no-threshold OIDAR/NTOR rule this page describes. Our [taxation & regulatory practice](/services/taxation-regulatory) covers that domestic GST regime, along with the fuller direct tax and compliance calendar that applies once you have an entity on the ground. And GST registration itself works differently at that stage too, alongside the rest of the entity-setup process — our [company registration guide](/india-business-setup/company-formation) covers SPICe+ and incorporation mechanics in full.

The important thing to understand is that an existing OIDAR registration doesn't simply vanish the day you incorporate, and it doesn't automatically merge into the new entity's GST registration either — they're two separate registrations under two separate legal persons (the foreign parent and the new Indian subsidiary), and the old one needs to be formally wound down once the new one is in place. That cutover is worth planning deliberately, with your advisor confirming the specific cancellation mechanics, rather than assuming it resolves itself. If incorporation is realistically on your horizon, our [India entry guide for SaaS and AI companies](/india-entry-for-saas-companies) walks through exactly what changes, including this transition, in the section on GST after incorporation.

---

## A Note on Global Digital-Services Tax Trends

India isn't alone in taxing digital services at the point of consumption rather than the point of incorporation — the EU's VAT OSS regime, the UK's post-Brexit VAT rules for digital services, and similar frameworks elsewhere all work on a broadly comparable logic: if you're selling digital products to consumers in a jurisdiction, that jurisdiction increasingly expects to collect tax on the sale regardless of where you're based. We're not going to attempt a jurisdiction-by-jurisdiction comparison here — that's better served by dedicated VAT-technology platforms built for exactly that purpose. What's relevant for a company already navigating India's OIDAR regime is that this is part of a broader, genuine global trend, not an isolated India-specific quirk, and companies expanding into several markets at once are increasingly running this same qualifying question — do we have an obligation here, based purely on where our customers are — in more than one country simultaneously. Where India specifically is concerned, that's exactly what we help clients understand and manage as it comes up.

---

## FAQ

*[FaqAccordion component — 10 items, rendered as an accessible accordion with matching FAQPage JSON-LD schema, per the site's existing convention on `taxation-regulatory` and `doing-business-in-india/incorporation`.]*

**Does my SaaS company need GST registration in India if we have Indian customers but no entity?**
Yes, if you're billing those Indian customers directly — card, UPI, wallet, any payment method where the money comes to you without an app-store intermediary or reseller in between. This is the OIDAR/GST registration obligation this entire page covers, and it applies from your first transaction, regardless of turnover or whether you have any physical presence in India.

**What is OIDAR under GST?**
OIDAR stands for Online Information and Database Access or Retrieval — the category under Indian GST law covering digital services delivered over the internet with little to no physical intervention. It's broad by design and, following an October 2023 amendment, explicitly covers SaaS, cloud computing, AI-delivered services, online advertising, and digital education content.

**Is there a turnover threshold before a foreign SaaS company has to register for GST in India?**
No. This is one of the most commonly confused points in this space. The Rs 20 lakh / Rs 40 lakh turnover thresholds apply to an already-incorporated Indian business under the domestic GST regime. A foreign OIDAR supplier with no Indian entity is under a completely different, no-threshold rule — registration is required from the first Indian transaction, not once revenue crosses any figure.

**What's the difference between NTOR and the reverse charge mechanism?**
NTOR (Non-Taxable Online Recipient) describes an Indian buyer who isn't GST-registered — typically an individual consumer or an unregistered small business — and can't self-assess GST on what they're buying, which is why the obligation to register and remit falls on you, the foreign supplier. Reverse charge applies instead when your Indian customer is itself GST-registered: in that case, the registered business customer accounts for and pays the GST directly, under IGST Act Section 13(12)'s place-of-supply rules, rather than you charging it.

**How often do we need to file GSTR-5A — and do we still need to file if we had zero Indian transactions that month?**
GSTR-5A is filed monthly. Yes, you still have to file even in a month with no Indian transactions — a nil return is still a required filing, and skipping it because "there was nothing to report" is treated as a missed filing, not a non-event.

**What happens if a foreign SaaS company doesn't register for GST in India?**
Non-registration exposes the company to a penalty under CGST Act Section 122 and to interest at 18% per annum on any unpaid tax under Section 50, running from when the tax was originally due. Enforcement in this space has also become considerably more active, with Indian authorities coordinating with the RBI and other agencies to identify offshore suppliers billing Indian customers without a registration, so an unregistered company's exposure isn't just theoretical — it's increasingly detectable.

**Does the October 2023 OIDAR amendment mean AI companies are covered too, not just "SaaS"?**
Yes. The amendment removed the older "minimal human intervention" qualifier and explicitly extended the OIDAR definition to cloud computing and AI-delivered digital services, alongside online advertising and education content. An AI company selling API access, inference, or a model-powered product directly to Indian customers is squarely inside this regime — "OIDAR" isn't a SaaS-only rule, even though most existing guidance on this topic is written as if it is.

**Is the equalisation levy still applicable to our business?**
No. The 2% equalisation levy was withdrawn in August 2024, and the separate 6% digital-advertising levy was withdrawn in April 2025. Neither applies any longer. What's still relevant for a foreign digital-services company is the OIDAR/GST obligation this page covers, and separately, Significant Economic Presence — an unrelated, direct-tax exposure.

**What is Significant Economic Presence, and is that the same thing as OIDAR?**
No — they're genuinely separate regimes. OIDAR/GST is an indirect tax triggered simply by billing Indian customers for digital services. Significant Economic Presence, under Section 9(9) of the Income-tax Act, is a direct-tax (income tax) concept that can apply to a foreign company with sustained, systematic Indian business activity, independent of your GST/OIDAR status entirely. Our [incorporation-timing guide](/doing-business-in-india/incorporation) covers Significant Economic Presence in full detail.

**Do we need to set up an Indian entity just to register for GST/OIDAR?**
No — this is one of the more common misconceptions we run into. OIDAR/GST registration is specifically designed for foreign suppliers without an Indian entity; it uses the non-resident taxable person route rather than requiring incorporation. You only need to think seriously about entity setup once you hit one of the signals in Scenario 3 of the decision framework above — a signed contract that needs India-registered invoicing, hiring beyond what an Employer of Record can support, or opening an India bank account. Registering for GST on its own isn't one of those signals.

---

## CTA

**Mid-page CTA (`LeadForm`, positioned directly after the decision framework):**
Heading: "Not sure which situation applies to you?"
Body: Tell us how you're billing Indian customers — directly, through a reseller, through an app store — and our GST advisory team will confirm your OIDAR registration position and what, if anything, needs to happen next.
Form: standard `LeadForm` fields (name, company, email, brief description), submit button "Get Your Compliance Position Confirmed."

**Embedded CTAs inside body sections (`InlineInquiryCTA` / `ClickableInfoCard`, as used elsewhere on the site):**
- Inside "Registering: Form GST REG-10..." — a short inline prompt: "We handle OIDAR registration end to end, including standing in as your Indian authorized representative — get in touch if you're ready to register."
- Inside "What Happens After Registration..." — a short inline prompt linking to `/outsourcing`: "Prefer not to build an internal process around one Indian monthly return? Our accounting & outsourcing team runs GSTR-5A filing for clients on an ongoing basis."

**End-of-page CTA (`LeadForm` + `RelatedResources`):**
Heading: "Get Your OIDAR/GST Position Confirmed"
Body: Whether you're still working out if this applies to you, ready to register, or already registered and want someone to take the monthly filing off your plate, our GST advisory team works with exactly this client segment — foreign SaaS, AI, and digital-services companies with Indian customers and no local entity.
Form: standard `LeadForm`.

`RelatedResources` grid (4 cards, matching the site's existing pattern):
1. **India Entry for SaaS & AI Companies** — "Thinking beyond compliance? Entity structuring, FEMA and tax for a formal India presence" → `/india-entry-for-saas-companies`
2. **Taxation & Regulatory Services** — "GST, direct tax and compliance once you have an Indian entity" → `/services/taxation-regulatory`
3. **Should You Incorporate in India Now?** — "The broader ready/wait decision, including Significant Economic Presence risk" → `/doing-business-in-india/incorporation`
4. **Accounting & Outsourcing** — "Monthly filing and books support, including GSTR-5A" → `/outsourcing`

---

## Writer's Notes — Needs Verification

Stage 9 fact-check complete (see `09-fact-check-page-a.md`). Status of each item below:

1. **CBIC notification number for the October 2023 OIDAR amendment** — confirmed via Stage 9: the substantive amendment was made by Section 160 of the Finance Act, 2023 (amending IGST Act §2(16)/(17)); Notification No. 28/2023-Central Tax (31 July 2023) is the commencement notification bringing it into force from 1 October 2023. Page continues to cite this descriptively rather than by notification number, which Stage 9 confirms is the safer framing.
2. **Form GST REG-09 → corrected to Form GST REG-10.** Stage 9 confirmed this was a genuine, confirmed error (not merely unsourced): REG-10 under CGST Rule 14 is the correct form for a foreign OIDAR supplier; REG-09 is for the general non-resident taxable person category (a different fact pattern — occasional physical presence, not zero-presence digital supply). **Fixed throughout the page** (section heading, body paragraph, and CTA reference).
3. **GSTR-5A due date ("20th of the following month")** — confirmed current by Stage 9 (ClearTax, Tax2win, gst.gov.in tutorial FAQ, CBIC reminders via Taxscan, all consistent).
4. **SAC Code 9983 — resolved by removal.** Stage 9 found conflicting sources (broad 9983 vs. narrower 9984/998439) and Stage 10 flagged the page as stating the code with more confidence than the sourcing supported, on a customer-facing invoicing claim. **Fixed**: the specific SAC code is no longer stated; the page now tells the reader to confirm the exact code with their advisor while keeping the confirmed 18% rate. The 18% rate itself remains stated as fact (confirmed by Stage 9 across multiple sources).
5. **CGST Act Section 122 — no rupee figure stated**, confirmed as the correct approach; Stage 9 did not find grounds to add a specific quantum.
6. **CGST Act Section 50 — 18% per annum** confirmed current (Stage 9: TaxBuddy, ClearTax, TaxO citing a 2026 Bombay HC ruling still applying this rate).
7. **IGST Act Section 13(12)** — confirmed accurate by Stage 9 across multiple independent sources.
8. **Equalisation levy withdrawal dates** — confirmed exactly correct by Stage 9 (2% levy withdrawn 1 August 2024 via Finance (No. 2) Act 2024; 6% ad levy withdrawn 1 April 2025 via Finance Bill 2025).
9. **DGGI enforcement claim — corrected.** Stage 9 confirmed the general enforcement-intensification trend is real and well-sourced (a September 2024 DGGI proposal reported across multiple independent outlets), but the specific "payment-gateway and card-network data" mechanism was not supported by any source. **Reworded throughout the page** to the sourced mechanisms instead (RBI forex-data coordination, foreign-government information-sharing), phrased as "reported" rather than asserted as fully operational, per Stage 9's recommendation.
10. **Indian authorized representative requirement** — confirmed by Stage 9 as required under CGST Rule 14; page describes it procedurally without over-citing the rule number inline, which is fine as drafted.
11. SEP thresholds intentionally not restated on this page, per Stage 6 scoping — confirmed correct, no change needed.

**Remaining open items for human professional sign-off before publish** (per Stage 9's verdict, not resolvable through further research): live confirmation that the gst.gov.in NRTP-supplier tutorial URL resolves (WebFetch was blocked in this sandbox); currency of Income-tax Act 2025 §9(9) SEP text given how recently that Act commenced; current operational status of the 2024 DGGI enforcement measures (proposed vs. confirmed implemented); and the SAC code precision question in item 4 above.

One structural observation, not a request to deviate: the approved architecture is sound and I followed it as specified. The one place I'd flag for Stage 8/11 to keep an eye on is the "What Happens If You Don't Register" section — it's the section most exposed to Item 9 above, and if Stage 9 can't verify a citable enforcement trend, that paragraph should be trimmed rather than left as an unsupported claim, even though the surrounding statutory penalty content (Sections 122/50) is on solid ground.
