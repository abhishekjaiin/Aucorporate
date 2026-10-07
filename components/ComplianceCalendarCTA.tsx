"use client"

import { useState } from "react"
import { CheckCircle2, X } from "lucide-react"

const CALENDAR_URL = "/compliance-calendar"
const ACCESS_KEY = "7f7b220d-2540-451d-88ba-6b6f878ec151"

export function ComplianceCalendarCTA() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(false)
    const form = event.currentTarget
    const data = new FormData(form)
    data.set("access_key", ACCESS_KEY)
    data.set("subject", "Compliance calendar")
    data.set("form_type", "Compliance calendar")
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      const result = await response.json()
      if (!result.success) throw new Error("Submission failed")
      setSubmitted(true)
      form.reset()
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className="mt-12 text-center">
        <button
          type="button"
          onClick={() => { setOpen(true); setSubmitted(false); setError(false) }}
          className="rounded-lg bg-[#FFD21F] px-6 py-3.5 text-sm font-bold text-[#0E1B4D] shadow-sm transition hover:bg-[#F2B705] hover:shadow-md"
        >
          Get your subsidiary&apos;s compliance calendar
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0E1B4D]/70 p-4" role="dialog" aria-modal="true" aria-labelledby="compliance-calendar-title">
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close compliance calendar form"
              className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="bg-[#0E1B4D] px-6 py-7 text-white sm:px-8">
              <p className="text-xs font-bold uppercase tracking-wider text-[#FFD21F]">AU Corporate</p>
              <h2 id="compliance-calendar-title" className="mt-2 font-heading text-2xl font-bold">
                Get your subsidiary&apos;s compliance calendar
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Share a few details and access a practical calendar covering recurring and event-based India subsidiary filings.
              </p>
            </div>

            {submitted ? (
              <div className="px-6 py-10 text-center sm:px-8">
                <CheckCircle2 className="mx-auto h-9 w-9 text-green-600" />
                <h3 className="mt-4 font-heading text-xl font-bold text-[#0E1B4D]">Thank you.</h3>
                <p className="mt-2 text-sm text-gray-600">Your request has been received. You can access the calendar below.</p>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-lg bg-[#FFD21F] px-5 py-3 text-sm font-bold text-[#0E1B4D]"
                >
                  Access the compliance calendar
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6 sm:px-8">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#243047]" htmlFor="calendar-name">Name*</label>
                  <input id="calendar-name" name="name" required className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none focus:border-[#0E1B4D] focus:ring-2 focus:ring-[#FFD21F]/40" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#243047]" htmlFor="calendar-email">Work email*</label>
                  <input id="calendar-email" type="email" name="email" required className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none focus:border-[#0E1B4D] focus:ring-2 focus:ring-[#FFD21F]/40" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#243047]" htmlFor="calendar-company">Company*</label>
                    <input id="calendar-company" name="company" required className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none focus:border-[#0E1B4D] focus:ring-2 focus:ring-[#FFD21F]/40" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[#243047]" htmlFor="calendar-country">Parent country*</label>
                    <input id="calendar-country" name="parent_country" required className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none focus:border-[#0E1B4D] focus:ring-2 focus:ring-[#FFD21F]/40" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#243047]" htmlFor="calendar-date">Incorporation date <span className="font-normal text-gray-500">(optional)</span></label>
                  <input id="calendar-date" type="date" name="incorporation_date" className="w-full rounded-lg border border-[#d6dce6] px-4 py-3 text-sm outline-none focus:border-[#0E1B4D] focus:ring-2 focus:ring-[#FFD21F]/40" />
                </div>
                <label className="flex items-start gap-3 text-sm text-gray-600">
                  <input type="checkbox" name="consent" required className="mt-1 accent-[#FFD21F]" />
                  <span>I agree to AU Corporate contacting me about the requested compliance calendar and related India compliance information.</span>
                </label>
                {error && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
                <button type="submit" disabled={submitting} className="w-full rounded-lg bg-[#FFD21F] px-6 py-3.5 text-sm font-bold text-[#0E1B4D] disabled:opacity-60">
                  {submitting ? "Sending…" : "Get the calendar"}
                </button>
                <p className="text-xs leading-5 text-gray-500">
                  The calendar is general information and should be reviewed against the subsidiary&apos;s specific facts and applicable rules.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
