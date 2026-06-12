import { useTranslations } from "next-intl";
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
  const t = useTranslations("whyPage.comparison");
  const rows = t.raw("rows") as string[];

  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Container className="mt-12 max-w-3xl">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/40 hover:bg-muted/40">
                  <TableHead className="text-foreground">
                    {t("feature")}
                  </TableHead>
                  <TableHead className="text-center font-semibold text-primary">
                    SmartResto
                  </TableHead>
                  <TableHead className="text-center text-foreground">
                    Excel
                  </TableHead>
                  <TableHead className="text-center text-foreground">
                    {t("separateTools")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARISON_ROWS.map((row, i) => (
                  <TableRow key={row.label}>
                    <TableCell className="font-medium">{rows[i]}</TableCell>
                    <TableCell className="bg-primary/[0.03] text-center">
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
              <Check className="h-3.5 w-3.5 text-primary" /> {t("legendIncluded")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Minus className="h-3.5 w-3.5" /> {t("legendPartial")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <X className="h-3.5 w-3.5" /> {t("legendNo")}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
