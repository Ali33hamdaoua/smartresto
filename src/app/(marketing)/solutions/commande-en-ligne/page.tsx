import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { buildMetadata } from "@/lib/seo";
import { getSolution } from "@/data/solutions";
import { PageHeader } from "@/components/shared/page-header";
import { SolutionDetail } from "@/components/sections/solution-detail";
import { Cta } from "@/components/sections/cta";

const solution = getSolution("commande-en-ligne");

export const metadata: Metadata = buildMetadata({
  title: "Commande en ligne",
  description:
    "Un site de commande en ligne rapide et sans commission pour votre restaurant.",
  path: "/solutions/commande-en-ligne",
});

export default function CommandeEnLignePage() {
  const td = useTranslations("solutionDetail");
  const ts = useTranslations("home.solutions");
  if (!solution) notFound();
  const content = (ts.raw("items") as { name: string; description: string }[])[0];
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
