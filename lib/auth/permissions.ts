export type Role = "ADMIN" | "EDITOR" | "AUTHOR"

/**
 * Centralized permission matrix for the Blog workflow. Every mutating
 * server action checks against this — never the UI alone — since role
 * checks must hold even if someone calls the action directly.
 *
 * DRAFT -> INTERNAL_REVIEW: any signed-in role (submit own work for review)
 * INTERNAL_REVIEW -> APPROVED: EDITOR or ADMIN (a second pair of eyes)
 * APPROVED -> PUBLISHED: ADMIN only (the one real "make it public" gate)
 * PUBLISHED -> NEEDS_REFRESH: EDITOR or ADMIN
 * Delete: ADMIN only
 * Edit someone else's blog post: EDITOR or ADMIN (AUTHOR edits only their own)
 */
export const permissions = {
  canSubmitForReview: (role: Role) => role === "ADMIN" || role === "EDITOR" || role === "AUTHOR",
  canApprove: (role: Role) => role === "ADMIN" || role === "EDITOR",
  canPublish: (role: Role) => role === "ADMIN",
  canUnpublish: (role: Role) => role === "ADMIN",
  canMarkNeedsRefresh: (role: Role) => role === "ADMIN" || role === "EDITOR",
  canDelete: (role: Role) => role === "ADMIN",
  canEditOthersContent: (role: Role) => role === "ADMIN" || role === "EDITOR",
  canManageTaxonomy: (role: Role) => role === "ADMIN" || role === "EDITOR", // categories/authors/keywords/clusters
  canManageUsers: (role: Role) => role === "ADMIN",
}

export class PermissionError extends Error {
  constructor(message = "You do not have permission to perform this action.") {
    super(message)
    this.name = "PermissionError"
  }
}
