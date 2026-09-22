# Content Architecture: LLP in India

## Recommended Content Type
**Durable India-entry / entity-type reference guide** — built to the register and depth of `/india-business-setup/company-formation` (a comprehensive, single-page lifecycle guide), not a dated blog article, and not a thin transactional service page.

Why, tied to SERP intent (Stage 1/2):
- Stage 1 found the "LLP registration India" SERP dominated by **transactional/commercial** intent (price-anchored registration platforms) with a large **informational-but-monetized** layer underneath it (ClearTax, TallySolutions, IndiaFilings' "/learn/" hub) and a distinct **comparison-intent** cluster ("LLP vs Pvt Ltd"). No single competitor page combines all three — Stage 3's verdict is explicit that the winning page has to consolidate registration + eligibility + FDI + tax + compliance + conversion into one page a founder or CFO can act on without a second click.
- That combination — process/transactional depth, informational completeness, and a comparison subsection, all in one URL — is a guide/pillar pattern, not a blog post (blog framing would read as dated and would fragment the lifecycle Stage 4 identifies as the core differentiation opportunity) and not a bare service page (a service page would under-serve the large informational/eligibility/FDI-decision content this SERP actually rewards).
- This mirrors AU Corporate's own precedent: `/india-business-setup/company-formation` already proves this exact "full lifecycle, one page" pattern works for the adjacent Pvt Ltd/WOS topic. LLP gets the same treatment because it is, per Stage 5, "the LLP-specific sibling of that pillar, not a different service" — an MCA-incorporation topic, structurally and topically closer to company-formation than to the FEMA-establishment register of Branch/Liaison/Project Office.
- Per the guardrail against defaulting to "blog article": nothing in Stage 1/2/4 supports a blog treatment — no freshness-driven news hook, no listicle-style query pattern, and the market's own dated "2026 guide" content-marketing pages are exactly the shallow, single-topic-or-fragmented pattern Stage 3 says a real guide should beat.

## Cannibalization Check
No existing AU Corporate page currently targets "LLP registration in India," "LLP in India," or any close variant as a primary keyword (confirmed against `content-ops/keyword-database/topics.csv` — no row exists for this topic; `STATUS.md`'s own pre-check reached the same conclusion). Two pages currently *mention* LLP only in passing, as one line inside a broader entity-type list:
- `/india-business-setup/company-formation` — `entityTypes` array: *"A hybrid structure combining partnership flexibility with limited liability; less commonly used for FDI-funded operating businesses than a Private Limited Company."*
- `/india-business-setup/page.tsx` — `entitySnapshot` array: near-identical one-liner.
- `/` (homepage) — `structures` card grid includes an "LLP" card with a one-line description, currently linking to `#inquiry-form` (a generic on-page anchor), not to any dedicated LLP content.
- `/doing-business-in-india/entry-process`, `/india-business-setup/timeline-resources`, `/doing-business-in-india/why-india`, and `/blog/wholly-owned-subsidiary` each mention LLP briefly (1-2 sentences) as one entity option among several, inside content that is about the entity-selection decision or the WOS path specifically — none of them attempt LLP-specific depth.

**Recommendation: build a new, standalone page.** None of the above rises to "deep treatment" — they are all one-liners or brief asides inside pages whose actual subject is something else (the Pvt Ltd/WOS incorporation pillar, the entity-hub overview, the entry-process funnel, the homepage structure-selector, the wholly-owned-subsidiary blog piece). This is genuinely open ground, matching Stage 5's conclusion exactly: *"No standalone LLP registration/service page currently exists on the site. This is a genuinely new page, not a rewrite."* The only real risk is **consistency, not duplication** — this page's tax rate, AMT rate, and resident-day figures must match what's already committed to elsewhere (e.g., the 22% concessional company rate on `/services/taxation-regulatory`) rather than silently diverging, and the existing one-liner on `company-formation` needs to be updated to link here once this page exists (see Internal Linking — this is a required follow-up edit, not optional).

## SEO Title
**LLP Registration in India: Eligibility, Process, FDI and Compliance Guide**
(56 characters incl. spaces — under the ~60-char display limit; leads with the primary keyword exactly as Stage 2 specifies it, not the bare "LLP in India" variant.)

## Meta Description
**How to register an LLP in India: the current 120-day resident-partner rule, the FDI automatic-route gate, registration steps, cost, tax treatment and annual compliance — explained by AU Corporate's regulatory practice.**
(158 characters — fits the ~155-160 char display window; contains the primary keyword naturally, signals the two accuracy differentiators (120-day rule, FDI gate) without keyword-stuffing, and carries an authorship/credibility cue consistent with Stage 5's guidance.)

## Suggested URL
**`/llp-in-india`**

### Why this URL, not `/india-business-setup/llp-registration` — decided against the site's actual IA, not by sibling-precedent default
This page's *content register* should match `company-formation` (per the brief and Stage 5), but its *IA role* is different from what lives inside `/india-business-setup/`, and the IA role is what should drive the URL:
1. **What actually lives under `/india-business-setup/`** (`fdi-channels`, `company-formation`, `regulatory-compliance`, `banking-taxation`, `timeline-resources`) is organized by **stage of the setup journey** — this is the hub's own explicit framing (its "7-step framework"), confirmed by reading `/india-business-setup/page.tsx` and the sitemap grouping. None of those five sub-pages is an alternative entity type; they are steps everyone doing India entry goes through regardless of which entity they pick.
2. **LLP is not a stage — it's an alternative entity structure**, the same category as Branch Office, Liaison Office and Project Office, all three of which are already live at the top level (`/branch-office-in-india`, `/liaison-office-in-india`, `/project-office-in-india`) for exactly this reason. Their own Stage 6 architecture docs reasoned this explicitly: *"A Branch Office isn't a stage in that funnel — it's an alternative entity structure — so nesting it there would misfit the existing sub-page taxonomy rather than extend it."* That reasoning is not sibling-precedent for its own sake — it's a correct read of the site's actual taxonomy, and it applies to LLP with equal force: `company-formation`'s own `entityTypes` array lists LLP as one of eight parallel entity choices (Private Limited, LLP, OPC, WOS, Branch, Liaison, Project, JV) — LLP sits in that list at the exact same taxonomic level as the three entity types that already got top-level URLs.
3. **Confirms via the homepage `structures` grid too**: the same five-plus-one entity cards (Private Limited, Branch, Liaison, Project, LLP) are presented as parallel, mutually exclusive choices — reinforcing that LLP's IA peer group is the entity-type set, not the stage-based `/india-business-setup/` sub-pages.
4. **Content register vs. URL are separable.** The instruction to match `company-formation`'s depth and register is about how the page reads and how much ground it covers in one page — not a claim that it must live in the same directory. `company-formation` itself lives at `/india-business-setup/company-formation` because it *is* the "choose and incorporate your entity" stage page for the default WOS path; LLP is not that stage, it's a different entity choice within it, exactly like Branch/Liaison/Project.

**Net:** `/llp-in-india` is the correct URL because it matches the site's real, already-established IA rule (entity-type pages are top-level; stage pages live under `/india-business-setup/`), not because it copies the three siblings' pattern reflexively. If a future audit finds this rule wrong, all four entity-type pages should move together — this page shouldn't diverge from the other three on its own.

## Primary Keyword
LLP registration in India

## Secondary Keywords
- LLP in India (definitional/H1-companion phrase)
- LLP registration process in India
- LLP registration fees / cost in India
- Documents required for LLP registration in India
- LLP annual compliance in India (Form 8, Form 11)
- FDI in LLP / foreign investment in LLP in India
- LLP tax rate in India / how is LLP taxed
- Conversion of LLP to Private Limited Company
- LLP vs Private Limited Company (addressed naturally — comparison subsection, not a full dedicated cluster; see Stage 2's strategist note, which flags a full head-to-head page as a possible *future* spin-out, not this page's job to resolve)

## Search Intent
Mixed: **transactional-on-ramp + informational-core**, with a distinct comparison sub-intent. Readers arrive wanting to register (or decide whether to register) an LLP and need eligibility, process, FDI eligibility, tax, and ongoing-compliance answers in the same session — Stage 1 confirms transactional/commercial intent dominates the head term, but the same query space is thick with PAA-style informational questions that a pure price-anchored service page does not answer.

## Target Audience
Primary: foreign parent companies, their CFOs/finance leads, and the consultants/advisors representing them, evaluating an LLP as an India entry vehicle against a Wholly Owned Subsidiary/Private Limited Company — this is AU Corporate's actual buyer per Stage 5, and the page's FDI and tax-reasoning sections are built for this reader specifically.
Secondary: Indian founders and domestic CFOs researching LLP registration directly (the larger-volume, more transactional slice of the SERP per Stage 1), and professionals (CAs, company secretaries) researching on a client's behalf.

## Recommended H1
**LLP Registration in India: A Complete Guide to Eligibility, Process, FDI and Compliance**

## H2/H3 Structure
Ordered around the reader's actual decision sequence (per Stage 4's "full lifecycle in one page" differentiator), not copied from any single competitor's heading order.

1. **H2: What Is an LLP in India?**
   Quick definition — separate legal entity under the Limited Liability Partnership Act, 2008, distinct from a general partnership firm, can sue/be sued/own property/contract in its own name. One short H3 addressing the adjacent, frequently-confused query rather than a dedicated section:
   - H3: LLP vs. Partnership Firm — What Actually Changes

2. **H2: Who Can Form an LLP in India — Partners, Designated Partners, and the Resident Test**
   - H3: Minimum Two Partners, at Least Two Designated Partners
   - H3: The Resident Designated Partner Rule: 120 Days, Not 182 — stated as a factual callout per Stage 5's explicit instruction ("state the current rule, cite the LLP (Amendment) Act, 2021, and note — factually, without gloating — that many sources still show the older 182-day figure"). This is the page's lead accuracy differentiator and should sit early, not buried mid-page.
   - H3: Can a Foreign National Be a Designated Partner or Partner in an Indian LLP?
   - H3: DPIN/DIN and Digital Signature Certificate (DSC) Prerequisites

3. **H2: How to Register an LLP in India: Step-by-Step**
   Sequenced steps, mirroring `company-formation`'s numbered-card pattern: name reservation (RUN-LLP) → Form FiLLiP filing → Certificate of Incorporation → LLP Agreement filed via Form 3 (within 30 days of incorporation).

4. **H2: Documents Required for LLP Registration**
   Split the same way `company-formation` does — Indian-side documents (registered office proof, partner identity/address) vs. foreign-partner-side documents (notarisation vs. apostille distinction, since Stage-5-adjacent site precedent already flags this as a common failure point).

5. **H2: LLP Registration Cost and Timeline in India**
   Government filing fees vs. professional/advisory fees, stated honestly as two separate figures (matching `company-formation`'s "the honest answer sits across two different figures" framing per Stage 5's explicit instruction to preserve that register). Realistic end-to-end timeline, not just the fastest-possible filing figure.

6. **H2: FDI in LLP: The Automatic-Route Gate and How to Use It**
   The page's second major differentiator (Stage 4 Gap #2 / Stage 5 Right-to-Win #2) — built as a decision sequence, not a static rule statement.
   - H3: The Two-Part Automatic-Route Gate (sector permits 100% automatic-route FDI for a company AND no FDI-linked performance conditions)
   - H3: The Practical Decision Sequence — Does Your Sector Qualify? Do Performance Conditions Apply? What's the Fallback If Not?
   - H3: Reporting Foreign Capital Contribution — Form FDI-LLP(I), Not FC-GPR (explicit distinction from the company-route filing already documented on `company-formation`/`fdi-channels`, per Stage 5's hard constraint)

7. **H2: How Is an LLP Taxed in India?**
   Reasoned/conditional, not a flat rate table (Stage 5 hard constraint).
   - H3: Flat 30% Rate and Single-Level Taxation Under Section 10(2A)
   - H3: Alternate Minimum Tax (AMT) — When It Applies
   - H3: LLP Tax vs. Company Tax — When Each Actually Wins (the advisory-reasoning section Stage 5 flags as the real differentiator; explicitly cross-references the 22% concessional company rate already published on `/services/taxation-regulatory` rather than restating it independently)

   *(Mid-page LeadForm placed here — after the reader has the core registration + tax picture, before the deeper compliance/conversion content, matching `company-formation`'s placement logic of putting the form after the highest-intent content block rather than at the very top or bottom.)*

8. **H2: Annual Compliance for an LLP: Form 8, Form 11 and the Audit Threshold**
   - H3: Form 11 — Annual Return (due 30 May)
   - H3: Form 8 — Statement of Account and Solvency (due 30 October)
   - H3: Does Your LLP Need a Statutory Audit? — state the ₹40 lakh turnover / ₹25 lakh partner-contribution threshold explicitly flagged as a commonly-cited market-consensus figure, not an unqualified statutory claim, per Stage 5's explicit instruction and Stage 1/4's sourcing caveat (flag again for Stage 9 fact-check).

9. **H2: LLP vs. Private Limited Company: Which Should You Choose?**
   Comparison subsection (not a full dedicated cluster page, per Stage 2's strategist note) — short table or side-by-side covering liability, compliance load, capital-raising/investor-preference, and tax mechanics, explicitly extending (not contradicting) the one-line claim already on `company-formation` ("less commonly used for FDI-funded operating businesses than a Private Limited Company") by explaining *why*.

10. **H2: Can an LLP Be Converted to a Private Limited Company?**
    Section 366, Companies Act 2013 + Company (Authorised to Register) Rules, 2014; Form URC-1, SPICe+, INC-23, INC-24 — covered at FAQ-plus depth per Stage 4's Minimum Coverage list, since no analyzed competitor covers this at all.

11. **FAQ** (see below, with schema)

12. **Continue Your Journey / Related Resources** (RelatedResources component, matching sibling pattern)

## FAQ Structure
Pulled from Stage 1's PAA-candidate reconstruction and Stage 4's unanswered-questions list — real recurring questions, not invented ones. Each is flagged with why it's included.

1. **What is the minimum number of partners required for LLP in India?** — Stage 1 PAA-candidate; table stakes per Stage 4.
2. **Is the resident designated partner test 120 days or 182 days?** — Stage 1/3/4's single largest confirmed market-wide error (4 of 5 analyzed competitor pages state the stale figure); answered directly and named as a live source of confusion, not just stated once in the body.
3. **Can a foreigner be a partner in an LLP in India?** — Stage 1 PAA-candidate; Stage 4 notes only 2 of 5 analyzed pages address this at all.
4. **What documents are required for LLP registration in India?** — Stage 1 PAA-candidate; Stage 4 notes this is covered on registration-platform pages but absent from the advisory-positioned competitors (the closer positioning match to AU Corporate).
5. **How many days does it take to register an LLP in India?** — Stage 1 PAA-candidate.
6. **How is an LLP taxed in India? What is the LLP tax rate?** — Stage 1 PAA-candidate; ties to the body's reasoned tax section rather than repeating a bare rate.
7. **What is the difference between an LLP and a Private Limited Company?** — Stage 1 PAA-candidate; feeds/summarizes the comparison H2 above.
8. **Can an LLP be converted into a Private Limited Company?** — Stage 1 PAA-candidate; Stage 4 confirms this is unanswered on every analyzed competitor page despite recurring as an expected question.
9. **What is a DPIN, and do I still need one separately from a DIN?** — Stage 1 PAA-candidate; addresses the DPIN/DIN merge history flagged in Stage 2's Related Entities list.
10. **Is an LLP good for startups in India — what are the real advantages and disadvantages?** — Stage 1 PAA-candidate; kept as an honest, conditional answer rather than a pro-LLP sales pitch.
11. **Does an LLP need a statutory audit in India?** — Stage 4 Minimum Coverage item; answered with the market-consensus caveat on the ₹40 lakh/₹25 lakh threshold stated explicitly, not as an unqualified fact.

FAQPage schema (JSON-LD) to be added exactly as implemented on `company-formation` and the three sibling entity-type pages.

## Internal Linking

### Pages that should link TO this page
| Existing page | Suggested anchor text | Note |
|---|---|---|
| `/india-business-setup/company-formation` | "the full LLP registration and compliance guide" — linked from the existing `entityTypes` LLP bullet | **Required edit, not optional.** The LLP one-liner in this page's `entityTypes` array currently renders as plain text (no `Link`), same as the Branch/Liaison/Project Office bullets in the same array. This is a *pre-existing, unresolved* gap — `branch-office-in-india`'s own Stage 6 doc already recommended linking the Branch Office bullet here, and as of this pipeline that recommendation still has not been implemented in the live code (verified by reading the current `entityTypes` array — all eight entries remain plain `<div>` text, none wrapped in `Link`). Recommend this be fixed for **all four** entity-type bullets (LLP, Branch, Liaison, Project) in the same edit, not just added for LLP in isolation. |
| `/india-business-setup/page.tsx` (hub) | "LLP registration guide" — linked from the `entitySnapshot` LLP card | Same unresolved gap as above — `entitySnapshot` cards render via `ClickableInfoCard`, currently with no `href`/link-through for any of the eight entities. Flag for the same batched fix. |
| `/` (homepage) | "Register an LLP" or similar — from the `structures` card grid's "LLP" entry | Currently every card in the homepage `structures` array (Private Limited, Branch, Liaison, Project, LLP) links to the generic `#inquiry-form` anchor, not to any dedicated entity page — verified by reading the render logic. This is a site-wide gap affecting all five entity cards, not LLP-specific; flagging it here because it's the clearest, most visible unlinked mention on the site, but the actual fix is a homepage-wide decision, not something this page's launch should silently patch on its own. |
| `/doing-business-in-india/entry-process` | "how LLP registration works" — from the existing "LLP Structure" card copy | That page already states the FDI automatic-route gate for LLPs in one sentence; linking out to this page's fuller FDI section is a natural, low-effort addition. |
| `/india-business-setup/timeline-resources` | "LLP registration in detail" — from its existing "Choosing between a Private Limited Company/WOS, LLP, or a Branch/Liaison/Project Office..." sentence | Currently a plain mention with no link. |
| `/blog/wholly-owned-subsidiary` | "our LLP registration guide" — from its existing LLP comparison paragraph | This paragraph already states the FDI automatic-route gate accurately; it should point readers to this page's fuller treatment rather than being the only place on the site that explains it in more than one sentence. |
| `/doing-business-in-india/why-india` | (optional, lower priority) — from the "Entity Setup (Subsidiary / LLP / JV / Branch)" line | Minor; only worth adding if that section already links out to the other named entity types. |

### Pages this page should link TO
| Existing page | Suggested anchor text |
|---|---|
| `/india-business-setup/company-formation` | "the full company registration guide" / "Private Limited Company (WOS) incorporation guide" — for the Pvt Ltd/WOS side of the comparison H2, explicitly to avoid re-explaining SPICe+ incorporation in full (per Stage 5's guidance) |
| `/services/taxation-regulatory` | "the company-side concessional tax rate" — from the LLP-vs-company tax reasoning subsection, to reference the 22% concessional rate already published there rather than restating it independently (per Stage 5) |
| `/india-business-setup/fdi-channels` | "the Automatic Route and Government Route framework" — from the FDI H2, for the underlying sector-cap/DPIIT mechanics, while stating explicitly that LLP's Form FDI-LLP(I) reporting is a different filing from the FC-GPR filing that page documents for companies (hard constraint from Stage 5 — do not conflate) |
| `/india-business-setup/regulatory-compliance` | "the full six-regime compliance framework" — from the annual compliance H2, for the company-level regimes (labour, environment, data protection, IP) that sit outside this page's LLP-specific Form 8/Form 11 scope |
| `/india-business-setup/banking-taxation` | "GST registration works the same way for any entity" — one-sentence natural mention only, no dedicated GST section (per Stage 5's explicit exclusion) |
| `/india-business-setup/timeline-resources` | "the detailed setup timeline and budget breakdown" — from the cost/timeline section, for the government-fee breakdown, mirroring how `company-formation` links here |
| `/contact` | "Talk to an expert" — micro-CTAs on process-step cards, matching `company-formation`'s pattern |

### New supporting article needed?
**No, not at this stage.** The one candidate — a full "LLP vs Private Limited Company" dedicated comparison page — is a real, evidenced cluster (Stage 2 notes ClearTax, Ebizfiling, LegalWiz and Razorpay all run dedicated comparison pages, and AU Corporate owns none of it) but Stage 2's strategist note explicitly defers that decision: *"Flagging as a possible future page, not resolving that decision here."* This page's comparison H2 should be built to a genuine, honest depth (not a token paragraph) so it stands on its own for now; if traffic/rank data later shows the comparison intent needs a dedicated page, that's a future spin-out decision (the same pattern AU Corporate already used for `australia-subsidiary-vs-branch-office-india`), not something to force into this pipeline.

## External Authoritative Sources to Cite
- **Limited Liability Partnership Act, 2008** — governing statute (named, not paraphrased)
- **LLP (Amendment) Act, 2021** — direct statutory source for the 120-day resident-designated-partner rule; this citation is itself the differentiator (Stage 4 notes no analyzed competitor visibly cites the amendment, only states the figure)
- **MCA21/MCA V3 portal** and the **Form FiLLiP / RUN-LLP** instruction kit — for the incorporation process
- **Income-tax Act, Section 10(2A)** — single-level LLP profit taxation
- **Alternate Minimum Tax (AMT) provision (Income-tax Act)** — cite the specific section if confirmed by Stage 9, not just the 18.5% figure in isolation
- **FEMA, 1999** and the **DPIIT/RBI FDI policy liberalization of 10 November 2015** — source for the automatic-route two-part gate for LLP capital contribution
- **Companies Act, 2013, Section 366** and the **Company (Authorised to Register) Rules, 2014** — for the LLP-to-company conversion process
- **Do not cite:** the Clifford Chance 2011 briefing (pre-dates the 2015 liberalization — Stage 1 flags it as stale) or any competitor page's stated figures as a source; primary/statutory sources only.
- **Flag for Stage 9 (fact-authority-checker), per Stage 1/4/5's explicit, repeated caveat:** the ₹40 lakh turnover / ₹25 lakh partner-contribution audit threshold and any Form 8 late-fee figure are market-consensus, not independently verified against primary LLP Rules text in this pipeline (WebFetch to mca.gov.in was blocked throughout Stages 1-3). Stage 9 must attempt a primary-source confirmation before this figure is published as an unqualified statutory claim; if it cannot be confirmed, the published copy must keep the "commonly cited" hedge Stage 5 specifies rather than dropping it for cleaner prose.

## CTA Strategy
Funnel-appropriate, matching `company-formation`'s soft-advisory register rather than a transactional/price-anchored pattern (the page is informational-core with a transactional on-ramp, not a checkout flow):
- **Primary CTA (mid-page):** LeadForm placed after the tax section (per H2/H3 structure above), titled around "Evaluating an LLP for Your India Entry?" — soft, advisory framing, not "Register Now."
- **Micro-CTAs:** "Talk to an expert →" links on the step-by-step registration cards and the compliance-roadmap cards, matching `company-formation`'s exact pattern (small, repeated, low-friction — not a hard sell after every section, per Stage 5's explicit instruction against turning the lifecycle into a service-line tour).
- **FAQ-driven CTA cluster:** at the end, alongside the FAQ schema block, matching the sibling pages' pattern.
- **Closing "Continue Your Journey" grid:** RelatedResources component linking to `company-formation`, `fdi-channels`, `services/taxation-regulatory`, and `/contact` — consistent with the site-wide pattern on all entity-type and pillar pages.
- No pricing-anchored language ("Register your LLP @ ₹X") — that's the exact price-anchored transactional pattern Stage 3 identifies as this SERP's weak, low-trust cluster (Razorpay, RegisterKaro), and AU Corporate's positioning is advisory, not a discount registration platform.

## Unique Content Angle
Four angles, each traced to a specific Stage 4/5 finding, not invented here:
1. **The 120-day correction, stated as a factual callout with its statutory source** (LLP (Amendment) Act, 2021) — a market-wide, checkable error found on 4 of 5 analyzed competitor pages spanning a tax-filing SaaS, a registration platform, a law firm, and a fintech platform (Stage 3/4). Placed early in the page (Section 2), not buried, and stated factually rather than as a competitive boast (Stage 5's explicit instruction).
2. **The FDI-in-LLP gate turned into an actual decision sequence**, not a static rule — extending AU Corporate's existing FDI-channels reasoning (automatic vs. government route logic already published for company FDI) to LLP capital contribution, including the Form FDI-LLP(I) reporting step, which Stage 3 found stated correctly by only one competitor and connected to practical next steps by none.
3. **Reasoned LLP-vs-company tax comparison**, not a flat rate table — explaining when the 30% flat LLP rate actually beats a company's concessional rate once distribution/exit mechanics are factored in, cross-referencing the 22% company rate already committed to on `/services/taxation-regulatory` rather than presenting two numbers in isolation the way every analyzed competitor does.
4. **Full lifecycle in one page with a visible authorship/currency line** ("Last updated: [date] — prepared by AU Corporate's taxation and regulatory compliance practice," matching `company-formation`/`fdi-channels`'s existing convention) — Stage 4 confirms zero analyzed competitors, including the two advisory-positioned ones, show any authorship or update-date signal at all.
