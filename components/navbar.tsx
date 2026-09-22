"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
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

// ── Services — flat list matching the /services hub's own 8 categories ─────
const coreServiceLinks = [
  { label: "Taxation & Regulatory Services", href: "/services/taxation-regulatory" },
  { label: "Accounting & Assurance", href: "/services/accounting-assurance" },
  { label: "Risk Management", href: "/services/risk-management" },
  { label: "Transaction Advisory Services", href: "/services/transaction-advisory" },
  { label: "HR & Payroll Solutions", href: "/hr-services" },
  { label: "Arbitration & Dispute Resolution", href: "/arbitration-services" },
  { label: "Training & Workshops", href: "/services/training-workshops" },
  { label: "Global Support Services (Outsourcing)", href: "/outsourcing" },
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

  const closeMobile = () => {
    setIsOpen(false)
    setMobileMenu(null)
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
              <span className="text-lg font-bold text-gold sm:text-2xl">AU Corporate</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#081a42] sm:text-[10px]">Growing Together</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {/* DOING BUSINESS IN INDIA — mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("dbi")}
              onMouseLeave={() => setActiveMenu(null)}
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
                <div className="absolute left-1/2 top-full z-50 w-[min(960px,90vw)] -translate-x-1/3 pt-2">
                  <div className="overflow-hidden rounded-2xl border bg-white shadow-2xl">
                    <div className="grid grid-cols-4 gap-0 p-6">
                      {dbiColumns.map((col, i) => (
                        <div key={col.heading} className={i > 0 ? "border-l pl-5 ml-5" : ""}>
                          <h3 className="mb-3 text-sm font-semibold text-[#081a42]">{col.heading}</h3>
                          {col.hub && (
                            <Link href={col.hub.href} className="mb-2 block text-xs font-semibold text-gold hover:underline">
                              {col.hub.label} →
                            </Link>
                          )}
                          <div className="space-y-0.5">
                            {col.items.map((item) => (
                              <Link key={item.label} href={item.href} className="block py-1.5 text-sm leading-snug text-gray-700 hover:text-gold">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
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
                <div className="absolute left-0 top-full z-50 w-[340px] pt-2">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl py-3">
                    <Link href="/services" className="flex items-center justify-between px-5 py-2.5 text-sm font-semibold text-[#081a42] hover:bg-gray-50">
                      All Services <ChevronRight className="h-4 w-4 text-gold" aria-hidden="true" />
                    </Link>
                    <div className="my-1 border-t" />
                    {coreServiceLinks.map((item) => (
                      <Link key={item.label} href={item.href} className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#081a42]">
                        <span>{item.label}</span>
                        <ChevronRight className="h-4 w-4 text-gray-300" aria-hidden="true" />
                      </Link>
                    ))}
                    <p className="px-5 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Specialist / Industry-Specific</p>
                    {specialistServiceLinks.map((item) => (
                      <Link key={item.label} href={item.href} className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#081a42]">
                        <span>{item.label}</span>
                        <ChevronRight className="h-4 w-4 text-gray-300" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="px-3 py-2 text-sm text-gray-700 hover:text-black">Insights</Link>

            {/* ABOUT */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("about")}
              onMouseLeave={() => setActiveMenu(null)}
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
                <div className="absolute left-0 top-full z-50 w-[220px] pt-2">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl py-2">
                    {aboutLinks.map((item) => (
                      <Link key={item.label} href={item.href} className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#081a42]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:block"><Button asChild><Link href="/contact">Get Started</Link></Button></div>
          <button type="button" onClick={() => setIsOpen((v) => !v)} className="rounded-md p-2 hover:bg-gray-50 lg:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="absolute left-0 top-16 max-h-[calc(100dvh-4rem)] w-full overflow-y-auto border-t bg-white px-5 py-6 shadow-lg sm:top-20 sm:max-h-[calc(100dvh-5rem)]">
            <MobileGroup label="Doing Business in India" open={mobileMenu === "dbi"} onToggle={() => setMobileMenu(mobileMenu === "dbi" ? null : "dbi")}>
              {dbiColumns.map((col) => (
                <div key={col.heading}>
                  <p className="pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-gray-400 first:pt-1">{col.heading}</p>
                  {col.hub && <Link href={col.hub.href} onClick={closeMobile} className="block py-2 text-sm font-semibold text-gold">{col.hub.label}</Link>}
                  {col.items.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
                </div>
              ))}
            </MobileGroup>

            <MobileGroup label="Services" open={mobileMenu === "services"} onToggle={() => setMobileMenu(mobileMenu === "services" ? null : "services")}>
              <Link href="/services" onClick={closeMobile} className="block py-2 text-sm font-semibold text-gold">All Services</Link>
              {coreServiceLinks.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
              <p className="pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Specialist / Industry-Specific</p>
              {specialistServiceLinks.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
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
