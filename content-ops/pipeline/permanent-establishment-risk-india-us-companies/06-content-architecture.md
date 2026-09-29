# Content Architecture: Permanent Establishment (PE) Risk in India for US Companies

Date: 2026-09-29
Input: STATUS.md, 01-serp-research.md through 05-au-positioning.md, plus direct reads of `app/india-entry-for-us-companies/page.tsx`, `app/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary/page.tsx`, `app/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary/page.tsx`, `app/doing-business-in-india/incorporation/page.tsx`, `app/india-entry-for-australian-companies/page.tsx`, `app/doing-business-in-india/entry-process/page.tsx`, `app/services/taxation-regulatory/page.tsx`, `content-ops/keyword-database/topics.csv`, and `content-ops/pipeline/india-entry-us-register-company/06-content-architecture.md` (the approved architecture whose CTA/LeadForm pattern this stage is instructed to match).

---

## Recommended Content Type

**India-entry guide / regulatory explainer — a new sibling page in the `/india-entry-for-us-companies/*` cluster**, not a blog article, not a comparison page, not a generic FAQ page.

Why, tied to SERP intent (Stage 1): Stage 1 found this SERP is **predominantly informational-with-embedded-commercial-intent** and explicitly **not bottom-funnel** ("no purely transactional pages ranking... this looks like a guide/education-first SERP"). The strongest-ranking competitor pages are durable guides and legal/regulatory explainers (vjmglobal.com, treelife.in, ksandk.com), not dated blog posts — several are explicitly year-stamped to signal an actively maintained reference, not a one-off article. A blog article would undersell a topic this legally dense and would sit oddly next to the durable, non-dated register the rest of the `/india-entry-for-us-companies/*` cluster already uses (the FEMA and transfer-pricing sibling pages are both durable guides, not blog posts). A pure FAQ page would fail to carry the four-way typology and case-law analysis that Stage 3/4 confirmed is the real competitive bar. This page's job — per Stage 4/5 — is to answer a specific, high-stakes legal-risk question (does my current or planned India activity create a taxable presence) with the same register AU Corporate already uses on the FEMA and transfer-pricing siblings: named sections, statutes, forms, and case law, not generic explainer prose.

---

## Cannibalization Check

Four existing AU Corporate pages carry real PE-adjacent content (confirmed by Stage 5's direct-read re-verification, not just Stage 4's narrower two-file check):

| Existing page | Overlap | Verdict |
|---|---|---|
| `/doing-business-in-india/incorporation#pe-risk` | Genuine subject overlap — "Business Connection Risk" section states Section 9 of the Income-tax Act, 2025 and Significant Economic Presence (Section 9(9)) as pre-incorporation exposure. | **No cannibalization risk.** That page targets a general, nationality-agnostic "should I incorporate now" reader, with PE/business-connection risk as one supporting paragraph inside a broader decision checklist — not a dedicated typology/case-law/EOR-analysis page. Stage 1-3's competitive research never surfaced this page for any PE-specific query. **Action: do not restate its decision-checklist content; add a cross-link from its `#pe-risk` section to this new page** ("for the full US-treaty-specific PE typology, case law, and EOR-risk analysis, see..."), and this new page must stay numerically consistent with it (Section 9, not renumbered). |
| `/india-entry-for-australian-companies` | Light overlap — PE info card + FAQ, but for the India-Australia treaty (183-day Service PE threshold), not India-US. | **No cannibalization risk** — different treaty, different target country, different URL cluster. **Numeric consistency required**: this new page must state the India-US Service PE threshold as **90 days**, matching the figure already live there as the comparison point against Australia's 183 days. |
| `/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary` | No overlap — explicitly and exclusively post-incorporation in scope ("Once your Indian subsidiary is incorporated and receives foreign direct investment..."). PE/permanent establishment is not mentioned anywhere in that file. | **No cannibalization risk.** This is a forward-link target for post-incorporation FEMA mechanics, not a competing page. |
| `/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary` | No overlap — covers Section 482/Sections 161-173 TP mechanics between an already-incorporated subsidiary and its US parent. | **No cannibalization risk.** Forward-link target for the PE-finding documentation/profit-attribution cascade, not a competing page. |
| `/doing-business-in-india/entry-process` | Light overlap — one line naming "a permanent establishment risk from an EOR or liaison arrangement that drifts into commercial activity" as a named Tax Exposure risk, and treats EOR neutrally as a legitimate route. | **No cannibalization risk** — that page's EOR/PE treatment is a single sentence inside a broader market-entry-routes page. Good candidate for a reciprocal cross-link once this page exists. |

