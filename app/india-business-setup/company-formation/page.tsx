import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { LeadForm } from '@/components/LeadForm'
import { FaqAccordion } from '@/components/FaqAccordion'
import { EntitySelectorTool } from '@/components/EntitySelectorTool'
import { DocumentChecklist } from '@/components/DocumentChecklist'
import { ArrowRight, Clock, FileCheck2, Layers, Timer } from 'lucide-react'

const entityTypes = [
  { name: 'Private Limited Company', desc: 'The default vehicle for most foreign investment — a separate legal entity with limited liability, minimum two shareholders, and full operating flexibility.' },
  { name: 'Limited Liability Partnership (LLP)', desc: 'A hybrid structure combining partnership flexibility with limited liability; less commonly used for FDI-funded operating businesses than a Private Limited Company.' },
  { name: 'One Person Company (OPC)', desc: 'A single-shareholder company structure available only to a natural person who is an Indian citizen (resident in India, or — since a 2021 relaxation — an NRI who has stayed in India for at least 120 days in the immediately preceding financial year); not an option for a foreign national or a foreign corporate parent.' },
  { name: 'Wholly Owned Subsidiary (WOS)', desc: 'A Private Limited Company where 100% of the shares are held by the foreign parent — the standard structure for a foreign company operating in India in its own right.' },
  { name: 'Branch Office', desc: 'An extension of the foreign parent (not a separate Indian legal entity), permitted only for specified activities and subject to RBI approval.' },
  { name: 'Liaison Office', desc: 'A representative, non-revenue-generating presence used purely for market research or coordination with Indian counterparts.' },
  { name: 'Project Office', desc: 'A temporary presence set up to execute a specific contract or project in India.' },
  { name: 'Joint Venture (JV)', desc: 'An Indian entity co-owned with a local partner, typically structured as a Private Limited Company under a shareholders’ agreement.' },
]

const incorporationSteps = [
  { title: 'Digital Signature Certificate (DSC)', desc: 'Every proposed director needs a DSC to sign incorporation documents electronically; for a foreign national this typically takes longer to process than for a resident director because of the additional identity-verification steps involved.' },
  { title: 'Director Identification Number (DIN)', desc: 'Applied for via Form DIR-3, or directly within the SPICe+ filing for first-time directors, giving each director a unique regulatory identifier.' },
  { title: 'Name reservation — SPICe+ Part A', desc: 'The proposed company name is checked against existing names and trademarks and reserved with the Registrar of Companies (RoC).' },
  { title: 'Incorporation filing — SPICe+ Part B (Form INC-32)', desc: 'A single integrated filing that, once approved, delivers the Certificate of Incorporation together with PAN, TAN, GSTIN (where opted at this stage), and EPFO/ESIC registration numbers in one pass.' },
  { title: 'Certificate of Incorporation (CoI) and CIN', desc: 'The RoC issues the Certificate of Incorporation along with the company’s Corporate Identification Number (CIN), at which point the company legally exists and can open a bank account, sign contracts and begin operating.' },
]

const complianceRoadmap = [
  { title: 'Day 0 — Certificate of Incorporation issued', desc: 'The company legally exists and can begin the next steps immediately.' },
  { title: 'Bank account opening', desc: 'A corporate current account can only be opened once the CoI, PAN, MOA/AOA and KYC documents are in hand, and foreign-sourced documents typically need to be apostilled first; the account must sit with an RBI-authorised (AD Category-I) bank.' },
  { title: 'Capital infusion and FIRC', desc: 'Once the parent remits the initial share capital into that account, the bank issues a Foreign Inward Remittance Certificate (FIRC) confirming receipt.' },
  { title: 'FC-GPR filing', desc: 'The resulting share allotment must be reported to RBI via Form FC-GPR on the FIRMS portal — within a 30-day window from allotment.' },
  { title: 'GST registration', desc: 'Where the turnover threshold is crossed or voluntary registration makes sense (see below).' },
  { title: 'Annual FLA return', desc: 'Any entity holding foreign investment on its books must file the Annual Return on Foreign Liabilities and Assets with RBI every year, regardless of whether any transaction happened that year.' },
  { title: 'Ongoing RoC annual filings', desc: 'Financial statements (Form AOC-4) and the annual return (Form MGT-7/7A) are due every year for the life of the entity, alongside the statutory audit and Annual General Meeting.' },
]

