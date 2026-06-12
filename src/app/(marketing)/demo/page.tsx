import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { LeadForm } from "@/components/shared/lead-form";

export const metadata: Metadata = buildMetadata({
  title: "Demander une démo",
  description:
    "Réservez une démo gratuite de SmartResto et découvrez la plateforme en action.",
  path: "/demo",
});

export default function DemoPage() {
  const t = useTranslations("demo");
  const benefits = t.raw("benefits") as string[];

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">{t("benefitsTitle")}</h2>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GradientCard className="p-6 sm:p-8">
              <LeadForm variant="demo" />
            </GradientCard>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
