import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";

export function CaseStudyPreview() {
  const t = useTranslations("home.caseStudyPreview");
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
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
            <GradientCard className="grid grid-cols-3 gap-4 p-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </GradientCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