**Keyword-database cross-check**: `content-ops/keyword-database/topics.csv` was searched for "permanent establishment," "PE risk," and the target cluster path — **no existing row claims this topic or URL**. No conflict; this is a genuinely new topic entry in the database, not a duplicate of an already-tracked row.

**Recommendation: build the new sibling page.** The site's existing PE content is real but scattered in single paragraphs/FAQs across four pages serving different audiences and different (lighter) depths — none of them is a dedicated, US-treaty-specific, case-law-grounded PE page. This new page consolidates and deepens that fragment set rather than competing with any one of them, provided it (a) stays numerically consistent with all four and (b) does not restate the FEMA/TP sibling pages' mechanics or the incorporation page's general decision checklist.

---

## SEO Title
**Permanent Establishment Risk in India for US Companies | AU Corporate**
(61 characters incl. brand suffix — exact-match primary keyword per Stage 2's evidence base of 3 independent domains using this phrasing in ranking titles: kaam.work, beaconfiling.com, anjusmriti.com. Matches the sibling pages' `"... | AU Corporate"` title convention.)

## Meta Description
**How US companies trigger permanent establishment risk in India — the four PE types, DTAA Article 5 thresholds, key case law, and whether an EOR or subsidiary actually eliminates exposure.**
(163 characters — leads with the primary keyword phrasing naturally, signals the page's real differentiators (typology + thresholds + case law + the EOR question) per Stage 3/4's confirmed gap analysis, avoids promising a specific tax-rate figure that Stage 4/5 explicitly decided not to publish without Stage 9 sign-off.)

