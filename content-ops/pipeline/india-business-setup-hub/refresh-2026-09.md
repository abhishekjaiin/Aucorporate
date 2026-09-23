# Refresh: India Business Setup (pillar hub) — 2026-09-23

## Trigger
Site-wide Search Console audit (`content-ops/performance/2026-09-sitewide.md`, 28-day window 2026-08-26 to 2026-09-23 vs. prior 28 days): `/india-business-setup` is the intended cornerstone page for its own core terms but ranks position ~74-85 for them, and impressions declined 24% period-over-period (92→70). This is a sustained, well-evidenced decline on the site's most important hub page, not day-to-day noise — a real trigger, and a high-priority one per the audit's own recommendation table ("Hand to content-refresh-agent — likely thin/misaligned content vs. search intent").

Note on the pipeline history: `content-ops/keyword-database/topics.csv` confirms this page was never run through the full 11-stage pipeline — it's an "existing live page — seed entry" from 2026-05-04. No `01-serp-research.md` / `06-content-architecture.md` etc. exist for this slug (only this directory itself, previously empty), so there is no prior pipeline architecture rationale to reconcile against; this refresh is working from the live page and fresh research only.

## Current Page vs. Current SERP
Re-ran a lightweight SERP check for "india business setup" / "business setup in india" / "business setup in india for foreign investors." The top-10 is dominated by established company-registration service firms and content hubs — IndiaFilings, Commenda, ClearTax, VJM Global, Setindiabiz, KSandK, Wisemonk, Ahlawat & Associates, KNM India — none of which are new entrants to this space. Consistent pattern across them:
- Single-page, comprehensive coverage: entity types, FDI routes, step-by-step incorporation, **document checklist, and cost/fee breakdown** almost always appear together on one page, rather than being split across a hub-and-spoke architecture.
- Cost is a first-class topic on nearly every competing page (e.g., "₹6,000-15,000 base MCA/stamp duty + ₹20,000-50,000 professional fees" is a commonly repeated figure across several independent sources) — our hub page previously had **zero mention of cost anywhere**, despite AU Corporate already having a fully verified cost breakdown live on `/india-business-setup/timeline-resources`.
- Real-world vs. "official" timeline framing (7-14 days official vs. 6-8 weeks real-world) is a recurring competitor angle — AU Corporate's own site already makes this exact argument well (see `company-formation` and `timeline-resources` FAQs), but the hub page itself doesn't surface it.
- No evidence of a search-intent shift toward a different content type (no video pack, no local pack, no shopping/product features) — this remains a standard informational-with-commercial-undertone SERP, same as when the page was built. AU Corporate's existing hub-plus-lead-form model still matches intent; the page is just thinner than what's currently ranking.

Verdict: this is a depth/completeness gap on an otherwise correctly-scoped page, not an intent mismatch requiring restructuring.

## Current Page vs. Search Console Data
Pulled query-level data for `/india-business-setup` via GenieSEO (28-day window):

| Query | Impressions | Clicks | Position |
|---|---|---|---|
| business setup in india | 24 | 0 | 84.8 |
| india business setup | 17 | 0 | 83.1 |
| business setup india | 11 | 0 | 82.2 |
| set up in india | 6 | 0 | 53.7 |
| setting up in india | 3 | 0 | 63.3 |
| businesssetup | 2 | 0 | 59 |
| business setup | 1 | 0 | 79 |

