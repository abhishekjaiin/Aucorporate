import { InquiryForm } from '@/components/InquiryForm'
import { HeroBackground } from '@/components/HeroBackground'
import {
  MapPin,
  Clock,
  Users,
  Heart,
  TrendingUp,
  Globe,
  CheckCircle2,
} from 'lucide-react'

const jobListings = [
  {
    id: 1,
    title: 'Article Trainee',
    location: 'Connaught Place, New Delhi -110001',
    type: 'Full-time',
    department: 'Articleship',
    description:
      'We are seeking motivated Article Trainees to join our Articleship program, offering structured exposure to taxation, accounting, regulatory compliance, and advisory services. The role provides an opportunity to work on diverse client engagements, build strong technical capabilities, and develop a professional foundation in a high-performance, client-centric environment.',
  },
]

const cultureValues = [
  {
    icon: Users,
    title: 'Collaborative Environment',
    description:
      'Work alongside talented professionals who support and inspire each other.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description:
      'Clear career paths and continuous learning opportunities for professional development.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description:
      'Work on international projects with clients and colleagues across the world.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description:
      'Flexible policies that support your personal and professional well-being.',
  },
]

const benefits = [
  'Competitive compensation packages',
  'Comprehensive health insurance',
  'Retirement savings plans',
  'Professional development programs',
  'Performance bonuses',
  'Flexible work arrangements',
  'Paid time off and holidays',
  'Employee wellness programs',
]

export default function CareerPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative py-28 overflow-hidden">

        {/* Background */}
        <HeroBackground />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Join Our Team
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              <span className="text-white">Build Your Career at</span>{" "}
              <span className="text-gold">AU Corporate</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
              Join a team of passionate professionals dedicated to delivering exceptional value to clients worldwide. Grow your career with us.
            </p>

          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t see a role that fits? Send us your resume via the form below and we&apos;ll reach out if something opens up.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-xl border hover:shadow-lg transition"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-gold" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-gold" /> {job.type}
                      </span>
                      <span>{job.department}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-white border hover:shadow-lg text-center"
              >
                <value.icon className="h-7 w-7 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + APPLICATION FORM */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Comprehensive Benefits Package
            </h2>

            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex gap-2">
                  <CheckCircle2 className="text-gold mt-1" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <InquiryForm
            eyebrow="Apply Now"
            title="Tell Us About Yourself"
            description="Share your resume and the role you're interested in, and our team will get back to you."
            checklist={['Article Trainee — Articleship program', 'Open to other roles? Mention it in your message', 'We review every application']}
            footerNote={<>Mention the position you&apos;re applying for in your message.</>}
          />
        </div>
      </section>

    </div>
  )
}
