import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Container className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-balance text-muted-foreground",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        )}
      </Reveal>
    </Container>
  );
}
