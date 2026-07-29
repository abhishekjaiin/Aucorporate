"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  MapPin,
  Send
} from "lucide-react"

type FormState = {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

const GOLD = "#FFD700"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "partner@theaucorp.com",
    href: "mailto:partner@theaucorp.com",
  },
  {
    icon: MapPin,
title: "Visit Us",
description: "Our main office",
value: "New Delhi",
  },
]

const offices = [
  {
    region: "India (HQ)",
city: "New Delhi",
address: "New Delhi",
  },
] 

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmitError(data.error || "Failed to send message. Please try again.")
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      setSubmitSuccess(true)

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      })

      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitError("An error occurred. Please try again later.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">
          Contact <span style={{ color: GOLD }}>AU Corporate</span>
        </h1>
        <p className="text-gray-500 mt-3">
          We’re here to help your business grow globally.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {contactInfo.map((info, index) => {
            const Icon = info.icon

            return (
              <a
                key={index}
                href={info.href}
                className="p-6 bg-white border rounded-xl hover:shadow-md transition block"
              >
                <Icon className="h-6 w-6 mb-3" style={{ color: GOLD }} />
                <h3 className="font-semibold">{info.title}</h3>
                <p className="text-sm text-gray-500">{info.description}</p>
                <p className="text-sm font-medium mt-2">{info.value}</p>
              </a>
            )
          })}

        </div>
      </section>

      {/* FORM + OFFICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {submitSuccess && (
              <div className="p-3 bg-green-100 text-green-700 rounded-lg border border-green-300">
                <strong>Success!</strong> Your inquiry has been sent. We will respond within 24 hours.
              </div>
            )}

            {submitError && (
              <div className="p-3 bg-red-100 text-red-700 rounded-lg border border-red-300">
                <strong>Error:</strong> {submitError}
              </div>
            )}

            <Input name="name" placeholder="Full Name *" value={formData.name} onChange={handleInputChange} required />
            <Input name="email" placeholder="Email *" type="email" value={formData.email} onChange={handleInputChange} required />
            <Input name="company" placeholder="Company Name" value={formData.company} onChange={handleInputChange} />
            <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />

            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select a Service (Optional)</option>
              <option value="India Entry">India Entry Services</option>
              <option value="Business Setup">Business Setup</option>
              <option value="Tax Advisory">Tax Advisory</option>
              <option value="Accounting">Accounting Services</option>
              <option value="Payroll">Payroll Services</option>
              <option value="HR Outsourcing">HR Outsourcing</option>
              <option value="Compliance">Compliance Services</option>
              <option value="Other">Other</option>
            </select>

            <Textarea name="message" placeholder="Your Message *" value={formData.message} onChange={handleInputChange} required />

            <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500" disabled={isSubmitting}>
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

          </form>

          {/* OFFICES */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>

            <div className="space-y-4">
              {offices.map((o, index) => (
                <div key={index} className="p-4 border rounded-xl">
                  <h3 className="font-semibold">{o.region}</h3>
                  <p style={{ color: GOLD }} className="text-sm">{o.city}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-gray-50">

        <h2 className="text-3xl font-bold mb-6">
          Need Immediate Assistance?
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="mailto:partner@theaucorp.com"
            className="bg-yellow-400 text-black px-6 py-3 rounded-md inline-flex items-center justify-center"
          >
            Email Us
          </a>

        </div>

      </section>

    </div>
  )
}
