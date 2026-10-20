import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/blog/australia-to-india/faq"
const HUB_URL = "https://www.theaucorp.com/blog/australia-to-india"

const toc = [
  { id: "cost-time-and-tax", label: "Cost, time and tax: the questions every CFO asks first" },
  { id: "before-you-start", label: "Before you start: deciding on India" },
  { id: "structure-and-control", label: "Structure, ownership and control" },
  { id: "incorporation-and-documents", label: "Incorporation and documents" },
  { id: "funding-and-fema", label: "Funding, FEMA and RBI reporting" },
  { id: "banking-and-hiring", label: "Banking, registrations and hiring" },
  { id: "tax-and-transfer-pricing", label: "Tax, GST and transfer pricing" },
  { id: "compliance-and-audit", label: "Compliance, audit and reporting" },
  { id: "repatriation", label: "Repatriating funds to Australia" },
  { id: "growth-esops-and-ma", label: "Growth: capital increases, ESOPs and M&A" },
  { id: "disputes-closure-and-exit", label: "Disputes, closure and exit" },
  { id: "audit-icofr", label: "Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies" },
  { id: "australian-parent-obligations", label: "Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More" },
  { id: "common-mistakes", label: "13 Common Mistakes Australian Companies Make Setting Up in India" },
  { id: "compliance-calendar", label: "India Subsidiary Compliance Calendar for Australian Companies" },
  { id: "contracts-and-arbitration", label: "Contracts and Arbitration in India for Australian Companies" },
  { id: "documents-and-apostille", label: "Documents and Apostille for an India Subsidiary (Australian Parent)" },
  { id: "dtaa-pe-risk", label: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk" },
  { id: "eor-vs-subsidiary", label: "EOR vs Subsidiary in India: Which Is Right for an Australian Company?" },
  { id: "esop", label: "ESOPs for Indian Employees of an Australian Parent Company" },
  { id: "expat-visa", label: "Sending an Australian Executive to India: Visa, Housing and Tax" },
  { id: "foreign-employee-treaty-ssa", label: "Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA" },
  { id: "funding-fema-fc-gpr", label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
  { id: "global-vat", label: "Global VAT and GST for Australian Companies Selling Abroad" },
  { id: "hiring-and-payroll", label: "Hiring in India: Contracts, Payroll and Statutory Compliance" },
  { id: "incorporation-process", label: "Incorporation Process for an Indian Subsidiary, Step by Step" },
  { id: "india-australia-dtaa", label: "India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to Australia: Forms and Tax" },
  { id: "resident-director", label: "Resident Director Requirement for an Indian Company" },
  { id: "restructuring-and-exit", label: "Restructuring, Mergers and Exit for an Indian Subsidiary" },
  { id: "share-valuation", label: "Share Valuation for Foreign Investment in India" },
  { id: "subsidiary-vs-branch-vs-liaison-office-vs-llp", label: "Subsidiary vs Branch vs Liaison Office vs LLP in India" },
  { id: "tax-notices-and-litigation", label: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary" },
  { id: "transfer-pricing", label: "Transfer Pricing in India for Australian-Owned Subsidiaries" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "cost-time-and-tax",
    label: "Cost, time and tax: the questions every CFO asks first",
    items: [
      { n: 1, id: "what-is-the-cost-of-incorporating-a-subsidiary-company-in-in", q: "What is the cost of incorporating a subsidiary company in India?", a: "The cost of incorporating a subsidiary in India has three parts: government fees (MCA filing fees and state stamp duty, which depend on the authorised capital and the state), the cost of notarising and apostilling Australian documents, and professional fees. AU Corporate's indicative setup fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about A$15,100 at ₹66.19 per Australian dollar on 14 October 2026). Annual running costs are additional." },
      { n: 2, id: "what-is-the-time-period-for-registering-a-company-in-india", q: "What is the time period for registering a company in India?", a: "Registering a company in India typically takes 4 to 6 weeks from receipt of complete documents. The MCA incorporation itself is usually the shortest step, and the main variable is how quickly the apostilled Australian parent documents are ready. Name approval and digital signatures can run in parallel." },
      { n: 3, id: "what-is-the-annual-compliance-cost-of-an-indian-subsidiary", q: "What is the annual compliance cost of an Indian subsidiary?", a: "The annual compliance cost of an Indian subsidiary depends on its size and scope. It covers bookkeeping, statutory audit, income tax and ROC filings, GST returns, payroll compliance, RBI reporting and, where there are transactions with the Australian parent, a transfer pricing report. Pricing a fixed annual scope up front is practical, because missed filings cost more than staying current." },
      { n: 4, id: "what-is-the-effective-tax-rate-for-a-subsidiary-company-in-i", q: "What is the effective tax rate for a subsidiary company in India?", a: "The effective tax rate for an Indian subsidiary under the concessional regime for domestic companies is about 25.17% (precisely 25.168%). The regime is in Section 200 of the Income-tax Act, 2025 (previously Section 115BAA of the Income-tax Act, 1961). It is the 22% tax rate plus a 10% surcharge on the tax and 4% health and education cess on tax plus surcharge. A company taking this regime cannot claim most deductions and incentives, and does not pay Minimum Alternate Tax." },
      { n: 5, id: "how-many-directors-and-shareholders-does-an-indian-subsidiar", q: "How many directors and shareholders does an Indian subsidiary need?", a: "A private limited company in India needs at least two directors (Section 149(1) of the Companies Act, 2013) and two shareholders (Section 3(1)(b)), and at least one director must be resident in India, meaning a stay of 182 days or more in the year (Section 149(3)). In a wholly owned subsidiary, the Australian parent holds nearly all the shares and a nominee holds the balance." },
      { n: 6, id: "what-are-the-gst-rates-in-india-and-which-rate-applies-to-an", q: "What are the GST rates in India, and which rate applies to an Indian subsidiary?", a: "GST in India has rates of 5%, 18% and 40%, plus 0% for exempt items, under the CGST Act, 2017 and IGST Act, 2017. Since 22 September 2025 the earlier 12% and 28% slabs have been largely removed. Most business services supplied by an Indian subsidiary, including IT and most professional services, attract the standard rate of 18%. Services exported to the Australian parent can be zero-rated if the conditions are met, such as the recipient being outside India and the payment arriving in foreign exchange." },
      { n: 7, id: "is-a-statutory-audit-mandatory-for-an-indian-subsidiary", q: "Is a statutory audit mandatory for an Indian subsidiary?", a: "A statutory audit is mandatory for every company in India under Section 139 of the Companies Act, 2013, irrespective of turnover. The first Auditor is appointed by the board within 30 days of incorporation (Section 139(6)), and later Auditors are appointed by shareholders." },
    ],
  },
  {
    id: "before-you-start",
    label: "Before you start: deciding on India",
    items: [
      { n: 8, id: "why-do-australian-companies-set-up-subsidiaries-in-india", q: "Why do Australian companies set up subsidiaries in India?", a: "Australian companies set up subsidiaries in India for access to a large pool of engineering, finance and support talent, lower operating costs, round-the-clock coverage across time zones, and the Indian market itself. Many groups build a Global Capability Centre that works as an extension of the Australian team under their own control." },
      { n: 9, id: "what-is-a-global-capability-centre-gcc", q: "What is a Global Capability Centre (GCC)?", a: "A GCC is a captive centre that a foreign parent owns in India to deliver engineering, analytics, finance, HR or support work for the group. It is usually a wholly owned subsidiary that charges the parent for its services at arm's-length prices." },
      { n: 10, id: "should-we-use-a-subsidiary-an-employer-of-record-or-an-outso", q: "Should we use a subsidiary, an Employer of Record or an outsourcing vendor?", a: "An Australian company should use an Employer of Record to hire quickly without an entity, an outsourcing vendor to buy a service without managing people, and a subsidiary for direct control, a larger team or long-term ownership of the operation. Many companies start with an EOR and convert to a subsidiary later." },
      { n: 11, id: "what-should-we-decide-before-starting-incorporation", q: "What should we decide before starting incorporation?", a: "Before starting incorporation, an Australian company should decide the business activity in India, which group entity will hold the shares, how much it will fund, who the directors will be (including one resident in India), the registered office address and the first hires. Having these ready avoids rework when forms are filed." },
      { n: 12, id: "does-the-australian-parent-need-its-board-s-approval-first", q: "Does the Australian parent need its board's approval first?", a: "An Australian parent usually needs its board's approval before setting up an Indian subsidiary. The board passes a resolution approving the investment, naming the authorised signatory and directors, and authorising documents to be signed for India. The charter, shareholder agreements and any investor consent rights should be checked before the resolution is drafted." },
      { n: 13, id: "does-the-australian-parent-have-to-travel-to-india", q: "Does the Australian parent have to travel to India?", a: "An Australian parent does not have to travel to India to set up a subsidiary. Incorporation can be completed online using apostilled documents and digital signatures. Banks set their own KYC rules, so the bank's verification requirements should be confirmed early." },
      { n: 14, id: "can-an-australian-pty-ltd-or-trust-set-up-a-subsidiary-in-in", q: "Can an Australian Pty Ltd or trust set up a subsidiary in India?", a: "An Australian proprietary company or public company can be the shareholder of an Indian company, with its documents notarised and apostilled. A trust or partnership can also hold shares, through its trustee or partners, which adds documents and review, and its tax and residency position affects treaty access. Confirm the holding entity with your Australian tax adviser before capital goes in." },
      { n: 15, id: "which-sectors-are-restricted-for-foreign-investment", q: "Which sectors are restricted for foreign investment?", a: "Most services and technology sectors in India allow 100% foreign ownership under the Automatic Route. A few activities are prohibited, and some sectors have ownership caps, conditions or government approval requirements, so the exact activity should be checked against the FDI Policy before committing." },
      { n: 16, id: "does-india-have-a-tax-treaty-with-australia", q: "Does India have a tax treaty with Australia?", a: "Yes. India and Australia have a double taxation avoidance agreement (DTAA), signed on 25 July 1991 and in force from 30 December 1991, amended by the 2011 Protocol notified in India on 20 September 2013. It caps Indian withholding at 15% on dividends and interest and at 15% on royalties and technical fees (10% for equipment), and defines permanent establishment in Article 5." },
    ],
  },
  {
    id: "structure-and-control",
    label: "Structure, ownership and control",
    items: [
      { n: 17, id: "what-is-a-wholly-owned-subsidiary", q: "What is a wholly owned subsidiary?", a: "A wholly owned subsidiary in India is an Indian company whose shares are 100% held by the foreign parent, directly or through group entities. It is a separate legal entity with its own tax registrations, bank account and employees, and the parent's liability is generally limited to its investment." },
      { n: 18, id: "can-an-australian-company-own-100-of-an-indian-subsidiary", q: "Can an Australian company own 100% of an Indian subsidiary?", a: "An Australian company can own 100% of an Indian subsidiary in most sectors. India permits 100% foreign ownership under the Automatic Route, which needs no prior government approval. A few sectors have ownership caps, conditions or an approval requirement, so the sector position should be checked against the business activity before choosing a structure." },
      { n: 19, id: "what-is-the-difference-between-the-automatic-route-and-the-g", q: "What is the difference between the Automatic Route and the Government Route?", a: "Under the Automatic Route, the investor needs no prior government approval and only reports the investment to the RBI afterward. Under the Government Route, approval from the relevant ministry must be obtained first through the Foreign Investment Facilitation Portal." },
      { n: 20, id: "why-does-a-private-company-need-two-shareholders-and-how-doe", q: "Why does a private company need two shareholders, and how does a wholly owned subsidiary meet this?", a: "A private limited company must have at least two members. In a wholly owned subsidiary, the second share is usually held by a nominee or another group entity on behalf of the parent, and the beneficial ownership is declared as the Companies Act requires." },
      { n: 21, id: "what-is-the-difference-between-a-private-and-a-public-limite", q: "What is the difference between a private and a public limited company?", a: "A private company restricts the transfer of its shares, needs at least two directors and two members, and has lighter compliance. A public company needs at least three directors and seven members and faces more compliance. Most wholly owned subsidiaries use the private form." },
      { n: 22, id: "who-controls-the-indian-subsidiary-the-board-or-the-australi", q: "Who controls the Indian subsidiary: the board or the Australian parent?", a: "The Board of Directors manages the company, and the parent controls the board by appointing and removing directors as its shareholder. Matters that need parent approval can be written into the Articles or an intercompany agreement. Directors still owe legal duties to the Indian company." },
      { n: 23, id: "can-australian-executives-be-directors-of-the-indian-subsidi", q: "Can Australian executives be directors of the Indian subsidiary?", a: "Australian executives can be directors of the Indian subsidiary. Foreign nationals can be directors once they obtain a digital signature and a Director Identification Number, but at least one director must be a resident of India. Directors carry statutory duties and liabilities, so they should be chosen with that in mind." },
      { n: 24, id: "does-the-indian-subsidiary-need-a-director-who-lives-in-indi", q: "Does the Indian subsidiary need a director who lives in India?", a: "An Indian subsidiary needs at least one director who has stayed in India for 182 days or more in the financial year (Section 149(3) of the Companies Act, 2013). A private limited company also needs at least two directors in total (Section 149(1)). Directors can be foreign nationals, but at least one must meet the residency test." },
      { n: 25, id: "does-the-company-need-a-company-secretary", q: "Does the company need a Company Secretary?", a: "Smaller private companies do not need a whole-time Company Secretary. One becomes mandatory above a paid-up capital threshold, which you should confirm with your adviser. A practicing professional is still needed for certain filings and certificates, such as those for RBI reporting." },
      { n: 26, id: "can-we-hold-the-indian-subsidiary-through-a-holding-company-", q: "Can we hold the Indian subsidiary through a holding company in another country?", a: "A foreign group can hold an Indian subsidiary through a holding company in another country, and many groups use a regional holding company. Tax residence, treaty access, substance and anti-avoidance rules need review, and the choice affects how dividends and exit gains are taxed, so it should be decided before capital goes in." },
    ],
  },
  {
    id: "incorporation-and-documents",
    label: "Incorporation and documents",
    items: [
      { n: 27, id: "what-are-the-steps-to-incorporate-an-indian-subsidiary", q: "What are the steps to incorporate an Indian subsidiary?", a: "Incorporating an Indian subsidiary takes eight steps: confirm FDI eligibility, prepare apostilled Australian documents, obtain digital signatures, file SPICe+ with the MCA, open the bank account, transfer the funds for share capital, allot shares and report to the RBI, then begin operations." },
      { n: 28, id: "what-documents-does-the-australian-parent-need-to-provide", q: "What documents does the Australian parent need to provide?", a: "An Australian parent typically provides its ASIC company extract or certificate of registration, its constitution, a directors' resolution approving the subsidiary, and identity and address proofs of the signatory and directors. Each document is signed before an Australian notary public and apostilled by DFAT. The exact checklist depends on whether the parent is a company, a trust or another entity." },
      { n: 29, id: "what-is-an-apostille-and-how-do-we-get-one", q: "What is an apostille and how do we get one?", a: "An apostille is a certificate under the Hague Convention that makes an Australian public document valid in India. In Australia the Department of Foreign Affairs and Trade (DFAT) issues apostilles. A private document is first signed before a notary public, and DFAT then apostilles the notary's signature and seal." },
      { n: 30, id: "can-documents-be-notarised-and-apostilled-electronically", q: "Can documents be notarised and apostilled electronically?", a: "Notarisation practice varies by state and territory, and not every document can be notarised or apostilled electronically. Acceptance of electronic versions in India also varies, so the format the Indian filing will accept should be confirmed before notarisation to avoid repeating the process." },
      { n: 31, id: "what-is-a-digital-signature-certificate-and-how-does-a-forei", q: "What is a Digital Signature Certificate and how does a foreign director get one?", a: "A Digital Signature Certificate (DSC) lets a director sign MCA filings electronically. A foreign director obtains one using a passport and address proof, usually with attestation or apostille and a verification step, and the process can be completed remotely." },
      { n: 32, id: "what-is-spice", q: "What is SPICe+?", a: "SPICe+ is the MCA's single online form for incorporation. It carries the Memorandum and Articles of Association and can also apply for PAN, TAN, GST, EPFO and ESIC registrations and a bank account, replacing several separate forms." },
      { n: 33, id: "how-is-the-company-name-chosen-and-approved", q: "How is the company name chosen and approved?", a: "A company name in India is chosen by proposing names on the MCA portal, which approves one if it is not identical or too similar to an existing company or trademark and follows the naming rules. Approval is time-bound, so the incorporation form should be filed soon after the name is cleared." },
      { n: 34, id: "what-are-the-memorandum-and-articles-of-association", q: "What are the Memorandum and Articles of Association?", a: "The Memorandum of Association states the company's name, objects, registered office and capital. The Articles of Association set the internal rules, such as board powers, share transfers and parent approval rights, and can be drafted so that parent controls are built in." },
      { n: 35, id: "what-kind-of-address-can-be-the-registered-office", q: "What kind of address can be the registered office?", a: "Any premises in India that you own or lease, with proof such as a rent agreement and a utility bill. Virtual and shared offices can work if they meet MCA and GST address requirements. The state of the address also affects stamp duty and registrations." },
      { n: 36, id: "what-do-we-receive-when-the-company-is-incorporated", q: "What do we receive when the company is incorporated?", a: "On incorporation, the company receives the Certificate of Incorporation with the Corporate Identification Number (CIN), the company's PAN and TAN, and the filed Memorandum and Articles. The bank account, share capital transfer and RBI reporting follow." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding, FEMA and RBI reporting",
    items: [
      { n: 37, id: "how-can-the-australian-parent-fund-the-indian-subsidiary", q: "How can the Australian parent fund the Indian subsidiary?", a: "An Australian parent can fund an Indian subsidiary through equity shares, compulsorily convertible preference shares or debentures, or an external commercial borrowing (a loan). Equity is the most common because it is simple to report and carries no repayment obligation. Each route has its own pricing, tax and reporting rules." },
      { n: 38, id: "is-there-a-minimum-capital-requirement", q: "Is there a minimum capital requirement?", a: "There is no statutory minimum for a private limited company. The practical amount depends on your first-year expenses, activity and the bank's expectations. Regulated sectors can have their own minimum capital rules." },
      { n: 39, id: "how-much-capital-should-the-australian-parent-put-in", q: "How much capital should the Australian parent put in?", a: "An Australian parent should put in enough capital to cover the first year's expenses and set-up costs, with room for growth. Too little strains working capital, and funding mostly by loan can raise transfer pricing and interest-cost issues. The amount should be sized against the business plan." },
      { n: 40, id: "what-is-form-fc-gpr-and-when-is-it-due", q: "What is Form FC-GPR and when is it due?", a: "Form FC-GPR is the report an Indian company files with the RBI after issuing shares to a foreign investor. It must be filed within 30 days of the share allotment through the RBI's FIRMS portal, with supporting valuation and Company Secretary certificates. Late filing attracts a Late Submission Fee or compounding." },
      { n: 41, id: "what-is-the-60-day-rule-for-allotting-shares", q: "What is the 60-day rule for allotting shares?", a: "The company must allot shares within 60 days of receiving the foreign investment. If it does not, the money must be refunded to the investor within the prescribed period unless approval to retain it is obtained. So allot promptly after the funds arrive." },
      { n: 42, id: "what-is-a-valuation-certificate-and-when-is-it-required", q: "What is a valuation certificate and when is it required?", a: "Shares issued to a non-resident cannot be priced below fair value. A Chartered Accountant or other eligible professional certifies the value using an internationally accepted method. It supports the FC-GPR filing and later share issues and transfers." },
      { n: 43, id: "can-the-parent-lend-money-instead-of-investing-equity", q: "Can the parent lend money instead of investing equity?", a: "An Australian parent can lend money to its Indian subsidiary instead of investing equity through an external commercial borrowing (ECB). An ECB must meet conditions on eligible lender, minimum maturity, interest ceilings and end use, and be registered with the RBI through the bank. Interest payments attract Withholding Tax and transfer pricing scrutiny." },
      { n: 44, id: "what-are-ccps-and-ccds-and-why-use-them", q: "What are CCPS and CCDs, and why use them?", a: "Compulsorily convertible preference shares and debentures must convert into equity, so they are treated as equity under FDI rules. They suit staged funding or investor rights, but the conversion price or formula must be fixed upfront and comply with pricing rules." },
      { n: 45, id: "can-we-send-money-before-the-company-is-incorporated", q: "Can we send money before the company is incorporated?", a: "An Australian parent cannot send money before the Indian company is incorporated, because foreign investment can only be received by an existing company. Funds sent early may have to be returned and can create a reporting problem, so the parent should wait until the bank account is open." },
      { n: 46, id: "what-is-the-firms-portal", q: "What is the FIRMS portal?", a: "The FIRMS portal is the RBI's Foreign Investment Reporting and Management System, where Indian companies file foreign investment reports such as FC-GPR through the Single Master Form. The company needs portal access and supporting certificates from a Company Secretary or Chartered Accountant." },
    ],
  },
  {
    id: "banking-and-hiring",
    label: "Banking, registrations and hiring",
    items: [
      { n: 47, id: "how-do-we-open-the-bank-account", q: "How do we open the bank account?", a: "An Indian subsidiary opens its bank account after incorporation with an authorised dealer bank, using the company's documents and the directors' and parent's KYC. The bank should be able to receive foreign inward remittances and issue the remittance certificate needed for reporting." },
      { n: 48, id: "what-registrations-does-the-company-need-after-incorporation", q: "What registrations does the company need after incorporation?", a: "Depending on the business: GST, provident fund, ESI, professional tax, state shops and establishment registration, and an import-export code if you trade goods. Some can be applied for through SPICe+, and others follow once you hire or start billing." },
      { n: 49, id: "when-does-the-subsidiary-need-to-register-for-gst", q: "When does the subsidiary need to register for GST?", a: "An Indian subsidiary needs to register for GST when its aggregate turnover crosses ₹20 lakh for services (₹10 lakh in special category states), or earlier for certain supplies, or voluntarily (Section 22 of the CGST Act, 2017). Companies exporting services to an Australian parent often register early so they can claim input tax credit and refunds under the zero-rated export route." },
      { n: 50, id: "can-we-hire-before-incorporation-is-complete", q: "Can we hire before incorporation is complete?", a: "An Australian company cannot hire directly in India before incorporation is complete, because until the company exists it cannot employ anyone. An Employer of Record can be used to hire in the meantime, and payroll registrations should be completed after incorporation before the first employees start." },
      { n: 51, id: "what-is-an-employer-of-record-and-how-does-it-work", q: "What is an Employer of Record and how does it work?", a: "An EOR is the legal employer of your India team. It issues the employment contracts, runs payroll, pays statutory dues and handles compliance, while you direct the day-to-day work. You pay a service fee on top of the employee cost." },
      { n: 52, id: "can-eor-employees-move-into-the-subsidiary-later", q: "Can EOR employees move into the subsidiary later?", a: "EOR employees can move into the subsidiary later with planning. Employees must agree to the transfer, their service history and benefits such as gratuity and provident fund should carry over, and contracts and notice periods need to be handled, with timing planned so that there is no gap in employment." },
      { n: 53, id: "what-statutory-benefits-apply-to-employees-in-india", q: "What statutory benefits apply to employees in India?", a: "Employees in India typically receive provident fund, ESI for eligible wages, gratuity after the qualifying service period, bonus where applicable, professional tax in some states, and leave benefits. India's labour codes are consolidating these, so the current position for the state and headcount should be confirmed." },
      { n: 54, id: "what-are-the-employer-s-payroll-obligations", q: "What are the employer's payroll obligations?", a: "Pay salaries, deduct and deposit Withholding Tax on salaries, contribute to provident fund and ESI, issue payslips and file the periodic returns. Salary structures should be designed to be both tax-efficient and compliant." },
      { n: 55, id: "can-we-send-australian-employees-to-work-in-india", q: "Can we send Australian employees to work in India?", a: "An Australian company can send Australian employees to work in India with the right visa and registrations. Taxes, social security and permanent establishment risk all need planning. India and Australia have a Social Security Agreement in force since 1 January 2016: with a certificate of coverage from the ATO, an employee on a temporary assignment of up to five years generally stays in Australian superannuation and is excluded from Indian provident fund. Without one, provident fund can apply on full wages." },
      { n: 56, id: "what-visa-does-an-australian-executive-need", q: "What visa does an Australian executive need?", a: "An Australian executive needs an employment visa to work in India, because a business visa suits only short meetings. An employment visa typically has a minimum salary condition, and longer stays require registration with the Foreigners Regional Registration Office." },
      { n: 57, id: "do-australian-employees-in-india-have-to-contribute-to-provi", q: "Do Australian employees in India have to contribute to provident fund?", a: "Not if their Australian employer holds a certificate of coverage under the India-Australia Social Security Agreement, in force since 1 January 2016, for a temporary assignment of up to five years. The ATO issues the certificate. Without one, provident fund can apply to an international worker on full wages." },
    ],
  },
  {
    id: "tax-and-transfer-pricing",
    label: "Tax, GST and transfer pricing",
    items: [
      { n: 58, id: "how-is-an-indian-subsidiary-taxed", q: "How is an Indian subsidiary taxed?", a: "As an Indian company, on its income at the corporate tax rates under the Income-tax Act, 2025 (previously the Income-tax Act, 1961), with surcharge and cess where applicable. The Act applies from 1 April 2026. The rate depends on the tax regime the company opts for." },
      { n: 59, id: "what-is-transfer-pricing-and-why-does-it-matter", q: "What is transfer pricing and why does it matter?", a: "Transfer pricing requires transactions between related parties, such as the Indian subsidiary and the Australian parent, to be priced as if between independent parties (the arm's length principle, Section 161 of the Income-tax Act, 2025, previously Section 92). Tax officers review it closely, so agreements and benchmarking should exist from day one." },
      { n: 60, id: "what-is-form-48-previously-form-3ceb", q: "What is Form 48 (previously Form 3CEB)?", a: "Form 48 (previously Form 3CEB) is the Chartered Accountant's report on a company's international transactions with associated enterprises (Section 172 of the Income-tax Act, 2025, previously Section 92E of the Income-tax Act, 1961). Form 48 applies from tax year 2026-27, and earlier years continue to use Form 3CEB under the Income-tax Act, 1961." },
      { n: 61, id: "which-intercompany-transactions-must-be-at-arm-s-length", q: "Which intercompany transactions must be at arm's length?", a: "Service fees, royalties, cost sharing, loans and interest, guarantees, reimbursements, and the purchase or sale of goods or assets between the subsidiary and any group company abroad. Each needs a written agreement and a pricing method you can defend." },
      { n: 62, id: "how-is-a-captive-services-subsidiary-usually-priced", q: "How is a captive services subsidiary usually priced?", a: "Commonly on a cost-plus basis, where the parent pays the subsidiary its costs plus a margin set by benchmarking against comparable companies. The margin is tested each year. Safe harbour rules, which prescribe accepted margins for some activities, may offer an alternative." },
      { n: 63, id: "does-an-indian-subsidiary-create-australian-tax-obligations-", q: "Does an Indian subsidiary create Australian tax obligations for the parent?", a: "An Indian subsidiary can create Australian tax obligations for the parent. It may be a controlled foreign company, so tainted income can be attributed to the parent; dividends from it are generally exempt, while interest, royalties and fees are assessable; and transfer pricing (Division 815) and the International Dealings Schedule can apply. These depend on the structure, so the position should be confirmed with an Australian tax adviser." },
      { n: 64, id: "what-is-permanent-establishment-risk", q: "What is permanent establishment risk?", a: "A permanent establishment (PE) is a taxable presence of a foreign company in India. It can arise from a fixed place of business, dependent agents who conclude contracts, or staff providing services in India for long enough. A PE exposes the Australian parent's profits to Indian tax." },
      { n: 65, id: "what-is-the-india-australia-tax-treaty-dtaa", q: "What is the India-Australia tax treaty (DTAA)?", a: "The India-Australia tax treaty (DTAA) is an agreement that avoids double taxation between the two countries. It caps source-country withholding on dividends, interest and royalties (Articles 10 to 12) and defines when a permanent establishment exists (Article 5). Claiming its benefits needs a Tax Residency Certificate and treaty details in Form 41 (previously Form 10F)." },
      { n: 66, id: "what-is-a-tax-residency-certificate-and-form-41", q: "What is a Tax Residency Certificate and Form 41?", a: "A Tax Residency Certificate shows that the Australian parent is an Australian tax resident, and the ATO issues it as a certificate of residency. Form 41 (previously Form 10F) is the electronic statement of details that the foreign payee gives to claim treaty benefits. Both should be ready before the first payment." },
      { n: 67, id: "how-does-gst-apply-to-services-the-subsidiary-provides-to-th", q: "How does GST apply to services the subsidiary provides to the Australian parent?", a: "GST applies to services an Indian subsidiary provides to its Australian parent as zero-rated exports if the conditions are met (Section 16 of the IGST Act, 2017), such as the recipient being outside India and the payment arriving in foreign exchange. The subsidiary can supply under a letter of undertaking without paying GST and claim refunds of related input credit. Intermediary services are treated differently." },
      { n: 68, id: "are-dividends-from-the-indian-subsidiary-taxed-in-australia", q: "Are dividends from the Indian subsidiary taxed in Australia?", a: "Dividends from a wholly owned Indian subsidiary are generally exempt in Australia for a company with a direct voting interest of at least 10% (section 768-5, Income Tax Assessment Act 1997). The 15% Indian Withholding Tax is therefore usually a final cost." },
    ],
  },
  {
    id: "compliance-and-audit",
    label: "Compliance, audit and reporting",
    items: [
      { n: 69, id: "what-annual-compliance-does-the-subsidiary-have", q: "What annual compliance does the subsidiary have?", a: "Statutory audit, an AGM, filing financial statements and the annual return with the Registrar, income tax return and advance tax, GST and Withholding Tax filings, payroll returns, the FLA return to the RBI, and transfer pricing reporting where applicable." },
      { n: 70, id: "does-the-subsidiary-need-a-statutory-audit", q: "Does the subsidiary need a statutory audit?", a: "An Indian subsidiary needs a statutory audit, because every company must have its accounts audited by a Chartered Accountant appointed as Statutory Auditor, regardless of turnover (Section 139 of the Companies Act, 2013). The audited financial statements are approved at the AGM and filed with the Registrar." },
      { n: 71, id: "when-must-the-first-auditor-be-appointed", q: "When must the first Auditor be appointed?", a: "The board appoints the first Auditor within 30 days of incorporation, and the appointment is notified to the Registrar. If the board does not, shareholders must appoint one at a general meeting within the next 90 days." },
      { n: 72, id: "what-are-aoc-4-and-mgt-7", q: "What are AOC-4 and MGT-7?", a: "AOC-4 is the form for filing the company's financial statements with the Registrar, and MGT-7 is the annual return of shareholders, directors and other details. Both are due after the AGM, and late filing attracts additional fees per day." },
      { n: 73, id: "what-are-the-agm-requirements", q: "What are the AGM requirements?", a: "The first AGM must be held within nine months of the first financial year-end and later ones within six months of each year-end. The AGM approves the audited accounts and other annual business. Shorter notice is possible with member consent." },
      { n: 74, id: "what-is-form-inc-20a", q: "What is Form INC-20A?", a: "Form INC-20A is the declaration of commencement of business (Section 10A of the Companies Act, 2013), filed within 180 days of incorporation, confirming that shareholders have paid for their shares. Missing it brings penalties and can lead to the company being struck off." },
      { n: 75, id: "what-is-the-fla-return", q: "What is the FLA return?", a: "The Annual Return on Foreign Liabilities and Assets is filed online with the RBI by 15 July each year by Indian companies that have received foreign investment or hold overseas assets. It reports the company's foreign investment holdings and related details." },
      { n: 76, id: "what-are-withholding-tax-returns-and-when-are-they-due", q: "What are Withholding Tax returns and when are they due?", a: "Withholding Tax deducted on salaries and payments is deposited by the 7th of the following month. Quarterly statements are filed in Form 138 for salaries, Form 140 for resident payments and Form 144 for non-resident payments (previously Forms 24Q, 26Q and 27Q)." },
      { n: 77, id: "what-is-icofr-and-does-the-india-subsidiary-need-it", q: "What is ICOFR and does the India subsidiary need it?", a: "ICOFR is internal control over financial reporting. Australian listed groups give a CEO and CFO declaration on their accounts (section 295A of the Corporations Act 2001) and report against the ASX Corporate Governance Principles, and groups with US reporting may also follow the Sarbanes-Oxley Act. Material subsidiaries are often brought into scope, so the Indian entity may need documented controls and testing. Indian company law also has its own internal financial controls reporting by the Auditor." },
      { n: 78, id: "how-is-the-subsidiary-s-performance-reported-to-the-australi", q: "How is the subsidiary's performance reported to the Australian parent?", a: "The Indian subsidiary reports its results to the Australian parent through monthly reporting packages. The Indian books follow Indian accounting standards for statutory purposes, while the parent usually needs packages mapped to Australian Accounting Standards (AASB) with reconciliations, aligned to the parent's close calendar." },
    ],
  },
  {
    id: "repatriation",
    label: "Repatriating funds to Australia",
    items: [
      { n: 79, id: "how-can-profits-be-repatriated-from-india-to-australia", q: "How can profits be repatriated from India to Australia?", a: "Profits can be repatriated from India to Australia through dividends, service fees, royalties and loan repayments. Each involves Indian Withholding Tax (Section 393 of the Income-tax Act, 2025, previously Section 195 of the Income-tax Act, 1961), which the India-Australia tax treaty can reduce, and fees and royalties must meet transfer pricing rules. Remittances abroad usually need Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
      { n: 80, id: "how-are-dividends-paid-and-taxed", q: "How are dividends paid and taxed?", a: "The board recommends and shareholders approve a dividend out of distributable profits. Withholding Tax applies on payment to the Australian parent under the Income-tax Act, 2025 (previously the Income-tax Act, 1961), at 15% under the India-Australia treaty where the conditions are met. Dividends from a wholly owned subsidiary are generally exempt in Australia (section 768-5, Income Tax Assessment Act 1997)." },
      { n: 81, id: "what-documents-are-needed-to-remit-dividends", q: "What documents are needed to remit dividends?", a: "Board and shareholder approvals, the audited accounts showing distributable profits, a Withholding Tax computation with treaty documents (Tax Residency Certificate and Form 41, previously Form 10F), and Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
      { n: 82, id: "what-is-form-145-previously-form-15ca", q: "What is Form 145 (previously Form 15CA)?", a: "Form 145 (previously Form 15CA) is the online declaration the remitting party files before paying a non-resident, giving details of the payment and its tax position. Banks need it to process most foreign remittances. It applies to payments from 1 April 2026 under the Income-tax Rules, 2026." },
      { n: 83, id: "what-is-form-146-previously-form-15cb", q: "What is Form 146 (previously Form 15CB)?", a: "Form 146 (previously Form 15CB) is a Chartered Accountant's certificate on the nature of a foreign payment, its taxability and the Withholding Tax rate, including treaty relief. It is required for taxable payments above the prescribed limit, and each certificate carries a UDIN from the ICAI portal." },
      { n: 84, id: "how-are-service-fees-and-management-charges-paid-to-the-aust", q: "How are service fees and management charges paid to the Australian parent?", a: "Service fees and management charges are paid to the Australian parent under a written agreement, backed by evidence that the services were received and benefit the Indian company. They must be at arm's length and bear Withholding Tax (Section 393 of the Income-tax Act, 2025, previously Section 195 of the Income-tax Act, 1961) and GST under reverse charge, with Forms 145 and 146 filed." },
      { n: 85, id: "how-are-royalties-and-software-licence-fees-treated", q: "How are royalties and software licence fees treated?", a: "Royalty payments to the parent attract Withholding Tax at the applicable domestic or treaty rate (15% under the India-Australia treaty, 10% for equipment royalties), transfer pricing review and GST on reverse charge. The agreement should define the licensed IP, the rate and the basis for it, and the payment needs the same documents as other foreign remittances." },
      { n: 86, id: "can-an-intercompany-loan-be-repaid-to-the-australian-parent", q: "Can an intercompany loan be repaid to the Australian parent?", a: "An intercompany loan can be repaid to the Australian parent under the ECB terms. Principal and interest are paid through the bank, interest attracts Withholding Tax subject to treaty relief, and the repayment is reported to the RBI. Repaying outside the approved terms can be a FEMA violation, so the schedule should be followed." },
      { n: 87, id: "why-do-we-need-a-contract-with-the-australian-parent", q: "Why do we need a contract with the Australian parent?", a: "A contract with the Australian parent is needed because an intercompany agreement is the foundation for deductions, transfer pricing, GST, FEMA compliance and any later tax dispute. It should cover the scope of services, pricing, IP ownership, payment terms, confidentiality and termination, be signed before services begin, and match what actually happens." },
      { n: 88, id: "what-withholding-tax-rate-applies-to-payments-to-the-austral", q: "What Withholding Tax rate applies to payments to the Australian parent?", a: "Withholding Tax on payments from an Indian subsidiary to its Australian parent is 15% on dividends under the India-Australia treaty, 15% on interest, and 15% on royalties and fees for services that make technical knowledge available (10% for equipment royalties). The domestic rate for non-residents is 20% plus surcharge and cess, and the lower rate applies where the treaty conditions are met (Section 393 of the Income-tax Act, 2025, previously Section 195 of the Income-tax Act, 1961)." },
    ],
  },
  {
    id: "growth-esops-and-ma",
    label: "Growth: capital increases, ESOPs and M&A",
    items: [
      { n: 89, id: "how-do-we-increase-the-share-capital-of-the-subsidiary", q: "How do we increase the share capital of the subsidiary?", a: "The share capital of an Indian subsidiary is increased by raising the authorised capital if needed (with stamp duty), passing board and shareholder resolutions, obtaining the valuation, receiving the funds, allotting the shares, filing the return of allotment with the Registrar, and reporting to the RBI through FC-GPR within 30 days of allotment under the FEMA (Non-debt Instruments) Rules, 2019." },
      { n: 90, id: "do-we-need-a-valuation-for-every-new-share-issue", q: "Do we need a valuation for every new share issue?", a: "A valuation is needed for every new share issue to a non-resident, because the price cannot be below fair value, certified by an eligible professional. A registered valuer's report may also be needed under company law for private placements. The valuation should be done before issuing, not after." },
      { n: 91, id: "can-an-existing-loan-be-converted-into-equity", q: "Can an existing loan be converted into equity?", a: "Conversion of an external commercial borrowing into equity is permitted subject to FEMA conditions on pricing, eligibility and reporting. The conversion has tax and valuation consequences, so plan the terms before you convert." },
      { n: 92, id: "how-do-esops-for-indian-employees-of-an-australian-parent-wo", q: "How do ESOPs for Indian employees of an Australian parent work?", a: "The Australian parent grants options or restricted stock units to employees of the Indian subsidiary under its plan. FEMA overseas investment rules and reporting apply to the employees, and tax arises on exercise or vesting as salary, with Withholding Tax, and again as capital gains on sale." },
      { n: 93, id: "does-the-subsidiary-reimburse-the-parent-for-esop-costs", q: "Does the subsidiary reimburse the parent for ESOP costs?", a: "An Indian subsidiary often reimburses the parent for ESOP costs through a cost recharge under an agreement. Deductibility, transfer pricing and Withholding Tax on these recharges are frequently disputed, so the arrangement should be documented carefully from the start." },
      { n: 94, id: "can-the-indian-subsidiary-issue-its-own-esops", q: "Can the Indian subsidiary issue its own ESOPs?", a: "An Indian subsidiary can issue its own ESOPs under Section 62(1)(b) of the Companies Act, 2013, with a special resolution and a scheme setting out eligibility, vesting and exercise. A valuation is needed for pricing and tax, and FEMA conditions apply when employees or shareholders are non-residents." },
      { n: 95, id: "how-do-we-sell-the-shares-of-the-indian-subsidiary", q: "How do we sell the shares of the Indian subsidiary?", a: "Selling the shares of an Indian subsidiary to an Indian resident follows FEMA pricing and reporting rules, and the seller pays capital gains tax subject to treaty relief. A sale to another non-resident has its own tax and reporting rules. Selling the Australian parent itself can also trigger Indian tax under the indirect transfer rules." },
      { n: 96, id: "what-is-a-slump-sale", q: "What is a slump sale?", a: "A slump sale is the transfer of an undertaking or business as a going concern for a lump sum, without values assigned to individual assets and liabilities. The gain is taxed as capital gains on the net worth transferred, and the tax treatment depends on the holding period." },
      { n: 97, id: "how-do-mergers-and-demergers-work-in-india", q: "How do mergers and demergers work in India?", a: "Mergers and demergers are carried out through a scheme approved by the National Company Law Tribunal. A fast-track route is available for mergers between a holding company and its wholly owned subsidiary. Cross-border mergers are permitted under FEMA rules and follow specific conditions." },
      { n: 98, id: "how-does-an-acquisition-of-an-indian-company-by-the-australi", q: "How does an acquisition of an Indian company by the Australian group work?", a: "An Australian group acquires an Indian company by conducting due diligence, valuing the target, following FEMA pricing and reporting rules for the share purchase, checking approvals such as competition filings above thresholds, and planning stamp duty and tax. The acquirer is often the Indian subsidiary or the Australian parent directly." },
    ],
  },
  {
    id: "disputes-closure-and-exit",
    label: "Disputes, closure and exit",
    items: [
      { n: 99, id: "what-should-we-do-if-the-tax-department-sends-a-notice", q: "What should we do if the tax department sends a notice?", a: "If the tax department sends a notice, it should not be ignored, because notices have strict response deadlines. It should be shared with a tax adviser immediately so that a reply is prepared with evidence. Most notices can be resolved at the first level, and unresolved matters go to appeals." },
      { n: 100, id: "what-is-a-transfer-pricing-audit-and-how-do-we-prepare", q: "What is a transfer pricing audit and how do we prepare?", a: "A transfer pricing audit is a review by a Transfer Pricing Officer of whether intercompany transactions were at arm's length. Preparation means a current transfer pricing study, signed agreements, evidence of services and consistent filings in Form 48 (previously Form 3CEB). Good documentation is the best defence." },
      { n: 101, id: "what-are-the-drp-and-the-itat", q: "What are the DRP and the ITAT?", a: "The Dispute Resolution Panel (DRP) hears objections to a draft assessment order and is available to foreign companies and transfer pricing cases. The Income Tax Appellate Tribunal (ITAT) is the main appellate forum on facts and law, with further appeals to the High Court." },
      { n: 102, id: "can-disputes-with-the-parent-or-vendors-go-to-arbitration", q: "Can disputes with the parent or vendors go to arbitration?", a: "Disputes with the parent or vendors can go to arbitration if the contract has an arbitration clause. The seat, rules and governing law should be chosen carefully. India and Australia are both parties to the New York Convention, so a foreign arbitral award is generally enforceable in India under Part II of the Arbitration and Conciliation Act, 1996, subject to its conditions." },
      { n: 103, id: "what-are-map-and-apa", q: "What are MAP and APA?", a: "The Mutual Agreement Procedure lets the Indian and Australian tax authorities resolve double taxation under the treaty. An Advance Pricing Agreement fixes your transfer pricing method with the authority in advance for several years, giving certainty on large or recurring intercompany transactions." },
      { n: 104, id: "can-we-sell-or-close-the-indian-subsidiary-later", q: "Can we sell or close the Indian subsidiary later?", a: "An Australian parent can sell or close the Indian subsidiary later by selling the shares or the business, merging the subsidiary into another group company, or closing it through strike-off or voluntary liquidation. Each route has its own tax and RBI reporting steps, so the exit should be planned before investing." },
      { n: 105, id: "how-does-striking-off-a-company-work", q: "How does striking off a company work?", a: "A company that has not carried on business for the previous two financial years can apply to the Registrar for removal, after clearing its dues and filing pending returns. The Registrar publishes a notice and, if there is no objection, removes the name from the register." },
      { n: 106, id: "how-are-residual-funds-sent-to-australia-on-closure", q: "How are residual funds sent to Australia on closure?", a: "Residual funds are sent to Australia on closure after liabilities and taxes are settled and accounts are finalised. The surplus is distributed to the parent through the bank with the closing certificates and remittance forms (Forms 145 and 146, previously Forms 15CA and 15CB), and the closure is then reported to the RBI." },
      { n: 107, id: "can-we-buy-back-shares-or-reduce-capital-to-return-funds", q: "Can we buy back shares or reduce capital to return funds?", a: "A subsidiary can return funds to its parent by buyback or capital reduction. A buyback under Section 68 of the Companies Act, 2013 is limited by size, timing and solvency conditions, and a capital reduction under Section 66 normally needs Tribunal approval. Tax rules for buybacks have changed recently, so the tax cost for the parent should be checked before choosing between dividends, buyback and capital reduction." },
      { n: 108, id: "what-happens-if-the-subsidiary-stops-filing-or-misses-deadli", q: "What happens if the subsidiary stops filing or misses deadlines?", a: "If a subsidiary stops filing or misses deadlines, late fees accrue daily, directors can be disqualified after continued non-filing, the Registrar can strike the company off, and FEMA defaults need compounding with the RBI. Regularizing a lapsed company is possible but costs more than staying current, so a compliance calendar helps." },
    ],
  },
  {
    id: "audit-icofr",
    label: "Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies",
    readMore: { href: "/blog/australia-to-india/audit-icofr", label: "Read the full guide: Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies" },
    items: [
      { n: 109, id: "is-audit-mandatory-for-a-small-indian-subsidiary", q: "Is audit mandatory for a small Indian subsidiary?", a: "Audit is mandatory for a small Indian subsidiary, because every company must have its financial statements audited each year, whatever its size (Section 139 of the Companies Act, 2013)." },
      { n: 110, id: "does-india-require-internal-controls-reporting", q: "Does India require internal controls reporting?", a: "India requires internal controls reporting: the Auditor of the company reports on internal financial controls for most companies (Section 143(3)(i) of the Companies Act, 2013). This is separate from the declaration your Australian parent's CEO and CFO give on its own financial statements." },
      { n: 111, id: "can-the-same-firm-do-the-books-and-the-audit", q: "Can the same firm do the books and the audit?", a: "The same firm cannot do the books and the audit of a company, because the Auditor must be independent of the accounting work." },
      { n: 112, id: "can-an-australian-accounting-standards-aasb-reporting-packag", q: "Can an Australian Accounting Standards (AASB) reporting package be prepared from the Indian books?", a: "An Australian Accounting Standards (AASB) reporting package can be prepared from the Indian books in the format the group needs." },
      { n: 113, id: "is-an-internal-audit-mandatory-for-an-indian-subsidiary", q: "Is an internal audit mandatory for an Indian subsidiary?", a: "An internal audit is mandatory under Section 138 of the Companies Act, 2013 for a private company with turnover of ₹200 crore or more or outstanding borrowings above ₹100 crore from banks or financial institutions. The internal Auditor can be an employee but cannot be the Statutory Auditor." },
      { n: 114, id: "does-the-auditor-have-to-report-on-internal-financial-contro", q: "Does the Auditor have to report on internal financial controls for a small private company?", a: "A private company is exempt from the Auditor's internal financial controls report under Section 143(3)(i) of the Companies Act, 2013 if its turnover is below ₹50 crore and its borrowings are below ₹25 crore, with no default in filing. The Board must still maintain internal financial controls." },
    ],
  },
  {
    id: "australian-parent-obligations",
    label: "Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More",
    readMore: { href: "/blog/australia-to-india/australian-parent-obligations", label: "Read the full guide: Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More" },
    items: [
      { n: 115, id: "does-an-australian-company-have-to-report-its-indian-subsidi", q: "Does an Australian company have to report its Indian subsidiary to the ATO?", a: "An Australian company that owns an Indian subsidiary has to consider the controlled foreign company (CFC) rules in Part X of the Income Tax Assessment Act 1936, report international related-party dealings in the International Dealings Schedule where thresholds are met, and include any attributable or assessable foreign income in its company tax return. This should be confirmed with an Australian tax adviser." },
      { n: 116, id: "will-the-indian-financial-year-cause-problems", q: "Will the Indian financial year cause problems?", a: "The Indian financial year needs planning, because the Indian year ends 31 March while most Australian companies report to 30 June. A reporting bridge solves this." },
      { n: 117, id: "who-prepares-the-australian-cfc-and-international-dealings-s", q: "Who prepares the Australian CFC and International Dealings Schedule disclosures?", a: "They are prepared by the Australian parent's tax adviser as part of the company tax return, because Australian filings are outside the scope of the Indian adviser. The Indian financial information the adviser needs is supplied by the subsidiary's accountants." },
      { n: 118, id: "do-we-have-to-report-the-indian-bank-account-to-the-ato", q: "Do we have to report the Indian bank account to the ATO?", a: "Australia has no foreign bank account report like the US FBAR. The Indian subsidiary's bank account belongs to the subsidiary, and its results reach the parent's return through the CFC and foreign income rules. If the parent itself holds an Indian account, the interest is assessable foreign income and should be disclosed in the company tax return." },
      { n: 119, id: "what-happens-if-the-australian-parent-does-not-lodge-the-req", q: "What happens if the Australian parent does not lodge the required foreign income disclosures?", a: "The ATO can apply administrative penalties for late or incorrect lodgement of the company tax return and its schedules, and shortfall penalties if foreign income is understated. Large multinational groups face higher penalties for late lodgement. Your Australian tax adviser can confirm the exposure for your structure." },
      { n: 120, id: "are-dividends-from-an-indian-subsidiary-taxable-in-australia", q: "Are dividends from an Indian subsidiary taxable in Australia?", a: "Dividends from a foreign company in which an Australian company holds a direct voting interest of at least 10% are generally non-assessable non-exempt income (section 768-5, Income Tax Assessment Act 1997), so they are not taxed in Australia. The Indian Withholding Tax on them is therefore usually a final cost. Confirm with your Australian tax adviser." },
      { n: 121, id: "is-an-indian-subsidiary-a-controlled-foreign-company", q: "Is an Indian subsidiary a controlled foreign company?", a: "An Indian subsidiary controlled by Australian entities is a controlled foreign company. Whether any of its income is attributed to the Australian parent depends on the active income test and the tainted income categories. India is not a listed country, so the full tests apply and a captive services company should be reviewed." },
      { n: 122, id: "does-the-ato-apply-transfer-pricing-rules-to-payments-to-an-", q: "Does the ATO apply transfer pricing rules to payments to an Indian subsidiary?", a: "Yes. Division 815 of the Income Tax Assessment Act 1997 applies the arm's length principle to cross-border dealings between related parties, and documentation requirements apply. Large groups also file the local file, master file and country-by-country report. A fair, documented price protects you in both countries." },
    ],
  },
  {
    id: "common-mistakes",
    label: "13 Common Mistakes Australian Companies Make Setting Up in India",
    readMore: { href: "/blog/australia-to-india/common-mistakes", label: "Read the full guide: 13 Common Mistakes Australian Companies Make Setting Up in India" },
    items: [
      { n: 123, id: "what-is-the-most-expensive-mistake", q: "What is the most expensive mistake?", a: "Missing the FEMA timelines for allotment and reporting, because regularisation takes time and can involve compounding." },
      { n: 124, id: "can-mistakes-be-fixed-later", q: "Can mistakes be fixed later?", a: "Many mistakes in Indian compliance can be fixed later through late filing, regularisation or compounding, but at extra cost and effort. Prevention is cheaper." },
      { n: 125, id: "is-a-checklist-needed-for-every-filing", q: "Is a checklist needed for every filing?", a: "A single plan with owners and dates works better than a checklist for every filing, and it should be set up at the start of the engagement." },
      { n: 126, id: "can-a-branch-office-be-converted-into-a-subsidiary-later", q: "Can a branch office be converted into a subsidiary later?", a: "A business can be moved into a new Indian subsidiary, usually by transferring the activity and assets to the new company. The tax, FEMA and contract consequences should be planned in advance." },
      { n: 127, id: "what-is-the-most-common-mistake-foreign-companies-make-when-", q: "What is the most common mistake foreign companies make when setting up in India?", a: "The most common mistake foreign companies make in India is treating setup as a series of separate filings instead of one plan. Incorporation is only the start, and the FEMA, tax, transfer pricing and payroll steps that follow are where most breaches arise." },
      { n: 128, id: "what-is-the-penalty-for-not-filing-form-inc-20a", q: "What is the penalty for not filing Form INC-20A?", a: "The penalty for not filing Form INC-20A is ₹50,000 on the company and ₹1,000 per day on each officer in default, up to ₹1,00,000 each, under Section 10A of the Companies Act, 2013. The company also cannot commence business or borrow until the form is filed." },
      { n: 129, id: "what-happens-if-form-fc-gpr-is-filed-late", q: "What happens if Form FC-GPR is filed late?", a: "If Form FC-GPR is filed late, the delay is generally regularised by paying a Late Submission Fee, which depends on the amount involved and the length of the delay. Delays outside what the fee route covers, or related breaches, need compounding with the RBI under FEMA, which takes more time and cost than filing on time." },
      { n: 130, id: "can-a-foreign-parent-be-reimbursed-for-pre-incorporation-exp", q: "Can a foreign parent be reimbursed for pre-incorporation expenses?", a: "A foreign parent can recover pre-incorporation expenses by receiving equity in the subsidiary against them, up to 5% of the authorised capital or USD 500,000, whichever is less, subject to conditions in the RBI's foreign investment rules. Costs outside these conditions can create a FEMA issue, so the recovery route should be decided before the costs are incurred." },
      { n: 131, id: "why-do-foreign-companies-face-fema-problems-after-incorporat", q: "Why do foreign companies face FEMA problems after incorporation?", a: "Foreign companies face FEMA problems after incorporation mostly because of sequence and timing: funds are received, shares allotted and reports filed in the wrong order or after the deadline. These contraventions usually arise from misunderstanding the steps rather than intent." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "India Subsidiary Compliance Calendar for Australian Companies",
    readMore: { href: "/blog/australia-to-india/compliance-calendar", label: "Read the full guide: India Subsidiary Compliance Calendar for Australian Companies" },
    items: [
      { n: 132, id: "what-is-the-first-compliance-after-incorporation", q: "What is the first compliance after incorporation?", a: "Appointing the first Auditor within 30 days, filing the commencement declaration (INC-20A) within 180 days, and reporting the received funds (FC-GPR) within 30 days of allotment." },
      { n: 133, id: "when-is-the-annual-return-due", q: "When is the annual return due?", a: "Form MGT-7 is due within 60 days of the AGM. Form AOC-4 for financial statements is due within 30 days of the AGM." },
      { n: 134, id: "when-must-the-fla-return-be-filed", q: "When must the FLA return be filed?", a: "The FLA return must be filed by 15 July each year on the RBI portal." },
      { n: 135, id: "what-happens-if-a-filing-deadline-is-missed", q: "What happens if a filing deadline is missed?", a: "Late fees, penalties and, for some company filings, director disqualification can follow. Regular compliance avoids all of these." },
      { n: 136, id: "do-the-new-tax-forms-change-due-dates", q: "Do the new tax forms change due dates?", a: "The new tax forms change the names and numbers, and the notified due dates should be confirmed for each tax year." },
      { n: 137, id: "what-are-the-monthly-due-dates-for-gst-withholding-tax-pf-an", q: "What are the monthly due dates for GST, Withholding Tax, PF and ESI in India?", a: "For regular monthly filers, GSTR-1 is due by the 11th and GSTR-3B by the 20th of the following month, Withholding Tax is deposited by the 7th, and PF and ESI contributions are paid by the 15th." },
    ],
  },
  {
    id: "contracts-and-arbitration",
    label: "Contracts and Arbitration in India for Australian Companies",
    readMore: { href: "/blog/australia-to-india/contracts-and-arbitration", label: "Read the full guide: Contracts and Arbitration in India for Australian Companies" },
    items: [
      { n: 138, id: "is-a-written-agreement-needed-between-parent-and-subsidiary", q: "Is a written agreement needed between parent and subsidiary?", a: "Yes. It supports transfer pricing, tax and legal positions and should be in place before services begin." },
      { n: 139, id: "can-australian-law-be-chosen-for-a-contract-with-an-indian-c", q: "Can Australian law be chosen for a contract with an Indian customer?", a: "Australian law can often be chosen for a contract with an Indian customer, but certain Indian laws apply regardless. Advice should be taken on the clause." },
      { n: 140, id: "are-foreign-arbitral-awards-enforceable-in-india", q: "Are foreign arbitral awards enforceable in India?", a: "Awards from notified reciprocating countries can be enforced under the New York Convention framework, subject to the conditions in Indian law." },
      { n: 141, id: "what-is-section-34", q: "What is Section 34?", a: "The section of the Arbitration and Conciliation Act that allows an award made in India to be challenged on limited grounds." },
      { n: 142, id: "does-stamp-duty-apply-to-agreements", q: "Does stamp duty apply to agreements?", a: "Stamp duty applies to many agreements in India, with rates set by the state. Unstamped documents can cause trouble in evidence." },
      { n: 143, id: "is-there-a-time-limit-for-arbitration-awards-in-india", q: "Is there a time limit for arbitration awards in India?", a: "A domestic arbitration award in India must be made within 12 months of the completion of pleadings, extendable by 6 months with the parties' consent (Section 29A of the Arbitration and Conciliation Act, 1996). International commercial arbitration is not covered by this limit." },
    ],
  },
  {
    id: "documents-and-apostille",
    label: "Documents and Apostille for an India Subsidiary (Australian Parent)",
    readMore: { href: "/blog/australia-to-india/documents-and-apostille", label: "Read the full guide: Documents and Apostille for an India Subsidiary (Australian Parent)" },
    items: [
      { n: 144, id: "which-australian-documents-need-an-apostille-and-who-issues-it", q: "Which Australian documents need an apostille for an Indian subsidiary, and who issues it?", a: "The Australian parent's ASIC company extract or certificate of registration, its constitution, the directors' resolution approving the Indian subsidiary, and the notarised passports and address proofs of its directors and authorised signatory all need an apostille. In Australia the Department of Foreign Affairs and Trade (DFAT) issues apostilles, through one national process whichever state the company is registered in. Private documents are signed before an Australian notary public first, and no Indian High Commission legalisation is needed." },
      { n: 145, id: "can-documents-be-signed-and-apostilled-electronically", q: "Can documents be signed and apostilled electronically?", a: "Notarisation practice varies by state and territory, and not every document can be notarised or apostilled electronically. Acceptance of electronic versions in India also varies, so the format the Indian filing will accept should be confirmed before notarisation to avoid repeating the process." },
      { n: 146, id: "how-long-does-incorporation-take", q: "How long does incorporation take?", a: "Incorporation of an Indian subsidiary typically takes 4 to 6 weeks from receipt of complete documents. The main variable is how quickly the apostilled Australian documents are ready." },
      { n: 147, id: "what-is-an-apostille-in-australia", q: "What is an apostille in Australia?", a: "An apostille is a certificate issued by DFAT under the Hague Apostille Convention that confirms the signature, seal or stamp on a document, so that India accepts it without further legalisation. For a private document it is normally issued after a notary public has signed." },
      { n: 148, id: "are-india-and-australia-both-members-of-the-hague-apostille-", q: "Are India and Australia both members of the Hague Apostille Convention?", a: "Yes. India and Australia are both parties to the Hague Apostille Convention, so a DFAT apostille is accepted for Australian documents used to incorporate a subsidiary in India." },
      { n: 149, id: "how-long-does-an-apostille-take-in-australia", q: "How long does an apostille take in Australia?", a: "It depends on DFAT's current processing time and on how quickly the notary appointment and any ASIC documents are ready. Plan for this step to be the longest in the incorporation timeline and start it first. We confirm the current turnaround before you order." },
      { n: 150, id: "what-does-an-apostille-cost-in-australia", q: "What does an apostille cost in Australia?", a: "DFAT charges a fee for each document it apostilles, and notaries charge their own fees for the notarisation. Fees change, so check DFAT's current schedule. The cost is small next to the cost of a delayed incorporation." },
      { n: 151, id: "does-dfat-apostille-an-asic-company-extract", q: "Does DFAT apostille an ASIC company extract?", a: "It depends on the form of the extract and whether DFAT can verify the issuer's signature. If it cannot, the extract is certified by a notary public and the notary's signature is apostilled. We confirm the route before you order." },
      { n: 152, id: "can-a-notary-in-any-australian-state-sign-the-documents", q: "Can a notary in any Australian state sign the documents?", a: "Notaries are regulated by each state or territory. Any notary public can notarise, but DFAT must be able to verify the notary's signature and seal, so use a notary on DFAT's records and confirm before the appointment." },
    ],
  },
  {
    id: "dtaa-pe-risk",
    label: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk",
    readMore: { href: "/blog/australia-to-india/dtaa-pe-risk", label: "Read the full guide: India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk" },
    items: [
      { n: 153, id: "what-is-a-dtaa", q: "What is a DTAA?", a: "A double taxation avoidance agreement. It allocates taxing rights between two countries and can reduce Withholding Tax on cross-border payments." },
      { n: 154, id: "what-does-the-parent-need-to-claim-treaty-rates", q: "What does the parent need to claim treaty rates?", a: "An Australian certificate of residency from the ATO (the Tax Residency Certificate), Form 41 (previously Form 10F) and, where asked, a declaration of no permanent establishment in India." },
      { n: 155, id: "is-an-indian-subsidiary-a-permanent-establishment-of-the-aus", q: "Is an Indian subsidiary a permanent establishment of the Australian parent?", a: "An Indian subsidiary is not a permanent establishment of the Australian parent by itself. The risk arises if the subsidiary acts as the parent's dependent agent, or if the parent's own staff operate from India." },
      { n: 156, id: "which-section-governs-withholding-tax-on-payments-to-a-non-r", q: "Which section governs Withholding Tax on payments to a non-resident?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the 1961 Act)." },
      { n: 157, id: "can-the-indian-tax-be-credited-in-australia", q: "Can the Indian tax be credited in Australia?", a: "It depends on the income. Dividends from a wholly owned Indian subsidiary are generally exempt in Australia, so there is no credit for the Indian tax on them. For interest, royalties and fees that are assessable in Australia, the Indian tax can usually be claimed as a foreign income tax offset under Division 770 of the Income Tax Assessment Act 1997. This should be confirmed with an Australian tax adviser." },
      { n: 158, id: "does-the-treaty-reduce-withholding-tax", q: "Does the treaty reduce Withholding Tax?", a: "The India-Australia tax treaty can reduce Withholding Tax if the parent is an Australian tax resident and satisfies the conditions, which requires a Tax Residency Certificate and treaty details in Form 41 (previously Form 10F)." },
      { n: 159, id: "how-many-days-of-work-in-india-create-a-permanent-establishm", q: "How many days of work in India create a permanent establishment under the India-Australia treaty?", a: "Under Article 5 of the India-Australia treaty, as amended in 2013, services furnished in India through employees or other personnel create a permanent establishment if the activities continue for the same or a connected project for more than 183 days in any 12-month period. A building site or a construction, installation or assembly project creates one after more than 6 months. Confirm the current text for your case." },
      { n: 160, id: "what-are-the-india-australia-treaty-withholding-rates", q: "What are the India-Australia treaty withholding rates?", a: "The India-Australia treaty caps Indian withholding at 15% on dividends and on interest, and at 15% on royalties and fees for services that make technical knowledge available (10% for equipment royalties). The treaty rate applies only with an Australian certificate of residency and Form 41 (previously Form 10F)." },
    ],
  },
  {
    id: "eor-vs-subsidiary",
    label: "EOR vs Subsidiary in India: Which Is Right for an Australian Company?",
    readMore: { href: "/blog/australia-to-india/eor-vs-subsidiary", label: "Read the full guide: EOR vs Subsidiary in India: Which Is Right for an Australian Company?" },
    items: [
      { n: 161, id: "how-quickly-can-an-australian-company-hire-through-an-eor", q: "How quickly can an Australian company hire through an EOR?", a: "Usually within weeks, because no company needs to be incorporated first. The timing depends on the EOR's onboarding and the candidate's notice period with their current employer." },
      { n: 162, id: "can-an-eor-team-be-converted-into-a-subsidiary", q: "Can an EOR team be converted into a subsidiary?", a: "Yes. Employees agree to move to the new company, service history is carried over and payroll is switched on an agreed date. Planning the transfer avoids gaps in employment and benefits." },
      { n: 163, id: "does-an-eor-remove-tax-risk-for-the-australian-company", q: "Does an EOR remove tax risk for the Australian company?", a: "An Employer of Record does not remove tax risk for the Australian company. An EOR handles employment compliance, but a permanent establishment can still arise if staff in India conclude contracts or act as the company's fixed place of business." },
      { n: 164, id: "is-an-eor-cheaper-than-a-subsidiary", q: "Is an EOR cheaper than a subsidiary?", a: "An EOR is usually cheaper than a subsidiary for a small team and a short period. As headcount grows, an own subsidiary can be cheaper, so both should be compared against the hiring plan." },
      { n: 165, id: "can-a-liaison-office-earn-revenue", q: "Can a liaison office earn revenue?", a: "A liaison office cannot earn revenue. It can only represent the parent and coordinate with Indian parties, cannot undertake commercial activity or earn income, and its costs are met by remittances from abroad." },
    ],
  },
  {
    id: "esop",
    label: "ESOPs for Indian Employees of an Australian Parent Company",
    readMore: { href: "/blog/australia-to-india/esop", label: "Read the full guide: ESOPs for Indian Employees of an Australian Parent Company" },
    items: [
      { n: 166, id: "can-indian-employees-receive-australian-parent-shares", q: "Can Indian employees receive Australian parent shares?", a: "Indian employees can receive Australian parent shares under the parent's plan, subject to FEMA overseas investment rules and reporting. The tax and withholding treatment needs to be set up in advance." },
      { n: 167, id: "when-are-esops-taxed-in-india", q: "When are ESOPs taxed in India?", a: "Twice. The benefit is taxed as salary at exercise or vesting, and capital gains tax applies when the shares are sold." },
      { n: 168, id: "does-the-subsidiary-pay-for-the-parent-s-esop-cost", q: "Does the subsidiary pay for the parent's ESOP cost?", a: "An Indian subsidiary often pays for the parent's ESOP cost through a cost recharge under an agreement. Deductibility and Withholding Tax on the recharge are frequently disputed, so it should be documented from the start." },
      { n: 169, id: "can-the-indian-company-issue-its-own-esops", q: "Can the Indian company issue its own ESOPs?", a: "Yes, under the Companies Act with a special resolution and a scheme. A valuation is needed and FEMA conditions apply where non-residents are involved." },
      { n: 170, id: "is-an-llp-cheaper-than-a-private-limited-company", q: "Is an LLP cheaper than a private limited company?", a: "Compliance for an LLP can be lighter, but eligibility for foreign investment, funding options and Australian tax treatment usually matter more for an Australian parent than compliance cost." },
      { n: 171, id: "how-is-an-esop-taxed-for-employees-in-india", q: "How is an ESOP taxed for employees in India?", a: "An Indian employee is taxed on ESOP shares twice: as salary on the fair market value at exercise less the exercise price (for RSUs, at vesting), with tax withheld by the employer, and as capital gains on sale, where the long-term rate is 12.5% for shares held more than 24 months. Employees must disclose foreign shares in Schedule FA and can claim foreign tax credit using Form 67." },
      { n: 172, id: "what-are-the-companies-act-conditions-for-esops-in-india", q: "What are the Companies Act conditions for ESOPs in India?", a: "An Indian company issues ESOPs under Section 62(1)(b) of the Companies Act, 2013 and Rule 12 of the Companies (Share Capital and Debentures) Rules, 2014, which require a special resolution of shareholders (filed in Form MGT-14 within 30 days) and a minimum of one year between grant and vesting." },
    ],
  },
  {
    id: "expat-visa",
    label: "Sending an Australian Executive to India: Visa, Housing and Tax",
    readMore: { href: "/blog/australia-to-india/expat-visa", label: "Read the full guide: Sending an Australian Executive to India: Visa, Housing and Tax" },
    items: [
      { n: 173, id: "can-an-australian-executive-work-on-a-business-visa", q: "Can an Australian executive work on a business visa?", a: "An Australian executive cannot work in India on a business visa. A business visa is for meetings and similar activities, and working for an Indian company needs an employment visa." },
      { n: 174, id: "who-sponsors-the-visa", q: "Who sponsors the visa?", a: "The Indian company that will employ or host the executive sponsors the application. Conditions such as minimum salary can apply." },
      { n: 175, id: "do-expats-pay-indian-income-tax", q: "Do expats pay Indian income tax?", a: "Income earned for work done in India is taxable in India, subject to Article 15 of the India-Australia treaty, which can exempt a visit of up to 183 days in the Indian tax year where the employer is Australian and the cost is not borne by an Indian entity. The treatment of other income depends on Indian tax residency." },
      { n: 176, id: "does-sending-an-executive-create-a-permanent-establishment", q: "Does sending an executive create a permanent establishment?", a: "Sending an executive to India can create a permanent establishment, particularly if the executive negotiates or concludes contracts for the Australian company. The structure should be reviewed before the move." },
      { n: 177, id: "what-is-the-minimum-salary-for-an-indian-employment-visa", q: "What is the minimum salary for an Indian employment visa?", a: "An Indian employment visa generally needs the foreign national to earn at least USD 25,000 a year, with limited exceptions. A foreigner staying more than 180 days must register with the FRRO within 14 days of arrival." },
      { n: 178, id: "do-australian-employees-in-india-pay-provident-fund", q: "Do Australian employees in India pay provident fund?", a: "Not if they hold a certificate of coverage under the India-Australia Social Security Agreement. The ATO issues the certificate to the Australian employer for a temporary assignment of up to five years, and the employee stays in the Australian superannuation system. Without a certificate, provident fund applies to an international worker on full wages." },
    ],
  },
  {
    id: "foreign-employee-treaty-ssa",
    label: "Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA",
    readMore: { href: "/blog/australia-to-india/foreign-employee-treaty-ssa", label: "Read the full guide: Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA" },
    items: [
      { n: 179, id: "is-there-a-social-security-agreement-between-india-and-austr", q: "Is there a social security agreement between India and Australia?", a: "Yes. The India-Australia Social Security Agreement came into force on 1 January 2016. It prevents double coverage for employees on temporary assignment, with a certificate of coverage valid for up to five years, and it protects pension rights across the two countries." },
      { n: 180, id: "who-issues-the-certificate-of-coverage-for-an-australian-emp", q: "Who issues the certificate of coverage for an Australian employee going to India?", a: "The Australian Taxation Office issues it to the Australian employer, which applies for it before or as the assignment starts. The Indian subsidiary keeps a copy to show that the employee is excluded from provident fund." },
      { n: 181, id: "how-long-does-a-certificate-of-coverage-last", q: "How long does a certificate of coverage last?", a: "Up to five years from the assignment date. An extension is possible if both countries’ authorities agree, so diarise the end date and ask in good time." },
      { n: 182, id: "can-an-employee-who-takes-a-job-with-the-indian-subsidiary-g", q: "Can an employee who takes a job with the Indian subsidiary get a certificate of coverage?", a: "No. The agreement covers an employee who is sent on a temporary assignment by the Australian employer and remains employed by it. An employee who takes a new job with the Indian company, or who is self-employed, is not eligible." },
      { n: 183, id: "what-does-article-15-of-the-india-australia-dtaa-say", q: "What does Article 15 of the India-Australia DTAA say?", a: "Article 15 says employment income is taxed in the country of residence unless the work is done in the other country. It exempts the other country’s tax if the employee is present for no more than 183 days in the year of income, the employer is not resident in that country and the cost is not borne by a permanent establishment there." },
      { n: 184, id: "does-the-183-day-rule-apply-per-calendar-year-or-per-indian-", q: "Does the 183-day rule apply per calendar year or per Indian tax year?", a: "Article 15 refers to the year of income of the country where the work is done, so for work in India the count is made over the Indian tax year, 1 April to 31 March, not the calendar year. Keep a day-count that follows the Indian year." },
      { n: 185, id: "does-an-australian-employee-seconded-to-the-indian-subsidiar", q: "Does an Australian employee seconded to the Indian subsidiary pay Indian tax?", a: "Usually yes for the work done in India. The Article 15 exemption is available only for short visits where the employer is Australian and no Indian entity bears the cost. If the Indian subsidiary is the economic employer or bears the salary, the exemption is likely to be denied." },
      { n: 186, id: "what-is-an-excluded-international-worker-in-india", q: "What is an excluded international worker in India?", a: "An international worker from a country that has a social security agreement with India and who holds a valid certificate of coverage from that country is excluded from the Indian provident fund for the covered period." },
      { n: 187, id: "do-directors-fees-get-the-183-day-exemption", q: "Do directors’ fees get the 183-day exemption?", a: "No. Article 16 allows India to tax fees paid to a member of the board of directors of a company resident in India, whatever the number of days spent in India." },
      { n: 188, id: "can-an-australian-employee-claim-indian-tax-paid-against-aus", q: "Can an Australian employee claim Indian tax paid against Australian tax?", a: "Yes, generally. An Australian resident can claim a foreign income tax offset for Indian tax paid on Indian-source income that is assessable in Australia (Division 770 of the Income Tax Assessment Act 1997), up to a cap. Confirm the position with an Australian tax adviser." },
      { n: 189, id: "what-happens-to-the-provident-fund-when-an-australian-employ", q: "What happens to the provident fund when an Australian employee leaves India?", a: "For members covered by the agreement, the Employees’ Provident Fund Organisation rules allow withdrawal of the balance on leaving employment in an EPF-covered establishment. Confirm the withdrawal procedure and tax treatment at the time." },
      { n: 190, id: "are-indian-employees-sent-to-australia-covered-by-the-same-a", q: "Are Indian employees sent to Australia covered by the same agreement?", a: "Yes. An Indian employer can obtain a certificate of coverage through the EPFO’s international worker process so that the employee stays in the Indian provident fund scheme and the employer is exempt from Australian superannuation guarantee for up to five years." },
    ],
  },
  {
    id: "funding-fema-fc-gpr",
    label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
    readMore: { href: "/blog/australia-to-india/funding-fema-fc-gpr", label: "Read the full guide: Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
    items: [
      { n: 191, id: "what-is-form-fc-gpr", q: "What is Form FC-GPR?", a: "The report an Indian company files with the RBI after issuing shares to a foreign investor, within 30 days of the allotment, through the FIRMS portal." },
      { n: 192, id: "is-there-a-minimum-capital", q: "Is there a minimum capital?", a: "No statutory minimum applies to a private limited company. The amount depends on your plan and the bank's expectations." },
      { n: 193, id: "can-the-parent-lend-money-instead", q: "Can the parent lend money instead?", a: "Yes, under the ECB framework, which sets conditions on the lender, maturity, interest and use of funds." },
      { n: 194, id: "what-if-shares-are-not-allotted-within-60-days", q: "What if shares are not allotted within 60 days?", a: "The money must be refunded to the investor within the prescribed period, unless approval to retain it is obtained." },
      { n: 195, id: "what-happens-right-after-the-certificate-of-incorporation", q: "What happens right after the Certificate of Incorporation?", a: "You open the bank account, transfer the funds for share capital, allot shares, file FC-GPR with the RBI, and complete the commencement and registration steps." },
      { n: 196, id: "what-is-the-late-submission-fee-for-fc-gpr", q: "What is the Late Submission Fee for FC-GPR?", a: "The Late Submission Fee for a late FC-GPR is ₹7,500 plus 0.025% of the amount involved for each year of delay, and the facility is available for up to three years from the due date. Cases outside this route need compounding with the RBI under FEMA." },
      { n: 197, id: "what-are-the-fema-deadlines-for-share-capital-received-from-", q: "What are the FEMA deadlines for share capital received from an Australian parent?", a: "An Australian parent's investment should be reported on the FIRMS portal within 30 days of receipt, shares must be allotted within 60 days of receipt or the money refunded within a further 15 days, and Form FC-GPR is filed within 30 days of allotment. Share transfers between a resident and a non-resident are reported in Form FC-TRS within 60 days." },
    ],
  },
  {
    id: "global-vat",
    label: "Global VAT and GST for Australian Companies Selling Abroad",
    readMore: { href: "/blog/australia-to-india/global-vat", label: "Read the full guide: Global VAT and GST for Australian Companies Selling Abroad" },
    items: [
      { n: 198, id: "does-an-australian-company-without-an-overseas-office-need-t", q: "Does an Australian company without an overseas office need to register for VAT?", a: "An Australian company without an overseas office may still need to register for VAT or GST in the countries where its customers are, especially for sales to consumers. Registration thresholds and rules differ by country and by whether the seller is established there, so the position should be checked for each market before the first sale." },
      { n: 199, id: "what-is-the-reverse-charge", q: "What is the reverse charge?", a: "The reverse charge shifts the duty to account for VAT or GST from the supplier to the business customer. The supplier invoices without local tax and the customer reports and, where eligible, recovers the tax in its own return. It commonly applies to cross-border business-to-business services." },
      { n: 200, id: "is-there-a-single-registration-for-eu-digital-sales", q: "Is there a single registration for EU digital sales?", a: "Yes. The EU one-stop shop lets a non-EU seller of digital services to EU consumers register in one member state and report VAT for all EU sales in one return. Registration is still needed in other cases, for example for goods held in stock in another country." },
      { n: 201, id: "is-gst-in-india-the-same-as-vat", q: "Is GST in India the same as VAT?", a: "Indian GST is a destination-based tax similar in principle to VAT, but it has its own rates, registration and filing rules. It is separate from overseas VAT and from Australian GST, and each is filed in its own country." },
      { n: 202, id: "are-exports-gst-free-in-australia", q: "Are exports GST-free in Australia?", a: "Exports of goods and most services to overseas customers are generally GST-free in Australia, which means no GST is charged but you can still claim input tax credits for the GST on your costs. You need evidence of the export. GST-free treatment in Australia does not remove any VAT or GST obligation in the customer's country." },
      { n: 203, id: "does-an-australian-company-need-to-register-for-gst-in-india", q: "Does an Australian company need to register for GST in India?", a: "An Australian company needs to register for GST in India if it supplies online information and database access or retrieval (OIDAR) services, such as software, apps or cloud services, to consumers in India. The simplified OIDAR registration applies, 18% GST is charged and a monthly return is filed. Supplies to business customers in India are usually under reverse charge." },
      { n: 204, id: "what-are-the-vat-registration-thresholds-for-selling-service", q: "What are the VAT registration thresholds for selling services abroad from Australia?", a: "Thresholds differ by country and by whether the seller is established there: the UK has none for non-UK businesses, the EU micro-threshold of €10,000 applies only to EU-established sellers, New Zealand is NZ$60,000 for remote services, Singapore overseas vendors register at SGD 100,000 of B2C sales (and SGD 1 million overall), and the UAE has none for foreign businesses. Thresholds change, so confirm before relying on them." },
    ],
  },
  {
    id: "hiring-and-payroll",
    label: "Hiring in India: Contracts, Payroll and Statutory Compliance",
    readMore: { href: "/blog/australia-to-india/hiring-and-payroll", label: "Read the full guide: Hiring in India: Contracts, Payroll and Statutory Compliance" },
    items: [
      { n: 205, id: "what-is-the-notice-period-in-india", q: "What is the notice period in India?", a: "The notice period in India is set by the employment contract, commonly one to three months for professional roles. State and statutory rules also apply, so it should be written clearly into each contract." },
      { n: 206, id: "does-an-indian-subsidiary-have-to-register-for-provident-fun", q: "Does an Indian subsidiary have to register for provident fund?", a: "Establishments above the prescribed employee limit must register, and many companies register earlier. Confirm the position for your headcount and state." },
      { n: 207, id: "can-an-australian-employment-contract-be-used-unchanged-in-i", q: "Can an Australian employment contract be used unchanged in India?", a: "No. Employment in India is contract based and governed by Indian statutes, so an Australian contract needs Indian notice, benefits, IP and termination terms. Fair Work Act terms and Australian awards do not govern employees who work in India for the Indian subsidiary." },
      { n: 208, id: "what-is-gratuity", q: "What is gratuity?", a: "A lump sum paid to an employee on leaving after the qualifying period of service, typically five years. The rules are being consolidated in the labour codes, so confirm the current position." },
      { n: 209, id: "what-are-the-employer-contributions-for-pf-and-esi-in-india", q: "What are the employer contributions for PF and ESI in India?", a: "Employers in India contribute 12% of wages to the provident fund (8.33% to pension and 3.67% to provident fund within the wage ceiling), 0.5% to the EDLI scheme, and 3.25% of wages to ESI for employees earning up to ₹21,000 a month. Employees contribute 12% to the provident fund and 0.75% to ESI." },
    ],
  },
  {
    id: "incorporation-process",
    label: "Incorporation Process for an Indian Subsidiary, Step by Step",
    readMore: { href: "/blog/australia-to-india/incorporation-process", label: "Read the full guide: Incorporation Process for an Indian Subsidiary, Step by Step" },
    items: [
      { n: 210, id: "does-the-australian-parent-need-to-visit-india", q: "Does the Australian parent need to visit India?", a: "An Australian parent does not need to visit India to incorporate a subsidiary. The process runs online using apostilled documents and digital signatures." },
      { n: 211, id: "can-the-company-name-be-rejected", q: "Can the company name be rejected?", a: "A company name can be rejected if it is identical or too similar to an existing company or trademark, or breaks the naming rules. Checking availability and proposing alternatives in advance avoids delay." },
      { n: 212, id: "what-are-the-mca-fee-and-stamp-duty-for-incorporating-a-comp", q: "What are the MCA fee and stamp duty for incorporating a company in India?", a: "The MCA filing fee for SPICe+ is nil where the authorised capital is up to ₹15 lakh, and slab fees apply above that. Name reservation costs ₹1,000 for up to two names, PAN and TAN are issued through SPICe+, and stamp duty on the Memorandum and Articles is a state levy, for example ₹1,010 in Rajasthan and ₹620 in Gujarat at ₹1 lakh of authorised capital." },
      { n: 213, id: "how-long-does-the-mca-take-to-incorporate-a-company-in-india", q: "How long does the MCA take to incorporate a company in India?", a: "The MCA stage of incorporating a company in India typically takes 7 to 15 working days, covering digital signatures, name approval, filing SPICe+ and receiving the Certificate of Incorporation. The overall timeline is usually 4 to 6 weeks, because the apostilled Australian documents, the bank account and the FEMA steps run alongside." },
    ],
  },
  {
    id: "india-australia-dtaa",
    label: "India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies",
    readMore: { href: "/blog/australia-to-india/india-australia-dtaa", label: "Read the full guide: India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies" },
    items: [
      { n: 214, id: "what-are-the-india-australia-dtaa-withholding-rates", q: "What are the India-Australia DTAA withholding rates?", a: "The India-Australia DTAA caps Indian withholding at 15% on dividends, 15% on interest, and 15% on royalties and fees for services that make technical knowledge available, with 10% for equipment royalties. The domestic rate for non-residents is 20% plus surcharge and cess. The treaty rate applies only with an ATO certificate of residency and Form 41 (previously Form 10F)." },
      { n: 215, id: "is-dividend-income-from-an-indian-subsidiary-taxed-again-in-", q: "Is dividend income from an Indian subsidiary taxed again in Australia?", a: "Dividends from a wholly owned Indian subsidiary are generally exempt in Australia for a company with a direct voting interest of at least 10% (section 768-5, Income Tax Assessment Act 1997). The 15% Indian Withholding Tax is therefore usually a final cost, and no foreign income tax offset is available for it." },
      { n: 216, id: "how-does-an-australian-company-get-a-certificate-of-residenc", q: "How does an Australian company get a certificate of residency?", a: "The Australian Taxation Office issues it. Companies use the certificate of residency request form for non-individuals (NAT 75442), and the certificate confirms residency for a specific period. Ask for the period that covers the payments, and renew it as needed." },
      { n: 217, id: "what-is-form-41-and-why-is-it-needed", q: "What is Form 41 and why is it needed?", a: "Form 41 (previously Form 10F) is the electronic statement of the non-resident payee’s details that supports a claim for treaty benefits, filed with the Indian payer or on the Indian tax portal. It is given together with the certificate of residency before the first payment." },
      { n: 218, id: "what-is-the-principal-purpose-test-in-the-india-australia-tr", q: "What is the principal purpose test in the India-Australia treaty?", a: "The principal purpose test comes from the Multilateral Instrument, which both countries have signed. It can deny a treaty benefit where obtaining it was one of the principal purposes of an arrangement, unless granting it is in line with the treaty’s object. A commercially genuine parent-subsidiary relationship is normally outside its concern." },
      { n: 219, id: "are-fees-for-technical-services-taxed-in-india-under-the-tre", q: "Are fees for technical services taxed in India under the treaty?", a: "Under Article 12, fees for services that make technical knowledge, experience, skill, know-how or processes available to the payer are taxed at up to 15% in India. Other service fees are business profits, taxable in India only if the Australian parent has a permanent establishment there. The facts of each service decide which applies." },
      { n: 220, id: "how-many-days-of-service-in-india-create-a-permanent-establi", q: "How many days of service in India create a permanent establishment under the DTAA?", a: "Under Article 5 as amended in 2013, services furnished through employees or other personnel create a permanent establishment if the activities continue for the same or a connected project for more than 183 days in any 12-month period. A construction or installation project creates one after more than 6 months, and substantial equipment after more than 183 days." },
      { n: 221, id: "how-is-tax-on-the-sale-of-shares-in-an-indian-subsidiary-tre", q: "How is tax on the sale of shares in an Indian subsidiary treated under the DTAA?", a: "India taxes the gain on shares of an Indian company under domestic law, with a long-term rate of 12.5% for unlisted shares held more than 24 months, and the treaty preserves this right. Australia can reduce the parent’s capital gain under the participation exemption where the parent held at least 10% and the company has an active business. Plan the exit with both advisers." },
      { n: 222, id: "how-does-australia-give-relief-for-indian-tax", q: "How does Australia give relief for Indian tax?", a: "Australia gives a foreign income tax offset (Division 770 of the Income Tax Assessment Act 1997) for Indian tax on income that is assessable in Australia, up to a cap. Dividends that are exempt in Australia do not qualify. India gives a credit for Australian tax limited to the Indian tax attributable to the income." },
      { n: 223, id: "what-is-the-mutual-agreement-procedure-under-the-india-austr", q: "What is the Mutual Agreement Procedure under the India-Australia treaty?", a: "Under Article 25, a taxpayer taxed in a way that does not follow the treaty can ask the competent authorities of India and Australia to resolve it. The case must be presented within three years of the first notification of the action." },
      { n: 224, id: "did-the-2011-protocol-change-the-india-australia-treaty", q: "Did the 2011 Protocol change the India-Australia treaty?", a: "Yes. The protocol, notified in India on 20 September 2013, changed the services and equipment permanent establishment tests in Article 5, the business profits article, the exchange of information article, and added non-discrimination (Article 24A) and assistance in tax collection (Article 26A)." },
      { n: 225, id: "which-country-taxes-what-under-the-india-australia-dtaa", q: "Which country taxes what under the India-Australia DTAA?", a: "India, as the source state, can tax income that arises in India, within the treaty caps: dividends and interest at up to 15%, royalties and technical fees at up to 15% (10% for equipment), and business profits only if there is a permanent establishment. Australia, as the residence state, taxes the Australian company on its worldwide income and gives relief for the Indian tax by exemption (most dividends) or a foreign income tax offset." },
      { n: 226, id: "how-many-days-create-a-permanent-establishment-under-the-ind", q: "How many days create a permanent establishment under the India-Australia treaty?", a: "Services furnished in India through employees for the same or a connected project create a PE after more than 183 days in any 12-month period. A building site or construction, installation or assembly project creates one after more than 6 months, substantial equipment after more than 183 days, and natural resources activities after more than 90 days." },
      { n: 227, id: "does-a-subsidiary-create-a-permanent-establishment-for-its-a", q: "Does a subsidiary create a permanent establishment for its Australian parent?", a: "Not by itself. Article 5(7) says that control of a subsidiary, or being controlled by one, does not make either company a permanent establishment of the other. A PE can still arise if the subsidiary acts as a dependent agent that habitually concludes contracts for the parent, or if the parent has its own fixed place or staff in India above the thresholds." },
      { n: 228, id: "what-is-the-royalty-rate-under-the-india-australia-dtaa", q: "What is the royalty rate under the India-Australia DTAA?", a: "Up to 10% for royalties for the use of industrial, commercial or scientific equipment and ancillary services, and up to 15% for other royalties, including fees for services that make technical knowledge available. Service fees where no knowledge is made available are business profits and are not taxable in India without a permanent establishment." },
      { n: 229, id: "is-interest-paid-to-an-australian-parent-taxed-in-india", q: "Is interest paid to an Australian parent taxed in India?", a: "Yes. India may tax interest on a loan from the Australian parent at up to 15% of the gross amount under Article 11, against the higher domestic rate. The parent needs its ATO certificate of residency and Form 41, and the interest must be at arm's length. Australia taxes the interest and gives a foreign income tax offset for the Indian tax." },
      { n: 230, id: "which-article-of-the-india-australia-dtaa-covers-capital-gai", q: "Which article of the India-Australia DTAA covers capital gains?", a: "Article 13. India may tax gains on Indian immovable property, business property of an Indian PE and shares of an Indian company, including the subsidiary, as the state where the company is resident. Each country otherwise applies its own law, and Australia can reduce the gain on a sale of a foreign subsidiary through the CGT participation exemption." },
      { n: 231, id: "does-the-india-australia-dtaa-cover-employees-and-directors", q: "Does the India-Australia DTAA cover employees and directors?", a: "Yes. Article 15 covers employees (salary for work in India is exempt in India for a short visit of up to 183 days if the employer is Australian and no Indian entity bears the cost), Article 14 covers independent consultants, and Article 16 lets India tax directors fees paid by an Indian company. See the guide on treaty and social security for foreign employees." },
      { n: 232, id: "is-there-a-limitation-on-benefits-clause-in-the-india-austra", q: "Is there a limitation on benefits clause in the India-Australia treaty?", a: "No separate clause. Instead the principal purpose test from the Multilateral Instrument, which both countries have signed, denies a treaty benefit where obtaining it was one of the principal purposes of an arrangement, unless granting it is in line with the purpose of the treaty." },
      { n: 233, id: "can-either-country-end-the-india-australia-dtaa", q: "Can either country end the India-Australia DTAA?", a: "Yes. The treaty has no end date, but either country can end it by written notice given on or before 30 June in any calendar year, effective from 1 July (Australia) or 1 April (India) of the following year." },
      { n: 234, id: "is-australian-gst-or-indian-gst-covered-by-the-india-austral", q: "Is Australian GST or Indian GST covered by the India-Australia DTAA?", a: "No. Article 2 covers income taxes only. Indian GST, Australian GST and stamp duty follow domestic law." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to Australia: Forms and Tax",
    readMore: { href: "/blog/australia-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to Australia: Forms and Tax" },
    items: [
      { n: 235, id: "can-dividends-be-sent-freely-to-australia", q: "Can dividends be sent freely to Australia?", a: "Dividends can be remitted through the authorised dealer bank from distributable profits after tax, with the Withholding Tax and documentation in place." },
    ],
  },
  {
    id: "resident-director",
    label: "Resident Director Requirement for an Indian Company",
    readMore: { href: "/blog/australia-to-india/resident-director", label: "Read the full guide: Resident Director Requirement for an Indian Company" },
    items: [
      { n: 236, id: "can-a-foreign-national-be-the-resident-director", q: "Can a foreign national be the Resident Director?", a: "A foreign national can be the Resident Director if they have stayed in India for at least 182 days in the financial year (Section 149(3) of the Companies Act, 2013). Citizenship is not the test." },
      { n: 237, id: "how-many-directors-does-a-private-company-need", q: "How many directors does a private company need?", a: "At least two, and at least one must be resident in India." },
      { n: 238, id: "can-the-australian-parent-s-ceo-be-a-director", q: "Can the Australian parent's CEO be a director?", a: "The Australian parent's CEO can be a director of the Indian subsidiary, because foreign nationals can be directors. They need a Digital Signature Certificate and a Director Identification Number." },
      { n: 239, id: "what-if-no-director-meets-the-residency-requirement-during-t", q: "What if no director meets the residency requirement during the year?", a: "The company is not compliant with the Companies Act and can face penalties, so the board should be reconstituted before the year ends." },
    ],
  },
  {
    id: "restructuring-and-exit",
    label: "Restructuring, Mergers and Exit for an Indian Subsidiary",
    readMore: { href: "/blog/australia-to-india/restructuring-and-exit", label: "Read the full guide: Restructuring, Mergers and Exit for an Indian Subsidiary" },
    items: [
      { n: 240, id: "can-the-indian-subsidiary-be-merged-into-another-group-compa", q: "Can the Indian subsidiary be merged into another group company?", a: "The Indian subsidiary can be merged into another group company through a scheme, and a fast-track route exists for a holding company and its wholly owned subsidiary (Section 233 of the Companies Act, 2013)." },
      { n: 241, id: "how-is-a-dormant-indian-company-closed", q: "How is a dormant Indian company closed?", a: "A dormant Indian company is closed by applying to the Registrar for strike-off under Section 248 of the Companies Act, 2013, after clearing dues and filing pending returns, if the company has not carried on business for the relevant period." },
      { n: 242, id: "how-is-the-surplus-sent-to-australia-on-closure", q: "How is the surplus sent to Australia on closure?", a: "On closure, after liabilities and taxes are settled, surplus funds are remitted through the bank with the required certificates, and the closure is reported to the RBI." },
      { n: 243, id: "what-are-the-fee-and-time-to-strike-off-an-indian-company", q: "What are the fee and time to strike off an Indian company?", a: "Striking off an Indian company under Section 248 of the Companies Act, 2013 uses Form STK-2 with a government fee of ₹10,000 and typically takes 3 to 6 months. The company must have carried on no business for the two preceding financial years, or not started within a year, and have no liabilities." },
      { n: 244, id: "what-tax-applies-when-selling-the-shares-of-an-indian-subsid", q: "What tax applies when selling the shares of an Indian subsidiary?", a: "Long-term capital gains on unlisted shares of an Indian subsidiary are taxed at 12.5% where the shares are held for more than 24 months, plus surcharge and cess, subject to treaty relief. A sale between a resident and a non-resident is reported in Form FC-TRS within 60 days." },
    ],
  },
  {
    id: "share-valuation",
    label: "Share Valuation for Foreign Investment in India",
    readMore: { href: "/blog/australia-to-india/share-valuation", label: "Read the full guide: Share Valuation for Foreign Investment in India" },
    items: [
      { n: 245, id: "who-can-issue-the-valuation-certificate", q: "Who can issue the valuation certificate?", a: "An eligible professional as defined in the FEMA rules, such as a Chartered Accountant or a merchant banker, depending on the transaction." },
      { n: 246, id: "is-a-valuation-needed-for-a-wholly-owned-subsidiary-at-incor", q: "Is a valuation needed for a wholly owned subsidiary at incorporation?", a: "A valuation is needed for a wholly owned subsidiary at incorporation for shares issued to the foreign parent, because the pricing must comply with the valuation rules and the filing is supported by a certificate." },
      { n: 247, id: "can-shares-be-issued-at-a-premium", q: "Can shares be issued at a premium?", a: "Shares can be issued at a premium in India. The price cannot be below fair value, but it can be higher." },
      { n: 248, id: "how-long-is-a-valuation-valid", q: "How long is a valuation valid?", a: "There is no single validity that fits every case, so obtain one close to the transaction date." },
      { n: 249, id: "how-old-can-a-valuation-certificate-be-for-fema-filings", q: "How old can a valuation certificate be for FEMA filings?", a: "A valuation certificate for FEMA filings should not be more than 90 days old at the time of the transaction or filing. It is issued by a Chartered Accountant or a SEBI-registered merchant banker." },
    ],
  },
  {
    id: "subsidiary-vs-branch-vs-liaison-office-vs-llp",
    label: "Subsidiary vs Branch vs Liaison Office vs LLP in India",
    readMore: { href: "/blog/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp", label: "Read the full guide: Subsidiary vs Branch vs Liaison Office vs LLP in India" },
    items: [
      { n: 250, id: "which-structure-do-most-australian-companies-choose", q: "Which structure do most Australian companies choose?", a: "A wholly owned subsidiary incorporated as a private limited company, because it is a separate entity with limited liability that can carry on full business." },
      { n: 251, id: "what-is-the-tax-rate-for-a-branch-office-in-india", q: "What is the tax rate for a branch office in India?", a: "A branch office of an Australian company is taxed as a foreign company at 35% on its India profits, plus a 2% surcharge where income is between ₹1 crore and ₹10 crore or 5% above ₹10 crore, plus 4% cess, which gives up to 38.22%. After-tax profits can generally be remitted to the head office without a further layer of Indian tax." },
      { n: 252, id: "what-is-the-tax-rate-for-an-llp-in-india", q: "What is the tax rate for an LLP in India?", a: "An LLP in India is taxed at 30%, plus a 12% surcharge where income exceeds ₹1 crore and 4% cess, which gives 34.944%. An Alternate Minimum Tax of 18.5% of adjusted total income applies where it is higher than the normal tax." },
      { n: 253, id: "does-a-liaison-office-pay-tax-in-india", q: "Does a liaison office pay tax in India?", a: "A liaison office does not pay income tax on business profits because it cannot earn income or carry on commercial activity in India. It still needs a PAN and must file an Annual Activity Certificate from a Chartered Accountant, and commercial activity could create a permanent establishment and tax exposure." },
      { n: 254, id: "what-are-the-eligibility-requirements-for-a-liaison-office-o", q: "What are the eligibility requirements for a liaison office or branch office in India?", a: "An Australian company needs a net worth of at least USD 50,000 and a profit-making record in the preceding three financial years to open a liaison office, and a net worth of at least USD 100,000 and a profit-making record in the preceding five financial years to open a branch office. Both need RBI approval through an authorised dealer bank." },
    ],
  },
  {
    id: "tax-notices-and-litigation",
    label: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary",
    readMore: { href: "/blog/australia-to-india/tax-notices-and-litigation", label: "Read the full guide: Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary" },
    items: [
      { n: 255, id: "what-should-be-done-first-on-getting-a-tax-notice", q: "What should be done first on getting a tax notice?", a: "On getting a tax notice, the deadline should be noted, the notice sent to the tax adviser the same day and the supporting records collected." },
      { n: 256, id: "can-a-transfer-pricing-order-be-appealed", q: "Can a transfer pricing order be appealed?", a: "A transfer pricing order can be appealed through the Dispute Resolution Panel route or the first appeal, followed by the tribunal." },
      { n: 257, id: "what-is-the-mutual-agreement-procedure", q: "What is the Mutual Agreement Procedure?", a: "A treaty process (Article 25 of the India-Australia treaty) in which the Indian and Australian tax authorities resolve a double taxation case. The case must be presented within three years of the first notification of the action." },
      { n: 258, id: "is-a-gst-notice-handled-differently", q: "Is a GST notice handled differently?", a: "A GST notice is handled differently from an income tax notice, because GST has its own portal, forms and appeal path." },
      { n: 259, id: "do-notices-come-to-the-australian-parent", q: "Do notices come to the Australian parent?", a: "Tax notices are issued to the Indian company, not to the Australian parent. The parent should be kept informed of anything significant." },
      { n: 260, id: "what-is-the-deadline-to-appeal-an-income-tax-order-in-india", q: "What is the deadline to appeal an income tax order in India?", a: "An appeal to the Commissioner (Appeals) is generally due within 30 days of the order, objections to the Dispute Resolution Panel against a transfer pricing draft assessment order are due within 30 days of receiving it, and an appeal to the Income Tax Appellate Tribunal is generally due within 60 days." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing in India for Australian-Owned Subsidiaries",
    readMore: { href: "/blog/australia-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing in India for Australian-Owned Subsidiaries" },
    items: [
      { n: 261, id: "what-is-transfer-pricing-in-simple-terms", q: "What is transfer pricing in simple terms?", a: "Transfer pricing is the price charged between related companies. For an Australian parent and its Indian subsidiary, that price must be one that independent parties would have agreed." },
      { n: 262, id: "does-a-small-subsidiary-need-transfer-pricing-documentation", q: "Does a small subsidiary need transfer pricing documentation?", a: "A small subsidiary needs transfer pricing compliance for any international transaction with an associated enterprise, which must be at arm's length. Documentation and the accountant's report depend on prescribed thresholds, which should be confirmed for the transaction values." },
      { n: 263, id: "which-form-reports-transfer-pricing-transactions", q: "Which form reports transfer pricing transactions?", a: "Form 48 (previously Form 3CEB under the 1961 Act), certified by a Chartered Accountant." },
      { n: 264, id: "can-the-price-be-agreed-with-the-tax-authority-in-advance", q: "Can the price be agreed with the tax authority in advance?", a: "The price can be agreed in advance through an Advance Pricing Agreement, which gives certainty for several years but takes time to negotiate." },
      { n: 265, id: "can-a-transfer-pricing-adjustment-cause-double-taxation", q: "Can a transfer pricing adjustment cause double taxation?", a: "A transfer pricing adjustment can cause double taxation. The Mutual Agreement Procedure under the India-Australia treaty exists to resolve it." },
      { n: 266, id: "what-are-the-transfer-pricing-documentation-thresholds-in-in", q: "What are the transfer pricing documentation thresholds in India?", a: "Transfer pricing documentation must be maintained in India where international transactions together exceed ₹1 crore, and the accountant's report in Form 48 (previously Form 3CEB) is filed for any international transaction. A master file is needed where group revenue exceeds ₹500 crore and international transactions exceed ₹50 crore, and country-by-country reporting applies at consolidated group revenue of ₹6,400 crore or more." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function AustraliaToIndiaFaqPage() {
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
        headline="266 Questions About Setting Up and Running a Subsidiary in India"
        description="266 plain answers for Australian companies: incorporation, FEMA, tax, the India-Australia treaty, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/blog/australia-to-india" },
          { label: "266 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for Australian companies"
        title="266 Questions About Setting Up and Running a Subsidiary in India"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          These are the questions Australian companies ask, in the order they usually arise: from deciding on
          India, through incorporation, funding, hiring, tax and compliance, to repatriating funds, growing,
          selling, and closing the subsidiary. Each answer is short; the{" "}
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
          explains the process in depth.
        </GuideAnswerBox>

        <p className="text-gray-600 leading-relaxed mb-8">
          Indian tax law changed on 1 April 2026: the Income-tax Act, 2025 and Income-tax Rules, 2026 replace
          the 1961 Act. Where a form or section has a new name, we give the new name with the earlier one in
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
          <Link href="/blog/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 15 October 2026. General information only, not legal or tax advice. Indian and Australian
          rules change often; confirm current requirements before acting.
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
