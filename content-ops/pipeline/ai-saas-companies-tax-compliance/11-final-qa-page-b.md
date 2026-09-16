# Final SEO QA: India Entry for AI, SaaS and Technology Companies (Page B)

Reviewed: `07-draft-page-b.md` (current state), against `06-content-architecture.md`, `08-seo-edit-page-b.md`, `09-fact-check-page-b.md`, `10-eeat-review-page-b.md`, and cross-checked against `07-draft-page-a.md` for the shared Decision Framework requirement.

## Prior-Stage Fix Verification (confirmed landed in the current draft, not re-litigated)

| Fix required | Status in current `07-draft-page-b.md` |
|---|---|
| Stage 9: "Section 115BAA" → "Section 200, Income-tax Act, 2025" | **Confirmed landed** — body (line 83) and FAQ (line 145) both cite "Section 200 of the Income-tax Act, 2025 (the provision previously numbered Section 115BAA under the 1961 Act)"; effective ~25.17% all-in rate stated alongside bare 22%. |
| Stage 9: reword the OIDAR→GST "automatic conversion" overclaim | **Confirmed landed** — body ("GST After You Incorporate" section, lines 93–95) and FAQ (line 139) both now state the two registrations belong to "two separate legal persons" requiring the old registration to be "formally wound down," with no "transitions/folds into/as part of the incorporation process" language remaining anywhere on the page. |
| Stage 10: FAQ answer on GST transition still carried the pre-fix overclaim | **Confirmed landed** — the FAQ answer (line 139) now matches the corrected body language exactly; no residual inconsistency found. |
| Stage 10: standardize Page A/Page B byline format | **Confirmed landed** — Page B's byline ("*Last updated: 15 September 2026 — prepared by AU Corporate's cross-border tax and India business-setup practice.*", line 18) is now character-for-character identical to Page A's current byline (line 16). |

No re-opened issues. All four items close cleanly.

## Cross-Page Check: Shared Decision Framework (Page A vs. Page B)

Compared all three scenario blocks (Signal + Consequence) character-by-character between `07-draft-page-b.md` (lines 36–46) and `07-draft-page-a.md` (lines 68–82), including the Scenario 3 consequence text that carries the corrected OIDAR/GST wind-down language.

**Result: word-for-word identical on both pages**, including the corrected Scenario 3 consequence. Only the permitted framing sentence immediately before the framework differs (Page A: "Start here if you have Indian customers already..."; Page B: "Start here if you're deciding whether to formalize a presence in India..."), exactly as `06-content-architecture.md` allows. No drift found after the Stage 9/10 fixes — the correction was applied consistently to both pages, not just one.

## Scores (1–10, with evidence)

| Dimension | Score | Evidence |
|---|---|---|
| Search Intent Satisfaction | 9 | Reading order exactly matches Stage 6's intended architecture (market context → decision framework → entity structure → FDI → tax → GST transition → FEMA → post-incorp ops → GCC bridge → country bridge → FAQ), confirmed by Stage 8's checklist; Scenario 3 (the page's actual core reader) gets the fullest local treatment as specified. |
| Content Usefulness / Depth | 9 | Entity-structure reasoning (lines 56–71) explains *why* WOS fits a SaaS/AI go-to-market model and why each alternative doesn't, rather than a bare menu — EEAT review calls this "mechanism-first reasoning, matching the tone brief's explicit instruction" (`10-eeat-review-page-b.md`). |
| SEO Fundamentals | 9 | Stage 8's full checklist passes on title/H1/meta length/heading hierarchy/internal-link anchor text/keyword placement, with one gap (primary keyword missing from first ~100 words) already fixed and confirmed present in the current draft. |
| Expertise | 9 | EEAT review: "Pass, with one flaw now fixed" on statutory command; Section 200/Section 9(9) citations independently confirmed current by fact-check's Claims Verified table (`09-fact-check-page-b.md`). |
| Trust | 8 | Both EEAT-flagged defects (FAQ inconsistency, byline mismatch) verified corrected in the current draft; hedges are stated once, plainly, at genuine judgment points, not stacked. Docked one point because full trust completion is still gated on the outstanding professional sign-off precondition below — this is a process gap, not a copy defect, but it caps the score until resolved. |
| Competitor Differentiation | 9 | The three-scenario Decision Framework — confirmed word-for-word identical with Page A above — is the exact competitive gap `04-content-gap.md` identifies as the single highest-value opportunity in the set ("not one of the 8 [competitors] does this... even Treelife... solves the problem by splitting the topics apart rather than integrating them"). |
| Conversion Potential | 8 | Mid-page `LeadForm` placed after the FDI/Sector Eligibility section per Stage 6's CTA strategy ("the point a reader has a concrete structure + route in mind"), confirmed by Stage 8; `EntitySelectorTool` reuse doubles as a soft CTA; end-of-page `LeadForm` + `RelatedResources` present; no stacked "why AU Corporate" block. |

## Overall Score: 8.7 / 10

Genuinely strong, differentiated, mechanism-first content with no unresolved fact-check or EEAT flags remaining in the current draft. The gap between this and a 10 is entirely made up of (a) an external, non-content precondition (professional sign-off) and (b) a handful of low-severity, easily-actioned polish items below.

## MUST FIX

None found at the content/copy level. Both fact-check MUST FIX items (Section 115BAA citation; OIDAR "automatic conversion" overclaim) and both EEAT-flagged defects (FAQ inconsistency; byline mismatch) are confirmed resolved in the current draft, and the cross-page Decision Framework requirement is confirmed intact with no drift.

## Outstanding Precondition (not a content Must Fix — stated explicitly per instruction, neither ignored nor treated as a blanket "not ready")

Both `09-fact-check-page-b.md` and `10-eeat-review-page-b.md` flag that the following regulatory claims require sign-off from a qualified AU Corporate tax/GST/FEMA professional **before actual publish**, and this has not yet been confirmed as having happened:
- Effective tax rate / surcharge and cess currency (22% base → ~25.17% all-in)
- FC-GPR 30-day filing-window durability against the current RBI Master Direction
- SPICe+ timeline ranges (4–6 weeks Automatic Route / 8–12 weeks Government Route) — internally consistent, firm-operational estimates, not an externally verifiable statutory SLA
- FDI sector-edge classification for AI/data-handling-adjacent products

This is a **process precondition, not a copy defect** — the page's own hedging on each of these points is already correctly calibrated (it doesn't overclaim finality anywhere on any of them). The page should not be marked "fully cleared for publish" until this sign-off is on record, but this precondition alone does not make the page "not ready" in any other respect — the underlying writing, structure, and factual precision are sound pending that confirmation.

