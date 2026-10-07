import type { JSONContent } from "@tiptap/core"

/**
 * Detects an author-written "Frequently Asked Questions" section inside the
 * stored Tiptap content and lifts it out as structured {q, a} pairs, so the
 * public template can render it once via the existing FaqAccordion
 * component (and emit FAQPage JSON-LD) instead of showing it twice — once
 * as plain article prose and again as a duplicate accordion.
 *
 * This is a content convention, not a schema field: authors write a
 * level-2 "Frequently Asked Questions" heading with level-3 question
 * headings underneath it, each followed by its answer paragraph(s). No
 * database change is required, and articles that don't follow the
 * convention simply render with no FAQ section at all.
 */

export type FaqPair = { q: string; a: string }

function textOf(node: JSONContent): string {
  if (!node) return ""
  let text = node.text ?? ""
  if (node.content) {
    for (const child of node.content) text += (text ? " " : "") + textOf(child)
  }
  return text.trim()
}

const FAQ_HEADING_RE = /^(frequently asked questions|faqs?)\b/i

export function extractFaqSection(
  doc: JSONContent | null | undefined
): { content: JSONContent | null | undefined; faqs: FaqPair[] } {
  if (!doc?.content) return { content: doc, faqs: [] }

  const nodes = doc.content
  const faqHeadingIdx = nodes.findIndex(
    (n) => n.type === "heading" && n.attrs?.level === 2 && FAQ_HEADING_RE.test(textOf(n))
  )
  if (faqHeadingIdx === -1) return { content: doc, faqs: [] }

  // The FAQ section runs until the next heading of level <= 2, or the end
  // of the document.
  let end = nodes.length
  for (let i = faqHeadingIdx + 1; i < nodes.length; i++) {
    const n = nodes[i]
    const level = n.type === "heading" ? (n.attrs?.level as number | undefined) ?? 2 : undefined
    if (level !== undefined && level <= 2) {
      end = i
      break
    }
  }

  const faqNodes = nodes.slice(faqHeadingIdx + 1, end)
  const faqs: FaqPair[] = []
  let currentQ: string | null = null
  let currentA: string[] = []

  for (const node of faqNodes) {
    if (node.type === "heading" && node.attrs?.level === 3) {
      if (currentQ) faqs.push({ q: currentQ, a: currentA.join(" ").trim() })
      currentQ = textOf(node)
      currentA = []
    } else if (currentQ) {
      const text = textOf(node)
      if (text) currentA.push(text)
    }
  }
  if (currentQ) faqs.push({ q: currentQ, a: currentA.join(" ").trim() })

  const remaining = [...nodes.slice(0, faqHeadingIdx), ...nodes.slice(end)]
  return {
    content: { ...doc, content: remaining },
    faqs: faqs.filter((f) => f.q && f.a),
  }
}
