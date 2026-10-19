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

  "/branch-office-registration": { title: "Branch Office Registration", description: "Form FNC, RBI/AD bank approval, UIN, ROC Form FC-1, PAN and TAN for a foreign company's India branch office" },
  "/branch-office-fema-rbi-compliance": { title: "FEMA & RBI Compliance for Branch Offices", description: "Form FNC, UIN, Annual Activity Certificate, profit remittance, additional offices, compounding and closure" },
  "/foreign-company-roc-compliance": { title: "ROC Compliance for Foreign Companies", description: "Forms FC-1, FC-2, FC-3 and FC-4 for a branch office's registration, changes, accounts and annual return" },
  "/branch-office-tax-gst-transfer-pricing": { title: "Tax, GST & Transfer Pricing for Branch Offices", description: "Foreign company tax rate, advance tax, TDS, GST, transfer pricing, permanent establishment and treaty relief" },
  "/branch-office-accounting-audit": { title: "Accounting & Audit Support for Branch Offices", description: "Monthly accounting, head office reconciliation, TDS/GST workings, US GAAP/IFRS reporting and audit support" },
  "/branch-office-payroll-compliance": { title: "Payroll & FRRO for Branch Offices", description: "Payroll, social security, professional tax, Labour Codes compliance and FRRO support for expats" },
  "/project-office-registration": { title: "Project Office Registration", description: "General permission under Regulation 5, Form FNC-1, ROC Form FC-1, PAN and TAN for a foreign company's India project office" },
  "/project-office-fema-rbi-compliance": { title: "FEMA & RBI Compliance for Project Offices", description: "Form FNC, Annual Activity Certificate, contract changes, surplus remittance, compounding and closure" },
  "/project-office-roc-compliance": { title: "ROC Compliance for Project Offices", description: "Forms FC-1, FC-2, FC-3 and FC-4 for a project office's registration, changes, accounts and annual return" },
  "/project-office-tax-gst-transfer-pricing": { title: "Tax, GST & Transfer Pricing for Project Offices", description: "Foreign company tax rate, permanent establishment, lower deduction certificate, presumptive tax, GST and treaty relief" },
  "/project-office-accounting-audit": { title: "Accounting & Audit Support for Project Offices", description: "Project-wise accounting, head office reconciliation, retention and WIP, TDS/GST workings and audit support" },
  "/project-office-payroll-compliance": { title: "Payroll & FRRO for Project Offices", description: "Payroll, social security, professional tax, Labour Codes, contract labour and FRRO support for expats" },
  "/liaison-office-registration": { title: "Liaison Office Registration", description: "Eligibility, Form FNC, UIN, ROC Form FC-1, PAN, TAN and permitted tasks for a foreign company's India liaison office" },
  "/liaison-office-fema-rbi-compliance": { title: "FEMA & RBI Compliance for Liaison Offices", description: "Form FNC, UIN, Annual Activity Certificate, approval renewal, additional offices, compounding and closure" },
  "/liaison-office-roc-compliance": { title: "ROC Compliance for Liaison Offices", description: "Forms FC-1, FC-2, FC-3 and FC-4 for a liaison office's registration, changes, accounts and annual return" },
  "/liaison-office-tax-compliance": { title: "Tax Compliance for Liaison Offices", description: "TDS, annual statement of activities, permanent establishment risk, GST position and expat tax" },
  "/liaison-office-accounting-audit": { title: "Accounting & Audit Support for Liaison Offices", description: "Head office remittance and expense accounting, Annual Activity Certificate and audit support" },
  "/liaison-office-payroll-compliance": { title: "Payroll & FRRO for Liaison Offices", description: "Payroll, social security, Labour Codes compliance and FRRO support for liaison office staff and expats" },
  "/llp-in-india": { title: "LLP Registration in India", description: "The 120-day resident-partner rule, FDI automatic-route gate, registration and compliance" },

  "/oidar-gst-registration-india": { title: "OIDAR & GST Registration for Foreign SaaS Companies", description: "When OIDAR/GST registration is mandatory, and the GSTR-5A filing calendar" },
  "/india-entry-for-saas-companies": { title: "India Entry for AI, SaaS & Tech Companies", description: "Entity structure, FEMA/RBI basics, and tax/GST treatment after incorporation" },
  "/global-vat-compliance-ai-saas-companies": { title: "Global VAT & Sales Tax Compliance for AI/SaaS", description: "VAT/GST/sales-tax registration and filing across the US, EU, UK, Japan and more" },

  "/india-business-setup/fdi-channels": { title: "FDI Channels & Investment Routes", description: "Automatic vs. Government approval route by sector" },
  "/india-business-setup/company-formation": { title: "Company Registration in India", description: "SPICe+ incorporation process, entity types, FDI routes, documents, cost and timelines" },
  "/india-subsidiary-registration": { title: "India Subsidiary Registration", description: "Incorporation, PAN, TAN, bank account, share issue and FC-GPR for a foreign company's India subsidiary" },
  "/accounting-reporting-audit-support": { title: "Accounting & Audit Support for Subsidiaries", description: "Monthly accounting, reconciliations, fixed assets, TDS/GST workings, US GAAP/IFRS reporting and audit support" },
  "/fema-rbi-compliance": { title: "FEMA & RBI Compliance for Subsidiaries", description: "FC-GPR, FC-TRS, FLA return, ECB and RBI approvals for an Indian subsidiary" },
  "/corporate-tax-gst-transfer-pricing": { title: "Corporate Tax, GST & Transfer Pricing", description: "Corporate tax, GST, transfer pricing, DTAA, repatriation tax, expat taxation and tax litigation for Indian subsidiaries" },
  "/secretarial-roc-compliance": { title: "Secretarial & ROC Compliance for Subsidiaries", description: "Board meetings, AGM, ROC filings, registered office shifting, MCA notices, mergers and winding up" },
  "/payroll-expat-services": { title: "Payroll & Expat Services", description: "Payroll, PF/ESI, professional tax, labour law compliance, recruitment and FRRO registration for expats" },
  "/india-business-setup/regulatory-compliance": { title: "Regulatory Compliance Framework", description: "FEMA, RBI, and sector-specific rules for foreign-owned businesses" },
  "/india-business-setup/banking-taxation": { title: "Banking & Taxation Setup", description: "Bank account opening, capital inflow, and initial tax registrations" },
  "/india-business-setup/timeline-resources": { title: "Timeline & Resources", description: "Realistic setup timelines and resource planning" },

  "/blog/usa-to-india": { title: "Set Up a Subsidiary in India from the USA", description: "How US companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance" },
  "/blog/usa-to-india/incorporation-process": { title: "Incorporation Process for an Indian Subsidiary", description: "The eight steps to incorporate a wholly owned subsidiary in India from the USA, forms and typical 4 to 6 week timeline" },
  "/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp": { title: "Subsidiary vs Branch vs Liaison Office vs LLP", description: "Compare the four ways a US company can enter India: activities, approvals, tax and control" },
  "/blog/usa-to-india/documents-and-apostille": { title: "Documents and Apostille for an India Subsidiary", description: "Which documents a US parent must prepare, and how notarization and apostille work for US state and federal documents" },
  "/blog/usa-to-india/resident-director": { title: "Resident Director Requirement for an Indian Company", description: "Who qualifies as a Resident Director, options for US parents, and duties" },
  "/blog/usa-to-india/funding-fema-fc-gpr": { title: "Funding an Indian Subsidiary: FEMA and Form FC-GPR", description: "Equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR" },
  "/blog/usa-to-india/share-valuation": { title: "Share Valuation for Foreign Investment in India", description: "Why shares issued to a US parent need a valuation, who can certify it, and the FEMA pricing floor" },
  "/blog/usa-to-india/repatriating-profits": { title: "Repatriating Profits from India to the US", description: "Dividends, service fees, royalties, loans, Forms 145 and 146, Withholding Tax and DTAA relief" },
  "/blog/usa-to-india/eor-vs-subsidiary": { title: "EOR vs Subsidiary in India", description: "Speed, control, compliance, tax presence and when to convert from an Employer of Record to your own entity" },
  "/blog/usa-to-india/transfer-pricing": { title: "Transfer Pricing in India for US-Owned Subsidiaries", description: "Arm's length pricing, documentation, Form 48, methods, safe harbour and audits" },
  "/blog/usa-to-india/dtaa-pe-risk": { title: "India-US Tax Treaty and Permanent Establishment Risk", description: "Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk" },
  "/blog/usa-to-india/us-parent-obligations": { title: "US Parent Reporting for an Indian Subsidiary", description: "Form 5471, FBAR, Form 8938 and other US-side reporting for a US parent" },
  "/blog/usa-to-india/compliance-calendar": { title: "India Subsidiary Compliance Calendar for US Companies", description: "Monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law" },
  "/blog/usa-to-india/audit-icofr": { title: "Audit and ICOFR for Indian Subsidiaries of US Companies", description: "Statutory audit, tax audit, GST audit and internal controls over financial reporting" },
  "/blog/usa-to-india/tax-notices-and-litigation": { title: "Handling Indian Tax Notices and Disputes", description: "First steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements" },
  "/blog/usa-to-india/contracts-and-arbitration": { title: "Contracts and Arbitration in India for US Companies", description: "Intercompany and customer contracts, governing law, arbitration clauses and enforcing awards in India" },
  "/blog/usa-to-india/esop": { title: "ESOPs for Indian Employees of a US Parent Company", description: "FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for ESOPs" },
  "/blog/usa-to-india/restructuring-and-exit": { title: "Restructuring, Mergers and Exit for an Indian Subsidiary", description: "Share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps" },
  "/blog/usa-to-india/expat-visa": { title: "Sending a US Executive to India", description: "Employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk" },
  "/blog/usa-to-india/global-vat": { title: "Global VAT for US Companies Selling Abroad", description: "VAT registration, B2B and B2C rules and compliance for US companies selling into Europe, the UK and beyond" },
  "/blog/usa-to-india/hiring-and-payroll": { title: "Hiring in India: Contracts, Payroll and Compliance", description: "Employment contracts, provident fund, ESI, gratuity, professional tax and India's labour codes" },
  "/blog/usa-to-india/common-mistakes": { title: "10 Common Mistakes US Companies Make Setting Up in India", description: "The most common and costly mistakes, and how to avoid each, with a pre-filing checklist" },
  "/blog/usa-to-india/faq": { title: "216 FAQs: Setting Up an India Subsidiary from the USA", description: "Plain answers on incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary" },

  "/blog/australia-to-india": { title: "Set Up a Subsidiary in India from Australia", description: "How Australian companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, the India-Australia tax treaty and compliance" },
  "/blog/australia-to-india/incorporation-process": { title: "Incorporation Process for an Indian Subsidiary, Step by Step", description: "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days" },
  "/blog/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp": { title: "Subsidiary vs Branch vs Liaison Office vs LLP in India", description: "Compare the four ways an Australian company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control" },
  "/blog/australia-to-india/documents-and-apostille": { title: "Documents and Apostille for an India Subsidiary (Australian Parent)", description: "Which documents an Australian parent must prepare to incorporate an Indian subsidiary, and how notarisation and DFAT apostille work for Australian company documents" },
  "/blog/australia-to-india/resident-director": { title: "Resident Director Requirement for an Indian Company", description: "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Australian parents, and duties" },
  "/blog/australia-to-india/funding-fema-fc-gpr": { title: "Funding an Indian Subsidiary: FEMA and Form FC-GPR", description: "How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS" },
  "/blog/australia-to-india/share-valuation": { title: "Share Valuation for Foreign Investment in India", description: "Why shares issued to an Australian parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation" },
  "/blog/australia-to-india/repatriating-profits": { title: "Repatriating Profits from India to Australia: Forms and Tax", description: "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief" },
  "/blog/australia-to-india/eor-vs-subsidiary": { title: "EOR vs Subsidiary in India: Which Is Right for an Australian Company?", description: "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Australian companies" },
  "/blog/australia-to-india/transfer-pricing": { title: "Transfer Pricing in India for Australian-Owned Subsidiaries", description: "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits" },
  "/blog/australia-to-india/india-australia-dtaa": { title: "India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies", description: "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence state: tax rates table, permanent establishment, business profits, dividends, interest, royalties, capital gains, employees, relief, MAP and how to claim treaty benefits" },
  "/blog/australia-to-india/dtaa-pe-risk": { title: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk", description: "How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk" },
  "/blog/australia-to-india/foreign-employee-treaty-ssa": { title: "Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA", description: "How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day rule, Indian tax residency, certificates of coverage, provident fund and superannuation" },
  "/blog/australia-to-india/australian-parent-obligations": { title: "Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More", description: "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets, transfer pricing and thin capitalisation. A guide for Australian finance teams" },
  "/blog/australia-to-india/compliance-calendar": { title: "India Subsidiary Compliance Calendar for Australian Companies", description: "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law" },
  "/blog/australia-to-india/audit-icofr": { title: "Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies", description: "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of an Australian group. What to expect and how to prepare" },
  "/blog/australia-to-india/tax-notices-and-litigation": { title: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary", description: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements" },
  "/blog/australia-to-india/contracts-and-arbitration": { title: "Contracts and Arbitration in India for Australian Companies", description: "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India" },
  "/blog/australia-to-india/esop": { title: "ESOPs for Indian Employees of an Australian Parent Company", description: "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for an Australian parent" },
  "/blog/australia-to-india/restructuring-and-exit": { title: "Restructuring, Mergers and Exit for an Indian Subsidiary", description: "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps" },
  "/blog/australia-to-india/expat-visa": { title: "Sending an Australian Executive to India: Visa, Housing and Tax", description: "How to relocate an Australian executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent" },
  "/blog/australia-to-india/global-vat": { title: "Global VAT and GST for Australian Companies Selling Abroad", description: "How VAT and GST work for Australian companies selling digital services and goods into Europe, the UK, New Zealand, India and beyond: registration, B2B and B2C rules and compliance" },
  "/blog/australia-to-india/hiring-and-payroll": { title: "Hiring in India: Contracts, Payroll and Statutory Compliance", description: "How Australian companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes" },
  "/blog/australia-to-india/common-mistakes": { title: "13 Common Mistakes Australian Companies Make Setting Up in India", description: "The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist" },
  "/blog/australia-to-india/faq": { title: "266 FAQs: Setting Up an India Subsidiary from Australia", description: "266 plain answers for Australian companies: incorporation, FEMA, tax, the India-Australia treaty, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary" },


  "/services/risk-management": { title: "Risk Management & Advisory", description: "Risk advisory, management assurance, and fraud risk management" },
  "/services/transaction-advisory": { title: "Transaction & Business Advisory", description: "Business valuation, M&A support, and transaction advisory" },
  "/services/training-workshops": { title: "Training & Workshops", description: "Professional development in taxation, compliance, and business practices" },

  "/partners/uniproasia": { title: "UniproAsia Partnership", description: "Expansion support into Hong Kong, Singapore and Mainland China alongside AU Corporate's India services" },

  "/blog": { title: "Blog", description: "Index of regulatory explainers and India business guides" },
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

  "/insights": { title: "Insights", description: "Index of AU Corporate's published regulatory and compliance insights" },
}
