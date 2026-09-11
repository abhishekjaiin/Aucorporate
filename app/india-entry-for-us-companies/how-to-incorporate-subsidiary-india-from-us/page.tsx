import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableInfoCard } from '@/components/ClickableInfoCard'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Users, Building2, ShieldCheck, FileCheck } from 'lucide-react'

const quickFacts = [
  { icon: Users, value: '2 Directors Min.', label: 'One Must Be India-Resident (182+ Days)' },
  { icon: Building2, value: 'Private Limited', label: 'Typical Structure for a US-Owned Subsidiary' },
  { icon: ShieldCheck, value: 'No Minimum', label: 'Paid-Up Capital Requirement' },
  { icon: FileCheck, value: 'Mostly Remote', label: 'In-Person Need Is the Exception, Not the Rule' },
]

const documentItems = [
  {
    title: 'Certificate of Incorporation (apostilled)',
    detail: "The US parent's own state-issued certificate of incorporation, notarized in the US and then apostilled by the relevant Secretary of State before it's accepted by Indian authorities.",
  },
  {
    title: 'Board Resolution',
    detail: "A resolution of the US parent's board authorizing the Indian subsidiary, naming the authorized representative, and stating the proposed shareholding — apostilled alongside the certificate of incorporation.",
  },
  {
    title: 'Power of Attorney',
    detail: 'Authorizes a named individual to act on the parent company\'s behalf for the Indian registration and early compliance filings, since the parent itself can\'t sign Indian forms directly.',
  },
  {
    title: 'Charter documents (MOA/AOA equivalent)',
    detail: "US entities don't file an MOA/AOA the way Indian companies do, so an apostilled copy of the certificate of incorporation and bylaws typically stands in for this requirement — your advisor confirms exactly what the ROC wants for your specific state of incorporation.",
  },
  {
    title: 'ID and address proof for each director',
    detail: 'Passport copies for every proposed director, plus a recent utility bill or bank statement for any US-based director — needed for DSC/DIN applications regardless of where that director lives.',
  },
  {
    title: 'Registered office proof in India',
    detail: "A lease deed or NOC from the property owner plus a utility bill no older than two months. If you don't have this finalized yet, SPICe+ allows a correspondence address at filing, with the registered office confirmed to the ROC within 30 days of incorporation.",
  },
]

const residentDirectorPaths = [
  {
    title: 'Relocate someone from your US team',
    detail: "Works if you already have (or are willing to place) someone in India long enough to clear 182 days in the relevant period — the days don't need to be continuous, but they do need to add up across the year.",
  },
  {
    title: 'Appoint a trusted India-based individual',
    detail: 'A relative, existing India-based employee, or long-standing local partner who already meets the residency test. This is the path most US founders with an existing India connection use.',
  },
  {
    title: 'Engage a professional nominee resident director',
    detail: "A CA/CS firm provides an individual who meets the 182-day test, takes formal appointment, and signs statutory filings — while operational and strategic control stays entirely with the US parent. Billed as an ongoing annual engagement, which is one of the variables that moves our professional-fees estimate in the cost breakdown below.",
  },
]

