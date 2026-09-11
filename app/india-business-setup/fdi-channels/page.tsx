import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { LeadForm } from '@/components/LeadForm'
import { FaqAccordion } from '@/components/FaqAccordion'
import { ArrowRight, CheckCircle, AlertCircle, Clock, Timer, Layers, FileCheck2 } from 'lucide-react'
import { ClickableReveal } from '@/components/ClickableReveal'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'

const sectorRules = [
  { sector: 'Retail Trading', rule: 'Single brand: 100% Automatic Route. Multi-brand: Government Route only, capped at 51%, with a minimum $100 million investment and at least 50% of that directed into backend infrastructure within 3 years of the first tranche.' },
  { sector: 'Insurance', rule: 'Since February 2026 (DPIIT Press Note 1, 2026 Series), 100% FDI is permitted under the Automatic Route for insurance companies and insurance intermediaries, up from the earlier 74% approval-gated cap. LIC remains capped at 20% Automatic Route. At least one of the chairperson, managing director or CEO must be a resident Indian citizen.' },
  { sector: 'Telecommunications', rule: '100% FDI is permitted overall — 49% under the Automatic Route, with the balance up to 100% requiring Government Route approval.' },
  { sector: 'Real Estate', rule: 'Construction-development activity: 100% Automatic Route, subject to project-level conditions. NRIs face fewer restrictions than other foreign investors; trading in land without development remains outside the FDI framework entirely.' },
  { sector: 'Banking (Private Sector)', rule: 'Up to 74% total — 49% under the Automatic Route, with the balance up to 74% requiring Government Route approval. Public sector banks are governed by separate statutory limits.' },
  { sector: 'E-commerce', rule: 'Marketplace model: 100% Automatic Route, subject to conditions preventing the platform from controlling seller inventory or influencing sale prices. Inventory-based model: still prohibited for domestic B2C sales; since 2026 (Press Note 3, 2026 Series) FDI-funded entities may use an inventory model exclusively to export goods manufactured or produced in India.' },
  { sector: 'Defence', rule: 'Up to 74% Automatic Route for companies holding a new industrial licence (raised from the earlier 49% cap). Investment beyond 74% requires Government Route approval and is permitted only where it is likely to result in access to modern technology.' },
  { sector: 'Print Media', rule: '26% cap on news and current-affairs publications, via Government Route only, with editorial-control conditions attached regardless of the source of capital.' },
]

const approvalSteps = [
  {
    step: 1,
    title: 'FIFP / NSWS Application',
    description: 'Submit the proposal entirely online through the Foreign Investment Facilitation Portal (FIFP), now integrated with the National Single Window System (NSWS). The May 2026 revised DPIIT SOP made this filing fully paperless — no physical documents are required.',
  },
  {
    step: 2,
    title: 'Preliminary Review',
    description: 'DPIIT checks the application for completeness and confirms the correct nodal ministry for the sector (2-3 weeks).',
  },
  {
    step: 3,
    title: 'Sector Ministry & Security Review',
    description: 'The relevant sector ministry reviews the proposal for approval; for sensitive sectors, or any investment with a link to a land-border country under Press Note 3, the Ministry of Home Affairs runs a separate security clearance in parallel (3-4 weeks).',
  },
  {
    step: 4,
    title: 'DPIIT Approval',
    description: 'Final approval is issued by DPIIT, following inter-ministerial consultation wherever more than one ministry has a stake in the sector (2-3 weeks).',
  },
  {
    step: 5,
    title: 'RBI / FEMA Compliance',
    description: 'Once approved, the same post-investment FEMA reporting applies as under the Automatic Route — Form FC-GPR filed via the FIRMS portal within the prescribed window from share allotment (1-2 weeks).',
  },
]

