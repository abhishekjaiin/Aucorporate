# AU Corporate — Technical, Content & IA Audit (Part 2)
Date: 2026-09-21. Full report: https://claude.ai/artifact/B8BdAkx5J3oQYTyopoHW7s

This is a log entry, not a duplicate of the report — see the artifact for the full 20-part audit (technical SEO issues, content issues, keyword-intent map, site architecture, page templates, internal linking, metadata, content gaps, URL-change review, priority roadmap). Recorded here so future sessions working from this repo have a pointer to it and a summary of what changed in code.

## Fixed in this pass (both committed to `main` and synced to `claude/au-corporate-seo-agents-hf4tvz`)
- `9906dff` — `components/CountUp.tsx` initialized its animated stat display at `0` and only counted up once scrolled into view client-side. Verified against the actual production build HTML (`.next/server/app/hr-services.html`) that this rendered as literal `0+` / `0%` server-side, i.e. what a crawler or the pre-hydration first paint sees. Fixed by initializing at the real value and only resetting to 0 when the animation trigger actually fires. This is almost certainly the "0+ values" referenced in the audit brief.
- `/hr-services` was missing the site's standard `Breadcrumb` (and its `BreadcrumbList` schema) — added, matching the pattern on `/outsourcing` and `/arbitration-services`.

## Verified clean (no action needed)
- Canonical tags present and self-referencing on all 61 indexable routes.
- No `noindex` anywhere; root layout sets `index: true, follow: true` as the site default.
- `robots.ts` / `sitemap.ts` both clean; non-www → www redirect and 3 legacy-URL redirects are single-hop, no chains.
- BreadcrumbList schema is correctly implemented (component-level, not per-page — so it doesn't show up in an `app/`-only grep; it lives in `components/Breadcrumb.tsx` and is used by 55 of 61 pages, including every country hub/sub-page via `RegionClusterTemplate`).
- The `/blog/doing-business-india` vs `/doing-business-in-india` cannibalisation flag from the previous inventory pass is a confirmed false positive (already established in the prior session; re-confirmed here).

## Real gaps confirmed (see artifact for full detail + priority)
- No standalone page for Branch Office, Liaison Office, Project Office, or LLP in India — all four are mentioned only inside other pages' comparison tables/body content, never as a dedicated page with its own title/meta targeting that term.
- Singapore/Germany/Japan/China country hubs have 0 of the 4-5 sub-pages the US/UK hubs have (FEMA compliance, DTAA/transfer pricing, cost-timeline, how-to-incorporate).
- No `Person` schema or author/reviewer bios anywhere — blocked on AU Corporate supplying real names/credentials, not a build task.
- A few numeric trust claims (`/about`'s "30+ years of collective experience"; `/hr-services`' "5,000+ Employees Managed", "200+ Clients Served", "99.9% Payroll Accuracy") have no source I can verify from the codebase — flagged for owner confirmation rather than left as-is or invented/changed unilaterally.

## Explicitly NOT changed
- No URLs were changed. Every URL resolves to real, indexed, self-canonicalizing content; the brief was explicit that URLs shouldn't move without a specific, evidenced reason and sign-off, and none of the findings here rose to that bar.
- No new pages were created in this pass (Branch/Liaison/Project Office, LLP, industry pillars, geography sub-clusters) — these need the same research/fact-check rigor as the AI/SaaS page pipeline earlier in this engagement, not a quick template fill, and are logged as the next roadmap items rather than started unilaterally.
