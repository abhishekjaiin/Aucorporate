# Refresh: Banking & Taxation Setup (India Business Setup cluster) — 2026-08

## Trigger
Scheduled review flagged by the parent agent, with actual findings: the live page at `/india-business-setup/banking-taxation` was a stub — a one-paragraph generic hero followed by a 6-card grid where every card carried the identical placeholder sentence "Critical component of your financial setup" (~79 words of real content total, no card-level substance). `content-ops/keyword-database/topics.csv` shows this URL only as a pre-pipeline seed entry ("Existing live page — seed entry"), with no prior `content-ops/pipeline/` history — this is effectively a first real pass, framed as a refresh because the page and route already exist and rank.

## Current Page vs. Current SERP
SERP research for "India business banking and taxation," "foreign company business bank account India," "PAN TAN GST registration foreign company India," and related queries (WebSearch, Aug 2026) shows competing content consistently covering: (1) the specific document list and AD Category-I bank requirement for opening a corporate account as a foreign-owned entity, (2) PAN issued via the integrated SPICe+ form rather than as a separate application, (3) GST mandatory-vs-voluntary registration nuance (especially for entities billing only an overseas parent), and (4) TDS-on-salary obligations now sitting under the Income Tax Act, 2025 rather than the 1961 Act. The stub page covered none of this — it named six topics but gave zero real information on any of them, which is a clear intent mismatch against a SERP that rewards specificity (documents, thresholds, sequencing) over topic labels.

## Current Page vs. Search Console Data
No Search Console data was available/pulled for this specific check — the trigger here is a structural content-completeness gap identified directly by the parent agent (stub content), not a ranking or CTR signal. Per the guardrail against refreshing on ranking noise alone, this refresh is justified on the regulatory/completeness basis described above, not on a GSC signal.

## New Authoritative Information Found
- The Income Tax Act, 2025 replaced the Income Tax Act, 1961 with effect from 1 April 2026 (already in force as of this refresh). TDS on salary, formerly Section 192, is now covered under a renumbered section of the 2025 Act. Consistent with this site's existing hedging practice for Income Tax Act section citations (see `gcc-setup-india`, which explicitly hedges "tax-section citation" as one of its pending-verification figures), the new page text names the Act and its effective date but does **not** cite a specific section number for salary TDS.
- GST mandatory registration threshold: Rs 20 lakh aggregate turnover for a services business in most states (Rs 40 lakh for goods-only suppliers; lower thresholds in special-category states). This figure is already used as a hard number elsewhere on the live site (`gcc-setup-india`), so it is reused here without additional hedging.
- PAN and TAN are both issued automatically as part of the integrated SPICe+ incorporation filing with the MCA, alongside the Certificate of Incorporation — not as separate post-incorporation applications.
- Corporate bank accounts for foreign-owned entities must be opened with an RBI-authorised AD (Authorised Dealer) Category-I bank, since that is the channel for receiving FDI; the bank issues a Foreign Inward Remittance Certificate (FIRC) on receipt of the parent's remittance, and the resulting share allotment must be reported to RBI via Form FC-GPR on the FIRMS portal.
- PF and ESI registration thresholds (employee headcount) and exact FC-GPR reporting windows were **not** cited as hard numbers — consistent with the same hedging already applied on `gcc-setup-india` (its pipeline notes explicitly list "PF/ESI thresholds" and "FC-GPR/FC-TRS deadlines" among figures intentionally left unhedged-pending-verification). The new copy describes these obligations ("once headcount crosses the applicable statutory thresholds," "within a defined reporting window") without inventing specific figures.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| 6-card grid ("Financial Setup Components") | rewrite (content only, structure unchanged) | Every card previously held the identical placeholder sentence with zero real information; replaced with 3-4 substantive sentences per card covering what the SERP and the task brief require |
| Banking Account Setup card | add | New content: incorporation-first sequencing, required KYC/board resolution/apostille documents, AD Category-I bank requirement, FIRC and FC-GPR mechanics for FDI inflow |
| GST Registration card | add | New content: mandatory vs. voluntary registration, Rs 20 lakh/Rs 40 lakh thresholds, LUT/zero-rated export use case for foreign-parent-billing entities |
| Tax Registration (PAN/TAN) card | add | New content: what each number is for, and that both are issued via SPICe+ at incorporation rather than separately |
| Payroll & Salary Processing card | add | New content: salary TDS under the Income Tax Act, 2025 (no section number cited — hedged), PF/ESI as headcount-triggered obligations (thresholds not hard-coded — hedged) |
| Accounting System card | add | New content: statutory books under the Companies Act, 2013, and Ind AS applicability criteria (net worth/listing — no specific number cited) |
| Annual Filing card | add | New content: statutory audit, ROC annual filings, AGM, ITR, plus the two FDI-specific annual obligations (FLA return, Form 3CEB) that apply to foreign-owned entities specifically |

No hero copy, page structure, "Continue Your Setup" links, or component layout were changed — this was a targeted content-in-place fix (converting the card data from a flat string array to title/description objects), not a redesign or rewrite of the page shell.

## Search Intent Assessment
Unchanged. The query "India business banking and taxation" and its adjacent variants remain purely informational/consideration-stage — searchers want to understand the sequence of registrations and obligations, not compare vendors. No new commercial competitors or SERP features (no shopping results, no video carousel) were observed that would suggest a shift toward transactional intent. The fix required was depth, not a different content type.

## Not Changed (and why)
- Hero paragraph and headline — already accurately frame the page's purpose; the gap was entirely in the card content below, not the intro.
- "Continue Your Setup" links to `/doing-business-in-india/post-incorporation` and `/contact` — still the correct next steps; no dead links or better internal-linking targets identified.
- Page layout/structure (hero → 6-card grid → related links) — explicitly preserved per task constraint; this was a content fill-in, not a redesign.
- No individual person, partner, or associate named anywhere in the new copy, per current site-wide policy (also applied retroactively to `gcc-setup-india` and the `india-entry-for-*-companies` pages).

## Verification Note (figures left hedged pending human/professional sign-off)
- Exact Income Tax Act, 2025 section number for salary TDS (multiple secondary sources point to a renumbered section, but not cited on-page per existing site hedging practice).
- Exact PF (Provident Fund) and ESI (Employees' State Insurance) headcount thresholds — described qualitatively only.
- Exact FC-GPR reporting deadline (days from share allotment/inward remittance) — described as "a defined reporting window," consistent with existing site language on `gcc-setup-india`.
