# Refresh: India-UK DTAA & Withholding Tax Rates — 2026-09

## Trigger
Site-wide Search Console audit (28-day window ending 2026-09-23) flagged the entire DTAA query cluster for this page ranking position ~72-93 — a sustained, systematic underperformance across every tracked query for the page, not a short-term fluctuation. Confirmed directly via GSC pull (see below) before making any changes, per the "real trigger" guardrail.

Note on pipeline history: no `content-ops/pipeline/india-entry-uk-dtaa-withholding-tax/` (or `india-uk-dtaa-withholding-tax`) stage files exist, and the page has no entry in `content-ops/keyword-database/topics.csv`. This page was evidently built directly rather than through the full 11-stage pipeline (consistent with several other AU Corporate pages, e.g. the Australia subsidiary-vs-branch comparison). No prior refresh or fact-check notes were available to read.

## Current Page vs. Current SERP
WebFetch to the top-ranking competitor domains (cleartax.in, vjmglobal.com, tax2win.in, beaconfiling.com, taxsummaries.pwc.com, incometaxindia.gov.in, assets.publishing.service.gov.uk) was blocked by the network egress proxy for every domain tried, so competitor structure was assessed via WebSearch result snippets and cross-source synthesis rather than direct page fetches — flagging this the same way prior pipelines in this repo have flagged blocked WebFetch to primary sources (see e.g. the Project/Liaison Office pipeline notes).

