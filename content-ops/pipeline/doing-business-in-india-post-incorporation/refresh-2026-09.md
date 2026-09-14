# Refresh: Life After Incorporation (Post-Incorporation) — 2026-09

## Trigger
Scheduled review triggered by a site-wide word-count audit: the page carried only ~616 words of visible content ("Life After Incorporation: Strategic Priorities as You Scale") against a topic — post-incorporation strategy for a scaling India subsidiary — where competitor content and real search intent go substantially deeper. This is a content-depth/coverage-gap trigger, not a ranking-volatility one.

## Current Page vs. Current SERP
Searches for "post-incorporation compliance strategy India subsidiary scaling," "life after incorporation India company second year mistakes governance," and related queries surface two content types:
1. **Mechanical compliance checklists** (Setindiabiz, Jordensky, Legal Window, CRSPL, Mondaq) — first board meeting within 30 days, auditor appointment (ADT-1), share certificates, FLA return, etc. AU Corporate already covers this mechanical layer on `/india-business-setup/company-formation` and `/india-business-setup/regulatory-compliance`, so duplicating it here would work against this page's stated job (strategic priorities, not mechanics).
2. **Governance/scale content** (KNM India's subsidiary governance guide, transfer pricing guides from Wisemonk/Manisha Anil Gupta/Dealplexus, repatriation guides from India Briefing/Ahlawat & Associates/CS At Work) — covering board composition thresholds, related-party transaction governance, transfer pricing applicability and thresholds, and profit repatriation routes (dividend/royalty/management fee/buyback). **This is the gap.** The live page mentioned transfer pricing and governance only in passing (one sentence each, inside the "second-year mistakes" cards) and did not cover repatriation strategy at all — despite "how do I get profits back to the parent" being one of the most consistently searched questions for this exact stage of the journey.

Search intent for this cluster of queries is informational but specific — searchers already have an incorporated entity and want concrete thresholds and named mechanisms (which crore threshold, which route, which section), not general reassurance that "compliance continues." Intent has not shifted toward commercial/transactional; it remains informational, so no restructuring toward a service-comparison format was warranted.

## Current Page vs. Search Console Data
GSC access for this property returned a 403 (insufficient permission on `https://theaucorp.com/` via the connected account) — no query/impression/click data could be pulled for this URL in this session. Given that the trigger here is a genuine content-depth gap identified independently (word-count audit + SERP comparison), the refresh proceeded on that basis per the guardrail allowing a scheduled review with actual findings, rather than waiting on GSC data that isn't currently accessible. This should be re-checked once GSC permissions are restored.

## New Authoritative Information Found
Verified against primary/well-corroborated secondary sources (Companies Act, 2013 and its rules; Income-tax Act transfer pricing provisions):
- **Company Secretary threshold**: Rule 8A, Companies (Appointment and Remuneration of Managerial Personnel) Rules — mandatory whole-time CS for a private company at ₹10 crore+ paid-up share capital.
- **Audit Committee / Independent Directors** (Sections 149, 177, Companies Act 2013): mandatory for listed companies and public companies crossing ₹10 crore paid-up capital, ₹100 crore turnover, or ₹50 crore borrowings/deposits — **not** automatically required for a private WOS below those thresholds, or unless it becomes a deemed public company (subsidiary of a public company). This is a materially useful clarification most competitor content glosses over, and directly serves this page's "strategic, not mechanical" mandate.
- **Secretarial Audit** (Section 204 + Rule 9): public companies at ₹50 crore paid-up capital / ₹250 crore turnover, or **any** company (public or private) with bank/PFI borrowings of ₹100 crore+.
- **Transfer pricing**: international related-party transactions trigger Form 3CEB filing and arm's-length documentation once they cross roughly ₹1 crore (₹10 million) annually — no exemption for newly incorporated entities; specified domestic transactions have a separate ₹20 crore (₹200 million) threshold.
- **Repatriation routes**: dividend (DDT abolished 2020 — now taxed in the shareholder's hands, treaty-rate dependent), royalty/management fees (transfer-pricing sensitive, recurring), buyback/capital reduction (separate Companies Act process, for returning capital rather than profit).

No change was found to anything already stated on the page (FLA return, AOC-4/MGT-7, statutory audit) — those remain accurate and were left untouched.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Orientation paragraph (new, after hero) | Add | Short framing paragraph explaining the year-one-vs-ongoing shift and previewing the new sections; improves flow into the expanded page. |
| "Repatriation Strategy: Getting Profits Back to the Parent" (new section, 3 cards) | Add | Closes the single biggest content gap vs. SERP — dividend vs. royalty/fee vs. buyback, with the DDT-abolition context and the transfer-pricing link. Not previously covered anywhere on the page. |
| "Governance Maturity: What's Actually Mandatory vs. Good Practice" (new section, 4 cards) | Add | Expands the one-line governance mention into a real section with verified Companies Act thresholds (CS, audit committee/independent directors, secretarial audit) — the clarification that these are *not* automatic for a private subsidiary is a genuine differentiator vs. competitor content. |
| "Common Second-Year Mistakes" — 3rd card | Update (rewrite) | Replaced the old "under-investing in governance" card (now redundant with the new Governance Maturity section) with a new mistake specific to repatriation timing, tying the mistakes list to the new repatriation section instead of duplicating content. |
| "Common Second-Year Mistakes" — 4th card | Add | New mistake ("assuming private-company status means governance thresholds will never apply") that ties the mistakes list to the new Governance Maturity section without repeating its content verbatim. |
| FAQ section + FAQPage schema (new) | Add | Six FAQs directly answering the specific, threshold-driven questions this SERP surfaces (independent directors, transfer pricing trigger, repatriation route, in-house vs. outsourced timing, secretarial audit, recurring year-one obligations). Matches the FAQPage pattern already used on the cluster hub (`/doing-business-in-india`) for consistency. |
| "Building vs. Outsourcing Your Finance Function" section | Not changed (content) | Already accurate and on-topic; only its background color was adjusted for visual alternation with the new sections around it. |
| Hero section | Not changed | Still accurately frames the page's scope against the two linked compliance pages. |

## Search Intent Assessment
Unchanged. The query set remains informational — searchers already have an incorporated India entity and want specific, named strategic guidance (thresholds, routes, mechanisms) rather than a service comparison or pricing page. No commercial competitors have entered this specific SERP; the gap was depth and specificity, not format or intent.

## Not Changed (and why)
- **Hero section**: still accurately scopes the page and correctly hands off to `/india-business-setup/company-formation` and `/india-business-setup/regulatory-compliance` for filing mechanics — no drift.
- **"Building vs. Outsourcing Your Finance Function" card content**: verified still accurate and well-differentiated (outsource → hybrid/Virtual CFO → in-house); no new information contradicts it, so left as-is per the guardrail against unnecessary rewrites.
- **First two "Second-Year Mistakes" cards** (year-one compliance treated as done; entity structure not revisited): still accurate and not duplicative of the new sections; left unchanged.
- **CTA section**: no change needed — still generically correct for this page's audience.
- **No full-page rewrite**: the existing sections' framing, voice, and factual content held up under review; a targeted expansion (three new sections plus two mistake-card updates) fully closes the identified gap without touching working content, consistent with the guardrail against rewriting when a targeted update suffices.
- **`app/sitemap.ts`**: intentionally not modified per explicit task instruction.

## Before / After
- **Before**: ~616 words (hero + 2 sections of 3 cards each + CTA).
- **After**: approximately 1,750–1,850 words (hero + orientation paragraph + 4 content sections totaling 13 cards + a 6-item FAQ + CTA), roughly tripling genuinely new, non-duplicative strategic content while preserving every sentence of the original page that was still accurate and on-topic.
