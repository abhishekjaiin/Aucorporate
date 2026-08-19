# AU Corporate Multi-Agent SEO Content System — Architecture

Status: Designed and implemented as a working Claude Code agent team. No page content has been written — this system produces content only when explicitly run and approved. Built on branch `claude/au-corporate-seo-agents-hf4tvz`.

## 0. Core principle this whole system enforces

**Target what people actually search for — not how we describe our target customer.**

AU Corporate's buyer is a foreign investor entering India. Foreign investors mostly do not search "foreign company registration in India" — they search "company registration in India," "India subsidiary," "FDI in India," "GST registration," etc. The system separates, at every stage:

- **WHO we want as a client** (audience — decided by the strategist, Stage 5)
- **WHAT they actually search on Google** (keywords — decided only from evidence, Stage 2)

"Foreign," "international," "overseas" enters a keyword only when Stage 2 finds real evidence (SERP presence, PAA, Semrush data) that people search that phrasing — never by assumption. This rule is written directly into `keyword-intent-analyst.md` and re-checked at `content-architect.md` and `final-seo-qc.md`.

---

## 1-3. Agent architecture, count, and roles

**13 specialist agents + 1 master orchestrator = 14 total.** Each is a real Claude Code subagent (`.claude/agents/*.md`) with its own system prompt, restricted tool access, and a single responsibility — not one mega-prompt. The master orchestrator is implemented as a slash command (`/seo-page`) rather than a subagent, because subagents cannot spawn other subagents in Claude Code's model — orchestration has to happen at the level that has the `Agent` tool.

| # | Agent (file) | Role |
|---|---|---|
| 1 | `seo-researcher` | SERP research — ranking pages, PAA, SERP features, domain classification |
| 2 | `keyword-intent-analyst` | Keyword extraction, classification, intent, foreign-keyword-bias check |
| 3 | `competitor-reverse-engineer` | Why strong pages rank; strengths/weaknesses, without copying |
| 4 | `content-gap-analyst` | Minimum Coverage vs. Differentiation lists across competitors |
| 5 | `au-corporate-strategist` | Which real AU Corporate expertise genuinely helps this page |
| 6 | `content-architect` | Full page blueprint: title, meta, URL, structure, FAQ, links, CTA |
| 7 | `expert-content-writer` | Writes the page from the approved blueprint |
| 8 | `seo-editor` | On-page SEO tuning without over-optimization |
| 9 | `fact-authority-checker` | Verifies every factual/legal/regulatory claim against primary sources |
| 10 | `eeat-trust-reviewer` | Judges genuine expertise/trust signal, not just correctness |
| 11 | `final-seo-qc` | Final gate: 1-10 scores, Must Fix / Should Improve / Optional |
| 12 | `search-console-analyst` | Post-publish performance analysis from real GSC/GA4 data |
| 13 | `content-refresh-agent` | Targeted updates to published pages, not full rewrites |
| — | **Master:** `/seo-page` command | Orchestrates 1-11 in order, enforces both approval checkpoints, assembles final output |

Full responsibility, process, and output format for each agent is written into its own file under `.claude/agents/` — that's the authoritative spec, not a duplicate summary here. Read the agent file to see exactly what it does.

---

## 4. Exact responsibility of every agent

See each `.claude/agents/<name>.md` — every file states: role, input, step-by-step process, exact output structure, and guardrails specific to that agent (e.g. Agent 2 must write "Search volume not verified" rather than invent a number; Agent 9 must never fabricate a legal citation; Agent 11 must treat any unresolved fact-check flag as an automatic Must Fix).

## 5. Input/output of every agent

Every agent reads specific numbered files from `content-ops/pipeline/<topic-slug>/` and writes exactly one new numbered file, so the chain is auditable and resumable:

