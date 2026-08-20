import Image from "next/image"
import Link from "next/link"
import { Home, Building2, Trees, ArrowUpRight, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "House Cleaning",
    image: "/images/service-house.png",
    icon: Home,
    description: "Deep and standard cleans for kitchens, bathrooms, bedrooms, and living areas — flat or duplex.",
  },
  {
    title: "Office Cleaning",
    image: "/images/service-office.png",
    icon: Building2,
    description: "Reliable commercial cleaning that keeps your workspace spotless for staff and clients.",
  },
  {
    title: "Compound & Garden Care",
    image: "/images/service-lawn.png",
    icon: Trees,
    description: "Grass cutting, weeding, and general tidy-ups that keep your compound looking sharp.",
  },
   {
    title: "Move-in / Move-out Cleaning",
    image: "/images/service-move.png",
    icon: Truck,
    description: "Thorough cleaning that leaves your space fresh, spotless, and ready for a smooth move-in or handover.",
  }
]

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">What We Do</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From homes to offices to outdoor spaces, our specialists deliver a
            consistent, professional clean every single time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} by Swiftpack Pro`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* <span className="absolute -bottom-5 left-6 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md ring-4 ring-card">
                    <Icon className="size-5" aria-hidden="true" />
                  </span> */}
                </div>
                <div className="p-6 pt-8">
                  <h3 className="font-heading text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                  >
                    Learn more
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            render={<Link href="/services" />}
            className="h-12 rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground hover:bg-accent/90"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
