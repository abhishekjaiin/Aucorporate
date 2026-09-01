"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { getStoredAttribution } from "@/lib/attribution"

const WEB3FORMS_ACCESS_KEY = "7f7b220d-2540-451d-88ba-6b6f878ec151"

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"

export function Web3Form() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")

    const form = event.currentTarget
    const formData = new FormData(form)
    for (const [key, value] of Object.entries(getStoredAttribution())) {
      if (value) formData.set(key, value)
    }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      const result = await res.json()
      if (result.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-8 text-center">
        <CheckCircle2 className="mb-3 h-10 w-10 text-green-600" />
        <p className="text-lg font-semibold text-[#081a42]">Thanks — we&apos;ve got your message.</p>
        <p className="mt-1 text-sm text-gray-600">Our team will get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Name*</label>
          <input id="name" type="text" name="name" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email*</label>
          <input id="email" type="email" name="email" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
          <input id="phone" type="tel" name="phone" className={inputClass} />
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">Company</label>
          <input id="company" type="text" name="company" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="country" className="mb-1 block text-sm font-medium text-gray-700">Country</label>
        <input id="country" type="text" name="country" placeholder="e.g. Australia, Japan, USA" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">Message*</label>
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  )
}
