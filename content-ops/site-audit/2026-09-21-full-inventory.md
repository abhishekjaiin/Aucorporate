# AU Corporate — Full Site Inventory (Phase 1 Audit)
Date: 2026-09-21. Compiled directly from the Next.js codebase (`app/**/page.tsx` + `layout.tsx` metadata) — not from GSC/Ahrefs/Semrush (unavailable this session, see main report). 61 indexable routes found via `app/**/page.tsx`.

## Method note
Titles, meta descriptions and canonicals were pulled via direct grep of every `layout.tsx`'s `metadata` export (the established convention on this site — metadata lives in `layout.tsx`, content in `page.tsx`). H1 presence was checked via grep for literal `<h1` in `page.tsx`; pages using a shared template component (`RegionClusterTemplate`, `HeroSection`) render their H1 inside that component rather than literally in `page.tsx`, so "no literal H1 match" below means "H1 lives in a shared component," not "missing H1" — confirmed by direct knowledge of those components from earlier work this session.

## Cluster 1 — Core / Utility (7 pages)
| URL | Title | Classification |
|---|---|---|
| / | AU Corporate \| India Business Setup, Tax & Compliance Firm | IMPROVE (title/meta just refreshed 2026-09-17 for brand-query CTR; re-verify after next GSC pull) |
| /about | About AU Corporate \| India Entry & Compliance Advisory Firm | KEEP |
| /contact | Contact AU Corporate \| India Entry & Advisory Team | KEEP |
| /career | Careers at AU Corporate \| Join Our Advisory Team | KEEP |
| /privacy | (utility) | KEEP |
| /terms | (utility) | KEEP |
| /partners/uniproasia | UniproAsia Partnership: Expand into Hong Kong, Singapore & China \| AU Corporate | KEEP — only page describing a formal partner/correspondent network |

## Cluster 2 — Services (Function axis: service lines) (6 pages)
| URL | Title | Classification |
|---|---|---|
| /services | Our Services \| India Entry, Tax & Advisory \| AU Corporate | KEEP (hub; canonical bug fixed 2026-09-17) |
| /services/accounting-assurance | Accounting & Assurance Services \| AU Corporate | KEEP |
| /services/taxation-regulatory | Taxation & Regulatory Services in India \| AU Corporate | KEEP — candidate for stronger inbound linking from new industry pages |
| /services/risk-management | Risk Management & Advisory Services \| AU Corporate | KEEP |
| /services/training-workshops | Training & Workshops \| AU Corporate | KEEP — best-positioned page on the site per 2026-08-25 GSC audit (position 3.3) |
| /services/transaction-advisory | Transaction & Business Advisory Services \| AU Corporate | KEEP |

**Gap confirmed:** no dedicated Intellectual Property / Trademark page exists anywhere on the site. No dedicated "Licenses & Registrations" hub exists either (closest is `/india-business-setup/regulatory-compliance`, which is broader). Both are real content gaps, not oversights in this inventory — see main report Phase 5/9.

## Cluster 3 — Doing Business in India (Function axis: decision/journey pillar) (6 pages)
| URL | Title | Classification |
|---|---|---|
| /doing-business-in-india | Doing Business in India \| Guide for Foreign Companies | KEEP (pillar) |
| /doing-business-in-india/why-india | Why Invest in India \| Doing Business in India Guide | KEEP |
| /doing-business-in-india/pre-incorporation | Pre-Incorporation Planning for India Entry \| AU Corporate | KEEP |
| /doing-business-in-india/entry-process | India Market Entry Process \| Step-by-Step Guide | KEEP |
| /doing-business-in-india/incorporation | Should You Incorporate in India Now? A Strategic Decision Guide | KEEP |
| /doing-business-in-india/post-incorporation | Life After Incorporation: Strategic Priorities as You Scale in India | KEEP |