What the synthesis showed:
- **Rate figures**: Independent secondary sources (ClearTax, Tax2win, VJM Global, Beacon Filing, a PwC withholding-tax summary) converge on the same rates already published on this page — Dividends 10%/15%, Interest 10% (banks)/15% (general), Royalties/FTS 10% (equipment)/15% (general), all against a 20% domestic rate. **No rate was stale or wrong.**
- **Article citations**: Multiple independent sources consistently map Dividends to Article 11, Interest to Article 12, and Royalties/FTS to Article 13 of the treaty (Capital Gains to Article 14, which this page already cited correctly). This page's rate table did not cite any article numbers for the three main income types — a specificity gap relative to competitors and relative to this page's own sibling (`uk-subsidiary-vs-branch-office-india`), which already cites "Article 13" for royalties in its own comparison table.
- **"No make-available clause"**: The sibling comparison page already states, as a distinguishing India-UK treaty feature, that the royalty/FTS article has no "make available" test (unlike the India-US treaty) — meaning the treaty cap applies to essentially all managerial/technical/consultancy fees, not just payments that transfer usable know-how. This is a genuinely useful, differentiating fact that was on the *sibling* page but missing from *this* page, which is supposed to be the canonical DTAA reference the sibling defers to.
- **Structure/depth**: Competitor guides (ClearTax, Tax2win, VJM, Beacon Filing's "2026" guide) generally include worked numerical examples and are written for a broader (often NRI/individual-taxpayer) audience alongside corporate content. This page had rates and process steps but no concrete illustrative calculation.
- **SERP features**: FAQ-style question snippets are clearly a live SERP feature for this query cluster — the page's own tracked queries are almost entirely question-phrased ("does india have a double taxation agreement with the uk", "dtaa between india and uk"). This page had an FAQ section in the DOM but shipped **no FAQPage JSON-LD structured data at all**, while the sibling `uk-subsidiary-vs-branch-office-india` page (built later, same cluster) does ship FAQPage schema for its own FAQ. This is a concrete, low-risk technical gap directly relevant to the page's own top queries.

## Current Page vs. Search Console Data
Pulled directly via GenieSEO for `sc-domain:theaucorp.com`, 28 days ending 2026-09-23. All queries attributed to this URL:

| Query | Impressions | Clicks | Position |
|---|---|---|---|
| does india have a double taxation agreement with the uk | 1 | 0 | 93 |
| uk india double tax treaty | 1 | 0 | 83 |
| double taxation avoidance agreement india and uk | 1 | 0 | 81 |
| double taxation agreement india and uk | 1 | 0 | 81 |
| dtaa between india and united kingdom | 1 | 0 | 82 |
| dtaa between india and uk | 1 | 0 | 80 |
| india uk double taxation avoidance agreement | 1 | 0 | 79 |
| india uk dtaa | 1 | 0 | 72 |

Total: 8 impressions, 0 clicks, across 8 distinct queries — confirms the audit's position-72-93 finding exactly. Two things worth flagging honestly:
1. **This is a very thin dataset** — 1 impression per query, 0 clicks. The audit's finding is real and the trigger is legitimate (systematic, cluster-wide, not noise), but the absolute stakes here are small; this is not a high-traffic page being actively cannibalized.
2. **Every tracked query is broad/top-of-funnel** ("does X exist", "double taxation agreement between X and Y") — none of the 8 queries are the more specific, commercially-intentioned terms the page's own title targets (e.g. a specific rate, TRC, Form 41). That absence is itself informative: see Search Intent Assessment below.

## New Authoritative Information Found
- **Income-tax Act, 2025 citations**: This page was **already current** on the 1 April 2026 Act transition before this refresh — it already cites Form 41 under Section 159(8) (replacing Form 10F/old Section 90) and Forms 145/146 under Section 393(2) (replacing 15CA/15CB/old Section 195), with correct "payments before 1 April 2026 use the old forms" hedging. This matches the pattern already fixed on other AU Corporate pages this session (e.g. Liaison Office in India's 1961→2025 Act citation fix) — no correction was needed here, this page had already made that fix.
- **Section 159 as the source of the taxpayer's election right**: Confirmed via WebSearch (multiple independent sources, including a direct explainer on Section 159 of the 2025 Act) that Section 159 of the Income-tax Act, 2025 is the single consolidated successor to Sections 90, 90A, and (in spirit) 91 of the 1961 Act — including the taxpayer's right to elect whichever of the treaty or domestic law is more beneficial (old Section 90(2)), not just the TRC/Form 41 mechanics. The page previously cited Section 159(8) only for the Form 41 filing requirement, without grounding the more fundamental "treaty rate isn't automatic, it's an election you make" point in any statute. Added, hedged appropriately (did not invent an unverified subsection number for the election right specifically, since I could not get a primary-source confirmation of the exact 2025-Act sub-clause mapping — WebFetch to incometaxindia.gov.in was blocked).
- **Treaty article numbers**: Confirmed via convergent secondary sourcing (not primary-source WebFetch, which was blocked) that Dividends/Interest/Royalties-FTS map to Articles 11/12/13 respectively. Added to the rate table.
- **No factual rate or regulation was found to be wrong or stale.** CETA/DTAA distinction, MLI/PPT (CBDT Circular 1/2025), Finance Act 2023 royalty/FTS domestic-rate doubling, and Article 14 capital gains treatment were all checked and remain accurate as published.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Rate table — Income Type column (Dividends/Interest/Royalties) | Update | Added treaty Article citations (Article 11/12/13) — closes a specificity gap vs. top-ranking competitors and vs. this page's own sibling page, which already cites Article 13 for the same topic |
| Rate table footnote | Update | Added: (1) the Section 159 legal basis for the taxpayer's beneficial-provision election, not just the Form 41 filing mechanics; (2) the "no make-available clause" distinguishing fact already published on the sibling comparison page but missing here |
| New illustration box under the rate table | Add | Concrete worked example (₹1 crore dividend, treaty vs. domestic withholding) — closes the "specific withholding-tax-rate detail" gap flagged in the task; matches the calculation-style depth competitors (ClearTax, Tax2win, Beacon Filing) generally include |
| FAQPage JSON-LD structured data | Add | Page had an on-page FAQ section but zero structured data, unlike the sibling `uk-subsidiary-vs-branch-office-india` page (same cluster) which ships FAQPage schema. Built programmatically from the existing `faqs` array (no new claims, no drift risk) since 100% of this page's tracked GSC queries are question-phrased and FAQ-style SERP features are clearly live for this query set |
| `layout.tsx` meta description (all three variants: description, openGraph, twitter) | Update | Added the exact phrase "double taxation agreement with the UK... tax treaty" to pick up the synonym variant behind the "uk india double tax treaty" and "does india have a double taxation agreement with the uk" tracked queries, without touching the `<title>` |
| Everything else (TRC process steps, Form 41/145/146 explainer, PPT section, Capital Gains/Article 14 section, CETA disambiguation, FAQ answers themselves, internal links) | Not changed | Already accurate and already reflects the Income-tax Act 2025 transition — see Not Changed below |

## Search Intent Assessment
**Partially shifted, but the fix is not a rewrite — see below.**

The 8 tracked queries are uniformly broad, top-of-funnel "does this treaty exist / what is it" queries. WebSearch of the top-ranking pages for these terms (ClearTax, Tax2win, VJM Global) shows the SERP for this broad phrasing is currently dominated by high-authority, NRI/individual-taxpayer-oriented tax-filing portals, not corporate-advisory content. AU Corporate's page is deliberately narrower and B2B (UK parent company repatriating from an Indian subsidiary) — that's a legitimate, intentional differentiation for AU Corporate's actual audience and ICP, not a mistake to correct. Rewriting this into a general NRI/individual DTAA explainer to chase the broadest queries would be off-brand and would duplicate ground AU Corporate has no reason to compete on.

What *is* a real, addressable gap: the page wasn't fully exploiting its own narrower lane. It had the right rates but was thinner than competitors on citation specificity (no article numbers), missing a fact it had already validated and published on a sibling page (no make-available clause), had no worked example, and — most concretely — had zero FAQ structured data despite an FAQ section that directly answers several of its own worst-performing tracked queries. Those are the gaps this refresh closed.

**Flag per task instructions**: given the page's very low absolute impression volume (8 total) and that competitors ranking top 10 for the broadest queries are established, high-authority NRI tax portals, I do not expect this content refresh alone to move position-72-93 queries into the top 10 — that's more plausibly an authority/backlink gap than a content gap for the broadest terms. I believe the changes made here are the right structural fixes and are not a case for a fuller rewrite (the underlying content was accurate, well-organized, and already ahead of the Act-2025-transition curve), but I want to flag explicitly that closing the position-93 gap specifically may need more than an on-page refresh. Recommend re-checking GSC position for this cluster in 4-6 weeks rather than expecting a fast move.

## Not Changed (and why)
- **TRC/Certificate of Residence process steps (`trcSteps`)**: Accurate, HMRC RES1 process description unchanged and not contradicted by any research finding.
- **Form 41/Form 145/Form 146 explainer and FAQ answers**: Already correctly reflects the Income-tax Act, 2025 transition (Section 159(8), Section 393(2), Rule 75) — this page did not have the stale-1961-Act problem found and fixed on some sibling pages this session; no edit needed.
- **CETA disambiguation paragraph**: Factually distinct from the DTAA and already correctly scoped; no new information found that changes this.
- **Principal Purpose Test / CBDT Circular 1/2025 section**: Accurate and, if anything, ahead of several competitor pages in covering MLI/PPT depth — left as is.
- **Capital Gains / Article 14 section**: Already correctly cites Article 14 and the domestic-law/foreign-tax-credit mechanism (as opposed to a treaty-capped rate) — consistent with research findings; no change.
- **All internal links** (to `uk-subsidiary-vs-branch-office-india`, `fema-compliance-uk-company-india-subsidiary`, and back to the `/india-entry-for-uk-companies` hub) — left untouched, all still valid, no links added or removed.
- **`<title>` tag** — left unchanged; only the meta description was adjusted for synonym coverage, to avoid disturbing an established, already-reasonably-targeted SERP title.

## lastModified / sitemap.ts
Per instructions, I did **not** update `lastModified` in `app/sitemap.ts` myself. Flagging that this refresh made material content changes (new legal citations, a new illustrative calculation, new structured data, and a rewritten meta description) that would normally warrant moving this entry's `lastModified` from `2026-09-11` to today (`2026-09-23`) once you confirm.
