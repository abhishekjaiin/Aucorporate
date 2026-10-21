import Link from "next/link"
import { AuthorLink } from "@/components/AuthorLink"
import { Breadcrumb } from "@/components/Breadcrumb"
import { FaqAccordion } from "@/components/FaqAccordion"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import type { CaseStudy, CaseStudyBlock } from "@/lib/case-studies"

const CAL_LINK = "https://cal.com/abhishek-jaiin-ybbklq/30min"

function Block({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-gray-700 leading-relaxed mb-4">{block.text}</p>
    case "note":
      return <p className="text-sm text-gray-500 italic mt-3">{block.text}</p>
    case "h3":
      return <h3 className="font-heading font-semibold text-lg text-blue mb-3">{block.text}</h3>
    case "list":
      return (
        <ul className="space-y-2 mb-4">
          {block.items.map((item) => (
            <li key={item} className="flex gap-2 text-gray-700">
              <span className="text-gold font-bold" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <caption className="sr-only">{block.caption}</caption>
            <thead className="bg-blue text-white">
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="text-left px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-3 align-top ${i === 0 ? "font-semibold text-gray-900 w-1/3" : "text-gray-700"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case "columns":
      return (
        <div className="grid gap-8 md:grid-cols-2">
          {block.columns.map((col, i) => (
            <div key={i} className={i > 0 ? "rounded-xl border bg-white p-6" : undefined}>
              {col.map((b, j) => (
                <Block key={j} block={b} />
              ))}
            </div>
          ))}
        </div>
      )
    case "steps":
    case "terms":
      return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item) => (
            <div key={item.title} className="rounded-xl border bg-white p-5">
              {item.label && (
                <span className="block text-xs font-bold uppercase tracking-wider text-gold-dark mb-1">{item.label}</span>
              )}
              <h3 className="font-heading font-semibold text-blue mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      )
    case "timeline":
      return (
        <ol className="relative border-l-2 border-gold/60 ml-3 space-y-6">
          {block.items.map((item) => (
            <li key={item.title} className="pl-6 relative">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gold" aria-hidden="true" />
              {item.label && (
                <span className="block text-xs font-bold uppercase tracking-wider text-gold-dark">{item.label}</span>
              )}
              <h3 className="font-heading font-semibold text-blue">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ol>
      )
    case "numbered":
      return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item, i) => (
            <div key={item.title} className="rounded-xl border bg-white p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue text-white text-sm font-bold mb-3">
                {i + 1}
              </span>
              <h3 className="font-heading font-semibold text-blue mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      )
    case "result":
      return (
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] items-start">
          <div>
            {block.paragraphs.map((p) => (
              <p key={p} className="text-gray-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {block.stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-blue text-white p-5 text-center">
                <p className="font-heading text-3xl font-bold text-gold">{s.value}</p>
                <p className="text-sm text-white/80 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )
  }
}

/** Full case study page, rendered from an entry in lib/case-studies.ts. */
export function CaseStudyArticle({ study }: { study: CaseStudy }) {
  const url = `https://www.theaucorp.com/case-studies/${study.slug}`
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: study.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  const reviewed = new Date(study.faq.reviewed).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Case Studies", href: "/case-studies" }, { label: study.breadcrumb }]} />
      <GuideArticleSchema
        url={url}
        headline={study.h1}
        description={study.metaDescription}
        datePublished={study.datePublished}
        dateModified={study.dateModified}
        inLanguage="en"
      />

      <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-[3fr_2fr] items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">{study.tag}</span>
            <h1 className="mt-3 mb-4 text-3xl font-bold leading-tight md:text-4xl">{study.h1}</h1>
            <p className="text-lg leading-relaxed text-white/85 mb-6">{study.lead}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gold px-5 py-3 font-semibold text-blue hover:opacity-90"
              >
                Book Consultation with an Expert
              </a>
              <a href="#contact" className="rounded-lg border border-white/40 px-5 py-3 font-semibold hover:bg-white/10">
                Get a Quote
              </a>
            </div>
          </div>
          <aside aria-label="Case study summary" className="rounded-2xl bg-white/10 p-6">
            <ul className="space-y-4">
              {study.heroStats.map((s) => (
                <li key={s.value} className="border-b border-white/15 pb-3 last:border-0 last:pb-0">
                  <strong className="block font-heading text-gold">{s.value}</strong>
                  <span className="text-sm text-white/80">{s.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {study.sections.map((section) => (
        <section key={section.heading} className={section.alt ? "py-14 bg-secondary/40" : "py-14"}>
          <div className="max-w-6xl mx-auto px-4">
            {section.quick ? (
              <GuideAnswerBox title={section.heading}>
                {section.blocks[0].type === "p" ? section.blocks[0].text : null}
              </GuideAnswerBox>
            ) : (
              <>
                <h2 className="text-2xl font-bold font-heading text-blue mb-2 sm:text-3xl">{section.heading}</h2>
                {section.sub && <p className="text-gray-500 mb-6">{section.sub}</p>}
                {!section.sub && <div className="mb-6" />}
                {section.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
                {section.services && (
                  <div className="flex flex-wrap gap-3">
                    {section.services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="rounded-full border border-blue px-4 py-2 text-sm font-semibold text-blue hover:bg-blue hover:text-white transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      ))}

      <section id="faq" className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-blue mb-2 sm:text-3xl">{study.faq.heading}</h2>
          <p className="text-gray-500 mb-3">{study.faq.sub}</p>
          <p className="text-sm text-gray-600 mb-1">
            Written and reviewed by{" "}
            <AuthorLink className="font-semibold text-blue hover:underline" />
            , Chartered Accountant (ICAI Membership No. 544646) · Last reviewed:{" "}
            <time dateTime={study.faq.reviewed}>{reviewed}</time>
          </p>
          <p className="text-xs text-gray-500 mb-6">{study.faq.disclaimer}</p>
          <FaqAccordion faqs={study.faq.items} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </div>
      </section>

      <GuideLeadForm title={study.contact.heading} description={study.contact.text} />
    </main>
  )
}
