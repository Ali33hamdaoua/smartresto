import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { MODULES } from "@/data/case-study";

export function CsEcosystem() {
  const t = useTranslations("caseStudy.ecosystem");
  const labels = t.raw("modules") as string[];

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Container className="mt-14">
        {/* Diagram (md and up) */}
        <Reveal>
          <div className="relative mx-auto hidden aspect-square max-w-2xl md:block">
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {MODULES.map((m) => (
                <line
                  key={m.label}
                  x1="50"
                  y1="50"
                  x2={m.cx}
                  y2={m.cy}
                  stroke="var(--color-primary)"
                  strokeOpacity="0.3"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-primary text-center text-primary-foreground shadow-lg">
              <span className="text-sm font-bold leading-tight">{t("hub")}</span>
              <span className="text-[10px] text-primary-foreground/80">
                {t("hubSub")}
              </span>
            </div>

            {MODULES.map((m, i) => (
              <div
                key={m.label}
                className="absolute flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                style={{ left: `${m.cx}%`, top: `${m.cy}%` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border bg-card shadow-sm">
                  <m.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium">{labels[i]}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stacked fallback (mobile) */}
        <div className="md:hidden">
          <div className="mx-auto mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-primary text-center text-primary-foreground shadow-lg">
            <span className="text-sm font-bold">{t("hub")}</span>
            <span className="text-[10px] text-primary-foreground/80">
              {t("hubSub")}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {MODULES.map((m, i) => (
              <div
                key={m.label}
                className="flex items-center gap-3 rounded-xl border bg-card p-4"
              >
                <m.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{labels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
