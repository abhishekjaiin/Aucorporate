import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Service | AU Corporate",
  },
  description:
    "Terms of Service governing your use of theaucorp.com and engagement with AU Corporate's advisory services.",
  alternates: {
    canonical: "https://www.theaucorp.com/terms",
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: July 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing or using theaucorp.com (the &quot;Website&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Use of the Website</h2>
            <p className="text-gray-700">
              The content on this Website is provided for general informational purposes about AU Corporate&apos;s services and does not constitute professional, legal, tax, or financial advice. You should not rely on Website content as a substitute for engaging us or another qualified advisor for advice specific to your situation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. No Client Relationship</h2>
            <p className="text-gray-700">
              Browsing this Website or submitting a general inquiry does not, by itself, create a client relationship or an advisor-client relationship with AU Corporate. A formal engagement begins only once both parties agree to specific terms of service for that engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this Website — including text, graphics, logos, and design — is the property of AU Corporate or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our written permission.
            </p>
            <p className="text-gray-700 mt-3">
              &ldquo;AU Corporate&reg;&rdquo; is a registered trademark. Use of this name, or any confusingly similar name, by any other person or entity in connection with business advisory, incorporation, taxation, or related services is not authorized by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Third-Party Links</h2>
            <p className="text-gray-700">
              This Website may contain links to third-party websites. We are not responsible for the content or practices of any linked third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, AU Corporate shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">7. Governing Law</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of India, and any disputes arising from your use of this Website will be subject to the exclusive jurisdiction of the courts in New Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">8. Changes to These Terms</h2>
            <p className="text-gray-700">
              We may update these Terms from time to time. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">9. Contact Us</h2>
            <p className="text-gray-700">
              Questions about these Terms can be directed to{" "}
              <a href="mailto:partner@theaucorp.com" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                partner@theaucorp.com
              </a>{" "}
              or via our{" "}
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
