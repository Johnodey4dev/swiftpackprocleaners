import { Quote, Star } from "lucide-react"

const stats = [
  { value: "12k+", label: "Homes cleaned" },
  { value: "97%", label: "Customer satisfaction" },
  { value: "24/7", label: "Booking support" },
  { value: "6+", label: "States covered" },
]

export function Testimonial() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10">
            <Quote className="size-10 text-accent" aria-hidden="true" />
            <p className="mt-4 text-lg leading-relaxed text-pretty sm:text-xl">
              &ldquo;Honestly, Swiftpack Pro is the one I dey call anytime I
              need proper cleaning. Booking was stress-free on WhatsApp, the
              price they quoted was the price I paid, and the boys did a very
              thorough job on my three-bedroom flat.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-accent font-heading text-lg font-extrabold text-accent-foreground">
                AO
              </span>
              <div>
                <p className="font-heading font-bold">Adaeze Okonkwo</p>
                <p className="text-sm text-primary-foreground/70">Maitama, Abuja</p>
              </div>
              <div className="ml-auto flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-primary">Loved by clients</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
              Experience the Ultimate Level of Clean
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Thousands of families and businesses trust us to care for their
              spaces. Here&apos;s the impact we&apos;ve made together.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card p-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-heading text-3xl font-extrabold text-primary">{stat.value}</span>
                    <span className="mt-1 block text-sm font-medium text-muted-foreground">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
