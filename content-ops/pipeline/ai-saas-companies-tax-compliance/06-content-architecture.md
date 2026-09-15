# Content Architecture: GST/OIDAR Compliance & India Entry for AI, SaaS and Technology Companies (Two-Page Pair)

Date: 2026-09-15
Inputs: `01-serp-research.md` through `05-au-positioning.md`, `STATUS.md`, live repo search over `app/` and `components/`.
Checkpoint 1 (APPROVED): two pages, not one — Page A (compliance-only/OIDAR) and Page B (India entry for AI/SaaS/tech).

This is the Checkpoint 2 deliverable. Both pages are specified in full below, followed by the shared decision-framework asset that must appear as first-class content on both (not a "see also" link), a shared tone brief, and a cross-page requirements recap. Nothing here is a sketch — a human should be able to approve this and hand it straight to the writer.

---

## Verified Against the Live Site

Confirmed via `Glob`/`Grep`/`Read` over `app/` and `components/` (not assumed):
- No existing page covers OIDAR, digital-services GST, or an AI/SaaS-vertical framing anywhere on the site — matches `STATUS.md`'s cannibalization check and `content-ops/keyword-database/topics.csv` (last row is the GCC page; no SaaS/AI/OIDAR row exists). **Clear to build both as new pages.**
- `app/services/taxation-regulatory/page.tsx` — live, has a GST section framed around the **domestic turnover threshold** (Rs 20 lakh services / Rs 40 lakh goods) for an *already-incorporated* entity, and a Transfer Pricing/DTAA section. This is the disambiguation anchor for both new pages.
- `app/doing-business-in-india/incorporation/page.tsx` — live "Should You Incorporate Now?" page. Has a Business Connection Risk section on **Significant Economic Presence, Section 9(9) of the Income-tax Act, 2025** — direct tax, legally distinct from OIDAR/GST. Also has a ready/wait-signal checklist structurally very close to what the shared decision framework needs (confirms the pattern is native to this site, not borrowed).
- `app/india-business-setup/company-formation/page.tsx` — live, generic entity/SPICe+/FDI/FEMA/GST-after-incorporation guide with a country-page callout grid at the bottom (`countryPages` array linking to all 7 `india-entry-for-*-companies` hubs) and a GCC cross-link. Page B should mirror this callout pattern, not re-explain SPICe+ mechanics.
- `app/gcc-setup-india/page.tsx` — live, top-level pillar, different (larger-enterprise) buyer tier per Stage 1/4/5. Link only.
- `app/india-entry-for-us-companies/page.tsx` (and uk/singapore/japan/germany/china/australian siblings) — live, use `RegionClusterTemplate`, each a "location page" per `topics.csv` with nested sub-pages (fema-compliance, transfer-pricing, cost-timeline, subsidiary-vs-branch). This is the geography-axis analog Page B should sit alongside, not inside.
- `app/outsourcing/page.tsx`, `app/services/accounting-assurance/page.tsx` — live, legitimate downstream links for "who actually runs the books/monthly filing," no overlap risk.
- Components confirmed to exist and inspected: `EntitySelectorTool.tsx`, `ClickableInfoCard.tsx`, `ClickableReveal.tsx`, `FaqAccordion.tsx`, `RelatedResources.tsx`, `InlineInquiryCTA.tsx`, `LeadForm.tsx`, `TabbedComparison.tsx`, `DocumentChecklist.tsx`, `Breadcrumb.tsx`, `Reveal.tsx`. Title/meta convention confirmed from `layout.tsx` files: `title.absolute` in the form `"X: Y (2026)"` or `"X | Y (2026)"`, canonical URL under `alternates.canonical`, a `keywords` array, no site-name suffix appended.

---

## Cannibalization Check

**No existing AU Corporate page covers OIDAR, digital-services GST, or an AI/SaaS-industry-vertical India-entry framing.** Confirmed independently by `STATUS.md`'s pre-pipeline check, `05-au-positioning.md`'s repo search, and this stage's own `Glob`/`Grep`/`Read` pass over `app/` and `content-ops/keyword-database/topics.csv`. Both pages are genuinely new ground.

**Real but non-cannibalizing overlap requiring explicit disambiguation, not merging:**
1. `/services/taxation-regulatory` (GST section, domestic turnover threshold) vs. Page A (OIDAR/NTOR, no-threshold rule for a foreign supplier with no entity). Different audiences, same tax (GST) — both pages must state the boundary explicitly, and cross-link both directions. **Recommendation: do not build a separate GST page — link to/from the existing `taxation-regulatory` page instead**, which is exactly what both new pages' outlines below do.
2. `/doing-business-in-india/incorporation` (Significant Economic Presence, Section 9(9), income tax) vs. Page A (OIDAR, indirect tax/GST). Related concepts, legally distinct regimes, different tax codes entirely — both pages must not blur them into one "you're exposed either way" statement. **Recommendation: link, don't merge or re-explain SEP mechanics on Page A** — one clearly-scoped paragraph plus a link is correct; a full SEP treatment stays on `incorporation`.
3. `/india-business-setup/company-formation` (generic SPICe+/entity/FDI mechanics) vs. Page B (SaaS/AI-specialized entry decision). **Recommendation: Page B must not re-explain SPICe+ step-by-step — link to `company-formation` for that and specialize only the SaaS/AI-specific decision inputs** (OIDAR status as an input, digital-services entity structuring, tax treatment from a SaaS lens).
4. `/gcc-setup-india` (larger-enterprise delivery/engineering center buyer) vs. Page B (standard commercial/compliance entry for a SaaS/AI company). **Recommendation: link only, one paragraph** — do not merge; different buyer tier, confirmed by Stage 1/4/5.

