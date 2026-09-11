# Refresh: India-UK DTAA & Withholding Tax Rates — 2026-09

## Trigger
Combination of: (1) site-wide word-count audit flagging this page at ~538 words of visible content against a competitive, keyword-rich topic (treaty withholding rates + claim process); (2) Search Console showing the page effectively not ranking (see below); (3) a genuine regulatory-update trigger found during research — the Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026, renaming Form 10F to Form 41 and Forms 15CA/15CB to Forms 145/146, which this page referenced throughout under the old form numbers. This last point is the highest-priority driver per the standing brief for this agent and would justify a refresh on its own even absent the word-count signal.

Note on prior session: a previous attempt at this page was interrupted mid-edit by a transient rate-limit error. On inspection, the file (159 lines pre-refresh) was **not** actually mid-edit — it was a complete, well-developed page: working rates table, "What You Need to Actually Claim These Rates" section (4 requirement cards), a 5-step TRC/Certificate-of-Residence walkthrough, a capital gains section, a Principal Purpose Test section, 6 FAQs, and a clean `export default function` with balanced JSX. So this session did **not** redo that work — it verified it, then focused on (a) the Form 41 regulatory correction found during research, and (b) light supporting edits, rather than a rewrite.

## Current Page vs. Current SERP
Searched: "India UK DTAA", "India UK double taxation treaty", "withholding tax India to UK", "HMRC certificate of residence India". Ranking/visible competitors: ClearTax, VJM Global, India Law Offices, Stratrich, Beacon Filing (which runs a dedicated Article 14 capital-gains sub-page), plus several UK accountancy sites for the HMRC/Certificate-of-Residence side (GOV.UK, Bambridge, Croner-i, mytaxaccountant.co.uk).

- The page's existing structure already matches or exceeds what these competitors cover on: rate table, TRC requirement, Form 10F/Form 41, 15CA/15CB, capital gains treatment (Article 14), and the MLI Principal Purpose Test — most competitor guides cover at most two or three of these in one place; this page already covered all of them pre-refresh.
- Genuine gap found and fixed this session: none of the competitor pages I could reach had caught up to the Form 10F → Form 41 / 15CA → 145 / 15CB → 146 renaming yet (all still reference the old form numbers as current), so this page is now ahead of the visible SERP on that point rather than behind it.
- No new PAA-style question emerged in search that isn't already answered in the existing FAQ block.
- Intent read: still purely informational/advisory (finance teams and their advisors researching the mechanics), no shift toward commercial/transactional competitors muscling in — no changes needed on that front.

## Current Page vs. Search Console Data
Pulled via GSC for `sc-domain:theaucorp.com`, last 90 days, page-level:
- `/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax`: **39 impressions, 0 clicks, average position 81.4.**
- For comparison, the sibling page `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india` gets 77 impressions at position 31.7 — still not great, but meaningfully better than this page.

Position ~81 (effectively page 8-9 of results) with zero clicks is consistent with a page that was too thin to rank for its target terms. This doesn't by itself prove the fix will work, but it does rule out the guardrail concern of "refreshing because rankings moved for a few days" — this is a sustained, structural non-ranking signal over a 90-day window, not noise.

## New Authoritative Information Found
1. **Income-tax Act, 2025 replaced the Income-tax Act, 1961 effective 1 April 2026** (today is 11 September 2026, so this is now more than five months in effect, not a future/pending change). Confirmed via the Income Tax Department's own Form 41 pages (incometaxindia.gov.in/documents/d/guest/fn-41 and .../form-41-faqs) plus multiple independent professional-services summaries (EY, India Briefing, TaxGuru, Ebizfiling, Sorting Tax, CA Sahuja, DNCOCA):
   - **Form 10F → Form 41**, now filed under Section 159(8) of the new Act (Rule 75 of the Income-tax Rules, 2026). Old citation was old Section 90.
   - **Form 15CA → Form 145, Form 15CB → Form 146**, now under Section 393(2) of the new Act (old citation: Section 195).
   - Payments/TDS events before 1 April 2026 remain governed by the old Act's forms and section numbers; anything from 1 April 2026 onward uses the new ones.
   - This was the single most material finding of this refresh — the page previously referred to "Form 10F" and "Form 15CA/15CB" throughout as the current requirement, which is now technically outdated for any payment processed after 1 April 2026.
