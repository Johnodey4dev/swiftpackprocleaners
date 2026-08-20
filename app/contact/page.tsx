import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Contact Us | Swiftpack Pro",
  description:
    "Request a free, no-obligation cleaning estimate from Swiftpack Pro. Reach us by phone, WhatsApp, or the form below.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Contact />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  )
}
