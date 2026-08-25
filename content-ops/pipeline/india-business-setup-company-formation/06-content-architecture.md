# Content Architecture: Complete Guide to Company Registration in India

Date: 2026-08-25
Page being expanded: `/india-business-setup/company-formation` (currently 46 lines, live) — **in-place rebuild, URL unchanged.**
Sources read: 01-serp-research.md, 02-keyword-intent-map.md, 03-competitor-analysis.md, 04-content-gap.md, 05-au-positioning.md, plus a direct repo scan of `app/india-business-setup/*`, `app/doing-business-in-india/*`, `app/india-entry-for-*-companies/*`, `app/blog/wholly-owned-subsidiary`, `app/gcc-setup-india`, `app/sitemap.ts`, and `content-ops/keyword-database/topics.csv`.

---

## Recommended Content Type

**India-entry guide / pillar page** (procedural + regulatory depth, not a blog post, not a pure service-sales page).

Why: Stage 1 found the ranking SERP is "commercial intent wearing informational clothing" — every strong competitor (ClearTax, IndiaFilings, VJM Global, Treelife, CompaniesNext, IncorpX) wins with a comprehensive, evergreen guide that carries an implicit service offer, not a dated blog post or a thin service-brochure page. This topic is also not news or time-bound commentary, so "blog article" is wrong per the guardrail against defaulting there. Because Stage 1 confirmed the current page has **zero observable organic footprint** for either core query, this rebuild has to work as a **self-sufficient, comprehensive answer** in its own right — it cannot lean on being "just" a funnel-transition page the way it does today. It also has to keep functioning as Step 3 of the live `india-business-setup` seven-step funnel, so the format needs both standalone completeness and clean hand-offs to the adjacent funnel pages.

---

## Cannibalization Check

`content-ops/keyword-database/topics.csv` already flags this exact page: *"Close to 'company registration in India' — check before creating a new registration-specific page."* That is the answer — **expand this page in place; do not create a new `/company-registration-in-india`-style URL.** Creating a second page would directly cannibalize this one for its own primary keyword.

Beyond that, Stage 5 identified a denser overlap problem: two parallel funnels cover adjacent ground.

| Existing page | Overlap | Resolution |
|---|---|---|
| `/india-business-setup/fdi-channels` | Automatic vs. Government Route, sector rules, 4-6/8-12 week timelines | Condense to a short summary section here + link out. Do not re-publish the sector table. |
| `/india-business-setup/regulatory-compliance` | Six compliance regimes (governance, labour, environment, FEMA, DPDP, IP) | Condense into the post-incorporation roadmap here + link out for full six-regime depth. |
| `/india-business-setup/banking-taxation` | Bank-account sequencing, GST thresholds, PAN/TAN, payroll, annual filings (FLA, Form 3CEB) | This page already contains the exact "bank sequencing" and "post-incorporation compliance" detail Stage 4 flagged as a differentiator — condense to 2-4 sentences + link, do not duplicate its paragraphs. |
| `/india-business-setup/timeline-resources` | 8-12 week total timeline, budget breakdown | **Hard constraint, not just overlap**: any cost/timeline figure this page publishes must reconcile with the 4-6/8-12 week figures already live here and on fdi-channels — see Cost/Timeline section below. |
| `/doing-business-in-india/incorporation`, `/entry-process`, `/post-incorporation` | A second, parallel funnel covering similar ground with lighter procedural specificity, no primary-source citations | Treat as the **secondary, service-offer funnel** — link to it as a "get full-service help" CTA, not as an informational depth source. See Canonical Funnel Decision below. |
| `/blog/wholly-owned-subsidiary` | Full SPICe+ walkthrough, FEMA/FC-GPR/FC-TRS, apostille/notarisation, resident-director threshold — genuinely close overlap | topics.csv already flags this: *"differentiate as general explainer vs. country-specific."* Keep this pillar's WOS section high-level (why WOS is the default vehicle + the FY-end timing note) and link out to the blog post for the full step-by-step walkthrough, rather than re-writing it here. |
| `/india-entry-for-{country}-companies` (7 pages) + `us-subsidiary-vs-branch-office-india` / `uk-subsidiary-vs-branch-office-india` | Country-specific DTAA/FEMA/entity framing | Low risk if this pillar stays written for the general foreign-investor reader (Stage 2's explicit finding: "foreign company registration in India" underperforms plain "company registration in India" — do not pivot the whole page's voice to "for foreigners"). Link out by country instead of absorbing their content. |

