# Refresh: Transaction Advisory Services — 2026-09

## Trigger
Scheduled/audit-driven review: a site-wide word-count audit flagged `/services/transaction-advisory` as one of the thinnest pages on the site (~273 words) on a core commercial service page. Search Console confirms the page is effectively invisible: 0 clicks and only 14 impressions over the trailing 90 days, at an average position of 81.3 — consistent with a page too thin to rank for its target commercial terms (M&A due diligence, deal structuring, valuation, IPO advisory in India). No prior `content-ops/pipeline/` history exists for this page.

## Current Page vs. Current SERP
Before this refresh, the page was a title, one 27-word description paragraph, and eight service cards with one-sentence descriptions each — no supporting prose, no FAQ, no regulatory detail, no internal linking. The current India-focused SERP for transaction advisory / M&A due diligence terms is dominated by:
- Big-4/large advisory firms (KPMG, Grant Thornton Bharat, BDO) running broad "deal advisory" hub pages.
- Mid-market India-focused competitors (MBG Corp, AKM Global, KNM India, JPKAD, ENM Global, A2 Consultants) whose service pages consistently cover: types of due diligence (financial/tax/legal/commercial/HR/IT/ESG), valuation methodology, deal structuring options, cross-border/FDI-specific considerations for foreign investors, and increasingly a distinct "cross-border M&A for foreign companies" angle.
- Fresh 2026 commentary specifically on CCI's new deal-value threshold and "material influence" control standard reshaping deal structuring — a live regulatory shift the old page didn't reflect at all.
- PAA-adjacent questions clustering around: share vs. asset vs. slump sale, SME vs. main board IPO eligibility, who can conduct a valuation, and NCLT merger timelines — none of which the page addressed.

Intent for these terms is clearly informational-to-commercial (research before engaging an advisor), which the old page — a bare service menu with no research content — did not serve at all.

## Current Page vs. Search Console Data
90-day GSC data for `https://www.theaucorp.com/services/transaction-advisory`: 0 clicks, 14 impressions, 0% CTR, average position 81.3. This is far behind sibling service pages that have already been expanded with prose/FAQ content (e.g. `/services/accounting-assurance` at position ~17.4, `/services/taxation-regulatory` at ~19.9), which is a strong internal signal that the thin-content pages on this site under-rank relative to the expanded ones for comparable competitiveness.

## New Authoritative Information Found
Verified via primary/authoritative sources during research (used to ground new content, not just competitor copy):
- **CCI deal-value threshold**: Combinations must be notified where transaction value exceeds Rs 2,000 crore and the target has "substantial business operations" in India — introduced under the Competition (Amendment) Act, 2023 framework, now in force. CCI has also moved to a "material influence" standard for control, pulling some minority-stake deals into the filing requirement.
- **Companies Act, 2013, Section 247**: Registered Valuer requirement for valuations tied to mergers, preferential allotments, buybacks, and sweat-equity issuances.
- **FEMA/RBI valuation rule**: Cross-border share pricing must be done by a SEBI-registered merchant banker or a practising Chartered Accountant, using an internationally accepted methodology (DCF/NAV/market multiples) on an arm's-length basis.
- **Stamp duty on dematerialised share transfer**: 0.015% under the amended Indian Stamp Act framework.
- **SEBI ICDR eligibility**: SME IPO — post-issue paid-up capital up to Rs 10 crore, exchange-level review (BSE SME/NSE Emerge), and — per SEBI's March 2025 reforms — minimum EBITDA of Rs 1 crore in 2 of the last 3 years, with minimum application size raised to Rs 2 lakh. Main board IPO — SEBI-level DRHP review, standard profitability test under ICDR Regulation 6(1) (avg. operating profit ≥ Rs 15 crore across 3 of the preceding 5 years), with an alternate QIB-anchored route under Regulation 6(2).
- **Companies Act Sections 230–232 vs. 233**: Standard NCLT-sanctioned merger scheme (~9–12 months) vs. the fast-track Regional Director route (holding-company/wholly-owned-subsidiary or small-company mergers only).
- **Press Note 3 of 2020**: Mandatory government approval for any investment, direct or indirect, from an entity based in or beneficially owned from a country sharing a land border with India, regardless of sector or deal value.

