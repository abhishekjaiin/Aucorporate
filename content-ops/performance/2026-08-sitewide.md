# Search Console Review: Site-wide — August 2026

## Data Window
- Primary window: 2026-07-28 to 2026-08-25 (28 days), compared against 2026-06-30 to 2026-07-27 (prior 28 days)
- Source: GenieSEO Search Console (`sc-domain:theaucorp.com`) + indexing checks on 27 sampled URLs
- GA4: not available this session — `run_ga4_report` requires a numeric GA4 Property ID and no `list_properties`/property-lookup tool was available to resolve `theaucorp.com` to one. No conversion/session data could be pulled. This should be revisited once the property ID is supplied directly.
- Note on scale: this is a low-traffic/early-stage property — 15 total clicks and 971 total impressions site-wide over the last 28 days. Every recommendation below is sized against that reality; a handful of clicks is a meaningful percentage swing here.

## Indexing Issues
Checked 27 URLs (homepage, non-www root, all service pages, all country entry pages, key blog posts) via `check_indexing_issues`:

- **26 of 27 indexed, 0 blocked by robots.txt, 0 fetch errors, 0 "not indexed" content pages.**
- `http://theaucorp.com/` (non-www, non-HTTPS root) is correctly classified as "Page with redirect" — not an error, this is the expected behavior of a working redirect to the canonical `https://www.theaucorp.com/`. Flagged only as a watch item: this URL still pulled 605 impressions / 3 clicks over the period and its position also degraded (8.6 → 10.7) in step with the rest of the site, so it isn't a separate problem, just riding the same trend as everything else (see Declining Pages).
- **Canonical-tag bug (real technical issue, low severity today because Google is overriding it):** three pages have a *user-declared* canonical tag pointing at the homepage (`https://www.theaucorp.com/`) instead of themselves:
  - `/services`
  - `/blog/wholly-owned-subsidiary`
  - `/blog/doing-business-india`
  Google is currently choosing the correct self-referential URL and indexing them anyway ("Google chose: [self URL] instead of user-declared: homepage"), so nothing is de-indexed. But a canonical pointing at the homepage is a template/CMS bug (likely a default-canonical fallback that isn't being overridden on these templates) and is a real risk if it spreads to more pages or if Google ever decides to honor it. **Recommend a dev/technical fix, not a content fix** — flag to engineering to check the canonical logic on the `/services` and `/blog/*` templates.
- No sitemap-status tool was available in this session to directly confirm submission/processing state; indirect evidence (26/27 sampled URLs indexed, no fetch or robots issues) suggests crawling/indexing itself is not the core issue here.

**Bottom line on indexing: indexing coverage is healthy. The real problem is not "pages missing from the index" — it's a site-wide ranking-position collapse on pages that ARE indexed.**

## Performance Summary (28-day totals, 2026-07-28 to 2026-08-25)
| Page | Impressions | Clicks | CTR | Avg Position | Trend vs. prior 28d |
|---|---|---|---|---|---|
| https://www.theaucorp.com/ (homepage) | 201 | 12 | 6.0% | 19.2 | Declining — position 8.6→19.2, CTR 14.7%→6.0% despite +97% impressions |
| http://theaucorp.com/ (redirect source) | 605 | 3 | 0.5% | 10.7 | Declining — position 8.6→10.7, clicks 6→3 |
| /india-business-setup | 84 | 0 | 0.0% | 76.7 | New page, ramping — 0 impressions in prior period |
| /india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india | 38 | 0 | 0.0% | 34.3 | New/ramping — 0 impressions in prior period |
| /services | 14 | 0 | 0.0% | 25.3 | Declining — position 7.4→25.3, impressions 27→14 |
| /india-entry-for-uk-companies/india-uk-dtaa-withholding-tax | 13 | 0 | 0.0% | 83.9 | New/ramping |
| /contact | 12 | 0 | 0.0% | 7.8 | Declining — position 4.0→7.8, impressions 33→12 |
| /outsourcing | 12 | 0 | 0.0% | 81.3 | New/ramping |
| /india-entry-for-japan-companies | 9 | 0 | 0.0% | 51 | New/ramping |
| /hr-services | 10 | 0 | 0.0% | 44.7 | Declining — position 4.5→44.7 (real collapse, not new) |
| /india-entry-for-china-companies | 7 | 1 | 14.3% | 32 | New — only page with a genuine click on a new-page query |
| /about | 7 | 0 | 0.0% | 47.3 | New/ramping |
| /services/transaction-advisory | 7 | 0 | 0.0% | 82.1 | New/ramping |
| /doing-business-in-india | 3 | 0 | 0.0% | 35.3 | Declining — position 5.2→35.3, impressions 14→3 |
| /blog (index) | 3 | 0 | 0.0% | 31.7 | Declining — position 6.5→31.7 |
| /blog/india-safe-harbour-rules-2026 | 6 | 0 | 0.0% | 66 | New/ramping |
| /services/accounting-assurance | 2 | 0 | 0.0% | 21 | Declining — position 4.6→21, impressions 16→2 |
| /services/taxation-regulatory | 2 | 0 | 0.0% | 47.5 | Declining — position 18.8→47.5 |
| /gcc-setup-india | 2 | 0 | 0.0% | 81 | New/ramping |
| /india-entry-for-us-companies | 2 | 0 | 0.0% | 4.5 | New — already at a strong position, low volume |
| /services/training-workshops | 3 | 0 | 0.0% | 3.3 | Improving — position 6.5→3.3 (only genuine gainer) |
| /arbitration-services | 1 | 0 | 0.0% | 9 | Slight decline — position 4.7→9, impressions 3→1 |

## High-Impression, Low-CTR Queries
This is the single biggest lever on the site right now:
- **"au corporate" — 508 impressions, 1 click, CTR 0.2%, avg. position 8.6.** This one query is **52% of all impressions on the entire site** for the period, sitting on page 1 (position ~8-9), yet is converting almost none of that visibility into clicks. This is a branded/navigational query — the near-zero CTR at a page-1 position points to a title tag / meta description / SERP snippet problem (unclear or unappealing title, no compelling meta description, or the site is being outranked in perceived trust by other "AU Corp/Corporate"-adjacent results). Fixing this single query's CTR from 0.2% to even 3-5% would roughly triple-to-quintuple total site clicks.
- **"au company" — 22 impressions, 0 clicks, position 7.9.** Same brand-adjacent pattern, page 1, zero clicks.
- **"au corp" — 10 impressions, 0 clicks, position 7.9.** Same pattern.
- **"branch or subsidiary uk" — 18 impressions, 0 clicks, position 29.9.** Below page 1 so CTR is expected to be low, but flagged because it's the top query on `/uk-subsidiary-vs-branch-office-india`, discussed further below as a near-miss.

## Position 5-30 Near-Miss Queries
These are the closest to a quick win — already ranking, need a push rather than new content:
| Query | Page | Position | Impressions | Notes |
|---|---|---|---|---|
| au corporate | homepage | 8.6-9.0 | 508 | Near miss on position, but the real problem is CTR (see above) |
| au company | homepage | 7.9-16.2 | 22 | Consolidate/strengthen homepage brand signals |
| au corp | homepage | 5.4-7.9 | 10-15 | Same |
| aucorp | homepage | 8.0-8.3 | 5-7 | Only branded query with a real click (14.3% CTR) — this is the pattern the others should match |
| branch or subsidiary uk | /uk-subsidiary-vs-branch-office-india | 29.9 | 18 | Closest genuine content near-miss — page exists, topic matches query intent exactly, just needs on-page optimization/refresh + internal links to break into top 10-15 |
| branch vs subsidiary uk | /uk-subsidiary-vs-branch-office-india | 39.3 | 3 | Same cluster |
| india-entry-for-us-companies (page) | — | 4.5 | 2 | Strong position already on low volume — candidate for more internal links to grow impressions, not a content problem |
| services/training-workshops (page) | — | 3.3 | 3 | Best-positioned page on the site; low volume, good internal-link candidate |

## Emerging Queries Not Yet Covered (well)
- **"Business setup in India" cluster** — "business setup in india" (48 impr), "business setup india" (13), "india business setup" (11), "setting up in india" (3), "setting up and operating in india" (2), "india company setup" (1) = **78 impressions combined**, all landing on `/india-business-setup` at position 68-93. The page exists and is clearly the intended target, but it is brand new (zero impressions in the prior period) and not yet earning any meaningful rank for its core cluster. This is the single largest *volume opportunity* on the site outside the brand query. Recommend a **refresh pass** on `/india-business-setup` once it's had a few more weeks to be crawled/evaluated — check title/H1/on-page targeting align tightly with "business setup in India" phrasing, and add internal links from top pages (homepage, services) pointing to it.
- **"Australian accounting outsourcing in/to India"** — "australian accounting outsourcing in india" (3 impr), "australian accounting outsourcing companies in india" (2 impr), both at position 85-93. No page on the site currently targets this specific angle (accounting outsourcing FROM Australia TO India) directly — `/outsourcing` and `/services/accounting-assurance` exist but aren't ranking for it. **This is a genuine content-gap candidate**: a dedicated page/article on "Australian accounting & finance outsourcing to India" would target real, if modest, query volume that nothing on-site currently owns well.
- **"GCC organizational structure India"** (2 impr, position 81) — maps to `/gcc-setup-india`, itself brand new and not yet ranking. Not enough data yet to call this a gap vs. simple ramp-up; monitor next cycle.
- **"Transaction advisory services" / "transaction and advisory services"** (7 impr combined, position 82) — maps to `/services/transaction-advisory`, also brand new. Same as above — monitor, don't act yet.
- **Local Delhi-office queries** — "ca firm in connaught place", "ca firm in barakhamba road", "ca firm in cp" (5 impressions combined, position 83-101). Very low volume; only worth a dedicated local-landing-page investment if the business specifically wants to compete for local CA-firm search intent. Flagged as low-priority, not recommended for immediate action.

## Declining Pages (sustained trend, not noise)
All of the following show a consistent, same-direction decline across the full 28-day comparison window (not a 1-3 day blip), and it is a genuinely site-wide pattern hitting nearly every previously-ranking page simultaneously:
| Page | Position: prior → current | Impressions: prior → current | CTR: prior → current |
|---|---|---|---|
| Homepage (www) | 8.6 → 19.2 | 102 → 201 | 14.7% → 6.0% |
| Root (non-www redirect) | 8.6 → 10.7 | 746 → 605 | 0.8% → 0.5% |
| /services | 7.4 → 25.3 | 27 → 14 | 3.7% → 0.0% |
| /contact | 4.0 → 7.8 | 33 → 12 | 0.0% → 0.0% |
| /services/accounting-assurance | 4.6 → 21.0 | 16 → 2 | 0.0% → 0.0% |
| /doing-business-in-india | 5.2 → 35.3 | 14 → 3 | 0.0% → 0.0% |
| /hr-services | 4.5 → 44.7 | 8 → 10 | 0.0% → 0.0% |
| /services/taxation-regulatory | 18.8 → 47.5 | 4 → 2 | 0.0% → 0.0% |
| /blog (index) | 6.5 → 31.7 | 2 → 3 | 0.0% → 0.0% |
| /arbitration-services | 4.7 → 9.0 | 3 → 1 | 0.0% → 0.0% |

**This is the single most important finding of this audit.** Nearly every page that had an established position (single digits to low-20s) in the prior 28-day window degraded by 10-40+ positions in the current window, at the same time several brand-new pages appeared with very weak starting positions (70-100, typical of freshly-crawled content still being evaluated). Combined with the canonical-tag bug found on `/services` and two blog posts, this pattern is consistent with a **recent site relaunch/redesign or major on-page template change** around the period boundary (late July 2026) that (a) added a batch of new pages — good — but (b) appears to have disrupted Google's confidence in the previously-ranking pages, whether through template/canonical changes, internal linking changes, or a technical signal shift. This should be treated as a technical/site-health investigation item, not simply a batch of "pages to refresh" — refreshing content on pages that lost rank purely due to a technical regression won't fix the underlying cause.

## Gaining Pages
- **/services/training-workshops** — position improved 6.5 → 3.3, the only page on the site with a genuine like-for-like rank improvement. Low volume (3-4 impressions) but strong position; candidate for more internal links to grow its visibility rather than a content change.
- New pages (`/india-business-setup`, `/uk-subsidiary-vs-branch-office-india`, `/india-uk-dtaa-withholding-tax`, `/outsourcing`, `/india-entry-for-japan-companies`, `/about`, `/services/transaction-advisory`, `/gcc-setup-india`, `/blog/india-safe-harbour-rules-2026`) are "gaining" only in the sense of newly appearing in the index with impressions — their positions (67-93) are still weak and this is expected ramp-up behavior, not yet a signal of success or failure. Re-check in the next monthly cycle once they've had 60+ days to season.

## Recommendations
| Page/Query | Action | Priority | Rationale |
|---|---|---|---|
| Site-wide ranking collapse (nearly all previously-ranking pages) | Technical investigation — NOT a content refresh. Check what changed site-wide around 2026-07-27/28 (template/CMS change, internal linking overhaul, redirect chain, Core Web Vitals regression, or canonical logic) before touching any individual page's copy | **Critical** | Same-direction position loss of 10-40+ across nearly every established page in one comparison window; content edits won't fix a technical/structural cause |
| Canonical tag bug on `/services`, `/blog/wholly-owned-subsidiary`, `/blog/doing-business-india` | Dev fix: correct the template/CMS default so these pages self-canonicalize instead of pointing at the homepage | **High** | Real technical bug; Google is currently overriding it correctly but this is fragile and should not be left in place |
| Homepage — "au corporate" / "au company" / "au corp" queries | Refresh title tag + meta description to be more compelling/clear for the brand query; investigate SERP snippet (is a sitelinks search box or other SERP feature diverting clicks?) | **Critical** | 508 impressions (52% of all site impressions) converting at 0.2% CTR at position ~8.6 — the largest single click-recovery opportunity on the site, hand to `content-refresh-agent` for title/meta work |
| `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india` | Refresh — tighten on-page targeting for "branch or subsidiary uk" / "branch vs subsidiary uk", add internal links from homepage/UK entry pages | **High** | Closest genuine near-miss with real content-intent match (position 29.9-39.3, 18-23 impressions, page already built for this exact query) |
| `/india-business-setup` | Hold for now — re-audit in ~4-6 weeks once page has seasoned; if still not climbing, refresh title/H1/on-page copy to target "business setup in India" phrasing directly and add internal links from homepage/services | **Medium** (watch, revisit) | Largest volume opportunity outside brand query (78 impressions across query cluster) but page is brand new — too early to call it underperforming vs. still-ramping |
| New page: "Australian accounting/finance outsourcing to India" | New supporting article/page (not a refresh of `/outsourcing` or `/services/accounting-assurance` — those aren't targeting this angle) | **Medium** | Real query cluster ("australian accounting outsourcing in/to india", 5 impressions) with no dedicated on-site page currently targeting it |
| `/contact`, `/services/accounting-assurance`, `/doing-business-in-india`, `/hr-services`, `/services/taxation-regulatory` | Hold on content refresh until the site-wide technical cause (above) is identified/fixed; re-test position after the fix before deciding these need copy changes | **Medium** (sequenced after technical fix) | All show sustained decline in lockstep with the site-wide pattern — likely a technical symptom, not a content-quality problem |
| `/services/training-workshops`, `/india-entry-for-us-companies` | Add internal links from homepage/services nav | **Low** | Already well-positioned (3.3 and 4.5) on low volume; more internal link equity could grow impressions without any content change |
| Local Delhi-office queries ("ca firm in connaught place/cp/barakhamba road") | No action recommended at this time | **Low** | Volume too low (5 impressions combined) to justify a dedicated local page yet; revisit if local search becomes a stated priority |

## Limitations / Notes for Next Cycle
- GA4 conversion/session-quality data could not be pulled this session (numeric GA4 Property ID not available via current toolset). Recommend supplying the property ID directly next time so traffic-to-conversion can be checked, particularly for the homepage and `/india-business-setup`.
- Given how new/thin this site's traffic is (15 clicks/28 days), position and CTR figures on single-digit-impression queries are directionally useful but should not be over-indexed on; the recommendations above are weighted toward the queries/pages with enough volume (10+ impressions) to be a real signal.
