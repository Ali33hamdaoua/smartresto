import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { GradientCard } from "@/components/shared/gradient-card";
import { LeadForm } from "@/components/shared/lead-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Une question ? Contactez l’équipe SmartResto.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre restaurant"
        description="Notre équipe vous répond rapidement."
      />
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Nous joindre</h2>
              <p className="text-muted-foreground">
                Remplissez le formulaire et nous reviendrons vers vous sous peu.
                Vous pouvez aussi nous écrire directement.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GradientCard className="p-6 sm:p-8">
              <LeadForm variant="contact" submitLabel="Envoyer le message" />
            </GradientCard>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
