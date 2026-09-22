# Pipeline Status — LLP in India

Topic: LLP in India (Limited Liability Partnership)
Slug: llp-in-india
Started: 2026-09-22
Context: Fourth and last of 4 entity-type pages flagged as a confirmed content gap in the 2026-09-21 technical/IA audit (https://claude.ai/artifact/B8BdAkx5J3oQYTyopoHW7s). The other 3 (Branch Office, Liaison Office, Project Office) are published at content-ops/pipeline/{branch,liaison,project}-office-in-india/.

## Important — this topic is NOT like the other 3
Branch/Liaison/Project Office are all RBI-establishment structures under FEMA 22(R)/2016-RB — extensions of a foreign parent with no separate legal identity. An LLP is fundamentally different: it is a full separate legal entity incorporated under the **Limited Liability Partnership Act, 2008**, registered with the MCA, with its own legal personality (can sue/be sued, own property, enter contracts in its own name). Foreign investment into an LLP is governed by a distinct FDI-in-LLP framework under FEMA 20(R) (not the FEMA 22(R) establishment regulations the other 3 pages are built on). Do not carry over the BO/LO/PO framing (Form FNC, AD-bank establishment approval, UIN, AAC) — those don't apply to an LLP. This page's regulatory spine is closer to the company-formation pillar's territory (incorporation, MCA/ROC) than to the other 3 entity-type pages, even though it belongs in the same "entity-type" URL/content pattern for site consistency.

## Cannibalization pre-check
Checked `topics.csv` — no row targets "LLP in India" as a primary keyword. Existing mentions: `/india-business-setup/company-formation`'s entityTypes array has one line ("Limited Liability Partnership (LLP) — A hybrid structure combining partnership flexibility with limited liability; less commonly used for FDI-funded operating businesses than a Private Limited Company"), and `/india-business-setup/page.tsx`'s entitySnapshot array has an equivalent one-liner. Neither is a deep treatment. No conflict — this new page is the dedicated deep-dive the brief pillar's one-liner already gestures at. Proceeding.

## Known facts to verify fresh (do not assume BO/LO/PO precedent applies)
- LLP Act, 2008 is the governing statute (not FEMA 22(R)).
- FDI in LLPs: 100% permitted under the automatic route only in sectors/activities where 100% FDI is permitted under the automatic route AND there are no FDI-linked performance conditions — this is a real, specific, narrower gate than standard company FDI and needs verification, not assumption.
- Minimum 2 designated partners, at least one resident in India (verify exact residency-day-count requirement, likely 120 days in the preceding financial year, but confirm — don't assume it matches the Companies Act director residency rule, which may differ).
- Designated Partner Identification Number (DPIN)/DIN requirement.
- LLP Agreement as the foundational document (analogous to MOA/AOA but distinct).
- Tax treatment: LLPs are taxed as partnership firms for domestic LLPs (30% flat, no DDT on profit distribution to partners since LLP profit share is exempt) — but a foreign-owned LLP's specific position needs checking, this may differ meaningfully from how a Private Limited subsidiary is taxed (22%/25.17% concessional company rate) — a genuine, real differentiation point if confirmed accurately.
- Annual compliance: Form 8 (Statement of Account & Solvency), Form 11 (Annual Return), audit threshold (turnover/contribution-based, verify current thresholds).
- Conversion: can a company convert to an LLP or vice versa? Real, searched question.

## Stage log
| Stage | Agent | Output | Status | Timestamp |
|---|---|---|---|---|
| 1 | seo-researcher | 01-serp-research.md | done | 2026-09-22 |
| 2 | keyword-intent-analyst | 02-keyword-intent-map.md | done | 2026-09-22 |
| 3 | competitor-reverse-engineer | 03-competitor-analysis.md | done | 2026-09-22 |
| 4 | content-gap-analyst | 04-content-gap.md | done | 2026-09-22 |
| 5 | au-corporate-strategist | 05-au-positioning.md | done | 2026-09-22 |
| Checkpoint 1 | — | — | APPROVED (standing authorization) | 2026-09-22 |
| 6 | content-architect | 06-content-architecture.md | done | 2026-09-22 |
| Checkpoint 2 | — | — | APPROVED (standing authorization) | 2026-09-22 |
| 7 | expert-content-writer | 07-draft.md | done | 2026-09-22 |
| 8 | seo-editor | 08-seo-edit.md | done | 2026-09-22 |
| 9 | fact-authority-checker | 09-fact-check.md | done — needs writer revision | 2026-09-22 |
| 9b | expert-content-writer (revision) | 09b-revision.md | done | 2026-09-22 |
| 10 | eeat-trust-reviewer | 10-eeat-review.md | pending | |
| 11 | final-seo-qc | 11-final-qa.md | pending | |

## Checkpoint approvals
Standing authorization from user: move through checkpoints without pausing for explicit sign-off unless a stage flags something genuinely concerning. Demonstrated working well across all 3 prior pipelines (2 real errors caught and fixed on Liaison Office; a UIN question properly investigated and correctly resolved on Project Office).

## Stage 6 notes
Full blueprint written to `06-content-architecture.md`. Key decisions requiring human attention at Checkpoint 2, not silently assumed:
- **URL decided as `/llp-in-india`** (top-level, matching the entity-type pattern of the 3 published siblings), not `/india-business-setup/llp-registration` — reasoned from the site's actual IA (the `/india-business-setup/*` sub-pages are organized by *stage of the setup journey*, not by entity type; LLP is an alternative entity type, the same category as Branch/Liaison/Project, all three of which are already top-level for that exact reason). Content *register/depth* still matches `company-formation`, per the brief — only the URL follows the entity-type precedent, not the content approach.
- **`app/sitemap.ts` updated** with a `/llp-in-india` entry (priority 0.9, changeFrequency "monthly", matching the 3 sibling entity-type pages rather than company-formation's 0.95/weekly, since this page's IA role is "entity-type deep-dive" not "pillar hub"). Flag for whoever runs Stage 7: **this sitemap entry now points at a route that doesn't exist yet** (`app/llp-in-india/page.tsx` has not been built) — it will 404 until Stage 7 ships the page. This was added now per explicit Stage 6 instructions; if Stage 7 is delayed materially, either revert this sitemap entry or prioritize the build.
- **Confirmed and flagged a real, pre-existing site gap**, not new to this page: none of the LLP mentions already live on the site (`company-formation`'s `entityTypes` array, the `india-business-setup` hub's `entitySnapshot` array, or the homepage `structures` card grid) are actually hyperlinked anywhere — all render as plain text or link to a generic `#inquiry-form` anchor. This same gap was already flagged for Branch/Liaison/Project Office in their own Stage 6 docs and was never fixed in the live code (verified by reading current `entityTypes`/`entitySnapshot`/`structures` arrays directly). Recommend Stage 7 (or a follow-up ticket) fix all four entity-type links in one batched edit rather than patching LLP alone.
- Cannibalization check: no existing dedicated page competes; only one-line mentions exist across 6 pages (`company-formation`, `india-business-setup` hub, homepage, `doing-business-in-india/entry-process`, `timeline-resources`, `blog/wholly-owned-subsidiary`) — none of them a deep treatment. New standalone page recommended, not a rewrite.
- Carried forward Stage 5's hard constraints into the outline placement: 120-day correction leads Section 2 (not buried), FDI-LLP(I) explicitly distinguished from FC-GPR in its own H3, tax section is reasoned/conditional (no flat rate table), audit threshold explicitly flagged for Stage 9 primary-source verification, and GST/Transfer Pricing/Valuation/Risk Advisory/Payroll/Virtual CFO are all excluded per Stage 5.
