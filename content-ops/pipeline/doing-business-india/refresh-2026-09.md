# Refresh: Doing Business in India (blog post) — 2026-09

## Trigger
Scheduled thin-content remediation review. This page (`/blog/doing-business-india`) was ~747 words, had no prior refresh history, and Search Console shows **zero impressions and zero clicks** for it over the last 90 days (query "doing business in india" returns the separate `/doing-business-in-india` hub page at position ~83, not this post at all — this post is effectively unindexed for anything meaningful). That combination — thin content, no visibility, and a near-duplicate relationship with a much stronger hub page published/expanded this session — is a genuine trigger, not a rankings-noise trigger.

## Current Page vs. Current SERP
Searched "doing business in india 2026" and related terms. What ranks for this broad, highly competitive head term: India Briefing / Asia Briefing "Doing Business in India" annual publications, Chambers and Partners' Global Practice Guide, ETL Global's investor guide, and several agency explainer posts (husys, remotepeople, innov8) — all comprehensive, frequently-updated resource hubs, not blog posts. This site cannot credibly out-comprehensive those with a ~750-word blog post, and doesn't need to: AU Corporate already has a purpose-built, much deeper hub at `/doing-business-in-india` (five-stage cluster, FAQ schema, diagnostics) that was substantially expanded earlier this session and is the appropriate page to compete on breadth.

The old blog post duplicated that hub's territory almost exactly — entity structure, regulatory framework, tax landscape, compliance, capital flow — at a fraction of the depth, with zero unique value and zero search visibility. That's a intent/positioning problem, not just a thinness problem.

## Current Page vs. Search Console Data
`/blog/doing-business-india`: 0 impressions, 0 clicks, no ranking position in the last 90 days for any query in the GSC export.
`/doing-business-in-india` (the hub): 3 impressions, position ~83 for "doing business in india" — also weak, but that page has since been substantially expanded (outside this task's scope) and is the intended ranking asset for the head term.
Conclusion: there is no query cannibalization risk in differentiating this post from the hub — neither page currently owns any real visibility, so the safer long-term structure is two pages with genuinely distinct jobs rather than two pages competing for the identical angle.

## New Authoritative Information Found
All verified via multiple independent sources (WebSearch), not fabricated:
- **GST 2.0** — effective 22 September 2025. Simplified to primarily 5%/18% slabs plus a 40% slab for luxury/sin goods; Compensation Cess discontinued and merged into headline rates for previously cess-bearing items. (taxguru.in, cygnet.one, kotakmf.com — consistent reporting of the CBIC-notified change)
- **Four Labour Codes** — effective 21 November 2025 (Code on Wages, Industrial Relations Code, Code on Social Security, Occupational Safety Health & Working Conditions Code), replacing 29 prior labour statutes. Central/State rules not yet fully notified at effective date; full rule-making expected by ~1 April 2026. (KPMG Flash Alert, EY alert, PIB press release, DLA Piper GENIE, Herbert Smith Freehills Kramer — cross-confirmed)
- **FDI FY2025-26** — Gross FDI ~US$94.53bn per RBI data (+17% YoY); DPIIT's narrower measure US$58.85bn (+18% YoY); equity inflows ~US$62.28bn vs ~US$50.99bn prior year; **net FDI only ~US$7.65bn** per RBI data — a materially different, less-reported figure. (india-briefing.com, business-standard.com, vajiramandravi.com)
- **GDP growth** — NSO first advance estimate for FY2025-26 ~7.4%; RBI revised its own forecast upward over the year from 6.8% to 7.3%; Q2 FY2025-26 actual print 8.2%. (business-standard.com, tradingeconomics.com)
- **World Bank ranking status** — Doing Business report discontinued September 2021 after a data-integrity/ethics investigation; India's last published rank (63rd) is from the 2020 edition based on 2019 data. Replacement framework "B-READY" launched 2024; India is scheduled for assessment with results due 2026 — meaning there is currently no live, current official global ranking for India. (multiple sources including PIB, tribuneindia.com, siteselection.com, insightsonindia.com) This is the single highest-value finding: a lot of "doing business in India" content still quotes the stale 63rd-place figure as if current.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Title / H1 / metadata | Rewrite | Old title ("Key Considerations") signaled generic evergreen advice identical to the hub. New title ("What's Actually Changed") stakes out the distinct "recent developments" angle and matches the site's established 2026-dated blog post pattern (e.g. the Safe Harbour and BIS-exemption posts). |
| `metadata` export | Add | Post had no `<title>`/description metadata or canonical tag at all — added, matching convention used by other refreshed 2026 blog posts. |
| Entity structure / regulatory framework / tax landscape / compliance / capital flow sections | Remove | These five sections duplicated the hub page's territory almost exactly, at far less depth, and were the primary source of the "why does this exist separately" problem. Removed entirely rather than trimmed, since they added no angle the hub doesn't already cover better. |
| Intro | Rewrite | Reframed around the "most India content is frozen in time" hook and previewed the four concrete 2026 developments covered below. |
| Cross-link callout box | Add | Prominent, early, boxed link to `/doing-business-in-india` as "the complete playbook," per the site's established blog→hub cross-link pattern (mirrors the BIS-exemption post's link to `/india-entry-for-japan-companies`). |
| "The Ranking Everyone Quotes Is Six Years Out of Date" | Add | New section — corrects the stale World Bank 63rd-rank figure still circulating in "doing business in India" content, explains B-READY. Highest-value new content on the page. |
| "GST 2.0" section | Add | New section covering the Sept 2025 GST restructuring — not previously on the page at all. |
| "Four Labour Codes" section | Add | New section covering the Nov 2025 labour law overhaul — not previously on the page at all. |
| "A Record FDI Year" section | Add | New section with FY2025-26 gross vs. net FDI figures — the old page had no FDI-specific data at all. |
| "Growth Backdrop" section | Add | New section with current GDP growth figures (NSO/RBI), replacing the old page's vague "rapidly growing economy" framing with sourced current numbers. |
| "What This Means If You're Evaluating India Right Now" | Add | Practical synthesis section, with links back into the hub's specific stage pages (why-india, pre-incorporation) rather than re-explaining them. |
| "How AU Corporate Can Support" | Rewrite (shortened) | Reframed around tracking regulatory change specifically, rather than generic service-list copy duplicated from the hub. |
| FAQ section (FaqAccordion) | Add | 5 FAQs directly addressing the new content (stale ranking, GST 2.0, labour codes, FDI gap, "where's the full guide") — matches the FAQ pattern used on the hub page and gives PAA-style coverage the old page lacked entirely. |
| RelatedResources links | Update | Replaced with hub page (prioritized), india-business-setup, FDI green/brown channel post, and the Safe Harbour 2026 post — all genuinely related and internally consistent with the new angle. |
| Conclusion / Connect With Us | Rewrite / Keep structure | Conclusion rewritten to reflect the new angle; "Connect With Us" contact block kept essentially as-is (still functions correctly). |
| `app/blog/page.tsx` listing card | Update | Updated title/desc on the blog index card so it matches the refreshed post instead of the old generic copy (date left unchanged as original publish date). |

