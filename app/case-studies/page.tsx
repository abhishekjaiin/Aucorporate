import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { caseStudies } from "@/lib/case-studies"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Case Studies" }]} />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-4 font-heading text-blue sm:text-4xl">
            Subsidiaries We&apos;ve Set Up and Run
          </h1>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            How foreign companies set up and run their Indian subsidiaries with AU Corporate.
          </p>

          {caseStudies.length === 0 ? (
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-14">
              We&apos;re preparing detailed case studies from current and past engagements.
              Check back soon, or{" "}
              <Link href="/contact" className="text-gold-dark font-semibold hover:underline">
                get in touch
              </Link>{" "}
              to discuss your own situation directly.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {caseStudies.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}`}
                  className="border rounded-xl p-6 flex flex-col gap-3 hover:shadow-lg transition"
                >
                  <span className="self-start rounded px-2 py-0.5 text-xs font-semibold text-[#713f12]" style={{ backgroundColor: "#fef9c3" }}>
                    {c.country} · {c.industry}
                  </span>
                  <h2 className="font-semibold font-heading text-blue">{c.clientDescription}</h2>
                  <p className="text-sm text-gray-500">{c.challenge}</p>
                  <div className="border-t pt-3 mt-auto flex gap-6">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-heading font-bold text-lg text-blue">{s.value}</p>
                        <p className="text-xs text-gray-500">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-blue">Read the case study →</span>
                </Link>
              ))}
            </div>
          )}

          <p className="bg-gray-100 rounded-lg px-5 py-4 text-center text-gray-600 text-sm">
            Not ready for a subsidiary? We also set up{" "}
            <Link href="/branch-office-in-india" className="text-gold-dark font-semibold hover:underline">
              Branch Offices
            </Link>
            ,{" "}
            <Link href="/liaison-office-in-india" className="text-gold-dark font-semibold hover:underline">
              Liaison Offices
            </Link>{" "}
            and{" "}
            <Link href="/project-office-in-india" className="text-gold-dark font-semibold hover:underline">
              Project Offices
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
