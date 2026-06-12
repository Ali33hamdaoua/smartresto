import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { buildMetadata } from "@/lib/seo";
import { getSolution } from "@/data/solutions";
import { PageHeader } from "@/components/shared/page-header";
import { SolutionDetail } from "@/components/sections/solution-detail";
import { Cta } from "@/components/sections/cta";

const solution = getSolution("gestion-stock");

export const metadata: Metadata = buildMetadata({
  title: "Gestion de stock",
  description:
    "Inventaire, fournisseurs, achats et comptabilité dans une seule plateforme multi-succursales.",
  path: "/solutions/gestion-stock",
});

export default function GestionStockPage() {
  const td = useTranslations("solutionDetail");
  const ts = useTranslations("home.solutions");
  if (!solution) notFound();
  const content = (ts.raw("items") as { name: string; description: string }[])[1];
  return (
    <>
      <PageHeader
        eyebrow={td("eyebrow")}
        title={content.name}
        description={content.description}
      />
      <SolutionDetail solution={solution} />
      <Cta />
    </>
  );
}
