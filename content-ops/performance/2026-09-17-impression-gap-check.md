# Impression-Gap Check vs. Competitors — 2026-09-17

## Trigger
User asked why the site isn't getting impressions "as per competitor." This falls inside the re-audit window (2026-09-15 to 2026-09-19) that `2026-08-26-followup.md` itself scheduled, so this was meant to be a full fresh GSC + competitor pull.

## Tooling outage this session — could not do the planned fresh pull
- **GenieSEO (Search Console/GA4 connector) is disconnected this session** — no live impressions/positions/query data available. All GSC figures below are carried over from the two prior audits (`2026-08-sitewide.md`, `2026-08-26-followup.md`), not fresh numbers.
- **Ahrefs**: every relevant endpoint (`site-explorer-metrics`, `site-explorer-organic-competitors`, `site-explorer-domain-rating`, even the free `public-domain-rating-free`) returned `"Insufficient plan"` — the account tier doesn't cover these.
- **Semrush**: `domain_overview` returned `no_api_units` — account is out of API units, explicitly non-retryable per the tool's own error.
- Net effect: **no live competitor DR/traffic/keyword-overlap numbers could be pulled today.** Do not treat any competitor figure as verified unless it's cited to a source below — none are.

## What could still be checked (real, verified today)
1. **Re-read the two prior GSC audits in full** — they already contain a genuine, data-backed diagnosis (see Findings below), not superseded by anything found today.
2. **Canonical-tag bug (flagged twice, unresolved as of 2026-08-26) — checked in code, now confirmed fixed.** `/services`, `/blog/wholly-owned-subsidiary`, and `/blog/doing-business-india` all now declare their own self-referential `alternates.canonical` in their respective `layout.tsx` files. This must have happened incidentally during a later content-refresh batch this session; it was never explicitly logged as "the canonical fix." No further action needed here.
3. **Live WebSearch check on the branded query** ("AU Corporate" / "AU Corporate India business setup tax advisory") — theaucorp.com did not appear in the returned results at all; instead the results mixed in `zoominfo.com`, `linkedin.com` (third-party listings) and several **Australia-focused tax-advisory pages** (Crowe Australasia's `/au/` tax advisory, InCorp Australia, "how to start a business in Australia from India"). This is a real, observable signal, not a fabricated stat: **"AU" collides with the ISO country code / common abbreviation for Australia**, which plausibly explains why a search engine — and human searchers scanning the results — don't immediately anchor on theaucorp.com as an unambiguous, high-trust match for the exact brand query.

## Findings (synthesizing prior audits + today's check)

**"Why we're not getting impressions like a competitor" has three separate, real causes — not one:**

1. **Scale/maturity gap.** The last verified sitewide numbers (28-day window ending 2026-08-25) were ~971-1,004 total impressions and 15-16 clicks *for the entire site*. An established competitor (Treelife, KNM India, Nexdigm, IndiaFilings, etc.) has had years longer to accumulate indexed content, backlinks and domain trust. This gap can't be closed by a code or copy fix — it's a function of time and sustained content/link-building, and no tool available today could quantify it with real numbers (see outage above).

2. **A real, still-only-partially-recovered technical ranking hit.** Both prior audits documented a site-wide position collapse (most previously-ranking pages dropped 10-40+ positions) coinciding with a late-July 2026 relaunch. The canonical bug that was part of that picture is now fixed (see above), which is a genuine, if overdue, improvement — but there's no fresh GSC data today to confirm whether rankings have actually recovered since 2026-08-26's "still degraded, no recovery signal yet" verdict.

3. **The site's one strong asset — page-1 ranking for its own brand name — was still going almost entirely unclicked.** "au corporate" alone was 52% of *all* site impressions (508 of ~971-1,004) at position ~8.6, but only a 0.2% CTR (expected CTR at that position is roughly 2-3%, so this was underperforming even for its rank, not just "low because of position"). This was flagged as the single biggest recoverable lever in both prior audits and was never acted on. Today's live SERP check supports a plausible mechanism: the "AU" ambiguity plus third-party listings (LinkedIn, ZoomInfo) crowding the results for near-exact-brand queries.

## Action taken today
- **Homepage title/meta rewritten** (`app/layout.tsx` — `title.default`, `description`, and the matching `openGraph`/`twitter` fields) to disambiguate from "Australia" and read as a clear, trustworthy, established-firm result for the branded query:
  - Title: "AU Corporate | India Business Setup, Tax & Compliance Firm" (was "AU Corporate | India Entry, Tax & Business Advisory")
  - Description: "AU Corporate — a New Delhi-based advisory firm (est. 2016) helping foreign companies enter India with entity setup, tax, GST, FEMA compliance and payroll." (was a generic capability sentence with no location/founding-year trust signal)
  - Verified via clean `pnpm build`.
- No other page-level or content changes made — everything else in the prior audits' recommendation list (re-run full GSC audit, monitor UK subsidiary page, `/india-business-setup` seasoning, etc.) is unchanged and still pending fresh GSC access.

## What still needs to happen
1. **Re-run the full GSC site-wide audit the moment GenieSEO/GSC access is restored** — today is the last day of the window `2026-08-26-followup.md` itself scheduled (2026-09-15 to 2026-09-19). This is the only way to get real current impression/position numbers, confirm whether the site-wide collapse has recovered, and see whether today's title/meta change moves the brand-query CTR.
2. **Re-attempt Ahrefs/Semrush once account quota/plan allows** — needed for any real, cited competitor DR/traffic/keyword-count comparison. Nothing quantitative about a *specific* competitor should be stated to the user until one of these actually returns data.
3. Everything else in `2026-08-sitewide.md`'s recommendation table (the UK subsidiary-vs-branch near-miss, `/india-business-setup` seasoning check, the Australia-outsourcing content-gap candidate) remains open and unaffected by today's check.
