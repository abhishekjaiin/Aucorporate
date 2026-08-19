---
description: Run only Stage 2 (keyword & intent mapping) for a topic. Usage: /keyword-analysis <topic>
---
Slugify "$ARGUMENTS" into `<topic-slug>`. If `content-ops/pipeline/<topic-slug>/01-serp-research.md` doesn't exist yet, invoke `seo-researcher` first to produce it, then invoke the `keyword-intent-analyst` subagent to produce `02-keyword-intent-map.md`. Present the keyword map to the user, highlighting which numbers are Semrush-verified vs. "Search volume not verified", and flag clearly whether any foreign/international-investor keyword framing was justified by real evidence or should be avoided.
