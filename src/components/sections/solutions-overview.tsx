import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { SOLUTIONS } from "@/data/solutions";

export function SolutionsOverview() {
  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Nos solutions"
        title="Deux produits qui travaillent ensemble"
        subtitle="Adoptez l’un, l’autre, ou les deux — selon les besoins de votre restaurant."
      />
      <Container className="mt-12 grid gap-6 md:grid-cols-2">
        {SOLUTIONS.map((solution, i) => (
          <Reveal key={solution.slug} delay={i * 0.05}>
            <GradientCard className="flex h-full flex-col p-6">
              <solution.icon className="h-9 w-9 text-primary" />
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
                href={solution.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GradientCard>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
