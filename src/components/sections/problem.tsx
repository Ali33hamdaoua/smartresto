import { AlertTriangle, Percent, Layers } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";

const PROBLEMS = [
  {
    icon: Percent,
    title: "Des commissions qui rongent vos marges",
    description:
      "Les places de marché prélèvent un pourcentage sur chaque commande, jusqu’à effacer votre profit.",
  },
  {
    icon: Layers,
    title: "Des outils dispersés",
    description:
      "Caisse, inventaire, fournisseurs et comptabilité vivent dans des systèmes qui ne se parlent pas.",
  },
  {
    icon: AlertTriangle,
    title: "Aucune vision globale",
    description:
      "Difficile de suivre vos coûts réels et la performance de chaque succursale au quotidien.",
  },
];

export function Problem() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Le constat"
        title="Gérer un restaurant ne devrait pas être aussi compliqué"
        subtitle="Les restaurateurs jonglent avec trop d’outils — et trop de commissions."
      />
      <Container className="mt-12 grid gap-6 md:grid-cols-3">
        {PROBLEMS.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 0.05}>
            <GradientCard className="p-6">
              <problem.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold">{problem.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {problem.description}
              </p>
            </GradientCard>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
