# Search Console Review: Site-wide — September 2026

## Data Window
- Search Console data source: GenieSEO (Google Search Console API), property `sc-domain:theaucorp.com`.
- Primary window: 2026-08-26 to 2026-09-23 (28 days) vs. prior period 2026-07-29 to 2026-08-25 (28 days), via `compare_search_periods` (page dimension, 47 pages returned — full data set, not truncated).
- Daily trend pulled via `get_performance_overview` for the primary 28-day window.
- Note: `https://theaucorp.com/` (no `www`) returned a 403 "insufficient permission" error in GSC — the verified/authorized property is the domain property `sc-domain:theaucorp.com`, and the canonical serving host is `https://www.theaucorp.com/`. All figures below use that property.
- GA4: **could not be pulled.** The `run_ga4_report` tool requires a numeric GA4 Property ID, and no property-listing tool was available to discover it. No GA4 traffic/engagement/conversion figures are included in this report — do not treat their absence as "no traffic," it is a data-access gap that needs a valid GA4 Property ID supplied before the next review.

## Indexing Issues
Checked 10 URLs total across two passes (first pass mistakenly used non-www URLs, which GSC correctly reported as "unknown" since the site canonicalizes to `www` — re-run against `https://www.theaucorp.com/...` below is the accurate read).

| URL | Status | Notes |
|---|---|---|
| /branch-office-in-india | **Discovered — currently not indexed** | Google knows the URL exists but hasn't indexed it yet. Normal for a page ~2 days old; needs another crawl pass. |
| /liaison-office-in-india | **Discovered — currently not indexed** | Same as above. |
| /project-office-in-india | **URL unknown to Google** | Google has not even discovered this URL yet. Bigger flag than the two above — suggests it isn't linked/sitemapped as well internally, or is too new for the last crawl of the sitemap. |
| /llp-in-india | **URL unknown to Google** | Same issue as project-office-in-india. |
| /doing-business-in-india | Indexed | No issue. |
| /india-business-setup | Indexed | No issue, but see ranking problem below — indexed ≠ ranking. |
| / (homepage) | Indexed | No issue. |
| /services | Indexed | No issue. |
| /gcc-setup-india | Indexed | No issue. |
| /india-entry-for-uk-companies | Indexed | No issue. |
| /blog/india-safe-harbour-rules-2026 | Indexed | No issue. |
| /india-entry-for-china-companies | Indexed | No issue. |

No canonical issues or robots-blocked pages found on any checked URL. No broader sitewide indexing problem — the gap is isolated to the 4 newest entity-type pages, consistent with their 2-day age, but `/project-office-in-india` and `/llp-in-india` warrant an explicit indexing request since Google hasn't even discovered them yet.

## Performance Summary (28-day totals, sc-domain:theaucorp.com)
Sitewide: **25 clicks, 1,448 impressions, 1.73% CTR, avg. position 23.4** (per `get_performance_overview`). Daily trend shows avg. position improving markedly across the window: ~40-55 (Aug 26–Sep 1) → ~8-17 (Sep 10 onward). This is a real, sustained multi-week movement, not day-to-day noise.

Top pages by impressions (28-day window):

| Page | Impressions | Clicks | CTR | Avg Position | Trend (vs. prior 28d) |
|---|---|---|---|---|---|
| / (homepage) | 891 | 22 | 2.47% | 10.9 | Impressions +264%, clicks +69%, position improved (17.1→10.9), but CTR fell (5.31%→2.47%) |
| /india-business-setup | 70 | 0 | 0% | 73.8 | Impressions -24% (92→70), position still very poor (77.4→73.8) |
| /gcc-setup-india | 56 | 0 | 0% | 56.1 | Impressions +600% (8→56), position only slightly better (60.8→56.1) |
| /services | 46 | 0 | 0% | 15.7 | Impressions +207%, position improved sharply (29.7→15.7) |
| /outsourcing | 40 | 0 | 0% | 52.7 | Impressions +208%, position improved (81.1→52.7) but still page 5+ |
| /contact | 39 | 0 | 0% | 5.5 | Impressions +255%, strong position |
| /accounting-outsourcing-firm-for-united-states-cpas-firm | 34 | 1 | 2.94% | 16.0 | New in this period (0 impressions prior) |
| /india-entry-for-china-companies | 34 | 1 | 2.94% | 12.1 | Impressions +386% (7→34), position improved sharply (32→12.1) |
| /india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india | 34 | 0 | 0% | 29.2 | Impressions -21%, position improved slightly (33.7→29.2) |
| /india-entry-for-japan-companies | 29 | 0 | 0% | 11.9 | Impressions +222% (9→29), position improved dramatically (51→11.9) |
| /about | 22 | 0 | 0% | 5.1 | Impressions +214%, position improved dramatically (47.3→5.1) |
| /india-uk-dtaa-withholding-tax | 23 | 0 | 0% | 81.1 | Impressions +44%, position stuck near bottom |
| /blog/india-safe-harbour-rules-2026 | 71 | 0 | 0% | 34.6 | Impressions +446% (13→71), position improved a lot (69.3→34.6) but still no clicks |

