import Link from "next/link"

export interface RelatedService {
  title: string
  description: string
  url: string
}

export interface RelatedServicesProps {
  services: RelatedService[]
  title?: string
}

export default function RelatedServices({
  services,
  title = "Related Services",
}: RelatedServicesProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.url}
              href={service.url}
              className="p-6 bg-white border rounded-lg hover:shadow-lg transition group"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-500 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
