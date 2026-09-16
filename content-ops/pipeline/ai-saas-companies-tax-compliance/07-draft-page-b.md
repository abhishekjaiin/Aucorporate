# Draft: India Entry for AI, SaaS and Technology Companies (Page B of the OIDAR/India-Entry pair)

## Metadata
Title: India Entry for AI, SaaS and Technology Companies: Entity Setup & Tax Guide (2026)
Meta description: Deciding whether and how to set up in India as an AI, SaaS or tech company? Entity structure, FEMA/RBI basics, tax treatment and GST after incorporation.
URL: /india-entry-for-saas-companies

(Matches Stage 6 exactly — no tweaks needed.)

---

## Page Content

**Breadcrumb:** India Business Setup → India Entry for AI, SaaS and Technology Companies

# India Entry for AI, SaaS and Technology Companies: Entity Structuring, FEMA and Tax

*Last updated: 15 September 2026 — prepared by AU Corporate's cross-border tax and India business-setup practice.*

If you run an AI, SaaS or technology company and you're reading this, you've probably already got Indian customers, Indian usage, or an Indian team you're managing remotely — and you're now asking a different question than "do we owe GST here." You're asking whether it's time to actually set up in India: open an entity, hire directly, bank locally, hold your own contracts. That's a structuring decision, not a compliance trigger, and it deserves a different kind of answer than a registration checklist. This guide walks through India entry for AI, SaaS and technology companies: how that call actually gets made, what entity structure fits a digital-services business specifically, and what changes — tax, FEMA, GST — once you incorporate.

## Why AI, SaaS and Tech Companies Are Entering India Now

We've been seeing more international AI, SaaS and technology companies reach this point earlier than they expect to — often while they're still routing all their India revenue through a foreign entity, with no local office at all. Two things are usually driving it. First, most software, SaaS and AI-application businesses sit within India's 100% automatic-route FDI category, meaning there's no government approval gate to clear before you invest — you incorporate, remit capital, and report the transaction to RBI after the fact rather than asking permission before it. That alone removes a step that trips up founders coming from more regulated sectors. Second, India's own demand side for enterprise software, AI tooling and SaaS has kept growing, and a meaningful share of that demand — enterprise procurement teams, government tenders, larger customers doing vendor due diligence — increasingly expects to see an India-registered counterparty on the contract, not an invoice from a foreign entity with no local presence behind it.

None of that means every company with Indian customers should incorporate immediately — plenty shouldn't, yet. It means the decision has become a live one earlier in a company's growth than it used to be, and it's worth having an actual framework for making it rather than defaulting to "we'll figure it out when a customer asks."

## Which Situation Are You In?

Start here if you're deciding whether to formalize a presence in India. This is the same framework we use with clients directly, and it's built around three situations — not two — because most companies don't jump straight from "no presence" to "full subsidiary." Most sit in the middle for a while first.

*(This section renders on the live page as the shared `ScenarioSelector` component — the same `{id, question, outcome, reasoning, link}` data structure the site already uses for `EntitySelectorTool`, but pulling its three options from a single shared source file so this page and the OIDAR/GST compliance guide can never drift out of sync with each other. A reader clicks the scenario that matches their situation and gets the consequence plus a direct link into the relevant page/section. The full text each option reveals is below.)*

---

**Scenario 1 — Compliance-only, no entity.**
Signal: You're billing Indian customers directly (card, UPI, wallet — not through an app-store intermediary or a reseller) for a SaaS subscription, AI product, or digital-services product, with no India office, no local staff, no India bank account, and no plan yet to change that.
Consequence: You're in scope for OIDAR/GST registration from the first transaction — no turnover threshold, no grace period. This is a compliance obligation, not an entry decision.

**Scenario 2 — Hybrid / testing the market.**
Signal: You're already OIDAR-registered (or should be) and starting to see signals that push beyond pure compliance — exploring a local reseller or distributor relationship, considering a small support/customer-success presence via an Employer of Record, having early conversations about India-specific fundraising, or a prospect/government tender asking whether you have an India-registered entity.
Consequence: Not yet a trigger on its own, but each of these signals is a countdown, not a coincidence — this is the zone to actively watch, not park.

