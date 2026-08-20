import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const points = [
  "Affordable plans, priced in Naira, tailored to your space and schedule",
  "Background-checked teams that treat your property with respect",
  "Flexible one-time, recurring, and move-in/move-out cleans",
]

export function About() {
  return (
    <section id="about" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/about-team.png"
              alt="The Swiftpack Pro cleaning team with equipment"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-accent px-5 py-4 text-accent-foreground shadow-lg">
            <ShieldCheck className="size-8" aria-hidden="true" />
            <div>
              <p className="font-heading text-lg font-extrabold leading-none">Fully Insured</p>
              <p className="text-xs font-medium">& satisfaction guaranteed</p>
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-accent">About Our Company</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
            Complete Home &amp; Lawn Solutions
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">
            We work closely with every client to find the most affordable
            solution while delivering a level of service that produces a clean,
            healthy environment for your family or staff. From sparkling
            interiors to well-kept compounds, Swiftpack Pro is the partner
            you can rely on, no matter which part of Nigeria you call home.
          </p>

          <ul className="mt-7 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-primary-foreground/90">{point}</span>
              </li>
            ))}
          </ul>

          <Button
            render={<Link href="/contact" />}
            className="mt-8 h-12 rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground hover:bg-accent/90"
          >
            Request a Free Estimate
          </Button>
        </div>
      </div>
    </section>
  )
}
