# AU Corporate - Comprehensive SEO Strategy & Topical Authority Plan

## Executive Summary
This document outlines a complete SEO strategy to establish AU Corporate as a topical authority for India business setup, taxation, and consulting services. The strategy targets 45+ high-value keywords across 4 pillar categories with supporting cluster content.

## Current Status Analysis
**Existing Pages:**
- 5 Service pages (Accounting, Taxation, Training, Risk, Transaction Advisory)
- 7 Blog posts
- 2 Main service pages (Arbitration, HR Services)
- Homepage + Supporting pages

**Gaps Identified:**
- Missing GCC Advisory India content
- No location-specific pages (country targeting)
- No industry-specific content
- Limited transfer pricing content
- No comprehensive guides/resources
- Missing FAQ optimization

## SEO Strategy Overview

### 1. Topical Authority Structure

#### Pillar 1: India Business Setup & Entry
**Primary Keywords:** Business Setup India, India Entry Strategy, Company Registration India, Subsidiary Setup India

**Cluster Pages:**
- India Entry Strategy (Pillar Page)
- Company Registration in India
- Wholly-Owned Subsidiary Setup
- Liaison Office in India
- Branch Office in India
- Project Office in India
- GCC Setup in India

#### Pillar 2: International Taxation
**Primary Keywords:** Transfer Pricing India, FEMA Advisory, International Tax, Direct Tax

**Cluster Pages:**
- Transfer Pricing Consulting
- Transfer Pricing Documentation
- FEMA Advisory & Compliance
- International Tax Advisory
- GST for Foreign Companies
- Direct Tax Advisory

#### Pillar 3: Business Services & Outsourcing
**Primary Keywords:** Accounting Outsourcing, Payroll Outsourcing, Virtual CFO, Internal Audit

**Cluster Pages:**
- Accounting Outsourcing Services
- Payroll Outsourcing India
- Virtual CFO Services
- Internal Audit Services
- Forensic Audit Services
- Business Valuation
- Risk Management

#### Pillar 4: Market-Specific Entry (GEO/AEO)
**Target Markets:** USA, UK, Singapore, UAE, Australia, Canada, Germany, Japan

**Page Template:**
- Business Setup in India from [Country]
- Tax Implications for [Country] Companies
- India Entry Roadmap for [Country] Businesses

### 2. Folder Structure (Next.js App Router)

```
app/
├── services/
│   ├── gcc-advisory-india/
│   │   └── page.tsx
│   ├── india-entry-strategy/
│   │   └── page.tsx
│   ├── company-registration-india/
│   │   └── page.tsx
│   ├── subsidiary-setup/
│   │   └── page.tsx
│   ├── liaison-office/
│   │   └── page.tsx
│   ├── branch-office/
│   │   └── page.tsx
│   ├── project-office/
│   │   └── page.tsx
│   ├── transfer-pricing/
│   │   └── page.tsx
│   ├── fema-advisory/
│   │   └── page.tsx
│   ├── international-tax/
│   │   └── page.tsx
│   ├── accounting-outsourcing/
│   │   └── page.tsx
│   ├── payroll-outsourcing/
│   │   └── page.tsx
│   ├── virtual-cfo/
│   │   └── page.tsx
│   ├── internal-audit/
│   │   └── page.tsx
│   └── [other services]/
│
├── country/
│   ├── usa/
│   │   └── page.tsx
│   ├── uk/
│   │   └── page.tsx
│   ├── singapore/
│   │   └── page.tsx
│   ├── uae/
│   │   └── page.tsx
│   ├── australia/
│   │   └── page.tsx
│   ├── canada/
│   │   └── page.tsx
│   ├── germany/
│   │   └── page.tsx
│   └── japan/
│       └── page.tsx
│
├── industries/
│   ├── manufacturing/
│   │   └── page.tsx
│   ├── technology/
│   │   └── page.tsx
│   ├── saas/
│   │   └── page.tsx
│   ├── ecommerce/
│   │   └── page.tsx
│   ├── healthcare/
│   │   └── page.tsx
│   ├── financial-services/
│   │   └── page.tsx
│   ├── automotive/
│   │   └── page.tsx
│   └── real-estate/
│       └── page.tsx
│
├── guides/
│   ├── business-setup-india/
│   │   └── page.tsx
│   ├── gcc-in-india/
│   │   └── page.tsx
│   ├── company-registration/
│   │   └── page.tsx
│   ├── transfer-pricing/
│   │   └── page.tsx
│   ├── fema-compliance/
│   │   └── page.tsx
│   ├── payroll-compliance/
│   │   └── page.tsx
│   └── gst-foreign-companies/
│       └── page.tsx
│
└── components/
    ├── SEO/
    │   ├── ServiceSchema.tsx
    │   ├── FAQSchema.tsx
    │   ├── BreadcrumbSchema.tsx
    │   └── OrganizationSchema.tsx
    ├── Breadcrumb.tsx
    ├── RelatedServices.tsx
    ├── FAQSection.tsx
    └── TableOfContents.tsx
```

