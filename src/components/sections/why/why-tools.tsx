import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { SCATTERED_TOOLS, SCATTERED_CONSEQUENCES } from "@/data/why-page";

export function WhyTools() {
  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Le constat"
        title="Les restaurants utilisent trop d'outils différents"
        subtitle="Chaque outil vit dans son coin — et c'est là que les problèmes commencent."
      />

      <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {SCATTERED_TOOLS.map((tool, i) => (
          <Reveal key={tool.title} delay={i * 0.05}>
            <GradientCard className="flex h-full flex-col p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <tool.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{tool.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tool.description}
              </p>
            </GradientCard>
          </Reveal>
        ))}
      </Container>

      <Container className="mt-10">
        <Reveal>
          <div className="rounded-2xl border border-dashed bg-muted/30 p-6 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Des systèmes déconnectés entraînent&nbsp;:
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {SCATTERED_CONSEQUENCES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border bg-background px-4 py-1.5 text-sm font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
