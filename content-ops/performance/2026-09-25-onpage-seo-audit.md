# Search Console Review: theaucorp.com — On-Page SEO & Internal Linking Audit — September 2026

## Data Window
- Source: GenieSEO (Google Search Console), property `sc-domain:theaucorp.com` (domain property; covers `www.theaucorp.com`, non-www, and http/https variants).
- Primary window ("last 28 days"): **2026-08-28 to 2026-09-25**.
- Comparison window ("prior 28 days"): **2026-07-31 to 2026-08-27**.
- Site-wide totals, last 28 days: **26 clicks, 1,422 impressions, 1.83% CTR, avg. position 20.9.**
- **Caveat on scale:** this is a very low-traffic property (well under 1 click/day). Almost every non-brand query has 1-3 impressions and 0 clicks. Where a finding rests on single-digit impression counts, that is called out explicitly — treat those as directional, not statistically solid. GA4 conversion data was not pulled into this report: no GA4 property ID was available in this session, and with only 26 site-wide clicks in 28 days a conversion breakdown would not be meaningful yet regardless.

## Indexing Issues
Checked 18 URLs via `check_indexing_issues` (batched, two known-page batches + a retry batch):

- **Confirmed issue:** `https://www.theaucorp.com/india-business-setup/company-formation` → **"Crawled - currently not indexed."** This is a real indexing problem, not a ranking/content problem — Google has seen the page and chosen not to index it, most likely because it's thin/near-duplicate relative to its parent `/india-business-setup` hub or because it has too few internal links pointing to it (it has only 2 impressions in 28 days, both from a single incidental query, see below). **This should be fixed/resolved before any content refresh is prioritized on it** — no amount of content or link work will show up in rankings while it stays unindexed.
- **Inconclusive (API timeout, not a confirmed problem):** `https://www.theaucorp.com/outsourcing` and `https://www.theaucorp.com/india-entry-for-china-companies` timed out on first check but came back **indexed clean** on retry — no issue.
- **Inconclusive (API timeout, not retried — low priority):** `http://www.theaucorp.com/` and `http://theaucorp.com/` (non-HTTPS variants) timed out twice. These are not the canonical page and carry negligible impressions now (see "http://theaucorp.com/" note in Declining Pages below); worth a quick manual check in GSC's URL Inspection tool to confirm they 301 to `https://www.theaucorp.com/`, but this is a low-priority technical check, not a content issue.
- All other checked URLs (`india-business-setup`, `gcc-setup-india`, `india-uk-dtaa-withholding-tax`, `accounting-outsourcing-firm-for-united-states-cpas-firm`, `australia-subsidiary-vs-branch-office-india`, `uk-subsidiary-vs-branch-office-india`, `india-business-setup/timeline-resources`, `india-business-setup/banking-taxation`, homepage, `india-entry-for-singapore-companies`, `services/accounting-assurance`) are **indexed** with no canonical or robots-block issues. So the poor rankings on most of these pages (see below) are genuine ranking/relevance problems, not indexing problems — content/on-page work is the right lever for them.

## Performance Summary (top pages by impressions, last 28 days)

