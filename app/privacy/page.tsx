import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | AU Corporate",
  },
  description:
    "AU Corporate's privacy policy — how we collect, use, and protect information from visitors and clients of our India entry and advisory services.",
  alternates: {
    canonical: "https://www.theaucorp.com/privacy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: July 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="text-gray-700">
              AU Corporate (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you share with us. This policy explains what information we collect through theaucorp.com, how we use it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
            <p className="text-gray-700 mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><strong>Contact information</strong> you provide through our contact forms, such as your name, email address, phone number, and company name.</li>
              <li><strong>Communications</strong> you send us directly, including inquiry details and any documents you choose to share.</li>
              <li><strong>Usage data</strong> collected automatically through standard web analytics — pages visited, time on site, referring pages, and general device/browser information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>To respond to inquiries and provide the services you request</li>
              <li>To communicate with you about your engagement with us</li>
              <li>To improve our website and understand how visitors use it</li>
              <li>To comply with applicable legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. How We Share Information</h2>
            <p className="text-gray-700">
              We do not sell your personal information. We may share information with service providers who help us operate our website and business operations (such as hosting and analytics providers), or when required by law or to protect our legal rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Cookies</h2>
            <p className="text-gray-700">
              Our website may use cookies and similar technologies to support basic functionality and analytics. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Data Security</h2>
            <p className="text-gray-700">
              We take reasonable measures to protect information you share with us, including as part of the client engagements we handle involving financial and regulatory data. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">7. Your Rights</h2>
            <p className="text-gray-700">
              Depending on your location, you may have rights to access, correct, or request deletion of your personal information. To exercise these rights, contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this policy from time to time. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:partner@theaucorp.com" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                partner@theaucorp.com
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                Contact page
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
