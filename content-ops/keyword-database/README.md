# Keyword / Topic Database

`topics.csv` is the single index of every topic the SEO system has researched, drafted, published, or refreshed for AU Corporate. Every agent and command that touches a new topic must check this file first.

## Columns

| Column | Meaning |
|---|---|
| `topic` | The human topic name, e.g. "Company Registration in India" |
| `topic_slug` | Matches the folder in `content-ops/pipeline/<topic_slug>/` |
| `primary_keyword` | The Stage 2 primary keyword actually targeted (may differ from the topic name) |
| `content_type` | service page / landing page / location page / India-entry guide / blog article / regulatory explainer / comparison page / FAQ content / pillar page / cluster page |
| `target_url` | Live URL if published, else the recommended URL from Stage 6 |
| `stage` | researched / brief-approved / drafted / qa-passed / published / needs-refresh |
| `last_updated` | ISO date of the most recent pipeline or refresh action |
| `cannibalization_notes` | Any overlapping AU Corporate page identified during Stage 5/6, and how it was resolved |
| `owner_notes` | Free text |

## Cannibalization check process

Before starting research on a new topic (`/seo-research`, `/content-brief`, `/seo-page`):
1. Search `topics.csv` for the same or a near-duplicate `primary_keyword`/`topic`.
2. If found and already published: recommend `/refresh-page` or `/seo-audit` on the existing page instead of a new one.
3. If found and mid-pipeline: resume that `topic_slug` rather than starting a new one.
4. If genuinely distinct but adjacent (e.g. a country-specific variant of an existing pillar topic), proceed but record the relationship in `cannibalization_notes` and make sure Stage 6's internal linking connects the two rather than letting them compete silently.

This file is maintained by the `/seo-page` and `/content-brief` commands automatically at the end of a run. Update it by hand if you publish or retire a page outside the pipeline.

## Seed data

The initial rows in `topics.csv` reflect AU Corporate's actual live site structure (from `app/sitemap.ts`) as of 2026-08-19, not fabricated research — they exist so the cannibalization check has something real to compare against from day one.