2. **Treaty rates cross-checked** against ClearTax, VJM Global, and aggregated search results citing the treaty text: 10% dividends (15% for property-income-derived distributions), 10%/15% interest, 10% equipment royalties / 15% other royalties and FTS. **No discrepancy found** — the existing rates table was already correct. (Unlike the sibling `fdi-channels` refresh this session, no rate correction was needed here.)
2a. Note: I could not directly fetch the primary treaty PDF (gov.uk `assets.publishing.service.gov.uk` and India's High Commission London PDF were both blocked by the network egress proxy), so this cross-check relies on convergent secondary sources (ClearTax, VJM Global, India Law Offices, aggregated search synthesis) rather than the treaty text itself. Flagging this as a verification gap for a human reviewer with direct access to the treaty text or HMRC/CBDT primary sources to do a final sign-off on the rate table specifically.
3. **Finance Act 2023 royalty/FTS domestic rate change (10%→20%, effective 1 April 2023)** — already correctly reflected on the page pre-refresh; re-verified via TaxGuru/AZB/Nishith Desai summaries, no change needed.
4. **CBDT Circular No. 1/2025 (dated 21 January 2025) on the Principal Purpose Test** — already correctly cited on the page pre-refresh; re-verified via EY/PwC/AZB summaries, no change needed.
5. **UK-India CETA entry into force on 15 July 2026** — already correctly stated on the page pre-refresh; re-verified via the Indian government's own PIB press release and UK gov.uk trade tariff service, no change needed.
6. Checked whether Section 9(1)(i) Explanation 5 (indirect transfer deeming provision, relevant to the capital gains section) has a confirmed new section number under the 2025 Act — could not find a source precise enough to cite with confidence, so **did not add an unverifiable section citation** to the capital gains section; left that section as originally written (already accurate on the substance, just without a specific new-Act cross-reference).

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| New callout box: "The paperwork changed names on 1 April 2026 — not the requirement" (inserted before the requirements-card section) | Add | Surfaces the Form 10F→41 / 15CA-15CB→145-146 regulatory change prominently, with primary-source citation, rather than burying it only in a card description |
| "Form 10F" requirement card | Update (rewrite) | Retitled "Form 41 (formerly Form 10F)"; description updated with Section 159(8)/Rule 75 citation and the eportal.incometax.gov.in filing detail |
| "Form 15CA / 15CB" requirement card | Update (rewrite) | Retitled "Form 145 / Form 146 (formerly 15CA/15CB...)"; description updated to explain the renaming while keeping the old names for searchability |
| TRC step 3 ("State the DTA, the article, and the tax year") | Update | Reference to "Form 10F" corrected to "Form 41 (the self-declaration that replaced Form 10F from 1 April 2026)" |
| Yellow "most common way UK companies lose the treaty benefit" box | Update | "Form 10F" reference corrected to "Form 41 (formerly Form 10F)" |
| FAQ: "What withholding tax rate applies to a dividend..." | Update | "Form 10F" reference corrected to "Form 41 (formerly Form 10F)" |
| FAQ: "Is Form 10F still required if we already have a valid TRC?" | Rewrite | Full answer rewritten to lead with the Form 41 renaming, new section/rule citation, and an explicit note that pre-1-April-2026 payments still use the old form — kept the original question wording since that's still the exact phrase people search |
| Rates table, capital gains section, PPT section, TRC steps 1/2/4/5, other FAQs, Related Reading | Not changed | Verified accurate against current research; no factual, regulatory, or intent-driven reason to alter |

## Search Intent Assessment
Unchanged. This remains a purely informational/advisory query cluster (UK finance and tax teams researching the mechanics of claiming treaty relief on Indian-subsidiary repatriations), not a commercial/comparison-shopping intent. No SERP feature shift (no shopping results, no new comparison-tool competitors) observed since the page was last substantively written. The one real shift is regulatory (the form renaming), not an intent shift, and the page's existing structure already answers the intent well — the fix was corrective/additive, not structural.

## Not Changed (and why)
- **Rates table figures** — verified accurate against multiple sources; changing them would have introduced an error, not fixed one.
- **Capital gains (Article 14) section** — substance verified accurate (no treaty rate cap, domestic law + FTC relief, indirect transfer exposure); did not add a specific new-Act section citation because I could not verify the renumbered section number for Explanation 5 to Section 9(1)(i) to the confidence bar this brief requires ("do not invent unverifiable... dates" / cite the primary source the way Stage 9 would).
- **Finance Act 2023 box, CETA paragraph, PPT/Circular 1/2025 section** — all re-verified as still accurate; no edit needed.
- **Overall page structure/template usage** (RegionClusterTemplate, ClickableInfoCard, ClickableReveal, navy/#081a42 + yellow-400 styling) — left untouched; this was a targeted correction, not a redesign, and the existing structure already serves the intent well.
- **Full-page rewrite** — explicitly not done. The page was already comprehensive and well-targeted; the only genuine defect found was the form-number regulatory drift, which was fixed surgically in the relevant six spots rather than by rewriting the page.

## Word Count
Rough estimate: ~538 words before this session (per the flagged audit) → this session's edits added roughly 250–300 words net (new regulatory callout box + expanded card/FAQ copy) on top of what was already a fully-built-out page from the (successfully completed, not actually interrupted) prior session — current rough total is approximately **1,700–1,800 words** of visible body content.

## Files Touched
- `app/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax/page.tsx` — content edits described above.
- `app/sitemap.ts` — **intentionally not touched** per instructions; `lastModified` for this route (currently `2026-08-26`) should be bumped to today by the requesting user after reviewing the diff.
