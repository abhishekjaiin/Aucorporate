---
description: Refresh an existing published page against current SERP, Search Console data, and new authoritative information. Usage: /refresh-page <url-or-topic-slug>
---
Resolve "$ARGUMENTS" to a live page under `app/` and, if it exists, its `content-ops/pipeline/<topic-slug>/` history. Invoke the `content-refresh-agent` subagent with that page. It will research the current SERP, pull Search Console data, check for regulatory/factual changes, and make targeted edits (not a full rewrite unless it explicitly justifies one). Review its `refresh-<YYYY-MM>.md` output with the user before treating the change as final, and confirm before it updates `lastModified` in `app/sitemap.ts` if that wasn't already done automatically.
