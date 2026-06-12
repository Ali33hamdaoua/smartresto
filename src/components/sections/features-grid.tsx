import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { FEATURES } from "@/data/features";

export function FeaturesGrid() {
  const t = useTranslations("home.features");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((feature, i) => {
          const Icon = FEATURES[i].icon;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <GradientCard className="p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </GradientCard>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
