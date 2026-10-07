import { getPublishedBlogs } from "@/lib/public/blogs"
import BlogIndexClient, { type CmsBlogCard } from "./BlogIndexClient"

const CATEGORY_MAP: Record<string, CmsBlogCard["category"]> = {
  "India Market Entry": "India Entry",
  "Company Incorporation": "India Entry",
  "Business Structuring": "India Entry",
  "FDI & FEMA": "FDI & Investment",
  "International Tax": "Taxation",
  "GST & Tax Compliance": "Taxation",
  "Accounting & Bookkeeping": "Taxation",
  "Payroll & HR": "India Entry",
  "Transfer Pricing": "Taxation",
  "Corporate Compliance": "India Entry",
  "Doing Business in India": "India Entry",
}

function formatDate(date: Date | string | null): string {
  if (!date) return ""
  return new Date(date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
}

export default async function BlogPage() {
  let cmsBlogs: CmsBlogCard[] = []
  try {
    const published = await getPublishedBlogs()
    cmsBlogs = published.map((post) => ({
      title: post.title,
      desc: post.excerpt || "",
      slug: post.slug,
      category: CATEGORY_MAP[post.categoryName || ""] || "India Entry",
      date: formatDate(post.publishedAt),
    }))
  } catch (error) {
    console.error("[blog] failed to load published Blog posts:", error)
  }

  return <BlogIndexClient cmsBlogs={cmsBlogs} />
}
