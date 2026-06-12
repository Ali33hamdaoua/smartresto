import Link from "next/link";
import { useTranslations } from "next-intl";
import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import type { Solution } from "@/types";

interface SolutionContent {
  tagline: string;
  description: string;
  features: string[];
}

export function SolutionDetail({ solution }: { solution: Solution }) {
  const td = useTranslations("solutionDetail");
  const ts = useTranslations("home.solutions");
  const items = ts.raw("items") as SolutionContent[];
  const idx = solution.slug === "commande-en-ligne" ? 0 : 1;
  const content = items[idx];

  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <solution.icon className="h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            {content.tagline}
          </h2>
          <p className="mt-4 text-muted-foreground">{content.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/demo">{td("requestDemo")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={solution.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {td("viewOnline")}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <GradientCard className="p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              {td("whatsIncluded")}
            </h3>
            <ul className="mt-5 space-y-4">
              {content.features.map((feature) => (
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
