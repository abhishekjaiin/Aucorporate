import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"
import { ClickableInfoCard } from "@/components/ClickableInfoCard"
import { InquiryButton } from "@/components/InquiryButton"
import { RelatedResources } from "@/components/RelatedResources"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Globe2, ShieldCheck, Cloud, Lock, Smartphone, MapPin, Mail, Phone, ExternalLink } from "lucide-react"

const processSteps = [
  { step: "01", title: "Business Idea", desc: "You share your expansion plans — India and any of Hong Kong, Singapore or China." },
  { step: "02", title: "Market Selection", desc: "AU Corporate and UniproAsia help confirm which markets and structure actually fit your plans." },
  { step: "03", title: "Company Setup", desc: "India incorporation runs through AU Corporate; Hong Kong, Singapore or China setup runs through UniproAsia." },
  { step: "04", title: "Accounting & Tax", desc: "Bookkeeping, tax advisory and financial reporting for each entity, in each jurisdiction." },
  { step: "05", title: "Compliance", desc: "Ongoing statutory compliance and corporate maintenance keep every entity in good standing." },
  { step: "06", title: "Business Growth", desc: "A coordinated regional footprint to support you as the business scales." },
]

const techFeatures = [
  { icon: Cloud, title: "Cloud-Based", desc: "Accounting and records managed through a cloud accounting platform, not paper files." },
  { icon: Lock, title: "Secure", desc: "Information encrypted and servers protected, per UniproAsia's stated security practices." },
  { icon: Smartphone, title: "Multi-Device", desc: "Information syncs across desktop, tablet and mobile." },
  { icon: Globe2, title: "Accessible", desc: "View company financial information from anywhere, anytime." },
]

const services = [
  { title: "Company Registration", desc: "Incorporation and registration support for setting up an entity in Hong Kong, Singapore or Mainland China." },
  { title: "Accounting Services", desc: "Cloud-based bookkeeping and financial reporting, accessible online from anywhere." },
  { title: "Tax Advisory", desc: "Corporate tax requirements, advisory and compliance across Hong Kong and Singapore." },
  { title: "Audit Services", desc: "Audit support and financial review through UniproAsia's online service platform." },
  { title: "Corporate Compliance", desc: "Ongoing corporate maintenance and statutory compliance requirements." },
  { title: "Payroll Outsourcing", desc: "Payroll administration, HR support and compliance reporting for your regional team." },
  { title: "Business Support", desc: "General business and administrative support for companies operating across Asia." },
  { title: "Going Global", desc: "End-to-end support taking a business from market selection through company setup and growth." },
  { title: "Partnership Services", desc: "Opportunities for consultants, service providers and entrepreneurs expanding across Asia's markets." },
]

