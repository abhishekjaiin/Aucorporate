import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'
import { ClickableReveal } from '@/components/ClickableReveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { LeadForm } from '@/components/LeadForm'
import { Scale, Clock, FileText, Landmark } from 'lucide-react'

const quickFacts = [
  { icon: Scale, value: '2 Exit Routes', label: 'Section 248 Strike-Off vs IBBI Voluntary Liquidation' },
  { icon: Clock, value: '2+ Years Dormant', label: 'Required for Strike-Off Eligibility' },
  { icon: Landmark, value: 'RBI MD 13/2015-16', label: 'Governs Remittance of Assets on Exit' },
  { icon: FileText, value: 'Form 5471', label: 'Final-Year Deconsolidation for the US Parent' },
]

const decisionFramework = [
  {
    pattern: 'Genuinely dormant, clean',
    dormancy: '2+ years inactive',
    obligations: 'None — nil or fully settled',
    timeline: 'Any',
    route: 'Strike-off (Section 248)',
  },
  {
    pattern: 'Nearly clean, one lingering liability',
    dormancy: '2+ years inactive',
    obligations: 'One unresolved item (e.g., a small unsettled loan)',
    timeline: 'Low',
    route: 'Settle the liability first, then strike-off',
  },
  {
    pattern: 'Nearly clean, one lingering liability',
    dormancy: '2+ years inactive',
    obligations: 'One unresolved item',
    timeline: "High, can't wait",
    route: 'Voluntary liquidation — lower objection risk than filing strike-off with an open liability',
  },
  {
    pattern: 'Active obligations to wind down',
    dormancy: 'Not dormant',
    obligations: 'Vendor/employee dues, assets to realize',
    timeline: 'Any',
    route: 'Voluntary liquidation (IBBI regulations)',
  },
  {
    pattern: 'Disputed claim or ongoing litigation',
    dormancy: 'Either',
    obligations: 'Contested claim',
    timeline: 'Any',
    route: 'Voluntary liquidation — strike-off eligibility is compromised by unresolved disputes',
  },
  {
    pattern: 'Board wants maximum post-closure certainty',
    dormancy: 'Either',
    obligations: 'Even where strike-off-eligible',
    timeline: 'Low',
    route: 'Voluntary liquidation, for the finality it provides',
  },
]

