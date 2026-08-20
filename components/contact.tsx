import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  { icon: Phone, label: "Call or WhatsApp", value: "+234 803 123 4567" },
  { icon: Mail, label: "Email us", value: "hello@swiftpackpro.ng" },
  { icon: MapPin, label: "Visit us", value: "Serving Lagos, Abuja, Port Harcourt & more" },
]

export function Contact() {
  return (
    <section id="contact" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-10 rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl sm:p-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-accent">Get in touch</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Request a Free Estimate Today
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/80">
              Tell us about your space and we&apos;ll get back to you with a
              tailored, no-obligation quote in Naira within one business day.
            </p>

            <ul className="mt-8 space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-foreground/60">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <form className="rounded-2xl bg-background p-6 text-foreground sm:p-8" aria-label="Request an estimate">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Chiamaka Eze"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234 803 000 0000"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="chiamaka@example.com"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-1.5 block text-sm font-semibold">
                  Service needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option>House Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Compound & Garden Care</option>
                  <option>Move In / Move Out</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us a little about your space..."
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="mt-5 h-12 w-full rounded-full bg-accent text-sm font-bold text-accent-foreground hover:bg-accent/90"
            >
              Request Free Estimate
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
