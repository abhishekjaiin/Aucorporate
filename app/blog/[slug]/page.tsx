import type { Metadata } from "next"
import type { JSONContent } from "@tiptap/core"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { Breadcrumb } from "@/components/Breadcrumb"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"
import { InquiryForm } from "@/components/InquiryForm"
import { TableOfContents } from "@/components/blogs/TableOfContents"
import { getPublishedBlogBySlug, getRelatedBlogByTopicCluster } from "@/lib/public/blogs"
import { renderBlogContent } from "@/lib/tiptap/renderToHtml"
import { extractFaqSection } from "@/lib/content/faq"
import { extractToc, injectHeadingIds, estimateReadingTime } from "@/lib/content/toc"

// This site's root app/loading.tsx wraps every route in an automatic
// Suspense boundary, so Next streams a shell with a 200 status before a
// notFound() call deep in the page body ever resolves — confirmed live:
// an unknown/unpublished slug returned HTTP 200 with the not-found page's
// content. generateMetadata() runs before that shell is flushed, so
// calling notFound() there (not just in the page body) is what actually
// produces a correct 404 status — this is the documented fix for exactly
// this class of issue, not a bug worked around by dynamic export flags.
export const dynamic = "force-dynamic"

// Known service/jurisdiction slugs an editor can set on an Blog (see
// components/admin/BlogForm.tsx), mapped to the existing public pages
// they correspond to. Deliberately small and static — this links into
// existing pages only, it never creates new ones.
const SERVICE_LINKS: Record<string, { label: string; href: string }> = {
  "taxation-regulatory": { label: "Taxation & Regulatory", href: "/services/taxation-regulatory" },
  "accounting-assurance": { label: "Accounting & Assurance", href: "/services/accounting-assurance" },
  "risk-management": { label: "Risk Management", href: "/services/risk-management" },
  "transaction-advisory": { label: "Transaction Advisory", href: "/services/transaction-advisory" },
  "training-workshops": { label: "Training & Workshops", href: "/services/training-workshops" },
  "hr-services": { label: "HR & Payroll", href: "/hr-services" },
  outsourcing: { label: "Outsourced Finance & Virtual CFO", href: "/outsourcing" },
  "arbitration-services": { label: "Arbitration & Dispute Resolution", href: "/arbitration-services" },
  "india-business-setup": { label: "India Business Setup", href: "/india-business-setup" },
  "gcc-setup-india": { label: "GCC Setup in India", href: "/gcc-setup-india" },
}

