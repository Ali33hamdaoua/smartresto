import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const USED_MODULES = [
  "Commandes en ligne",
  "Inventaire",
  "Fournisseurs",
  "Achats",
  "Comptabilité",
  "Multi-succursales",
];

export function WhyMaisonBurger() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge variant="secondary" className="mb-4">
              Déjà utilisé en production
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Maison Burger pilote tout avec SmartResto
            </h2>
            <p className="mt-4 text-muted-foreground">
              Notre premier client en production utilise l'ensemble de la
              plateforme au quotidien, sur plusieurs succursales.
            </p>
            <Button asChild className="mt-6">
              <Link href="/etude-de-cas/maison-burger">
                Découvrir l'étude de cas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3 rounded-2xl border bg-card p-6">
              {USED_MODULES.map((m) => (
                <div key={m} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function WhyFinalCta() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Prêt à moderniser les opérations de votre restaurant ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Découvrez comment SmartResto peut s'adapter à votre établissement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/demo">Demander une démo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
