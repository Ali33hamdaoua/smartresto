import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

export function WhyHero() {
  const t = useTranslations("whyPage.hero");
  const cycleWords = t.raw("cycleWords") as string[];

  return (
    <section className="relative overflow-hidden border-b bg-muted/30 pb-20 pt-28 sm:pb-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.64_0.21_39/0.10),transparent)]"
      />
      <Container className="text-center">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {t("eyebrow")}
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {t("subtitlePre")}{" "}
            <AnimatedTextCycle
              words={cycleWords}
              interval={2200}
              className="text-primary"
            />{" "}
            {t("subtitlePost")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/demo">{t("ctaPrimary")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/solutions">{t("ctaSecondary")}</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