const faqs = [
  {
    q: 'What is the difference between strike off and voluntary liquidation in India?',
    a: "Strike-off under Section 248 of the Companies Act is a fast, low-cost administrative removal from the Register of Companies, available only to an entity that's been dormant for the prior two years with all liabilities cleared. Voluntary liquidation under the IBBI's regulations (drawing on Section 59 of the IBC) is a more involved, liquidator-led process for a solvent entity that still has obligations to wind down in an orderly way. The right one for your subsidiary depends on your specific fact pattern — see the decision framework and worked scenarios above for how to actually reason through it, rather than treating this as a simple either/or.",
  },
  {
    q: 'How long does it take to close a company in India?',
    a: "It depends heavily on which route you take and how complete your documentation is at filing. Strike-off processing is now centralized through the government's C-PACE initiative, which was built specifically to cut the multi-year backlogs that used to accumulate under the previous system — we don't state a specific day-count figure here because published estimates vary across sources; ask us for the current processing window when you're ready to file. Voluntary liquidation runs materially longer when creditor claims are received during the claims window than when they aren't, since the liquidator needs to verify and settle those claims before moving to a final report and dissolution.",
  },
  {
    q: 'Can a foreign (US) parent company repatriate money after closing its Indian subsidiary?',
    a: "Yes, subject to RBI's remittance-of-assets rules under Master Direction 13/2015-16. The practical thing that determines whether repatriation goes smoothly is whether the documentation the AD Category-I bank needs is actually in order before you initiate the transfer: a liquidator's or auditor's certificate confirming Indian liabilities are settled, Form 15CA/15CB tax certification, and — for a formal liquidation — the underlying dissolution order. Repatriation gets stuck almost always because one of these pieces is missing or incomplete at the point the bank reviews the request, not because RBI is generally unwilling to permit the remittance.",
  },
  {
    q: 'What happens to FDI/equity when an Indian subsidiary is struck off?',
    a: "The original FDI equity is returned to the US parent as part of the closure's final distribution, subject to the capital-account-versus-dividend distinction described above. Where the return of capital involves a capital reduction or buyback rather than a plain return of paid-up capital, fair-market-value pricing under Rule 21 of the NDI Rules comes into play — and a separate registered-valuer requirement can also apply if that capital reduction is structured as an NCLT-approved scheme under Section 66 of the Companies Act. This is an area worth a direct conversation with us rather than assuming a default treatment, since the correct approach — and which certification requirement actually governs — depends on how the original investment was structured and how the closure distribution is characterized.",
  },
  {
    q: 'What is Form STK-2 and how does the fast-track strike-off process work?',
    a: 'Form STK-2 is the application filed with the Registrar of Companies to request removal of a company’s name from the Register under Section 248. It’s followed by Form STK-3 (an indemnity bond from every director), Form STK-6 (the public notice that opens an objection window for creditors and other stakeholders), and Form STK-7 (the final notice formally striking the company off, issued once the objection window closes without a successful objection). Processing is now centralized through C-PACE — see the timeline discussion in Route 1 above.',
  },
  {
    q: 'What documents are required to close an Indian subsidiary?',
    a: "At minimum: income tax clearance, GST cancellation confirmation, evidence of final EPF/ESIC contributions and returns filed (if the subsidiary had employees — note that formal EPF/ESIC registration surrender typically follows the ROC dissolution order rather than preceding it, so confirm current sequencing with your compliance advisor), evidence that creditor and employee dues are settled (or, for voluntary liquidation, a clear accounting for the liquidator to work from), confirmation there's no pending litigation that would compromise strike-off eligibility, and a final statutory audit/certificate confirming liabilities are settled or provided for. The exact document set differs somewhat depending on which route you take — see the pre-closure checklist above and the route-specific sections for what each path additionally requires.",
  },
  {
    q: 'What is the cost of closing a private limited company in India?',
    a: "This depends on which route you take, whether any liabilities or disputes need to be resolved before filing, and the professional fees involved in preparing and filing the required certifications — there isn't a single reliable figure that applies across every subsidiary's situation, and we'd rather scope this accurately for your specific entity than quote a generic number that doesn't hold up once your actual facts are in. Strike-off is generally the lower-cost route where an entity genuinely qualifies for it; voluntary liquidation costs more because of the liquidator's fees and the more involved process, but that additional cost buys the finality discussed above.",
  },
  {
    q: 'Does my US parent need to file anything when my Indian subsidiary closes?',
    a: 'Yes. The subsidiary’s final year of activity still needs to be reported on Form 5471 through its actual dissolution date, including any final-period Subpart F/NCTI inclusion, and any final intercompany transactions need to tie out under Section 482 and Schedule M consistently with what’s reported on the India side. See the Form 5471 deconsolidation section above for the full picture — this is genuinely not something to leave until after the India-side closure is already final.',
  },
  {
    q: "Is this the right guide if I'm closing a branch, liaison, or project office instead?",
    a: 'No — those are structurally separate, RBI-regulated closure processes, not the Section 248 strike-off or IBBI voluntary-liquidation route this page covers. See our dedicated guides: closing a Branch Office, closing a Liaison Office, and closing a Project Office — each covers the RBI approval, AD-bank, and ROC-filing sequence specific to that structure.',
  },
  {
    q: "I'm an Indian company closing my own overseas subsidiary — is this the right guide?",
    a: 'No. This guide covers a foreign parent closing its Indian subsidiary — an inbound matter governed by the Companies Act strike-off and IBBI voluntary-liquidation rules described above. An Indian company closing its own subsidiary abroad follows a different, outbound regulatory pathway entirely, with its own distinct reporting requirements. If that’s your situation, the process described on this page does not apply to you.',
  },
]

