import { Badge } from "@/components/ui/badge"

const statusStyles: Record<string, "secondary" | "default" | "success" | "warning" | "destructive"> = {
  DRAFT: "secondary",
  INTERNAL_REVIEW: "warning",
  APPROVED: "default",
  PUBLISHED: "success",
  NEEDS_REFRESH: "destructive",
}

const statusLabels: Record<string, string> = {
  DRAFT: "Draft",
  INTERNAL_REVIEW: "Internal Review",
  APPROVED: "Approved",
  PUBLISHED: "Published",
  NEEDS_REFRESH: "Needs Refresh",
}

export function StatusBadge({ status }: { status: string }) {
  return <Badge variant={statusStyles[status] ?? "secondary"}>{statusLabels[status] ?? status}</Badge>
}
