"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I book a cleaning?",
    answer:
      "You can book directly on WhatsApp, fill the form on our Contact page, or give us a call. We'll confirm your date, the plan you need, and the price before any cleaner is sent.",
  },
  {
    question: "How do I pay — do you accept transfer?",
    answer:
      "Yes. We accept cash, bank transfer, and POS. Payment is made after the job is completed and you're satisfied, so there's no need to send money upfront.",
  },
  {
    question: "Do I need to provide cleaning materials?",
    answer:
      "No need. Our team comes fully equipped with their own cleaning supplies and tools. If you prefer we use specific products for allergies or your baby's room, just let us know when booking.",
  },
  // {
  //   question: "Which areas do you cover?",
  //   answer:
  //     "We currently serve Lagos (Lekki, Ikeja, VI, Ajah and environs), Abuja (Wuse, Maitama, Gwarinpa), Port Harcourt, and Ibadan, with more cities coming soon. Send us your address and we'll confirm coverage.",
  // },
  {
    question: "Are your cleaners trained and safe to let into my home?",
    answer:
      "Every cleaner is background-checked, trained, and wears a Swiftpack Pro ID badge on arrival. We also offer a female-only team option on request for your comfort.",
  },
  {
    question: "What if I'm not satisfied with the clean?",
    answer:
      "Reach us within 24 hours and we'll send a team back to fix it at no extra cost — no long story, no wahala.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Got Questions?</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Everything you need to know before you book. Still unsure? Send us
            a message on WhatsApp — we reply fast.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-bold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