```
topic string
  → 01-serp-research.md            (Agent 1)
  → 02-keyword-intent-map.md       (Agent 2, reads 01)
  → 03-competitor-analysis.md      (Agent 3, reads 01-02)
  → 04-content-gap.md              (Agent 4, reads 01-03)
  → 05-au-positioning.md           (Agent 5, reads 02+04, + live site via Grep/Glob)
  ── CHECKPOINT 1 ──
  → 06-content-architecture.md     (Agent 6, reads 01-05, + live site)
  ── CHECKPOINT 2 ──
  → 07-draft.md                    (Agent 7, reads 05-06)
  → 08-seo-edit.md + edits 07      (Agent 8, reads 02+06+07)
  → 09-fact-check.md               (Agent 9, reads 07 post-edit)
  → 10-eeat-review.md              (Agent 10, reads 05+07+08+09)
  → 11-final-qa.md                 (Agent 11, reads everything)
  → [publish decision — human/deploy step, outside this pipeline]
  → performance/<month>.md         (Agent 12, reads live GSC/GA4 data)
  → refresh-<month>.md             (Agent 13, reads live page + 12 + fresh SERP)
```

## 6. How agents communicate

Not via shared memory or direct agent-to-agent messages — via **files on disk** in `content-ops/pipeline/<topic-slug>/`. This is deliberate:
- Every handoff is inspectable and diffable by a human at any point.
- A pipeline can be paused, resumed days later, or partially re-run (e.g. re-run just the writer after a Stage 6 revision) without re-running earlier stages.
- The master orchestrator (`/seo-page`), not the agents themselves, controls sequencing — agents don't need to know about each other, only about their own input files. This keeps each agent's prompt small and focused, which is exactly what the brief asked for ("do NOT create one large SEO prompt").

## 7-8. Sequential vs. parallel execution

**Sequential (required):** Stages 1→2→3→4→5→6→7→8→9→10→11. Each stage's output is a genuine input to the next — Agent 3 needs Agent 1's ranking pages, Agent 6 needs Agent 5's positioning, etc. This is a pipeline, not a fan-out.

**Can run in parallel / independently of the main pipeline:**
- `search-console-analyst` (Agent 12) — runs on a schedule or on demand against live data, independent of any single topic's pipeline.
- `content-refresh-agent` (Agent 13) — triggered per-page, independent of new-topic research.
- Research for **multiple different topics** can run concurrently (e.g. researching "GST registration" and "Transfer Pricing in India" at the same time) since they don't share state — the master orchestrator can be invoked multiple times, once per topic, each in its own pipeline folder.

There is no benefit to parallelizing *within* one topic's Stage 1-11 sequence — each stage's prompt is deliberately narrow so it runs fast; the cost is in sequencing correctness, not per-stage latency.

## 9. Human approval checkpoints

Two, both enforced in `/seo-page` (and `/content-brief` for checkpoint 1):

- **Checkpoint 1 — after Stage 5 (Research + Keyword Strategy + AU Positioning):** the user sees primary keyword + confidence, differentiation opportunities, AU positioning angle, cannibalization flags. Must reply `APPROVED` or `REVISE` (with which stage to redo).
- **Checkpoint 2 — after Stage 6 (Content Architecture):** the user sees the full blueprint. Must reply `APPROVED` or `REVISE`. **The writer (Stage 7) is contractually blocked from running without this** — `expert-content-writer.md` explicitly instructs the agent to check `STATUS.md` for a recorded approval and refuse to write if it's missing.

No automatic progression from research to publication is possible through this system as built.

---

## 10. Folder / project structure in Claude Code

