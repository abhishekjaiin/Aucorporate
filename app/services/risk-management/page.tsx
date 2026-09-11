import Image from "next/image"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { RelatedResources } from "@/components/RelatedResources"

export default function RiskManagementPage() {
  const sections = [
    {
      title: "Risk Management Services",
      id: "erm",
      items: [
        {
          title: "Enterprise Risk Management (ERM)",
          desc: "Identifying, assessing, and mitigating enterprise-wide risks aligned with business strategy.",
        },
        {
          title: "Internal Control Framework",
          desc: "Designing and implementing robust internal control systems for operational efficiency.",
        },
        {
          title: "Risk Assessment & Gap Analysis",
          desc: "Evaluating risk exposure and identifying gaps in controls and compliance.",
        },
        {
          title: "Process Improvement & SOP Design",
          desc: "Optimizing business processes with structured SOPs to enhance efficiency and control.",
        },
      ],
      note: (
        <>
          <p className="text-gray-600 mb-4 leading-relaxed">
            An enterprise risk management engagement typically starts with a structured risk
            register — mapping operational, financial, regulatory, and reputational risks against
            likelihood and impact — and ends with a control framework the finance and operations
            team can actually run day to day, not just present to the board once a year.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For companies preparing their statutory audit, this work also feeds directly into the
            auditor&rsquo;s opinion on Internal Financial Controls over Financial Reporting (IFC-FR)
            required under Section 143(3)(i) of the Companies Act, 2013. Weak IFC design or
            operation is one of the more common qualification triggers we see in first- and
            second-year India subsidiaries of foreign parents.
          </p>
        </>
      ),
    },

    {
      title: "Forensic Services",
      id: "forensic",
      items: [
        {
          title: "Fraud Investigation",
          desc: "In-depth investigation into suspected fraud and financial misconduct.",
        },
        {
          title: "Forensic Audit",
          desc: "Audit procedures to uncover irregularities and financial discrepancies.",
        },
        {
          title: "Litigation Support",
          desc: "Expert reporting and support for legal disputes and proceedings.",
        },
        {
          title: "Data Analytics & Fraud Detection",
          desc: "Using analytics to identify anomalies and fraud risks.",
        },
      ],
      note: (
        <>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A forensic audit is not a deeper version of the statutory audit — it is a different
            discipline. A statutory auditor tests samples against accounting standards to form an
            opinion on the financial statements as a whole. A forensic engagement starts from a
            specific allegation or red flag — a whistleblower complaint, an unexplained variance, a
            vendor nobody can identify — and works backwards through transactions, correspondence,
            and system logs to establish what happened, who was involved, and how much money
            moved. The output is built to hold up under scrutiny in an internal disciplinary
            proceeding, an arbitration, a police complaint under the Bharatiya Nyaya Sanhita, or a
            regulatory inquiry — not just to support an audit opinion.
          </p>

          <h3 className="font-semibold text-[#081a42] mb-3">A typical forensic engagement runs through four stages</h3>
          <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2 leading-relaxed">
            <li>
              <strong>Scoping &amp; evidence preservation</strong> — defining the allegation and
              locking down relevant systems, mailboxes, and financial records before anyone has a
              chance to alter them.
            </li>
            <li>
              <strong>Data analytics &amp; transaction testing</strong> — screening the full
              population of transactions (not a sample) for anomalies such as duplicate payments,
              related-party transactions routed through unfamiliar vendors, or round-tripping.
            </li>
            <li>
              <strong>Interviews &amp; documentation review</strong> — structured interviews with
              relevant personnel, cross-checked against physical and digital evidence.
            </li>
            <li>
              <strong>Reporting &amp; next steps</strong> — a findings report built for its actual
              audience — board, lender, or legal counsel — with clear recommendations on recovery,
              disciplinary action, or regulatory disclosure.
            </li>
          </ol>

          <p className="text-gray-600 leading-relaxed">
            Under Section 143(12) of the Companies Act, 2013, a statutory auditor who has reason to
            believe a fraud is being or has been committed against the company must report it — to
            the Audit Committee or Board if the amount involved is below the prescribed threshold,
            or to the Central Government, in Form ADT-4, if it is ₹1 crore or above. A forensic
            audit is frequently what substantiates or rules out that suspicion before the auditor
            has to make that call.
          </p>
        </>
      ),
    },

    {
      title: "Special Audit & Review",
      id: "audit",
      items: [
        {
          title: "Internal Audit",
          desc: "Independent evaluation of internal processes and governance.",
        },
        {
          title: "Compliance Audit",
          desc: "Ensuring adherence to statutory and regulatory requirements.",
        },
        {
          title: "Operational Audit",
          desc: "Assessing efficiency and effectiveness of business operations.",
        },
        {
          title: "Due Diligence Review",
          desc: "Comprehensive review for investments, mergers, and acquisitions.",
        },
      ],
      note: (
        <>
          <p className="text-gray-600 mb-4 leading-relaxed">
            &ldquo;Special audit&rdquo; covers audits triggered by someone other than the
            company&rsquo;s own annual compliance calendar. In our experience with foreign-owned
            subsidiaries, the request usually comes from one of four places: a lender or investor
            exercising an inspection right under a loan agreement or shareholders&rsquo; agreement,
            a joint-venture partner disputing reported numbers, a Registrar of Companies inquiry
            under Sections 206–208 of the Companies Act, 2013, or a sector regulator — the RBI for
            NBFCs and banks, SEBI for listed entities — directing a review. Because it is initiated
            by an outside party, scope, access, and timelines are usually set by whoever ordered
            it, not by the company.
          </p>

          <h3 className="font-semibold text-[#081a42] mb-3">
            Does your subsidiary need a mandatory internal audit?
          </h3>
          <p className="text-gray-600 mb-3 leading-relaxed">
            Internal audit is mandatory, not optional, once an Indian company crosses any of these
            thresholds under Section 138 of the Companies Act, 2013 (Companies (Accounts) Rules,
            2014, Rule 13):
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2 leading-relaxed">
            <li>Every listed company, regardless of size.</li>
            <li>
              Every unlisted public company with paid-up share capital of ₹50 crore or more,
              turnover of ₹200 crore or more, outstanding loans or borrowings from banks or public
              financial institutions exceeding ₹100 crore, or outstanding deposits of ₹25 crore or
              more, at any point in the preceding financial year.
            </li>
            <li>
              Every private company with turnover of ₹200 crore or more, or outstanding loans or
              borrowings from banks or public financial institutions exceeding ₹100 crore, at any
              point in the preceding financial year.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            A growing India subsidiary of a foreign parent can cross the private-company turnover
            threshold well before it would consider itself &ldquo;large&rdquo; by its home-country
            standards — worth checking every year, not just at incorporation. Separately, CARO
            2020 requires the statutory auditor to state whether any fraud on or by the company has
            been noticed or reported during the year, and whether a Section 143(12) report, if any,
            has been filed in Form ADT-4 — one more reason internal-control and forensic readiness
            now sits upstream of the audit sign-off, not downstream of it.
          </p>
        </>
      ),
    },
  ]

  const approachSteps = [
    {
      title: "1. Scope & Risk Assessment",
      desc: "We map the specific risk, allegation, or regulatory trigger against your business and your India entity structure — no generic checklist.",
    },
    {
      title: "2. Fieldwork, Testing & Analytics",
      desc: "Transaction testing, control walkthroughs, and data analytics across the full population of relevant data, not a sample.",
    },
    {
      title: "3. Findings & Reporting",
      desc: "A report built for its actual audience — board, lender, regulator, or legal counsel — with evidence that holds up under scrutiny.",
    },
    {
      title: "4. Remediation & Monitoring",
      desc: "Practical fixes to controls, SOPs, and reporting lines, with a follow-up review to confirm they are actually working.",
    },
  ]

  const faqs = [
    {
      q: "What's the difference between a statutory audit, an internal audit, and a forensic audit?",
      a: "A statutory audit gives an opinion on whether the financial statements are true and fair, for shareholders and regulators. An internal audit evaluates whether internal controls and processes are working, is management-facing, and — above the Section 138 thresholds — mandatory. A forensic audit investigates a specific suspected fraud or irregularity and produces evidence suitable for litigation, arbitration, or regulatory disclosure. Different scope, different audience, different trigger.",
    },
    {
      q: "Does my Indian subsidiary need a mandatory internal audit?",
      a: "It depends on whether you cross the thresholds under Section 138 of the Companies Act, 2013 and Rule 13 of the Companies (Accounts) Rules, 2014 — based on paid-up capital, turnover, outstanding borrowings, or deposits. Listed companies always need one; unlisted public and private companies need one once they cross specific size thresholds. We check this against your latest financials as part of the initial assessment.",
    },
    {
      q: "When would a special audit be required, and who orders it?",
      a: "Usually a lender, investor, joint-venture partner, or a regulator such as the RBI, SEBI, or the Registrar of Companies — rather than the company itself. Because an outside party initiates it, that party typically sets the scope, access requirements, and timeline.",
    },
    {
      q: "Can forensic audit findings be used in a legal proceeding?",
      a: "Yes — that is a core reason evidence is preserved and documented properly from the outset. Findings are built to be produced before arbitrators, courts, or regulators, though how much weight they carry ultimately depends on the specific tribunal or forum.",
    },
    {
      q: "How long does a forensic audit take?",
      a: "It varies widely depending on the volume of transactions, how quickly records and systems were preserved, and how many jurisdictions or entities are involved. We scope timelines at the outset of each engagement rather than quoting a generic duration up front.",
    },
    {
      q: "Is enterprise risk management only relevant for large companies?",
      a: "No. Smaller subsidiaries often carry more concentration risk — fewer people wearing more hats, weaker segregation of duties — which can make a lean control framework more urgent, not less, even though the formal ERM process scales with company size.",
    },
    {
      q: "Do these services replace our statutory auditor?",
      a: "No. They typically run alongside, not instead of, your statutory audit. Where independence rules require separation between audit and advisory work — for example if we are also your statutory auditor — we structure the engagement accordingly.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  }

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Risk Management" }]} />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#081a42] mb-6">
          Risk Management Services
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mb-4">
          We help organizations identify, assess, and mitigate risks through structured frameworks, forensic insights, and audit-driven assurance.
        </p>

        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          For a foreign parent company running an Indian subsidiary, joint venture, or liaison
          office, the annual statutory audit answers one question — do the financial statements
          give a true and fair view. It does not tell the board whether internal controls are
          strong enough to prevent a finance manager from routing payments to a shell vendor,
          whether a joint-venture partner&rsquo;s reported numbers can be trusted, or whether the
          company is ready for a lender- or regulator-directed review. That is where enterprise
          risk management, forensic services, and special audits come in — and where we typically
          get called in:
        </p>

        <ul className="list-disc pl-6 mb-10 max-w-3xl text-gray-600 space-y-1.5 leading-relaxed">
          <li>The board or overseas HQ wants assurance beyond the statutory auditor&rsquo;s sign-off.</li>
          <li>A whistleblower complaint, anonymous tip, or unexplained variance surfaces.</li>
          <li>A lender, investor, or JV partner requires an independent review under a loan or shareholders&rsquo; agreement.</li>
          <li>A regulator — the RBI, MCA/ROC, or SEBI — directs or requests a special audit.</li>
          <li>Pre-acquisition or pre-investment due diligence needs a forensic lens, not just a financial one.</li>
          <li>Internal audit becomes mandatory under Section 138 as the company crosses turnover, capital, or borrowing thresholds.</li>
        </ul>

        {/* NAV BUTTONS */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {sections.map((sec) => (
            <a
              key={sec.title}
              href={`#${sec.id}`}
              className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
            >
              {sec.title}
            </a>
          ))}
          <a
            href="#approach"
            className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            Our Approach
          </a>
          <a
            href="#faqs"
            className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-yellow-400 hover:text-black transition shadow-sm"
          >
            FAQs
          </a>
        </div>

        {/* OPTIONAL HERO IMAGE (like Tax page feel) */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Risk Management"
            width={1200}
            height={500}
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* SECTIONS */}
        {sections.map((section, i) => (
          <section key={section.title} aria-labelledby={section.id}>
          <Reveal delay={i * 0.1} className="mb-20">
            <h2 id={section.id} className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
              {section.title}
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

              {section.items.map((item) => (
                <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
              ))}

            </div>

            {section.note && (
              <div className="max-w-3xl bg-white border rounded-2xl p-6 shadow-sm">
                {section.note}
              </div>
            )}

          </Reveal>
          </section>
        ))}

        {/* OUR APPROACH */}
        <section aria-labelledby="approach">
          <Reveal className="mb-20">
            <h2 id="approach" className="text-2xl font-semibold mb-3 text-[#081a42] scroll-mt-24">
              Our Approach
            </h2>
            <p className="text-gray-600 max-w-3xl mb-8 leading-relaxed">
              Whether the engagement is a routine ERM review or a forensic investigation triggered
              by a specific complaint, the underlying process is the same four steps — scoped
              differently depending on what brought you to us.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step) => (
                <ClickableInfoCard key={step.title} title={step.title} desc={step.desc} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* FAQS */}
        <section aria-labelledby="faqs">
          <Reveal className="mb-16">
            <h2 id="faqs" className="text-2xl font-semibold mb-8 text-[#081a42] scroll-mt-24">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-white border rounded-2xl p-5 shadow-sm open:shadow-md transition-shadow"
                >
                  <summary className="font-semibold text-[#081a42] cursor-pointer list-none flex justify-between items-center gap-4">
                    {f.q}
                    <span className="text-yellow-500 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>

        <RelatedResources
          links={[
            {
              label: "Accounting & Assurance",
              href: "/services/accounting-assurance",
              description: "Financial statements, Ind AS/IFRS, and audit assurance support.",
            },
            {
              label: "Transaction Advisory",
              href: "/services/transaction-advisory",
              description: "Due diligence for M&A, fundraising, and restructuring.",
            },
            {
              label: "Taxation & Regulatory",
              href: "/services/taxation-regulatory",
              description: "Direct tax, GST, and FEMA/RBI regulatory compliance.",
            },
            {
              label: "Regulatory Compliance in India",
              href: "/india-business-setup/regulatory-compliance",
              description: "Ongoing statutory and secretarial compliance for foreign-owned entities.",
            },
          ]}
        />

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
