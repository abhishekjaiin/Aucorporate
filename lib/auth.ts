import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { eq } from "drizzle-orm"

import { db } from "@/lib/db/client"
import { users } from "@/lib/db/schema"

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Vercel auto-sets this (via its own VERCEL env var detection); explicit
  // here so auth also works correctly behind any other reverse proxy /
  // non-Vercel host, as long as AUTH_URL/NEXTAUTH_URL is itself correct.
  trustHost: true,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email
        const password = credentials?.password
        if (typeof email !== "string" || typeof password !== "string") return null

        const [user] = await db.select().from(users).where(eq(users.email, email.toLowerCase())).limit(1)
        if (!user) return null

        const valid = await bcrypt.compare(password, user.passwordHash)
        if (!valid) return null

        return { id: user.id, name: user.name, email: user.email, role: user.role }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.role = (user as { role: string }).role
        token.id = (user as { id: string }).id
      }
      return token
    },
    session: ({ session, token }) => {
      // Same type-augmentation gap noted in lib/auth/session.ts — cast
      // directly here rather than relying on ambient merging into
      // "@auth/core/types" that pnpm's isolation prevents from resolving
      // identically in every file.
      if (session.user) {
        const user = session.user as unknown as { role: string; id: string }
        user.role = token.role as string
        user.id = token.id as string
      }
      return session
    },
  },
})