No recommendation to create anything beyond the two approved pages.

---

## The Shared Decision Framework (build once, use on both pages, identically)

This is the single most important content asset in this brief — the one thing zero of 8 reviewed competitors do (including Treelife's own two-page pair), and the reason a two-page split doesn't automatically produce the differentiation on its own. It must read as the **same framework on both pages**, not a summary on one and the full version on the other.

### Structure: "Which Situation Are You In?" — three scenarios

**Scenario 1 — Compliance-only, no entity.**
Signal: You're billing Indian customers directly (card, UPI, wallet — not through an app-store intermediary or a reseller) for a SaaS subscription, AI product, or digital-services product, with no India office, no local staff, no India bank account, and no plan yet to change that.
Consequence: You're in scope for OIDAR/GST registration from the first transaction — no turnover threshold, no grace period. This is a compliance obligation, not an entry decision. **→ Page A is the full treatment.**

**Scenario 2 — Hybrid / testing the market.**
Signal: You're already OIDAR-registered (or should be) and starting to see signals that push beyond pure compliance — exploring a local reseller or distributor relationship, considering a small support/customer-success presence via an Employer of Record, having early conversations about India-specific fundraising, or a prospect/government tender asking whether you have an India-registered entity.
Consequence: Not yet a trigger on its own, but each of these signals is a countdown, not a coincidence — this is the zone to actively watch, not park. **→ points to the specific "ready" signals in Scenario 3, and cross-references `/doing-business-in-india/incorporation`'s own ready/wait checklist**, since that page already runs the identical judgment call for the generic case and there's no reason to duplicate it, just apply it to this reader's specific signals (OIDAR-registered status, digital-services billing pattern).

**Scenario 3 — Ready to incorporate.**
Signal: You have a signed customer or purchase order that requires India-registered invoicing; you need to hire beyond what an EOR can reasonably support; you're about to open an India bank account, hold local assets, or raise India-specific capital; or a customer/tender requires proof of an India-registered entity before you can even bid.
Consequence: Entity setup (almost always a Wholly Owned Subsidiary for a SaaS/AI business) is now the right call, and your existing OIDAR obligation folds into the entity's ordinary GST position once it's incorporated — it doesn't disappear, it changes shape. **→ Page B is the full treatment.**

Each page presents all three scenarios in full (not just its own), so a reader lands on either page, self-locates, and gets pointed to the right depth — exactly the integration Stage 3/4's verdict says no competitor achieves. The scenario text itself should be near-identical word-for-word on both pages (small framing differences are fine — e.g. Page A's intro sentence says "start here if you have Indian customers," Page B's says "start here if you're deciding whether to formalize a presence" — but the three scenario descriptions, signals, and consequences must not diverge in substance).

### Implementation options for the writer/dev

**Preferred: a new, small interactive component**, modeled directly on the existing `components/EntitySelectorTool.tsx` pattern (same shape: an array of `{id, question, outcome, reasoning, link}` objects, click-to-reveal result, a "confirm with our team" link into the inquiry modal, a reset control) — but with three options (the three scenarios above) instead of five entity types, and with the `link` field pointing to the *other* page in the pair plus the relevant on-page section anchor. **This component does not exist yet** — flagging explicitly so it isn't mistaken for something already in `components/`. Recommend naming it `ScenarioSelector.tsx` and building it once, importing it on both pages with the same three-option array (defined once, e.g. in a shared `lib/decision-framework.ts`, imported by both `page.tsx` files) so the two pages cannot drift out of sync over time — this also solves the "must stay identical" requirement structurally, not just by editorial discipline.

**Fallback if a new component is out of scope before launch:** three static cards using the existing `ClickableReveal` pattern (as used for `routesToMarket` on `doing-business-in-india/incorporation` and `taxCalendar` on `taxation-regulatory`) laid out in a `grid md:grid-cols-3`, each with the scenario name, signal, and consequence, followed by explicit `Link` components to the relevant page/anchor (not `ClickableInfoCard`, since that component intentionally has no real link target and only opens the inquiry modal — wrong behavior here, where the cards need to route between Page A and Page B). This fallback uses only components already in `components/` and can ship without new development.

Either way, this section should sit **early** on both pages (see H2/H3 outlines below) — it's the organizing device Stage 3/4 explicitly call for, not a mid-page aside.

---

## Tone & Voice Guidance for the Writer (applies to both pages — carried forward from `STATUS.md` and `05-au-positioning.md`, restated here since Stage 6 is the last checkpoint before drafting)

- Humanized, plain-spoken, mechanism-first. Explain triggers the way a founder would actually notice them ("you're billing Indian customers directly with a card or UPI, not through an app store") rather than dense regulatory-summary prose.
- Write from direct, specific observation where the source brief supports it ("we've been seeing more of this," "companies are often surprised that...") rather than abstract third-person ("it is important to note that...").
- No stacked hedges/qualifiers that read as AI-generated caution. State things plainly; flag genuine uncertainty (e.g., the exact CBIC notification number for the Oct 2023 OIDAR amendment, pending Stage 9 verification) once, clearly, not defensively throughout.
- Vary sentence rhythm — avoid repetitive three-item-list cadence.
- No stacked "why choose AU Corporate" blocks. Every service-line mention (GST Advisory & Compliance, FEMA/RBI Compliance, Company Incorporation, Accounting/Virtual CFO) must sit inside the explanation it supports, not in a bolted-on self-promotional section.
- No manufactured statistics, client counts, or superlatives not present in the firm brief or verifiable elsewhere on the site.
- Cite statutory provisions the way `taxation-regulatory` already does — precisely, inline, without over-explaining the citation mechanism itself.
- Equalisation levy: past tense only, every time it's mentioned, on both pages.
- The decision-framework section should read as genuine, actionable guidance a founder could use immediately — not a lead-in to a generic pitch. CTA belongs at the usual points (mid-page `LeadForm`, inline `ClickableInfoCard`/`InlineInquiryCTA` inside relevant sections, end-of-page `LeadForm` + `RelatedResources`), matching the site's existing convention (`taxation-regulatory`'s mid-page `LeadForm` placement).

