import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  BadgeCheck,
  ShoppingBag,
  Home,
  UtensilsCrossed,
  Building2,
  Store,
  MapPin,
  Wallet,
  Smartphone,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { CsSolutionShowcase } from "@/components/sections/case-study/cs-solution-showcase";
import { AboutCarousel } from "@/components/sections/case-study/cs-about-carousel";
import { CsFinalCta } from "@/components/sections/case-study/cs-closing";

export const metadata: Metadata = buildMetadata({
  title: "Étude de cas — Yumiburger",
  description:
    "Comment Yumiburger a lancé sa commande en ligne sans commission avec SmartResto.",
  path: "/etude-de-cas/yumiburger",
});

const ABOUT_IMAGES = ["/yumiburger/yumiburger.png", "/yumiburger/yumiburger2.png"];
const ABOUT_ICONS = [Store, MapPin, Wallet, Smartphone];

const SCREEN_META = [
  { icon: Home, image: "/yumiburger/restauration/accueil.png" },
  { icon: UtensilsCrossed, image: "/yumiburger/restauration/menu.png" },
  { icon: Building2, image: "/yumiburger/restauration/succursale.png" },
];

export default function YumiburgerCaseStudyPage() {
  const t = useTranslations("caseStudy.yumi");
  const aboutPoints = t.raw("aboutPoints") as string[];
  const screenLabels = t.raw("screens") as string[];
  const features = t.raw("features") as string[];

  return (
    <>
      {/* Hero */}
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
                <ShoppingBag className="h-3.5 w-3.5 text-primary" />
                {t("badgeOrdering")}
              </Badge>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {t("heroSubtitle")}
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/demo">{t("cta")}</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-14 h-[22rem] max-w-5xl overflow-hidden rounded-2xl border bg-card shadow-2xl sm:h-[26rem]">
              <Image
                src="/yumiburger/restauration/accueil.png"
                alt="Yumiburger"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* About */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              {t("aboutEyebrow")}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t("aboutTitle")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("aboutParagraph")}</p>
            <ul className="mt-6 space-y-4">
              {aboutPoints.map((text, i) => {
                const Icon = ABOUT_ICONS[i];
                return (
                  <li key={text} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="pt-1.5 text-sm">{text}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <AboutCarousel images={ABOUT_IMAGES} alt="Yumiburger" />
          </Reveal>
        </Container>
      </section>

      {/* Solution — Commande en ligne */}
      <CsSolutionShowcase
        eyebrow={t("solutionEyebrow")}
        title={t("solutionTitle")}
        subtitle={t("solutionSubtitle")}
        frameLabel="yumiburger.com"
        screens={SCREEN_META.map((sc, i) => ({ ...sc, label: screenLabels[i] }))}
        features={features}
        className="bg-muted/30 py-20 sm:py-28"
      />

      <CsFinalCta />
    </>
  );
}
