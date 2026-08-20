import { Award, Sparkles, Repeat, HeartPulse, PiggyBank, Clock } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Quality of Service",
    description: "Trained professionals using proven methods for a spotless finish every visit.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "We clean the spots others miss, from baseboards to blinds and beyond.",
  },
  {
    icon: Repeat,
    title: "Consistency",
    description: "The same reliable standard on your schedule, week after week.",
  },
  {
    icon: HeartPulse,
    title: "Health & Safety",
    description: "Disinfecting expertise and eco-friendly products that protect your family.",
  },
  {
    icon: PiggyBank,
    title: "Cost-Effective",
    description: "Transparent pricing with plans tailored to your budget and space.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description: "Punctual, dependable teams that respect your time and your home.",
  },
]

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Why Choose Us</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            The Swiftpack Pro Difference
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We combine reliable people, proven processes, and a genuine care for
            your space to deliver cleaning you can trust.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
