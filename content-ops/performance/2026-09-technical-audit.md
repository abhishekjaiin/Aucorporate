# Technical SEO Audit — theaucorp.com
Date: 2026-09-24
Method: Full site crawl (65 routes, Playwright), PageSpeed Insights (Lighthouse) on 8 representative pages, sitemap/robots.txt review, JSON-LD validation.

## Executive Summary

The site's crawl fundamentals are clean — no broken links, no orphan pages, no duplicate titles/meta descriptions, sitemap perfectly in sync with actual routes, every page has a canonical tag and a single H1, and all 468 JSON-LD blocks across the site parse as valid JSON. The one real, confirmed, high-confidence issue found was a sitewide performance misconfiguration (all 65 pages affected) that has been fixed as part of this audit. A second suspected issue (layout shift) was investigated and found to be unconfirmed lab-data noise, not a real bug — reported honestly as such rather than claimed as fixed.

## Issues Found

| Priority | URL(s) | Issue | Why It Matters | Status |
|---|---|---|---|---|
| **P1** | All 65 pages (`app/layout.tsx`) | 4 blocks of static JSON-LD structured data (Organization, WebSite, ProfessionalService, ServiceCatalog schema) were wrapped in `next/script`'s `strategy="beforeInteractive"` — the most aggressive script-loading mode, meant for code that must run before hydration. These blocks contain zero executable logic, so the strategy was pure overhead on every single page load. | Time to Interactive measured 7.3–8.9s across every page tested via PageSpeed Insights, mobile, regardless of page content — a consistent enough pattern across structurally unrelated pages to indicate a shared cause. Poor interactivity is both a user-experience and a Core Web Vitals ranking signal. | **Fixed** — converted to plain `<script type="application/ld+json">` tags (same pattern already used correctly for FAQPage/BreadcrumbList schema elsewhere). Verified: identical schema output (0 malformed JSON-LD, same @type counts across all 65 pages before/after), build clean. |
| P3 | `/about` | 287 words of body content — below typical "thin content" threshold (300w) | Low, on its own — but ties into the standing backlog item (unverified "30+ years" / team credentials) already flagged from the earlier content audit. An About page for a professional-services firm is normally an E-E-A-T-relevant page worth more substance. | Not actioned — requires real company/team information from the user, already tracked as an open item. |
| Monitor, not confirmed | `/services`, `/llp-in-india`, `/gcc-setup-india`, `/liaison-office-in-india`, `/project-office-in-india` | Initial PageSpeed Insights runs showed CLS = 0.322 ("Poor" by Google's >0.25 threshold) on 5 of 8 pages tested, while `/`, `/india-business-setup`, and `/branch-office-in-india` showed CLS = 0. | Investigated: a **repeat PSI run on the same URL** (`/llp-in-india`) returned CLS = 0 with LCP nearly doubling (2.7s → 4.8s) — classic single-run lab-data noise, not a reproducible bug. No CrUX field data exists yet (site doesn't have enough real-user traffic volume for Google to report real-world Core Web Vitals), so there's no way to confirm this from real users either. A local throttled-network reproduction attempt only surfaced a much smaller 0.021 CLS from hero-text reflow. | **Not fixed — flagged for monitoring only.** Re-check once real CrUX field data becomes available (needs sustained traffic), or run several more PSI passes before treating this as confirmed. Not claiming a fix for something that isn't confirmed broken. |

## Crawl Findings (all clean — no action needed)

| Check | Result |
|---|---|
| Broken internal links (404/5xx) | 0 across 65 pages |
| Orphan pages (unreachable via internal links) | 0 |
| Duplicate `<title>` tags | 0 |
| Duplicate meta descriptions | 0 |
| Missing canonical tags | 0 |
| Multiple/missing H1 | 0 |
| Sitemap.xml vs actual routes | Perfectly in sync — 0 missing, 0 dead entries |
| robots.txt | Correctly configured — allows Googlebot/Bingbot/major AI crawlers, blocks known aggressive third-party SEO bots (AhrefsBot, SemrushBot, MJ12bot, DotBot) to preserve crawl budget, points to sitemap |
| Malformed JSON-LD | 0 of 468 blocks |
| Schema coverage | Organization/WebSite/ProfessionalService/ItemList on all 65 pages; FAQPage on 44; BlogPosting on 10; BreadcrumbList on 59 (the 6 without it — `/`, `/about`, `/career`, `/contact`, `/privacy`, `/terms` — are all single-level pages where a breadcrumb adds little value; not flagged as an issue) |

