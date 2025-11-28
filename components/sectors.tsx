import Image from "next/image"

const sectors = [
  {
    title: "Copper & Cobalt Mining",
    description: "Logistics support for mineral extraction and transportation",
    image: "/copper-mining-operations-africa.jpg",
  },
  {
    title: "Heavy Industries",
    description: "Solutions for manufacturing and industrial production",
    image: "/heavy-industry-manufacturing-plant.jpg",
  },
  {
    title: "Infrastructure",
    description: "Construction and maintenance of mining and industrial sites",
    image: "/construction-site-heavy-equipment.jpg",
  },
]

export function Sectors() {
  return (
    <section id="sectors" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Activity Sectors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Recognized expertise in the key industries of Katanga
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={sector.image || "/placeholder.svg"}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {sector.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
