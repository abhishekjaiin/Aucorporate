# Refresh: Banking & Taxation Setup (India Business Setup cluster) — 2026-09

## Trigger
Site-wide word-count audit flagged `/india-business-setup/banking-taxation` at ~855 words of total visible content despite the August 2026 refresh (`refresh-2026-08.md`), which converted the page from a placeholder stub into six substantive cards but never added supporting page sections around them. That prior refresh was itself scoped narrowly (card content only), so the flagged gap is real rather than noise. Confirmed as a genuine trigger, not just a ranking blip, by (1) fresh SERP research showing competitor guides covering material this page never mentions at all, and (2) Search Console data showing the page has essentially no organic visibility (a single matched query in the last 90 days, at position 71, 0 clicks) — consistent with a page that is too shallow on core subtopics to rank for its own cluster's core terms.

Before starting, I verified the state of the page against a possible interrupted prior session: no `refresh-2026-09.md` existed yet, and the live page content matched exactly what `refresh-2026-08.md` described as its completed end-state (same six card descriptions, same phrasing throughout) — nothing beyond that had been added. This confirmed the interrupted attempt had not reached the edit or report-writing stage, so I proceeded as a fresh pass rather than resuming partial work.

## Current Page vs. Current SERP
WebSearch on "bank account opening India foreign company," "GST registration India foreign subsidiary," and "India banking and tax setup for foreign company subsidiary" (Sept 2026) surfaced a consistent set of subtopics that competitor guides (india-briefing, statrys, fastlegal, accorppartners, kbcca, rpareva, and others) cover but this page did not:
- **The actual corporate income tax rate.** A page titled "Banking & Taxation Setup" never stated what corporate tax an Indian subsidiary pays — arguably the single most basic fact a foreign CFO searching this cluster wants. Competitor guides lead with this (25% domestic rate, 22% concessional under the erstwhile Section 115BAA regime, 15% for new manufacturing entities).
- **Withholding tax on repatriation** (dividends, royalties, fees for technical services back to the parent) and DTAA relief — covered in detail on competitor pages and already referenced generically elsewhere on this site (`company-formation`'s FAQ) but absent here, despite "taxation" being half the page's own title.
- **FAQ-style content** matching the People-Also-Ask pattern visible across all three SERPs (timeline questions, "is GST mandatory," "do we need to withhold tax on dividends") — this page had no FAQ section at all, unlike `company-formation` and `gcc-setup-india`, which both use the site's `FaqAccordion` + FAQPage schema pattern.
- Bank-account opening *timelines* are heavily cited by competitors, but the specific day-ranges quoted across sources were inconsistent (3-7, 7-14, 7-15, 8-10 working days) — treated as unverifiable-as-a-single-figure and deliberately not hard-coded into the new copy (see Not Changed / hedging note below).

## Current Page vs. Search Console Data
Pulled via GSC (`sc-domain:theaucorp.com`, 90 days, query+page dimensions). The banking-taxation URL appears in exactly one row: query "agreements, tax, and banking," 1 impression, 0 clicks, average position 71. That is effectively a non-signal on its own (one impression is not a trend), but it corroborates the SERP-gap finding above — a page this shallow on its own named subtopics (corporate tax rate, withholding tax) has no real path to ranking for the terms its own title implies. This is used as corroborating evidence alongside the SERP and word-count findings, not as a standalone trigger, consistent with the guardrail against refreshing on ranking noise alone.

## New Authoritative Information Found
- **Corporate tax rates**: confirmed via multiple corroborating secondary sources (ClearTax, IndiaFilings, 5paisa, Bajaj Finserv) — concessional regime for domestic companies at a flat 22% (plus surcharge and cess), optional, no turnover limit, in exchange for forgoing certain exemptions/deductions; once elected, generally continues in later years. Standard (non-concessional) rate otherwise 25% or 30% depending on turnover. A narrower 15% concessional rate applies to new manufacturing companies meeting specific conditions. Cited without a specific Income Tax Act, 2025 section number, consistent with this site's existing hedging practice for renumbered-Act citations (see `refresh-2026-08.md` and `gcc-setup-india` pipeline notes).
- **Withholding tax on repatriation**: confirmed via PwC Tax Summaries, Mondaq, and multiple tax-advisory sources — domestic law sets withholding at 20% (plus surcharge and cess) on dividends and on royalty/fees for technical services paid to non-residents (the royalty/FTS rate was doubled from 10% to 20% by the Finance Act, 2023, effective 1 April 2023). DTAA relief is available where the treaty rate is lower, subject to the recipient furnishing a Tax Residency Certificate and, generally, Form 10F. This is consistent with, and expands on, the DTAA language already live on `company-formation`'s FAQ.
- Bank-account opening timeline figures were **not** hard-coded — secondary sources gave inconsistent ranges (3-7 to 8-10+ working days) with no single authoritative figure, so the new FAQ answer describes the sequence and the apostille bottleneck qualitatively instead, consistent with this site's existing practice of hedging figures that aren't cleanly verifiable against a primary source.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Hero stat strip (4 `ClickableReveal` cards) | add | New: AD Cat-I bank requirement, 22% concessional tax rate, Rs 20L GST threshold, single SPICe+ filing — scannable summary matching the stat-strip pattern already used on `company-formation`, using only figures verified elsewhere in this refresh or already live on the site |
| "Corporate Income Tax Rates for a Foreign-Owned Indian Company" section | add | Closes the single largest content gap identified against the SERP — the page never stated the actual corporate tax rate despite "Taxation" being in its title |
| "Repatriating Profits: Withholding Tax and DTAA Relief" section | add | Closes a second SERP-identified gap; extends the DTAA concept already live on `company-formation` into this page's own subject matter (dividends/royalty/FTS withholding, TRC/Form 10F) |
| FAQ section (6 Q&As) + FAQPage JSON-LD | add | Matches the PAA pattern observed across all three SERPs and the FAQ pattern already used on `company-formation` and `gcc-setup-india`; covers bank-account timeline, GST mandatoriness, corporate tax rate, dividend/royalty withholding, PAN/TAN sequencing, and a synthesis "biggest mistake" question |
| "Continue Your Setup" link grid | update | Expanded from 2 links to 4 — added reciprocal links to `/india-business-setup/company-formation` and `/india-business-setup/regulatory-compliance` (both of which already link into this page), closing a one-directional internal-linking gap |
| 6-card grid, hero copy/headline, page section order | unchanged | These already carry real, accurate substance from the August refresh; no SERP or GSC finding justified touching them |

## Search Intent Assessment
Unchanged. The query set remains informational/consideration-stage — searchers want the sequence and mechanics of bank account opening, GST, and tax registration, not vendor comparison. No new commercial SERP features (shopping results, comparison tools) were observed. What changed is depth of coverage expected at this intent stage: the SERP has moved toward comprehensive single-page guides (rates, thresholds, FAQ) rather than short topic overviews, which is a completeness gap, not an intent shift.

## Not Changed (and why)
- The six-card grid content from the August refresh — already substantive and accurate; re-verified rather than rewritten (GST thresholds, SPICe+ mechanics, AD Category-I/FIRC/FC-GPR chain, Income Tax Act 2025 hedge, Ind AS criteria, FLA/3CEB obligations all still current).
- Hero headline and intro paragraph — accurately frame the page; the gap was in missing sections below, not the intro.
- Specific bank-account-opening day-count — deliberately left unhedged/qualitative rather than picking one of several inconsistent secondary-source figures (3-7 vs. 7-15 vs. 8-10 working days); described the apostille bottleneck qualitatively instead in the new FAQ.
- Exact Income Tax Act, 2025 section numbers for the concessional corporate tax regime or TDS on salary — consistent with the site's existing hedging practice, cited by rate and mechanism, not by renumbered section.
- No individual person, partner, or associate named anywhere in the new copy, consistent with current site-wide policy.
- `app/sitemap.ts` — updated as part of this task's normal workflow guidance would apply, but per explicit task instruction for this run, sitemap.ts was **not** touched.

## Verification Note (figures left hedged pending human/professional sign-off)
- Exact bank-account opening turnaround time (working days) — multiple inconsistent secondary-source ranges, described qualitatively instead of as a hard figure.
- Exact Income Tax Act, 2025 section numbers for the 22%/15% concessional corporate tax regimes and for withholding tax on non-resident payments — cited by rate and mechanism only, consistent with existing site practice.

## Rough Word Count
- Before this refresh: ~855 words (per the triggering site-wide audit; consistent with the August refresh's six-card-only content).
- After this refresh: ~1,650-1,750 words of visible body copy (six cards unchanged + two new prose sections + six-item FAQ + expanded stat strip labels/values + expanded link grid), roughly double the pre-refresh count, driven entirely by closing identified SERP/GSC gaps rather than padding.
