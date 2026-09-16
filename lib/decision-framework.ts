// Shared "Which Situation Are You In?" decision framework used identically on
// /oidar-gst-registration-india and /india-entry-for-saas-companies (via
// components/ScenarioSelector.tsx). Defined once here so the two pages cannot
// drift out of sync with each other.

export type DecisionScenario = {
  id: string
  name: string
  signal: string
  consequence: string
  link: { href: string; label: string }
}

export const decisionScenarios: DecisionScenario[] = [
  {
    id: "compliance-only",
    name: "Scenario 1 — Compliance-only, no entity",
    signal:
      "You're billing Indian customers directly (card, UPI, wallet — not through an app-store intermediary or a reseller) for a SaaS subscription, AI product, or digital-services product, with no India office, no local staff, no India bank account, and no plan yet to change that.",
    consequence:
      "You're in scope for OIDAR/GST registration from the first transaction — no turnover threshold, no grace period. This is a compliance obligation, not an entry decision.",
    link: { href: "/oidar-gst-registration-india", label: "Read the full OIDAR & GST registration guide" },
  },
  {
    id: "hybrid",
    name: "Scenario 2 — Hybrid / testing the market",
    signal:
      "You're already OIDAR-registered (or should be) and starting to see signals that push beyond pure compliance — exploring a local reseller or distributor relationship, considering a small support/customer-success presence via an Employer of Record, having early conversations about India-specific fundraising, or a prospect/government tender asking whether you have an India-registered entity.",
    consequence:
      "Not yet a trigger on its own, but each of these signals is a countdown, not a coincidence — this is the zone to actively watch, not park.",
    link: { href: "/doing-business-in-india/incorporation", label: "See the ready/wait incorporation checklist" },
  },
  {
    id: "ready-to-incorporate",
    name: "Scenario 3 — Ready to incorporate",
    signal:
      "You have a signed customer or purchase order that requires India-registered invoicing; you need to hire beyond what an EOR can reasonably support; you're about to open an India bank account, hold local assets, or raise India-specific capital; or a customer/tender requires proof of an India-registered entity before you can even bid.",
    consequence:
      "Entity setup (almost always a Wholly Owned Subsidiary for a SaaS/AI business) is now the right call. Your existing OIDAR registration and your new entity's GST registration are two separate registrations under two separate legal persons — the OIDAR obligation doesn't just disappear, but it also doesn't automatically convert into the new one; the old registration needs to be formally wound down once the new entity's GST registration is in place.",
    link: { href: "/india-entry-for-saas-companies", label: "Read the full India entry guide for SaaS & AI companies" },
  },
]
