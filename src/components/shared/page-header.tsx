import { Container } from "./container";
import { Reveal } from "./reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/** Standard hero band for inner (non-home) pages. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b bg-muted/30 pb-16 pt-28 sm:pb-20 sm:pt-32">
      <Container className="text-center">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