**Net recommendation: expand in place, no new page.** This pillar's unique job is the *sequencing, reconciliation, and CFO-level depth* that ties the existing pages together — not a restatement of facts that already live on fdi-channels/regulatory-compliance/banking-taxation.

### Canonical Funnel Decision (the call Stage 5 left open)

**`india-business-setup/*` is the canonical procedural/informational spine. `doing-business-in-india/*` is the parallel, lighter service-offer funnel.**

Evidence this isn't an invented distinction — it's already how the site behaves:
- The hub page itself (`app/india-business-setup/page.tsx`) builds its "Seven-Step Framework" primarily from `india-business-setup/*` pages (steps 2, 3, 4, 5, 7) and only reaches into `doing-business-in-india/*` for steps 1 ("Why India") and 6 ("Post-Incorporation") — the two stages where `india-business-setup` has no native page of its own. That's the site's own existing precedent for which funnel is "home base."
- `india-business-setup/*` pages (regulatory-compliance, banking-taxation, fdi-channels) already cite specific instruments and forms (Companies Act 2013 provisions, FEMA 1999, FC-GPR/FC-TRS/FLA, DPDP Act 2023) — matching the house citation standard Stage 5 wants this pillar to carry.
- `doing-business-in-india/incorporation` and `entry-process` are generic service-description card grids with no citations, no figures, and no procedural specificity — appropriate as a service-offer page, not as the reader's source of depth.
- The current company-formation page already links to `/doing-business-in-india/incorporation` under the label "Incorporation Services" — i.e., the site already treats that link as a service CTA, not an informational hand-off. This architecture keeps and reinforces that existing pattern rather than inventing a new one.

**Concrete rule for this page's internal linking:** procedural/regulatory depth links go to `india-business-setup/*` (fdi-channels, regulatory-compliance, banking-taxation, timeline-resources). Links to `doing-business-in-india/*` are kept as secondary "get full-service support" CTAs only.

**Flag for a future site-architecture review (out of scope for this page):** the two funnels should probably be rationalized or merged eventually — `doing-business-in-india/entry-process` and `/incorporation` duplicate ground `india-business-setup/*` already covers with more specificity. That's a sitewide decision, not something one page's content architecture can resolve, so it's flagged here rather than solved.

---

