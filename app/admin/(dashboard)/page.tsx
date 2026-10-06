import Link from "next/link"
import { getDashboardStats } from "@/lib/actions/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/admin/StatusBadge"

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats()

  const statTiles = [
    { label: "Total Insights", value: stats.total },
    { label: "Drafts", value: stats.draft },
    { label: "Internal Review", value: stats.internalReview },
    { label: "Approved", value: stats.approved },
    { label: "Published", value: stats.published },
    { label: "Needs Refresh", value: stats.needsRefresh },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#081a42]">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Content &amp; SEO overview for AU Corporate Insights.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {statTiles.map((tile) => (
          <Card key={tile.label}>
            <CardContent className="pt-0">
              <p className="text-2xl font-bold text-[#081a42]">{tile.value}</p>
              <p className="mt-1 text-xs text-gray-500">{tile.label}</p>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardContent className="pt-0">
            <p className="text-2xl font-bold text-[#081a42]">
              {stats.averageSeoScore !== null ? `${stats.averageSeoScore}/100` : "—"}
            </p>
            <p className="mt-1 text-xs text-gray-500">Avg. Content SEO Health</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recently Updated</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.recentlyUpdated.length === 0 ? (
              <p className="text-sm text-gray-400">No insights yet.</p>
            ) : (
              <ul className="space-y-3">
                {stats.recentlyUpdated.map((item) => (
                  <li key={item.id} className="flex items-center justify-between gap-3 text-sm">
                    <Link href={`/admin/insights/${item.id}`} className="truncate font-medium text-gray-700 hover:text-[#081a42]">
                      {item.title}
                    </Link>
                    <StatusBadge status={item.status} />
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Needing Review</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.pendingReview.length === 0 ? (
              <p className="text-sm text-gray-400">Nothing is waiting for review.</p>
            ) : (
              <ul className="space-y-3">
                {stats.pendingReview.map((item) => (
                  <li key={item.id} className="text-sm">
                    <Link href={`/admin/insights/${item.id}`} className="font-medium text-gray-700 hover:text-[#081a42]">
                      {item.title}
                    </Link>
                    <p className="text-xs text-gray-400">
                      {item.authorName ?? "No author"} · {item.categoryName ?? "No category"}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.recentDrafts.length === 0 ? (
              <p className="text-sm text-gray-400">No drafts in progress.</p>
            ) : (
              <ul className="space-y-3">
                {stats.recentDrafts.map((item) => (
                  <li key={item.id} className="text-sm">
                    <Link href={`/admin/insights/${item.id}`} className="font-medium text-gray-700 hover:text-[#081a42]">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Future Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Google Search Console — Not connected</li>
              <li>Bing Webmaster — Not connected</li>
              <li>GA4 — Not connected</li>
              <li>Microsoft Clarity — Not connected</li>
              <li>Organic clicks / impressions / CTR — Not connected</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
