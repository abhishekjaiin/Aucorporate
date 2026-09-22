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
| 5 | au-corporate-strategist | 05-au-positioning.md | pending | |
| Checkpoint 1 | — | — | pending | |
| 6 | content-architect | 06-content-architecture.md | pending | |
| Checkpoint 2 | — | — | pending | |
| 7 | expert-content-writer | 07-draft.md | pending | |
| 8 | seo-editor | 08-seo-edit.md | pending | |
| 9 | fact-authority-checker | 09-fact-check.md | pending | |
| 10 | eeat-trust-reviewer | 10-eeat-review.md | pending | |
| 11 | final-seo-qc | 11-final-qa.md | pending | |

## Checkpoint approvals
Standing authorization from user: move through checkpoints without pausing for explicit sign-off unless a stage flags something genuinely concerning. Demonstrated working well across all 3 prior pipelines (2 real errors caught and fixed on Liaison Office; a UIN question properly investigated and correctly resolved on Project Office).
