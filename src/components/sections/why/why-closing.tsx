import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function WhyMaisonBurger() {
  const t = useTranslations("whyPage.maisonBurger");
  const modules = t.raw("modules") as string[];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge variant="secondary" className="mb-4">
              {t("badge")}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("description")}</p>
            <Button asChild className="mt-6">
              <Link href="/etude-de-cas/maison-burger">
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3 rounded-2xl border bg-card p-6">
              {modules.map((m) => (
                <div key={m} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function WhyFinalCta() {
  const t = useTranslations("whyPage.finalCta");

  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/demo">{t("primary")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/contact">{t("secondary")}</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
