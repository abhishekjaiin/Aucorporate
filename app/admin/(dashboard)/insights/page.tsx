import Link from "next/link"

import { listInsights, listAuthorsActive, listCategoriesAll } from "@/lib/actions/insights"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { StatusBadge } from "@/components/admin/StatusBadge"
import { InsightsFilterBar } from "@/components/admin/InsightsFilterBar"

export default async function InsightsListPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>
}) {
  const params = await searchParams
  const page = Number(params.page ?? "1")

  const [{ rows, total, pageSize }, authors, categories] = await Promise.all([
    listInsights({
      search: params.search,
      status: params.status,
      categoryId: params.categoryId,
      authorId: params.authorId,
      topicClusterId: params.topicClusterId,
      page,
    }),
    listAuthorsActive(),
    listCategoriesAll(),
  ])

  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const cleanParams = Object.fromEntries(Object.entries(params).filter(([, v]) => v !== undefined)) as Record<string, string>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#081a42]">Insights</h1>
          <p className="mt-1 text-sm text-gray-500">{total} total</p>
        </div>
        <Button asChild>
          <Link href="/admin/insights/new">New Insight</Link>
        </Button>
      </div>

      <InsightsFilterBar categories={categories} authors={authors} />

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Primary Keyword</TableHead>
              <TableHead>SEO Health</TableHead>
              <TableHead>Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="py-8 text-center text-gray-400">
                  No insights match these filters.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Link href={`/admin/insights/${row.id}`} className="font-medium text-[#081a42] hover:underline">
                      {row.title}
                    </Link>
                  </TableCell>
                  <TableCell><StatusBadge status={row.status} /></TableCell>
                  <TableCell>{row.categoryName ?? "—"}</TableCell>
                  <TableCell>{row.authorName ?? "—"}</TableCell>
                  <TableCell className="max-w-48 truncate">{row.primaryKeyword ?? "—"}</TableCell>
                  <TableCell>{row.seoScore !== null ? `${row.seoScore}/100` : "—"}</TableCell>
                  <TableCell>{new Date(row.updatedAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center gap-2 text-sm">
          {page > 1 && (
            <Link href={`?${new URLSearchParams({ ...cleanParams, page: String(page - 1) }).toString()}`} className="text-[#081a42] hover:underline">
              ← Previous
            </Link>
          )}
          <span className="text-gray-400">Page {page} of {totalPages}</span>
          {page < totalPages && (
            <Link href={`?${new URLSearchParams({ ...cleanParams, page: String(page + 1) }).toString()}`} className="text-[#081a42] hover:underline">
              Next →
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
