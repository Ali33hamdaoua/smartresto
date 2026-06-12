"use client";

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
  return (
    <section className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Pour qui ?"
        title="Pour quels restaurants ?"
        subtitle="Du comptoir rapide à la franchise multi-succursales, SmartResto s'adapte à votre type d'établissement."
      />

      <Container className="mt-12">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {RESTAURANT_TYPES.map((type) => (
              <CarouselItem
                key={type.title}
                className="basis-4/5 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <InteractiveProductCard
                    imageUrl={type.imageUrl}
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
