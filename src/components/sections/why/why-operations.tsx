import { ClipboardList, HardHat, CalendarClock, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const POINTS = [
  {
    icon: ClipboardList,
    title: "Des besoins réels",
    description:
      "Conçu à partir des problèmes concrets rencontrés par les restaurateurs, pas d'une liste de fonctionnalités.",
  },
  {
    icon: HardHat,
    title: "Pensé pour le terrain",
    description:
      "Les flux suivent la réalité d'un service : commande, préparation, stock, réapprovisionnement.",
  },
  {
    icon: CalendarClock,
    title: "Exploitation quotidienne",
    description:
      "Pensé pour être utilisé chaque jour par les équipes, simplement, sans formation lourde.",
  },
  {
    icon: RefreshCw,
    title: "Amélioration continue",
    description:
      "La plateforme évolue au rythme des retours du terrain et des besoins qui émergent.",
  },
];

export function WhyOperations() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Crédibilité"
        title="Pensé pour les opérations réelles"
        subtitle="SmartResto a été construit autour des vrais flux de travail d'un restaurant — et il tourne déjà en production chez Maison Burger."
      />
      <Container className="mt-12 grid gap-6 sm:grid-cols-2">
        {POINTS.map((point, i) => (
          <Reveal key={point.title} delay={i * 0.05}>
            <div className="flex h-full gap-4 rounded-2xl border bg-card p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
