import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { Faq } from "@/components/sections/faq";
import { PRICING_PLANS } from "@/data/pricing";

export const metadata: Metadata = buildMetadata({
  title: "Tarifs",
  description:
    "Des forfaits adaptés à chaque restaurant. Demandez un devis personnalisé.",
  path: "/tarifs",
});

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs"
        title="Un forfait pour chaque restaurant"
        description="Une tarification simple et sans commission. Contactez-nous pour un devis adapté à votre établissement."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.05} className="h-full">
              <GradientCard
                active={plan.highlighted}
                className="flex h-full flex-col p-8"
              >
                {plan.highlighted && (
                  <Badge className="mb-4 w-fit">Le plus populaire</Badge>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-2 text-3xl font-bold">{plan.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
              </GradientCard>
            </Reveal>
          ))}
        </Container>
      </section>

      <Faq />
    </>
  );
}
