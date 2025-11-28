import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Since 2008</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Your Logistics Partner in Katanga</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                TK Logistics is a Congolese company established in Katanga since 2008. We specialize in transport,
                logistics, civil engineering and IT services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Registered at the commercial court of Lubumbashi under the RCCM number 18-B-00845, we offer all types of
                logistics services in support of the mining and industrial sector.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Our Commitment</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Operational Excellence:</strong> International standards and
                    local expertise
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Reliability:</strong> Over 15 years of experience serving the
                    mining industry
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Innovation:</strong> Technology solutions adapted to African
                    challenges
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Details</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong className="text-foreground">Address:</strong> Lubumbashi Township, Gambela Quarter, Chanalele
                Avenue N°22
              </p>
              <p>
                <strong className="text-foreground">RCCM:</strong> 18-B-00845
              </p>
              <p>
                <strong className="text-foreground">City:</strong> Lubumbashi, Katanga, DR Congo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
