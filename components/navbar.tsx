"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react"

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex h-16 sm:h-20 items-center justify-between">
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
              <span className="text-lg sm:text-2xl font-bold text-gold">AU Corporate</span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#081a42]">Growing Together</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <div
              className="relative group"
              onMouseLeave={() => {
                setActiveMenu(null)
                setActiveSubMenu(null)
              }}
              onMouseEnter={() => {
                setActiveMenu("services")
                setActiveSubMenu(null)
              }}
            >
              <button className="px-3 py-2 text-sm text-gray-700 hover:text-black flex items-center gap-1 transition" aria-haspopup="true">
                Services
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>

              {activeMenu === "services" && (
                <div className="absolute top-full left-0 mt-0 w-[min(560px,calc(100vw-2rem))] bg-white border shadow-2xl rounded-2xl flex overflow-hidden z-50">
                  <div className="w-1/2 bg-gray-50 border-r py-2">
                    {mainServices.map((service) => (
                      <div
                        key={service.label}
                        onMouseEnter={() => service.key && setActiveSubMenu(service.key)}
                        className="group flex justify-between items-center px-5 py-3 text-sm hover:bg-white transition cursor-pointer"
                      >
                        {service.href ? (
                          <Link href={service.href} className="w-full flex items-center justify-between">
                            <span>{service.label}</span>
                          </Link>
                        ) : (
                          <>
                            <span>{service.label}</span>
                            <ChevronRight className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition" aria-hidden="true" />
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="w-1/2 p-5 bg-white min-h-[240px]">
                    {!activeSubMenu && <div className="text-sm text-gray-400">Select a category</div>}
                    {activeSubMenu === "risk" && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-[#081a42]">Risk Management Services</h3>
                        {riskSubServices.map((item) => (
                          <Link key={item.label} href={item.href} className="block text-sm text-gray-700 hover:text-black hover:translate-x-1 transition">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    {activeSubMenu === "tax" && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-[#081a42]">Taxation & Regulatory Services</h3>
                        {taxSubServices.map((item) => (
                          <Link key={item.label} href={item.href} className="block text-sm text-gray-700 hover:text-black hover:translate-x-1 transition">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseLeave={() => {
                setActiveMenu(null)
                setActiveSubMenu(null)
              }}
              onMouseEnter={() => {
                setActiveMenu("india")
                setActiveSubMenu(null)
              }}
            >
              <button className="px-3 py-2 text-sm text-gray-700 hover:text-black flex items-center gap-1 transition" aria-haspopup="true">
                Doing Business in India
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>

              {activeMenu === "india" && (
                <div className="absolute top-full left-0 mt-0 flex z-50">
                  <div className="w-[290px] bg-white border shadow-2xl rounded-l-2xl overflow-hidden">
                    <div className="py-2">
                      <Link href="/doing-business-in-india/why-india" className="block px-5 py-3 text-sm hover:bg-gray-50 transition">Why India</Link>
                      <Link href="/doing-business-in-india/entry-process" className="block px-5 py-3 text-sm hover:bg-gray-50 transition">Entry Process</Link>
                      <div
                        onMouseEnter={() => setActiveSubMenu("incorporation")}
                        className="group flex justify-between items-center px-5 py-3 text-sm hover:bg-gray-50 cursor-pointer transition"
                      >
                        <span>Incorporation</span>
                        <ChevronRight className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {activeSubMenu === "incorporation" && (
                    <div className="w-[280px] bg-white border-y border-r shadow-2xl rounded-r-2xl overflow-hidden" onMouseEnter={() => setActiveSubMenu("incorporation")}>
                      <div className="px-5 py-4 border-b bg-gray-50">
                        <h3 className="text-sm font-semibold text-[#081a42]">Incorporation Services</h3>
                        <p className="text-xs text-gray-500 mt-1">End-to-end India business setup assistance</p>
                      </div>
                      <div className="py-2">
                        <Link href="/doing-business-in-india/pre-incorporation" className="block px-5 py-3 text-sm hover:bg-gray-50 transition">Pre-Incorporation</Link>
                        <Link href="/doing-business-in-india/incorporation" className="block px-5 py-3 text-sm hover:bg-gray-50 transition">Incorporation</Link>
                        <Link href="/doing-business-in-india/post-incorporation" className="block px-5 py-3 text-sm hover:bg-gray-50 transition">Post-Incorporation</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="px-3 py-2 text-sm text-gray-700 hover:text-black transition">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-50"
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
            className="lg:hidden absolute left-0 top-16 sm:top-20 w-full max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white border-t shadow-lg px-5 py-6"
          >
            <div className="mb-4">
              <button
                onClick={() => setMobileMenu(mobileMenu === "services" ? null : "services")}
                className="w-full flex justify-between items-center text-base font-semibold py-2"
                aria-expanded={mobileMenu === "services"}
              >
                Services
                <span aria-hidden="true">{mobileMenu === "services" ? "−" : "+"}</span>
              </button>

              {mobileMenu === "services" && (
                <div className="mt-3 ml-3 pl-3 border-l space-y-3 text-sm text-gray-700">
                  {mainServices.map((service) => (
                    <div key={service.label}>
                      {service.href && <Link href={service.href} onClick={() => setIsOpen(false)} className="block py-1">{service.label}</Link>}
                      {service.key && (
                        <>
                          <button
                            onClick={() => setMobileSubMenu(mobileSubMenu === service.key ? null : service.key)}
                            className="w-full flex justify-between items-center py-1"
                            aria-expanded={mobileSubMenu === service.key}
                          >
                            {service.label}
                            <span aria-hidden="true">{mobileSubMenu === service.key ? "−" : "+"}</span>
                          </button>
                          {mobileSubMenu === service.key && (
                            <div className="mt-2 ml-3 pl-3 border-l space-y-2">
                              {service.key === "risk" && riskSubServices.map((item) => <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="block py-1">{item.label}</Link>)}
                              {service.key === "tax" && taxSubServices.map((item) => <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="block py-1">{item.label}</Link>)}
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
              <button
                onClick={() => setMobileMenu(mobileMenu === "india" ? null : "india")}
                className="w-full flex justify-between items-center text-base font-semibold py-2"
                aria-expanded={mobileMenu === "india"}
              >
                Doing Business in India
                <span aria-hidden="true">{mobileMenu === "india" ? "−" : "+"}</span>
              </button>

              {mobileMenu === "india" && (
                <div className="mt-3 ml-3 pl-3 border-l space-y-3 text-sm text-gray-700">
                  <Link href="/doing-business-in-india/why-india" onClick={() => setIsOpen(false)} className="block py-1">Why India</Link>
                  <Link href="/doing-business-in-india/entry-process" onClick={() => setIsOpen(false)} className="block py-1">Entry Process</Link>
                  <div>
                    <button
                      onClick={() => setMobileSubMenu(mobileSubMenu === "incorporation" ? null : "incorporation")}
                      className="w-full flex justify-between items-center py-1"
                      aria-expanded={mobileSubMenu === "incorporation"}
                    >
                      Incorporation
                      <span aria-hidden="true">{mobileSubMenu === "incorporation" ? "−" : "+"}</span>
                    </button>
                    {mobileSubMenu === "incorporation" && (
                      <div className="mt-2 ml-3 pl-3 border-l space-y-2">
                        <Link href="/doing-business-in-india/pre-incorporation" onClick={() => setIsOpen(false)} className="block py-1">Pre-Incorporation</Link>
                        <Link href="/doing-business-in-india/incorporation" onClick={() => setIsOpen(false)} className="block py-1">Incorporation</Link>
                        <Link href="/doing-business-in-india/post-incorporation" onClick={() => setIsOpen(false)} className="block py-1">Post-Incorporation</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t pt-4 space-y-3">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="block text-sm py-1">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      <a
        href="https://wa.me/919999010513"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AU Corporate on WhatsApp"
        className="fixed right-5 bottom-5 z-[60] w-14 h-14 shadow-lg hover:scale-105 transition-transform"
      >
        <Image src="/whatsapp-icon.png" alt="Chat on WhatsApp" width={56} height={56} className="w-full h-full rounded-2xl" />
      </a>
    </header>
  )
}
