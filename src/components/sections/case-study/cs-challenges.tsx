import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { CHALLENGES } from "@/data/case-study";

export function CsChallenges() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Avant SmartResto"
        title="Les défis rencontrés"
        subtitle="Une croissance freinée par des outils dispersés et des processus manuels."
      />
      <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CHALLENGES.map((challenge, i) => (
          <Reveal key={challenge.title} delay={i * 0.05}>
            <GradientCard className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <challenge.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{challenge.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {challenge.description}
              </p>
            </GradientCard>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
