"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Building2,
  FileCheck,
  Calculator,
  Shield,
  Scale,
  Users,
  LineChart,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/WhatsAppIcon"

// ── Doing Business in India — mega menu, 4 columns ──────────────────────────
const dbiColumns = [
  {
    heading: "India Entry Basics",
    hub: { label: "Doing Business in India — Overview", href: "/doing-business-in-india" },
    items: [
      { label: "Why India", href: "/doing-business-in-india/why-india" },
      { label: "Entry Process", href: "/doing-business-in-india/entry-process" },
      { label: "Pre-Incorporation", href: "/doing-business-in-india/pre-incorporation" },
      { label: "Incorporation", href: "/doing-business-in-india/incorporation" },
      { label: "Post-Incorporation", href: "/doing-business-in-india/post-incorporation" },
    ],
  },
  {
    heading: "Entity Types & Setup",
    items: [
      { label: "Company Registration / Incorporation", href: "/india-business-setup/company-formation" },
      { label: "Wholly Owned Subsidiary", href: "/blog/wholly-owned-subsidiary" },
      { label: "Branch Office", href: "/branch-office-in-india" },
      { label: "Liaison Office", href: "/liaison-office-in-india" },
      { label: "Project Office", href: "/project-office-in-india" },
      { label: "LLP", href: "/llp-in-india" },
      { label: "FDI Channels (Automatic vs Government)", href: "/india-business-setup/fdi-channels" },
    ],
  },
  {
    heading: "Compliance & Specialized Entry",
    items: [
      { label: "Regulatory Compliance", href: "/india-business-setup/regulatory-compliance" },
      { label: "Banking & Taxation", href: "/india-business-setup/banking-taxation" },
      { label: "Timeline & Resources", href: "/india-business-setup/timeline-resources" },
      { label: "Global Capability Center (GCC) Setup", href: "/gcc-setup-india" },
      { label: "India Entry for SaaS/AI Companies", href: "/india-entry-for-saas-companies" },
    ],
  },
  {
    heading: "By Country",
    items: [
      { label: "USA", href: "/india-entry-for-us-companies" },
      { label: "UK", href: "/india-entry-for-uk-companies" },
      { label: "Singapore", href: "/india-entry-for-singapore-companies" },
      { label: "Australia", href: "/india-entry-for-australian-companies" },
      { label: "Germany", href: "/india-entry-for-german-companies" },
      { label: "Japan", href: "/india-entry-for-japan-companies" },
      { label: "China", href: "/india-entry-for-china-companies" },
      { label: "Via Our Partners (HK / Singapore / China)", href: "/partners/uniproasia" },
    ],
  },
]

// ── Services — matches the /services hub's own 8 categories & icons ────────
const coreServiceLinks = [
  { label: "Taxation & Regulatory Services", desc: "Domestic & international tax advisory", href: "/services/taxation-regulatory", icon: Calculator },
  { label: "Accounting & Assurance", desc: "Audit, reporting & compliance assurance", href: "/services/accounting-assurance", icon: FileCheck },
  { label: "Risk Management", desc: "Governance, controls & cyber risk", href: "/services/risk-management", icon: Shield },
  { label: "Transaction Advisory Services", desc: "M&A, valuations & fundraising", href: "/services/transaction-advisory", icon: LineChart },
  { label: "HR & Payroll Solutions", desc: "Workforce, payroll & compliance", href: "/hr-services", icon: Users },
  { label: "Arbitration & Dispute Resolution", desc: "Commercial arbitration & disputes", href: "/arbitration-services", icon: Scale },
  { label: "Training & Workshops", desc: "Compliance & audit training programs", href: "/services/training-workshops", icon: GraduationCap },
  { label: "Global Support Services (Outsourcing)", desc: "Outsourcing & back-office support", href: "/outsourcing", icon: Building2 },
]

const specialistServiceLinks = [
  { label: "OIDAR & GST for SaaS/AI Companies", href: "/oidar-gst-registration-india" },
  { label: "Global VAT & Sales Tax Compliance", href: "/global-vat-compliance-ai-saas-companies" },
]

