"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { InteractiveProductCard } from "@/components/ui/card-7";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RESTAURANT_TYPES } from "@/data/why-page";

export function WhyRestaurantTypes() {
  const t = useTranslations("whyPage.types");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Container className="mt-12">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {items.map((type, i) => (
              <CarouselItem
                key={i}
                className="basis-4/5 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <InteractiveProductCard
                    imageUrl={RESTAURANT_TYPES[i].imageUrl}
                    title={type.title}
                    description={type.description}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
}
