# Content Architecture: Project Office in India

## READ THIS FIRST — Flag for Stage 9 (fact-authority-checker), cannot be missed

**The UIN question is unresolved and must not be flatly answered on this new page — and this pipeline's research has cast doubt on a claim currently LIVE on two published sibling pages.**

- Stage 1/2/3/4/5 all independently converge on the same finding: sources are in direct, unhedged contradiction over whether RBI issues a Unique Identification Number (UIN) to a Project Office. Some (taxguru.in, setindiabiz.com, masllp.com, carajput.com, gkkediaandco.com) say yes, via Form FNC-1/Regulation 5, the same as a Branch or Liaison Office. Nishith Desai's FAQ PDF says flatly no. vjmglobal's synthesis was incoherent on the point. This is **not primary-source confirmed either way** — WebFetch to rbi.org.in was blocked throughout this pipeline.
- **Both `/branch-office-in-india` and `/liaison-office-in-india` currently state, live, in their `structureComparison` card and (on the Branch Office page) in an FAQ answer: "Unlike a Branch or Liaison Office, a Project Office does not require RBI to issue a Unique Identification Number (UIN) in the same way."** This pipeline's fresh research suggests that claim may be wrong or at least unverified, not settled fact.
- **Directive for this page (Stage 7 writer):** do not assert either "a Project Office gets a UIN" or "a Project Office doesn't get a UIN" as flat fact anywhere on this page — not in the H1/meta/title, not in a headline FAQ answer, not in the application-process body copy. Hedge it explicitly, the same way the live Branch Office page hedges its own unresolved validity-period question (see its "How Long Can a Branch Office Operate" section for the house style: name what's confirmed, name what isn't, and say why). See the "UIN Hedge — Required Language Pattern" note under the H2/H3 outline below for exactly where this goes and how to phrase it.
- **Directive for Stage 9 specifically:** this is the one fact on this page Stage 9 must make a final, sourced call on before this page ships. If Stage 9 resolves it (e.g., by successfully reaching rbi.org.in, the FEMA 22(R)/2016-RB text, or the RBI Master Direction), update this page's hedged language to state the resolved fact plainly. **Separately and explicitly**, Stage 9 should then assess whether the sentence live on `/branch-office-in-india` and `/liaison-office-in-india` ("a Project Office does not require RBI to issue a UIN... in the same way") is now contradicted by that resolution, and if so, **flag it to the orchestrator as a required follow-up correction to those two live pages** — this is a decision for the orchestrator to act on after Stage 9, not something Stage 9 or Stage 7 should silently fix themselves on this page or those two pages.

## Recommended Content Type

**India-entry guide / durable reference page (matching the sibling `/branch-office-in-india` and `/liaison-office-in-india` pages exactly)** — not a blog article, not a pure service/registration-sales page.

Why, tied to SERP intent: Stage 1 found the ranking SERP is a hybrid of high-volume commercial registration-service pages (setindiabiz, ascgroup, corpzo, companiesnext, kbcca, etc.) and informational explainer/comparison content (taxguru.in's 5+ URLs, government FAQ/notification pages). Stage 2 classified the primary keyword "project office in India" as informational/commercial hybrid — the query defines the entity type but the dominant ranking cluster is registration-service content. Neither a narrow transactional service page nor a dated blog post matches that hybrid intent or the decision-sequence a CFO/counsel actually works through (eligibility → route → application → activity boundary → tax exposure → ongoing compliance → closure, per Stage 5's explicit reader-sequencing guidance). A single, comprehensive, durable guide — evergreen, dated only via a "regulatory watch" callout rather than a blog publish date — is what both this topic and the matched three-page set require. This is also the only content type consistent with being page three of a deliberately matched trio; a different content type here would break the set's internal consistency that Stage 5 explicitly protects.

## Cannibalization Check

