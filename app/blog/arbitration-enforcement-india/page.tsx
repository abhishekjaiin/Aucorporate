import Image from "next/image"
import { Breadcrumb } from "@/components/Breadcrumb"
import { RelatedResources } from "@/components/RelatedResources"
import { BlogPostingSchema } from "@/components/BlogPostingSchema"
import { FaqAccordion } from "@/components/FaqAccordion"

export default function BlogPage() {
  const faqs = [
    {
      q: "What is the limitation period to enforce a domestic arbitral award in India?",
      a: "Once the 3-month window to challenge the award under Section 34(3) has lapsed (extendable by a further 30 days only on sufficient cause, and not beyond), or a Section 34 challenge has been dismissed, the award becomes enforceable as a decree under Section 36. Execution of that decree must then be initiated within 12 years, under Article 136 of the Limitation Act, 1963 — the same period that applies to executing any ordinary civil court decree.",
    },
    {
      q: "Does filing a Section 34 petition automatically stay enforcement of the award?",
      a: "No. Since the 2015 amendment, merely filing a Section 34 application to set aside a domestic award does not by itself stay enforcement under Section 36 — the award debtor must separately apply for, and be granted, a stay, which courts usually condition on depositing part or all of the awarded amount. The 2021 amendment added one exception in the award debtor's favour: under the second proviso to Section 36(3), a court can grant an unconditional stay if a prima facie case is made out that the arbitration agreement or the making of the award was induced by fraud or corruption.",
    },
    {
      q: "Can an Indian court modify an arbitral award instead of setting it aside?",
      a: "Within limits, yes. In Gayatri Balasamy v. ISG Novasoft Technologies Ltd. (2025 INSC 605), a five-judge Constitution Bench held, by a 4:1 majority, that a Section 34 court has a limited power to modify an award — severing an invalid portion from a valid one, correcting clerical, computational or typographical errors, adjusting post-award interest, and, in rare cases, invoking Article 142 of the Constitution to do complete justice. The ruling does not permit re-examining the award on its merits.",
    },
    {
      q: "How is a foreign arbitral award enforced in India?",
      a: "A foreign award — made in a country the Indian government has notified as a reciprocating territory under the New York Convention — is enforced under Part II (Sections 44-52) of the Arbitration and Conciliation Act, 1996. There is no Section 34-style challenge; instead, the award-holder applies directly to the jurisdictional High Court under Sections 47-49, and the court examines only the narrow refusal grounds set out in Section 48 before treating the award as a decree of that court.",
    },
    {
      q: "On what grounds can enforcement of a foreign award be refused under Section 48?",
      a: "Section 48 lists an exhaustive set of narrow grounds: incapacity of a party or an invalid arbitration agreement; lack of proper notice of the arbitrator's appointment or the proceedings; an award dealing with matters outside the submission to arbitration; improper composition of the tribunal or procedure; an award not yet binding, or set aside or suspended at the seat; a subject matter not arbitrable under Indian law; or conflict with India's public policy. Since the 2015 amendment, 'public policy' for this purpose covers only fraud or corruption in the award, contravention of the fundamental policy of Indian law, or conflict with the most basic notions of morality or justice — it is not a route to a merits review, and the separate 'patent illegality' ground available for domestic awards under Section 34(2A) does not apply to foreign awards at all.",
    },
    {
      q: "What is the limitation period for enforcing a foreign award in India?",
      a: "Three years. In Government of India v. Vedanta Limited (2020) 10 SCC 1, the Supreme Court resolved conflicting High Court decisions by holding that an application to enforce a foreign award is governed by Article 137 of the Limitation Act, 1963, rather than the 12-year period under Article 136 that applies to domestic decree execution.",
    },
    {
      q: "Can an Indian court re-examine the merits of a foreign award at the enforcement stage?",
      a: "No. Indian courts have consistently held that Section 48 does not permit a review of a foreign award's merits. The Supreme Court sharpened this further in Nagaraj V. Mylandla v. PI Opportunities Fund-I (2026 INSC 298), recognising the doctrine of transnational issue estoppel — a party cannot use a Section 48 objection to re-litigate a factual or contractual issue that a competent court at the seat of arbitration has already decided between the same parties.",
    },
    {
      q: "Does winning an arbitral award mean the money gets paid?",
      a: "Not automatically, as the case discussed on this page shows. An award can be challenged, an execution application can be resisted, and — particularly where a government department or public sector entity is the award debtor — coercive steps like bank attachment can be stayed pending disposal of the underlying challenge. Enforcement is frequently the longest and most contested phase of an arbitration, not a formality that follows it.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
      <BlogPostingSchema
        headline="Arbitration Enforcement in India"
        description="How domestic and foreign arbitral awards are enforced in India under Sections 34/36 and Part II (Sections 44-52) of the Arbitration and Conciliation Act, 1996 — including limitation periods, the Section 48 refusal grounds, and recent Supreme Court guidance."
        url="https://www.theaucorp.com/blog/arbitration-enforcement-india"
        image="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
        datePublished="2026-05-04"
        dateModified="2026-09-15"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Arbitration Enforcement" }]} />

      {/* HERO IMAGE */}
      <div className="mt-4 relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
          alt="Arbitration Enforcement India"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* TITLE */}
      <div className="mt-6 sm:mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          When Winning an Arbitration Case Isn’t Enough: Lessons from Executive Engineer (CCW), All India Radio v. M/s B Prasad & Co. (2026)
        </h1>
      </div>

      {/* INTRO */}
      <section className="mt-6 space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
        <p>
          In the construction industry, arbitration is widely viewed as the final step in resolving disputes. Yet, in practice, securing a favourable arbitral award does not always result in immediate recovery of money.
        </p>

        <p>
          A recent judgment of the Patna High Court in Executive Engineer (Civil Construction Wing), All India Radio v. M/s B Prasad & Co. (2026) underscores a crucial reality for contractors and infrastructure companies: the real challenge often begins after the award is passed.
        </p>

        <p>
          The decision offers important insight into how Indian courts approach enforcement of arbitral awards, particularly in construction disputes involving government entities. Because enforcement law works differently depending on where the award was made, this article also sets out, beyond this case, how a domestic award is enforced as a decree under Sections 34 and 36, and how a foreign award is enforced under Part II (Sections 44–52) of the Arbitration and Conciliation Act, 1996 — including the limitation periods and refusal grounds that apply to each.
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
          alt="Legal Discussion"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* BACKGROUND */}
      <section className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Background of the Case
        </h2>

        <p>
          The dispute arose out of a construction contract awarded in 2007 by the Civil Construction Wing of All India Radio for the construction of 38 staff quarters in Patna. The contract, valued at approximately ₹3.4 crore, was scheduled for completion in 2009.
        </p>

        <p>
          Due to delays, the contract was ultimately terminated in 2012. Aggrieved by the termination, the contractor, M/s B Prasad & Co., invoked arbitration.
        </p>

        <p>
          By an award dated 10 May 2014, the arbitral tribunal held that the delay was attributable to the government department and allowed the contractor’s claims. The tribunal awarded approximately ₹1.81 crore (inclusive of interest), along with future interest at the rate of 15% per annum until payment.
        </p>

        <p>
          However, the dispute did not conclude with the award.
        </p>

        <p>
          The government challenged the award under Section 34 of the Arbitration and Conciliation Act, 1996. Simultaneously, the contractor initiated execution proceedings to enforce the award.
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80"
          alt="Construction Project"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* COURT ISSUE */}
      <section className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          What Led to the High Court Proceedings
        </h2>

        <p>
          Over the years, the challenge proceedings remained pending. In the meantime, the contractor continued to pursue enforcement.
        </p>

        <p>
          In June 2025, the executing court ordered attachment of the government department’s bank accounts due to non-payment of the awarded amount.
        </p>

        <p>
          The government challenged this order before the High Court, contending that:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>The arbitral award was still under challenge</li>
          <li>Attachment of bank accounts would severely disrupt public functions</li>
          <li>The order was disproportionate and premature</li>
        </ul>

        <p>
          Key Issue Before the Court
        </p>

        <p>
          The principal question before the Court was:
        </p>

        <p>
          Can coercive steps such as attachment of bank accounts be taken to enforce an arbitral award while a challenge to that award is still pending?
        </p>
      </section>

      {/* IMAGE */}
      <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1581091012184-7c7f8e84f3b5"
          alt="Court Judgment"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* DECISION */}
      <section className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Decision of the Court
        </h2>

        <p>
          The High Court adopted a balanced and pragmatic approach.
        </p>

        <p>
          It stayed the execution proceedings, including the attachment of bank accounts, and directed the concerned court to expeditiously decide:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>The Section 34 challenge to the award</li>
          <li>The application for stay under Section 36</li>
        </ul>

        <p>
          Importantly, the Court imposed a strict timeline of 80 working days for disposal of these proceedings.
        </p>

        <p>
          Through this approach, the Court sought to ensure that:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>The contractor’s right to enforcement is preserved</li>
          <li>The government is not subjected to irreversible financial consequences before final adjudication</li>
        </ul>
      </section>

      {/* TAKEAWAYS */}
      <section className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Key Legal Takeaways
        </h2>

        <p>1. An Arbitral Award Does Not Ensure Immediate Recovery</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Enforcement may be contested</li>
          <li>Recovery can be delayed for years</li>
        </ul>

        <p>2. A Section 34 Challenge Does Not Automatically Stay Enforcement</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Filing a challenge does not render the award unenforceable</li>
          <li>A separate application under Section 36 is required to seek a stay</li>
        </ul>

        <p>3. Courts Exercise Discretion in Enforcement</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Whether the award is under challenge</li>
          <li>The financial and operational impact on parties</li>
          <li>Broader public interest</li>
        </ul>

        <p>4. Delay Can Undermine the Value of an Award</p>

        <p>5. Government Contracts Involve Additional Complexities</p>
      </section>

      {/* DOMESTIC ENFORCEMENT LEGAL FRAMEWORK */}
      <section id="domestic-enforcement" className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          The Legal Framework: Enforcing Domestic Awards Under Sections 34 and 36
        </h2>

        <p>
          A domestic award — one made in an arbitration seated in India — is not final the moment it is signed. Under Section 34(3), a party seeking to set it aside has three months from the date of receiving the award to file that challenge, with a further 30 days available only on sufficient cause; once that combined window closes, no extension is possible under any circumstance. Once the challenge period lapses without a filing, or a filed challenge is dismissed, Section 36 makes the award enforceable &ldquo;as if it were a decree of the court.&rdquo; The award-holder then executes it through the ordinary civil-court decree-execution machinery under the Code of Civil Procedure, 1908 — subject to its own 12-year limitation period under Article 136 of the Limitation Act, 1963.
        </p>

        <p>
          Crucially, and exactly as the Patna High Court case above illustrates, filing a Section 34 petition does not by itself pause enforcement. Since the 2015 amendment, an award debtor must apply separately for a stay, which courts typically grant only on condition of a deposit. The 2021 amendment narrowed this further in the award debtor&rsquo;s favour on one specific point: the second proviso to Section 36(3) allows a court to grant an unconditional stay where a prima facie case is made out that the arbitration agreement or the making of the award was induced or affected by fraud or corruption — outside that narrow fact pattern, an unconditional stay is not the default remedy.
        </p>

        <p>
          On what grounds can a domestic award actually be set aside? Section 34(2) lists a party&rsquo;s incapacity, an invalid arbitration agreement, lack of proper notice, an award exceeding the scope of the arbitration agreement, improper composition of the tribunal, and conflict with India&rsquo;s public policy — narrowed since the 2015 amendment to mean only fraud or corruption in the making of the award, contravention of the fundamental policy of Indian law, or conflict with the most basic notions of morality or justice, and explicitly not a route to reviewing the award&rsquo;s merits. A separate ground, patent illegality under Section 34(2A), lets a court set aside an award &ldquo;vitiated by patent illegality appearing on the face of the award&rdquo; — but only for arbitrations other than international commercial arbitration, and never through re-appreciation of evidence or by correcting an erroneous application of law.
        </p>

        <p>
          In April 2025, a five-judge Constitution Bench of the Supreme Court settled a long-running question in Gayatri Balasamy v. ISG Novasoft Technologies Ltd. (2025 INSC 605): can a Section 34 court modify an award, or only set it aside? By a 4:1 majority, the Court held that courts do have a limited power to modify — severing an invalid portion of an award from a valid one, correcting clerical, computational or typographical errors, adjusting post-award interest, and, in rare cases, invoking Article 142 of the Constitution to do &ldquo;complete justice.&rdquo; The ruling does not reopen an award&rsquo;s merits, but it gives a Section 34 court somewhat more flexibility than a strict &ldquo;set aside only&rdquo; reading of the Act previously allowed — relevant to any party currently weighing whether to challenge, or resist a challenge to, a domestic award.
        </p>
      </section>

      {/* FOREIGN ENFORCEMENT LEGAL FRAMEWORK */}
      <section id="foreign-enforcement" className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Enforcing Foreign Arbitral Awards in India (Part II, Sections 44–52)
        </h2>

        <p>
          A foreign award — made in a country the Indian government has specifically notified as a reciprocating territory under the New York Convention — is enforced under a different part of the Act altogether. There is no Section 34-style &ldquo;set aside&rdquo; proceeding available in India for a foreign award. Instead, the award-holder applies directly to the jurisdictional High Court under Sections 47–49, producing the original award (or an authenticated copy), the original arbitration agreement, and, where required, evidence establishing that the award meets the definition of a foreign award under Section 44.
        </p>

        <p>
          Section 48 sets out an exhaustive list of narrow grounds on which enforcement may be refused, which Indian courts have consistently construed narrowly, in keeping with the New York Convention&rsquo;s own pro-enforcement bias: a party&rsquo;s incapacity or an invalid arbitration agreement; lack of proper notice of the arbitrator&rsquo;s appointment or the proceedings; an award dealing with matters outside the submission to arbitration; improper composition of the tribunal or procedure not in accordance with the parties&rsquo; agreement; an award not yet binding, or set aside or suspended by a competent authority in the country where it was made; a subject matter not capable of settlement by arbitration under Indian law; or conflict with the public policy of India. As with Section 34, the 2015 amendment confined &ldquo;public policy&rdquo; for Section 48 purposes to fraud or corruption in the award, contravention of the fundamental policy of Indian law, or conflict with the most basic notions of morality or justice — and, notably, the &ldquo;patent illegality&rdquo; ground available for purely domestic awards under Section 34(2A) is not available at all to resist enforcement of a foreign award.
        </p>

        <p>
          Limitation matters here too, and it differs from the domestic position. In Government of India v. Vedanta Limited (2020) 10 SCC 1, the Supreme Court resolved years of conflicting High Court decisions by holding that an application to enforce a foreign award is governed by Article 137 of the Limitation Act, 1963 — a three-year period from when the right to apply accrues — rather than the 12-year period under Article 136 that applies to domestic decree execution. The same judgment reaffirmed the enforcement court&rsquo;s limited role: it does not sit in appeal over the foreign award&rsquo;s merits.
        </p>

        <p>
          That principle was sharpened further in March 2026, when the Supreme Court decided Nagaraj V. Mylandla v. PI Opportunities Fund-I (2026 INSC 298), recognising for the first time the doctrine of transnational issue estoppel in the enforcement of foreign awards. The Court held that a Section 48 objection cannot be used to re-litigate a factual or contractual issue that a competent court at the seat of arbitration has already decided between the same parties on the same issue — closing off a common delay tactic of trying to reopen seat-court findings during Indian enforcement proceedings.
        </p>
      </section>

      {/* FAQ */}
      <section id="faqs" className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* FINAL */}
      <section className="mt-8 space-y-4 text-gray-800">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Conclusion
        </h2>

        <p>
          An arbitral award is only as effective as its enforcement — whether it was made in Patna or in a New York Convention country thousands of miles away.
        </p>

        <p>
          For construction and infrastructure companies pursuing a domestic award, and for foreign parties seeking to recover on an award made outside India, dispute resolution does not end with arbitration. It extends into the enforcement stage — governed by its own limitation periods, its own narrow grounds for resisting payment, and, as recent Supreme Court rulings on award modification and transnational issue estoppel show, its own evolving body of law — where legal strategy, timing, and execution ultimately determine the real outcome of the dispute.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-10 p-6 bg-black text-white rounded-xl">
        <p className="font-semibold">
          Need help with arbitration enforcement?
        </p>
        <p className="mt-2 text-white/80 text-sm">
          AU Corporate assists with end-to-end dispute resolution and enforcement strategy.
        </p>
      </div>


      <RelatedResources
        links={[
          { label: "Arbitration Services", href: "/arbitration-services", description: "Professional dispute resolution for commercial disputes." },
          { label: "Construction Arbitration in India", href: "/blog/construction-arbitration-india", description: "Sector-specific arbitration considerations." },
        ]}
      />

    </main>
  )
}
