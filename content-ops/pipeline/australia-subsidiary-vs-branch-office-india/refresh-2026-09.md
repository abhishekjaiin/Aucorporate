# Refresh: Australia Subsidiary vs Branch Office in India — 2026-09

## Trigger
Site-wide thin-content remediation initiative. The page was ~749 words — thin relative to its US (`/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india`) and UK (`/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india`) equivalents, both of which cover the same comparison type at materially greater depth (full RBI timeline/permitted-activities/tax-rate/exit-process rows, a "which one companies typically choose" analysis, a regulatory-watch note, and 5-7 FAQs). No prior refresh exists for this slug (`content-ops/pipeline/australia-subsidiary-vs-branch-office-india/` did not exist before this session). This is a scheduled/structural review with concrete findings, not a reaction to short-term ranking movement — GSC data for the property returned a 403 (insufficient permission on this connection) so no query-level signal was available; the trigger is content-depth parity plus genuine regulatory/content gaps found below.

## Current Page vs. Current SERP
Searched "branch vs subsidiary india australia company", "australian company subsidiary india", and "branch office india australian company". Findings:
- Generic branch-vs-subsidiary explainers (Sleek, Sprintlaw, Acclime, Lawpath, CorpArray) dominate for the broader query but are Australia-domestic-incorporation content, not India-specific — confirms this remains primarily an informational query for the India-entry angle, no new commercial competitors have entered this specific niche.
- No dedicated, well-optimized Australia-specific "subsidiary vs branch office in India" competitor page was found — the content gap is depth, not competition: a full side-by-side (liability, RBI approval/timeline, permitted activities, India tax rate, home-country tax treatment, DTAA, exit process) plus Australia-specific CFC mechanics is exactly what generic guides don't offer, and exactly what the US/UK sibling pages on this site already do.
- Search intent is unchanged: informational/comparison, pre-engagement research stage. No SERP features (PAA boxes, etc.) indicate a shift toward transactional intent.

