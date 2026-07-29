"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQAccordionProps {
  items?: FAQItem[]
  faqs?: FAQItem[]
  title?: string
}

export default function FAQAccordion({ items, faqs, title = "Frequently Asked Questions" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqItems = items || faqs || []

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-8 text-center">
            {title}
          </h2>
        )}

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
              >
                <h3 className="text-left font-semibold text-gray-900">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-700 border-t">
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
