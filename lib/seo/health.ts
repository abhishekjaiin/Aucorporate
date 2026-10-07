/**
 * Deterministic, rule-based "Content SEO Health" score.
 *
 * IMPORTANT: this is NOT a Google ranking prediction and must never be
 * presented as one anywhere in the admin UI — label it "Content SEO
 * Health" everywhere it's shown. Every check below is a plain boolean
 * computed from data already on the record; nothing here is AI-judged or
 * fuzzy. Modular by design: add a new entry to CHECKS and it's picked up
 * by scoreInsight() automatically.
 */

import type { JSONContent } from "@tiptap/core"

export const MIN_CONTENT_WORDS = 300
export const MIN_INTERNAL_LINKS = 1

export type HealthCheckInput = {
  title: string | null
  metaTitle: string | null
  metaDescription: string | null
  primaryKeyword: string | null
  canonicalUrl: string | null
  slug: string | null
  featuredImage: string | null
  imageAlt: string | null
  authorId: string | null
  categoryId: string | null
  topicClusterId: string | null
  content: JSONContent | null
  status: string
  publishedAt: Date | null
  isDuplicateSlug: boolean
}

export type HealthCheckResult = {
  id: string
  label: string
  passed: boolean
  severity: "fail" | "warning"
}

export type SeoHealthReport = {
  score: number // 0-100
  passed: HealthCheckResult[]
  failed: HealthCheckResult[]
  warnings: HealthCheckResult[]
}

function extractText(node: JSONContent | null | undefined): string {
  if (!node) return ""
  let text = node.text ?? ""
  if (node.content) {
    for (const child of node.content) {
      text += " " + extractText(child)
    }
  }
  return text
}

function countWords(content: JSONContent | null): number {
  const text = extractText(content).trim()
  if (!text) return 0
  return text.split(/\s+/).filter(Boolean).length
}

function countLinks(content: JSONContent | null, kind: "internal" | "external"): number {
  if (!content) return 0
  let count = 0
  const walk = (node: JSONContent) => {
    const marks = node.marks ?? []
    for (const mark of marks) {
      if (mark.type === "link") {
        const href = (mark.attrs?.href as string | undefined) ?? ""
        const isInternal = href.startsWith("/") || href.includes("theaucorp.com")
        if ((kind === "internal" && isInternal) || (kind === "external" && !isInternal && href.length > 0)) {
          count++
        }
      }
    }
    node.content?.forEach(walk)
  }
  walk(content)
  return count
}

export function scoreInsight(input: HealthCheckInput): SeoHealthReport {
  const wordCount = countWords(input.content)
  const internalLinks = countLinks(input.content, "internal")
  const externalLinks = countLinks(input.content, "external")

  const checks: HealthCheckResult[] = [
    { id: "title", label: "Title exists", passed: Boolean(input.title?.trim()), severity: "fail" },
    { id: "slug_valid", label: "Slug is valid", passed: Boolean(input.slug && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(input.slug)), severity: "fail" },
    { id: "slug_unique", label: "No duplicate slug", passed: !input.isDuplicateSlug, severity: "fail" },
    { id: "meta_title", label: "Meta title exists", passed: Boolean(input.metaTitle?.trim()), severity: "fail" },
    { id: "meta_description", label: "Meta description exists", passed: Boolean(input.metaDescription?.trim()), severity: "fail" },
    // The public template renders `title` as the page's <h1> — there is no
    // separate H1 field to check, so this verifies the thing that actually
    // becomes the H1 rather than duplicating the title check pointlessly.
    { id: "h1", label: "H1 exists (from title)", passed: Boolean(input.title?.trim()), severity: "fail" },
    { id: "primary_keyword", label: "Primary keyword exists", passed: Boolean(input.primaryKeyword?.trim()), severity: "fail" },
    { id: "content_length", label: `Content length meets minimum (${MIN_CONTENT_WORDS} words)`, passed: wordCount >= MIN_CONTENT_WORDS, severity: "fail" },
    { id: "canonical", label: "Canonical URL set or derivable from slug", passed: Boolean(input.canonicalUrl?.trim() || input.slug), severity: "fail" },
    { id: "author", label: "Author exists", passed: Boolean(input.authorId), severity: "fail" },
    { id: "category", label: "Category exists", passed: Boolean(input.categoryId), severity: "fail" },
    { id: "topic_cluster", label: "Topic cluster exists", passed: Boolean(input.topicClusterId), severity: "fail" },
    { id: "internal_links", label: `Internal links meet minimum (${MIN_INTERNAL_LINKS})`, passed: internalLinks >= MIN_INTERNAL_LINKS, severity: "fail" },
    {
      id: "published_date",
      label: "Published date exists for published content",
      passed: input.status !== "PUBLISHED" || Boolean(input.publishedAt),
      severity: "fail",
    },
    // Warnings — real gaps worth surfacing, but not disqualifying.
    { id: "image_alt", label: "Featured image has alt text", passed: !input.featuredImage || Boolean(input.imageAlt?.trim()), severity: "warning" },
    { id: "external_links", label: "Has at least one external/source link", passed: externalLinks >= 1, severity: "warning" },
    { id: "canonical_explicit", label: "Canonical URL explicitly set (not auto-derived)", passed: Boolean(input.canonicalUrl?.trim()), severity: "warning" },
  ]

  const scored = checks.filter((c) => c.severity === "fail")
  const passed = checks.filter((c) => c.passed)
  const failed = checks.filter((c) => !c.passed && c.severity === "fail")
  const warnings = checks.filter((c) => !c.passed && c.severity === "warning")

  const passedScored = scored.filter((c) => c.passed).length
  const score = scored.length === 0 ? 0 : Math.round((passedScored / scored.length) * 100)

  return { score, passed, failed, warnings }
}
