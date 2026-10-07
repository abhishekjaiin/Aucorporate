/**
 * Creates the first ADMIN user for the AU Corporate dashboard.
 *
 * Usage:
 *   npx tsx scripts/create-admin-user.ts "Full Name" "email@theaucorp.com" "password"
 *
 * Safe to re-run: if the email already exists, it reports that and exits
 * without modifying anything, rather than silently overwriting a password.
 */
import bcrypt from "bcryptjs"
import { eq } from "drizzle-orm"

import { db } from "../lib/db/client"
import { users } from "../lib/db/schema"

async function main() {
  const [name, email, password] = process.argv.slice(2)

  if (!name || !email || !password) {
    console.error('Usage: npx tsx scripts/create-admin-user.ts "Full Name" "email@theaucorp.com" "password"')
    process.exit(1)
  }
  if (password.length < 8) {
    console.error("Password must be at least 8 characters.")
    process.exit(1)
  }

  const normalizedEmail = email.toLowerCase()
  const [existing] = await db.select().from(users).where(eq(users.email, normalizedEmail)).limit(1)
  if (existing) {
    console.log(`A user with email ${normalizedEmail} already exists (role: ${existing.role}). Nothing changed.`)
    process.exit(0)
  }

  const passwordHash = await bcrypt.hash(password, 12)

  const [created] = await db
    .insert(users)
    .values({ name, email: normalizedEmail, passwordHash, role: "ADMIN" })
    .returning({ id: users.id, email: users.email, role: users.role })

  console.log("Created admin user:", created)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