## Search Intent Assessment
**Shifted.** The old page tried to serve the same broad informational intent as the hub page — "explain the basics of doing business in India" — which is redundant now that the hub does this exhaustively. The refreshed page serves a narrower, genuinely distinct intent: "what's new / what's changed in doing business in India recently," aimed at readers who already have baseline context (or will get it from the hub) and want the current regulatory/economic picture. This also aligns with the pattern the site has been using successfully for its other 2026-dated blog posts (Safe Harbour Rules, BIS Exemption) — dated, developments-driven posts that link out to evergreen pillar/hub pages for depth, rather than duplicating them.

## Not Changed (and why)
- **Slug / URL** (`/blog/doing-business-india`) — left unchanged; no reason to break the existing URL given zero current backlinks/rankings tied to old content, and `app/sitemap.ts` was intentionally not touched per task guardrails (see note below).
- **Hero image** — kept the same Unsplash image; still relevant and appropriately licensed/hotlinked in the same way as other posts on the site.
- **"Connect With Us" contact block** — kept structurally identical (still correct and functional), only the lead-in sentence was adjusted.
- **`app/doing-business-in-india/page.tsx` (the hub)** — not touched at all, per task scope; this refresh was designed specifically to defer to it rather than modify it.
- **`app/sitemap.ts`** — explicitly out of scope per task instructions; not touched, even though the page content changed. (Flagging this for the calling agent: `lastModified` for `/blog/doing-business-india` should be updated to 2026-09-15 in a follow-up pass, per the normal refresh process, since this task's guardrails specifically excluded sitemap edits.)

## Word Count
- **Before:** ~747 words
- **After:** ~1,900 words total page content (~1,350 words of always-visible prose/sections plus ~570 words inside the collapsed FAQ accordion, which is a client-rendered component — same pattern already used on the hub page and elsewhere on the site, so not a regression introduced by this refresh, just worth noting for future SEO/crawlability review of that shared component).
