"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface AboutCarouselProps {
  images: string[];
  alt: string;
}

export function AboutCarousel({ images, alt }: AboutCarouselProps) {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="w-full">
      <CarouselContent>
        {images.map((src, i) => (
          <CarouselItem key={src}>
            {/* Plain <img> for reliable rendering inside the embla carousel. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${alt} — photo ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              className="aspect-[4/3] w-full rounded-2xl border bg-muted object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 sm:left-3" />
      <CarouselNext className="right-3 sm:right-3" />
    </Carousel>
  );
}
