import { useTranslations } from "next-intl";
import { AlertTriangle, Percent, Layers } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";

const ICONS = [Percent, Layers, AlertTriangle];

export function Problem() {
  const t = useTranslations("home.problem");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Container className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((problem, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={i} delay={i * 0.05}>
              <GradientCard className="p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">{problem.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </GradientCard>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