## High-Impression, Low-CTR Queries
- **"au corporate" (homepage)** — 572 impressions, 5 clicks, CTR **0.87%**, position 8.9. This is the brand query, ranking near top-10 with very low click-through for a branded term. Likely causes: crowded SERP with lookalike/near-brand results (query list also shows "au corp", "au company", "au co", "auctor business solutions", "atcorp" appearing for the same page — suggesting brand disambiguation issues), missing sitelinks, or a weak/unclear meta title-description for the query. Worth a SERP snapshot check and title/meta review.
- **/india-business-setup** — 70 impressions across its core terms, 0 clicks, CTR 0%. Not really a CTR problem so much as a ranking problem (avg. position 73.8) — see below.
- **/gcc-setup-india** — 56 impressions, 0 clicks. Same pattern: ranking problem, not CTR problem, given position 56.1.

## Position 5-30 Near-Miss Queries
These are the closest genuine quick-win opportunities:
| Query/Page | Position | Impressions | Notes |
|---|---|---|---|
| "au corporate" → / | 8.9 | 572 | Ranking well, CTR is the blocker (see above) |
| "aucorp" → / | 5.4 (site-wide query table) / 3.5 (page-level) | 10 | Small volume but strong position |
| /india-entry-for-china-companies (page avg) | 12.1 | 34 | Only non-homepage page with repeat clicks; close to page 1 |
| /india-entry-for-japan-companies (page avg) | 11.9 | 29 | Jumped from position 51 last period — momentum page |
| /india-entry-for-german-companies (page avg) | 10.5 | 16 | New appearance this period (0 impressions prior) |
| /about | 5.1 | 22 | Strong position, zero clicks — check if snippet/title is compelling |
| /services | 15.7 | 46 | Improved from 29.7; a page or two from top 10 |
| /hr-services | 15.6 | 14 | Jumped from position 48.2 — momentum page |
| /contact | 5.5 | 39 | Strong position already |
| /accounting-outsourcing-firm-for-united-states-cpas-firm | 16.0 | 34 | New page/query this period |
| /blog/india-japan-bis-exemption-high-tech-investment | 5.2 | 5 | Small volume, strong position, already converting 1 click |

## Emerging Queries Not Yet Covered
- **GCC (Global Capability Centre) cluster**: "gcc setup" (20 impr, pos 71.8), "gcc setup meaning" (pos 76), "how to set up a gcc in india" (pos 73.7), "set up gcc bangalore" (pos 43), "gcc organizational structure india" (pos 76), "joint venture gcc setup" (pos 75), "global in house center setup" (pos 66). All map to `/gcc-setup-india`, which is indexed but ranking very poorly (avg. 56-72) despite impressions growing 600% period-over-period. This reads as a real, hot topic the site isn't yet winning — the existing page likely doesn't match search intent/depth for these variant queries.
- **India-UK DTAA / withholding tax cluster**: "dtaa between india and uk", "india uk dtaa", "double taxation avoidance agreement india and uk", "does india have a double taxation agreement with the uk" — all positions 72-93, mapped to `/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax`, which itself sits at position ~81 despite 23 impressions and growth. Content/relevance gap.
- **Long-tail AI-style query**: "how can i automate apr filing and transfer pricing documentation for my india-us startup structure?" — 11 impressions, position 51.2. No dedicated page matches this intent; signals demand for a transfer-pricing-automation angle under the US-companies cluster.
- **Safe harbour / transfer pricing 2026**: "safe harbour rules budget 2026", "india transfer pricing safe harbour rules", "safe harbour india" — feeding `/blog/india-safe-harbour-rules-2026`, which grew impressions +446% and improved position 69→34.6 but still converts zero clicks. This is a genuinely gaining topic worth supporting further rather than starting a new article.

