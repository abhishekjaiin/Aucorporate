# AU Corporate SEO Content Ops

This directory is the working data store for the AU Corporate multi-agent SEO system defined in `.claude/agents/` and `.claude/commands/`. It is not part of the deployed website — it's the pipeline's memory, so every stage can hand off to the next and so the team never re-researches a topic it already covered.

See `docs/seo-agent-system/ARCHITECTURE.md` for the full system design.

## Structure

```
content-ops/
  keyword-database/
    topics.csv       — master index of every researched/published topic (see below)
    README.md        — how to maintain it, cannibalization-check process
  pipeline/
    <topic-slug>/
      STATUS.md               — pipeline stage, approvals, timestamps for this topic
      01-serp-research.md      — Agent 1 output
      02-keyword-intent-map.md — Agent 2 output
      03-competitor-analysis.md— Agent 3 output
      04-content-gap.md        — Agent 4 output
      05-au-positioning.md     — Agent 5 output
      ── Checkpoint 1 (human approval) ──
      06-content-architecture.md — Agent 6 output
      ── Checkpoint 2 (human approval) ──
      07-draft.md               — Agent 7 output, edited in place by Agent 8
      08-seo-edit.md            — Agent 8 notes
      09-fact-check.md          — Agent 9 output
      10-eeat-review.md         — Agent 10 output
      11-final-qa.md            — Agent 11 output
      refresh-<YYYY-MM>.md      — Agent 13 output, created on each refresh
  performance/
    <YYYY-MM>-<scope>.md   — Agent 12 (Search Console) output, one per audit run
```

A `<topic-slug>` folder is created the first time `/seo-research`, `/content-brief`, or `/seo-page` runs for a topic. Re-running any command for the same slug reuses existing stage files rather than re-researching from scratch — check `STATUS.md` first.

## Why this exists (not just repo memory)

- **Prevents duplicate work**: before researching a new topic, agents and commands check `topics.csv` for an existing or near-duplicate entry.
- **Prevents keyword cannibalization**: the Content Architect (Stage 6) and the AU Corporate Strategist (Stage 5) both cross-check `topics.csv` and the live site (via Grep/Glob over `app/`) before recommending a new page, and will recommend expanding an existing page instead of creating a competing one when topics overlap.
- **Makes checkpoints real**: `STATUS.md` per topic is the source of truth for whether Checkpoint 1 / Checkpoint 2 were actually approved — the writer agent refuses to run without it.
