import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

import * as schema from "./schema"

declare global {
  // eslint-disable-next-line no-var
  var __auCorpPgPool: Pool | undefined
}

// Reused across hot-reloads in dev and across warm serverless invocations —
// a fresh Pool per request would exhaust Postgres connection limits fast.
const pool =
  globalThis.__auCorpPgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5,
  })

if (process.env.NODE_ENV !== "production") {
  globalThis.__auCorpPgPool = pool
}

export const db = drizzle(pool, { schema })
