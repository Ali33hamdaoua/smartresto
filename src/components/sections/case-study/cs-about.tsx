import { useTranslations } from "next-intl";
import { Store, MapPin, Network, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { AboutCarousel } from "./cs-about-carousel";

const MAISON_BURGER_IMAGES = [
  "/maisonburger/maisonburger2.png",
  "/maisonburger/maisonburger3.png",
  "/maisonburger/maisonburger4.png",
];

const ICONS = [Store, MapPin, Network, Sparkles];

export function CsAbout() {
  const t = useTranslations("caseStudy.about");
  const points = t.raw("points") as string[];

  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("paragraph")}</p>
          <ul className="mt-6 space-y-4">
            {points.map((text, i) => {
              const Icon = ICONS[i];
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
          <AboutCarousel images={MAISON_BURGER_IMAGES} alt="Maison Burger" />
        </Reveal>
      </Container>
    </section>
  );
}
