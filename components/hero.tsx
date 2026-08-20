import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Trained & professional cleaners",
  "Quality cleaning products",
  "Serving homes & businesses across Abuja",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Professional Cleaning Services in Abuja
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Sparkling Homes &amp;{" "}
            <span className="text-primary">Offices</span>, No Wahala At All
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Get reliable and thorough cleaning for your home or office with
            Swiftpack Pro. Our trained professionals use quality, eco-friendly
            products to deliver a clean, fresh, and comfortable space across
            Abuja.
          </p>

          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <CheckCircle2
                  className="size-4 text-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              render={<Link href="/contact" />}
              className="group h-12 rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground hover:bg-accent/90"
            >
              Request a Free Estimate
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              render={<Link href="/services" />}
              variant="outline"
              className="h-12 rounded-full border-primary/30 px-7 text-sm font-bold text-primary hover:bg-secondary"
            >
              Our Services
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -right-6 -top-6 hidden size-40 rounded-full bg-accent/20 lg:block"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-3xl border-8 border-secondary shadow-xl">
            <Image
              src="/images/hero-cleaning.png"
              alt="Professional Swiftpack Pro cleaner providing quality cleaning services"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 rounded-2xl bg-primary px-6 py-4 text-primary-foreground shadow-lg">
            <p className="font-heading text-3xl font-extrabold leading-none">
              Abuja
            </p>
            <p className="mt-1 text-xs font-medium text-primary-foreground/80">
              Professional cleaning services you can trust
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}