| Page | Impressions | Clicks | CTR | Avg Position | Trend (vs prior 28d) |
|---|---|---|---|---|---|
| `/` (homepage) | 881 | 22 | 2.5% | 10.1 | Gaining — impressions +209% (285→881), position 18.1→10.1 |
| `/blog/india-safe-harbour-rules-2026` | 70 | 0 | 0% | 25.5 | Gaining — impressions +192% (24→70), position 69.0→25.5 |
| `/gcc-setup-india` | 68 | 0 | 0% | 54.2 | Gaining — impressions +656% (9→68), position 62.3→54.2, still deep page 5-6 |
| `/india-business-setup` | 58 | 0 | 0% | 71.5 | Declining impressions (105→58, -45%) though position nominally improved 78.0→71.5 — still effectively invisible |
| `/services` | 46 | 0 | 0% | 11.8 | Gaining — impressions +229% (14→46), position 43.8→11.8 |
| `/india-entry-for-china-companies` | 43 | 1 | 2.3% | 11.1 | Gaining — impressions +514% (7→43), position 32→11.1 |
| `/contact` | 41 | 0 | 0% | 5.4 | Gaining (9→41 impressions) — navigational, expected |
| `/accounting-outsourcing-firm-for-united-states-cpas-firm` | 35 | 1 | 2.9% | 15.8 | New in this window (0 impressions prior period) |
| `/india-entry-for-japan-companies` | 30 | 0 | 0% | 9.3 | Gaining — impressions +173% (11→30), position 48.3→9.3 |
| `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india` | 26 | 0 | 0% | 29.8 | Impressions down 52→26 but position held (32.1→29.8) |
| `/about` | 23 | 0 | 0% | 5.3 | Gaining — impressions +229% (7→23), position 47.3→5.3 |
| `/india-entry-for-german-companies` | 21 | 0 | 0% | 9.5 | New in this window |
| `/india-entry-for-us-companies` | 20 | 0 | 0% | 35.6 | Base too small to call (2 impressions prior period) — flagged as low-confidence, not a real regression |
| `/india-entry-for-singapore-companies` | 18 | 0 | 0% | 27.3 | Gaining — impressions 1→18, position 75→27.3 |
| `/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india` | 17 | 0 | 0% | 76.9 | Base too small to call (1 impression prior period at pos 1) — not a real signal either way |
| `/services/accounting-assurance` | 16 | 0 | 0% | 18.2 | Gaining — impressions +220% (5→16), position 58.4→18.2 |
| `/hr-services` | 13 | 0 | 0% | 12.8 | Gaining — impressions 8→13, position 59.2→12.8 |
| `/partners/uniproasia` | 13 | 1 | 7.7% | 4.7 | New in this window |
| `/outsourcing` | 38 | 0 | 0% | 49.4 | Gaining vs prior (16→38, position 80.6→49.4) but still page 5+ |
| `/india-uk-dtaa-withholding-tax` | 10 | 0 | 0% | 82.8 | Declining — impressions 29→10, position 80.9→82.8, already bottom-of-results both periods |
| `http://theaucorp.com/` (non-canonical) | 0 | 0 | — | — | Was 504 impr / 3 clicks / pos 11 prior period, now **0** — see note below |

*(Full 45-page table available from GenieSEO `get_advanced_search_analytics` dimensions=page; only pages with a clear signal are shown here to keep this actionable.)*

## High-Impression, Low-CTR Queries

- **`au corporate` (brand term) — 570 impressions, 5 clicks, CTR 0.88%, avg. position 8.7.** This single query accounts for **40% of all site impressions** in the last 28 days, and it is a branded/navigational term — yet it converts to clicks at under 1%. Position 8.7 means it's on page 1 but well below the fold, which is the likely proximate cause, but a sub-1% CTR on your own brand name at position ~9 is still low relative to normal brand-query behavior. Two hypotheses worth checking manually in the live SERP (not verifiable from GSC data alone): (a) title/meta isn't rendering as an obviously "official site" result, or (b) there's brand confusion with other "AU"-branded entities in India search results (e.g., AU Small Finance Bank, other "AU Corp/AU Consultants" style names visible elsewhere in this same query dataset). **This is the single highest-leverage low-CTR finding on the site** — recommend a manual SERP screenshot check and a title-tag/meta-description rewrite test for the homepage.
- No other query in the dataset has enough impression volume to draw a reliable low-CTR conclusion — every other query is in the 1-70 impression range with 0-1 clicks, which is too thin to separate "bad CTR" from "just very little search volume." Flagging this explicitly rather than fabricating a CTR insight from single-digit samples.

## Position 5-30 Near-Miss Queries

These are the clearest, evidence-backed "quick win" candidates — clusters of real commercial-intent queries sitting just outside page 1, all mapped to a single existing page:

1. **UK branch-vs-subsidiary cluster → `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india`**
   - `branch or subsidiary uk` — pos 30.7, 10 impressions
   - `branch vs subsidiary uk` — pos 29.5, 6 impressions
   - `uk branch vs subsidiary` — pos 29.4, 5 impressions
   - Combined: ~21 impressions, 0 clicks, all three variants clustered within one position point of each other (29.4-30.7). This is the densest non-brand near-miss cluster on the site. Recommend: refresh this page for depth/on-page targeting (all three phrasings in H1/H2/intro), and add internal links from `/india-entry-for-uk-companies` hub and blog content.

2. **US CPA/accounting outsourcing cluster → `/accounting-outsourcing-firm-for-united-states-cpas-firm`**
   - `us accounting firms outsourcing to india` — pos 12, 1 impression
   - `us accounting outsourcing companies in india` — pos 15.5, 2 impressions
   - `best accounting firms in india for us tax outsourcing` — pos 18, 3 impressions
   - `tcs finance and accounting business process outsourcing services alternatives` — pos 19, 1 impression
   - `us accounting outsourcing india` — pos 20.7, 3 impressions
   - `outsourced bookkeeping for us companies` — pos 24, 3 impressions
   - Combined: ~13 impressions across 6 distinct commercial queries, all positions 12-24, 0 clicks. A single page is systematically just missing page 1 across its entire keyword set — strong candidate for a content-depth refresh (competitor comparison content, pricing/process detail, case studies) plus internal links from `/outsourcing` and `/services`.

