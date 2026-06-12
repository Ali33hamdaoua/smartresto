import { useTranslations } from "next-intl";
import { ClipboardList, HardHat, CalendarClock, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const ICONS = [ClipboardList, HardHat, CalendarClock, RefreshCw];

export function WhyOperations() {
  const t = useTranslations("whyPage.operations");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Container className="mt-12 grid gap-6 sm:grid-cols-2">
        {items.map((point, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-2xl border bg-card p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