- **No existing AU Corporate page targets "project office in India" as a primary keyword.** Confirmed via `content-ops/keyword-database/topics.csv` (no row) and via `STATUS.md`'s own pre-check. This is a genuine content gap, not a competing page.
- `/branch-office-in-india` and `/liaison-office-in-india` both mention Project Office only briefly, inside a four-card decision-framework grid (`structureComparison` array) — a one-paragraph description, not a deep treatment. No overlap risk; if anything, this new page is the canonical destination those two cards should eventually link to (see Internal Linking).
- `/india-business-setup/company-formation` and `/india-business-setup/page.tsx` each list "Project Office" as one row in a broader entity-comparison table with a single-sentence description. Same pattern — light top-level mention inside a broader page, not a competing deep-dive.
- `/india-entry-for-saas-companies` mentions Project Office briefly in an entity-fit card ("Fits a single, time-limited contract, not an ongoing SaaS or platform business") — audience-specific framing, no overlap.
- **Recommendation: build the new standalone page.** Do not expand an existing page instead — none of the above pages attempt PO depth, and per Stage 5, this page is explicitly the third leg of an already-published matched pair, which only works as its own URL.

## SEO Title

**Project Office in India: RBI Approval, Registration & Compliance Guide (2026)**

(79 characters. Matches the register of the Branch Office page's title exactly — "RBI Approval, Process & Compliance Guide (2026)" — while using "Registration" in place of "Process" since Stage 2/3 found "project office registration India" is itself a named secondary keyword with a dense commercial cluster behind it.)

## Meta Description

**How to set up a Project Office in India: FEMA/Regulation 5 eligibility, RBI/AD-bank approval via Form FNC-1, permanent establishment tax exposure, AAC compliance and closure.**

(159 characters — within the ~155-160 character band the two sibling pages' meta descriptions also sit in.)

## Suggested URL

**`/project-office-in-india`**

Top-level standalone, mirroring both siblings' precedent (`/branch-office-in-india`, `/liaison-office-in-india`) rather than nesting under `/india-business-setup/` or `/doing-business-in-india/`. Already added to `app/sitemap.ts` at priority 0.9 / changeFrequency "monthly", matching both siblings exactly (see note at end of this document).

## Primary Keyword

**project office in India**

## Secondary Keywords

- project office registration India
- RBI approval project office India
- project office vs branch office vs liaison office India
- closure of project office India
- project office eligibility India
- project office permanent establishment India
- Form FNC-1 project office India
- Regulation 5 project office India
- Annual Activity Certificate project office India

## Search Intent

Informational/commercial hybrid. The reader has almost always already secured a specific Indian contract/project and needs to know (a) whether they qualify for the lighter general-permission route or need RBI's specific approval, (b) how to actually register, (c) what tax exposure the structure creates, and (d) how to close it out cleanly at project completion. Not a pure "explain the concept" query, but also not a self-serve transactional/checkout query — Stage 1 confirmed no purely transactional pages rank here; even the commercial-cluster pages are consultative lead-gen, not checkout flows.

## Target Audience

A CFO, in-house counsel, or founder at a foreign company that has already won a specific Indian contract and needs a compliant, time-bound India presence to execute it — plus a clear picture of the tax exposure it creates and how to wind it down when the project ends. (Per Stage 5's explicit reader framing — write for this person's actual decision sequence, not a generic "everything about Project Offices" reference dump.)

## Recommended H1

**Project Office in India: A Complete Guide to RBI Approval, Registration and Compliance**

---

## H2/H3 Structure

Ordered around the reader's actual decision sequence per Stage 5: eligibility → route → application → activity boundary → tax exposure → ongoing compliance → closure. Section-by-section notes point back to the specific Stage 1-5 finding driving that section, so the writer isn't inventing structure.

### 1. What Is a Project Office in India?
- Not a separate legal entity — an extension of the foreign parent, same framing device the two sibling pages use ("no separate Indian shareholding, no separate board").
- Statutory basis: Section 6(6), FEMA, 1999; operative regulation is FEMA 22(R)/2016-RB (Foreign Exchange Management (Establishment in India of a Branch Office or a Liaison Office or a Project Office or Any Other Place of Business) Regulations, 2016) — reuse verbatim framing from both sibling pages for consistency.
- Defining condition: exists for the fixed duration of a specific contract/project a foreign company has secured from an Indian entity — not an ongoing representative or revenue-generating presence the way a Branch or Liaison Office is.
- "Who this page is for" paragraph, mirroring both siblings' convention.

### 2. Project Office vs Branch Office vs Liaison Office vs Wholly Owned Subsidiary: Which One Fits?
- Reuse the exact `structureComparison` card pattern and copy already live on both sibling pages verbatim for the Liaison Office, Branch Office, and Wholly Owned Subsidiary cards, per Stage 5's explicit instruction to keep the three-page set internally consistent.
- **The Project Office card's own copy is the one exception requiring a rewrite** — see the UIN Hedge note below; do not carry forward the current live sentence ("does not require RBI to issue a... UIN in the same way") verbatim without the hedge.
- Link to `/branch-office-in-india` and `/liaison-office-in-india` as the "too broad/too narrow" alternatives, matching how each sibling links to the other.

### 3. Who Can Set Up a Project Office — Eligibility Under Regulation 5
- Table-stakes per Stage 4's Minimum Coverage List item 1: state plainly that eligibility hinges on the underlying contract, not a net-worth/profit-track-record test (that test is Branch/Liaison-specific — do not transfer it here, per STATUS.md's explicit warning).
- **H3: Regulation 5's Four General-Permission Conditions** — name all four explicitly (differentiator per Stage 4, 2/5 competitors only partially cover this): the project is (a) funded by inward remittance from abroad, or (b) funded by a bilateral or multilateral international financing agency, or (c) cleared by an appropriate authority, or (d) the Indian company/entity awarding the contract has been granted a term loan by a public financial institution or bank in India for the project. Hedge the paragraph-number citation itself precisely (Stage 1 Open Question #3 — sources are inconsistent on whether "Regulation 5" is the current, correctly-numbered paragraph in the 2016 regulation or carried forward loosely from the superseded 2000/2003 notifications).
- **H3: Restricted Countries, Sensitive Sectors and Locations** — differentiator per Stage 4 item 4 (0/5 competitors cover this): Pakistan-origin applicants face additional scrutiny; applicants connected to Bangladesh, Sri Lanka, Afghanistan, Iran, China, Hong Kong, or Macau proposing a location in the North-Eastern states, Jammu & Kashmir, or the Andaman & Nicobar Islands are routed through government consultation; Defence, Private Security, Telecom, and Information & Broadcasting sector projects attract the same additional scrutiny. Match the precise, non-absolute phrasing both sibling pages already use for this exact list ("this changes the approval route and timeline; it doesn't automatically rule out an application").

### 4. General Permission vs Specific RBI Approval: Which Route Applies?
- Differentiator per Stage 3/4 (only kbcca gets close to this framing, and even it doesn't name the sectoral triggers): present as an explicit decision framework, not an implied binary. If the Regulation 5 conditions are met and none of the restricted-country/sector triggers apply, the application proceeds through the AD Category-I bank under general permission; otherwise it requires RBI Central Office's specific approval.
- State the **AD Category-I Bank's role** explicitly as the applicant's actual point of contact either way (bank reviews and either processes directly or forwards to RBI) — reuse the exact framing device from both sibling pages' "Routes" sections.

### 5. How to Register a Project Office: Form FNC-1, the AD Bank and the Six-Month Opening Window
- Name **Form FNC-1** specifically (not just "Form FNC") — Stage 1's orchestrator follow-up found RBI hosts a form literally named `form-fnc1.pdf`, titled "FNC 1 (See Regulation 5)," a genuine PO-specific naming distinction from the generic "Form FNC" the sibling pages use for Branch/Liaison. Hedge the FNC vs FNC-1 naming precision per Stage 1 Open Question #2/Stage 2's explicit lower-stakes-but-still-hedge guidance — state it as the most robustly evidenced current name, not an absolute.
- Document set: mirror the sibling pages' document list pattern (parent incorporation documents, audited financials, banker's report, board resolution/authorisation, local representative details) — adjusted to name the specific contract/project as the operative authorising document, since that's what differs for a PO versus BO/LO.
- **The six-month opening window** (+ discretionary further six-month extension "for reasons beyond the applicant's control") — differentiator per Stage 4 item 6, currently isolated to taxguru.in among competitors and absent from every commercial service page. A genuinely useful "what happens if I'm delayed" fact. State it with the same non-absolute hedge Stage 5 instructs ("found on only one competitor source; state it but do not embellish with a false sense of universal confirmation").
- **UIN Hedge — Required Language Pattern (place here, in this section, not as a standalone H2 or a headline FAQ):** After describing Form FNC-1 as the PO-specific application tied to Regulation 5's general-permission route, add a hedged paragraph in the same register as the Branch Office page's validity-period hedge. Suggested shape (writer should adapt, not copy verbatim): *"Sources disagree on whether RBI additionally allots a Unique Identification Number (UIN) to a Project Office the way it does for a Branch or Liaison Office — some describe the same UIN allotment happening via Form FNC-1; others describe Project Offices as exempt from UIN allotment. We were not able to confirm either position against a primary RBI source. What is well established is that Form FNC-1, filed through the AD Category-I bank, is the operative application tied to Regulation 5's general-permission conditions — that mechanism is not in doubt, even where the UIN question specifically is."* Do not resolve it further than this without Stage 9 sign-off.
- **H3: ROC Registration — Form FC-1, PAN and TAN** — the second, separate registration, mirroring both siblings' explicit "RBI approval and ROC registration are two separate, sequential steps" framing. Form FC-1 within 30 days of establishing the place of business, under Section 380 of the Companies Act, 2013 and Rule 3(3)/3(4) of the Companies (Registration of Foreign Companies) Rules, 2014. Per Stage 5's explicit guidance, be careful not to blur the "registered, not incorporated" line — a Project Office is never incorporated, same discipline the Liaison Office page already applies.

### 6. What a Project Office Can and Cannot Do in India
- State explicitly, as an operating rule and not just an implicit entry condition (Stage 4 Minimum Coverage item 4 — most competitors treat this as implicit only): activity is restricted to executing the specific contract/project; no independent commercial trading or activity beyond the sanctioned project.
- Local hiring: brief, factual mention only (subject to standard labour-law/payroll obligations), matching both siblings' treatment — per Stage 5, explicitly do not expand into a Payroll service pitch here.

### 7. Tax Exposure: Permanent Establishment Risk for a Project Office
**This is the page's genuine point of difference — give it real depth.** Per Stage 3/4, zero of the five analyzed competitor pages integrate PE/tax-risk content into the core registration page; it lives in a disconnected tax-journal tier instead (bcajonline.org, taxsutra, ahlawatassociates.com).
- State plainly that a Project Office, unlike a Liaison Office, is executing revenue/contract-linked activity and is therefore the entity type in this three-page set most likely to create a Permanent Establishment (PE) in India.
- Name **construction/installation PE** and **profit attribution to the PE** as the operative concepts. Per Stage 5's explicit guardrail: do not assert a specific universal treaty-article number or day-threshold as if it applies identically across all of India's DTAAs — that varies by the parent's home jurisdiction. Apply the same discipline the Branch Office page already uses when it declines to state a validity period it can't confirm.
- **H3: Why a Project Office Carries Higher PE Risk Than a Liaison Office** — direct comparative framing, extending the existing published claim on `/services/taxation-regulatory` that a foreign company operating through "a branch or project office" is "taxed differently, and generally less favourably" than an incorporated subsidiary. Reuse the **35% base corporate tax rate** figure (reduced from 40% under the Finance Act 2024) already stated on the Branch Office page — per Stage 5, do not restate a different number.
- Link out to `/services/taxation-regulatory` for the fuller international-tax/DTAA picture rather than trying to fully resolve treaty-specific mechanics on this page.

### 8. GST Registration for a Project Office
- Differentiator relative to the Liaison Office page's treatment (which addresses GST only to explain why it typically doesn't apply). Here, per Stage 5, the natural framing is closer to the Branch Office treatment: a live compliance question tied to the specific contract being executed, since a Project Office is revenue/contract-linked by definition.
- Mention reverse-charge treatment on payments back to the parent as relevant if the PO receives funding/services from the parent — link to the existing RCM explanation already published on `/services/taxation-regulatory`.

