import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = buildMetadata({
  title: "Études de cas",
  description:
    "Des restaurants qui utilisent SmartResto en production : commande en ligne, inventaire et gestion multi-succursales.",
  path: "/etude-de-cas",
});

const CASE_STUDIES = [
  {
    name: "Maison Burger",
    href: "/etude-de-cas/maison-burger",
    image: "/maisonburger/maisonburger2.png",
    tags: ["Commande en ligne", "Gestion opérationnelle"],
    description:
      "Toutes les opérations centralisées : commandes, inventaire, fournisseurs, achats, comptabilité et multi-succursales.",
  },
  {
    name: "Yumiburger",
    href: "/etude-de-cas/yumiburger",
    image: "/yumiburger/yumiburger.png",
    tags: ["Commande en ligne"],
    description:
      "Une commande en ligne moderne et sans commission, pour vendre en direct à ses clients.",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Études de cas"
        title="Ils utilisent SmartResto en production"
        description="Découvrez comment des restaurants pilotent leurs opérations avec SmartResto."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-8 md:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.href} delay={i * 0.05}>
              <Link
                href={study.href}
                className="group block overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={study.image}
                    alt={study.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{study.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {study.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Lire l'étude de cas
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <Cta />
    </>
  );
}
