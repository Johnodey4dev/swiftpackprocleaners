import { MapPin } from "lucide-react"

const areas = [
  { city: "Lagos", spots: "Lekki, Ikeja, VI, Ajah, Yaba" },
  { city: "Abuja", spots: "Wuse, Maitama, Gwarinpa, Garki" },
  { city: "Port Harcourt", spots: "GRA, Trans Amadi, Woji" },
  { city: "Ibadan", spots: "Bodija, Jericho, Ring Road" },
  { city: "Benin City", spots: "GRA, Ugbowo, Sapele Road" },
  { city: "Enugu", spots: "GRA, Independence Layout" },
]

export function ServiceAreas() {
  return (
    <section id="areas" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">Where We Work</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Serving Homes &amp; Offices Across Nigeria
            </h2>
            <p className="mt-4 leading-relaxed text-background/70">
              From the Island to Abuja and beyond, our teams are on ground and
              ready to book. Don&apos;t see your area? Send us a message —
              we&apos;re expanding every month.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.city}
              className="flex items-start gap-4 rounded-2xl bg-background/5 p-6 ring-1 ring-background/10 transition-colors hover:bg-background/10"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold">{area.city}</h3>
                <p className="mt-1 text-sm leading-relaxed text-background/70">{area.spots}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
