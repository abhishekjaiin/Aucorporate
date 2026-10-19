import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/blog/uk-to-india/faq"
const PARENT_URL = "https://www.theaucorp.com/blog/uk-to-india"

const toc = [
  { id: "general", label: "Before you start: structure, cost and approvals" },
  { id: "common-mistakes", label: "13 Mistakes UK Companies Make Setting Up in India, and How to Avoid Them" },
  { id: "compliance-calendar", label: "Compliance Calendar for an Indian Subsidiary of a UK Company: Month by Month Against the UK Year" },
  { id: "contracts-courts-arbitration", label: "Contracts, Courts and Arbitration for UK Companies in India: English Judgments, LCIA and Indian Courts" },
  { id: "data-protection-uk-gdpr-dpdp", label: "Data Protection for UK Companies in India: UK GDPR, the DPDP Act and Transfers to India" },
  { id: "documents-companies-house-apostille", label: "Documents for an Indian Subsidiary from the UK: Companies House, Notary and Apostille" },
  { id: "exit-and-restructuring", label: "Selling, Restructuring or Closing an Indian Subsidiary: A Guide for UK Parents" },
  { id: "funding-and-fema", label: "Funding an Indian Subsidiary from the UK: FEMA, Pricing, Valuation and Form FC-GPR" },
  { id: "gcc-for-uk-companies", label: "Global Capability Centres in India for UK Companies: Models, Regulation and Transfer Pricing" },
  { id: "hiring-in-india", label: "Hiring in India as a UK Employer: Contracts, Payroll, Labour Codes and Share Plans" },
  { id: "incorporation-steps", label: "Incorporating an Indian Subsidiary from the UK: A 12-Week Plan" },
  { id: "india-uk-ceta", label: "India-UK CETA: What the Trade Agreement Changes for UK Companies Entering India" },
  { id: "india-uk-dtaa", label: "India-UK DTAA: Article-by-Article Guide to the Tax Treaty for UK Companies" },
  { id: "relocate-uk-staff", label: "Relocating UK Staff to India: Visas, FRRO Registration, Housing and Day-Count Control" },
  { id: "repatriating-profits", label: "Getting Money Out of India: Dividends, Fees, Royalties and Loan Repayments to a UK Parent" },
  { id: "structure-options", label: "Subsidiary, Branch, Liaison Office or LLP: Choosing a Structure in India from the UK" },
  { id: "transfer-pricing", label: "Transfer Pricing for UK-Owned Indian Subsidiaries: Documentation, Methods and Audits" },
  { id: "uk-employees-in-india-dcc", label: "UK Employees in India: Tax Treaty, Residence and the Double Contributions Convention" },
  { id: "uk-parent-reporting", label: "UK Parent Obligations for an Indian Subsidiary: CFC Rules, Dividend Exemption and Transfer Pricing" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "general",
    label: "Before you start: structure, cost and approvals",
    items: [
      { n: 1, id: "can-a-uk-company-own-100-of-an-indian-subsidiary", q: "Can a UK company own 100% of an Indian subsidiary?", a: "Yes, in most sectors. India allows 100% foreign ownership under the Automatic Route for most activities. A few sectors have caps, conditions or need government approval, so check your activity against the FDI Policy first." },
      { n: 2, id: "does-a-uk-company-need-to-visit-india-to-set-up-a-subsidiary", q: "Does a UK company need to visit India to set up a subsidiary?", a: "No. The incorporation is online. Directors need Digital Signature Certificates and apostilled identity documents, and nobody has to travel." },
      { n: 3, id: "how-long-does-it-take-to-set-up-an-indian-subsidiary-from-th", q: "How long does it take to set up an Indian subsidiary from the UK?", a: "Usually 4 to 6 weeks from complete documents, and around 12 weeks to a working bank account, payroll and first filings." },
      { n: 4, id: "what-does-it-cost-to-set-up-a-subsidiary-in-india", q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about £7,900 at an indicative ₹126.9 per pound in mid-October 2026). The costing depends on your plan." },
      { n: 5, id: "is-there-a-minimum-share-capital-for-an-indian-private-limit", q: "Is there a minimum share capital for an Indian private limited company?", a: "No statutory minimum. The practical amount depends on your costs for the first 12 to 18 months and the sector's rules." },
      { n: 6, id: "what-is-the-automatic-route-for-foreign-investment", q: "What is the Automatic Route for foreign investment?", a: "A route under the FDI Policy that lets a foreign investor invest in a permitted sector without government approval, subject to reporting to the RBI." },
      { n: 7, id: "which-sectors-restrict-foreign-investment-in-india", q: "Which sectors restrict foreign investment in India?", a: "Some sectors have caps or need approval, such as defence, insurance, multi-brand retail, some media, and certain financial and telecom activities. Always check the current FDI Policy for your activity." },
      { n: 8, id: "what-is-a-resident-director", q: "What is a Resident Director?", a: "A director who has stayed in India for 182 days or more in the financial year. Every Indian company needs at least one." },
      { n: 9, id: "can-a-uk-director-be-a-director-of-an-indian-company", q: "Can a UK director be a director of an Indian company?", a: "Yes, once they have a Director Identification Number and Digital Signature Certificate. The company still needs at least one Resident Director." },
      { n: 10, id: "what-is-spice", q: "What is SPICe+?", a: "The integrated online incorporation form of the Ministry of Corporate Affairs, which can also apply for PAN, TAN and other registrations together." },
      { n: 11, id: "what-accounting-standards-does-an-indian-subsidiary-follow", q: "What accounting standards does an Indian subsidiary follow?", a: "The Companies Act, 2013 and, for companies above the thresholds, Indian Accounting Standards (Ind AS), which are converged with IFRS. The UK parent bridges to UK-adopted IFRS or FRS 102 for consolidation." },
      { n: 12, id: "does-an-indian-subsidiary-need-an-audit", q: "Does an Indian subsidiary need an audit?", a: "Yes. Every company must have its accounts audited by a Chartered Accountant firm each year, regardless of size, and appoint the Auditor within 30 days of incorporation." },
      { n: 13, id: "what-corporate-tax-rate-does-an-indian-subsidiary-pay", q: "What corporate tax rate does an Indian subsidiary pay?", a: "Under the concessional regime without incentives, a domestic company pays 22% plus surcharge and cess, about 25.17%. Other regimes and rates apply to specific cases." },
      { n: 14, id: "must-the-indian-subsidiary-register-for-gst", q: "Must the Indian subsidiary register for GST?", a: "Registration is required above turnover thresholds and in some other cases, such as interstate supplies and reverse-charge liabilities. Services exported to the UK parent can be zero-rated where the conditions are met." },
      { n: 15, id: "can-the-indian-subsidiary-send-profits-to-the-uk-freely", q: "Can the Indian subsidiary send profits to the UK freely?", a: "Yes, through dividends, fees, royalties and loan repayments, with the tax and RBI formalities in each route. See the guide on getting money out of India." },
      { n: 16, id: "is-there-a-tax-treaty-between-india-and-the-uk", q: "Is there a tax treaty between India and the UK?", a: "Yes, the 1993 India-UK double taxation convention, modified by the Multilateral Instrument. It caps Indian withholding at 10% on dividends and 15% on interest, royalties and technical fees." },
      { n: 17, id: "does-the-india-uk-trade-agreement-change-how-i-set-up", q: "Does the India-UK trade agreement change how I set up?", a: "No. The CETA improves services access and staff mobility, but company law, FEMA and tax rules for the subsidiary are unchanged." },
      { n: 18, id: "can-the-indian-subsidiary-employ-uk-nationals", q: "Can the Indian subsidiary employ UK nationals?", a: "Yes, with an employment visa and registration, and with attention to tax and social security. See the guides on relocating UK staff and the Double Contributions Convention." },
      { n: 19, id: "what-documents-does-the-uk-parent-need", q: "What documents does the UK parent need?", a: "Its certificate of incorporation, articles, a board resolution, a Companies House profile or good standing certificate and identity and address proof for directors and signatories, notarised and apostilled." },
      { n: 20, id: "can-a-uk-partnership-or-sole-trader-set-up-an-indian-subsidi", q: "Can a UK partnership or sole trader set up an Indian subsidiary?", a: "Yes. A UK partnership or individual can be a shareholder, with additional documents and review. The tax and treaty position depends on the structure, so confirm it before investing." },
      { n: 21, id: "who-files-the-rbi-forms-for-the-investment", q: "Who files the RBI forms for the investment?", a: "The Indian subsidiary files Form FC-GPR with the help of its Authorised Dealer bank and advisers, using the documents the UK parent provides. The annual FLA return is filed by 15 July." },
      { n: 22, id: "what-happens-if-the-indian-subsidiary-is-sued", q: "What happens if the Indian subsidiary is sued?", a: "The claim is against the subsidiary, not the UK parent, subject to the usual exceptions. Contract terms, insurance and the arbitration clause determine how the dispute is handled." },
      { n: 23, id: "can-i-close-the-indian-subsidiary-later", q: "Can I close the Indian subsidiary later?", a: "Yes, by strike-off for a dormant company or voluntary liquidation for one with assets, after clearing tax, employee and RBI matters." },
    ],
  },
  {
    id: "common-mistakes",
    label: "13 Mistakes UK Companies Make Setting Up in India, and How to Avoid Them",
    readMore: { href: "/blog/uk-to-india/common-mistakes", label: "Read the full guide: 13 Mistakes UK Companies Make Setting Up in India, and How to Avoid Them" },
    items: [
      { n: 24, id: "what-is-the-most-common-mistake-uk-companies-make-in-india", q: "What is the most common mistake UK companies make in India?", a: "Treating India as a copy of UK practice: using UK contracts unchanged, assuming UK transfer pricing exemptions apply, and starting UK documents too late are the most frequent." },
      { n: 25, id: "what-are-the-deadlines-uk-companies-most-often-miss", q: "What are the deadlines UK companies most often miss?", a: "The 60-day allotment after the funds arrive, the 30-day Form FC-GPR filing after allotment and the INC-20A commencement filing within 180 days of incorporation." },
      { n: 26, id: "do-uk-transfer-pricing-exemptions-apply-in-india", q: "Do UK transfer pricing exemptions apply in India?", a: "No. UK small and medium-sized enterprises are generally exempt from UK transfer pricing, but India has no size exemption, so the Indian subsidiary still needs documentation and Form 48." },
      { n: 27, id: "does-the-uk-bribery-act-apply-to-the-indian-subsidiary", q: "Does the UK Bribery Act apply to the Indian subsidiary?", a: "It can apply to the UK parent through the conduct of its Indian subsidiary or agents. Adequate procedures are the defence, so put them in place before operations start." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "Compliance Calendar for an Indian Subsidiary of a UK Company: Month by Month Against the UK Year",
    readMore: { href: "/blog/uk-to-india/compliance-calendar", label: "Read the full guide: Compliance Calendar for an Indian Subsidiary of a UK Company: Month by Month Against the UK Year" },
    items: [
      { n: 28, id: "what-is-the-financial-year-of-an-indian-subsidiary", q: "What is the financial year of an Indian subsidiary?", a: "1 April to 31 March. Most UK groups also report to 31 March, which makes consolidation and audit timetables easier to align." },
      { n: 29, id: "when-must-the-indian-subsidiary-hold-its-agm", q: "When must the Indian subsidiary hold its AGM?", a: "Within six months of the financial year end, so by 30 September, and the first AGM within nine months of the first year end." },
      { n: 30, id: "when-is-advance-tax-due-in-india", q: "When is advance tax due in India?", a: "On 15 June, 15 September, 15 December and 15 March, in instalments." },
      { n: 31, id: "what-is-the-deadline-for-tds-payment-in-india", q: "What is the deadline for TDS payment in India?", a: "By the 7th of the following month. Quarterly TDS returns follow on 31 July, 31 October, 31 January and 31 May." },
      { n: 32, id: "does-the-indian-audit-date-affect-the-uk-parent-s-filing-dea", q: "Does the Indian audit date affect the UK parent's filing deadline?", a: "Indirectly. The UK parent needs the Indian audited accounts to consolidate and to finalise its Companies House accounts, which are due 9 months after the year end for a private company." },
    ],
  },
  {
    id: "contracts-courts-arbitration",
    label: "Contracts, Courts and Arbitration for UK Companies in India: English Judgments, LCIA and Indian Courts",
    readMore: { href: "/blog/uk-to-india/contracts-courts-arbitration", label: "Read the full guide: Contracts, Courts and Arbitration for UK Companies in India: English Judgments, LCIA and Indian Courts" },
    items: [
      { n: 33, id: "can-an-english-court-judgment-be-enforced-in-india", q: "Can an English court judgment be enforced in India?", a: "Yes, for a money judgment of a UK superior court. The UK is a reciprocating territory under Section 44A of the Code of Civil Procedure, so the decree can be filed for execution in India, subject to the statutory exceptions." },
      { n: 34, id: "are-london-arbitration-awards-enforceable-in-india", q: "Are London arbitration awards enforceable in India?", a: "Yes. They are foreign awards under Part II of the Arbitration and Conciliation Act, 1996, and are enforced as a decree if the court is satisfied that no ground for refusal applies." },
      { n: 35, id: "should-a-uk-company-choose-english-law-for-its-indian-contra", q: "Should a UK company choose English law for its Indian contracts?", a: "For intercompany and high-value cross-border contracts, often yes, with a clear seat. For local customer and employment terms Indian law will usually govern, and an Indian seat may be easier." },
      { n: 36, id: "what-is-the-stamp-duty-risk-in-indian-contracts", q: "What is the stamp duty risk in Indian contracts?", a: "Unstamped or under-stamped agreements can be inadmissible as evidence until the duty and a penalty are paid. The duty depends on the state and the type of document." },
      { n: 37, id: "is-mediation-available-in-india-before-going-to-court", q: "Is mediation available in India before going to court?", a: "Yes. The Mediation Act, 2023 provides for pre-litigation mediation and gives settlement agreements enforceable status." },
    ],
  },
  {
    id: "data-protection-uk-gdpr-dpdp",
    label: "Data Protection for UK Companies in India: UK GDPR, the DPDP Act and Transfers to India",
    readMore: { href: "/blog/uk-to-india/data-protection-uk-gdpr-dpdp", label: "Read the full guide: Data Protection for UK Companies in India: UK GDPR, the DPDP Act and Transfers to India" },
    items: [
      { n: 38, id: "is-india-adequate-for-uk-gdpr-transfers", q: "Is India adequate for UK GDPR transfers?", a: "No. India does not currently have a UK adequacy regulation, so a UK controller sending personal data to an Indian subsidiary needs a transfer mechanism such as the International Data Transfer Agreement or the UK Addendum, plus a transfer risk assessment." },
      { n: 39, id: "what-is-india-s-dpdp-act", q: "What is India's DPDP Act?", a: "India's Digital Personal Data Protection Act, 2023, which the Digital Personal Data Protection Rules, 2025 bring into effect in phases. The main duties and penalties begin on 13 May 2027." },
      { n: 40, id: "does-the-dpdp-act-apply-to-an-indian-captive-centre-working-", q: "Does the DPDP Act apply to an Indian captive centre working for a UK company?", a: "Yes, to processing in India, but processing personal data of people outside India under a contract with a foreign party is largely exempt from the notice and consent duties. The security safeguards still apply." },
      { n: 41, id: "how-fast-must-a-data-breach-be-reported-in-india", q: "How fast must a data breach be reported in India?", a: "Without delay to the Data Protection Board and affected individuals, with a detailed report to the Board within 72 hours, once the main provisions apply on 13 May 2027. UK GDPR reporting duties can apply in parallel." },
      { n: 42, id: "can-personal-data-be-transferred-out-of-india", q: "Can personal data be transferred out of India?", a: "Generally yes, unless the destination is restricted by government notification. Sector regulators and specified data sets can have stricter local storage rules." },
      { n: 43, id: "who-is-the-controller-and-who-is-the-processor-between-a-uk-", q: "Who is the controller and who is the processor between a UK parent and an Indian subsidiary?", a: "For UK customer data the UK parent is normally the controller and the Indian subsidiary its processor, with the terms set out in the intercompany services agreement. For the subsidiary's own employees, the Indian company is the data fiduciary." },
    ],
  },
  {
    id: "documents-companies-house-apostille",
    label: "Documents for an Indian Subsidiary from the UK: Companies House, Notary and Apostille",
    readMore: { href: "/blog/uk-to-india/documents-companies-house-apostille", label: "Read the full guide: Documents for an Indian Subsidiary from the UK: Companies House, Notary and Apostille" },
    items: [
      { n: 44, id: "what-is-an-apostille-and-who-issues-it-in-the-uk", q: "What is an apostille and who issues it in the UK?", a: "An apostille is a certificate under the Hague Convention that makes a UK public document valid in India. The FCDO Legalisation Office issues it. A private document is first signed before a notary public, and the FCDO then apostilles the notary's signature and seal." },
      { n: 45, id: "do-uk-documents-need-indian-embassy-legalisation-as-well", q: "Do UK documents need Indian embassy legalisation as well?", a: "No. India and the UK are both parties to the Hague Apostille Convention, so an apostille replaces embassy legalisation." },
      { n: 46, id: "does-a-uk-solicitor-or-commissioner-for-oaths-count-as-a-not", q: "Does a UK solicitor or commissioner for oaths count as a notary?", a: "Usually not. For documents going to India, a notary public is the safe choice. Check with your adviser before notarising each document type." },
      { n: 47, id: "what-documents-does-a-uk-parent-need-to-provide", q: "What documents does a UK parent need to provide?", a: "Typically the certificate of incorporation, articles of association, a board resolution authorising the investment and the signatory, a Companies House profile or certificate of good standing, and notarised identity and address proof for directors and signatories." },
      { n: 48, id: "can-uk-documents-be-signed-and-apostilled-electronically", q: "Can UK documents be signed and apostilled electronically?", a: "Some steps can be, because the UK offers an e-apostille service. The Indian filing must accept the electronic version, so confirm that first to avoid doing the process twice." },
      { n: 49, id: "which-uk-entities-can-own-an-indian-subsidiary", q: "Which UK entities can own an Indian subsidiary?", a: "Limited companies, public companies, limited liability partnerships and limited partnerships can all be shareholders. Trusts and partnerships hold through their trustees or partners, which adds documents and review." },
    ],
  },
  {
    id: "exit-and-restructuring",
    label: "Selling, Restructuring or Closing an Indian Subsidiary: A Guide for UK Parents",
    readMore: { href: "/blog/uk-to-india/exit-and-restructuring", label: "Read the full guide: Selling, Restructuring or Closing an Indian Subsidiary: A Guide for UK Parents" },
    items: [
      { n: 50, id: "how-is-the-sale-of-an-indian-subsidiary-taxed-for-a-uk-paren", q: "How is the sale of an Indian subsidiary taxed for a UK parent?", a: "India taxes the gain under its domestic law, with 12.5% (plus surcharge and cess) for unlisted shares held more than 24 months. The treaty does not cap capital gains, and the UK often exempts the gain under the substantial shareholding exemption." },
      { n: 51, id: "what-is-a-slump-sale", q: "What is a slump sale?", a: "A transfer of an undertaking as a whole for a lump sum, without values for individual assets. The company pays the tax on the gain, and the proceeds are paid up to the parent later." },
      { n: 52, id: "how-do-i-close-an-indian-subsidiary", q: "How do I close an Indian subsidiary?", a: "By strike-off if it is dormant, or voluntary liquidation if it has assets. You need final audited accounts, tax and GST closure, employee settlements and RBI compliant remittance of the proceeds." },
      { n: 53, id: "do-i-need-rbi-approval-to-sell-my-indian-subsidiary", q: "Do I need RBI approval to sell my Indian subsidiary?", a: "Not generally for a compliant sale, but the price must satisfy FEMA pricing rules and the transfer must be reported in time through the authorised dealer bank." },
      { n: 54, id: "is-a-share-buyback-tax-efficient-for-a-uk-parent", q: "Is a share buyback tax efficient for a UK parent?", a: "Since October 2024 buyback proceeds are taxed as dividends in the shareholder's hands in India, with a capital loss on the shares. Check the UK result and the treaty rate before using it." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding an Indian Subsidiary from the UK: FEMA, Pricing, Valuation and Form FC-GPR",
    readMore: { href: "/blog/uk-to-india/funding-and-fema", label: "Read the full guide: Funding an Indian Subsidiary from the UK: FEMA, Pricing, Valuation and Form FC-GPR" },
    items: [
      { n: 55, id: "how-does-a-uk-company-send-money-to-an-indian-subsidiary", q: "How does a UK company send money to an Indian subsidiary?", a: "By subscribing to shares in the subsidiary, with a remittance from the parent's own UK bank account to the subsidiary's Indian bank account, valued at not less than fair value. The subsidiary allots the shares within 60 days and files Form FC-GPR within 30 days of allotment." },
      { n: 56, id: "what-is-form-fc-gpr", q: "What is Form FC-GPR?", a: "The RBI form reporting the issue of equity or compulsorily convertible instruments to a non-resident. It is filed on the RBI's portal within 30 days of allotment, with the valuation certificate and the Company Secretary certificate." },
      { n: 57, id: "does-the-uk-parent-need-a-valuation-before-subscribing-for-s", q: "Does the UK parent need a valuation before subscribing for shares?", a: "Yes for an unlisted company. Shares issued to a non-resident must be priced at or above fair value, which needs a valuation by a recognised professional, usually relied upon for around 90 days." },
      { n: 58, id: "can-a-uk-parent-lend-money-to-its-indian-subsidiary", q: "Can a UK parent lend money to its Indian subsidiary?", a: "Yes, as an external commercial borrowing under the RBI's rules on cost, maturity and reporting. Interest is taxable in India with Withholding Tax at up to 15% under the treaty, and taxable income in the UK." },
      { n: 59, id: "what-happens-if-shares-are-not-allotted-within-60-days", q: "What happens if shares are not allotted within 60 days?", a: "The money generally has to be refunded to the parent. Keeping it needs RBI approval, so plan the board meeting and allotment before the funds arrive." },
      { n: 60, id: "how-much-capital-should-a-uk-parent-put-into-an-indian-subsi", q: "How much capital should a UK parent put into an Indian subsidiary?", a: "There is no minimum, but enough to cover 12 to 18 months of costs is a usual starting point, adjusted for the activity, headcount and compliance costs." },
    ],
  },
  {
    id: "gcc-for-uk-companies",
    label: "Global Capability Centres in India for UK Companies: Models, Regulation and Transfer Pricing",
    readMore: { href: "/blog/uk-to-india/gcc-for-uk-companies", label: "Read the full guide: Global Capability Centres in India for UK Companies: Models, Regulation and Transfer Pricing" },
    items: [
      { n: 61, id: "what-is-a-global-capability-centre", q: "What is a Global Capability Centre?", a: "A captive centre, usually an Indian subsidiary, that carries out engineering, finance, analytics, operations or support work for its parent group." },
      { n: 62, id: "how-big-should-a-uk-company-s-first-india-team-be", q: "How big should a UK company's first India team be?", a: "Many groups start with a pilot of 10 to 20 people, often through an Employer of Record, then form a subsidiary once the model is proven." },
      { n: 63, id: "does-the-pra-or-fca-allow-outsourcing-to-an-indian-group-com", q: "Does the PRA or FCA allow outsourcing to an Indian group company?", a: "Outsourcing to a group company is still outsourcing and remains the regulated firm's responsibility. The firm must assess materiality, perform due diligence, put an agreement in place with audit and access rights, and plan for exit." },
      { n: 64, id: "how-is-a-captive-centre-priced", q: "How is a captive centre priced?", a: "Usually at cost plus a mark-up benchmarked against comparable independent companies, documented in an annual transfer pricing report." },
      { n: 65, id: "are-services-to-the-uk-parent-zero-rated-for-gst", q: "Are services to the UK parent zero-rated for GST?", a: "They can be, as exports of services, if the conditions on place of supply, payment in convertible foreign exchange and the relationship between the parties are met. Confirm the position before invoicing." },
    ],
  },
  {
    id: "hiring-in-india",
    label: "Hiring in India as a UK Employer: Contracts, Payroll, Labour Codes and Share Plans",
    readMore: { href: "/blog/uk-to-india/hiring-in-india", label: "Read the full guide: Hiring in India as a UK Employer: Contracts, Payroll, Labour Codes and Share Plans" },
    items: [
      { n: 66, id: "do-uk-employment-contracts-work-in-india", q: "Do UK employment contracts work in India?", a: "Not unchanged. Indian employment is governed by Indian statutes and state rules, so the notice, benefits, termination, IP and restrictive covenant terms must be rewritten. The UK contract can be the starting point for structure and policy." },
      { n: 67, id: "is-there-redundancy-pay-in-india", q: "Is there redundancy pay in India?", a: "There is no UK-style statutory redundancy for all staff. Retrenchment compensation and notice apply for covered workmen in qualifying establishments, while managerial staff terms come mainly from their contracts." },
      { n: 68, id: "does-tupe-apply-in-india", q: "Does TUPE apply in India?", a: "No. India has no direct equivalent. A transfer of staff between employers usually requires new contracts with continuity of service agreed, or a scheme approved by a court." },
      { n: 69, id: "what-is-the-provident-fund-contribution-in-india", q: "What is the provident fund contribution in India?", a: "Twelve per cent of wages from the employer and 12% from the employee, on wages up to the ₹15,000 monthly ceiling, with higher contributions possible by choice." },
      { n: 70, id: "can-uk-shares-be-granted-to-indian-employees", q: "Can UK shares be granted to Indian employees?", a: "Yes. Indian residents can acquire shares of the foreign parent under the RBI's rules. The exercise is taxed in India as a perquisite, and the cost recharge between the companies needs transfer pricing and tax review." },
      { n: 71, id: "are-non-compete-clauses-enforceable-in-india", q: "Are non-compete clauses enforceable in India?", a: "Post-termination non-compete restrictions are generally not enforceable. Confidentiality, IP assignment and non-solicitation drafted with care are the more reliable protections." },
    ],
  },
  {
    id: "incorporation-steps",
    label: "Incorporating an Indian Subsidiary from the UK: A 12-Week Plan",
    readMore: { href: "/blog/uk-to-india/incorporation-steps", label: "Read the full guide: Incorporating an Indian Subsidiary from the UK: A 12-Week Plan" },
    items: [
      { n: 72, id: "how-long-does-it-take-to-incorporate-an-indian-subsidiary-fr", q: "How long does it take to incorporate an Indian subsidiary from the UK?", a: "About 4 to 6 weeks from complete documents, mostly depending on name approval and the Registrar. The overall project to a working bank account, payroll and first filings usually takes around 12 weeks." },
      { n: 73, id: "do-uk-directors-have-to-travel-to-india-to-incorporate", q: "Do UK directors have to travel to India to incorporate?", a: "No. The incorporation runs online. Directors need Digital Signature Certificates and identity papers that are notarised and apostilled, but nobody has to travel." },
      { n: 74, id: "how-many-directors-and-shareholders-does-an-indian-private-c", q: "How many directors and shareholders does an Indian private company need?", a: "At least two directors, one of whom must be resident in India, and at least two shareholders. In a wholly owned subsidiary the second shareholder is usually a nominee or group company." },
      { n: 75, id: "how-soon-must-shares-be-allotted-after-funds-arrive-from-the", q: "How soon must shares be allotted after funds arrive from the UK?", a: "Within 60 days of receiving the money, otherwise the funds generally have to be refunded and a delay needs RBI approval. Form FC-GPR is due within 30 days of allotment." },
      { n: 76, id: "what-is-inc-20a-and-when-is-it-due", q: "What is INC-20A and when is it due?", a: "The declaration of commencement of business, filed within 180 days of incorporation by a company that has issued shares, confirming that subscribers have paid for them." },
      { n: 77, id: "does-the-uk-parent-need-a-registered-office-in-india", q: "Does the UK parent need a registered office in India?", a: "The subsidiary does. The registered office is a physical address in India, and it can be a serviced office if the owner consents and the documents are in order." },
    ],
  },
  {
    id: "india-uk-ceta",
    label: "India-UK CETA: What the Trade Agreement Changes for UK Companies Entering India",
    readMore: { href: "/blog/uk-to-india/india-uk-ceta", label: "Read the full guide: India-UK CETA: What the Trade Agreement Changes for UK Companies Entering India" },
    items: [
      { n: 78, id: "does-the-ceta-reduce-indian-tax-on-dividends-paid-to-a-uk-pa", q: "Does the CETA reduce Indian tax on dividends paid to a UK parent?", a: "No. CETA is a trade agreement. Withholding Tax on dividends, interest, royalties and fees is governed by the Income-tax Act, 2025 and the 1993 India-UK tax treaty, which caps dividends at 10%." },
      { n: 79, id: "does-the-india-uk-ceta-let-a-uk-company-skip-indian-incorpor", q: "Does the India-UK CETA let a UK company skip Indian incorporation?", a: "No. A UK company that wants to hold property, employ people or contract locally in India still needs an Indian entity (or an approved branch or liaison office) and has to follow FEMA and the FDI Policy." },
      { n: 80, id: "how-long-can-a-uk-employee-be-posted-to-india-under-ceta", q: "How long can a UK employee be posted to India under CETA?", a: "As reported, an intra-corporate transferee can be posted for up to three years with limited renewal, and business visitors can stay up to 90 days. Confirm the exact conditions in the official schedule for your sector and role." },
      { n: 81, id: "does-the-ceta-protect-uk-investments-in-india", q: "Does the CETA protect UK investments in India?", a: "Not directly. The agreement has no investment-protection chapter. India and the UK are negotiating a separate bilateral investment treaty, so investors should rely on contract terms and arbitration for now." },
      { n: 82, id: "when-did-the-india-uk-trade-agreement-come-into-force", q: "When did the India-UK trade agreement come into force?", a: "On 15 July 2026, the same day as the Double Contributions Convention on social security." },
    ],
  },
  {
    id: "india-uk-dtaa",
    label: "India-UK DTAA: Article-by-Article Guide to the Tax Treaty for UK Companies",
    readMore: { href: "/blog/uk-to-india/india-uk-dtaa", label: "Read the full guide: India-UK DTAA: Article-by-Article Guide to the Tax Treaty for UK Companies" },
    items: [
      { n: 83, id: "what-is-the-withholding-tax-on-dividends-under-the-india-uk-", q: "What is the withholding tax on dividends under the India-UK DTAA?", a: "Article 11 caps Indian tax on a dividend paid to a UK company at 10% of the gross amount, or 15% for certain property investment vehicles. The domestic rate for non-residents is 20% plus surcharge and cess, so the treaty rate is lower where the documents are in place." },
      { n: 84, id: "how-many-days-in-india-create-a-permanent-establishment-unde", q: "How many days in India create a permanent establishment under the India-UK DTAA?", a: "Services furnished through employees create a PE after more than 90 days in any 12 months, and services to an associated enterprise after more than 30 days in any 12 months. Building and construction projects create one after more than 6 months." },
      { n: 85, id: "what-is-the-royalty-and-fees-for-technical-services-rate-und", q: "What is the royalty and fees for technical services rate under the India-UK treaty?", a: "Article 13 allows India to tax them at up to 15%, or 10% for equipment royalties and ancillary services. A fee only counts as a technical-services fee if it makes technical knowledge, skill or know-how available to the payer." },
      { n: 86, id: "does-the-uk-tax-dividends-from-an-indian-subsidiary", q: "Does the UK tax dividends from an Indian subsidiary?", a: "Generally not. A UK company parent is normally exempt on dividends from a subsidiary under the distribution exemption in Part 9A of the Corporation Tax Act 2009, subject to the conditions, so the 10% Indian withholding is usually the final tax." },
      { n: 87, id: "does-the-india-uk-treaty-cap-capital-gains-tax-on-selling-th", q: "Does the India-UK treaty cap capital gains tax on selling the Indian subsidiary?", a: "No. Article 14 leaves each country to tax capital gains under its own law, so India taxes the gain under the Income-tax Act, 2025. The UK substantial shareholding exemption can make the gain exempt in the UK." },
      { n: 88, id: "is-there-a-limitation-on-benefits-article-in-the-india-uk-tr", q: "Is there a limitation on benefits article in the India-UK treaty?", a: "There is no separate article. The Multilateral Instrument's principal purpose test now applies, and it can deny a treaty benefit if obtaining it was one of the principal purposes of an arrangement." },
      { n: 89, id: "how-does-a-uk-company-get-a-certificate-of-residence", q: "How does a UK company get a certificate of residence?", a: "It asks HMRC, which issues a certificate confirming UK residence for a stated period. The certificate, with Form 41, goes to the Indian payer before the first payment at the treaty rate." },
    ],
  },
  {
    id: "relocate-uk-staff",
    label: "Relocating UK Staff to India: Visas, FRRO Registration, Housing and Day-Count Control",
    readMore: { href: "/blog/uk-to-india/relocate-uk-staff", label: "Read the full guide: Relocating UK Staff to India: Visas, FRRO Registration, Housing and Day-Count Control" },
    items: [
      { n: 90, id: "does-a-uk-citizen-need-a-visa-to-work-in-india", q: "Does a UK citizen need a visa to work in India?", a: "Yes. A UK citizen working in India needs an appropriate visa, generally an employment visa, and short business visits use a business or e-business visa. Productive work for an Indian company needs a work route." },
      { n: 91, id: "what-is-the-minimum-salary-for-an-indian-employment-visa", q: "What is the minimum salary for an Indian employment visa?", a: "Generally USD 25,000 a year, with limited exceptions. The rules and thresholds change, so confirm the current requirement before applying." },
      { n: 92, id: "when-must-a-uk-national-register-with-the-frro", q: "When must a UK national register with the FRRO?", a: "Foreigners on long stays are generally required to register within 14 days of arrival if the stay is over 180 days. Check the current rule for the visa category." },
      { n: 93, id: "can-a-uk-employee-s-spouse-work-in-india", q: "Can a UK employee's spouse work in India?", a: "Not on a dependant entry visa. The spouse needs their own work visa or employment route." },
      { n: 94, id: "does-ceta-make-it-easier-to-send-uk-staff-to-india", q: "Does CETA make it easier to send UK staff to India?", a: "It provides defined routes for intra-corporate transferees, business visitors and others, as reported up to three years for transferees with limited renewal. The practical application depends on the official schedule and Indian visa processing, so plan with your adviser." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Getting Money Out of India: Dividends, Fees, Royalties and Loan Repayments to a UK Parent",
    readMore: { href: "/blog/uk-to-india/repatriating-profits", label: "Read the full guide: Getting Money Out of India: Dividends, Fees, Royalties and Loan Repayments to a UK Parent" },
    items: [
      { n: 95, id: "how-does-a-uk-parent-receive-dividends-from-an-indian-subsid", q: "How does a UK parent receive dividends from an Indian subsidiary?", a: "The subsidiary declares a dividend out of distributable profits, deducts Withholding Tax at 10% where the treaty documents are on file, files Form 145 and, where required, Form 146, and pays the net amount to the parent within 30 days of declaration." },
      { n: 96, id: "are-service-fees-to-a-uk-parent-taxed-in-india", q: "Are service fees to a UK parent taxed in India?", a: "Not unless the parent has a permanent establishment in India, or the fee makes technical knowledge available, in which case up to 15% applies under the treaty. The fee must also be at arm's length and attract GST under reverse charge." },
      { n: 97, id: "what-are-forms-145-and-146", q: "What are Forms 145 and 146?", a: "Form 145 (previously Form 15CA) is the remitter's declaration for foreign payments. Form 146 (previously Form 15CB) is a Chartered Accountant's certificate on the nature of the payment, the tax and the treaty position." },
      { n: 98, id: "can-the-indian-subsidiary-repay-a-loan-to-the-uk-parent", q: "Can the Indian subsidiary repay a loan to the UK parent?", a: "Yes, within the repayment schedule and the RBI's ECB rules. The principal is not taxed, while interest bears Withholding Tax at up to 15% under the treaty." },
      { n: 99, id: "how-is-a-share-buyback-by-the-indian-subsidiary-taxed", q: "How is a share buyback by the Indian subsidiary taxed?", a: "Since October 2024 buyback proceeds are taxed as a dividend in the shareholder's hands, with a capital loss on the shares that the shareholder may be able to use. The treaty rate and the UK treatment should be reviewed first." },
    ],
  },
  {
    id: "structure-options",
    label: "Subsidiary, Branch, Liaison Office or LLP: Choosing a Structure in India from the UK",
    readMore: { href: "/blog/uk-to-india/structure-options", label: "Read the full guide: Subsidiary, Branch, Liaison Office or LLP: Choosing a Structure in India from the UK" },
    items: [
      { n: 100, id: "which-structure-do-most-uk-companies-choose-in-india", q: "Which structure do most UK companies choose in India?", a: "A wholly owned private limited company. It limits liability, can earn revenue and employ staff, is taxed at the domestic company rate and is the easiest vehicle to sell or restructure." },
      { n: 101, id: "what-is-the-difference-between-a-branch-office-and-a-subsidi", q: "What is the difference between a branch office and a subsidiary in India?", a: "A branch is part of the UK company, needs RBI approval, is limited to specified activities and is taxed as a foreign company. A subsidiary is a separate Indian company that can carry out its own business." },
      { n: 102, id: "can-a-uk-company-open-a-liaison-office-in-india", q: "Can a UK company open a liaison office in India?", a: "Yes, with RBI approval through an authorised dealer bank, if it has a profit record for the previous three years and net worth of at least USD 50,000. The office can liaise and research but cannot earn income or invoice." },
      { n: 103, id: "should-a-uk-company-hold-its-indian-subsidiary-directly", q: "Should a UK company hold its Indian subsidiary directly?", a: "In most cases yes. Direct holding keeps the treaty and UK exemption position simple. An intermediate holding company must pass the principal purpose test and needs real substance." },
      { n: 104, id: "is-an-employer-of-record-better-than-a-subsidiary", q: "Is an Employer of Record better than a subsidiary?", a: "Only at the start. An Employer of Record is faster and needs no capital, but it cannot contract in your name, and it becomes costly as the team grows. Most groups convert to a subsidiary after the first year or ten hires." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing for UK-Owned Indian Subsidiaries: Documentation, Methods and Audits",
    readMore: { href: "/blog/uk-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing for UK-Owned Indian Subsidiaries: Documentation, Methods and Audits" },
    items: [
      { n: 105, id: "what-is-transfer-pricing-in-india", q: "What is transfer pricing in India?", a: "Rules requiring transactions between the Indian company and its foreign group companies to be priced as if between independent parties. They apply to services, royalties, loans, guarantees and cost sharing." },
      { n: 106, id: "what-is-form-48", q: "What is Form 48?", a: "Form 48 (previously Form 3CEB) is a Chartered Accountant's report on international transactions with associated enterprises, filed before the income tax return due date." },
      { n: 107, id: "does-a-small-uk-company-need-transfer-pricing-for-its-indian", q: "Does a small UK company need transfer pricing for its Indian subsidiary?", a: "In the UK, small and medium-sized enterprises are generally exempt, but India has no such exemption. The Indian subsidiary still needs documentation and a Form 48 report if it has international transactions with the UK group." },
      { n: 108, id: "what-mark-up-should-a-captive-indian-services-company-earn", q: "What mark-up should a captive Indian services company earn?", a: "The mark-up must be supported by benchmarking against comparable independent companies, so there is no fixed number. The range depends on the functions, risks and the comparables chosen each year." },
      { n: 109, id: "can-a-uk-indian-advance-pricing-agreement-be-obtained", q: "Can a UK-Indian advance pricing agreement be obtained?", a: "Yes, including a bilateral agreement with HMRC. It fixes the method for several years but takes time and cost, so it suits stable, larger operations." },
      { n: 110, id: "what-if-india-adjusts-the-subsidiary-profit", q: "What if India adjusts the subsidiary profit?", a: "The adjustment is taxed in India. You can ask the UK for a corresponding adjustment under Article 10 of the treaty, and use the mutual agreement procedure under Article 27 if that fails." },
    ],
  },
  {
    id: "uk-employees-in-india-dcc",
    label: "UK Employees in India: Tax Treaty, Residence and the Double Contributions Convention",
    readMore: { href: "/blog/uk-to-india/uk-employees-in-india-dcc", label: "Read the full guide: UK Employees in India: Tax Treaty, Residence and the Double Contributions Convention" },
    items: [
      { n: 111, id: "how-many-days-can-a-uk-employee-work-in-india-without-paying", q: "How many days can a UK employee work in India without paying Indian tax?", a: "Under Article 16 of the India-UK treaty, up to 183 days in the Indian tax year (1 April to 31 March), if a UK employer pays, the employer is not resident in India and no Indian entity or Indian permanent establishment bears the cost. Local employment and recharged secondments fail the test." },
      { n: 112, id: "do-uk-employees-in-india-have-to-pay-provident-fund", q: "Do UK employees in India have to pay provident fund?", a: "A foreign national working in an Indian establishment is an international worker and generally contributes to provident fund on full wages, unless an agreement with their home country exempts them. The India-UK Double Contributions Convention, in force from 15 July 2026, exempts a worker on a covered temporary assignment who holds a certificate of coverage." },
      { n: 113, id: "what-is-the-india-uk-double-contributions-convention", q: "What is the India-UK Double Contributions Convention?", a: "A social security agreement that stops a worker on a temporary assignment paying social security in both countries. The Indian government has said the detachment period is up to five years. It was signed on 10 February 2026 and took effect on 15 July 2026 with the trade agreement." },
      { n: 114, id: "when-does-a-uk-national-become-tax-resident-in-india", q: "When does a UK national become tax resident in India?", a: "By spending 182 days or more in India in an Indian tax year, or 60 days or more in the year plus 365 days or more in the previous four years. Not-ordinarily-resident status can limit Indian tax on foreign income for some people." },
      { n: 115, id: "does-the-uk-secondee-pay-indian-tax-if-the-subsidiary-reimbu", q: "Does the UK secondee pay Indian tax if the subsidiary reimburses the UK parent?", a: "Yes in most cases. When the Indian subsidiary bears the cost, the Article 16 exemption fails, so Indian tax applies from the first day of work in India, with a credit in the UK if the person remains UK resident." },
      { n: 116, id: "does-a-uk-director-of-the-indian-subsidiary-pay-tax-in-india", q: "Does a UK director of the Indian subsidiary pay tax in India on director fees?", a: "Directors' fees from an Indian company can be taxed in India under Article 17, even if the director is based in the UK. The UK gives a credit for the Indian tax if the fees are also taxable there." },
    ],
  },
  {
    id: "uk-parent-reporting",
    label: "UK Parent Obligations for an Indian Subsidiary: CFC Rules, Dividend Exemption and Transfer Pricing",
    readMore: { href: "/blog/uk-to-india/uk-parent-reporting", label: "Read the full guide: UK Parent Obligations for an Indian Subsidiary: CFC Rules, Dividend Exemption and Transfer Pricing" },
    items: [
      { n: 117, id: "are-dividends-from-an-indian-subsidiary-taxed-in-the-uk", q: "Are dividends from an Indian subsidiary taxed in the UK?", a: "Normally not. A UK company parent usually falls within an exempt class of the distribution exemption in Part 9A of the Corporation Tax Act 2009. The Indian withholding of up to 10% under the treaty is then the cost." },
      { n: 118, id: "does-a-uk-parent-have-to-report-its-indian-subsidiary-to-hmr", q: "Does a UK parent have to report its Indian subsidiary to HMRC?", a: "The subsidiary's results can be relevant to the UK return through the CFC rules, transfer pricing, foreign tax credit claims and group disclosures. The exact forms depend on the size of the group and the facts, so confirm them with your UK tax adviser." },
      { n: 119, id: "do-the-uk-cfc-rules-apply-to-an-indian-subsidiary", q: "Do the UK CFC rules apply to an Indian subsidiary?", a: "They can, but a charge arises only if profits are artificially diverted from the UK and no exemption applies. The tax exemption (Indian tax of at least 75% of the UK equivalent), low profits and low profit margin tests often switch the charge off for an operating subsidiary." },
      { n: 120, id: "does-a-small-uk-company-need-uk-transfer-pricing-for-india", q: "Does a small UK company need UK transfer pricing for India?", a: "Generally no, because small and medium-sized enterprises are exempt for dealings with territories that have a suitable treaty. India has no such exemption, so the Indian subsidiary still needs transfer pricing documentation and Form 48." },
      { n: 121, id: "can-the-uk-bribery-act-apply-to-our-indian-subsidiary", q: "Can the UK Bribery Act apply to our Indian subsidiary?", a: "Yes. A UK commercial organisation can be liable if a person associated with it, which can include a foreign subsidiary, bribes to obtain or keep business for the group, unless it had adequate procedures to prevent it." },
      { n: 122, id: "what-is-the-failure-to-prevent-fraud-offence-for-a-uk-parent", q: "What is the failure to prevent fraud offence for a UK parent with an Indian subsidiary?", a: "From 1 September 2025 a large organisation can be liable if an associated person, which includes a subsidiary and its employees, commits a specified fraud to benefit the organisation, where there is a UK link. Reasonable prevention procedures are the defence." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function UkToIndiaFaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="122 Questions About Setting Up and Running a Subsidiary in India"
        description="122 plain answers for UK companies: incorporation, FEMA, the India-UK tax treaty, CETA, staff and social security, data protection, compliance, repatriation and exit."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/blog/uk-to-india" },
          { label: "122 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for UK companies"
        title="122 Questions About Setting Up and Running a Subsidiary in India"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          The questions are grouped by topic, starting with the decisions before you commit and then following
          each guide in the series. Answers are short; the{" "}
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
          and the linked pages go deeper.
        </GuideAnswerBox>

        <p className="text-gray-600 leading-relaxed mb-8">
          Indian tax law changed on 1 April 2026: the Income-tax Act, 2025 and the Income-tax Rules, 2026
          replace the 1961 Act. Where a form has a new name, we give the new name with the earlier one in
          brackets. General information only; confirm current requirements before acting.
        </p>

        <GuideTOC items={toc} />

        {faqGroups.map((group, groupIndex) => (
          <section key={`${group.id}-${groupIndex}`}>
            <h2 id={group.id} className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              {group.label}
            </h2>
            <div className="divide-y divide-gray-200">
              {group.items.map((item) => (
                <div key={item.id} id={item.id} className="py-4">
                  <h3 className="font-bold text-gray-900 mb-1.5">
                    <span className="text-blue-800 font-semibold mr-1.5">{item.n}.</span>
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            {group.readMore && (
              <p className="mt-3">
                <Link href={group.readMore.href} className="text-sm font-bold text-blue-800 hover:underline">
                  {group.readMore.label} &rarr;
                </Link>
              </p>
            )}
          </section>
        ))}

        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/blog/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 19 October 2026. General information only, not legal or tax advice. Indian and UK rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Still Have Questions About India Entry?"
        description="Tell us what's specific to your case — we'll answer directly instead of pointing you back to a FAQ."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
