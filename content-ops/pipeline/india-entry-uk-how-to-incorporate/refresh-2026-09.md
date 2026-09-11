# Refresh: How to Incorporate a Subsidiary in India from the UK — 2026-09

## Trigger
Scheduled/audit-driven review: a site-wide word-count audit (Playwright against the live production build) flagged this page at ~554 words of rendered body content — thin for a page targeting a specific, competitive long-tail transactional/informational query ("how to incorporate a subsidiary in India from UK") that should be a strong ranking target. No prior `content-ops/pipeline/` history exists for this page — this is its first refresh. Confirmed via Search Console: the page has **zero recorded impressions or clicks** over the trailing 90 days (`sc-domain:theaucorp.com`, query+page dimensions, 500-row pull) — it isn't earning any search visibility at all, unlike sibling UK pages in the same cluster (e.g. `uk-subsidiary-vs-branch-office-india` picks up impressions for "branch or subsidiary uk" and "branch vs subsidiary uk"; `india-uk-dtaa-withholding-tax` picks up several DTAA-related queries). That combination — thin content + literally no GSC footprint for a page that should be indexable and relevant — is a real trigger, not a rankings blip.

## Current Page vs. Current SERP
Searched "how to incorporate a subsidiary in India from UK step by step guide" and "register Indian subsidiary of UK company resident director requirement documents checklist." Competitor guides (Commenda, KRP Associates, Multiplier, RAAAS, Ebizfiling, Companies Next, and others) consistently cover several things this page was missing entirely:
- A UK-parent-specific **documents checklist** (parent company docs, UK-director/shareholder KYC, resident-director docs, registered-office proof) — the page had no checklist at all, only the six process steps.
- Explicit **minimum shareholder/director/capital figures** (2 shareholders, 2 directors with one resident, no minimum paid-up capital since the Companies (Amendment) Act, 2015) — not stated anywhere on the page.
- A deeper treatment of the **resident-director requirement** (Section 149(3), 182-day test, sourcing options) — the original page didn't mention this requirement at all, a notable gap given it's one of the most common blockers for a UK-only board.
- **FAQ content with FAQPage schema** — every competitor guide and the sibling `cost-timeline` page on this site uses an FAQ block; this page had none, meaning no FAQ rich-result eligibility and no coverage of the "People Also Ask"-style questions searchers actually type.
- Several competitor guides also flagged **Form INC-20A** (declaration of commencement of business, due within 180 days of incorporation under Section 10A) as a commonly-missed post-incorporation step — verified independently against multiple sources (TaxGuru, Bajaj Finserv, SetIndiaBiz, ComplianceCalendar) citing Section 10A / Rule 23A of the Companies (Incorporation) Rules, 2014. This wasn't on the page or on the sibling cost-timeline page, so it's a genuine net-new, verifiable addition rather than a duplication.

No new competitor is offering a materially different *format* (all are still informational step-by-step guides) — intent is unchanged, informational, but the current page was under-serving it relative to what's now table-stakes in the SERP.

## Current Page vs. Search Console Data
`sc-domain:theaucorp.com`, 90-day window (2026-06-13 to 2026-09-11), query+page dimensions, 500-row pull: **no rows at all for this URL.** By contrast, sibling UK-cluster pages (`uk-subsidiary-vs-branch-office-india`, `india-uk-dtaa-withholding-tax`) do show impressions for their respective long-tail queries. This page currently has no measurable search presence to protect or build on — the refresh is aimed at giving it something to rank with in the first place, not at responding to a decline.