```
.claude/
  agents/                          ← 13 specialist subagents (this session's new work)
    seo-researcher.md
    keyword-intent-analyst.md
    competitor-reverse-engineer.md
    content-gap-analyst.md
    au-corporate-strategist.md
    content-architect.md
    expert-content-writer.md
    seo-editor.md
    fact-authority-checker.md
    eeat-trust-reviewer.md
    final-seo-qc.md
    search-console-analyst.md
    content-refresh-agent.md
  commands/                        ← slash commands, incl. the master orchestrator
    seo-page.md                    ← /seo-page — full pipeline, both checkpoints
    seo-research.md                ← /seo-research — Stage 1 only
    keyword-analysis.md            ← /keyword-analysis — Stage 1-2
    competitor-gap.md              ← /competitor-gap — Stage 3-4
    content-brief.md               ← /content-brief — Stage 1-6, stops at Checkpoint 2
    write-page.md                  ← /write-page — Stage 7-11 (requires approved brief)
    seo-audit.md                   ← /seo-audit — Search Console performance review
    fact-check.md                  ← /fact-check — Stage 9 standalone, draft or live URL
    refresh-page.md                ← /refresh-page — Stage 13 standalone

content-ops/                       ← the pipeline's working data store (see its own README)
  README.md
  keyword-database/
    topics.csv                     ← master topic/keyword index, cannibalization source of truth
    README.md
  pipeline/<topic-slug>/           ← one folder per topic, numbered stage files + STATUS.md
  performance/                     ← Search Console audit outputs, one per run

docs/seo-agent-system/
  ARCHITECTURE.md                  ← this document
  BRAND_VOICE.md                   ← AU Corporate tone/voice reference used by Agents 7, 8, 10
```

This mirrors how the site itself is already organized (Next.js `app/` router with pillar + cluster directories) — the SEO system's data store follows the same instinct: one folder per unit of work, numbered stages, an index file at the top.

## 11. Master Agent instructions

Full text lives in `.claude/commands/seo-page.md` (`/seo-page <topic>`). Summary of what it does: slugifies the topic, checks `topics.csv` for cannibalization, runs Stages 1-11 via the `Agent` tool in strict sequence, persists every output, enforces both checkpoints with explicit `APPROVED`/`REVISE` handling (revise routes back to only the affected stage(s), not a full restart), loops back on unresolved Must-Fix/fact-check issues instead of presenting a page that isn't ready, and assembles the final numbered output format (SEO Opportunity → SERP Findings → Keyword Map → Content Gap → Content Strategy → Final Content → SEO Metadata → Internal Linking → Fact Check → Final SEO Score). It explicitly does **not** deploy the page — publishing to the live site is a separate, explicit action.

## 12. Individual agent instructions

Each of the 13 files under `.claude/agents/` is self-contained: role, input, process, exact output template, and guardrails. They are the actual specs, not summarized elsewhere, so that updating one agent's behavior means editing one file, not this document.

## 13. Recommended commands

Implemented exactly as requested, plus two extras that map real named agents to the existing structure:

| Command | Maps to |
|---|---|
| `/seo-page <topic>` | Full pipeline (master) |
| `/seo-research <topic>` | Stage 1 |
| `/keyword-analysis <topic>` | Stage 1-2 |
| `/competitor-gap <topic>` | Stage 3-4 |
| `/content-brief <topic>` | Stage 1-6, stops at Checkpoint 2 (the standalone "get a brief approved" flow) |
| `/write-page <topic>` | Stage 7-11, requires an already-approved brief |
| `/seo-audit [url]` | Stage 12 |
| `/fact-check <topic-slug-or-url>` | Stage 9, standalone (draft or already-live page) |
| `/refresh-page <url-or-topic-slug>` | Stage 13 |

## 14. Connecting the workflow to GitHub, Vercel, and Google Search Console

