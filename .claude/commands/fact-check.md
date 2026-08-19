---
description: Run only the fact & authority check against an existing draft or live page. Usage: /fact-check <topic-slug-or-url>
---
If "$ARGUMENTS" matches an existing `content-ops/pipeline/<topic-slug>/07-draft.md`, invoke `fact-authority-checker` against it and write/refresh `09-fact-check.md`. If it's a live URL instead, fetch the page content first (WebFetch), pass it to `fact-authority-checker` as the material to verify, and write the result to `content-ops/performance/fact-check-<slug>-<date>.md`. Present the Claims That Could Not Be Verified and Needs Human Professional Verification tables prominently — these are the actionable output.
