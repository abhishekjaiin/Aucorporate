# SERP Research: Closing an Indian Subsidiary — Strike-Off vs Voluntary Liquidation for US Parent Companies
Date: 2026-09-29

## Tooling notes / limitations (read before using this file)
- **WebFetch was unavailable for the entire session** — every attempted fetch (treelife.in, globaladvisoryexperts.com, india-briefing.com, legalwiz.in, registerkaro.in, taxguru.in, even en.wikipedia.org) returned `EGRESS_BLOCKED` from the network proxy. No page was directly fetched and rendered. All titles, topics, and structural notes below are inferred from **WebSearch result snippets and the AI-summarized answer text WebSearch returns**, not from reading full rendered pages. Outline/H1-H2 detail is therefore approximate, not a verified extraction — flagged per-row below.
- **This WebSearch tool does not expose Google's actual "People Also Ask" box or "Related Searches" module as distinct SERP features.** It returns an organic-style link list plus an AI summary for whatever query is run. I ran question-phrased and related-topic queries as a practical proxy for PAA/related-search intent, but I am **not** claiming these are verbatim PAA box entries pulled from a live SERP — see the PAA and Related Searches sections for exact wording of what was labeled.
- **Semrush (`domain_overview`, `organic_research`, `competitors_research`) failed on every call with `no_api_units`** ("active Semrush subscription, but does not have enough API units") — this is the same recurring blocker noted elsewhere this session. No domain traffic, ranking, or keyword-volume data below is from Semrush. Nothing here should be read as verified traffic/ranking data — treat all volume/ranking claims as **not verified**.
- **No Bash/Grep/Glob tool was available in this session** to search the `app/` directory programmatically. The check for existing AU Corporate exit-stage content was done via (a) reading `app/india-entry-for-us-companies/page.tsx` directly, and (b) `site:theaucorp.com` WebSearch queries for "strike off," "liquidation," and "exit," which returned zero indexed matches on theaucorp.com. This is reasonable evidence but **not a full codebase grep** — Agent 2/3 or a human should still run an actual `grep -ri "strike off\|winding up\|voluntary liquidation\|exit" app/` before finalizing the zero-exit-content premise as fact.

