import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudyArticle } from "@/components/case-study/CaseStudyArticle"
import { getCaseStudyBySlug, caseStudies } from "@/lib/case-studies"

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return {}
  const url = `https://www.theaucorp.com/case-studies/${slug}`
  return {
    title: { absolute: study.metaTitle },
    description: study.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      locale: "en_IN",
      type: "article",
      siteName: "AU Corporate",
      title: study.metaTitle,
      description: study.metaDescription,
      url,
      modifiedTime: study.dateModified,
    },
    twitter: { title: study.metaTitle, description: study.metaDescription },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) notFound()
  return <CaseStudyArticle study={study} />
}