- **GitHub** (`mcp__github__*`, already connected): the pipeline's output (`07-draft.md` post-QA) becomes an actual Next.js page under `app/` only as an explicit follow-up step — e.g. "implement `06-content-architecture.md`'s approved page at its recommended URL." That change goes through the normal flow this session already follows: branch → commit → push, PR only if asked. `topics.csv`'s `target_url`/`stage` columns track researched-vs-published state.
- **Vercel** (`mcp__Vercel__*`, connecting): once a page is committed and pushed, Vercel's existing CI/CD (this repo already has `vercel.json`) builds and deploys automatically on merge — the SEO system doesn't need to trigger deploys itself. `get_deployment`/`get_runtime_errors`/`get_web_analytics` tools are available if the team wants a post-deploy sanity check folded into the workflow later.
- **Google Search Console** — reached in this environment via the **GenieSEO** MCP server (`mcp__GenieSEO__*`), not a direct GSC API integration. `search-console-analyst` (Agent 12) uses `get_search_analytics`, `get_search_by_page_query`, `get_advanced_search_analytics`, `compare_search_periods`, and `check_indexing_issues`; GA4 data comes from `run_ga4_report`. `/seo-audit` is the entry point. Sitemap submission/maintenance for newly published pages can go through `mcp__GenieSEO__submit_sitemap`/`manage_sitemaps` once a page is live — the repo already generates `app/sitemap.ts` programmatically, so a published page should be added there (as `content-refresh-agent` already does for `lastModified` updates) and then submitted.
- **Semrush** (`mcp__Semrush__*`, connecting): used by Agents 1-3 for real keyword volume, organic/competitor research, and backlink checks — this is what lets Agent 2 write actual numbers instead of "Search volume not verified" whenever data is available.

## 15. Preventing duplicate content and keyword cannibalization

Layered, not a single check:
1. **Before research starts**, every entry command checks `content-ops/keyword-database/topics.csv` for the same or a near-duplicate primary keyword/topic.
2. **Stage 5** (`au-corporate-strategist`) greps the live `app/` tree for existing AU Corporate pages that might already cover this ground, and records overlap explicitly.
3. **Stage 6** (`content-architect`) makes the actual call: new page vs. expand an existing one — and if a new page is justified, builds bidirectional internal links to the related existing page rather than letting two pages compete silently for the same query.
4. `topics.csv` is the durable record so this check doesn't rely on anyone's memory of what's been built.

## 16. Maintaining AU Corporate brand voice

`docs/seo-agent-system/BRAND_VOICE.md` is the single source of truth (principles, a do/don't table, enforcement responsibility per agent). `expert-content-writer` writes to it from the start; `eeat-trust-reviewer` is the actual gate that fails a draft for advertising language, generic AI filler, or unsupported hedging.

## 17. Maintaining a database of researched keywords/topics

`content-ops/keyword-database/topics.csv`, seeded with the site's actual existing 16 published pillar/cluster pages (from `app/sitemap.ts`, not invented). Columns: topic, slug, primary keyword, content type, target URL, pipeline stage, last updated, cannibalization notes. Updated automatically by `/seo-page` and `/content-brief` at the end of a run; the maintenance process is documented in `content-ops/keyword-database/README.md`.

## 18. Identifying new content opportunities automatically

Two feeders, both already wired into the agent set:
- **`search-console-analyst` (Agent 12)**, run via `/seo-audit` on a schedule: surfaces emerging queries with real impressions that no current page adequately covers, and near-miss queries (positions 5-30) worth a targeted push — both flagged as candidate new topics or refresh targets, backed by real GSC data rather than guesswork.
- **`content-gap-analyst` (Agent 4)**, every time a new topic runs through the pipeline: the Differentiation list it produces for one topic frequently surfaces adjacent sub-topics competitors don't cover — these are natural candidates for supporting cluster pages, which `content-architect` (Stage 6) already flags under "New supporting article needed?".

Both feed back into `topics.csv` as new candidate rows rather than being acted on automatically — new-topic creation still goes through the same two-checkpoint approval pipeline as anything else.

---

## What was deliberately not built yet

No page content. No live deployment changes to `app/`. This response is the architecture and the working agent/command scaffolding only, per the brief's explicit instruction not to start writing an article. Running `/seo-page "<topic>"` is the next step whenever you want to exercise the system end to end.
