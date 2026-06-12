import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { SOLUTIONS } from "@/data/solutions";

interface SolutionContent {
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export function SolutionsOverview() {
  const t = useTranslations("home.solutions");
  const items = t.raw("items") as SolutionContent[];

  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Container className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((solution, i) => {
          const meta = SOLUTIONS[i];
          const Icon = meta.icon;
          return (
            <Reveal key={meta.slug} delay={i * 0.05}>
              <GradientCard className="flex h-full flex-col p-6">
                <Icon className="h-9 w-9 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{solution.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {solution.tagline}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {solution.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={meta.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {t("learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </GradientCard>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
