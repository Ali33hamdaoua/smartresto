import type { Metadata } from "next";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("caseStudy");
  const s1Screens = t.raw("solution1.screens") as string[];
  const s1Features = t.raw("solution1.features") as string[];
  const s2Screens = t.raw("solution2.screens") as string[];
  const s2Features = t.raw("solution2.features") as string[];

  return (
    <>
      <CsHero />
      <CsAbout />
      <CsChallenges />

      <CsSolutionShowcase
        eyebrow={t("solution1.eyebrow")}
        title={t("solution1.title")}
        subtitle={t("solution1.subtitle")}
        frameLabel="maisonburger.ca"
        screens={ORDERING.screens.map((sc, i) => ({ ...sc, label: s1Screens[i] }))}
        features={s1Features}
        className="py-20 sm:py-28"
      />

      <CsSolutionShowcase
        eyebrow={t("solution2.eyebrow")}
        title={t("solution2.title")}
        subtitle={t("solution2.subtitle")}
        frameLabel="inventory.maisonburger.ca"
        screens={OPERATIONS.screens.map((sc, i) => ({ ...sc, label: s2Screens[i] }))}
        features={s2Features}
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
