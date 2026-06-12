import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  CsHero,
  CsAbout,
  CsChallenges,
  CsSolutionShowcase,
  CsEcosystem,
  CsResults,
  CsFuture,
  CsTestimonial,
  CsFinalCta,
} from "@/components/sections/case-study";
import { ORDERING, OPERATIONS } from "@/data/case-study";

export const metadata: Metadata = buildMetadata({
  title: "Étude de cas — Maison Burger",
  description:
    "Comment Maison Burger a centralisé ses commandes en ligne, son inventaire, ses fournisseurs, ses achats et ses opérations multi-succursales avec SmartResto.",
  path: "/etude-de-cas/maison-burger",
});

export default function MaisonBurgerCaseStudyPage() {
  return (
    <>
      <CsHero />
      <CsAbout />
      <CsChallenges />

      <CsSolutionShowcase
        eyebrow="Solution 1 — Commandes en ligne"
        title="Une expérience de commande moderne et responsive"
        subtitle="Un site de commande rapide et sans commission, optimisé pour les mobiles, de la découverte du menu jusqu'au paiement."
        frameLabel="maisonburger.ca"
        screens={ORDERING.screens}
        features={ORDERING.features}
        className="py-20 sm:py-28"
      />

      <CsSolutionShowcase
        eyebrow="Solution 2 — Gestion opérationnelle"
        title="Une plateforme unique pour les opérations"
        subtitle="Inventaire, fournisseurs, achats, comptabilité et succursales réunis au même endroit."
        frameLabel="inventory.maisonburger.ca"
        screens={OPERATIONS.screens}
        features={OPERATIONS.features}
        className="bg-muted/30 py-20 sm:py-28"
      />

      <CsEcosystem />
      <CsResults />
      <CsFuture />
      <CsTestimonial />
      <CsFinalCta />
    </>
  );
}
