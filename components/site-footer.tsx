import Link from "next/link"
import { Sparkles, Globe, Send, AtSign, MessageCircle } from "lucide-react"

const columns = [
  {
    title: "Services",
    links: [{ label: "House Cleaning", href: "/services" }, { label: "Office Cleaning", href: "/services" }, { label: "Compound & Garden Care", href: "/services" }, { label: "Move In / Move Out", href: "/services" }],
  },
  {
    title: "Company",
    links: [{ label: "About Us", href: "/about" }, { label: "Why Choose Us", href: "/why-us" }, { label: "Careers", href: "#" }, { label: "Contact", href: "/contact" }],
  },
  {
    title: "Support",
    links: [{ label: "Help Center", href: "#" }, { label: "Book Now", href: "/contact" }, { label: "FAQs", href: "#" }, { label: "Privacy Policy", href: "#" }],
  },
]

const socials = [Globe, Send, AtSign, MessageCircle]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-extrabold tracking-tight">
                Swiftpack<span className="text-accent">Pro</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              Delivering the highest standards of home, office, and compound
              cleaning across Nigeria. Clean you can trust, price you can
              afford.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex size-9 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-background">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-6 text-sm text-background/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Swiftpack Pro. All rights reserved.</p>
          <p>RC 1234567 · Proudly Nigerian.</p>
        </div>
      </div>
    </footer>
  )
}
