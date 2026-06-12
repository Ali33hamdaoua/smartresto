"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface InteractiveProductCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  /** Optional small chip (top-left), e.g. a tag. */
  tag?: string;
  /** Optional brand logo (top-right of the glass header). */
  logoUrl?: string;
}

export function InteractiveProductCard({
  className,
  imageUrl,
  title,
  description,
  tag,
  logoUrl,
  ...props
}: InteractiveProductCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y - height / 2) / (height / 2)) * -8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s ease-in-out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={cn(
        "relative aspect-[9/12] w-full rounded-3xl bg-card shadow-lg [transform-style:preserve-3d]",
        className,
      )}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full rounded-3xl object-cover"
        style={{ transform: "translateZ(-20px) scale(1.1)" }}
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      <div
        className="absolute inset-0 flex flex-col p-5"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="flex items-start justify-between rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <div className="flex min-w-0 flex-col">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-xs text-white/70">{description}</p>
          </div>
          {logoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt="" className="h-4 w-auto" />
          )}
        </div>

        {tag && (
          <div className="mt-3 w-fit rounded-full bg-black/40 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            {tag}
          </div>
        )}
      </div>
    </div>
  );
}
