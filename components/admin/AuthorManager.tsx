"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { createAuthor, updateAuthor } from "@/lib/actions/taxonomy"

type Author = {
  id: string
  name: string
  slug: string
  bio: string | null
  designation: string | null
  email: string | null
  isActive: boolean
}

function AuthorFormFields({ author, onChange }: { author: Partial<Author>; onChange: (a: Partial<Author>) => void }) {
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Label>Name</Label>
        <Input value={author.name ?? ""} onChange={(e) => onChange({ ...author, name: e.target.value })} />
      </div>
      <div className="space-y-1.5">
        <Label>Slug</Label>
        <Input value={author.slug ?? ""} onChange={(e) => onChange({ ...author, slug: e.target.value })} />
      </div>
      <div className="space-y-1.5">
        <Label>Designation</Label>
        <Input value={author.designation ?? ""} onChange={(e) => onChange({ ...author, designation: e.target.value })} />
      </div>
      <div className="space-y-1.5">
        <Label>Bio</Label>
        <Textarea value={author.bio ?? ""} onChange={(e) => onChange({ ...author, bio: e.target.value })} rows={3} />
      </div>
      <div className="space-y-1.5">
        <Label>Email (optional)</Label>
        <Input value={author.email ?? ""} onChange={(e) => onChange({ ...author, email: e.target.value })} />
      </div>
    </div>
  )
}

export function AuthorManager({ initialAuthors }: { initialAuthors: Author[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Partial<Author> | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const openNew = () => {
    setEditing({ isActive: true })
    setOpen(true)
  }

  const openEdit = (author: Author) => {
    setEditing(author)
    setOpen(true)
  }

  const handleSave = async () => {
    if (!editing?.name || !editing?.slug) return
    setSaving(true)
    setError(null)
    try {
      if (editing.id) {
        await updateAuthor(editing.id, editing)
      } else {
        await createAuthor(editing)
      }
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
        <Button onClick={openNew}>Add Author</Button>
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialAuthors.length === 0 ? (
              <TableRow><TableCell colSpan={3} className="py-8 text-center text-gray-400">No authors yet.</TableCell></TableRow>
            ) : (
              initialAuthors.map((a) => (
                <TableRow key={a.id} className="cursor-pointer" onClick={() => openEdit(a)}>
                  <TableCell className="font-medium">{a.name}</TableCell>
                  <TableCell>{a.designation ?? "—"}</TableCell>
                  <TableCell><Badge variant={a.isActive ? "success" : "secondary"}>{a.isActive ? "Active" : "Inactive"}</Badge></TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editing?.id ? "Edit Author" : "Add Author"}</DialogTitle></DialogHeader>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {editing && <AuthorFormFields author={editing} onChange={setEditing} />}
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button onClick={handleSave} disabled={saving}>{saving ? "Saving…" : "Save"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
