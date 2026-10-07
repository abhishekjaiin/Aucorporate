import { notFound } from "next/navigation"

import { getSessionUser } from "@/lib/auth/session"
import {
  getBlogById,
  getBlogHealth,
  updateBlog,
  listAuthorsActive,
  listCategoriesAll,
  listTopicClustersAll,
} from "@/lib/actions/blogs"
import { BlogForm } from "@/components/admin/BlogForm"
import { BlogWorkflowActions } from "@/components/admin/BlogWorkflowActions"
import { SeoHealthPanel } from "@/components/admin/SeoHealthPanel"
import { StatusBadge } from "@/components/admin/StatusBadge"
import type { BlogInput } from "@/lib/validation/blog"

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const user = await getSessionUser()
  if (!user) notFound()

  const [blog, health, authors, categories, topicClusters] = await Promise.all([
    getBlogById(id),
    getBlogHealth(id),
    listAuthorsActive(),
    listCategoriesAll(),
    listTopicClustersAll(),
  ])

  if (!blog) notFound()

  const handleSave = async (data: BlogInput) => {
    "use server"
    await updateBlog(id, data)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#081a42]">{blog.title}</h1>
            <div className="mt-1 flex items-center gap-2">
              <StatusBadge status={blog.status} />
              <span className="text-xs text-gray-400">/blog/{blog.slug}</span>
            </div>
          </div>
        </div>

        <BlogWorkflowActions id={blog.id} status={blog.status} role={user.role} />

        <BlogForm
          initial={{
            id: blog.id,
            title: blog.title,
            slug: blog.slug,
            excerpt: blog.excerpt,
            content: blog.content,
            authorId: blog.authorId,
            categoryId: blog.categoryId,
            topicClusterId: blog.topicClusterId,
            serviceSlug: blog.serviceSlug,
            jurisdictionSlug: blog.jurisdictionSlug,
            industrySlug: blog.industrySlug,
            featuredImage: blog.featuredImage,
            imageAlt: blog.imageAlt,
            primaryKeyword: blog.primaryKeyword,
            metaTitle: blog.metaTitle,
            metaDescription: blog.metaDescription,
            canonicalUrl: blog.canonicalUrl,
          }}
          authors={authors}
          categories={categories}
          topicClusters={topicClusters}
          onSave={handleSave}
        />
      </div>

      <div className="space-y-4">{health && <SeoHealthPanel report={health} />}</div>
    </div>
  )
}
