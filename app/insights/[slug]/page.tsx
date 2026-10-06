import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { Breadcrumb } from "@/components/Breadcrumb"
import { RelatedResources } from "@/components/RelatedResources"
import { getPublishedInsightBySlug } from "@/lib/public/insights"
import { renderInsightContent } from "@/lib/tiptap/renderToHtml"

// This site's root app/loading.tsx wraps every route in an automatic
// Suspense boundary, so Next streams a shell with a 200 status before a
// notFound() call deep in the page body ever resolves — confirmed live:
// an unknown/unpublished slug returned HTTP 200 with the not-found page's
// content. generateMetadata() runs before that shell is flushed, so
// calling notFound() there (not just in the page body) is what actually
// produces a correct 404 status — this is the documented fix for exactly
// this class of issue, not a bug worked around by dynamic export flags.
export const dynamic = "force-dynamic"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublishedInsightBySlug(slug)
  if (!post) notFound()

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt || undefined
  const canonical = post.canonicalUrl || `https://www.theaucorp.com/insights/${post.slug}`

  return {
    title: {
      absolute: `${title} | AU Corporate`,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
    twitter: {
      title,
      description,
    },
  }
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await getPublishedInsightBySlug(slug)

  // Unpublished/approved-but-unpublished/draft/internal-review content and
  // any unknown slug both resolve to a plain 404 here — the query itself
  // only ever returns PUBLISHED rows, so there's no separate "exists but
  // hidden" branch to accidentally leak.
  if (!post) notFound()

  const canonical = post.canonicalUrl || `https://www.theaucorp.com/insights/${post.slug}`
  const html = renderInsightContent(post.content as never)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.featuredImage || undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    author: {
      "@type": post.authorName ? "Person" : "Organization",
      name: post.authorName || "AU Corporate",
      url: "https://www.theaucorp.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AU Corporate",
      logo: {
        "@type": "ImageObject",
        url: "https://www.theaucorp.com/logo.png",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: post.title }]} />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {post.categoryName && (
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold w-fit mb-4 bg-blue-50 text-blue-700">
            {post.categoryName}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue">{post.title}</h1>

        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
          <span>{post.authorName || "AU Corporate"}</span>
          {post.publishedAt && (
            <>
              <span>&middot;</span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </>
          )}
        </div>

        {post.featuredImage && (
          <div className="relative mb-10 h-64 sm:h-96 w-full overflow-hidden rounded-xl">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Rendered from a stored Tiptap JSON document via generateHTML — a
            constrained node/mark schema, not arbitrary admin HTML, so this
            is not an unsanitized-raw-HTML injection surface. */}
        <div
          className="prose-insight [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-blue [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-blue [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-gold-dark [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-200 [&_blockquote]:pl-4 [&_blockquote]:italic [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:p-2 [&_th]:border [&_th]:p-2 [&_th]:bg-gray-50"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {post.related.length > 0 && (
          <RelatedResources
            links={post.related.map((r) => ({
              label: r.title,
              href: `/insights/${r.slug}`,
              description: r.excerpt || "",
            }))}
          />
        )}

        <p className="mt-10 text-sm">
          <Link href="/insights" className="text-gold-dark font-semibold hover:underline">
            &larr; Back to Insights
          </Link>
        </p>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  )
}
