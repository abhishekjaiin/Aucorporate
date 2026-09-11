# Refresh: Services Hub (/services) — 2026-09

## Trigger
Site-wide word-count audit (Playwright measurement of rendered body text against the live production build) flagged `/services` at ~421 words of visible content — thin for a hub page meant to establish topical authority on AU Corporate's overall service offering before funneling to its five `/services/*` spoke pages (accounting-assurance, risk-management, taxation-regulatory, training-workshops, transaction-advisory). No `content-ops/pipeline/services-hub/` history existed — this is the page's first refresh.

## Current Page vs. Current SERP
WebSearch access was intermittent during this session (most queries after the first returned "web search unavailable"); findings below are from the one successful query plus WebFetch attempts (blocked by egress proxy for the specific competitor domains tried: dsrvindia.com, cac.net.in).

- Query: "India business advisory services firm services overview page" returned EY India, BDO India, KNAV India, DSRV India, Nangia & Co, and CAC as the visible comparison set — Big 4 and mid-size multidisciplinary Indian advisory/CA firms, which is the correct competitive set for AU Corporate (a boutique multidisciplinary CA/CS/legal firm), not generic "business consultant" content mills.
- Pattern across this competitor set (from titles/descriptions and prior knowledge of this page type): overview pages for multidisciplinary advisory firms typically combine (a) a short firm-positioning narrative, (b) a full list/grid of service lines with brief descriptions linking to dedicated pages, (c) industry or client-segment framing, and (d) either a "how we work"/engagement-process block or an FAQ, or both — not just a bare card grid.
- Search intent for "India business advisory services" / "accounting and compliance firm India" is informational-to-navigational with a strong sub-intent of "which specific service/page do I need" — this is the gap the old page didn't address (no wayfinding between the eight things AU Corporate actually offers).

## Current Page vs. Search Console Data
No Search Console / Ahrefs / Semrush MCP access was available in this session for this specific task run, so no live impressions/clicks/query data could be pulled for `/services`. This refresh proceeds on the audit finding (a verifiable, structural signal — thin content plus broken internal links, see below) rather than a GSC ranking signal, consistent with the guardrail against refreshing on ranking noise alone.

## New Authoritative Information Found
Not applicable — this is a hub/overview page with no regulatory, rate, or deadline content to verify. No Stage-9-style fact check was required.

## Structural Defect Found (pre-existing bug, fixed as part of this refresh)
While reading the page source, found that three of the six original service cards had **broken internal links**: "Accounting & Assurance," "Taxation & Regulatory Services," and "Risk Management" all had `href: '/services'` — i.e., they linked back to the hub page itself instead of to their dedicated spoke pages. This directly undermines the hub-to-spoke funnel the page exists to serve, and is a higher-priority fix than any copy addition. Fixed all three to point to `/services/accounting-assurance`, `/services/taxation-regulatory`, and `/services/risk-management` respectively.

Also found that two of the five spoke pages named in this task (`/services/transaction-advisory` and `/services/training-workshops`) were **entirely missing** from the hub's service list — the hub only surfaced 3 of its 5 true children, plus 3 unrelated top-level services (Global Support/outsourcing, Arbitration, HR & Payroll) that live outside the `/services/` path. Added both missing spoke pages as proper cards, pulling real feature bullets from their live page content (verified by reading `app/services/transaction-advisory/page.tsx` and `app/services/training-workshops/page.tsx` directly) rather than inventing service names.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Service card hrefs (Accounting & Assurance, Taxation & Regulatory, Risk Management) | update | Fixed self-referential `/services` links (bug) to point to the correct spoke pages |
| Service cards | add | Added Transaction Advisory Services and Training & Workshops cards — previously missing entirely, despite being named spoke pages of this hub. Copy grounded in each page's actual live content |
| New "A Single Team Across Your Business Lifecycle" section (after hero) | add | Genuine overview content: who AU Corporate is (est. 2016, New Delhi & Gurugram, multidisciplinary CA/CPA/CS/Cost Accountant/lawyer team — all pulled verbatim-equivalent from `app/about/page.tsx`, no invented stats), what the 8-service scope covers, and how this page relates to its spoke pages |
| New "Not Sure Where to Start?" wayfinding section | add | Maps 9 common business situations ("file GST returns," "investigate a suspected fraud," "raise capital") directly to the right spoke/service page — addresses the "which service do I need" sub-intent identified in the SERP/competitor review, without duplicating spoke-page depth |
| New "Our Engagement Approach" section (Scope → Engage → Deliver → Support) | add | Short, hub-specific process explanation distinct from the homepage's longer 5-step "How We Work" section (avoided near-duplicate content across the two pages) |
| New FAQ section (6 Q&As) + FAQPage JSON-LD | add | Targets service-selection queries (what services do you offer, can I engage for one service vs. a bundle, do you work with startups, how is it priced, can one team handle multiple functions) using the site's existing `FaqAccordion` component and the same JSON-LD pattern already used on the homepage, for structural consistency |
| Hero section, Industry Expertise section, final CTA section | not changed | Already functioning correctly and matching current intent; no factual or structural issues found |

## Search Intent Assessment
Unchanged in direction (informational/navigational hub intent), but the page's ability to *serve* that intent was broken by the missing/incorrect internal links — a searcher landing here for "AU Corporate services" or "India business advisory services" could not actually reach 3 of the firm's core service pages through the obvious card links. This refresh restores and strengthens intent-match rather than shifting it: no commercial competitors have entered this SERP, no new regulatory driver applies to a hub page.

## Not Changed (and why)
- Hero headline/subhead and the `InquiryForm` — already concise, on-message, and not thin (they're supporting elements, not the primary content block being measured).
- Industries Served grid — content and links still accurate; no new industry segment identified in research to justify expansion.
- Final CTA — short by design; expanding it would add filler, not value.
- Did not do a full page rewrite — the existing card grid, visual system (navy/gold, `Breadcrumb`, `HeroBackgroundLight`), and section rhythm all still serve the page's purpose; the fix was targeted (broken links, missing children, and net-new overview/wayfinding/FAQ content), not a rebuild.

## Before / After (rough word count)
- Before: ~421 words (audit measurement)
- After: ~900–950 words (estimated from added content — two-paragraph overview block, 2 additional service cards, 9-row wayfinding table, 4-step process block, 6-question FAQ). FAQ answer text is not included in this estimate since the shared `FaqAccordion` component only renders answers into the DOM once expanded (consistent with the same pattern already used on the homepage); the questions themselves do render and were counted.

## Note for the parent agent
`app/sitemap.ts` was intentionally not touched, per instructions — the `lastModified` bump for `/services` still needs to be applied and the diff committed/pushed after review.