---
---

# PAGE A — OIDAR / GST Compliance for Foreign SaaS & AI Companies

## Recommended Content Type
**Regulatory explainer / compliance guide** — a durable, standalone page (not a dated blog post). Justification tied to SERP intent: Stage 1/2 show this cluster is dominated by informational-commercial hybrid "guide" content from advisory/compliance firms (Treelife, india-briefing, IndiaFilings, ClearTax), not blog-style commentary, and Stage 1 explicitly flags an annual-refresh naming convention ("2026 Guide") as a live competitive norm — this argues for an evergreen, periodically-updated guide page (like `company-formation` or `gcc-setup-india`, both of which carry a "Last updated" line and a year tag), not a `/blog/` entry that reads as a point-in-time post. This also matches Treelife's own structural choice (a standalone advisory-guide page, not a blog post) for its closest analog.

## Cannibalization Check
No existing page. Real, necessary disambiguation against `/services/taxation-regulatory` (domestic GST threshold, different audience) and `/doing-business-in-india/incorporation` (SEP, different tax regime) — both handled via explicit callout sections and cross-links below, not by avoiding the topics.

## SEO Title
**"GST & OIDAR Registration for Foreign SaaS Companies in India (2026 Guide)"**
(65 characters — matches confirmed site title convention; leads with the higher-recurrence plain-language phrase, carries the regulatory term, includes the evidenced "foreign" modifier and the freshness year-tag competitors use.)

## Meta Description
**"No Indian entity, but Indian customers? Here's when OIDAR/GST registration is mandatory, the GSTR-5A filing calendar, and what non-compliance actually costs."** (159 characters)

## Suggested URL
**`/oidar-gst-registration-india`**
Top-level, not nested under Page B. Justification: Page A and Page B are a matched, co-equal pair per Checkpoint 1 and Stage 5 ("first-class content on both, not a 'see also' link") — nesting Page A's URL under `/india-entry-for-saas-companies/...` (mirroring how country-entry sub-pages like `fema-compliance-us-company-india-subsidiary` sit under `/india-entry-for-us-companies/`) would misleadingly imply Page A is subordinate to an entry decision, when its whole point is that a reader can be squarely in scope *without* deciding to enter India at all. A top-level slug keeps the keyword ("OIDAR," "GST," "registration," "India") in the shortest possible path and treats the pairing as a cross-linking relationship, not a URL hierarchy — consistent with how `gcc-setup-india` and `outsourcing` sit as independent top-level pillars rather than being nested inside a parent.

## Primary Keyword
"OIDAR registration India" / "GST registration for SaaS companies in India" (dual-target — see justification below)

## Secondary Keywords
OIDAR GST India, SaaS company GST registration India, GSTR-5A filing OIDAR, non-resident taxable person GST India registration, digital services tax India foreign company, GST registration for foreign companies with no office in India, foreign SaaS company GST India, OIDAR registration for foreign SaaS providers

## Search Intent
Informational-commercial hybrid — reader has (or suspects) a real compliance obligation and is qualifying whether it applies to them before deciding whether to self-serve or engage advisory help.

## Target Audience
Founder, CFO, or finance/ops lead at a foreign (non-Indian) AI, SaaS, or digital-services company that has Indian customers but no Indian office, entity, or staff, trying to determine whether — and what — they're required to register and file.

