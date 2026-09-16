# Final SEO QA — Stage 11: OIDAR & GST Registration in India for Foreign SaaS and AI Companies (Page A)

Reviewed against: `06-content-architecture.md` (approved structure/spec), `08-seo-edit-page-a.md`, `09-fact-check-page-a.md`, `10-eeat-review-page-a.md`, and the current draft `07-draft-page-a.md`.

## Verification of Prior-Stage Fixes (confirmed against the current draft, not re-litigated)

| Fix required | Confirmed landed? | Evidence in `07-draft-page-a.md` |
|---|---|---|
| Form GST REG-09 → GST REG-10 (Stage 9 must-fix) | **Yes** | Section heading "Registering: Form GST REG-10, an Indian Representative..." and body correctly use REG-10 under CGST Rule 14, with REG-09 mentioned only correctly (as the *different* NRTP form for physical-presence cases). |
| DGGI "payment-gateway/card-network data" claim reworded to sourced mechanism (Stage 9 must-fix) | **Yes** | "What Happens If You Don't Register" section now reads "...reportedly been working to coordinate with the RBI on foreign-exchange transaction data and with foreign governments on information-sharing" — matches Stage 9's recommended, sourced, hedged phrasing. |
| SAC code overclaim removed (Stage 10 finding) | **Yes** | "The exact SAC code your invoices should carry is worth confirming with your advisor rather than assumed — sources aren't fully consistent..." — no specific code stated; 18% rate (which Stage 9 confirmed cleanly) is retained as fact. This is Stage 10's recommended option (b). |
| SEP §9(9) hedge added (Stage 10 finding) | **Yes** | "...under Section 9(9) of the Income-tax Act, 2025 (a recently-commenced Act, so worth confirming the citation is still current at the time you're reading this)" — hedge present, light-touch as Stage 10 recommended. |

All four confirmed fixes are correctly and durably present in the current draft. No re-litigation needed on any of these four.

## Scores (1–10, with evidence)