const faqs = [
  {
    q: 'What is the real difference between the Automatic Route and the Government Route for FDI in India?',
    a: 'Under the Automatic Route, a foreign investor can make the investment first and complete RBI/FEMA reporting afterwards — no prior sign-off is needed, and incorporation-linked investments typically clear in 4-6 weeks. Under the Government Route, DPIIT (and, where relevant, the sector ministry and Ministry of Home Affairs) must approve the investment before it is made, which is why these proposals typically take 8-12 weeks. Which route applies is determined entirely by the sector and, in some cases, the investor’s country of origin — not by the size of the investment. See our company registration guide for how this timeline difference plays out for incorporation as a whole.',
  },
  {
    q: 'Which sectors currently require government approval for FDI in India?',
    a: 'The main ones are multi-brand retail trading (51% cap), telecom and private banking beyond their 49% automatic thresholds, defence beyond 74%, print media (26% cap), and a handful of others such as atomic energy and broadcasting content services. Separately, any investment linked to a country sharing a land border with India requires government approval under Press Note 3 regardless of sector. The sector-by-sector table below has the current caps and conditions.',
  },
  {
    q: 'Does Press Note 3 still block Chinese investment into India in 2026?',
    a: 'Largely, yes, for direct investment. Press Note 3 (2020 Series) requires prior government approval — regardless of sector or amount — for any investment originating from, or beneficially owned by an entity in, a country sharing a land border with India (China, Pakistan, Bangladesh, Bhutan, Nepal, Myanmar and Afghanistan). In March 2026, the Union Cabinet approved a narrow relaxation: investments carrying no more than 10% Chinese beneficial ownership can now use the Automatic Route, and a 60-day expedited approval track applies to seven manufacturing sub-sectors. Direct investment from a Chinese- or Hong Kong-registered entity still needs full government-route approval — the 2026 change helps minority stakes inside diversified structures, not direct Chinese ownership.',
  },
  {
    q: 'Is FDI in insurance now fully open in India?',
    a: 'Yes — as of DPIIT Press Note 1 (2026 Series), issued 9 February 2026, 100% FDI is permitted under the Automatic Route for Indian insurance companies and insurance intermediaries (brokers, reinsurance brokers, corporate agents, third-party administrators and similar), up from the previous 74% approval-gated cap. Life Insurance Corporation of India is a specific exception, remaining capped at 20% Automatic Route. Companies taking foreign investment under this liberalised cap still need one of the chairperson, managing director or CEO to be a resident Indian citizen, and still need IRDAI’s regulatory clearance to operate — the FDI cap change doesn’t remove the separate insurance-licensing requirement.',
  },
  {
    q: 'How long does DPIIT government-route approval actually take under the new SOP?',
    a: 'DPIIT’s revised Standard Operating Procedure, issued in May 2026, formally extended the overall disposal target from 10 to 12 weeks — a more realistic figure than the SOP it replaced — while moving the filing itself to a fully paperless FIFP/NSWS process with defined timelines at each stage. In practice this sits within the 8-12 week range we quote across our India entry guides; the reform is about making that range more predictable and digital, not about compressing it dramatically.',
  },
  {
    q: 'Does an Automatic Route investment need any government filing at all?',
    a: 'Yes — "automatic" means no prior approval, not no paperwork. Once the investment is made, the Indian company still has to report it to RBI: Form FC-GPR for the share allotment (filed via the FIRMS portal within the prescribed window), and the Annual FLA return every year thereafter for as long as foreign investment sits on its books. Our company registration guide walks through this FEMA/RBI reporting sequence in full, including what happens if the FC-GPR deadline is missed.',
  },
]

