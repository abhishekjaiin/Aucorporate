// Real client case studies only — no placeholder or fabricated entries.
// Add an entry here once a case study has been reviewed and approved for
// publication; both the homepage section and /case-studies automatically
// pick it up. Leave this array empty rather than invent names, figures,
// or outcomes.

export type CaseStudy = {
  slug: string
  country: string
  industry: string
  clientDescription: string
  challenge: string
  stats: [{ value: string; label: string }, { value: string; label: string }]
  body: string
}

export const caseStudies: CaseStudy[] = []

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
