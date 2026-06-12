import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { BadgeCheck, CircleDot, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function CsHero() {
  const t = useTranslations("caseStudy.hero");
  return (
    <section className="relative overflow-hidden border-b bg-muted/30 pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.64_0.21_39/0.10),transparent)]"
      />
      <Container className="text-center">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="gap-1.5">
              <BadgeCheck className="h-3.5 w-3.5 text-primary" />
              {t("badgeClient")}
            </Badge>
            <Badge variant="secondary" className="gap-1.5">
              <CircleDot className="h-3.5 w-3.5 text-primary" />
              {t("badgeProduction")}
            </Badge>
            <Badge variant="secondary" className="gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-primary" />
              {t("badgeMultiBranch")}
            </Badge>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="/demo">{t("cta")}</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 h-[22rem] max-w-5xl overflow-hidden rounded-2xl border-4 border-neutral-800 bg-neutral-900 shadow-2xl sm:h-[26rem]">
            <Image
              src="/inventaire/dashboard.png"
              alt="Tableau de bord SmartResto utilisé par Maison Burger"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
