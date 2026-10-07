/**
 * Safe, idempotent, repeatable import of
 * content-ops/keyword-database/topics.csv into the topic_clusters and
 * keywords tables.
 *
 * This NEVER modifies, rewrites, or deletes the CSV file — it only reads
 * it. By default it runs in DRY-RUN mode and prints exactly what it would
 * do; pass --apply to actually write.
 *
 * Usage:
 *   npx tsx scripts/import-topics-csv.ts                # dry run (default)
 *   npx tsx scripts/import-topics-csv.ts --apply         # actually import
 *
 * What it imports:
 *   - One topic_clusters row per CSV row (name = topic, slug = topic_slug,
 *     primaryKeyword = primary_keyword, description = owner_notes).
 *   - One keywords row per CSV row (keyword = primary_keyword, slug =
 *     slugified primary_keyword, linked to the topic cluster above, notes
 *     = cannibalization_notes).
 *   - Does NOT create or touch any `insights` rows — the CSV's target_url
 *     column refers to existing hand-coded .tsx pages, not Insight
 *     records, and importing those as Insights would misrepresent them.
 *
 * Duplicate avoidance: skips any row whose topic_clusters.slug or
 * keywords.slug already exists in the database, and reports every skip.
 */
import { readFileSync } from "fs"
import { join } from "path"
import { eq } from "drizzle-orm"

import { db } from "../lib/db/client"
import { topicClusters, keywords } from "../lib/db/schema"

const CSV_PATH = join(process.cwd(), "content-ops/keyword-database/topics.csv")

function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ""
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        field += char
      }
    } else if (char === '"') {
      inQuotes = true
    } else if (char === ",") {
      row.push(field)
      field = ""
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i++
      row.push(field)
      rows.push(row)
      row = []
      field = ""
    } else {
      field += char
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }
  return rows.filter((r) => r.some((c) => c.trim().length > 0))
}

function slugify(s: string): string {
  return s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
}

async function main() {
  const apply = process.argv.includes("--apply")

  const raw = readFileSync(CSV_PATH, "utf-8")
  const rows = parseCsv(raw)
  const [header, ...dataRows] = rows
  const col = (name: string) => header.indexOf(name)

  const idx = {
    topic: col("topic"),
    topic_slug: col("topic_slug"),
    primary_keyword: col("primary_keyword"),
    cannibalization_notes: col("cannibalization_notes"),
    owner_notes: col("owner_notes"),
  }

  const results = { clustersCreated: 0, clustersSkipped: 0, keywordsCreated: 0, keywordsSkipped: 0, malformedSkipped: 0 }
  const log: string[] = []

  for (const [rowIndex, r] of dataRows.entries()) {
    // Guard against a row whose unquoted field happens to contain a comma
    // (genuinely present in this CSV — e.g. a topic name with a comma in
    // it but no surrounding quotes), which would otherwise silently shift
    // every later column and import wrong data under the wrong slug. Skip
    // and report rather than guess which columns are "really" which.
    if (r.length !== header.length) {
      results.malformedSkipped++
      log.push(`SKIP malformed row ${rowIndex + 2} (expected ${header.length} columns, got ${r.length}): ${r[0]?.slice(0, 60)}`)
      continue
    }

    const topicName = r[idx.topic]?.trim()
    const topicSlug = r[idx.topic_slug]?.trim()
    const primaryKeyword = r[idx.primary_keyword]?.trim()
    if (!topicName || !topicSlug) continue

    // --- topic cluster ---
    const [existingCluster] = await db.select().from(topicClusters).where(eq(topicClusters.slug, topicSlug)).limit(1)
    let clusterId: string
    if (existingCluster) {
      results.clustersSkipped++
      log.push(`SKIP cluster (duplicate slug): ${topicSlug}`)
      clusterId = existingCluster.id
    } else {
      if (apply) {
        const [created] = await db
          .insert(topicClusters)
          .values({
            name: topicName,
            slug: topicSlug,
            primaryKeyword: primaryKeyword || null,
            description: r[idx.owner_notes]?.trim().slice(0, 1000) || null,
          })
          .returning()
        clusterId = created.id
      } else {
        clusterId = "(dry-run, not created)"
      }
      results.clustersCreated++
      log.push(`${apply ? "CREATED" : "WOULD CREATE"} cluster: ${topicSlug}`)
    }

    // --- keyword ---
    if (!primaryKeyword) continue
    const keywordSlug = slugify(primaryKeyword)
    const [existingKeyword] = await db.select().from(keywords).where(eq(keywords.slug, keywordSlug)).limit(1)
    if (existingKeyword) {
      results.keywordsSkipped++
      log.push(`SKIP keyword (duplicate slug): ${keywordSlug}`)
      continue
    }

    if (apply && clusterId !== "(dry-run, not created)") {
      await db.insert(keywords).values({
        keyword: primaryKeyword,
        slug: keywordSlug,
        topicClusterId: clusterId,
        notes: r[idx.cannibalization_notes]?.trim().slice(0, 1000) || null,
      })
    }
    results.keywordsCreated++
    log.push(`${apply ? "CREATED" : "WOULD CREATE"} keyword: ${keywordSlug}`)
  }

  console.log(log.join("\n"))
  console.log("\n--- Summary ---")
  console.log(`Mode: ${apply ? "APPLY (written to database)" : "DRY RUN (nothing written — pass --apply to import)"}`)
  console.log(`Topic clusters: ${results.clustersCreated} ${apply ? "created" : "would be created"}, ${results.clustersSkipped} skipped (duplicates)`)
  console.log(`Keywords: ${results.keywordsCreated} ${apply ? "created" : "would be created"}, ${results.keywordsSkipped} skipped (duplicates)`)
  console.log(`Malformed rows skipped (column-count mismatch — reported above, not imported): ${results.malformedSkipped}`)
  console.log(`\nSource file (never modified): ${CSV_PATH}`)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
