import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { FEATURES } from "@/data/features";

export function FeaturesGrid() {
  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Fonctionnalités"
        title="Tout ce qu’il faut pour piloter votre restaurant"
        subtitle="De la première commande en ligne jusqu’à la comptabilité multi-succursales."
      />
      <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.05}>
            <GradientCard className="p-6">
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </GradientCard>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
