# Fact & Authority Check: Register a Company in India from the USA

Date: 2026-09-28
Draft checked: `07-draft.md` (as edited by Stage 8, see `08-seo-edit.md`)
Method: every factual/legal/regulatory/numeric claim in the draft was extracted and checked against (a) primary government sources where reachable, (b) AU Corporate's own live sibling pages (`app/branch-office-in-india`, `app/liaison-office-in-india`, `app/project-office-in-india`, `app/llp-in-india`, `app/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us`, `app/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary`, `app/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us`) as the internal-consistency baseline, and (c) independent secondary legal/professional sources where primary access was blocked.

**Tooling note, tested directly this session:** WebFetch to `mca.gov.in`, `www.rbi.org.in`, `rbidocs.rbi.org.in`, `incometaxindia.gov.in`, `taxguru.in`, and `setindiabiz.com` all returned `EGRESS_BLOCKED` on retest — confirming what prior pipeline stages reported. No working direct fetch to a primary Indian government source was available at any point in this fact-check. All findings below that rely on government sources are therefore WebSearch-derived (multiple independent convergent sources triangulated per claim, including MCA's own hosted PDF filename/title surfaced in search results) rather than a direct primary-source read. This is stated plainly per instructions, not glossed over.

---

## Claims Verified

| Claim | Source | Link/reference |
|---|---|---|
| SPICe+ Part A now covers company name reservation; standalone RUN/Form INC-1 no longer used for **new** incorporation name reservation (RUN retained only for renaming an *existing* company) | MCA's own hosted instruction-kit PDF title ("Instruction Kit for webform SPICe+ Part A (Name Reservation)") surfaced via WebSearch, corroborated by ClearTax, CAalley FAQ PDF, restthecase.com, ebizfiling.com | [MCA Instruction Kit (search result)](https://www.mca.gov.in/content/dam/mca-aem-forms/instructionkits/Instruction%20Kit_SPICe+Part%20A.pdf) — direct fetch blocked, title/existence confirmed via search only; [ClearTax SPICe+ guide](https://cleartax.in/s/spice-plus-web-form) |
| Companies Act 2013 s.149(3): every company must have at least one director resident in India for 182+ days (test now runs on "financial year" per Companies (Amendment) Act 2017, previously "calendar year") | ca2013.com Companies Act Integrated Ready Reckoner + convergent secondary sources | [Section 149, ca2013.com](https://ca2013.com/149-company-to-have-board-of-directors/) |
| LLP resident designated partner test is **120 days** (financial year), per LLP (Amendment) Act, 2021, in force 1 April 2022 — supersedes the earlier 182-day test that applied to LLPs before the amendment | vjmglobal.com, lawrbit.com, setindiabiz.com, mondaq.com — independently convergent | [VJM Global](https://www.vjmglobal.com/blog/highlights-of-limited-liability-partnership-amendment-act-2021), [Lawrbit](https://www.lawrbit.com/article/limited-liability-partnership-amendment-act-2021/) |
| The 120-day LLP test and the 182-day Companies Act s.149(3) test are **correctly kept separate** everywhere in the draft — checked every occurrence (quick-facts strip, Resident Director H2, FAQ) | Direct read of `07-draft.md` | n/a — internal draft check |
| Branch Office: USD 100,000 minimum net worth + 5-year profitable track record | Matches AU's own live `/branch-office-in-india` page verbatim; corroborated by independent search snippet (dezshira.com-style summary) | `app/branch-office-in-india/page.tsx` lines 25-28, 139-140 |
| Liaison Office: USD 50,000 minimum net worth + 3-year profitable track record | Matches AU's own live `/liaison-office-in-india` page verbatim | `app/liaison-office-in-india/page.tsx` lines 25-28 |
| Branch/Liaison/Project Office registered with ROC via **Form FC-1** under **Section 380, Companies Act 2013**, within **30 days** of establishing the place of business | ca2013.com, ibclaw.in, corporatelawreporter.com — independently convergent; matches AU's own three sibling pages | [Section 380, ca2013.com](https://ca2013.com/380-documents-etc-to-be-delivered-to-registrar-by-foreign-companies/) |
| **Form FC-GPR** filed within **30 days of share allotment** to report FDI | Multiple convergent sources (beaconfiling.com, indiafilings.com, equitylist.co); matches every AU sibling page checked | search-derived, convergent |
| **Form FDI-LLP(I)** (also called Form LLP-I) is a genuinely distinct filing from FC-GPR for reporting foreign capital contribution to an LLP — not interchangeable | vjmglobal.com, calcguru.in, bizfoc.com — independently convergent; matches AU's own `/llp-in-india` page | search-derived, convergent |
| Cost figures (₹55,000–₹1,15,000+) and timeline figures (4-6 weeks Automatic Route incorporation / 8-12 weeks fully banked & operational) | **Verbatim match** against live source code | `app/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us/page.tsx` lines 10-13, 167, 202 — draft was not re-derived, confirmed by direct code comparison |
| US and India are both Hague Apostille Convention signatories; US-issued documents for use in India need apostille (via the relevant Secretary of State), not embassy/consular legalisation | HCCH (Hague Conference) official accession record; India's Ministry of External Affairs apostille page | [HCCH — India accession](https://www.hcch.net/en/news-archive/details?varevent=102), [MEA India Apostille](https://www.mea.gov.in/apostille-menu) |
| LLP has no share capital and cannot issue equity or ESOPs | Matches AU's own live `/llp-in-india` page verbatim | `app/llp-in-india/page.tsx` line 47 |
| LLP automatic-route FDI two-part gate (sector permits 100% automatic FDI for a company **and** carries no FDI-linked performance conditions) | Matches AU's own live `/llp-in-india` page verbatim | `app/llp-in-india/page.tsx` lines 260-266 |
| Pvt Ltd/LLP incorporate via MCA under Companies Act 2013 / LLP Act 2008; Branch/Liaison/Project Office are *established* under FEMA via RBI/AD-bank approval, not incorporated — genuinely different mechanisms | Consistent across all five AU sibling pages checked | branch/liaison/project-office pages, `/llp-in-india` |
| Every figure in the 5-way entity comparison table (liability, FDI route, compliance burden descriptions) | Cross-checked row-by-row against `/branch-office-in-india`, `/liaison-office-in-india`, `/project-office-in-india`, `/llp-in-india` | No drift found anywhere in the table |

---

## Claims That Could Not Be Verified — MUST FIX

**None found.** No claim in the draft was found to be factually wrong, internally contradictory, or contradicted by an authoritative source. Every specific figure, section number, form name, and citation traces either to a live AU Corporate sibling page (already fact-checked in its own pipeline run) or to convergent independent secondary sources, and nothing invented a citation. This is a genuinely clean draft on the accuracy axis — the writer's own flagged items (Writer's Notes #1–9 in `07-draft.md`) were the right things to flag, and all resolved as accurate on verification, not as errors.

---

## Claims Requiring Human Professional Verification

| Claim | Why (rate/threshold/deadline/judgment-dependent) |
|---|---|
| SPICe+ Part A / RUN-INC-1 currency claim, and the exact current MCA V3 SPICe+ instructions | Direct WebFetch to mca.gov.in was blocked (`EGRESS_BLOCKED`) in every attempt this session. Verification rests on convergent secondary sources and a surfaced MCA PDF title, not a direct primary-source read. This is explicitly the page's one "currency correction" claim (styled as a trust signal in both the body copy and FAQ) — recommend a human confirm directly against the live mca.gov.in SPICe+ Part A page/instruction kit before publish. |
| FEMA 22(R)/2016-RB net-worth/track-record thresholds and the general Form FNC/FC-1 mechanics | Direct WebFetch to rbi.org.in, rbidocs.rbi.org.in, and the RBI Master Direction mirror were all blocked. Figures match AU's own already-published sibling pages exactly, but those pages' own regulatory-watch notes flag that RBI has a **draft, unnotified October 2025 reform** proposing to change or remove these exact thresholds. As of today (28 Sept 2026) that draft is still not law per the sibling pages' own text, so the draft's figures are current — but this is the single most likely thing on the page to go stale, and a human should re-confirm notification status at or near publish time. |
| Whether this new page should carry even a brief pointer to the pending RBI October 2025 draft reform | The writer flagged this explicitly (Writer's Note #4) and asked for a call. My recommendation: not a MUST FIX (the page states current, accurate law and doesn't claim permanence), but since three of the four sibling pages carry a prominent regulatory-watch callout on this exact point and this new synthesis page is silent on it, a one-sentence pointer ("RBI has a pending, unnotified reform that may change these thresholds — see the full Branch/Liaison Office guides for the current regulatory-watch note") would close a real omission risk cheaply. Route to a human editor to decide, not a blocking defect. |
| Cost figures (₹55,000–₹1,15,000+) and 4-6/8-12 week timelines | These are explicitly firm-chosen estimate ranges, not statutory figures — the source page itself states "we don't quote a flat total" and these move with government fee schedules, state stamp duty, and bank/professional-fee market rates. Inherently a business/pricing judgment call requiring periodic re-confirmation by AU Corporate's own team, not a one-time fact-check matter. |
| "Most sectors relevant to a US company entering India sit under the Automatic Route" (FDI Route section) | Sector-by-sector FDI caps and conditions are set by periodic DPIIT Press Notes/Consolidated FDI Policy updates and change more often than most content on this page. The draft appropriately avoids stating a specific sector list and defers to `/india-business-setup/fdi-channels`, which is the right scoping choice — but the general framing should be reconfirmed as current at publish time by someone tracking the latest Consolidated FDI Policy/Press Notes. |
| Companies Act s.164 (director disqualification) | Named in Stage 6's citation list but never actually used to support a claim anywhere in this draft (confirmed on this read — no disqualification-related statement appears). Not an accuracy defect since nothing false is stated; flagging only to close the loop raised in Writer's Note #7 and SEO Edit remaining issue #2. No action needed unless a future edit adds a disqualification-related claim, at which point it would need its own citation check. |

---

## Regulatory Currency Check

- **SPICe+ / MCA V3 portal:** Current and accurately described. RUN is correctly stated as retained only for renaming an *existing* company, not for reserving a name at fresh incorporation — the draft does not describe a superseded process as current, and its currency-correction framing (calling out that "a decent amount of published guidance... still describes standalone RUN/INC-1 as current") is itself accurate as of today.
- **FEMA 22(R)/2016-RB (Branch/Liaison/Project Office):** Current operative regulation, correctly cited. A draft, unnotified RBI reform from October 2025 is pending (per the sibling pages' own regulatory-watch sections) but has not been gazetted as of 28 September 2026 — so nothing on this page is describing a superseded rule as current. See the human-verification row above regarding whether to add a pointer.
- **Companies Act 2013 s.149(3):** Current; correctly reflects the 2017 amendment's "financial year" wording without misstating it.
- **LLP (Amendment) Act, 2021 (120-day test):** Current, in force since 1 April 2022; correctly distinguished from the (also-current, but separate) 182-day company-director test — no conflation found anywhere in the draft.
- **No outdated process, superseded rule, or discontinued form was found stated as current anywhere in the draft.**

---

## Overall Fact-Check Verdict

**Needs human professional sign-off before publish** — not because any claim was found to be wrong, but because:
1. Every government-primary-source check this session was blocked at the network level (`EGRESS_BLOCKED` on mca.gov.in, rbi.org.in, rbidocs.rbi.org.in, incometaxindia.gov.in), so verification rests on strong convergent secondary sourcing and internal consistency with AU's own already-published sibling pages rather than a direct primary-source read — appropriate for this stage to flag rather than assert unearned confidence, per this role's explicit guardrails.
2. Two of the draft's most load-bearing, "checkable" claims (the SPICe+/RUN currency correction, and the RBI net-worth/track-record thresholds sitting next to a pending unnotified reform) are exactly the kind of time-sensitive regulatory content this role is required to route to a qualified human rather than wave through on secondary-source confidence alone.

No items require a loop-back to the writer — there is nothing to fix. This can proceed to Stage 10 once a qualified human at AU Corporate confirms the two flagged items above (ideally with working access to mca.gov.in/rbi.org.in) before the page goes live.