## Suggested URL
`/india-entry-for-us-companies/permanent-establishment-risk-india`
(Matches STATUS.md's `proposed_url`, confirmed still unclaimed via Glob/Grep of `app/`. Matches the existing sibling naming pattern — `fema-compliance-us-company-india-subsidiary`, `transfer-pricing-us-india-subsidiary`, `us-subsidiary-vs-branch-office-india`, `how-to-incorporate-subsidiary-india-from-us` — all lowercase-hyphenated, topic-first, US-context implied by the parent path.)

## Primary Keyword
permanent establishment risk India US company

## Secondary Keywords
permanent establishment risk India (broad head term) · does hiring in India create a permanent establishment · does an Indian subsidiary create PE for its US parent · does using an Employer of Record (EOR) eliminate PE risk in India · DTAA Article 5 permanent establishment India USA · dependent agent permanent establishment India (DAPE) · service PE India 90 days · avoid PE risk India · "for foreign companies" (natural body-copy variant per Stage 2's Foreign/International Framing Check — not a heading target)

## Search Intent
Informational, risk-awareness / early-to-mid-funnel, with embedded commercial intent — confirmed by Stage 1 as a guide/education-first SERP with no purely transactional pages ranking. Reader has either (a) no Indian entity yet and is using contractors/EOR, (b) is deciding whether to incorporate, or (c) has already incorporated and is asking whether PE exposure survives incorporation.

## Target Audience
A US-side CFO, founder, or in-house counsel assessing India tax-presence risk — at any of three stages: pre-incorporation (contractor/EOR-only India activity), incorporation-decision stage, or post-incorporation (residual parent-level PE exposure that a subsidiary does not automatically eliminate). Distinct from the FEMA/TP sibling pages' reader, who has already decided to incorporate and needs filing mechanics.

## Recommended H1
**Permanent Establishment Risk in India for US Companies**
(Exact primary-keyword match, consistent with the sibling pages' direct, topic-first H1 pattern.)

---

## H2/H3 Structure

Structured around the user's actual search journey per Stage 1/4: readers arrive either not knowing what PE is (need the typology first), or already knowing and searching a specific sub-question (subsidiary, EOR, hiring). The outline leads with the typology (table stakes, per Stage 4's Minimum Coverage List), then answers the load-bearing sub-questions in the order Stage 1/2 found them recurring, then closes with the pre-incorporation→post-incorporation decision path that Stage 3/4 confirmed no competitor structures as one journey.

**Intro block (no heading)**
Frames the core legal point up front: PE/business-connection exposure is a function of *activity in India*, not of whether a US company has registered an entity — it can exist before incorporation and can survive after it. One sentence on AU's dual CA/US-CPA framing (matching the hub's existing tone, not restating it — a PE finding has real US-side consequences on Form 5471/Schedule M and, for a branch, Form 8858).

### H2: What Is Permanent Establishment, and Why India Asserts It Aggressively
Short framing section: DTAA Article 5 as the treaty-level definition, Section 9 of the Income-tax Act, 2025 (not renumbered — successor to the 1961 Act's identically structured business-connection provision, already stated on `/doing-business-in-india/incorporation`) as the domestic-law parallel, and the point (per Stage 4's Differentiation #6, evidenced by beaconfiling.com) that DTAA protection is generally more favorable than the domestic test but has to be actively claimed and supported, not assumed — matching the exact language already live on the incorporation page ("that protection has to be actively claimed and supported, not assumed").

### H2: The Four Ways a US Company Can Trigger PE in India
The typology section — table stakes per Stage 4's Minimum Coverage List item 1, matching wisemonk.io's clarity bar but adding case-law grounding no competitor combines with it.
- **H3: Fixed Place PE** — a physical location through which business is wholly or partly carried on (office, warehouse, workspace). Case law: Formula One World Championship Ltd. v. CIT (SC, 2017) — the "stability, productivity, dependence" test for what counts as a fixed place at the US company's disposal. Practical mitigation: short-term/non-exclusive workspace arrangements rather than a standing leased office.
- **H3: Service PE — the 90-Day Threshold** — services furnished through employees/personnel present in India beyond the treaty threshold. States **90 days in any 12-month period under the India-US DTAA** (matching the figure already live on `/india-entry-for-australian-companies` as the comparison point against Australia's 183 days — numerically consistent, not re-derived). Explains the tightened ~30-day threshold for services to an associated enterprise and the underlying mechanism (related-party services are treated as inherently more likely to reflect sustained operational integration, not one-off engagement — closing the gap Stage 4 flagged as "named as a number, not explained"). Case law: Morgan Stanley & Co. (SC, 2007) — stewardship vs. service activities.
- **H3: Dependent Agent PE (DAPE)** — activity-based, not time-based: a person habitually negotiating or concluding contracts on the US company's behalf, or habitually securing orders wholly/mainly for it. Grounds the "virtual projection" / effective-control standard from ADIT v. E-Funds IT Solution Inc. (SC) — the direct precedent behind this project's originating competitor opportunity.
- **H3: Construction PE** — a building site, construction, or installation project exceeding the treaty's duration threshold (commonly stated as 6-12 months across sources; note as the least US-company-relevant of the four for AU Corporate's typical client, brief treatment).
- **H3: "Preparatory or Auxiliary" Activities — What's Excluded** — closes Stage 4's confirmed thin-coverage gap: concrete examples (a rep scouting suppliers vs. one negotiating terms; a server used only for data storage vs. one running revenue-generating operations).

### H2: Does an Indian Subsidiary Create PE for Its US Parent?
The single most load-bearing sub-topic per Stage 1's finding #6 and this project's originating opportunity (VJM Global's page). Direct answer: no, not automatically — mere incorporation and access to the subsidiary's premises is insufficient under the E-Funds "virtual projection" standard; the parent needs effective, sustained operational control for the subsidiary itself to become or house a PE. Includes a concrete worked illustration (per Stage 3's observed strength in the vjmglobal.com page: how easily an associated-enterprise day-threshold is breached — e.g., a small US team spending two weeks on-site already stacking meaningful person-days). This is the section combining vjmglobal.com's narrow legal answer with the full typology in one page (Stage 4 Differentiation #3).

### H2: Does Hiring or Engaging a Consultant in India Create PE?
Direct answer to the second load-bearing PAA question. Separates the employee case from the independent-consultant case as two distinct legal tests (per Stage 4 Differentiation #4, the ksandk.com pattern — no competitor combines this with day-thresholds or a consequence figure; this page does both): an employee's conduct is assessed under the DAPE "habitual authority to negotiate/conclude contracts" test; an independent consultant is assessed additionally against whether their activity is legally and economically independent of the US company, not merely formally structured as a separate engagement.

### H2: Does Using an Employer of Record (EOR) Eliminate PE Risk in India?
**The section most at risk of reading wrong — drafted per Stage 5's explicit tone guidance, not a competitor-style reassurance or a sales pitch.**
- Opens by naming the actual legal point precisely: PE exposure is a function of *conduct and control* — who negotiates and concludes contracts, who directs day-to-day work, whether the activity is habitual and not merely preparatory/auxiliary — not of which employment vehicle a person sits under.
- States plainly, matching the tone already live on `/doing-business-in-india/entry-process`: an EOR is one legitimate, lawful route to market with real limits, not a risk to be argued against. It reduces certain exposure (resolves the "is this person even legally engaged with India" question) but does not, by itself, wall off dependent-agent or fixed-place risk if the underlying on-the-ground conduct still looks like the US company operating in India.
- Goes to the operational depth Stage 3/4 identified as the real SERP-wide gap: names the specific conduct beyond formal contract-signing that creates residual exposure (habitual involvement in negotiating deal terms, de facto day-to-day operational control over EOR-employed staff, local decision-making authority) and the documentation/operating practice that supports a defensible "no PE" position under audit (who holds contract-signing authority and where, how instructions to India-based staff are issued and from where, whether pricing/deal terms are set in the US).
- No sentence structured as "unlike EOR providers, AU Corporate..." Never positions against a category AU doesn't compete in. Any CTA here (see CTA Strategy) is entity-agnostic — works the same for a contractor, EOR, or already-incorporated reader.

### H2: What Happens If a US Company Is Found to Have a PE in India
The consequence section — written around the **mechanism**, per Stage 4/5's explicit resolution of the unverified tax-rate conflict: profits attributable to a PE are taxed as a foreign company at the higher non-domestic corporate rate plus applicable surcharge and cess, in contrast to the lower domestic concessional rates (22% concessional / 25% / 30% standard / 15% for qualifying new manufacturing) a properly incorporated subsidiary can elect into — already published and verifiable today on `/services/taxation-regulatory`, used here as the consequence contrast instead of the two conflicting, unverified PE-specific percentages (~43.68% vs. ~38.22%) found in Stages 1-3. Names Section 271 as the penalty provision for related non-compliance (mechanism only — do not state a specific percentage/multiple without Stage 9 sign-off). Names the compliance cascade that follows a PE finding: PAN, TAN, ITR-6, and arm's-length documentation on attributed profits — with a single forward-link to the transfer-pricing sibling page for that mechanic rather than restating it.

### H2: Recent Case Law: What Tribunals Are Actually Deciding
Organized by PE type, not chronology (per Stage 4's "Potential Unique Angles" — no competitor structures it this way):
- **Fixed Place**: Formula One (SC, 2017); CIT v. Clifford Chance Pte Ltd. (Delhi HC, Dec 2025) — reaffirmed a physical-presence requirement, rejecting a "virtual" Service PE (India-Singapore treaty, cited for its reasoning on physical presence, noted as a different treaty than India-US).
- **Service PE**: Morgan Stanley & Co. (SC, 2007) — stewardship activities excluded.
- **DAPE / subsidiary-as-PE**: ADIT v. E-Funds IT Solution Inc. (SC) — the "virtual projection" standard.
- **Recent live example**: ITAT ruling on Booking.com (reported Feb 2026) — a large PE-based tax demand set aside, cited as a current illustration of how contested and fact-specific these findings are, not as a numeric consequence figure (per Stage 4's Open Item 1 handling — do not repeat the unverified $475M/Rs figure without Stage 9 sign-off; if Stage 9 later confirms it, it can be added here as a "why this matters" data point).
- Note: Hyatt International (treelife.in's unverified lead) intentionally excluded per Stage 4/5's explicit decision — the case-law set above already clears the competitive bar without it; add only if Stage 9 independently verifies it.

### H2: A Liaison Office Is Still Subject to PE Rules
Brief, natural mention per Stage 2/4's explicit call (not a full section) — RBI approval to operate a liaison office does not itself prevent a PE finding if its activity drifts beyond market research/coordination into commercial activity. One-sentence forward link to the FEMA sibling page's regulatory-filing content where relevant (liaison-office-specific RBI mechanics live outside this page's scope).

### H2: The Decision Path — Before, During, and After Incorporation
The structural centerpiece Stage 3/4 confirmed no competitor builds as one coherent journey, and the exact gap in AU's own FEMA sibling page (explicitly post-incorporation-only).
- **H3: No entity yet — contractor or EOR-only activity** — exposure exists here even with zero registered presence; ties back to the DAPE and Service PE sections above.
- **H3: Deciding whether to incorporate** — cross-links to `/doing-business-in-india/incorporation#pe-risk` for the general "should you incorporate now" decision checklist (this page does not restate that checklist — see Cannibalization Check).
- **H3: What changes once you incorporate** — a subsidiary gives the US company a properly structured, documented Indian taxpayer with arm's-length transfer-pricing support — the structure that makes a "no PE for the parent" position actually defensible, per the subsidiary/E-Funds section above.
- **H3: What does NOT change — residual PE exposure survives incorporation** — the parent itself can still have independent PE exposure (e.g., its own staff traveling and negotiating in India, its own dependent agents) even after the subsidiary exists; incorporating the subsidiary does not, on its own, wall off the parent's separate exposure. Forward-links to the FEMA sibling page for the "what to file once incorporated" mechanics rather than duplicating them.

### H2: Frequently Asked Questions
See FAQ Structure below.

### Closing: Related Reading / CTA
Cross-links to the pillar, FEMA sibling, transfer-pricing sibling, and `/doing-business-in-india/incorporation#pe-risk`; one closing LeadForm block (see CTA Strategy).

---

## FAQ Structure
Pulled from Stage 1's PAA-candidate list and Stage 4's confirmed-unanswered-questions — not invented. Each answer routes to the section that owns the depth.

1. **Does hiring in India create a permanent establishment?** — Direct answer: not automatically; depends on whether the person has habitual authority to negotiate or conclude contracts on the US company's behalf (DAPE test), links to the hiring/consulting section.
2. **Does an Indian subsidiary create PE for its US parent company?** — Direct no-by-default answer grounded in the E-Funds "virtual projection" standard, links to the subsidiary section. (Highest-priority FAQ per Stage 1's finding #6.)
3. **Does using an Employer of Record (EOR) eliminate PE risk in India?** — States the "reduces but doesn't eliminate" position plainly, links to the full EOR section for the operational/documentation depth.
4. **How many days can a US employee work or travel in India before triggering a Service PE?** — States the 90-day India-US DTAA threshold (numerically consistent with `/india-entry-for-australian-companies`), notes the tightened ~30-day associated-enterprise threshold.
5. **What is a Dependent Agent Permanent Establishment (DAPE)?** — Definitional, links to the typology section.
6. **Does a liaison office count as a permanent establishment in India?** — States that RBI approval to operate does not itself prevent a PE finding if activity exceeds non-commercial coordination; links to the liaison-office mention and the FEMA sibling page.
7. **What activities are "preparatory or auxiliary" and excluded from PE?** — Concrete examples, directly answers Stage 4's confirmed thin-coverage gap.
8. **What happens if a US company is found to have a PE in India?** — States the mechanism (higher foreign-company rate contrast vs. domestic concessional rates, Section 271 penalty mechanism, PAN/TAN/ITR-6/TP documentation cascade), explicitly does not assert a disputed percentage.
9. **Does incorporating an Indian subsidiary eliminate the US parent's own PE risk?** — The decision-path question: no — the subsidiary structures the documented position but doesn't automatically wall off the parent's own separate conduct-based exposure; links to the decision-path section.

---

## Internal Linking

### Pages that should link TO this page
| Existing page | Suggested anchor text |
|---|---|
| `/india-entry-for-us-companies` (hub — add to subPages grid, positioned before/alongside "Choosing a Structure" per Stage 4's structural note, since PE exposure predates incorporation) | "Permanent Establishment Risk for US Companies" |
| `/india-entry-for-us-companies` (hub — narrative addition) | A new short paragraph before the "Choosing a Structure" H2, framing PE exposure as a question that exists even before entity choice, linking through to this page |
| `/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary` (Related Reading block) | "Permanent Establishment Risk for US Companies" |
| `/doing-business-in-india/incorporation#pe-risk` | "For the full US-treaty-specific PE typology, case law, and EOR-risk analysis, see our dedicated guide" |
| `/doing-business-in-india/entry-process` (EOR card / Tax Exposure risk item) | "See our full permanent establishment risk analysis for US companies" |
| `/india-entry-for-australian-companies` (optional, low priority — different treaty/audience, only if a natural transition exists) | Not required; numeric consistency is the binding requirement, a cross-link is optional |

### Pages this page should link TO
| Existing page | Suggested anchor text |
|---|---|
| `/india-entry-for-us-companies` (hub) | "the full guide to doing business in India as a US company" |
| `/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary` | "FEMA compliance for US companies after incorporation" |
| `/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary` | "transfer pricing & Section 482 guide" (single forward-link, in the PE-consequence section only, per Stage 5's explicit TP-exclusion guidance) |
| `/doing-business-in-india/incorporation#pe-risk` | "our decision checklist for whether and when to incorporate" |
| `/services/taxation-regulatory` | "domestic concessional corporate tax rates" (used as the PE-consequence contrast point) |
| `/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india` | "subsidiary vs. branch office comparison" (in the decision-path section) |

### New supporting article needed?
**No.** Per Stage 5's hand-off note, the depth this topic needs is either owned by this new page directly (typology, case law, EOR analysis, decision path — the genuine gap) or already exists on sibling pages this page should forward-link to (FEMA filing mechanics, transfer-pricing documentation mechanics, domestic tax rates, the general incorporation-timing checklist). Building a second article would fragment a topic that needs exactly one authoritative, consolidated treatment.

---

## External Authoritative Sources to Cite
(Per Stage 4's confirmed gap — no competitor snippet in Stages 1-3 cited a primary source for these claims.)

- **`irs.gov/pub/irs-trty/india.pdf`** — the actual US-India DTAA treaty text (Article 5), linked directly rather than paraphrased secondhand. Confirmed reachable/indexed per Stage 1.
- **Income-tax Act, 2025, Section 9** — the business-connection provision, cited by section number, consistent with the citation already live on `/doing-business-in-india/incorporation`.
- **Section 271, Income Tax Act** — named as the penalty provision mechanism for PE-related non-compliance; do not state a specific percentage/multiple without Stage 9 primary-source sign-off.
- **Case law** (cite case name, court, year for each; do not assert holdings beyond what Stages 1-4 recorded, pending Stage 9 primary-source verification against a case-law database such as itatonline.org or indiankanoon.org): Morgan Stanley & Co. (SC, 2007); Formula One World Championship Ltd. v. CIT (SC, 2017); ADIT v. E-Funds IT Solution Inc. (SC); CIT v. Clifford Chance Pte Ltd. (Delhi HC, Dec 2025); ITAT ruling on Booking.com (Feb 2026).
- **OECD Commentary** — referenced naturally alongside the E-Funds "virtual projection" standard for the DAPE subsection, not as a standalone citation target.
- **RBI** (liaison-office context only) — a general statement that RBI approval to operate does not itself prevent a PE finding; do not cite a specific Master Direction unless Stage 9 confirms one, per Stage 2/4's "brief mention, not a section" scope.

**Explicitly excluded from this page pending Stage 9 verification**: any specific PE effective tax-rate percentage (~43.68% or ~38.22%); the Hyatt International Supreme Court case-law lead; any specific figure for the Booking.com tax demand or aggregate assessment stats. See Stage 4/5's explicit handling — do not ship these until independently verified against a primary source.

---

## CTA Strategy
Matches the confirmed non-transactional, consultation-led norm (Stage 1/2's "guide/education-first SERP") and the exact pattern used on the approved `register-company-in-india-from-usa` architecture and already live on `fdi-channels`/`project-office-in-india` (`LeadForm` component, mid-page + closing placement, no mid-content hard sell).

- **No CTA inside the typology, case-law, or subsidiary/hiring analysis sections.** These must read as pure legal/tax analysis — per Stage 5's explicit guardrail, service-line language belongs only at the natural transition points named below, not sprinkled through explanatory content.
- **No CTA inside the EOR section, and no CTA framed against EOR/contractor use.** Per Stage 5's explicit instruction, any offer here must be entity-agnostic (works the same for a contractor, EOR, or already-incorporated reader) — never "switch from your EOR to incorporating with us."
- **One mid-page `LeadForm` block**, placed after the "What Happens If a US Company Is Found to Have a PE in India" section (the natural point where a reader who's just read the consequence section is genuinely deciding whether to get a professional read on their own exposure) — matching the fdi-channels pattern: title something like "Not Sure Whether Your India Activity Creates PE Exposure?", description framed around a PE exposure review, not a specific service pitch ("Tell us about your India activity — contractors, EOR, or an existing subsidiary — and our tax team will assess your exposure and next steps").
- **One closing `LeadForm` block** at the end of the decision-path section, before Related Reading — standard closing consultation CTA, entity-agnostic language, matching the sibling-page pattern.
- **Related Reading / cross-link block** at the very end (hub, FEMA sibling, transfer-pricing sibling, incorporation `#pe-risk` page) — descriptive, not promotional.
- Service-line connections belong only at three natural transition points (per Stage 5): liaison-office mention → FEMA sibling page; PE-finding consequence → transfer-pricing sibling page; "what would a PE exposure review actually involve" → the LeadForm CTAs above. No other section should manufacture a service connection.

## Unique Content Angle

**The only page in the reviewed competitive set (per Stage 3's verdict) that combines all five of: (1) the full four-way PE typology with specific numeric thresholds, (2) case-law grounding current through Clifford Chance (Dec 2025) and Booking.com (Feb 2026) alongside the older Morgan Stanley/Formula One/E-Funds trio, organized by PE type rather than chronology, (3) an operationally rigorous, non-reassuring answer to "does an EOR eliminate PE risk" that names actual residual-exposure conduct and defensible documentation practice rather than stopping at "keep contract-signing authority in the US," (4) a single coherent pre-incorporation → incorporation → post-incorporation decision path that closes the same gap in AU's own FEMA sibling page, and (5) a verified consequence framing (domestic concessional rates vs. the higher foreign-company rate mechanism) that doesn't repeat either of the two conflicting, unverified PE-specific tax-rate figures circulating across the SERP.**

Reinforced by AU's stated right-to-win (Stage 5): a CA/US-CPA dual-qualified team can connect an Indian PE finding to its real US-side filing consequence (Form 5471/Schedule M, Form 8858 for a branch structure) in the same paragraph — something no India-only CA/law-firm competitor (VJM Global, treelife.in, ksandk.com, ahlawatassociates.com) can credibly do, and something the EOR platforms (wisemonk.io, kaam.work) have no tax-compliance depth to attempt. The page demonstrates this through precision — named sections, forms, and case law, matching the register already proven on the FEMA and transfer-pricing sibling pages — rather than claiming it in the abstract.

**One open item flagged for the human reviewer at Checkpoint 2 (not resolved by this stage, per its scope):** two content-integrity items remain explicitly pending Stage 9 primary-source verification before draft/publish — (1) the PE effective tax-rate percentage (do not publish either ~43.68% or ~38.22% until confirmed against the Finance Act/Income Tax Act rate schedule; the mechanism-only framing above does not require it), and (2) the Hyatt International case-law lead (excluded from the load-bearing case-law set; add only if independently verified). Both are carried forward exactly as Stage 4/5 resolved them — this stage introduces no new resolution, only confirms the architecture can ship without either.
