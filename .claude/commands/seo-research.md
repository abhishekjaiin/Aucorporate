---
description: Run only Stage 1 (SERP/competitor research) for a topic. Usage: /seo-research <topic>
---
Slugify "$ARGUMENTS" into `<topic-slug>`, ensure `content-ops/pipeline/<topic-slug>/` exists, then invoke the `seo-researcher` subagent (Agent tool) with the topic and that output path. Present the resulting `01-serp-research.md` summary to the user directly — do not proceed to keyword analysis or any later stage unless asked.
