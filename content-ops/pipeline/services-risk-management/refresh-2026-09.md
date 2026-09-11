# Refresh: Risk Management Services (/services/risk-management) — 2026-09

## Trigger
Scheduled/thin-content audit finding, not a ranking dip or a specific regulatory change. A
site-wide rendered-word-count audit (Playwright against the live production build) flagged this
page at ~323 words of visible body text — thin for a commercial service page covering three
distinct sub-services (risk management/ERM, forensic services, special audit & review) that the
navbar treats as a single dropdown group. Competitor pages on comparable risk-advisory topics
typically run 1,200–2,000+ words. No `content-ops/pipeline/services-risk-management/` history
existed before this refresh — this is the page's first documented refresh.

## Current Page vs. Current SERP
Live WebSearch/WebFetch access was unreliable during this session (most fetches to competitor
domains — mbgcorp.com, snr.company, rsm.global, pkcindia.com, dpncindia.com — were blocked by the
environment's egress proxy, and most WebSearch calls returned "search tool unavailable"). One
search did return usable SERP data for "risk advisory services India internal audit enterprise
risk management firm," surfacing the active competitive set: EY India, RSM India, Grant Thornton
Bharat, Dewan P.N. Chopra & Co. (DPNC), MBG Corporate Services, and SNR & Company, among others.

From that result set and general knowledge of how these firms position this category, the
recurring content pattern the AU Corporate page was missing:
- Explanation of *what* each service actually involves (process, not just a one-line card
  description) — forensic audit methodology, what triggers a special audit, what ERM delivers
  in practice.
- A clear articulation of when a company needs this *versus* routine statutory audit — i.e.,
  search intent here isn't "what is risk management" in the abstract, it's "do I need this, and
  when."
- Explicit tie-ins to the Companies Act, 2013 framework (Section 138 internal audit thresholds,
  Section 143(12) fraud reporting, CARO 2020, Internal Financial Controls under Section
  143(3)(i)) — this is the kind of specific, checkable detail that differentiates an advisory
  firm's page from a generic description.
- An FAQ block answering the practical questions a prospect (often a foreign HQ finance lead,
  not an Indian compliance specialist) would actually have.

The old page had none of this — three card grids with one-line descriptions and no surrounding
prose, no FAQ, no explanation of triggers or process.

## Current Page vs. Search Console Data
No Search Console / Ahrefs / Semrush tool was available in this session to pull live
impressions/clicks/query/position data for this URL. This refresh is therefore driven by the
word-count/content-depth audit finding described in the Trigger section rather than a verified
GSC signal. Recommend a follow-up pass once GSC data is accessible to confirm which specific
query variants (e.g., "forensic audit services India" vs. "internal audit India foreign
subsidiary" vs. "special audit companies act") the page is getting impressions for but not
clicks/ranking on, so the FAQ and section emphasis can be tuned further.

## New Authoritative Information Found
No new regulatory change was identified (and the task brief did not flag one — the trigger here
is content depth, not a changed rate/form/threshold). The page was, however, missing well-
established, stable, checkable regulatory context that materially answers "do I need this
service," which was added:
- Companies Act, 2013, Section 138 + Companies (Accounts) Rules, 2014, Rule 13 — mandatory
  internal audit thresholds (listed companies always; unlisted public companies above ₹50 cr
  paid-up capital / ₹200 cr turnover / ₹100 cr borrowings / ₹25 cr deposits; private companies
  above ₹200 cr turnover / ₹100 cr borrowings).
- Companies Act, 2013, Section 143(12) + Companies (Audit and Auditors) Rules, 2014, Rule 13 —
  auditor's fraud-reporting duty, including the ₹1 crore threshold that determines Audit
  Committee/Board reporting vs. Central Government reporting via Form ADT-4.
- Companies Act, 2013, Section 143(3)(i) — auditor's opinion on Internal Financial Controls over
  Financial Reporting (IFC-FR).
- CARO 2020 — auditor's obligation to report on fraud noticed/reported and on ADT-4 filing status.
- Companies Act, 2013, Sections 206–208 — ROC inquiry/inspection powers, cited as one real-world
  trigger for a special audit.

These are long-standing, stable provisions (not recent amendments), cited here because the page
previously referenced none of the underlying law at all despite naming services ("Compliance
Audit," "Due Diligence Review," "Forensic Audit") that are defined by it. Given limited live
search verification this session, these citations should get a Stage-9-style primary-source spot
check (MCA rule text) before the next scheduled review, even though none of them are believed to
have changed.

## Changes Made
| Section | Change type | Reason |
|---|---|---|
| Intro (below H1) | Add | Expanded one-line description into two paragraphs explaining the gap between statutory audit assurance and what ERM/forensic/special-audit services actually cover, aimed at the page's real audience (foreign HQ evaluating an Indian subsidiary). |
| New "Typical Triggers" bullet list | Add | Gives concrete, non-fabricated scenarios (whistleblower complaint, lender/JV inspection right, regulator direction, M&A due diligence, crossing Section 138 thresholds) — addresses "do I need this" intent the card grids never answered. |
| Risk Management Services section | Add (note block after cards) | Explains what an ERM engagement produces in practice and ties it to the Section 143(3)(i) IFC-FR audit opinion. |
| Forensic Services section | Add (note block after cards) | Explains how forensic audit differs methodologically from statutory audit, a 4-stage process (scoping/evidence preservation, analytics/testing, interviews, reporting), and the Section 143(12) fraud-reporting linkage. |
| Special Audit & Review section | Add (note block after cards) | Explains real-world special-audit triggers (lender/investor/JV/regulator), the full Section 138/Rule 13 internal-audit applicability thresholds, and CARO 2020's fraud-reporting requirement. |
| "Our Approach" section (new, id="approach") | Add | Four-step engagement process as interactive cards (same `ClickableInfoCard` pattern used elsewhere), giving the page a process narrative it previously lacked entirely. |
| FAQ section (new, id="faqs") + FAQPage JSON-LD | Add | Seven practical questions (statutory vs. internal vs. forensic audit, Section 138 applicability, who orders a special audit, admissibility of forensic findings, realistic timeline framing, ERM relevance for smaller entities, independence vs. statutory auditor) with matching structured data for SERP FAQ eligibility. |
| Related Resources section (new) | Add | Cross-links to Accounting & Assurance, Transaction Advisory, Taxation & Regulatory, and Regulatory Compliance pages — topical internal linking the page had none of. |
| Nav pill row | Update | Added "Our Approach" and "FAQs" anchor links alongside the existing three section pills. |
| Card grids (ERM / Forensic / Special Audit titles & one-line descriptions) | Unchanged | These are accurate, working summaries and the site's established `ClickableInfoCard` pattern for this page type — no reason to rewrite what already works. |
| Hero image, breadcrumb, overall layout/color scheme | Unchanged | Preserved existing Tailwind/navy-gold styling and component choices (`Breadcrumb`, `Reveal`, `ClickableInfoCard`) rather than introducing new UI patterns. |

## Search Intent Assessment
Unchanged in direction, but under-served: intent for this cluster ("risk management services
India," "forensic audit India," "special audit companies act") is informational-commercial —
searchers want to understand what the service involves and whether it applies to them, then
convert. The old page skipped the informational half entirely and went straight to a card grid,
which is a reasonable secondary layer but not sufficient as the whole page. No shift to a purely
different intent (e.g., no new comparison/pricing-shopping intent observed) — the fix is depth
and specificity, not a different content type.

## Not Changed (and why)
- **Card grid structure and `ClickableInfoCard` component**: Already the established, working
  pattern across every AU Corporate service page (accounting-assurance, transaction-advisory,
  taxation-regulatory) — replacing it would break visual/UX consistency for no benefit.
- **Hero image and overall page shell**: No indication anything here underperforms; guardrail
  against unnecessary full rewrites applies.
- **`app/sitemap.ts`**: Not touched per explicit instruction — `lastModified` for
  `/services/risk-management` to be updated by the requester after reviewing this diff.
- **Metadata (`app/services/risk-management/layout.tsx`)**: Title/description were already
  accurate and keyword-relevant ("Risk Management & Advisory Services | AU Corporate" /
  mentions risk advisory, management assurance, fraud risk management); left as-is since the
  task scope was the page body, and changing metadata without confirmed GSC query data risks
  a change with no verified upside.
- **No pricing, client counts, case studies, or statistics were added** — none could be verified
  in this session, and the guardrail against inventing unverifiable claims takes priority over
  filling space with unsubstantiated numbers.

## Word Count (approximate)
- Before: ~323 words of rendered body text (per the audit that flagged this page).
- After: approximately 1,900–2,200 words of rendered body text (existing card titles/descriptions
  + new intro/trigger-list prose + three per-section explanatory blocks + four-step approach
  cards + seven-item FAQ). This is an estimate based on the authored content, not a live
  Playwright measurement (no build/browser tool was run this session) — worth confirming against
  the same audit methodology that originally flagged the page.
