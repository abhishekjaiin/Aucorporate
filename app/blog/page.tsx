"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"

const NAVY = "#081a42"
const GOLD = "#facc15"

type Category = "India Entry" | "Taxation" | "Arbitration" | "FDI & Investment"

const categoryStyles: Record<Category, { bg: string; text: string; dot: string }> = {
  "India Entry": { bg: "#eff6ff", text: "#1d4ed8", dot: "#2563eb" },
  Taxation: { bg: "#f0fdf4", text: "#15803d", dot: "#16a34a" },
  Arbitration: { bg: "#fef2f2", text: "#b91c1c", dot: "#dc2626" },
  "FDI & Investment": { bg: "#fffbeb", text: "#b45309", dot: "#d97706" },
}

const blogs: { title: string; desc: string; slug: string; category: Category; date: string; featured?: boolean }[] = [
  {
    title: "India Opens Another Door for Japanese High-Tech Investment",
    desc: "Commerce Minister Piyush Goyal's proposed BIS certification exemption for high-tech manufacturers, announced in Tokyo on 25 August 2026 — and what it signals for Japanese semiconductor, electronics, and AI companies evaluating India.",
    slug: "india-japan-bis-exemption-high-tech-investment",
    category: "FDI & Investment",
    date: "26 Aug 2026",
    featured: true,
  },
  {
    title: "India's 2026 Safe Harbour Rules: 15.5% IT Margin Explained",
    desc: "Union Budget 2026 consolidated IT, ITeS, KPO and contract R&D into a single Safe Harbour category at 15.5% margin, with the eligibility threshold raised from Rs 300 crore to Rs 2,000 crore. What it means for your GCC.",
    slug: "india-safe-harbour-rules-2026",
    category: "Taxation",
    date: "30 Jul 2026",
  },
  {
    title: "Construction Arbitration in India: From Winning Claims to Enforcing Awards",
    desc: "Understand regulatory, tax, and compliance landscape before entering India.",
    slug: "construction-arbitration-india",
    category: "Arbitration",
    date: "24 Aug 2026",
  },
  {
    title: "Arbitration Enforcement India",
    desc: "A Practical Overview of Legal Procedures, Challenges, and Strategic Considerations in India",
    slug: "arbitration-enforcement-india",
    category: "Arbitration",
    date: "4 May 2026",
  },
  {
    title: "Doing Business in India",
    desc: "A Structured Approach to Navigating India’s Regulatory, Tax, and Compliance Landscape",
    slug: "doing-business-india",
    category: "India Entry",
    date: "4 May 2026",
  },
  {
    title: "FDI in India: Green Channel vs Brown Channel",
    desc: "Explore FDI in India, including regulatory framework, automatic vs government route, and Green Channel vs Brown Channel approvals. Expert insights by AU Corporate.",
    slug: "fdi-green-vs-brown-channel",
    category: "FDI & Investment",
    date: "4 May 2026",
  },
  {
    title: "Wholly Owned Subsidiary in India: Incorporation Process & Compliance",
    desc: "Learn how to set up a wholly owned subsidiary in India. Step-by-step incorporation process, FEMA compliance, RBI reporting, and regulatory requirements explained.",
    slug: "wholly-owned-subsidiary",
    category: "India Entry",
    date: "4 May 2026",
  },
  {
    title: "Mailbox Companies & DTAA Benefits in India | Tiger Global Supreme Court Ruling 2026",
    desc: "Supreme Court of India in the Tiger Global case reshapes DTAA interpretation, denying treaty benefits to mailbox companies lacking substance. Learn implications for foreign investors and GAAR framework.",
    slug: "mail-box-dtaa-benefits",
    category: "Taxation",
    date: "4 May 2026",
  },
  {
    title: "Tax Treatment of Loan Waiver in India: Supreme Court Resolves Capital vs Revenue Controversy",
    desc: "Explore the evolving judicial position on taxability of loan waiver in India through landmark rulings including T.V. Sundaram Iyengar, Solid Containers, Mahindra & Mahindra (HC & SC), and Ramaniyam Homes. Understand how the Supreme Court finally settled the law on Sections 28(iv) and 41(1) of the Income Tax Act, 1961.",
    slug: "tax-loan-waiver-india",
    category: "Taxation",
    date: "4 May 2026",
  },
]

