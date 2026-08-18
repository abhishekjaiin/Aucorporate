"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [mobileMenu, setMobileMenu] = useState<string | null>(null)
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null)

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

  const closeMobile = () => {
    setIsOpen(false)
    setMobileMenu(null)
    setMobileSubMenu(null)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-2" aria-label="AU Corporate home">
            <Image
              src="https://user8396.na.imgto.link/public/20260417/au.avif"
              alt="AU Corporate Logo"
              width={42}
              height={42}
              priority
              sizes="42px"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gold sm:text-2xl">AU Corporate</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#081a42] sm:text-[10px]">Growing Together</span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <div
              className="relative"
              onMouseLeave={() => { setActiveMenu(null); setActiveSubMenu(null) }}
              onMouseEnter={() => { setActiveMenu("services"); setActiveSubMenu(null) }}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 transition hover:text-black"
                aria-haspopup="true"
                aria-expanded={activeMenu === "services"}
              >
                Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {activeMenu === "services" && (
                <div className="absolute left-0 top-full z-50 flex w-[min(560px,calc(100vw-2rem))] overflow-hidden rounded-2xl border bg-white shadow-2xl">
                  <div className="w-1/2 border-r bg-gray-50 py-2">
                    {mainServices.map((service) => (
                      <div
                        key={service.label}
                        onMouseEnter={() => service.key && setActiveSubMenu(service.key)}
                        className="group flex cursor-pointer items-center justify-between px-5 py-3 text-sm transition hover:bg-white"
                      >
                        {service.href ? (
                          <Link href={service.href} className="flex w-full items-center justify-between">
                            <span>{service.label}</span>
                          </Link>
                        ) : (
                          <>
                            <span>{service.label}</span>
                            <ChevronRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-1" aria-hidden="true" />
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="min-h-[240px] w-1/2 bg-white p-5">
                    {!activeSubMenu && <div className="text-sm text-gray-400">Select a category</div>}
                    {activeSubMenu === "risk" && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-[#081a42]">Risk Management Services</h3>
                        {riskSubServices.map((item) => <Link key={item.label} href={item.href} className="block text-sm text-gray-700 transition hover:translate-x-1 hover:text-black">{item.label}</Link>)}
                      </div>
                    )}
                    {activeSubMenu === "tax" && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-[#081a42]">Taxation & Regulatory Services</h3>
                        {taxSubServices.map((item) => <Link key={item.label} href={item.href} className="block text-sm text-gray-700 transition hover:translate-x-1 hover:text-black">{item.label}</Link>)}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseLeave={() => { setActiveMenu(null); setActiveSubMenu(null) }}
              onMouseEnter={() => { setActiveMenu("india"); setActiveSubMenu(null) }}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 transition hover:text-black"
                aria-haspopup="true"
                aria-expanded={activeMenu === "india"}
              >
                Doing Business in India <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {activeMenu === "india" && (
                <div className="absolute left-0 top-full z-50 flex">
                  <div className="w-[290px] overflow-hidden rounded-l-2xl border bg-white shadow-2xl">
                    <div className="py-2">
                      <Link href="/doing-business-in-india/why-india" className="block px-5 py-3 text-sm transition hover:bg-gray-50">Why India</Link>
                      <Link href="/doing-business-in-india/entry-process" className="block px-5 py-3 text-sm transition hover:bg-gray-50">Entry Process</Link>
                      <div onMouseEnter={() => setActiveSubMenu("incorporation")} className="group flex cursor-pointer items-center justify-between px-5 py-3 text-sm transition hover:bg-gray-50">
                        <span>Incorporation</span>
                        <ChevronRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  {activeSubMenu === "incorporation" && (
                    <div className="w-[280px] overflow-hidden rounded-r-2xl border-y border-r bg-white shadow-2xl" onMouseEnter={() => setActiveSubMenu("incorporation")}>
                      <div className="border-b bg-gray-50 px-5 py-4">
                        <h3 className="text-sm font-semibold text-[#081a42]">Incorporation Services</h3>
                        <p className="mt-1 text-xs text-gray-500">End-to-end India business setup assistance</p>
                      </div>
                      <div className="py-2">
                        <Link href="/doing-business-in-india/pre-incorporation" className="block px-5 py-3 text-sm transition hover:bg-gray-50">Pre-Incorporation</Link>
                        <Link href="/doing-business-in-india/incorporation" className="block px-5 py-3 text-sm transition hover:bg-gray-50">Incorporation</Link>
                        <Link href="/doing-business-in-india/post-incorporation" className="block px-5 py-3 text-sm transition hover:bg-gray-50">Post-Incorporation</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {navLinks.map((link) => <Link key={link.label} href={link.href} className="px-3 py-2 text-sm text-gray-700 transition hover:text-black">{link.label}</Link>)}
          </div>

          <div className="hidden lg:block">
            <Button asChild><Link href="/contact">Get Started</Link></Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-md p-2 hover:bg-gray-50 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 top-16 max-h-[calc(100dvh-4rem)] w-full overflow-y-auto border-t bg-white px-5 py-6 shadow-lg sm:top-20 sm:max-h-[calc(100dvh-5rem)]"
          >
            <div className="mb-4">
              <button type="button" onClick={() => setMobileMenu(mobileMenu === "services" ? null : "services")} className="flex w-full items-center justify-between py-2 text-base font-semibold" aria-expanded={mobileMenu === "services"}>
                Services <span aria-hidden="true">{mobileMenu === "services" ? "−" : "+"}</span>
              </button>
              {mobileMenu === "services" && (
                <div className="ml-3 mt-3 space-y-3 border-l pl-3 text-sm text-gray-700">
                  {mainServices.map((service) => (
                    <div key={service.label}>
                      {service.href && <Link href={service.href} onClick={closeMobile} className="block py-1">{service.label}</Link>}
                      {service.key && (
                        <>
                          <button type="button" onClick={() => setMobileSubMenu(mobileSubMenu === service.key ? null : service.key)} className="flex w-full items-center justify-between py-1" aria-expanded={mobileSubMenu === service.key}>
                            {service.label} <span aria-hidden="true">{mobileSubMenu === service.key ? "−" : "+"}</span>
                          </button>
                          {mobileSubMenu === service.key && (
                            <div className="ml-3 mt-2 space-y-2 border-l pl-3">
                              {(service.key === "risk" ? riskSubServices : taxSubServices).map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-1">{item.label}</Link>)}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-4 border-t pt-4">
              <button type="button" onClick={() => setMobileMenu(mobileMenu === "india" ? null : "india")} className="flex w-full items-center justify-between py-2 text-base font-semibold" aria-expanded={mobileMenu === "india"}>
                Doing Business in India <span aria-hidden="true">{mobileMenu === "india" ? "−" : "+"}</span>
              </button>
              {mobileMenu === "india" && (
                <div className="ml-3 mt-3 space-y-3 border-l pl-3 text-sm text-gray-700">
                  <Link href="/doing-business-in-india/why-india" onClick={closeMobile} className="block py-1">Why India</Link>
                  <Link href="/doing-business-in-india/entry-process" onClick={closeMobile} className="block py-1">Entry Process</Link>
                  <button type="button" onClick={() => setMobileSubMenu(mobileSubMenu === "incorporation" ? null : "incorporation")} className="flex w-full items-center justify-between py-1" aria-expanded={mobileSubMenu === "incorporation"}>
                    Incorporation <span aria-hidden="true">{mobileSubMenu === "incorporation" ? "−" : "+"}</span>
                  </button>
                  {mobileSubMenu === "incorporation" && (
                    <div className="ml-3 space-y-2 border-l pl-3">
                      <Link href="/doing-business-in-india/pre-incorporation" onClick={closeMobile} className="block py-1">Pre-Incorporation</Link>
                      <Link href="/doing-business-in-india/incorporation" onClick={closeMobile} className="block py-1">Incorporation</Link>
                      <Link href="/doing-business-in-india/post-incorporation" onClick={closeMobile} className="block py-1">Post-Incorporation</Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3 border-t pt-4">
              {navLinks.map((link) => <Link key={link.label} href={link.href} onClick={closeMobile} className="block py-1 text-sm">{link.label}</Link>)}
            </div>

            <div className="mt-6">
              <Button asChild className="w-full"><Link href="/contact" onClick={closeMobile}>Get Started</Link></Button>
            </div>
          </div>
        )}
      </nav>

      <a
        href="https://wa.me/919999010513"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AU Corporate on WhatsApp"
        className="fixed bottom-5 right-5 z-[60] h-14 w-14 shadow-lg transition-transform hover:scale-105"
      >
        <Image src="/whatsapp-icon.png" alt="Chat on WhatsApp" width={56} height={56} sizes="56px" className="h-full w-full rounded-2xl" />
      </a>
    </header>
  )
}
