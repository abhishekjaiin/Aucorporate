# Refresh: India Business Setup (Hub) — 2026-09

## Trigger
Scheduled review triggered by a site-wide word-count audit (Playwright measurement of rendered body text against the live production build), which flagged `/india-business-setup` at ~369 words — thin for a hub page expected to establish topical authority on "India business setup" before funneling to five spoke pages (company-formation, fdi-channels, regulatory-compliance, banking-taxation, timeline-resources). No prior `content-ops/pipeline/` history existed for this URL, so this is a first refresh, not a response to a ranking-movement signal.

## Current Page vs. Current SERP
Live web research tools (WebSearch and WebFetch) were unavailable for the duration of this session — WebSearch returned "unavailable" on repeated attempts across several queries, and WebFetch was blocked by the network egress proxy for every domain tried (investindia.gov.in, india-briefing.com, en.wikipedia.org). This is a genuine limitation of this refresh and should be flagged for a follow-up pass once live research access is restored, ideally before the next scheduled review.

In lieu of a fresh SERP pull, the gap analysis was built from (a) established knowledge of what strong "India business setup" / "how to set up a business in India" pillar pages typically cover — an entity-type overview, an automatic-vs-approval-route framing, a timeline-at-a-glance, and a short FAQ — and (b) a close read of AU Corporate's own five spoke pages, which already contain verified, dated, sourced detail (SPICe+ process, Companies Act s149(3), FEMA/RBI filings, DPDP Act phase-in, Labour Codes effective date) that the hub was not surfacing or routing to clearly. The prior hub page was essentially a link list (a 7-item grid plus a benefits grid) with almost no orientation prose — exactly the gap a pillar page needs to close, independent of the exact current SERP ranking positions.

## Current Page vs. Search Console Data
No Search Console / performance file for this URL could be located under `content-ops/performance/` (checked several plausible filenames per the documented `<YYYY-MM>-<scope>.md` convention; directory listing tools were not available in this session to enumerate the folder directly). No GSC-specific signal is reflected in this refresh beyond the word-count audit finding itself — this should be reconciled against the next `content-ops/performance/` entry once produced.

## New Authoritative Information Found
None sought or applied in this refresh — this is a structural/depth refresh, not a fact-driven one. All regulatory figures added to the hub (Automatic Route 4-6 weeks, Government Route 8-12 weeks, overall 8-12 weeks end-to-end, Companies Act 2013 s149(3) 182-day resident-director rule) were pulled verbatim from the already-verified, already-dated content on the company-formation, fdi-channels and timeline-resources spoke pages rather than re-researched, specifically to avoid introducing a number that contradicts what those pages already state.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| New "How Setting Up a Business in India Actually Works" section (orientation prose, right after the hero) | add | The page had zero prose explaining the shape of the topic — just a heading and a link grid. Added ~2 paragraphs framing "business setup" as four sequential decisions (entity, route, incorporation, compliance), directly addressing why a reader would need 5 separate spoke pages rather than one. |
| New "Entity Options at a Glance" (6-card summary: Pvt Ltd/WOS, LLP, Branch, Liaison, Project Office, JV) | add | No entity-type overview existed on the hub at all, yet this is one of the most common first questions for this topic. Deliberately condensed to one-line summaries (vs. the 8-card deep treatment on company-formation) and links out to the full comparison rather than duplicating it, per the "summarize and route, don't compete" instruction. |
| New Automatic Route / Government Route comparison boxes | add | Gives the reader the single most load-bearing decision (which route applies) at the hub level, using the same 4-6 week / 8-12 week figures already established on company-formation and fdi-channels — no new numbers introduced. |
| New "Setup Timeline at a Glance" section (5-stage week-by-week snapshot) | add | The hub previously had no timeline content of its own; a reader had to click into Timeline & Resources for any sense of pacing. Added a condensed version of that page's own 5-stage breakdown (same stage labels/ranges) with a link to the full budget breakdown, rather than restating it in different terms. |
| New 6-question FAQ (with FAQPage schema) | add | Targets orientation/routing questions genuinely distinct from company-formation's existing 8-question FAQ (which covers registration mechanics, capital, GST timing, repatriation, DTAA): "where do I start," "can I own 100%," "do I need to travel to India," "which route applies to me," "how long end to end," "is a resident director required." No overlap in question wording with the company-formation FAQ. |
| Section background colors (Seven-Step Framework, Timeline, Related Resources) | update | Adjusted `bg-white`/`bg-gray-50` alternation so the newly inserted sections don't create two consecutive same-color blocks; purely visual, no content change. |
| `lastModified` in `app/sitemap.ts` | — | Not touched, per explicit instruction — left for the requester to update after reviewing the diff. |

## Search Intent Assessment
Unchanged. This remains a purely informational, orientation-stage query — the reader is deciding how to think about "setting up in India" and which of AU Corporate's deeper pages answers their specific question next. No commercial/transactional competitors or SERP features were confirmed this session (see research-tool limitation above), so this assessment is carried over from the existing page's framing rather than freshly verified against today's SERP. Flagging this as the one open item for the next refresh pass.

## Not Changed (and why)
- **Hero section** — left as-is. It already states the four-stage shape of the journey in one sentence; the new orientation section immediately below expands on it rather than replacing it, avoiding a duplicate "what is this page about" moment at the top.
- **Seven-Step Framework grid** — left as-is (content and links unchanged, only the section background color was adjusted for visual alternation). It already functions correctly as the hub's primary navigation into the spoke pages and the "Doing Business in India" entry pages; no evidence it needs restructuring.
- **Key Benefits ("Why Choose AU Corporate") grid** — left as-is. This is bottom-funnel trust content, not topical/orientation content, and isn't part of the thin-content gap.
- **Related Resources and CTA sections** — left as-is apart from the background-color adjustment noted above.
- **No full page rewrite** — the existing structure (hero → step framework → benefits → related → CTA) was sound; the gap was purely missing orientation depth, not a wrong structure or wrong intent. A full rewrite was not justified and was not done, per the guardrail against rewriting when a targeted expansion suffices.

## Before / After
- Before: ~369 words (per the site-wide Playwright word-count audit).
- After: roughly 950-1,050 words of always-rendered body text (orientation prose + entity snapshot cards + route comparison boxes + timeline snapshot + FAQ question text), plus a further ~450-500 words of FAQ answer content that exists in the DOM/JSON-LD but is only visually revealed on accordion click (consistent with the `FaqAccordion` pattern already used on `company-formation`, `regulatory-compliance` and other spoke pages) — so a crawl method that also captures collapsed-accordion text would put the page closer to 1,400-1,500 words.

## Open Follow-Up for Next Review
- Live SERP research (WebSearch/WebFetch) was unavailable this session — re-run Stage-1-style SERP research for "India business setup" and "how to set up a business in India" once tool access is restored, to confirm or revise the intent/competitor assessment above.
- No `content-ops/performance/` entry for this URL could be located — confirm the correct filename/scope and reconcile actual Search Console query/position data against this refresh once available.