| Dimension | Score | Evidence |
|---|---|---|
| Search Intent | 9 | `08-seo-edit-page-a.md` confirms primary keyword present in title/H1/meta/first ~100 words, H2 order matches the approved Stage 6 architecture exactly, and all 10 FAQ items trace to Stage 1 PAA-proxy/Stage 4 gap findings (none invented). Dual-keyword targeting (per Stage 6's unresolved-volume-data justification) is handled in prose rather than forced. |
| Content Quality / Usefulness | 8 | Stage 10 rates "practical usefulness" and "clarity for non-specialist" both **Strong** — the decision framework, REG-10/REG-09 distinction, nil-filing trap, and mixed-billing B2B/B2C nuance are all directly actionable. Docked one point for the three inline writer's-notes still live in body prose (see Must Fix #1) which currently undercut the otherwise-polished reading experience. |
| SEO Fundamentals | 8 | `08-seo-edit-page-a.md` passes nearly every mechanical checklist item (keyword placement, heading hierarchy, FAQ schema-readiness, internal linking — the missing `/india-business-setup/company-formation` link was found and fixed at Stage 8). Two open items keep this from a 9/10: the title measures ~73 characters against the architecture's claimed 65 (truncation risk, never resolved), and the architecture's required direct link to the gst.gov.in NRTP tutorial guide was never added (Stage 8 explicitly deferred this to Stage 9 for a verified URL, which never arrived). |
| Expertise | 9 | Stage 10 confirms genuine functional command of the material: REG-10 vs. REG-09 explained by *why* the forms differ, not just which number is correct; NTOR vs. reverse-charge explained by the structural reason liability shifts; the entity-cutover mechanics ("two separate registrations under two separate legal persons") is non-obvious, practitioner-level detail no competitor page includes per Stage 4. Held to 9 rather than 10 because the named-reviewer byline Stage 10 recommends for this specifically YMYL-adjacent content has not been added. |
| Trust | 6 | This is the page's weakest dimension, and correctly so given open items. Positive: the DGGI paragraph is well-calibrated ("reportedly," not asserted as confirmed-operational), the SAC/SEP hedges are correctly in place, no invented statistics or client counts (Stage 10: "Strong" on transparency, no overclaim of global VAT authority). Negative, and decisive for the score: three inline bracketed writer's-notes remain embedded directly in body prose (not in the clearly-separated appendix) — one of them literally instructs "do not publish without verification" — which is exactly the "severe, self-inflicted trust failure" risk Stage 10 flagged but which was never actually fixed in this draft (see Must Fix #1). No named reviewer byline yet, despite Stage 10's specific recommendation for this content given its penalty/interest-bearing statutory claims. |
| Differentiation | 9 | Architecture's "Unique Content Angle" is fully realized in the shipped draft: CGST §24/§122/§50 and IGST §13(12) combined in one page (Stage 4: currently split across three separate competitor pages), explicit AI-inclusion via the October 2023 amendment (zero competitors do this per Stage 6), the equalisation-levy-to-SEP bridge, and full first-class integration with the shared three-scenario decision framework rather than stopping at "you're in scope." |
| Conversion Potential | 8 | `08-seo-edit-page-a.md` confirms CTA placement matches the approved strategy exactly: mid-page `LeadForm` immediately after the decision framework (the self-identification moment), inline CTAs inside the registration and filing-calendar sections, end-of-page `LeadForm` + 4-card `RelatedResources` grid. No stacked "why AU Corporate" block, consistent with the tone brief. Held at 8 rather than 9 pending the byline/trust items above, which affect conversion-stage credibility on YMYL-adjacent content. |

## Overall Score: 8.1/10 (weighted toward Trust as the gating dimension)

The underlying writing, sourcing discipline, structural differentiation, and CTA execution are all at or near publish quality. The score is held below 9 by one concrete, fixable production-hygiene defect (Must Fix #1) and the still-open human sign-off items, which are a precondition rather than a content defect (see below).

## MUST FIX

1. **Three inline writer's-notes are still embedded directly in body prose and must be deleted before this draft is used as source for the live page.** These are distinct from the "Writer's Notes — Needs Verification" appendix (lines 204–222), which is clearly separated by a heading and a page break and is fine to leave for internal reference per the guardrail. The three problem instances are mixed directly into reader-facing paragraphs:
   - In "What Counts as OIDAR...": *"[Writer's note: exact CBIC notification number and effective date to be confirmed by Stage 9 — do not publish without verification.]"* — sitting mid-paragraph between two sentences of live body copy.
   - In "What Happens After Registration...": *"[Writer's note: confirm the current due date and filing frequency for GSTR-5A with Stage 9 — cadence and deadlines are the kind of detail that shifts with CBIC notifications and needs a live check before publishing.]"*
   - In "The Equalisation Levy Is Gone...": *"[Writer's note: confirm both withdrawal dates precisely with Stage 9 — these need to be exactly right given the past-tense framing is load-bearing for this section.]"*
   
   All three are now stale as well as unshippable: Stage 9 has since confirmed the CBIC amendment framing, the GSTR-5A due date, and both equalisation-levy withdrawal dates (see `09-fact-check-page-a.md`'s Claims Verified table), so the notes no longer even serve their original purpose — they should simply be struck from the body. This is exactly the risk Stage 10 flagged ("a published page literally telling the reader 'writer's note: ... to be confirmed' would read as unfinished") but it was not actually resolved between Stage 10 and this draft. This blocks using the current file as direct CMS/Next.js source material; it does not require new research or editorial judgment to fix — it's a deletion.

2. **No item from the fact-check or E-E-A-T reports remains genuinely unresolved at the content level** — both prior must-fix items (REG-09→REG-10, DGGI mechanism) and both E-E-A-T findings (SAC overclaim, SEP hedge) are confirmed fixed in this draft (see verification table above). No new must-fix content/factual issues were found in this pass.

## SHOULD IMPROVE

1. **Add a named reviewer byline** ("Reviewed by [Name], [GST/Indirect Tax practice title], AU Corporate") near the "Last updated" line. Stage 10 specifically recommends this given the page makes statutory claims with real penalty/interest exposure (CGST §§122, 50) and gives customer-facing invoicing guidance — this is functionally YMYL-adjacent content. Recommend tying this to the same event as the professional sign-off below (Stage 10's own suggestion) rather than treating it as a separate task.
2. **Add the gst.gov.in NRTP tutorial-guide link** once its live URL is confirmed as part of the professional sign-off (see Outstanding Precondition below). The architecture's "External Authoritative Sources to Cite" list requires this as a direct external link, not just paraphrase, and Stage 8 confirmed it is currently missing from the draft entirely.
3. **Title tag length** — measures ~73 characters against the architecture's claimed 65 (Stage 8 finding, never resolved). Real truncation risk in SERP display. Since the title is otherwise approved verbatim from Stage 6, this needs an explicit accept/shorten decision from whoever owns final title sign-off before publish, rather than being carried forward silently.
4. **Move the component-implementation notes out of interleaved body prose** (the `[Breadcrumb: ...]`, `[ScenarioSelector component ...]`, `[Mid-page LeadForm placement...]`, `[FaqAccordion component ...]` bracketed asides at lines ~18, 64, 86, 146). These are lower-severity than Must Fix #1 — they read clearly as dev/component instructions rather than uncertain facts, and are standard content-ops convention consistent with how `06-content-architecture.md` itself communicates component specs — but they are still interleaved with live body copy rather than isolated in a separate "Implementation Notes" block, and should be confirmed stripped or component-ized before CMS assembly, same as Stage 10 flagged generally. Not a blocker to a publish recommendation, but worth cleaning up for a smoother handoff to whoever builds the actual Next.js page.

## OPTIONAL

1. Consider the optional light cross-link to a country-specific `india-entry-for-*-companies` hub (US/UK/Singapore) that Stage 6's architecture lists as optional for this page and Stage 8 confirmed is not present — genuinely optional, low priority.
2. Stage 8 flagged Section 1's "transactional, not structural" paragraph as slightly over ideal featured-snippet length; left as-is by design since trimming would cut load-bearing qualifiers. No action needed, noted only for awareness.

## Outstanding Precondition (Not a Content Blocker, Not Resolvable at This Stage)

Both `09-fact-check-page-a.md` and `10-eeat-review-page-a.md` converge on the same four items requiring sign-off from a qualified AU Corporate tax/GST professional before actual publish, and this pass confirms none of them can be resolved through further content editing:

1. **SAC code precision** for OIDAR invoicing (9983 vs. 9984/998439) — the draft has been correctly de-specified to avoid overclaiming pending this sign-off.
2. **Currency of Income-tax Act 2025 §9(9)** SEP text, given the Act's very recent commencement and elevated renumbering/amendment risk — the draft has been correctly hedged pending this sign-off.
3. **Current operational status of the 2024 DGGI enforcement measures** (proposed vs. confirmed implemented) — the draft has been correctly phrased as "reportedly" pending this sign-off.
4. **Live resolution of the gst.gov.in NRTP tutorial URL** — WebFetch was blocked in the fact-check sandbox; a human needs to manually confirm this URL before it's added to the page (see Should Improve #2).

Per the task brief, this is explicitly a precondition to be stated plainly, not something this QA pass can resolve and not, on its own, a reason to mark the page "not ready" in every other respect — the content is already correctly hedged/scoped around all four items, exactly as it should be while they remain open. It should sit alongside, not instead of, the Must Fix item above in whatever gate governs actual publication.

## Publishing Recommendation

**Approved with Must-Fix item resolved first, plus the outstanding professional-sign-off precondition explicitly carried forward.**

Concretely:
- Delete the three inline writer's-notes from body prose (Must Fix #1) — a mechanical, low-effort fix, not a rewrite.
- Once that's done, this page is editorially, structurally, and SEO-ready to publish **contingent on** the four-item professional sign-off (SAC code, SEP §9(9) currency, DGGI operational status, gst.gov.in URL) being completed by a qualified AU Corporate tax/GST professional — this is a compliance precondition external to this QA gate, not a reason to send the page back through another content-revision cycle.
- The Should Improve items (byline, gst.gov.in link, title length, component-note hygiene) are recommended before launch but do not block a publish decision on their own.

This is a strong page — the differentiation, expertise signals, and structural execution of the approved architecture are all genuinely at the bar Stage 5/6 set. The one thing standing between this draft and a clean "Approved for publish" is a small, mechanical cleanup, not a substantive content problem.
