import Link from "next/link"
import { caseStudiesForService } from "@/lib/case-studies"

/** Navy case study band for a service page, using the copy in the case study's `featuredOn` entry for that page. */
export function RelatedCaseStudies({ serviceSlug }: { serviceSlug: string }) {
  const bands = caseStudiesForService(serviceSlug)
  if (bands.length === 0) return null
  return (
    <section className="py-16 bg-white" id="case-study">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {bands.map(({ study, band }) => (
          <div
            key={study.slug}
            className="flex flex-wrap items-center gap-8 rounded-2xl bg-[#081a42] p-8 text-white sm:p-9"
          >
            <div className="min-w-0 flex-[1_1_420px]">
              <span className="mb-3 inline-block rounded bg-yellow-400 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#081a42]">
                Case Study · {study.country} · {study.industry}
              </span>
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">{band.heading}</h2>
              <p className="mb-4 leading-relaxed text-[#d6e1f7]">{band.text}</p>
              <Link href={`/case-studies/${study.slug}`} className="font-bold text-yellow-400 hover:underline">
                Read the case study &rarr;
              </Link>
            </div>
            <div className="flex flex-wrap gap-7">
              {band.stats.map((s) => (
                <div key={s.label} className="max-w-[11rem]">
                  <b className="block text-3xl leading-tight text-yellow-400">{s.value}</b>
                  <span className="text-sm text-[#d6e1f7]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
