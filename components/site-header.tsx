"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, Clock, Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-foreground text-background/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="size-3.5 text-accent" aria-hidden="true" />
              +234 913 900 8165
            </span>
            <span className="flex items-center gap-2">
              <Mail className="size-3.5 text-accent" aria-hidden="true" />
              info@swiftpackprocleaners.com
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-3.5 text-accent" aria-hidden="true" />
              Mon–Sat: 8am – 7pm
            </span>
          </div>
          <span className="font-semibold tracking-wide text-accent">
            Trusted cleaning across Abuja.
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center overflow-hidden justify-center rounded-lg bg-primary text-primary-foreground">
               <Image
                       src="/images/brand.png"
                       alt="The Swiftpack Pro logo"
                       width={65}
                       height={65}
                       className="h-full w-full object-cover"
                     />
            </div>
            <span className="font-heading text-xl font-extrabold leading-none tracking-tight text-foreground">
              Swiftpack<span className="text-primary">Pro</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              render={<Link href="/contact" />}
              className="h-10 rounded-full bg-accent px-6 font-bold text-accent-foreground hover:bg-accent/90"
            >
              Book Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <nav
            className="border-t border-border bg-background px-6 py-4 lg:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              render={<Link href="/contact" onClick={() => setOpen(false)} />}
              className="mt-3 h-10 w-full rounded-full bg-accent font-bold text-accent-foreground hover:bg-accent/90"
            >
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
