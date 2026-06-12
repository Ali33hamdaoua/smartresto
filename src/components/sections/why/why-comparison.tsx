import { Check, X, Minus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { COMPARISON_ROWS, type Support } from "@/data/why-page";

function SupportCell({ value }: { value: Support }) {
  if (value === "yes") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
        <Check className="h-4 w-4 text-primary" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted">
        <Minus className="h-4 w-4 text-muted-foreground" />
      </span>
    );
  }
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted">
      <X className="h-4 w-4 text-muted-foreground/60" />
    </span>
  );
}

export function WhyComparison() {
  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Comparatif"
        title="Une meilleure alternative aux solutions fragmentées"
        subtitle="Ce que vous obtenez avec SmartResto, par rapport aux tableurs et aux outils séparés."
      />

      <Container className="mt-12 max-w-3xl">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/40 hover:bg-muted/40">
                  <TableHead className="text-foreground">
                    Fonctionnalité
                  </TableHead>
                  <TableHead className="text-center font-semibold text-primary">
                    SmartResto
                  </TableHead>
                  <TableHead className="text-center text-foreground">
                    Excel
                  </TableHead>
                  <TableHead className="text-center text-foreground">
                    Outils séparés
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARISON_ROWS.map((row) => (
                  <TableRow key={row.label}>
                    <TableCell className="font-medium">{row.label}</TableCell>
                    <TableCell
                      className={cn(
                        "text-center",
                        "bg-primary/[0.03]",
                      )}
                    >
                      <SupportCell value={row.smartresto} />
                    </TableCell>
                    <TableCell className="text-center">
                      <SupportCell value={row.excel} />
                    </TableCell>
                    <TableCell className="text-center">
                      <SupportCell value={row.separate} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Inclus
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Minus className="h-3.5 w-3.5" /> Partiel / manuel
            </span>
            <span className="inline-flex items-center gap-1.5">
              <X className="h-3.5 w-3.5" /> Non couvert
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
