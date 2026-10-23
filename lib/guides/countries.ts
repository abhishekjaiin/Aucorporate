import type { Metadata } from "next"

/**
 * Registry of the country-entry guide clusters under /blog/<country>-to-india.
 *
 * Every cluster covers the same topics for a different home country, so to
 * Google they are regional variants of each other. Registering a cluster here
 * makes `guideAlternates` emit reciprocal hreflang links between every
 * country's version of a topic, which is what stops the clusters being read
 * as duplicates. Adding a new country (UK, Singapore, ...) means: add it to
 * GUIDE_COUNTRIES, list the topics it covers, and call guideAlternates() in
 * each of its layouts. See docs/COUNTRY_CLUSTER_PLAYBOOK.md.
 */

export type GuideTopic =
  | "hub"
  | "faq"
  | "incorporation-process"
  | "subsidiary-vs-branch-vs-liaison-office-vs-llp"
  | "documents-and-apostille"
  | "resident-director"
  | "funding-fema-fc-gpr"
  | "share-valuation"
  | "repatriating-profits"
  | "eor-vs-subsidiary"
  | "transfer-pricing"
  | "dtaa-pe-risk"
  | "parent-obligations"
  | "compliance-calendar"
  | "audit-icofr"
  | "tax-notices-and-litigation"
  | "contracts-and-arbitration"
  | "esop"
  | "restructuring-and-exit"
  | "expat-visa"
  | "global-vat"
  | "hiring-and-payroll"
  | "common-mistakes"
  | "india-dtaa"
  | "foreign-employee-treaty-ssa"
  | "treaties-hub"
  | "treaties-faq"
  | "dtaa-withholding-rates"
  | "epf-international-workers"
  | "expat-tax-residency"
  | "social-security-agreement"
  | "treaty-benefits-documents"
  | "home-social-security"
  | "trade-agreement"
  | "data-protection"
  | "gcc"
  | "holdco"

export type GuideCountryKey = "usa" | "australia" | "uk" | "japan" | "singapore"

export type GuideCountry = {
  /** "the USA" / "Australia", as used in "from {name}". */
  name: string
  /** "US" / "Australian", as used in "{adjective} companies". */
  adjective: string
  /** BCP 47 tag used for hreflang and inLanguage. */
  locale: string
  basePath: string
  /** Topic -> URL slug under basePath. Topics a country doesn't cover are omitted. */
  slugs: Partial<Record<GuideTopic, string>>
}

const SITE = "https://www.theaucorp.com"

const SHARED_TOPICS: GuideTopic[] = [
  "incorporation-process",
  "subsidiary-vs-branch-vs-liaison-office-vs-llp",
  "documents-and-apostille",
  "resident-director",
  "funding-fema-fc-gpr",
  "share-valuation",
  "repatriating-profits",
  "eor-vs-subsidiary",
  "transfer-pricing",
  "dtaa-pe-risk",
  "compliance-calendar",
  "audit-icofr",
  "tax-notices-and-litigation",
  "contracts-and-arbitration",
  "esop",
  "restructuring-and-exit",
  "expat-visa",
  "global-vat",
  "hiring-and-payroll",
  "common-mistakes",
  "faq",
]

const sameSlugs = (topics: GuideTopic[]) => Object.fromEntries(topics.map((t) => [t, t]))

