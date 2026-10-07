import { generateHTML } from "@tiptap/html"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import { Table } from "@tiptap/extension-table"
import TableRow from "@tiptap/extension-table-row"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import type { JSONContent } from "@tiptap/core"

/**
 * Renders a stored Tiptap JSON document to HTML for the public site.
 * Safe by construction: the document can only contain node/mark types this
 * extension list defines (the same constrained schema the admin editor
 * writes with), so there is no raw-HTML injection surface — unlike
 * `dangerouslySetInnerHTML` of arbitrary admin input, generateHTML only
 * ever emits markup for known, whitelisted node types.
 */
const extensions = [
  StarterKit.configure({ link: false }),
  Link.configure({ openOnClick: false }),
  Image,
  Table,
  TableRow,
  TableHeader,
  TableCell,
]

export function renderBlogContent(content: JSONContent | null | undefined): string {
  if (!content) return ""
  try {
    return generateHTML(content, extensions)
  } catch (err) {
    console.error("[tiptap] failed to render content:", err)
    return ""
  }
}