### 9. Ongoing Compliance: AAC, FLA Return and ITR Filing
- Named, dated compliance items instead of generic language — the single clearest, lowest-effort differentiator per Stage 4 item 3 (0/5 competitors name these specifically).
- **Annual Activity Certificate (AAC)**: CA-certified, filed annually, routed to two authorities in parallel — the AD Category-I bank and the Directorate General of Income Tax (International Taxation) — reuse the exact "routed to two authorities in parallel" framing device both sibling pages use.
- **FLA return** and **ITR filing** (ITR-6) named specifically, per Stage 2's secondary/long-tail keyword targeting.
- Link to `/india-business-setup/regulatory-compliance` for the broader compliance landscape, matching both siblings' pattern.

### 10. Closing or Winding Up a Project Office
- Full step-level sequence at or above vjmglobal's level of specificity (the current competitive bar per Stage 3/4): CA certificate confirming Indian liabilities are settled or provided for (in the RBI-prescribed format) → ROC deregistration → AD-bank submission with the CA certificate and ROC closure certificate → AD-bank compliance verification → AD-bank reporting to RBI with a closure declaration → Form 15CA/15CB for final remittance of remaining funds to the parent.
- Hedge the FC-2/Section 380 closure-mechanics-for-PO-specifically point per Stage 1 Open Question #4 — sources weren't fully consistent on whether PO closure follows the identical ROC/Form FC-2 route as BO/LO.
- Pair with primary-source citation, which even vjmglobal itself lacks (per Stage 4's explicit "turn the current best-in-class competitor content into a genuinely citable, more authoritative version" framing).

### 11. How AU Corporate Supports Project Office Registration and Compliance
- Per Stage 5's explicit instruction: describe a real coordination problem, not a features list. Name the specific authorities (AD bank, ROC/MCA, Directorate General of Income Tax) plus — uniquely for this entity type — the PE/tax-exposure assessment as the fourth coordination thread, and state what AU Corporate actually coordinates between them.
- No bulleted service-catalogue menu, no superlative language ("best-in-class," "trusted partner," "industry-leading") — neither sibling page uses that language and this page must not either.
- End in a plain, low-pressure CTA to `/contact` — mirror both siblings' exact closing-paragraph pattern.

### 12. Frequently Asked Questions
See dedicated FAQ Structure section below.

---

## FAQ Structure

Pulled from Stage 1's PAA-proxy list and Stage 2's Question Keywords table — real recurring questions from research, cross-checked against what Stage 3/4 confirm the competitive set fails to answer well. Order roughly follows the page's own section order.

1. **What is a project office in India?** — definitional, matches the dominant framing question across the ranking set (Stage 1).
2. **What is the difference between a branch office, liaison office and project office in India?** — direct comparison question; reinforces the sibling-page relationship (Stage 2 confirms no cannibalization risk).
3. **What are the eligibility conditions for a project office under FEMA/Regulation 5?** — name the four general-permission conditions concisely; this is the differentiator per Stage 4.
4. **Do I need RBI's specific approval, or can my project office go through the AD-bank general-permission route?** — the general-permission vs specific-approval decision framework Stage 3/4 confirm no competitor presents cleanly.
5. **What is Form FNC-1, and how is it filed for a project office?** — hedge the FNC vs FNC-1 naming precision per Stage 1 Open Question #2.
6. **Does RBI issue a Unique Identification Number (UIN) to a project office?** — **hedged answer only, per the READ THIS FIRST flag above.** Do not phrase this as a confidently-answered fact. State that sources disagree, name the more robustly evidenced fact (Form FNC-1/Regulation 5 as the operative application), and stop there pending Stage 9.
7. **What activities can a project office undertake in India?** — state the activity-boundary rule explicitly (tied to the specific project only), a gap per Stage 4's Unanswered PAA list.
8. **Does a project office create a Permanent Establishment (PE) for tax purposes?** — the flagged competitive white space (Stage 1 Open Question #6, Stage 4 differentiator #2). Name construction/installation PE without asserting a universal treaty threshold.
9. **Does a project office need GST registration?** — live compliance question, distinct framing from the Liaison Office page's FAQ on the same topic.
10. **What is the Annual Activity Certificate (AAC), and when is it due for a project office?** — named specificity per Stage 4 differentiator #3.
11. **How long does a project office have to open after approval?** — the six-month window + discretionary extension, Stage 4 differentiator #6.
12. **Can a company from Pakistan, China or Bangladesh open a project office in India?** — mirrors both sibling pages' equivalent FAQ; sectoral/geographic triggers, Stage 4 differentiator #4.
13. **How do you close or wind up a project office in India?** — matches Stage 4's Unanswered PAA list; only vjmglobal answers this well among competitors.

Do **not** add a 14th FAQ that restates the UIN question a second time in a different phrasing ("Is a project office exempt from UIN?" etc.) — one hedged treatment in the body (Section 5) plus FAQ #6 is the correct amount of coverage; duplicating it risks making the hedge read as evasive rather than careful.

---

## Internal Linking

### Pages that should link TO this page

| Existing page | Suggested anchor text |
|---|---|
| `/branch-office-in-india` (`structureComparison` Project Office card + comparison-section prose) | "Project Office in India guide" — replace the current unlinked card description; **this card's copy itself needs the UIN-hedge rewrite described above, on both sibling pages, flagged separately for Stage 9/orchestrator follow-up, not silently done here** |
| `/liaison-office-in-india` (`structureComparison` Project Office card + comparison-section prose) | same as above |
| `/india-business-setup/page.tsx` (Entity Options paragraph, currently links to Branch Office and Liaison Office guides only — "...or the dedicated Branch Office registration guide or Liaison Office guide if either structure fits your plans.") | "Project Office guide" — add as a third linked option in that same sentence |
| `/india-business-setup/company-formation` (paragraph: "...is usually better served by a Liaison Office or Project Office, which carry far lighter compliance...") | "Project Office" — currently plain, unlinked text; convert to a link |
| `/india-entry-for-saas-companies` (Project Office entity-fit card, currently plain text heading) | "Project Office" — convert card heading to a link |
| `/india-business-setup/timeline-resources` (Entity Selection & Documentation step: "...a Branch/Liaison/Project Office...") | "Project Office" — convert to a link |
| `/doing-business-in-india/pre-incorporation` ("Liaison or project office" card title/description) | "project office" — convert to a link |
| `/services/taxation-regulatory` (Direct Taxation intro: "A foreign company operating through a branch or project office... is taxed differently, and generally less favourably...") | "project office" — convert to a link |

### Pages this page should link TO

| Existing page | Suggested anchor text |
|---|---|
| `/branch-office-in-india` | "Branch Office in India guide" — the more commercially-active alternative, in the decision-framework section |
| `/liaison-office-in-india` | "Liaison Office in India guide" — the lighter-touch alternative, in the decision-framework section |
| `/india-business-setup/company-formation` | "company registration guide" — for readers who conclude they need a full subsidiary instead, matching both siblings' "Who this page is for" convention |
| `/india-business-setup/fdi-channels` | "FDI Automatic vs Government route" — to explicitly distinguish the FEMA 22(R) establishment framework this page covers from the FEMA 20(R) equity-investment framework, matching the Liaison Office page's explicit discipline on this point |
| `/services/taxation-regulatory` | "International Taxation and DTAA Advisory" — for the fuller PE/DTAA and GST picture, matching the Liaison Office page's exact linking pattern |
| `/india-business-setup/regulatory-compliance` | "ongoing regulatory compliance" — broader compliance landscape, matching both siblings |
| `/blog/wholly-owned-subsidiary` | "wholly owned subsidiary incorporation guide" — comparison resource, matching both siblings' Related Resources block |
| `/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india` | "US subsidiary vs branch office comparison" — Related Resources, matching both siblings (note: framed as the closest existing country-specific comparison; no PO-specific country comparison exists yet) |
| `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india` | "UK subsidiary vs branch office comparison" — Related Resources, matching both siblings |
| `/contact` | "get in touch" — CTA, matching both siblings' closing pattern |

### New supporting article needed?

**No, not at this stage.** Stage 5 is explicit that the PE/tax-risk content belongs integrated into this page (Section 7), linking out to `/services/taxation-regulatory` for the fuller DTAA picture rather than resolving treaty-specific mechanics here or in a new standalone piece. A future, narrower cluster article on "Construction/Installation PE in India" (treaty-article-level depth, jurisdiction-by-jurisdiction) is a plausible later opportunity given Stage 1/4's PE-content-gap finding, but it is not required for this page to be competitive now, and building it prematurely would pull PE content back out of the one page in the competitive set that could finally integrate it — the opposite of the differentiation angle Stage 4/5 identify.

---

## External Authoritative Sources to Cite

- **FEMA 22(R)/2016-RB** — Foreign Exchange Management (Establishment in India of a Branch Office or a Liaison Office or a Project Office or Any Other Place of Business) Regulations, 2016. The operative regulation; cite/link it directly (Stage 4: zero of five analyzed competitors do this — genuine sourcing-edge opportunity).
- **RBI Master Direction — Establishment of BO/LO/PO.** Stage 1 found this currently mirrored only on a private domain (fedcontech.com); Stage 9 should attempt to locate and cite RBI's own hosted copy rather than the private mirror.
- **RBI Form FNC-1** (`rbi.org.in/Upload/Forms/Pdfs/form-fnc1.pdf`, titled "FNC 1 (See Regulation 5)") — cite carefully, and only in support of the Form FNC-1/Regulation 5 mechanism, not as resolving the UIN question (per the hedge above).
- **RBI's own consumer FAQ page** (rbi.org.in FAQs Id=1303) — ranks in the SERP itself; aligning with/citing it borrows authority rather than competing blind.
- **Companies Act, 2013, Section 380**, and **Companies (Registration of Foreign Companies) Rules, 2014, Rule 3(3)/3(4)** — MCA. Note for Stage 9: no MCA (mca.gov.in) primary source appeared in any research stage of this pipeline despite this being central to the ROC leg — a genuine sourcing gap Stage 9 should try to close with a real mca.gov.in link before publication, not just a Companies Act citation without a URL.
- **Income Tax Act, 1961** (transitioning to the **Income Tax Act, 2025** for periods beginning 1 April 2026, per the framing already used on `/services/taxation-regulatory`) PE provisions, and the applicable DTAA's Permanent Establishment article generically (not a fixed article number/threshold — varies by treaty).
- **Finance Act, 2024** — source for the 35% base corporate tax rate on foreign companies, already cited on `/branch-office-in-india`; reuse the identical figure, do not restate a different number.

---

## CTA Strategy

Informational/hybrid funnel stage, matching both sibling pages exactly — **soft, consultative CTAs throughout, not direct/transactional ones**, reflecting Stage 1's finding that even the commercial-cluster competitor pages are lead-gen, not checkout flows.

- **Mid-page**: none — neither sibling page interrupts the body content with a CTA before the AU Corporate support section; this page shouldn't either.
- **"How AU Corporate Supports" section (Section 11)**: a single plain-language CTA ending the section — "get in touch" linking to `/contact` — framed around the specific four-authority coordination problem (AD bank, ROC/MCA, Directorate General of Income Tax, plus the PE/tax-exposure assessment), not a generic "contact us" prompt.
- **End-of-page LeadForm**: title and description scoped to the actual decision this reader is making, mirroring both siblings' pattern exactly — e.g., "Deciding If a Project Office Fits Your India Presence?" / "Whether you're still confirming eligibility under Regulation 5 or ready to file Form FNC-1, our team can walk through the RBI/AD-bank approval and closure sequence for your specific situation."
- No superlative claims, no bulleted service-catalogue menu, no upsell into unrelated services (Virtual CFO, Payroll, Valuation) per Stage 5's explicit exclusion list.

## Unique Content Angle

Three angles, all grounded in Stage 4/5 findings, not invented:

1. **The registration-mechanics team and the tax team are the same firm, so this page can honestly connect PE/tax exposure to the core registration content on one page** — something zero of the five analyzed competitor pages do (Stage 3/4). This extends an existing, already-published AU Corporate claim (`/services/taxation-regulatory`'s "taxed differently, and generally less favourably" line) rather than inventing a new one for SEO purposes.
2. **Named, dated compliance mechanics instead of generic "ensure compliance" language** — AAC's dual-authority routing, FLA return, ITR-6, named with the same operational precision already demonstrated on the Branch Office and Liaison Office pages, where every analyzed competitor page (Stage 4) stays generic.
3. **Disciplined, visible hedging on genuinely unresolved points** — the UIN question specifically, plus lower-stakes hedges on Regulation 5's exact paragraph numbering and Form FNC vs FNC-1 naming — mirrors the Branch Office page's own established "we could not confirm X against a primary source" convention. Per Stage 5, this is not a marketing angle; it is the one credibility move Stage 3's competitor analysis explicitly found **zero of five analyzed competitor pages do** on the topic's single most contested fact, and it will read as consistent with the site's existing voice rather than as a new gimmick.

---

## Note: `app/sitemap.ts` updated

Per the task brief, `/project-office-in-india` has been added to `app/sitemap.ts` in the Entity-Type Pages block, directly after `/liaison-office-in-india`, at `priority: 0.9`, `changeFrequency: "monthly"` — identical to both sibling entries. `lastModified` is set to `2026-09-22` (today, when this blueprint was produced); a later stage should update that date to the actual publish date once the page draft (Stage 7 onward) goes live, consistent with the file's own header comment against defaulting lastModified dates.