## SHOULD IMPROVE

1. **Component-implementation notes embedded inline in body prose, not fully separated from reader-facing copy.** Two instances sit directly inside sections a reader would otherwise read straight through: the `ScenarioSelector` note under "Which Situation Are You In?" (line 32) and the `EntitySelectorTool` note inside "Choosing Your Entity Structure for a SaaS/AI Business" (line 71). Both are italicized and parenthetical, clearly distinguishable from body copy as currently formatted, and this is a consistent, deliberate pipeline convention (Page A uses the same pattern in bracket form) — not a stray leftover. However, if this markdown file is used directly as source material for the Next.js implementation rather than as a content brief the dev team re-keys from JSX, there is real risk of this descriptive text being copy-pasted into a live page's rendered content. Recommend converting these (and the two bracketed `LeadForm` instantiation notes inside the "CTA" section, lines 159 and 165) to HTML comments or moving them wholesale into the existing "Notes on Structural Execution" appendix before handoff to engineering — low effort, removes the risk entirely. This is the same category of issue on both Page A and Page B; flagging here for Page B specifically as instructed, and noting the pattern for whoever is QC'ing Page A in parallel.
2. **No named reviewer, only team-level attribution.** EEAT review recommends confirming whether an actual AU Corporate partner/senior practitioner who reviewed this content is willing to be credited by name, given the complexity of what's being asserted (FEMA compounding consequences, tax-election tradeoffs, SEP exposure). Not resolved yet; the current team-level byline is an honest fallback if no one signs on, but should be actively checked rather than defaulted to.
3. **No standalone top-of-page snippet paragraph** for a "what is India entry for a SaaS company" style query (Stage 8 finding). FAQ #1 and #2 partially cover this need but a dedicated 40–60 word definitional paragraph near the top would give the page an additional, independent snippet shot rather than relying on the FAQ block alone.
4. **No H2 contains the literal primary keyword phrase** ("India entry for SaaS companies") — only semantic variants ("Entering India Now," "Entering India From a Specific Country"). Stage 8 flagged this and deliberately left the architecture-specified heading text untouched, deferring the call to editorial. Worth a final decision before publish given this is the page's primary target keyword.

## OPTIONAL

1. Confirm at build time that the `FaqAccordion` component renders each question as a genuine heading element (h3/h4) in the DOM, not just visually bold text — matters for FAQPage rich-result eligibility (Stage 8 flag, dev-confirmation item, not a draft-level defect).
2. (Cross-page FYI, not a Page B finding) Page A's body still carries three inline "*[Writer's note: ...]*" asides (approx. lines 40, 100, 120) referencing items Stage 9 has since confirmed/resolved — these read as live open questions to a reader even though they're already closed. Worth flagging to whoever is finalizing Page A, since it's a higher-severity variant of the same "notes embedded in body" pattern noted above.

## Publishing Recommendation

**Approved for publish at the content/copy level — no outstanding Must Fix items.** Go-live should be sequenced behind: (1) the qualified-professional regulatory sign-off already flagged by Stage 9 and reconfirmed by Stage 10 (effective-rate/surcharge currency, FC-GPR window durability, SPICe+ timelines, FDI sector-edge classification) being obtained and logged — a precondition external to this QA pass, not a reason to send the page back for further content revision — and (2) ideally, applying the low-effort Should-Improve fix on component-note isolation before the draft is handed to engineering as build source, to eliminate any chance of implementation notes leaking into live copy. The Should Improve and Optional items above are recommended but non-blocking.
