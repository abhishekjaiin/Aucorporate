import { notFound } from "next/navigation"

import { getSessionUser } from "@/lib/auth/session"
import {
  getInsightById,
  getInsightHealth,
  updateInsight,
  listAuthorsActive,
  listCategoriesAll,
  listTopicClustersAll,
} from "@/lib/actions/insights"
import { InsightForm } from "@/components/admin/InsightForm"
import { InsightWorkflowActions } from "@/components/admin/InsightWorkflowActions"
import { SeoHealthPanel } from "@/components/admin/SeoHealthPanel"
import { StatusBadge } from "@/components/admin/StatusBadge"
import type { InsightInput } from "@/lib/validation/insight"

export default async function EditInsightPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const user = await getSessionUser()
  if (!user) notFound()

  const [insight, health, authors, categories, topicClusters] = await Promise.all([
    getInsightById(id),
    getInsightHealth(id),
    listAuthorsActive(),
    listCategoriesAll(),
    listTopicClustersAll(),
  ])

  if (!insight) notFound()

  const handleSave = async (data: InsightInput) => {
    "use server"
    await updateInsight(id, data)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#081a42]">{insight.title}</h1>
            <div className="mt-1 flex items-center gap-2">
              <StatusBadge status={insight.status} />
              <span className="text-xs text-gray-400">/insights/{insight.slug}</span>
            </div>
          </div>
        </div>

        <InsightWorkflowActions id={insight.id} status={insight.status} role={user.role} />

        <InsightForm
          initial={{
            id: insight.id,
            title: insight.title,
            slug: insight.slug,
            excerpt: insight.excerpt,
            content: insight.content,
            authorId: insight.authorId,
            categoryId: insight.categoryId,
            topicClusterId: insight.topicClusterId,
            serviceSlug: insight.serviceSlug,
            jurisdictionSlug: insight.jurisdictionSlug,
            industrySlug: insight.industrySlug,
            featuredImage: insight.featuredImage,
            imageAlt: insight.imageAlt,
            primaryKeyword: insight.primaryKeyword,
            metaTitle: insight.metaTitle,
            metaDescription: insight.metaDescription,
            canonicalUrl: insight.canonicalUrl,
          }}
          authors={authors}
          categories={categories}
          topicClusters={topicClusters}
          onSave={handleSave}
        />
      </div>

      <div className="space-y-4">{health && <SeoHealthPanel report={health} />}</div>
    </div>
  )
}
