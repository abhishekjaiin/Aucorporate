"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Arbitration Services", href: "/arbitration-services" },
  { label: "HR Services", href: "/hr-services" },
  { label: "Global Support", href: "/outsourcing" },
  { label: "About", href: "/about" },
  { label: "Career", href: "/career" },
]

const mainServices = [
  { label: "Risk Management Services", key: "risk" },
  { label: "Accounting & Assurance", href: "/services/accounting-assurance" },
  { label: "Taxation & Regulatory Services", key: "tax" },
  { label: "Transaction Advisory Services", href: "/services/transaction-advisory" },
]

const riskSubServices = [
  { label: "Risk Management", href: "/services/risk-management" },
  { label: "Forensic Services", href: "/services/risk-management" },
  { label: "Special Audit / Review", href: "/services/risk-management" },
]

const taxSubServices = [
  { label: "Direct Taxation", href: "/services/taxation-regulatory" },
  { label: "Goods & Service Tax", href: "/services/taxation-regulatory" },
  { label: "Regulatory Services", href: "/services/taxation-regulatory" },
  { label: "Secretarial & Legal", href: "/services/taxation-regulatory" },
]

const indiaLinks = [
  { label: "Why India", href: "/doing-business-in-india/why-india" },
  { label: "Entry Process", href: "/doing-business-in-india/entry-process" },
  { label: "Pre-Incorporation", href: "/doing-business-in-india/pre-incorporation" },
  { label: "Incorporation", href: "/doing-business-in-india/incorporation" },
  { label: "Post-Incorporation", href: "/doing-business-in-india/post-incorporation" },
]

const indiaSetupLinks = [
  { label: "Company Formation", href: "/india-business-setup/company-formation" },
  { label: "FDI Channels", href: "/india-business-setup/fdi-channels" },
  { label: "Regulatory Compliance", href: "/india-business-setup/regulatory-compliance" },
  { label: "Banking & Taxation", href: "/india-business-setup/banking-taxation" },
  { label: "Timeline & Resources", href: "/india-business-setup/timeline-resources" },
]