const countryPages = [
  { label: 'Australia', href: '/india-entry-for-australian-companies' },
  { label: 'United States', href: '/india-entry-for-us-companies' },
  { label: 'United Kingdom', href: '/india-entry-for-uk-companies' },
  { label: 'Singapore', href: '/india-entry-for-singapore-companies' },
  { label: 'Germany', href: '/india-entry-for-german-companies' },
  { label: 'Japan', href: '/india-entry-for-japan-companies' },
  { label: 'China', href: '/india-entry-for-china-companies' },
]

const faqs = [
  {
    q: 'Is company registration in India fully online?',
    a: 'Yes — the SPICe+ filing, DSC application, DIN application and name reservation are all completed through the MCA21 V3 portal. The parts that can’t be done remotely are physical steps outside the portal itself, such as obtaining apostilles on foreign documents and, in some cases, biometric verification for certain filings.',
  },
  {
    q: 'What is the minimum capital required to register a company in India?',
    a: 'There is no statutory minimum paid-up capital requirement for a Private Limited Company under current law — you can incorporate with a nominal amount of share capital. In practice, the amount is set based on what the business actually needs to fund its initial operations, bank account minimum-balance expectations, and how the parent plans to structure its initial capital infusion.',
  },
  {
    q: 'Is GST registration mandatory immediately after company incorporation in India?',
    a: 'No — GST registration is triggered by crossing the applicable turnover threshold (Rs 20 lakh for services, Rs 40 lakh for goods, in most states), not by incorporation itself. Many foreign-owned entities register earlier anyway, voluntarily, particularly where they invoice only their overseas parent and want to file under a Letter of Undertaking.',
  },
  {
    q: 'How long does company registration in India actually take — official timeline vs. real-world experience?',
    a: 'The Automatic Route typically clears in 4-6 weeks and the Government Approval Route in 8-12 weeks, with the full path to an operational, banked entity generally taking 8-12 weeks overall. Where that differs from a faster "official" processing-time figure sometimes quoted for the incorporation filing alone, the gap is usually explained by name resubmission, DSC delays for a foreign director, apostille turnaround, and resident-director paperwork — not by the MCA filing itself being slow.',
  },
  {
    q: 'What are the sectors under the 100% FDI automatic route in India?',
    a: 'Most sectors — including manufacturing, most services, IT and software, and infrastructure development — allow 100% foreign investment under the Automatic Route with no prior government approval. A shorter list of sensitive sectors (multi-brand retail, insurance, defence beyond certain limits, and others) instead require Government Route approval.',
  },
  {
    q: 'How can profits be repatriated from an Indian subsidiary to the foreign parent company?',
    a: 'There are three main routes: dividends (paid out of distributable profits, subject to withholding tax and any applicable DTAA relief), a share buyback (the company repurchases shares from the parent, taxed differently from a dividend), and a capital reduction (returning a portion of paid-up capital to the shareholder, which requires a formal Companies Act process and, typically, RBI/NCLT involvement). Which route makes sense depends on the entity’s accumulated profit position, its capital structure, and the tax treatment each route triggers for the specific parent jurisdiction — this is generally worth structuring in advance with tax advice rather than deciding at the point profits are ready to move.',
  },
  {
    q: 'How does the India DTAA network affect repatriation and withholding tax for a foreign-owned Indian company?',
    a: 'Where India has a Double Taxation Avoidance Agreement with the parent’s home jurisdiction, that treaty typically caps the withholding tax rate applied to dividends, interest, royalties and fees for technical services paid out of India, and the DTAA relief mechanism under India’s income tax law is what lets the parent claim that lower treaty rate instead of the higher domestic rate. The actual math varies materially by treaty — for example, the India-Australia treaty applies a 15% rate on dividends/interest/FTS with a split royalty rate, and recent domestic rate cuts have in some cases made the domestic withholding rate more favourable than the treaty rate for royalties and FTS, which changes the practical repatriation calculus.',
  },
  {
    q: 'When can we actually open a bank account relative to incorporation — what’s the real sequence?',
    a: 'The sequence is: Certificate of Incorporation → PAN → MOA/AOA finalised → KYC documentation assembled → apostille of the foreign parent’s documents completed → account opened with an RBI-authorised (AD Category-I) bank → capital remitted and FIRC issued → FC-GPR filed. The apostille step is the one most foreign parents underestimate on timing, since it runs through authorities in the parent’s home country rather than anything India-side can expedite.',
  },
  {
    q: 'What actually happens if we miss the FC-GPR filing deadline?',
    a: 'A late FC-GPR filing isn’t resolved by simply paying a late fee — it has to go through RBI’s compounding process under FEMA: the entity submits a compounding application, RBI calculates a compounding amount based on the nature and duration of the delay, and the case is formally closed once that amount is paid. Until it’s compounded, the lapse sits on the entity’s compliance record and can complicate subsequent RBI filings or approvals, so it’s worth treating the 30-day window as a hard deadline rather than a soft target.',
  },
]

