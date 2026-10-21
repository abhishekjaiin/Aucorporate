import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/blog/singapore-to-india/faq"
const PARENT_URL = "https://www.theaucorp.com/blog/singapore-to-india"

const toc = [
  { id: "general", label: "Before you start: structure, cost and approvals" },
  { id: "common-mistakes", label: "12 Common Mistakes Singapore Companies Make in India (and the Fix for Each)" },
  { id: "compliance-calendar", label: "Compliance Calendar for an Indian Subsidiary with a Singapore Parent" },
  { id: "contracts-courts-siac", label: "Contracts, Courts and SIAC Arbitration: Enforcing Singapore Awards and Judgments in India" },
  { id: "data-protection-pdpa-dpdp", label: "Data Protection for Singapore Companies in India: PDPA Transfers and India's DPDP Act" },
  { id: "documents-acra-apostille", label: "Documents for an Indian Subsidiary: ACRA Records, Notary and Apostille from Singapore" },
  { id: "exit-and-restructuring", label: "Selling, Restructuring or Closing an Indian Subsidiary Owned from Singapore" },
  { id: "funding-and-fema", label: "Funding an Indian Subsidiary from Singapore: Equity, ECB and FEMA Reporting" },
  { id: "gcc-for-singapore-companies", label: "Global Capability Centres in India for Singapore Companies: Models, Pricing and Tax" },
  { id: "hiring-in-india", label: "Hiring in India for a Singapore Company: Contracts, Provident Fund, Labour Codes and Share Plans" },
  { id: "incorporation-steps", label: "Incorporating an Indian Subsidiary from Singapore: Who Does What, and When" },
  { id: "india-singapore-ceca", label: "India-Singapore CECA: What the 2005 Trade Agreement Means for Singapore Companies in India" },
  { id: "india-singapore-dtaa", label: "India-Singapore DTAA: Article-by-Article Guide to the Tax Treaty for Singapore Companies" },
  { id: "relocate-singapore-staff", label: "Relocating Singapore Staff to India: Visas, OCI, FRRO and Day-Count Controls" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to Singapore: Dividends, Fees, Royalties and Loans" },
  { id: "singapore-employees-in-india-epf-cpf", label: "Singapore Employees in India: Treaty, EPF Exemption and CPF" },
  { id: "singapore-holdco-for-india", label: "Using a Singapore Holding Company for India: Treaty Benefits, Substance and Limits" },
  { id: "singapore-parent-obligations", label: "Singapore Parent Obligations: Tax, ACRA and Law for a Company with an Indian Subsidiary" },
  { id: "structure-options", label: "Choosing an Indian Structure from Singapore: Subsidiary, Branch, LLP, GIFT City or EOR" },
  { id: "transfer-pricing", label: "Transfer Pricing Between Singapore and India: Form 48, Benchmarking and IRAS Differences" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "general",
    label: "Before you start: structure, cost and approvals",
    items: [
      { n: 1, id: "can-a-singapore-company-own-100-of-an-indian-subsidiary", q: "Can a Singapore company own 100% of an Indian subsidiary?", a: "Yes, in most sectors. India allows 100% foreign ownership under the Automatic Route for most activities. A few sectors have caps, conditions or need approval, and an owner in a country that shares a land border with India can trigger extra approval under Press Note 3, so check both before committing." },
      { n: 2, id: "does-a-singapore-company-need-to-send-anyone-to-india-to-set", q: "Does a Singapore company need to send anyone to India to set up a subsidiary?", a: "No. The filing is online. Directors need Digital Signature Certificates and notarised, apostilled identity documents. Singapore is only two and a half hours ahead of India, so calls with the Indian bank and advisers are easy." },
      { n: 3, id: "how-long-does-it-take-to-set-up-an-indian-subsidiary-from-si", q: "How long does it take to set up an Indian subsidiary from Singapore?", a: "Usually four to six weeks from complete documents, and around twelve weeks to a working bank account, payroll and first filings." },
      { n: 4, id: "what-does-it-cost-to-set-up-a-subsidiary-in-india", q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about S$13,500 at an indicative ₹74.0 per Singapore dollar on 21 October 2026). The costing depends on your plan." },
      { n: 5, id: "is-there-a-minimum-share-capital-for-an-indian-private-limit", q: "Is there a minimum share capital for an Indian private limited company?", a: "No statutory minimum. The practical amount depends on your first 12 to 18 months of costs and on any sector rule." },
      { n: 6, id: "what-is-the-automatic-route", q: "What is the Automatic Route?", a: "The route under the FDI Policy that lets a foreign investor invest in a permitted sector without government approval, subject to reporting to the RBI." },
      { n: 7, id: "which-sectors-restrict-foreign-investment-in-india", q: "Which sectors restrict foreign investment in India?", a: "Some sectors have caps or need approval, such as defence, insurance, multi-brand retail, some media, and certain financial and telecom activities. Check the current FDI Policy for your activity." },
      { n: 8, id: "what-is-a-resident-director", q: "What is a Resident Director?", a: "A director who has stayed in India for 182 days or more in the financial year. Every Indian company needs at least one." },
      { n: 9, id: "can-a-singapore-resident-be-a-director-of-an-indian-company", q: "Can a Singapore resident be a director of an Indian company?", a: "Yes, once they hold a Director Identification Number and a Digital Signature Certificate. The company still needs at least one Resident Director." },
      { n: 10, id: "what-is-spice", q: "What is SPICe+?", a: "The integrated online incorporation form of the Ministry of Corporate Affairs, which can also apply for PAN, TAN and other registrations together." },
      { n: 11, id: "what-accounting-standards-does-an-indian-subsidiary-follow", q: "What accounting standards does an Indian subsidiary follow?", a: "The Companies Act, 2013 and, above the thresholds, Indian Accounting Standards (Ind AS), which are converged with IFRS. The Singapore parent bridges to SFRS(I) for consolidation." },
      { n: 12, id: "does-an-indian-subsidiary-need-an-audit", q: "Does an Indian subsidiary need an audit?", a: "Yes. Every company must have its accounts audited by a Chartered Accountant firm each year, whatever its size, and appoint the auditor within 30 days of incorporation." },
      { n: 13, id: "what-corporate-tax-rate-does-an-indian-subsidiary-pay", q: "What corporate tax rate does an Indian subsidiary pay?", a: "Under the concessional regime without incentives, a domestic company pays 22% plus surcharge and cess, about 25.17%. Other regimes and rates apply to specific cases." },
      { n: 14, id: "must-the-indian-subsidiary-register-for-gst", q: "Must the Indian subsidiary register for GST?", a: "Registration is required above turnover thresholds and in some other cases, such as interstate supplies and reverse-charge liabilities. Services exported to the Singapore parent can be zero-rated where the conditions are met." },
      { n: 15, id: "can-the-indian-subsidiary-send-profits-to-singapore-freely", q: "Can the Indian subsidiary send profits to Singapore freely?", a: "Yes, through dividends, fees, royalties and loan repayments, with the tax and RBI formalities for each route. See the guide on getting money out of India." },
      { n: 16, id: "is-there-a-tax-treaty-between-india-and-singapore", q: "Is there a tax treaty between India and Singapore?", a: "Yes, the 1994 India-Singapore double taxation agreement, amended by protocols in 2005, 2011 and 2016 and by the Multilateral Instrument. It caps Indian withholding on dividends at 10% (25% holding) or 15%, and on interest at 10% for banks or 15%." },
      { n: 17, id: "does-the-india-singapore-ceca-change-how-i-set-up", q: "Does the India-Singapore CECA change how I set up?", a: "No. The CECA of 2005 covers trade, investment and movement of people, and it exempts Singapore citizens from India's EPF, but company law, FEMA and tax rules for the subsidiary are unchanged." },
      { n: 18, id: "can-the-indian-subsidiary-employ-singapore-nationals", q: "Can the Indian subsidiary employ Singapore nationals?", a: "Yes, with an employment visa (or an OCI card for people of Indian origin) and registration, and with attention to tax and provident fund. See the guides on relocating staff and the employees guide." },
      { n: 19, id: "what-documents-does-the-singapore-parent-need", q: "What documents does the Singapore parent need?", a: "Its ACRA business profile and certificate of incorporation, constitution, a board resolution and identity and address proof for directors and signatories, notarised and apostilled by the Singapore Academy of Law." },
      { n: 20, id: "can-a-singapore-partnership-or-individual-set-up-an-indian-s", q: "Can a Singapore partnership or individual set up an Indian subsidiary?", a: "Yes. A partnership or an individual can be a shareholder, with additional documents and review. The tax and treaty position depends on the structure, so confirm it before investing." },
      { n: 21, id: "who-files-the-rbi-forms-for-the-investment", q: "Who files the RBI forms for the investment?", a: "The Indian subsidiary files Form FC-GPR with its authorised dealer bank and advisers, using the documents the Singapore parent provides. The annual FLA return is filed by 15 July." },
      { n: 22, id: "what-happens-if-the-indian-subsidiary-is-sued", q: "What happens if the Indian subsidiary is sued?", a: "The claim is against the subsidiary, not the Singapore parent, subject to the usual exceptions. The contract terms, insurance and arbitration clause shape how the dispute is handled." },
      { n: 23, id: "can-i-close-the-indian-subsidiary-later", q: "Can I close the Indian subsidiary later?", a: "Yes, by strike-off for a dormant company or voluntary liquidation for one with assets, after clearing tax, employee and RBI matters." },
    ],
  },
  {
    id: "common-mistakes",
    label: "12 Common Mistakes Singapore Companies Make in India (and the Fix for Each)",
    readMore: { href: "/blog/singapore-to-india/common-mistakes", label: "Read the full guide: 12 Common Mistakes Singapore Companies Make in India (and the Fix for Each)" },
    items: [
      { n: 24, id: "what-is-the-most-common-mistake-singapore-companies-make-in-", q: "What is the most common mistake Singapore companies make in India?", a: "Carrying Singapore assumptions into India: that gains are tax free, that a holding company without staff keeps its treaty benefit, and that Singapore's transfer pricing shortcuts apply." },
      { n: 25, id: "what-happens-if-i-forget-the-fc-gpr-filing", q: "What happens if I forget the FC-GPR filing?", a: "The filing is late and must be regularised with a late submission fee or compounding. Banks and auditors may also raise questions." },
      { n: 26, id: "is-the-epf-exemption-available-to-singapore-permanent-reside", q: "Is the EPF exemption available to Singapore permanent residents?", a: "The published guidance names Singapore citizens only. Assume PRs must contribute unless the EPFO confirms otherwise in writing." },
      { n: 27, id: "how-many-days-can-singapore-staff-spend-in-india-before-a-pe", q: "How many days can Singapore staff spend in India before a permanent establishment arises?", a: "In the treaty summaries we checked, services through employees for more than 90 days in a fiscal year, or 30 days for services to an associated enterprise, can create one. Confirm against the treaty text." },
      { n: 28, id: "do-i-need-a-stamped-agreement-for-the-indian-subsidiary", q: "Do I need a stamped agreement for the Indian subsidiary?", a: "Yes, to use it as evidence in an Indian court. An unstamped agreement is not void but cannot be used until stamped and any penalty is paid." },
      { n: 29, id: "what-is-press-note-3", q: "What is Press Note 3?", a: "A 2020 FDI policy rule that requires government approval where the beneficial owner of the investor is in, or a citizen of, a country that shares a land border with India. Check the current position as the policy has been under review." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "Compliance Calendar for an Indian Subsidiary with a Singapore Parent",
    readMore: { href: "/blog/singapore-to-india/compliance-calendar", label: "Read the full guide: Compliance Calendar for an Indian Subsidiary with a Singapore Parent" },
    items: [
      { n: 30, id: "what-are-the-main-indian-filing-dates-for-a-subsidiary", q: "What are the main Indian filing dates for a subsidiary?", a: "TDS by the 7th, provident fund and ESI by the 15th, GST on the 11th and 20th, advance tax on 15 June, 15 September, 15 December and 15 March, the AGM within six months, and the FLA return by 15 July." },
      { n: 31, id: "does-the-indian-subsidiary-need-to-follow-the-singapore-year", q: "Does the Indian subsidiary need to follow the Singapore year end?", a: "No. Indian companies generally use a 1 April to 31 March year. Prepare a reconciliation or a special-period pack for the parent's consolidation." },
      { n: 32, id: "when-does-the-singapore-parent-file-its-annual-return", q: "When does the Singapore parent file its annual return?", a: "Within seven months of its year end for a non-listed company, after holding its AGM within six months." },
      { n: 33, id: "when-is-form-fc-gpr-due", q: "When is Form FC-GPR due?", a: "Within 30 days of allotment of shares." },
      { n: 34, id: "when-is-director-kyc-due", q: "When is director KYC due?", a: "By 30 September each year for directors holding a DIN." },
      { n: 35, id: "do-dates-change-under-the-new-income-tax-act", q: "Do dates change under the new Income-tax Act?", a: "Some forms and sections have changed from 1 April 2026. Confirm the current due dates every year." },
    ],
  },
  {
    id: "contracts-courts-siac",
    label: "Contracts, Courts and SIAC Arbitration: Enforcing Singapore Awards and Judgments in India",
    readMore: { href: "/blog/singapore-to-india/contracts-courts-siac", label: "Read the full guide: Contracts, Courts and SIAC Arbitration: Enforcing Singapore Awards and Judgments in India" },
    items: [
      { n: 36, id: "can-a-singapore-seated-siac-award-be-enforced-in-india", q: "Can a Singapore-seated SIAC award be enforced in India?", a: "Yes. India notified Singapore as a New York Convention territory, so a SIAC award is enforced as a foreign award under Part II of the Arbitration and Conciliation Act, 1996, on narrow grounds." },
      { n: 37, id: "can-i-enforce-a-singapore-court-judgment-in-india", q: "Can I enforce a Singapore court judgment in India?", a: "A final money judgment of a court in a reciprocating territory can be executed as a decree under Section 44A. Singapore's Superior Courts have been treated as reciprocating, but check the notification for your court." },
      { n: 38, id: "does-an-unstamped-contract-hold-in-indian-courts", q: "Does an unstamped contract hold in Indian courts?", a: "It is not void, but it cannot be used as evidence until stamped and any penalty is paid." },
      { n: 39, id: "which-siac-rules-apply", q: "Which SIAC rules apply?", a: "The SIAC Rules 2025 apply to arbitrations commenced on or after 1 January 2025, unless the parties agreed on earlier rules." },
      { n: 40, id: "is-indian-law-excluded-if-my-contract-is-governed-by-singapo", q: "Is Indian law excluded if my contract is governed by Singapore law?", a: "No. FEMA, the Companies Act and other mandatory Indian laws still apply to the Indian subsidiary and its contracts." },
      { n: 41, id: "can-indian-courts-help-in-an-arbitration-seated-in-singapore", q: "Can Indian courts help in an arbitration seated in Singapore?", a: "In some cases, for example by granting interim relief to protect assets in India, where the Arbitration and Conciliation Act allows." },
    ],
  },
  {
    id: "data-protection-pdpa-dpdp",
    label: "Data Protection for Singapore Companies in India: PDPA Transfers and India's DPDP Act",
    readMore: { href: "/blog/singapore-to-india/data-protection-pdpa-dpdp", label: "Read the full guide: Data Protection for Singapore Companies in India: PDPA Transfers and India's DPDP Act" },
    items: [
      { n: 42, id: "can-a-singapore-company-send-personal-data-to-its-indian-sub", q: "Can a Singapore company send personal data to its Indian subsidiary?", a: "Yes, if it complies with the PDPA's Transfer Limitation Obligation, usually through a contract giving comparable protection." },
      { n: 43, id: "when-do-india-s-dpdp-duties-start", q: "When do India's DPDP duties start?", a: "The Rules were notified on 13 November 2025 and the main duties take effect on 13 May 2027." },
      { n: 44, id: "what-is-the-pdpa-penalty", q: "What is the PDPA penalty?", a: "Up to SGD 1 million or 10% of annual turnover in Singapore for larger organisations, whichever is higher." },
      { n: 45, id: "what-is-the-dpdp-penalty", q: "What is the DPDP penalty?", a: "Up to INR 250 crore for serious breaches such as failing to keep reasonable security safeguards." },
      { n: 46, id: "does-india-allow-transfers-of-personal-data-to-singapore", q: "Does India allow transfers of personal data to Singapore?", a: "Yes. The DPDP Act allows cross-border transfer except to countries the government restricts by notification." },
      { n: 47, id: "do-i-need-a-data-protection-officer-in-both-countries", q: "Do I need a Data Protection Officer in both countries?", a: "Singapore requires one for organisations covered by the PDPA. India requires one for significant data fiduciaries, and appointing one early is good practice." },
      { n: 48, id: "how-quickly-must-a-data-breach-be-reported-in-singapore", q: "How quickly must a data breach be reported in Singapore?", a: "The PDPC expects notice within three calendar days after the organisation assesses that the breach is notifiable." },
    ],
  },
  {
    id: "documents-acra-apostille",
    label: "Documents for an Indian Subsidiary: ACRA Records, Notary and Apostille from Singapore",
    readMore: { href: "/blog/singapore-to-india/documents-acra-apostille", label: "Read the full guide: Documents for an Indian Subsidiary: ACRA Records, Notary and Apostille from Singapore" },
    items: [
      { n: 49, id: "what-documents-does-a-singapore-company-need-to-incorporate-", q: "What documents does a Singapore company need to incorporate a subsidiary in India?", a: "ACRA business profile and certificate of incorporation, the constitution, a board resolution approving the investment and the director appointments, and identity and address proof for each foreign director, notarised and apostilled." },
      { n: 50, id: "which-singapore-documents-need-an-apostille-and-who-issues-it", q: "Which Singapore documents need an apostille for an Indian subsidiary, and who issues it?", a: "The Singapore parent's ACRA business profile and certificate of incorporation, its constitution, the board resolution approving the investment, and the notarised passports and address proofs of its directors and authorised signatory all need an apostille. The Singapore Academy of Law issues apostilles under the Apostille Act 2020, after a Singapore notary public has signed the private documents. The Apostille Convention has applied to Singapore since 16 September 2021, so no Indian High Commission legalisation is needed." },
      { n: 51, id: "does-india-accept-a-singapore-apostille", q: "Does India accept a Singapore apostille?", a: "Yes. India and Singapore are both parties to the Apostille Convention, so an apostilled Singapore document does not need consular legalisation." },
      { n: 52, id: "do-documents-from-acra-need-to-be-apostilled", q: "Do documents from ACRA need to be apostilled?", a: "Ask the Indian incorporation team which documents they need. Business profiles and certificates are usually apostilled if they will be filed with the Registrar or shown to the bank." },
      { n: 53, id: "how-old-can-the-director-address-proof-be", q: "How old can the director address proof be?", a: "Indian authorities generally look for proof issued within the last two months. Check with your adviser before notarising." },
      { n: 54, id: "does-a-singapore-parent-have-to-declare-its-beneficial-owner", q: "Does a Singapore parent have to declare its beneficial owners in India?", a: "Yes. The Indian subsidiary must identify significant beneficial owners (10% or more) and file Form BEN-2. Prepare the ownership chart early." },
    ],
  },
  {
    id: "exit-and-restructuring",
    label: "Selling, Restructuring or Closing an Indian Subsidiary Owned from Singapore",
    readMore: { href: "/blog/singapore-to-india/exit-and-restructuring", label: "Read the full guide: Selling, Restructuring or Closing an Indian Subsidiary Owned from Singapore" },
    items: [
      { n: 55, id: "how-is-the-sale-of-an-indian-subsidiary-taxed-for-a-singapor", q: "How is the sale of an Indian subsidiary taxed for a Singapore parent?", a: "India taxes the gain on shares acquired on or after 1 April 2017, at 12.5% plus surcharge and cess for unlisted shares held more than 24 months. Shares acquired earlier remain taxable only in Singapore under the treaty if the seller is not a shell company." },
      { n: 56, id: "does-singapore-tax-the-gain", q: "Does Singapore tax the gain?", a: "Singapore has no capital gains tax, but gains of an income nature, such as share trading, can be taxed." },
      { n: 57, id: "what-is-form-fc-trs", q: "What is Form FC-TRS?", a: "The report to the RBI on a transfer of shares between a resident and a non-resident, filed within 60 days." },
      { n: 58, id: "can-india-tax-the-sale-of-my-singapore-holding-company", q: "Can India tax the sale of my Singapore holding company?", a: "It can, if the Singapore company derives substantial value from Indian assets and the thresholds are met. Test this before any sale." },
      { n: 59, id: "how-do-i-close-an-indian-subsidiary", q: "How do I close an Indian subsidiary?", a: "By strike-off if it is dormant with no liabilities, or by voluntary liquidation if it has assets, contracts or disputes, after clearing tax, employee and RBI matters." },
      { n: 60, id: "can-the-buyer-withhold-tax-on-the-price", q: "Can the buyer withhold tax on the price?", a: "Yes. The buyer must deduct tax on the payment to a non-resident. A lower deduction certificate can reduce or remove it." },
      { n: 61, id: "is-a-group-reorganisation-tax-free", q: "Is a group reorganisation tax free?", a: "Not automatically. Exemptions exist for certain intra-group transfers and mergers, but the conditions are strict and must be tested first." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding an Indian Subsidiary from Singapore: Equity, ECB and FEMA Reporting",
    readMore: { href: "/blog/singapore-to-india/funding-and-fema", label: "Read the full guide: Funding an Indian Subsidiary from Singapore: Equity, ECB and FEMA Reporting" },
    items: [
      { n: 62, id: "how-should-a-singapore-parent-fund-its-indian-subsidiary", q: "How should a Singapore parent fund its Indian subsidiary?", a: "Usually through equity or compulsorily convertible instruments, which are FDI. Loans from the parent are ECB and follow separate rules. A mix is common." },
      { n: 63, id: "what-is-the-deadline-to-allot-shares-after-funds-arrive", q: "What is the deadline to allot shares after funds arrive?", a: "Within 60 days of receiving the money. If shares are not allotted, the funds must be refunded." },
      { n: 64, id: "when-must-fc-gpr-be-filed", q: "When must FC-GPR be filed?", a: "Within 30 days of the allotment of shares, through the authorised dealer bank." },
      { n: 65, id: "can-a-singapore-parent-lend-to-its-indian-subsidiary", q: "Can a Singapore parent lend to its Indian subsidiary?", a: "Yes, as an ECB, with a loan registration number before drawdown, minimum average maturity, an all-in-cost ceiling and monthly ECB-2 returns." },
      { n: 66, id: "is-there-a-minimum-price-for-shares-issued-to-a-singapore-in", q: "Is there a minimum price for shares issued to a Singapore investor?", a: "Yes. Unlisted shares must be issued at or above fair value from a valuation by a registered valuer, a chartered accountant or a merchant banker." },
      { n: 67, id: "can-capital-be-sent-by-upi-paynow", q: "Can capital be sent by UPI-PayNow?", a: "No. The UPI-PayNow link is for small person-to-person transfers. Capital goes through the banking channel with a remittance certificate." },
      { n: 68, id: "what-is-the-fla-return", q: "What is the FLA return?", a: "The annual return on foreign liabilities and assets that any Indian company with foreign investment files with the RBI by 15 July." },
    ],
  },
  {
    id: "gcc-for-singapore-companies",
    label: "Global Capability Centres in India for Singapore Companies: Models, Pricing and Tax",
    readMore: { href: "/blog/singapore-to-india/gcc-for-singapore-companies", label: "Read the full guide: Global Capability Centres in India for Singapore Companies: Models, Pricing and Tax" },
    items: [
      { n: 69, id: "what-is-a-global-capability-centre", q: "What is a Global Capability Centre?", a: "A captive team in India that performs technology, finance, analytics or operations work for the parent group. The usual form is an Indian subsidiary paid cost plus a mark-up." },
      { n: 70, id: "how-is-a-gcc-priced-for-tax", q: "How is a GCC priced for tax?", a: "Normally cost plus a mark-up from a benchmarking study, under a services agreement with the Singapore entity, and reviewed each year." },
      { n: 71, id: "are-gcc-services-to-singapore-exempt-from-gst-in-india", q: "Are GCC services to Singapore exempt from GST in India?", a: "They can be zero-rated as exports of services if the recipient is outside India, payment is in convertible foreign exchange and the other conditions are met." },
      { n: 72, id: "does-a-gcc-create-a-permanent-establishment-for-the-singapor", q: "Does a GCC create a permanent establishment for the Singapore parent?", a: "Not by itself if the Indian entity is a separate low-risk provider, but Singapore staff directing the work or concluding contracts in India can create one." },
      { n: 73, id: "does-mas-regulate-a-captive-centre-in-india", q: "Does MAS regulate a captive centre in India?", a: "MAS regulates the Singapore financial institution, and expects outsourcing controls over work done by a group company in India." },
      { n: 74, id: "should-we-use-build-operate-transfer", q: "Should we use build-operate-transfer?", a: "It reduces early risk and time, but check the transfer terms, tax on the transfer and who owns the know-how." },
    ],
  },
  {
    id: "hiring-in-india",
    label: "Hiring in India for a Singapore Company: Contracts, Provident Fund, Labour Codes and Share Plans",
    readMore: { href: "/blog/singapore-to-india/hiring-in-india", label: "Read the full guide: Hiring in India for a Singapore Company: Contracts, Provident Fund, Labour Codes and Share Plans" },
    items: [
      { n: 75, id: "what-is-the-difference-between-cpf-and-india-s-provident-fun", q: "What is the difference between CPF and India's provident fund?", a: "CPF is a Singapore scheme for citizens and PRs. India's EPF is a separate scheme for covered employees in India. Singapore citizens working in India are exempt from EPF under CECA." },
      { n: 76, id: "do-i-need-a-written-employment-contract-in-india", q: "Do I need a written employment contract in India?", a: "Yes. Issue a written appointment letter covering role, pay structure, notice, confidentiality and termination, and check state shops and establishment rules." },
      { n: 77, id: "what-is-gratuity", q: "What is gratuity?", a: "A lump sum paid on exit after a minimum period of continuous service, calculated from the last drawn basic pay and years of service." },
      { n: 78, id: "do-indian-employees-need-esi", q: "Do Indian employees need ESI?", a: "Employees below the wage ceiling in covered areas are covered by the ESI scheme, with contributions from employer and employee." },
      { n: 79, id: "when-did-the-labour-codes-come-into-force", q: "When did the labour codes come into force?", a: "The four labour codes were reported to have come into force on 21 November 2025. Rules and state implementation are still developing, so confirm the current position." },
      { n: 80, id: "can-i-give-indian-employees-shares-in-the-singapore-parent", q: "Can I give Indian employees shares in the Singapore parent?", a: "Yes, subject to the foreign investment rules for residents. They are taxed as a perquisite on exercise, and the employee reports foreign assets in the Indian return." },
      { n: 81, id: "is-an-employer-of-record-a-long-term-solution", q: "Is an Employer of Record a long-term solution?", a: "Not usually. It suits a pilot. For a stable team, a subsidiary gives control, brand and a clean legal position." },
    ],
  },
  {
    id: "incorporation-steps",
    label: "Incorporating an Indian Subsidiary from Singapore: Who Does What, and When",
    readMore: { href: "/blog/singapore-to-india/incorporation-steps", label: "Read the full guide: Incorporating an Indian Subsidiary from Singapore: Who Does What, and When" },
    items: [
      { n: 82, id: "do-singapore-directors-need-to-visit-india-to-incorporate-th", q: "Do Singapore directors need to visit India to incorporate the subsidiary?", a: "No. The filing is online. Directors need digital signatures and notarised identity documents, and the time difference is only two and a half hours." },
      { n: 83, id: "what-are-the-two-rbi-deadlines-after-the-capital-arrives", q: "What are the two RBI deadlines after the capital arrives?", a: "Allot the shares within 60 days of receiving the funds, then file Form FC-GPR within 30 days of allotment." },
      { n: 84, id: "when-must-the-indian-subsidiary-file-inc-20a", q: "When must the Indian subsidiary file INC-20A?", a: "Within 180 days of incorporation, confirming that the subscribers have paid for their shares." },
      { n: 85, id: "can-the-singapore-parent-be-the-only-shareholder-of-the-indi", q: "Can the Singapore parent be the only shareholder of the Indian company?", a: "A private limited company needs at least two shareholders, so a wholly owned subsidiary uses a nominee or a group company as the second, holding one share." },
      { n: 86, id: "what-is-the-fee-for-setting-up-an-indian-subsidiary", q: "What is the fee for setting up an Indian subsidiary?", a: "AU Corporate's fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about S$13,500 at an indicative ₹74.0 per Singapore dollar). The costing depends on your plan." },
      { n: 87, id: "does-the-capital-have-to-come-from-the-parent-s-own-bank-acc", q: "Does the capital have to come from the parent's own bank account?", a: "Yes. Remit from the account of the foreign investor through the banking channel. A payment from a third party can cause the bank to reject the receipt for FEMA purposes." },
    ],
  },
  {
    id: "india-singapore-ceca",
    label: "India-Singapore CECA: What the 2005 Trade Agreement Means for Singapore Companies in India",
    readMore: { href: "/blog/singapore-to-india/india-singapore-ceca", label: "Read the full guide: India-Singapore CECA: What the 2005 Trade Agreement Means for Singapore Companies in India" },
    items: [
      { n: 88, id: "does-ceca-exempt-singapore-employees-from-india-s-employees-", q: "Does CECA exempt Singapore employees from India's Employees' Provident Fund?", a: "Singapore citizens working in India are exempt from the EPF under CECA, as explained by the Singapore Mission in Mumbai and reinforced by an EPFO circular of 14 March 2017. Singapore permanent residents and other nationalities are not mentioned in the guidance, so assume they must contribute." },
      { n: 89, id: "does-the-ceca-reduce-indian-tax-on-dividends-paid-to-a-singa", q: "Does the CECA reduce Indian tax on dividends paid to a Singapore parent?", a: "No. CECA is a trade and investment agreement. Withholding Tax on dividends, interest, royalties and fees follows the Income-tax Act, 2025 and the 1994 India-Singapore tax treaty." },
      { n: 90, id: "is-the-india-singapore-ceca-being-revised", q: "Is the India-Singapore CECA being revised?", a: "A third review was launched on 1 September 2018. We have not found a published conclusion. Treat the 2005 text as the operative one unless a notified amendment says otherwise." },
      { n: 91, id: "does-ceca-let-a-singapore-company-operate-in-india-without-a", q: "Does CECA let a Singapore company operate in India without an Indian entity?", a: "No. To hold property, employ people or contract locally, a Singapore company needs an Indian subsidiary or an approved branch or liaison office, and has to follow FEMA and the FDI Policy." },
      { n: 92, id: "do-upi-and-paynow-replace-bank-transfers-for-funding-an-indi", q: "Do UPI and PayNow replace bank transfers for funding an Indian subsidiary?", a: "No. The UPI-PayNow link, live since February 2023, is for small person-to-person transfers. Share capital, loans and fees move through authorised dealer banks with the usual reporting." },
    ],
  },
  {
    id: "india-singapore-dtaa",
    label: "India-Singapore DTAA: Article-by-Article Guide to the Tax Treaty for Singapore Companies",
    readMore: { href: "/blog/singapore-to-india/india-singapore-dtaa", label: "Read the full guide: India-Singapore DTAA: Article-by-Article Guide to the Tax Treaty for Singapore Companies" },
    items: [
      { n: 93, id: "what-is-the-withholding-rate-on-dividends-from-india-to-sing", q: "What is the withholding rate on dividends from India to Singapore?", a: "Under the treaty, 10% if the Singapore company holds at least 25% of the Indian company's capital and 15% otherwise. Singapore adds no tax withholding on its side. The Indian payer applies it under Section 393 on receipt of the residency certificate and Form 41." },
      { n: 94, id: "what-documents-does-a-singapore-company-need-to-claim-india-", q: "What documents does a Singapore company need to claim India-Singapore treaty benefits?", a: "An IRAS tax residency certificate, Form 41 (previously Form 10F), a no-PE declaration and a beneficial-ownership declaration, given to the Indian payer before payment." },
      { n: 95, id: "can-india-tax-the-sale-of-indian-shares-by-a-singapore-compa", q: "Can India tax the sale of Indian shares by a Singapore company?", a: "Yes for shares acquired on or after 1 April 2017, at full Indian domestic rates since 1 April 2019. Shares acquired before 1 April 2017 remain taxable only in Singapore, unless the seller is a shell or conduit company." },
      { n: 96, id: "what-counts-as-a-shell-company-under-the-india-singapore-tre", q: "What counts as a shell company under the India-Singapore treaty?", a: "A company whose annual operating expenditure in its home state is below SGD 200,000 (Singapore) or INR 5,000,000 (India) over the preceding 24 months. Listed companies are deemed not to be shells." },
      { n: 97, id: "when-does-a-singapore-parent-have-a-permanent-establishment-", q: "When does a Singapore parent have a permanent establishment in India?", a: "A fixed place of business, a construction project over 183 days, a dependent agent who habitually concludes contracts, or services through employees above 90 days in a fiscal year (30 days for services to an associated enterprise), as summarised in the sources we checked." },
      { n: 98, id: "does-india-tax-a-singapore-parent-on-royalties-and-technical", q: "Does India tax a Singapore parent on royalties and technical fees?", a: "Yes, but at no more than 10% under the treaty as we read it, and fees are taxable only where the service makes technical knowledge available. Without it, domestic Withholding Tax at around 20% plus surcharge and cess could apply." },
      { n: 99, id: "is-there-a-mutual-agreement-procedure-between-india-and-sing", q: "Is there a mutual agreement procedure between India and Singapore?", a: "Yes. A taxpayer can present a case to the competent authority within three years of first notification of the action. India has not accepted MLI mandatory arbitration, so the process has no binding backstop." },
      { n: 100, id: "has-the-india-singapore-treaty-been-changed-by-the-mli", q: "Has the India-Singapore treaty been changed by the MLI?", a: "Yes. Both countries ratified the MLI. India's withholding-tax changes took effect from 1 January 2020 and other taxes from 1 April 2020. The principal purpose test now applies alongside Article 24A." },
      { n: 101, id: "does-singapore-tax-dividends-received-from-an-indian-subsidi", q: "Does Singapore tax dividends received from an Indian subsidiary?", a: "Foreign-sourced dividends received in Singapore can qualify for exemption if conditions on the headline tax rate and subjection to tax in the source country are met. Check with your Singapore tax adviser." },
    ],
  },
  {
    id: "relocate-singapore-staff",
    label: "Relocating Singapore Staff to India: Visas, OCI, FRRO and Day-Count Controls",
    readMore: { href: "/blog/singapore-to-india/relocate-singapore-staff", label: "Read the full guide: Relocating Singapore Staff to India: Visas, OCI, FRRO and Day-Count Controls" },
    items: [
      { n: 102, id: "what-visa-does-a-singapore-employee-need-to-work-in-india", q: "What visa does a Singapore employee need to work in India?", a: "An employment visa, sponsored by the Indian entity, with a general salary floor of USD 25,000 a year. Short meetings can use an e-Business visa. People of Indian origin with a foreign passport can use an OCI card." },
      { n: 103, id: "can-a-singaporean-of-indian-origin-work-in-india-without-a-v", q: "Can a Singaporean of Indian origin work in India without a visa?", a: "Yes, if they hold an Overseas Citizen of India card, which gives lifelong multiple-entry and work rights without an employment visa." },
      { n: 104, id: "when-must-a-foreign-employee-register-with-the-frro", q: "When must a foreign employee register with the FRRO?", a: "Within 14 days of arrival if the visa is for a stay of more than 180 days." },
      { n: 105, id: "can-a-spouse-work-in-india-on-a-dependant-visa", q: "Can a spouse work in India on a dependant visa?", a: "An entry (X) visa gives limited work rights. A spouse who wants to work normally needs their own employment visa." },
      { n: 106, id: "how-do-i-stop-a-singapore-manager-creating-a-permanent-estab", q: "How do I stop a Singapore manager creating a permanent establishment in India?", a: "Track days per person, keep contract-making authority in the right entity, and check the treaty thresholds for services staff: more than 90 days, or 30 days for services to an associated enterprise." },
      { n: 107, id: "does-an-oci-card-holder-pay-indian-tax-as-a-resident", q: "Does an OCI card holder pay Indian tax as a resident?", a: "That depends on days in India. Different thresholds apply to persons of Indian origin, including a 120-day test where Indian income exceeds ₹15 lakh." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to Singapore: Dividends, Fees, Royalties and Loans",
    readMore: { href: "/blog/singapore-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to Singapore: Dividends, Fees, Royalties and Loans" },
    items: [
      { n: 108, id: "how-is-a-dividend-from-india-taxed-on-its-way-to-a-singapore", q: "How is a dividend from India taxed on its way to a Singapore parent?", a: "India withholds tax at the treaty rate, 10% if the parent holds 25% or more and 15% otherwise, provided the residency certificate and Form 41 are given. Singapore can exempt the dividend under the foreign-sourced income exemption." },
      { n: 109, id: "what-forms-are-needed-to-send-money-from-india-to-singapore", q: "What forms are needed to send money from India to Singapore?", a: "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB) for the remittance, plus the treaty documents." },
      { n: 110, id: "are-management-fees-to-a-singapore-parent-taxable-in-india", q: "Are management fees to a Singapore parent taxable in India?", a: "Only if the fees make technical knowledge available or if the parent has a PE in India. The payment must also be at arm's length and supported by evidence of service." },
      { n: 111, id: "when-is-withholding-tax-deposited", q: "When is Withholding Tax deposited?", a: "By the 7th of the month following the payment or credit." },
      { n: 112, id: "can-an-indian-subsidiary-repay-a-loan-from-its-singapore-par", q: "Can an Indian subsidiary repay a loan from its Singapore parent at any time?", a: "Principal repayment follows the ECB agreement and the RBI's minimum maturity. Early repayment before the minimum maturity needs care." },
      { n: 113, id: "does-india-limit-interest-to-a-foreign-parent", q: "Does India limit interest to a foreign parent?", a: "Yes. Interest paid to an associated enterprise abroad is capped under the interest limitation rule and must also meet the RBI cost ceiling and arm's length tests." },
    ],
  },
  {
    id: "singapore-employees-in-india-epf-cpf",
    label: "Singapore Employees in India: Treaty, EPF Exemption and CPF",
    readMore: { href: "/blog/singapore-to-india/singapore-employees-in-india-epf-cpf", label: "Read the full guide: Singapore Employees in India: Treaty, EPF Exemption and CPF" },
    items: [
      { n: 114, id: "are-singapore-citizens-exempt-from-epf-in-india", q: "Are Singapore citizens exempt from EPF in India?", a: "Yes, under the CECA, as explained by the Singapore Mission in Mumbai and an EPFO circular of 14 March 2017. No form is required, but the employer should keep a copy of the passport." },
      { n: 115, id: "do-singapore-permanent-residents-have-to-pay-into-india-s-ep", q: "Do Singapore permanent residents have to pay into India's EPF?", a: "The published exemption speaks only of Singapore citizens. Assume a Singapore PR working in India must contribute as an international worker unless the EPFO confirms otherwise." },
      { n: 116, id: "is-there-a-social-security-agreement-between-india-and-singa", q: "Is there a social security agreement between India and Singapore?", a: "No. The CECA exemption for Singapore citizens works by nationality instead of a certificate of coverage." },
      { n: 117, id: "how-many-days-can-a-singapore-employee-stay-in-india-without", q: "How many days can a Singapore employee stay in India without Indian tax?", a: "Up to 183 days in the fiscal year, but only if the employer is not Indian and the cost is not borne by an Indian PE. Staying shorter is not enough on its own if the Indian subsidiary pays or recharges the salary." },
      { n: 118, id: "does-cpf-continue-for-a-singapore-citizen-posted-to-india", q: "Does CPF continue for a Singapore citizen posted to India?", a: "It can, depending on who employs the person and the contract terms. Confirm with the CPF Board before the posting begins." },
      { n: 119, id: "what-is-the-minimum-salary-for-an-indian-employment-visa", q: "What is the minimum salary for an Indian employment visa?", a: "Generally USD 25,000 a year, with limited exceptions." },
      { n: 120, id: "does-india-tax-the-pay-of-a-singapore-director-of-the-indian", q: "Does India tax the pay of a Singapore director of the Indian subsidiary?", a: "Directors' fees are taxable in the state where the paying company is resident, which is India for an Indian subsidiary, even if the director never visits." },
    ],
  },
  {
    id: "singapore-holdco-for-india",
    label: "Using a Singapore Holding Company for India: Treaty Benefits, Substance and Limits",
    readMore: { href: "/blog/singapore-to-india/singapore-holdco-for-india", label: "Read the full guide: Using a Singapore Holding Company for India: Treaty Benefits, Substance and Limits" },
    items: [
      { n: 121, id: "is-a-singapore-holding-company-still-useful-for-india-after-", q: "Is a Singapore holding company still useful for India after 2017?", a: "Yes, for dividends, financing, neutrality and arbitration. It no longer protects gains on shares acquired on or after 1 April 2017, which India can tax at domestic rates." },
      { n: 122, id: "what-is-a-shell-company-under-the-india-singapore-treaty", q: "What is a shell company under the India-Singapore treaty?", a: "One whose annual operating expenditure in its home state is below SGD 200,000 (Singapore) or INR 5,000,000 (India) over the preceding 24 months. Listed companies are deemed not to be shells." },
      { n: 123, id: "are-shares-bought-before-1-april-2017-still-protected", q: "Are shares bought before 1 April 2017 still protected?", a: "Yes. Gains on shares acquired before that date remain taxable only in Singapore, as long as the Singapore company is not a shell or conduit company and passes the primary purpose test." },
      { n: 124, id: "can-the-indian-tax-authority-treat-a-singapore-holdco-as-an-", q: "Can the Indian tax authority treat a Singapore holdco as an Indian resident?", a: "Yes, if its place of effective management is in India. Keep key decisions, board meetings and management visibly in Singapore." },
      { n: 125, id: "does-india-tax-the-sale-of-a-singapore-holdco-that-owns-indi", q: "Does India tax the sale of a Singapore holdco that owns Indian shares?", a: "It can, under the indirect transfer rules, where the shares derive substantial value from Indian assets and the thresholds are met. Test this before any sale." },
      { n: 126, id: "do-i-need-a-tax-residency-certificate-every-year", q: "Do I need a tax residency certificate every year?", a: "Yes. Obtain a certificate from IRAS for each year, and give the Indian payer Form 41 and declarations before each dividend or fee is paid." },
    ],
  },
  {
    id: "singapore-parent-obligations",
    label: "Singapore Parent Obligations: Tax, ACRA and Law for a Company with an Indian Subsidiary",
    readMore: { href: "/blog/singapore-to-india/singapore-parent-obligations", label: "Read the full guide: Singapore Parent Obligations: Tax, ACRA and Law for a Company with an Indian Subsidiary" },
    items: [
      { n: 127, id: "is-a-dividend-from-an-indian-subsidiary-taxable-in-singapore", q: "Is a dividend from an Indian subsidiary taxable in Singapore?", a: "A foreign dividend received in Singapore can be exempt under the foreign-sourced income exemption if it was subject to tax in India, India's highest corporate rate is at least 15%, and the Comptroller is satisfied. Check with your Singapore tax adviser." },
      { n: 128, id: "does-singapore-tax-the-sale-of-an-indian-subsidiary", q: "Does Singapore tax the sale of an Indian subsidiary?", a: "Singapore does not tax capital gains, but India taxes gains on shares acquired on or after 1 April 2017. Gains of an income nature, such as for a share trader, can be taxed in Singapore." },
      { n: 129, id: "does-a-singapore-company-need-to-file-anything-with-acra-whe", q: "Does a Singapore company need to file anything with ACRA when it forms an Indian subsidiary?", a: "No separate ACRA filing is needed for the investment itself. Keep board approvals, update financial statements and registers, and report any change in registrable controllers." },
      { n: 130, id: "does-the-prevention-of-corruption-act-apply-to-the-indian-su", q: "Does the Prevention of Corruption Act apply to the Indian subsidiary?", a: "It applies to acts by Singapore citizens outside Singapore, and a Singapore parent will also be asked about it by banks and auditors. Treat it as a group-wide standard." },
      { n: 131, id: "does-pillar-two-affect-a-singapore-parent-with-an-indian-sub", q: "Does Pillar Two affect a Singapore parent with an Indian subsidiary?", a: "Only if the group has consolidated revenue of EUR 750 million or more. The Indian rate is usually above 15%, but incentives and special regimes can bring the effective rate down, so in-scope groups should test it yearly." },
    ],
  },
  {
    id: "structure-options",
    label: "Choosing an Indian Structure from Singapore: Subsidiary, Branch, LLP, GIFT City or EOR",
    readMore: { href: "/blog/singapore-to-india/structure-options", label: "Read the full guide: Choosing an Indian Structure from Singapore: Subsidiary, Branch, LLP, GIFT City or EOR" },
    items: [
      { n: 132, id: "what-is-the-best-way-for-a-singapore-company-to-enter-india", q: "What is the best way for a Singapore company to enter India?", a: "For most, a wholly owned private limited company. Branches and liaison offices need RBI approval and track records. An EOR suits a first hire, and a GIFT City unit suits financial services." },
      { n: 133, id: "what-net-worth-does-a-singapore-company-need-for-an-indian-b", q: "What net worth does a Singapore company need for an Indian branch office?", a: "A net worth of at least USD 100,000 and a profit record in each of the last five years. For a liaison office the tests are USD 50,000 and three years." },
      { n: 134, id: "can-a-liaison-office-earn-income-in-india", q: "Can a liaison office earn income in India?", a: "No. A liaison office can only liaise. It cannot invoice or earn income, and its costs are met from remittances from the parent." },
      { n: 135, id: "can-a-singapore-company-use-an-indian-llp", q: "Can a Singapore company use an Indian LLP?", a: "Yes, where the sector allows 100% FDI under the Automatic Route without performance-linked conditions. The tax treatment in Singapore needs separate review." },
      { n: 136, id: "when-should-a-singapore-company-consider-gift-city", q: "When should a Singapore company consider GIFT City?", a: "When the business is financial services, fund management, fintech or related, and serves non-resident clients or other IFSC units. It is not a substitute for an onshore subsidiary for general trading." },
      { n: 137, id: "can-a-singapore-parent-use-an-employer-of-record-to-start", q: "Can a Singapore parent use an Employer of Record to start?", a: "Yes, for a first few hires. The EOR is the legal employer, so control is limited, and your staff in India can still create a permanent establishment if they conclude contracts." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing Between Singapore and India: Form 48, Benchmarking and IRAS Differences",
    readMore: { href: "/blog/singapore-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing Between Singapore and India: Form 48, Benchmarking and IRAS Differences" },
    items: [
      { n: 138, id: "does-india-have-a-small-company-exemption-from-transfer-pric", q: "Does India have a small-company exemption from transfer pricing?", a: "No. Form 48 is needed for any international transaction with an associated enterprise, whatever the value. Detailed documentation is required above prescribed value thresholds, which your Indian adviser should confirm each year." },
      { n: 139, id: "does-singapore-s-routine-support-services-mark-up-work-in-in", q: "Does Singapore's routine support services mark-up work in India?", a: "Not automatically. IRAS accepts a defined mark-up for routine support services, but India needs its own benchmarking of the Indian entity's margin." },
      { n: 140, id: "what-is-form-48", q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB, filed with the tax return under the Income-tax Act, 2025." },
      { n: 141, id: "can-a-singapore-parent-get-an-advance-pricing-agreement-for-", q: "Can a Singapore parent get an advance pricing agreement for India?", a: "Yes. India has a unilateral and bilateral APA program, and a bilateral agreement involves both competent authorities." },
      { n: 142, id: "is-a-management-fee-from-singapore-deductible-in-india", q: "Is a management fee from Singapore deductible in India?", a: "Only to the extent it is at arm's length and supported by proof that the Indian entity received a service it needed." },
      { n: 143, id: "what-happens-if-india-makes-a-transfer-pricing-adjustment", q: "What happens if India makes a transfer pricing adjustment?", a: "The Indian income rises, penalty may apply, and the Singapore side may claim relief through the mutual agreement procedure within three years of first notice." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function SingaporeToIndiaFaqPage() {
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
        headline="143 Questions About Setting Up and Running a Subsidiary in India"
        description="143 plain answers for Singapore companies: incorporation, FEMA, the India-Singapore tax treaty, holding companies, staff and provident fund, data protection, compliance, repatriation and exit."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/blog/singapore-to-india" },
          { label: "143 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for Singapore companies"
        title="143 Questions About Setting Up and Running a Subsidiary in India"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          The questions are grouped by topic, starting with the decisions before you commit and then following
          each guide in the series. Answers are short; the{" "}
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
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
          <Link href="/blog/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 21 October 2026. General information only, not legal or tax advice. Indian and Singapore
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="A Question the FAQ Doesn't Answer?"
        description="Tell us what is specific to your Singapore parent, and we'll answer it directly on a call."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
