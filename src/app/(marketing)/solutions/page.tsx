import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { SolutionsOverview } from "@/components/sections/solutions-overview";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Découvrez les deux solutions SmartResto : commande en ligne sans commission et gestion de stock multi-succursales.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos solutions"
        title="Deux produits, une plateforme pour votre restaurant"
        description="Adoptez la commande en ligne, la gestion de stock, ou les deux — selon vos besoins."
      />
      <SolutionsOverview />
      <Cta />
    </>
  );
}
