---
description: Run a Search Console performance audit for one URL or the whole site, using real GenieSEO/GA4 data. Usage: /seo-audit [url]
---
Invoke the `search-console-analyst` subagent with the scope given in "$ARGUMENTS" (a specific published URL) or, if empty, the whole site (theaucorp.com). It will write `content-ops/performance/<YYYY-MM>-<scope>.md`. Present the recommendations table to the user, and for any page it flags for refresh, ask whether to proceed with `/refresh-page <url>` now or later — do not auto-trigger a refresh without confirmation.