const countryLinks = [
  { label: "USA", href: "/india-entry-for-us-companies" },
  { label: "UK", href: "/india-entry-for-uk-companies" },
  { label: "Japan", href: "/india-entry-for-japan-companies" },
  { label: "Germany", href: "/india-entry-for-german-companies" },
  { label: "Singapore", href: "/india-entry-for-singapore-companies" },
  { label: "Australia", href: "/india-entry-for-australian-companies" },
  { label: "China", href: "/india-entry-for-china-companies" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenu, setMobileMenu] = useState<string | null>(null)

  const closeMobile = () => {
    setIsOpen(false)
    setMobileMenu(null)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-2" aria-label="AU Corporate home">
            <Image src="https://user8396.na.imgto.link/public/20260417/au.avif" alt="AU Corporate Logo" width={42} height={42} priority sizes="42px" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gold sm:text-2xl">AU Corporate</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#081a42] sm:text-[10px]">Growing Together</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <div className="relative" onMouseEnter={() => setActiveMenu("services")} onMouseLeave={() => setActiveMenu(null)}>
              <button type="button" onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")} className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black" aria-haspopup="true" aria-expanded={activeMenu === "services"}>
                Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {activeMenu === "services" && (
                <div className="absolute left-0 top-full z-50 w-[560px] pt-2">
                  <div className="flex overflow-hidden rounded-2xl border bg-white shadow-2xl">
                    <div className="w-1/2 border-r bg-gray-50 py-2">
                      {mainServices.map((service) => (
                        <div key={service.label} className="px-5 py-3 text-sm hover:bg-white">
                          {service.href ? <Link href={service.href}>{service.label}</Link> : <span>{service.label}</span>}
                        </div>
                      ))}
                    </div>
                    <div className="w-1/2 p-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Explore services</p>
                      <div className="space-y-3">
                        {[...riskSubServices, ...taxSubServices].map((item) => <Link key={item.label} href={item.href} className="block text-sm text-gray-700 hover:text-black">{item.label}</Link>)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setActiveMenu("india")} onMouseLeave={() => setActiveMenu(null)}>
              <button type="button" onClick={() => setActiveMenu(activeMenu === "india" ? null : "india")} className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black" aria-haspopup="true" aria-expanded={activeMenu === "india"}>
                Doing Business in India <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {activeMenu === "india" && (
                <div className="absolute left-0 top-full z-50 w-[760px] pt-2">
                  <div className="grid grid-cols-3 gap-0 overflow-hidden rounded-2xl border bg-white p-5 shadow-2xl">
                    <div className="border-r pr-5">
                      <h3 className="mb-3 text-sm font-semibold text-[#081a42]">India Entry</h3>
                      {indiaLinks.map((item) => <Link key={item.label} href={item.href} className="block py-2 text-sm text-gray-700 hover:text-gold">{item.label}</Link>)}
                    </div>
                    <div className="border-r px-5">
                      <h3 className="mb-3 text-sm font-semibold text-[#081a42]">Business Setup</h3>
                      {indiaSetupLinks.map((item) => <Link key={item.label} href={item.href} className="block py-2 text-sm text-gray-700 hover:text-gold">{item.label}</Link>)}
                    </div>
                    <div className="pl-5">
                      <h3 className="mb-3 text-sm font-semibold text-[#081a42]">By Country</h3>
                      <div className="grid grid-cols-2 gap-x-4">{countryLinks.map((item) => <Link key={item.label} href={item.href} className="block py-2 text-sm text-gray-700 hover:text-gold">{item.label}</Link>)}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => <Link key={link.label} href={link.href} className="px-3 py-2 text-sm text-gray-700 hover:text-black">{link.label}</Link>)}
          </div>

          <div className="hidden lg:block"><Button asChild><Link href="/contact">Get Started</Link></Button></div>
          <button type="button" onClick={() => setIsOpen((v) => !v)} className="rounded-md p-2 hover:bg-gray-50 lg:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="absolute left-0 top-16 max-h-[calc(100dvh-4rem)] w-full overflow-y-auto border-t bg-white px-5 py-6 shadow-lg sm:top-20 sm:max-h-[calc(100dvh-5rem)]">
            <MobileGroup label="Services" open={mobileMenu === "services"} onToggle={() => setMobileMenu(mobileMenu === "services" ? null : "services")}>
              {[...mainServices.filter((x) => x.href), ...riskSubServices, ...taxSubServices].map((item) => <Link key={item.label} href={item.href!} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
            </MobileGroup>
            <MobileGroup label="Doing Business in India" open={mobileMenu === "india"} onToggle={() => setMobileMenu(mobileMenu === "india" ? null : "india")}>
              <p className="pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">India Entry</p>
              {indiaLinks.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
              <p className="pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Business Setup</p>
              {indiaSetupLinks.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
              <p className="pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">By Country</p>
              {countryLinks.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
            </MobileGroup>
            <div className="space-y-3 border-t pt-4">{navLinks.map((link) => <Link key={link.label} href={link.href} onClick={closeMobile} className="block py-1 text-sm">{link.label}</Link>)}</div>
            <Button asChild className="mt-6 w-full"><Link href="/contact" onClick={closeMobile}>Get Started</Link></Button>
          </div>
        )}
      </nav>

      <a href="https://wa.me/919999010513" target="_blank" rel="noopener noreferrer" aria-label="Chat with AU Corporate on WhatsApp" className="fixed bottom-5 right-5 z-[60] h-14 w-14 shadow-lg transition-transform hover:scale-105">
        <Image src="/whatsapp-icon.png" alt="Chat on WhatsApp" width={56} height={56} sizes="56px" className="h-full w-full rounded-2xl" />
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
