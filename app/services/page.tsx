import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { WhyChoose } from "@/components/why-choose"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Our Services | Swiftpack Pro",
  description:
    "Explore Swiftpack Pro's house cleaning, office cleaning, and compound care services, with transparent pricing in Naira.",
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Services />
        {/* <Pricing /> */}
        <WhyChoose />
      </main>
      <SiteFooter />
    </>
  )
}