export default function CompanyFormationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'India Business Setup', href: '/india-business-setup' }, { label: 'Company Registration' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Company Registration in India</span>
          <h1 className="mb-3 mt-3 max-w-4xl text-4xl font-bold text-gray-900 md:text-5xl">Company Registration in India: A Complete Guide for Foreign Companies</h1>
          <p className="mb-6 text-sm text-gray-500">Last updated: 25 August 2026 — prepared by AU Corporate&apos;s taxation and regulatory compliance practice.</p>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Company registration in India for a foreign parent generally means incorporating a Private Limited Company (a wholly owned subsidiary) through the Ministry of Corporate Affairs&apos; SPICe+ filing: obtain a Digital Signature Certificate and Director Identification Number for the proposed directors, reserve a name, file the SPICe+ incorporation form along with the constitutional documents, and receive the Certificate of Incorporation, PAN, TAN and GST registration (where applicable) as part of the same filing. Most foreign-owned entities entering under the Automatic Route can expect incorporation itself to move within roughly <strong>4-6 weeks</strong>, rising to <strong>8-12 weeks</strong> where the investment falls under the Government Approval Route; the full path from entity selection through a working bank account and initial compliance setup typically takes around <strong>8-12 weeks</strong> end to end. The sections below walk through each stage in order, including the FDI eligibility question, the exact document set a foreign director needs, and what has to happen after incorporation to stay compliant.
          </p>
          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Link href="/india-business-setup/regulatory-compliance">Next: Regulatory Compliance <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Timer, value: '4-6 weeks', label: 'Automatic Route' },
              { icon: Clock, value: '8-12 weeks', label: 'Government Route' },
              { icon: Layers, value: '8', label: 'Entity Types Covered' },
              { icon: FileCheck2, value: '1', label: 'Single SPICe+ Filing' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-200 bg-white/70 p-4 text-center backdrop-blur-sm">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
                <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION VS INCORPORATION */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-4">Company Registration vs. Company Incorporation — Are They the Same Thing?</h2>
          <p className="leading-relaxed text-gray-600">
            In practice, yes — &ldquo;company registration,&rdquo; &ldquo;company incorporation&rdquo; and &ldquo;company formation&rdquo; are used interchangeably in India, and all three refer to the same MCA filing process that ends with a Certificate of Incorporation. &ldquo;Incorporation&rdquo; is the more precise legal term (it&apos;s the word the Companies Act, 2013 itself uses for the act of forming the company), while &ldquo;registration&rdquo; and &ldquo;formation&rdquo; are the more common phrases in everyday and search usage, partly because the same SPICe+ filing also completes several registrations at once — PAN, TAN, GSTIN, EPFO and ESIC — alongside the incorporation itself. This guide uses all three terms as synonyms throughout, matching how they&apos;re actually used by founders, CFOs and advisors.
          </p>
        </div>
      </section>

      {/* ENTITY TYPES */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">Choosing the Right Entity Type in India</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {entityTypes.map((entity) => (
              <div key={entity.name} className="rounded-xl border bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-[#081a42]">{entity.name}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{entity.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl leading-relaxed text-gray-600">
            The right choice usually comes down to what the entity is actually there to do. A business that wants to operate, invoice, hire and hold assets in its own name in India needs a full operating entity — almost always a Private Limited Company/WOS. A parent that only wants to test the market, liaise with local partners, or run a single time-limited project is usually better served by a Liaison or Project Office, which carry far lighter compliance but also cannot generate India-side revenue. A Branch Office sits in between — more operational latitude than a Liaison Office, but still legally the foreign company itself rather than an independent Indian entity, and RBI-approval-gated. For the fuller decision framework and a country-specific comparison, see our <Link href="/blog/wholly-owned-subsidiary" className="text-yellow-700 font-semibold hover:underline">wholly owned subsidiary incorporation guide</Link>, the <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-700 font-semibold hover:underline">US subsidiary vs. branch office comparison</Link> and the <Link href="/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india" className="text-yellow-700 font-semibold hover:underline">UK subsidiary vs. branch office comparison</Link>.
          </p>

          <div className="mt-10 rounded-xl border-l-4 border-yellow-400 bg-white p-6">
            <h3 className="mb-2 text-lg font-bold text-[#081a42]">Setting Up an India Subsidiary (Wholly Owned Subsidiary)</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              For most foreign companies searching for how to register a company in India, &ldquo;India subsidiary&rdquo; and &ldquo;company registration&rdquo; are effectively the same question — a WOS structured as a Private Limited Company is the default vehicle because it gives the parent full ownership and control, a separate legal identity that limits liability, and no restriction on the activities it can carry out (unlike a Branch or Liaison Office). One practical timing point worth planning around: India&apos;s financial year ends on 31 March, and parent companies often want a new subsidiary operational, banked and ready to invoice before that date to avoid a part-year set of statutory filings in its first year — which is a large part of why search interest in &ldquo;India subsidiary&rdquo; tends to spike in the weeks leading up to the fiscal year-end rather than being evenly spread through the year. For the full step-by-step incorporation walkthrough, including MOA/AOA drafting and the specific post-incorporation filings a WOS needs, see our <Link href="/blog/wholly-owned-subsidiary" className="text-yellow-700 font-semibold hover:underline">complete wholly owned subsidiary guide</Link>.
            </p>
          </div>

          <div className="mt-10">
            <EntitySelectorTool />
          </div>
        </div>
      </section>

      {/* FDI ELIGIBILITY */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-4">FDI Eligibility: Automatic Route vs. Government Approval Route</h2>
          <p className="leading-relaxed text-gray-600">
            Most sectors in India are open to 100% foreign investment under the Automatic Route, meaning no prior government approval is required — the entity simply completes its RBI reporting after the investment is made. A shorter list of sectors considered strategic or sensitive (multi-brand retail, insurance, defence beyond certain thresholds, and a handful of others) instead require prior approval from the Department for Promotion of Industry and Internal Trade (DPIIT) under the Government Route before the investment can proceed. In practice this distinction is what drives most of the difference in how long incorporation takes: Automatic Route investments typically clear in <strong>4-6 weeks</strong>, while Government Route investments run <strong>8-12 weeks</strong> once DPIIT and sector-ministry review are factored in. See our <Link href="/india-business-setup/fdi-channels" className="text-yellow-700 font-semibold hover:underline">FDI automatic and government approval routes</Link> guide for the full sector-by-sector table and documentation requirements.
          </p>
        </div>
      </section>

      {/* SPICE+ STEPS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">How to Register a Company in India: Step-by-Step (SPICe+ Process)</h2>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-10">
            Company incorporation in India is filed almost entirely online through the MCA&apos;s SPICe+ (Simplified Proforma for Incorporating a Company Electronically Plus) form — filed as Form INC-32 — on the MCA21 V3 portal (the legacy MCA21 V2 portal was decommissioned on 30 June 2026, so V3 is now the only version in use for fresh filings). The sequence is:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {incorporationSteps.map((step, index) => (
              <div key={step.title} className="rounded-xl border bg-white p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">{index + 1}</div>
                <h3 className="font-bold text-base mb-2 text-[#081a42]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border-l-4 border-yellow-400 bg-white p-6">
            <h3 className="mb-2 text-lg font-bold text-[#081a42]">Can a Foreign National Be a Director of an Indian Company?</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Yes — there is no nationality restriction on who can serve as a director of an Indian company, and a foreign national goes through the same DIN application process as an Indian director, using a passport rather than an Aadhaar/PAN-based identity document. The one structural requirement that matters here is that every Indian company must have at least one director who has stayed in India for a total period of not less than 182 days — under Section 149(3) of the Companies Act, 2013, calculated on a financial year basis (1 April to 31 March) rather than a calendar year. In practice, this means a board made up entirely of foreign nationals cannot incorporate an Indian company on its own; at least one resident director (who doesn&apos;t need to be a shareholder, and is often appointed specifically to satisfy this requirement) has to be part of the board from day one.
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-4">Documents Required for Company Registration in India</h2>
          <p className="leading-relaxed text-gray-600 mb-6">
            For a foreign-owned entity, the document set falls into two groups. From the Indian side, you&apos;ll need proof of the registered office (a lease/ownership document and a recent utility bill) and identity/address proof for any resident director or shareholder (PAN, Aadhaar, and a recent address document). From the foreign parent&apos;s side, the requirements are more specific than &ldquo;get everything notarised&rdquo; — India distinguishes between notarisation and apostille, and getting this wrong is one of the most common causes of delay:
          </p>
          <div className="mb-6">
            <DocumentChecklist />
          </div>
          <p className="leading-relaxed text-gray-600">
            Building in the lead time for apostille or embassy legalisation — which runs through the foreign director&apos;s home-country authorities, not an Indian one — is one of the most reliable ways to avoid the incorporation timeline slipping.
          </p>
        </div>
      </section>

      {/* COST AND TIMELINE */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-4">Company Registration Cost and Timeline in India</h2>
          <p className="leading-relaxed text-gray-600 mb-4">
            The honest answer sits across two different figures, and conflating them is where a lot of the confusion in this space comes from. The government filing fees for the incorporation steps themselves — name reservation, the SPICe+ filing, PAN/TAN, and initial statutory setup — are relatively modest and are broken down in full in our <Link href="/india-business-setup/timeline-resources" className="text-yellow-700 font-semibold hover:underline">detailed setup timeline and budget breakdown</Link>. Professional and advisory fees (drafting, apostille coordination, resident-director arrangement, and managing the filing itself) sit on top of that and vary by entity complexity.
          </p>
          <p className="leading-relaxed text-gray-600">
            On timeline, the Automatic Route typically moves in <strong>4-6 weeks</strong> and the Government Approval Route in <strong>8-12 weeks</strong>, consistent with the ranges on our <Link href="/india-business-setup/fdi-channels" className="text-yellow-700 font-semibold hover:underline">FDI automatic and government approval routes</Link> page — and the full journey from entity selection through a working bank account and initial compliance setup runs <strong>8-12 weeks</strong> overall, matching our <Link href="/india-business-setup/timeline-resources" className="text-yellow-700 font-semibold hover:underline">detailed setup timeline and budget breakdown</Link>. Where the official incorporation filing itself is sometimes quoted as clearing in a matter of days once submitted correctly, real-world timelines run longer for a foreign-owned entity because of a handful of recurring, avoidable delays: a proposed name getting rejected and needing resubmission, DSC processing taking longer for a foreign national director, apostille turnaround on the parent company&apos;s documents, and the resident-director appointment paperwork not being lined up in advance. None of these are unusual — they&apos;re simply the difference between the fastest possible filing and what a first-time foreign parent should actually plan for.
          </p>
        </div>
      </section>

      {/* MID-PAGE LEAD FORM */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <LeadForm title="Planning to Set Up Your Business in India?" description="Tell us about your company registration requirements and our India business team will get in touch." />
        </div>
      </section>

      {/* COMPLIANCE ROADMAP */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">What Happens After Incorporation: The Compliance Roadmap</h2>
          <p className="max-w-4xl leading-relaxed text-gray-600 mb-10">Incorporation is the start of the compliance relationship, not the end of it. In sequence:</p>
          <div className="relative space-y-4">
            <div aria-hidden="true" className="absolute left-[35px] top-9 bottom-9 hidden w-px bg-yellow-200 sm:block" />
            {complianceRoadmap.map((step, index) => (
              <div key={step.title} className="relative flex gap-5 rounded-xl border bg-white p-6">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">{index + 1}</div>
                <div>
                  <h3 className="font-bold text-base mb-1 text-[#081a42]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl leading-relaxed text-gray-600">
            This is the exact sequence our <Link href="/india-business-setup/regulatory-compliance" className="text-yellow-700 font-semibold hover:underline">full regulatory compliance framework</Link> and <Link href="/india-business-setup/banking-taxation" className="text-yellow-700 font-semibold hover:underline">banking and tax setup guide</Link> pages cover in detail — including the other five compliance regimes (labour, environmental, data protection, IP) beyond FEMA and corporate filings — worth reading in full once incorporation is underway rather than at the point a deadline is already close.
          </p>
        </div>
      </section>

      {/* FEMA / RBI REPORTING */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-4">FEMA and RBI Reporting for Foreign-Owned Companies</h2>
          <p className="leading-relaxed text-gray-600 mb-8">
            Once a company has foreign investment on its books, three RBI filings under the Foreign Exchange Management Act, 1999 (FEMA) become recurring obligations: Form FC-GPR reports the initial (and any subsequent) share allotment to the foreign parent, filed via the FIRMS portal within the prescribed window from allotment; Form FC-TRS reports any later transfer of shares between a resident and a non-resident; and the annual FLA return is a standing yearly obligation for as long as the entity carries foreign investment, independent of whether any transaction occurred that year. Missing the FC-GPR window doesn&apos;t just trigger a generic penalty — a late filing has to be regularised through RBI&apos;s compounding process under FEMA, which involves submitting a compounding application, paying a compounding amount calculated on the delay, and carrying that history on the entity&apos;s compliance record; it isn&apos;t simply a fee you pay after the fact.
          </p>
          <div className="rounded-xl border-l-4 border-yellow-400 bg-gray-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-[#081a42]">What Is an FOCC (Foreign Owned or Controlled Company)?</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              An FOCC — a Foreign Owned or Controlled Company — is an Indian company that is itself owned or controlled by non-resident entities (directly or through other Indian companies). The concept matters because of what it triggers downstream: under Rule 23 of the Foreign Exchange Management (Non-Debt Instruments) Rules, 2019, any further investment an FOCC makes into another Indian company is treated as indirect foreign investment and is subject to the same sectoral caps, entry-route conditions and reporting requirements as if the investment had come directly from abroad. In practice, this means a foreign-owned Indian subsidiary that wants to invest in, or acquire, another Indian company can&apos;t assume it&apos;s making a purely domestic investment — the FDI rules follow the ownership chain, not just the immediate investor.
            </p>
          </div>
        </div>
      </section>

      {/* GST */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-4">GST Registration After Incorporation</h2>
          <p className="leading-relaxed text-gray-600">
            GST registration is not automatic on incorporation — it&apos;s triggered once a business&apos;s aggregate turnover crosses the applicable threshold, currently Rs 20 lakh for a services business in most states (lower in a handful of special-category states) and Rs 40 lakh for a business supplying only goods. Many foreign-owned entities register voluntarily well before crossing that threshold, particularly where the Indian entity bills only its overseas parent, since registration allows filing a Letter of Undertaking (LUT) and invoicing exports as zero-rated rather than charging GST. See our <Link href="/india-business-setup/banking-taxation" className="text-yellow-700 font-semibold hover:underline">banking and tax setup guide</Link> for the full voluntary-registration and LUT logic.
          </p>
        </div>
      </section>

      {/* COUNTRY CALLOUT */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-4">Registering a Company in India From a Specific Country</h2>
          <p className="leading-relaxed text-gray-600 mb-8 max-w-4xl">
            Some of the practical detail — DTAA rates, trade-agreement context, existing bilateral frameworks — is genuinely country-specific rather than universal. If you&apos;re planning entry from one of the following markets, the linked page covers that country&apos;s specific considerations in more depth:
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {countryPages.map((c) => (
              <Link key={c.href} href={c.href} className="rounded-lg border p-4 text-center font-semibold text-gray-800 hover:border-yellow-400 hover:shadow-md transition">
                {c.label}
              </Link>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-gray-600">
            If your company is setting up a captive delivery or R&amp;D operation rather than a standard commercial subsidiary, our <Link href="/gcc-setup-india" className="text-yellow-700 font-semibold hover:underline">Global Capability Center setup guide</Link> covers the additional entity, tax and operational considerations specific to a GCC.
          </p>
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

      {/* NEXT STEPS */}
      <section className="border-t bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-2xl font-bold">Continue Your Journey</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/india-business-setup/fdi-channels" className="rounded-lg border p-6 transition hover:shadow-md">
              <h3 className="mb-2 font-semibold">FDI Channels</h3>
              <p className="text-sm text-gray-600">Automatic and government approval routes for foreign investment</p>
            </Link>
            <Link href="/india-business-setup/regulatory-compliance" className="rounded-lg border p-6 transition hover:shadow-md">
              <h3 className="mb-2 font-semibold">Regulatory Compliance</h3>
              <p className="text-sm text-gray-600">The full six-regime compliance framework</p>
            </Link>
            <Link href="/india-business-setup/banking-taxation" className="rounded-lg border p-6 transition hover:shadow-md">
              <h3 className="mb-2 font-semibold">Banking &amp; Taxation</h3>
              <p className="text-sm text-gray-600">Bank account sequencing, GST, and tax registration</p>
            </Link>
            <Link href="/india-business-setup/timeline-resources" className="rounded-lg border p-6 transition hover:shadow-md">
              <h3 className="mb-2 font-semibold">Timeline &amp; Resources</h3>
              <p className="text-sm text-gray-600">Detailed setup timeline and budget breakdown</p>
            </Link>
            <Link href="/contact" className="rounded-lg border p-6 transition hover:shadow-md">
              <h3 className="mb-2 font-semibold">Schedule Consultation</h3>
              <p className="text-sm text-gray-600">Get expert assistance with company registration</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