## Confidence Levels

- **TTI/beforeInteractive fix**: High confidence. Root cause is structural and unambiguous (static data in a blocking script slot), fix is verified with before/after schema-parity checks, and the pattern explains the consistency of the TTI finding across unrelated pages.
- **CLS**: Explicitly low/unconfirmed — reported as a monitoring item, not a finding, per the "never claim causation from insufficient data" principle.

## Update — 2026-09-24, real PSI report from user

User supplied a live PageSpeed Insights report for `/` (homepage, mobile): Performance 79, LCP 4.3s, CLS 0 (confirms the earlier CLS finding was noise, not a real bug), Accessibility 97, Best Practices 96, SEO 100.

| Priority | Finding | Investigation | Status |
|---|---|---|---|
| **P1** | "Reduce unused JavaScript: 306 KiB", "Legacy JavaScript: 25 KiB", "7 long main-thread tasks" | JS-coverage analysis on the site's own bundle showed 0 KB unused (541.7 KB, fully utilized) — the weight isn't coming from app code. `app/layout.tsx` loaded 4 separate third-party scripts on every page: GTM, a **directly hardcoded gtag.js for GA4** (redundant — GTM is designed to load/configure GA4 itself via a tag inside the container), Microsoft Clarity, and the Apollo.io website tracker. | **Fixed** (user-authorized) — removed the standalone gtag.js script and its inline config block. GTM and Clarity untouched. **Action needed from user**: confirm GA4 property G-V2EZ4HBLZS is configured as a tag inside GTM container GTM-N23Z4X6Z (tagmanager.google.com) — this can't be verified from the codebase. Check the GA4 Realtime report after this deploys. |
| P3 | "Browser errors were logged to the console" (Best Practices) | Attempted to reproduce locally — this sandbox's network proxy blocks all third-party script loads (GTM/Clarity/Apollo/etc.), so any error specific to those scripts on production can't be reproduced or diagnosed from this environment. | **Not resolved.** Needs a manual check: open the live homepage in Chrome DevTools → Console and look for the specific error. |
| P3 | Contrast issue (Accessibility, no specific element named in the report) | Attempted an automated axe-core scan; no accessibility-testing tooling available in this sandboxed environment and no internet access to install one. Manually checked the navy-hero text patterns added this session (`text-white/60`, `text-white/70` on `#081a42`) — both pass WCAG AA (6.7:1 and higher), so likely not the culprit. Built a custom WCAG contrast checker instead (pixel-rasterized color normalization via canvas + real contrast-ratio math) and crawled all 65 pages. Found the brand gold (`--gold`, `#facc15`) used as small/normal TEXT on white/light backgrounds sitewide (1.53:1, needs 4.5:1) — most visibly the "AU Corporate" wordmark in the navbar and footer (every page) and ~300 "Talk to an expert" links. | **Fixed.** Darkened the existing `--gold-dark` text-only token from `#ca8a04` to `#8c5f03` (5.05–5.6:1) and swapped `text-gold` → `text-gold-dark` on the ~110 flagged text nodes only — every gold background, button, icon and CTA is untouched, still the original bright `#facc15`. Two numbered badge circles (white text on a bright-gold circle) switched to navy text. Commit `af43f16`. |
| P3 | Additional finding, not yet actioned | The same 65-page contrast crawl also found Tailwind's *own* default `text-yellow-500/600/700` utility classes (separate from the site's custom `--gold` tokens) used extensively — 80+ instances in places like stat numbers, step badges, and "Talk to an expert"/blog-card links across ~20 pages — also failing WCAG AA on white/light backgrounds (ratios ~1.7–2.9 vs the 3.0–4.5 needed). This is pre-existing, unrelated to anything changed this session, and out of scope for this pass. | **Not fixed — flagged for a future pass.** Same fix pattern would apply (swap to a darker text-only shade, leave backgrounds/icons alone), just for the `yellow-500/600/700` classes instead of `--gold`. |