## Recommended H1
**"OIDAR & GST Registration in India for Foreign SaaS and AI Companies"**

## Primary Keyword Justification
Stage 2 could not verify search volume (Semrush unreachable both times it was attempted) and explicitly declines to pick a single winner between "OIDAR registration India" (strongest single-term SERP recurrence — 4+ independent query clusters per Stage 1) and "GST registration for SaaS companies in India" (broadest plain-language recurrence, the more likely first-touch query for a founder who doesn't yet know the term "OIDAR"). Rather than guess with unverified volume data, this page dual-targets both in the title/H1/intro — a pattern Kanakkupillai and india-briefing themselves implicitly use — and lets the body content (which opens with the plain-language framing before introducing "OIDAR" as the formal term) carry the disambiguation. **Action item for whoever runs Stage 2's Semrush retry before this ships**: if volume data becomes available and shows a clear winner, tighten the H1 to lead with that term specifically.

## H2/H3 Structure

1. **Do You Actually Need to Register? The No-Threshold Rule for Foreign Digital-Services Providers**
   - The trigger: billing Indian customers directly (card, UPI, wallet) — not incorporation, not turnover
   - Callout box: *this is not the same as the domestic GST turnover threshold* — explicit disambiguation, linking to `/services/taxation-regulatory`
   - NTOR (Non-Taxable Online Recipient) — the B2C concept that puts the liability on you, the foreign supplier

2. **What Counts as OIDAR — and Why "AI-Delivered Services" Are Now Explicitly In Scope**
   - The legal definition (Online Information and Database Access or Retrieval)
   - The October 2023 amendment: dropped the "minimal human intervention" qualifier, explicitly extended scope to cloud computing, AI-delivered services, online advertising and education content — cited as a well-sourced clause within this scope section, not the page's H1 framing (per explicit brief instruction — keyword evidence for "AI" as primary is too thin per Stage 2)
   - Worked examples: a SaaS subscription platform, an AI API/inference product, a content/data-access platform — so an AI-native company doesn't assume this is "a SaaS-only rule"

3. **B2B Is Different — the Reverse-Charge Carve-Out**
   - When your Indian customer is itself GST-registered, liability shifts to them under reverse charge (IGST Act Section 13(12))
   - What this means practically for a company selling primarily enterprise/B2B rather than B2C

4. **Which Situation Are You In?** *(Shared Decision Framework — full build per spec above, not summarized)*
   - Scenario 1 given the fullest local treatment here (this page's core reader); Scenario 3 forward-points clearly to Page B

5. **Registering: Form GST REG-09, an Indian Representative, and What's Needed**
   - Registration mechanics at a practical level (Form GST REG-09, non-resident taxable person route)
   - The Indian authorized representative requirement
   - Statutory basis: CGST Act Section 24

6. **What Happens After Registration — the OIDAR Compliance Calendar**
   - GSTR-5A: monthly, due the 20th of the following month, including the nil-return obligation
   - SAC Code 9983 and the 18% GST rate — what has to show on the invoice

7. **What Happens If You Don't Register**
   - Section 122, CGST Act — the registration-failure penalty
   - Section 50, CGST Act — 18% p.a. interest on unpaid IGST
   - Current risk signal: intensifying DGGI enforcement via payment-gateway data sharing (2025-2026) — not boilerplate "you should comply" language

8. **The Equalisation Levy Is Gone — Here's What Still Applies Instead**
   - Stated strictly in the past tense: 2% levy withdrawn August 2024, 6% digital-advertising levy withdrawn April 2025 (Finance Bill 2025)
   - The bridge no competitor makes: what's still live is (a) this page's own OIDAR/GST obligation, and (b) Significant Economic Presence — a *separate, direct-tax* exposure, one clearly-scoped paragraph + link to `/doing-business-in-india/incorporation`, explicitly not conflated with OIDAR

9. **How This Differs From GST Once You Have an Indian Entity**
   - Direct disambiguation paragraph against `/services/taxation-regulatory`'s domestic-threshold framing, closing the exact misreading risk Stage 3 flags in a competitor page (Kanakkupillai)

10. **A Note on Global Digital-Services Tax Trends** (short, scope-honest — context only, no claimed EU VAT/OSS authority, per Stage 5's Scope Honesty guidance)

11. **FAQ**

12. Mid-page `LeadForm`; end-of-page `RelatedResources`

## FAQ Structure
(All sourced from Stage 1's PAA-proxy list and Stage 4's Unanswered PAA/Related Questions — none invented.)

1. Does my SaaS company need GST registration in India if we have Indian customers but no entity? *(Stage 1 PAA-proxy, Stage 4 flags as unresolved by every competitor reviewed)*
2. What is OIDAR under GST? *(Stage 1 PAA-proxy)*
3. Is there a turnover threshold before a foreign SaaS company has to register for GST in India? *(directly closes the Kanakkupillai conflation risk Stage 3/4 flag)*
4. What's the difference between NTOR and the reverse charge mechanism? *(Stage 2 related-search)*
5. How often do we need to file GSTR-5A — and do we still need to file if we had zero Indian transactions that month? *(Stage 1 recurring entity, nil-return point)*
6. What happens if a foreign SaaS company doesn't register for GST in India? *(Stage 1 PAA-proxy, Stage 4 confirms 0/8 competitors state the specific penalty)*
7. Does the October 2023 OIDAR amendment mean AI companies are covered too, not just "SaaS"? *(Stage 3/4's flagged white-space differentiator, phrased as a real reader question)*
8. Is the equalisation levy still applicable to our business? *(Stage 1/2 freshness trap — must answer "no, withdrawn" plainly)*
9. What is Significant Economic Presence, and is that the same thing as OIDAR? *(Stage 4's confirmed gap — 0/8 competitors address SEP at all; also the exact disambiguation Stage 5 flags as a correctness risk)*
10. Do we need to set up an Indian entity just to register for GST/OIDAR? *(Stage 4's "underlying founder anxiety left open by every page reviewed" question — answered here with "no," and routed into the decision framework)*

## Internal Linking

### Pages that should link TO this page
| Existing page | Suggested anchor text |
|---|---|
| `/services/taxation-regulatory` (GST section) | "if you're a foreign SaaS or AI company with Indian customers but no entity yet, GST works differently — see our OIDAR registration guide" |
| `/doing-business-in-india/incorporation` (Business Connection Risk / SEP section) | "GST/OIDAR registration is a separate, indirect-tax obligation from Significant Economic Presence — see our SaaS/AI compliance guide" |
| `/india-business-setup/company-formation` (GST Registration After Incorporation section) | "foreign digital-services providers without an entity face a different, no-threshold rule before incorporation — see our OIDAR/GST guide" |
| Page B — `/india-entry-for-saas-companies` (new) | "already thinking about setting up an Indian entity? See our India entry guide for SaaS and AI companies" |

### Pages this page should link TO
| Existing page | Suggested anchor text |
|---|---|
| `/services/taxation-regulatory` | "once you have an Indian entity, GST follows the ordinary domestic turnover threshold, not this no-threshold rule — see our taxation & regulatory practice" |
| `/doing-business-in-india/incorporation` | "Significant Economic Presence is a separate, direct-tax exposure worth knowing about too — see our incorporation-timing guide" |
| Page B — `/india-entry-for-saas-companies` (new) | multiple points: inside the Decision Framework (Scenario 3), and again near the compliance-calendar section ("if hiring or banking locally is now in the picture, here's what changes") |
| `/india-business-setup/company-formation` | "once you do incorporate, GST registration works differently — see our full company registration guide" |
| `/services/accounting-assurance` or `/outsourcing` | "someone still has to file the monthly GSTR-5A return — see how our accounting & outsourcing team supports that" |
| A relevant `india-entry-for-*-companies` page (contextual, light) | one sentence near the close: "if you're specifically evaluating a formal India presence from the US, UK or Singapore, our country-specific guides cover the FEMA and DTAA mechanics that apply once you do" |

### New supporting article needed?
No, not for launch. Flagged for a future run: (1) a standalone GSTR-5A filing walkthrough, (2) a worked SEP-threshold numeric example (Stage 4's "Company X bills $250K/year from 400 Indian users" format) — genuinely differentiating per Stage 4 but not required to clear Checkpoint 2 for these two pages.

## External Authoritative Sources to Cite
- **CGST Act, Section 24** — mandatory registration for a non-resident taxable person/OIDAR supplier.
- **CGST Act, Section 122** — penalty for failure to register.
- **CGST Act, Section 50** — 18% p.a. interest on unpaid IGST.
- **IGST Act, Section 13(12)** — place-of-supply rule underlying the B2B reverse-charge carve-out.
- **CBIC notification on the October 2023 OIDAR definition amendment** — exact notification number/date to be verified by Stage 9 (fact-authority-checker) against gst.gov.in/cbic.gov.in before publishing; do not state an unverified number.
- **gst.gov.in — Non-Resident Taxable Person registration user guide** (tutorial.gst.gov.in) — link directly rather than only paraphrasing.
- **Finance Act 2016, Chapter VIII** (original Equalisation Levy) and **Finance Bill 2025** (levy withdrawal) — for the past-tense equalisation-levy section.
- **Income Tax Act, 2025, Section 9(9)** — cited only as a pointer/cross-reference to `/doing-business-in-india/incorporation`, not explained in depth here.

## CTA Strategy
Informational-commercial, mid-funnel: the reader is qualifying an obligation, not yet shopping for a vendor. Soft-but-specific CTAs embedded inside each explanatory section (matching the `ClickableInfoCard`/`InlineInquiryCTA` pattern already used on `taxation-regulatory`), a mid-page `LeadForm` positioned right after the Decision Framework section (the natural point a reader has just self-identified their situation and is primed to act), and an end-of-page `LeadForm` + `RelatedResources` block. No stacked "why AU Corporate" section — the GST Advisory & Compliance service-line mention belongs inside the registration-mechanics and compliance-calendar sections where it answers the reader's actual next question.

## Unique Content Angle
The mechanism-first trigger (direct billing via card/UPI, independent of any threshold) stated with more regulatory precision than any single competitor (combining CGST §24, §122, §50 and IGST §13(12) in one place — currently split across three separate competitor pages per Stage 4), explicitly extended to AI-delivered services via the October 2023 amendment (zero competitors do this), the equalisation-levy-to-SEP bridge no competitor makes, and — the core differentiator — full, first-class integration with the entity-setup decision via the shared Decision Framework, rather than stopping at "you're in scope" the way every reviewed competitor does.

---
---

# PAGE B — India Entry for AI, SaaS and Technology Companies

## Recommended Content Type
**Industry-vertical India-entry guide** — the same content-type family as the existing `india-entry-for-*-companies` "location pages," but built on an **industry axis** (AI/SaaS/tech) rather than a geography axis. Justification tied to SERP intent: Stage 1/2 confirm the primary keyword ("India entry for SaaS companies") is a near-verbatim match to Treelife's own page title, and the competitor set here (Treelife, KNM India, Nexdigm) is advisory-guide content, not blog commentary — this is decision-stage informational-commercial content that belongs as a durable guide, structurally parallel to how the site already treats the geography axis.

## Cannibalization Check
No existing page. Overlaps with `/india-business-setup/company-formation` (generic entry mechanics) and `/services/taxation-regulatory` (tax/GST/transfer pricing detail) are real but resolved by **specializing, not duplicating**: this page covers only the decision inputs and structuring questions specific to a SaaS/AI company (OIDAR status as an input, digital-services entity choice, tax treatment from a tech-company lens) and links to the two existing pages for full procedural/tax depth, exactly as Stage 5 instructs. Also distinguished from `/gcc-setup-india` (different, larger-enterprise buyer tier) — link only.

## SEO Title
**"India Entry for AI, SaaS and Technology Companies: Entity Setup & Tax Guide (2026)"**
(74 characters — slightly longer than Page A's but within the range the site already uses for its longest live titles, e.g. `company-formation`'s 73-character title.)

## Meta Description
**"Deciding whether and how to set up in India as an AI, SaaS or tech company? Entity structure, FEMA/RBI basics, tax treatment and GST after incorporation."** (156 characters)

## Suggested URL
**`/india-entry-for-saas-companies`**
Top-level, exact-match to the primary keyword and structurally parallel to the existing `india-entry-for-us-companies` / `-uk-companies` / `-singapore-companies` / `-japan-companies` / `-german-companies` / `-china-companies` / `-australian-companies` family — this is a deliberate choice to treat "SaaS companies" as a new axis alongside "US/UK/Singapore companies" in the same URL pattern, which Stage 5 explicitly frames as complementary, not competing ("Country-vertical pages are a *geography* axis; this new pair is an *industry* axis"). Kept top-level (not nested under Page A) for the same matched-pair reasoning given for Page A's URL above.

## Primary Keyword
"India entry for SaaS companies"

## Secondary Keywords
India entry for tech companies, India subsidiary for SaaS company, wholly owned subsidiary India SaaS, India entry strategy for fintech and SaaS companies (natural, not direct — KNM close-analog phrasing), AI company India entry (natural only — Stage 2 flags this as unverified single-PAA-proxy evidence, do not force into H1/title)

## Search Intent
Informational-commercial hybrid — reader has decided (or is close to deciding) that a formal India presence is worth evaluating, and needs the SaaS/AI-specific decision inputs (not generic incorporation mechanics, which they can get elsewhere on the site).

## Target Audience
Founder, CFO, or COO of an international AI, SaaS, or technology company evaluating whether and how to establish a formal India presence — distinct from Page A's reader, who by definition has not yet made that decision.

## Recommended H1
**"India Entry for AI, SaaS and Technology Companies: Entity Structuring, FEMA and Tax"**

## H2/H3 Structure

1. **Why AI, SaaS and Tech Companies Are Entering India Now**
   - Brief, honest market-opportunity framing (100% automatic-route FDI for most tech/SaaS-adjacent sectors, depth of India's enterprise SaaS demand and VC/PE market) — no invented statistics, consistent with Stage 5's Scope Honesty guidance; this is the one place a Treelife-style opening move (market case before mechanics) is deliberately borrowed as a structural pattern, not content

2. **Which Situation Are You In?** *(Shared Decision Framework — same three scenarios, full build, not summarized — see spec above)*
   - Scenario 3 given the fullest local treatment here; Scenario 1 forward-points clearly to Page A

3. **Choosing Your Entity Structure for a SaaS/AI Business**
   - Wholly Owned Subsidiary as the default — why it fits most SaaS/AI go-to-market models specifically (invoicing Indian customers directly, holding IP, hiring a local team)
   - When branch office/liaison office/LLP make sense instead (narrower, less common cases)
   - **Reuse the existing `EntitySelectorTool` component here** — it already models exactly this decision (operate/test/project/branch/JV) and is a genuinely reusable, already-built asset, not a new one
   - Link out to `/india-business-setup/company-formation` for the full SPICe+ step-by-step — explicitly not re-explained here

4. **FDI Route and Sector Eligibility for SaaS/AI**
   - Brief: most SaaS/tech sectors sit on the 100% automatic route; link to `/india-business-setup/fdi-channels` for the full sector table

5. **Tax Treatment Once You Incorporate**
   - Indian subsidiary taxed as a domestic company (22% concessional rate) — bridge paragraph, link to `/services/taxation-regulatory`
   - Significant Economic Presence (Section 9(9)) — the cost of waiting too long to incorporate while India revenue keeps flowing — bridge paragraph, link to `/doing-business-in-india/incorporation`
   - Transfer pricing basics for a SaaS parent-subsidiary relationship (management fees, software licensing, group recharges) — one paragraph, link to `/services/taxation-regulatory`'s Transfer Pricing & DTAA section

6. **GST After You Incorporate — How It's Different From the OIDAR Rule You May Already Be Under**
   - Explicit disambiguation: domestic turnover threshold (post-incorporation) vs. the no-threshold OIDAR rule (pre-entity)
   - What happens to an existing OIDAR registration once you incorporate — it folds into the entity's ordinary GST position, it doesn't just disappear
   - Heavy link to Page A

7. **FEMA and RBI Compliance for a SaaS/AI Subsidiary**
   - FC-GPR (30-day window from share allotment), FC-TRS, annual FLA/APR via the FIRMS portal
   - Link to `/services/taxation-regulatory` and/or `/india-business-setup/regulatory-compliance` for full mechanics — not re-explained in depth here

8. **Post-Incorporation: What Changes Operationally**
   - Brief, practical mention of books/Virtual CFO support (someone has to run the monthly filings) — link to `/outsourcing` and `/services/accounting-assurance`
   - GSTR-5A → ordinary GSTR-1/GSTR-3B transition, tying back to Page A

9. **Building a Full Delivery or Engineering Center Instead?**
   - Light, one-paragraph cross-link to `/gcc-setup-india` for the subset of readers actually at that scale — explicitly not a pitch, per Stage 5's guardrail

10. **Entering India From a Specific Country**
    - Reuse the exact callout-grid pattern from `company-formation`'s "Registering a Company From a Specific Country" section, linking to all 7 `india-entry-for-*-companies` hubs, framed as: "some of the practical detail — DTAA rates, FEMA specifics — is genuinely country-specific; if you're planning entry from one of these markets, the linked guide covers it in depth"

11. **FAQ**

12. Mid-page `LeadForm`; end-of-page `RelatedResources`

## FAQ Structure
(Sourced from Stage 1/2's PAA-proxy list and Stage 4's gap analysis — none invented.)

1. What is the best entity structure for a foreign SaaS company expanding to India? *(Stage 1 PAA-proxy, Stage 4 confirms only answered as a bare menu or a stated default across the 8 competitors reviewed — this page answers it with an actual framework)*
2. Do we need to set up an entity if we already have Indian customers and are OIDAR-registered? *(Stage 4's confirmed unanswered founder anxiety — mirrors FAQ 10 on Page A, answered from the opposite direction)*
3. Is India's SaaS/software sector 100% open to foreign investment? *(Stage 1 recurring FDI-route context)*
4. How does GST work once we've incorporated, versus the OIDAR rule we were under before? *(direct disambiguation question, closes the exact confusion risk Stage 5 flags)*
5. What FEMA/RBI filings does a SaaS subsidiary need after incorporation? *(Stage 1/4 recurring entity — FC-GPR/FC-TRS/FLA, currently thin across the whole competitor field per Stage 4)*
6. How is our Indian subsidiary taxed, and does Significant Economic Presence affect when we should incorporate? *(Stage 4's confirmed gap — 0/8 competitors address SEP at all)*
7. Should we set up a Global Capability Center instead of a standard subsidiary? *(natural bridge question into the GCC cross-link section)*
8. Is a Wholly Owned Subsidiary the same thing as a Private Limited Company? *(Stage 1 recurring entity — genuine terminology confusion worth resolving plainly)*

## Internal Linking

### Pages that should link TO this page
| Existing page | Suggested anchor text |
|---|---|
| Page A — `/oidar-gst-registration-india` (new) | "already thinking about setting up an Indian entity? See our India entry guide for SaaS and AI companies" |
| `/doing-business-in-india/incorporation` | "for a SaaS/AI-specific version of this decision, including your existing GST/OIDAR status as an input, see our India entry guide for SaaS and AI companies" (light addition) |
| `/gcc-setup-india` | "if you're an earlier-stage or smaller SaaS/AI company not yet at GCC scale, see our India entry guide for SaaS and AI companies" (light addition) |
| One or two `india-entry-for-*-companies` hubs (e.g. US, UK, Singapore — the largest SaaS-origin markets per Stage 1's competitor patterns) | "SaaS or AI company specifically? See our industry-specific India entry guide" (light addition, optional for launch) |

### Pages this page should link TO
| Existing page | Suggested anchor text |
|---|---|
| Page A — `/oidar-gst-registration-india` (new) | multiple points: inside the Decision Framework (Scenario 1), and again in the GST-after-incorporation section |
| `/india-business-setup/company-formation` | "for the full step-by-step SPICe+ incorporation process, documents and timeline, see our company registration guide" |
| `/india-business-setup/fdi-channels` | "for the full sector-by-sector Automatic vs. Government Route table, see our FDI channels guide" |
| `/services/taxation-regulatory` | "for the full direct tax, GST and transfer pricing compliance calendar once you're incorporated, see our taxation & regulatory practice" |
| `/doing-business-in-india/incorporation` | "for the fuller 'should you incorporate now' decision checklist and Significant Economic Presence exposure, see our incorporation-timing guide" |
| `/gcc-setup-india` | "building a full delivery or engineering center rather than a standard commercial subsidiary? See our GCC setup guide" |
| `/outsourcing` or `/services/accounting-assurance` | "someone has to run the books and monthly filings post-incorporation — see how our accounting & outsourcing team supports that" |
| All 7 `india-entry-for-*-companies` hubs | country callout grid, reusing `company-formation`'s existing pattern and copy style |

### New supporting article needed?
No, not for launch. Flagged for a future run: an Australia-specific SaaS entry variant mirroring the existing `australia-subsidiary-vs-branch-office-india` cluster-page pattern, and a deeper GSTR-5A-to-GSTR-1/3B transition explainer — genuinely useful, not required to clear Checkpoint 2.

## External Authoritative Sources to Cite
- **Companies Act, 2013** — entity types, incorporation basics (light reference; full depth stays on `company-formation`).
- **FEMA, 1999** and **RBI Master Directions / FIRMS portal** — FC-GPR, FC-TRS, FLA/APR filing requirements.
- **Income Tax Act, 2025, Section 9(9)** — Significant Economic Presence (cross-reference to `/doing-business-in-india/incorporation`, not re-explained in full here).
- **CBDT notification on SEP thresholds** (INR 2 crore / 300,000 users) — cited only as context for the "cost of waiting" section, full worked-example depth deferred to a future supporting article.
- **CGST Act** (domestic turnover threshold) — cross-reference to `/services/taxation-regulatory`.

## CTA Strategy
Informational-commercial, later-funnel than Page A on average (this reader has more often already decided entry is worth evaluating). Same embedded-CTA pattern as Page A — no separate "why choose us" block. The `EntitySelectorTool` reuse in the entity-structure section doubles as a soft CTA (its existing "confirm this with our team" link routes into the inquiry modal). Mid-page `LeadForm` positioned after the entity-structure/FDI sections (the point a reader has a concrete structure in mind and is closest to acting), end-of-page `LeadForm` + `RelatedResources`, and the country-callout grid at the close functions as a secondary soft-navigation CTA into deeper, geography-specific content.

## Unique Content Angle
Specializes the site's existing generic India-entry content (`company-formation`) for the one input none of the geography-axis pages currently handle: a reader's existing (or likely) OIDAR/GST-compliance status as a genuine decision input, not an afterthought — closing the exact gap Stage 3 flags in Treelife's own India-entry page ("no visible integration of the GST/OIDAR obligation as a decision input") and the gap Stage 4 flags in KNM India's page (GST treated as "a light pairing" rather than a first-class input). Combined with the shared Decision Framework, this is the one thing that makes the two-page split genuinely better than Treelife's disconnected pair, rather than just a copy of its structure.

---

## Cross-Page Requirements Recap (for whoever builds Checkpoint 2 sign-off and Stage 7)

1. The three-scenario Decision Framework content must be **substantively identical** on both pages — same signals, same consequences, same scenario names — differing only in which scenario gets the fuller local treatment and which page each cross-link points to. If a new `ScenarioSelector` component is built, define the scenario data once and import it on both pages so this can't drift.
2. Every mention of the equalisation levy, on either page, must be past tense.
3. OIDAR (indirect tax/GST) and Significant Economic Presence (direct tax/income tax) must never be presented as the same thing or the same regime on either page — each mention of SEP is a scoped pointer to `/doing-business-in-india/incorporation`, not a re-explanation.
4. The domestic GST turnover threshold (`/services/taxation-regulatory`) and the no-threshold OIDAR/NTOR rule (Page A) must be explicitly distinguished on **both** new pages, not just Page A — Page B's readers will often arrive already OIDAR-registered and need the same clarity once they're evaluating incorporation.
5. Page A and Page B must cross-link each other prominently — at minimum inside the Decision Framework section and once more elsewhere on each page (see tables above) — not just once in a footer-style "related resources" block.
6. Neither page should claim EU VAT/OSS, UK VAT, or multi-jurisdiction indirect-tax authority — global VAT/GST context is one short, honestly-scoped paragraph maximum (Page A's "Global Digital-Services Tax Trends" section), never a comparison table or claimed capability.
7. No invented statistics, client counts, or named-individual claims on either page, consistent with the policy already applied retroactively to the 7 country-entry pages and `gcc-setup-india` per `topics.csv`.