**Scenario 3 — Ready to incorporate.**
Signal: You have a signed customer or purchase order that requires India-registered invoicing; you need to hire beyond what an EOR can reasonably support; you're about to open an India bank account, hold local assets, or raise India-specific capital; or a customer/tender requires proof of an India-registered entity before you can even bid.
Consequence: Entity setup (almost always a Wholly Owned Subsidiary for a SaaS/AI business) is now the right call. Your existing OIDAR registration and your new entity's GST registration are two separate registrations under two separate legal persons — the OIDAR obligation doesn't just disappear, but it also doesn't automatically convert into the new one; the old registration needs to be formally wound down once the new entity's GST registration is in place.

---

If Scenario 1 is where you are — you're billing Indian customers but have no other India footprint — this page isn't the one you need yet. Our full **[OIDAR & GST registration guide for foreign SaaS and AI companies](/oidar-gst-registration-india)** covers exactly that obligation: when it applies, how to register, and what the filing calendar looks like. Come back here once one of the Scenario 3 signals shows up.

If you're already OIDAR-registered and sitting in Scenario 2, the watch-list above is the thing to check against every quarter, not a box you tick once. Our incorporation-timing guide on `/doing-business-in-india/incorporation` runs the same "ready or not yet" judgment call for the general case — the signals above are that same checklist, specific to a company that's already billing India directly and knows its OIDAR status.

And if you're in Scenario 3 — this is genuinely the core of this page, so the rest of it is written for you. A signed customer that needs an India-registered invoice, hiring that's outgrown what an Employer of Record can reasonably carry, or a tender that simply won't accept a foreign-entity bid are not soft signals. They're the specific, concrete triggers where the calculus stops being "should we" and starts being "how, and how fast." The sections below walk through exactly that: which entity fits a SaaS/AI business, what it costs you in tax and FEMA reporting once it exists, and what happens to the OIDAR registration you may already be carrying.

## Choosing Your Entity Structure for a SaaS/AI Business

For a SaaS or AI company that has reached Scenario 3, the entity conversation is usually shorter than founders expect, because one structure fits the overwhelming majority of cases: a **Wholly Owned Subsidiary (WOS)**, set up as a Private Limited Company under the Companies Act, 2013, with 100% of the shares held by the foreign parent.