3. **`company registration in india from japan` → `/india-entry-for-japan-companies`** — pos 27, 4 impressions. Single query, but sits on a page that is otherwise performing very well (page-level position 9.3, gaining strongly) — this specific sub-intent (company *registration* rather than general entry) may need its own subsection or subpage, mirroring the structure already used for UK/US entry.

4. **`indian having holding company in singapore` / `singapore private limited company registration for india` → `/india-entry-for-singapore-companies`** — pos 33 (3 impr) and pos 29 (1 impr). Low volume but the page overall (pos 27.3, +17 impressions period over period) is trending into near-miss range — worth a lighter-touch refresh rather than top priority.

## Emerging Queries Not Yet Covered (or Covered by the Wrong Page)

- **`branch vs subsidiary` (generic, no country) — 13 impressions, position 80.8**, currently attributed to `/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india`. This is a genuine **relevance-signal mismatch**: the UK-specific version of this exact question (`branch vs subsidiary uk`, `branch or subsidiary uk`) ranks at position ~29-31 on the UK-specific page, but the *generic* version of the query is being matched to a country-specific (Australia) page and ranks terribly (pos 80.8). There is no general "branch office vs. subsidiary in India" pillar page. Recommend either building one (linking out to each country-specific page) or, at minimum, having the highest-authority country page (or the `/india-business-setup` hub) explicitly target the generic phrasing and internally link to the country variants.
- **`how can i automate apr filing and transfer pricing documentation for my india-us startup structure?` — 12 impressions, position 54.7**, currently attributed to the broad `/india-entry-for-us-companies` hub page. AU Corporate already has a *dedicated* subpage for this exact topic — `/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary` — which does **not** appear in the page/query data at all for this query. This is the clearest **"wrong page is ranking" finding** in the dataset: the general hub is absorbing a query that a more specific, presumably more relevant page should be capturing. Recommend strengthening internal links from the hub page directly to the transfer-pricing subpage with this kind of long-tail phrasing as anchor text, and checking the subpage's on-page content covers "automate," "documentation," and "APA/transfer pricing filing" language.
- **`australian accounting outsourcing companies in india` (12 impr, pos 76.8) / `australian accounting outsourcing in india` (6 impr, pos 70)**, both currently attributed to the generic `/outsourcing` page. There is no Australia-specific outsourcing page (compare to the dedicated `accounting-outsourcing-firm-for-united-states-cpas-firm` page, which performs far better for its US equivalent — pos 12-24 vs. pos 70-77 here). Given AU Corporate's own name/positioning, an Australia-specific outsourcing page is a logical content gap, not just an on-page tweak.
- **`gcc setup` cluster** (`gcc setup` 21 impr pos 71.4, plus ~12 more long-tail GCC variants each at 1-3 impressions, positions 30-85) on `/gcc-setup-india`. This topic's impressions grew **+656%** period over period (9→68), meaning real search demand is emerging for it, but the page currently ranks nowhere near page 1 for almost any variant. This reads as a genuine content-depth gap on a rising topic rather than noise — recommend a substantial refresh (the query spread — "meaning," "timeline," "cost," "as a service," "enablers," "organizational structure" — suggests this needs treatment as a full topic cluster/pillar, not a single page).

## Declining Pages (sustained trend, not noise)

- **`/india-uk-dtaa-withholding-tax`** — impressions down 29→10 (-65%), position slid slightly further from an already-poor 80.9→82.8. Consistent decline across both periods and already at the bottom of results both times — this is a real (if low-stakes, given the volume) downward trend on a page that has never really ranked. Low priority relative to items above, but worth including in a refresh backlog rather than ignoring.
- **`http://theaucorp.com/` (non-HTTPS, non-www variant)** — had 504 impressions / 3 clicks / position 11 in the prior 28-day period, and **zero** in the current period. This is very likely a technical/canonicalization artifact (GSC recording an old crawl of a redirecting URL that has since dropped out) rather than a content issue, but given the prior-period volume was non-trivial, recommend a quick manual check that `http://theaucorp.com/` and `http://www.theaucorp.com/` both 301 cleanly to `https://www.theaucorp.com/` (indexing check for these two URLs timed out twice via the API and could not be confirmed in this session).
- **Not flagged as declines (explicitly excluded as noise):** `/india-entry-for-us-companies` (position "dropped" from 4.5→35.6, but period 1 had only 2 impressions — too small a base to be a real signal) and `/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india` (period 1 had only 1 impression at position 1 — same issue). Both are called out here specifically so they are *not* mistaken for regressions in future reviews.

