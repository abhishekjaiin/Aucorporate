# AU Corporate Content & SEO Dashboard — Phase 1

A proprietary, AU Corporate-owned content management and SEO dashboard, built alongside the existing public website without disturbing it. Not a generic CMS, not Sanity, not a third-party product — a custom Next.js + PostgreSQL application this repo owns outright.

## 1. Architecture

- **Public website**: unchanged — every existing route is still a hand-coded `.tsx` file, `/blog` is frozen exactly as it was.
- **New `/insights` system**: backed by PostgreSQL via Drizzle ORM. Public pages (`app/insights/page.tsx`, `app/insights/[slug]/page.tsx`) query the database directly, server-side, and only ever return `PUBLISHED` or `NEEDS_REFRESH` content — draft/review/approved rows are unreachable through these queries by construction.
- **Admin dashboard**: `/admin/*`, protected by `middleware.ts` (actually `proxy.ts` — Next.js 16 renamed the file convention; same mechanism) plus a layout-level session check. Built with Server Components + Server Actions (no separate REST API layer — the Server Actions in `lib/actions/` are both the backend and the only code a future SEO agent would call).
- **Auth**: Auth.js (NextAuth v5) with a Credentials provider, JWT session strategy, bcrypt-hashed passwords.
- **Editor**: Tiptap, storing content as structured JSON (not raw HTML) in a `jsonb` column, rendered to sanitized HTML on the public side via `@tiptap/html`'s `generateHTML` against the same constrained extension schema.

## 2. Database Schema

8 tables (`lib/db/schema.ts`):

| Table | Purpose |
|---|---|
| `users` | Dashboard accounts (name, email, bcrypt hash, role) |
| `authors` | Real AU Corporate team members content can be bylined to |
| `categories` | e.g. "India Market Entry", "Taxation" |
| `topic_clusters` | e.g. "Register Company in India from USA" |
| `keywords` | Primary/secondary keyword tracking, linked to a topic cluster |
| `insights` | The core content table — see fields below |
| `insight_keywords` | Many-to-many join: an Insight to multiple Keywords |
| `related_insights` | Self-referencing many-to-many for manual "related articles" |

