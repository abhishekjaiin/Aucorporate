# Refresh: India Entry Process & Business Structures (/doing-business-in-india/entry-process) — 2026-09

## Trigger
Scheduled review triggered by a site-wide word-count audit (Playwright-measured rendered body text) flagging this page at ~533 words — far too thin for a page positioned as the strategic-overview / market-entry-strategy hub of the doing-business-in-india cluster (per the cluster hub's own description: "How to think through the India market entry decision — timeline expectations, risk factors, and the strategic tradeoffs between entity types before you commit," and the hub's diagnostic entry: "We're weighing subsidiary vs. distributor vs. EOR vs. joint venture as our way in"). No prior `content-ops/pipeline/` history existed for this page — this is its first refresh.

## Current Page vs. Current SERP
Searched "India market entry strategy," "how to enter Indian market foreign company," and comparable subsidiary/distributor/EOR queries. Findings:
- Competitor pages in this space (India Briefing, Acclime, Tecnova, Ahlawat & Associates, NMS Consulting) consistently structure around a **route-to-market decision framework** — explicitly comparing wholly owned subsidiary, joint venture, branch/liaison/project office, distributor/licensing, and increasingly Employer of Record (EOR) as a fast, no-entity option — rather than jumping straight to "which legal entity to incorporate."
- EOR is now a standard comparison point in this SERP (multiple sources framed it as the fastest, lowest-commitment way to get people on the ground in India before incorporating), which the live page did not mention anywhere.
- Competitor pages typically pair the route comparison with a short decision heuristic (what stage of validation justifies which route) and an FAQ block — both were missing here.
- Our own page ranks well for the few queries it gets impressions on (see GSC below) but wasn't surfacing for the broader comparison-style queries this SERP is built around, consistent with content being too thin to match query variety.

## Current Page vs. Search Console Data
Pulled 90-day GSC data (`sc-domain:theaucorp.com`, page dimension): `/doing-business-in-india/entry-process` had **6 impressions, 0 clicks, average position 2.8** over the last 90 days. Position is strong for what little it's being shown for, but impression volume is negligible — a strong signal that the page's thin content isn't matching enough query variety to be surfaced at all, not that it's losing a ranking fight. This matches the word-count audit's diagnosis directly: the fix here is coverage (more genuinely answerable sub-questions), not chasing rank on the query it already wins.

## New Authoritative Information Found
No new regulation, rate, or form changed since this page was last written. All regulatory figures used in the expansion (4-6 week Automatic Route / 8-12 week Government Route FDI timelines, FC-GPR/FIRMS filing, Annual FLA return, AOC-4/MGT-7 RoC filings, resident-director 182-day rule) were cross-checked for consistency against `/india-business-setup/fdi-channels/page.tsx` and `/india-business-setup/timeline-resources/page.tsx`, which already cite DPIIT's May 2026 revised SOP and Press Note updates as their primary sources — no figures were invented, and nothing on this page contradicts those two pages.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| "Why India" strategic context | update | Added one linking sentence to `/doing-business-in-india/why-india` to avoid duplicating that page's deeper investment case, and to frame this page's specific job (route-to-market, not "why India"). Cards left intact. |
| New "Four Ways to Enter the Indian Market" section | add | Core gap identified from both the task brief and the SERP: a genuine subsidiary vs. joint venture vs. distributor vs. EOR comparison, each with control/speed/compliance trade-offs and a link to the incorporation-timing page for the "when" decision (kept distinct from that page's framing to avoid duplication). This is the section the cluster hub page already promises exists here. |
| "Step-by-Step Entry Process" (7-step timeline) | rewrite | Every step previously shared one identical, generic sentence ("Structured execution with regulatory compliance and business alignment."). Rewrote each of the 7 steps with a unique, specific description, and added an intro paragraph with the Automatic Route (4-6 weeks) / Government Route (8-12 weeks) figures, linking to `/india-business-setup/fdi-channels` and `/india-business-setup/timeline-resources` for full detail rather than re-deriving it here. |
| "Business Structures" → "Legal Entity Structures for a Direct Presence" | rewrite | Original 4 cards (Subsidiary, LLP, JV, Branch) had one-line, near-duplicate descriptions and overlapped with the new route-comparison section's JV card. Swapped JV out for Liaison Office (a distinct, previously uncovered structure) and rewrote all four with real control/liability/compliance detail plus a framing intro distinguishing this section (entity mechanics) from the routes section above (strategic choice). |
| "Key Entry Risks to Consider" | add + rewrite | Expanded from 3 generic one-liners to 5 substantive risk cards (added Repatriation & Exit Planning and Talent & Operational Risk, both absent from the original and both recurring competitor themes), each rewritten with specific, non-generic detail. |
| FAQ section (new) | add | Page had no FAQ despite every sibling page in the cluster having one (`why-india`, the cluster hub) or in the wider site (`fdi-channels`, `timeline-resources`). Added 6 FAQs targeting the exact comparison and timing queries this SERP is built around, plus matching FAQPage JSON-LD schema (same pattern as `why-india/page.tsx`). |
| "How AU Corporate Mitigates Entry Risks" | not changed | Already substantive and recently converted to ClickableInfoCard/ClickableReveal — left as-is. |
| Hero, CTA | not changed | Both already serve their purpose; no SERP or GSC signal suggested a change was needed here. |

## Search Intent Assessment
Unchanged, but under-served. Intent for "India market entry strategy" / "how to enter the Indian market" remains informational/strategic-comparison (not transactional or dominated by commercial competitors) — no shift detected. The problem was coverage depth, not a mismatched intent target: the page was already aimed at the right query cluster (confirmed by its strong 2.8 average position on low volume), it just didn't have enough substantive content to be surfaced for the full range of comparison and process questions real searchers ask.

## Not Changed (and why)
- Hero copy and CTA — already accurate and on-brand; no finding justified touching them.
- "Why India" mini-section's 4 cards — kept as a short bridge/primer; expanding it further would duplicate `/doing-business-in-india/why-india`, which already owns that content in depth.
- "How AU Corporate Mitigates Entry Risks" section — already substantive, recently rebuilt with ClickableInfoCard/ClickableReveal, and not implicated by either the SERP or GSC findings.
- `app/sitemap.ts` — intentionally not touched per task instructions; lastModified bump left for manual review before commit.

## Word Count
Rough estimate: ~533 words before → ~2,000-2,100 words after (new route-comparison section, rewritten 7-step descriptions, rewritten/expanded entity-structure cards, expanded risk section, and new 6-question FAQ block account for nearly all of the increase).
