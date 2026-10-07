import type { JSONContent } from "@tiptap/core"

/**
 * Table-of-contents extraction and heading-id injection for rendered
 * Blog articles. Operates on the stored Tiptap JSON (headings are always
 * top-level nodes in a ProseMirror doc, never nested inside another block),
 * so no DOM parser is needed — this is pure data walking plus one
 * string-level pass over the already-rendered HTML to attach matching ids.
 */

export type TocItem = { id: string; text: string; level: 2 | 3 }

function textOf(node: JSONContent): string {
  if (!node) return ""
  let text = node.text ?? ""
  if (node.content) {
    for (const child of node.content) text += (text ? " " : "") + textOf(child)
  }
  return text.trim()
}

function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-") || "section"
  )
}

export function extractToc(content: JSONContent | null | undefined): TocItem[] {
  if (!content?.content) return []
  const seen = new Map<string, number>()
  const toc: TocItem[] = []

  for (const node of content.content) {
    if (node.type !== "heading") continue
    const level = node.attrs?.level
    if (level !== 2 && level !== 3) continue
    const text = textOf(node)
    if (!text) continue

    const base = slugify(text)
    const count = seen.get(base) ?? 0
    seen.set(base, count + 1)
    const id = count === 0 ? base : `${base}-${count + 1}`
    toc.push({ id, text, level })
  }

  return toc
}

/**
 * generateHTML() preserves the JSON content's node order exactly, so the
 * Nth <h2>/<h3> tag in the rendered HTML always corresponds to the Nth
 * heading entry extracted from that same JSON by extractToc() above —
 * matching by position, not by re-parsing the HTML.
 */
export function injectHeadingIds(html: string, toc: TocItem[]): string {
  let i = 0
  return html.replace(/<(h2|h3)([^>]*)>/g, (match, tag: string, attrs: string) => {
    const item = toc[i]
    i++
    if (!item) return match
    return `<${tag} id="${item.id}"${attrs}>`
  })
}

/** Average adult silent reading speed; rounded up to the nearest minute. */
const WORDS_PER_MINUTE = 200

function countWords(node: JSONContent | null | undefined): number {
  const text = textOf(node as JSONContent)
  if (!text) return 0
  return text.split(/\s+/).filter(Boolean).length
}

export function estimateReadingTime(content: JSONContent | null | undefined): number {
  if (!content) return 0
  const words = countWords(content)
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}
