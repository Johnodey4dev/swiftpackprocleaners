import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "₦15,000",
    cadence: "per visit",
    description: "Perfect for a studio or one-bedroom flat that needs a quick, standard clean.",
    features: [
      "Sweeping, mopping & dusting",
      "Kitchen & bathroom wipe-down",
      "Up to 2 hours on-site",
      "Cash, transfer or POS on completion",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₦28,000",
    cadence: "per visit",
    description: "Our most-booked plan for 2–3 bedroom flats and duplexes needing a deep clean.",
    features: [
      "Everything in Basic",
      "Deep kitchen & bathroom scrub",
      "Window sills, skirtings & fans",
      "Up to 4 hours, 2-man team",
      "Free re-clean if not satisfied",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₦45,000",
    cadence: "per visit",
    description: "For larger duplexes, offices, or move-in/move-out cleans that need extra hands.",
    features: [
      "Everything in Standard",
      "Full compound & balcony clean",
      "Fridge & cabinet interiors",
      "3-man team, same-day option",
      "Priority WhatsApp booking",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Simple, Honest Pricing</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            No Hidden Charges, No Wahala
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            All prices are in Naira and confirmed with you before we start. Pay
            by cash, bank transfer, or POS once the job is done to your
            satisfaction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 shadow-sm ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground ring-2 ring-accent"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  Most Booked
                </span>
              )}
              <h3 className="font-heading text-lg font-bold">{plan.name}</h3>
              <p className={`mt-4 text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-heading text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm font-medium ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.cadence}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${plan.highlighted ? "text-accent" : "text-primary"}`}
                      aria-hidden="true"
                    />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                render={<Link href="/contact" />}
                className={`mt-8 h-12 w-full rounded-full text-sm font-bold ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Book This Plan
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need a custom quote for a large estate, event centre, or office
          complex?{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            Talk to us
          </Link>{" "}
          for a price that fits your budget.
        </p>
      </div>
    </section>
  )
}
