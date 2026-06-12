import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  WhyHero,
  WhyTools,
  WhyEcosystem,
  WhyComparison,
  WhyOperations,
  WhyRestaurantTypes,
  WhyBenefits,
  WhyMaisonBurger,
  WhyFinalCta,
} from "@/components/sections/why";

export const metadata: Metadata = buildMetadata({
  title: "Pourquoi SmartResto",
  description:
    "Pourquoi choisir SmartResto plutôt que des tableurs ou des outils séparés : une seule plateforme pour centraliser vos commandes, votre inventaire, vos fournisseurs et vos opérations.",
  path: "/pourquoi-smartresto",
});

export default function PourquoiSmartRestoPage() {
  return (
    <>
      <WhyHero />
      <WhyTools />
      <WhyEcosystem />
      <WhyComparison />
      <WhyOperations />
      <WhyRestaurantTypes />
      <WhyBenefits />
      <WhyMaisonBurger />
      <WhyFinalCta />
    </>
  );
}
