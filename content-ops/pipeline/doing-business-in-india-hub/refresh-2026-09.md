# Refresh: Doing Business in India (hub) — 2026-09

## Trigger
Scheduled review with actual findings: a site-wide word-count audit (Playwright measurement of rendered body text on the live production build) found `/doing-business-in-india` carries only ~375 words of visible content — thin for a hub page meant to establish topical authority before funneling to its five spoke pages (why-india, entry-process, pre-incorporation, incorporation, post-incorporation). No prior `content-ops/pipeline/` history exists for this page (confirmed — no matching directory before this refresh), so this is a first refresh, not a repeat pass.

## Current Page vs. Current SERP
**Limitation, stated plainly:** live SERP research could not be completed this session. Every `WebSearch` call returned "unavailable," and `WebFetch` was blocked by the network egress proxy for every external domain attempted (india-briefing.com, investindia.gov.in, en.wikipedia.org). No live competitor pillar pages, PAA questions, or current SERP features could be pulled. Rather than fabricate SERP findings, this refresh proceeded on:
- General, well-established knowledge of what a strong pillar/hub page needs (orientation prose explaining the shape of the topic, a wayfinding mechanism to the right sub-page, and a short FAQ layer distinct from spoke-level FAQs) — competitor pillar pages on comparable "doing business in [country]" topics typically run 800–1,500+ words of overview content, which is the benchmark cited in the task brief.
- The site's own existing, already-published, already-verified content (see below) — no new unverified facts or regulatory claims were introduced.
This gap should be revisited with live SERP tooling once available; flagging it explicitly rather than presenting invented competitor findings as real.

## Current Page vs. Search Console Data
Pulled from `content-ops/performance/2026-08-sitewide.md` (28-day window, 2026-07-28 to 2026-08-25):
- `/doing-business-in-india`: 3 impressions, 0 clicks, avg. position declined 5.2 → 35.3 vs. the prior 28-day window.
- That August audit explicitly attributes this page's decline to a **site-wide technical pattern**, not a content-quality problem: "Nearly every page that had an established position... degraded by 10-40+ positions in the current window," alongside a canonical-tag bug on unrelated templates and a batch of new pages appearing with weak starting positions — all consistent with a site relaunch/template change around late July 2026. The audit's own recommendation for this page was explicitly to **hold on content refresh until the site-wide technical cause is fixed**, sequenced as Medium priority.
- **This refresh is not a response to that GSC decline** — per the guardrail against refreshing on ranking movement alone, and in line with the audit's own recommendation, the technical/ranking issue should be handled separately by engineering. This refresh's actual trigger is the independent word-count/thin-content finding described above, which is a legitimate "scheduled review with actual findings," not noise.
- With only 3 impressions and 0 clicks in the window, there isn't enough query-level volume on this specific URL to draw content-gap conclusions from GSC data alone.

## New Authoritative Information Found
None sought or needed. This page makes no regulatory, rate, form, or deadline claims of its own (that content lives on the spoke pages and on `/india-business-setup/*`). No underlying regulation, rate, form, or threshold required verification for this specific edit. All facts reused in the new FAQ content (document-authentication pacing on incorporation timing, the incorporation-timing mistakes pattern) were pulled verbatim in substance from this site's own already-published, already-verified pages (`why-india`'s FAQ and `incorporation`'s timing-mistakes section) — no new claims were introduced.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| New "What 'Doing Business in India' Actually Involves" section (2-paragraph overview, ~200 words) inserted after Quick Stats, before Cluster Navigation | Add | Genuine orientation content explaining the shape of the strategic decision journey (assess → decide entry route → plan structure → incorporate → govern post-incorporation) without duplicating any spoke page's depth. Reinforces the existing hero/intro framing that already differentiates this hub from `/india-business-setup` rather than introducing a new angle. |
| New "Which Stage Are You In?" diagnostic section (5 self-identification cards, each a direct `Link` to the matching spoke page) | Add | A wayfinding mechanism distinct from the fuller cluster cards below it — lets a reader self-select by situation ("we're already incorporated," "we're weighing subsidiary vs. EOR," etc.) rather than by an abstract stage number. This is the piece most directly requested by the task: helping readers find which of the five spoke pages answers their specific question. Also adds 5 additional contextual internal links into the cluster, reinforcing topical relevance for each spoke. |
| New FAQ section (5 Q&As) + `FAQPage` JSON-LD schema, inserted before the closing CTA | Add | Hub-level, meta/navigational questions (difference vs. `/india-business-setup`, whether stages must be read in order, realistic journey timeline, the most common strategic mistake, relevance to an already-incorporated company) — deliberately distinct from `why-india`'s existing FAQ (which covers entity-type, timeline-to-incorporate, property ownership, resident-director requirements) to avoid duplicate on-page content and keyword cannibalization between the hub and its own spoke. Matches the existing FAQPage schema pattern already used on `why-india`. |
| Everything else (hero, Quick Stats tiles, five cluster cards, closing CTA) | Not changed | Already working, already on-brand, and not implicated by the thin-content finding — a full rewrite was explicitly not warranted (see Search Intent Assessment). |

No content was removed. No existing figures in `quickStats` (1.4B+ population, $3.7T+ GDP, Top 5 global economy, 100K+ registered startups) were altered — they remain consistent with figures used elsewhere on the site (e.g., `why-india`'s GDP/growth framing).

## Search Intent Assessment
Unchanged. The hub's intent — strategic orientation and decision-journey navigation, distinct from `/india-business-setup`'s procedural/mechanical intent — was already correctly established in the existing hero copy and cross-link ("complete company registration guide"). This refresh reinforces and elaborates that framing rather than shifting it; a full rewrite was not justified because the existing structure (hero → stats → cluster nav → CTA) was already correctly shaped for the intent, it was simply too thin to carry it. The new sections were placed to extend that shape (orientation prose → wayfinding → the existing five-card cluster → new FAQ → existing CTA) rather than to restructure it.

## Not Changed (and why)
- **Hero section** — already correctly frames the strategic-vs-procedural distinction from `/india-business-setup` and already cross-links to the company-formation guide; the task brief explicitly said to build on this framing, not replace it.
- **Quick Stats tiles / `ClickableReveal` usage** — already using the correct component and figures; no new statistics were invented or added anywhere on the page, per the guardrail against unverifiable numbers.
- **Cluster Navigation (five cards)** — this is "the actual point of this hub page" per its own code comment; left fully intact, only supplemented with the new diagnostic wayfinding section above it.
- **Closing CTA** — no reason to change; still the correct final conversion point after the new FAQ section.
- **`app/sitemap.ts`** — intentionally not touched per explicit instruction; `lastModified` bump left for the requesting agent/user to apply after reviewing this diff.

## Word Count
- Before: ~375 words (per the triggering Playwright audit).
- After: approximately 935–985 words of visible body text (rough estimate — new content added: ~195-word overview section, ~115 words across the five diagnostic cards, ~330 words across five FAQ Q&As, plus existing ~375 words unchanged). This lands within the 800–1,500-word benchmark cited for comparable pillar/overview pages.

## Files Changed
- `/home/user/Aucorporate/app/doing-business-in-india/page.tsx` — content added (see Changes Made above); no other files edited.
