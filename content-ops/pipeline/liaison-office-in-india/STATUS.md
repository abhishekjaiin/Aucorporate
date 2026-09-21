# Pipeline Status — Liaison Office in India

Topic: Liaison Office in India
Slug: liaison-office-in-india
Started: 2026-09-21
Context: Second of 4 entity-type pages flagged as a confirmed content gap in the 2026-09-21 technical/IA audit (https://claude.ai/artifact/B8BdAkx5J3oQYTyopoHW7s). Same pattern as Branch Office in India (published at /branch-office-in-india, content-ops/pipeline/branch-office-in-india/): no standalone page exists anywhere for Liaison Office, only mentions inside comparison tables on country pages and the newly-published Branch Office page.

## Cannibalization pre-check
Checked `topics.csv` — no row targets "liaison office in India" as a primary keyword. The Branch Office page (`/branch-office-in-india`) now covers LO only in a brief comparison section ("Liaison Office — a representative/communication channel only..."), same relationship as the 3 country subsidiary-vs-branch pages have to the Branch Office page: this new page is the upstream, LO-specific canonical reference; Branch Office's page should eventually link into it (implementation follow-up, not done automatically). No overlap. Proceeding.

## Known facts carried forward from the Branch Office pipeline (do not re-derive from scratch)
- FEMA 22(R)/2016-RB is the current, operative regulation. Draft RBI Establishment Regulations, 2025 are NOT notified as of 2026-09-21 (confirmed twice in the Branch Office pipeline).
- Liaison Offices ARE confirmed (via WebSearch in the Branch Office pipeline, Stage 9) to have a fixed validity/renewal period: commonly cited as 3 years, with a 2-year cycle for NBFC and construction-development sector applicants, renewable through the AD Category-I bank. This is the opposite situation from Branch Offices (where no numeric cycle could be confirmed) — Stage 9 (fact-authority-checker) should still independently re-verify this for the LO pipeline rather than assume it's settled, but it is NOT the same open question as Branch Office's.
- LO cannot generate any revenue in India — this is the core definitional fact distinguishing it from a Branch Office.

## Stage log
| Stage | Agent | Output | Status | Timestamp |
|---|---|---|---|---|
| 1 | seo-researcher | 01-serp-research.md | done | 2026-09-21 |
| 2 | keyword-intent-analyst | 02-keyword-intent-map.md | pending | |
| 3 | competitor-reverse-engineer | 03-competitor-analysis.md | pending | |
| 4 | content-gap-analyst | 04-content-gap.md | pending | |
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
Standing authorization from user (established during the Branch Office pipeline, 2026-09-21): move through checkpoints without pausing for explicit sign-off unless a stage flags something genuinely concerning.