export const GUIDE_COUNTRIES: Record<GuideCountryKey, GuideCountry> = {
  usa: {
    name: "the USA",
    adjective: "US",
    locale: "en-US",
    basePath: "/blog/usa-to-india",
    slugs: {
      hub: "",
      ...sameSlugs(SHARED_TOPICS),
      "parent-obligations": "us-parent-obligations",
      "treaties-hub": "tax-and-social-security-treaties",
      "treaties-faq": "tax-and-social-security-treaties/faq",
      "india-dtaa": "tax-and-social-security-treaties/india-us-dtaa-guide",
      "dtaa-withholding-rates": "tax-and-social-security-treaties/dtaa-withholding-rates",
      "epf-international-workers": "tax-and-social-security-treaties/epf-international-workers",
      "expat-tax-residency": "tax-and-social-security-treaties/expat-tax-residency-india-us",
      "social-security-agreement": "tax-and-social-security-treaties/social-security-us-expats-india",
      "treaty-benefits-documents": "tax-and-social-security-treaties/treaty-benefits-documents",
      "home-social-security": "tax-and-social-security-treaties/us-social-security-for-americans-in-india",
    },
  },
  australia: {
    name: "Australia",
    adjective: "Australian",
    locale: "en-AU",
    basePath: "/blog/australia-to-india",
    slugs: {
      hub: "",
      ...sameSlugs(SHARED_TOPICS),
      "parent-obligations": "australian-parent-obligations",
      "india-dtaa": "india-australia-dtaa",
      "foreign-employee-treaty-ssa": "foreign-employee-treaty-ssa",
    },
  },
  uk: {
    name: "the UK",
    adjective: "UK",
    locale: "en-GB",
    basePath: "/blog/uk-to-india",
    // The UK cluster was written with its own slugs and angles, so topics
    // map to differently named pages rather than reusing the shared slugs.
    slugs: {
      hub: "",
      faq: "faq",
      "incorporation-process": "incorporation-steps",
      "subsidiary-vs-branch-vs-liaison-office-vs-llp": "structure-options",
      "documents-and-apostille": "documents-companies-house-apostille",
      "funding-fema-fc-gpr": "funding-and-fema",
      "repatriating-profits": "repatriating-profits",
      "transfer-pricing": "transfer-pricing",
      "india-dtaa": "india-uk-dtaa",
      "parent-obligations": "uk-parent-reporting",
      "compliance-calendar": "compliance-calendar",
      "contracts-and-arbitration": "contracts-courts-arbitration",
      "restructuring-and-exit": "exit-and-restructuring",
      "expat-visa": "relocate-uk-staff",
      "hiring-and-payroll": "hiring-in-india",
      "common-mistakes": "common-mistakes",
      "foreign-employee-treaty-ssa": "uk-employees-in-india-dcc",
      "trade-agreement": "india-uk-ceta",
      "data-protection": "data-protection-uk-gdpr-dpdp",
      gcc: "gcc-for-uk-companies",
    },
  },
  singapore: {
    name: "Singapore",
    adjective: "Singapore",
    locale: "en-SG",
    basePath: "/blog/singapore-to-india",
    // Written with its own slugs, like the UK cluster.
    slugs: {
      hub: "",
      faq: "faq",
      "incorporation-process": "incorporation-steps",
      "subsidiary-vs-branch-vs-liaison-office-vs-llp": "structure-options",
      "documents-and-apostille": "documents-acra-apostille",
      "funding-fema-fc-gpr": "funding-and-fema",
      "repatriating-profits": "repatriating-profits",
      "transfer-pricing": "transfer-pricing",
      "india-dtaa": "india-singapore-dtaa",
      "parent-obligations": "singapore-parent-obligations",
      "compliance-calendar": "compliance-calendar",
      "contracts-and-arbitration": "contracts-courts-siac",
      "restructuring-and-exit": "exit-and-restructuring",
      "expat-visa": "relocate-singapore-staff",
      "hiring-and-payroll": "hiring-in-india",
      "common-mistakes": "common-mistakes",
      "foreign-employee-treaty-ssa": "singapore-employees-in-india-epf-cpf",
      "trade-agreement": "india-singapore-ceca",
      "data-protection": "data-protection-pdpa-dpdp",
      gcc: "gcc-for-singapore-companies",
      holdco: "singapore-holdco-for-india",
    },
  },
  japan: {
    name: "Japan",
    adjective: "Japanese",
    locale: "en-JP",
    basePath: "/blog/japan-to-india",
    // Same topic set and treaty sub-hub as the USA cluster, with Japan's own
    // slugs for the treaty and parent pages.
    slugs: {
      hub: "",
      ...sameSlugs(SHARED_TOPICS),
      "parent-obligations": "japan-parent-obligations",
      "treaties-hub": "tax-and-social-security-treaties",
      "treaties-faq": "tax-and-social-security-treaties/faq",
      "india-dtaa": "tax-and-social-security-treaties/india-japan-dtaa-guide",
      "dtaa-withholding-rates": "tax-and-social-security-treaties/dtaa-withholding-rates",
      "epf-international-workers": "tax-and-social-security-treaties/epf-international-workers",
      "expat-tax-residency": "tax-and-social-security-treaties/expat-tax-residency-india-japan",
      "social-security-agreement": "tax-and-social-security-treaties/india-japan-social-security-agreement",
      "treaty-benefits-documents": "tax-and-social-security-treaties/treaty-benefits-documents",
      "home-social-security": "tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india",
    },
  },
}

export function guideUrl(country: GuideCountryKey, topic: GuideTopic): string | undefined {
  const c = GUIDE_COUNTRIES[country]
  const slug = c.slugs[topic]
  if (slug === undefined) return undefined
  return `${SITE}${c.basePath}${slug ? `/${slug}` : ""}`
}

/**
 * `alternates` metadata for a guide page: its canonical URL plus hreflang
 * links to every registered country's version of the same topic (including
 * itself, as Google requires), plus an x-default fallback. A topic only one
 * country covers gets just the canonical.
 */
export function guideAlternates(country: GuideCountryKey, topic: GuideTopic): Metadata["alternates"] {
  const canonical = guideUrl(country, topic)
  if (!canonical) throw new Error(`Guide topic "${topic}" is not registered for ${country}`)
  const languages: Record<string, string> = {}
  for (const key of Object.keys(GUIDE_COUNTRIES) as GuideCountryKey[]) {
    const url = guideUrl(key, topic)
    if (url) languages[GUIDE_COUNTRIES[key].locale] = url
  }
  if (Object.keys(languages).length < 2) return { canonical }
  // Searchers outside every registered country (India included) get the
  // USA version, the most complete cluster, or this page if the USA has none.
  languages["x-default"] = guideUrl("usa", topic) ?? canonical
  return { canonical, languages }
}
