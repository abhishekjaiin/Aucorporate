# Refresh: Cost & Timeline — Incorporating a Company in India from the UK — 2026-09

## Trigger
Scheduled review triggered by a site-wide rendered-word-count audit (Playwright against the live production build), which flagged this page at ~505 words of visible body content — thin for a page targeting genuinely commercial long-tail intent ("cost to set up a company in India" / "India company registration timeline," UK-specific angle). Search Console data (below) confirms the page has essentially never accumulated meaningful visibility, consistent with a thin-content diagnosis rather than a ranking-decline one. No prior `content-ops/pipeline/` history exists for this page — this is a first refresh.

## Current Page vs. Current SERP
Searched "cost to register a company in India from UK" and "India company registration timeline foreign subsidiary UK apostille." Findings:
- Ranking competitor guides (RegisterKaro, Commenda, IncorpX, Stratrich, IndiaFilings, KRP Associates, Beacon Filing) all publish: (a) a specific cost range in INR or GBP, (b) a phase-by-phase timeline broken into weeks, (c) explicit treatment of the UK apostille/notarisation step with cost and turnaround, (d) the resident-director requirement, and (e) an FAQ block answering the exact "how much" / "how long" questions directly.
- The old page had none of the above except a single vague paragraph naming apostille as a pacing factor, with no figures, no phase breakdown, and no FAQ — meaning it addressed the topic's *existence* but not the specific questions searchers and PAA boxes actually ask.
- Competitor content converges on UK-specific apostille economics (FCDO fee schedule, solicitor/notary certification requirement, ~25-working-day standard postal turnaround) as the detail UK-specific guides use to differentiate from generic "how to register a company in India" content. This was the clearest content gap given the page's UK-specific framing and URL.
- Search intent read as still primarily informational-commercial (a UK founder wants a realistic figure and timeline before an inquiry call), not transactional — no evidence of a shift toward comparison-shopping or tool-based intent (e.g. no "calculator" or "instant quote" SERP features observed).

