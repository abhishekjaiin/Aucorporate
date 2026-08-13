# SEO Topical Authority Implementation Roadmap

## What Has Been Created

### 1. Strategic Foundation ✅
- **SEO_STRATEGY.md** - Complete 282-line strategy document with:
  - Topical authority structure (4 pillars)
  - Folder organization for 45+ new pages
  - Internal linking maps
  - Schema markup strategy
  - GEO/AEO optimization framework
  - Phase 1-3 implementation plan

### 2. Reusable Components ✅
- **FAQSchema.tsx** - FAQ structured data for search results
- **BreadcrumbSchema.tsx** - Navigation breadcrumbs + schema
- **ServiceSchema.tsx** - Service details for rich snippets
- **FAQAccordion.tsx** - Interactive FAQ display component
- **RelatedServices.tsx** - Related services card grid
- **TableOfContents.tsx** - Auto-generated page TOC with jump links

## What Needs to Be Created (Next Steps)

### Phase 1: Priority Pages (Weeks 1-2)

Create these high-impact pages in this order:

1. **`/services/india-entry-strategy/page.tsx`** (Pillar Page)
   - Target: "India Entry Strategy", "India Entry for Foreign Companies"
   - Content: 3000+ words
   - Sections: Overview, Process, Tax Implications, Challenges, FAQ
   - Internal Links: 8-10 to related services

2. **`/services/gcc-advisory-india/page.tsx`**
   - Target: "GCC Advisory India", "GCC Setup India", "Global Capability Centre"
   - Content: 2500+ words
   - Tax benefits, process, requirements, FAQ

3. **`/services/company-registration-india/page.tsx`**
   - Target: "Company Registration India", "Register Company in India"
   - Content: 2500+ words
   - Document requirements, timelines, costs

4. **`/guides/business-setup-india/page.tsx`** (Resource Hub)
   - Target: "Business Setup India Guide", "How to Start Business India"
   - Content: 3500+ words
   - Comprehensive step-by-step guide with all aspects

5. **`/country/usa/page.tsx`** (First Country Page)
   - Target: "India Entry for US Companies", "Business Setup India from USA"
   - Content: 2500+ words
   - US-specific tax implications, regulatory requirements, success stories

### Phase 2: Market Expansion (Weeks 3-4)

Replicate /country page template for:
- /country/uk/page.tsx
- /country/singapore/page.tsx
- /country/uae/page.tsx
- /country/australia/page.tsx
- /country/canada/page.tsx
- /country/germany/page.tsx
- /country/japan/page.tsx

### Phase 3: Service Expansion (Weeks 5-8)

Complete remaining service pages (17 more):
- Transfer Pricing (Consulting + Documentation)
- FEMA Advisory
- International Tax Advisory
- Accounting Outsourcing
- Payroll Outsourcing
- Virtual CFO Services
- Internal & Forensic Audit
- Business Valuation
- Direct Tax Advisory
- GST Advisory
- Liaison/Branch/Project Offices

### Phase 4: Industry Pages (Weeks 9-10)

Create industry-specific pages (8 total):
- /industries/manufacturing/page.tsx
- /industries/technology/page.tsx
- /industries/saas/page.tsx
- /industries/ecommerce/page.tsx
- /industries/healthcare/page.tsx
- /industries/financial-services/page.tsx
- /industries/automotive/page.tsx
- /industries/real-estate/page.tsx

### Phase 5: Resource Guides (Week 11)

Complete guide pages (3 remaining):
- /guides/gcc-in-india/page.tsx
- /guides/transfer-pricing/page.tsx
- /guides/fema-compliance/page.tsx
- /guides/payroll-compliance/page.tsx
- /guides/gst-foreign-companies/page.tsx

## Page Template Structure

Each page should follow this structure:

```typescript
import { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/SEO/BreadcrumbSchema"
import { ServiceSchema } from "@/components/SEO/ServiceSchema"
import { FAQSchema } from "@/components/SEO/FAQSchema"
import { FAQAccordion } from "@/components/FAQAccordion"
import { RelatedServices } from "@/components/RelatedServices"
import { TableOfContents } from "@/components/TableOfContents"

export const metadata: Metadata = {
  title: "Service Title | AU Corporate",
  description: "Meta description (160 chars)",
  keywords: ["keyword1", "keyword2", "keyword3"],
}

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Service Name", url: "/services/service-name" },
]

const faqItems = [
  { question: "Q1?", answer: "A1..." },
  // ... more FAQs
]

const relatedServices = [
  { title: "Service", description: "Description", url: "/services/..." },
  // ... more related
]

export default function Page() {
  return (
    <main>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema name="Service Name" description="..." />
      <FAQSchema items={faqItems} />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1>H1 Title</h1>
          <TableOfContents items={tocItems} />
          
          {/* Content sections */}
          <section id="overview">
            <h2>Overview</h2>
            {/* ... */}
          </section>

          {/* More sections... */}
        </div>
      </section>

      <FAQAccordion items={faqItems} />
      <RelatedServices services={relatedServices} />
    </main>
  )
}
```

## Content Brief Requirements

For each page, prepare:

1. **SEO Title** (50-60 chars)
   - Include primary keyword
   - Compelling copy
   - Brand name at end

2. **Meta Description** (150-160 chars)
   - Address user intent
   - Include primary keyword
   - Clear call-to-action

3. **H1 Title** (Unique per page)
   - Primary keyword
   - Clear benefit statement

4. **Content Structure**
   - H2: Overview/Introduction
   - H2: Key Benefits
   - H2: Process/Steps
   - H2: Requirements/Qualifications
   - H2: Timeline & Costs
   - H2: Common Challenges
   - H2: FAQs

5. **Internal Links**
   - 2-3 service page links
   - 2 guide/resource links
   - 1-2 country/industry links
   - Anchor text with primary keywords

6. **Schema Markup**
   - BreadcrumbList (navigation)
   - Service/LocalBusiness
   - FAQPage (for FAQ section)
   - Article (for guides)

## Folder Creation Commands

```bash
# Run these to create all folder structures
mkdir -p app/services/{gcc-advisory-india,india-entry-strategy,company-registration-india,subsidiary-setup,liaison-office,branch-office,project-office,transfer-pricing,fema-advisory,international-tax,accounting-outsourcing,payroll-outsourcing,virtual-cfo,internal-audit,forensic-audit,business-valuation,direct-tax-advisory,gst-advisory}

mkdir -p app/country/{usa,uk,singapore,uae,australia,canada,germany,japan}

mkdir -p app/industries/{manufacturing,technology,saas,ecommerce,healthcare,financial-services,automotive,real-estate}

mkdir -p app/guides/{business-setup-india,gcc-in-india,company-registration,transfer-pricing,fema-compliance,payroll-compliance,gst-foreign-companies}

mkdir -p components/SEO
```

## Deployment Strategy

1. **Create folders** using mkdir commands above
2. **Build Phase 1 pages** (5 critical pages) - Week 1-2
3. **Deploy and monitor** in Google Search Console
4. **Iterate based on performance**
5. **Continue with Phases 2-5**

## Expected Timeline

- **Week 1-2:** Phase 1 (5 pages) + Deploy
- **Week 3-4:** Phase 2 (8 country pages)
- **Week 5-8:** Phase 3 (17 service pages)
- **Week 9-10:** Phase 4 (8 industry pages)
- **Week 11:** Phase 5 (7 guide pages)

**Total: 11 weeks for 45+ pages with full optimization**

## Success Metrics

After full implementation (3-6 months):
- 150+ new keywords ranking
- 50+ top-20 rankings
- 300%+ organic traffic increase
- 35+ Domain Authority (from current 20)
- Established topical authority in India business services

## Files Created

✅ /SEO_STRATEGY.md (282 lines)
✅ /IMPLEMENTATION_ROADMAP.md (this file)
✅ /components/SEO/FAQSchema.tsx
✅ /components/SEO/BreadcrumbSchema.tsx
✅ /components/SEO/ServiceSchema.tsx
✅ /components/FAQAccordion.tsx
✅ /components/RelatedServices.tsx
✅ /components/TableOfContents.tsx

## Next Action Items

1. Review SEO_STRATEGY.md for overall approach
2. Review page template structure above
3. Approve content brief format
4. Begin creating Phase 1 pages
5. Deploy to production for indexing

---

**Questions? Contact your SEO strategist.**
**Timeline: 11 weeks to full topical authority**
**Expected ROI: 400-600% organic traffic increase**