const faqs = [
  {
    q: 'Do we need to travel to India to incorporate the subsidiary?',
    a: "In most cases, no — DSC issuance, SPICe+ filing, and the Certificate of Incorporation itself can all be completed remotely from the US, with apostilled documents couriered rather than hand-delivered. The one place physical presence sometimes still matters is bank account KYC: some banks require in-person verification for at least the resident director before the account is fully activated, though video-KYC options are increasingly available. Confirm this with your chosen bank early rather than assuming it either way.",
  },
  {
    q: 'What is a resident director, and where do most US parent companies find one?',
    a: "Section 149(3) of the Companies Act, 2013 requires every Indian company to have at least one director who has stayed in India for a total of 182+ days in the relevant period — a concept with no real US equivalent, which is why it catches first-time US founders off guard. There are three practical paths: relocate someone from your own team long enough to clear the threshold, appoint a trusted India-based individual you already know, or engage a professional nominee resident director through a CA/CS firm, who handles the statutory role while your team retains full operational control.",
  },
  {
    q: 'How many directors and shareholders does an Indian subsidiary need?',
    a: "A private limited company needs a minimum of two directors — one of whom must satisfy the resident-director test above — and a minimum of two shareholders, who can be the same two people. There's no requirement that any director besides the resident director live in, or even visit, India; US-based directors participate in board matters remotely, and their DSC/DIN can be processed from the US using apostilled ID documents.",
  },
  {
    q: 'Can a US LLC (not just a corporation) directly own shares in the Indian subsidiary?',
    a: "Yes — an Indian private limited company's shareholder can be a corporate entity, and that includes a US LLC as well as a US C-corp, with up to 100% foreign ownership permitted under the Automatic Route in most sectors. The choice between an LLC and a C-corp as the parent mainly changes how the subsidiary shows up on your US tax filings (Form 5471 treatment, pass-through vs. entity-level considerations) rather than anything on the Indian incorporation side — worth a conversation with your US tax advisor in parallel with the India-side filing.",
  },
  {
    q: 'Is there a minimum capital requirement to register the subsidiary?',
    a: 'No — the earlier ₹1 lakh minimum paid-up capital requirement was removed by the Companies (Amendment) Act, 2015, so a private limited company can technically be incorporated with a nominal paid-up capital. In practice, most US parents fund it well above that nominal figure to cover early operating costs and to avoid an awkwardly thin equity base when opening the bank account, but there\'s no statutory floor forcing that.',
  },
  {
    q: "What's the difference between a Digital Signature Certificate (DSC) and a Director Identification Number (DIN), and why do both take time?",
    a: "A DSC is the electronic signature each proposed director and subscriber uses to sign filings on the MCA portal; a DIN is the unique identifier the MCA assigns to that individual as a director, applied for through SPICe+ Part B itself. Both need identity and address proof for every director — apostilled for anyone based outside India — which is why getting these documents moving in week one, rather than treating them as a formality, matters more than most first-time filers expect.",
  },
  {
    q: 'Is the subsidiary operational the moment the Certificate of Incorporation is issued?',
    a: "Legally, yes — the entity exists — but it isn't yet funded or banked. You still need to open the corporate bank account, have the US parent remit the initial capital, and file Form FC-GPR with the RBI within 30 days of share allotment before the subsidiary can meaningfully transact. See our FEMA compliance guide for the filings that follow incorporation on an ongoing basis.",
  },
  {
    q: 'Do we need a physical registered office address in India before we can incorporate?',
    a: "Not necessarily at the outset. SPICe+ lets you file against a correspondence address and confirm the actual registered office to the ROC within 30 days of incorporation via Form INC-22, provided you have proof (lease deed or NOC, plus a utility bill under two months old) ready by then. If your registered office and correspondence address are the same from day one, you provide that proof upfront instead.",
  },
  {
    q: 'What is Form INC-20A, and why does the 180-day deadline matter for a US parent specifically?',
    a: "It's the director's declaration of commencement of business under Section 10A of the Companies Act, 2013, due within 180 days of incorporation, and it confirms the subscribers have actually paid for the shares they committed to. It sounds routine, but for a US-parented subsidiary it's genuinely tight: the capital wire has to clear US and Indian banking channels, land in the account, and show up on a bank statement before the declaration can be filed — and if apostille delays already ate into the front end of your timeline, INC-20A is where that earlier slippage catches up with you. Miss it, and the ROC can move to strike the company off the register, not just issue a late fee (which itself rises to as much as 12x the normal fee the longer it's outstanding). Treat the capital-remittance wire as something to schedule against this deadline from day one, not as a step you get to once everything else is done.",
  },
]