const JURISDICTION_LINKS: Record<string, { label: string; href: string }> = {
  usa: { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
  us: { label: "India Entry for US Companies", href: "/india-entry-for-us-companies" },
  uk: { label: "India Entry for UK Companies", href: "/india-entry-for-uk-companies" },
  singapore: { label: "India Entry for Singapore Companies", href: "/india-entry-for-singapore-companies" },
  australia: { label: "India Entry for Australian Companies", href: "/india-entry-for-australian-companies" },
  germany: { label: "India Entry for German Companies", href: "/india-entry-for-german-companies" },
  japan: { label: "India Entry for Japanese Companies", href: "/india-entry-for-japan-companies" },
  china: { label: "India Entry for Chinese Companies", href: "/india-entry-for-china-companies" },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublishedBlogBySlug(slug)
  if (!post) notFound()

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt || undefined
  const canonical = post.canonicalUrl || `https://www.theaucorp.com/blogs/${post.slug}`

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

function formatDate(date: Date | string | null): string | null {
  if (!date) return null
  return new Date(date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await getPublishedBlogBySlug(slug)

  // Unpublished/approved-but-unpublished/draft/internal-review content and
  // any unknown slug both resolve to a plain 404 here — the query itself
  // only ever returns PUBLISHED rows, so there's no separate "exists but
  // hidden" branch to accidentally leak.
  if (!post) notFound()

  const canonical = post.canonicalUrl || `https://www.theaucorp.com/blogs/${post.slug}`
  const fullContent = post.content as JSONContent | null

  // Lift an author-written "## Frequently Asked Questions" section out of
  // the body (if present) so it renders once, as a proper accordion with
  // FAQPage schema, instead of twice (once as plain prose, once duplicated).
  const { content: bodyContent, faqs } = extractFaqSection(fullContent)
  const toc = extractToc(bodyContent)
  const html = injectHeadingIds(renderBlogContent(bodyContent), toc)
  const readingTime = estimateReadingTime(fullContent)

  let relatedBlog = post.related
  if (relatedBlog.length === 0 && post.topicClusterId) {
    relatedBlog = await getRelatedBlogByTopicCluster(post.topicClusterId, post.id)
  }

  const serviceLink = post.serviceSlug ? SERVICE_LINKS[post.serviceSlug] : undefined
  const jurisdictionLink = post.jurisdictionSlug ? JURISDICTION_LINKS[post.jurisdictionSlug] : undefined
  const relatedServiceLinks = [jurisdictionLink, serviceLink].filter(
    (l): l is { label: string; href: string } => Boolean(l)
  )

  const publishedDate = formatDate(post.publishedAt)
  const updatedDate = formatDate(post.updatedAt)

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

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Blog", href: "/blogs" }, { label: post.title }]} />
        </div>
      </div>

      {/* HEADER */}
      <header className="max-w-3xl mx-auto px-4 pt-10 pb-6">
        {post.categoryName && (
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-4 bg-blue-50 text-blue-700">
            {post.categoryName}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue leading-tight">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-lg text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
        )}

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 border-t border-gray-200 pt-4">
          <span className="font-medium text-gray-700">{post.authorName || "AU Corporate"}</span>
          {post.authorDesignation && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{post.authorDesignation}</span>
            </>
          )}
          {publishedDate && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>Published {publishedDate}</span>
            </>
          )}
          {updatedDate && updatedDate !== publishedDate && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>Updated {updatedDate}</span>
            </>
          )}
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} min read</span>
        </div>
      </header>

      {post.featuredImage && (
        <div className="max-w-5xl mx-auto px-4 mb-10">
          <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-xl">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* MAIN AREA — article + inquiry form */}
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 xl:gap-12 items-start">
        <article className="min-w-0">
          <TableOfContents items={toc} />

          <div
            className="prose-blog [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-blue [&_h2]:scroll-mt-24 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-blue [&_h3]:scroll-mt-24 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-gold-dark [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-gray-600 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:text-gray-600 [&_li]:mb-1 [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:bg-gray-100 [&_blockquote]:py-2 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-700 [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:text-sm [&_td]:border [&_td]:border-gray-200 [&_td]:p-2.5 [&_th]:border [&_th]:border-gray-200 [&_th]:p-2.5 [&_th]:bg-gray-100 [&_th]:text-left [&_img]:rounded-xl"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <aside className="lg:sticky lg:top-24">
          <InquiryForm
            eyebrow="Discuss Your India Plans"
            title="Discuss Your India Plans"
            description="Tell us briefly about your requirements and our team will get back to you."
          />
        </aside>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        {faqs.length > 0 && (
          <section className="mt-16 pt-10 border-t" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold mb-6 text-blue">
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqs={faqs} />
          </section>
        )}

        {post.authorName && (
          <section className="mt-16 pt-10 border-t">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-4">Written By</p>
            <div className="flex items-start gap-4">
              {post.authorImage && (
                <Image
                  src={post.authorImage}
                  alt={post.authorName}
                  width={56}
                  height={56}
                  className="rounded-full object-cover shrink-0"
                />
              )}
              <div>
                <p className="font-bold text-blue">{post.authorName}</p>
                {post.authorDesignation && (
                  <p className="text-sm text-gray-500 mb-2">{post.authorDesignation}</p>
                )}
                {post.authorBio && (
                  <p className="text-sm text-gray-600 leading-relaxed">{post.authorBio}</p>
                )}
              </div>
            </div>
          </section>
        )}

        {relatedBlog.length > 0 && (
          <RelatedResources
            title="Related Blog"
            showCta={relatedServiceLinks.length === 0}
            links={relatedBlog.map((r) => ({
              label: r.title,
              href: `/blogs/${r.slug}`,
              description: r.excerpt || "",
            }))}
          />
        )}

        {relatedServiceLinks.length > 0 && (
          <RelatedResources title="Related Services" links={relatedServiceLinks.map((l) => ({ ...l, description: "" }))} />
        )}

        <p className="mt-10 pt-6 text-sm">
          <Link href="/blogs" className="text-gold-dark font-semibold hover:underline">
            &larr; Back to Blog
          </Link>
        </p>
      </div>

      {/* FINAL CTA */}
      <section className="mt-16 py-16 bg-blue text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Planning Your Next Step in India?</h2>
          <p className="text-white/70 mb-6">
            Talk to AU Corporate about how this applies to your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Talk to Experts
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </div>
  )
}
