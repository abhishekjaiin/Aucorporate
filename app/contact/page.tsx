import { Web3Form } from "@/components/Web3Form"
import {
  Mail,
  MapPin,
} from "lucide-react"

const GOLD = "#facc15"

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
  {
    region: "India",
    city: "Gurugram",
    address: "Gurugram",
  },
]

export default function ContactPage() {
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
            const content = (
              <>
                <Icon className="h-6 w-6 mb-3" style={{ color: GOLD }} />
                <h2 className="font-semibold">{info.title}</h2>
                <p className="text-sm text-gray-500">{info.description}</p>
                <p className="text-sm font-medium mt-2">{info.value}</p>
              </>
            )

            return info.href ? (
              <a
                key={index}
                href={info.href}
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
          <div>
            <Web3Form />
          </div>

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
