# Keyword & Intent Map: VAT/GST and Indirect Tax Compliance for AI Companies

Date: 2026-09-25
Source input: `01-serp-research.md`

## Tooling note (read before using this map)
Semrush was queried again at the start of this stage and returned the same `no_api_units` error as Stage 1 (insufficient API units on the account — retryable is `false`; the account needs more units, not a different request). **No Semrush volume, difficulty, or intent-classification data was available for this stage.** Per the standing rule, every volume field below reads "Search volume not verified" — none is invented.

In place of Semrush, I ran four additional WebSearch queries this stage (beyond Stage 1's fifteen) specifically to stress-test candidate long-tail/question phrasing and the foreign-framing question: `VAT on AI tokens compliance`, `GST on API usage billing AI company India`, `"deemed supplier" AI API marketplace VAT GST`, `place of supply AI usage based billing tax`, `foreign AI company GST registration India OIDAR`, `"indirect tax" AI companies usage billing tokens compute credits`, `AI API marketplace tax compliance who collects VAT`. These are AI-synthesized digests, not raw Google SERPs — same caveat as Stage 1: no confirmed literal PAA box, no confirmed related-search chips, no confirmed featured snippet. They are used here only as corroborating **title/topic-cluster evidence** (do multiple independent domains converge on the same phrasing?), not as volume data.

## Cannibalization framing (read this before the keyword lists)
AU Corporate's existing live page targets **"global VAT compliance for SaaS companies"**, jointly covering AI companies, at `/global-vat-compliance-ai-saas-companies`. Stage 1 confirmed this "AI+SaaS bundled" framing is also the *market default* — dodopayments.com, most MoR vendors, and the general "does VAT apply to AI/digital services" explainer cluster all fold AI into generic SaaS/digital-services treatment. Simply swapping "SaaS" for "AI" in the existing page's head term (e.g. targeting "VAT compliance for AI companies" as a bare broad phrase) would put the new page in direct keyword competition with AU Corp's own asset for the same searchers, with no differentiated value.

Stage 1's strongest finding was that **no page in the scanned SERP treats AI companies as categorically distinct from SaaS companies on the combined basis of (a) usage/token/compute-based billing taxable-event classification and (b) API-marketplace deemed-supplier exposure.** That combination is the genuine gap, corroborated independently this stage by Bloomberg Tax ("Usage-Based Billing VAT Issues Mean Tax Teams Must Engage Early"), TaxProf Blog/McDermott ("AI Tokens and Sales Tax: Key Considerations"), Afternoon Blog ("Token-Based Pricing: How to Account for AI Credits and LLM Usage"), vatcalc.com ("Platform VAT deemed supplier policy peaked?"), and Anrok's "Sales tax for AI companies: what's taxable and what's not." All of these independently converge on the same two sub-themes without any one of them combining usage-billing classification + marketplace deemed-supplier exposure + India/global (rather than US-only) scope into one page — which is exactly the open territory Stage 1 identified.

**Recommendation carried into this map: the new page's primary and secondary keyword set should anchor on the billing-classification and marketplace-liability angle, not on the bare "VAT compliance for AI companies" head term.** The bare head term should be left to route to (or be reconciled with) the existing bundled page; Stage 3 should make that routing decision explicitly.

## Primary Keyword
**VAT and GST on AI usage-based billing (tokens, API calls & compute credits)** — intent: informational → commercial (research phase ahead of engaging an advisor), volume: Search volume not verified, target: direct

Rationale: no single exact-match query combining "usage-based billing," "tokens/API/compute," and "VAT/GST" was observed as one already-ranking page title in Stage 1's 15-query scan or this stage's 7 follow-up queries — this is a genuine content gap, not a proven high-volume search term. It is supported as *directionally real demand* by convergent, independently-authored title patterns: "Usage-Based Billing VAT Issues Mean Tax Teams Must Engage Early" (Bloomberg Tax), "AI Tokens and Sales Tax: Key Considerations" (TaxProf Blog/Tax Notes State), "Token-Based Pricing: How to Account for AI Credits and LLM Usage" (Afternoon Blog), "Revenue Recognition for AI Companies: ASC 606, Tokens, & Tax" (Aprio), "Sales tax for AI companies: What's taxable and what's not" (Anrok). Flag for Stage 3: this is a proposed differentiator, not a Semrush-confirmed head term — validate against the strategist's cannibalization decision before locking the H1.

## Co-Primary / Secondary Anchor Keyword
**AI API marketplace VAT/GST deemed-supplier compliance** — intent: informational → commercial, volume: Search volume not verified, target: direct (H2-level anchor, supports primary)

Rationale: corroborated by 1stopVAT's two posts ("VAT Compliance in the Era of AI-Agentic Commerce," "Modern AI-Agentic Commerce and Tax Compliance"), vatcalc.com ("Platform VAT deemed supplier policy peaked?"), Bloomberg Tax ("Artificial Intelligence Goes Shopping, Creates Tax Challenges"), and OpenRouter's own tax-ID documentation as primary-source evidence of a real AI API marketplace's VAT handling. India-specific deemed-supplier mechanics (CGST Section 9(5)) are currently notified only for passenger transport, accommodation, housekeeping, and restaurant services — **not** extended to AI API marketplaces in any source found. Any claim that Section 9(5) applies to AI API marketplaces would be unsupported; the India angle should be framed as "not yet extended here, monitor" rather than asserted.

## Secondary Keywords
| Keyword | Intent | Volume | User type | AU relevance | Target: direct/natural |
|---|---|---|---|---|---|
| tax on AI tokens and compute credits | Informational/Commercial | Search volume not verified | Founder, CFO of an AI company | High — direct match to differentiation thesis | Direct |
| place of supply for AI usage-based services | Informational | Search volume not verified | In-house counsel, CFO | High — core technical concept competitors under-cover for AI specifically | Direct |
| GST on AI API billing India | Informational/Commercial | Search volume not verified | Founder/CFO of a company selling AI API access into India | High — India + seller-side is the genuine content gap Stage 1 flagged | Direct |
| OIDAR GST registration for foreign digital service providers | Informational/Commercial | Search volume not verified | Founder/CFO of a non-Indian AI company | High — see Foreign Framing Check below (evidence-based) | Direct |
| deemed supplier rules for AI marketplaces / API aggregators | Informational | Search volume not verified | Platform operator, in-house counsel | High — matches co-primary anchor | Direct |
| Merchant of Record vs deemed supplier for AI companies | Commercial/comparative | Search volume not verified | Founder/CFO evaluating MoR vendors vs. advisory | Medium-high — Stage 1 flagged this conflation explicitly as underserved | Direct (as a distinct FAQ/section, not H1) |
| VAT/GST compliance for AI companies (bare/broad term) | Informational/Commercial | Search volume not verified | Broad — founder, CFO, researcher | High commercial relevance but **cannibalization risk** with existing `/global-vat-compliance-ai-saas-companies` page | Address naturally only — do not optimize H1/meta for this on the new page; Stage 3 to decide canonical routing |

## Long-tail Keywords
- does GST apply to AI API usage billed to Indian customers
- is VAT charged on AI credits at purchase or at consumption (prepaid top-up vs. usage)
- how is usage-based AI billing taxed differently from flat-fee SaaS subscriptions for VAT
- VAT treatment of prepaid AI credits vs. pay-as-you-go token consumption
- GST on AI training data and input tax credit (ITC) eligibility in India
- who is liable for VAT on an AI API marketplace — the platform or the underlying model provider
- VAT/GST compliance for AI agents transacting autonomously (agentic commerce)
- ASC 606 revenue recognition for AI tokens and its tax-characterization knock-on effects
(All: Search volume not verified — inferred from snippet/title phrasing only, not confirmed as literal search strings)

## Question Keywords
Caveat carried forward from Stage 1: none of the following is a verified literal Google PAA question — no PAA box was observed in either session's tooling. These are phrasings inferred from recurring title/snippet patterns and are presented as **question-shaped topics worth answering in FAQ copy**, not confirmed PAA targets.
- Do AI companies need to charge VAT or GST on API/token usage?
- Is GST applicable to AI subscriptions and API access sold into India?
- Who collects VAT on an AI API marketplace — the platform or the seller of the underlying model?
- How are AI tokens and compute credits characterized for tax purposes (goods vs. services vs. rights)?
- Does usage-based billing change VAT place-of-supply timing compared to flat-fee SaaS?
- Do foreign OIDAR/digital-service providers have to register for GST in India even without a local office?

## Commercial / Transactional Keywords
| Keyword | Intent | Volume | Notes |
|---|---|---|---|
| merchant of record for AI companies | Transactional | Search volume not verified | Large, real, commercially-contested cluster (FastSpring, Comecero, Payments.ai, Kelviq, Freemius) — these are indirect competitors selling a payments-platform product, not advisory. Address naturally (comparison/FAQ framing: "MoR vs. advisory-led compliance"), do not target directly — AU Corp is not an MoR. |
| GST/VAT registration service for AI companies | Transactional | Search volume not verified | Direct AU Corp service-relevance; address naturally within the page's CTA/service section, not as the SEO-optimized head term. |
| sales tax automation software for AI companies | Transactional | Search volume not verified | Anrok/Taxwire/Sphere/Numeral territory — software vendors, not advisory. Address naturally only (distinguish AU Corp's advisory model from tax-automation SaaS), do not target directly. |
| AI tax compliance advisor / consultant India | Transactional | Search volume not verified | Closest true AU Corp service-match keyword; low observed competitive density in Stage 1's India seller-side gap — reasonable secondary target if volume can later be confirmed. |

## Informational Keywords
- VAT/GST OIDAR rules for digital services in India
- EU OSS/IOSS for AI digital services sold to EU consumers
- CGST Act Section 9(5) vs. Section 52 — e-commerce operator deemed-supplier vs. TCS-collector mechanisms
- US state sales tax rulings on AI chatbot/API access (Indiana, Illinois cited as non-taxable)
- VAT in the Digital Age (ViDA) reform and its scope for platform deemed-supplier rules
- Reverse Charge Mechanism (RCM) for B2B import of AI/digital services
(All: Search volume not verified)

## Related Entities & Semantic Topics
- **India**: OIDAR, IGST Act s.13(12) (place of supply), IGST Act s.2(6) (export-of-services conditions), RCM, GSTR-5A, Form GST REG-10, NTOR, CGST Act s.9(5) (deemed supplier — notified categories only, not yet AI marketplaces), GSTR-3B Table 3.1.1(i)/(ii), ITC, 18% GST/IGST rate
- **EU**: OSS/IOSS, "electronic interface" deemed-supplier rule (since Jul 2021), ViDA, €10,000 B2C distance-selling threshold (non-EU sellers: no threshold), B2B reverse charge
- **US**: state-by-state sales/use tax rulings (Indiana, Illinois), SSUTA, ASC 606
- **Cross-cutting**: Merchant of Record (MoR) as the commercial analog to the regulatory "deemed supplier" concept — the two get conflated in market messaging and should be explicitly distinguished on-page
- **AI-specific vocabulary**: tokens, credits, compute, API calls, usage-based billing, prepaid top-ups, agentic commerce, AI agents as transaction intermediaries

## Supporting Queries (natural coverage only, not targeted)
- GST on ChatGPT/Claude subscriptions in India (import-side/buyer framing — useful context, wrong side of the transaction for AU Corp's likely client, do not target)
- 18% GST on OIDAR services generally (broad, already well-served by India CA-firm content; cite/link rather than compete)
- revenue recognition for AI tokens under ASC 606 (adjacent-discipline context, not indirect-tax-specific)
- GST on AI training data / ITC (cggst.com's angle — relevant supporting context, narrower than this page's scope)

## Foreign/International Framing Check
Evidence found for international/foreign-supplier phrasing — **narrowly scoped, not blanket**:
- Multiple independent India-compliance sources use "foreign" explicitly in their own titles/copy in the OIDAR-registration context: "GST Registration for Foreign Companies in India" (nricaservices.com), "OIDAR Services & GST Compliance in India: A Complete Guide for **Foreign Digital Service Providers**" (startup-movers.com), "GSTR-5A Filing for **Foreign Digital Providers**" (ugcbharat.com), and this stage's WebSearch summary states plainly: "Foreign OIDAR service providers must compulsorily register under GST with no turnover exemption... even without a physical presence." This is real, recurring, India-specific search-and-content phrasing.
- **Scope limitation**: this evidence supports "foreign OIDAR service provider" / "foreign digital service provider GST registration" as a legitimate long-tail/secondary keyword (used above), because that is the phrasing the market itself uses for this specific registration mechanic. It does **not** extend to justifying generic "foreign AI company VAT compliance" or "international AI company tax" as primary/secondary keyword phrasing — no source in either session used that broader construction. The audience (a non-Indian AI company) is foreign; the query people type stays anchored to the specific mechanism ("OIDAR," "GST registration for foreign digital service providers"), not to a generic "foreign/international" qualifier bolted onto the topic.
- One adjacent but off-target data point: startuptalky.com's "GST on ChatGPT, Claude and **Foreign AI Tools**" uses "foreign" from the Indian-buyer/import side (RCM on subscriptions), not the seller/exporter side AU Corp's client sits on — noted for completeness but not used to justify seller-side "foreign AI company" keyword framing.

## Data Confidence
- **Semrush-verified: none.** Both this stage's and Stage 1's Semrush calls returned `no_api_units`. Every volume figure in this document is "Search volume not verified" as required.
- **SERP-presence-only (Stage 1, 15 queries) and title-cluster corroboration (this stage, 7 follow-up queries):** all keyword/topic selections above are inferred from recurring independent-domain title and snippet patterns across two separate research sessions using an AI-synthesized WebSearch tool — not from raw Google SERP rendering, not from Semrush, and not from any confirmed PAA/related-search/autocomplete data. Treat this map as directionally reliable for topic scoping and competitive gap analysis, but re-run Semrush `keyword_research` (volume, difficulty, SERP feature detail) before final title/meta lock, and before the strategist finalizes the primary-keyword cannibalization call against `/global-vat-compliance-ai-saas-companies`.
- **Explicitly unverifiable in this pipeline so far**: literal PAA question text, related-search chips, featured-snippet ownership, and any numeric search volume — none of these should be treated as confirmed by any earlier-stage document either.
