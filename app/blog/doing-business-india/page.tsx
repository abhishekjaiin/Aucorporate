import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/Breadcrumb"
import { RelatedResources } from "@/components/RelatedResources"
import { BlogPostingSchema } from "@/components/BlogPostingSchema"
import { FaqAccordion } from "@/components/FaqAccordion"

export const metadata = {
  title: "Doing Business in India in 2026: What's Actually Changed",
  description:
    "GST 2.0, four new Labour Codes, a record FDI year, and a World Bank ranking that's gone stale — a look at what has genuinely changed for foreign companies doing business in India in 2026, and what hasn't.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/doing-business-india",
  },
}

const faqs = [
  {
    q: "Is India's ease-of-doing-business ranking still 63rd, as a lot of guides still say?",
    a: "No — and that figure is more out of date than most people realise. The World Bank discontinued its Doing Business report in September 2021 following an internal investigation into data irregularities. India's 63rd-place ranking was from the 2020 edition, based on 2019 data. The World Bank's replacement framework, Business Ready (B-READY), launched in 2024 and India is part of the assessment cycle due for publication in 2026. Until that report is out, there is no current official global ranking to cite — treat any source still quoting \"India ranks 63rd\" as several years stale.",
  },
  {
    q: "What is GST 2.0 and does it affect my India business?",
    a: "GST 2.0 is the biggest rate restructuring since GST was introduced in 2017. It took effect on 22 September 2025, collapsing the old four-slab structure down to essentially two main rates — 5% and 18% — plus a 40% slab reserved for luxury and sin goods, and folded the separate Compensation Cess into the headline rate for those items. A number of everyday goods and select insurance products moved to nil or 5%. If you sell into India or run an India entity, your product/service classification, invoicing templates, and ERP tax codes are worth re-checking against the new schedule rather than assumed to be unchanged.",
  },
  {
    q: "Are the new Labour Codes already governing my India employees?",
    a: "Partially. The four Labour Codes — Wages, Industrial Relations, Social Security, and Occupational Safety, Health and Working Conditions — were notified as effective from 21 November 2025, replacing 29 older labour statutes. But the Central and most State-level rules that determine how the codes actually apply were still being finalised at that point, with full notification expected around 1 April 2026. Practically, this means the compliance obligations are real but still being finalised — it's a live tracking item through the first half of 2026, not something you can treat as a one-time change already fully absorbed into your HR and payroll setup.",
  },
  {
    q: "Is FDI into India actually growing, or is that just headline noise?",
    a: "Both things are true at once, which is exactly why it's worth understanding the distinction. Gross FDI inflows hit a record in FY2025-26 — about US$94.5 billion on RBI data (up 17% year-on-year), or US$58.85 billion on DPIIT's narrower measure (up 18%). But net FDI — after repatriation, disinvestment, and outbound investment by Indian companies — was only around US$7.65 billion for the year, per RBI data. The gap tells you that a meaningful share of inbound capital is also flowing back out. If you're structuring an India entity, that's a reason to plan your repatriation and dividend mechanics deliberately from the start, not as an afterthought.",
  },
  {
    q: "Where can I find the complete guide to actually entering India, not just what's changed recently?",
    a: "That's a different document by design — this post is about what's new in 2026, not a step-by-step playbook. Our Doing Business in India hub covers the full strategic journey, from deciding whether India is the right market through to running an established operation, and links out to the detailed procedural guide for incorporation itself.",
  },
]

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-7">

      <BlogPostingSchema
        headline="Doing Business in India in 2026: What's Actually Changed"
        description="GST 2.0, four new Labour Codes, a record FDI year, and a World Bank ranking that's gone stale — a look at what has genuinely changed for foreign companies doing business in India in 2026, and what hasn't."
        url="https://www.theaucorp.com/blog/doing-business-india"
        image="https://images.unsplash.com/photo-1589802829985-817e51171b92?fm=jpg&q=80&w=1600&auto=format&fit=crop"
        datePublished="2026-05-04"
        dateModified="2026-09-15"
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Doing Business in India" }]} />

      <h1 className="text-4xl font-bold mb-4">
        Doing Business in India in 2026: What's Actually Changed
      </h1>

      <p className="text-lg mb-6">
        GST 2.0, four new Labour Codes, a record — and complicated — FDI year, and a ranking everyone still quotes that hasn't been updated since before the pandemic.
      </p>

      <Image
        src="https://images.unsplash.com/photo-1589802829985-817e51171b92?fm=jpg&q=80&w=1600&auto=format&fit=crop"
        alt="India business skyline"
        width={1200}
        height={630}
        priority
        className="rounded-2xl mb-8 w-full h-auto"
      />

      <p className="mb-6">
        Search &ldquo;doing business in India&rdquo; and most of what comes back reads like it was written once and never touched again — the same entity-structure explainer, the same compliance checklist, occasionally the same six-year-old World Bank ranking presented as current fact. Some of that material isn&apos;t wrong, exactly. It&apos;s just frozen at whatever point it was published, while the actual regulatory and economic backdrop has kept moving.
      </p>

      <p className="mb-6">
        2026 is a reasonable moment to take stock of what has genuinely changed. In the past twelve months India rewired its indirect tax system, put a new industrial-relations framework into force, posted a record year for foreign investment with a catch buried in the fine print, and quietly lost the ranking number that most &ldquo;doing business in India&rdquo; content still leads with. None of this replaces the fundamentals of market entry — but it does mean a foreign company evaluating India today is looking at a materially different regulatory landscape than one that read the same guide in 2023.
      </p>

      <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-700">
          <strong>Looking for the full playbook instead of what&apos;s new?</strong> This article is deliberately narrow — it covers recent developments, not the complete process. For the strategic and procedural deep-dive — entity selection, market entry routes, incorporation, and what changes after you&apos;re set up — see our{" "}
          <Link href="/doing-business-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            complete Doing Business in India guide
          </Link>.
        </p>
      </div>

      <section aria-labelledby="dbi-ranking">
        <h2 id="dbi-ranking" className="text-2xl font-semibold mt-10 mb-4">
          The Ranking Everyone Quotes Is Six Years Out of Date
        </h2>

        <p className="mb-6">
          A striking number of &ldquo;doing business in India&rdquo; articles still cite India&apos;s position — 63rd — on the World Bank&apos;s Ease of Doing Business index. That number is real, but it&apos;s from the 2020 edition, built on 2019 data. The World Bank discontinued the Doing Business report entirely in September 2021, after an internal ethics review found data irregularities in how certain countries&apos; rankings had been calculated.
        </p>

        <p className="mb-6">
          Its replacement, the Business Ready (B-READY) framework, launched in 2024 with a broader set of measures across business entry, location, utilities, labor, finance, trade, taxation, dispute resolution, competition, and insolvency. India is part of the assessment cycle due for publication in 2026. Until that report lands, there is no current, official global ranking for India to point to — which means any source still asserting &ldquo;India ranks 63rd&rdquo; is working from data older than the current government&apos;s most recent full term.
        </p>
      </section>

      <section aria-labelledby="dbi-gst">
        <h2 id="dbi-gst" className="text-2xl font-semibold mt-10 mb-4">
          GST 2.0: The Biggest Indirect Tax Reset Since 2017
        </h2>

        <p className="mb-6">
          On 22 September 2025, India rolled out what&apos;s being called GST 2.0 — the most significant restructuring of the Goods and Services Tax since it was introduced. The old four-slab structure was collapsed to essentially two working rates, 5% and 18%, with a 40% slab carved out specifically for luxury and sin goods. The separate Compensation Cess was discontinued and its incidence folded into the headline rate for the items that previously carried it.
        </p>

        <p className="mb-6">
          A number of everyday goods, select insurance products, and household essentials moved to nil or 5% as part of the reset. For a foreign business already operating in India, or evaluating entry, the practical implication isn&apos;t abstract: product and service classifications, invoicing templates, and ERP tax codes set up under the old structure are worth re-checking against the new schedule rather than assumed to still be correct.
        </p>
      </section>

      <section aria-labelledby="dbi-labour">
        <h2 id="dbi-labour" className="text-2xl font-semibold mt-10 mb-4">
          Four Labour Codes Are Now Law — But the Rules Are Still Catching Up
        </h2>

        <p className="mb-6">
          On 21 November 2025, India brought its four consolidated Labour Codes — the Code on Wages, the Industrial Relations Code, the Code on Social Security, and the Occupational Safety, Health and Working Conditions Code — into force, replacing 29 separate labour statutes that had accumulated over decades. It&apos;s the most significant overhaul of India&apos;s labour law framework in a generation.
        </p>

        <p className="mb-6">
          The wrinkle worth knowing: the Central and most State-level rules that determine exactly how the codes apply in practice were still being finalised at the point of notification, with full rule-making expected to conclude around 1 April 2026. For any company employing people in India — directly or through an India entity — this is a live compliance item to track through the first half of 2026, not a change you can file away as already fully absorbed into payroll and HR policy.
        </p>
      </section>

      <section aria-labelledby="dbi-fdi">
        <h2 id="dbi-fdi" className="text-2xl font-semibold mt-10 mb-4">
          A Record FDI Year — With a Catch in the Fine Print
        </h2>

        <p className="mb-6">
          Foreign investment into India hit a record in FY2025-26: gross FDI inflows reached approximately US$94.5 billion on RBI data, up 17% year-on-year, while DPIIT&apos;s narrower measure showed US$58.85 billion, up 18%. Equity inflows specifically rose to roughly US$62.3 billion from US$51 billion the prior year, with the RBI-reporting channel accounting for the bulk of the increase.
        </p>

        <p className="mb-6">
          The number that gets less attention: net FDI — gross inflows minus repatriation, disinvestment, and outbound investment by Indian companies — came in at only around US$7.65 billion for the year, per RBI data. That gap between a record gross figure and a comparatively modest net figure is the real story. It doesn&apos;t mean foreign investor confidence is soft — the gross numbers argue otherwise — but it does mean repatriation, dividend mechanics, and exit planning deserve to be built into an India entity&apos;s structure from day one, rather than addressed only once profits are ready to move.
        </p>
      </section>

      <section aria-labelledby="dbi-macro">
        <h2 id="dbi-macro" className="text-2xl font-semibold mt-10 mb-4">
          The Growth Backdrop Behind the Policy Changes
        </h2>

        <p className="mb-6">
          These regulatory shifts aren&apos;t happening in isolation — they&apos;re landing against a growth backdrop that has consistently outperformed forecasts. The National Statistical Office&apos;s first advance estimate put FY2025-26 GDP growth at around 7.4%, and the RBI revised its own projection upward over the course of the year, from an initial 6.8% to 7.3%. Actual quarterly prints have run ahead of even those revised numbers, with Q2 FY2025-26 GDP growth coming in at 8.2%, driven by domestic consumption, manufacturing, and services.
        </p>

        <p className="mb-6">
          None of this guarantees a smooth entry — growth and regulatory ease are different things, which is precisely why the B-READY assessment exists as a separate measure. But it does mean the market a foreign company is evaluating in 2026 is, on the growth numbers at least, moving faster than most planning assumptions from a few years ago accounted for.
        </p>
      </section>

      <section aria-labelledby="dbi-practical">
        <h2 id="dbi-practical" className="text-2xl font-semibold mt-10 mb-4">
          What This Means If You&apos;re Evaluating India Right Now
        </h2>

        <p className="mb-4">None of these developments changes the fundamentals of India market entry — but each one changes an input into how you should plan it:</p>

        <ul className="list-disc pl-6 mb-6">
          <li>Don&apos;t plan tax classification or pricing off a pre-GST 2.0 assumption — verify against the current schedule</li>
          <li>Build repatriation and dividend planning into your entity structure now, not after profits accumulate — the net-versus-gross FDI gap is a real signal, not a technicality</li>
          <li>Treat labour-code compliance as an evolving requirement through at least mid-2026, and revisit your HR and payroll setup once the remaining rules are notified</li>
          <li>Discount any source still citing a specific global ease-of-doing-business rank for India — there currently isn&apos;t a current one, and the 2026 B-READY report will be the first credible replacement</li>
        </ul>

        <p className="mb-6">
          If you&apos;re at the stage of actually working through entity selection, FDI eligibility, and which route to market fits your business, that&apos;s the strategic layer our{" "}
          <Link href="/doing-business-in-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Doing Business in India guide
          </Link>{" "}
          is built around — start with{" "}
          <Link href="/doing-business-in-india/why-india" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Why India
          </Link>{" "}
          if you haven&apos;t committed yet, or{" "}
          <Link href="/doing-business-in-india/pre-incorporation" className="text-yellow-600 hover:text-yellow-700 font-semibold">
            Pre-Incorporation Planning
          </Link>{" "}
          if you have.
        </p>
      </section>

      <section aria-labelledby="dbi-support">
        <h2 id="dbi-support" className="text-2xl font-semibold mt-10 mb-4">
          How AU Corporate Can Support Your India Entry
        </h2>

        <p className="mb-4">
          We help global businesses track exactly this kind of regulatory shift as part of their India entry and ongoing compliance — not as a one-time briefing, but as part of how we structure, incorporate, and support your entity on an ongoing basis. Our services include entry strategy and entity structuring, incorporation and regulatory support, tax advisory and transfer pricing, GST and labour-law compliance management, and accounting and financial reporting support.
        </p>

        <p className="mb-6">
          We focus on making sure your India structure reflects the current rules, not the rules that were current when the plan was first drawn up.
        </p>
      </section>

      <section aria-labelledby="dbi-faq">
        <h2 id="dbi-faq" className="text-2xl font-semibold mt-10 mb-4">
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      <section aria-labelledby="dbi-conclusion">
        <h2 id="dbi-conclusion" className="text-2xl font-semibold mt-10 mb-4">
          Conclusion
        </h2>

        <p className="mb-6">
          The case for doing business in India hasn&apos;t changed — the market size, growth trajectory, and long-term opportunity remain the reasons companies look at it in the first place. What has changed is the regulatory detail underneath that case: a rebuilt GST structure, a new labour-law framework still finishing its rollout, an FDI picture that rewards careful repatriation planning, and a global ranking system that's mid-transition. Getting the current details right — not the details from whenever the last guide you read was written — is what actually determines how smoothly an India entry goes.
        </p>
      </section>

      <section aria-labelledby="dbi-connect">
        <h2 id="dbi-connect" className="text-2xl font-semibold mt-10 mb-4">
          Connect With Us
        </h2>

        <p className="mb-2">If you are planning to enter India or would like to better understand how these recent changes affect your structure, our team would be happy to assist.</p>

        <p className="mb-1">📩 partner@theaucorp.com</p>
        <p className="mb-6">🌐 AU CORPORATE</p>
      </section>


      <RelatedResources
        links={[
          { label: "Doing Business in India", href: "/doing-business-in-india", description: "The complete strategic guide to entering the Indian market." },
          { label: "India Business Setup", href: "/india-business-setup", description: "Entity selection, incorporation, and registration." },
          { label: "FDI in India: Green Channel vs Brown Channel", href: "/blog/fdi-green-vs-brown-channel", description: "How the FDI approval routes actually work." },
          { label: "India's 2026 Safe Harbour Rules", href: "/blog/india-safe-harbour-rules-2026", description: "What changed in transfer pricing for GCCs and IT services subsidiaries." },
        ]}
      />

    </main>
  );
}
