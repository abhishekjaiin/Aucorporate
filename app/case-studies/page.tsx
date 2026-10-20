import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard"
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
            How foreign parents from the USA, China and other countries set up, run and fix the compliance of their Indian subsidiaries with AU Corporate.
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
                <CaseStudyCard key={c.slug} study={c} headingLevel="h2" />
              ))}
            </div>
          )}

          <p className="bg-gray-100 rounded-lg px-5 py-4 text-center text-gray-600 text-sm">
            Not ready for a subsidiary? We also set up{" "}
            <Link href="/branch-office-registration" className="text-gold-dark font-semibold hover:underline">
              Branch Offices
            </Link>{" "}
            and{" "}
            <Link href="/project-office-registration" className="text-gold-dark font-semibold hover:underline">
              Project Offices
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
