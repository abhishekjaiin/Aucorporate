# Fact & Authority Check — Recheck: Liaison Office in India

Scope: this is a targeted recheck of Stage 9's original two must-fix items after the Stage 7b revision, plus a check on whether the FAQ #10 tone-softening introduced any new inaccuracy, plus a quick sanity check that nothing else was inadvertently broken. This is not a full re-verification of every claim from the first pass (`09-fact-check.md`), per the task scope.

Sourcing note: same network constraints as the first pass — rbi.org.in and most law-firm/CA-firm domains blocked on direct fetch this session; findings below again rely on WebSearch's synthesized secondary-source snippets, triangulated across independent queries, plus direct reads of AU Corporate's own live `.tsx` pages (which are directly readable and authoritative for internal-consistency purposes).

## Fix 1 — Restricted-country government-route rule (conditional vs. unconditional)

**Re-checked against:** two independent WebSearch queries this session.

- Query 1 converged on: "Prior approval of the RBI is required if applicants or companies from Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, or Macau want to open a liaison office in Jammu and Kashmir, the North East region, and Andaman and Nicobar Islands" — i.e., the government-route trigger for this country list is explicitly conditional on the J&K/North-East/Andaman & Nicobar location, exactly as the revised draft now states.
- Query 2 converged on: Pakistan-connected applicants are subject to government-route approval "in any location in India" — i.e., the location restriction does *not* apply to Pakistan the way it does to the other seven countries; Pakistan's trigger is nationality alone, unconditional on location. This also matches the revised draft.

**Current draft text** (main body, "Restricted Countries, Sensitive Sectors, and the Nepal Exception," and FAQ "Can a company from Nepal, Pakistan, China or Bangladesh open a liaison office in India?") now correctly presents these as two distinct rules: Pakistan = unconditional government-route trigger regardless of proposed office location; Bangladesh/Sri Lanka/Afghanistan/Iran/China/Hong Kong/Macau = conditional trigger, requiring the country connection *combined with* a proposed J&K/North-East/Andaman & Nicobar office location, with an explicit example that a Chinese or Hong Kong applicant proposing an office in Mumbai or Bangalore is not automatically subject to that route.

**Verdict: Fix 1 confirmed resolved.** The revised framing matches this session's independent re-verification and correctly distinguishes the two rules. One incidental finding not currently in the draft, and not required to add: multiple sources also indicate that applicants from this same country list *and* Pakistan must separately register with state police authorities via the AD bank forwarding the approval letter to the Ministry of Home Affairs — this is a distinct compliance step from the government-consultation route and doesn't bear on whether Fix 1 is correct as written; flagging only as a possible future enrichment, not a gap.

## Fix 2 — Income-tax Act citation (1961 → 2025)

**Re-checked against:** direct reads of `/home/user/Aucorporate/app/doing-business-in-india/incorporation/page.tsx` and `/home/user/Aucorporate/app/services/taxation-regulatory/page.tsx`.

- `incorporation/page.tsx` (live, "Business Connection Risk" section): "Under Section 9 of the Income-tax Act, 2025 (India's current income tax law, effective from the 2026-27 assessment year and the successor to the identically structured business-connection provision in the 1961 Act)..."
- `taxation-regulatory/page.tsx` (live): "All of this now sits under the Income Tax Act, 2025, which replaced the 1961 Act for periods beginning on or after 1 April 2026."

**Current draft text** (main body, "When Liaison Activity Crosses Into a Permanent Establishment," and FAQ "Is a liaison office a permanent establishment (PE) for tax purposes?") now reads: "Under Section 9 of the Income-tax Act, 2025 (India's current income tax law, successor to the equivalent business-connection provision in the 1961 Act)..." — consistent in substance and citation with both live pages. No specific sub-clause (e.g., a "(1)(i)" equivalent) is asserted, which is correct: neither live AU Corporate page asserts one either, and Stage 9's original instruction not to fabricate a sub-clause has been followed.

