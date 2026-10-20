import type { GuideCountryKey, GuideTopic } from "@/lib/guides/countries"

/**
 * Country-specific points for each guide topic, rendered by
 * GuideCountryContext as a "What's different for <country> companies" box.
 *
 * The topic pages share India-side rules across countries, so these points
 * are what makes each country's version genuinely its own: the home-country
 * law, treaty, documents, calendar and working practice that change the
 * answer. Keep each point factual and specific to the country; generic India
 * rules belong in the page body, not here.
 */
export const COUNTRY_CONTEXT: Record<GuideCountryKey, Partial<Record<GuideTopic, string[]>>> = {
  usa: {
    "incorporation-process": [
      "US parents are usually a Delaware or other state corporation, or an LLC. An LLC parent provides its certificate of formation and operating agreement in place of a charter and bylaws.",
      "Each state's documents are apostilled by that state's Secretary of State, so a Delaware parent with directors notarizing in California may need apostilles from two states. Start the document chase first.",
      "India is between 9.5 and 13.5 hours ahead of the mainland US, depending on time zone and daylight saving, so book digital signature verification and bank KYC calls for the US morning.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "For US tax, an Indian private limited company is an eligible entity, so a US parent can elect to treat it as a corporation or a disregarded entity on Form 8832 (check-the-box). An Indian public limited company is a per se corporation and cannot elect.",
      "A branch or liaison office is part of the US company itself, so its Indian results flow straight into the US return, while an LLP's US classification needs its own review.",
      "The US does not share a land border with India, so Press Note 3's prior-approval rule does not apply to a US investor, unless a beneficial owner is from a land-border country.",
    ],
    "documents-and-apostille": [
      "State documents, such as the certificate of incorporation and good standing, are apostilled by the issuing state's Secretary of State. Federal documents are apostilled by the US Department of State.",
      "Notarized documents, such as board resolutions and passport copies, are apostilled by the Secretary of State of the state where the notary is commissioned, not where the company is formed.",
      "Order the certificate of good standing close to the filing date, because Indian authorities generally expect recent documents.",
    ],
    "resident-director": [
      "US executives rarely spend 182 days a year in India, so most US parents appoint an Indian employee or a trusted professional as the resident director.",
      "A US citizen who does meet the 182-day test can become tax resident in India and still remains taxable in the US on worldwide income, because the US taxes by citizenship.",
      "A US director needs a Director Identification Number and a Digital Signature Certificate, obtained with an apostilled passport and address proof.",
    ],
    "funding-fema-fc-gpr": [
      "The parent remits US dollars, and the Indian bank converts them to rupees and issues the foreign inward remittance certificate. Shares are priced in rupees, so allow an exchange-rate buffer when fixing the USD amount.",
      "Press Note 3 does not apply to US investors, so most sectors stay on the Automatic Route, unless a beneficial owner is from a country sharing a land border with India.",
      "Cash contributions to a foreign corporation above US thresholds can trigger US reporting such as Form 926. Your US CPA confirms the position.",
    ],
    "share-valuation": [
      "The FEMA floor is a rupee value. A US parent may also need a fair-value measure for US GAAP reporting, which is a separate exercise from the Indian valuation certificate.",
      "Fix the number of shares against the rupee amount actually credited, so that a USD exchange movement never takes the issue price below fair value.",
    ],
    "repatriating-profits": [
      "The India-US treaty caps Indian tax at 15% on dividends to a parent with at least 10% of the voting power (25% otherwise), 10% on bank interest and 15% on other interest, and 15% on royalties and fees for included services (10% for equipment royalties).",
      "A US corporate parent owning at least 10% can generally deduct the foreign-source part of dividends from its Indian subsidiary (Section 245A), but cannot claim a foreign tax credit for the Indian tax on them, so that tax is usually a final cost.",
      "Service fees and royalties are taxable US income for the parent, and the Indian withholding on them is generally creditable within US foreign tax credit limits.",
    ],
    "eor-vs-subsidiary": [
      "Indian business hours barely overlap with the US, so US teams often run Indian staff on shifted hours. Night work can need state shops-and-establishments permission, which your EOR or entity must handle.",
      "India has no at-will employment. Termination needs notice under the contract and the law, so US-style offer letters must be adapted for either route.",
      "If US managers direct an India team in a way that looks like the US company doing business in India, use the India-US treaty's 90-day service permanent establishment test as a check.",
    ],
    "transfer-pricing": [
      "The same transaction is tested on both sides: by India under its arm's length rules and by the IRS under Section 482 of the Internal Revenue Code, so align the method and margin in both files.",
      "India has signed bilateral Advance Pricing Agreements with the US, which can fix pricing for up to five future years with a roll-back to four earlier years.",
      "Most US groups close their year on 31 December and India on 31 March, so plan year-end true-ups across two reporting years.",
    ],
    "dtaa-pe-risk": [
      "Under the India-US treaty, services furnished in India through employees or other personnel create a permanent establishment if they continue for more than 90 days in any 12-month period.",
      "The US Tax Residency Certificate is IRS Form 6166. With Form 41 (previously Form 10F), it supports a claim to treaty rates on payments to the US parent.",
      "Technical fees are fees for included services only if they make technical knowledge or skills available, or are ancillary to a royalty. Other service fees are business profits, taxable in India only through a permanent establishment.",
    ],
    "compliance-calendar": [
      "Most US parents report on a calendar year, while the Indian subsidiary must close its statutory year on 31 March, so the January to March quarter falls in a different Indian year and needs a reporting bridge.",
      "US-side dates that depend on Indian numbers include Form 5471 with the parent's US return and the FBAR, due 15 April with an automatic extension to 15 October.",
      "Indian deadlines run on Indian Standard Time and Indian bank holidays, so set approval deadlines in the US a week ahead.",
    ],
    "audit-icofr": [
      "A US-listed parent's SOX 404 assessment can bring a material Indian subsidiary into scope, with control testing by the group auditor under PCAOB standards alongside the Indian statutory audit.",
      "The Indian statutory audit must be signed by an Indian Chartered Accountant. A US CPA cannot sign it, though an Indian member firm of the group auditor's network can act.",
      "The Indian books follow Indian GAAP or Ind AS, so US GAAP differences are usually adjusted in the group reporting pack.",
    ],
    "tax-notices-and-litigation": [
      "A transfer pricing adjustment on a US-related transaction can be taken to the Mutual Agreement Procedure under the India-US treaty, so that the IRS gives a matching adjustment and the profit is not taxed twice.",
      "India and the US have signed bilateral Advance Pricing Agreements, which can stop the same transfer pricing dispute recurring each year.",
      "Indian notices often allow 7 to 30 days for a reply, so agree in advance who in the US approves a response.",
    ],
    "contracts-and-arbitration": [
      "The US is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so a US court judgment cannot be executed directly in India and needs a fresh suit.",
      "The US is a New York Convention country notified by India, so an award from a US-seated arbitration can be enforced in India under Part II of the Arbitration and Conciliation Act, 1996.",
      "Agreements signed in the US and later brought into India attract Indian stamp duty, so plan where and how the intercompany agreement is executed.",
    ],
    esop: [
      "Indian employees of a US parent are taxed in India at exercise (for RSUs, at vesting), with USD values converted to rupees at the SBI telegraphic transfer buying rate.",
      "Indian residents who hold US shares must report them in Schedule FA of their Indian return, and US withholding on any dividends can be credited under the treaty.",
      "If the US parent recharges the plan cost to the Indian subsidiary, put a recharge agreement in place and price it at arm's length.",
    ],
    "restructuring-and-exit": [
      "The India-US treaty leaves capital gains to each country's domestic law, so a sale of the Indian subsidiary's shares by the US parent is taxable in India.",
      "A US buyer or seller may also need US tax steps, such as a check-the-box election or a Section 338(g) election, which should be coordinated before signing.",
      "A transfer of shares between the US parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
    ],
    "expat-visa": [
      "US citizens stay taxable in the US on worldwide income, so a US executive in India files in both countries and uses the foreign earned income exclusion (Form 2555) or foreign tax credits.",
      "There is no India-US social security agreement, so the executive can face Indian provident fund as an international worker as well as US Social Security.",
      "A US executive usually needs an Employment Visa, and a stay longer than 180 days requires FRRO registration within 14 days of arrival.",
    ],
    "global-vat": [
      "The US has no federal VAT and taxes sales at state level under economic nexus rules, so US companies are often registering for VAT or GST abroad for the first time.",
      "US software or digital services sold to Indian consumers are OIDAR supplies: the US company must register for Indian GST at 18% even without an Indian entity.",
      "EU sales to consumers are usually handled through the non-Union One Stop Shop, and the UK applies VAT from the first sale for non-established sellers.",
    ],
    "hiring-and-payroll": [
      "India has no at-will employment: termination follows the contract, notice and the labour codes, and gratuity becomes payable after five years of continuous service.",
      "Benefits that US employees expect have Indian equivalents: provident fund is mandatory for most employees, and health cover is usually group medical insurance.",
      "Teams working US hours need shift allowances and, for night work, state shops-and-establishments compliance, including transport and safety rules.",
    ],
    "common-mistakes": [
      "Using US-style at-will offer letters and termination practices for Indian employees.",
      "Sending a Delaware certificate without a recent, apostilled good standing certificate, which delays the incorporation filing.",
      "Paying the India team through US payroll or as US contractors, which can create permanent establishment and Indian payroll exposure.",
    ],
  },
  australia: {
    "incorporation-process": [
      "Australian parents are usually a Pty Ltd. Provide the ASIC company extract and constitution, and use the exact legal name and ACN on every Indian form.",
      "Apostilles are issued federally by DFAT, so there is one process for the whole country rather than a state-by-state one.",
      "India is 4.5 to 5.5 hours behind Sydney and Melbourne, depending on daylight saving, so filings and bank calls fit inside the Australian working afternoon.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "A branch is part of the Australian company. Its Indian profits may be non-assessable in Australia under the foreign branch profits rules (section 23AH, Income Tax Assessment Act 1936), subject to conditions.",
      "Australia does not share a land border with India, so Press Note 3's prior-approval rule does not apply to an Australian investor, unless a beneficial owner is from a land-border country.",
      "The India-Australia Economic Cooperation and Trade Agreement (in force since 29 December 2022) cuts tariffs on goods, but does not change the FDI or company law rules for choosing a structure.",
    ],
    "documents-and-apostille": [
      "DFAT issues apostilles for the whole country and must be able to verify the notary, so use a notary public whose signature DFAT holds.",
      "Order the ASIC company extract close to the filing date, because recent documents are usually expected.",
      "Australian directors' passports and address proofs are notarised and then apostilled by DFAT before they are used for digital signatures in India.",
    ],
    "resident-director": [
      "Australian executives rarely spend 182 days a year in India, so most Australian parents appoint an Indian employee or a trusted professional as the resident director.",
      "An Australian who meets the 182-day test can become tax resident in India while remaining Australian resident under the domicile test, so the treaty's tie-breaker rule in Article 4 decides where they are taxed.",
      "An Australian director needs a Director Identification Number and a Digital Signature Certificate, obtained with a DFAT-apostilled passport and address proof.",
    ],
    "funding-fema-fc-gpr": [
      "The parent remits Australian dollars (or US dollars), and the Indian bank converts them and issues the foreign inward remittance certificate. Shares are priced in rupees, so allow an exchange-rate buffer.",
      "Press Note 3 does not apply to Australian investors, so most sectors stay on the Automatic Route, unless a beneficial owner is from a country sharing a land border with India.",
      "If the subsidiary is funded by a loan from the parent, India limits interest deductions on debt from non-resident associated enterprises to 30% of EBITDA, and Australia's thin capitalisation rules apply to the parent's own debt.",
    ],
    "share-valuation": [
      "The FEMA floor is a rupee value. The Australian parent may also need a fair-value measure under Australian Accounting Standards, which is a separate exercise from the Indian valuation certificate.",
      "Fix the number of shares against the rupee amount actually credited, so that an AUD exchange movement never takes the issue price below fair value.",
    ],
    "repatriating-profits": [
      "The India-Australia treaty caps Indian tax at 15% on dividends, interest and royalties, and at 10% on equipment royalties.",
      "Dividends from a wholly owned Indian subsidiary are generally non-assessable non-exempt income for an Australian company with at least a 10% direct voting interest (section 768-5), so the Indian tax on them is a final cost.",
      "Service fees and royalties are assessable in Australia, and the Indian tax on them can generally be claimed as a foreign income tax offset.",
    ],
    "eor-vs-subsidiary": [
      "India's working day overlaps well with Australia's: Indian staff working standard hours cover most of the Australian afternoon without night shifts.",
      "Australian Fair Work rules do not apply to staff employed in India. Indian contracts follow the labour codes and state rules, whether the employer is an EOR or your own entity.",
      "If you second Australian staff to India instead of hiring locally, an ATO certificate of coverage under the India-Australia Social Security Agreement keeps them in superannuation and out of Indian provident fund.",
    ],
    "transfer-pricing": [
      "The same transaction is tested on both sides: by India under its arm's length rules and by the ATO under Division 815 of the Income Tax Assessment Act 1997, so align the method and margin in both files.",
      "Australia's 30 June year end and India's 31 March year end do not match, so plan year-end true-ups across two reporting years.",
      "Significant global entities (global income of A$1 billion or more) have extra ATO obligations, including country-by-country reporting.",
    ],
    "dtaa-pe-risk": [
      "Under the India-Australia treaty, services furnished in India by your personnel for more than 183 days in any 12-month period can create a permanent establishment.",
      "Claim treaty rates with an ATO certificate of residency as the Tax Residency Certificate, plus Form 41 (previously Form 10F).",
      "The treaty treats many technical service fees as royalties, taxable in India at up to 15% (10% for equipment).",
    ],
    "compliance-calendar": [
      "The Australian parent closes on 30 June and the Indian subsidiary on 31 March, so the Indian statutory year spans two Australian years and needs a reporting bridge.",
      "Australian-side filings that depend on Indian numbers include the International Dealings Schedule, lodged with the parent's company tax return.",
      "Do not use the Australian 30 June year end for Indian filing dates: every Indian deadline runs from 31 March.",
    ],
    "audit-icofr": [
      "An ASX-listed parent's CEO and CFO declaration under section 295A of the Corporations Act relies on the controls of material subsidiaries, including the Indian one.",
      "The group auditor directs component auditors under ASA 600, so the Indian statutory auditor may receive group audit instructions alongside the Indian audit.",
      "The Indian statutory audit must be signed by an Indian Chartered Accountant, whatever audit firm the Australian group uses.",
    ],
    "tax-notices-and-litigation": [
      "A transfer pricing adjustment on an Australian-related transaction can be taken to the Mutual Agreement Procedure under Article 25 of the India-Australia treaty, so that the ATO gives a matching adjustment.",
      "Keep the ATO-side Division 815 documentation consistent with the Indian file, because the competent authorities compare both in a MAP case.",
      "Indian notices often allow 7 to 30 days for a reply, so agree in advance who in Australia approves a response.",
    ],
    "contracts-and-arbitration": [
      "Australia is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so an Australian court judgment cannot be executed directly in India and needs a fresh suit.",
      "Arbitration is usually the better route. Australia is a New York Convention party; confirm the seat country is notified by India before relying on Part II of the Arbitration and Conciliation Act, 1996.",
      "Agreements signed in Australia and later brought into India attract Indian stamp duty, so plan where and how the intercompany agreement is executed.",
    ],
    esop: [
      "Indian employees of an Australian parent are taxed in India at exercise (for RSUs, at vesting), with AUD values converted to rupees at the SBI telegraphic transfer buying rate.",
      "Indian residents who hold Australian shares must report them in Schedule FA of their Indian return.",
      "Your Australian counsel should confirm the securities-law position for offering equity to employees in India, as the Corporations Act disclosure rules mainly cover offers made in Australia.",
    ],
    "restructuring-and-exit": [
      "A sale of the Indian subsidiary's shares by the Australian parent is generally taxable in India, so check the India-Australia treaty and Indian capital gains rules before pricing the deal.",
      "On the Australian side, the active foreign business asset reduction (Subdivision 768-G) can reduce or remove the capital gain on selling shares in an active foreign company.",
      "A transfer of shares between the Australian parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
    ],
    "expat-visa": [
      "An ATO certificate of coverage under the India-Australia Social Security Agreement keeps a seconded Australian in superannuation and out of Indian provident fund for up to five years.",
      "An Australian executive may stay Australian tax resident under the domicile test while working in India, so the Indian tax paid is claimed back through a foreign income tax offset.",
      "A stay longer than 180 days on an Employment Visa requires FRRO registration within 14 days of arrival.",
    ],
    "global-vat": [
      "Australian GST is 10%, and services exported to overseas customers are generally GST-free, so the question is mainly registration in the customers' countries.",
      "Australian software or digital services sold to Indian consumers are OIDAR supplies: the Australian company must register for Indian GST at 18% even without an Indian entity.",
      "New Zealand applies GST to remote services sold to its consumers, so Australian SaaS companies selling into New Zealand often register there too.",
    ],
    "hiring-and-payroll": [
      "Provident fund replaces superannuation for staff employed in India, and gratuity becomes payable after five years of continuous service.",
      "Australian awards and Fair Work standards do not apply: Indian employment terms follow the labour codes and state shops-and-establishments rules.",
      "India's working day overlaps with Australian afternoons, so most roles can work standard Indian hours without shift allowances.",
    ],
    "common-mistakes": [
      "Using the Australian 30 June year end for Indian filing dates.",
      "Sending an Australian employee to India without a certificate of coverage, and paying provident fund on full wages as well as superannuation.",
      "Assuming the India-Australia trade agreement relaxes FDI or company law rules: it mainly cuts tariffs on goods.",
    ],
  },
  uk: {
    "incorporation-process": [
      "The UK parent's papers come from Companies House: a certified certificate of incorporation, the articles and a current company profile or certificate of good standing.",
      "UK documents are notarised where needed and then apostilled by the FCDO Legalisation Office, one process for the whole UK, with e-apostilles available.",
      "India is 4.5 hours ahead of the UK in summer and 5.5 hours in winter, so most filings and bank calls fit inside a UK morning.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "Dividends from an Indian subsidiary usually fall within the UK distribution exemption (Part 9A, Corporation Tax Act 2009), which is one reason most UK groups choose a subsidiary.",
      "A branch is part of the UK company itself, so its Indian profits sit in the UK company's corporation tax return unless the company elects for the foreign branch exemption.",
      "The UK does not share a land border with India, so Press Note 3's prior-approval rule does not apply to a UK investor, unless a beneficial owner is from a land-border country.",
    ],
    "documents-and-apostille": [
      "Companies House documents and notarised papers are apostilled by the FCDO Legalisation Office, online for e-apostilles or by post for paper ones.",
      "Use the exact name and company number from the Companies House register on every Indian form.",
      "Allow for the notary appointment, Companies House copy times and the FCDO turnaround when you set the incorporation timetable.",
    ],
    "funding-fema-fc-gpr": [
      "The parent remits sterling (or another currency), and the Indian bank converts it and issues the foreign inward remittance certificate. Shares are priced in rupees, so allow an exchange-rate buffer.",
      "Press Note 3 does not apply to UK investors, so most sectors stay on the Automatic Route, unless a beneficial owner is from a country sharing a land border with India.",
    ],
    "repatriating-profits": [
      "The India-UK treaty caps Indian tax at 10% on dividends (15% only for certain property investment vehicles), 15% on interest (10% for banks), and 15% on royalties and technical fees (10% for equipment).",
      "Most dividends are exempt in the UK under the distribution exemption, so the Indian tax on them is generally a final cost rather than a credit.",
      "Claim treaty rates with an HMRC certificate of residence that covers the payment date, plus Form 41 (previously Form 10F).",
    ],
    "transfer-pricing": [
      "The same transaction is tested on both sides: by India under its arm's length rules and by HMRC under Part 4 of the Taxation (International and Other Provisions) Act 2010, so align the method and margin in both files.",
      "Most UK groups close their year on 31 March, like India, so the Indian and UK transfer pricing years usually line up.",
    ],
    "compliance-calendar": [
      "Most UK groups also close on 31 March, so the Indian audit, the UK consolidation and the Companies House and corporation tax dates can run as one timetable.",
      "A private UK company files its accounts at Companies House within 9 months of the year end, so a 31 March group needs the audited Indian accounts well before 31 December.",
    ],
    "contracts-and-arbitration": [
      "The UK is a reciprocating territory under Section 44A of the Code of Civil Procedure, so a money judgment of a UK superior court can be filed for execution in India, subject to the statutory exceptions.",
      "A London-seated arbitration, such as under the LCIA rules, produces an award that can be enforced in India under the New York Convention.",
    ],
    "restructuring-and-exit": [
      "On a sale of the Indian subsidiary, the UK substantial shareholding exemption may exempt the UK parent's gain, while India can still tax it under its own law.",
      "A transfer of shares between the UK parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
    ],
    "expat-visa": [
      "Since the India-UK trade agreement came into force on 15 July 2026, an intra-corporate transferee can be posted to India for up to three years, with limited renewal.",
      "The India-UK Double Contributions Convention lets a temporary assignee stay in UK National Insurance, with a certificate of coverage, instead of paying Indian provident fund as well.",
      "A stay longer than 180 days on an Employment Visa requires FRRO registration within 14 days of arrival.",
    ],
    "hiring-and-payroll": [
      "There is no UK-style statutory redundancy or TUPE in India: termination follows the contract, notice and the labour codes, and gratuity becomes payable after five years of service.",
      "A UK handbook is a useful base, but notice, benefits, IP, restrictive covenants and termination terms must be rebuilt under Indian law.",
      "India's working afternoon overlaps with the UK morning, so most roles can work standard Indian hours.",
    ],
    "common-mistakes": [
      "Assuming India has UK GDPR adequacy: transfers to an Indian subsidiary need the International Data Transfer Agreement or the UK Addendum.",
      "Using an HMRC certificate of residence that does not cover the payment date when claiming treaty rates.",
      "Copying English employment terms into Indian contracts without rebuilding notice, termination and restrictive covenants.",
    ],
    "foreign-employee-treaty-ssa": [
      "Under Article 16 of the India-UK treaty, a UK employee is exempt from Indian tax for up to 183 days in the Indian tax year if a UK employer pays and no Indian entity bears the cost.",
      "The India-UK Double Contributions Convention has been in force since 15 July 2026: with a certificate of coverage, a temporary assignee pays UK National Insurance instead of Indian provident fund.",
    ],
  },
  japan: {
    "incorporation-process": [
      "A Japanese parent is usually a kabushiki kaisha (KK) or a godo kaisha (GK). Its core document is the certificate of registered matters from the Legal Affairs Bureau, with the articles of incorporation and a board or member resolution.",
      "Japanese documents need certified English translations, and private documents go through a notary and Legal Affairs Bureau certification before the MOFA apostille, so start the document set first.",
      "India is 3.5 hours behind Japan all year (neither country uses daylight saving), so digital signature and bank KYC calls fit a Japanese afternoon.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "Most Japanese groups use a subsidiary so that dividends can qualify for Japan's foreign dividend exemption (95% exempt for a holding of 25% or more for six months); a branch's profits are taxed in the Japanese company's own return instead.",
      "Japan does not share a land border with India, so Press Note 3's prior-approval rule does not apply to a Japanese investor, unless a beneficial owner is from a land-border country.",
      "A liaison office suits a representative presence before a decision, but it cannot earn income, so most Japanese companies move to a subsidiary once India sales or delivery begins.",
    ],
    "documents-and-apostille": [
      "The certificate of registered matters and other official records are apostilled by the Ministry of Foreign Affairs of Japan (MOFA). Private documents, such as board resolutions, are notarized, certified by the Legal Affairs Bureau and then apostilled.",
      "Japanese documents need an English translation, and MOFA expects official documents to be issued within three months of the apostille application.",
      "MOFA's Tokyo desk works by appointment from 5 October 2026, and documents come back by post, so build both into the timetable.",
    ],
    "resident-director": [
      "Chuzaiin (seconded managers) posted to India for a full year usually meet the 182-day test and can act as the resident director, which many Japanese groups prefer to a third-party nominee.",
      "A Japanese director needs a Director Identification Number and a Digital Signature Certificate, obtained with an apostilled passport and an address proof with an English translation.",
    ],
    "funding-fema-fc-gpr": [
      "The parent can remit yen or US dollars, and the Indian bank converts them to rupees and issues the foreign inward remittance certificate. Shares are priced in rupees, so allow an exchange-rate buffer.",
      "Press Note 3 does not apply to Japanese investors, so most sectors stay on the Automatic Route.",
      "Japan's Foreign Exchange and Foreign Trade Act can require a report on the outward investment on the Japanese side; your Japanese adviser confirms the filing.",
    ],
    "repatriating-profits": [
      "The India-Japan tax treaty caps Indian tax at 10% on dividends, interest, royalties and fees for technical services, against a domestic rate of generally 20% plus surcharge and cess.",
      "Claim the treaty rate with a Certificate of Residence from the Japanese tax office that covers the payment date, plus Form 41 (previously Form 10F).",
      "Dividends that qualify for Japan's foreign dividend exemption are 95% exempt in Japan, so the Indian Withholding Tax on them is largely a final cost.",
    ],
    "transfer-pricing": [
      "The same transaction is tested by India and by the Japanese National Tax Agency, so align the method and margin in the Indian report and the parent's Japanese local file.",
      "Most Japanese groups close their year on 31 March, like India, so the Indian and Japanese transfer pricing years usually line up.",
    ],
    "dtaa-pe-risk": [
      "Under the India-Japan treaty, PE risk comes mainly from a fixed place, dependent agents and construction or installation projects beyond the treaty period, so watch chuzaiin who negotiate or sign contracts in India.",
      "Fees for technical services to a Japanese company are taxed in India at up to 10% under the treaty even without a PE, so price and document intra-group services carefully.",
    ],
    "compliance-calendar": [
      "Most Japanese groups also close on 31 March, so the Indian audit and the Japanese consolidation can run on one timetable, with the Indian numbers needed early for the parent's May results.",
      "A parent with a 31 December year-end needs a bridge between India's April-to-March year and its own.",
    ],
    "audit-icofr": [
      "A listed Japanese parent reports on internal control under J-SOX, and a material Indian subsidiary can fall within its scope, so document the Indian controls the parent's auditor will test.",
      "Group packs usually follow J-GAAP or IFRS, while the Indian statutory accounts follow Ind AS or Indian GAAP, so plan the conversion schedule with the parent's accounting team.",
    ],
    "contracts-and-arbitration": [
      "Japan is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so a Japanese court judgment cannot simply be executed in India; it needs a fresh suit.",
      "India and Japan are both parties to the New York Convention, so an arbitration seated in Japan, for example under the JCAA rules, produces an award that can be enforced in India.",
    ],
    "expat-visa": [
      "Chuzaiin usually come on an Employment Visa; a stay longer than 180 days requires FRRO registration within 14 days of arrival.",
      "With a Certificate of Coverage under the Japan-India Social Security Agreement, a seconded employee stays in Japanese pension insurance for up to five years and is exempt from Indian provident fund.",
    ],
    "hiring-and-payroll": [
      "Japanese lifetime-employment practice does not carry over: Indian termination follows the contract, notice and the labour codes, and gratuity becomes payable after five years of service.",
      "Japanese work rules (shugyo kisoku) are a useful base, but leave, notice, benefits and termination terms must be rebuilt under Indian law.",
    ],
    "esop": [
      "Shares of a Japanese parent granted to Indian employees are taxed in India as a perquisite at vesting or exercise, and the Indian company withholds tax through payroll.",
      "Any recharge of the plan cost from the Japanese parent to the Indian subsidiary needs an agreement and transfer pricing support.",
    ],
    "common-mistakes": [
      "Using a Japanese Certificate of Residence that does not cover the payment date when claiming the 10% treaty rate.",
      "Sending Japanese-language documents without certified English translations, or letting the certificate of registered matters go stale before the apostille.",
      "Not applying for the Certificate of Coverage before a chuzaiin starts in India, so Indian provident fund applies from day one.",
    ],
    "parent-obligations": [
      "A Japanese company holding 10% or more of the Indian subsidiary must check the CFC rules each year; the Indian effective tax rate is a key test.",
      "Japanese local file requirements apply to transactions with the Indian subsidiary above specified yen thresholds.",
    ],
    "share-valuation": [
      "Shares issued to the Japanese parent must be priced at or above fair value under FEMA, certified by a Chartered Accountant or SEBI-registered merchant banker; the parent's own valuation for its Japanese books is a separate exercise.",
      "A later transfer between the Japanese parent and an Indian resident needs a fresh FEMA valuation and Form FC-TRS within 60 days.",
    ],
    "tax-notices-and-litigation": [
      "Notices often question payments to the Japanese parent, such as service fees and royalties, so keep the intercompany agreement and the 10% treaty rate support ready.",
      "Where an Indian transfer pricing adjustment causes double taxation, the mutual agreement procedure under the India-Japan treaty is available alongside the Indian appeal route.",
    ],
    "global-vat": [
      "Sales of digital services to Japanese customers fall under Japan's own consumption tax rules for cross-border electronic services, separate from Indian GST.",
      "An Indian subsidiary supplying services to its Japanese parent usually treats them as zero-rated exports under GST, subject to the export conditions.",
    ],
    "eor-vs-subsidiary": [
      "Japanese groups often test India with an Employer of Record before posting chuzaiin, then move to a subsidiary once headcount or customer contracts grow.",
      "Staff hired through an EOR who negotiate contracts for the Japanese parent can still create PE risk under the India-Japan treaty.",
    ],
    "restructuring-and-exit": [
      "A transfer of shares between the Japanese parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
      "On a sale of the Indian subsidiary, India can tax the gain under its own law, and the Japanese parent claims a foreign tax credit under Japanese rules.",
    ],
  },
}