`insights` holds: title, slug, excerpt, content (Tiptap JSON), status, authorId, categoryId, topicClusterId, three **plain-text** slug columns (`serviceSlug`, `jurisdictionSlug`, `industrySlug` — deliberately not foreign keys yet, since `services`/`jurisdictions`/`industries` tables don't exist in Phase 1; promoting these to real FKs later is a non-breaking migration), featuredImage, imageAlt, primaryKeyword, metaTitle, metaDescription, canonicalUrl, publishedAt, lastReviewedAt, needsRefresh, seoScore, createdAt, updatedAt.

**Not built in Phase 1, by design**: `services`, `jurisdictions`, `industries`, `case_studies`, `resources`, `faqs` tables. The schema above leaves room for all of them without a breaking change.

## 3. Environment Variables

```
DATABASE_URL=postgresql://user:password@host:5432/database
AUTH_SECRET=<openssl rand -base64 32>
NEXTAUTH_URL=https://www.theaucorp.com
```

Set these in Vercel's Project Settings → Environment Variables. `DATABASE_URL` works with any standard Postgres provider (Vercel Postgres/Neon, Supabase, RDS) — nothing in the code is provider-specific.

## 4. Running Migrations

```bash
npx drizzle-kit generate   # after changing lib/db/schema.ts
npx drizzle-kit migrate    # applies pending migrations in ./drizzle/
```

Both commands need `DATABASE_URL` set in the environment (they don't read `.env.local` automatically — export it first, or run via a tool that does).

## 5. Creating the First Admin User

```bash
npx tsx scripts/create-admin-user.ts "Full Name" "email@theaucorp.com" "a-strong-password"
```

Safe to re-run — if the email already exists, it reports that and makes no changes. There is no self-service sign-up; every account is created this way (or later, by an ADMIN through a future `/admin/users` page, not built in Phase 1).

## 6. How Authentication Works

Auth.js Credentials provider → `lib/auth.ts` looks up the email in `users`, compares the password with bcrypt, and on success issues a JWT session carrying `id` and `role`. `middleware.ts` (file name: `proxy.ts`) redirects any unauthenticated request to `/admin/*` (except `/admin/login` itself) to the login page, preserving the original destination as `callbackUrl`. The dashboard layout (`app/admin/(dashboard)/layout.tsx`) re-checks the session server-side as a second, independent gate.

`trustHost: true` is set because this app may run behind a reverse proxy / non-Vercel host during local testing — Vercel itself auto-trusts its own routing, so this is a no-op in production but necessary for correctness elsewhere.

## 7. Content Workflow

```
DRAFT → INTERNAL_REVIEW → APPROVED → PUBLISHED → (NEEDS_REFRESH)
```

Enforced **server-side** in `lib/actions/insights.ts` (`lib/auth/permissions.ts` holds the matrix) — never just hidden/shown in the UI:

| Transition | Who |
|---|---|
| DRAFT → INTERNAL_REVIEW | Any signed-in role (submit own work) |
| INTERNAL_REVIEW → APPROVED | EDITOR or ADMIN |
| APPROVED → PUBLISHED | **ADMIN only** |
| PUBLISHED ↔ NEEDS_REFRESH | EDITOR or ADMIN |
| Delete | **ADMIN only**, requires explicit UI confirmation |

**NEEDS_REFRESH keeps the article publicly live** — it means "this published piece needs an editorial update," not "take it down." Only the explicit Unpublish action (ADMIN only, sets status back to `DRAFT`) removes a page from public view. No code path publishes anything automatically; every status change is an explicit, role-checked human action.

## 8. SEO Health Scoring

`lib/seo/health.ts` — a deterministic, rule-based checklist (title/meta title/meta description exists, content length ≥ 300 words, canonical set or derivable, author/category/topic-cluster assigned, ≥1 internal link, no duplicate slug, published date present for published content, plus two soft warnings: image alt text, at least one external/source link). Score = percentage of hard checks passed. **Always labeled "Content SEO Health" in the UI** — never presented as a Google ranking signal. Recomputed on every save; the `insights.seoScore` column is a cache for fast list rendering, not the source of truth.

## 9. How Insights Get Published

1. Create/edit in `/admin/insights` → saved as `DRAFT`.
2. Submit for Internal Review.
3. An Editor or Admin reviews and Approves.
4. An Admin Publishes — only then does it appear at `/insights` and `/insights/[slug]`, enter the sitemap, and get Article JSON-LD.

## 10. Adding Future Entities (Phase 2+)

Add a new Drizzle table in `lib/db/schema.ts`, generate/run a migration, add a `lib/actions/<entity>.ts` with the same `requireSession`/permission-check pattern already used throughout, add an admin page under `app/admin/(dashboard)/<entity>/`. The sidebar (`components/admin/Sidebar.tsx`) already has a `navItems` array ready to extend. `Insight.serviceSlug`/`jurisdictionSlug`/`industrySlug` can be converted to real foreign keys once `services`/`jurisdictions`/`industries` tables exist, without re-keying existing data.

## 11. Known Issues

**Unpublished/unknown `/insights/[slug]` returns HTTP 200, not 404.** The not-found page renders with correct content, but with the wrong status code. Root-caused to a reproducible interaction between Next.js 16.3.0's streaming and this site's pre-existing root-level `app/loading.tsx` (which wraps every route in an automatic Suspense boundary) — confirmed with a minimal, zero-logic test case calling bare `notFound()` outside this feature entirely, so this is not specific to the Insights code. Not fixed in Phase 1 because the fix would require either modifying the site-wide `app/loading.tsx` (out of scope, risky, affects every existing page's loading UX) or a Next.js version change — both decisions outside what Phase 1 should decide unilaterally. **Flagged for your decision in the implementation report.**

**No `eslint.config.js` exists in this repo** (confirmed pre-existing, not introduced here) — `pnpm lint` cannot currently run. Outside Phase 1 scope to fix.
