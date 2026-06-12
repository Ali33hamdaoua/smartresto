"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  ShoppingCart,
  Boxes,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { FlipWords } from "@/components/ui/flip-words";
import DisplayCards from "@/components/ui/display-cards";

const HERO_CARDS = [
  {
    icon: <ShoppingCart className="size-4 text-primary-foreground" />,
    title: "Sans commission",
    description: "Vendez en ligne, gardez vos marges",
    date: "Commande en ligne",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Boxes className="size-4 text-primary-foreground" />,
    title: "Stocks maîtrisés",
    description: "Votre inventaire suivi en temps réel",
    date: "Gestion de stock",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Building2 className="size-4 text-primary-foreground" />,
    title: "Tout centralisé",
    description: "Vos succursales pilotées d'un seul endroit",
    date: "Multi-succursales",
    className:
      "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

// WebGL beams render on the client only (no SSR) to avoid hydration issues
// and keep the heavy three.js bundle out of the server render.
const Beams = dynamic(
  () => import("@/components/ui/ethereal-beams").then((m) => m.Beams),
  { ssr: false },
);

const OPERATIONS = ["opérations", "fournisseurs", "achats", "succursales"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
      {/* Animated 3D light beams background */}
      <div aria-hidden className="absolute inset-0 z-0">
        <Beams
          beamWidth={2.5}
          beamHeight={18}
          beamNumber={12}
          lightColor="#ff8a4c"
          speed={2}
          noiseIntensity={1.6}
          scale={0.18}
          rotation={30}
        />
      </div>

      {/* Readability + blend-to-page overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/90 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Commandes en ligne + Gestion opérationnelle
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl xl:text-6xl"
            >
              Centralisez vos commandes, vos stocks et vos{" "}
              <FlipWords words={OPERATIONS} className="px-0" /> restaurant.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mx-auto mt-6 max-w-xl text-lg text-white/70 lg:mx-0"
            >
              SmartResto aide les restaurants à vendre en ligne, gérer leurs
              inventaires, suivre leurs achats, organiser leurs fournisseurs et
              piloter plusieurs succursales depuis une seule plateforme.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button asChild size="lg" className="shadow-2xl shadow-primary/25">
                <Link href="/demo">Demander une démo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10 hover:text-white"
              >
                <Link href="/solutions">Voir les solutions</Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/60"
            >
              <MapPin className="h-4 w-4 text-primary" />
              Solution déjà utilisée en production par{" "}
              <span className="font-medium text-white">Maison Burger</span> au
              Canada.
            </motion.p>
          </div>

          {/* Right — stacked highlight cards (dark-themed to blend with the beams) */}
          <div className="flex justify-center py-10 lg:justify-end lg:py-0">
            <div className="dark origin-center scale-[0.65] sm:scale-90 lg:scale-100">
              <DisplayCards cards={HERO_CARDS} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
