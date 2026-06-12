import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { DeploymentJourney } from "@/components/sections/deployment-journey";

export const metadata: Metadata = buildMetadata({
  title: "Déploiement en 7 jours",
  description:
    "Nous configurons votre plateforme, importons vos données et accompagnons votre équipe jusqu'à la mise en production.",
  path: "/deploiement",
});

export default function DeploiementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Déploiement"
        title="Votre restaurant opérationnel en 7 jours"
        description="Nous configurons votre plateforme, importons vos données et accompagnons votre équipe jusqu'à la mise en production."
      />

      <DeploymentJourney />

      {/* Final CTA */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Prêt à lancer votre plateforme ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Réservez une démo et découvrez comment SmartResto met votre
                restaurant en production en une semaine.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/demo">Demander une démo</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
