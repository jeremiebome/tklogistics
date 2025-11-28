import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, HardHat, Server } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Transport",
    description:
      "Complete fleet of vehicles for transporting personnel, equipment and goods throughout Katanga territory",
    features: ["Heavy transport", "Personnel transport", "Last-mile logistics"],
  },
  {
    icon: Package,
    title: "Logistics",
    description: "Complete supply chain management to optimize your mining and industrial operations",
    features: ["Warehousing", "Distribution", "Supply chain management"],
  },
  {
    icon: HardHat,
    title: "Civil Engineering",
    description: "Construction and maintenance of infrastructure adapted to the requirements of the mining sector",
    features: ["Construction", "Maintenance", "Earthworks"],
  },
  {
    icon: Server,
    title: "IT Services",
    description: "Technology solutions to digitize and optimize your operational processes",
    features: ["IT Infrastructure", "Management systems", "Technical support"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Complete solutions to support your mining and industrial operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
