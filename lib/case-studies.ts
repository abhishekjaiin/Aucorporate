// Client case studies. Each entry renders a full page at
// /case-studies/<slug>, a card on /case-studies and the homepage, and a card
// on the service pages listed in `featuredOn`. Publish only engagements the
// client has agreed to, with no client names or figures that are not
// verified and approved.

export type CaseStudyStat = { value: string; label: string }
export type CaseStudyCard = { label?: string; title: string; text: string }

export type CaseStudyBlock =
  | { type: "p" | "note" | "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; caption: string; head: string[]; rows: string[][] }
  | { type: "columns"; columns: CaseStudyBlock[][] }
  | { type: "steps" | "timeline" | "numbered" | "terms"; items: CaseStudyCard[] }
  | { type: "result"; paragraphs: string[]; stats: CaseStudyStat[] }

export type CaseStudySection = {
  heading: string
  sub?: string
  alt: boolean
  /** Renders as the gold-bordered short-answer box. */
  quick?: boolean
  services?: { label: string; href: string }[]
  blocks: CaseStudyBlock[]
}

export type CaseStudy = {
  slug: string
  country: string
  industry: string
  /** Card heading. */
  clientDescription: string
  /** Card summary. */
  challenge: string
  /** The two figures shown on the card. */
  stats: CaseStudyStat[]
  /** Service page slugs that show this case study's card. */
  featuredOn: string[]
  datePublished: string
  dateModified: string
  metaTitle: string
  metaDescription: string
  breadcrumb: string
  tag: string
  h1: string
  lead: string
  heroStats: CaseStudyStat[]
  sections: CaseStudySection[]
  faq: { heading: string; sub: string; disclaimer: string; reviewed: string; items: { q: string; a: string }[] }
  contact: { heading: string; text: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "us-saas-captive-centre-india",
    country: "USA",
    industry: "SaaS",
    clientDescription: "A 40+ Person Team in India, with No In-House Finance",
    challenge:
      "A Virginia-based SaaS company set up its Indian subsidiary with AU in 2018 as a captive centre billing the parent on a cost-plus basis. Today AU runs the subsidiary's finance and HR function, so the US team has no finance staff to manage in India.",
    stats: [
      {
        value: "40+",
        label: "Staff in India",
      },
      {
        value: "2018",
        label: "AU Client Since",
      },
    ],
    featuredOn: ["accounting-reporting-audit-support", "payroll-expat-services", "corporate-tax-gst-transfer-pricing"],
    datePublished: "2026-10-20",
    dateModified: "2026-10-20",
    metaTitle: "Case Study: Finance and HR for a US SaaS Captive in India | AU Corporate",
    metaDescription:
      "How AU Corporate set up and runs the finance and HR function of a US SaaS company's Indian captive subsidiary: 40+ staff in India, cost-plus billing, client since 2018.",
    breadcrumb: "US SaaS Captive Subsidiary in India",
    tag: "Case Study · USA · SaaS",
    h1: "Case Study: Running the Finance and HR Function of a US SaaS Company's Captive Subsidiary in India",
    lead: "A Virginia-based SaaS company set up its Indian subsidiary with AU Corporate in 2018 as a captive centre billing the parent on a cost-plus basis. Today more than 40 people work there, and AU Corporate runs its finance and HR function.",
    heroStats: [
      {
        value: "40+ Staff in India",
        label: "All staff except the US sales team",
      },
      {
        value: "Client Since 2018",
        label: "Subsidiary set up with AU Corporate",
      },
      {
        value: "Cost-Plus Captive Model",
        label: "The subsidiary bills its US parent",
      },
      {
        value: "Finance and HR Outsourced",
        label: "No in-house finance or HR team",
      },
    ],
    sections: [
      {
        heading: "The Short Version of This Case Study",
        alt: false,
        blocks: [
          {
            type: "p",
            text: "AU Corporate, a New Delhi firm of Chartered Accountants, Company Secretaries and lawyers serving foreign parents since 2016, set up the Indian subsidiary of a Virginia-based SaaS company in 2018 as a captive centre that bills its US parent on a cost-plus basis. The subsidiary now has more than 40 staff in India, which is all of the company's staff except its US sales team, and it has no in-house finance or HR team because AU Corporate runs both functions.",
          },
        ],
        quick: true,
      },
      {
        heading: "At a Glance",
        alt: false,
        blocks: [
          {
            type: "table",
            caption: "US SaaS Captive Subsidiary in India: Summary of the Engagement",
            head: ["Item", "Detail"],
            rows: [
              ["Parent company", "A SaaS company headquartered in Virginia, USA (name withheld)"],
              ["Indian entity", "An Indian subsidiary set up with AU Corporate in 2018"],
              ["Operating model", "Captive centre that bills its parent on a cost-plus basis"],
              ["People in India", "More than 40 staff, which is all staff except the US sales team"],
              ["AU Corporate's role", "Subsidiary set-up, then the subsidiary's finance function and HR function"],
              ["Client since", "2018"],
            ],
          },
        ],
      },
      {
        heading: "The Situation",
        alt: true,
        blocks: [
          {
            type: "columns",
            columns: [
              [
                {
                  type: "p",
                  text: "The parent is a SaaS company headquartered in Virginia. In 2018 it set up an Indian subsidiary with AU Corporate, built as a captive centre: an Indian company that works for its parent and is paid by its parent for the work, on a cost-plus basis.",
                },
                {
                  type: "p",
                  text: "Apart from the US sales team, all of the company's staff now work in India, so the Indian subsidiary is where most of the company's people are employed and paid.",
                },
              ],
              [
                {
                  type: "h3",
                  text: "The Needs of a Captive of This Kind",
                },
                {
                  type: "list",
                  items: [
                    "Accounts that the US parent can use for its own reporting",
                    "Cost-plus billing that is documented and defensible",
                    "Correct payroll, PF, ESI and tax deductions for 40+ employees",
                    "Foreign investment and funds reported to the RBI",
                    "One team accountable for all of it",
                  ],
                },
              ],
            ],
          },
        ],
      },
      {
        heading: "How a Captive Subsidiary in India Works",
        alt: false,
        blocks: [
          {
            type: "steps",
            items: [
              {
                label: "Pricing",
                title: "Cost-Plus and Transfer Pricing",
                text: "A captive has one customer, its parent. Its charges are normally set as its costs plus a markup, which must be at arm's length and supported by an intercompany agreement and a transfer pricing study.",
              },
              {
                label: "Money",
                title: "FEMA and RBI Reporting",
                text: "Share capital from the parent, any loans and the annual foreign liabilities and assets return are reported to the RBI, and payments to the parent need the right tax and bank paperwork.",
              },
              {
                label: "Tax",
                title: "Income Tax, TDS and GST",
                text: "The subsidiary pays corporate tax, deducts TDS on its payments and, as an exporter of services, can claim refund of unused GST input credit.",
              },
              {
                label: "People",
                title: "Payroll and Labour Laws",
                text: "Salaries, provident fund, state insurance, professional tax, tax on salary and labour law compliance apply to every employee, along with tax and FRRO rules for any foreign staff.",
              },
              {
                label: "Company Law",
                title: "Audit and ROC Filings",
                text: "An annual statutory audit, board and shareholder meetings, and annual filings with the Registrar of Companies are required whatever the size of the captive.",
              },
            ],
          },
        ],
        sub: "General background for foreign parents, not a description of this client's accounts.",
      },
      {
        heading: "What AU Corporate Did",
        alt: true,
        blocks: [
          {
            type: "columns",
            columns: [
              [
                {
                  type: "h3",
                  text: "In This Engagement",
                },
                {
                  type: "list",
                  items: [
                    "Set up the Indian subsidiary with the parent in 2018",
                    "Supported the captive model, in which the subsidiary bills the parent on a cost-plus basis",
                    "Took on the subsidiary's finance function",
                    "Took on the subsidiary's HR function",
                    "Has remained the subsidiary's adviser since 2018",
                  ],
                },
              ],
              [
                {
                  type: "h3",
                  text: "The Service Lines Behind Finance and HR",
                },
                {
                  type: "list",
                  items: [
                    "Monthly accounting, bookkeeping and reconciliations",
                    "Reporting for the parent in US GAAP or IFRS",
                    "TDS and GST workings, tax returns and transfer pricing",
                    "Payroll, PF, ESI and professional tax",
                    "Labour law, onboarding and exit formalities",
                  ],
                },
                {
                  type: "note",
                  text: "The scope is agreed with each client. These are the service lines AU Corporate uses for subsidiaries of this kind, and not a list of what was done for this client.",
                },
              ],
            ],
          },
        ],
        sub: "The facts of this engagement, and the service lines AU Corporate uses for a subsidiary of this kind.",
      },
      {
        heading: "The Result",
        alt: false,
        blocks: [
          {
            type: "result",
            paragraphs: [
              "The Indian subsidiary now has more than 40 staff, which is all of the company's staff except its US sales team. It has no in-house finance or HR team, because AU Corporate runs both functions, so the US management does not have to build or manage a finance or HR department in India.",
              "AU Corporate has been the company's adviser since 2018.",
            ],
            stats: [
              {
                value: "40+",
                label: "Staff in India",
              },
              {
                value: "2018",
                label: "AU Client Since",
              },
            ],
          },
        ],
      },
      {
        heading: "What Other Foreign Parents Can Take from This",
        alt: true,
        blocks: [
          {
            type: "numbered",
            items: [
              {
                title: "Document the Pricing Early",
                text: "Put the intercompany agreement and the cost-plus invoicing in place from the first month, and not at year end.",
              },
              {
                title: "Keep One Accountable Team",
                text: "When one team handles books, tax, FEMA and payroll, the figures agree across every filing.",
              },
              {
                title: "Plan Transfer Pricing Yearly",
                text: "India revised its safe harbour rules from 1 April 2026, so check whether an election suits your captive.",
              },
              {
                title: "Run a Compliance Calendar",
                text: "Audit, ROC, tax, GST, TDS, RBI and payroll dates are fixed, so track them on one calendar.",
              },
              {
                title: "Plan for Growth",
                text: "Payroll, labour law and FRRO work grow with headcount, so choose a provider that can scale with the team.",
              },
            ],
          },
        ],
        sub: "General guidance for a parent company planning an Indian captive subsidiary.",
      },
      {
        heading: "Key Terms in This Case Study",
        alt: false,
        blocks: [
          {
            type: "terms",
            items: [
              {
                title: "Captive Subsidiary",
                text: "An Indian company owned by a foreign parent that provides services only to the parent and its group companies.",
              },
              {
                title: "Global Capability Centre (GCC)",
                text: "A captive unit of a multinational that delivers IT, engineering, finance or other work for the group from India.",
              },
              {
                title: "Cost-Plus",
                text: "A pricing method in which the captive charges its costs plus an agreed markup.",
              },
              {
                title: "Arm's Length Price",
                text: "The price that independent parties would agree on, which related companies must use under transfer pricing rules.",
              },
              {
                title: "Transfer Pricing",
                text: "The Indian tax rules that require transactions between related companies to be at arm's length and documented.",
              },
              {
                title: "FEMA",
                text: "The Foreign Exchange Management Act, 1999, under which foreign investment, loans and remittances are reported to the RBI.",
              },
            ],
          },
        ],
      },
      {
        heading: "The Services Behind This Case Study",
        alt: true,
        blocks: [
          {
            type: "p",
            text: "Each service has its own page with the process, the deadline calendar and answers to common questions.",
          },
        ],
        services: [
          {
            label: "India Subsidiary Registration",
            href: "/india-subsidiary-registration",
          },
          {
            label: "Accounting, Reporting and Audit Support",
            href: "/accounting-reporting-audit-support",
          },
          {
            label: "Corporate Tax, GST and Transfer Pricing",
            href: "/corporate-tax-gst-transfer-pricing",
          },
          {
            label: "FEMA and RBI Compliance",
            href: "/fema-rbi-compliance",
          },
          {
            label: "Secretarial and ROC Compliance",
            href: "/secretarial-roc-compliance",
          },
          {
            label: "Payroll and Expat Services",
            href: "/payroll-expat-services",
          },
        ],
      },
    ],
    faq: {
      heading: "Questions About Captive Subsidiaries in India",
      sub: "Straight answers to questions foreign finance teams ask about captive centres. Can't find yours? Ask us in the form below.",
      disclaimer:
        "This is general guidance based on Indian law and practice as at the date above. It is not advice for your specific case, and rules can change.",
      reviewed: "2026-10-20",
      items: [
        {
          q: "What is a captive subsidiary in India?",
          a: "In India, a captive subsidiary is an Indian company owned by a foreign parent that provides services, such as software development, support or back-office work, only to the parent and its group companies, and earns its revenue from them. The case study on this page is about the captive subsidiary of a US SaaS company.",
        },
        {
          q: "What is a Global Capability Centre (GCC) in India and how is it different from a captive subsidiary?",
          a: "A Global Capability Centre (GCC) is a captive unit of a multinational company that delivers work such as IT, engineering, finance or research for the group from India. The term is often used for larger or broader centres, and many GCCs are set up as Indian subsidiaries, so the compliance is the same as for any other captive subsidiary.",
        },
        {
          q: "What are the benefits of a captive subsidiary in India for an IT or back-office function?",
          a: "A captive subsidiary gives a foreign company direct control over its India team, its processes, its data and its intellectual property, access to India's pool of IT, engineering and finance talent, and a cost base that is usually lower than in the parent's country. It can also grow with the business. The benefits depend on the size and length of the engagement, so AU Corporate reviews the numbers with you first.",
        },
        {
          q: "Why do foreign companies choose India for captive centres?",
          a: "Foreign companies choose India for captive centres mainly because of its large pool of IT, engineering, finance and analytics talent, its time-zone overlap with Asia, Europe and part of the US working day, and a mature ecosystem of global capability centres and service providers. The choice of India still depends on your function, team size and budget.",
        },
        {
          q: "Which functions can a foreign company run through a captive subsidiary in India?",
          a: "A foreign company can run software development, IT support, engineering and research, finance and accounting, HR and payroll, customer support, analytics and other shared services through a captive subsidiary in India. The subsidiary works for the parent and its group companies. AU Corporate sets up the compliance for the functions you choose.",
        },
        {
          q: "What is the difference between a captive subsidiary and outsourcing to an Indian vendor?",
          a: "With a captive subsidiary, the foreign parent owns the Indian company and employs the team directly, so it controls hiring, processes, data and intellectual property. With outsourcing, a vendor employs the team and serves several clients. A captive needs more set-up and compliance, and outsourcing needs less commitment and less control.",
        },
        {
          q: "Is a captive subsidiary in India cheaper than outsourcing?",
          a: "A captive can be cheaper over the long term for a stable, larger team, because the parent pays costs plus a markup instead of a vendor's margin, but a small or short-term team may cost less through a vendor. The captive also carries set-up and compliance costs. AU Corporate helps you compare both options on your own numbers.",
        },
        {
          q: "How large should a team be before a captive subsidiary makes sense in India?",
          a: "There is no fixed team size at which a captive makes sense, because the answer depends on how long you plan to stay, how much control you need and what compliance costs. Some companies start with outsourcing or an employer-of-record arrangement and set up a captive subsidiary as the team grows. AU Corporate can help you plan the move.",
        },
        {
          q: "Who owns the intellectual property created by a captive subsidiary in India?",
          a: "The parent should own the intellectual property that the Indian captive creates, and this is set out in the intercompany agreement and in the employment contracts, which assign the work to the subsidiary and then to the parent. The assignment affects transfer pricing and tax, so it should be drafted with your lawyers. AU Corporate coordinates the accounting and tax side.",
        },
        {
          q: "How does a captive subsidiary in India protect data and confidentiality?",
          a: "A captive subsidiary employs its own staff and runs on the parent's systems, so the parent controls access, security policies and confidentiality terms in employment contracts. The subsidiary must also follow India's data protection law for personal data. AU Corporate prepares the employment contracts and policies, and your IT and legal teams set the security standards.",
        },
        {
          q: "What are the risks of setting up a captive subsidiary in India?",
          a: "The main risks are transfer pricing disputes if the markup is not at arm's length, tax exposure for the parent if the structure is poorly built, FEMA and ROC penalties for missed filings, staff attrition, and the cost of closing the subsidiary later. AU Corporate builds the documentation and the compliance calendar to reduce these risks.",
        },
        {
          q: "What is the difference between a captive subsidiary, a branch office and a liaison office in India?",
          a: "A subsidiary is a separate Indian company with limited liability for the parent. A branch office is an extension of the foreign company that can carry out specified activities with RBI permission. A liaison office can only promote the parent's business and cannot earn income. A captive is almost always set up as a subsidiary. AU Corporate recommends the structure for your plan.",
        },
        {
          q: "How do I choose a city or state for a captive subsidiary in India?",
          a: "Foreign companies usually compare cities such as Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai and Mumbai on the talent available, salary levels, office costs, infrastructure and state rules, such as professional tax and Shops and Establishments law. AU Corporate explains the compliance differences for each state, and you choose based on your hiring plan.",
        },
        {
          q: "Are there tax holidays for a captive subsidiary in India?",
          a: "Most income tax holidays that once applied to new software and service export units have ended, so a captive decision should rest on operating economics, not tax savings. Some duty or procedural benefits may be available depending on the location and scheme. AU Corporate checks the current schemes for your location and activity.",
        },
        {
          q: "Does a captive subsidiary in India charge GST on services to its foreign parent?",
          a: "Services supplied by an Indian captive subsidiary to a foreign parent are generally treated as exports and zero-rated under GST, if the conditions are met, such as receipt of payment in foreign currency. The captive can claim a refund of unused input tax credit. AU Corporate handles the GST registration, the export records and the refund application.",
        },
        {
          q: "How does an Indian captive subsidiary bill its foreign parent on a cost-plus basis?",
          a: "An Indian captive subsidiary adds an agreed markup to its operating costs, such as salaries, rent and overheads, and invoices the parent regularly, usually in foreign currency. The markup must be at arm's length and is supported by an intercompany agreement and a transfer pricing study. AU Corporate keeps the accounts behind the invoices and prepares the transfer pricing report.",
        },
        {
          q: "Why does transfer pricing matter for a captive subsidiary in India?",
          a: "A captive subsidiary has one customer, its foreign parent, so all of its revenue comes from a related party and the Indian tax authorities test whether the markup is at arm's length. A low markup can lead to a tax adjustment and penalty. AU Corporate prepares the documentation and the accountant's report each year.",
        },
        {
          q: "Did India change its transfer pricing safe harbour rules for captive centres in 2026?",
          a: "India revised its transfer pricing safe harbour rules with effect from 1 April 2026, and an eligible captive may elect the safe harbour margin instead of a full benchmarking study. The election is optional, has eligibility conditions, and does not bind the US tax authorities. AU Corporate compares the safe harbour with a full study for your subsidiary.",
        },
        {
          q: "Can a US company outsource the finance and HR function of its Indian subsidiary?",
          a: "A US company can outsource accounting, tax, payroll and HR compliance for its Indian subsidiary to a provider in India, as in this case study. The subsidiary and its directors stay legally responsible, so the provider should work to a clear scope, with a named manager and regular reporting to the parent.",
        },
        {
          q: "How much does it cost to outsource accounting for an Indian captive subsidiary?",
          a: "Monthly accounting and bookkeeping with AU Corporate starts at USD 240 per month. The final fee depends on the number of transactions, bank accounts and employees and the reporting your parent needs. AU Corporate charges reasonable fees for its HR and compliance services and confirms a written quote before work begins.",
        },
        {
          q: "How long does it take to set up a captive subsidiary in India?",
          a: "AU Corporate's standard timeline is 4 to 6 weeks from signed documents to the FC-GPR report for the share capital. It can be faster when the foreign documents are signed and apostilled quickly. AU Corporate then starts accounting, payroll and tax compliance as soon as the subsidiary is incorporated.",
        },
        {
          q: "Which compliances must a captive subsidiary in India meet every year?",
          a: "Each year, a captive subsidiary in India must get its accounts audited, file its annual returns with the ROC, file its income tax return and transfer pricing report, file GST and TDS returns, report foreign investment and loans to the RBI, including the annual FLA return, and meet payroll and labour law obligations. AU Corporate tracks all of these on one calendar.",
        },
        {
          q: "Who is the client in this case study and can I speak to them?",
          a: "AU Corporate does not publish client names or performance figures without the client's approval. If you are considering a similar captive set-up, AU Corporate can discuss the structure with you on a call, and may be able to arrange a reference where the client agrees.",
        },
        {
          q: "Can AU Corporate set up and run a captive subsidiary for a parent company from my country?",
          a: "AU Corporate has served parent companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. The Indian rules are the same for every parent, and the reporting is set up in your group's framework, chart of accounts and calendar.",
        },
      ],
    },
    contact: {
      heading: "Planning a Captive Subsidiary in India?",
      text: "Tell us where your parent company is, the size of the team you plan in India and what you need help with. We will reply with a clear quote.",
    },
  },
  {
    slug: "us-longevity-company-india-subsidiary-14-days",
    country: "USA",
    industry: "Longevity",
    clientDescription: "An Indian Subsidiary Incorporated in 14 Days",
    challenge:
      "A Phoenix-based longevity company needed its Indian subsidiary within 15 days. AU explained remote signing over a video call, the apostilled documents came back in 10 days, SPICe+ was filed on day 13 and approval arrived on day 14.",
    stats: [
      {
        value: "14",
        label: "Days to Approval",
      },
      {
        value: "10",
        label: "Days for Apostilled Documents",
      },
    ],
    featuredOn: ["india-subsidiary-registration"],
    datePublished: "2026-10-20",
    dateModified: "2026-10-20",
    metaTitle: "Case Study: India Subsidiary Incorporated in 14 Days for a US Company | AU Corporate",
    metaDescription:
      "How AU Corporate incorporated the Indian subsidiary of a US longevity company in 14 days: apostilled documents, DSC, resident director signatures and SPICe+ filing.",
    breadcrumb: "US Longevity Company: India Subsidiary in 14 Days",
    tag: "Case Study · USA · Longevity",
    h1: "Case Study: Incorporating an Indian Subsidiary for a US Longevity Company in 14 Days",
    lead: "A Phoenix-based US longevity company needed its Indian subsidiary incorporated within 15 days. AU Corporate filed the SPICe+ form on day 13, and the incorporation approval email arrived on day 14.",
    heroStats: [
      {
        value: "14 Days to Approval",
        label: "Against a 15-day deadline",
      },
      {
        value: "10 Days for Apostille",
        label: "Client returned apostilled documents",
      },
      {
        value: "Day 13 Filing",
        label: "SPICe+ form filed with the ROC",
      },
      {
        value: "Remote Signing",
        label: "Explained over a video call",
      },
    ],
    sections: [
      {
        heading: "The Short Version of This Case Study",
        alt: false,
        blocks: [
          {
            type: "p",
            text: "AU Corporate, a New Delhi firm of Chartered Accountants, Company Secretaries and lawyers serving foreign parents since 2016, incorporated the Indian subsidiary of a Phoenix-based US longevity company in 14 days, against the client's deadline of 15 days. After the ROC approved the name, AU Corporate drafted the documents the next day and explained signing and apostille over a video call. The client returned apostilled documents within 10 days, AU filed the SPICe+ form on day 13, and the approval email arrived on day 14.",
          },
        ],
        quick: true,
      },
      {
        heading: "At a Glance",
        alt: false,
        blocks: [
          {
            type: "table",
            caption: "US Longevity Company: Summary of the Indian Subsidiary Incorporation",
            head: ["Item", "Detail"],
            rows: [
              ["Parent company", "A longevity company based in Phoenix, USA (name withheld)"],
              ["Requirement", "Incorporate the Indian subsidiary within 15 days"],
              ["Time taken", "14 days to the incorporation approval email"],
              ["Apostilled documents", "Returned by the client within 10 days"],
              ["SPICe+ filing", "Filed on day 13"],
              [
                "AU Corporate's role",
                "Name application, document drafting, signing and apostille guidance, DSC, resident director signatures and ROC filing",
              ],
            ],
          },
        ],
      },
      {
        heading: "The Situation",
        alt: true,
        blocks: [
          {
            type: "columns",
            columns: [
              [
                {
                  type: "p",
                  text: "The parent is a US longevity company based in Phoenix. It had an urgent need to have its Indian subsidiary incorporated within 15 days, which is much shorter than the 4 to 6 weeks that AU Corporate normally quotes from signed documents to the FC-GPR report.",
                },
                {
                  type: "p",
                  text: "AU Corporate accepted the challenge and asked the client to act quickly on the apostille of its documents, because for a foreign parent the apostille is often the step that takes the longest.",
                },
              ],
              [
                {
                  type: "h3",
                  text: "What Made This Timeline Hard",
                },
                {
                  type: "list",
                  items: [
                    "A fixed deadline of 15 days",
                    "Parent documents that had to be signed and apostilled abroad",
                    "Digital signature certificates for the directors",
                    "Signatures from the resident director in India",
                    "A fresh name that had to be approved by the ROC first",
                  ],
                },
              ],
            ],
          },
        ],
      },
      {
        heading: "How the 14 Days Went",
        alt: false,
        blocks: [
          {
            type: "timeline",
            items: [
              {
                label: "Name Approval",
                title: "Name Approved by the ROC",
                text: "The proposed name of the Indian subsidiary was approved, which allowed the documents to be drafted.",
              },
              {
                label: "The Next Day",
                title: "Documents Drafted and Shared",
                text: "AU Corporate drafted all the incorporation documents the day after the name approval, shared them with the client and explained over a video call how to sign them and how the apostille works.",
              },
              {
                label: "Within 10 Days",
                title: "Apostilled Documents Returned",
                text: "The client signed, had the documents apostilled and returned all of them within 10 days.",
              },
              {
                label: "In Parallel",
                title: "Digital Signature and Resident Director",
                text: "AU Corporate applied for the digital signature certificates straight away and, in the meantime, collected all the required signatures from the subsidiary's resident director in India.",
              },
              {
                label: "Day 13",
                title: "SPICe+ Form Filed",
                text: "AU Corporate filed the incorporation application on the SPICe+ form with the ROC.",
              },
              {
                label: "Day 14",
                title: "Approval Received",
                text: "The email approving the incorporation arrived on day 14, one day inside the client's deadline.",
              },
            ],
          },
        ],
        sub: "The key steps, in order. AU Corporate ran the steps that could run at the same time in parallel.",
      },
      {
        heading: "How Incorporating an Indian Subsidiary Works",
        alt: true,
        blocks: [
          {
            type: "steps",
            items: [
              {
                label: "Step 1",
                title: "Name Reservation",
                text: "The proposed company name is submitted to the Registrar of Companies, and it must be approved before the incorporation papers are finalised.",
              },
              {
                label: "Step 2",
                title: "Documents from the Parent",
                text: "The foreign parent signs a board resolution, authorisations and identity and address documents, which usually need notarisation and an apostille, or consular legalisation, before they are used in India.",
              },
              {
                label: "Step 3",
                title: "Digital Signatures and Director IDs",
                text: "Each director needs a digital signature certificate (DSC) and a Director Identification Number (DIN) to sign the online forms.",
              },
              {
                label: "Step 4",
                title: "Resident Director",
                text: "At least one director must have stayed in India for 182 days or more in the year, and this person signs the declarations that the incorporation forms need.",
              },
              {
                label: "Step 5",
                title: "SPICe+ Filing",
                text: "The SPICe+ form is the integrated online application for incorporation that also covers PAN, TAN and certain registrations, and the ROC approves it with an email.",
              },
            ],
          },
        ],
        sub: "General background for foreign parents, not a description of this client's papers.",
      },
      {
        heading: "The Result",
        alt: false,
        blocks: [
          {
            type: "result",
            paragraphs: [
              "The Indian subsidiary's incorporation was approved on day 14, one day within the client's 15-day requirement, with all the parent's documents apostilled in 10 days.",
              "The timeline worked because the parent acted quickly on the apostille, AU Corporate drafted the documents the day after the name was approved, and the digital signature and resident director steps were run while the apostille was in progress.",
            ],
            stats: [
              {
                value: "14",
                label: "Days to Approval",
              },
              {
                value: "10",
                label: "Days for Apostilled Documents",
              },
            ],
          },
        ],
      },
      {
        heading: "What Other Foreign Parents Can Take from This",
        alt: true,
        blocks: [
          {
            type: "numbered",
            items: [
              {
                title: "Start the Apostille Early",
                text: "The foreign documents are usually the longest step, so sign and apostille them as soon as the drafts arrive.",
              },
              {
                title: "Reserve the Name First",
                text: "Draft the papers only after the name is approved, and draft them the next day.",
              },
              {
                title: "Run Steps in Parallel",
                text: "Apply for digital signatures while the apostille is in progress, instead of one after the other.",
              },
              {
                title: "Have a Resident Director Ready",
                text: "Line up the resident director early so the Indian-side signatures do not delay filing.",
              },
              {
                title: "Check Your Sector",
                text: "Some sectors have special FDI or licence rules, so check them before you file.",
              },
            ],
          },
        ],
        sub: "General guidance for a parent company that needs an Indian subsidiary quickly.",
      },
      {
        heading: "Key Terms in This Case Study",
        alt: false,
        blocks: [
          {
            type: "terms",
            items: [
              {
                title: "Apostille",
                text: "A certificate that authenticates a document for use in another country that is a member of the Hague Apostille Convention.",
              },
              {
                title: "SPICe+",
                text: "The integrated online form of the Ministry of Corporate Affairs for incorporating a company in India.",
              },
              {
                title: "ROC",
                text: "The Registrar of Companies, which approves the name and the incorporation.",
              },
              {
                title: "DSC",
                text: "A digital signature certificate that directors use to sign online forms.",
              },
              {
                title: "DIN",
                text: "A Director Identification Number, unique to each director.",
              },
              {
                title: "Resident Director",
                text: "A director who has stayed in India for at least 182 days in the financial year.",
              },
            ],
          },
        ],
      },
      {
        heading: "The Services Behind This Case Study",
        alt: true,
        blocks: [
          {
            type: "p",
            text: "Each service has its own page with the process, the deadline calendar and answers to common questions.",
          },
        ],
        services: [
          {
            label: "India Subsidiary Registration",
            href: "/india-subsidiary-registration",
          },
          {
            label: "FEMA and RBI Compliance",
            href: "/fema-rbi-compliance",
          },
          {
            label: "Secretarial and ROC Compliance",
            href: "/secretarial-roc-compliance",
          },
          {
            label: "Accounting, Reporting and Audit Support",
            href: "/accounting-reporting-audit-support",
          },
          {
            label: "Payroll and Expat Services",
            href: "/payroll-expat-services",
          },
          {
            label: "Corporate Tax, GST and Transfer Pricing",
            href: "/corporate-tax-gst-transfer-pricing",
          },
        ],
      },
    ],
    faq: {
      heading: "Questions About Fast Incorporation of an Indian Subsidiary",
      sub: "Straight answers to questions foreign finance teams ask. Can't find yours? Ask us in the form below.",
      disclaimer:
        "This is general guidance based on Indian law and practice as at the date above. It is not advice for your specific case, and rules can change.",
      reviewed: "2026-10-20",
      items: [
        {
          q: "How fast can an Indian subsidiary be incorporated?",
          a: "AU Corporate's standard timeline is 4 to 6 weeks from signed documents to the FC-GPR report. A faster timeline is possible when the documents are ready, as in this case study, where the incorporation approval came on day 14. The speed depends on the name approval, the apostille and the signatures, and no timeline is guaranteed.",
        },
        {
          q: "Can an Indian subsidiary be incorporated in 15 days?",
          a: "An Indian subsidiary can be incorporated in about two weeks if the name is approved quickly, the parent's documents are signed and apostilled promptly and the digital signatures and resident director signatures are ready. AU Corporate did this in 14 days for a US company. The ROC and the apostille office control some of the timing.",
        },
        {
          q: "What is SPICe+ and how is a subsidiary incorporated through it?",
          a: "SPICe+ is the integrated online form of the Ministry of Corporate Affairs for incorporating a company in India. It combines the incorporation application with PAN, TAN and certain other registrations. AU Corporate fills the form, attaches the documents and files it with the ROC, which approves the incorporation by email.",
        },
        {
          q: "What is an apostille and why does a foreign parent need it for an Indian subsidiary?",
          a: "An apostille is a certificate issued in the country where a document was signed that confirms the signature or seal is genuine, for use in a member of the Hague Apostille Convention, which includes India. A foreign parent needs it on the documents it signs abroad, such as board resolutions. AU Corporate explains the steps for your country.",
        },
        {
          q: "How long does an apostille take?",
          a: "An apostille can take from a few days to a few weeks, depending on the country, the state or office that issues it and whether you apply online or by post. In this case study the client returned all apostilled documents within 10 days. AU Corporate explains the quickest route for your country.",
        },
        {
          q: "What documents does a US company need to incorporate an Indian subsidiary?",
          a: "A US company usually needs a board resolution approving the investment, an authorisation for the signatory, its incorporation documents, and identity and address proofs of its directors, all signed and apostilled. AU Corporate sends a checklist for your country and checks each document before it is used.",
        },
        {
          q: "What is name approval for an Indian company and how long does it take?",
          a: "Name approval is the ROC's clearance of the proposed company name, which is applied for first as part of the incorporation process. It is often given within a few days if the name is distinctive and not similar to an existing one, but the ROC decides. AU Corporate searches the name before applying.",
        },
        {
          q: "Do foreign directors need a digital signature certificate and a DIN?",
          a: "Every director of an Indian subsidiary needs a Director Identification Number and a digital signature certificate to sign the online forms. For a director abroad, the identity documents must be authenticated, and the application is verified over video. AU Corporate applies for both and guides the directors.",
        },
        {
          q: "Why does an Indian subsidiary need a resident director and what do they sign?",
          a: "An Indian company must have at least one director who has stayed in India for 182 days or more in the financial year. This director signs the declarations in the incorporation forms and other statutory documents. A professional resident director has no authority over the bank account or contracts. AU Corporate can provide one.",
        },
        {
          q: "Can the documents be signed and apostilled remotely?",
          a: "The parent's directors can sign the documents in their own country and AU Corporate can explain the signing and apostille steps over a video call, as in this case study. The rules for notarising and apostilling remotely vary by country and state, so AU Corporate checks the route for your location.",
        },
        {
          q: "Can a US company own 100 percent of an Indian subsidiary?",
          a: "In most sectors, a US company can own 100 percent of an Indian subsidiary under the automatic route, with no prior approval, and report the investment to the RBI afterwards. A few sectors have caps or need government approval. AU Corporate checks the route for your business activity before incorporation.",
        },
        {
          q: "Is there a minimum capital to incorporate a private limited subsidiary in India?",
          a: "The Companies Act has no minimum paid-up capital for a private limited company, which needs at least two directors, two shareholders and one resident director. The share capital should cover the subsidiary's set-up and running costs until it earns revenue. AU Corporate's package is priced for INR 10 lakh of share capital.",
        },
        {
          q: "What can delay the incorporation of an Indian subsidiary?",
          a: "The most common delays are an apostille that takes longer than planned, a name that the ROC rejects, mismatched details across documents, late digital signatures and signatures in the wrong place. AU Corporate checks each document before filing and runs the steps in parallel to avoid these delays.",
        },
        {
          q: "What are the first compliances after an Indian subsidiary is incorporated?",
          a: "After incorporation, the subsidiary must appoint its first auditor within 30 days, open a bank account, receive the share capital and report the share issue to the RBI in FC-GPR within 30 days of allotment, and declare commencement of business within 180 days. AU Corporate manages each step.",
        },
        {
          q: "How much does it cost to incorporate an Indian subsidiary?",
          a: "AU Corporate's incorporation package costs USD 750 to 1,000, all-inclusive, for a subsidiary with INR 10 lakh of share capital. Larger share capital or some states may cost more. An urgent timeline needs the client to act promptly on the documents, and AU Corporate confirms the fee in writing before work begins.",
        },
        {
          q: "Can a US longevity, biotech or health-tech company set up a subsidiary in India?",
          a: "A US longevity, biotech or health-tech company can set up an Indian subsidiary, but the rules depend on the activity. Some healthcare and pharma activities have FDI conditions, and products or services may need licences, for example from the food, drug or health authorities. AU Corporate checks the FDI route and licences before you file.",
        },
        {
          q: "Does a longevity or wellness business in India need licences besides incorporation?",
          a: "Depending on its activity, a longevity or wellness business in India may need other licences, such as food or supplement registration, drug or medical device approvals, state clinic registrations, and compliance with data protection law for health data. AU Corporate maps the licences to your plan so that the subsidiary can start on time.",
        },
        {
          q: "Who is the client in this case study and can I speak to them?",
          a: "AU Corporate does not publish client names or performance figures without the client's approval. If you need a similar timeline, AU Corporate can discuss the plan with you on a call and may be able to arrange a reference where the client agrees.",
        },
        {
          q: "Can AU Corporate incorporate a subsidiary quickly for a parent company from my country?",
          a: "AU Corporate has served parent companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. The Indian rules are the same for each, and the apostille or legalisation steps differ by country. AU Corporate explains the quickest route for yours.",
        },
      ],
    },
    contact: {
      heading: "Need an Indian Subsidiary Quickly?",
      text: "Tell us where your parent company is, your target date and your business activity in India. We will reply with a clear plan and quote.",
    },
  },
  {
    slug: "china-subsidiary-fema-compounding",
    country: "China",
    industry: "FEMA Compliance",
    clientDescription: "14 FEMA Contraventions Compounded by the RBI",
    challenge:
      "A China-owned Indian subsidiary had no FC-GPR and no FLA returns on file. AU reviewed its compliance, prepared the compounding application, and the RBI compounded all 14 contraventions. AU now handles its tax and FEMA compliance.",
    stats: [
      {
        value: "14",
        label: "Contraventions Compounded",
      },
      {
        value: "Monthly",
        label: "Retainership Secured",
      },
    ],
    featuredOn: ["fema-rbi-compliance", "secretarial-roc-compliance"],
    datePublished: "2026-10-20",
    dateModified: "2026-10-20",
    metaTitle: "Case Study: FEMA Compounding for a China-Owned Subsidiary in India | AU Corporate",
    metaDescription:
      "How AU Corporate reviewed a Chinese-owned Indian subsidiary's FEMA compliance, compounded 14 contraventions with the RBI and became its retained adviser.",
    breadcrumb: "China-Owned Subsidiary: FEMA Compounding",
    tag: "Case Study · China · FEMA Compliance",
    h1: "Case Study: FEMA Due Diligence and Compounding of 14 Contraventions for a China-Owned Subsidiary in India",
    lead: "The parent of a China-owned Indian subsidiary asked AU Corporate to review its compliance, which another consultant had handled. We found no FEMA compliance, prepared the compounding application, and the RBI compounded all 14 contraventions.",
    heroStats: [
      {
        value: "14 Contraventions",
        label: "Compounded by the RBI",
      },
      {
        value: "No FC-GPR Filed",
        label: "For the initial share subscription",
      },
      {
        value: "No FLA Return",
        label: "Since the year of incorporation",
      },
      {
        value: "Monthly Retainership",
        label: "Secured for tax and FEMA compliance",
      },
    ],
    sections: [
      {
        heading: "The Short Version of This Case Study",
        alt: false,
        blocks: [
          {
            type: "p",
            text: "AU Corporate, a New Delhi firm of Chartered Accountants, Company Secretaries and lawyers serving foreign parents since 2016, was appointed to carry out a due diligence of the existing compliance of an Indian subsidiary of a Chinese company, which another consultant had handled. The review found that no FEMA compliance had been done: the FC-GPR for the initial share subscription was never filed and no FLA return had been filed since incorporation. AU Corporate prepared the compounding application with all the documents, the RBI compounded all 14 contraventions, and the client then appointed AU on a monthly retainership for tax and FEMA compliance.",
          },
        ],
        quick: true,
      },
      {
        heading: "At a Glance",
        alt: false,
        blocks: [
          {
            type: "table",
            caption: "China-Owned Subsidiary: Summary of the FEMA Due Diligence and Compounding",
            head: ["Item", "Detail"],
            rows: [
              ["Parent company", "A company based in China (name withheld)"],
              ["Indian entity", "An Indian subsidiary whose compliance was earlier handled by another consultant"],
              ["Appointment", "Due diligence of the subsidiary's existing compliance"],
              [
                "Findings",
                "No FC-GPR for the initial subscription, no FLA return since incorporation, and no FEMA compliance done",
              ],
              ["Outcome", "14 contraventions compounded by the RBI and the subsidiary made compliant"],
              ["Relationship", "Monthly retainership for tax and FEMA compliance"],
            ],
          },
        ],
      },
      {
        heading: "The Situation",
        alt: true,
        blocks: [
          {
            type: "columns",
            columns: [
              [
                {
                  type: "p",
                  text: "The Indian subsidiary of a Chinese company had its compliance handled by another consultant. The parent appointed AU Corporate to carry out a due diligence of what had been done, so that it could rely on the subsidiary's compliance position.",
                },
                {
                  type: "p",
                  text: "A FEMA due diligence looks at how foreign money came into the subsidiary and what was reported to the RBI afterwards, which is the part of compliance that a parent often cannot check for itself.",
                },
              ],
              [
                {
                  type: "h3",
                  text: "What a FEMA Due Diligence Checks",
                },
                {
                  type: "list",
                  items: [
                    "How the initial share capital was received and reported",
                    "Whether the FC-GPR was filed after each share issue",
                    "Whether the annual FLA return was filed every year",
                    "Any loans, share transfers or remittances that needed reporting",
                    "The documents that support each filing",
                  ],
                },
              ],
            ],
          },
        ],
      },
      {
        heading: "What Happened, Step by Step",
        alt: false,
        blocks: [
          {
            type: "timeline",
            items: [
              {
                label: "Step 1",
                title: "Appointment",
                text: "The parent appointed AU Corporate to carry out a due diligence of the subsidiary's existing compliance.",
              },
              {
                label: "Step 2",
                title: "Findings",
                text: "The review found that no FEMA compliance had been done, which included no FC-GPR for the initial share subscription and no FLA return from the year of incorporation.",
              },
              {
                label: "Step 3",
                title: "Counting the Contraventions",
                text: "AU Corporate listed the defaults and arrived at a total of 14 contraventions that needed to be regularised.",
              },
              {
                label: "Step 4",
                title: "Compounding Application",
                text: "AU Corporate prepared the application for compounding with all the relevant supporting documents and submitted it to the RBI.",
              },
              {
                label: "Step 5",
                title: "Compounding by the RBI",
                text: "The RBI compounded all 14 contraventions.",
              },
              {
                label: "Step 6",
                title: "Ongoing Compliance",
                text: "The subsidiary became compliant, and the client appointed AU Corporate on a monthly retainership for tax and FEMA compliance.",
              },
            ],
          },
        ],
        sub: "The engagement in order. The facts are those of this case, and the timeline of each compounding case depends on the RBI.",
      },
      {
        heading: "How FEMA Reporting and Compounding Work",
        alt: true,
        blocks: [
          {
            type: "steps",
            items: [
              {
                label: "Share Issue",
                title: "FC-GPR Reporting",
                text: "When an Indian company issues shares to a foreign investor, it must report the issue to the RBI in Form FC-GPR within 30 days of allotment.",
              },
              {
                label: "Every Year",
                title: "Annual FLA Return",
                text: "An Indian company with foreign investment must file the annual return on foreign liabilities and assets every year by 15 July.",
              },
              {
                label: "When a Delay Occurs",
                title: "Late Submission Fee",
                text: "Some reporting delays can be regularised by paying a late submission fee, and other contraventions need compounding.",
              },
              {
                label: "When It Is a Contravention",
                title: "Compounding",
                text: "Compounding is the RBI's way of settling a FEMA contravention on the company's application, by paying an amount that the RBI decides.",
              },
              {
                label: "After Compounding",
                title: "A Clean Record",
                text: "Once compounded, the subsidiary files pending reports and follows a calendar for each filing, so the defaults do not recur.",
              },
            ],
          },
        ],
        sub: "General background for foreign parents, not a description of this client's papers.",
      },
      {
        heading: "The Result",
        alt: false,
        blocks: [
          {
            type: "result",
            paragraphs: [
              "The RBI compounded all 14 contraventions, and the Indian subsidiary became compliant with FEMA.",
              "The client then appointed AU Corporate on a monthly retainership for tax and FEMA compliance, so that the filings are made on time from now on.",
            ],
            stats: [
              {
                value: "14",
                label: "Contraventions Compounded",
              },
              {
                value: "Monthly",
                label: "Retainership Secured",
              },
            ],
          },
        ],
      },
      {
        heading: "What Other Foreign Parents Can Take from This",
        alt: true,
        blocks: [
          {
            type: "numbered",
            items: [
              {
                title: "Do a FEMA Due Diligence First",
                text: "When you change consultants, check every share issue, loan and annual return before you rely on the filings.",
              },
              {
                title: "File FC-GPR Within 30 Days",
                text: "Report each share issue to the RBI within 30 days of allotment, including the initial subscription.",
              },
              {
                title: "File the FLA Return Every Year",
                text: "The annual return is due every year by 15 July, even if there was no new investment.",
              },
              {
                title: "Prepare Compounding with Full Papers",
                text: "A complete application with all supporting documents makes the process smoother.",
              },
              {
                title: "Keep One Compliance Calendar",
                text: "Track FEMA, tax and company law dates together so that no date is missed.",
              },
            ],
          },
        ],
        sub: "General guidance for a parent company that has taken over an Indian subsidiary from another provider.",
      },
      {
        heading: "Key Terms in This Case Study",
        alt: false,
        blocks: [
          {
            type: "terms",
            items: [
              {
                title: "FEMA",
                text: "The Foreign Exchange Management Act, 1999, which governs foreign investment, loans and remittances.",
              },
              {
                title: "FC-GPR",
                text: "The report filed with the RBI after an Indian company issues shares to a foreign investor.",
              },
              {
                title: "FLA Return",
                text: "The annual return on foreign liabilities and assets that an Indian company with foreign investment files with the RBI.",
              },
              {
                title: "Contravention",
                text: "A breach of a FEMA rule, such as not filing a required report.",
              },
              {
                title: "Compounding",
                text: "The process of settling a FEMA contravention by applying to the RBI and paying the amount it decides.",
              },
              {
                title: "Due Diligence",
                text: "A review of a company's records and filings to find gaps before relying on them.",
              },
            ],
          },
        ],
      },
      {
        heading: "The Services Behind This Case Study",
        alt: true,
        blocks: [
          {
            type: "p",
            text: "Each service has its own page with the process, the deadline calendar and answers to common questions.",
          },
        ],
        services: [
          {
            label: "FEMA and RBI Compliance",
            href: "/fema-rbi-compliance",
          },
          {
            label: "Corporate Tax, GST and Transfer Pricing",
            href: "/corporate-tax-gst-transfer-pricing",
          },
          {
            label: "Accounting, Reporting and Audit Support",
            href: "/accounting-reporting-audit-support",
          },
          {
            label: "Secretarial and ROC Compliance",
            href: "/secretarial-roc-compliance",
          },
          {
            label: "Payroll and Expat Services",
            href: "/payroll-expat-services",
          },
        ],
      },
    ],
    faq: {
      heading: "Questions About FEMA Compounding and Compliance",
      sub: "Straight answers to questions foreign finance teams ask. Can't find yours? Ask us in the form below.",
      disclaimer:
        "This is general guidance based on Indian law and practice as at the date above. It is not advice for your specific case, and rules can change.",
      reviewed: "2026-10-20",
      items: [
        {
          q: "What is a FEMA due diligence for an Indian subsidiary and why do it?",
          a: "A FEMA due diligence is a review of how foreign money entered the Indian subsidiary and whether each share issue, loan, transfer and annual return was reported to the RBI. A parent does it when it changes consultants, buys a business, raises funds or finds that it cannot confirm the filings. AU Corporate lists any gaps and the cost of fixing them.",
        },
        {
          q: "What FEMA filings must an Indian subsidiary of a foreign company make?",
          a: "An Indian subsidiary of a foreign company must report share issues in FC-GPR, share transfers in FC-TRS, any external commercial borrowing from the parent, downstream investments, and the annual return on foreign liabilities and assets by 15 July. AU Corporate prepares and files each of these and tracks the dates.",
        },
        {
          q: "What happens if FC-GPR is never filed for the initial share subscription?",
          a: "If FC-GPR is never filed for the initial subscription, the foreign investment has not been reported to the RBI, which is a FEMA contravention. The company must file it late and regularise the delay by a late submission fee or compounding. AU Corporate checks which route applies and prepares the papers.",
        },
        {
          q: "What happens if the FLA return has not been filed since incorporation?",
          a: "If the FLA return has not been filed since the year of incorporation, each missed year is a separate contravention. The company must file the pending returns and regularise the delay with the RBI. AU Corporate prepares the missing returns from the audited accounts and includes the delays in the application.",
        },
        {
          q: "What is compounding under FEMA?",
          a: "Compounding under FEMA is the process of settling a contravention by applying to the RBI, admitting it and paying the amount the RBI decides, instead of facing formal proceedings. In this case study, the RBI compounded all 14 contraventions. AU Corporate prepares the application with all the documents.",
        },
        {
          q: "How does the FEMA compounding process work?",
          a: "The company lists its contraventions, files an application with the RBI with the supporting documents and declarations, and the RBI examines it, may call for a hearing or more information, and passes a compounding order stating the amount to be paid. AU Corporate prepares the application and answers the RBI's queries.",
        },
        {
          q: "Can several FEMA contraventions be compounded in one application?",
          a: "Several contraventions of the same company can be included in one application, as in this case study, where 14 contraventions were compounded. Each missed filing is counted as a separate contravention. AU Corporate groups them in a way that the RBI can examine in one proceeding.",
        },
        {
          q: "What documents are needed for a FEMA compounding application?",
          a: "A compounding application generally needs the details of each contravention, the share issue and remittance records, copies of the late filings, the audited accounts, the board approval and a declaration that the company is not under investigation. AU Corporate collects and checks each document before it applies.",
        },
        {
          q: "Can a FEMA contravention be compounded if the company is under investigation?",
          a: "The compounding application generally includes a declaration that the company is not under investigation. If an investigation by the Directorate of Enforcement is pending, the RBI compounds only after that agency gives a no-objection. AU Corporate checks the position and tells you what is needed.",
        },
        {
          q: "How much does FEMA compounding cost?",
          a: "The compounding amount is decided by the RBI, based on the amount involved and the length of the delay, following its guidelines. AU Corporate gives you an estimate before applying and charges reasonable fees for the application. The amount payable to the RBI is separate.",
        },
        {
          q: "How long does FEMA compounding take?",
          a: "FEMA compounding can take several months from the application to the RBI's order, depending on the number of contraventions, the completeness of the papers and the RBI's queries. AU Corporate prepares a complete application and answers queries quickly. No timeline can be guaranteed.",
        },
        {
          q: "Should a company compound old FEMA defaults or leave them alone?",
          a: "Leaving old FEMA defaults makes the position harder to fix later, because the contraventions remain and can surface during an investor's due diligence, an audit or a remittance request from the bank. Compounding gives the company a settled record. AU Corporate explains the cost and the risk of each option.",
        },
        {
          q: "How do FEMA defaults affect a funding round, sale or remittance?",
          a: "Investors, buyers and banks usually ask for proof of FEMA compliance, so unreported share issues or missing annual returns can delay a funding round, a sale or a remittance to the parent. AU Corporate fixes the defaults first and prepares a compliance record that you can show.",
        },
        {
          q: "Does an investor from China face special FEMA rules for an Indian subsidiary?",
          a: "India requires government approval for an investment where the investor or its beneficial owner is from a country that shares a land border with India, which includes China, under Press Note 3 of 2020. The rules have been reviewed since. AU Corporate checks the current position and your ownership chain.",
        },
        {
          q: "How do I find out whether my Indian subsidiary has FEMA defaults?",
          a: "To find out, check whether an FC-GPR was filed for each share issue, whether an FLA return was filed for every year since incorporation, and whether loans, transfers and remittances were reported. The authorised dealer bank and the RBI's reporting portal hold the records. AU Corporate carries out this check as a FEMA due diligence.",
        },
        {
          q: "Can a new consultant take over FEMA compliance from a previous one?",
          a: "A new consultant can take over FEMA compliance at any time. AU Corporate starts with a due diligence of the past filings, fixes any gaps and then runs a calendar for future filings, as in this case study, where the client appointed AU on a monthly retainership after the compounding.",
        },
        {
          q: "Does the RBI publish compounding orders?",
          a: "The RBI publishes its compounding orders on its website, so the order for a compounded contravention can be public. AU Corporate explains this before an application is made, and does not publish a client's name or details without the client's approval.",
        },
        {
          q: "What happens after FEMA contraventions are compounded?",
          a: "After compounding, the company files any pending reports, keeps its records in order and follows a calendar for every future FEMA filing, so the defaults do not recur. In this case study, the client appointed AU Corporate on a monthly retainership for tax and FEMA compliance.",
        },
        {
          q: "Who is the client in this case study and can I speak to them?",
          a: "AU Corporate does not publish client names or performance figures without the client's approval. If you have a similar issue, AU Corporate can discuss it with you on a call and may be able to arrange a reference where the client agrees.",
        },
        {
          q: "Can AU Corporate handle FEMA compounding for a subsidiary of a company from my country?",
          a: "AU Corporate has served parent companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. The RBI rules are the same for every foreign investor, and we adjust the documents to match your home-country records.",
        },
      ],
    },
    contact: {
      heading: "Worried About FEMA Compliance in Your Indian Subsidiary?",
      text: "Tell us where your parent company is, when the subsidiary was incorporated and who handled FEMA reporting so far. We will reply with a clear plan and quote.",
    },
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

/** Case studies to show on a service page, by the page's slug. */
export function caseStudiesForService(serviceSlug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.featuredOn.includes(serviceSlug))
}
