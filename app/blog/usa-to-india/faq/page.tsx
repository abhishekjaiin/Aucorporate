import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/faq"
const HUB_URL = "https://www.theaucorp.com/blog/usa-to-india"

const toc = [
  { id: "before-you-start", label: "Before you start: deciding on India" },
  { id: "structure-and-control", label: "Structure, ownership and control" },
  { id: "incorporation-and-documents", label: "Incorporation and documents" },
  { id: "funding-and-fema", label: "Funding, FEMA and RBI reporting" },
  { id: "banking-and-hiring", label: "Banking, registrations and hiring" },
  { id: "tax-and-transfer-pricing", label: "Tax, GST and transfer pricing" },
  { id: "compliance-and-audit", label: "Compliance, audit and reporting" },
  { id: "repatriation", label: "Repatriating funds to the US" },
  { id: "growth-esops-and-ma", label: "Growth: capital increases, ESOPs and M&A" },
  { id: "disputes-closure-and-exit", label: "Disputes, closure and exit" },
]

type FaqItem = { n: number; q: string; a: string }
type FaqGroup = { id: string; label: string; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "before-you-start",
    label: "Before you start: deciding on India",
    items: [
      { n: 1, q: "Why do US companies set up subsidiaries in India?", a: "Common reasons are access to a large pool of engineering, finance and support talent, lower operating costs, round-the-clock coverage across time zones, and the Indian market itself. Many groups build a global capability center that works as an extension of the US team under their own control." },
      { n: 2, q: "What is a Global Capability Center (GCC)?", a: "A GCC is a captive center that a foreign parent owns in India to deliver engineering, analytics, finance, HR or support work for the group. It is usually a wholly owned subsidiary that charges the parent for its services at arm's-length prices." },
      { n: 3, q: "Should we use a subsidiary, an Employer of Record or an outsourcing vendor?", a: "Use an Employer of Record to hire quickly without an entity, an outsourcing vendor to buy a service without managing people, and a subsidiary when you want direct control, a larger team or long-term ownership of the operation. Many companies start with an EOR and convert to a subsidiary later." },
      { n: 4, q: "What should we decide before starting incorporation?", a: "Decide the business activity in India, which group entity will hold the shares, how much you will fund, who will be the directors (including one resident in India), the registered office address and the first hires. Having these ready avoids rework when forms are filed." },
      { n: 5, q: "Do we need our US board's approval first?", a: "Usually yes. The US parent normally passes a board resolution approving the investment, naming the authorized signatory and directors, and authorizing documents to be signed for India. Check your charter, shareholder agreements and any investor consent rights before the resolution is drafted." },
      { n: 6, q: "How long does it take to set up a subsidiary in India?", a: "Typically 4 to 6 weeks from receipt of complete documents. The MCA incorporation is usually the shortest step, and the main variable is how quickly the apostilled US documents are ready. No travel to India is required." },
      { n: 7, q: "Do we have to travel to India?", a: "No. Incorporation can be completed online using apostilled documents and digital signatures. Banks set their own KYC rules, so we confirm the bank's requirements early and arrange the verification method with you." },
      { n: 8, q: "Can a US LLC set up a subsidiary in India?", a: "Yes. A US LLC can be the shareholder of an Indian company, with its formation documents and authorizations apostilled. The LLC's US tax classification (disregarded entity, partnership or corporation) affects US reporting and treaty access, so confirm it with your US tax adviser before choosing the holding entity." },
      { n: 9, q: "How much does it cost to set up an Indian subsidiary?", a: "AU Corporate's indicative setup fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about USD 10,300). Annual running costs for accounting, audit, tax, payroll and filings are additional and depend on your scope. Contact us for a costing tailored to your plan." },
      { n: 10, q: "Which sectors are restricted for foreign investment?", a: "Most services and technology sectors allow 100% foreign ownership under the automatic route. A few activities are prohibited, and some sectors have ownership caps, conditions or government approval requirements. Check your exact activity against the FDI Policy before you commit." },
    ],
  },
  {
    id: "structure-and-control",
    label: "Structure, ownership and control",
    items: [
      { n: 11, q: "What is a wholly owned subsidiary?", a: "It is an Indian company whose shares are 100% held by the foreign parent, directly or through group entities. It is a separate legal entity with its own tax registrations, bank account and employees, and the parent's liability is generally limited to its investment." },
      { n: 12, q: "Can a US company own 100% of an Indian subsidiary?", a: "Yes, in most sectors. India permits 100% foreign ownership under the automatic route, which needs no prior government approval. A few sectors have ownership caps, conditions or an approval requirement, so the answer depends on your business activity. We check the sector position before you commit to a structure." },
      { n: 13, q: "What is the difference between the automatic route and the government route?", a: "Under the automatic route, the investor needs no prior government approval and only reports the investment to the RBI afterward. Under the government route, approval from the relevant ministry must be obtained first through the Foreign Investment Facilitation Portal." },
      { n: 14, q: "Why does a private company need two shareholders, and how does a wholly owned subsidiary meet this?", a: "A private limited company must have at least two members. In a wholly owned subsidiary, the second share is usually held by a nominee or another group entity on behalf of the parent, and the beneficial ownership is declared as the Companies Act requires." },
      { n: 15, q: "What is the difference between a private and a public limited company?", a: "A private company restricts the transfer of its shares, needs at least two directors and two members, and has lighter compliance. A public company needs at least three directors and seven members and faces more compliance. Most wholly owned subsidiaries use the private form." },
      { n: 16, q: "Who controls the Indian subsidiary: the board or the US parent?", a: "The board of directors manages the company, and the parent controls the board by appointing and removing directors as its shareholder. Matters that need parent approval can be written into the Articles or an intercompany agreement. Directors still owe legal duties to the Indian company." },
      { n: 17, q: "Can US executives be directors of the Indian subsidiary?", a: "Yes. Foreign nationals can be directors, subject to obtaining a digital signature and a director identification number. At least one director must be a resident of India. Directors carry statutory duties and liabilities, so choose them with that in mind." },
      { n: 18, q: "Does the Indian subsidiary need a director who lives in India?", a: "Yes. Every company in India must have at least one director who has stayed in India for 182 days or more in the financial year. A private limited company also needs at least two directors in total. Directors can be foreign nationals, but at least one must meet the residency test." },
      { n: 19, q: "Does the company need a company secretary?", a: "Smaller private companies do not need a whole-time company secretary. One becomes mandatory above a paid-up capital threshold, which you should confirm with your adviser. A practicing professional is still needed for certain filings and certificates, such as those for RBI reporting." },
      { n: 20, q: "Can we hold the Indian subsidiary through a holding company in another country?", a: "Yes, many groups hold through a regional holding company, but tax residence, treaty access, substance and anti-avoidance rules need review. The choice also affects how dividends and exit gains are taxed, so decide it before capital goes in, not after." },
    ],
  },
  {
    id: "incorporation-and-documents",
    label: "Incorporation and documents",
    items: [
      { n: 21, q: "What are the steps to incorporate an Indian subsidiary?", a: "Confirm FDI eligibility, prepare apostilled US documents, obtain digital signatures, file SPICe+ with the MCA, open the bank account, transfer the funds for share capital, allot shares and report to the RBI, then begin operations. The complete guide explains each step." },
      { n: 22, q: "What documents does the US parent need to provide?", a: "Typically the certificate of incorporation and good standing, a board resolution, identity and address proofs of the signatory and directors, and the parent's charter documents. Foreign documents are notarized and apostilled. We share a checklist tailored to your parent's entity type." },
      { n: 23, q: "What is an apostille and how do we get one?", a: "An apostille is a certificate under the Hague Convention that makes a US public document valid in India. State-issued documents are apostilled by the Secretary of State, and federal documents by the US Department of State. Notarized documents are apostilled by the Secretary of State of the notary's state." },
      { n: 24, q: "Can documents be notarized and apostilled electronically?", a: "Some US states allow remote online notarization and electronic apostilles, but acceptance of the electronic versions varies. We tell you early which format the Indian filing will accept so you avoid repeating the process." },
      { n: 25, q: "What is a digital signature certificate and how does a foreign director get one?", a: "A digital signature certificate (DSC) lets a director sign MCA filings electronically. Foreign directors obtain one using their passport and address proof, usually with attestation or apostille and a verification step. We coordinate the process remotely." },
      { n: 26, q: "What is SPICe+?", a: "SPICe+ is the MCA's single online form for incorporation. It carries the Memorandum and Articles of Association and can also apply for PAN, TAN, GST, EPFO and ESIC registrations and a bank account, replacing several separate forms." },
      { n: 27, q: "How is the company name chosen and approved?", a: "You propose names on the MCA portal, which approves one if it is not identical or too similar to an existing company or trademark and follows the naming rules. Approval is time-bound, so we file the incorporation form soon after the name is cleared." },
      { n: 28, q: "What are the Memorandum and Articles of Association?", a: "The Memorandum states the company's name, objects, registered office and capital. The Articles set the internal rules, such as board powers, share transfers and parent approval rights. We tailor them so that parent controls are built in." },
      { n: 29, q: "What kind of address can be the registered office?", a: "Any premises in India that you own or lease, with proof such as a rent agreement and a utility bill. Virtual and shared offices can work if they meet MCA and GST address requirements. The state of the address also affects stamp duty and registrations." },
      { n: 30, q: "What do we receive when the company is incorporated?", a: "The Certificate of Incorporation with the Corporate Identification Number (CIN), the company's PAN and TAN, and the filed Memorandum and Articles. The bank account, share capital transfer and RBI reporting follow." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding, FEMA and RBI reporting",
    items: [
      { n: 31, q: "How can the US parent fund the Indian subsidiary?", a: "Through equity shares, compulsorily convertible preference shares or debentures, or an external commercial borrowing (a loan). Equity is the most common because it is simple to report and carries no repayment obligation. Each route has its own pricing, tax and reporting rules." },
      { n: 32, q: "Is there a minimum capital requirement?", a: "There is no statutory minimum for a private limited company. The practical amount depends on your first-year expenses, activity and the bank's expectations. Regulated sectors can have their own minimum capital rules." },
      { n: 33, q: "How much capital should we put in?", a: "Enough to cover the first year's expenses and set-up costs, with room for growth. Too little strains working capital, and funding mostly by loan can raise transfer pricing and interest-cost issues. We size the capital against your business plan." },
      { n: 34, q: "What is Form FC-GPR and when is it due?", a: "Form FC-GPR is the report an Indian company files with the RBI after issuing shares to a foreign investor. It must be filed within 30 days of the share allotment through the RBI's FIRMS portal, with supporting valuation and company secretary certificates. Late filing attracts a late submission fee or compounding." },
      { n: 35, q: "What is the 60-day rule for allotting shares?", a: "The company must allot shares within 60 days of receiving the foreign investment. If it does not, the money must be refunded to the investor within the prescribed period unless approval to retain it is obtained. So allot promptly after the funds arrive." },
      { n: 36, q: "What is a valuation certificate and when is it required?", a: "Shares issued to a non-resident cannot be priced below fair value. A chartered accountant or other eligible professional certifies the value using an internationally accepted method. It supports the FC-GPR filing and later share issues and transfers." },
      { n: 37, q: "Can the parent lend money instead of investing equity?", a: "Yes, through an external commercial borrowing (ECB), which must meet conditions on eligible lender, minimum maturity, interest ceilings and end use, and be registered with the RBI through the bank. Interest payments attract Withholding Tax and transfer pricing scrutiny." },
      { n: 38, q: "What are CCPS and CCDs, and why use them?", a: "Compulsorily convertible preference shares and debentures must convert into equity, so they are treated as equity under FDI rules. They suit staged funding or investor rights, but the conversion price or formula must be fixed upfront and comply with pricing rules." },
      { n: 39, q: "Can we send money before the company is incorporated?", a: "No. Foreign investment can only be received by an existing company. Funds sent early may have to be returned and can create a reporting problem, so wait until the bank account is open." },
      { n: 40, q: "What is the FIRMS portal?", a: "It is the RBI's Foreign Investment Reporting and Management System, where Indian companies file foreign investment reports such as FC-GPR through the Single Master Form. The company needs portal access and supporting certificates from a company secretary or chartered accountant." },
    ],
  },
  {
    id: "banking-and-hiring",
    label: "Banking, registrations and hiring",
    items: [
      { n: 41, q: "How do we open the bank account?", a: "Once the company is incorporated, an authorized dealer bank opens the account using the company's documents and the directors' and parent's KYC. Choose a bank that can receive foreign inward remittances and issue the remittance certificate needed for reporting." },
      { n: 42, q: "What registrations does the company need after incorporation?", a: "Depending on the business: GST, provident fund, ESI, professional tax, state shops and establishment registration, and an import-export code if you trade goods. Some can be applied for through SPICe+, and others follow once you hire or start billing." },
      { n: 43, q: "When does the subsidiary need to register for GST?", a: "When turnover crosses the threshold, when it makes taxable supplies that require registration, or voluntarily. Companies exporting services to a US parent often register early so they can claim input tax credit and refunds under the zero-rated export route." },
      { n: 44, q: "Can we hire before incorporation is complete?", a: "Not directly. Until the company exists it cannot employ anyone, so use an Employer of Record to hire in the meantime. After incorporation, complete payroll registrations before the first employees start." },
      { n: 45, q: "What is an Employer of Record and how does it work?", a: "An EOR is the legal employer of your India team. It issues the employment contracts, runs payroll, pays statutory dues and handles compliance, while you direct the day-to-day work. You pay a service fee on top of the employee cost." },
      { n: 46, q: "Can we move EOR employees into our subsidiary later?", a: "Yes, with planning. Employees must agree to the transfer, their service history and benefits such as gratuity and provident fund should carry over, and contracts and notice periods need to be handled. We plan the timing so that there is no gap in employment." },
      { n: 47, q: "What statutory benefits apply to employees in India?", a: "Typically provident fund, ESI for eligible wages, gratuity after the qualifying service period, bonus where applicable, professional tax in some states, and leave rules. India's labour codes are consolidating these, so confirm the current position for your state and headcount." },
      { n: 48, q: "What are the employer's payroll obligations?", a: "Pay salaries, deduct and deposit Withholding Tax on salaries, contribute to provident fund and ESI, issue payslips and file the periodic returns. Salary structures should be designed to be both tax-efficient and compliant." },
      { n: 49, q: "Can we send US employees to work in India?", a: "Yes, with the right visa and registrations. Taxes, social security and permanent establishment risk all need planning. India and the US do not have a social security agreement, so foreign workers can face provident fund contributions in India alongside US contributions." },
      { n: 50, q: "What visa does a US executive need?", a: "A business visa suits short meetings, but working in India needs an employment visa, which typically has a minimum salary condition. Longer stays require registration with the Foreigners Regional Registration Office. We handle visas, housing and local registrations for expats." },
    ],
  },
  {
    id: "tax-and-transfer-pricing",
    label: "Tax, GST and transfer pricing",
    items: [
      { n: 51, q: "How is an Indian subsidiary taxed?", a: "As an Indian company, on its income at the corporate tax rates under the Income-tax Act, 2025 (previously the Income-tax Act, 1961), with surcharge and cess where applicable. The Act applies from 1 April 2026. The rate depends on the tax regime the company opts for." },
      { n: 52, q: "What is transfer pricing and why does it matter?", a: "Transfer pricing requires transactions between related parties, such as the Indian subsidiary and the US parent, to be priced as if between independent parties (the arm's length principle, Section 161 of the Income-tax Act, 2025, previously Section 92). Tax officers review it closely, so agreements and benchmarking should exist from day one." },
      { n: 53, q: "What is Form 48 (previously Form 3CEB)?", a: "It is the chartered accountant's report on a company's international transactions with associated enterprises (Section 172 of the Income-tax Act, 2025, previously Section 92E). Form 48 applies from tax year 2026-27. Earlier years continue to use Form 3CEB under the Income-tax Act, 1961." },
      { n: 54, q: "Which intercompany transactions must be at arm's length?", a: "Service fees, royalties, cost sharing, loans and interest, guarantees, reimbursements, and the purchase or sale of goods or assets between the subsidiary and any group company abroad. Each needs a written agreement and a pricing method you can defend." },
      { n: 55, q: "How is a captive services subsidiary usually priced?", a: "Commonly on a cost-plus basis, where the parent pays the subsidiary its costs plus a margin set by benchmarking against comparable companies. The margin is tested each year. Safe harbour rules, which prescribe accepted margins for some activities, may offer an alternative." },
      { n: 56, q: "Does an Indian subsidiary create US tax obligations for the parent?", a: "It can. A US company that owns a foreign subsidiary may have US reporting such as Form 5471, and its income may be affected by US international tax rules. These depend on your structure, so confirm the position with your US tax adviser. Our India team coordinates with them." },
      { n: 57, q: "What is permanent establishment risk?", a: "A permanent establishment (PE) is a taxable presence of a foreign company in India. It can arise from a fixed place of business, dependent agents who conclude contracts, or staff providing services in India for long enough. A PE exposes the US parent's profits to Indian tax." },
      { n: 58, q: "What is the India-US tax treaty (DTAA)?", a: "It is an agreement that avoids double taxation between the two countries. It reduces withholding rates on dividends, interest, royalties and fees, and defines when a PE exists. To claim its benefits you need a tax residency certificate and treaty details in Form 41 (previously Form 10F)." },
      { n: 59, q: "What is a tax residency certificate and Form 41?", a: "A tax residency certificate shows that the US parent is a US tax resident, and the IRS issues it. Form 41 (previously Form 10F) is the electronic statement of details that the foreign payee gives to claim treaty benefits. Both should be ready before the first payment." },
      { n: 60, q: "How does GST apply to services the subsidiary provides to the US parent?", a: "If the conditions are met, such as the recipient being outside India and the payment arriving in foreign exchange, the services are zero-rated exports. You can supply under a letter of undertaking without paying GST and claim refunds of related input credit. Intermediary services are treated differently." },
    ],
  },
  {
    id: "compliance-and-audit",
    label: "Compliance, audit and reporting",
    items: [
      { n: 61, q: "What annual compliance does the subsidiary have?", a: "Statutory audit, an AGM, filing financial statements and the annual return with the registrar, income tax return and advance tax, GST and Withholding Tax filings, payroll returns, the FLA return to the RBI, and transfer pricing reporting where applicable." },
      { n: 62, q: "Does the subsidiary need a statutory audit?", a: "Yes. Every company must have its accounts audited by a chartered accountant appointed as statutory auditor, regardless of turnover. The audited financial statements are approved at the AGM and filed with the registrar." },
      { n: 63, q: "When must the first auditor be appointed?", a: "The board appoints the first auditor within 30 days of incorporation, and the appointment is notified to the registrar. If the board does not, shareholders must appoint one at a general meeting within the next 90 days." },
      { n: 64, q: "What are AOC-4 and MGT-7?", a: "AOC-4 is the form for filing the company's financial statements with the registrar, and MGT-7 is the annual return of shareholders, directors and other details. Both are due after the AGM, and late filing attracts additional fees per day." },
      { n: 65, q: "What are the AGM requirements?", a: "The first AGM must be held within nine months of the first financial year-end and later ones within six months of each year-end. The AGM approves the audited accounts and other annual business. Shorter notice is possible with member consent." },
      { n: 66, q: "What is Form INC-20A?", a: "It is the declaration of commencement of business, filed within 180 days of incorporation, confirming that shareholders have paid for their shares. Missing it brings penalties and can lead to the company being struck off." },
      { n: 67, q: "What is the FLA return?", a: "The Annual Return on Foreign Liabilities and Assets is filed online with the RBI by 15 July each year by Indian companies that have received foreign investment or hold overseas assets. It reports the company's foreign investment holdings and related details." },
      { n: 68, q: "What are Withholding Tax returns and when are they due?", a: "Withholding Tax deducted on salaries and payments is deposited by the 7th of the following month. Quarterly statements are filed in Form 138 for salaries, Form 140 for resident payments and Form 144 for non-resident payments (previously Forms 24Q, 26Q and 27Q)." },
      { n: 69, q: "What is ICOFR and does the India subsidiary need it?", a: "ICOFR is internal control over financial reporting, which a US-listed parent must assess under the Sarbanes-Oxley Act. Material subsidiaries are often brought into scope, so the Indian entity may need documented controls and testing. Indian company law also has its own internal financial controls reporting by the auditor." },
      { n: 70, q: "How do we report the subsidiary's results to the US parent?", a: "The Indian books follow Indian accounting standards for statutory purposes, while the parent usually needs monthly reporting packages mapped to US GAAP, with reconciliations. We provide monthly MIS and parent-format reporting that fits your close calendar." },
    ],
  },
  {
    id: "repatriation",
    label: "Repatriating funds to the US",
    items: [
      { n: 71, q: "How can profits be repatriated from India to the US?", a: "Common routes are dividends, service fees, royalties and loan repayments. Each involves Indian Withholding Tax, which the India-US tax treaty can reduce, and fees and royalties must meet transfer pricing rules. Remittances abroad usually need Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
      { n: 72, q: "How are dividends paid and taxed?", a: "The board recommends and shareholders approve a dividend out of distributable profits. Withholding Tax applies on payment to the US parent under the Income-tax Act, 2025 (previously the Income-tax Act, 1961), with possible treaty relief. The parent may claim a US foreign tax credit." },
      { n: 73, q: "What documents are needed to remit dividends?", a: "Board and shareholder approvals, the audited accounts showing distributable profits, a Withholding Tax computation with treaty documents (tax residency certificate and Form 41, previously Form 10F), and Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
      { n: 74, q: "What is Form 145 (previously Form 15CA)?", a: "It is the online declaration the remitting party files before paying a non-resident, giving details of the payment and its tax position. Banks need it to process most foreign remittances. It applies to payments from 1 April 2026 under the Income-tax Rules, 2026." },
      { n: 75, q: "What is Form 146 (previously Form 15CB)?", a: "It is a chartered accountant's certificate on the nature of a foreign payment, its taxability and the Withholding Tax rate, including treaty relief. It is required for taxable payments above the prescribed limit, and each certificate carries a UDIN from the ICAI portal." },
      { n: 76, q: "How are service fees and management charges paid to the US parent?", a: "Under a written agreement, backed by evidence that the services were received and benefit the Indian company. They must be at arm's length, bear Withholding Tax (Section 393 of the Income-tax Act, 2025, previously Section 195) and GST under reverse charge, with Forms 145 and 146 filed." },
      { n: 77, q: "How are royalties and software license fees treated?", a: "Royalty payments to the parent attract Withholding Tax at the applicable domestic or treaty rate, transfer pricing review and GST on reverse charge. The agreement should define the licensed IP, the rate and the basis for it, and the payment needs the same documents as other foreign remittances." },
      { n: 78, q: "Can an intercompany loan be repaid to the US parent?", a: "Yes, under the ECB terms. Principal and interest are paid through the bank, interest attracts Withholding Tax subject to treaty relief, and the repayment is reported to the RBI. Repaying outside the approved terms can be a FEMA violation, so follow the schedule." },
      { n: 79, q: "Why do we need a contract with the US parent?", a: "An intercompany agreement is the foundation for deductions, transfer pricing, GST, FEMA compliance and any later tax dispute. It should cover the scope of services, pricing, IP ownership, payment terms, confidentiality and termination, be signed before services begin, and match what actually happens." },
      { n: 80, q: "What Withholding Tax rate applies to payments to the US parent?", a: "It depends on the type of payment and on whether the India-US tax treaty gives a lower rate. Domestic rules for payments to non-residents sit in Section 393 of the Income-tax Act, 2025 (previously Section 195), and the treaty rate applies if its conditions are met. We work out the rate for each payment type." },
    ],
  },
  {
    id: "growth-esops-and-ma",
    label: "Growth: capital increases, ESOPs and M&A",
    items: [
      { n: 81, q: "How do we increase the share capital of the subsidiary?", a: "Increase the authorized capital if needed (with stamp duty), pass board and shareholder resolutions, obtain the valuation, receive the funds, allot the shares, file the return of allotment with the registrar, and report to the RBI through FC-GPR within 30 days of allotment." },
      { n: 82, q: "Do we need a valuation for every new share issue?", a: "For issues to a non-resident, yes: the price cannot be below fair value, certified by an eligible professional. A registered valuer's report may also be needed under company law for private placements. Always value before you issue, not after." },
      { n: 83, q: "Can an existing loan be converted into equity?", a: "Conversion of an external commercial borrowing into equity is permitted subject to FEMA conditions on pricing, eligibility and reporting. The conversion has tax and valuation consequences, so plan the terms before you convert." },
      { n: 84, q: "How do ESOPs for Indian employees of a US parent work?", a: "The US parent grants options or restricted stock units to employees of the Indian subsidiary under its plan. FEMA overseas investment rules and reporting apply to the employees, and tax arises on exercise or vesting as salary, with Withholding Tax, and again as capital gains on sale." },
      { n: 85, q: "Does the subsidiary reimburse the parent for ESOP costs?", a: "Often yes, through a cost recharge under an agreement. Deductibility, transfer pricing and Withholding Tax on these recharges are frequently disputed, so the arrangement should be documented carefully from the start." },
      { n: 86, q: "Can the Indian subsidiary issue its own ESOPs?", a: "Yes, under the Companies Act with a special resolution and a scheme setting out eligibility, vesting and exercise. A valuation is needed for pricing and tax, and FEMA conditions apply when employees or shareholders are non-residents." },
      { n: 87, q: "How do we sell the shares of the Indian subsidiary?", a: "Sale to an Indian resident follows FEMA pricing and reporting rules, and the seller pays capital gains tax subject to treaty relief. Sale to another non-resident has its own tax and reporting rules. Selling the US parent itself can also trigger Indian tax under the indirect transfer rules." },
      { n: 88, q: "What is a slump sale?", a: "A slump sale is the transfer of an undertaking or business as a going concern for a lump sum, without values assigned to individual assets and liabilities. The gain is taxed as capital gains on the net worth transferred, and the tax treatment depends on the holding period." },
      { n: 89, q: "How do mergers and demergers work in India?", a: "Mergers and demergers are carried out through a scheme approved by the National Company Law Tribunal. A fast-track route is available for mergers between a holding company and its wholly owned subsidiary. Cross-border mergers are permitted under FEMA rules and follow specific conditions." },
      { n: 90, q: "How does an acquisition of an Indian company by the US group work?", a: "Typically you conduct due diligence, value the target, follow FEMA pricing and reporting rules for the share purchase, check approvals such as competition filings above thresholds, and plan stamp duty and tax. The acquirer is often the Indian subsidiary or the US parent directly." },
    ],
  },
  {
    id: "disputes-closure-and-exit",
    label: "Disputes, closure and exit",
    items: [
      { n: 91, q: "What should we do if the tax department sends a notice?", a: "Do not ignore it, because notices have strict response deadlines. Share it with your adviser immediately so a reply is prepared with evidence. Most notices can be resolved at the first level, and unresolved matters go to appeals, where we represent you at each stage." },
      { n: 92, q: "What is a transfer pricing audit and how do we prepare?", a: "A Transfer Pricing Officer reviews whether intercompany transactions were at arm's length. Preparation means a current transfer pricing study, signed agreements, evidence of services and consistent filings in Form 48 (previously Form 3CEB). Good documentation is the best defense." },
      { n: 93, q: "What are the DRP and the ITAT?", a: "The Dispute Resolution Panel (DRP) hears objections to a draft assessment order and is available to foreign companies and transfer pricing cases. The Income Tax Appellate Tribunal (ITAT) is the main appellate forum on facts and law, with further appeals to the High Court." },
      { n: 94, q: "Can disputes with the parent or vendors go to arbitration?", a: "Yes, if the contract has an arbitration clause. Choose the seat, rules and governing law carefully. India and the US are both parties to the New York Convention, so a foreign arbitral award is generally enforceable in India, subject to the conditions in Indian law." },
      { n: 95, q: "What are MAP and APA?", a: "The Mutual Agreement Procedure lets the Indian and US tax authorities resolve double taxation under the treaty. An Advance Pricing Agreement fixes your transfer pricing method with the authority in advance for several years, giving certainty on large or recurring intercompany transactions." },
      { n: 96, q: "Can we sell or close the Indian subsidiary later?", a: "Yes. Options include selling the shares or the business, merging the subsidiary into another group company, or closing it through strike-off or voluntary liquidation. Each route has its own tax and RBI reporting steps, so plan the exit before you invest." },
      { n: 97, q: "How does striking off a company work?", a: "A company that has not carried on business for the previous two financial years can apply to the registrar for removal, after clearing its dues and filing pending returns. The registrar publishes a notice and, if there is no objection, removes the name from the register." },
      { n: 98, q: "How are residual funds sent to the US on closure?", a: "After liabilities and taxes are settled and accounts are finalized, the surplus is distributed to the parent through the bank with the closing certificates and remittance forms (Forms 145 and 146, previously Forms 15CA and 15CB). The closure is then reported to the RBI." },
      { n: 99, q: "Can we buy back shares or reduce capital to return funds?", a: "A buyback under the Companies Act is limited by size, timing and solvency conditions, and a capital reduction normally needs Tribunal approval. Tax rules for buybacks have changed recently, so check the tax cost for the parent before choosing between dividends, buyback and capital reduction." },
      { n: 100, q: "What happens if the subsidiary stops filing or misses deadlines?", a: "Late fees accrue daily, directors can be disqualified after continued non-filing, the registrar can strike the company off, and FEMA defaults need compounding with the RBI. Regularizing a lapsed company is possible but costs more than staying current, so we keep a compliance calendar." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function UsaToIndiaFaqPage() {
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
        headline="100 Questions About Setting Up and Running a Subsidiary in India"
        description="100 plain answers for US companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary."
        datePublished="2026-10-07"
        dateModified="2026-10-07"
        isPartOfUrl={HUB_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "100 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for US companies"
        title="100 Questions About Setting Up and Running a Subsidiary in India"
        updated="7 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          These are the questions US companies ask, in the order they usually arise: from deciding on India, through
          incorporation, funding, hiring, tax and compliance, to repatriating funds, growing, selling, and closing
          the subsidiary. Each answer is short; the{" "}
          <Link href="/blog/usa-to-india" className="font-semibold underline">
            complete guide
          </Link>{" "}
          explains the process in depth.
        </GuideAnswerBox>

        <p className="text-gray-600 leading-relaxed mb-8">
          Indian tax law changed on 1 April 2026: the Income-tax Act, 2025 and Income-tax Rules, 2026 replace the
          1961 Act. Where a form or section has a new name, we give the new name with the earlier one in brackets.
          General information only; confirm current requirements before acting.
        </p>

        <GuideTOC items={toc} />

        {faqGroups.map((group) => (
          <section key={group.id}>
            <h2 id={group.id} className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              {group.label}
            </h2>
            <div className="divide-y divide-gray-200">
              {group.items.map((item) => (
                <div key={item.n} id={`q${item.n}`} className="py-4">
                  <h3 className="font-bold text-gray-900 mb-1.5">
                    <span className="text-blue-800 font-semibold mr-1.5">{item.n}.</span>
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <GuideAuthorBio />
        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 October 2026. General information only, not legal or tax advice. Indian rules change often;
          confirm current requirements before acting.
        </p>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