## New Authoritative Information Found
- **RBI draft branch/liaison office reform (Oct 2025):** Draft Foreign Exchange Management (Establishment in India of a Branch or Office) Regulations, 2025, released for public consultation October 3, 2025, proposing to remove the USD 100,000 net-worth and 5-year profit-track-record eligibility criteria under FEMA 22(R)/2016 and move to a principle-based permitted-activities test. Confirmed still in draft, not notified in the Official Gazette, as of the latest available information (source: India Briefing, EY India, Vinod Kothari Consultants coverage). This is the same reform already documented on the US/UK sibling pages; now added here for consistency.
- **India corporate tax rate for foreign-company PEs:** Confirmed at 35% base rate (cut from 40% by the Finance Act, 2024), ~36-38% effective with surcharge/cess — verified via multiple independent sources, consistent with the rate already used on the US/UK pages. Subsidiary concessional rate (22% base / ~25.17% effective) confirmed unchanged.
- **India-Australia DTAA rates:** Confirmed unchanged — 15% dividends/interest, 10% equipment-related royalties, 15% other royalties/FTS (Article 12), consistent with what's already on this page and the Australia hub. No treaty renegotiation has occurred.
- **Australia's CFC "listed country" list (Section 320, ITAA 1936 + Income Tax Assessment (1936 Act) Regulation 2015, reg 19):** Verified that only seven countries — Canada, France, Germany, Japan, New Zealand, UK, US — are "listed countries" for CFC purposes. India is not one of them, meaning an Indian subsidiary is assessed as an "unlisted country" CFC, which is subject to the broader tainted-income attribution scope (rather than the narrower "designated concession income" test that applies to listed-country CFCs) if it fails the active income test. **This was not previously on the page or the hub and is a genuine, verifiable, Australia-specific content gap** — it's also a real structural distinction from the site's UK/US comparison pages, since the UK and US are both listed countries.
- **Active income test threshold (s432 ITAA 1936 mechanics, per ATO's Foreign Income Return Form Guide):** Confirmed the operative "tainted income ratio" threshold is below 5% of gross turnover. The page previously referenced "the active income test" without the specific threshold; this is now cited.
- **FEMA 22(R)/2016 permitted branch activities:** Confirmed the branch office permitted-activities list is limited to 8 categories under Annex 1 (export/import, consultancy, R&D on the parent's behalf, technical support, etc.), matching the US/UK pages — this row did not previously exist on the Australia page.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Intro | Update (add 2nd paragraph) | Match US-page intro depth; preview the RBI timeline / permitted activities / tax rate / CFC / exit angles now covered below |
| Comparison table — RBI Approval & Timeline | Update | Added specific weeks (3-5 weeks subsidiary / 8-12+ weeks branch) and the net-worth/track-record dependency, matching US/UK depth |
| Comparison table — Permitted Activities | Add (new row) | Genuine content gap vs. US/UK sibling pages; cites FEMA 22(R)/2016 Annex 1's 8 permitted branch activities |
| Comparison table — India Corporate Tax Rate | Add (new row) | Was previously conflated only with "Australian Tax Treatment"; separates the India-side rate (22%/~25.17% vs 35%/~36-38%) from the home-country CFC/branch-income treatment |
| Comparison table — Australian Tax Treatment | Update | Added the specific 5% tainted-income-ratio threshold and a forward reference to India's unlisted-country CFC status |
| Comparison table — Exit / Closure Process | Add (new row) | Genuine content gap vs. US/UK; Companies Act s248 strike-off/IBBI liquidation vs. RBI AD-bank closure (2-6 months) |
| "Which one Australian companies typically choose" | Add (new section) | Matches US/UK bar; synthesizes the table into an actual recommendation framework specific to Australian parents, including the CFC angle |
| "Regulatory watch" (RBI Oct 2025 draft) | Add (new section) | Was present on US/UK sibling pages but missing here; genuinely relevant to any Australian company timing a branch-office application |
| "Australian Tax Considerations at a Glance" (3 ClickableInfoCards) | Add (new section) | Deepens the Australia-specific CFC mechanics beyond what the hub covers at a high level — active income test mechanics, India's unlisted-country status, and attribution timing vs. branch income |
| FAQ — "Is India a listed country under Australia's CFC rules?" | Add | New, verifiable, Australia-specific fact not previously covered anywhere on the site |
| FAQ — "What net worth and track record does an Australian parent need to open a branch office?" | Add | Matches US/UK FAQ bar; directly useful given the regulatory-watch note |
| FAQ — "Which structure has the lower effective tax rate in India?" | Add | Matches US/UK FAQ bar; makes the tax-rate gap explicit and answerable in a snippet |
| FAQ — "Is it harder to close a branch office or wind up a subsidiary?" | Add | Matches US/UK FAQ bar; exit process was a gap on this page |
| FAQ — CFC attribution question | Update | Added the 5% tainted-income-ratio figure for precision |
| FAQPage JSON-LD | Update | Synced to the 7 FAQs now on-page (was 3) |
| EntitySelectorTool | Add | Matches US-page pattern; reuses the existing shared component (already used on the Australia hub and the US comparison page), no new component built |

## Search Intent Assessment
Unchanged — this remains a pre-engagement, informational comparison query. No commercial competitors have entered this specific niche; the gap identified was depth and Australia-specific regulatory precision (CFC listed/unlisted country status, active income test threshold, permitted activities, exit process), not a shift in what searchers want from the page.

## Not Changed (and why)
- "Choose Subsidiary If / Choose Branch If" grid — content was already accurate and concise; left as-is.
- India-Australia DTAA rates and India domestic withholding rates — verified unchanged since original publication; only tightened wording for consistency with the hub page's phrasing.
- Legal Entity, Liability, and Accounting Standards table rows — still accurate, no new authoritative information affects them.
- Related sub-pages / internal links block — links still valid and relevant; not touched.
- `app/sitemap.ts` — not touched, per explicit instruction for this task. Content did change, so a `lastModified` bump would normally be warranted; flagging this for the caller to apply separately.

## Word Count
Before: ~749 words (visible page content)
After: ~1,950-2,050 words (visible page content; excludes FAQPage JSON-LD schema markup, which is not user-visible text)
