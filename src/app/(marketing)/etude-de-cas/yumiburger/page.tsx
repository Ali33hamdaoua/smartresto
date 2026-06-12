import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ShoppingBag,
  Home,
  UtensilsCrossed,
  Building2,
  Store,
  MapPin,
  Wallet,
  Smartphone,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { CsSolutionShowcase } from "@/components/sections/case-study/cs-solution-showcase";
import { AboutCarousel } from "@/components/sections/case-study/cs-about-carousel";
import { CsFinalCta } from "@/components/sections/case-study/cs-closing";

export const metadata: Metadata = buildMetadata({
  title: "Étude de cas — Yumiburger",
  description:
    "Comment Yumiburger a lancé sa commande en ligne sans commission avec SmartResto.",
  path: "/etude-de-cas/yumiburger",
});

const ABOUT_IMAGES = ["/yumiburger/yumiburger.png", "/yumiburger/yumiburger2.png"];

const ABOUT_POINTS = [
  { icon: Store, text: "Enseigne de burgers en pleine expansion" },
  { icon: MapPin, text: "Présence sur plusieurs points de vente" },
  { icon: Wallet, text: "Volonté de vendre en ligne, sans commission" },
  { icon: Smartphone, text: "Une expérience de commande moderne et mobile" },
];

const ORDERING_SCREENS = [
  { icon: Home, label: "Page d'accueil", image: "/yumiburger/restauration/accueil.png" },
  { icon: UtensilsCrossed, label: "Menu", image: "/yumiburger/restauration/menu.png" },
  { icon: Building2, label: "Succursales", image: "/yumiburger/restauration/succursale.png" },
];

const ORDERING_FEATURES = [
  "Livraison",
  "Ramassage",
  "Paiement en ligne sécurisé",
  "Gestion du menu",
  "Expérience responsive mobile",
  "Gestion des commandes",
];

export default function YumiburgerCaseStudyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-muted/30 pb-20 pt-28 sm:pb-28 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.64_0.21_39/0.10),transparent)]"
        />
        <Container className="text-center">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              <Badge variant="secondary" className="gap-1.5">
                <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                Client SmartResto
              </Badge>
              <Badge variant="secondary" className="gap-1.5">
                <ShoppingBag className="h-3.5 w-3.5 text-primary" />
                Commande en ligne
              </Badge>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Comment Yumiburger a lancé sa commande en ligne
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Yumiburger utilise la solution de commande en ligne SmartResto pour
              vendre directement à ses clients — rapidement et sans commission.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/demo">Demander une démo</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-14 h-[22rem] max-w-5xl overflow-hidden rounded-2xl border bg-card shadow-2xl sm:h-[26rem]">
              <Image
                src="/yumiburger/restauration/accueil.png"
                alt="Site de commande en ligne de Yumiburger"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* About */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Le client
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              À propos de Yumiburger
            </h2>
            <p className="mt-4 text-muted-foreground">
              Yumiburger est une enseigne de burgers en pleine croissance. Pour
              accompagner son développement, elle souhaitait proposer une
              commande en ligne rapide, à son image, et garder la main sur ses
              ventes — sans commissions de plateformes tierces.
            </p>
            <ul className="mt-6 space-y-4">
              {ABOUT_POINTS.map((point) => (
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
            <AboutCarousel images={ABOUT_IMAGES} alt="Yumiburger" />
          </Reveal>
        </Container>
      </section>

      {/* Solution 1 — Commande en ligne */}
      <CsSolutionShowcase
        eyebrow="Solution — Commande en ligne"
        title="Une expérience de commande moderne et responsive"
        subtitle="Un site de commande rapide et sans commission, optimisé pour les mobiles, de la découverte du menu jusqu'au paiement."
        frameLabel="yumiburger.com"
        screens={ORDERING_SCREENS}
        features={ORDERING_FEATURES}
        className="bg-muted/30 py-20 sm:py-28"
      />

      <CsFinalCta />
    </>
  );
}
