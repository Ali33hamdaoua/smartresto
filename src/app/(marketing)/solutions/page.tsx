import type { Metadata } from "next";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("solutionsPage");
  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <SolutionsOverview />
      <Cta />
    </>
  );
}
