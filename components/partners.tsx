import Image from "next/image"

const partners = [
  {
    name: "Kamoto Copper Company S.A.",
    logo: "/images/kcc-20logo.jpeg",
  },
  {
    name: "MMG",
    logo: "/images/mmg-20logo.jpeg",
  },
  {
    name: "TFM",
    logo: "/images/tfm-20logo.png",
  },
  {
    name: "Kamoa Copper S.A.",
    logo: "/images/kamoa.jpeg",
  },
]

export function Partners() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Partners</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We are proud to collaborate with the largest mining companies in Katanga
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={150}
                height={80}
                className="object-contain w-full h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
