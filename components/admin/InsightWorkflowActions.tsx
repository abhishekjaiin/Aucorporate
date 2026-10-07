"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import {
  submitForReview,
  approveInsight,
  publishInsight,
  unpublishInsight,
  markNeedsRefresh,
  deleteInsight,
} from "@/lib/actions/insights"
import type { Role } from "@/lib/auth/permissions"
import { permissions } from "@/lib/auth/permissions"

export function InsightWorkflowActions({ id, status, role }: { id: string; status: string; role: Role }) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [deleteOpen, setDeleteOpen] = useState(false)

  const run = async (fn: () => Promise<unknown>) => {
    setBusy(true)
    setError(null)
    try {
      await fn()
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Action failed.")
    } finally {
      setBusy(false)
    }
  }

  const handleDelete = async () => {
    setBusy(true)
    try {
      await deleteInsight(id, true)
      router.push("/admin/insights")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed.")
      setBusy(false)
    }
  }

  return (
    <div className="space-y-3">
      {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

      <div className="flex flex-wrap gap-2">
        {status === "DRAFT" && permissions.canSubmitForReview(role) && (
          <Button variant="secondary" disabled={busy} onClick={() => run(() => submitForReview(id))}>
            Submit for Internal Review
          </Button>
        )}

        {status === "INTERNAL_REVIEW" && permissions.canApprove(role) && (
          <Button variant="secondary" disabled={busy} onClick={() => run(() => approveInsight(id))}>
            Approve
          </Button>
        )}

        {status === "APPROVED" && permissions.canPublish(role) && (
          <Button disabled={busy} onClick={() => run(() => publishInsight(id))}>
            Publish
          </Button>
        )}

        {status === "PUBLISHED" && permissions.canUnpublish(role) && (
          <Button variant="outline" disabled={busy} onClick={() => run(() => unpublishInsight(id))}>
            Unpublish
          </Button>
        )}

        {(status === "PUBLISHED" || status === "NEEDS_REFRESH") && permissions.canMarkNeedsRefresh(role) && (
          <Button
            variant="outline"
            disabled={busy}
            onClick={() => run(() => markNeedsRefresh(id, status !== "NEEDS_REFRESH"))}
          >
            {status === "NEEDS_REFRESH" ? "Clear Needs Refresh" : "Mark Needs Refresh"}
          </Button>
        )}

        {permissions.canDelete(role) && (
          <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
            <Button variant="destructive" disabled={busy} onClick={() => setDeleteOpen(true)}>
              Delete
            </Button>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete this blog post?</DialogTitle>
                <DialogDescription>
                  {status === "PUBLISHED"
                    ? "This blog post is currently published — deleting it will immediately remove its public page. This cannot be undone."
                    : "This cannot be undone."}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive" disabled={busy} onClick={handleDelete}>
                  {busy ? "Deleting…" : "Delete permanently"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}
