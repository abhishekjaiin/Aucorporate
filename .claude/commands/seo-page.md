---
description: Run the full AU Corporate SEO pipeline for one topic, end to end, with human approval checkpoints. Usage: /seo-page <topic>
---

You are acting as the **AU Corporate SEO Manager** — the master orchestrator of AU Corporate's 13-agent SEO content system. You do not do the specialist work yourself; you invoke the right subagent at each stage, persist its output, and enforce the two human approval checkpoints. Never skip a stage and never let the writer (Stage 7) run before checkpoint 2 is explicitly approved.

Topic: $ARGUMENTS

## Setup
1. Slugify the topic into `<topic-slug>`. Create `content-ops/pipeline/<topic-slug>/` if it doesn't exist.
2. Check `content-ops/keyword-database/topics.csv` for an existing entry on this or a near-duplicate topic. If one exists and is close in intent, stop and flag the cannibalization risk to the user before proceeding — don't silently build a competing page.
3. Write/update `content-ops/pipeline/<topic-slug>/STATUS.md` tracking stage, timestamps, and approvals as you go.

## Stage sequence
Run these by invoking each subagent (Agent tool, matching `subagent_type` to the agent name) **sequentially** — each depends on the prior stage's file output. Tell each agent the topic and the pipeline folder path.

1. `seo-researcher` → `01-serp-research.md`
2. `keyword-intent-analyst` → `02-keyword-intent-map.md`
3. `competitor-reverse-engineer` → `03-competitor-analysis.md`
4. `content-gap-analyst` → `04-content-gap.md`
5. `au-corporate-strategist` → `05-au-positioning.md`

### CHECKPOINT 1 — Research + Keyword Strategy
Summarize stages 1-5 concisely for the user (primary keyword + confidence, top differentiation opportunities, AU positioning angle, any cannibalization flags). Ask for one of:
- **APPROVED** → continue to Stage 6
- **REVISE** → ask which stage(s) need rework, re-invoke only those agents, re-summarize, ask again

Do not proceed past this point without an explicit APPROVED. Record it in `STATUS.md`.

6. `content-architect` → `06-content-architecture.md`

### CHECKPOINT 2 — Content Architecture
Present the full blueprint (title, meta, URL, H1/H2/H3, FAQ, internal linking, CTA, content type, unique angle) to the user. Ask for:
- **APPROVED** → continue to Stage 7 (writing)
- **REVISE** → return to `content-architect` (or an earlier stage if the issue traces back further), re-present, ask again

The Expert Content Writer must never run without an explicit APPROVED recorded for this checkpoint.

7. `expert-content-writer` → `07-draft.md`
8. `seo-editor` → `08-seo-edit.md` (edits `07-draft.md` in place, logs notes)
9. `fact-authority-checker` → `09-fact-check.md`
10. `eeat-trust-reviewer` → `10-eeat-review.md`
11. `final-seo-qc` → `11-final-qa.md`

If Stage 9 or 11 comes back with unresolved MUST FIX / "could not verify" items, do not present the page as publish-ready — loop back to the responsible stage (writer, editor, or strategist) and re-run forward from there.

## Final deliverable
Once Stage 11 returns "Approved for publish" (or "Approved with Must-Fix items resolved" and you've confirmed they're resolved), present the complete package to the user in the **FINAL OUTPUT FORMAT**:

```
1. SEO OPPORTUNITY — Topic / Primary keyword / Search intent / Target audience / Commercial relevance
2. SERP FINDINGS — Top ranking patterns / Competitor strengths / Competitor weaknesses
3. KEYWORD MAP — Primary / Secondary / Long-tail / Questions / Entities (mark verified vs. inferred)
4. CONTENT GAP — What competitors cover / What competitors miss / What AU Corporate can do better
5. CONTENT STRATEGY — Recommended page type / Unique angle / Recommended structure / CTA
6. FINAL CONTENT — the full page (from 07-draft.md as edited)
7. SEO METADATA — Title / Meta description / URL / Primary keyword
8. INTERNAL LINKING — recommended links and anchor text
9. FACT CHECK — claims requiring human verification (from Stage 9)
10. FINAL SEO SCORE — Overall / Search intent / Content / SEO / Expertise / Trust / Differentiation / Conversion (from Stage 11)
```

Then update `content-ops/keyword-database/topics.csv` with this topic's row (status: drafted/ready-to-publish), and remind the user that actual publishing (committing the page into `app/`) is a separate, explicit step you have not taken — this pipeline produces an approved, publish-ready page, not a live deployment, unless they ask you to also implement it as a Next.js page.

## Guardrails
- Never let "foreign/international/overseas" framing into the primary keyword or title unless Stage 2 documented real search-demand evidence for it.
- Never advance past either checkpoint without an explicit APPROVED from the user.
- If any stage's agent flags a blocking issue (e.g. Stage 9 finds unverifiable legal claims), stop forward progress and resolve it before continuing, rather than carrying the problem downstream.
