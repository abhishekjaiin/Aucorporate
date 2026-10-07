"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { createTopicCluster, updateTopicCluster } from "@/lib/actions/taxonomy"

type Cluster = { id: string; name: string; slug: string; description: string | null; primaryKeyword: string | null }

export function TopicClusterManager({ initial }: { initial: Cluster[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Partial<Cluster> | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSave = async () => {
    if (!editing?.name || !editing?.slug) return
    setSaving(true)
    setError(null)
    try {
      if (editing.id) await updateTopicCluster(editing.id, editing)
      else await createTopicCluster(editing)
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
        <Button onClick={() => { setEditing({}); setOpen(true) }}>Add Topic Cluster</Button>
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Primary Keyword</TableHead><TableHead>Description</TableHead></TableRow></TableHeader>
          <TableBody>
            {initial.length === 0 ? (
              <TableRow><TableCell colSpan={3} className="py-8 text-center text-gray-400">No topic clusters yet.</TableCell></TableRow>
            ) : (
              initial.map((c) => (
                <TableRow key={c.id} className="cursor-pointer" onClick={() => { setEditing(c); setOpen(true) }}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell className="text-gray-400">{c.primaryKeyword ?? "—"}</TableCell>
                  <TableCell className="max-w-96 truncate">{c.description ?? "—"}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editing?.id ? "Edit Topic Cluster" : "Add Topic Cluster"}</DialogTitle></DialogHeader>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {editing && (
            <div className="space-y-3">
              <div className="space-y-1.5"><Label>Name</Label><Input value={editing.name ?? ""} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Slug</Label><Input value={editing.slug ?? ""} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Primary Keyword</Label><Input value={editing.primaryKeyword ?? ""} onChange={(e) => setEditing({ ...editing, primaryKeyword: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Description</Label><Textarea value={editing.description ?? ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} rows={3} /></div>
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
