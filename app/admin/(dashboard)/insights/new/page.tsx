import { createInsight, listAuthorsActive, listCategoriesAll, listTopicClustersAll } from "@/lib/actions/insights"
import { InsightForm } from "@/components/admin/InsightForm"

export default async function NewInsightPage() {
  const [authors, categories, topicClusters] = await Promise.all([
    listAuthorsActive(),
    listCategoriesAll(),
    listTopicClustersAll(),
  ])

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#081a42]">New Insight</h1>
        <p className="mt-1 text-sm text-gray-500">Starts as a draft. Nothing here is public until it's approved and published.</p>
      </div>

      <InsightForm
        authors={authors}
        categories={categories}
        topicClusters={topicClusters}
        onSave={createInsight}
      />
    </div>
  )
}
