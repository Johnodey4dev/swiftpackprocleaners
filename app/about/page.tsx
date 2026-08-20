import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { About } from "@/components/about"
import { ServiceAreas } from "@/components/service-areas"
import { Testimonial } from "@/components/testimonial"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About Us | Swiftpack Pro",
  description:
    "Learn about Swiftpack Pro's mission to deliver reliable, background-checked home, office, and compound cleaning across Nigeria.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <About />
        {/* <ServiceAreas /> */}
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  )
}
