import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { RESULTS } from "@/data/case-study";

export function CsResults() {
  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Résultat"
        title="Une plateforme centralisée pour le quotidien"
        subtitle="Maison Burger dispose désormais d'une plateforme unique pour gérer ses opérations quotidiennes depuis une seule interface."
      />
      <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {RESULTS.map((result, i) => (
          <Reveal key={result.title} delay={i * 0.05}>
            <GradientCard className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <result.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{result.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {result.description}
              </p>
            </GradientCard>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