## Confirmation of the premise (AU Corporate exit-content gap)
- `app/india-entry-for-us-companies/page.tsx` (the parent cluster page this new page would sit under) covers entity choice, incorporation, FEMA/RBI ongoing compliance, transfer pricing, and cost/timeline — entirely entry- and operate-stage. No mention of strike-off, winding up, voluntary liquidation, exit, or closure anywhere in that file.
- `site:theaucorp.com "strike off"` and `site:theaucorp.com liquidation` and `site:theaucorp.com exit India subsidiary` all returned **zero results from theaucorp.com** — every result was from unrelated third-party domains (Wikipedia, dictionaries, MCA's public struck-off company list, etc.), meaning Google has no indexed theaucorp.com page matching these terms.
- Net: the premise that AU Corporate has no exit-stage content is **corroborated by available evidence**, not independently proven via a full source-tree search. Flagging as above for the next agent.

## Top-Ranking Pages
Ranked roughly by how consistently a URL/domain surfaced across the ~15 queries run (primary keyword, close variants, and question-style queries), not by a single verified SERP position (no rank-tracking tool was available).

| # | URL | Domain | Title (as returned) | Type | Bucket | Notes on structure |
|---|---|---|---|---|---|---|
| 1 | https://treelife.in/legal/how-to-close-an-indian-subsidiary/ | treelife.in | "How to close an Indian subsidiary: Strike off, Voluntary liquidation and Branch office closure" | Blog / advisory guide | Direct competitor | Surfaced for both "exit Indian subsidiary" and "difference between strike off and voluntary liquidation" queries — covers all three exit routes (strike-off, voluntary liquidation, branch closure) in one piece, matching our target scope closely. Not independently fetched; outline not verified beyond title. |
| 2 | https://treelife.in/legal/winding-up-a-wholly-owned-subsidiary-in-india/ | treelife.in | "Winding up a Wholly Owned Subsidiary in India: The Complete Guide" | Blog / advisory guide | Direct competitor | Summary text referenced Section 248 strike-off, FLA return due 15 July, FEMA/DTAA withholding on final distribution, Form FC-TRS for capital reduction, Rule 21 NDI Rules valuation — i.e. this is written for exactly the foreign-parent-exit scenario. Treelife appears to have the deepest, most specific content in this space of anything found. |
| 3 | https://treelife.in/legal/winding-up-a-company-in-india-strike-off-and-liquidation-explained/ | treelife.in | "Winding Up a Company in India: Strike Off and Liquidation Explained" | Blog / advisory guide | Direct competitor | Third distinct Treelife URL surfacing for this cluster — suggests Treelife runs a multi-page content cluster on this exact topic, not one-off content. |
| 4 | https://treelife.in/compliance/strike-offs-for-companies-in-india/ | treelife.in | "Strike-Offs for Companies in India - Types, Process, Requirements" | Blog / advisory guide | Direct competitor | Fourth Treelife URL. Strong signal Treelife has built topical depth here specifically. |
| 5 | https://treelife.in/legal/ibc-voluntary-liquidation-in-india/ | treelife.in | "IBC Voluntary Liquidation in India: A Complete Guide for Startups" | Blog / advisory guide | Direct competitor | Framed for "startups" broadly, not US-parent-specific — a gap our page could target more precisely. |
| 6 | https://globaladvisoryexperts.com/how-to-close-an-indian-subsidiary/ | globaladvisoryexperts.com | "How to Close an Indian Subsidiary: Strike Off vs Voluntary Liquidation, Form STK-2, RBI/FEMA Filings and Timelines" | Article, likely member-firm-contributed | Directory / aggregator — see note | Title is nearly identical in scope to our own topic (strike-off vs voluntary liquidation, STK-2, RBI/FEMA, timelines). "Global Advisory Experts" reads as a legal/advisory marketing network where member firms publish articles, not a single operating advisory firm — not independently verified, flagged as best-guess classification. |
| 7 | https://globallawexperts.com/how-to-close-an-indian-subsidiary/ | globallawexperts.com | "How To Close An Indian Subsidiary" | Article, likely member-firm-contributed | Directory / aggregator — see note | Same network family as #6 ("Global Law Experts"); same classification caveat applies. |
| 8 | https://www.legalwiz.in/blog/voluntary-closure-of-a-foreign-parent-indian-subsidiary-in-india | legalwiz.in | "The Closure of a Foreign Parent Indian subsidiary" | Blog (legal-tech/CS filing platform) | Direct competitor | Title explicitly says "foreign parent," matching our angle directly. |
| 9 | https://www.indialawoffices.com/legal-articles/process-of-closing-a-foreign-subsidiary-in-india | indialawoffices.com | "Process of Closing a Foreign Subsidiary in India" | Law firm blog | Direct competitor (law-firm angle) | Also has a separate companion article, "Voluntary Liquidation of a Company in India - Winding up," on the same domain — second URL from this firm surfaced too. |
| 10 | https://www.registerkaro.in/post/difference-between-winding-up-and-striking-off-a-company | registerkaro.in | "Strike Off vs Winding Up: Key Differences in India" | Blog (compliance filing platform) | Direct competitor | RegisterKaro also surfaced separately for "Strike Off Company: Meaning, Procedure & Revival India 2026" and "Close a Private Limited Company in India – Cost & Process" — three distinct URLs, indicating a content cluster similar to Treelife's. |
| 11 | https://taxguru.in/company-law/exit-strategies-indian-companies-strike-voluntary-liquidation.html | taxguru.in | "Exit Strategies for Companies: Understanding Strike Off & Voluntary Liquidation" | Informational / practitioner-contributed article | Informational publisher | TaxGuru is a CA/CS practitioner-article aggregation site, not a firm selling services directly — informational rather than commercial in intent. |
| 12 | https://www.india-briefing.com/doing-business-guide/india/company-establishment/india-company-liquidation | india-briefing.com | "India Company Liquidation - India Guide \| Doing Business in India" | Guide (Dezan Shira & Associates content marketing) | Direct competitor | India Briefing is Dezan Shira & Associates' publishing arm — a multi-country (India/China/Vietnam/ASEAN) foreign-investment advisory firm with a comparable buyer to AU Corporate (foreign companies operating in India). Strong, well-established competitor in the India-for-foreign-companies space generally. |
| 13 | https://companyformationindia.com/blog/winding-up-a-company | companyformationindia.com | "Winding Up a Company in India: A Comprehensive Guide" | Blog (company formation/filing service) | Direct competitor | |
| 14 | https://www.indiafilings.com/winding-up-of-a-company | indiafilings.com | "Winding Up of Company Online in India" | Service page (large compliance/filing platform) | Direct competitor | IndiaFilings is a large-scale DIY/tech-enabled compliance platform (comparable to Vakilsearch/ClearTax), sells the filing service directly on this page per title. |
| 15 | https://ezybizindia.in/how-to-close-a-subsidiary-company-in-india/ | ezybizindia.in | "Process of closing of Subsidiary Company \| Requisites \| Documents required" | Blog (advisory firm for foreign subsidiaries in India) | Direct competitor | EzyBiz positions itself around foreign subsidiary compliance specifically — one of the closer positioning matches to AU Corporate's own niche. |
| 16 | https://www.pib.gov.in/PressReleasePage.aspx?PRID=1923879 | pib.gov.in | "Centre for Processing Accelerated Corporate Exit (C-PACE) established..." | Government press release | Government / official source | Primary source for the C-PACE centralization of strike-off processing — worth citing directly rather than via a secondary blog. |
| 17 | https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10197 | rbi.org.in | "Master Direction No 13 on Remittance of Assets" | Government primary regulatory text | Government / official source | The actual RBI Master Direction governing remittance of assets on winding-up/liquidation — this is the primary source underlying most of the secondary FEMA commentary seen above. |
| 18 | https://www.mca.gov.in/content/mca/global/en/data-and-reports/rd-roc-info/companies-struck-roc.html | mca.gov.in | "List Of Companies Struck-Off By RoCs (STK-7)" | Government register/data page | Government / official source | Surfaced on a "strike off" query; not directly a how-to guide but confirms MCA's public struck-off register exists and is indexed. |

Note: several smaller/newer-looking filing-platform domains (kanakkupillai.com, indialawoffices.com's sibling articles, setindiabiz.com, beaconfiling.com, signalx.ai) also surfaced once or twice across queries for adjacent angles (struck-off consequences, cost, documents checklist) but with less consistency than domains #1–15 above — listed in classification section below but not given individual outline rows since they didn't repeat across multiple queries.

## SERP Features
Not independently observable with the tools available this session — WebSearch does not expose which SERP features (featured snippet, PAA box, local pack, video, "people also search for") are actually present on the live Google results page; it returns a synthesized answer plus a link list, not a feature-by-feature SERP layout. Based on the pattern of results (a "how to" / comparison-heavy query with many practitioner blog answers, several question-style queries returning direct one-paragraph answers from AI-summarized snippets), it is **likely** this SERP carries a featured snippet and a PAA box for several of the question-phrased queries (e.g. "difference between strike off and voluntary liquidation," "how long does it take to close a company in India") — but this is an inference, not a verified observation, and should not be treated as confirmed.
No local pack, video, or shopping features would be expected for this B2B/legal-process topic; no evidence either way was collected.

## People Also Ask
Not independently verified — WebSearch did not surface a distinct PAA module. The question-phrased queries below were run *as inputs* (i.e., they are queries I chose to run, modeled on likely PAA phrasing for this topic) rather than questions observed embedded in a live SERP's PAA box. Reporting them here as **candidate PAA-style questions worth validating**, not as confirmed verbatim PAA entries:
- "How long does it take to close a company in India?"
- "What is the difference between strike off and voluntary liquidation in India?"
- "What is Form STK-2 and how does the fast track exit process work?"
- "Can a foreign company repatriate money after closing its Indian subsidiary?"
- "What happens to FDI/equity when an Indian subsidiary is struck off?"
- "What is the cost of closing a private limited company in India?"
- "What documents are required to close an Indian subsidiary?"

## Related Searches
Not independently verified for the same reason as above — no "related searches" module was directly observed. The following are query variants that returned substantively different, topically adjacent result sets and are reasonable candidates to validate as real related searches:
- winding up Indian subsidiary US company
- exit Indian subsidiary process foreign parent company
- strike off company India process RBI FEMA
- voluntary liquidation India company process NCLT
- FEMA remittance of assets on winding up company India
- Form STK-2 fast track exit company closure India
- cost to close a private limited company in India
- C-PACE MCA company strike off centre

## Recurring Entities & Regulations
Named explicitly across multiple sources (verified as recurring themes across snippets, not confirmed on-page via direct fetch):
- **Companies Act, 2013 — Sections 248 to 252** (strike-off / removal of name from Register of Companies)
- **Insolvency and Bankruptcy Code (IBC), 2016 — Section 59** (voluntary liquidation of solvent companies)
- **IBBI (Voluntary Liquidation Process) Regulations, 2017**
- **MCA / Registrar of Companies (RoC)**
- **C-PACE — Centre for Processing Accelerated Corporate Exit**, established under IICA, Manesar, per an April/May 2023 MCA notification; repeatedly cited as having cut strike-off processing time from years/6-12 months down to roughly 40-90 days
- **Forms STK-2, STK-3, STK-4, STK-7** (strike-off application, indemnity bond, statement of accounts, public notice of struck-off companies)
- **FEMA, 1999** and **RBI** generally, specifically:
  - **Form FC-GPR / FC-TRS** (share allotment / transfer reporting — FC-TRS specifically cited for capital reduction under Section 66 of the Companies Act on exit)
  - **Annual FLA (Foreign Liabilities and Assets) return** — due 15 July, cited as still required for the final partial financial year before closure
  - **RBI Master Direction No. 13/2015-16 — "Remittance of Assets"** (governs AD-bank-facilitated remittance out of India for companies under liquidation, requires either a court order / official liquidator's order plus an auditor's certificate)
  - **Authorized Dealer (AD) banks** as the operational gatekeeper for remittance
  - **Rule 21, NDI (Non-Debt Instruments) Rules** — fair market value / registered-valuer requirement for share buyback/capital-reduction pricing
- **DTAA** — cited generically re: withholding tax on final distribution to the US parent; no specific India-US DTAA article number was seen cited in any snippet (mark as not verified whether ranking pages name a specific article)
- **Form 15CA/15CB** — referenced as required for the outward remittance step (income tax certification), separate from the RBI/FEMA filings above
- **Income tax clearance / GST cancellation / EPF-ESIC closure** — referenced generically as pre-conditions across several "documents required" summaries, not tied to a specific citing page
- One summary referenced "ODI Part IV" in a documents checklist — this is the form for an **Indian company's own outbound investment closure**, not for a foreign parent closing its Indian subsidiary; this may be a conflation in that particular AI-summarized result rather than something actually on-page. **Flagging as likely irrelevant/mis-cited — do not carry into later stages without verifying against the source page directly.**

## Search Intent (page-level read)
Based on titles and summarized content (not independently fetched, so this is an approximate read, not a verified one):
- **Predominantly informational/how-to, with embedded commercial intent** — nearly every top result is a firm's own blog/guide article (Treelife, RegisterKaro, LegalWiz, IndiaLawOffices, EzyBiz, CompanyFormationIndia, IndiaFilings) rather than pure third-party journalism. These read as top-of-funnel content designed to be found by someone researching the process, with the underlying firm positioned to be hired to execute the closure — classic content-marketing/lead-gen pattern, not neutral reference material.
- **IndiaFilings' "Winding Up of Company Online" page reads more transactional** — title suggests it is a service page/product listing (you can initiate the filing on that page) rather than pure explainer content.
- **TaxGuru and government sources (PIB, RBI, MCA) are purely informational/navigational** — no service being sold, primary source or practitioner-contributed reference material.
- **No pages observed were framed explicitly around the US-parent-company angle as their primary hook** — several (Treelife's wholly-owned-subsidiary piece, LegalWiz's "foreign parent" piece, EzyBiz) clearly write for a foreign-parent audience, but none led with "US company" specifically the way our target keyword does. This suggests room for a more specifically-targeted angle (Section 482/Form 5471-aware, US-tax-context framing) that nothing observed currently owns.

## Freshness Signals
- Multiple competitor titles carry **"2026"** explicitly in the title (RegisterKaro's strike-off guide, IncorpX's NCLT voluntary liquidation guide, Khanna & Associates' fast-track strike-off guide, Equimerger's cost guides) — strong signal that competitors are actively year-stamping and refreshing this content annually, which Google appears to reward here.
- **C-PACE timelines are a live, moving data point** — sources cite ranges anywhere from "70-90 days" to "3-6 months" to "under 2 months," suggesting inconsistent updates across competitor content and an opportunity for AU Corporate to cite the most current, precisely-sourced timeline (ideally direct from PIB/MCA, item #16/#17 above).
- No page's actual "last updated" stamp was directly observed (fetch blocked) — freshness above is inferred only from title-string year-stamping, which is a weak signal (a title can say "2026" without the underlying content being current). **Not verified.**
- AU Corporate's own existing sibling page (`india-entry-for-us-companies/page.tsx`) already references the **Income-tax Act, 2025 (effective April 1, 2026)** replacing the old transfer-pricing sections, and a proposed **Form 48 replacing Form 3CEB from FY 2026-27** — the same regulatory-year context should be checked for currency/applicability when this new exit-stage page cites tax-year-specific rules, since AU is clearly tracking this transition elsewhere on the site.

## Domain Classification

### Direct Competitors
- treelife.in — startup-focused legal/tax/finance advisory firm; four to five distinct URLs surfaced on this exact topic cluster — appears to be the single strongest, most consistent direct competitor for this topic.
- india-briefing.com (Dezan Shira & Associates) — multi-country foreign-investment advisory publisher; comparable buyer (foreign companies with India operations) to AU Corporate.
- registerkaro.in — tech-enabled compliance/filing platform; three distinct URLs surfaced.
- legalwiz.in — tech-enabled legal/CS filing platform; explicit "foreign parent" framing.
- indialawoffices.com — law firm; two distinct URLs surfaced (closure process + voluntary liquidation).
- companyformationindia.com — company formation/filing service.
- indiafilings.com — large-scale DIY/tech-enabled compliance platform; page reads as transactional/service-oriented.
- ezybizindia.in — advisory firm positioned specifically around foreign-owned subsidiary compliance; closest positioning match to AU Corporate's own niche observed in this research.
- kanakkupillai.com (single surfacing — "Subsidiary Company Closure in India") — compliance/filing platform, same category as above; listed for completeness though it appeared only once.

### Indirect Competitors
- None clearly identified in this research pass. All ranking commercial domains found sell comparable India company-closure/compliance advisory services directly (i.e., they read as direct rather than adjacent competitors). No global EOR platform, incorporation-SaaS, or Big 4/large multinational firm surfaced in the result set for this specific topic — worth flagging to Agent 3 as something to double-check with a broader query set, since Big 4 firms (Deloitte, KPMG, EY) do publish liquidation/exit guidance for other jurisdictions (seen for Ireland/Guernsey in one of the very first searches) and may have India-specific content not surfaced here.

### Government / Official Sources
- pib.gov.in (Press Information Bureau) — C-PACE establishment press release.
- rbi.org.in — Master Direction No. 13/2015-16 on Remittance of Assets; general RBI FAQ and notification pages.
- mca.gov.in — public register of struck-off companies (STK-7 list); Companies Act 2013 statutory source generally.
- investindia.gov.in — surfaced tangentially (FDI FAQ PDF), not specific to exit but a relevant official source for FDI-related definitions.

### Informational Publishers
- taxguru.in — practitioner-contributed articles, tax/company-law news aggregation; not selling a service directly on the pages observed.
- caclubindia.com — similarly practitioner-article aggregation, surfaced for C-PACE/FTE procedural detail.
- lexology.com — legal-industry syndication site (publishes law firm bylines); informational rather than a direct service seller.
- Wikipedia (Liquidation, Winding up, Companies Amendment Act 2015) — general reference, surfaced repeatedly as background/definitional content, not India-specific competitive content.

### Directories / Aggregators
- globaladvisoryexperts.com and globallawexperts.com — best available read is that these are legal/advisory marketing networks aggregating member-firm-contributed articles rather than a single operating firm; **classification not independently verified** (could not fetch to confirm business model) — flagged for Agent 3 to verify directly before treating as either a competitor or a pure directory.
- zaubacorp.com — company-data directory (surfaced for "strike off" query showing companies with struck-off status); a data/lookup directory, not competitive content.
- Quora — surfaced once (in an unrelated site:theaucorp.com query context, not this topic directly); no Quora/Reddit thread was observed ranking for the core topic queries in this pass, unlike some other AU topics — worth a follow-up check by Agent 2/3 with more forum-targeted queries.

## Open Questions for the Next Agent
1. **Confirm the Semrush blocker before Stage 2/3 need traffic data.** Every Semrush call failed with `no_api_units` this session (not a one-off — matches the "recurring blocker" flagged in the task brief). If keyword-intent or competitor analysis genuinely needs volume/ranking data, that needs to be sourced or the account topped up before those stages proceed — don't assume it will just work next time.
2. **WebFetch was fully blocked this session** (egress-blocked on every domain tried, including Wikipedia). If Stage 3 (competitor reverse-engineering) needs to actually read full competitor pages rather than work from snippets, check whether this is a persistent environment restriction or a transient proxy issue before planning that stage's approach.
3. **Verify the "zero exit content sitewide" premise with an actual grep of `app/`** — I could only check via `page.tsx` read + `site:theaucorp.com` search (no matches), not a full codebase search, because no Bash/Grep/Glob tool was available to me this session. A quick `grep -ril "strike off\|winding up\|voluntary liquidation\|section 248\|section 59" app/` would close this out definitively.
4. **Verify globaladvisoryexperts.com / globallawexperts.com's actual business model** before Stage 3 treats them as either competitors or pure directories — I could not fetch either site to confirm whether they're a law-firm marketing network (directory-like) or an operating advisory business (direct competitor).
5. **Treelife.in is the standout pattern** — four to five distinct URLs on this one topic cluster, more than any other domain observed. Worth Stage 3 doing a deeper reverse-engineer of Treelife's specific content structure/angle, since they appear to be the entrenched leader here rather than a single isolated ranking page.
6. **No page observed leads with a US-parent-specific hook** (Form 5471 deconsolidation, Section 482/transfer-pricing close-out, US tax treatment of a liquidating distribution from a foreign subsidiary) the way AU Corporate's existing entry-stage cluster does for entry topics. This looks like the clearest differentiation angle for Stage 5 (AU positioning) to build on — flagging it here since it's an SEO-research observation, not a strategy call.
7. **"ODI Part IV" appeared in one AI-summarized checklist result** in a context that looks mismatched to this topic (it's normally for an Indian company's own outbound investment, not a foreign parent's Indian subsidiary) — Stage 4 should not carry this into a content brief without checking the source page directly.
