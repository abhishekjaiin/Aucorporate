# Region Cluster Pages - Build Completion Guide

## ✅ COMPLETED (5/24 pages)

1. ✅ `/components/RegionClusterTemplate.tsx` - Reusable template with fixed zones
2. ✅ `/india-entry-for-us-companies/page.tsx` - US pillar hub page
3. ✅ `/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india/page.tsx` - US sub-page (full example)
4. ✅ `/india-entry-for-uk-companies/page.tsx` - UK pillar hub page
5. ✅ Homepage modification - Added 4 region links to "Doing Business in India" section

---

## 📝 REMAINING PAGES TO CREATE (19/24)

### US Companies (5 remaining sub-pages)
- [ ] `/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us/page.tsx`
  - **Content:** Step-by-step US apostille process, LLC vs C-Corp considerations, IRS reporting
  - **Keywords:** incorporate subsidiary from US, apostille requirements, US parent documentation
  - **Placeholder:** {{NEEDS_REAL_DATA: US apostille process timeline, specific forms list}}

- [ ] `/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary/page.tsx`
  - **Content:** Form 15-CA/15-CB, FEMA reporting, RBI notification requirements
  - **Placeholder:** {{NEEDS_REAL_DATA: specific US-relevant FEMA forms/deadlines you handle}}

- [ ] `/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary/page.tsx`
  - **Content:** Section 482, Form 5471, TP documentation, safe harbor rules
  - **Placeholder:** {{NEEDS_REAL_DATA: US Section 482 compliance deadlines and Form 5471 implications}}

- [ ] `/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us/page.tsx`
  - **Content:** Fee breakdown, timeline milestones, visa requirements, banking setup
  - **Placeholder:** {{NEEDS_REAL_DATA: US-facing fee ranges}}, {{NEEDS_REAL_DATA: visa processing timelines}}

### UK Companies (5 remaining sub-pages)
- [ ] `/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india/page.tsx`
  - **Similar structure to US variant, but with:**
  - **Content:** UK Companies House apostille, UK tax residency, UK permanent establishment
  - **Placeholder:** {{NEEDS_REAL_DATA: UK-specific FEMA forms/deadlines}}

- [ ] `/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk/page.tsx`
  - **Content:** UK apostille process, Companies House certifications, UK tax considerations

- [ ] `/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax/page.tsx`
  - **Content:** DTAA relief at source (RoR), dividend withholding, interest rates, treaty benefits
  - **Placeholder:** {{NEEDS_REAL_DATA: current India-UK DTAA withholding rates and treaty benefits}}

- [ ] `/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary/page.tsx`
  - **Content:** Form 15-CA/15-CB (UK-specific), RBI reporting, LoC requirements
  - **Placeholder:** {{NEEDS_REAL_DATA: UK-relevant FEMA forms/deadlines}}

- [ ] `/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk/page.tsx`
  - **Content:** UK fee structure, timeline, visa/Tier 2 sponsorship, banking
  - **Placeholder:** {{NEEDS_REAL_DATA: UK-facing fee ranges}}

### Singapore Companies (6 pages - all new)
- [ ] `/india-entry-for-singapore-companies/page.tsx` - Pillar hub
- [ ] `/india-entry-for-singapore-companies/singapore-holding-structure-india-subsidiary/page.tsx`
  - **Content:** Singapore holding co structure, IP holding, fund structure optimization
  - **Placeholder:** {{NEEDS_REAL_DATA: Singapore-relevant FEMA forms/deadlines}}

- [ ] `/india-entry-for-singapore-companies/how-to-incorporate-subsidiary-india-from-singapore/page.tsx`
  - **Content:** Singapore apostille process, Singapore company law considerations
  
- [ ] `/india-entry-for-singapore-companies/india-singapore-dtaa-tax-planning/page.tsx`
  - **Content:** Singapore DTAA benefits, treaty relief, PIE structuring
  - **Placeholder:** {{NEEDS_REAL_DATA: current India-Singapore DTAA withholding rates}}

- [ ] `/india-entry-for-singapore-companies/fema-compliance-singapore-company-india-subsidiary/page.tsx`
  - **Content:** Singapore-specific FEMA reporting
  - **Placeholder:** {{NEEDS_REAL_DATA: Singapore-relevant FEMA forms/deadlines}}

- [ ] `/india-entry-for-singapore-companies/cost-timeline-incorporate-company-india-from-singapore/page.tsx`
  - **Placeholder:** {{NEEDS_REAL_DATA: Singapore-facing fee ranges}}

### Australian Companies (6 pages - all new)
- [ ] `/india-entry-for-australian-companies/page.tsx` - Pillar hub
- [ ] `/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india/page.tsx`
  - **Content:** Australian Corporations Law perspective, Perth/Sydney HQ considerations
  - **Placeholder:** {{NEEDS_REAL_DATA: Australia-relevant FEMA forms/deadlines}}

- [ ] `/india-entry-for-australian-companies/how-to-incorporate-subsidiary-india-from-australia/page.tsx`
  - **Content:** Australian apostille process, ASIC certifications

- [ ] `/india-entry-for-australian-companies/fema-compliance-australian-company-india-subsidiary/page.tsx`
  - **Content:** Australian-specific FEMA reporting, AUD FX declarations
  - **Placeholder:** {{NEEDS_REAL_DATA: Australia-relevant FEMA/RBI reporting}}