**Verdict: Fix 2 confirmed resolved.** The citation is now current and internally consistent with AU Corporate's own live pages. The precise successor sub-clause remains appropriately flagged in Writer's Note #8 for qualified-tax-professional confirmation before publish — this is correct to still flag, not a defect in the fix.

## FAQ #10 tone-softening — sanity check

**Draft's revised opening line** ("Should we set up a liaison office first and convert it to a subsidiary later?"): "It can work as a sequencing strategy, but there's no formal legal mechanism to 'convert' a Liaison Office directly into a subsidiary — the two are fundamentally different things..."

**Live incorporation-page FAQ opening** (same question, `incorporation/page.tsx`): "It can work as a sequencing strategy, but a liaison office can't generate India-side revenue — it's restricted to non-commercial activities like market research and coordination, and it's RBI-approval-gated..."

Both now open with the same "It can work as a sequencing strategy, but..." framing, resolving the tonal mismatch the first pass flagged (previously the LO draft opened by flatly ruling out conversion, which read as more restrictive than the incorporation page's framing). The substantive claim added in the LO draft's version — "there's no formal legal mechanism to 'convert' a Liaison Office directly into a subsidiary" — is not stated in those exact words on the incorporation page, but it is not contradicted by it either: the incorporation page's own FAQ answer concludes "going straight to a Wholly Owned Subsidiary is usually simpler than standing up a liaison office and separately incorporating and winding it down later," which presupposes there is no direct conversion mechanism (otherwise "incorporating and winding it down" wouldn't be described as a separate, additional step). No new inaccuracy was introduced; the two pages are now consistent in both tone and substance on this question.

The corrected internal QA note ("Notes on Structural Fidelity to the Approved Architecture") also now accurately describes the live incorporation-page FAQ's actual wording rather than the previously-misquoted "no legal mechanism to convert" phrase, and correctly records that the misquote has been fixed.

**Verdict: FAQ #10 revision confirmed accurate — no new inaccuracy introduced.**

## Quick sanity check — nothing else inadvertently broken

- Compared `07b-revision-log.md`'s "Not changed" statement against the full current `07-draft.md`: H2/H3 order, all 12 FAQ questions and their order, CTA copy, related-resources block, and metadata all read as intact and consistent with the version reviewed in the first pass.
- All other Writer's Notes entries (1–7, 9–13) are unchanged in substance from the first pass and still correctly hedge the items Stage 9 originally flagged for human professional verification (eligibility thresholds, validity/renewal cycle, Form FNC annex reference, FC-1 30-day window, AAC dual-routing/deadline, Nepal/sector-list rule, GST triggers) — none of these were touched by the revision, and none show signs of collateral damage from the edit.
- No new unverified figures, section numbers, or form numbers were introduced anywhere in the diff area (Fixes 1–3) beyond what's already flagged for professional sign-off.
- The document reads coherently end-to-end; no orphaned references, broken cross-links, or internal contradictions were found between the revised passages and the rest of the page.

## Overall Verdict on This Recheck

**Both must-fix items from the first pass are now resolved, and the FAQ #10 tone-softening introduced no new inaccuracy.**

This does not change the first pass's broader conclusion: this page still carries direct FEMA/RBI/tax professional-liability exposure, primary RBI/MCA source access remained blocked in this session (as in every prior stage of this pipeline), and several items remain correctly flagged for qualified-human-professional sign-off before publish — most notably the exact Income-tax Act, 2025 successor sub-section for the PE/business-connection test, the Form FNC annex letter/number, and the restricted-country/sector list's currency against the in-force Master Direction text. Those flags are appropriately carried forward unchanged; they were never part of the two must-fix items this recheck was scoped to confirm.

**Recheck verdict: Publish-ready pending the same human-professional sign-off already required by the first pass — no writer revision needed on the two rechecked items or on FAQ #10.**