## Declining Pages (sustained trend, not noise)
- **/india-business-setup**: impressions down 24% (92→70) period-over-period, and it's the pillar/cornerstone "India Business Setup" hub page — yet it ranks position ~74-83 for its own core terms ("india business setup" pos 83.1, "business setup in india" pos 84.8, "business setup india" pos 82.2). This combination — declining impressions AND page-8+ rankings on a hub page with 69 other pages presumably linking into it — is the single biggest problem in this audit.
- **/services/transaction-advisory**: impressions down 83% (12→2), position essentially unchanged and poor (~80-81) both periods.
- **http://theaucorp.com/** (bare, non-https, non-www): impressions dropped from 575 to 0. This looks like a positive canonicalization cleanup (traffic consolidating onto `https://www.theaucorp.com/`), not a real loss — flagging only so it isn't misread as a decline in the aggregate trend.

## Gaining Pages
- **/ (homepage)**: impressions +264%, clicks +69%, position 17.1→10.9.
- **/india-entry-for-china-companies**: impressions +386%, position 32→12.1 — candidate for more internal links to push into top 10.
- **/india-entry-for-japan-companies**: impressions +222%, position 51→11.9.
- **/about**: impressions +214%, position 47.3→5.1.
- **/hr-services**: position 48.2→15.6.
- **/services**: impressions +207%, position 29.7→15.7.
- **/gcc-setup-india**: impressions +600%, but position still poor (56.1) — gaining visibility without gaining rank; needs content work, not just links.
- **/blog/india-safe-harbour-rules-2026**: impressions +446%, position 69.3→34.6.
- **/india-entry-for-singapore-companies**: impressions +900% (1→10), position 75→22.4.
- **/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us**: impressions +400%, position 82→47.

## Recommendations

| Page/Query | Finding | Recommended Action | Priority |
|---|---|---|---|
| /project-office-in-india, /llp-in-india | URL unknown to Google — not yet discovered | Submit for indexing via GSC URL Inspection "Request Indexing"; verify both are in sitemap.xml and linked internally from /doing-business-in-india, /india-business-setup, and the other entity pages | High |
| /branch-office-in-india, /liaison-office-in-india | Discovered, not yet indexed | Monitor for 1-2 weeks; if still not indexed by early Oct, request indexing manually | Medium |
| /india-business-setup | Cornerstone hub page, indexed, but ranks position ~74-84 for its own core queries; impressions declining -24% | Hand to content-refresh-agent — likely thin/misaligned content vs. search intent for "india business setup" / "business setup in india"; also audit internal linking into this page | High |
| /gcc-setup-india | Impressions +600% but position stuck at ~56-72 across a whole cluster of GCC variant queries | Hand to content-refresh-agent to expand coverage of "gcc setup meaning," "how to set up a gcc," "gcc organizational structure" intents; strong emerging-topic signal | High |
| /india-entry-for-uk-companies/india-uk-dtaa-withholding-tax | Cluster of DTAA queries all ranking position 72-93 | Refresh content to directly answer "is there a DTAA between India and UK," treaty specifics; currently likely too generic/thin for these queries | Medium |
| "au corporate" (homepage) | 572 impressions, position 8.9, CTR only 0.87% | Review homepage title tag/meta description for brand-query appeal; check GSC/SERP for sitelinks and near-brand confusion (au corp, atcorp, auctor, etc. appearing in same query set) | Medium |
| /india-entry-for-china-companies, /india-entry-for-japan-companies, /india-entry-for-german-companies | Position 5-30, high positive momentum, currently zero/minimal clicks except China page | Add more internal links from homepage/services/regional hub pages to consolidate authority and push into top 10 | Medium |
| /blog/india-safe-harbour-rules-2026 | Emerging topic, +446% impressions, position improved to 34.6, still 0 clicks | Support with internal links from tax/transfer-pricing pages rather than a new article; consider a title/meta refresh once it nears page 2 | Medium |
| "how can i automate apr filing and transfer pricing documentation…" query | New long-tail, AI-assistant-style query, no dedicated page, position 51 | Consider as input to new-topic prioritization for a transfer-pricing-automation supporting article under the US-companies cluster — do not act yet, single query with 11 impressions is a weak signal on its own | Low |
| /services/transaction-advisory | Impressions down 83%, position stuck ~80 both periods | Monitor; low volume, may not be worth prioritizing over the higher-impact items above | Low |
| GA4 property | No numeric GA4 Property ID available to this agent | Supply a valid GA4 Property ID before the next review so conversion/engagement data can be cross-referenced with these CTR and ranking findings | Medium (process fix) |