## Gaining Pages (candidates for more internal links/support, not necessarily on-page changes)

- **Homepage `/`** — impressions +209% (285→881), position 18.1→10.1, clicks 12→22. Clear real growth.
- **`/services`** — impressions +229% (14→46), position 43.8→11.8.
- **`/about`** — impressions +229% (7→23), position 47.3→5.3.
- **`/india-entry-for-china-companies`** — impressions +514% (7→43), position 32→11.1, now getting clicks.
- **`/india-entry-for-japan-companies`** — impressions +173% (11→30), position 48.3→9.3.
- **`/india-entry-for-singapore-companies`** — impressions 1→18, position 75→27.3.
- **`/services/accounting-assurance`** — impressions +220% (5→16), position 58.4→18.2.
- **`/hr-services`** — impressions 8→13, position 59.2→12.8.
- **`/blog/india-safe-harbour-rules-2026`** — impressions +192% (24→70), position 69.0→25.5 (a topical/news-driven page — worth linking to from the tax/compliance service pages while the topic is current).

These pages are moving in the right direction organically — the recommended action is **more internal links pointing to them** (from the homepage, `/services`, and relevant blog posts) to consolidate and accelerate the trend, not content rewrites.

## Recommendations

| Page/Query | Action | Priority | Rationale |
|---|---|---|---|
| `/india-business-setup/company-formation` | **Fix indexing** (resolve "Crawled – currently not indexed" — check for thin/duplicate content vs. parent hub, add internal links) before any content work | **Highest** | Confirmed indexing issue via `check_indexing_issues`; no content or link fix will help until Google indexes it |
| Homepage — `au corporate` brand query | Manual SERP check + title/meta rewrite test | **Highest** | 570 impressions (40% of site total), 5 clicks, 0.88% CTR at position 8.7 — largest single opportunity in the dataset by volume |
| `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india` | Refresh → `content-refresh-agent` (deepen content for all 3 UK branch/subsidiary phrasings) + internal links from UK hub/blog | High | Densest real near-miss cluster: 3 queries, positions 29.4-30.7, ~21 impressions, 0 clicks |
| `/accounting-outsourcing-firm-for-united-states-cpas-firm` | Refresh → `content-refresh-agent` (add depth: process, pricing, comparisons) + internal links from `/outsourcing`, `/services` | High | 6 distinct commercial queries clustered at positions 12-24, ~13 impressions, 0 clicks |
| `/india-entry-for-us-companies` → `/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary` | Add explicit internal link with long-tail anchor text; verify subpage covers "automate," "filing," "documentation" language | Medium-High | Wrong-page-ranking signal: hub page (pos 54.7) is absorbing a query the dedicated subpage should own |
| `/gcc-setup-india` | Refresh → `content-refresh-agent`, likely expand into a topic cluster (meaning, timeline, cost, as-a-service, org structure) | Medium-High | Impressions +656% period over period on a page still ranking pos 54-85 across nearly all its query variants — real emerging demand, weak coverage |
| New Australia-specific outsourcing page | New supporting article/page (Australia accounting/outsourcing entry point) | Medium | `/outsourcing` ranks pos 70-77 for Australia-specific queries with no dedicated page, unlike the far-better-performing US-specific page |
| General "branch vs. subsidiary in India" pillar page (or repoint hub page) | New page or on-page retarget + internal links to country pages | Medium | Generic query (pos 80.8) is mismatched to the Australia-specific page while country-specific variants rank far better on their own pages |
| `/india-business-setup` (flagship hub) | Investigate further — page ranks pos 71.5 for its own exact-match core terms (`india business setup`, `business setup in india`, `business setup india`) despite being indexed with no technical issues found | Medium | Confirmed indexed and no canonical/robots issues, so this is a genuine content/relevance problem on what should be a cornerstone page — recommend a full `content-refresh-agent` pass |
| Homepage, `/services`, `/about`, China/Japan/Singapore entry pages, `/services/accounting-assurance`, `/hr-services` | Add more internal links pointing to these (no content rewrite needed) | Medium | All showing genuine, sustained period-over-period gains in impressions and position — consolidate momentum rather than risk disrupting it |
| `http://theaucorp.com/` / `http://www.theaucorp.com/` | Manually verify 301 redirect to `https://www.theaucorp.com/` in GSC URL Inspection | Low | Indexing API check timed out twice; prior period showed non-trivial impressions (504) now at zero — likely benign but unconfirmed |
| `/india-uk-dtaa-withholding-tax` | Add to refresh backlog | Low | Real but small decline (29→10 impressions) on a page that has never ranked well (pos ~81-83) |

