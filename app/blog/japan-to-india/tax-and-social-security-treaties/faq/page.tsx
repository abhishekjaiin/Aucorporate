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

const PAGE_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/faq"
const PARENT_URL = "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "treaty-basics", label: "Tax treaty basics" },
  { id: "rates-and-claims", label: "Withholding rates and claiming relief" },
  { id: "expat-tax", label: "Expat tax residency and double tax relief" },
  { id: "social-security", label: "Social security for Japanese expats" },
]

const relatedCards = [
  { title: "The India-Japan Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax", desc: "How the India-Japan tax treaty works: who qualifies, taxes covered, treaty versus domestic law, residency, relief from double tax and disputes.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" },
  { title: "India-Japan DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Technical Services", desc: "Treaty rates for payments from India to Japan: 10% on dividends, interest, royalties and fees for technical services, against 20% domestic rates.", href: "/blog/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "How to Claim India-Japan Treaty Benefits: Certificate of Residence, Form 41 and Beneficial Ownership", desc: "Documents a Japanese company needs to claim India-Japan treaty rates: certificate of residence, Form 41 (previously Form 10F) and no-PE declaration.", href: "/blog/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "Tax Residency for Japanese Expats in India: Residency Tests, Treaty Rules and Double Tax Relief", desc: "Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit.", href: "/blog/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan" },
  { title: "The Japan-India Social Security Agreement: Detached Workers, Certificate of Coverage and Totalization", desc: "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.", href: "/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" },
  { title: "EPF for International Workers in India: What Japanese Expats and Their Employers Must Know", desc: "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme.", href: "/blog/japan-to-india/tax-and-social-security-treaties/epf-international-workers" },
  { title: "Japanese Social Insurance for Employees Sent to India: Pension, Health and Employment Insurance", desc: "What happens to Japanese pension, health and employment insurance when an employee is sent to India: the Certificate of Coverage and who pays what.", href: "/blog/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "treaty-basics",
    label: "Tax treaty basics",
    items: [
      { n: 1, id: "does-india-have-a-tax-treaty-with-japan", q: "Does India have a tax treaty with Japan?", a: "Yes. The India-Japan double taxation avoidance agreement (DTAA) covers income tax and caps Withholding Tax on dividends, interest, royalties and fees for technical services." },
      { n: 2, id: "who-can-use-the-india-japan-tax-treaty", q: "Who can use the India-Japan tax treaty?", a: "Residents of India or Japan as defined in the treaty, including companies and individuals." },
      { n: 3, id: "does-the-treaty-apply-automatically", q: "Does the treaty apply automatically?", a: "No. The recipient must prove residence and meet the conditions of each article." },
      { n: 4, id: "which-indian-provision-gives-effect-to-tax-treaties", q: "Which Indian provision gives effect to tax treaties?", a: "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A of the 1961 Act). The treaty applies to the extent it is more beneficial." },
      { n: 5, id: "what-taxes-does-the-treaty-cover", q: "What taxes does the treaty cover?", a: "Income taxes. Social security contributions are covered by a separate agreement." },
      { n: 6, id: "what-is-the-mutual-agreement-procedure", q: "What is the mutual agreement procedure?", a: "A route by which the two tax authorities resolve cases of taxation not in line with the treaty." },
      { n: 7, id: "does-the-treaty-remove-the-need-to-file-in-japan", q: "Does the treaty remove the need to file in Japan?", a: "No. Japanese companies and residents still file in Japan and claim relief under Japanese rules." },
      { n: 8, id: "how-does-japan-relieve-double-tax-on-dividends", q: "How does Japan relieve double tax on dividends?", a: "Generally through a 95% exemption for qualifying foreign subsidiaries (25% holding for six months). Confirm with a Japanese adviser." },
      { n: 9, id: "is-the-indian-subsidiary-a-permanent-establishment-of-the-ja", q: "Is the Indian subsidiary a permanent establishment of the Japanese parent?", a: "Not by itself. A permanent establishment arises only if the subsidiary acts as a dependent agent or the parent has a fixed place or other presence in India." },
      { n: 10, id: "are-capital-gains-on-the-indian-subsidiary-s-shares-taxed-in", q: "Are capital gains on the Indian subsidiary's shares taxed in India?", a: "Gains on shares of an Indian company are generally taxable in India under the treaty, subject to its conditions." },
    ],
  },
  {
    id: "rates-and-claims",
    label: "Withholding rates and claiming relief",
    items: [
      { n: 11, id: "what-is-the-treaty-rate-on-dividends-to-a-japanese-parent", q: "What is the treaty rate on dividends to a Japanese parent?", a: "10%." },
      { n: 12, id: "what-is-the-treaty-rate-on-interest", q: "What is the treaty rate on interest?", a: "10%. Some interest owed to certain Japanese government and public financial bodies is exempt in India." },
      { n: 13, id: "what-is-the-treaty-rate-on-royalties-and-fees-for-technical-", q: "What is the treaty rate on royalties and fees for technical services?", a: "10% for both." },
      { n: 14, id: "what-is-the-indian-domestic-rate-on-these-payments", q: "What is the Indian domestic rate on these payments?", a: "Generally 20% before surcharge and cess, so the 10% treaty rate is usually lower." },
      { n: 15, id: "are-treaty-rates-caps-or-fixed-rates", q: "Are treaty rates caps or fixed rates?", a: "Caps. The rate applied is the lower of the treaty and domestic rate." },
      { n: 16, id: "do-surcharge-and-cess-apply-on-top-of-the-treaty-rate", q: "Do surcharge and cess apply on top of the treaty rate?", a: "This has been litigated. Confirm the position for the tax year before remitting." },
      { n: 17, id: "which-indian-section-covers-withholding-tax-on-payments-to-n", q: "Which Indian section covers Withholding Tax on payments to non-residents?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195)." },
      { n: 18, id: "what-document-proves-japanese-residence", q: "What document proves Japanese residence?", a: "A certificate of residence issued by the Japanese tax office." },
      { n: 19, id: "what-is-form-41", q: "What is Form 41?", a: "A statement a non-resident gives to claim treaty benefits in India. It was previously Form 10F." },
      { n: 20, id: "do-we-need-a-no-pe-declaration", q: "Do we need a no-PE declaration?", a: "Often. Payers and tax officers commonly ask the recipient to confirm it has no permanent establishment in India." },
      { n: 21, id: "what-is-beneficial-ownership", q: "What is beneficial ownership?", a: "It means the recipient is the real owner of the income and not a conduit." },
      { n: 22, id: "which-forms-go-with-the-remittance", q: "Which forms go with the remittance?", a: "Form 145 (previously Form 15CA) and, where required, a Chartered Accountant's Form 146 (previously Form 15CB)." },
      { n: 23, id: "what-if-the-payer-deducts-tax-at-the-higher-rate", q: "What if the payer deducts tax at the higher rate?", a: "You may claim a refund in India, but it takes time. Provide documents before payment to avoid this." },
      { n: 24, id: "is-a-japanese-language-certificate-accepted", q: "Is a Japanese-language certificate accepted?", a: "Keep an English translation with the original, because Indian payers and officers usually need it." },
    ],
  },
  {
    id: "expat-tax",
    label: "Expat tax residency and double tax relief",
    items: [
      { n: 25, id: "when-is-a-foreign-national-resident-in-india-for-tax", q: "When is a foreign national resident in India for tax?", a: "Generally with 182 days or more in India in the tax year, or 60 days or more plus 365 days or more in the four preceding years, with exceptions." },
      { n: 26, id: "what-is-the-indian-tax-year", q: "What is the Indian tax year?", a: "1 April to 31 March. The Income-tax Act, 2025 uses the term tax year." },
      { n: 27, id: "can-a-japanese-employee-on-assignment-remain-a-japanese-tax-", q: "Can a Japanese employee on assignment remain a Japanese tax resident?", a: "Yes, depending on Japanese rules and where the person's home and family are. Confirm each case with a Japanese adviser." },
      { n: 28, id: "how-is-double-tax-relieved-for-a-japanese-employee-in-india", q: "How is double tax relieved for a Japanese employee in India?", a: "Mainly through the treaty and the foreign tax credit in Japan." },
      { n: 29, id: "what-is-the-treaty-tie-breaker", q: "What is the treaty tie-breaker?", a: "Tests that decide which country is the treaty residence when a person is resident in both." },
      { n: 30, id: "does-the-183-day-rule-exempt-a-visiting-employee", q: "Does the 183-day rule exempt a visiting employee?", a: "It can, if the employee is in India for 183 days or fewer, the employer is not an Indian resident and an Indian permanent establishment does not bear the cost." },
      { n: 31, id: "why-does-a-secondment-to-the-indian-subsidiary-matter", q: "Why does a secondment to the Indian subsidiary matter?", a: "If the Indian subsidiary bears the cost, the short-stay exemption can fail and the salary is taxable in India." },
      { n: 32, id: "can-a-short-trip-create-pe-risk-for-the-japanese-parent", q: "Can a short trip create PE risk for the Japanese parent?", a: "Yes, if the visitor negotiates or concludes contracts or works from a fixed place in India." },
      { n: 33, id: "do-expats-need-to-file-an-indian-return", q: "Do expats need to file an Indian return?", a: "Generally yes if resident or with Indian-source income above the filing limits, even if tax was withheld." },
      { n: 34, id: "who-handles-the-japanese-return", q: "Who handles the Japanese return?", a: "A Japanese tax adviser. AU Corporate handles Indian filings and coordinates with them." },
    ],
  },
  {
    id: "social-security",
    label: "Social security for Japanese expats",
    items: [
      { n: 35, id: "is-there-a-japan-india-social-security-agreement", q: "Is there a Japan-India social security agreement?", a: "Yes. The Agreement between Japan and India on Social Security has been in force since 1 October 2016." },
      { n: 36, id: "what-does-the-agreement-cover", q: "What does the agreement cover?", a: "Pension systems: in Japan the National Pension and Employees' Pension Insurance, in India the EPS and EPF. It covers employees, not the self-employed." },
      { n: 37, id: "what-does-the-agreement-do", q: "What does the agreement do?", a: "It lets a detached worker stay in the home pension system and allows pension periods in both countries to be combined." },
      { n: 38, id: "how-long-is-the-detached-worker-period", q: "How long is the detached worker period?", a: "Initially five years. Extensions are possible if the institutions of both countries agree." },
      { n: 39, id: "what-is-a-certificate-of-coverage", q: "What is a Certificate of Coverage?", a: "A certificate proving the employee remains covered by the home system, so the host country does not require contributions." },
      { n: 40, id: "who-applies-for-the-certificate", q: "Who applies for the certificate?", a: "The Japanese employer, through the Japan Pension Service route, before the employee leaves." },
      { n: 41, id: "does-a-local-hire-by-the-indian-subsidiary-qualify", q: "Does a local hire by the Indian subsidiary qualify?", a: "No. The detached worker rule is for employees sent by an employer with a place of business in Japan." },
      { n: 42, id: "does-an-international-worker-in-india-contribute-to-epf", q: "Does an international worker in India contribute to EPF?", a: "Generally yes on full salary, unless excluded under an agreement with a Certificate of Coverage." },
      { n: 43, id: "is-there-a-wage-ceiling-for-international-workers", q: "Is there a wage ceiling for international workers?", a: "No. They contribute on full salary." },
      { n: 44, id: "does-the-agreement-cover-health-insurance", q: "Does the agreement cover health insurance?", a: "No. It covers pensions only." },
      { n: 45, id: "is-indian-esi-relevant-for-expats", q: "Is Indian ESI relevant for expats?", a: "ESI applies only below its wage ceiling and is outside the agreement. Most expats arrange private cover." },
      { n: 46, id: "can-periods-in-both-countries-be-added-together", q: "Can periods in both countries be added together?", a: "Yes, for pension benefits. The EPS pension needs 10 years of coverage and Japanese periods can be added to reach it. EPF periods are not totalized." },
      { n: 47, id: "what-did-the-high-courts-decide-on-international-workers", q: "What did the High Courts decide on international workers?", a: "The Karnataka High Court struck the provisions down in 2024. The Delhi High Court upheld them on 4 November 2025. We are not aware of a final Supreme Court ruling." },
      { n: 48, id: "does-an-employer-of-record-avoid-indian-provident-fund", q: "Does an Employer of Record avoid Indian provident fund?", a: "No. The EOR is the employer and provident fund rules apply, subject to any exclusion." },
      { n: 49, id: "what-if-the-employee-moves-onto-indian-payroll", q: "What if the employee moves onto Indian payroll?", a: "The detached worker rule may no longer apply and Indian provident fund can apply. Take advice before changing the employer." },
      { n: 50, id: "who-decides-the-structure", q: "Who decides the structure?", a: "HR, finance and tax together, with Indian and Japanese advisers, before the assignment begins." },
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
        headline="Questions About the India-Japan Tax Treaty and Social Security Agreement"
        description="50 plain answers on the India-Japan tax treaty, 10% withholding rates, certificate of residence, Form 41, expat tax and the Japan-India social security agreement."
        datePublished="2026-10-20"
        dateModified="2026-10-20"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/blog/japan-to-india" },
          { label: "Tax and Social Security Treaties", href: "/blog/japan-to-india/tax-and-social-security-treaties" },
          { label: "FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for Japanese companies"
        title="Questions About the India-Japan Tax Treaty and Social Security Agreement"
        updated="20 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: Tax and Social Security Treaties
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          These are the questions Japanese companies and expats ask about the India-Japan tax treaty and the
          Japan-India Social Security Agreement, grouped by topic. Each answer is short; the{" "}
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
          explains each topic in depth.
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
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">
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
          <Link href="/blog/japan-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to India-Japan tax treaty and social security: the complete guide
          </Link>
        </p>

        <p className="mt-6">
          <Link href="/blog/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideAuthorBio />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 20 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Still Unsure About the India-Japan Treaty?"
        description="Tell us what is specific to your group, and we'll answer it on a call."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
