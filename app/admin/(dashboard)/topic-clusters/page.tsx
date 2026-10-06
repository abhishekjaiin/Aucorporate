import { listTopicClusters } from "@/lib/actions/taxonomy"
import { TopicClusterManager } from "@/components/admin/TopicClusterManager"

export default async function TopicClustersPage() {
  const clusters = await listTopicClusters()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#081a42]">Topic Clusters</h1>
      <TopicClusterManager initial={clusters} />
    </div>
  )
}
