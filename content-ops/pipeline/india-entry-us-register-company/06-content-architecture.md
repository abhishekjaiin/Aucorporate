# Content Architecture: Register a Company in India from the USA

Date: 2026-09-28
Input: STATUS.md, 01-serp-research.md, 02-keyword-intent-map.md, 03-competitor-analysis.md, 04-content-gap.md, 05-au-positioning.md, plus a direct repo read of `app/india-entry-for-us-companies/**`, `app/llp-in-india`, `app/branch-office-in-india`, `app/liaison-office-in-india`, `app/project-office-in-india`, `app/india-business-setup/company-formation`, `app/india-business-setup/fdi-channels`, `app/doing-business-in-india/entry-process`, `components/EntitySelectorTool.tsx`, `app/sitemap.ts`.

---

## Recommended Content Type

**India-entry guide / decision-support pillar page** — a sibling "sub-hub" under `/india-entry-for-us-companies/`, not a blog article, not a narrow how-to, and not a pure comparison page in isolation.

Why, tied to SERP intent (Stage 1/2): Stage 1 found **no purely transactional intent** and a **predominantly informational/how-to, mixed informational-commercial intent** across every ranking page in this cluster — even service-selling domains rank with education-led guide content, consultation CTA at the end. Stage 2 confirmed the primary keyword's evidence base is near-verbatim title matches on dedicated, durable guide/country-pair pages (Commenda, CompaniesNext, Enterslice, MASLLP), not blog-dated content — several explicitly year-stamp ("2026") to signal freshness on a page meant to be maintained, not a one-off post. A blog article would undersell the page's job and would sit awkwardly next to the hub's existing durable-guide pattern. A single narrow how-to would duplicate `how-to-incorporate-subsidiary-india-from-us`. A standalone comparison page alone would ignore that Stage 1/2's proxy-PAA questions (cost, timeline, documents, resident director) need to live somewhere in the registration-intent journey too. Stage 5's "headline finding" is decisive here: most of Stage 4's differentiation list is already built elsewhere on AU's own site, so this page's real job — confirmed independently by Stage 3's verdict and Stage 5's positioning — is to be the **synthesis and routing layer** a "start here, I've decided to register, now what" searcher lands on, going deep in exactly one place (the 5-way entity decision) and linking out everywhere else.

---

## Cannibalization Check

STATUS.md already resolved the top-level question (new sibling page, not a refresh of `how-to-incorporate-subsidiary-india-from-us`) — this section restates and extends that check per Stage 5's explicit hand-off table, since it's structural and this stage owns the final call.

Six existing AU Corporate pages have real topical overlap. All six are judged **manage-via-scope-and-linking, not merge, not block**:

| Existing page | Overlap | Verdict |
|---|---|---|
| `/india-entry-for-us-companies` (hub) | Same audience, adjacent "why enter India" intent, similar H1 space | New page must stay visibly narrower and further down-funnel (registration-intent, not exploratory). Hub adds this page to its sub-page grid as the "compare & register" step; this page links back to the hub for market-entry rationale rather than restating it. |
| `/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india` | Deep 2-way entity comparison (RBI timeline, tax rates, CFC/5471/8858/926) | New page's 5-way table is a **lighter, decision-routing layer** (which of 5 options fits your activity), explicitly handing off to this page for full subsidiary-vs-branch tax/liability depth. Do not rebuild this content. |
| `/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us` | Full cost/timeline breakdown (4-6 wks / 8-12 wks / ₹55K-1.15L+) | New page **must not publish a second cost/timeline figure**. State the existing figures verbatim in 2-3 sentences and link out for the component-level breakdown. |
| `/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us` | SPICe+ step-by-step, apostille specifics, full resident-director/nominee-director resolution (3 named paths) | New page states the resident-director rule and apostille requirement briefly, framed as gating questions relevant to *any* entity choice (not just subsidiary), and links here for the worked mechanics. |
| `/llp-in-india`, `/branch-office-in-india`, `/liaison-office-in-india`, `/project-office-in-india` | Standalone, nationality-agnostic deep pages per entity type | New page's table entry for each gives 2-3 sentences of US-specific selection criteria, then links out for the general RBI-approval/FDI-eligibility mechanics. |
| `/india-business-setup/company-formation` | Generic 7-entity list, general SPICe+ steps, foreign-director note | This new page is the US-specific, decision-oriented sibling; reference the general page for readers without US-specific context rather than duplicating its step list. |

