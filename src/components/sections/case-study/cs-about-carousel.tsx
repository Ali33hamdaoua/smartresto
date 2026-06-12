"use client";

import Image from "next/image";
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-muted">
              <Image
                src={src}
                alt={`${alt} — photo ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 sm:left-3" />
      <CarouselNext className="right-3 sm:right-3" />
    </Carousel>
  );
}
