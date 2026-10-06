import { auth } from "@/lib/auth"
import type { Role } from "@/lib/auth/permissions"

export type SessionUser = {
  id: string
  name: string | null
  email: string | null
  role: Role
}

/**
 * Typed wrapper around auth(). next-auth v5 beta's Session/User interfaces
 * live in "@auth/core/types", a transitive dependency pnpm does not hoist
 * in a way that lets our own ambient module augmentation merge into it —
 * so rather than fighting that resolution gap, every role check in this
 * codebase goes through this one explicitly-typed accessor instead.
 */
export async function getSessionUser(): Promise<SessionUser | null> {
  const session = await auth()
  if (!session?.user) return null
  const user = session.user as unknown as SessionUser
  return { id: user.id, name: user.name ?? null, email: user.email ?? null, role: user.role }
}
