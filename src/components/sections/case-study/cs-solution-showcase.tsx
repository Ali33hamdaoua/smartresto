import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import type { CsScreen } from "@/data/case-study";

interface CsSolutionShowcaseProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Shown in the placeholder browser/app chrome. */
  frameLabel: string;
  screens: CsScreen[];
  features: string[];
  className?: string;
}

/** Reusable "solution showcase" — placeholder screens grid + feature checklist. */
export function CsSolutionShowcase({
  eyebrow,
  title,
  subtitle,
  frameLabel,
  screens,
  features,
  className,
}: CsSolutionShowcaseProps) {
  return (
    <section className={className ?? "py-20 sm:py-28"}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <Container className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {screens.map((screen, i) => (
          <Reveal key={screen.label} delay={i * 0.05}>
            <figure className="overflow-hidden rounded-xl border bg-card shadow-sm">
              <div className="flex items-center gap-1.5 border-b bg-muted/40 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="ml-2 truncate text-[11px] text-muted-foreground">
                  {frameLabel}
                </span>
              </div>
              <div className="relative aspect-video bg-muted/20">
                <Image
                  src={screen.image}
                  alt={`${screen.label} — ${frameLabel}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="flex items-center gap-2 border-t px-3 py-2 text-xs font-medium text-muted-foreground">
                <screen.icon className="h-3.5 w-3.5 text-primary" />
                {screen.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </Container>

      <Container className="mt-8">
        <Reveal>
          <ul className="grid gap-x-8 gap-y-3 rounded-2xl border bg-card p-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