The reason it fits so consistently isn't tradition — it's that a SaaS/AI go-to-market model needs exactly what a WOS gives you and doesn't need what the alternatives restrict. You're invoicing Indian customers directly, which needs a revenue-generating entity, not a Liaison Office (which can't invoice at all). You want to hold your own IP, contracts and, eventually, local team — which needs full operating flexibility, not the narrower, RBI-approval-gated activity list a Branch Office is limited to. And you're not bringing on a local partner to co-own the business, which is the one scenario where a Joint Venture actually makes more sense than 100% ownership.

The narrower structures still have real uses, just not for most SaaS/AI companies at the point they're reading this page:

- **Liaison Office** — fits a company that only wants a representative, non-revenue-generating presence for market research or partner coordination, with no intent to bill Indian customers from the India side at all. Rare for a SaaS business that's already past Scenario 2.
- **Branch Office** — fits a narrower, defined set of permitted activities where the parent is comfortable bearing the liability directly rather than ring-fencing it in a separate Indian entity; RBI approval-gated and less commonly used by digital-services companies than by, say, a services or project-execution business.
- **Project Office** — fits a single, time-limited contract, not an ongoing SaaS or platform business.
- **Joint Venture** — fits a company that specifically wants a local partner's market access or relationships baked into the ownership structure, not just as a reseller.

The entity-selection tool embedded below is the same interactive component the site already uses on our general company-formation guide — it walks through this same operate/test/project/branch/JV decision from a slightly more general angle, and it's worth running your own situation through it even if a WOS is already the likely answer, since it also flags the smaller number of cases where it isn't.

*(`EntitySelectorTool` component embedded here — reused as-is, no redesign needed; its "operate, invoice, hire staff and hold assets in India in our own name" option is the one most Scenario 3 readers on this page will select, and it routes straight to the WOS reasoning above.)*

For the actual mechanics of getting a WOS incorporated — the SPICe+ filing, Digital Signature Certificates, Director Identification Numbers, the resident-director requirement, and realistic timelines (roughly 4-6 weeks under the Automatic Route once documentation is in order) — we don't re-run that process here. Our **[company registration guide](/india-business-setup/company-formation)** covers the full step-by-step SPICe+ process, document checklist and timeline in detail; treat this page as the "which structure, and why, for a SaaS/AI business specifically" layer that sits in front of it.

## FDI Route and Sector Eligibility for SaaS/AI

The good news for most readers here is short: the majority of SaaS, AI-application and general software-services sectors sit under the **100% Automatic Route** for foreign direct investment, meaning no prior government approval is needed before the parent invests — the reporting happens after the fact, through RBI's FC-GPR filing, rather than as a gate you have to clear first. That's a genuinely useful, low-friction fact if you've been assuming India requires a lengthy approval process before you can even fund the entity; for most SaaS/AI businesses, it doesn't.

The caveat worth knowing rather than assuming away: sector classification isn't always as clean as "software" for a business whose product touches an adjacent regulated space — certain data-handling, fintech-adjacent, or broadcasting-adjacent functionality can pull parts of a business into a different sectoral bucket with its own conditions. If your product sits close to one of those edges, it's worth confirming classification specifically rather than assuming the general software category applies wholesale. For the full sector-by-sector Automatic Route vs. Government Route table, see our **[FDI channels guide](/india-business-setup/fdi-channels)**.

## Tax Treatment Once You Incorporate

Once your India entity exists, it's taxed the same way any other Indian domestic company is — on its own India-source profits, not by reference to the parent's home-country tax position. Most SaaS/AI subsidiaries elect into the concessional corporate tax regime under Section 200 of the Income-tax Act, 2025 (the provision previously numbered Section 115BAA under the 1961 Act), which brings the base rate down to **22%** — around 25.17% once surcharge and cess are added — in exchange for giving up certain exemptions and incentives most digital-services businesses weren't planning to claim anyway. Whether that election makes sense for your specific entity is worth confirming with your tax advisor rather than assumed, but for a straightforward SaaS/AI subsidiary it's the norm rather than the exception. For the full domestic tax-compliance calendar, see our **[taxation and regulatory practice](/services/taxation-regulatory)**.

There's a real cost to waiting too long to make this decision, and it isn't just "your competitors get there first." Under **Section 9(9) of the Income-tax Act, 2025**, a foreign company can trigger a taxable presence in India — a **Significant Economic Presence** — purely through the scale of its India-sourced digital transactions or active user base, independent of whether it has incorporated anything here at all. That's a separate, direct-tax exposure from the GST/OIDAR obligation covered on our compliance page — different tax, different trigger, different consequence — but it's the reason "we'll incorporate eventually" isn't a cost-free holding pattern once revenue and usage are both growing. The specific revenue and user-count thresholds that define SEP are set by the CBDT and are worth confirming against the current notification before you rely on them for planning; our **[incorporation-timing guide](/doing-business-in-india/incorporation)** covers the fuller decision checklist and the SEP exposure in more depth than belongs on this page.

Once there's a parent-subsidiary relationship in place, transfer pricing starts to matter too — management fees charged to the subsidiary, software or IP licensing arrangements, and group cost recharges all need to be priced at arm's length and documented, not set informally between related entities. This is a real compliance line item, not a footnote, but it's also not something a company evaluating whether to incorporate needs full documentation depth on yet — our taxation and regulatory practice covers the transfer pricing and DTAA mechanics in full once you're at that stage.

## GST After You Incorporate — How It's Different From the OIDAR Rule You May Already Be Under

This is the point where the two obligations that can look similar from the outside actually diverge, and it's worth being precise about it rather than leaving readers to guess.

Before incorporation, if you were billing Indian customers directly with no India entity, you were (or should have been) registered under the **OIDAR/NTOR rule** — no turnover threshold, liability from the first transaction, because the rule exists specifically for a foreign supplier with no local presence. Once you incorporate an Indian entity, that changes. Your new entity's GST position runs on the **ordinary domestic turnover threshold** instead — the same Rs 20 lakh (services) / Rs 40 lakh (goods) framework any other Indian company registers under, once its turnover crosses that line. These are genuinely two different rules for two different situations, not the same rule described two ways, and it's a common enough point of confusion that it's worth stating plainly: don't assume your pre-incorporation OIDAR registration and your post-incorporation domestic GST position are the same filing continuing under a new name.

What actually happens to the existing OIDAR registration matters practically, too — it doesn't just vanish the day your Certificate of Incorporation is issued, and it doesn't automatically merge into the new entity's GST registration either. They're two separate registrations under two separate legal persons — the foreign parent (OIDAR/NRTP) and the new Indian subsidiary (ordinary GST) — so your India-billing activity moves onto the new entity's GSTR-1/GSTR-3B cadence, while the old OIDAR registration needs to be formally wound down on its own, rather than assumed to convert automatically. Worth planning that cutover deliberately with your advisor, confirming the specific cancellation steps, rather than assuming it resolves itself. If you're not yet incorporated and want the full detail on the OIDAR side of this — registration mechanics, GSTR-5A filing cadence, what happens if you don't register — that's the full subject of our **[OIDAR & GST registration guide](/oidar-gst-registration-india)**.

## FEMA and RBI Compliance for a SaaS/AI Subsidiary

Once your India entity has foreign investment on its books, a small set of recurring RBI filings under the Foreign Exchange Management Act, 1999 (FEMA) come with it. **Form FC-GPR** reports the initial share allotment to the foreign parent — filed via the FIRMS portal, within a defined window from the date of allotment (30 days is the window we work to; worth confirming against the current RBI master direction rather than treating it as fixed indefinitely). **Form FC-TRS** covers any later transfer of shares between a resident and a non-resident, if that ever happens. And the **annual FLA (Foreign Liabilities and Assets) return** is a standing yearly obligation for as long as the entity carries foreign investment on its books — due every year regardless of whether any transaction happened in that particular year, which is the part first-time founders most often miss.

None of these are optional or symbolic — a missed FC-GPR window, for instance, has to be resolved through RBI's compounding process rather than a simple late fee, and that history sits on the entity's compliance record. We're not walking through the full filing mechanics here; our **[taxation and regulatory practice](/services/taxation-regulatory)** and **[regulatory compliance guide](/india-business-setup/regulatory-compliance)** both cover FEMA reporting in the depth an entity actually operating in India needs.

## Post-Incorporation: What Changes Operationally

Incorporation is the start of an ongoing compliance relationship, not a one-time filing you complete and move past. Someone has to run the monthly (or quarterly) GST filings, keep the books in a form that satisfies both Indian statutory requirements and whatever reporting your parent needs for consolidation, and manage the RoC annual filings and audit. For most foreign-owned entities in their first couple of years, that's a Virtual CFO / outsourced accounting arrangement rather than a full in-house finance function — our **[outsourcing](/outsourcing)** and **[accounting & assurance](/services/accounting-assurance)** teams support exactly this, and it's worth lining up before the entity's first filing deadline rather than after.

On the GST side specifically, this is where the GSTR-5A → GSTR-1/GSTR-3B transition mentioned above actually plays out in practice — the switch from the OIDAR filing calendar to the entity's ordinary domestic filing calendar is a real operational cutover, not just a label change, and it's worth having whoever runs your compliance calendar plan for it explicitly around your incorporation date.

## Building a Full Delivery or Engineering Center Instead?

Not every reader on this page is deciding between "compliance-only" and "a standard commercial subsidiary." Some are actually further along — planning to build a full captive engineering, R&D or delivery center in India rather than a commercial entity that primarily invoices local customers. That's a genuinely different scale and structure of India presence, with its own hiring, tax and operational considerations. If that's closer to what you're evaluating, our **[Global Capability Center setup guide](/gcc-setup-india)** covers that path in depth — it's a different guide for a different buyer, not an upsell from this one.

## Entering India From a Specific Country

Some of the practical detail that affects how your entry actually plays out — applicable DTAA rates, FEMA reporting specifics, subsidiary-vs-branch tradeoffs — is genuinely country-specific rather than universal to every foreign parent. If you're planning entry from one of the following markets, our country-specific India entry guides cover that jurisdiction's particular considerations in more depth than a general SaaS/AI page can:

- **[India entry for US companies](/india-entry-for-us-companies)**
- **[India entry for UK companies](/india-entry-for-uk-companies)**
- **[India entry for Singapore companies](/india-entry-for-singapore-companies)**
- **[India entry for German companies](/india-entry-for-german-companies)**
- **[India entry for Japanese companies](/india-entry-for-japan-companies)**
- **[India entry for Chinese companies](/india-entry-for-china-companies)**
- **[India entry for Australian companies](/india-entry-for-australian-companies)**

These are complementary to this page, not a repeat of it — they cover the geography-specific mechanics; this page covers what's specific to being a SaaS or AI business, wherever you're coming from.

## FAQ

**Q: What is the best entity structure for a foreign SaaS company expanding to India?**
A: For the large majority of SaaS companies, it's a Wholly Owned Subsidiary structured as a Private Limited Company — full ownership retained by the parent, no restriction on the activities it can carry out, and the ability to invoice Indian customers, hold IP and hire staff directly. The narrower structures (Branch Office, Liaison Office, Project Office, Joint Venture) fit specific situations — no local revenue generation, a single time-limited project, or a co-owned venture with a local partner — but they're the exception for a SaaS business, not the default. Run your specific situation through the entity-selector tool above if you're not sure which bucket you fall into.

**Q: Do we need to set up an entity if we already have Indian customers and are OIDAR-registered?**
A: Not automatically, no. Being OIDAR-registered means you're meeting a compliance obligation as a foreign supplier with no India entity — it doesn't by itself mean you should incorporate. The signals that actually mean it's time are concrete: a customer or tender requiring an India-registered invoice, hiring needs an Employer of Record can't reasonably support, or opening a local bank account and raising India-specific capital. Being OIDAR-registered is often the state you're already in right before those signals show up, not a reason to incorporate on its own — see the three-scenario framework above.

**Q: Is India's SaaS/software sector 100% open to foreign investment?**
A: For most SaaS, AI-application and general software-services businesses, yes — they sit within the 100% Automatic Route, meaning no prior government approval is required before the parent invests. Some adjacent activities (certain data-handling, fintech-adjacent, or broadcasting-adjacent functionality) can carry different sectoral conditions, so it's worth confirming your specific product's classification rather than assuming the general software category covers every part of your business. Our FDI channels guide has the full sector table.

**Q: How does GST work once we've incorporated, versus the OIDAR rule we were under before?**
A: Before incorporation, GST liability for a foreign digital-services supplier runs under the OIDAR/NTOR rule — no turnover threshold, liability from the first Indian transaction. After incorporation, your new entity's GST position follows the ordinary domestic turnover threshold instead (Rs 20 lakh for services, Rs 40 lakh for goods, in most states) — the same rule any Indian company registers under. Your existing OIDAR registration doesn't just disappear, and it doesn't automatically convert into the new entity's GST registration either — they're two separate registrations under two separate legal persons (the foreign parent and the new Indian subsidiary), so the old OIDAR registration needs to be formally wound down on its own once the new entity's GST registration is in place, while your India-billing activity moves onto the new entity's ordinary GSTR-1/GSTR-3B filing cadence.

**Q: What FEMA/RBI filings does a SaaS subsidiary need after incorporation?**
A: The core three are Form FC-GPR (reporting the initial share allotment to your foreign parent, filed via the FIRMS portal within a defined window from allotment), Form FC-TRS (for any later share transfer between a resident and non-resident), and the annual FLA return (a standing yearly filing for as long as the entity carries foreign investment, whether or not any transaction happened that year). These sit alongside the entity's ordinary RoC annual filings and statutory audit — our taxation and regulatory practice and regulatory compliance guide cover the full mechanics.

**Q: How is our Indian subsidiary taxed, and does Significant Economic Presence affect when we should incorporate?**
A: Once incorporated, your subsidiary is taxed as an ordinary Indian domestic company — most SaaS/AI subsidiaries elect into the concessional 22% rate (around 25.17% with surcharge and cess) under Section 200 of the Income-tax Act, 2025 (previously Section 115BAA under the 1961 Act). Significant Economic Presence (Section 9(9) of the Income-tax Act, 2025) is a separate consideration that matters before incorporation: it's a direct-tax exposure that can arise purely from the scale of your India-sourced digital revenue or user base, independent of whether you've set up an entity at all. It's not a reason to panic-incorporate, but it is a real reason "we'll get to it eventually" carries a cost the longer India revenue keeps growing without a local entity behind it.

**Q: Should we set up a Global Capability Center instead of a standard subsidiary?**
A: Only if what you're actually building is a captive engineering, R&D or delivery operation rather than a commercial entity that primarily invoices local customers — that's a different scale of presence with its own hiring and operational profile. If you're a founder or CFO evaluating a standard commercial or compliance-driven India entry, a GCC is very likely the wrong frame; our GCC setup guide is there for the subset of readers who are actually building at that scale.

**Q: Is a Wholly Owned Subsidiary the same thing as a Private Limited Company?**
A: A Wholly Owned Subsidiary isn't a separate legal category under the Companies Act — it's a Private Limited Company where 100% of the shares happen to be held by a single foreign parent. Every WOS is a Private Limited Company; not every Private Limited Company is a WOS (plenty have multiple or local shareholders). The distinction matters for describing ownership, not for which compliance regime applies — a WOS follows the same Companies Act, FEMA and tax framework as any other Private Limited Company.

## CTA

**Mid-page CTA (positioned after the FDI Route and Sector Eligibility section, once a reader has a concrete structure and route in mind — matching the site's existing `LeadForm` placement convention):**

> **Deciding Whether to Set Up in India?**
> Tell us where you are in the process — still weighing the decision, ready to incorporate, or already OIDAR-registered and watching for the trigger — and our India business-setup team will walk through the specifics with you.
> *[LeadForm: title "Deciding Whether to Set Up in India?", description "Tell us about your company and where you are in the entry decision — our team will get back to you directly."]*

**End-of-page CTA:**

> **Ready to Structure Your India Entry?**
> Whether you're still confirming which scenario you're in or you already have the signal that means it's time — a signed customer, a hiring need an EOR can't cover, a tender that requires an India entity — our team handles entity structuring, FEMA/RBI reporting and the tax setup that follows incorporation for AI, SaaS and technology companies specifically.
> *[LeadForm: title "Ready to Structure Your India Entry?", description "Share a few details about your company and current India presence — we'll follow up with next steps."]*

**RelatedResources block (end of page):**
- OIDAR & GST Registration for Foreign SaaS and AI Companies → `/oidar-gst-registration-india`
- Company Registration in India: A Complete Guide → `/india-business-setup/company-formation`
- FDI Automatic and Government Approval Routes → `/india-business-setup/fdi-channels`
- Should You Incorporate Now? (Incorporation Timing & SEP) → `/doing-business-in-india/incorporation`
- Taxation & Regulatory Compliance → `/services/taxation-regulatory`
- Global Capability Center Setup in India → `/gcc-setup-india`

---

## Writer's Notes — Needs Verification

Stage 9 fact-check complete (see `09-fact-check-page-b.md`). Status of each item below:

1. **Section 9(9), Income-tax Act, 2025 (SEP)** — confirmed correct and confirmed to match `/doing-business-in-india/incorporation`'s citation word-for-word. No change needed.
2. **SEP thresholds** — correctly not stated as a hard figure; no change needed.
3. **Section 115BAA → corrected to Section 200, Income-tax Act, 2025.** Stage 9 confirmed the Income-tax Act, 2025 is now the operative law (effective 1 April 2026, already in force) and that Section 115BAA was renumbered to Section 200 — the draft had correctly updated its SEP citation to the new Act but missed doing the same for this one. **Fixed throughout the page** (both the body paragraph and the FAQ), and the effective ~25.17% all-in rate is now stated alongside the bare 22% figure per Stage 9's recommendation.
4. **FC-GPR 30-day window** — confirmed current by Stage 9 across multiple sources.
5. **FLA return / FIRMS portal** — confirmed the draft doesn't actually claim FLA is filed via FIRMS (only FC-GPR is), so no error existed. FLA in fact runs on the separate FLAIR portal — noted for future editors not to conflate the two.
6. **GST domestic thresholds** — confirmed current and confirmed consistent with `/services/taxation-regulatory`.
7. **SPICe+ timeline ranges** — confirmed as the firm's own practitioner estimates, internally consistent with `company-formation`; not an externally-verifiable "fact" but no issue found.
8. **100% Automatic Route hedge** — confirmed appropriately scoped by Stage 9; no specific missed carve-out found.
9. **Equalisation levy** — confirmed Page B correctly doesn't restate the dates (that's Page A's content); no cross-page conflict.
10. **GSTR-5A → GSTR-1/GSTR-3B transition — corrected.** Stage 9 found the original "folds into"/"replaced by" framing risked implying the OIDAR registration automatically converts into the new entity's GST registration, when in fact these are two separate registrations under two separate legal persons requiring an affirmative wind-down step on the old one. **Reworded** in the body (GST-after-incorporation section) and, per Stage 10's review, the same fix has now also been applied to the FAQ answer on this topic (it had retained the original "transitions into... as part of the incorporation process" framing, which was inconsistent with the corrected body copy and with Page A). The same fix was also applied to Page A's matching passages, including the shared Decision Framework text, to keep both pages consistent and accurate.

## Notes on Structural Execution (not a deviation — confirming fidelity to the approved architecture)

- All three decision-framework scenarios are reproduced **word-for-word** from the brief's mandated text, with only the lead-in sentence adapted for this page ("Start here if you're deciding whether to formalize a presence in India"), matching Page A's own scenario text so a `ScenarioSelector` component can share one data source across both pages without drift.
- Scenario 3 receives the fuller local treatment (explicit bridge paragraph following the framework, plus the entire rest of the page built around it); Scenario 1 forward-points twice — once directly under the framework, once again inside the GST-after-incorporation section — to `/oidar-gst-registration-india`.
- `EntitySelectorTool` is described as reused, not redesigned, consistent with the architecture's explicit instruction.
- SPICe+ step-by-step mechanics, the full FDI sector table, and full FEMA/RBI filing mechanics are deliberately not re-explained — each is one bridge paragraph plus a link to `/india-business-setup/company-formation`, `/india-business-setup/fdi-channels`, and `/services/taxation-regulatory` / `/india-business-setup/regulatory-compliance` respectively, per the architecture's explicit "specialize, don't duplicate" instruction.
- The country callout grid mirrors `company-formation`'s existing pattern and copy style, linking all 7 `india-entry-for-*-companies` hubs.
- No equalisation levy mention was needed on this page's core content (it's Page A's subject); none was added, so there was nothing to misstate in tense.
