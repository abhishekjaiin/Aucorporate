# SEO Edit Notes: OIDAR & GST Registration in India for Foreign SaaS and AI Companies (Page A)

Reviewed against `06-content-architecture.md` (Page A spec) and `02-keyword-intent-map.md`. This was an on-page SEO/readability review only — no restructuring, no new facts or claims added.

## Checklist Results

| Check | Status | Notes |
|---|---|---|
| Primary keyword in title | Pass | "GST & OIDAR Registration for Foreign SaaS Companies in India" — both dual-target terms present, naturally, matches approved Stage 6 title verbatim. |
| Primary keyword in H1 | Pass | "OIDAR & GST Registration in India for Foreign SaaS and AI Companies" — matches approved H1, naturally worded. |
| Primary keyword in first ~100 words | Pass | "GST registration obligation" appears ~30 words into the opening paragraph; full SaaS/AI framing is set by the title/H1 immediately above it. Not a forced exact-match insertion — appropriately natural. |
| Primary keyword in ≥1 H2 | Pass | "OIDAR" appears in H2 #2 ("What Counts as OIDAR...") and H2 #6 ("...the OIDAR Compliance Calendar"); "GST" appears in H2 #5 and H2 #9. |
| Primary keyword in meta description | Pass | "when OIDAR/GST registration is mandatory" — present, natural, not stuffed. |
| Secondary/long-tail keyword coverage | Pass | GSTR-5A, non-resident taxable person, foreign SaaS company GST India (near-verbatim in FAQ 6's heading), NTOR, digital-services concepts all covered organically. No forced insertions found. |
| Search intent order matches Stage 2/6 | Pass | H2 sequence matches the architecture's 1–11 order exactly (threshold rule → OIDAR scope → B2B carve-out → decision framework → registration → filing calendar → penalties → equalisation levy → post-entity GST → global context → FAQ). |
| Semantic coverage (entities/regulations) | Pass, with one gap flagged | CGST Act §24/§122/§50, IGST Act §13(12), NTOR, SAC 9983, equalisation levy, SEP §9(9) all present. gst.gov.in's Non-Resident Taxable Person user guide (tutorial.gst.gov.in) — which the architecture explicitly calls for as a **direct external link**, not just paraphrase — is not linked anywhere in the draft. See Remaining Issues. |
| Heading hierarchy | Pass | Single on-page H1, consistent H2s for all major sections, no stray H3s (architecture doesn't call for H3 sub-structure on this page; sub-bullets under each H2 are correctly rendered as body content/lists, not headings). |
| Title/meta length & click-worthiness | Flagged, not edited | Meta description (~159 chars) is at the edge of typical display but acceptable. Title is 73 characters, not the 65 the architecture doc claims — see Remaining Issues; not changed since it's explicitly approved verbatim from Stage 6. |
| URL matches Stage 6 | Pass | `/oidar-gst-registration-india`, confirmed unchanged. |
| Internal links present per Stage 6, natural anchor text | Pass, one gap fixed | All specified anchors checked individually (see Edits Made / table below). `/india-business-setup/company-formation` was missing entirely — added. No generic "click here"/"read more" anchors anywhere. |
| FAQ snippet/schema-ready formatting | Pass | All 10 FAQ answers lead with a direct answer (often "Yes"/"No" or an immediate definition) before elaborating — matches FAQPage schema and PAA-snippet conventions. Order and count match the architecture's 10-item list exactly. |
| Featured snippet opportunity | Pass, opportunity noted | FAQ #2's answer ("OIDAR stands for Online Information and Database Access or Retrieval — the category under Indian GST law covering digital services delivered over the internet with little to no physical intervention," ~35 words) is a strong snippet candidate for "what is OIDAR." Section 1's second paragraph is also close to a snippet-length direct answer for the core "do I need to register" question, though it runs slightly over 60 words — left as-is since trimming it would cut necessary nuance ("no revenue floor," "incorporation status is irrelevant") for a marginal length gain. |
| Readability | Pass | Long compound sentences are frequent but consistent with the approved tone brief ("humanized, plain-spoken, mechanism-first," direct/specific voice) and the site's existing register on comparable live pages. Not edited — this is a style match, not a defect. Jargon (NTOR, OIDAR, reverse charge) is explained on first use; SAC Code is used without definition, which is acceptable for the CFO/finance-lead target audience. |
| Conversion opportunities / CTA placement | Pass | Mid-page LeadForm sits immediately after the decision framework (the point a reader has just self-identified), inline CTAs sit inside the registration and filing-calendar sections where they answer the reader's next question, end-of-page LeadForm + RelatedResources — matches the architecture's CTA strategy exactly. |

## Edits Made

1. **Added missing internal link to `/india-business-setup/company-formation`** in the "How This Differs From GST Once You Have an Indian Entity" section (H2 #9). The architecture's internal-linking table requires this link with the framing "once you do incorporate, GST registration works differently — see our full company registration guide," and it was absent from the draft entirely (not in body copy, not in the RelatedResources grid). Added one clause at the end of the section's first paragraph: "And GST registration itself works differently at that stage too, alongside the rest of the entity-setup process — our [company registration guide](/india-business-setup/company-formation) covers SPICe+ and incorporation mechanics in full." This is the section where the link fits most naturally (it's already disambiguating pre- vs. post-incorporation GST), so no other section needed touching.

That is the only content edit made. Every other internal link, keyword placement, heading, and FAQ item in the draft already satisfied the checklist — no other changes were made, per the over-optimization guardrail.

## Internal Link Anchor Text Verification (full check against Stage 6's table)

| Target page | Suggested anchor (Stage 6) | Draft anchor used | Verdict |
|---|---|---|---|
| `/services/taxation-regulatory` | "taxation & regulatory practice" | "taxation & regulatory practice" (2 instances) | Match |
| `/doing-business-in-india/incorporation` | "incorporation-timing guide" | "incorporation-timing guide" (3 instances) | Match |
| `/india-entry-for-saas-companies` (Page B) | "India entry guide for SaaS and AI companies" | Same, used 3x in body + RelatedResources card | Match |
| `/india-business-setup/company-formation` | "company registration guide" | Missing — now added | Fixed |
| `/outsourcing` | "accounting & outsourcing team" | "accounting & outsourcing team" | Match |
| A relevant `india-entry-for-*-companies` hub (light, optional) | — | Not included | Optional per architecture; not added, see Remaining Issues |

No generic anchors ("click here," "read more," bare URLs) found anywhere on the page.

## Snippet/FAQ Opportunities Identified

- **FAQ #2 ("What is OIDAR under GST?")** — strong, ready-to-use featured-snippet/PAA candidate as written; no edit needed.
- **FAQ #3 ("Is there a turnover threshold...")** — direct "No" opener is well positioned to win the "GST threshold foreign SaaS company" query cluster.
- **FAQ #6 ("What happens if a foreign SaaS company doesn't register...")** — near-exact match to the secondary keyword "foreign SaaS company GST India," and structured as a direct-answer-first paragraph; good snippet candidate once the penalty-quantum figure is confirmed by Stage 9 (currently correctly left unquantified).
- Section 1's second paragraph (the "transactional, not structural" trigger explanation) is the best on-page candidate for winning a featured snippet on "do I need to register for GST in India as a foreign SaaS company" — it's slightly long for a clean 40–60 word snippet, but shortening it would remove genuinely load-bearing qualifiers (no revenue floor, no grace period, incorporation irrelevant). Recommend leaving as-is; Google can and does snippet longer paragraphs by extracting the first 1–2 sentences.

## High-Risk Claim: DGGI/Payment-Gateway Enforcement Trend

Reviewed the "What Happens If You Don't Register" section's claim: *"Indian tax authorities increasingly able to cross-reference payment-gateway and card-network data to identify overseas sellers billing Indian customers without a registration on file."*

**Assessment:** the writer has already hedged this reasonably well from a trust standpoint — it doesn't name DGGI specifically in the visible copy, doesn't cite a specific enforcement action or dataset, and is framed as a general, unquantified trend rather than a stated fact with a false citation. That's the right instinct.

**Recommendation:** leave the wording as-is for Stage 9 to resolve, rather than softening it further at this stage, for two reasons: (1) it's already appropriately hedged in tone — a further hedge risks the "stacked qualifiers" problem the tone brief explicitly warns against; (2) this is a factual-sourcing question (does a checkable source exist for this trend), which is Stage 9's job, not an SEO/trust wording question I should resolve unilaterally. That said, I'd flag this as Stage 9's single highest-priority item on this page — if no citable source turns up, my recommendation is to trim the sentence to something more generic ("enforcement in this space has become more active, not less, over the past couple of years") and drop the specific "payment-gateway and card-network data cross-referencing" mechanism claim, since a specific-but-unsourced mechanism is a bigger trust/E-E-A-T liability than a general, unsourced trend statement. I have not made this edit myself — it would be altering a factual claim, which is Stage 9's call, not mine.

## Remaining Issues (send back to writer/Stage 9 if needed)

1. **gst.gov.in Non-Resident Taxable Person user guide not linked.** The architecture's "External Authoritative Sources to Cite" list explicitly calls for linking directly to the tutorial.gst.gov.in NRTP registration guide rather than only paraphrasing it, likely in the "Registering: Form GST REG-09..." section. This is a genuine trust/authority-signal gap — not something I'll add myself since I don't have the exact current URL to cite confidently; recommend Stage 9 supply the verified link and the writer/an editor insert it into the registration section.
2. **Title tag length discrepancy.** The architecture doc describes the approved title as "65 characters" but it actually measures ~73 characters, which is at real risk of truncation in the SERP (safe full-display zone is roughly 55–60 characters, with some tolerance to ~65-70 depending on character widths). I have not changed the title, since it's explicitly approved verbatim from Stage 6 and title changes are outside a minimal SEO-edit pass — flagging for whoever owns final title sign-off (Stage 6/11) to decide whether to accept truncation risk or shorten.
3. **Optional light cross-link to a country-specific `india-entry-for-*-companies` hub** (e.g., US/UK/Singapore) is listed in the architecture's internal-linking table as optional/light for this page and isn't present. Not added — genuinely optional per the source doc, and adding it would mean introducing a new sentence not called for by the approved section structure. Flagging only so it isn't mistaken for an oversight.
4. **DGGI/payment-gateway enforcement claim** — see dedicated section above. Needs Stage 9 sourcing or trimming; not resolved at this stage by design.
5. All other writer's-note verification items (CBIC notification number, Form GST REG-09 correctness, GSTR-5A due date, SAC 9983/18% rate, Section 122 penalty quantum, Section 50 rate applicability, IGST §13(12) mechanics, equalisation levy withdrawal dates) are factual-sourcing questions correctly routed to Stage 9 and outside this pass's scope — no SEO concern with how they're currently phrased (all are appropriately qualitative/unquantified where unverified, consistent with the "don't invent figures" guardrail).

## Over-Optimization Check

No keyword-stuffing found. The draft does not force the exact long-tail phrase "GST registration for SaaS companies in India" verbatim into the body copy — it's carried by the title/H1/meta and represented naturally through paraphrase and the FAQ headings instead, which is the right call per the no-forced-insertion guardrail. Repeated identical anchor text for the same destination page (e.g., "incorporation-timing guide" x3, "India entry guide for SaaS and AI companies" x3) is intentional cross-link consistency per the architecture, not stuffing. No edits made on over-optimization grounds because none were needed.
