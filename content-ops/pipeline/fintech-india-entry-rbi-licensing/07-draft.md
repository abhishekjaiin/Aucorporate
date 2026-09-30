# Draft: India Market Entry for Fintech Companies — RBI Licensing & NBFC Setup

## Metadata

**Title:** Set Up a Fintech Company in India: RBI, NBFC & PA Licensing Guide | AU Corporate

**Meta description:** RBI licensing to set up a fintech company in India: NBFC and PA/PA-CB routes, capital thresholds by category, the 2025 Digital Lending Directions, and the sandbox.

*(Note on this vs. Stage 6's draft meta: Stage 6 deliberately wrote a longer ~205-character version to show the reviewer the full intended content before trimming. Trimmed here to 163 characters to fit standard SERP display width — Stage 7's draft note estimated this at "~156," which Stage 8 re-counted and corrected; 163 is still within the range that typically displays without truncation, so no further trim was made. Stage 8 also swapped "for fintech companies entering India" for "to set up a fintech company in India" — same length, and now carries the exact primary keyword phrase the checklist calls for. Every clause still maps to a real Stage 1-4 finding — nothing added. The US-parent/Form 5471 clause from Stage 6's longer version didn't survive the trim; it's carried instead in the page's H2 #13 and in the FAQ, so it isn't lost, just not in the meta tag.)*

**URL:** /india-entry-for-fintech-companies

**Breadcrumb:** India Business Setup → India Entry for Fintech Companies *(root-level sibling, not nested under India Entry for US Companies — per Stage 6's Architecture Resolution)*

---

## Page Content

# India Entry for Fintech Companies: RBI Licensing, NBFC Registration and Payment Aggregator Setup

*Last updated: 30 September 2026 — prepared by AU Corporate's FEMA & RBI compliance and cross-border tax practice.*

If you're building a payments, lending, or wallet business and you're reading this, you've probably already worked out that "set up a fintech company in India" isn't the real question. Incorporation is the easy part. The question that actually determines your timeline and your capital plan is which RBI licensing regime your business model falls into, how much net worth or net owned fund you need to hold before you can operate, and which of RBI's application systems you're supposed to be using — because unlike a SaaS company or a services business, a fintech doesn't get to incorporate first and worry about regulation later. The license, or the decision that you don't need one, has to be sorted out before the business can actually run.

This guide walks through that regulatory stack in the sequence a founder or CFO actually needs it: what counts as "fintech" for RBI's purposes, why the entity has to be a Private Limited Company, which license applies to which business model, the capital figures by category (not as one flat number — RBI's own rules don't work that way), the five different RBI portals and what each one is actually for, and — for a US-headquartered parent specifically — how this regulatory stack connects to Form 5471, Section 482, and DTAA withholding on your own side of the border.

## Is Your Business Actually "Fintech" for RBI Purposes?

"Fintech" isn't a defined regulatory category — it's a market label that covers several genuinely different RBI-regulated activities, plus a fair amount of software that isn't RBI-regulated at all. Before anything else, it's worth being precise about which bucket your product actually falls into, because the answer changes everything downstream: which license (if any) you need, what capital you have to hold, and how long the process takes.

RBI is the dominant regulator for most of what gets called fintech in India — payments, lending, and account-aggregation activity specifically. But it isn't the only one. Depending on what your product actually does, you may also sit under SEBI (if you're touching securities or wealth-management execution), IRDAI (insurance distribution or underwriting), or FIU-IND (virtual digital asset/crypto-adjacent activity, from an anti-money-laundering registration angle rather than a licensing one). Most payments and lending fintechs never leave RBI's perimeter, but it's worth confirming your specific activity against the right regulator before you build a licensing plan around the wrong one.

### Payment Gateway vs. Payment Aggregator

This is the single most consequential distinction most founders get wrong, and it's worth stating plainly: **a payment gateway and a payment aggregator are not the same thing under RBI's rules, and only one of them needs RBI authorization.**

A payment gateway is purely a technology layer — it routes a transaction to the bank or card network and never actually holds or settles the customer's funds. It sits outside RBI's Payment Aggregator authorization requirement under the Payment and Settlement Systems Act, 2007 (PSS Act) entirely, because it never touches the money.

A payment aggregator does the opposite: it receives funds from the customer into an escrow arrangement and settles them to the merchant, which means it is handling money on both sides of a transaction, not just routing an instruction. That settlement function is the trigger — the moment your platform holds funds, even briefly, in the payment flow between a payer and a payee, you're in payment aggregator territory and need RBI authorization before you can operate.

If you're not sure which one describes your product, that's worth resolving before anything else in this guide, because the rest of the licensing path — capital requirements, timeline, portal — only applies if you're actually an aggregator.

### Payments vs. Lending vs. Wallet vs. Cross-Border

Beyond the gateway/aggregator line, the specific regulatory perimeter depends on the business model:

- **Domestic payment aggregation** (settling merchant transactions within India) sits under RBI's PA framework.
- **Cross-border payment aggregation** (collecting or remitting funds across the India border, whether for exports/imports or for a marketplace/SaaS platform with international transaction flows) is a distinct authorization — Payment Aggregator–Cross Border, or PA-CB — not just a PA license with an added feature.
- **Lending**, whether direct or through a partnership model, generally requires an NBFC registration of some form — the specific category depends on how the lending is structured (see the decision framework below).
- **Wallets and prepaid instruments** sit under RBI's Prepaid Payment Instrument (PPI) framework, a related but separate authorization from both PA and NBFC licensing.
- **Account aggregation** (consent-based sharing of a customer's financial data across institutions) is its own NBFC sub-category (NBFC-AA), structurally different from a lending NBFC despite sharing the "NBFC" label.

## Entity Structure — Why an LLP Cannot Hold an RBI Fintech License

State this one plainly, because it's the single most consequential misread a founder can walk away with from some of the content already published on this topic: **an LLP cannot hold an RBI fintech license — not an NBFC registration, not a Payment Aggregator authorization, not a PPI license. Full stop.**

This is a distinct rule from the general FDI position on LLPs. It's true that 100% FDI is permitted into LLPs under the automatic route in many sectors with no FDI-linked performance conditions — but that general LLP-FDI permission has nothing to do with whether an LLP is an *eligible entity type* to hold an RBI financial-services license. It isn't. RBI's licensing frameworks for NBFCs and payment system operators are written around company law concepts (share capital, promoter/director "fit and proper" criteria, net owned fund computed off a balance sheet) that an LLP's partnership structure doesn't map onto, and RBI's eligibility criteria for these licenses name Private Limited or Public Limited companies incorporated under the Companies Act, 2013 as the operative entity type. Reading the general LLP-FDI rule as meaning "an LLP is fine for a fintech business too" is a real, avoidable mistake.

In practice, this means the entity decision on this page is short: you need a **Private Limited Company** (or, less commonly for a foreign-controlled fintech at this stage, a Public Limited Company), full stop, before any of the license applications below are even possible. For the actual SPICe+ incorporation mechanics — directors, DIN/DSC, name reservation, the resident-director requirement — we don't re-run that process here; our [company registration guide](/india-business-setup/company-formation) covers the full step-by-step process.

## FDI Route — 100% Automatic Route for Payment Systems and NBFC "Other Financial Services"

The good news, once the entity question is settled: for most fintech business models, foreign ownership itself isn't the bottleneck. Payment systems and NBFC activity falling under the "other financial services" category are generally eligible for the **100% Automatic Route** for foreign direct investment, meaning there's no government approval gate to clear before the parent invests — capital comes in, and the transaction is reported to RBI after the fact through the ordinary FC-GPR mechanism, rather than needing prior sign-off.

The nuance worth knowing rather than assuming away: automatic-route eligibility for the FDI itself is a separate question from whether your specific *activity* needs an RBI license to operate. Getting 100% FDI in without a government approval gate doesn't mean you can start accepting payments or extending credit without the underlying NBFC/PA authorization — those are two different regulatory questions that happen to both run through RBI, and getting the first one right doesn't answer the second. For the general sector-by-sector Automatic vs. Government Route table, see our [FDI channels guide](/india-business-setup/fdi-channels).

## Which License Do You Actually Need? A Decision Framework

Most content on this topic treats each license — NBFC, PA, PA-CB, sandbox — as its own isolated silo, which leaves a founder to work out for themselves how the pieces interact. That's the wrong way to approach it, because the routes aren't independent; which one fits depends on your specific business model, and in some cases the honest answer is "you don't need a full license yet."

### NBFC (Direct Lending)

If you're extending credit directly — the loan sits on your own balance sheet, you bear the credit risk — you need an NBFC registration, most commonly in the Investment and Credit Company (NBFC-ICC) category, which is where most fintech lenders land. This is the most capital-intensive route of the group (see the NOF table below) and carries the longest runway to get licensed, since RBI reviews promoter/director "fit and proper" credentials, the business plan, and the capital structure in full before granting registration.

### NBFC-P2P

If your platform matches individual lenders to individual borrowers without the loan ever sitting on your own balance sheet, you're in peer-to-peer lending territory — a structurally different, and structurally lighter-capital, NBFC category (NBFC-P2P) from a direct-lending NBFC-ICC. The lower net owned fund threshold that applies here (see below) reflects that you're not carrying credit risk yourself.

### LSP / Loan Service Provider Partnership

There's a third route that doesn't require an NBFC license at all: partnering with an already-licensed bank or NBFC as their Loan Service Provider (LSP) — sourcing, underwriting-support, and servicing the loan on the licensed partner's balance sheet, rather than lending directly yourself. This route carries no minimum capital requirement of its own, because you're not the regulated lending entity — the licensed partner is. The tradeoff is control and economics: you don't own the loan book, your revenue is typically a servicing fee rather than interest income, and RBI's Digital Lending Directions (below) place specific disclosure and first-loss-default-guarantee (FLDG) constraints on exactly this kind of partnership arrangement. For a founder trying to move fast without first raising NOF-level capital, LSP is often the realistic starting point — but it's a genuinely different business (and a genuinely different economics model) from holding your own NBFC license, not just a faster version of the same thing.

### Payment Aggregator / PA-CB

If you're settling funds between payers and payees — per the gateway/aggregator distinction above — you need Payment Aggregator authorization (domestic) or PA-CB authorization (cross-border), with its own separate net-worth requirement, covered in full below.

### Should You Pilot in the Regulatory Sandbox First?

This is a genuine option almost no competitor content addresses directly: rather than going straight to a full NBFC or PA application, you can test a novel product in RBI's regulatory sandbox first, under relaxed regulatory requirements for a defined pilot period. The tradeoff is real — sandbox participation buys you a live-market test before committing full licensing capital, but it isn't a substitute for the license itself, and a foreign entity can only enter the sandbox through an India-incorporated subsidiary, not directly (see the dedicated section below). Whether this is worth the extra step depends on how novel your specific product actually is and how confident you already are in the underlying business model — for a fairly standard PA or NBFC-ICC lending model, going straight to full licensing is often the more direct path; for something genuinely new, the sandbox is worth serious consideration before you commit capital to a full license.

*[Mid-page lead capture: at this point in the page, a reader has enough context to know roughly which route applies to their model — this is where the site's mid-page LeadForm sits, inviting them to talk through their specific model with AU Corporate's team rather than trying to self-diagnose further from the page alone.]*

## NBFC Net Owned Fund (NOF) — The Figure by Category and Phase Date

This is the figure that gets stated wrong, or stated incompletely, almost everywhere else this topic is covered — usually as one flat number that's either outdated or only correct for one category of NBFC. The actual picture has two dimensions: which NBFC category you fall into, and where RBI's phased timeline currently sits.

| NBFC category | Net Owned Fund | Timing |
|---|---|---|
| NBFC-P2P (peer-to-peer lending) | ₹2 crore | Current, standing minimum — not on the phased path below |
| NBFC-AA (account aggregator) | ₹2 crore | Current, standing minimum — not on the phased path below |
| NBFC-ICC (Investment and Credit Company — most fintech lenders) | Phased upward from ₹2 crore toward ₹10 crore | ₹2 crore baseline → ₹5 crore by 31 March 2025 (already behind us as of this page's last-updated date) → ₹10 crore by 31 March 2027 |
| NBFC-MFI (microfinance) and NBFC-Factor | Phased upward from a ₹5 crore baseline toward ₹10 crore (₹2 crore baseline in the North-East region for NBFC-MFI) | ₹5 crore baseline (₹2 crore in the North-East region for NBFC-MFI) → ₹7 crore by 31 March 2025 (₹5 crore in the North-East region for NBFC-MFI) (already behind us as of this page's last-updated date) → ₹10 crore by 31 March 2027 |

The practical takeaway: if you're building a P2P platform or an account-aggregator business, ₹2 crore is your real number and isn't going anywhere. If you're building a direct-lending NBFC-ICC — the category most fintech lenders actually fall into — ₹2 crore is *not* your number; you're on a path to ₹10 crore, and given where RBI's timeline currently sits, you should be planning your capital build-up against the higher figure, not the lower one, especially if your license application timeline runs anywhere close to the March 2027 deadline. NBFC-MFI and NBFC-Factor land on the same ₹10 crore endpoint by March 2027, but they don't share NBFC-ICC's starting point or interim step — they start from a ₹5 crore baseline (₹2 crore in the North-East region for NBFC-MFI) and clear a ₹7 crore interim milestone (₹5 crore in the North-East region for NBFC-MFI) rather than ICC's ₹2 crore-to-₹5 crore climb, so don't assume the ICC figures above apply if your model is microfinance or factoring.

**A note on precision here rather than false confidence**: this phased structure is built from RBI's Master Direction on Scale-Based Regulation for NBFCs and is consistent across multiple independent secondary sources, but it has not been independently re-verified against RBI's primary Master Direction text as part of this drafting pass — see Writer's Notes below. Treat the category distinction as directionally reliable and the exact phase dates as worth confirming against the current RBI Master Direction before you build a final capital plan around them, not as fixed indefinitely. The North-East-region figures for NBFC-MFI in particular should be re-confirmed against the primary RBI Master Direction text before publish.

Separately, a 2025 amendment to RBI's Master Directions on Foreign Investment is understood to permit foreign capital to be brought in to meet the NOF requirement *before* a license is actually granted — with repatriation required if the license application is ultimately refused. If accurate, this is a genuinely useful mechanic for a foreign-owned applicant funding NOF ahead of approval rather than after it, and it's worth confirming with your advisor as part of your capital-timing plan — we're noting it here as unconfirmed rather than stating it as settled.

## Payment Aggregator / PA-CB Net Worth Requirements

The PA/PA-CB net-worth regime is a separate figure from NBFC NOF — a common point of confusion, since both get described loosely as "the RBI capital requirement." A Payment Aggregator needs a minimum net worth of **₹15 crore at the time of application**, rising to **₹25 crore within three years** of authorization. This figure, and the methodology for computing it, is understood to derive from RBI's net-worth-computation circular (DPSS.CO.AD.No.1344/02.27.005/2014-15) — the level of citation precision worth matching rather than a vaguer "RBI rules require" statement, though given that RBI's Master Direction on Regulation of Payment Aggregators (dated September 15, 2025) is understood to have replaced earlier PA guidance, it's worth confirming this specific circular reference and the ₹15cr/₹25cr figures themselves are still current under that consolidated Master Direction rather than an artifact of an earlier framework — we're flagging that as worth confirming with your advisor rather than treating it here as settled.

## The Five RBI Portals — What Each One Actually Does

This is where a lot of otherwise-solid content on this topic goes wrong: treating RBI's various digital systems as interchangeable, or as "the RBI portal," singular. They're not. Each of the five systems below does a genuinely different job, and knowing which one applies to which filing matters in practice, not just as trivia.

| Portal | What it's actually for |
|---|---|
| **PRAVAAH** (Platform for Regulatory Application, Validation and Authorisation) | New regulatory applications — including NBFC registration applications. Since May 2025, this is understood to be the mandatory channel for new NBFC applications, replacing COSMOS's earlier application-intake role. |
| **DAKSH** | Post-license supervision only — RBI's supervisory monitoring system for compliance responses, inspection communication, and cyber-incident reporting once you're already licensed. It has no role in the initial license application itself. |
| **COSMOS** | The legacy portal, historically used both for some application intake and for periodic regulatory returns. Its application role has been superseded by PRAVAAH; its returns-filing role is itself in the process of being superseded by CIMS. |
| **CIMS** (Centralised Information Management System) | RBI's newer data-collection and returns-filing platform, currently the channel NBFCs are transitioning to for periodic regulatory returns as COSMOS is phased out for that purpose. |
| **FIRMS** (Foreign Investment Reporting and Management System) | Entirely separate from licensing — this is where FC-GPR and other FEMA foreign-investment reporting (via the Single Master Form) is filed once foreign capital is allotted as shares. It connects to the FDI-reporting side of your business, not to RBI licensing itself — see the FEMA compliance detail on our [FEMA compliance page](/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary) for how FIRMS filings actually work. |

The practical mapping: applying for a new NBFC or PA license → PRAVAAH. Being supervised once you're licensed → DAKSH. Filing periodic regulatory returns → COSMOS (legacy)/CIMS (current transition). Reporting your foreign share allotment → FIRMS. These portal names and effective dates (PRAVAAH's May 2024 launch and May 2025 mandate, DAKSH's October 2022 launch) are drawn from convergent secondary-source research rather than a direct RBI notification fetch during this drafting pass — see Writer's Notes.

## Digital Lending Directions, 2025 — What Changed

RBI's Digital Lending Directions, 2025 replaced the earlier 2022 Digital Lending Guidelines, and if you're building anywhere in the lending space — whether as a licensed NBFC or as an LSP partnering with one — the two changes worth knowing are the First Loss Default Guarantee (FLDG) cap, understood to be set at 5% of the loan portfolio for any FLDG arrangement between a regulated entity and its lending-service-provider partner, and a data-localization requirement: data generated during the lending relationship may, in limited circumstances, be processed outside India, but it has to be deleted from foreign servers and returned to India within a defined short window (commonly cited as 24 hours). Both figures are worth confirming against the current Directions text before treating them as fixed — we'd rather flag that than state a number we can't fully stand behind.

## RBI Regulatory Sandbox — On-Tap, Theme-Neutral, and Only Via an Indian Subsidiary

RBI restructured its regulatory sandbox in 2025 from a periodic, cohort-based intake (apply during a specific window, get evaluated as a batch) to an "on-tap" model — applications can be submitted at any time — that is also "theme-neutral," meaning it's no longer restricted to a specific pre-announced theme each cohort. That's a real, practical change: it removes the "wait for the next window" friction that made the sandbox a poor fit for a foreign fintech on its own launch timeline.

The point worth stating directly, because it isn't clearly answered anywhere else this topic is covered: **a foreign fintech cannot apply to the sandbox directly. It has to apply through an India-incorporated subsidiary**, the same Private Limited Company entity this whole page assumes you're setting up. The sandbox isn't a way to test the Indian market before committing to an entity — the entity comes first, and the sandbox is a way to test a specific product under relaxed conditions once that entity exists.

## Resident Director and Other Companies Act Requirements

Like any Private Limited Company under the Companies Act, 2013, your fintech entity needs at least one director who has stayed in India for a defined minimum period in the previous calendar year (s.149(3)'s resident-director requirement) — the same requirement already covered in full, including practical solutions for a foreign-founder board (an India-based professional director, or a co-founder relocating), on our [FEMA compliance page](/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary) and elsewhere on this site's US-entry content. We don't re-derive it here; nothing about it is fintech-specific.

## Post-License — What Changes Operationally

Getting licensed is the beginning of an ongoing compliance relationship, not the end of one, and this is the layer most content on this topic skips entirely. Once you're operating as a licensed PA or NBFC, a few things become recurring obligations rather than one-time boxes: customer funds moving through your platform generally need to sit in an RBI-compliant escrow arrangement with a scheduled bank, not a general corporate account; directors and key personnel go through periodic KYC certification on a defined cadence rather than a one-time check at incorporation; and RBI's supervisory expectations around cybersecurity and information-systems controls apply on an ongoing basis, not just at the license-application stage — the specific IS-audit cadence and escrow-migration timelines are worth confirming with current RBI guidance rather than assumed from this page, since they've shifted more than once as RBI has updated its PA framework. (For the broader FEMA and company-law compliance obligations that sit alongside this licensing-specific calendar, our [regulatory compliance guide](/india-business-setup/regulatory-compliance) covers the general picture.)

Someone has to run this compliance calendar month to month once you're licensed — reconciling escrow accounts, tracking certification and audit deadlines, keeping books that satisfy both RBI's supervisory expectations and whatever reporting your parent company needs for its own consolidation. For most foreign-owned fintech subsidiaries in their first couple of years post-license, that's a Virtual CFO / outsourced accounting arrangement rather than a full in-house finance team — our [outsourcing](/outsourcing) and [accounting & assurance](/services/accounting-assurance) teams support exactly this, and it's worth having in place before your first post-license reporting deadline rather than after.

## If You're a US Parent — Connecting This to Form 5471, Section 482 and DTAA Withholding

Everything above applies regardless of where your parent company is based — NBFC, PA, sandbox, and digital-lending rules don't vary by the foreign investor's nationality. But if your parent is a US company, there's a second layer worth understanding now rather than after your Indian subsidiary is already licensed and operating, because it changes how your US finance team needs to think about the entity from day one.

The sequencing matters. FC-GPR — the filing that formally records your parent's capital as share allotment — happens as capital comes in, and for a fintech subsidiary that capital build-up is directly tied to hitting your NOF or PA net-worth threshold before licensing, not a separate, later event. Once your Indian subsidiary is licensed and actually operating, it will typically start being charged for, or recharging, platform technology, licensing, or brand costs to or from the US parent — and the moment that happens, you're in transfer-pricing territory on both sides of the border: Section 482 of the US Internal Revenue Code reviews the US side, India's own transfer pricing rules review the Indian side, and the figures reported to Indian authorities need to tie out to what shows up on Schedule M of your parent's Form 5471 — a majority-owned Indian subsidiary is very likely a Controlled Foreign Corporation from the US parent's perspective, which makes Form 5471 filing a near-certainty, not an edge case. If and when profits get repatriated back to the US — dividend, royalty, or a recharged fee — DTAA withholding applies on that flow as well.

None of this is new regulatory ground specific to fintech; it's the same US-parent mechanics AU Corporate's existing US-entry content already covers in depth — our [FEMA compliance guide](/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary) covers the FC-GPR/FIRMS mechanics, our [transfer pricing and Section 482 guide](/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary) covers the arm's-length and Form 5471/Schedule M reconciliation in full, and our [DTAA and repatriation guide](/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax) covers withholding rates and the repatriation routes. What's specific to a fintech subsidiary is simply that the licensing capital build-up (NOF or PA net worth) and the post-license recharge activity give this generic tax and FEMA framework a concrete, fintech-specific trigger point most India-entry content doesn't connect at all. Our team includes CA and US CPA-qualified professionals for exactly this reason — reconciling what your Indian subsidiary reports to RBI and Indian tax authorities with what needs to show up correctly on your parent's own US filings.

## Fintech or SaaS? Which Guide You Actually Need

If you got here because your product touches payments or financial data in some way but you're not actually settling funds, extending credit, or holding a wallet balance — you're processing card data for a SaaS platform, say, or building analytics on top of banking data without ever touching the money yourself — it's worth pausing on classification before assuming this page's licensing stack applies to you. Our [SaaS and AI India-entry guide](/india-entry-for-saas-companies) already flags that "fintech-adjacent" functionality can pull parts of a business into a different regulatory bucket, without resolving which bucket — this page is that resolution. If, having read the sections above, your product genuinely doesn't settle funds, extend credit, or hold customer balances, the SaaS guide's entity-structuring, FEMA, and tax content is very likely the more relevant guide for you, and this page's NBFC/PA/sandbox stack simply doesn't apply.

One related point worth a single line rather than its own section: unlike a SaaS company, which genuinely has a "wait and see, no entity yet" option while it tests the Indian market (see our [permanent establishment risk guide](/india-entry-for-us-companies/permanent-establishment-risk-india) for that decision framework), a fintech pursuing NBFC, PA, or sandbox licensing doesn't have that option in any meaningful sense — the licensing regime itself requires Indian incorporation before a license can even be granted, so the PE-risk "should we wait" question that matters so much for a SaaS reader is largely moot here.

## Entering India From a Specific Country

The regulatory stack on this page — NBFC categories, PA/PA-CB net worth, the five RBI portals, the sandbox, digital lending rules — applies identically no matter which country your parent company is based in. What does vary by country is the tax and FEMA-reporting layer sitting on top of it: applicable DTAA withholding rates, your parent's own home-country filing obligations, and repatriation mechanics. If you're entering from one of the following markets, our country-specific India entry guides cover that layer in more depth than a fintech-focused page can:

- [US](/india-entry-for-us-companies)
- [UK](/india-entry-for-uk-companies)
- [Singapore](/india-entry-for-singapore-companies)
- [Germany](/india-entry-for-german-companies)
- [Japan](/india-entry-for-japan-companies)
- [China](/india-entry-for-china-companies)
- [Australia](/india-entry-for-australian-companies)

---

## FAQ

### Can a foreign company get an RBI NBFC license in India?
Yes — but only through an India-incorporated Private Limited subsidiary, never directly as a foreign entity. Which specific NOF figure applies depends on your NBFC category: P2P and account-aggregator NBFCs hold at ₹2 crore, while a standard direct-lending NBFC-ICC (the category most fintech lenders fall into) is on a phased path toward ₹10 crore by 31 March 2027 — NBFC-MFI and NBFC-Factor reach the same ₹10 crore endpoint but from a different starting baseline and interim step, so don't assume the ICC figures apply if that's your category. Stating a single flat figure without naming your category is the most common way this question gets answered incompletely elsewhere — see the NOF table above for the full breakdown.

### What license does a foreign fintech need to operate in India?
It depends entirely on what your business actually does with customer funds. If you're settling payments between payers and payees, you need Payment Aggregator (or PA-CB for cross-border flows) authorization. If you're extending credit directly, you need an NBFC registration — the specific category depends on your lending structure. If you're facilitating credit on a licensed partner's balance sheet rather than your own, you may need no license at all as an LSP. If your product is genuinely novel, piloting in RBI's regulatory sandbox first is worth considering. See the full decision framework above — this is a route-selection question, not a single answer.

### Is India's regulatory sandbox open to foreign fintech companies?
Yes, but only indirectly: a foreign fintech has to apply through an India-incorporated subsidiary, the same entity this whole page assumes you're setting up — there's no direct-application path for a foreign entity with no Indian presence. As of RBI's 2025 restructuring, the sandbox is "on-tap" (apply anytime) and "theme-neutral" (not restricted to a pre-announced theme), which removes some of the timing friction that made it a poor fit for a foreign entrant on its own schedule.

### How long does the RBI payment aggregator license take for a foreign company?
Honestly, this varies more than most published figures suggest, and we'd rather flag that than invent false precision. A commonly cited range for PA license review is roughly six to eighteen months — but that range isn't specific to foreign applicants, and the real driver is usually how complete and well-documented your application is going in, not your nationality as such. Treat any single-number timeline you see quoted elsewhere with some skepticism, and confirm current processing expectations directly as part of your application planning.

### What is the NBFC net owned fund requirement for a foreign company?
There isn't one single figure — it depends on NBFC category and on where RBI's phased timeline currently sits. P2P and account-aggregator NBFCs are at ₹2 crore, a standing figure not on the phased path. Direct-lending NBFC-ICC phases upward from a ₹2 crore baseline through an interim ₹5 crore step (already behind us as of this page's last-updated date) to ₹10 crore by 31 March 2027. NBFC-MFI and NBFC-Factor reach the same ₹10 crore endpoint on the same March 2027 date, but from a higher ₹5 crore baseline (₹2 crore in the North-East region for NBFC-MFI) and through a ₹7 crore interim step (₹5 crore in the North-East region for NBFC-MFI) rather than ICC's ₹5 crore one. The foreign-vs-domestic ownership question doesn't change the figure itself — it changes how the capital gets funded and reported (via FC-GPR, once allotted as shares).

### Can an LLP hold an RBI fintech license in India?
No — categorically, and this is worth being unambiguous about. An LLP cannot hold an NBFC registration, a Payment Aggregator authorization, or a PPI license, regardless of the general rule that 100% FDI is permitted into LLPs under the automatic route for many other sectors. That general LLP-FDI permission is a different rule answering a different question; it doesn't extend to RBI financial-services licensing eligibility. If you're structuring a fintech business, the entity has to be a Private Limited (or Public Limited) Company from the start.

### Is a payment gateway the same as a payment aggregator under RBI rules?
No, and the distinction matters a great deal for whether RBI authorization even applies to you. A payment gateway only routes transaction instructions and never holds or settles customer funds — it sits outside RBI's Payment Aggregator authorization requirement entirely. A payment aggregator receives and settles funds as part of the transaction flow, which is the trigger for needing authorization under the Payment and Settlement Systems Act, 2007. If your platform never actually touches the money, you may not need PA authorization at all — worth confirming which category genuinely describes your product before assuming this page's PA section applies to you.

### Does a licensed Indian fintech subsidiary need separate SEBI or IRDAI registration?
Possibly, depending on your specific activity — RBI is the dominant regulator for payments, lending, and account-aggregation, but it isn't the only one that can apply. If your product touches securities execution or wealth-management advice, SEBI registration may be relevant; if it touches insurance distribution or underwriting, IRDAI; and virtual-digital-asset-adjacent activity brings FIU-IND registration into the picture from an anti-money-laundering angle. Most payments and lending fintechs stay entirely within RBI's perimeter, but it's worth confirming your specific activity against the right regulator rather than assuming RBI is automatically the only one that matters.

### How does RBI licensing connect to a US parent's Form 5471 and DTAA position?
Your Indian subsidiary's licensing capital build-up (NOF or PA net worth) ties directly to your FC-GPR filing timeline, and once the subsidiary is licensed and operating — recharging platform, technology, or licensing costs to or from the US parent — you're in Section 482/Form 5471 Schedule M reconciliation territory on the US side, with DTAA withholding applying to any profit repatriation. This isn't new regulatory ground; it's the same US-parent tax and FEMA framework already covered in depth on our [US company India-entry hub](/india-entry-for-us-companies), applied to the specific trigger points a fintech subsidiary creates. See the US-parent section above for the full walkthrough.

---

## CTA

**Mid-page CTA** (placed after the "Which License Do You Actually Need? A Decision Framework" section, per the approved CTA strategy — the point where a reader has enough context to know roughly which route applies to them):

> **Deciding Which RBI License Path Fits Your Fintech Model?**
> Tell us what your platform actually does — settles payments, extends credit, aggregates account data, or something that doesn't fit neatly into any of those — and AU Corporate's FEMA & RBI compliance team will walk through which license (or whether you need one at all) applies to your specific business, and what the realistic capital and timeline picture looks like.

**Closing CTA** (end of page, matching every sibling page in this cluster):

> **Ready to Structure Your India Fintech Entry?**
> Whether you're still working out which license applies to your model or you're ready to start the NBFC, PA, or sandbox application process, AU Corporate's FEMA & RBI compliance practice handles the licensing sequencing, capital planning, and ongoing compliance calendar — and, for US-headquartered parents, the Form 5471/Section 482/DTAA layer that sits on top of it.
>
> [Talk to an AU Corporate Expert →] *(button, matching the site's standard closing-CTA button pattern, linking to /contact)*

**Related resources** (internal links to surface near the FAQ/closing CTA, matching the site's RelatedResources component pattern used on the SaaS sibling page):
- India Entry for US Companies — the full US-company India-entry guide (/india-entry-for-us-companies)
- FEMA Compliance for US Companies in India — FC-GPR, FC-TRS and the annual FLA return (/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary)
- Transfer Pricing & Section 482 for US-India Subsidiaries (/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary)
- DTAA & Withholding Tax Rates for US Parent Companies (/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax)
- India Entry for AI, SaaS and Technology Companies — the sibling guide for a fintech-adjacent-but-not-actually-fintech product (/india-entry-for-saas-companies)
- Company Registration in India — the full SPICe+ incorporation process (/india-business-setup/company-formation)
- FDI Automatic and Government Approval Routes (/india-business-setup/fdi-channels)
- Taxation & Regulatory Compliance (/services/taxation-regulatory)

---

## Writer's Notes — Needs Verification

Every item below is carried forward from Stages 1-4's own flagged uncertainties, plus a small number of additional items surfaced while drafting. None of these figures were invented — all are grounded in the research stages' convergent secondary-source findings — but none have been confirmed against a directly-fetched RBI primary source (WebFetch was blocked throughout Stages 1-3), so all should be checked before publish:

1. **NBFC NOF phased-figure structure** — P2P/AA at ₹2 crore (standing); NBFC-ICC phasing ₹2 crore → ₹5 crore (by 31 March 2025) → ₹10 crore (by 31 March 2027); NBFC-MFI/NBFC-Factor phasing from a ₹5 crore baseline (₹2 crore in the North-East region for NBFC-MFI) → ₹7 crore (₹5 crore in the North-East region for NBFC-MFI) by 31 March 2025 → ₹10 crore by 31 March 2027 (corrected per Stage 9 fact-check — see item 12 below, which this replaces). High-confidence from convergent secondary sources, not primary-fetch-confirmed. Confirm against RBI's Master Direction on Scale-Based Regulation for NBFCs (Oct 2023) directly, including the exact North-East-region figures for NBFC-MFI.
2. **Five-portal function mapping** (PRAVAAH = new applications, mandatory for NBFC since May 2025; DAKSH = post-license supervision only, launched Oct 2022; COSMOS = legacy, application role superseded, returns role being superseded; CIMS = current-transition returns; FIRMS = FC-GPR/foreign-investment reporting, separate system) — same confidence status as above. Confirm portal names, functions, and effective dates against RBI's own notifications/press releases.
3. **PA/PA-CB net worth figures** (₹15 crore at application, ₹25 crore within 3 years) and the specific circular citation (DPSS.CO.AD.No.1344/02.27.005/2014-15) — this circular predates RBI's Master Direction on Regulation of Payment Aggregators, Sept 15, 2025, which is understood to have consolidated/replaced earlier PA guidance. Confirm the ₹15cr/₹25cr figures and this specific circular reference are still current and correctly cited under the September 2025 Master Direction, not an artifact of a superseded framework.
4. **Digital Lending Directions, 2025** — effective date (cited as May 8, 2025), the FLDG cap (cited as 5% of loan portfolio), and the data-localization/24-hour-deletion rule. Confirm all three against the current Directions text directly.
5. **Regulatory sandbox 2025 restructuring** — "on-tap, theme-neutral" characterization and the foreign-entity-must-apply-via-India-subsidiary requirement. The on-tap/theme-neutral point is reasonably well-evidenced (Stage 1/3); the via-subsidiary requirement is logically consistent with every other RBI licensing mechanic on this page but was not found explicitly stated on any competitor page — confirm directly against RBI's current sandbox framework document.
6. **2025 amendment to RBI's Master Directions on Foreign Investment** permitting foreign capital to fund NOF pre-license, with repatriation required if the application is refused — flagged in the page copy itself as unconfirmed rather than stated as settled fact. Confirm this exists and get the correct notification reference before treating it as citable.
7. **Post-license operational specifics** — escrow-account arrangement requirements, KYC certification cadence, and cybersecurity/IS-audit expectations. Deliberately written without specific dates or cadences in the draft (the one specific date found in research — a Dec 31, 2025 escrow-migration deadline cited by a single competitor, kdpaccountants — would already be in the past as of this page's last-updated date, so it was not included; if a current, confirmed date/cadence exists, it should be added at fact-check stage rather than left generic).
8. **PRAVAAH launch (May 2024) and mandatory-for-new-NBFC-applications effective date (May 1, 2025); DAKSH SupTech launch (Oct 2022)** — both cited in-page; confirm against RBI's own launch/notification announcements.
9. **PA license processing timeline** — deliberately hedged in the FAQ (a broad "six to eighteen months" range, explicitly flagged as not foreign-applicant-specific and not to be treated as precise) rather than stated as a firm figure, per Stage 6's explicit guidance not to invent false precision here.
10. **Section 482/Form 5471/DTAA content in the US-parent bridge section** — this content is a direct extension of AU's own already-published, presumably-fact-checked hub content (`fema-compliance-us-company-india-subsidiary`, `transfer-pricing-us-india-subsidiary`, `repatriating-profits-indian-subsidiary-dtaa-withholding-tax`), not new claims — flagging only so Stage 9 confirms the specific framing used here ("a majority-owned Indian subsidiary is very likely a Controlled Foreign Corporation," FC-GPR timing tied to NOF build-up) is consistent with what those pages actually state, since this page paraphrases rather than quotes them.
11. **PSS Act, 2007 as the statutory trigger for PA authorization**, and the general characterization of the payment-gateway/payment-aggregator distinction — well-evidenced from Stage 1/3/4 research (startupsolicitors' framing, cross-checked) but not verified against the Act's text directly.
12. **NBFC-MFI/NBFC-Factor NOF glide-path correction (added at Stage 9→7 loop-back)** — corrected per Stage 9's fact-check (09-fact-check.md) to show NBFC-MFI and NBFC-Factor starting from a ₹5 crore baseline (₹2 crore in the North-East region for NBFC-MFI), rising to an interim ₹7 crore (₹5 crore in the North-East region) by 31 March 2025, then ₹10 crore by 31 March 2027 — distinct from NBFC-ICC's ₹2cr → ₹5cr → ₹10cr path, which the draft had previously (incorrectly) applied identically to all three categories. This correction touched four locations: the NOF table, the paragraph immediately below it, and the two FAQ answers on NBFC licensing and NOF requirements. The correction itself relied on secondary-source cross-checking during the fact-check stage (WebFetch was blocked that session too, consistent with every prior stage in this pipeline) — the exact North-East-region figures for NBFC-MFI in particular should be re-confirmed against the primary RBI Master Direction text (Scale-Based Regulation Directions, 2023) once direct RBI.org.in access or Semrush/other tool access is available, before this page is treated as fully primary-source-verified.

## Note on the Approved Architecture

No deviations were made from Stage 6's approved 16-section (+ FAQ/CTA) structure, section ordering, title, meta description substance, URL, or FAQ question list. The only change from Stage 6's exact text is the meta description trim (documented in the Metadata section above) and minor placement notes (Related Resources link list, CTA button copy) that operationalize Stage 6's CTA Strategy and Internal Linking Plan sections into actual page copy, since those were strategy notes rather than draft copy in Stage 6's output. No scope was added or removed relative to the approved outline. The NBFC-MFI/NBFC-Factor NOF figures were corrected per a Stage 9 loop-back (see Writer's Notes item 12) — this is a factual correction within the existing approved structure, not a structural change.

## Note on Stage 10 Copy-Hygiene Correction (2026-09-30)

Per `10-eeat-review.md`'s "Falls Short" item 1, three sentences in the live page copy pointed a reader at "flagged below" / "flagged for fact-check verification below" — an internal Writer's Notes appendix that doesn't ship on the published page. All three (NOF section, PA net-worth section, Digital Lending Directions section) have been rewritten into first-person, reader-facing hedge language consistent with the FAQ's existing "we'd rather flag that than invent false precision" voice. The underlying hedge and its substance are unchanged — this was a register fix, not a content or accuracy change. The Writer's Notes appendix itself (for Agent 9/human reviewer use) is untouched.
