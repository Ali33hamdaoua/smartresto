import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { BENEFITS } from "@/data/why-page";

export function WhyBenefits() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Ce que vous gagnez"
        title="Des résultats concrets, pas une liste de fonctions"
        subtitle="L'objectif n'est pas d'ajouter un outil de plus, mais d'améliorer la façon dont votre restaurant fonctionne."
      />
      <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit, i) => (
          <Reveal key={benefit.title} delay={i * 0.05}>
            <GradientCard className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </GradientCard>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
