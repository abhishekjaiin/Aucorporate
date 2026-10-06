import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { PortableText, type PortableTextComponents } from "@portabletext/react"

import { Breadcrumb } from "@/components/Breadcrumb"
import { RelatedResources } from "@/components/RelatedResources"
import { getAllInsightSlugs, getInsightPostBySlug } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/image"

export const revalidate = 60

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllInsightSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getInsightPostBySlug(slug)
  if (!post) return {}

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt
  const canonical = post.canonicalUrl || `https://www.theaucorp.com/insights/${post.slug}`
  const img = urlForImage(post.featuredImage)

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
      images: img ? [img.width(1200).height(630).url()] : undefined,
    },
    twitter: {
      title,
      description,
    },
  }
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const img = urlForImage(value)
      if (!img) return null
      return (
        <span className="relative my-6 block h-72 w-full overflow-hidden rounded-xl">
          <Image
            src={img.width(1200).url()}
            alt={value?.alt || ""}
            fill
            className="object-cover"
          />
        </span>
      )
    },
  },
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-10 mb-4 text-blue">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-8 mb-3 text-blue">{children}</h3>,
    normal: ({ children }) => <p className="text-gray-600 leading-relaxed mb-4">{children}</p>,
  },
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await getInsightPostBySlug(slug)

  if (!post) notFound()

  const img = urlForImage(post.featuredImage)
  const canonical = post.canonicalUrl || `https://www.theaucorp.com/insights/${post.slug}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: img ? img.width(1200).height(630).url() : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    author: {
      "@type": "Organization",
      name: post.author || "AU Corporate",
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
        {post.category && (
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold w-fit mb-4 bg-blue-50 text-blue-700">
            {post.category}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue">{post.title}</h1>

        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
          <span>{post.author || "AU Corporate"}</span>
          <span>&middot;</span>
          <span>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {img && (
          <div className="relative mb-10 h-64 sm:h-96 w-full overflow-hidden rounded-xl">
            <Image
              src={img.width(1200).height(630).url()}
              alt={post.featuredImage?.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div>
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {post.relatedArticles && post.relatedArticles.length > 0 && (
          <RelatedResources
            links={post.relatedArticles.map((r) => ({
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
