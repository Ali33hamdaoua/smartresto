import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  if (!solution) notFound();
  return (
    <>
      <PageHeader
        eyebrow="Solution"
        title={solution.name}
        description={solution.description}
      />
      <SolutionDetail solution={solution} />
      <Cta />
    </>
  );
}
