import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"

const journey = [
  {
    title: "1. Decide the structure",
    text: "A foreign company may use an Indian subsidiary, branch office, liaison office, project office or LLP depending on its activities, ownership and the applicable foreign-investment rules.",
    links: [
      ["Compare entity options", "/india-business-setup/company-formation"],
      ["Branch Office", "/branch-office-in-india"],
      ["Liaison Office", "/liaison-office-in-india"],
    ],
  },
  {
    title: "2. Check FDI and FEMA requirements",
    text: "Before incorporation, confirm the sectoral cap, entry route, ownership structure and foreign-investment reporting requirements that apply to the proposed Indian entity.",
    links: [
      ["FDI routes", "/india-business-setup/fdi-channels"],
      ["US subsidiary FEMA guide", "/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary"],
    ],
  },
  {
    title: "3. Incorporate the Indian company",
    text: "A typical wholly owned subsidiary is incorporated as an Indian private limited company. The process includes name and incorporation filings, constitutional documents, PAN/TAN and the initial corporate setup.",
    links: [
      ["Company registration guide", "/india-business-setup/company-formation"],
      ["How to incorporate from the US", "/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us"],
    ],
  },
  {
    title: "4. Complete post-incorporation setup",
    text: "After incorporation, the subsidiary may need a bank account, capital infusion, share allotment reporting and other corporate and foreign-exchange compliance steps before operations are fully established.",
    links: [
      ["Banking and taxation setup", "/india-business-setup/banking-taxation"],
      ["Compliance calendar", "/compliance-calendar"],
    ],
  },
  {
    title: "5. Run the Indian operation",
    text: "Once operating, the subsidiary needs an ongoing finance, tax, payroll and corporate-compliance framework. Intercompany arrangements also need to be reviewed for transfer-pricing and international-tax purposes.",
    links: [
      ["Accounting & Assurance", "/services/accounting-assurance"],
      ["Taxation & Regulatory", "/services/taxation-regulatory"],
      ["Transfer pricing for US groups", "/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary"],
    ],
  },
  {
    title: "6. Repatriate, restructure or close",
    text: "As the business matures, the parent may need to distribute profits, change the structure, make further investments or close the Indian entity. Each route has its own tax, corporate and foreign-exchange considerations.",
    links: [
      ["US parent repatriation guide", "/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax"],
      ["Closing an Indian subsidiary", "/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation"],
    ],
  },
]

const faqs = [
  {
    q: "What is a foreign subsidiary in India?",
    a: "A foreign subsidiary is an Indian company whose ownership is held partly or wholly by a foreign parent, subject to the foreign-investment rules applicable to its sector and ownership structure. A wholly owned subsidiary (WOS) is the form used when the foreign parent intends to own the Indian company fully, where permitted.",
  },
  {
    q: "Is a wholly owned subsidiary the right structure for every foreign company?",
    a: "No. A WOS is often suitable for a foreign business that intends to establish a continuing commercial operation in India, but the appropriate structure depends on the proposed activities, sector, ownership, tax position and regulatory requirements. Branch, liaison and project offices can be appropriate for narrower situations.",
  },
  {
    q: "What happens after an Indian subsidiary is incorporated?",
    a: "The company normally moves into post-incorporation tasks such as opening its bank account, bringing in share capital where applicable, completing foreign-investment reporting, setting up tax registrations where required, appointing the first auditor and establishing its accounting and compliance processes.",
  },
  {
    q: "Can AU Corporate support the subsidiary after incorporation?",
    a: "Yes. AU Corporate's broader services can support the Indian operation after incorporation, including accounting and assurance, taxation and regulatory compliance, HR and payroll, transfer pricing, and other business advisory requirements.",
  },
]

export default function ForeignSubsidiaryIndiaPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <Breadcrumb
          items={[
            { label: "Doing Business in India", href: "/doing-business-in-india" },
            { label: "Foreign Subsidiary in India" },
          ]}
        />
      </div>

      <section className="bg-[#081a42] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">
            India Entry · Foreign Companies
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Foreign Subsidiary / Wholly Owned Subsidiary in India
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            A practical guide for foreign companies considering an Indian subsidiary — from choosing the structure and checking FDI requirements through incorporation, ongoing compliance, tax and finance, and eventual repatriation or exit.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg leading-8 text-gray-700">
            For a foreign business planning a continuing commercial presence in India, an Indian subsidiary can provide a separate local legal entity through which the business can hire, contract, invoice and operate. A wholly owned subsidiary is one option where full foreign ownership is permitted and appropriate.
          </p>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            The decision should not be reduced to incorporation alone. The useful question is whether the proposed structure works across the full lifecycle: foreign investment, incorporation, banking, tax, accounting, payroll, transfer pricing, corporate compliance and eventual changes to the investment.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-[#081a42]">The India subsidiary journey</h2>
            <p className="mt-3 text-gray-600">
              Use the stage that matches where your business is today. The links below connect the strategic decision with the detailed AU Corporate guides.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {journey.map((item) => (
              <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-xl font-bold text-[#081a42]">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {item.links.map(([label, href]) => (
                    <Link key={href} href={href} className="text-sm font-semibold text-yellow-700 hover:text-yellow-800 hover:underline">
                      {label} →
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-[#081a42]">Related India-entry guides</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Doing Business in India", "/doing-business-in-india"],
              ["India Business Setup", "/india-business-setup"],
              ["India Entry for US Companies", "/india-entry-for-us-companies"],
              ["Branch Office in India", "/branch-office-in-india"],
              ["Liaison Office in India", "/liaison-office-in-india"],
              ["Project Office in India", "/project-office-in-india"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="rounded-lg border border-gray-200 p-5 font-semibold text-[#081a42] transition hover:border-yellow-400 hover:shadow-sm">
                {label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-[#081a42]">Frequently asked questions</h2>
          <div className="mt-8 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-7">
                <h3 className="text-lg font-bold text-[#081a42]">{faq.q}</h3>
                <p className="mt-2 leading-7 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081a42] py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">Planning an Indian subsidiary?</h2>
          <p className="mt-4 text-white/75">
            Start with the structure and regulatory questions, then work through the incorporation and ongoing-compliance stages that apply to your business.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/india-business-setup/company-formation" className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300">
              Company registration guide
            </Link>
            <Link href="/contact" className="rounded-lg border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
              Contact AU Corporate
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </main>
  )
}
