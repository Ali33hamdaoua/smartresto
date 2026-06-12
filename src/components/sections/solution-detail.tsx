import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import type { Solution } from "@/types";

export function SolutionDetail({ solution }: { solution: Solution }) {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <solution.icon className="h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            {solution.tagline}
          </h2>
          <p className="mt-4 text-muted-foreground">{solution.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/demo">Demander une démo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={solution.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir en ligne
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <GradientCard className="p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Ce qui est inclus
            </h3>
            <ul className="mt-5 space-y-4">
              {solution.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </GradientCard>
        </Reveal>
      </Container>
    </section>
  );
}