const regions = [
  {
    name: "Hong Kong",
    tag: "HONG KONG CORPORATE SERVICES",
    heading: "Company Formation & Ongoing Support in Hong Kong",
    body: "UniproAsia handles company registration, corporate maintenance, accounting and tax, and compliance support for a Hong Kong entity — a common choice for clients using a Hong Kong holding structure alongside their India operations.",
    points: ["Company registration", "Corporate maintenance", "Accounting & tax", "Compliance support"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    alt: "Business district office towers",
  },
  {
    name: "Singapore",
    tag: "SINGAPORE CORPORATE SERVICES",
    heading: "Company Formation & Compliance in Singapore",
    body: "For businesses entering Southeast Asia, UniproAsia supports Singapore company formation, ongoing corporate compliance, accounting and tax, and general business support.",
    points: ["Company formation", "Corporate compliance", "Accounting & tax", "Business support"],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    alt: "Business meeting and financial discussion",
  },
  {
    name: "China",
    tag: "MAINLAND CHINA",
    heading: "Regional Business & Sourcing Support Across China",
    body: "UniproAsia's Mainland China coverage supports regional business activity and sourcing, alongside their Hong Kong and Singapore operations — useful where an India entity is one part of a wider Asia manufacturing or sourcing footprint.",
    points: ["Regional business support", "Sourcing support", "Coordinated with HK & Singapore operations"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    alt: "Corporate compliance documentation and planning",
  },
]

const faqs = [
  {
    q: "Does AU Corporate handle company registration in Hong Kong, Singapore or China directly?",
    a: "No — AU Corporate's own services are focused on India. For Hong Kong, Singapore and Mainland China, we work with our partner UniproAsia, so clients whose plans span India and these markets can coordinate both sides through a single relationship rather than sourcing an unrelated regional provider themselves.",
  },
  {
    q: "What does UniproAsia handle for a Hong Kong company?",
    a: "Company registration, corporate maintenance, accounting and tax, and ongoing compliance support for a Hong Kong entity.",
  },
  {
    q: "What does UniproAsia handle for a Singapore company?",
    a: "Company formation, corporate compliance, accounting and tax, and general business support for a Singapore entity — the setup most clients use when entering Southeast Asia alongside India.",
  },
  {
    q: "Does UniproAsia support businesses in Mainland China too?",
    a: "Yes. Alongside its Hong Kong and Singapore operations, UniproAsia provides regional business and sourcing support across Mainland China.",
  },
  {
    q: "How does the AU Corporate and UniproAsia partnership actually work?",
    a: "AU Corporate coordinates the India side of your structure — incorporation, FEMA/RBI compliance, tax and accounting — and connects you directly with UniproAsia for the Hong Kong, Singapore or China side. The two engagements run in parallel, with AU Corporate as your single point of contact for the India piece throughout.",
  },
  {
    q: "Do I need to sign a separate agreement with UniproAsia?",
    a: "Yes. AU Corporate and UniproAsia are independent service providers — we make the introduction and coordinate on your behalf, but the Hong Kong, Singapore or China engagement itself is contracted directly with UniproAsia.",
  },
  {
    q: "Why would a company entering India also consider Hong Kong or Singapore?",
    a: "It's a common pairing for holding company structures, regional treasury and invoicing, and broader Southeast Asian market access — alongside an operating entity in India. Which structure makes sense depends on your specific plans, which is exactly what an introductory conversation with both teams is for.",
  },
  {
    q: "Can I engage UniproAsia for just one market, not all three?",
    a: "Yes. Most clients start with whichever single market matches their immediate plans — Hong Kong, Singapore, or China — and expand to the others later if needed.",
  },
  {
    q: "Is UniproAsia's fee included in AU Corporate's pricing?",
    a: "No. AU Corporate's India services and UniproAsia's Hong Kong, Singapore or China services are billed separately by each firm — we coordinate the introduction and the India side, UniproAsia quotes and bills its own regional work directly.",
  },
  {
    q: "How do I get started with this partnership?",
    a: "Talk to AU Corporate about your India plans and mention that your expansion also covers Hong Kong, Singapore or China. We'll coordinate the India side and introduce you to UniproAsia for the rest.",
  },
]

export default function UniproAsiaPartnerPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb items={[{ label: "Global Support", href: "/outsourcing" }, { label: "UniproAsia Partnership" }]} />
      </div>

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=80"
          alt="Asia business district skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#081a42]/75" />
        <Reveal className="relative z-10 max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-4">
            AU Corporate &times; UniproAsia
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Your Partner Beyond India: Hong Kong, Singapore &amp; China
          </h1>
          <p className="mt-5 text-lg text-white/85">
            AU Corporate partners with UniproAsia to support clients expanding
            beyond India into Hong Kong, Singapore and Mainland China — company
            formation, accounting, tax, audit and compliance, coordinated
            alongside your India entity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <InquiryButton />
            <Button asChild variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
              <a href="https://uniproasia.com/" target="_blank" rel="noopener noreferrer">
                Visit UniproAsia <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section aria-labelledby="about-uniproasia" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600 mb-3">
              About UniproAsia
            </p>
            <h2 id="about-uniproasia" className="text-3xl font-bold text-[#081a42] mb-4">
              A Trusted Global Corporate Services Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              UniproAsia (Unipro Consulting Limited) is a corporate services
              provider based in Hong Kong, with a presence across Hong Kong,
              Singapore and Mainland China. They help businesses set up and stay
              compliant through company registration, accounting, tax advisory,
              audit and corporate compliance — delivered through a cloud-based,
              technology-driven platform.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For AU Corporate clients whose India entry is one part of a wider
              Asia expansion, UniproAsia is who we work with for the Hong Kong,
              Singapore and China side of that plan.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Business team in a strategy meeting"
              width={1000}
              height={700}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="rounded-2xl w-full h-auto object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* WHY THIS PARTNERSHIP */}
      <section aria-labelledby="why-partnership" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <h2 id="why-partnership" className="text-3xl font-bold text-[#081a42]">
              Why We Work With UniproAsia
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A single point of coordination for clients whose plans extend beyond India.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8">
            <Reveal className="text-center">
              <div className="w-14 h-14 mx-auto rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
                <Building2 className="text-[#081a42]" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Integrated Services</h3>
              <p className="text-sm text-gray-600">Company setup, accounting, tax and compliance handled together, not across disconnected vendors.</p>
            </Reveal>
            <Reveal delay={0.1} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
                <Globe2 className="text-[#081a42]" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Regional Coverage</h3>
              <p className="text-sm text-gray-600">Hong Kong, Singapore and Mainland China — the markets clients most often expand into alongside India.</p>
            </Reveal>
            <Reveal delay={0.2} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
                <ShieldCheck className="text-[#081a42]" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ongoing Compliance</h3>
              <p className="text-sm text-gray-600">Corporate maintenance and statutory compliance stay current after the entity is set up, not just at formation.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section aria-labelledby="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600 mb-3">
              From Aspiration to Reality
            </p>
            <h2 id="how-it-works" className="text-3xl font-bold text-[#081a42]">
              How the Partnership Works
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Focus on your business while AU Corporate and UniproAsia handle the entity setup and compliance behind your expansion.
            </p>
          </Reveal>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-px bg-gray-200" aria-hidden="true" />
            {processSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08} className="relative">
                <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 bg-white border-2 border-yellow-400 text-[#081a42]">
                  {item.step}
                </div>
                <h3 className="font-semibold text-base mb-2 text-[#081a42]">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REGION BLOCKS — Hong Kong, Singapore, China */}
      {regions.map((r, i) => (
        <section key={r.name} aria-labelledby={`region-${r.name.toLowerCase().replace(/\s+/g, "-")}`} className={i % 2 === 0 ? "py-20 bg-white" : "py-20 bg-gray-50"}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <Reveal>
                  <Image
                    src={r.image}
                    alt={r.alt}
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="rounded-2xl w-full h-auto object-cover shadow-lg"
                  />
                </Reveal>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <Reveal delay={0.1}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600 mb-3">
                    {r.tag}
                  </p>
                  <h2 id={`region-${r.name.toLowerCase().replace(/\s+/g, "-")}`} className="text-2xl sm:text-3xl font-bold text-[#081a42] mb-4">
                    {r.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {r.body}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {r.points.map((p) => (
                      <li key={p} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SERVICES */}
      <section aria-labelledby="uniproasia-services" className="py-20 bg-[#081a42] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400 mb-3">
              Our Services
            </p>
            <h2 id="uniproasia-services" className="text-3xl font-bold">
              What UniproAsia Covers
            </h2>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">
              Ask us about any of these for your Hong Kong, Singapore or China expansion.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <ClickableInfoCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section aria-labelledby="uniproasia-technology" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600 mb-3">
              Technology
            </p>
            <h2 id="uniproasia-technology" className="text-3xl font-bold text-[#081a42]">
              Powered by Cloud Technology
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              UniproAsia runs on a cloud accounting platform, so your financial information stays current and accessible without chasing paperwork.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1} className="p-6 bg-white border rounded-xl text-center">
                <div className="w-12 h-12 mx-auto rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
                  <f.icon className="text-[#081a42]" size={22} />
                </div>
                <h3 className="font-semibold mb-2 text-[#081a42]">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section aria-labelledby="uniproasia-offices" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-600 mb-3">
              Contact
            </p>
            <h2 id="uniproasia-offices" className="text-3xl font-bold text-[#081a42]">
              UniproAsia Offices
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal className="p-6 border rounded-xl">
              <h3 className="font-semibold text-lg mb-3 text-[#081a42]">Hong Kong</h3>
              <p className="text-sm text-gray-600 mb-1">Unipro Consulting Limited</p>
              <p className="text-sm text-gray-600 flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5 text-yellow-600" size={16} />
                Room 409 &amp; Room 4-5 G/F, Beverley Commercial Centre, 87-105 Chatham Road South, Tsim Sha Tsui, Kowloon, Hong Kong SAR, China
              </p>
            </Reveal>
            <Reveal delay={0.1} className="p-6 border rounded-xl">
              <h3 className="font-semibold text-lg mb-3 text-[#081a42]">Singapore</h3>
              <p className="text-sm text-gray-600 flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5 text-yellow-600" size={16} />
                183 Jalan Pelikat, #B2-02, The Promenade@Pelikat, Singapore 537643
              </p>
            </Reveal>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <a href="mailto:info@uniproasia.com" className="flex items-center gap-2 hover:text-yellow-600">
              <Mail size={16} className="text-yellow-600" /> info@uniproasia.com
            </a>
            <a href="tel:+85231534327" className="flex items-center gap-2 hover:text-yellow-600">
              <Phone size={16} className="text-yellow-600" /> +852 3153-4327
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="uniproasia-faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="uniproasia-faq" className="text-3xl font-bold mb-12 text-center text-[#081a42]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2 text-[#081a42]">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#081a42] mb-4">
            Planning to Expand Beyond India?
          </h2>
          <p className="text-gray-600 mb-8">
            Tell us about your plans and we&apos;ll help coordinate the India side
            directly, and connect you with UniproAsia for Hong Kong, Singapore or China.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Link href="/contact">
                Talk to AU Corporate <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="https://uniproasia.com/" target="_blank" rel="noopener noreferrer">
                Visit UniproAsia <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <RelatedResources
          links={[
            { label: "Global Support & Outsourcing", href: "/outsourcing", description: "AU Corporate's own accounting, payroll and BPO services in India." },
            { label: "Why India", href: "/doing-business-in-india/why-india", description: "The case for India as part of a wider Asia expansion." },
            { label: "GCC Setup in India", href: "/gcc-setup-india", description: "Building a Global Capability Center alongside a regional footprint." },
          ]}
        />
      </div>
    </div>
  )
}