export default function FDIChannelsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <Breadcrumb items={[{ label: "India Business Setup", href: "/india-business-setup" }, { label: "FDI Channels" }]} />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">FDI Investment Channels in India: Automatic Route vs. Government Approval Route</h1>
          <p className="mb-4 text-sm text-gray-500">Last updated: 11 September 2026 — prepared by AU Corporate&apos;s taxation and regulatory compliance practice.</p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Every foreign investment into an Indian company enters through one of two routes under India&apos;s FDI framework: the Automatic Route, where no prior government sign-off is needed and the investment is simply reported to RBI afterwards, or the Government Route, where DPIIT approval is required before the investment can be made. Which route applies is determined by sector — and, since 2020, in some cases by the investor&apos;s country of origin — not by deal size. This guide covers the legal framework behind that split, the DPIIT approval process under the revised 2026 SOP, the land-border-country rules under Press Note 3, and the current sector-by-sector caps, including the recent liberalisation in insurance.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/india-business-setup/company-formation">
              Next: Company Formation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Timer, value: '4-6 weeks', label: 'Automatic Route' },
              { icon: Clock, value: '8-12 weeks', label: 'Government Route' },
              { icon: Layers, value: '100%', label: 'FDI cap, most sectors' },
              { icon: FileCheck2, value: 'FIFP/NSWS', label: 'Government Route filing portal' },
            ].map((stat) => (
              <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white/70 p-4 text-center backdrop-blur-sm cursor-pointer">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
                <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </ClickableReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">FDI Framework Overview</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Automatic Route */}
            <ClickableReveal className="border-2 border-green-200 rounded-lg p-8 bg-green-50 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-900">Automatic Route</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">No government approval required</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Direct RBI compliance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Timeline: 4-6 weeks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Most sectors eligible</span>
                </li>
              </ul>
              <p className="text-green-800 font-semibold text-sm bg-white p-3 rounded">Most foreign investors use the Automatic Route due to faster processing and reduced bureaucracy.</p>
            </ClickableReveal>

            {/* Government Approval */}
            <ClickableReveal className="border-2 border-blue-200 rounded-lg p-8 bg-blue-50 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-900">Government Approval Route</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">DPIIT approval required before investment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Restricted or land-border-linked sectors</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Timeline: 8-12 weeks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Strategic and sensitive sectors</span>
                </li>
              </ul>
              <p className="text-blue-800 font-semibold text-sm bg-white p-3 rounded">Required for multi-brand retail, print media, defence beyond 74%, and any investment linked to a country sharing a land border with India.</p>
            </ClickableReveal>
          </div>
        </div>
      </section>

      {/* LEGAL FRAMEWORK */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-4">The Legal Framework Behind FDI in India</h2>
          <p className="leading-relaxed text-gray-600 mb-4">
            FDI in India runs on three layers of law working together. The Foreign Exchange Management Act, 1999 (FEMA) is the primary statute. The Foreign Exchange Management (Non-Debt Instruments) Rules, 2019 (the &ldquo;NDI Rules&rdquo;) set out the sector-wise conditions, caps and entry routes under FEMA. And the Consolidated FDI Policy — updated not by full reissue but through individual DPIIT Press Notes as changes are made — is the practical rulebook investors and their advisors actually work from day to day.
          </p>
          <p className="leading-relaxed text-gray-600">
            Two regulators split the work: DPIIT (the Department for Promotion of Industry and Internal Trade, under the Ministry of Commerce and Industry) sets and administers FDI policy and decides Government Route approvals, while the Reserve Bank of India (RBI) administers the FEMA reporting side once an investment is made — the Form FC-GPR, Form FC-TRS and Annual FLA filings covered in detail in our <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">company registration guide</Link>. In short: DPIIT decides whether and how an investment can be made; RBI is where it gets reported and monitored afterwards, regardless of which route it entered through.
          </p>
        </div>
      </section>

      {/* AUTOMATIC ROUTE DETAILS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Automatic Route - Key Details</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ClickableReveal className="bg-white p-6 rounded-lg border cursor-pointer">
              <h3 className="font-bold text-lg mb-4 text-yellow-600">Eligible Sectors</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Manufacturing & processing</li>
                <li>• Services sector</li>
                <li>• IT & software</li>
                <li>• Real estate (with conditions)</li>
                <li>• Infrastructure development</li>
                <li>• Insurance (up to 100%, since Feb 2026)</li>
              </ul>
            </ClickableReveal>

            <ClickableReveal className="bg-white p-6 rounded-lg border cursor-pointer">
              <h3 className="font-bold text-lg mb-4 text-yellow-600">Restricted Sectors</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Multi-brand retail trading</li>
                <li>• Print media</li>
                <li>• Atomic energy</li>
                <li>• Telecommunications & banking (beyond 49%)</li>
                <li>• Broadcasting</li>
                <li>• Civil aviation</li>
              </ul>
            </ClickableReveal>

            <ClickableReveal className="bg-white p-6 rounded-lg border cursor-pointer">
              <h3 className="font-bold text-lg mb-4 text-yellow-600">Documentation</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Incorporation certificate</li>
                <li>• Director identification</li>
                <li>• Share transfer documents</li>
                <li>• FEMA Form FC-GPR / FC-TRS</li>
                <li>• RBI compliance filing (FIRMS portal)</li>
                <li>• Bank account proof</li>
              </ul>
            </ClickableReveal>
          </div>
          <p className="max-w-4xl leading-relaxed text-gray-600">
            &ldquo;Automatic&rdquo; refers only to the absence of prior approval — it does not mean the investment goes unreported. Post-investment RBI/FEMA filing, principally Form FC-GPR within the prescribed window from share allotment, is still mandatory on the Automatic Route, and a missed deadline still has to be regularised through RBI&apos;s compounding process. See our <Link href="/india-business-setup/company-formation" className="text-yellow-700 font-semibold hover:underline">company registration guide</Link> for the full FEMA reporting sequence.
          </p>
        </div>
      </section>

      {/* GOVERNMENT APPROVAL DETAILS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Government Approval Route - Process</h2>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-12">
            DPIIT issued a revised Standard Operating Procedure (SOP) for Government Route processing in May 2026. It formally extended the overall disposal target from 10 to 12 weeks — a more realistic figure than the SOP it replaced — while moving the filing itself to a fully paperless FIFP/NSWS-only process, with defined timelines at each stage:
          </p>

          <div className="space-y-6">
            {approvalSteps.map((item) => (
              <ClickableReveal key={item.step} className="flex gap-6 p-6 border rounded-lg bg-gradient-to-r from-white to-gray-50 cursor-pointer">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ClickableReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS NOTE 3 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-4">Press Note 3: FDI From Countries Sharing a Land Border With India</h2>
          <p className="leading-relaxed text-gray-600 mb-4">
            Since April 2020, Press Note 3 (2020 Series) has required prior government approval — regardless of sector or investment size — for any investment originating from, or beneficially owned by an entity situated in, a country that shares a land border with India: China, Pakistan, Bangladesh, Bhutan, Nepal, Myanmar and Afghanistan. This overrides the sector&apos;s normal Automatic Route eligibility: an investment that would otherwise qualify for 100% automatic entry on its sector alone still needs DPIIT clearance if it originates from one of these jurisdictions, or if a beneficial owner in the ownership chain is based there.
          </p>
          <p className="leading-relaxed text-gray-600">
            In March 2026, the Union Cabinet approved the first substantive relaxation of this rule since it was introduced: investments carrying no more than 10% Chinese beneficial ownership can now proceed via the Automatic Route, and a 60-day expedited approval track was introduced for seven manufacturing sub-sectors. Direct investment from a Chinese- or Hong Kong-registered entity, however, still requires full Government Route approval — the 2026 changes ease the rule for minority stakes inside diversified fund structures, not for direct Chinese ownership itself. Any proposed investment with a Chinese, Pakistani or other land-border-country link anywhere in the ownership chain is worth checking against Press Note 3 before assuming Automatic Route eligibility on sector grounds alone.
          </p>
        </div>
      </section>

      {/* MID-PAGE LEAD FORM */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <LeadForm title="Not Sure Which FDI Route Applies to You?" description="Tell us about your sector and investment structure and our FEMA and regulatory team will confirm the applicable route and timeline." />
        </div>
      </section>

      {/* SECTOR-SPECIFIC RULES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Sector-Specific FDI Rules</h2>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-12">
            Sectoral caps and conditions are amended regularly through individual DPIIT Press Notes rather than a single periodic update, so it is worth confirming the current position for your specific sector before relying on a cap quoted elsewhere. The table below reflects the current position, including the February 2026 insurance liberalisation and the 2026 e-commerce export relaxation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sectorRules.map((item) => (
              <ClickableInfoCard key={item.sector} title={item.sector} desc={item.rule} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-10 text-center">Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* RELATED */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Continue Your Journey</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/india-business-setup/company-formation" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Company Formation</h3>
              <p className="text-sm text-gray-600">Entity registration and incorporation process</p>
            </Link>

            <Link href="/india-business-setup/regulatory-compliance" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Regulatory Compliance</h3>
              <p className="text-sm text-gray-600">The full six-regime compliance framework</p>
            </Link>

            <Link href="/services/taxation-regulatory" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">FEMA Compliance Services</h3>
              <p className="text-sm text-gray-600">Expert FDI documentation and RBI filing support</p>
            </Link>

            <Link href="/contact" className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold mb-2 hover:text-yellow-600">Schedule Consultation</h3>
              <p className="text-sm text-gray-600">Discuss your FDI strategy with our experts</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
