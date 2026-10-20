import Link from "next/link"
import type { CaseStudy } from "@/lib/case-studies"

/** Summary card linking to a case study; used on the homepage, /case-studies and service pages. */
export function CaseStudyCard({ study, headingLevel = "h3" }: { study: CaseStudy; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="border rounded-xl p-6 flex flex-col gap-3 bg-white hover:shadow-lg transition"
    >
      <span
        className="self-start rounded px-2 py-0.5 text-xs font-semibold text-[#713f12]"
        style={{ backgroundColor: "#fef9c3" }}
      >
        {study.country} · {study.industry}
      </span>
      <Heading className="font-semibold font-heading text-blue">{study.clientDescription}</Heading>
      <p className="text-sm text-gray-500">{study.challenge}</p>
      <div className="border-t pt-3 mt-auto flex gap-6">
        {study.stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading font-bold text-lg text-blue">{s.value}</p>
            <p className="text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
      <span className="text-sm font-semibold text-blue">Read the case study →</span>
    </Link>
  )
}
