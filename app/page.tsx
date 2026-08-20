import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChoose } from "@/components/why-choose"
import { Pricing } from "@/components/pricing"
import { Testimonial } from "@/components/testimonial"
import { ServiceAreas } from "@/components/service-areas"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        {/* <Pricing /> */}
        <Testimonial />
        {/* <ServiceAreas /> */}
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