All zero clicks — this is a pure ranking problem, not a CTR/snippet problem (matches the sitewide audit's own conclusion). The page is indexed with no canonical/robots issues (confirmed in the audit). The only two queries with a plausible-page-1-within-reach position ("set up in india" at 53.7, "setting up in india" at 63.3) are lower-volume variants, not the head terms.

## New Authoritative Information Found
**Material, verified regulatory staleness found and fixed:** the hub page's FAQ and its "Government Route" card both still listed **insurance** as a sector requiring Government Route approval / capped foreign equity. This is now out of date. Verified via multiple independent sources:
- PIB press release: "FDI LIMIT FOR INSURANCE SECTOR RAISED FROM 74 TO 100 PER CENT"
- BusinessToday (Economic Survey 2026 coverage) and IndiaLaw.in, both confirming the Insurance Laws (Amendment) Act, 2025 provisions took effect 5 February 2026
- Cross-checked against AU Corporate's own `/india-business-setup/fdi-channels` page (last updated 11 September 2026), which already correctly states: "Since February 2026 (DPIIT Press Note 1, 2026 Series), 100% FDI is permitted under the Automatic Route for insurance companies and insurance intermediaries, up from the earlier 74% approval-gated cap. LIC remains capped at 20% Automatic Route."

The hub page was **contradicting its own more-current child page** — a real, citable regulatory drift, exactly the kind of finding this process exists to catch. Fixed in both places it appeared on the hub (FAQ #2 and the Government Route card), matching the fdi-channels page's framing and citation style, without duplicating its full detail (hub links out to fdi-channels for the complete sector table, per the existing architecture).

Checked and confirmed **unchanged / still accurate** on the hub page:
- Defence FDI: still 74% Automatic / beyond that Government Route with "modern technology" condition — 2026 press reports show the government is *considering* further liberalisation but nothing has been formally notified yet, so no page change warranted (verified against `fdi-channels`' own defence entry, which is consistent).
- Automatic Route / Government Route timelines (4-6 weeks / 8-12 weeks) — consistent with `company-formation`, `fdi-channels`, and `timeline-resources`, all independently verified and already live.
- Section 149(3) resident-director 182-day rule — unchanged, Companies Act 2013 provision, consistent with sibling pages' existing hedge.
- No stale Income-tax Act 1961 references were present on this page to begin with (the hub doesn't discuss tax mechanics in detail — that's `banking-taxation`'s job).

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Hero | Add "Last updated" byline | Every other page in this cluster (company-formation, fdi-channels, timeline-resources, all 4 entity-type pages) carries a "Last updated: [date] — prepared by AU Corporate's [practice]" line; the hub was the one page missing this E-E-A-T/freshness signal. |
| Hero | Add 4-stat snapshot row (Automatic Route timeline, full setup timeline, one-time cost range, entity types covered) | Matches the pattern already used on `company-formation`, `fdi-channels`, and `timeline-resources`; surfaces cost above the fold, which the page previously never mentioned anywhere. |
| FAQ #2 ("Can a foreign company own 100%...") | Update (regulatory fix) | Removed stale claim that insurance requires Government Route/caps equity; added the verified Feb 2026 100% Automatic Route liberalisation, consistent with `fdi-channels`. |
| "Government Route" card | Update (regulatory fix) | Removed "insurance" from the list of sectors requiring Government Route approval — no longer accurate. |
| "Automatic Route" card | Update | Added the insurance liberalisation as a concrete example of an Automatic Route sector, replacing a generic reference. |
| "Setup Timeline at a Glance" intro | Add | New sentence surfacing the verified one-time setup cost range (₹55K-1.15L+), linking down to the existing "See the full week-by-week timeline and budget breakdown" CTA into `/india-business-setup/timeline-resources`. Closes the single biggest content gap vs. competing SERP pages (cost) without duplicating the verified figures — they're sourced from the already-published `timeline-resources` page, not invented here. |
| FAQ (new) — "What does it cost to set up a business in India?" | Add | Directly answers a query type every ranking competitor addresses and this page previously didn't cover at all; reuses `timeline-resources`' verified cost figures verbatim, links there for the full breakdown. |
| FAQ (new) — "What documents does a foreign company need to register a business in India?" | Add | Same rationale — document checklists are a near-universal section on competing pages; this FAQ reuses/points to the existing `company-formation` document guidance (DocumentChecklist component) rather than introducing new claims. |

No section was removed. No existing internal links (to `fdi-channels`, `company-formation`, `regulatory-compliance`, `banking-taxation`, `timeline-resources`, `doing-business-in-india/why-india`, `doing-business-in-india/post-incorporation`, `branch-office-in-india`, `liaison-office-in-india`, `project-office-in-india`, `llp-in-india`, `/contact`, `/services/*`) were changed, removed, or had their hrefs altered — all seven `setupSteps` cards, the entity-type links, and the "Complementary Services" grid are untouched.

## Search Intent Assessment
**Unchanged.** The query set is squarely top-of-funnel informational-with-commercial-undertone ("how do I set up a business in India" / "what does it cost" / "which entity type"), and the top-10 SERP is still dominated by the same category of competitor (company-registration advisory firms publishing comprehensive guides) as when this page was presumably built. AU Corporate's hub-plus-lead-form model and pillar/cluster architecture still match that intent — the problem diagnosed here is thinness and one real factual error, not a structural mismatch. A full rewrite is **not** warranted; see below for why a full rewrite was considered and rejected.

### Why a full rewrite was considered, and rejected
The single biggest structural difference between this page and the top-ranking competitors is architecture: competitors put cost, documents, entity comparison, FDI routes, and step-by-step process all on one page; AU Corporate spreads that across a hub plus five/seven spoke pages. It's tempting to read "position 83" as evidence the spoke model itself has failed against comprehensive single-page competitors. I did not act on that reading, for two reasons: (1) the spoke pages (`company-formation`, `fdi-channels`, `timeline-resources`) are individually well-built, fact-checked, and specifically designed to carry that depth — collapsing them into the hub would duplicate content across the site and risk cannibalization the existing `topics.csv` notes have been careful to avoid; (2) the targeted fixes above (cost snapshot + cost/document FAQs + the insurance fact fix + freshness signal) directly close the gaps found in the SERP/GSC comparison without that risk. If position doesn't meaningfully improve over the next 4-6 weeks despite these changes, that would be the point to revisit whether the hub needs a genuinely deeper single-page treatment — flagging this as a real possibility, not dismissing it, but not acting on it pre-emptively without more evidence than one audit cycle provides.

## Not Changed (and why)
- **Seven-step framework, entity snapshot cards, "Why Choose AU Corporate" section, CTA, Related Resources grid** — all still accurate and on-strategy; no SERP or GSC evidence suggested a problem with these sections specifically.
- **Defence FDI figures** — verified current, no notified change as of this refresh (government is reportedly considering further liberalisation but hasn't acted).
- **Did not add a Rupee-figure breakdown table directly on the hub** (mirroring `timeline-resources`' six-line cost table) — that would duplicate verified content already living on a dedicated page; a summary figure + link matches the existing pillar/cluster pattern instead.
- **Did not touch any href/Link target** — cluster internal-linking integrity preserved per the task's explicit guardrail.
- **Did not change `app/sitemap.ts`** — per instructions, not touched; flagged below for confirmation instead.

## Sitemap `lastModified` — flag for confirmation
Content changed materially enough to justify updating `/india-business-setup`'s `lastModified` in `app/sitemap.ts` (currently `2026-09-11`) to today's date, **2026-09-23** — this includes a genuine regulatory correction (insurance FDI status), not just cosmetic changes. Per instructions, I have **not** made this change myself; recommend updating it once you confirm.
