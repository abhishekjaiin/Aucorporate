import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { InquiryForm } from "@/components/InquiryForm"
import { FaqAccordion } from "@/components/FaqAccordion"
import {
  Mail,
  MapPin,
  Calendar,
  Phone,
} from "lucide-react"

const GOLD = "#facc15"

const contactInfo = [
  {
    icon: Calendar,
    title: "Book a Call",
    description: "Schedule a 30-minute consultation directly",
    value: "Pick a time that works for you",
    href: "https://cal.com/abhishek-jaiin-ybbklq/30min",
    external: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "partner@theaucorp.com",
    href: "mailto:partner@theaucorp.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team directly",
    value: "+91-9999010513",
    href: "tel:+919999010513",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "New Delhi (HQ) & Gurugram",
    value: "See office addresses",
    href: "#offices",
  },
]

const offices = [
  {
    region: "India (HQ)",
    city: "New Delhi",
    address: "408 Surya Kiran Building, 19 KG Marg, New Delhi, Delhi 110001",
  },
  {
    region: "India (Satellite)",
    city: "Gurugram",
    address: "Gurugram, Haryana — by appointment",
  },
]

const faqs = [
  {
    q: "How quickly will I hear back?",
    a: "Our team typically responds to email and form enquiries within 24 hours on business days. If you'd rather talk sooner, use the Book a Call link above to pick a slot directly.",
  },
  {
    q: "Is the initial consultation free?",
    a: "Yes — the 30-minute call is a no-obligation conversation to understand what you're trying to do and point you toward the right next step, whether that's incorporation, compliance, or ongoing advisory support.",
  },
  {
    q: "I'm not based in India — can we still schedule a call?",
    a: "Yes. We regularly work with clients across the US, UK, Singapore, Australia, Germany, Japan and the UAE, and can schedule around your time zone — just note your preferred time when you book or in your message.",
  },
  {
    q: "What should I include in my enquiry?",
    a: "A short note on what you're looking to do — for example, incorporating a subsidiary, FEMA/RBI compliance support, or setting up a GCC — and roughly what stage you're at helps us route you to the right specialist faster.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">

      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "Contact" }]} />
      </div>

      {/* HERO */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold">
          Contact <span style={{ color: "var(--gold-dark)" }}>AU Corporate</span>
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Whether you're incorporating in India for the first time or need ongoing compliance and advisory support, tell us what you're working on and we'll point you to the right next step.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const content = (
              <>
                <Icon className="h-6 w-6 mb-3 text-gold" />
                <h2 className="font-semibold">{info.title}</h2>
                <p className="text-sm text-gray-500">{info.description}</p>
                <p className="text-sm font-medium mt-2">{info.value}</p>
              </>
            )

            return info.href ? (
              <a
                key={index}
                href={info.href}
                target={info.external ? "_blank" : undefined}
                rel={info.external ? "noopener noreferrer" : undefined}
                className="p-6 bg-white border rounded-xl hover:shadow-md transition block"
              >
                {content}
              </a>
            ) : (
              <div key={index} className="p-6 bg-white border rounded-xl">
                {content}
              </div>
            )
          })}

        </div>
      </section>

      {/* FORM + OFFICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <div id="inquiry-form" className="scroll-mt-24">
            <InquiryForm />
          </div>

          {/* OFFICES */}
          <div id="offices" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>

            <div className="space-y-4">
              {offices.map((o, index) => (
                <div key={index} className="p-4 border rounded-xl">
                  <h3 className="font-semibold">{o.region}</h3>
                  <p className="text-sm text-gray-600">{o.address}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-dark text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold mt-4">Common Questions</h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-gray-100">

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

          <a
            href="tel:+919999010513"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md inline-flex items-center justify-center hover:border-yellow-400 transition"
          >
            Call +91-9999010513
          </a>

        </div>

        <p className="text-gray-500 text-sm mt-8">
          Not sure where to start? See our{" "}
          <Link href="/services" className="text-gold-dark font-semibold hover:underline">
            full range of services
          </Link>{" "}
          or the{" "}
          <Link href="/india-business-setup" className="text-gold-dark font-semibold hover:underline">
            India business setup guide
          </Link>.
        </p>

      </section>

    </div>
  )
}