### 3. Internal Linking Map

**Hub Pages (10+ internal links):**
- /services (Hub for all services)
- /services/india-entry-strategy (Hub for India setup)
- /services/transfer-pricing (Hub for taxation)
- /guides (Hub for resources)

**Cluster Pages (5-7 internal links):**
- Each service page links to: 2 parent categories + 3-4 related services + guides + relevant country pages

**Spoke Pages (2-4 internal links):**
- Each country/industry page links to: relevant services + guides + pillar pages

### 4. Semantic SEO Framework

**Entity Relationships:**
- AU Corporate (Organization) → Services (ServiceCategory) → Locations (Country) → Industries (BusinessCategory)

**Content Depth:**
- Primary Keywords: 2500-3500 words
- Secondary Keywords: 1500-2500 words
- Long-tail Keywords: 800-1500 words

### 5. Schema Markup Strategy

**Required Schema for Each Page:**
1. Breadcrumb Schema (navigation hierarchy)
2. Service Schema (service details)
3. FAQ Schema (Q&A sections)
4. Organization Schema (company info)
5. LocalBusiness Schema (country pages)

### 6. GEO/AEO Optimization

**GEO Elements:**
- Country-specific tax implications
- Regulatory requirements by jurisdiction
- Local market insights
- Currency and payment references

**AEO Elements:**
- Direct answer blocks for featured snippets
- Question-answer format for voice search
- Quick facts and statistics
- Step-by-step guides

## Phase 1: Priority Pages (Month 1-2)

**High Impact (Quick Wins):**
1. /services/india-entry-strategy (Pillar Page)
2. /services/gcc-advisory-india
3. /services/company-registration-india
4. /guides/business-setup-india
5. /country/usa
6. /country/uk

**Expected Results:**
- 5-8 new target keywords ranking
- 20-30% increase in organic traffic
- Improved topical authority signals

## Phase 2: Market-Specific Pages (Month 2-3)

**Country Pages (All 8):**
- Target "India entry from [Country]" keywords
- Localized tax implications
- Market-specific challenges

**Industry Pages (All 8):**
- Industry-specific tax strategies
- Regulatory requirements by sector

## Phase 3: Comprehensive Coverage (Month 3+)

**Complete Service Coverage:**
- All 22 service pages optimized
- Comprehensive FAQ coverage
- Complete internal linking network

## Success Metrics

**Target Metrics (6 months):**
- 100+ keywords ranking in top 50
- 50+ keywords ranking in top 20
- 10+ keywords ranking in top 10
- Domain Authority increase: 20 → 35+
- Organic traffic: +300%
- Branded search volume increase

**Measurement:**
- Monthly keyword tracking via SEMrush/Ahrefs
- Organic traffic via Google Analytics 4
- Backlink growth monitoring
- Content engagement metrics

## Competitive Analysis

**Target Competitors:**
- VJM Global
- Dhruva Advisors
- EY India
- Deloitte India

**Differentiation Strategy:**
- Deeper content on niche topics (GCC, FEMA, Transfer Pricing)
- Location-specific guides
- Industry-specific approaches
- Interactive tools and calculators

---

**Implementation Timeline:** 12-16 weeks for full rollout
**Expected ROI:** 400-600% organic traffic increase
**Maintenance:** Monthly content updates + quarterly optimization