export default function CloseIndianSubsidiaryPage() {
  return (
    <RegionClusterTemplate
      title="Closing an Indian Subsidiary: Strike-Off vs Voluntary Liquidation"
      subtitle="A complete guide to choosing and executing the right exit route for US parent companies, from the RBI's remittance-of-assets rules through your Form 5471 deconsolidation."
      region="US"
      breadcrumbItems={[
              { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
              { label: "Closing an Indian Subsidiary" },
            ]}
    >

      <div className="mb-12">
        <p className="mb-4 text-sm text-gray-500">
          Last updated: 30 September 2026 — prepared by AU Corporate&apos;s taxation and regulatory compliance practice.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          If you&apos;re a US parent closing — or winding up — an Indian subsidiary, the decision usually isn&apos;t whether to exit — that call has already been made upstream — it&apos;s how. Indian company law gives you two genuinely different routes to get there: a fast, low-cost strike-off under Section 248 of the Companies Act, or a formal voluntary liquidation under the IBBI&apos;s regulations. They aren&apos;t interchangeable, and picking the wrong one for your actual situation can cost you months or, worse, leave the entity (and its directors) exposed to restoration later.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          This page is the deep walkthrough of that decision and everything that follows it — the process mechanics for both routes, how the RBI&apos;s remittance-of-assets rules actually work when you try to get money back to the US, and what closing the Indian entity means for your US parent&apos;s own tax filings. If you haven&apos;t yet worked through the initial subsidiary-vs-branch structure question,{' '}
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            our US subsidiary vs branch office comparison
          </Link>{' '}
          is where that choice gets framed; this page picks up from there, once a subsidiary already exists and needs to close.
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

      <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h2 className="font-bold text-lg mb-2">Is This the Right Guide for You?</h2>
        <p className="text-gray-700 mb-4">
          This guide covers a foreign — including US — parent company closing its <strong>Indian</strong> subsidiary: an inbound FDI/FEMA matter, governed by the Companies Act strike-off and IBBI voluntary-liquidation rules described below. If instead you&apos;re an Indian company closing your own <strong>overseas</strong> subsidiary, the rules run the other direction entirely — different filings, different regulator touchpoints — and none of what follows on this page applies to that scenario.
        </p>
        <p className="text-gray-700">
          It also matters what kind of Indian presence you actually have. This guide is written for a Private Limited company or LLP subsidiary. If your India presence is a <strong>Branch Office</strong>, <strong>Liaison Office</strong>, or <strong>Project Office</strong>, you&apos;re looking at a structurally separate, RBI-regulated closure process — Section 248 and the IBBI&apos;s voluntary-liquidation regime don&apos;t apply to those structures at all. See our dedicated guides instead:{' '}
          <Link href="/branch-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">closing a Branch Office</Link>,{' '}
          <Link href="/liaison-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">closing a Liaison Office</Link>, or{' '}
          <Link href="/project-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">closing a Project Office</Link>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Strike-Off vs Voluntary Liquidation: How to Decide When Closing an Indian Subsidiary</h2>

        <h3 className="text-xl font-bold mb-3">The two routes at a glance</h3>
        <p className="text-gray-700 mb-4">
          An Indian subsidiary has two lawful ways to close down permanently. The first is ROC strike-off under <strong>Section 248 of the Companies Act</strong> — a comparatively fast, low-cost administrative removal from the Register of Companies, available only where the entity has been dormant for the prior two years and has no liabilities outstanding. The second is a formal <strong>voluntary liquidation under the IBBI&apos;s regulations</strong> (drawing its authority from <strong>Section 59 of the Insolvency and Bankruptcy Code, 2016</strong>) — a more involved, liquidator-led process built for a solvent entity that still has obligations to wind down in an orderly way before it can close.
        </p>
        <p className="text-gray-700 mb-8">
          That&apos;s the same distinction our subsidiary-vs-branch comparison page draws in a couple of sentences when weighing exit options generally. What most guidance on this topic stops at is exactly that — two eligibility gates, stated in parallel, leaving you to work out for yourself which one actually fits a subsidiary that doesn&apos;t sit cleanly on either side of the line. That&apos;s the real question this section answers.
        </p>

        <h3 className="text-xl font-bold mb-3">When strike-off is the clear answer</h3>
        <p className="text-gray-700 mb-8">
          Strike-off is the right call when the fact pattern is genuinely clean: the subsidiary has had no operations for the two years immediately preceding the application, has no outstanding bank loans or unsettled creditor claims, has no pending litigation, and its bank account is either nil or can be shown as dormant. If that describes your entity, there&apos;s little reason to take on the cost and time of a formal liquidation — strike-off gets you the same end result faster.
        </p>

        <h3 className="text-xl font-bold mb-3">When voluntary liquidation is the clear answer</h3>
        <p className="text-gray-700 mb-8">
          Voluntary liquidation is the right call when the subsidiary is solvent but still has real obligations to work through — outstanding vendor or employee dues, assets that need to be formally realized and distributed, or a general need for a liquidator to run an orderly wind-down rather than simply lapse into dormancy. If your subsidiary has ongoing commercial relationships that haven&apos;t been fully unwound, this is very likely your route regardless of how quickly you&apos;d prefer to close.
        </p>

        <h3 className="text-xl font-bold mb-3">The judgment calls at the margin</h3>
        <p className="text-gray-700 mb-4">
          Most subsidiaries don&apos;t sit as cleanly on one side as the two descriptions above suggest, and this is the part most guidance on this topic skips entirely.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Nearly, but not fully, debt-free.</strong> A single unsettled bank loan — even a small one — is enough to draw an objection during the public-notice/objection window that follows an STK-6 notice, and that objection alone can sink a strike-off application that otherwise looked straightforward. If your subsidiary has one lingering liability that&apos;s genuinely close to being cleared, the practical question is whether it&apos;s worth the time to settle it fully before filing for strike-off, rather than filing and risking an objection that forces you into voluntary liquidation anyway, later and with less control over the timeline.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Speed versus formality, with some open contracts.</strong> A subsidiary with one or two contracts that haven&apos;t formally terminated, but where the counterparties aren&apos;t actively pursuing anything, is a genuine judgment call. Strike-off is faster on paper, but the eligibility gate assumes dormancy — filing while contracts are technically open, even ones nobody is enforcing, is a real risk if it surfaces during the objection window or later triggers a restoration action. Voluntary liquidation costs more time up front but gives you a liquidator&apos;s formal process to actually close out those loose ends, which is often the more defensible position if anyone ever looks back at how the closure was handled.
        </p>
        <p className="text-gray-700 mb-8">
          <strong>Board risk tolerance for post-closure exposure.</strong> Even where a subsidiary technically clears the strike-off bar, a board weighing its own exposure should factor in more than eligibility. Strike-off is an administrative removal, not a judicial or regulator-supervised wind-down — see the liability and finality question below for what that distinction actually means in practice. A board that wants certainty the entity is closed, full stop, sometimes chooses the more expensive, more supervised route even when a faster one is technically available.
        </p>

        <h3 className="text-xl font-bold mb-4">Decision framework</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-4 text-left font-bold">Fact pattern</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Dormancy</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Outstanding obligations</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Timeline pressure</th>
                <th className="border border-gray-300 p-4 text-left font-bold">Recommended route</th>
              </tr>
            </thead>
            <tbody>
              {decisionFramework.map((row, i) => (
                <tr key={row.pattern + row.timeline} className={i % 2 === 1 ? 'bg-gray-100' : undefined}>
                  <td className="border border-gray-300 p-4 text-sm align-top font-semibold">{row.pattern}</td>
                  <td className="border border-gray-300 p-4 text-sm align-top">{row.dormancy}</td>
                  <td className="border border-gray-300 p-4 text-sm align-top">{row.obligations}</td>
                  <td className="border border-gray-300 p-4 text-sm align-top">{row.timeline}</td>
                  <td className="border border-gray-300 p-4 text-sm align-top">{row.route}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-4">Two worked scenarios</h3>
        <p className="text-gray-700 mb-4">
          <strong>Scenario A — the clean strike-off case.</strong> A US software company&apos;s Indian subsidiary was incorporated to support a single enterprise customer relationship that ended two years ago. The entity has had no revenue, no employees, and no new contracts since. Its bank account carries a small residual balance, there are no outstanding loans, and no litigation of any kind. This is close to the textbook strike-off case: settle the residual balance and any final statutory filings, then file under Section 248. There&apos;s no reason to take on a liquidator-led process for an entity this clean.
        </p>
        <p className="text-gray-700 mb-8">
          <strong>Scenario B — the voluntary-liquidation case.</strong> A different US parent&apos;s Indian subsidiary wound down its operations eighteen months ago but has an unresolved dispute with a former logistics vendor over a disputed invoice, plus a handful of employee full-and-final settlements still pending. The entity doesn&apos;t meet the strike-off eligibility gate on either the dormancy or the liabilities-cleared test, and filing for strike-off with the vendor dispute outstanding would very likely draw an objection during the notice window regardless. Voluntary liquidation is the right route here — a liquidator can formally adjudicate the vendor&apos;s claim, complete the employee settlements, realize what&apos;s left of the entity&apos;s assets, and close the company out in a way a strike-off application couldn&apos;t survive.
        </p>

        <h3 className="text-xl font-bold mb-3">The liability and finality question</h3>
        <p className="text-gray-700 mb-4">
          This is the point a US parent&apos;s board should weigh directly, not treat as a technical footnote: strike-off and voluntary liquidation don&apos;t give you the same kind of finality.
        </p>
        <p className="text-gray-700 mb-4">
          A company struck off under Section 248 can be <strong>restored</strong> to the Register of Companies — by an order of the National Company Law Tribunal, on application by the ROC, a creditor, or another aggrieved party — if it later emerges that the strike-off was defective, or that liabilities existed that weren&apos;t properly disclosed or settled at the time of filing. If that happens, the company is treated as if it had never been struck off, and its former directors can be pursued for any liabilities that were never actually cleared. Strike-off is fast and administrative precisely because it isn&apos;t independently verified by a court or a liquidator the way a formal winding-up is — which is also exactly why it carries this restoration risk if the underlying facts turn out to be wrong.
        </p>
        <p className="text-gray-700">
          A formal voluntary liquidation under the IBBI&apos;s regulations gives you a materially different kind of finality. A liquidator is appointed, creditor claims are formally invited and adjudicated, assets are realized and distributed according to a defined priority, and the company is only dissolved once that entire process — and the regulatory oversight built into it — has run its course. For a US parent&apos;s board that wants a clean, defensible closing of the book on its India exposure, that additional certainty is often worth the extra time and cost, even for an entity that might technically have scraped through a strike-off application.
        </p>
      </div>

      <div className="mb-12">
        <LeadForm
          title="Not Sure Which Route Fits Your Situation?"
          description="Whether your subsidiary looks like a clean strike-off case or has open obligations that need a formal wind-down, our team — CA and US CPA-qualified — can confirm the right route, walk through the RBI remittance mechanics, and coordinate the US-side Form 5471 deconsolidation so both filings tie out."
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Before You File Either Route: Pre-Closure Checklist</h2>
        <p className="text-gray-700 mb-4">Whichever route you choose, expect to clear the same baseline set of items before you can file:</p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Income tax clearance</strong> — final return filed, no outstanding demand or open assessment</li>
          <li><strong>GST cancellation</strong> — registration formally cancelled, not just left inactive</li>
          <li><strong>EPF/ESIC final contributions and returns</strong> — final contributions made and returns filed, if the subsidiary had employees. Formal registration surrender for EPF/ESIC typically follows the ROC dissolution order rather than preceding it, so confirm the current sequencing with your compliance advisor before treating registration closure itself as a pre-filing gate</li>
          <li><strong>Settlement of creditor and employee dues</strong> — or, for voluntary liquidation, a clear accounting of what remains outstanding for the liquidator to handle</li>
          <li><strong>No pending litigation</strong> — or, where litigation exists, a clear-eyed assessment of whether it rules out strike-off entirely (see the judgment calls above)</li>
          <li><strong>Final statutory audit and a certificate confirming Indian liabilities are settled or properly provided for</strong> — the same certificate concept that anchors closure for a Branch, Liaison, or Project Office, applied here to the subsidiary</li>
        </ul>
        <p className="text-gray-700">
          If any of this checklist is incomplete because of filings that fell behind during the subsidiary&apos;s operating life — FC-GPR, FC-TRS, or the annual FLA return in particular — clear those up before you file for closure. Unresolved FEMA reporting gaps are a common reason a closure application stalls partway through. See our guide to{' '}
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            ongoing FEMA compliance for US companies with an Indian subsidiary
          </Link>{' '}
          if you&apos;re not certain your filings are current.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Route 1: Strike-Off Under Section 248 of the Companies Act</h2>

        <h3 className="text-xl font-bold mb-3">Eligibility gate</h3>
        <p className="text-gray-700 mb-8">
          To qualify for strike-off, the subsidiary must have been dormant or inoperative for the prior two years, with all liabilities cleared — the same standard stated on our subsidiary-vs-branch comparison page. There&apos;s no partial-credit version of this test: an entity that&apos;s mostly dormant with one open item doesn&apos;t qualify, it&apos;s simply not eligible yet.
        </p>

        <h3 className="text-xl font-bold mb-3">The process</h3>
        <p className="text-gray-700 mb-4">The filing sequence runs through a defined set of forms:</p>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Form STK-2</strong> — the application itself, filed with the Registrar of Companies, requesting removal of the company&apos;s name from the Register.</li>
          <li><strong>Form STK-3</strong> — an indemnity bond, given by every director, indemnifying against any liability that arises after the company is struck off.</li>
          <li><strong>Form STK-6</strong> — the public notice the ROC issues once the application is accepted, opening an objection window during which creditors, regulators, or other stakeholders can raise an objection to the strike-off.</li>
          <li><strong>Form STK-7</strong> — the final notice of striking off, issued once the objection window closes without a successful objection, formally removing the company&apos;s name from the Register of Companies.</li>
        </ol>
        <p className="text-gray-700 mb-8">
          It&apos;s worth restating the point from the judgment-calls section above: an unsettled liability surfacing during the STK-6 objection window is one of the most common reasons a strike-off application fails at this stage rather than at the initial filing.
        </p>

        <h3 className="text-xl font-bold mb-3">Timeline</h3>
        <p className="text-gray-700">
          The Ministry of Corporate Affairs has centralized strike-off processing under the <strong>Centre for Processing Accelerated Corporate Exit (C-PACE)</strong>, established under the Indian Institute of Corporate Affairs at Manesar. C-PACE was built specifically to cut the multi-year backlogs that used to accumulate under the earlier, ROC-by-ROC processing model, and the centralization itself is a genuine, documented shift in how these applications move — not a marginal process tweak. We&apos;re deliberately not repeating a specific day-count figure here: published estimates for the current C-PACE processing window vary meaningfully across secondary sources, and we&apos;d rather point you to the current figure from PIB or MCA directly than repeat a range we can&apos;t stand behind. Ask us for the current C-PACE timeline when you&apos;re actually ready to file — it&apos;s worth confirming against the primary source at the point you need it, not locking in a number that may already be out of date by the time you read this.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Route 2: Voluntary Liquidation Under IBBI Regulations (IBC Section 59)</h2>

        <h3 className="text-xl font-bold mb-3">When this route applies</h3>
        <p className="text-gray-700 mb-8">
          Voluntary liquidation applies to a <strong>solvent</strong> entity — one that can pay its debts in full from the realization of its assets — that has ongoing obligations to wind down in an orderly way before it can close. This is the same &quot;IBBI regulations&quot; framing used on our subsidiary-vs-branch comparison page, run here as a full walkthrough rather than a two-sentence summary.
        </p>

        <h3 className="text-xl font-bold mb-3">The process</h3>
        <p className="text-gray-700 mb-4">The process runs through several defined stages, with a licensed insolvency professional acting as liquidator throughout:</p>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
          <li><strong>Declaration of solvency</strong> — a majority of the company&apos;s directors make a formal declaration, supported by an audited statement of assets and liabilities, that the company has no debts or will be able to pay its debts in full within the process&apos;s stipulated period.</li>
          <li><strong>Appointment of a liquidator</strong> — the shareholders pass a special resolution appointing an IBBI-registered insolvency professional as liquidator and approving the voluntary liquidation.</li>
          <li><strong>Public announcement and creditor-claims window</strong> — the liquidator publishes a public announcement inviting creditors to submit their claims within a defined window.</li>
          <li><strong>Realization and distribution of assets</strong> — the liquidator realizes the company&apos;s assets and distributes the proceeds to stakeholders according to the statutory priority of claims.</li>
          <li><strong>Final report</strong> — the liquidator prepares a final report on the liquidation and submits it to the company&apos;s stakeholders and to the relevant authority.</li>
          <li><strong>Dissolution</strong> — once the process is complete, the liquidator applies for the company&apos;s dissolution, and the entity ceases to exist once that order is passed.</li>
        </ol>

        <h3 className="text-xl font-bold mb-3">Timeline by claims scenario</h3>
        <p className="text-gray-700">
          The single biggest driver of how long voluntary liquidation takes is whether creditor claims actually come in during the claims window. A process where no claims are received closes out materially faster than one where claims need to be verified, adjudicated, and paid out before the liquidator can move to a final report — the IBBI&apos;s own regulations build in a meaningfully longer window for the claims scenario specifically, rather than treating both cases the same way. We&apos;re not stating exact day-count figures for each scenario here — the precise processing windows under the current IBBI (Voluntary Liquidation Process) Regulations, 2017 should be confirmed against the primary regulatory text before you rely on them for planning purposes.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Remittance of Assets: RBI Master Direction 13/2015-16 in Depth</h2>
        <p className="text-gray-700 mb-8">
          This is the section most competitor guidance on this topic skips almost entirely — and it&apos;s usually the part that actually determines whether your US parent gets its money out of India smoothly or gets stuck waiting on an AD bank query. The governing regulation is <strong>RBI Master Direction No. 13/2015-16 on &quot;Remittance of Assets&quot;</strong>, which sets out how a company under liquidation (or being struck off, where a final distribution is involved) can remit remaining funds to a foreign shareholder.
        </p>

        <h3 className="text-xl font-bold mb-3">What the liquidator&apos;s/auditor&apos;s certificate must actually show</h3>
        <p className="text-gray-700 mb-8">
          Before an Authorised Dealer bank will process an outward remittance connected to a company&apos;s closure, it needs a certificate confirming the company&apos;s Indian liabilities have been settled or adequately provided for — the same certificate concept AU Corporate already documents at branch, liaison, and project-office level, applied here to a subsidiary. In a formal voluntary liquidation, this comes from the appointed liquidator, generally supported by the company&apos;s final audited accounts. In a strike-off scenario involving a final distribution, an auditor&apos;s certificate to the same effect is the equivalent document. Either way, the certificate needs to speak to the actual settled-or-provided-for status of every liability, not just confirm that the company has &quot;closed&quot; — a generic closure confirmation isn&apos;t what the AD bank is actually checking for.
        </p>

        <h3 className="text-xl font-bold mb-3">What the AD Category-I bank checks before releasing funds</h3>
        <p className="text-gray-700 mb-8">
          The AD bank sits as the operational gatekeeper for the remittance itself — it doesn&apos;t just process a transfer on instruction, it reviews the underlying documentation before releasing funds. Expect the bank to check: the liquidator&apos;s or auditor&apos;s certificate described above, the company&apos;s tax clearance and Form 15CA/15CB certification (below), and — for a formal liquidation — the underlying liquidation/dissolution order confirming the process has been properly concluded. Gaps in any of these are the most common reason a remittance gets held up at the bank-review stage even after the India-side corporate closure has otherwise gone smoothly.
        </p>

        <h3 className="text-xl font-bold mb-3">Capital-account remittance vs current-account dividend/surplus distribution</h3>
        <p className="text-gray-700 mb-8">
          This distinction is worth being precise about, since it&apos;s thin or missing across most published guidance on this topic. A <strong>return of capital</strong> on liquidation or strike-off — repatriating the subsidiary&apos;s original paid-up capital plus any capital gains realized on winding down — is a <strong>capital-account transaction</strong> under FEMA, and is treated differently for RBI/AD-bank review purposes than a <strong>dividend or surplus distribution</strong>, which is a <strong>current-account transaction</strong>. The two carry different documentation expectations and, in some cases, different tax withholding treatment on the Indian side. Before initiating any remittance connected to your subsidiary&apos;s closure, it&apos;s worth being clear with your AD bank and your advisors about which category the specific payment actually falls into — treating a capital-account return as if it were a straightforward dividend remittance (or vice versa) is a real source of processing delay.
        </p>

        <h3 className="text-xl font-bold mb-3">Form 15CA/15CB</h3>
        <p className="text-gray-700 mb-8">
          Form 15CA/15CB is the income-tax certification step for the outward remittance itself — the same requirement already documented on AU Corporate&apos;s Branch Office, Liaison Office, and Project Office closure guides, applied here to a subsidiary&apos;s final distribution. Form 15CB is a chartered accountant&apos;s certificate confirming the remittance&apos;s tax position (including any applicable withholding under the Income-tax Act and the India-US DTAA); Form 15CA is the remitter&apos;s own declaration filed with the tax authorities, based on that certificate. The AD bank will not process the remittance without both in place.
        </p>

        <h3 className="text-xl font-bold mb-3">Rule 21 of the NDI Rules</h3>
        <p className="text-gray-700">
          Where the remittance connected to your subsidiary&apos;s closure involves a capital reduction or a share buyback — rather than a straightforward return of paid-up capital at par — pricing needs to be supported by a fair-market-value certification consistent with <strong>Rule 21 of the Foreign Exchange Management (Non-Debt Instruments) Rules, 2019</strong>, the same discipline that applies to share pricing on the way in. That FMV certification under Rule 21 is a separate thing from the registered-valuer requirement that can independently apply if the capital reduction is structured as an NCLT-approved scheme under Section 66 of the Companies Act — the two are different professional-certification regimes, and which one (or both) governs your situation depends on how the specific capital reduction or buyback is structured. We&apos;re deliberately not naming a specific certifying professional or walking the full valuation mechanics here — if your closure involves a capital reduction or buyback rather than a plain capital return, this is worth a direct conversation with us about which certification requirement actually applies to your structure.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What This Means for the US Parent: Form 5471 Deconsolidation and Section 482 Close-Out</h2>
        <p className="text-gray-700 mb-8">
          Every India-side closure guide we&apos;ve reviewed on this topic stops at the Indian border. None of them connect the closure process to what your US parent actually has to do on its own tax return once the subsidiary is gone — and the one competitor we found with any adjacent US-tax expertise explicitly scopes that work out as &quot;outside any India retainer.&quot; That gap is exactly why this section exists, and it&apos;s a direct extension of the &quot;US Tax Considerations at a Glance&quot; framework we already publish on our{' '}
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            subsidiary vs. branch office comparison page
          </Link>{' '}
          — the same Form 5471, Section 482, and CFC concepts established there, carried through to the closure moment rather than treated as a separate, disconnected question.
        </p>

        <h3 className="text-xl font-bold mb-3">Form 5471 final-year reporting and deconsolidation</h3>
        <p className="text-gray-700 mb-8">
          While your Indian subsidiary was operating, it was almost certainly a Controlled Foreign Corporation under <strong>IRC Section 957</strong>, reported annually on <strong>Form 5471</strong>. In the year it closes, that filing obligation doesn&apos;t simply stop — the final Form 5471 needs to reflect the CFC&apos;s activity through its actual dissolution date, including any final-period Subpart F or NCTI (formerly GILTI) inclusion, before the entity comes off your US parent&apos;s ongoing filing list entirely. How a liquidating distribution to the US parent is characterized for US tax purposes depends on ownership structure and the specific nonrecognition provisions that can apply to a foreign corporate liquidation — this is genuinely fact-dependent and needs your US CPA&apos;s direct involvement on the specific structure, not a generic rule of thumb.
        </p>

        <h3 className="text-xl font-bold mb-3">Section 482 close-out on final intercompany transactions, and Schedule M consistency</h3>
        <p className="text-gray-700 mb-8">
          Any intercompany transactions that happen in the subsidiary&apos;s final year — a final management-fee payment, a final royalty settlement, an intercompany loan being repaid down to zero — remain related-party transactions under <strong>Section 482</strong> right up until the entity dissolves, and the same figures need to tie out on <strong>Schedule M of the final Form 5471</strong> and on whatever final-year transfer pricing documentation is filed in India. This is the same Schedule M consistency point we make on our comparison page&apos;s ongoing US Tax Considerations section, applied here at the close-out moment rather than during an operating year — see our{' '}
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            transfer pricing &amp; Section 482 guide
          </Link>{' '}
          for the mechanics that underpin this beyond what&apos;s specific to closure.
        </p>

        <h3 className="text-xl font-bold mb-3">CFC/Subpart F considerations in the final year</h3>
        <p className="text-gray-700 mb-8">
          The same CFC/Section 957 framing that governs an operating subsidiary continues to apply right up until dissolution — a short final period doesn&apos;t exempt the entity from Subpart F or NCTI analysis, it just shortens the period being tested. If the subsidiary&apos;s final-year activity includes any of the intercompany categories that typically trigger a Subpart F or NCTI inclusion (management fees, royalties, interest between group entities), that inclusion analysis still needs to run for the short final period, not be assumed away because the entity is closing.
        </p>

        <h3 className="text-xl font-bold mb-3">Why this needs coordinated CA + US-CPA sign-off</h3>
        <p className="text-gray-700">
          The India-side remittance documentation (the liquidator&apos;s or auditor&apos;s certificate, the Form 15CA/15CB tax position, the capital-account versus dividend-distribution characterization) and the US-side Form 5471 final-year reporting are describing the same underlying transaction from two different regulatory vantage points — and the numbers on both sides need to tie out to each other. Two advisors working independently, one on the India side and one on the US side, who never actually compare notes on the same closing transaction, is exactly how inconsistencies creep in between what&apos;s reported to Indian authorities and what shows up on the US parent&apos;s own return. Our team includes CA and US CPA-qualified professionals specifically so that the India-side remittance file and the US-side Form 5471 deconsolidation get reconciled against each other as one coordinated closing, not assembled separately and hoped into alignment.
        </p>
      </div>

      <div className="mb-12">
        <LeadForm
          title="Ready to Talk Through Your Subsidiary's Exit?"
          description="Tell us where your subsidiary stands — dormant and clean, or still carrying obligations to wind down — and our CA and US CPA-qualified team will confirm the right route, walk through the RBI remittance mechanics, and coordinate the US-side Form 5471 deconsolidation so both filings tie out."
        />
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

      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Related Reading</h3>
        <div className="flex flex-col gap-2">
          <Link href="/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            US Subsidiary vs Branch Office in India →
          </Link>
          <Link href="/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            FEMA Compliance for US Companies After Incorporation →
          </Link>
          <Link href="/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Transfer Pricing &amp; Section 482 for US-India Subsidiaries →
          </Link>
          <Link href="/branch-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Closing a Branch Office in India →
          </Link>
          <Link href="/liaison-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Closing a Liaison Office in India →
          </Link>
          <Link href="/project-office-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Closing a Project Office in India →
          </Link>
          <Link href="/services/taxation-regulatory" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            Taxation &amp; Regulatory Services →
          </Link>
          <Link href="/india-entry-for-us-companies" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
            ← Back: India Entry for US Companies
          </Link>
        </div>
      </div>
    </RegionClusterTemplate>
  )
}