// ── About ────────────────────────────────────────────────────────────────
const aboutLinks = [
  { label: "About AU Corporate", href: "/about" },
  { label: "Partners", href: "/partners/uniproasia" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenu, setMobileMenu] = useState<string | null>(null)
  const [mobileDbiSub, setMobileDbiSub] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const closeMobile = () => {
    setIsOpen(false)
    setMobileMenu(null)
    setMobileDbiSub(null)
  }

  // The DBI/Services dropdown panels render fixed to the viewport (so they
  // can't overflow off-screen on narrower widths), which visually detaches
  // them from their trigger button — there's empty page between the two.
  // Closing on the trigger's plain onMouseLeave meant crossing that gap
  // closed the menu before the cursor ever reached the panel. openMenu/
  // scheduleClose/cancelClose give the panel itself a brief window to
  // "catch" the hover (via the same handlers) before the menu closes.
  const openMenu = (key: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setActiveMenu(key)
  }
  const scheduleClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    // 400ms, not the usual ~200ms hover-intent default: since the DBI/Services
    // panels render centered in the viewport (to stay fully on-screen on
    // narrower widths), the trigger-to-panel gap can be 300px+ on a wide
    // desktop — a shorter delay reliably closed the menu mid-transit.
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 400)
  }
  const cancelClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
  }

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-2" onClick={handleLogoClick}>
            <Image src="/logo.png" alt="AU Corporate" width={42} height={42} priority sizes="42px" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gold-dark sm:text-2xl">AU Corporate</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#081a42] sm:text-[10px]">Growing Together</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {/* DOING BUSINESS IN INDIA — mega menu */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("dbi")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "dbi" ? null : "dbi")}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black"
                aria-haspopup="true"
                aria-expanded={activeMenu === "dbi"}
              >
                Doing Business in India <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>

              {activeMenu === "dbi" && (
                <div
                  className="fixed left-1/2 top-20 z-50 w-[min(1040px,calc(100vw-2rem))] -translate-x-1/2 pt-2"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="overflow-hidden rounded-2xl border bg-white shadow-2xl">
                    <div className="grid grid-cols-4 gap-0 p-6">
                      {dbiColumns.map((col, i) => (
                        <div key={col.heading} className={i > 0 ? "border-l pl-5 ml-5" : ""}>
                          <h3 className="mb-3 text-sm font-semibold text-[#081a42]">{col.heading}</h3>
                          {col.hub && (
                            <Link href={col.hub.href} className="mb-2 block text-xs font-semibold text-gold-dark hover:underline">
                              {col.hub.label} →
                            </Link>
                          )}
                          <div className="space-y-0.5">
                            {col.items.map((item) => (
                              <Link key={item.label} href={item.href} className="block py-1.5 text-sm leading-snug text-gray-700 hover:text-gold-dark">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center justify-between px-6 py-3.5 text-sm transition-colors hover:opacity-90"
                      style={{ backgroundColor: "#081a42" }}
                    >
                      <span className="text-white">
                        <span className="font-semibold">Not sure which entity type fits your business?</span>{" "}
                        <span className="text-white/70">Our team can walk you through it in one call.</span>
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-yellow-400">
                        Talk to an expert <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("services")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black"
                aria-haspopup="true"
                aria-expanded={activeMenu === "services"}
              >
                Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>

              {activeMenu === "services" && (
                <div
                  className="fixed left-1/2 top-20 z-50 w-[min(640px,calc(100vw-2rem))] -translate-x-1/2 pt-2"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                    {/* Navy service-line rail, matching the /services hub's own icons */}
                    <div className="w-[62%] py-4" style={{ backgroundColor: "#081a42" }}>
                      <Link href="/services" className="mx-2 mb-2 flex items-center justify-between rounded-lg px-4 py-2 text-sm font-semibold text-yellow-400 hover:bg-white/10">
                        All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <div className="mx-2 mb-2 border-t border-white/10" />
                      {coreServiceLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="group mx-2 flex items-start gap-3 rounded-lg px-4 py-2.5 transition-colors hover:bg-white/10"
                        >
                          <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" aria-hidden="true" />
                          <span>
                            <span className="block text-sm font-medium text-white">{item.label}</span>
                            <span className="block text-xs text-white/60">{item.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Specialist services + CTA */}
                    <div className="flex w-[38%] flex-col justify-between p-5">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Specialist / Industry-Specific</p>
                        {specialistServiceLinks.map((item) => (
                          <Link key={item.label} href={item.href} className="group flex items-start justify-between gap-2 rounded-lg px-2 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#081a42]">
                            <span>{item.label}</span>
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-300 group-hover:text-gold" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="mt-4 block rounded-xl border border-gray-200 bg-gray-100 p-4 transition-colors hover:border-gold"
                      >
                        <p className="text-sm font-semibold text-[#081a42]">Not sure where to start?</p>
                        <p className="mt-1 text-xs text-gray-500">Talk to an expert about your specific requirement.</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-gold-dark">
                          Get in touch <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="px-3 py-2 text-sm text-gray-700 hover:text-black">Insights</Link>

            {/* ABOUT */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("about")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "about" ? null : "about")}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black"
                aria-haspopup="true"
                aria-expanded={activeMenu === "about"}
              >
                About <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>

              {activeMenu === "about" && (
                <div
                  className="absolute right-0 top-full z-50 w-[220px] pt-2"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl py-2">
                    {aboutLinks.map((item) => (
                      <Link key={item.label} href={item.href} className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#081a42]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:block"><Button asChild><Link href="/contact">Get Started</Link></Button></div>
          <button type="button" onClick={() => setIsOpen((v) => !v)} className="rounded-md p-2 hover:bg-gray-100 lg:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="absolute left-0 top-16 h-[calc(100dvh-4rem)] w-full overflow-y-auto border-t bg-white px-5 py-6 shadow-lg sm:top-20 sm:h-[calc(100dvh-5rem)]">
            <MobileGroup label="Doing Business in India" open={mobileMenu === "dbi"} onToggle={() => setMobileMenu(mobileMenu === "dbi" ? null : "dbi")}>
              <Link href="/doing-business-in-india" onClick={closeMobile} className="mb-2 block text-sm font-semibold text-gold-dark">
                Doing Business in India — Overview
              </Link>
              {dbiColumns.map((col) => {
                const subOpen = mobileDbiSub === col.heading
                return (
                  <div key={col.heading} className="border-t first:border-t-0">
                    <button
                      type="button"
                      onClick={() => setMobileDbiSub(subOpen ? null : col.heading)}
                      className="flex w-full items-center justify-between py-2.5 text-left text-sm font-semibold text-gray-800"
                      aria-expanded={subOpen}
                    >
                      {col.heading}
                      <ChevronDown className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${subOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    {subOpen && (
                      <div className="pb-2">
                        {col.items.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-1.5 pl-2 text-sm text-gray-600">{item.label}</Link>)}
                      </div>
                    )}
                  </div>
                )
              })}
              <Link href="/contact" onClick={closeMobile} className="mt-4 block rounded-xl p-4" style={{ backgroundColor: "#081a42" }}>
                <span className="block text-sm font-semibold text-white">Not sure which entity type fits?</span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-yellow-400">Talk to an expert <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
              </Link>
            </MobileGroup>

            <MobileGroup label="Services" open={mobileMenu === "services"} onToggle={() => setMobileMenu(mobileMenu === "services" ? null : "services")}>
              <Link href="/services" onClick={closeMobile} className="block py-2 text-sm font-semibold text-gold-dark">All Services</Link>
              {coreServiceLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeMobile} className="flex items-start gap-3 py-2">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#081a42]" aria-hidden="true" />
                  <span>
                    <span className="block text-sm">{item.label}</span>
                    <span className="block text-xs text-gray-500">{item.desc}</span>
                  </span>
                </Link>
              ))}
              <p className="pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Specialist / Industry-Specific</p>
              {specialistServiceLinks.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
              <Link href="/contact" onClick={closeMobile} className="mt-4 block rounded-xl p-4" style={{ backgroundColor: "#081a42" }}>
                <span className="block text-sm font-semibold text-white">Not sure where to start?</span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-yellow-400">Talk to an expert <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
              </Link>
            </MobileGroup>

            <Link href="/blog" onClick={closeMobile} className="block border-b py-4 text-base font-semibold">Insights</Link>

            <MobileGroup label="About" open={mobileMenu === "about"} onToggle={() => setMobileMenu(mobileMenu === "about" ? null : "about")}>
              {aboutLinks.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
            </MobileGroup>

            <Button asChild className="mt-6 w-full"><Link href="/contact" onClick={closeMobile}>Get Started</Link></Button>
          </div>
        )}
      </nav>

      <a
        href="https://wa.me/919999010513"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AU Corporate on WhatsApp"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon size={30} />
      </a>
    </header>
  )
}

function MobileGroup({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="mb-4 border-b pb-4">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between py-2 text-base font-semibold" aria-expanded={open}>{label}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
      {open && <div className="ml-3 mt-3 border-l pl-3 text-gray-700">{children}</div>}
    </div>
  )
}
