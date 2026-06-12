import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { SCATTERED_TOOLS } from "@/data/why-page";

export function WhyTools() {
  const t = useTranslations("whyPage.tools");
  const items = t.raw("items") as { title: string; description: string }[];
  const consequences = t.raw("consequences") as string[];

  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((tool, i) => {
          const Icon = SCATTERED_TOOLS[i].icon;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <GradientCard className="flex h-full flex-col p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{tool.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </GradientCard>
            </Reveal>
          );
        })}
      </Container>

      <Container className="mt-10">
        <Reveal>
          <div className="rounded-2xl border border-dashed bg-muted/30 p-6 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              {t("consequencesLabel")}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {consequences.map((c) => (
                <span
                  key={c}
                  className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
