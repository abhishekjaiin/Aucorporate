"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { createKeyword, updateKeyword } from "@/lib/actions/taxonomy"

type Keyword = {
  id: string
  keyword: string
  slug: string
  searchIntent: string | null
  topicClusterId: string | null
  notes: string | null
}

const INTENTS = ["INFORMATIONAL", "COMMERCIAL", "TRANSACTIONAL", "COMPARISON", "REGULATORY"]

export function KeywordManager({
  initial,
  clusters,
}: {
  initial: Keyword[]
  clusters: { id: string; name: string }[]
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Partial<Keyword> | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const clusterName = (id: string | null) => clusters.find((c) => c.id === id)?.name ?? "—"

  const handleSave = async () => {
    if (!editing?.keyword || !editing?.slug) return
    setSaving(true)
    setError(null)
    try {
      if (editing.id) await updateKeyword(editing.id, editing)
      else await createKeyword(editing)
      setOpen(false)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={() => { setEditing({}); setOpen(true) }}>Add Keyword</Button>
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader><TableRow><TableHead>Keyword</TableHead><TableHead>Intent</TableHead><TableHead>Topic Cluster</TableHead></TableRow></TableHeader>
          <TableBody>
            {initial.length === 0 ? (
              <TableRow><TableCell colSpan={3} className="py-8 text-center text-gray-400">No keywords yet.</TableCell></TableRow>
            ) : (
              initial.map((k) => (
                <TableRow key={k.id} className="cursor-pointer" onClick={() => { setEditing(k); setOpen(true) }}>
                  <TableCell className="font-medium">{k.keyword}</TableCell>
                  <TableCell className="text-gray-400">{k.searchIntent ?? "—"}</TableCell>
                  <TableCell>{clusterName(k.topicClusterId)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editing?.id ? "Edit Keyword" : "Add Keyword"}</DialogTitle></DialogHeader>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {editing && (
            <div className="space-y-3">
              <div className="space-y-1.5"><Label>Keyword</Label><Input value={editing.keyword ?? ""} onChange={(e) => setEditing({ ...editing, keyword: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Slug</Label><Input value={editing.slug ?? ""} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} /></div>
              <div className="space-y-1.5">
                <Label>Search Intent</Label>
                <Select value={editing.searchIntent ?? ""} onValueChange={(v) => setEditing({ ...editing, searchIntent: v })}>
                  <SelectTrigger><SelectValue placeholder="Select intent" /></SelectTrigger>
                  <SelectContent>{INTENTS.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Topic Cluster</Label>
                <Select value={editing.topicClusterId ?? ""} onValueChange={(v) => setEditing({ ...editing, topicClusterId: v })}>
                  <SelectTrigger><SelectValue placeholder="Select cluster" /></SelectTrigger>
                  <SelectContent>{clusters.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5"><Label>Notes</Label><Textarea value={editing.notes ?? ""} onChange={(e) => setEditing({ ...editing, notes: e.target.value })} rows={2} /></div>
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button onClick={handleSave} disabled={saving}>{saving ? "Saving…" : "Save"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
