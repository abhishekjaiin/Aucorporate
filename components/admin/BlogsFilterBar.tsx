"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const STATUSES = ["DRAFT", "INTERNAL_REVIEW", "APPROVED", "PUBLISHED", "NEEDS_REFRESH"]

export function BlogsFilterBar({
  categories,
  authors,
}: {
  categories: { id: string; name: string }[]
  authors: { id: string; name: string }[]
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) params.set(key, value)
    else params.delete(key)
    params.delete("page")
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Input
        placeholder="Search by title or slug…"
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => setParam("search", e.target.value)}
        className="w-64"
      />

      <Select value={searchParams.get("status") ?? "__all"} onValueChange={(v) => setParam("status", v === "__all" ? "" : v)}>
        <SelectTrigger className="w-40"><SelectValue placeholder="Status" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="__all">All statuses</SelectItem>
          {STATUSES.map((s) => <SelectItem key={s} value={s}>{s.replace("_", " ")}</SelectItem>)}
        </SelectContent>
      </Select>

      <Select value={searchParams.get("categoryId") ?? "__all"} onValueChange={(v) => setParam("categoryId", v === "__all" ? "" : v)}>
        <SelectTrigger className="w-44"><SelectValue placeholder="Category" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="__all">All categories</SelectItem>
          {categories.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
        </SelectContent>
      </Select>

      <Select value={searchParams.get("authorId") ?? "__all"} onValueChange={(v) => setParam("authorId", v === "__all" ? "" : v)}>
        <SelectTrigger className="w-44"><SelectValue placeholder="Author" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="__all">All authors</SelectItem>
          {authors.map((a) => <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  )
}