/** Country facts shown as a profile table on each country's hub page. */
export const COUNTRY_PROFILE: Record<GuideCountryKey, [string, string][]> = {
  usa: [
    ["Tax treaty", "India-US DTAA: 15% on dividends (10%+ voting power; 25% otherwise), 10% to 15% on interest, 15% on royalties and fees for included services (10% for equipment)"],
    ["Service permanent establishment", "More than 90 days of services in India in any 12-month period"],
    ["Tax residency certificate", "IRS Form 6166, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "None: secondees can face Indian provident fund and US Social Security"],
    ["Apostille", "Secretary of State of the issuing or notarizing state; US Department of State for federal documents"],
    ["Parent's financial year", "Usually 31 December, against India's 31 March"],
    ["Time difference", "India is 9.5 to 13.5 hours ahead of the mainland US"],
    ["Court judgments", "The US is not a reciprocating territory under Section 44A CPC; arbitration awards are enforceable under the New York Convention"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
  australia: [
    ["Tax treaty", "India-Australia DTAA (1991, amended 2011): 15% on dividends, interest and royalties (10% for equipment)"],
    ["Service permanent establishment", "More than 183 days of services in India in any 12-month period"],
    ["Tax residency certificate", "ATO certificate of residency, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "In force since 1 January 2016: an ATO certificate of coverage keeps secondees in superannuation for up to five years"],
    ["Apostille", "DFAT, one federal process"],
    ["Parent's financial year", "30 June, against India's 31 March"],
    ["Time difference", "India is 4.5 to 5.5 hours behind Australian east coast time"],
    ["Trade agreement", "India-Australia ECTA, in force since 29 December 2022 (goods tariffs; FDI rules unchanged)"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
  uk: [
    ["Tax treaty", "India-UK DTAA (1993): 10% on dividends (15% for certain property vehicles), 15% on interest (10% for banks), 15% on royalties and technical fees (10% for equipment)"],
    ["Service permanent establishment", "A 90-day services test, much shorter than in many treaties"],
    ["Tax residency certificate", "HMRC certificate of residence, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "India-UK Double Contributions Convention, in force since 15 July 2026: a certificate of coverage keeps temporary assignees in their home scheme"],
    ["Apostille", "FCDO Legalisation Office, one UK process, with e-apostilles available"],
    ["Parent's financial year", "Usually 31 March, the same as India"],
    ["Time difference", "India is 4.5 hours ahead of the UK in summer and 5.5 hours in winter"],
    ["Court judgments", "The UK is a reciprocating territory under Section 44A CPC: UK superior court money judgments can be executed in India"],
    ["Trade agreement", "India-UK CETA, in force since 15 July 2026"],
    ["Data transfers", "No UK adequacy for India: use the International Data Transfer Agreement or the UK Addendum"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
  japan: [
    ["Tax treaty", "India-Japan DTAA (1989, amended by the 2006 protocol): 10% on dividends, interest, royalties and fees for technical services"],
    ["Permanent establishment", "Fixed place, dependent agents, and construction or installation projects beyond the treaty period"],
    ["Tax residency certificate", "Certificate of Residence from the Japanese tax office, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "In force since 1 October 2016: a Certificate of Coverage keeps seconded staff in Japanese pension insurance for up to five years"],
    ["Apostille", "Ministry of Foreign Affairs of Japan; private documents are notarized and certified by the Legal Affairs Bureau first"],
    ["Parent's financial year", "Usually 31 March, the same as India; some groups close on 31 December"],
    ["Time difference", "India is 3.5 hours behind Japan all year"],
    ["Court judgments", "Japan is not a reciprocating territory under Section 44A CPC; arbitration awards are enforceable under the New York Convention"],
    ["Trade agreement", "India-Japan CEPA, in force since 1 August 2011"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
}
