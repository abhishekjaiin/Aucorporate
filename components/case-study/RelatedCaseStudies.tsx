import Link from "next/link"
import { caseStudiesForService } from "@/lib/case-studies"
import { CaseStudyCard } from "./CaseStudyCard"

/** "Case study" band for a service page, showing the case studies whose `featuredOn` lists the page. */
export function RelatedCaseStudies({ serviceSlug }: { serviceSlug: string }) {
  const studies = caseStudiesForService(serviceSlug)
  if (studies.length === 0) return null
  return (
    <section className="py-16 bg-white" id="case-study">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-3 font-heading text-blue sm:text-3xl">
          {studies.length === 1 ? "Case Study" : "Case Studies"}
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          How a foreign parent used this service for its Indian subsidiary.
        </p>
        <div
          className={`grid gap-6 mx-auto ${studies.length === 1 ? "max-w-xl" : "sm:grid-cols-2 lg:grid-cols-3"}`}
        >
          {studies.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/case-studies" className="text-sm font-semibold text-blue hover:underline">
            View all case studies →
          </Link>
        </p>
      </div>
    </section>
  )
}