const featuredPost = blogs.find((b) => b.featured)!
const restPosts = blogs.filter((b) => !b.featured)
const categories: ("All" | Category)[] = ["All", "India Entry", "Taxation", "Arbitration", "FDI & Investment"]

export default function BlogPage() {
  const [active, setActive] = useState<"All" | Category>("All")
  const filtered = active === "All" ? restPosts : restPosts.filter((b) => b.category === active)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* BREADCRUMB — light strip above the dark masthead */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Blog" }]} />
        </div>
      </div>

      {/* ================= MASTHEAD ================= */}
      <section
        className="relative overflow-hidden py-20 sm:py-24"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0d2a5c 100%)` }}
      >
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: GOLD }}
        />
        <div
          aria-hidden="true"
          className="absolute -left-20 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "#3b82f6" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: `1px solid ${GOLD}` }}
            >
              <Sparkles size={12} style={{ color: GOLD }} /> Insights &amp; Updates
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white">Our Blog</h1>
            <p className="mt-3 text-white/70 text-lg">
              Insights on taxation, compliance, arbitration, and global business in India.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 pb-24">
        {/* ================= FEATURED POST ================= */}
        <Reveal>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block rounded-2xl bg-white shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow"
          >
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: categoryStyles[featuredPost.category].bg, color: categoryStyles[featuredPost.category].text }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: categoryStyles[featuredPost.category].dot }} />
                    {featuredPost.category}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:underline decoration-2 underline-offset-4" style={{ color: NAVY }}>
                  {featuredPost.title}
                </h2>
                <p className="text-gray-500 mb-6">{featuredPost.desc}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>{featuredPost.date}</span>
                </div>
                <span className="inline-flex items-center gap-2 font-semibold text-sm w-fit" style={{ color: NAVY }}>
                  Read Full Article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
              <div
                className="relative hidden md:flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0d2a5c 60%, #14184a 100%)` }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-70"
                  style={{ background: "radial-gradient(circle, #BC002D 0%, #BC002D 38%, transparent 40%)" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.07]"
                  style={{ background: `repeating-conic-gradient(from 0deg at 70% 30%, white 0deg 2deg, transparent 2deg 12deg)` }}
                />
                <span className="relative text-white/90 text-6xl font-bold">日本</span>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* ================= CATEGORY FILTER ================= */}
        <div className="mt-14 mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="rounded-full px-4 py-2 text-sm font-semibold transition-all"
              style={
                active === cat
                  ? { backgroundColor: NAVY, color: "white" }
                  : { backgroundColor: "white", color: "#4b5563", border: "1px solid #e5e7eb" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((blog, i) => (
            <Reveal key={blog.slug} delay={(i % 6) * 0.08}>
              <Link
                href={`/blog/${blog.slug}`}
                className="group flex h-full flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all overflow-hidden"
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: categoryStyles[blog.category].dot }} />
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold w-fit mb-3"
                    style={{ backgroundColor: categoryStyles[blog.category].bg, color: categoryStyles[blog.category].text }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: categoryStyles[blog.category].dot }} />
                    {blog.category}
                  </span>
                  <h2 className="font-semibold mb-2 group-hover:text-[#081a42] line-clamp-2">{blog.title}</h2>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-1">{blog.desc}</p>

                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-xs text-gray-400">{blog.date}</span>
                    <span className="text-yellow-500 text-sm flex items-center gap-1">
                      Read More
                      <span className="inline-flex transition-transform duration-200 group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-16">No posts in this category yet.</p>
        )}
      </div>
    </div>
  )
}
