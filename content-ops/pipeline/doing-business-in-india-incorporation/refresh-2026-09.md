# Refresh: Should You Incorporate in India Now? — 2026-09

## Trigger
Scheduled review triggered by a site-wide word-count audit: the page carried only ~640 words of visible content, the thinnest page in the doing-business-in-india cluster. Search Console confirms the thinness is suppressing visibility rather than the page simply being new/low-priority: over the trailing 90 days the URL shows **1 impression, 0 clicks, average position ~10** — essentially no search presence despite sitting as stage 4 of a 5-page cluster with real internal linking from the hub page and the cluster's other spokes.

Note: a prior attempt at this refresh was interrupted mid-task by a transient session error before any edit or report was made. On resuming, the page file was confirmed still in its original, unedited state (routesToMarket + timingMistakes only, no report file present in this directory) — so this refresh started fresh rather than resuming partial work.

## Current Page vs. Current SERP
SERP research for "should I incorporate in India now," "when to incorporate a subsidiary in India," and "India entry timing"-type queries shows most ranking competitor content (Razorpay Rize, Setindiabiz, Stratrich, Remunance, KBCCA, startup-movers, etc.) covers three things this page was missing entirely:
1. **A concrete decision checklist / trigger list** — specific commercial signals (signed contract, resident-director requirement, bank-account KYC timeline) rather than general advice.
2. **The consequence of NOT incorporating** — several competitor pages frame the "keep operating without an entity" option in terms of tax/compliance exposure, not just "slower deals." This page previously only covered the upside case for waiting or acting, never the downside risk of prolonged inaction.
3. **FAQ coverage** — nearly every ranking competitor page has an FAQ block hitting exactly the kind of PAA-style questions ("can we invoice Indian customers without an entity," "does an EOR avoid incorporation," etc.) that this page had zero coverage of.

The page's existing "Incorporation vs. Other Routes to Market" and "Common Timing Mistakes" sections were consistent with the current SERP framing (EOR, distributor, liaison/project office as alternatives; FY-end timing as a real practical mistake) and did not need to be rewritten — they were simply too short a page on their own.

## Current Page vs. Search Console Data
- `/doing-business-in-india/incorporation`: 1 impression, 0 clicks, avg. position ~10, trailing 90 days (sc-domain:theaucorp.com).
- No query-level rows exist for this URL at all in the same 90-day window — the page isn't accumulating any query data, consistent with too little indexable content to match intent-specific queries.
- For comparison, sibling cluster pages show the hub (`/doing-business-in-india`, 22 impressions) and `/doing-business-in-india/entry-process` (6 impressions, position 2.8 — ranking well despite low volume) both have more Google visibility than this page, reinforcing that this page specifically is under-indexed relative to its neighbors.

## New Authoritative Information Found
India's **Income-tax Act, 2025** (successor to the 1961 Act, effective from the 2026-27 assessment year) carries forward the "business connection" deemed-accrual rule under **Section 9**, and codifies a **Significant Economic Presence (SEP)** test under **Section 9(9)** — a threshold for systematic/continuous transactional engagement with Indian customers that can create Indian tax exposure without any local entity or physical presence. This is genuinely new, high-priority content for this page: it directly supports the "incorporate now vs. wait" decision by giving a concrete downside to indefinite delay, which the page previously did not address at all. Verified via primary-source-adjacent tax commentary (Taxmann, EaseValue's Income-tax Act 2025 section-by-section coverage, PwC's India corporate residence summary) cross-checked against the statutory concept description; treated consistently with how Stage 9 (Fact & Authority Checker) would require — cited by section number rather than asserted as an unsourced figure, and stated with the treaty-override caveat (a DTAA still narrows India's actual taxing right to a treaty-defined Permanent Establishment) rather than overstating the exposure.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| "A Quick Decision Checklist" (new, two-column ready/wait signal lists) | add | SERP research showed competitor content consistently offers a concrete trigger-based checklist; the page previously only had narrative advice, no scannable self-assessment. Placed right after the intro, before the existing routes/timing sections, since it answers the page's core question first. |
| "The Real Cost of Waiting Too Long: Business Connection Risk" (new callout) | add | New regulatory content (Income-tax Act 2025, Section 9/9(9), SEP) directly relevant to the incorporate-now-vs-wait decision and completely absent from the prior version. Framed as a callout box matching the site's existing `border-l-4 border-yellow-400` pattern used on india-business-setup/company-formation. |
| FAQ section + FAQPage JSON-LD (new, 5 Q&As via `FaqAccordion`) | add | Covers PAA-style questions the page had no coverage of (invoicing without an entity, EOR limits, cost of incorporating too early, liaison-office sequencing) and adds FAQ schema, matching the pattern already used on the hub page and company-formation page. |
| "Incorporation vs. Other Routes to Market" | none | Still matches current SERP framing (subsidiary vs. distributor vs. liaison/project office vs. EOR); left untouched. |
| "Common Timing Mistakes" | none | Still accurate and consistent with FY-end and demand-validation framing seen across competitor content; left untouched. |

## Search Intent Assessment
Unchanged. The query cluster this page targets ("should I incorporate in India now," "when to incorporate a subsidiary," India entry timing) remains squarely informational/advisory — a strategic decision-support search, not a transactional one. No commercial SERP features (shopping results, dense ad load) appeared for these queries. The fix here was depth and completeness against that intent, not a re-target of intent itself.

## Not Changed (and why)
- Did not touch `app/doing-business-in-india/page.tsx` (cluster hub) — confirmed its overview/diagnostic content doesn't duplicate what was added here; the hub stays high-level and routes here for the incorporate-now-vs-wait question specifically.
- Did not add pricing/cost figures beyond what's already established sitewide (4-6 week Automatic Route / 8-12 week Government Route, Form AOC-4/MGT-7/7A, FLA return) — no new unverifiable statistics were introduced.
- Did not rewrite the whole page — the original two sections tested fine against current SERP framing; only the missing decision-support, risk, and FAQ layers were added.
- Per task instructions, did not touch `app/sitemap.ts` and did not run git/build commands.

## Before / After
- Before: ~640 words of visible body content (intro + 4 routes-to-market cards + 3 timing-mistake cards).
- After: ~1,500-1,600 words of visible body content (same original sections retained, plus a two-column decision checklist, a business-connection/PE risk callout, and a 5-item FAQ section with schema).
