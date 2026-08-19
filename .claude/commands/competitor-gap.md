---
description: Run competitor reverse-engineering + content gap analysis (Stages 3-4) for a topic. Usage: /competitor-gap <topic>
---
Slugify "$ARGUMENTS" into `<topic-slug>`. Ensure `01-serp-research.md` and `02-keyword-intent-map.md` exist in `content-ops/pipeline/<topic-slug>/` (run `seo-researcher` and `keyword-intent-analyst` first if missing). Then invoke `competitor-reverse-engineer` to produce `03-competitor-analysis.md`, followed by `content-gap-analyst` to produce `04-content-gap.md`. Present both the Minimum Coverage list and the Differentiation list to the user as the key output — this is the input the AU Corporate Strategist will use next.
