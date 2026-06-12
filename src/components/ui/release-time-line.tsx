"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export type TimelineEntry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimelineProps {
  title?: string;
  description?: string;
  entries?: TimelineEntry[];
}

/**
 * Behavior: Only the card currently closest to the upper-third of the viewport
 * is "active" and expands to reveal its full content. As you scroll, the active
 * card changes. The meta column stays sticky. (Interaction unchanged from source.)
 */
export default function TimeLine_01({
  title,
  description,
  entries = [],
}: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  };
  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;

    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        {(title || description) && (
          <div className="mx-auto max-w-3xl">
            {title && (
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mb-6 text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="mx-auto mt-8 max-w-3xl space-y-16 md:mt-12 md:space-y-24">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                ref={(el) => {
                  setItemRef(el, index);
                }}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-24 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-lg p-2 transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <entry.icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{entry.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {entry.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel to measure proximity to viewport center */}
                <div
                  ref={(el) => {
                    setSentinelRef(el, index);
                  }}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                />

                {/* Content column */}
                <article
                  className={
                    "flex flex-col rounded-2xl border bg-card p-3 transition-all duration-300 " +
                    (isActive
                      ? "border-primary/30 shadow-lg"
                      : "border-border")
                  }
                >
                  {entry.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={entry.image}
                      alt={`${entry.title} — illustration`}
                      className="mb-4 h-72 w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3
                        className={
                          "text-md font-medium leading-tight tracking-tight transition-colors duration-200 md:text-lg " +
                          (isActive ? "text-foreground" : "text-foreground/70")
                        }
                      >
                        {entry.title}
                      </h3>

                      <p
                        className={
                          "text-xs leading-relaxed transition-all duration-300 md:text-sm " +
                          (isActive
                            ? "text-muted-foreground line-clamp-none"
                            : "text-muted-foreground/80 line-clamp-2")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Expandable content */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-500 ease-out " +
                        (isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-lg border border-border bg-muted/40 p-4">
                              <ul className="space-y-2">
                                {entry.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                                    <span className="leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {entry.button && (
                            <div className="flex justify-end">
                              <Button
                                variant="default"
                                size="sm"
                                className="group font-normal"
                                asChild
                              >
                                <a
                                  href={entry.button.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {entry.button.text}
                                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
