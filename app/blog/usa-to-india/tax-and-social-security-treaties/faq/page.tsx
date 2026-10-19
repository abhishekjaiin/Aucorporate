import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideAuthorBio } from "@/components/guide/GuideAuthorBio"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/faq"
const PARENT_URL = "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "treaty-basics", label: "Tax treaty basics" },
  { id: "rates-and-claims", label: "Withholding rates and claiming relief" },
  { id: "expat-tax", label: "Expat tax residency and double tax relief" },
  { id: "social-security", label: "Social security for US expats" },
]

const relatedCards = [
  { title: "The India-US Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax", desc: "How the India-US tax treaty works: who qualifies, which taxes it covers, how treaty and domestic law interact, residency, relief from double tax and disputes.", href: "/blog/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide" },
  { title: "India-US DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Included Services", desc: "Treaty rates for payments from India to the US: dividends 15% or 25%, interest 10% or 15%, royalties and fees 10% or 15%. Conditions and how to apply them.", href: "/blog/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "How to Claim India-US Treaty Benefits: Form 6166, Form 41 and Beneficial Ownership", desc: "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.", href: "/blog/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "Tax Residency for US Expats in India: Residency Tests, Treaty Tie-Breaker and Double Tax Relief", desc: "Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion.", href: "/blog/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us" },
  { title: "Social Security for US Expats in India: Is There a US-India Totalization Agreement?", desc: "Is there a US-India social security agreement? What applies to a US expat in India: provident fund, US FICA, double coverage and planning.", href: "/blog/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india" },
  { title: "EPF for International Workers in India: What US Expats and Their Employers Must Know", desc: "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, withdrawal, court rulings and the 2026 EPF Scheme.", href: "/blog/usa-to-india/tax-and-social-security-treaties/epf-international-workers" },
  { title: "US Social Security and FICA for Americans Working in India: Who Pays and When", desc: "When Social Security and Medicare tax apply to Americans working in India: US employer, Indian subsidiary, Section 3121(l) agreements and self-employment.", href: "/blog/usa-to-india/tax-and-social-security-treaties/us-social-security-for-americans-in-india" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "treaty-basics",
    label: "Tax treaty basics",
    items: [
      { n: 1, id: "does-india-have-a-tax-treaty-with-the-us", q: "Does India have a tax treaty with the US?", a: "Yes. The India-US double taxation avoidance agreement (DTAA) covers income tax and can reduce Withholding Tax and relieve double taxation." },
      { n: 2, id: "who-can-use-the-india-us-tax-treaty", q: "Who can use the India-US tax treaty?", a: "Residents of India or the US as defined in the treaty, including companies and individuals." },
      { n: 3, id: "does-the-treaty-apply-automatically", q: "Does the treaty apply automatically?", a: "No. The recipient must prove residence and meet the conditions of each article." },
      { n: 4, id: "which-indian-provision-gives-effect-to-tax-treaties", q: "Which Indian provision gives effect to tax treaties?", a: "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A of the 1961 Act). The treaty applies to the extent it is more beneficial." },
      { n: 5, id: "what-taxes-does-the-treaty-cover", q: "What taxes does the treaty cover?", a: "Income taxes. US social security taxes are excluded under Article 2." },
      { n: 6, id: "what-is-the-us-saving-clause", q: "What is the US saving clause?", a: "A clause that lets the US tax its own citizens and residents as if the treaty did not exist, with listed exceptions." },
      { n: 7, id: "what-is-the-mutual-agreement-procedure", q: "What is the mutual agreement procedure?", a: "A route under Article 27 by which the two tax authorities resolve cases of taxation not in line with the treaty." },
      { n: 8, id: "is-a-us-llc-a-treaty-resident", q: "Is a US LLC a treaty resident?", a: "It depends on how the LLC is taxed in the US and on its owners. Take advice before claiming." },
      { n: 9, id: "does-the-treaty-remove-the-need-to-file-in-the-us", q: "Does the treaty remove the need to file in the US?", a: "No. US citizens and residents still file in the US and use the foreign tax credit or exclusions." },
      { n: 10, id: "are-there-treaty-rules-on-permanent-establishment", q: "Are there treaty rules on permanent establishment?", a: "Yes. Business profits of a US company are taxable in India only if it has a permanent establishment there. See the PE guide." },
    ],
  },
  {
    id: "rates-and-claims",
    label: "Withholding rates and claiming relief",
    items: [
      { n: 11, id: "what-is-the-treaty-rate-on-dividends-to-a-us-parent", q: "What is the treaty rate on dividends to a US parent?", a: "15% if the US company holds at least 10% of the voting stock of the payer, otherwise 25%." },
      { n: 12, id: "what-is-the-treaty-rate-on-interest", q: "What is the treaty rate on interest?", a: "10% for loans from banks and similar institutions, 15% in other cases." },
      { n: 13, id: "what-is-the-treaty-rate-on-royalties", q: "What is the treaty rate on royalties?", a: "10% for equipment royalties and related services, 15% for other covered payments." },
      { n: 14, id: "what-are-fees-for-included-services", q: "What are fees for included services?", a: "Fees for services that make available technical knowledge, experience, skill, know-how or processes, or transfer a technical plan or design." },
      { n: 15, id: "are-treaty-rates-caps-or-fixed-rates", q: "Are treaty rates caps or fixed rates?", a: "Caps. The rate applied is the lower of the treaty and domestic rate." },
      { n: 16, id: "which-indian-section-covers-withholding-tax-on-payments-to-n", q: "Which Indian section covers Withholding Tax on payments to non-residents?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195)." },
      { n: 17, id: "what-is-form-6166", q: "What is Form 6166?", a: "An IRS letter certifying US tax residency, requested with Form 8802." },
      { n: 18, id: "what-is-form-41", q: "What is Form 41?", a: "A statement a non-resident gives to claim treaty benefits in India. It was previously Form 10F." },
      { n: 19, id: "do-we-need-a-no-pe-declaration", q: "Do we need a no-PE declaration?", a: "Often. Payers and tax officers commonly ask the recipient to confirm it has no permanent establishment in India." },
      { n: 20, id: "how-long-is-form-6166-valid", q: "How long is Form 6166 valid?", a: "It generally covers one calendar year." },
      { n: 21, id: "what-is-beneficial-ownership", q: "What is beneficial ownership?", a: "It means the recipient is the real owner of the income and not a conduit." },
      { n: 22, id: "which-forms-go-with-the-remittance", q: "Which forms go with the remittance?", a: "Form 145 (previously Form 15CA) and, where required, a Chartered Accountant's Form 146 (previously Form 15CB)." },
      { n: 23, id: "what-if-the-payer-deducts-tax-at-the-higher-rate", q: "What if the payer deducts tax at the higher rate?", a: "You may claim a refund in India, but it takes time. Provide documents before payment to avoid this." },
      { n: 24, id: "do-treaty-rates-apply-to-capital-gains", q: "Do treaty rates apply to capital gains?", a: "No treaty rate cap applies to capital gains. Domestic rules generally apply." },
    ],
  },
  {
    id: "expat-tax",
    label: "Expat tax residency and double tax relief",
    items: [
      { n: 25, id: "when-is-a-foreign-national-resident-in-india-for-tax", q: "When is a foreign national resident in India for tax?", a: "Generally with 182 days or more in India in the tax year, or 60 days or more plus 365 days or more in the four preceding years, with exceptions." },
      { n: 26, id: "what-is-the-indian-tax-year", q: "What is the Indian tax year?", a: "1 April to 31 March. The Income-tax Act, 2025 uses the term tax year." },
      { n: 27, id: "are-us-citizens-taxed-in-the-us-while-working-in-india", q: "Are US citizens taxed in the US while working in India?", a: "Yes. The US taxes citizens and residents on worldwide income." },
      { n: 28, id: "how-is-double-tax-relieved-for-a-us-citizen-in-india", q: "How is double tax relieved for a US citizen in India?", a: "Mainly through the foreign tax credit (Form 1116) or the foreign earned income exclusion (Form 2555)." },
      { n: 29, id: "what-is-the-treaty-tie-breaker", q: "What is the treaty tie-breaker?", a: "Tests in Article 4: permanent home, centre of vital interests, habitual abode, nationality, then agreement of the authorities." },
      { n: 30, id: "can-a-short-business-trip-create-indian-tax-for-an-employee", q: "Can a short business trip create Indian tax for an employee?", a: "It can be exempt under the treaty if its conditions are met, but check the days test and who bears the cost." },
      { n: 31, id: "can-a-short-trip-create-pe-risk-for-the-us-parent", q: "Can a short trip create PE risk for the US parent?", a: "Yes, if the visitor negotiates or concludes contracts or works from a fixed place in India." },
      { n: 32, id: "do-expats-need-to-file-an-indian-return", q: "Do expats need to file an Indian return?", a: "Generally yes if resident or with Indian-source income above the filing limits, even if tax was withheld." },
      { n: 33, id: "is-salary-paid-from-the-us-taxable-in-india", q: "Is salary paid from the US taxable in India?", a: "It can be if the work is performed in India, subject to the treaty rule for short stays. Take advice." },
      { n: 34, id: "who-handles-the-us-return", q: "Who handles the US return?", a: "A US CPA. AU Corporate handles Indian filings and coordinates with them." },
    ],
  },
  {
    id: "social-security",
    label: "Social security for US expats",
    items: [
      { n: 35, id: "is-there-a-us-india-totalization-agreement", q: "Is there a US-India totalization agreement?", a: "We are not aware of one in force as of October 2026. Check the Social Security Administration's list." },
      { n: 36, id: "what-does-a-totalization-agreement-do", q: "What does a totalization agreement do?", a: "It stops double social security contributions for the same work and combines coverage periods for benefits." },
      { n: 37, id: "can-a-us-expat-get-an-indian-certificate-of-coverage", q: "Can a US expat get an Indian certificate of coverage?", a: "Not from a US-India agreement, because none is in force." },
      { n: 38, id: "does-the-tax-treaty-cover-social-security", q: "Does the tax treaty cover social security?", a: "No. Article 2 excludes social security taxes." },
      { n: 39, id: "does-an-american-in-india-have-to-contribute-to-indian-provi", q: "Does an American in India have to contribute to Indian provident fund?", a: "Generally yes as an international worker of a covered establishment, unless an exclusion applies." },
      { n: 40, id: "is-there-a-wage-ceiling-for-international-workers", q: "Is there a wage ceiling for international workers?", a: "No. They contribute on full salary." },
      { n: 41, id: "can-an-international-worker-withdraw-epf-when-leaving-india", q: "Can an international worker withdraw EPF when leaving India?", a: "Generally not. Withdrawal is tied to retirement or permanent total incapacity, subject to current rules." },
      { n: 42, id: "what-did-the-high-courts-decide-on-this", q: "What did the High Courts decide on this?", a: "The Karnataka High Court struck the provisions down in 2024. The Delhi High Court upheld them on 4 November 2025. We are not aware of a final Supreme Court ruling." },
      { n: 43, id: "what-is-the-employees-provident-funds-scheme-2026", q: "What is the Employees' Provident Funds Scheme, 2026?", a: "The current provident fund scheme, reported to have taken effect on 1 July 2026, with a framework for international workers." },
      { n: 44, id: "does-a-us-citizen-working-for-a-us-employer-in-india-pay-fic", q: "Does a US citizen working for a US employer in India pay FICA?", a: "Generally yes, as FICA applies to US citizens and residents working abroad for an American employer." },
      { n: 45, id: "does-an-american-employed-by-an-indian-subsidiary-pay-fica", q: "Does an American employed by an Indian subsidiary pay FICA?", a: "Generally no, unless the parent has a Section 3121(l) agreement covering the subsidiary." },
      { n: 46, id: "what-is-a-section-3121-l-agreement", q: "What is a Section 3121(l) agreement?", a: "An agreement between an American employer and the Treasury that extends Social Security coverage to US citizens and residents working for foreign affiliates." },
      { n: 47, id: "do-self-employed-americans-in-india-pay-self-employment-tax", q: "Do self-employed Americans in India pay self-employment tax?", a: "Generally yes." },
      { n: 48, id: "does-medicare-cover-care-in-india", q: "Does Medicare cover care in India?", a: "Generally no." },
      { n: 49, id: "does-an-employer-of-record-avoid-indian-provident-fund", q: "Does an Employer of Record avoid Indian provident fund?", a: "No. The EOR is the employer and the provident fund rules apply to the worker." },
      { n: 50, id: "who-should-decide-the-structure", q: "Who should decide the structure?", a: "Your HR, finance and tax teams together, with Indian and US advisers, before the assignment begins." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function TaxAndSocialSecurityTreatiesFaqPage() {
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
        headline="Questions About the India-US Tax Treaty and Social Security for US Expats"
        description="50 plain answers on the India-US tax treaty, DTAA withholding rates, Form 6166 and 41, expat tax, EPF, FICA and the missing totalization agreement."
        datePublished="2026-10-14"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/blog/usa-to-india" },
          { label: "Tax and Social Security Treaties", href: "/blog/usa-to-india/tax-and-social-security-treaties" },
          { label: "FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for US companies"
        title="Questions About the India-US Tax Treaty and Social Security for US Expats"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/blog/usa-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: Tax and Social Security Treaties
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          These are the questions US companies and expats ask about the India-US tax treaty and social security,
          grouped by topic. Each answer is short; the{" "}
          <Link href="/blog/usa-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
          explains each topic in depth.
        </GuideAnswerBox>

        <p className="text-gray-600 leading-relaxed mb-8">
          Indian tax law changed on 1 April 2026: the Income-tax Act, 2025 and Income-tax Rules, 2026 replace
          the 1961 Act. Where a form or section has a new name, we give the new name with the earlier one in
          brackets. We are not aware of a US-India totalization agreement in force as of October 2026. General
          information only; confirm current requirements before acting.
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
          <Link href="/blog/usa-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: Tax and Social Security Treaties
          </Link>
        </p>

        <h2 id="guides" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Read the full guides</h2>

        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mt-6">
          <Link href="/blog/usa-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to India-US tax treaty and social security: the complete guide
          </Link>
        </p>

        <p className="mt-6">
          <Link href="/blog/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 14 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Still Have a Treaty or Social Security Question?"
        description="Tell us what's specific to your case — we'll answer directly on a call."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
