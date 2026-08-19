---
description: Draft, SEO-edit, fact-check, EEAT-review, and QA a page from an already-approved content architecture (Stages 7-11). Usage: /write-page <topic>
---
Slugify "$ARGUMENTS" into `<topic-slug>`. Require that `content-ops/pipeline/<topic-slug>/06-content-architecture.md` exists and that `STATUS.md` records Checkpoint 2 as APPROVED — if not, stop and tell the user to run `/content-brief <topic>` (or `/seo-page <topic>`) and approve the architecture first; do not draft against an unapproved blueprint.

Then run, in order: `expert-content-writer` → `07-draft.md`; `seo-editor` → edits it + `08-seo-edit.md`; `fact-authority-checker` → `09-fact-check.md`; `eeat-trust-reviewer` → `10-eeat-review.md`; `final-seo-qc` → `11-final-qa.md`. If Stage 9 or 11 raises unresolved MUST FIX items, loop back to the responsible stage before presenting results. Present the final page plus the Stage 11 scorecard to the user in the FINAL OUTPUT FORMAT (see `.claude/commands/seo-page.md`).