**Cannibalization flag:** `/blog/doing-business-india` ("Doing Business in India \| AU Corporate Blog") sits very close in title/topic to this entire pillar. See main report Cannibalization Report — this is the single clearest consolidation/differentiation candidate on the site.

## Cluster 4 — India Business Setup (Function axis: incorporation-mechanics pillar) (6 pages)
| URL | Title | Classification |
|---|---|---|
| /india-business-setup | India Business Setup \| Company Formation & FDI Guide | KEEP (pillar) |
| /india-business-setup/company-formation | Company Registration in India: Complete Guide for Foreign Companies (2026) | KEEP — this is effectively AU Corporate's existing "Company Registration in India" pillar the user's brief calls for; already deep (rebuilt 2026-08-25, 8.5/10 QC) |
| /india-business-setup/fdi-channels | FDI Channels & Investment Routes in India | KEEP |
| /india-business-setup/regulatory-compliance | Regulatory Compliance for India Business Setup | KEEP |
| /india-business-setup/banking-taxation | Banking & Taxation for India Business Setup | KEEP |
| /india-business-setup/timeline-resources | Timeline & Resources \| India Business Setup Guide | KEEP |

## Cluster 5 — Geography axis: India Entry for [Country] Companies (7 hubs + 11 sub-pages = 18 pages)
| Hub | Sub-pages | Classification |
|---|---|---|
| /india-entry-for-us-companies | + cost-timeline, fema-compliance, how-to-incorporate, transfer-pricing, subsidiary-vs-branch (5 sub-pages) | KEEP — most complete country cluster |
| /india-entry-for-uk-companies | + cost-timeline, fema-compliance, how-to-incorporate, india-uk-dtaa-withholding-tax, subsidiary-vs-branch (5 sub-pages) | KEEP — equally complete |
| /india-entry-for-australian-companies | + australia-subsidiary-vs-branch-office-india (1 sub-page) | KEEP — real ECTA/CFC-specific content, not templated |
| /india-entry-for-singapore-companies | (hub only) | KEEP — candidate for sub-page expansion (no cost-timeline/FEMA/DTAA sub-cluster yet, unlike US/UK) |
| /india-entry-for-german-companies | (hub only) | Same — candidate for sub-page expansion |
| /india-entry-for-japan-companies | (hub only) | Same — candidate for sub-page expansion |
| /india-entry-for-china-companies | (hub only) | Same — candidate for sub-page expansion (Press Note 3 content already differentiated) |

**Observation:** the geography axis is asymmetric — US/UK have full 5-page sub-clusters (FEMA, DTAA/transfer-pricing, cost-timeline, how-to-incorporate, subsidiary-vs-branch), Australia has 1 of 5, and Singapore/Germany/Japan/China have 0 of 5. This is a real, evidence-based expansion opportunity that doesn't require inventing new topics — it's replicating an already-proven pattern into underserved existing hubs. Flagged as P1 in the roadmap, ahead of most new industry pages, since it reuses a validated template and closes a visible asymmetry rather than speculating on a new axis.

## Cluster 6 — Industry/Vertical axis (nascent — 2 verticals, 5 pages)
| URL | Title | Classification |
|---|---|---|
| /gcc-setup-india | GCC Setup in India \| Global Capability Center Guide (2026) | KEEP — first vertical page, QC 8.7/10 |
| /oidar-gst-registration-india | GST & OIDAR Registration for Foreign SaaS Companies in India (2026 Guide) | KEEP |
| /india-entry-for-saas-companies | India Entry for AI, SaaS and Technology Companies... | KEEP |
| /global-vat-compliance-ai-saas-companies | Global VAT & Sales Tax Compliance for AI & SaaS Companies (2026 Guide) | KEEP — not yet in navbar/homepage per explicit prior user instruction |
| /accounting-outsourcing-firm-for-united-states-cpas-firm | Accounting Outsourcing to India for US Businesses: How to Choose | KEEP — a buyer-persona page (US CPA firms), not industry-axis; URL doesn't follow any established pattern (flagged as a technical/IA inconsistency, not to be changed without sign-off per the "don't change URLs unnecessarily" rule) |