None of this existed on the page previously in any form.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Intro description | Update/rewrite | Replaced one generic 27-word sentence with a grounded paragraph naming the actual regulatory stakes (FEMA, Companies Act, CCI) foreign investors face, matching search intent and setting up the new sections. |
| Quick-facts stat strip | Add | New — four verifiable regulatory data points (CCI threshold, Section 247, stamp duty rate, SME IPO capital ceiling) as scannable, citable facts; matches the pattern already used on `/services/accounting-assurance`. |
| "Our Services" card grid | Unchanged | The eight existing `ClickableInfoCard` items already covered the right service menu and titles are referenced elsewhere (e.g. `/services` features list) — preserved as-is per guardrail against unnecessary rewrites. |
| "Due Diligence in India" section | Add | New — six due-diligence type cards (financial/tax/legal/FEMA-regulatory/commercial-operational/HR-IT-ESG) plus a grounded note on Press Note 3 and CCI material-influence checks specific to foreign investors — direct gap vs. competitor pages and SERP intent. |
| "Deal Structuring & Valuation" section | Add | New — comparison of share purchase / asset purchase / slump sale / merger with tax, GST and stamp-duty implications, plus a note distinguishing Companies Act Section 247 valuation from FEMA/RBI cross-border pricing rules. Directly answers a recurring PAA-style question the old page never touched. |
| "Fundraising, Restructuring & IPO Readiness" section | Add | New — ties fundraising/VC rounds to FEMA/FC-GPR mechanics, and adds an SME-IPO vs. main-board-IPO comparison grounded in current SEBI ICDR eligibility criteria (including the March 2025 SME tightening), giving the two existing IPO service cards real supporting content. |
| "Our Approach" section | Add | New — four-step engagement process, matching the pattern already established on `/services/risk-management` and `/services/accounting-assurance` for consistency across the service-page family. |
| Mid-page LeadForm | Add | New — gives a conversion point mid-page rather than only at the top service cards, consistent with `/services/accounting-assurance`. |
| FAQ section (`FaqAccordion` + JSON-LD) | Add | New — eight FAQs covering deal-structure choice, CCI applicability, valuer eligibility, merger timelines, SME vs. main board IPO, Press Note 3, post-deal handoff, and fundraising vs. M&A distinction — targets PAA-style queries directly and adds FAQPage schema (page previously had none). |
| RelatedResources block | Add | New — internal links to Taxation & Regulatory, Risk Management, Accounting & Assurance, and FDI & Entry Routes, improving internal linking to/from a previously orphaned-feeling page. |

## Search Intent Assessment
Unchanged in nature, but previously unserved. The primary intent for "transaction advisory," "M&A due diligence India," and "deal structuring India" queries is informational-to-commercial — buyers doing pre-engagement research before contacting an advisor — which is exactly what large competitor firms (KPMG, Grant Thornton, BDO) and India-focused mid-market firms are building for with due-diligence-type breakdowns, valuation explainers, and structuring comparisons. The old page served only the tail-end commercial intent (a bare service list) and ignored the research phase entirely. No shift to a fundamentally different intent (e.g., transactional/tool-based) was found — the fix was adding the missing informational depth, not repositioning the page.

## Not Changed (and why)
- **Page framing/URL/title**: `/services/transaction-advisory` and the H1 "Transaction Advisory Services" remain — no evidence of a naming or positioning mismatch, just thin content under a correct title.
- **Original eight service cards**: Titles and one-line descriptions kept verbatim (still accurate and still referenced from `/services`); only new supporting sections were added around them rather than rewriting what already worked.
- **No fabricated statistics, deal counts, or client figures**: Every stat added (CCI threshold, Section 247, stamp duty rate, SME IPO capital ceiling, IPO profitability thresholds) is a verifiable regulatory fact with a citable primary source (Competition Act/CCI regulations, Companies Act 2013, Indian Stamp Act, SEBI ICDR Regulations) — no invented client counts or deal-value claims were added, per instructions.
- **`app/sitemap.ts`**: Left untouched per explicit instruction; the `lastModified` bump and commit/push are being handled separately by the requester.

## Word Count
- **Before**: ~273 words (title, one short paragraph, eight one-sentence card descriptions).
- **After**: ~2,150 words of visible content (intro paragraph, quick-facts strip, unchanged service grid, three new content sections with prose + 12 additional cards, four-step approach, eight-item FAQ, related-resources block) — in line with the 1,200–2,000+ word range observed on competitor transaction-advisory pages, without padding: every added section maps to a specific due-diligence type, deal structure, valuation regime, or IPO track that a foreign company evaluating a transaction in India actually needs to understand.
