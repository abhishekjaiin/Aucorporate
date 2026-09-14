# Refresh: India Entry for Japanese Companies — 2026-09

## Trigger
Scheduled review, driven by a site-wide word-count audit that flagged `/india-entry-for-japan-companies` at ~968 words of total visible content — thin relative to its strategic value (Japan is India's 5th-largest FDI source; the page is the highest-value page in the country-cluster group and already anchors the Japan Plus government-facilitation angle). Search Console confirms the thinness is showing up as weak visibility (see below), which corroborates the audit-driven trigger — this was not a "rankings moved for a few days" refresh.

Note on session continuity: a prior attempt at this exact task was interrupted by a transient rate-limit error. On resuming, I verified `content-ops/pipeline/india-entry-for-japan-companies/` did not exist and re-derived the page's total word count from `page.tsx` + the shared `RegionClusterTemplate` boilerplate (hero, trust-bar stats, "Our Proven Process" steps, footer CTA) — it reconciles to ~950-970 words, matching the audit figure almost exactly. This confirms the previous attempt had not yet made any edits to `page.tsx`; today's edits are the first pass, not a duplicate of prior work.

## Current Page vs. Current SERP
SERP for "India entry for Japanese companies," "Japan Plus India investment," and "Japanese subsidiary India" is dominated by consulting-firm 2026-dated guides (ASC Group, MAS LLP, KNM India, YKG Global) that all cover: JV-vs-WOS tradeoffs, DTAA withholding rates, and step-by-step incorporation. Our page already matched this baseline at a summary level (one card each for JV/WOS, DTAA, transfer pricing, FEMA). Two gaps stood out against the current SERP and against what a Japan-specific manufacturing entrant actually needs:

1. **Japan Industrial Townships (JITs)** — a genuinely differentiating, government-verified topic (12 dedicated industrial parks across 9 states under a DPIIT-METI framework, hosting 110+ Japanese manufacturers) that no page on the site — and none of the competitor guides I reviewed — foregrounds prominently despite it being unique to Japan among India's FDI source countries. This is exactly the kind of "genuinely useful, Japan-specific" content the page was missing.
2. **Depth on JV-vs-WOS and transfer pricing** — competitor pages go one level deeper than a summary card (decision drivers, thin-capitalisation mechanics, APA/MAP availability); our page previously stopped at the card-level summary.

No new PAA patterns or SERP features (no People Also Ask box surfaced in results, no local pack relevance) — intent remains informational/advisory, not transactional. Competitors are other advisory firms, not directories or government portals, consistent with the existing commercial-informational framing of the page.

## Current Page vs. Search Console Data
GSC data (last 90 days, `sc-domain:theaucorp.com`) shows this URL with a single indexed query: "company registration in india from japan" — 4 impressions, 0 clicks, average position 58. That is very weak visibility for a page this strategically important, consistent with thin content lacking topical depth to rank for the cluster of terms a Japan-focused entrant would search (JV vs WOS, Japan Plus, DTAA, transfer pricing, industrial townships). No sustained-decline signal was present (there isn't enough historical query volume to show a trend) — the trigger here is the word-count/content-depth audit plus this low-visibility confirmation, not a ranking drop.

## New Authoritative Information Found
All verified against primary/official sources before use:
- **India-Japan DTAA rates unchanged**: flat 10% withholding on dividends (Art. 10), interest (Art. 11), and royalties/FTS (Art. 12) — confirmed current, no protocol amendment found. The page's existing DTAA card figure is accurate and was left as-is.
- **Transfer pricing recodification confirmed accurate**: Sections 92–92F of the Income-tax Act, 1961 become Sections 161–173 of the Income-tax Act, 2025, effective 1 April 2026. The page's existing card already cited "Section 161... effective April 2026" correctly — verified, not changed.
- **Thin capitalisation (new fact added)**: Section 94B of the Income-tax Act, 1961 (30%-of-EBITDA interest disallowance above ₹1 crore net interest, aligned to OECD BEPS Action 4) is renumbered Section 177 under the Income-tax Act, 2025, effective April 2026. Not previously on the page — added.
- **Japan Industrial Townships (new topic added)**: verified via PIB (government) press release and a METI progress-report PDF — 12 JITs across 9 states under an April 2015 DPIIT-METI action agenda, concentrated on the Delhi-Mumbai and Chennai-Bengaluru corridors, Neemrana/Ghiloth (Rajasthan) and Sri City (Andhra Pradesh) the largest. Not previously on the page — added.
- **JPY 10 trillion target context**: confirmed the August 2025 target and, additionally, that the prior JPY 5 trillion target (set 2022) was reached ahead of schedule — added as a freshness/credibility marker without over-specifying the original deadline year, since sources varied on that detail.
- **Bilateral APA / MAP with Japan (new fact added)**: confirmed via PIB that India's first-ever bilateral Advance Pricing Agreement was signed with a Japanese company, and that India-Japan MAP case handling has been recognised as efficient — added as a genuine differentiator for Japanese groups seeking transfer-pricing certainty.
- **Companies Act resident-director requirement (new fact added)**: Section 149(3), at least one director resident in India 182+ days in the preceding financial year — a real, frequently-surprising compliance point for Japanese boards, not previously mentioned.
- Apostille/Hague Convention (2023 accession) and the 1,400+ company figure were already accurate and left unchanged.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Japan Plus explainer (2nd paragraph) | Update | Added the "prior JPY 5 trillion target reached ahead of schedule" context — matches how current competitor content frames momentum; verified via search, not invented. |
| New "Japan Industrial Townships" section (after Japan Plus box) | Add | Fills the single biggest content gap: a differentiating, government-verified, Japan-only program not covered anywhere on the site or by reviewed competitors. Ties directly to the manufacturing-sector framing already in the intro. |
| New "JV vs Wholly-Owned Subsidiary: What Actually Drives the Decision" section (after the 4-card grid) | Add | The existing card was a one-line summary; SERP competitors go a level deeper on decision drivers. Added a 4-factor breakdown (IP protection, distribution/land access, governance speed, exit optionality) without inventing statistics — purely structural/process facts. |
| New "Structuring Intercompany Flows: Transfer Pricing and Thin Capitalisation" section (after JV/WOS section) | Add | Deepens the transfer-pricing card with two verified, high-relevance mechanics for Japanese manufacturing entrants: thin-cap interest disallowance (Sec 94B → 177) and the India-Japan bilateral APA/MAP track record. Also inline-links the existing safe-harbour blog post for IT/services entrants rather than leaving that link buried only in Related Reading. |
| Incorporation Process (1st paragraph) | Update | Added the Companies Act Section 149(3) resident-director requirement — a real, frequently-surprising compliance fact for Japanese boards, missing from the original process description. |
| DTAA card, Transfer Pricing card (Section 161/2025 reference), Apostille sentence, 1,400+ companies figure | Not changed | Verified against primary/current sources and found accurate; no update needed (see Not Changed below). |

## Search Intent Assessment
Unchanged. The query cluster remains informational/advisory ("how do I structure and comply," not "buy X") and the competitive set remains other advisory firms rather than directories, marketplaces, or government portals. No commercial/transactional SERP features emerged. The refresh added depth and a differentiating topic (JITs) rather than repositioning the page for a different intent.

## Not Changed (and why)
- **India-Japan DTAA 10% flat rate (card + intro)** — verified current via Articles 10/11/12; no treaty amendment found. Left as-is.
- **Transfer pricing Section 92 → 161 / April 2026 reference (existing card)** — verified accurate against the Income-tax Act, 2025 recodification. Left as-is; new thin-cap section adds to it rather than duplicating it.
- **Apostille/Hague Convention 2023 accession detail** — still accurate, no change needed.
- **"Over 1,400 Japanese companies" figure** — corroborated by a current competitor source citing the same figure; a JBIC/embassy-adjacent figure of ~1,500 also surfaced but wasn't confirmed via a primary government source, so the existing, safely-conservative "over 1,400" figure was kept rather than swapped for an unverified higher number.
- **Automatic Route (4-6 weeks) / Government Route (8-12 weeks) timelines** — out of scope for this refresh (not Japan-specific; owned by the linked company-formation guide) and no signal these changed.
- **EntitySelectorTool embed and Related Reading link list** — both still functioning and relevant; no removals, since nothing on the page was found to be outdated or superseded, only thin.
- **`app/sitemap.ts`** — intentionally not touched, per explicit task instruction for this session (parent agent directive overrides the normal SOP step 6).

## Rough Word Count
- **Before this session's edits**: ~780-800 words of custom page copy in `page.tsx` (~950-970 words including shared `RegionClusterTemplate` boilerplate — hero, trust-bar stats, process steps, footer CTA), reconciling closely with the original ~968-word audit figure.
- **After this session's edits**: ~1,230-1,260 words of custom page copy (~1,400-1,420 words including template boilerplate) — driven by two new sections (Japan Industrial Townships; Structuring Intercompany Flows) and one expanded section (JV vs WOS deep-dive with a 4-item list), plus smaller updates to the Japan Plus and Incorporation Process paragraphs.
