import { listKeywords, listTopicClusters } from "@/lib/actions/taxonomy"
import { KeywordManager } from "@/components/admin/KeywordManager"

export default async function KeywordsPage() {
  const [keywords, clusters] = await Promise.all([listKeywords(), listTopicClusters()])
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#081a42]">Keywords</h1>
      <KeywordManager initial={keywords} clusters={clusters} />
    </div>
  )
}
