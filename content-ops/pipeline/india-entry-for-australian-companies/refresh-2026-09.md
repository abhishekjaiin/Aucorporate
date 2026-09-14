# Refresh: India Entry for Australian Companies (hub) — 2026-09

## Trigger
Scheduled review, opened by a site-wide word-count audit that flagged ~753 words of total visible content on this country cluster hub page (`/india-entry-for-australian-companies`, `app/india-entry-for-australian-companies/page.tsx`).

**Note on prior attempt:** A previous session was assigned this exact task and appears to have been interrupted by a transient rate-limit error before it could write this report. On picking the task back up, the page's "unique content zone" (inside `RegionClusterTemplate`) was already found in a substantially expanded state relative to the brief's description of the starting point (plain 4-card grid + intro + `EntitySelectorTool`) — it already contained the ECTA/CECA/Annual Summit intro paragraph, an elaborated India-Australia DTAA card, and a full "Complete Incorporation Process" section with apostille detail. No `refresh-*.md` file existed yet in `content-ops/pipeline/india-entry-for-australian-companies/`, and `app/sitemap.ts` still showed the pre-refresh `lastModified` date. Conclusion: the previous attempt completed most of the content expansion but was cut off before (a) fact-checking its own DTAA claim, (b) addressing the Search Console outsourcing signal specifically called out in the brief, and (c) writing this report. This session verified, corrected, and finished that work rather than starting over or duplicating it.