- [ ] `/india-entry-for-australian-companies/remittance-rbi-reporting-australia-india/page.tsx`
  - **Content:** RBI/LRS reporting for Australia, AUD repatriation, dividend routing
  - **Placeholder:** {{NEEDS_REAL_DATA: current RBI remittance and LRS guidelines for Australia}}

- [ ] `/india-entry-for-australian-companies/cost-timeline-incorporate-company-india-from-australia/page.tsx`
  - **Placeholder:** {{NEEDS_REAL_DATA: Australia-facing fee ranges}}

---

## 🔧 TEMPLATE FOR CREATING REMAINING PAGES

Use this structure for all remaining pages:

```tsx
'use client'
import { Metadata } from 'next'
import Link from 'next/link'
import { RegionClusterTemplate } from '@/components/RegionClusterTemplate'

export const metadata: Metadata = {
  title: '[UNIQUE PAGE TITLE with region/topic keyword] | AU Corporate',
  description: '[UNIQUE 155-160 char description addressing specific search intent]',
  openGraph: {
    title: '[UNIQUE PAGE TITLE]',
    description: '[UNIQUE OG description]',
  },
}

export default function PageName() {
  return (
    <RegionClusterTemplate
      title="[Unique H1]"
      subtitle="[Region-specific subtitle]"
      region="[Region code: US/UK/SG/AU]"
    >
      <h1 className="sr-only">[Unique H1]</h1>
      {/* Intro paragraph */}
      {/* Main content (substantive, unique per page) */}
      {/* FAQ section */}
      {/* Related pages grid */}
      {/* Breadcrumb JSON-LD */}
    </RegionClusterTemplate>
  )
}
```

---

## 📊 CONSOLIDATED PLACEHOLDER LIST (All {{NEEDS_REAL_DATA}} items)

### US Companies
1. {{NEEDS_REAL_DATA: US filing fee range}}
2. {{NEEDS_REAL_DATA: specific US-relevant FEMA forms/deadlines you handle}}
3. {{NEEDS_REAL_DATA: named team member credential for US Advisory}}
4. {{NEEDS_REAL_DATA: US Section 482 compliance deadlines and Form 5471 implications}}
5. {{NEEDS_REAL_DATA: US apostille process timeline, specific forms list}}
6. {{NEEDS_REAL_DATA: visa processing timelines}}

### UK Companies
1. {{NEEDS_REAL_DATA: UK filing fee range}}
2. {{NEEDS_REAL_DATA: UK-relevant FEMA forms/deadlines}}
3. {{NEEDS_REAL_DATA: named team member credential for UK Advisory}}
4. {{NEEDS_REAL_DATA: current India-UK DTAA withholding rates and treaty benefits}}

### Singapore Companies
1. {{NEEDS_REAL_DATA: Singapore filing fee range}}
2. {{NEEDS_REAL_DATA: Singapore-relevant FEMA forms/deadlines}}
3. {{NEEDS_REAL_DATA: named team member credential for Singapore Advisory}}
4. {{NEEDS_REAL_DATA: current India-Singapore DTAA withholding rates}}

### Australian Companies
1. {{NEEDS_REAL_DATA: Australia filing fee range}}
2. {{NEEDS_REAL_DATA: Australia-relevant FEMA/RBI reporting}}
3. {{NEEDS_REAL_DATA: named team member credential for Australia Advisory}}
4. {{NEEDS_REAL_DATA: current RBI remittance and LRS guidelines for Australia}}

---

## ✅ TASK 3 COMPLETION - Homepage Change DIFF

**File:** `/app/page.tsx`
**Location:** Between the 3-box content grid and "Explore India Opportunity" button (line 253)

**Added (30 lines):**
```tsx
<div className="mb-10">
  <p className="text-white/70 text-sm mb-4">Entering from:</p>
  <div className="flex flex-wrap gap-3 justify-center">
    <Link href="/india-entry-for-us-companies" className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm font-semibold transition">
      US Companies
    </Link>
    <Link href="/india-entry-for-uk-companies" className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm font-semibold transition">
      UK Companies
    </Link>
    <Link href="/india-entry-for-singapore-companies" className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm font-semibold transition">
      Singapore Companies
    </Link>
    <Link href="/india-entry-for-australian-companies" className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm font-semibold transition">
      Australia Companies
    </Link>
  </div>
</div>
```

---

## 📋 SITEMAP UPDATE REQUIRED

All new routes must be added to `/app/sitemap.ts`:

```ts
// Add these 4 pillar pages + all sub-pages
{
  path: "/india-entry-for-us-companies",
  priority: 0.93,
  changeFrequency: "weekly" as const,
},
{
  path: "/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india",
  priority: 0.90,
  changeFrequency: "monthly" as const,
},
// ... repeat for all 24 new pages
```

---

## 🎯 NEXT STEPS FOR COMPLETION

1. **Create remaining 19 pages** using the template structure above
2. **Fill in all {{NEEDS_REAL_DATA}} placeholders** with actual client data
3. **Add all new routes to sitemap.ts**
4. **Test breadcrumbs and internal linking** on all pages
5. **Build and deploy** to preview branch
6. **Resubmit sitemap** to Google Search Console

All foundation is ready. Remaining work is content creation and data population.