**This is the cluster Phase 5/6 of the main report is about** — every other listed industry (manufacturing, pharma, ecommerce, etc.) currently has zero dedicated coverage anywhere on the site.

## Cluster 7 — Blog (8 posts + index = 9 pages)
| URL | Title | Classification |
|---|---|---|
| /blog | Blog \| AU Corporate Insights on India Business & Compliance | KEEP |
| /blog/wholly-owned-subsidiary | Wholly Owned Subsidiary in India \| Setup & Compliance Guide | KEEP — canonical bug fixed |
| /blog/doing-business-india | Doing Business in India \| AU Corporate Blog | **CONSOLIDATE/DIFFERENTIATE** — see Cannibalization Report; canonical bug fixed but topical overlap with the `/doing-business-in-india` pillar remains |
| /blog/india-safe-harbour-rules-2026 | India Safe Harbour Rules 2026... | KEEP |
| /blog/fdi-green-vs-brown-channel | FDI in India: Green Channel vs Brown Channel \| AU Corporate | KEEP |
| /blog/mail-box-dtaa-benefits | DTAA & Mailbox Companies in India \| Tiger Global Supreme Court 2026 | KEEP |
| /blog/tax-loan-waiver-india | Tax Treatment of Loan Waiver in India \| Supreme Court Ruling | KEEP |
| /blog/arbitration-enforcement-india | Arbitration Enforcement in India \| AU Corporate Blog | KEEP (fact-checked/rewritten earlier this session) |
| /blog/construction-arbitration-india | Construction Arbitration in India... | KEEP |
| /blog/india-japan-bis-exemption-high-tech-investment | India-Japan BIS Exemption... | KEEP (timely news piece) |

## Cluster 8 — Dispute Resolution / HR / Outsourcing (3 pages)
| URL | Title | Classification |
|---|---|---|
| /arbitration-services | Arbitration & Dispute Resolution in India \| AU Corporate | KEEP |
| /hr-services | HR Outsourcing & Payroll Services in India \| AU Corporate | KEEP — flagged in 2026-08-25 GSC audit as a "declining page," hold on content changes until a technical-cause re-audit confirms recovery |
| /outsourcing | Accounting & Finance Outsourcing in India \| AU Corporate | KEEP |

## Totals
- 61 indexable routes total
- Function-axis pages: ~19 (services + doing-business-in-india + india-business-setup clusters)
- Geography-axis pages: 18 (7 hubs + 11 sub-pages)
- Industry-axis pages: 5 (all built in the last 6 days of this engagement)
- Blog/editorial: 10
- Core/utility: 7
- Buyer-persona page (not cleanly axis-mapped): 1 (accounting-outsourcing-firm-for-united-states-cpas-firm)
- Partner page: 1

## Observations
- No literal-thin pages found (every content page carries real prose; utility pages like /privacy, /terms are appropriately short).
- The stale-canonical bug flagged in the 2026-08-25/26 GSC audits (`/services`, `/blog/wholly-owned-subsidiary`, `/blog/doing-business-india`) is confirmed fixed in current code — all three self-canonicalize.
- The single clearest cannibalization candidate is `/blog/doing-business-india` vs. the `/doing-business-in-india` pillar (near-identical title framing, real topical overlap).
- The geography axis is meaningfully asymmetric (US/UK fully built out; Singapore/Germany/Japan/China are hub-only) — a lower-risk expansion opportunity than net-new industry pages, since it replicates a proven template.
- Two Function-axis gaps confirmed: no Intellectual Property/Trademark page, no dedicated Licenses & Registrations hub.
- The industry/vertical axis has exactly 2 verticals covered (GCC, AI/SaaS) against ~20 industries with real, distinct regulatory profiles per the main report's Phase 5/6 analysis.
