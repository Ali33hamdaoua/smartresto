import Link from "next/link";
import { useTranslations } from "next-intl";
import { TrendingUp, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function CsFuture() {
  const t = useTranslations("caseStudy.future");

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("description")}</p>
        </Reveal>
      </Container>
    </section>
  );
}

export function CsTestimonial() {
  const t = useTranslations("caseStudy.testimonial");

  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <figure className="rounded-2xl border bg-card p-8 text-center sm:p-12">
            <Quote className="mx-auto size-8 fill-primary/15 stroke-primary drop-shadow-sm" />
            <blockquote className="mt-6">
              <p className="text-xl text-balance text-foreground sm:text-2xl">
                {t("quote")}
              </p>
              <figcaption className="mt-8 flex flex-col items-center justify-center">
                <Avatar className="size-12 border border-transparent shadow ring-1 ring-foreground/10">
                  <AvatarFallback className="bg-primary font-semibold text-primary-foreground">
                    AE
                  </AvatarFallback>
                </Avatar>
                <cite className="mt-3 text-lg font-medium text-foreground not-italic">
                  {t("name")}
                </cite>
                <span className="text-muted-foreground">{t("role")}</span>
              </figcaption>
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}

export function CsFinalCta() {
  const t = useTranslations("caseStudy.finalCta");

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