## New Authoritative Information Found
- **Resident director rule** — Companies Act, 2013, Section 149(3): at least one director must have stayed in India for a total of not less than 182 days in the preceding financial year. (Consistent with the figure already used on the sibling `cost-timeline-incorporate-company-india-from-uk` page — no conflict, reused as verified fact.)
- **No minimum paid-up capital** — Companies (Amendment) Act, 2015 removed the statutory minimum paid-up capital requirement for private companies. Confirmed across multiple independent sources; no minimum currently applies.
- **Form INC-20A / Section 10A** — declaration of commencement of business required within 180 days of incorporation for any company with share capital, confirming subscribers have paid for their shares; non-filing risks the ROC striking the company off the register. Verified against Section 10A of the Companies Act, 2013 and Rule 23A of the Companies (Incorporation) Rules, 2014, cross-checked across several independent professional-services sources. This is genuinely new to the page (and not duplicated on the cost-timeline page).
- Minimum shareholder/director counts (2 + 2, one resident director) — consistent with standard Companies Act, 2013 requirements for a private limited company.
No rate, form, or threshold already stated on the page (or on the linked cost-timeline page) had changed or needed correction.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Quick-facts stat bar (2+2 shareholders/directors, 182-day resident test, no minimum capital, 180-day INC-20A deadline) | Add | Gives scannable, verifiable numbers up top — matches the `ClickableReveal` stat-bar pattern already used on the sibling cost-timeline page; none of these figures were previously on the page |
| "Shareholders, Directors & Capital: What a UK Parent Needs" (4 `ClickableInfoCard`s) | Add | SERP gap — competitor guides state minimum shareholder/director/capital requirements explicitly; page previously said nothing about these |
| "The Resident Director Requirement, in Detail" callout | Add | Biggest single content gap found — the 182-day resident-director rule wasn't mentioned anywhere on the page despite being a common blocker for UK-only boards; also covers sourcing options, which the SERP guides treat as essential |
| "Documents Checklist for a UK Parent Company" (4 `ClickableInfoCard`s) | Add | Every competitor guide reviewed includes a UK-parent-specific documents checklist; this page had none |
| Step 6 ("Bank Account & FDI Inflow") detail text | Update | Added the Form INC-20A 180-day requirement, verified against Section 10A of the Companies Act, 2013 — a genuinely new, high-value regulatory fact not previously captured anywhere on this page or the linked cost-timeline page |
| FAQ section (7 Q&As) + FAQPage JSON-LD schema | Add | No FAQ existed; brings the page in line with the sibling cost-timeline page and gives it FAQ rich-result eligibility. Questions were deliberately scoped to process/eligibility (shareholders, directors, resident director, capital, INC-20A, apostille scope, LLP-as-shareholder) rather than cost/timeline, to avoid duplicating the cost-timeline page's existing FAQ set |
| "Where UK-origin entries usually lose time" callout | Update | Added a cross-reference link to the cost-timeline page's apostille cost/turnaround breakdown instead of restating those figures here — avoids duplicating content that page already covers in depth |
| Related Reading | Update | Added a link to `cost-timeline-incorporate-company-india-from-uk`, which was previously missing from this page's related-reading list despite being the most relevant sibling page |

## Search Intent Assessment
Unchanged — the query remains purely informational/how-to, and no commercial competitors (tools, SaaS, marketplaces) appeared in the SERP; it's still advisory/professional-services firms and law-firm content marketing. The gap wasn't a shift in intent, it was depth: the page answered "what are the six steps" but not "who's eligible, what documents do I need, and what am I on the hook for right after incorporation" — which is what the current SERP treats as the complete answer to this query.

## Not Changed (and why)
- The six-step "The Process" list and its ordering — still accurate and matches the standard Companies Act, 2013 / SPICe+ flow; only step 6's description was extended (INC-20A), not restructured.
- Apostille cost figures, FCDO turnaround times, and the phase-by-phase timeline — deliberately not duplicated here; they live on `cost-timeline-incorporate-company-india-from-uk` (refreshed this session) and this page now links to that content instead of repeating it.
- GST registration threshold specifics — already covered generically in the SPICe+ Part B step and in the linked cost-timeline page; didn't need independent treatment here.
- No full rewrite — the existing intro, process steps, and "where UK entries lose time" callout were all still accurate and serving the intent correctly; this was a targeted expansion, not a rewrite.

## Rough Word Count
- Before: ~554 words (per site-wide audit)
- After: ~1,750-1,850 words of rendered body content (six-step process retained; four new sections added — quick facts, shareholder/director/capital cards, resident-director deep dive, documents checklist — plus a 7-question FAQ block)
