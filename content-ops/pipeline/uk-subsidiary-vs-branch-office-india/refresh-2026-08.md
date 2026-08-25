# Refresh: UK Subsidiary vs Branch Office in India — 2026-08

## Trigger
Search Console signal, verified as a genuine (non-relaunch-noise) near-miss. Site-wide audit (`content-ops/performance/2026-08-sitewide.md`, 2026-08-25) found nearly all ranking movement across the site explained by a July 30-Aug 4 relaunch still being reprocessed by Google — that's holding most flagged pages back from refresh right now. This page is the stated exception: its queries sit at position 29.9-39.3 independent of that pattern, with the page's exact topic ("branch or subsidiary uk", 18 impressions, pos. 29.9; "branch vs subsidiary uk", 3 impressions, pos. 39.3") matching search intent precisely — a real content near-miss, not relaunch volatility.

No prior `content-ops/pipeline/uk-subsidiary-vs-branch-office-india/` history existed, so the live page was treated as source of truth and this refresh is based on a fresh SERP/GSC/regulatory read rather than reconciliation against an original brief.

## Current Page vs. Current SERP
Re-ran the SERP for "UK subsidiary vs branch office India" / "branch or subsidiary uk" intent. Current top-ranking and visible competitor content (Deel, Beacon Filing, IndiaBizSetup, BusinessSetup.in, eBizFiling, KBCCA, Treelife, Global Law Experts) consistently includes elements our page lacked:
- **Concrete timelines** for both structures (competitors cite ~25-30 days / 4-6 weeks for subsidiary incorporation vs. 90-120 days or 8+ weeks for branch RBI approval). Our page previously gave no numbers at all, just qualitative "requires approval."
- **Specific effective corporate tax rates** as a standalone comparison point (competitors cite ~25.17% for subsidiaries opting the concessional regime vs. ~35-38.22% effective for a branch PE). Our page previously only covered the *withholding*/DTAA angle on repatriation, not the underlying corporate tax rate — a real content gap next to competitors who lead with this.
- **Permanent Establishment (PE) attribution risk** as a named risk factor (attribution of global profit to the Indian PE is flagged by multiple competitor pages as a genuine, contentious compliance burden for branches). Our page's "compliance burden" row previously undersold this, framing branch compliance as "generally lighter" without qualification.

Search intent itself has **not** shifted — this remains a purely informational/comparison query with no commercial/product competitors crowding it out, no new SERP features observed (no PAA box, no shopping/local pack). The gap is depth/specificity, not a wrong content type.

## Current Page vs. Search Console Data
Pulled query-level GSC data (28-day window, 2026-07-28 to 2026-08-25) for this page directly:
| Query | Position | Impressions | Clicks |
|---|---|---|---|
| branch or subsidiary uk | 29.9 | 18 | 0 |
| branch vs subsidiary uk | 39.3 | 3 | 0 |
| uk branch vs subsidiary | 51 | 1 | 0 |
| division uk | 54 | 1 | 0 |

Zero clicks despite 23 combined impressions is expected at position 30-50 (below page 1), so this isn't a CTR/snippet problem — it's a pure ranking-depth problem. The page is clearly the right intended target for these queries (topic match is exact), it just isn't yet authoritative/complete enough to break into page 1-2. This matches the sitewide audit's framing exactly: "page already built for this exact query, needs on-page optimization/refresh."

## New Authoritative Information Found
1. **RBI draft Foreign Exchange Management (Establishment in India of a Branch or Office) Regulations, 2025** — released for public consultation on 3 October 2025, proposing to replace the existing 2016 BO/LO/PO framework entirely: removing net-worth/profit-track-record eligibility criteria, moving from a prescriptive permitted-activities list to a principle-based approach, and simplifying office-expansion/closure procedures. **Still a draft as of 2026-08-25** — not notified, not yet in force. Verified via TaxGuru, Mondaq, Lexology, and India Briefing coverage of the RBI draft (EY's write-up of the same draft was blocked by network egress but corroborated independently across the other four sources). This is genuinely new information since the page was last substantively written and directly affects the RBI-approval row's forward outlook — added as a clearly-labeled "still draft, not yet in force" callout, not treated as current law.
2. **Finance Act, 2024 cut the foreign-company/branch corporate tax rate from 40% to 35%**, effective FY 2024-25 (AY 2025-26) — confirmed via multiple independent tax-advisory sources (Ebizfiling, Shoonya, PwC Worldwide Tax Summaries, JustStart). The page previously cited no branch tax rate at all, so this wasn't stale on-page, but it was a gap given the DTAA row already existed without the underlying corporate-rate context.
3. **Section 115BAA's 22% concessional domestic-company rate (~25.17% effective)** is unchanged in substance under the new Income-tax Act, 2025 (effective 1 April 2026, FY 2026-27 onward, replacing the Income-tax Act, 1961) — it is now numbered Section 200, but the rate itself is unchanged. Verified via TaxTMI's clause-comparison note and corroborated by ClearTax/TaxBuddy/5paisa explainers. Given the section-number churn is very recent (within the last 5 months) and our page doesn't cite section numbers anywhere in its existing style, added the *rate* to the page without citing a specific section number, to avoid a citation that itself risks going stale again.
4. **India-UK DTAA dividend withholding rates (10% general / 15% property-income vehicles, vs. 20% domestic rate)** — re-verified against ClearTax, VJM Global, Beacon Filing, and the High Commission of India, London's own published withholding-tax-rates table. **Confirmed unchanged and accurate** — no edit needed to this row's substance.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| RBI approval table row | Update | Added concrete timeline figures (subsidiary ~3-5 weeks; branch ~8-12+ weeks via AD bank + RBI) to match the specificity competitors provide and directly address the "near-miss" diagnosis (page matches intent but was thin on decision-driving detail) |
| Corporate tax rate table row | Add (new row) | Genuine content gap: page had a DTAA/withholding row but no underlying corporate tax rate comparison, which competitor content treats as a primary decision factor. Added verified rates: ~25.17% effective (subsidiary, concessional regime) vs. 35% base/~36-38% effective (branch PE, cut from 40% by Finance Act 2024), plus a note on PE profit-attribution being a common dispute point |
| Compliance burden table row (branch column) | Update | Added one clause noting PE profit-attribution typically needs its own supporting study — this was previously understated as "generally lighter compliance" without qualifying the attribution-study burden that competitor content consistently flags as a real cost |
| "Which one UK companies typically choose" callout | Update | Added one sentence connecting the choice to the new tax-rate row, reinforcing the existing recommendation with the concrete rate gap rather than just qualitative reasoning |
| New "Regulatory watch" callout (RBI draft regulations) | Add | Genuinely new authoritative information (Oct 2025 RBI draft) not reflected on the page; added as a clearly time-stamped, explicitly-labeled-as-draft note so it doesn't overstate current law — this is exactly the kind of forward-looking, dated content that signals freshness to both users and search engines without misrepresenting what's actually in force today |
| Meta description (layout.tsx) | Update | Reworded to lead with "Branch vs subsidiary" (matching the exact query order of the two ranking queries) and to name the specific comparison points now on the page (timelines, tax rates, DTAA) rather than a generic description |

## Search Intent Assessment
**Unchanged.** This remains a purely informational, non-commercial comparison query (no shopping/product competitors, no PAA box, no local pack observed). The near-miss was a depth/specificity gap against competitor content, not a wrong content type or format. No case for a full rewrite — the existing structure (comparison table + recommendation callout + related reading) already matches what's ranking; it just needed more concrete numbers and one missing comparison dimension (corporate tax rate).

## Not Changed (and why)
- **Legal status row** — accurate, unchanged, no competitor or regulatory reason to touch it.
- **Permitted activities row** — accurate under the current (still-in-force) 2016 RBI framework; not updated to reflect the draft 2025 regulations' proposed activities approach, since those aren't in force yet (see Regulatory watch callout instead, which flags this without changing the operative facts).
- **India-UK DTAA treatment row (dividend withholding rates)** — re-verified as accurate (10%/15%/20%); no change needed.
- **Page title / H1 / overall structure** — left alone. The page already ranks (position 30-39) with the current title, and a title change risks disrupting an existing, if weak, ranking signal for a topic where intent hasn't shifted. A full rewrite was considered and rejected: the page's structure already matches what's working in the SERP (comparison table format), so a full rewrite would have been unjustified — this was a targeted-update case, not a rewrite case.
- **LLP / EOR as a third structure** — some competitor content (BusinessSetup.in, Beacon Filing) frames this as a three-way comparison including LLP or Employer-of-Record. Not added here: the page's actual ranking queries ("branch or subsidiary uk", "branch vs subsidiary uk") are specifically two-way, and adding a third structure would dilute the page's tight match to that intent rather than strengthen it. Flagged as a possible separate future page, not a reason to expand this one.
- **Internal linking from the UK hub page / homepage** — the sitewide audit recommends adding internal links *to* this page from elsewhere on the site. That requires editing other pages (the UK entry hub, possibly the homepage), which is outside this page's own files and wasn't done here — flagging it back as a follow-up recommendation rather than actioning it unprompted.

## Sitemap
`lastModified` for `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india` in `app/sitemap.ts` was **not yet updated** — holding for explicit confirmation per instructions, since content was in fact changed (see edits above) and the date bump would be warranted once approved.
