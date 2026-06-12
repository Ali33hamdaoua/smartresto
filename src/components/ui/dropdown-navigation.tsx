"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { NavMenuItem } from "@/types";

const TRIGGER_CLASS =
  "group relative flex cursor-pointer items-center justify-center gap-1 whitespace-nowrap px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground";

export function DropdownNavigation({ navItems }: { navItems: NavMenuItem[] }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  const showHoverBg = (item: NavMenuItem) =>
    isHover === item.id || openMenu === item.label;

  return (
    <ul className="relative flex items-center">
      {navItems.map((navItem) => (
        <li
          key={navItem.label}
          className="relative"
          onMouseEnter={() => setOpenMenu(navItem.label)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          {navItem.subMenus ? (
            <button
              type="button"
              className={TRIGGER_CLASS}
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span>{navItem.label}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                  openMenu === navItem.label ? "rotate-180" : ""
                }`}
              />
              {showHoverBg(navItem) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-primary/10"
                  style={{ borderRadius: 99 }}
                />
              )}
            </button>
          ) : (
            <Link
              href={navItem.href ?? "#"}
              className={TRIGGER_CLASS}
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span>{navItem.label}</span>
              {showHoverBg(navItem) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-primary/10"
                  style={{ borderRadius: 99 }}
                />
              )}
            </Link>
          )}

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className="absolute left-0 top-full w-auto pt-2">
                <motion.div
                  className="w-max border border-border bg-background p-4 shadow-lg"
                  style={{ borderRadius: 16 }}
                  layoutId="menu"
                >
                  <div className="flex w-fit shrink-0 space-x-9 overflow-hidden">
                    {navItem.subMenus.map((sub) => (
                      <motion.div layout className="w-full" key={sub.title}>
                        <h3 className="mb-4 text-sm font-medium capitalize text-muted-foreground">
                          {sub.title}
                        </h3>
                        <ul className="space-y-6">
                          {sub.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpenMenu(null)}
                                  className="group flex items-start space-x-3"
                                >
                                  <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                                    <Icon className="h-5 w-5 flex-none" />
                                  </div>
                                  <div className="w-max leading-5">
                                    <p className="shrink-0 text-sm font-medium text-foreground">
                                      {item.label}
                                    </p>
                                    <p className="shrink-0 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