## SEO Title
**Company Registration in India: Complete Guide for Foreign Companies (2026)**
(54 characters excl. year note in SERP truncation risk — acceptable; leads with the primary keyword, matches the site's existing absolute-title pattern (no "| AU Corporate" suffix, per the current layout.tsx), and carries the freshness signal Stage 1/3/4 all confirmed is table stakes in this competitive set.)

## Meta Description
**Complete guide to company registration in India for foreign investors — entity types, the SPICe+ process, FDI routes, documents, realistic costs and timelines, and post-incorporation compliance.**
(159 characters — within the ~155-160 safe range.)

## Suggested URL
**`/india-business-setup/company-formation`** — confirmed unchanged. Do not create a new slug; this is an in-place expansion (see Cannibalization Check).

## Primary Keyword
company registration in India

## Secondary Keywords
- company formation in India (existing page's current target term — keep as an on-page synonym, not abandoned)
- company incorporation in India
- private limited company registration in India
- documents required for company registration in India
- company registration cost in India / company registration fees in India
- how to register a company in India
- India subsidiary / wholly owned subsidiary in India (dedicated section, per Stage 4's decision)

## Search Intent
Mixed commercial/informational, skewing commercial — a searcher is comparing "how do I actually do this" procedural knowledge against firms that can execute it for them. Per Stage 1, treat this as a commercial-intent SERP that must be won with genuinely complete informational content, not a landing-page pitch.

## Target Audience
Foreign-company decision-makers (CFOs, founders, in-house counsel, regional expansion leads) evaluating or actively planning incorporation of an Indian entity — global by default per Stage 2's finding that "company registration in India" (plain) outperforms "foreign company registration in India" as a search phrase. Country-specific readers (Australia first, per AU Corporate's positioning) are served via link-outs, not a page-wide voice shift.

## Recommended H1
**Company Registration in India: A Complete Guide for Foreign Companies**

---

## H2/H3 Structure

### 1. Quick Answer (snippet-oriented overview)
Short, direct paragraph answering "how do you register a company in India" in 3-4 sentences (numbered-step summary teaser), stating the reconciled timeline range up front, and a visible last-updated date. Built to compete for the numbered-list/featured-snippet format Stage 1 found near-universal among ranking pages.

### 2. Company Registration vs. Company Incorporation — Are They the Same Thing?
Short disambiguation (recurring PAA per Stage 1/4, not substantively answered by any analyzed competitor). 2-3 sentences, not a full section.

### 3. Choosing the Right Entity Type in India
- Summary comparison table: Private Limited Company, LLP, OPC, Wholly Owned Subsidiary (WOS), Branch Office, Liaison Office, Project Office, Joint Venture — definitions only, per Stage 4's explicit decision (summary + link-out, not a full decision framework).
- 2-3 sentences of basic steering (market-testing services company vs. full operating entity vs. pure cost-center office) — enough to resolve the recurring PAA "difference between liaison office, branch office, and wholly owned subsidiary" on-page.
- Link out: `/blog/wholly-owned-subsidiary` (full WOS incorporation walkthrough), `/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india`, `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india` (deeper structured comparisons).

**H3: Setting Up an India Subsidiary (Wholly Owned Subsidiary)**
Dedicated section per Stage 4's decision — WOS is the default vehicle for this page's actual audience, not a tangential keyword bolt-on. Cover: why Pvt Ltd/WOS is the default choice for a foreign parent, the FY-end (31 March) planning-timeline note that explains the "India subsidiary" search term's distinct mid-March seasonal peak, and a link to `/blog/wholly-owned-subsidiary` for the full step-by-step walkthrough rather than re-running it here.

### 4. FDI Eligibility: Automatic Route vs. Government Approval Route
2-4 sentence condensed summary (Automatic Route: most sectors, no prior approval, RBI post-facto reporting; Government Route: restricted/strategic sectors, DPIIT approval). State the timeline figures **exactly as they already appear on fdi-channels: 4-6 weeks (Automatic Route) / 8-12 weeks (Government Route)** — do not introduce a different number. Link to `/india-business-setup/fdi-channels` for the full sector table.

### 5. How to Register a Company in India: Step-by-Step (SPICe+ Process)
Numbered/sequential format (near-universal snippet-targeting pattern per Stage 1): DSC → DIN (Form DIR-3) → SPICe+ Part A (name reservation) → SPICe+ Part B (incorporation, PAN, TAN, GSTIN, EPFO, ESIC) → RoC issues CIN and Certificate of Incorporation. Name the current MCA V3 portal and SPICe+ form explicitly (Stage 4's "unclaimed" primary-source-citation opportunity).

**H3: Can a Foreign National Be a Director of an Indian Company?**
The one PAA-style question with real recurring cross-source evidence (Stage 1: Quora, Accorp Partners, ClearTax) and direct audience alignment, but per Stage 4 not substantively resolved by any analyzed competitor. Give a real answer: eligibility, DIN process for a foreign national, and the mandatory resident-director pairing requirement (state the day-count threshold precisely — flag for human/professional verification of the exact figure, consistent with how gcc-setup-india hedged similarly regulatory-precise figures pending sign-off).

### 6. Documents Required for Company Registration in India
Checklist with the specificity gap Stage 3/4 identified as unclaimed ground: the apostille-vs-notarisation distinction for a foreign director's passport and address proof (not just "notarised"), registered-office proof, and identity/address proof for directors and shareholders.

### 7. Company Registration Cost and Timeline in India
The single reconciled table Stage 3/4 identified as the sharpest structural gap in the entire competitive field (even VJM Global contradicts itself across its own pages). **Must reconcile with the site's existing published figures — 4-6 weeks (Automatic Route) / 8-12 weeks (Government Route) from fdi-channels, and the 8-12 week total-setup figure from timeline-resources.** One honest paragraph explaining what actually drives real-world variance (name-approval resubmission, DSC delays for a foreign national, resident-director paperwork) rather than a bare, unreconciled range. Link to `/india-business-setup/timeline-resources` for the full week-by-week breakdown and budget table.

### 8. What Happens After Incorporation: The Compliance Roadmap
The consolidated, sequenced asset Stage 3/4 confirmed **no competitor in the analyzed field has built** — even the deepest competitors scatter this across separate posts. Sequence: Day 0 (Certificate of Incorporation issued) → bank account opening → capital infusion/FIRC → FC-GPR filing (30-day RBI FIRMS deadline) → GST registration (threshold-triggered) → annual FLA return → ongoing RoC annual filings (AOC-4/MGT-7). Condense to 2-4 sentences per node; link to `/india-business-setup/regulatory-compliance` (full six-regime depth) and `/india-business-setup/banking-taxation` (bank-sequencing and filing detail already published there).

### 9. FEMA and RBI Reporting for Foreign-Owned Companies
Short section: FC-GPR (share allotment reporting), FC-TRS (share transfers), the annual FLA return — stated with real specificity (deadlines, filing portal), not "as per FEMA."

**H3: What Is an FOCC (Foreign Owned or Controlled Company)?**
Per Stage 5's explicit instruction: **keep this short and precise, not padded.** One tight, accurate paragraph — this is a genuine, currently-uncovered-elsewhere concept (only VJM Global touches it per Stage 3/4), but easy to over-explain or get technically wrong. Do not expand it into a full section.

### 10. GST Registration After Incorporation
Brief — threshold-triggered, not automatic (Rs 20 lakh services / Rs 40 lakh goods, per the figures already published on banking-taxation). Link to `/india-business-setup/banking-taxation` for the LUT/voluntary-registration logic already documented there. Not a standalone GST-advisory pitch, per Stage 5's explicit guidance.

### 11. Registering a Company in India From a Specific Country
Soft callout grid (not a page-wide voice pivot, per Stage 2/5's explicit guidance): one card per existing country page — Australia, US, UK, Singapore, Germany, Japan, China — each linking to its `/india-entry-for-{country}-companies` page. Australia listed first, reflecting AU Corporate's actual positioning, without over-weighting the page's overall voice toward it.

### 12. Frequently Asked Questions
See FAQ Structure below — split into a general/PAA tier and a CFO-level tier, matching the page's two audiences without duplicating the body sections above.

---

## FAQ Structure

All pulled from real Stage 1/4 evidence — none invented.

**General / PAA tier** (recurring, cross-source evidence per Stage 1):
1. Is company registration in India fully online?
2. What is the minimum capital required to register a company in India?
3. Is GST registration mandatory immediately after company incorporation in India?
4. How long does company registration in India actually take — official timeline vs. real-world experience?
5. What are the sectors under the 100% FDI automatic route in India?

**CFO-level tier** (Stage 3/4/5's sharpest, most defensible differentiation item — zero competitors in the analyzed set answer these substantively):
6. How can profits be repatriated from an Indian subsidiary to the foreign parent company? (dividend, buyback, capital reduction routes)
7. How does the India DTAA network affect repatriation and withholding tax for a foreign-owned Indian company? (cite Income Tax Act Section 90 relief mechanism — see sourcing flag below)
8. When can we actually open a bank account relative to incorporation — what's the real sequence? (CoI → PAN → MOA/AOA → KYC → apostille of foreign documents → AD Category-I bank → FIRC → FC-GPR, matching banking-taxation's existing published sequence)
9. What actually happens if we miss the FC-GPR filing deadline? (real consequence — compounding under FEMA, not a vague "penalties may apply")

Use the existing `FaqAccordion` component (already used elsewhere on the site) and mirror the FAQPage schema pattern already implemented on `app/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india/page.tsx` for consistency and schema markup.

---

## Internal Linking

### Pages that should link TO this page
| Existing page | Suggested anchor text |
|---|---|
| `/india-business-setup` (hub) | "Company Formation" (Step 3 card — already links here; keep) |
| `/india-business-setup/fdi-channels` | "Next: Company Formation" (already exists; consider updating to "Next: Company Registration & Entity Setup" to match the expanded scope) |
| `/doing-business-in-india/incorporation` | "See our guide to entity types in India" (already exists; keep) |
| `/blog/wholly-owned-subsidiary` | Currently links here as "Company Formation in India" via `RelatedResources`; recommend updating anchor to "Complete Company Registration Guide" to reflect the expanded page |
| `/gcc-setup-india` | "SPICe+ incorporation process" (already exists; keep) |
| `/india-entry-for-german-companies` | "Company Formation & Entity Types in India" (already exists; keep) |
| `/india-entry-for-australian-companies`, `/india-entry-for-us-companies`, `/india-entry-for-uk-companies`, `/india-entry-for-singapore-companies`, `/india-entry-for-japan-companies`, `/india-entry-for-china-companies` | **Gap found:** only the German page currently links to `/india-business-setup/company-formation`. Recommend adding an equivalent link from the other six country pages (Australia especially, given AU Corporate's positioning) — anchor: "Full company registration process in India" |

### Pages this page should link TO
| Existing page | Suggested anchor text |
|---|---|
| `/india-business-setup/fdi-channels` | "FDI automatic and government approval routes" (matches existing house phrasing used on gcc-setup-india) |
| `/india-business-setup/regulatory-compliance` | "full regulatory compliance framework" / "six compliance regimes" |
| `/india-business-setup/banking-taxation` | "banking and tax setup guide" |
| `/india-business-setup/timeline-resources` | "detailed setup timeline and budget breakdown" |
| `/blog/wholly-owned-subsidiary` | "step-by-step wholly owned subsidiary incorporation guide" |
| `/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india` | "US subsidiary vs. branch office comparison" |
| `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india` | "UK subsidiary vs. branch office comparison" |
| `/india-entry-for-australian-companies` | "entering India from Australia" |
| `/india-entry-for-us-companies`, `/india-entry-for-uk-companies`, `/india-entry-for-singapore-companies`, `/india-entry-for-german-companies`, `/india-entry-for-japan-companies`, `/india-entry-for-china-companies` | Country-name anchors in the Section 11 callout grid |
| `/gcc-setup-india` | "setting up a Global Capability Center in India" — one sentence only, per Stage 5's explicit guidance not to build a full GCC pitch here |
| `/doing-business-in-india/incorporation` | "full-service incorporation support" (kept as the secondary funnel's service CTA, not an informational hand-off) |
| `/contact` | CTA links (see CTA Strategy) |

### New supporting article needed?
**No.** Both candidate spin-outs were explicitly decided against at Stage 4: the India-subsidiary topic is folded in as Section 3's H3, and the entity-type comparison is a summary table + link-out, not a new page. One real gap surfaced during this stage's repo scan worth flagging for the backlog (not a blocker here): **there is no Australia-specific "subsidiary vs. branch office" comparison page**, unlike the US and UK pages that already exist at `/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india` and `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india`. Given AU Corporate's Australia-first positioning (Stage 5), this is a plausible future cluster page — but this pillar should link to the general `/india-entry-for-australian-companies` page in the interim, not wait on that gap to be closed.

---

## External Authoritative Sources to Cite

Per Stage 4's finding that **zero of the six analyzed competitor pages cite primary sources by name/number** — this is genuinely unclaimed ground and should match the citation standard AU Corporate's own regulatory-compliance/banking-taxation pages already set:

- **Companies Act, 2013** — incorporation requirements, private company definition, registered-office requirement, resident-director requirement. **Flag: cite by specific section number only after legal/professional verification** — do not publish a section number that hasn't been confirmed, consistent with how `gcc-setup-india`'s pipeline explicitly hedged comparable regulatory figures pending human sign-off.
- **MCA SPICe+ form and MCA V3 portal** — name the current form version explicitly.
- **FEMA, 1999** and the **Non-Debt Instruments Rules / Consolidated FDI Policy (DPIIT)** — governing the Automatic vs. Government Route distinction.
- **RBI Master Direction on Reporting under FEMA** and the **FIRMS portal** — FC-GPR (30-day filing window from share allotment), FC-TRS.
- **Annual FLA (Foreign Liabilities and Assets) Return** — RBI's annual reporting requirement for any entity holding foreign investment.
- **CGST Act** — GST registration threshold provision (Rs 20 lakh services / Rs 40 lakh goods, matching the figures already live on banking-taxation).
- **Income Tax Act — Section 90 (DTAA relief)** — for the CFO FAQ's repatriation/withholding question. **Sourcing flag:** banking-taxation already references the **Income Tax Act, 2025** (which replaced the 1961 Act effective 1 April 2026) — confirm the correct corresponding section/provision number under the 2025 Act before publishing, to stay consistent with that existing page's framing rather than citing the superseded 1961 Act section number.

---

## CTA Strategy

Mixed-intent page → mixed CTA weight, but genuinely soft/contextual through most of the body, consistent with Stage 5's explicit guardrail against appending a service pitch to every subsection.

- **No CTA inside**: disambiguation section, entity-type table, documents checklist, FAQ answers. These are pure informational table stakes — per Stage 5, "where the honest answer is 'no service belongs here,' leave it out."
- **Mid-page LeadForm placement (moved earlier than the current single end-of-page form)**: after Section 7 (Cost and Timeline) — this is the highest-intent moment on the page, where a reader who has just seen a real, reconciled number is most likely to want a scoped quote. Reuse the existing `LeadForm` component and copy ("Planning to Set Up Your Business in India?").
- **Contextual text-link CTAs** (not boxed pitches) at the natural hand-off points: end of Section 8 (compliance roadmap) linking to regulatory-compliance/banking-taxation, and the GCC one-liner in Section 3/11 where relevant.
- **End-of-page "Continue Your Journey" card grid** (expand the existing pattern from 3 cards to reflect the funnel's full breadth): FDI Channels, Regulatory Compliance, Banking & Taxation, Timeline & Resources, and Contact — replacing the current narrower 3-card set that only pointed to doing-business-in-india/incorporation, regulatory-compliance, and contact.
- **Hero "Next" button**: keep the existing pattern, "Next: Regulatory Compliance" → `/india-business-setup/regulatory-compliance`, preserving the funnel step-3→4 hand-off.

No interactive cost/timeline estimator or downloadable calendar — Stage 5 explicitly ruled this out as a dev/product decision outside this content pass's scope; the static reconciled table is the deliverable, with the estimator idea flagged only as a deferred future idea, not a page feature.

---

## Unique Content Angle

This page does not try to out-publish competitors on raw volume of facts — most of the individual facts (FC-GPR deadlines, FLA obligations, AOC-4/MGT-7 filings, GST thresholds) already exist, scattered, across AU Corporate's own `regulatory-compliance` and `banking-taxation` pages. Its differentiation is doing what Stage 3/4 confirmed **no competitor in the analyzed field does at all**:

1. A single, internally reconciled cost/timeline range (matching, not contradicting, the site's own published 4-6/8-12 week figures) with an honest explanation of what drives real-world variance.
2. One sequenced "what happens after incorporation" roadmap, instead of the scattered sub-topic treatment even Dezan Shira and IncorpX default to.
3. A genuinely technical CFO-level FAQ (repatriation routes, DTAA/Section 90, bank-account sequencing, the real consequence of a missed FC-GPR filing) — backed by AU Corporate's actual Virtual CFO / FEMA / taxation practice, not a claimed capability.
4. Primary-source citation by instrument and section/form number, matching the house style already set on regulatory-compliance/banking-taxation — something zero of the six analyzed competitor pages do.
5. A short, accurate FOCC explainer — a real FEMA concept almost nobody covers.
6. A real (not aspirational) Australia link-out, closing the specific gap Stage 3 found in VJM Global's own strongest claimed client segment, while keeping the page's primary voice written for the general foreign-investor reader per Stage 2's keyword finding.
