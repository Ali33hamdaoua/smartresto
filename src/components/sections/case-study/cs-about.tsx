import { Store, MapPin, Network, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { AboutCarousel } from "./cs-about-carousel";

const MAISON_BURGER_IMAGES = [
  "/maisonburger/maisonburger2.png",
  "/maisonburger/maisonburger3.png",
  "/maisonburger/maisonburger4.png",
];

const POINTS = [
  { icon: Store, text: "Restaurant spécialisé dans les burgers" },
  { icon: MapPin, text: "Plusieurs succursales en activité" },
  { icon: Network, text: "Un besoin clair de centralisation des opérations" },
  { icon: Sparkles, text: "Une volonté de digitaliser le quotidien" },
];

export function CsAbout() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Le client
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            À propos de Maison Burger
          </h2>
          <p className="mt-4 text-muted-foreground">
            Maison Burger est un restaurant spécialisé dans les burgers, présent
            sur plusieurs succursales. En forte croissance, l'enseigne avait
            besoin de réunir ses commandes, ses stocks et ses opérations dans un
            seul outil — et de digitaliser un quotidien encore largement géré à
            la main.
          </p>
          <ul className="mt-6 space-y-4">
            {POINTS.map((point) => (
              <li key={point.text} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <point.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="pt-1.5 text-sm">{point.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <AboutCarousel images={MAISON_BURGER_IMAGES} alt="Maison Burger" />
        </Reveal>
      </Container>
    </section>
  );
}