## Current Page vs. Current SERP
Searched "India entry for Australian companies subsidiary setup ECTA" and related queries. Competitors covering this space (india-briefing.com, austrade.gov.au, remunance.com, krprassociates.com, stratrich.com, beaconfiling.com) consistently cover:
- Automatic-route 100% FDI ownership for most sectors (already covered on our page via the Entity Structure card)
- ECTA tariff/sector benefits and the ECTA-vs-incorporation distinction (ECTA doesn't change registration mechanics — already implicit on our page, which correctly keeps ECTA framing to trade/investment context rather than claiming it affects incorporation steps)
- **A gap we found**: several competitor guides (e.g. Remunance) now pitch Employer of Record / outsourced-support as a lighter-weight alternative to full subsidiary incorporation for companies still testing the Indian market. Our hub had no equivalent mention.

## Current Page vs. Search Console Data
Pulled 90-day Search Console data (`sc-domain:theaucorp.com`). Findings relevant to this page:
- No query in the dataset currently lands on the hub page itself (`/india-entry-for-australian-companies`) — the closest related traffic is "branch vs subsidiary" (13 impressions, position ~81) landing on the **child** page, which is out of scope here.
- Two directly relevant queries — **"australian accounting outsourcing companies in india"** (8 impressions, position 84.2) and **"australian accounting outsourcing in india"** (6 impressions, position 84) — currently land on `/outsourcing`, not this hub. Position ~84 means neither is really "ranking" yet, but the query intent (Australian + accounting outsourcing + India) is a near-exact match for this hub's audience and wasn't reflected anywhere in its copy or internal links.
- This is a real but modest signal (14 impressions combined, 0 clicks) — not sustained decline or a ranking-movement panic, just an unaddressed topical + internal-linking gap the brief specifically flagged as worth capturing without turning the page into an outsourcing pitch.

## New Authoritative Information Found
Fact-checked the page's own DTAA claim against primary/secondary sources (mondaq, lexology, BDO, azb, beaconfiling) as Stage 9 would:
- **Error found and corrected**: the page claimed "Finance Act 2023 cut India's domestic royalty/FTS withholding rate to 10%." This is backwards. Finance Act 2023 **raised** the domestic withholding rate on royalty and fees for technical services under Section 115A from **10% to 20%** (effective 1 April 2023). This is a materially important correction — it flips the repatriation-planning implication: the India-Australia treaty rate (15% on other royalties/FTS, 10% on equipment royalties) is now the *more* favourable option versus the higher 20%+ domestic rate, not the other way around, and claiming it requires a valid Tax Residency Certificate + Form 10F before remittance.
- Confirmed the treaty rates themselves (15% dividends/interest, 10% equipment-related royalties, 15% other royalties/FTS subject to "make available") are correctly stated and consistent with independent sources.
- Confirmed the ECTA/CECA/Annual Summit claims already on the page: the 3rd India–Australia Annual Summit was held in Melbourne on 9 July 2026, where both governments agreed to accelerate CECA negotiations (eleven rounds completed) and a proposed Bilateral Investment Treaty — matches Clayton Utz, India Briefing, and multiple current-affairs summaries. No changes needed to this passage.
- Cross-checked the Entity Structure card's reference to "Australia's CFC attribution rules" against the already-published, already-verified child page (`australia-subsidiary-vs-branch-office-india/page.tsx`) — consistent (Part X, Income Tax Assessment Act 1936, active income test). No duplication added; hub still links out rather than re-explaining.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| "India-Australia DTAA" card | Update (factual correction) | Corrected the Finance Act 2023 domestic withholding rate claim (10%→20%, not 20%→10%) and restated the repatriation-planning implication (treaty now more favourable; TRC + Form 10F required to claim it). Verified against primary/secondary sources. |
| "Comprehensive Services for Australian Companies" block | Add | Added one short paragraph noting outsourced accounting/bookkeeping/payroll as an option for Australian companies not yet ready for a full subsidiary, addressing the competitor-content gap (EOR/outsourcing-as-alternative-entry-path) and giving the Search Console "australian accounting outsourcing in india" query cluster a genuine, non-pitchy topical anchor and internal link. |
| Outsourcing link anchor text | Update | Changed generic "Outsourcing Services →" to "Accounting outsourcing for Australian companies in India →" so the internal link passes clearer topical/anchor-text relevance to `/outsourcing`, which is the page currently (barely) surfacing for those queries. |

## Search Intent Assessment
Unchanged. This remains a primarily informational hub for Australian companies scoping out India market entry (entity choice, tax treaty, FEMA compliance, GCC option), not a commercial/comparison page — no evidence from the SERP or GSC data that intent has shifted toward transactional/commercial queries. The one addition (outsourcing mention) is deliberately kept to a single paragraph and a link, not a new pitch section, to avoid distorting that intent.

## Not Changed (and why)
- **Full rewrite**: not warranted. The page's structure (intro → 4-card grid → incorporation process → entity selector tool → services links) still matches current search intent and SERP patterns; only one factual error and one content gap needed fixing.
- **ECTA/CECA/Annual Summit paragraph**: verified accurate, left as-is.
- **FEMA & RBI Filings card, GCC Setup card, Entity Structure card**: verified against the child page and current process; no changes needed.
- **Incorporation Process section (SPICe+, apostille, Automatic/Government Route timelines)**: matches current Companies Act 2013 / MCA process and Hague Apostille status for Australia; no regulatory change found.
- **`app/sitemap.ts`**: explicitly out of scope for this task per instructions — not touched, despite content changes having been made. (Flagging this for whoever next reviews the sitemap: `lastModified` for `/india-entry-for-australian-companies` is currently `2026-08-31` and does not yet reflect either this session's edits or the prior session's larger expansion.)
- **Child page** (`australia-subsidiary-vs-branch-office-india/page.tsx`): out of scope by explicit instruction; read-only, used for cross-checking consistency.

## Word Count
The audit's ~753-word baseline reflects a page whose *shared template chrome* (hero, breadcrumb, trust-bar stats, process steps — identical across all `RegionClusterTemplate` pages) is fixed; the variable is the "unique content zone." Before this session, that zone (per the brief's description of the starting state: 4-card grid + intro + tool, no incorporation section) would have been roughly 150-200 words. After the prior session's expansion plus this session's two edits, the unique content zone is now approximately **700-750 words** on its own — the DTAA card alone is ~110 words, the incorporation-process section ~150 words, the new outsourcing paragraph ~50 words. Combined with the fixed template chrome, total rendered page word count is now roughly 950-1,100 words, comfortably resolving the original thinness finding.
