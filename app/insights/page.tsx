import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { Breadcrumb } from "@/components/Breadcrumb"
import { getPublishedBlog } from "@/lib/public/insights"

const NAVY = "#081a42"
const GOLD = "#facc15"

// Same reasoning as app/insights/[slug]/page.tsx: this page reads live
// Postgres data, so it cannot be statically prerendered at build time —
// `next build` has no database connection available, and a previous
// `revalidate = 60` export still left Next attempting one eager static
// render during the build itself (ISR renders once at build, then
// revalidates), which is what broke the Vercel build. force-dynamic skips
// that build-time render entirely; every request runs the query live.
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: {
    absolute: "Blog | AU Corporate",
  },
  description:
    "Expert insights and analysis from AU Corporate on India market entry, taxation, compliance, and global business advisory.",
  alternates: {
    canonical: "https://www.theaucorp.com/insights",
  },
}

export default async function BlogIndexPage() {
  const posts = await getPublishedBlog()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Blog" }]} />
        </div>
      </div>

      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0d2a5c 100%)` }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: `1px solid ${GOLD}` }}
          >
            Blog
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white">Blog</h1>
          <p className="mt-3 text-white/70 text-lg max-w-2xl">
            Expert insights and analysis from AU Corporate.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-gray-400 py-16">
            No insights published yet — check back soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.slug}`}
                className="group flex h-full flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all overflow-hidden"
              >
                {post.featuredImage && (
                  <div className="relative h-44 w-full">
                    <Image
                      src={post.featuredImage}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  {post.categoryName && (
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold w-fit mb-3 bg-blue-50 text-blue-700">
                      {post.categoryName}
                    </span>
                  )}
                  <h2 className="font-semibold mb-2 group-hover:text-[#081a42] line-clamp-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-xs text-gray-400">
                      {post.publishedAt &&
                        new Date(post.publishedAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
