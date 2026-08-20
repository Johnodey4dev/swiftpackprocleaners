import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { WhyChoose } from "@/components/why-choose"
import { Testimonial } from "@/components/testimonial"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Why Choose Us | Swiftpack Pro",
  description:
    "See what sets Swiftpack Pro apart: quality, consistency, health & safety, and cost-effective cleaning you can trust.",
}

export default function WhyUsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <WhyChoose />
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  )
}
