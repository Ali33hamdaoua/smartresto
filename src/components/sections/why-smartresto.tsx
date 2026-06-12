import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { WHY_SMARTRESTO } from "@/data/why";

export function WhySmartResto() {
  const t = useTranslations("home.why");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = WHY_SMARTRESTO[i].icon;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <GradientCard className="flex h-full flex-col items-start p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </GradientCard>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
