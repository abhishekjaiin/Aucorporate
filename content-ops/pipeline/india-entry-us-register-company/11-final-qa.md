# Final SEO QA: Register a Company in India from the USA

Reviewer: Stage 11 (final-seo-qc)
Date: 2026-09-29
Input reviewed in full: STATUS.md, 04-content-gap.md, 06-content-architecture.md, 07-draft.md (final draft, as edited by Stage 8 and Stage 10), 08-seo-edit.md, 09-fact-check.md, 10-eeat-review.md.

---

## Scores (1-10, with evidence)

| Dimension | Score | Evidence |
|---|---|---|
| Search intent satisfaction | 9 | Section order (entity decision → filing path → resident director → documents → FDI route → cost/timeline → post-incorporation → FAQ) was built directly from Stage 2's intent map and confirmed unchanged by Stage 8: "Search intent satisfaction (order + content match to Stage 2) — Pass... matches Stage 6's approved order, which was built directly from Stage 2's evidence." All 8 items on 04-content-gap.md's Minimum Coverage list are present in the draft (verified below). |
| Keyword strategy | 9 | Primary keyword exact-match in title (56 chars), H1, URL, and meta description (08-seo-edit checklist, all rows Pass); Stage 8 fixed a first-100-words gap and added a 48-word direct-answer sentence. The decision not to force the primary keyword into an H2 is a documented, reasoned over-optimization guardrail call (08-seo-edit Remaining Issues #1), not an oversight. |
| Content usefulness | 9 | The 5-way entity table gives selection criteria tied to actual business activity (sell/invoice vs. representative-only vs. time-bound), the exact artifact 04-content-gap.md confirms is a "genuine gap... 0/6" among analyzed competitors. Resident-director and documents sections resolve gating questions rather than just naming rules. |
| Originality | 9 | 04-content-gap.md: "Full 5-way entity decision table... 0/6" competitors, and 06-content-architecture.md independently confirms it is "not yet built anywhere on the site or in the competitive field." Fact-check (09) and EEAT review (10) both re-confirm the table's content is accurate and internally consistent, so the originality is substantive, not just structural novelty. |
| Content depth | 8 | Deliberately scoped as a "thin synthesis/routing layer... not a seventh deep page" (06-content-architecture.md), with confident hand-offs into six already-deep sibling pages rather than a self-contained treatment. This is the right structural choice per Stage 5/6's anti-cannibalization logic, but it does mean a reader needs to click through for full depth on cost breakdown, resident-director mechanics, and FDI sector detail — appropriate for the page's defined job, not a defect, but one point short of a fully self-contained "10." |
| Expertise | 9 | Names specific statutory references and forms throughout (Companies Act s.149(3), s.380, Form FC-1, FC-GPR, AGILE-PRO-S, FEMA 22(R)/2016, LLP (Amendment) Act 2021's 120-day test) and connects Indian filing mechanics to the US-side tax consequence (Form 5471 vs. 8858) in the same sentence — 10-eeat-review.md confirms this is "the specific right-to-win Stage 5 identified and the page actually delivers on it in-line rather than as a separate marketing paragraph." |
| Trust | 8 | Honest, earned epistemic hedging on the SPICe+ currency claim ("confirm directly against mca.gov.in... including this one" — 10-eeat-review.md), a practice-level "Last updated" attribution line was added to match the strongest live sibling-page pattern, and cost/timeline figures are explicitly scoped as ranges rather than a flat quote. Capped below 9 because two of the page's most load-bearing, checkable claims (SPICe+/RUN currency, RBI thresholds) still require actual human sign-off before the trust signal is fully substantiated in fact, not just in tone — see Must Fix below. |
| Competitor differentiation | 10 | 04-content-gap.md's Differentiation List items are addressed point-for-point in the draft: the 5-way table (0/6 competitors), equal-weight Branch/Liaison/Project Office treatment (1/6, and even that "bolted on" per Stage 3), the SPICe+/RUN currency correction (0/6 correct-and-explicit, 1/6 wrong), primary-source citation by name/section (0/6 observed), and apostille-vs-embassy mechanics (0/5 true competitors). No dimension of the confirmed gap list was left unaddressed. |
| SEO fundamentals | 9 | Stage 8's full checklist passes on title/meta/URL/heading hierarchy/internal linking (all 11 "pages this page should link TO" targets present with matching anchor text); FAQ questions converted to real H3 headings for rich-result eligibility; this page ships with both a meta description and canonical expectation, unlike the AU-owned registercompanyinindia.com page Stage 3 flagged as missing both. One point held back for an open, unverified build-time item: the in-page jump-link anchor slug in FAQ 3 has not been confirmed to match the actual generated heading ID (08-seo-edit Remaining Issues #3). |
| Conversion potential | 8 | CTA strategy matches the category's confirmed non-transactional, consultation-led norm (Stage 1/2, "no purely transactional intent... consultation CTA at the end") and Stage 8 confirms placement is correct — mid-page soft prompt sits after the highest-stakes decision section, closing LeadForm matches the proven pattern on `fdi-channels`/`project-office-in-india`. Score reflects that this is a deliberately soft, single-CTA approach appropriate to the intent (not a defect), rather than a maximally aggressive conversion design. |

## Overall Score
**8.8 / 10** (mean of the above). The page is strong on originality, differentiation, and search-intent match — the areas this pipeline was built to win on — and the only material drag is the two outstanding human-verification items under Trust, which are process-completeness issues, not content defects.

---

## Minimum Coverage Cross-Check (against 04-content-gap.md)
All 8 items on the Minimum Coverage list are present in `07-draft.md`:
1. Core process sequence (entity → SPICe+ → DSC/DIN → PAN/TAN/AGILE-PRO-S → FC-GPR) — present, "The Registration Process" H2.
2. Named entity-type options — present, 5-way table.
3. Resident-director hard rule (s.149(3), 182-day test) — present, dedicated H2.
4. Documents checklist — present, dedicated H2.
5. FDI Automatic vs. Government Route — present, dedicated H2.
6. Cost figure and timeline figure — present, dedicated H2, verbatim-matched by Stage 9 against live source code.
7. FAQ addressing proxy-PAA questions — present, all 8 questions as H3s.
8. Education-led framing with closing consultation CTA — present, no CTA in the first two sections per Stage 6's own guardrail, confirmed by Stage 8.

**No Minimum Coverage gap found. No automatic Must Fix triggered by this cross-check.**

---

## Fact-Check Cross-Check (against 09-fact-check.md)
Stage 9 found **zero factual errors** — no claim in the draft was wrong, contradicted, or unsupported. However, two claims are explicitly flagged as unresolved "needs human professional verification" because every primary-source fetch (mca.gov.in, rbi.org.in, rbidocs.rbi.org.in) returned `EGRESS_BLOCKED` all session, so verification rests on convergent secondary sourcing rather than a direct primary-source read:

1. The SPICe+ Part A / RUN-Form INC-1 currency claim (the page's own "currency correction," styled as a trust signal in body copy and FAQ).
2. The RBI Branch (USD 100,000 / 5-year) and Liaison (USD 50,000 / 3-year) net-worth and track-record thresholds, sitting adjacent to RBI's pending, unnotified October 2025 draft reform that proposes changing exactly these figures.

Per this stage's guardrail — **an unresolved fact-check verification flag is always a Must Fix, no exceptions** — both items are classified below as Must Fix. This is a process-completeness gate, not a finding that the page contains an error: Stage 9 was explicit that "there is nothing to fix" in the copy itself, only a primary-source confirmation step still outstanding. Stage 10's E-E-A-T review reached the same conclusion and did not override it.

---

## MUST FIX

1. **SPICe+ Part A / RUN-Form INC-1 currency claim — obtain human sign-off against live mca.gov.in before publish.** This is the page's single most prominent "checkable" claim (stated in body copy and as its own FAQ entry). Stage 9 could not reach mca.gov.in directly (`EGRESS_BLOCKED`) and verified only via convergent secondary sources plus a surfaced MCA PDF title. Blocks publish per the fact-check guardrail, not because any error was found.
2. **RBI Branch/Liaison net-worth and track-record thresholds — obtain human sign-off against live rbi.org.in before publish.** Same tooling block applies. These figures sit directly in the page's central differentiating artifact (the 5-way table), next to a pending-but-unnotified October 2025 draft reform that would change them — the highest-consequence place on the page for a stale or unconfirmed number to live. Blocks publish per the fact-check guardrail.

No other Must Fix items were found. No Minimum Coverage gap, no keyword-stuffing, no structural defect, and no unaddressed differentiation gap triggered this bucket.

---

## SHOULD IMPROVE

1. **Confirm the in-page FAQ jump-link anchor at build time.** FAQ 3 links to `#which-entity-should-you-register-the-5-way-decision`, which assumes a standard heading-to-slug conversion in the eventual Next.js implementation. Not verifiable from markdown alone (08-seo-edit Remaining Issues #3) — a broken anchor would be a real (if minor) UX defect, so confirm before or immediately after launch.
2. **Extend the "Last updated / prepared by" attribution line to sibling pages for site-wide consistency.** Only `llp-in-india` and (now) this page carry it; `branch-office-in-india` and `project-office-in-india` — two of the four pages this page routes readers to — do not (10-eeat-review.md, Where It Falls Short #3). Doesn't block this page but leaves an inconsistent trust signal across the cluster this page depends on.
3. **Consider a one-line Companies Act s.164 (director disqualification) mention if the Resident Director section is ever revised.** Named in Stage 6's citation list but never tied to an actual claim in the approved outline or draft (08-seo-edit Remaining Issues #2, 09-fact-check.md). Not a defect today — nothing false or missing results from its absence — but it was an intended source in the architecture and would close that loop if the section is touched again.

---

## OPTIONAL

1. **Primary keyword not present in any H2.** Deliberate, documented over-optimization guardrail decision (08-seo-edit Remaining Issues #1) — title, H1, URL, and meta already carry the exact phrase. Low-priority; revisit only if a future ranking signal specifically calls for H2-level exact match.
2. **Startup India tax-incentive angle (Section 80-IAC/56) — correctly out of scope.** 04-content-gap.md flagged this as a differentiator observed on only 1/6 competitors but explicitly cautioned it not be added without Stage 5 sign-off; Stage 5/6 correctly excluded it as belonging to the hub/transfer-pricing pages instead. Noting only as a possible future companion-content opportunity elsewhere in the cluster, not an action item for this page.

---

## Publishing Recommendation

**Approved with Must-Fix items resolved first** — specifically:
1. Human confirmation of the SPICe+ Part A / RUN-Form INC-1 currency claim against live mca.gov.in.
2. Human confirmation of the RBI Branch/Liaison net-worth and track-record thresholds against live rbi.org.in (including current notification status of the October 2025 draft reform).

The page itself is not defective — Stage 9 found zero factual errors, Stage 10 found the E-E-A-T signals genuinely strong (honest hedging, correct attribution pattern, no leaked pipeline language, real differentiation delivered rather than claimed), and every item on 04-content-gap.md's Minimum Coverage list is satisfied. The two Must Fix items exist solely because primary-government-source access was blocked at the network level all session (confirmed independently by Stages 1, 9, and this review's own read of 09-fact-check.md), not because of any drafting, structural, or SEO defect. Once a human with working mca.gov.in/rbi.org.in access confirms those two items, this page is ready to publish as drafted with no further content changes required.

### Pre-Publish Human-Verification Checklist (tracked separately from the QC score above — do not let this get lost before implementation)
- [ ] Confirm on mca.gov.in directly: SPICe+ Part A currently handles name reservation; standalone RUN/Form INC-1 is retained only for renaming an existing company, not fresh incorporation.
- [ ] Confirm on rbi.org.in directly: Branch Office USD 100,000 minimum net worth / 5-year profitable track record, and Liaison Office USD 50,000 minimum net worth / 3-year profitable track record, are still the operative FEMA 22(R)/2016-RB thresholds as of publish date.
- [ ] Confirm the notification status of RBI's October 2025 draft reform (draft FEMA Establishment in India of a Branch or Office Regulations, 2025) at time of publish — if it has since been gazetted, the page's pointer sentence and the three sibling pages it links to (Branch, Liaison, Project Office) will need a coordinated update, not just this page alone.

These three items are the only conditions standing between this draft and a full "Approved for publish."
