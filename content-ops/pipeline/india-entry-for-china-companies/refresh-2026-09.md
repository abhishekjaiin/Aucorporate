# Refresh: India Entry for China Companies — 2026-09

## Trigger
Scheduled review, triggered by a site-wide word-count audit that flagged this page at ~851 words of visible content — thin for a country cluster hub covering a fast-moving, high-complexity regulatory topic (Press Note 3 / China FDI). Regulatory-change check (Stage 9-style) also surfaced a genuine, material trigger independent of the word-count flag: a second round of amendments (the FEMA NDI Third Amendment, 12 June 2026) landed after the page's existing "What Changed in 2026" section was written, which only covered the March 2026 amendment.

Note: this is a second attempt at this task. A prior attempt was interrupted by a transient session rate-limit error. On starting this attempt, `content-ops/pipeline/india-entry-for-china-companies/` did not exist and no performance file for this URL existed under `content-ops/performance/`, and the live page matched the "starting fresh" state described in the task brief exactly (4-card "What Changed in 2026" section covering only the March 2026 amendment, intro prose, EntitySelectorTool, no FAQ). Confirmed the prior attempt did not complete or partially write anything — this run started clean.

## Current Page vs. Current SERP
SERP research for "India entry for Chinese companies," "Press Note 3 India China FDI," and adjacent queries shows a crowded field of India-focused corporate law/compliance publishers (Legal500, Ahlawat & Associates, KS&K, Bar & Bench, Sansa Legal, LKS Attorneys, Lexology, TaxGuru, Beacon Filing, India Briefing, Carnegie Endowment) all publishing detailed 2026 explainers. Compared to that set, the page's pre-refresh content was accurate but thin on:
- The June 2026 follow-on amendment (not mentioned at all pre-refresh — a real content gap, not just a depth gap).
- The actual list of priority manufacturing sub-sectors eligible for the 60-day fast track (page only named three examples; competitor content lists a fuller, more specific set).
- Deeper beneficial-ownership mechanics — the look-through principle across multiple intermediate entities, and how the beneficial-owner definition itself is now anchored to a specific statutory threshold (PMLA's 10%).
- Jurisdiction-specific nuance that comes up repeatedly in competitor content and is a natural buyer question: how Hong Kong and Taiwan are treated differently from mainland China under this framework.
- No FAQ section, despite FAQ-style questions (Hong Kong treatment, Taiwan treatment, grandfathering of old approvals, fund/LP structures) recurring across competitor coverage and being a natural fit for "India entry for Chinese companies" search intent, which mixes broad informational queries with specific structuring questions.

## Current Page vs. Search Console Data
Pulled via the GSC MCP tool for `sc-domain:theaucorp.com`. Over the last 180 days, `/india-entry-for-china-companies` shows: 21 impressions, 1 click, 4.8% CTR, average position 22. Volume is low in absolute terms (consistent with a narrow, low-search-volume regulatory niche), but position 22 (page 3) with essentially no ranking traction is consistent with the word-count/depth audit finding — this is a thin page competing against detailed competitor explainers for a topic where depth and specificity are exactly what differentiates rankings. This is a real, if modest, signal supporting the refresh — not a scheduled review done on volume alone.

## New Authoritative Information Found
Verification note: the environment's outbound web-fetch proxy blocked direct access to every primary and secondary source attempted for this refresh, including PIB (pib.gov.in), RBI (rbi.org.in), and every law-firm/publisher domain tried via WebFetch (Legal500, India Briefing, Carnegie Endowment, Ahlawat & Associates, Maheshwari & Co., MHCO Law, TaxGuru, LKS Attorneys, Beacon Filing). I was not able to open a primary government notification directly in this session. What follows is based on WebSearch result summaries, which draw on a consistent, independently-corroborating set of ~10 law-firm/publisher sources (India Briefing, Legal500, Ahlawat & Associates, KS&K, Bar & Bench, Sansa Legal, LKS Attorneys, Lexology, TaxGuru, Equicorp Legal, Carnegie Endowment, Discovery Alert) that agree on the same dates, thresholds, and rule citations without material contradiction. I'm treating this as reasonably well-corroborated secondary verification, but it is not the same as reading the gazette notification directly, and I've flagged that distinction on the page itself (footer disclaimer already tells readers to confirm the current framework with the team before relying on it for a transaction — left that language in place and strengthened it slightly).

Specific findings, all newly incorporated:
- **FEMA (Non-Debt Instruments) Third Amendment Rules, 2026**, notified as **S.O. 3030(E), dated 12 June 2026**. Multiple independent sources describe this as inserting a **second proviso to Rule 13**: any transfer of equity resulting in a land-border-country entity acquiring **control** now requires prior government approval regardless of what percentage of shares changes hands — closing a gap left by the March 2026 amendment, which was framed primarily around ownership percentage.
- The same amendment is reported to align the "**beneficial owner**" definition used in this framework to the **10% threshold defined under the Prevention of Money-Laundering Act, 2002** — the same 10% figure used for the March 2026 automatic-route safe harbour, giving the framework one consistent threshold rather than two separate undefined ones.
- **60-day fast-track sector list**: sources converge on capital goods manufacturing, electronic capital goods & component manufacturing, polysilicon & ingot-wafer manufacturing, advanced battery components, rare earth permanent magnets, and rare earth processing — reported (with less certainty; phrased with a hedge on the page) to span roughly 40 designated sub-sectors, conditioned on Indian residents retaining majority ownership and control throughout.
- **Hong Kong vs. Taiwan treatment**: Hong Kong-incorporated investors are treated as falling within the China-linked approval framework for direct investment. Taiwan is not itself one of the land-border countries named in Press Note 3, so a Taiwan-incorporated investor is not automatically caught by name — but the beneficial-ownership look-through still applies if the ultimate owner is mainland Chinese above the threshold. This is a genuine, sourced distinction, not an inference.
- I deliberately did **not** add any claim about whether pre-2026 approvals need to be reassessed under the new rules — I could not verify this either way, and said so explicitly in the new FAQ rather than guessing.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| "What Changed in 2026" card grid | Add (2 new cards: June 2026 amendment; Hong Kong/Taiwan distinction) + grid widened to 3-col on large screens | Page was missing the most recent regulatory development entirely, and the Hong Kong/Taiwan question is a recurring buyer question absent from the page |
| New section: "Priority Manufacturing Sectors on the 60-Day Track" | Add | Page only named 3 example sectors in a single card sentence; competitors list the fuller, more specific set, and this is exactly the kind of specificity search intent is rewarding |
| New section: "Beneficial Ownership Mapping: Working Through the Chain" | Add | Task brief specifically called for deeper beneficial-ownership guidance; page previously had one summary card and no worked explanation of the look-through mechanics or the new PMLA-aligned threshold |
| New section: "Frequently Asked Questions" (6 questions) | Add | No FAQ existed; competitor content and natural search intent both support it; used to explicitly flag the one point (pre-2026 approvals) I could not verify rather than inventing an answer |
| Footer regulatory-currency disclaimer | Update | Updated to reference the June 2026 amendment alongside the March 2026 one, since the page's factual currency now extends further |
| Intro prose, "What Still Needs Approval," "60-Day Fast Track," "Beneficial Ownership Mapping" original cards, "Complete Incorporation Process" section, EntitySelectorTool, Related Reading | Not changed | Still accurate and still doing their job — see below |

No section was removed; nothing on the page was found to be factually superseded, only incomplete.

## Search Intent Assessment
Unchanged. This remains a mixed informational/consultative hub-page intent — visitors are researching a complex, fast-moving compliance framework before deciding how (or whether) to structure an India entity, not comparison-shopping vendors. The expansion (deeper mechanics, sector list, FAQ) serves that same intent more completely; it does not represent a shift toward commercial/transactional intent, so a full rewrite was not justified. A targeted expansion was the correct scope of change.

## Not Changed (and why)
- **Intro prose and the yellow callout box** — still accurate, still frames the core Press Note 3 concept correctly, and the firm-credibility callout is doing exactly the job it should.
- **"What Still Needs Approval," "60-Day Fast Track," and original "Beneficial Ownership Mapping" cards** — all three remain factually correct after verification; the March 2026 details (10% non-controlling threshold, May 1, 2026 effective date, China/Hong Kong direct-investment approval requirement) were corroborated again in this refresh's research and did not need updating, only expanding elsewhere on the page.
- **"The Complete Incorporation Process" section** — describes the standard Companies Act, 2013 incorporation mechanics and the sequencing point (approval gates entity-level filing) that nothing in this refresh's research contradicted or updated.
- **EntitySelectorTool embed and Related Reading block** — functioning as designed; no reason found to touch either.
- **`app/sitemap.ts`** — intentionally left untouched per task instructions; not in scope for this agent to edit.

## Before/After Word Count (rough, visible body copy only)
- Before: ~851 words (per the audit that triggered this refresh).
- After: ~2,150–2,250 words (added two new full sections — priority sectors and beneficial-ownership mapping — a 6-question FAQ grid, and two additional cards in the existing "What Changed" grid).
