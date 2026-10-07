/**
 * Curated title + one-line description for llms-full.txt, keyed by path.
 *
 * This is deliberately a thin layer on top of publicPages (lib/seo/public-
 * routes.ts), not a second source of truth for WHICH pages exist — every
 * path in publicPages appears in llms-full.txt regardless of whether it
 * has an entry here. A path missing from this map still renders with an
 * auto-derived title (see titleFromPath in app/llms-full.txt/route.ts)
 * instead of silently disappearing, which is what let llms-full.txt drift
 * out of date before: real, high-priority pages existed in the sitemap
 * but were never added to the hand-written file. Add an entry here when
 * you want nicer wording than the auto-derived fallback; skip it and the
 * page still shows up, just with a plainer title.
 *
 * Section grouping lives in the route handler (prefix-matched against
 * publicPages), not here — this file only owns per-page prose.
 */

export type PageMeta = { title: string; description: string }

export const pageMeta: Record<string, PageMeta> = {
  "/": { title: "AU Corporate", description: "India business setup, tax & compliance firm — overview of services and market-entry proposition" },
  "/services": { title: "Our Services", description: "Full service catalog — taxation, accounting, HR, risk, transaction advisory" },
  "/india-business-setup": { title: "India Business Setup Guide", description: "Company formation, FDI routes, regulatory compliance, and banking/taxation for new entities" },
  "/services/accounting-assurance": { title: "Accounting & Assurance", description: "Financial statement preparation, Ind AS/IFRS compliance, internal controls, statutory audit" },
  "/hr-services": { title: "HR Outsourcing & Payroll", description: "Payroll processing, HR compliance, and recruitment support" },
  "/services/taxation-regulatory": { title: "Taxation & Regulatory Services", description: "Corporate tax, GST, tax audit, transfer pricing, and regulatory advisory" },
  "/outsourcing": { title: "Accounting & Finance Outsourcing", description: "Bookkeeping, monthly accounting, GST/TDS accounting support, MIS and parent-company reporting, and audit support for foreign companies and their Indian subsidiaries" },
  "/arbitration-services": { title: "Arbitration Services", description: "Arbitration, enforcement, and dispute resolution advisory" },
  "/about": { title: "About AU Corporate", description: "Team, credentials, and firm background" },
  "/contact": { title: "Contact", description: "Contact details, office locations, and inquiry form" },
  "/career": { title: "Careers", description: "Open roles at AU Corporate" },
  "/compliance-calendar": { title: "India Subsidiary Compliance Calendar", description: "The monthly, quarterly, annual and event-based filing calendar for a foreign-owned Indian subsidiary" },
  "/privacy": { title: "Privacy Policy", description: "" },
  "/terms": { title: "Terms of Service", description: "" },

  "/doing-business-in-india": { title: "Doing Business in India", description: "Guide for foreign companies entering and operating in India" },
  "/doing-business-in-india/why-india": { title: "Why Invest in India", description: "Market size, growth rate, talent, and strategic advantages" },
  "/doing-business-in-india/pre-incorporation": { title: "Pre-Incorporation Planning", description: "Market feasibility, FDI eligibility, tax-efficient structuring, JV strategy, location planning" },
  "/doing-business-in-india/entry-process": { title: "India Market Entry Process", description: "Step-by-step walkthrough from entity selection through initial compliance" },
  "/doing-business-in-india/incorporation": { title: "Should You Incorporate in India Now?", description: "Strategic timing decision guide" },
  "/doing-business-in-india/post-incorporation": { title: "Life After Incorporation", description: "Priorities and common second-year mistakes as you scale" },

  "/gcc-setup-india": { title: "GCC Setup in India", description: "Global Capability Center entity choice, FEMA/RBI filings, and safe harbour rules" },

  "/branch-office-in-india": { title: "Branch Office in India", description: "RBI/FEMA 22(R) eligibility, Automatic vs Approval route, Form FNC" },
  "/liaison-office-in-india": { title: "Liaison Office in India", description: "FEMA eligibility, RBI approval via Form FNC, permitted activities" },
  "/project-office-in-india": { title: "Project Office in India", description: "FEMA/Regulation 5 eligibility, RBI/AD-bank approval via Form FNC-1" },
  "/llp-in-india": { title: "LLP Registration in India", description: "The 120-day resident-partner rule, FDI automatic-route gate, registration and compliance" },

  "/oidar-gst-registration-india": { title: "OIDAR & GST Registration for Foreign SaaS Companies", description: "When OIDAR/GST registration is mandatory, and the GSTR-5A filing calendar" },
  "/india-entry-for-saas-companies": { title: "India Entry for AI, SaaS & Tech Companies", description: "Entity structure, FEMA/RBI basics, and tax/GST treatment after incorporation" },
  "/global-vat-compliance-ai-saas-companies": { title: "Global VAT & Sales Tax Compliance for AI/SaaS", description: "VAT/GST/sales-tax registration and filing across the US, EU, UK, Japan and more" },

  "/india-business-setup/fdi-channels": { title: "FDI Channels & Investment Routes", description: "Automatic vs. Government approval route by sector" },
  "/india-business-setup/company-formation": { title: "Company Registration in India", description: "SPICe+ incorporation process, entity types, FDI routes, documents, cost and timelines" },
  "/india-business-setup/regulatory-compliance": { title: "Regulatory Compliance Framework", description: "FEMA, RBI, and sector-specific rules for foreign-owned businesses" },
  "/india-business-setup/banking-taxation": { title: "Banking & Taxation Setup", description: "Bank account opening, capital inflow, and initial tax registrations" },
  "/india-business-setup/timeline-resources": { title: "Timeline & Resources", description: "Realistic setup timelines and resource planning" },

  "/india-entry-for-us-companies": { title: "India Entry for US Companies", description: "Subsidiary vs branch structuring, FEMA compliance, and transfer pricing for US-owned Indian subsidiaries" },
  "/india-entry-for-us-companies/register-company-in-india-from-usa": { title: "Register a Company in India from the USA", description: "Entity comparison, resident-director rule, process, cost and timeline" },
  "/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india": { title: "US Subsidiary vs Branch Office", description: "Entity choice comparison for a US parent entering India" },
  "/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us": { title: "How to Incorporate a Subsidiary from the US", description: "Step-by-step incorporation walkthrough for a US-owned Indian subsidiary" },
  "/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary": { title: "FEMA Compliance for US Companies", description: "FEMA/RBI reporting obligations for a US-owned Indian subsidiary" },
  "/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary": { title: "Transfer Pricing & Section 482", description: "Form 5471 and transfer pricing for a US parent and Indian subsidiary" },
  "/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us": { title: "Cost & Timeline from the US", description: "Realistic cost and timeline for incorporating from the US" },
  "/india-entry-for-us-companies/permanent-establishment-risk-india": { title: "Permanent Establishment Risk in India", description: "PE risk for a US parent operating in India" },
  "/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax": { title: "Repatriating Profits — DTAA & Withholding Tax", description: "India-US DTAA rates and withholding tax on dividends, royalties and fees for technical services" },
  "/india-entry-for-us-companies/annual-compliance-calendar": { title: "Annual Compliance Calendar (US-Owned Subsidiary)", description: "The dated AOC-4, MGT-7, ADT-1 and DIR-3 KYC calendar for a US-owned Indian subsidiary" },
  "/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation": { title: "Closing an Indian Subsidiary", description: "Strike-off vs. voluntary liquidation for winding up a US-owned Indian subsidiary" },

  "/india-entry-for-uk-companies": { title: "India Entry for UK Companies", description: "Subsidiary vs branch structuring, DTAA benefits, and FEMA compliance for UK-owned Indian subsidiaries" },
  "/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india": { title: "UK Subsidiary vs Branch Office", description: "Entity choice comparison for a UK parent entering India" },
  "/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk": { title: "How to Incorporate a Subsidiary from the UK", description: "Step-by-step incorporation walkthrough for a UK-owned Indian subsidiary" },
  "/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary": { title: "FEMA Compliance for UK Companies", description: "FEMA/RBI reporting obligations for a UK-owned Indian subsidiary" },
  "/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax": { title: "India-UK DTAA & Withholding Tax Rates", description: "" },
  "/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk": { title: "Cost & Timeline from the UK", description: "Realistic cost and timeline for incorporating from the UK" },

  "/india-entry-for-singapore-companies": { title: "India Entry for Singapore Companies", description: "DTAA benefits, substance tests, and FEMA compliance" },
  "/india-entry-for-australian-companies": { title: "India Entry for Australian Companies", description: "ECTA, entity structuring, and DTAA royalty rates" },
  "/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india": { title: "Australia Subsidiary vs Branch Office", description: "Entity choice comparison for an Australian parent entering India" },
  "/india-entry-for-german-companies": { title: "India Entry for German Companies", description: "DTAA flat 10% rate, entity structuring, and FEMA compliance" },
  "/india-entry-for-japan-companies": { title: "India Entry for Japanese Companies", description: "Japan Plus desk, JV vs wholly-owned subsidiary, and DTAA planning" },
  "/india-entry-for-china-companies": { title: "India Entry for Chinese Companies", description: "Press Note 3 approval framework and beneficial ownership rules" },

  "/services/risk-management": { title: "Risk Management & Advisory", description: "Risk advisory, management assurance, and fraud risk management" },
  "/services/transaction-advisory": { title: "Transaction & Business Advisory", description: "Business valuation, M&A support, and transaction advisory" },
  "/services/training-workshops": { title: "Training & Workshops", description: "Professional development in taxation, compliance, and business practices" },

  "/partners/uniproasia": { title: "UniproAsia Partnership", description: "Expansion support into Hong Kong, Singapore and Mainland China alongside AU Corporate's India services" },

  "/blog": { title: "Blog", description: "Index of regulatory explainers and India business guides" },
  "/accounting-outsourcing-firm-for-united-states-cpas-firm": { title: "Accounting Outsourcing for US Businesses", description: "How US businesses and CPA firms should evaluate India accounting outsourcing providers" },
  "/blog/india-japan-bis-exemption-high-tech-investment": { title: "India's Proposed BIS Exemption for Japanese High-Tech Investment", description: "" },
  "/blog/arbitration-enforcement-india": { title: "Arbitration Enforcement in India", description: "" },
  "/blog/construction-arbitration-india": { title: "Construction Arbitration in India", description: "Claims to enforcing awards" },
  "/blog/doing-business-india": { title: "Doing Business in India in 2026: What's Actually Changed", description: "GST 2.0, new Labour Codes, FDI trends" },
  "/blog/fdi-green-vs-brown-channel": { title: "FDI in India: Green Channel vs Brown Channel", description: "" },
  "/blog/mail-box-dtaa-benefits": { title: "Tiger Global Ruling: DTAA & Mailbox Companies", description: "Supreme Court ruling on treaty substance requirements" },
  "/blog/tax-loan-waiver-india": { title: "Tax Treatment of Loan Waiver in India", description: "Supreme Court ruling on Sections 28(iv) and 41(1)" },
  "/blog/wholly-owned-subsidiary": { title: "Wholly Owned Subsidiary in India", description: "Setup and compliance guide" },
  "/blog/india-safe-harbour-rules-2026": { title: "India's 2026 Safe Harbour Rules", description: "15.5% IT margin explained" },
  "/blog/best-state-to-register-company-in-india": { title: "Best State to Register a Company in India", description: "Comparing Indian states for company registration" },

}
