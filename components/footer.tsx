import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Image
              src="/images/tk-20logistique.png"
              alt="TK Logistics Logo"
              width={180}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Votre partenaire logistique de confiance au Katanga depuis 2008. Solutions complètes pour le secteur
              minier et industriel.
            </p>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Your trusted logistics partner in Katanga since 2008. Complete solutions for the mining and industrial
              sector.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Transport
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Logistique
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Génie Civil
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services IT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#sectors" className="text-muted-foreground hover:text-primary transition-colors">
                  Sectors
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TK Logistics. Tous droits réservés. | RCCM: 18-B-00845</p>
          <p>© {new Date().getFullYear()} TK Logistics. All rights reserved. | RCCM: 18-B-00845</p>
        </div>
      </div>
    </footer>
  )
}
