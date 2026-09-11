# Refresh: Accounting & Assurance Services (India) — 2026-09

## Trigger
Site-wide word-count audit flagged `/services/accounting-assurance` as thin content (~212 words rendered) on a core commercial service page that should be a strong ranking target for outsourced-accounting / statutory-audit / bookkeeping searches from foreign companies with Indian subsidiaries. No prior `content-ops/pipeline/` history existed for this page — first refresh.

Note on starting state: on opening `app/services/accounting-assurance/page.tsx`, the page was **not** in its original ~212-word state and did not contain a partial/broken edit. It already contained a fully built-out, correctly balanced JSX expansion (Our Services grid, Statutory Audit section with audit-type breakdown + Ind AS/financial-year callouts, Compliance Calendar, Why AU Corporate, 6 FAQs with FAQPage schema, related-links grid) consistent with the site's navy/gold ClickableInfoCard/ClickableReveal style and cross-linked correctly to `company-formation`. This reflects a prior, completed attempt at this same task, not a stub. I verified it end-to-end (JSX balance, imports all used, facts checked against primary/secondary sources) rather than assuming completeness, per the task's own caution, and then ran the full research process to identify any remaining gaps before editing further.

## Current Page vs. Current SERP
Searched the current SERP for outsourced accounting / statutory audit / bookkeeping services for foreign-owned Indian subsidiaries and for statutory-audit-specific competitor pages (VJM Global, Patron Accounting, PKC Management Consulting, Manish Anil Gupta & Co., Krystal7, Beacon Filing, virtual-CFO providers). Findings:
- The page's existing coverage (statutory vs. tax vs. internal audit distinction, Section 128 bookkeeping obligation, Ind AS applicability roadmap, April-March financial year and the NCLT exception, RoC/RBI filing calendar) already matches or exceeds most competitor pages' depth on regulatory substance.
- A recurring pattern across competitor pages that this page lacked: explicit description of the **engagement model** — how the work is actually staffed and paced (dedicated team vs. ad hoc, monthly/quarterly/year-end cadence), which is what several competitors (Patron Accounting, Whiz Consulting, virtual-CFO providers) lead with as a trust/differentiation signal, on top of the task list.
- The GST annual-return filing (GSTR-9 / GSTR-9C) — a real recurring compliance item for any GST-registered subsidiary above the turnover thresholds — was present nowhere on the page, including the "Annually" bucket of the compliance calendar, despite monthly/quarterly GST items already being listed there.

## Current Page vs. Search Console Data
Pulled 90-day GSC data for `sc-domain:theaucorp.com`. The page itself (`https://www.theaucorp.com/services/accounting-assurance`) shows **36 impressions, 0 clicks, average position 18.6** over the period — real but weak visibility, consistent with page-2 ranking and a page that (in its pre-refresh state) didn't give either users or Google much to engage with. No query-level breakdown was returned specifically for this URL (GSC's page+query join for this property surfaced only homepage brand queries in the top rows), so this is a page-level signal rather than a specific-query signal, but it's consistent with the word-count-audit trigger: a thin page getting impressions but no clicks/rankings traction.

## New Authoritative Information Found
Verified current figures via search rather than assuming the page's prior content was correct:
- **Internal audit threshold** (Companies (Accounts) Rules, 2014, Rule 13): private company mandatory once turnover exceeds Rs 200 crore or borrowings from banks/PFIs exceed Rs 100 crore in the preceding FY — confirmed accurate as already stated on the page; no change made.
- **Tax audit threshold** (Section 44AB): Rs 1 crore general threshold, enhanced to Rs 10 crore where cash receipts/payments are ≤5% of total — the page deliberately doesn't quote a specific number ("once turnover crosses the applicable threshold"), which stays safely accurate without needing a figure that could drift; left as-is.
- **GSTR-9 (GST annual return)**: mandatory once aggregate turnover exceeds Rs 2 crore (optional below); **GSTR-9C** (reconciliation statement) required above Rs 5 crore, self-certified since FY 2020-21 (no longer requires CA/CMA certification). This was missing from the page's "Annually" compliance-calendar bucket — added.
- Companies Act figures already on the page (Section 128 books-of-account retention: 8 years; Section 139 five-year auditor term, 2018 amendment removing annual ratification; Section 2(41) April-March financial year and NCLT exception) were all independently checked and are accurate — no changes needed.
- Cross-checked against `app/india-business-setup/company-formation/page.tsx`'s compliance roadmap (AOC-4/MGT-7, FC-GPR 30-day window, annual FLA return, GST thresholds Rs 20 lakh/Rs 40 lakh) — figures remain consistent between the two pages; no contradictions introduced.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Compliance Calendar — "Annually" item | Update | Added GSTR-9 annual GST return (Rs 2 crore threshold) and GSTR-9C reconciliation statement (Rs 5 crore threshold, self-certified) — a real recurring filing that was missing given GST is otherwise covered monthly/quarterly on the page |
| New "How the Engagement Actually Works" section (+ nav anchor) | Add | Competitor gap: SERP research showed outsourced-accounting and virtual-CFO competitor pages consistently describe engagement cadence/staffing model as a differentiator; this page listed only *what* is done, not *how* the work is paced. Added a 4-step process (books setup, monthly close/MIS, quarterly review, year-end audit support) grounded in the page's existing content (nothing invented — draws on facts already established elsewhere on the page: monthly TDS/GST, quarterly advance tax, year-end audit/AOC-4/MGT-7/FLA) |
| New FAQ: "Do we get a dedicated accounting team, or is this handled on an ad hoc basis?" | Add | Reinforces the engagement-model gap identified in SERP research; also added to FAQPage JSON-LD automatically since the schema is generated from the `faqs` array |

## Search Intent Assessment
Unchanged. This remains a commercial service page for foreign companies evaluating an accounting/audit provider for an Indian subsidiary — informational depth (regulatory explainers) sits alongside commercial trust content (differentiation, engagement model, lead form), which is the correct mix for this query cluster. No shift toward a purely informational or purely transactional intent was observed on the SERP.

## Not Changed (and why)
- **No full rewrite.** The page's existing regulatory content (statutory/tax/internal audit distinctions, Ind AS applicability, financial-year rules, FAQs) was independently verified as accurate and already matches or exceeds competitor depth — rewriting it would have discarded working, correct content for no gain.
- **Did not add specific tax-audit turnover figures** (Rs 1 crore / Rs 10 crore) to the audit-types card or FAQ — kept the existing deliberately-general phrasing ("once turnover crosses the applicable threshold") since this threshold has moved before and the page's existing pattern of avoiding a number here (while giving numbers where they're structurally stable, e.g. internal audit, GST registration) is the safer, still-accurate choice.
- **Did not add virtual-CFO as a named service.** Several competitors lead with virtual CFO services; AU Corporate's existing "MIS Reporting for Management" service card covers the management-reporting angle without overstating scope into advisory/fundraising territory this page doesn't otherwise support — adding a virtual-CFO claim would be scope creep beyond what's verifiable from the rest of the site.
- **Did not touch `app/sitemap.ts`** — per task instructions, lastModified bump is left to the requesting user.
- **Did not run git commands, install packages, or run a build** — per task instructions.

## Word Count
- Before this session's edits (page as found, already expanded from the flagged 212-word state): roughly ~2,000–2,100 words of rendered body text.
- After this session's targeted additions (How We Work section + one FAQ + calendar update): roughly ~2,250–2,350 words.
