"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Let's discuss your logistics project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
                <CardDescription className="text-muted-foreground">Our team is at your disposal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      Lubumbashi Township
                      <br />
                      Gambela Quarter
                      <br />
                      Chanalele Avenue N°22
                      <br />
                      Katanga, DR Congo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Phone</h4>
                    <p className="text-sm text-muted-foreground">+243 986 6661 819</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Email</h4>
                    <p className="text-sm text-muted-foreground">contact@tklogistics.cd</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground">Certified Company</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Registered at the commercial court of Lubumbashi under number{" "}
                  <strong className="text-foreground">RCCM: 18-B-00845</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Request Quote</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out this form and we will contact you quickly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Full name" className="bg-background border-border text-foreground" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="bg-background border-border text-foreground" />
                </div>
                <div>
                  <Input placeholder="Company" className="bg-background border-border text-foreground" />
                </div>
                <div>
                  <Input placeholder="Phone" className="bg-background border-border text-foreground" />
                </div>
                <div>
                  <Textarea
                    placeholder="Describe your project..."
                    rows={4}
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