## Current Page vs. Search Console Data
Pulled via the connected GSC property (`sc-domain:theaucorp.com`), trailing 90 days (13 Jun–11 Sep 2026):
- Page-level: 1 impression, 0 clicks, average position 7 — the lowest visibility of any indexed page in the `/india-entry-for-uk-companies/` cluster bar one other page. For comparison, the sibling `uk-subsidiary-vs-branch-office-india` page logged 77 impressions in the same window.
- Query-level breakdown for this URL returned no distinct queries (the single impression was below GSC's query-reporting threshold), so there's no existing query to protect or preserve — the page has no incumbent ranking position that a heavier rewrite risks losing.
- Conclusion: this is a visibility-building refresh, not a risk-managed edit of a page with existing traffic. That supports the significant expansion the task called for.

## New Authoritative Information Found
- SPICe+ filing fee exemption for authorised capital up to ₹15 lakh, under the Companies (Registration Offices and Fees) Rules — already used consistently on `/india-business-setup/timeline-resources`; reused here verbatim for consistency, not new but reconfirmed.
- FC-GPR filing deadline of 30 days from share allotment — already established sitewide on the "how to incorporate" UK page; reused for consistency.
- FCDO apostille fee schedule: standard postal service priced per document with a published turnaround of up to ~25 working days; faster next-day (registered business) and e-Apostille services exist at different price points. Cross-checked against multiple current UK apostille-service providers' published 2026 pricing pages (direct fetch of gov.uk was blocked by network egress rules in this environment, so the page frames the figure as an approximate range — "roughly £40-£90+ per document" — rather than citing a single exact FCDO fee, and attributes the turnaround to "the FCDO's published standard postal turnaround" without over-claiming precision). This is presented as a UK-side cost distinct from the Indian advisory/professional fee, consistent with the page's existing "why we don't publish a flat fee" positioning.
- 182-day resident director requirement — already established sitewide (used verbatim on `/india-business-setup/timeline-resources`); reused for consistency, not new.
- No change found to the FDI Automatic Route vs Government Approval Route timeline framing (4-6 weeks / 8-12 weeks) already used elsewhere on the site — reused rather than altered.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Intro paragraph | Update | Added one sentence naming UK apostille as the dominant pacing variable, setting up the new apostille section without disrupting the existing framing. |
| Quick-answer stat strip (4 stat cards) | Add | New — gives an immediate, scannable answer to "how long" / "how much" at the top of the page, matching the pattern already established on `/india-business-setup/timeline-resources`; reuses that page's figures for consistency rather than inventing new ones. |
| "What Actually Drives Cost" (4 cards) | Unchanged | Already accurate and on-topic; no reason to touch a working section. |
| "What the Cost Components Typically Look Like" (6 component cards + note) | Add | Directly closes the biggest competitive gap — every ranking competitor gives concrete figures, this page gave none. Reuses the exact granular ranges already published and fact-checked on `/india-business-setup/timeline-resources` (₹3,000-5,000 registration through ₹20,000-50,000 professional fees) rather than inventing new numbers, framed explicitly as "components, not a quote" to preserve the no-flat-fee positioning. Links to the fuller breakdown page instead of duplicating its full content. |
| "Typical Timeline Shape" → "Timeline: Phase by Phase" | Rewrite (expand) | The single paragraph became a 5-phase week-by-week breakdown adapted for the UK entry path specifically (DSC/DIN + apostille start in Week 1-2 through FC-GPR and operational readiness by Week 8-12), matching the depth of the phase table on `/india-business-setup/timeline-resources` and of competitor guides, while keeping the original paragraph's core claim (apostille outpaces the Indian filing) as the section's lead-in. |
| "The UK-Specific Step: Notarisation & FCDO Apostille" | Add | New section — closes the specific competitive gap where UK-focused competitor guides differentiate themselves: the two-stage UK notary-then-FCDO process, approximate cost, and turnaround, framed as the reason to start it early. This is the most UK-specific, non-generic content addition on the page. |
| "Why we don't publish a flat fee" callout + CTA | Unchanged | Preserved exactly per instructions — this is the page's core positioning and remains correct; no total price figure was added anywhere that would contradict it. |
| FAQ section (7 Q&As) + FAQPage JSON-LD | Add | New — directly targets the PAA-style questions surfaced in SERP research ("how much," "how long," "what is apostille," "do I need a resident director," "is the filing fee really free," "subsidiary vs branch cost") that the old page didn't answer explicitly anywhere, and adds FAQPage structured data for SERP feature eligibility, matching the pattern already used on `/india-business-setup/timeline-resources`. |
| Related Reading | Update | Added a link to `/india-business-setup/timeline-resources` (the fuller cost/timeline resource now referenced twice in-page) alongside the two existing UK-cluster links. |

## Search Intent Assessment
Unchanged. The query cluster remains informational-commercial — a UK founder researching realistic cost and timeline before reaching out — not a transactional or comparison-tool intent. No new commercial competitors (e.g. instant-quote SaaS tools) displaced the existing informational-guide competitive set since this page was last written. The expansion adds depth and specificity within the same intent rather than repositioning the page.

## Not Changed (and why)
- No flat total price was added anywhere on the page — the existing "why we don't publish a flat fee" section and CTA are preserved verbatim, and all new cost figures are explicitly framed as component ranges or UK-side third-party costs (apostille), not an India-setup quote.
- The "What Actually Drives Cost" 4-card section was left as-is — it's accurate, on-topic, and already recently converted to `ClickableInfoCard`; rewriting it would have been change for its own sake.
- Did not add a full ongoing-annual-compliance cost breakdown (audit, RoC, GST, FLA) on this page — that content already exists in full on `/india-business-setup/timeline-resources`, which this page now links to twice; duplicating it here would bloat the page without adding anything a link doesn't already provide.
- Did not alter `app/sitemap.ts` — left for the requesting agent to update `lastModified` after reviewing the diff, per instructions.

## Summary for reviewer
- **Added:** quick-answer stat strip, a 6-item cost-component grid (reusing figures from `timeline-resources`), an expanded 5-phase timeline table, a new UK-specific apostille/notarisation explainer section, a 7-question FAQ with FAQPage schema, and one new related-reading link.
- **Removed:** nothing — the original intro, the 4 "what drives cost" cards, and the "why we don't publish a flat fee" callout/CTA are all preserved.
- **Rewritten:** only the "Typical Timeline Shape" single paragraph was expanded into the phase-by-phase breakdown; its original claim was kept as the section's opening line rather than discarded.
- **Rough word count:** ~505 words (before, per the triggering audit) → approximately 1,650-1,750 words of visible body content (after), driven mainly by the FAQ, the cost-component grid, and the phase-by-phase timeline.
- **File edited:** `app/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk/page.tsx`
- **Not touched, by instruction:** `app/sitemap.ts` (lastModified bump left to the requesting agent), no git commands run, no packages installed, no build run.
