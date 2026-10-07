import Link from "next/link"
import { asc } from "drizzle-orm"

import { db } from "@/lib/db/client"
import { blogs } from "@/lib/db/schema"
import { auth } from "@/lib/auth"
import { PermissionError } from "@/lib/auth/permissions"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { StatusBadge } from "@/components/admin/StatusBadge"

export default async function SeoHealthPage() {
  const session = await auth()
  if (!session?.user) throw new PermissionError()

  const rows = await db
    .select({
      id: blogs.id,
      title: blogs.title,
      status: blogs.status,
      seoScore: blogs.seoScore,
      needsRefresh: blogs.needsRefresh,
    })
    .from(blogs)
    .orderBy(asc(blogs.seoScore))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#081a42]">SEO Health</h1>
        <p className="mt-1 text-sm text-gray-500">
          Lowest-scoring blog posts first — an internal content/SEO checklist score, not a Google ranking signal.
        </p>
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow><TableHead>Title</TableHead><TableHead>Status</TableHead><TableHead>Score</TableHead><TableHead>Needs Refresh</TableHead></TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow><TableCell colSpan={4} className="py-8 text-center text-gray-400">No blog posts yet.</TableCell></TableRow>
            ) : (
              rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>
                    <Link href={`/admin/blog/${r.id}`} className="font-medium text-[#081a42] hover:underline">{r.title}</Link>
                  </TableCell>
                  <TableCell><StatusBadge status={r.status} /></TableCell>
                  <TableCell className={r.seoScore !== null && r.seoScore < 50 ? "font-semibold text-red-600" : ""}>
                    {r.seoScore !== null ? `${r.seoScore}/100` : "—"}
                  </TableCell>
                  <TableCell>{r.needsRefresh ? "Yes" : "No"}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
