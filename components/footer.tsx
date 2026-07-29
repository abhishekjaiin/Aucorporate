import Link from "next/link"
import { Linkedin, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Why India", href: "/doing-business-in-india" },
  { label: "Arbitration Services", href: "/arbitration-services" },
  { label: "HR Services", href: "/hr-services" },
  { label: "Global Support", href: "/outsourcing" },
]

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">

            <Link href="/" className="flex flex-col mb-4">
              <span className="text-xl sm:text-2xl font-bold tracking-wide text-yellow-400">
                AU Corporate
              </span>

              <span className="text-[10px] sm:text-[11px] text-[#081a42] tracking-[0.25em] uppercase font-medium">
                Growing Together
              </span>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Supporting global businesses in establishing and operating in India through expert compliance, taxation, accounting, payroll, and outsourcing solutions.
            </p>

            <div className="flex gap-6 mt-4">
              <a
                href="https://www.linkedin.com/company/a-u-corporate/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit AU Corporate LinkedIn Page"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-400 transition"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/aucorporate/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit AU Corporate Instagram Page"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-400 transition"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 text-sm sm:text-base">
              Quick Links
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-400 text-sm transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 text-sm sm:text-base">
              Company
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-400 text-sm transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 text-sm sm:text-base">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />

                <a
                  href="mailto:partner@theaucorp.com"
                  aria-label="Send Email to AU Corporate"
                  className="text-gray-600 hover:text-yellow-400 text-sm break-all"
                >
                  partner@theaucorp.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />

                <span className="text-gray-600 text-sm">
                  New Delhi, India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

            <p className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} AU Corporate. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">

              <Link
                href="/privacy"
                className="text-gray-500 hover:text-yellow-400 text-xs sm:text-sm transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-gray-500 hover:text-yellow-400 text-xs sm:text-sm transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}