**Keyword-database cross-check:** `content-ops/keyword-database/topics.csv` was searched for this topic's keyword variants (`register company in India from USA`, `register-company-in-india-from-usa`, `india-entry-us-register-company`) — no existing row found, so there is no separately tracked topic already claiming this keyword. No conflict.

**Recommendation: build the new sibling page**, scoped exactly as Stage 5 defined it — a thin, well-linked synthesis layer, not a sixth deep page competing with the five that already exist. This is also the strongest anti-cannibalization argument: a page that routes traffic into five existing deep pages via confident internal linking lifts all of them rather than splitting intent across six overlapping pages targeting adjacent phrases.

---

## SEO Title
**Register a Company in India from the USA | AU Corporate**
(56 characters incl. brand suffix — exact-match primary keyword, consistent with the near-verbatim title-match evidence Stage 2 found across the strongest competitor set, and with the sibling `cost-timeline-...` page's own `"... | AU Corporate"` convention.)

## Meta Description
**How to register a company in India from the USA: compare entity options, the resident-director rule, and the real registration process, cost and timeline.**
(151 characters — includes the primary keyword naturally in the lead phrase, signals the page's actual differentiators (entity comparison, resident-director resolution, cost/timeline) per Stage 4/5's confirmed gaps, and avoids the two technical omissions Stage 3 flagged on `registercompanyinindia.com`'s equivalent page — that page is **missing a meta description and canonical tag entirely**, a plausible contributor to its ~position-40 ranking. This page must ship with both.)

## Suggested URL
`/india-entry-for-us-companies/register-company-in-india-from-usa`
(Confirms STATUS.md's `target_cluster` decision. Matches the existing sibling naming pattern exactly — `how-to-incorporate-subsidiary-india-from-us`, `us-subsidiary-vs-branch-office-india`, `cost-timeline-incorporate-company-india-from-us` — and puts the exact primary keyword in the URL, matching the pattern Stage 1 observed on Commenda's and Beacon Filing's dedicated country-pair URLs. Verified via Glob: no existing route claims this path.)

## Primary Keyword
register company in India from USA

## Secondary Keywords
company registration in India from USA · start a company in India from USA · set up company in India from USA · incorporate a company in India from USA (address naturally, not as a heading target — Stage 2 found no independent ranking-page evidence for this exact phrase) · India company registration for US companies (intro/meta phrasing only, per Stage 2)

## Search Intent
Informational-commercial, registration-intent (further down-funnel than the hub's exploratory "why enter India" intent). Per Stage 1/2: mixed informational-commercial, no transactional intent, consultation-led category norm.

## Target Audience
A US founder, in-house counsel, or CFO who has already decided to register a company in India and is now choosing *how* — which entity, which filing path, what it actually costs and takes, and what personally gates them (resident director, apostille) — as distinct from the hub's earlier-funnel reader still deciding *whether* to enter India at all.

## Recommended H1
**How to Register a Company in India from the USA**
(Exact primary-keyword match in "how to" framing, consistent with the sibling `how-to-incorporate-subsidiary-india-from-us` page's H1 pattern and with Stage 1's observation that "How to..." titles dominate the strongest competitor set.)

---

## H2/H3 Structure

**Intro block (no heading, lead paragraph + quick-facts strip)**
Frames the reader distinction explicitly: this page is for someone who has decided to register and needs to choose structure and understand the real process — not general India market-entry education (that's the hub). One sentence stating AU's dual CA/US-CPA framing, matching the hub's existing tone, not restating it. Quick-facts strip (4 stat cards, matching the `quickFacts`/`ClickableReveal` pattern already used on the subsidiary how-to page): e.g. "5 entity options," "182-day resident director test," "4-6 to 8-12 weeks," "Apostille required for US documents." Numbers must match the existing sibling pages' published figures exactly — no new figures invented here.

### H2: Which Entity Should You Register? (The 5-Way Decision)
The structural centerpiece — the one section with no equivalent anywhere else on AU's site or (per Stage 3's verdict) fully resolved on any analyzed competitor page.
- **H3: Compare the five structures at a glance** — a genuine side-by-side table: Private Limited Company (WOS) / LLP / Branch Office / Liaison Office / Project Office, columns for what it's for, liability, FDI route, typical compliance burden, and revenue-generating vs. representative-only vs. time-bound. This is the artifact Stage 3/4 confirmed doesn't exist on any of the six analyzed pages.
- **H3: Why most US companies default to a Private Limited subsidiary** — the reasoned "why" Stage 3 found only Enterslice does well (no RBI/Central Government pre-approval, full commercial flexibility, Automatic Route eligibility in most sectors), link to `us-subsidiary-vs-branch-office-india` for the full tax/liability breakdown.
- **H3: When an LLP fits instead — and when FDI rules block it** — brief, links to `/llp-in-india` for the full FDI-eligibility gate logic (per Stage 5's explicit "do not rebuild the automatic-route/performance-conditions decision sequence" guidance).
- **H3: When a Branch, Liaison, or Project Office fits better than a subsidiary** — given genuinely equal visual/structural weight to the subsidiary path, not a bolt-on paragraph (Stage 3/4's confirmed gap — only 1 of 6 competitors touch this, and even that treatment is subordinate). Names the FC-1 filing path distinct from SPICe+. Links to `/branch-office-in-india`, `/liaison-office-in-india`, `/project-office-in-india` for each.

### H2: The Registration Process — Which Filing Path Your Entity Choice Triggers
The connective-layer narrative Stage 5 defined as this page's job: entity decision → SPICe+ (Pvt Ltd/LLP) vs. FC-1 via an Authorised Dealer bank (Branch/Liaison/Project Office) → the resident-director gate (stated once, linked) → post-incorporation FDI reporting. Not a rebuild of the SPICe+ step-by-step; a short, named sequence with one link out per step to the page that owns the depth.
- **H3: SPICe+ Part A now covers name reservation — a currency correction** — states plainly that SPICe+ Part A has superseded standalone RUN/Form INC-1, which Stage 3 flagged Enterslice appears to describe as still current. A factual clarification, not a freshness flex (per Stage 5's explicit tone guidance).

### H2: The Resident Director Requirement (Read This Before You File)
2-3 short paragraphs stating Companies Act 2013 s.149(3), the 182-day test, framed as a gating question relevant to *any* entity choice on this page (not just the subsidiary path) — then a confident link to `how-to-incorporate-subsidiary-india-from-us` for the three worked resolution paths (relocate, appoint, nominate). Do not re-explain nominee-director mechanics here.

### H2: Documents You'll Need from the US Side
A short checklist (certificate of incorporation, board resolution, power of attorney, ID/address proof per director, registered-office proof) with one clearly stated line on apostille vs. embassy legalisation — the one genuine US-specific document differentiator Stage 3/4 confirmed is absent from every true competitor analyzed. Link to `how-to-incorporate-subsidiary-india-from-us` for the full document-by-document detail already built there.

### H2: FDI Route: Automatic vs. Government Approval
One paragraph naming the split and tying it to the entity/sector decision above; link to `/india-business-setup/fdi-channels` for the full sector-by-sector breakdown. Do not rebuild that page's content here.

### H2: Cost and Timeline
States the existing cluster's figures verbatim — 4-6 weeks Automatic Route incorporation, 8-12 weeks banked/funded/operational, ₹55,000-1,15,000+ combined India-side setup cost — in 2-3 sentences, explicitly scoped (incorporation-only vs. fully operational), with a link to `cost-timeline-incorporate-company-india-from-us` for the full component-level breakdown. **Do not independently derive a new number** — this is Stage 5's explicit, non-negotiable instruction, since a second, possibly-inconsistent figure on a sibling page would recreate exactly the credibility failure Stage 3/4 found across competitors (e.g. IndiaFilings' and MASLLP's own internally inconsistent figures).

### H2: What Happens After Incorporation
A brief forward-pointer, not a section: bank account opening, Form FC-GPR within 30 days of share allotment, then the ongoing FEMA filing rhythm (FC-TRS, annual FLA). Link to `fema-compliance-us-company-india-subsidiary` for the filing calendar. One-sentence mention that intercompany pricing between the new entity and the US parent becomes relevant here, linking to `transfer-pricing-us-india-subsidiary` — one forward-link only, per Stage 5's explicit TP exclusion.

### H2: Frequently Asked Questions
See FAQ Structure below.

### Closing: Explore More / CTA
Cross-links to the hub and (matching the hub's existing "Explore other markets" pattern from `registercompanyinindia.com`) a short consultation CTA block.

---

## FAQ Structure
Pulled from Stage 1's PAA-proxy list and Stage 4's confirmed-unanswered questions — not invented. Each answer routes to the section/sibling page that owns the depth rather than re-deriving it.

1. **Can a US citizen register a company in India?** — Direct yes, brief mechanism (Automatic Route, up to 100% foreign ownership in most sectors for the entity types above); links into the entity-decision section.
2. **Do I need an Indian resident director to register a company in India?** — States the s.149(3)/182-day rule, links to the full nominee-director resolution on `how-to-incorporate-subsidiary-india-from-us`.
3. **Private limited company vs. LLP vs. branch office — which should a US parent company use?** — Short answer pointing back to the 5-way decision section; this is the single most strongly evidenced unresolved question across Stages 1-4.
4. **How much does it cost to register a company in India from the USA?** — States the existing verbatim figure and scope, links to the cost/timeline page. Explicitly does not restate a different number.
5. **How long does it take to register a company in India from the USA?** — Same pattern — states the existing 4-6/8-12 week figures, scoped, with a link out.
6. **What documents does a US parent company need to provide?** — Checklist summary + the apostille-vs-embassy-legalisation point, links to the full document list.
7. **Is RUN or Form INC-1 still used to reserve a company name in India?** — The currency-correction question: no, SPICe+ Part A now covers name reservation. Direct, checkable, addresses Stage 3's flagged accuracy gap head-on as its own FAQ entry (in addition to the body-copy mention), since it's exactly the kind of specific, checkable claim Stage 3's verdict calls out as a trust signal.
8. **Does the registration process differ for a US citizen versus other foreign nationals?** — The edge-case qualifying question Stage 2's Foreign/International Framing Check flagged as legitimate for FAQ coverage but explicitly *not* a heading-level target. Short, honest answer: the Companies Act/FEMA mechanics are largely nationality-agnostic; what's specifically US-flavored on this page is the apostille/Hague Convention point and the US-side tax linkage (Form 5471/8858), not the Indian filing steps themselves.

---

## Internal Linking

### Pages that should link TO this page
| Existing page | Suggested anchor text |
|---|---|
| `/india-entry-for-us-companies` (hub — add to sub-page grid) | "Compare entity options and the registration process" |
| `/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us` | "Haven't settled on a structure yet? Compare all five entity options first" |
| `/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india` | "See how a subsidiary compares to an LLP, liaison, or project office" |
| `/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us` | "Still deciding which entity to register? Start with our entity comparison" |
| `/india-business-setup/company-formation` (general, non-US page) | "US company? See our USA-specific registration guide" |
| `/llp-in-india` | "Comparing an LLP against a subsidiary or branch as a US company? See our US-specific comparison" |
| `/branch-office-in-india` | "US parent company? See our US-specific entity comparison and registration guide" |
| `/liaison-office-in-india` | Same pattern as above |
| `/project-office-in-india` | Same pattern as above |
| `/doing-business-in-india/entry-process` | "Already decided to incorporate? See our USA-specific registration guide" (optional, low priority — Stage 5 notes this page is complementary, different framing) |

### Pages this page should link TO
| Existing page | Suggested anchor text |
|---|---|
| `/india-entry-for-us-companies` (hub) | "the full guide to doing business in India as a US company" |
| `/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us` | "step-by-step SPICe+ incorporation guide" / "the three ways US founders resolve the resident-director requirement" |
| `/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india` | "full subsidiary vs. branch office comparison" |
| `/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us` | "full cost & timeline breakdown" |
| `/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary` | "FEMA compliance after incorporation" |
| `/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary` | "transfer pricing & Section 482 guide" (single forward-link only, in the post-incorporation section) |
| `/llp-in-india` | "LLP registration in India: eligibility, process, FDI and compliance" |
| `/branch-office-in-india` | "Branch Office in India: RBI approval, setup and compliance" |
| `/liaison-office-in-india` | "Liaison Office in India: RBI approval, eligibility and compliance" |
| `/project-office-in-india` | "Project Office in India: RBI approval, registration and compliance" |
| `/india-business-setup/fdi-channels` | "FDI Automatic Route vs. Government Approval Route" |
| `/india-business-setup/company-formation` | "the general (non-US-specific) company registration process in India" |

### New supporting article needed?
**No.** Per Stage 5's explicit finding, the depth this topic needs already exists across six sibling AU pages (subsidiary-vs-branch, cost/timeline, subsidiary how-to, LLP, branch, liaison, project office). This page's entire job is to be the thin, confidently-linked synthesis layer connecting them — adding a seventh deep article here would recreate the exact fragmentation problem Stage 1 found across 70+ competing domains rather than solve it.

---

## External Authoritative Sources to Cite
(named per Stage 4/5's confirmed gap — zero of six analyzed competitor pages cite primary sources inline)

- **mca.gov.in** — SPICe+ (Form INC-32) portal and its official FAQ/instruction resources; linked forms AGILE-PRO-S and INC-9, cited by name/form number.
- **Companies Act, 2013** — Section 149(3) (resident director, 182-day test) and Section 164 (director disqualification), cited as specific sections, not paraphrased as a general rule.
- **RBI FIRMS portal** — the specific FC-GPR post-incorporation FDI reporting requirement (within 30 days of share allotment).
- **FEMA (Non-Debt Instruments) Rules** — for the Automatic Route vs. Government/Approval Route split.
- **FC-1 registration mechanism** — for the Branch/Liaison/Project Office path, citable to the RBI Authorized Dealer bank approval process under FEMA.

(DTAA/treaty-level sourcing is intentionally excluded from this page's citation list — per STATUS.md and Stage 5, that material stays with the hub page and `us-subsidiary-vs-branch-office-india`.)

---

## CTA Strategy
Matches the category's confirmed non-transactional, consultation-led norm (Stage 1/2) and the sibling pages' existing pattern — education leads, a single consultation CTA closes, no mid-content hard-sell.

- **No CTA in the first two sections.** The entity-decision table and process narrative must read as genuinely reader-first; Stage 5 explicitly flags this section as the highest risk of "promotional drift" (selection criteria quietly turning into "and that's why you should use AU Corporate").
- **One soft, optional mid-page prompt** after the entity-decision section only if it stays genuinely useful — e.g. a short "not sure which structure fits your situation — a 15-minute call usually resolves it" line, styled like the existing `ClickableInfoCard`/highlight-box pattern used elsewhere in the cluster, not a form.
- **One clear closing consultation CTA/LeadForm block**, matching the `LeadForm` component pattern already used on `fdi-channels` and `project-office-in-india` ("Not sure which structure applies to you? Tell us about your business and our India entry team will confirm the right structure and next steps").
- **Explore-other-markets / related-reading cross-link block** at the very end, matching the pattern already proven on `registercompanyinindia.com`'s equivalent page and the "Related Reading" block on `how-to-incorporate-subsidiary-india-from-us`.
- A second post-incorporation forward-pointer ("what starts after Certificate of Incorporation") must stay descriptive, not become an Accounting/Payroll/Virtual CFO pitch — per Stage 5's explicit warning.

## Unique Content Angle
**The genuine 5-way, activity-based entity decision layer — Private Limited (WOS) / LLP / Branch / Liaison / Project Office, brought into one synthesized table with selection criteria tied to what the US company is actually trying to do — delivered as the confident front door to AU Corporate's own already-deep `/india-entry-for-us-companies/*` cluster.**

This is differentiated on two independently confirmed fronts:
1. **Against the competitive field** (Stage 3/4): zero of the six analyzed competitor pages resolve entity choice into a real side-by-side decision artifact; every one either names the options without reasoning through them, or reasons through only a subset (Enterslice: Pvt Ltd/LLP/proprietorship but not Branch/Liaison/Project; MASLLP: subsidiary and FC-1 but the FC-1 path reads as bolted on). This page treats all five with equal structural weight — the single most strongly evidenced gap across the entire research set.
2. **Against AU Corporate's own existing pages** (Stage 5): the deep, US-framed comparison that already exists (`us-subsidiary-vs-branch-office-india`) only covers two of the five options; the generic entity list (`company-formation`) covers more options but with no selection framework and no US framing. Nobody on AU's own site has yet built the full 5-way synthesis.

Reinforced by AU's stated right-to-win (Stage 5): a CA/US-CPA dual-qualified team can state, in the same paragraph, how an entity choice lands on both the Indian RoC/FEMA side *and* the US-side Form 5471/8858/CFC consequence — something no single-country competitor firm in the analyzed set can credibly do, and something the page should demonstrate through precision (the SPICe+/RUN currency correction, named Companies Act sections, scoped cost/timeline figures) rather than claim in the abstract.

**One build note for whoever drafts this section (flagging now so it's resolved before drafting, not discovered mid-draft):** `components/EntitySelectorTool.tsx` already exists and is embedded on the hub page — it's an activity-based selector covering WOS / Liaison / Project / Branch / Joint Venture, but **does not currently include LLP as an option**. Two structural choices for the human reviewer to pick between: (a) extend `EntitySelectorTool` to add an LLP option and reuse it on this page too, or (b) keep this page's comparison as a static, fully indexable table (SEO body content a client-side interactive tool doesn't provide) and leave the existing tool on the hub as-is. Recommendation: **(b) as the primary content**, since the differentiation claim above depends on real, crawlable comparison text — with the interactive tool optionally embedded underneath as a secondary engagement device, not a replacement for the table.