export default function HowToIncorporateFromUSPage() {
  return (
    <RegionClusterTemplate
      title="How to Incorporate a Subsidiary in India from the US"
      subtitle="The step-by-step process — entity prerequisites, the documents checklist, the resident-director requirement, and the apostille/notarization steps specific to US-originated documents."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "How to Incorporate a Subsidiary in India from the US" },
            ]}
    >

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Incorporating a wholly-owned Indian subsidiary of a US parent follows the same Companies Act, 2013 framework as any Indian company — but US parent-company documents need to be authenticated in a specific way before Indian authorities will accept them, since the US and India are both signatories to the Hague Apostille Convention. This guide covers the full mechanics: what your US entity needs to have ready, the resident-director requirement most US founders haven't encountered before, the filing steps themselves, and where things actually slow down.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickFacts.map((stat) => (
            <ClickableReveal key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm cursor-pointer">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-yellow-600" />
              <div className="text-lg font-bold text-[#081a42]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </ClickableReveal>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Documents Checklist: What Your US Parent Company Needs to Provide</h2>
        <p className="text-gray-700 mb-6">
          Everything below either originates with the US parent or depends on it — get this moving before the Indian-side filing starts, not after, since apostille turnaround is almost always the pacing item.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {documentItems.map((item) => (
            <ClickableInfoCard key={item.title} title={item.title} desc={item.detail} />
          ))}
        </div>
        <p className="mt-6 text-gray-700 text-sm">
          For what apostille and notarization actually cost and how long they typically take from a US state, see our{' '}
          <Link href="/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            cost &amp; timeline breakdown
          </Link>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Process</h2>
        <div className="space-y-4">
          {[
            {
              step: '1. Digital Signature Certificate (DSC) & Director Identification Number (DIN)',
              detail: 'Required for the proposed Indian directors before any filing can begin. If a US-based individual will also be a director, their documents need apostille certification at this stage.',
            },
            {
              step: '2. Name Reservation (RUN / SPICe+ Part A)',
              detail: 'Reserve the proposed company name with the Registrar of Companies (ROC), filed through the same integrated SPICe+ web form on the MCA\'s V3 portal that carries the rest of the incorporation filing.',
            },
            {
              step: '3. Apostille & Notarization of US Parent Documents',
              detail: 'The US parent company\'s certificate of incorporation, board resolution authorizing the Indian subsidiary, and power of attorney typically need to be notarized in the US and then apostilled — this is the step that most often causes delays if not started early, since it depends on US notary and Secretary of State turnaround times, not anything on the Indian side.',
            },
            {
              step: '4. SPICe+ Part B Filing',
              detail: 'The integrated incorporation form covering PAN, TAN, and — through the linked AGILE-PRO-S form — EPFO, ESIC, GST registration (optional), and bank account opening details, alongside company incorporation itself.',
            },
            {
              step: '5. Certificate of Incorporation',
              detail: 'Issued by the ROC once all filings are approved — this is when the Indian entity legally exists, though it isn\'t yet funded or banked (see FAQ below).',
            },
            {
              step: '6. Bank Account & FDI Inflow',
              detail: 'Open the Indian entity\'s bank account, remit the initial capital from the US parent, and file Form FC-GPR with the RBI within 30 days of share allotment. Separately, Form INC-20A — the declaration of commencement of business under Section 10A of the Companies Act, 2013 — is due within 180 days of incorporation, and it can\'t be filed until the US parent\'s capital has actually landed and been reflected in the bank statement, so the wire timing and this deadline need to sit on the same calendar (see FAQ below).',
            },
          ].map((item) => (
            <ClickableInfoCard key={item.step} title={item.step} desc={item.detail} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Resident Director Requirement, Explained</h2>
        <p className="text-gray-700 mb-6">
          This is the single most common surprise for first-time US founders: under Section 149(3) of the Companies Act, 2013, every Indian company — regardless of foreign ownership — must have at least one director who has been physically present in India for 182+ days in the relevant period. The days don't need to be continuous, but they do need to add up. There's no US equivalent to plan around in advance, so it's worth deciding your approach before you're mid-filing. Three paths are common:
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {residentDirectorPaths.map((item) => (
            <ClickableInfoCard key={item.title} title={item.title} desc={item.detail} />
          ))}
        </div>
      </div>

      <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h3 className="font-bold text-lg mb-2">US LLC or C-Corp as the Parent — Does It Change the India-Side Process?</h3>
        <p className="text-gray-700">
          Not materially. A US LLC can directly hold shares in an Indian private limited company just as a C-corp can, and up to 100% foreign ownership is permitted under the Automatic Route in most sectors — the Indian filing steps above don't change based on which US entity type sits above the subsidiary. What does change is how the subsidiary shows up on the US side: Form 5471 treatment and Subpart F/NCTI exposure differ somewhat between an LLC and a C-corp parent, which is a conversation for your US tax advisor to run in parallel, not something the Indian incorporation filing itself resolves. See our{' '}
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            subsidiary vs. branch office comparison
          </Link>{' '}
          for the structural side of that decision.
        </p>
      </div>

      <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="font-bold text-lg mb-2">Where US-origin entries usually lose time</h3>
        <p className="text-gray-700">
          It&apos;s almost never the Indian-side filing that slows things down — it&apos;s waiting on apostilled documents from the US. Starting the apostille process for your board resolution and incorporation certificate in parallel with, not after, the Indian name-reservation step is the single most effective way to compress your overall timeline. For the phase-by-phase timeline and what each step costs, see our{' '}
          <Link href="/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            cost &amp; timeline breakdown
          </Link>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
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

      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Cost &amp; Timeline: Incorporating from the US →
          </Link>
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for US Companies →
          </Link>
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transfer Pricing &amp; Section 482 for US Parent Companies →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
