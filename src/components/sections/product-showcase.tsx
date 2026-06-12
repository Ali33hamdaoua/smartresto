"use client";

import { useTranslations } from "next-intl";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DashboardMockup } from "./dashboard-mockup";

export function ProductShowcase() {
  const t = useTranslations("home.showcase");

  return (
    <section className="overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-3xl px-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
        }
      >
        <DashboardMockup />
      </ContainerScroll>
    </section>
  );
}
