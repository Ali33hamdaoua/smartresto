"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DashboardMockup } from "./dashboard-mockup";

export function ProductShowcase() {
  return (
    <section className="overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-3xl px-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              La plateforme
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Pilotez votre restaurant depuis une seule plateforme
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
              Commandes en ligne, inventaire, achats, fournisseurs, comptabilité
              et gestion multi-succursales réunis dans une seule solution.
            </p>
          </div>
        }
      >
        <DashboardMockup />
      </ContainerScroll>
    </section>
  );
}
