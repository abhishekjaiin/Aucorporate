import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { getCaseStudyBySlug, caseStudies } from "@/lib/case-studies"

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return {}
  const title = `${study.clientDescription} | AU Corporate Case Study`
  return {
    title: { absolute: title },
    description: study.challenge,
    alternates: { canonical: `https://www.theaucorp.com/case-studies/${slug}` },
    openGraph: { title, description: study.challenge, url: `https://www.theaucorp.com/case-studies/${slug}` },
    twitter: { title, description: study.challenge },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) notFound()

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Case Studies", href: "/case-studies" }, { label: study.clientDescription }]} />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <span className="self-start rounded px-2 py-0.5 text-xs font-semibold text-[#713f12]" style={{ backgroundColor: "#fef9c3" }}>
            {study.country} · {study.industry}
          </span>
          <h1 className="text-3xl font-bold mt-4 mb-6 font-heading text-blue sm:text-4xl">{study.clientDescription}</h1>
          <p className="text-gray-600 leading-relaxed mb-8">{study.challenge}</p>

          <div className="flex gap-10 border-y py-6 mb-8">
            {study.stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading font-bold text-2xl text-blue">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{study.body}</p>

          <div className="mt-12">
            <Link href="/contact" className="text-gold-dark font-semibold hover:underline">
              Talk to us about a similar situation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
