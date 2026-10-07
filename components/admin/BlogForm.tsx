"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { JSONContent } from "@tiptap/core"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { TiptapEditor } from "@/components/admin/TiptapEditor"
import type { BlogInput } from "@/lib/validation/blog"

type Option = { id: string; name: string }

export function BlogForm({
  initial,
  authors,
  categories,
  topicClusters,
  onSave,
}: {
  initial?: Partial<BlogInput> & { id?: string }
  authors: Option[]
  categories: Option[]
  topicClusters: Option[]
  onSave: (data: BlogInput) => Promise<{ id: string } | void>
}) {
  const router = useRouter()
  const [title, setTitle] = useState(initial?.title ?? "")
  const [slug, setSlug] = useState(initial?.slug ?? "")
  const [slugTouched, setSlugTouched] = useState(Boolean(initial?.slug))
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "")
  const [content, setContent] = useState<JSONContent | null>((initial?.content as JSONContent) ?? null)
  const [authorId, setAuthorId] = useState(initial?.authorId ?? "")
  const [categoryId, setCategoryId] = useState(initial?.categoryId ?? "")
  const [topicClusterId, setTopicClusterId] = useState(initial?.topicClusterId ?? "")
  const [serviceSlug, setServiceSlug] = useState(initial?.serviceSlug ?? "")
  const [jurisdictionSlug, setJurisdictionSlug] = useState(initial?.jurisdictionSlug ?? "")
  const [industrySlug, setIndustrySlug] = useState(initial?.industrySlug ?? "")
  const [featuredImage, setFeaturedImage] = useState(initial?.featuredImage ?? "")
  const [imageAlt, setImageAlt] = useState(initial?.imageAlt ?? "")
  const [primaryKeyword, setPrimaryKeyword] = useState(initial?.primaryKeyword ?? "")
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle ?? "")
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription ?? "")
  const [canonicalUrl, setCanonicalUrl] = useState(initial?.canonicalUrl ?? "")
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const slugify = (s: string) =>
    s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")

  const handleTitleChange = (value: string) => {
    setTitle(value)
    if (!slugTouched) setSlug(slugify(value))
  }

  const handleSubmit = async () => {
    setSaving(true)
    setError(null)
    try {
      const result = await onSave({
        title,
        slug,
        excerpt: excerpt || null,
        content,
        authorId: authorId || null,
        categoryId: categoryId || null,
        topicClusterId: topicClusterId || null,
        serviceSlug: serviceSlug || null,
        jurisdictionSlug: jurisdictionSlug || null,
        industrySlug: industrySlug || null,
        featuredImage: featuredImage || null,
        imageAlt: imageAlt || null,
        primaryKeyword: primaryKeyword || null,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        canonicalUrl: canonicalUrl || null,
      })
      if (result?.id && !initial?.id) {
        router.push(`/admin/blog/${result.id}`)
      } else {
        router.refresh()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={title} onChange={(e) => handleTitleChange(e.target.value)} />
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value)
              setSlugTouched(true)
            }}
          />
          <p className="text-xs text-gray-400">Public URL: /blog/{slug || "…"}</p>
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Article Body</Label>
        <TiptapEditor value={content} onChange={setContent} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <Label>Author</Label>
          <Select value={authorId} onValueChange={setAuthorId}>
            <SelectTrigger><SelectValue placeholder="Select author" /></SelectTrigger>
            <SelectContent>
              {authors.map((a) => <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>Category</Label>
          <Select value={categoryId} onValueChange={setCategoryId}>
            <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
            <SelectContent>
              {categories.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>Topic Cluster</Label>
          <Select value={topicClusterId} onValueChange={setTopicClusterId}>
            <SelectTrigger><SelectValue placeholder="Select cluster" /></SelectTrigger>
            <SelectContent>
              {topicClusters.map((t) => <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <Label htmlFor="serviceSlug">Service (slug, optional)</Label>
          <Input id="serviceSlug" value={serviceSlug} onChange={(e) => setServiceSlug(e.target.value)} placeholder="e.g. taxation-regulatory" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="jurisdictionSlug">Jurisdiction (slug, optional)</Label>
          <Input id="jurisdictionSlug" value={jurisdictionSlug} onChange={(e) => setJurisdictionSlug(e.target.value)} placeholder="e.g. usa" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="industrySlug">Industry (slug, optional)</Label>
          <Input id="industrySlug" value={industrySlug} onChange={(e) => setIndustrySlug(e.target.value)} placeholder="e.g. saas" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="featuredImage">Featured Image URL</Label>
          <Input id="featuredImage" value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="imageAlt">Image Alt Text</Label>
          <Input id="imageAlt" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
        </div>
      </div>

      <div className="rounded-lg border bg-gray-50 p-4 space-y-4">
        <p className="text-sm font-semibold text-[#081a42]">SEO Fields</p>
        <div className="space-y-1.5">
          <Label htmlFor="primaryKeyword">Primary Keyword</Label>
          <Input id="primaryKeyword" value={primaryKeyword} onChange={(e) => setPrimaryKeyword(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="metaTitle">Meta Title</Label>
          <Input id="metaTitle" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} maxLength={70} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="metaDescription">Meta Description</Label>
          <Textarea id="metaDescription" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={2} maxLength={160} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="canonicalUrl">Canonical URL (leave blank to auto-use /blog/{slug || "…"})</Label>
          <Input id="canonicalUrl" value={canonicalUrl} onChange={(e) => setCanonicalUrl(e.target.value)} />
        </div>
      </div>

      <Button onClick={handleSubmit} disabled={saving || !title || !slug}>
        {saving ? "Saving…" : initial?.id ? "Save Changes" : "Save Draft"}
      </Button>
    </div>
  )
}
