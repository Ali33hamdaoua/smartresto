"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ShoppingCart, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownNavigation } from "@/components/ui/dropdown-navigation";
import { Logo } from "@/components/shared/logo";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import type { NavMenuItem } from "@/types";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const t = useTranslations("nav");

  const navItems: NavMenuItem[] = [
    {
      id: 1,
      label: t("solutions"),
      subMenus: [
        {
          title: t("solutionsMenu.title"),
          items: [
            {
              label: t("solutionsMenu.onlineOrdering"),
              description: t("solutionsMenu.onlineOrderingDesc"),
              href: "/solutions/commande-en-ligne",
              icon: ShoppingCart,
            },
            {
              label: t("solutionsMenu.inventory"),
              description: t("solutionsMenu.inventoryDesc"),
              href: "/solutions/gestion-stock",
              icon: Boxes,
            },
          ],
        },
      ],
    },
    { id: 2, label: t("why"), href: "/pourquoi-smartresto" },
    { id: 3, label: t("caseStudies"), href: "/etude-de-cas" },
    { id: 4, label: t("deployment"), href: "/deploiement" },
  ];

  return (
    // `dark` scopes dark tokens to the pill so the existing nav/dropdown stay legible on the glass.
    <header className="dark fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 lg:w-auto">
      <div className="flex items-center justify-between gap-x-3 rounded-full border border-white/10 bg-[#1b1b1d]/75 py-1.5 pl-4 pr-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.25)] backdrop-blur-xl sm:py-2 sm:pl-5 sm:pr-2 lg:gap-x-6">
        <Link href="/" className="shrink-0" aria-label="SmartResto">
          <Logo className="h-9 sm:h-10 lg:h-12" priority />
        </Link>

        <nav className="hidden lg:block">
          <DropdownNavigation navItems={navItems} />
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          <span aria-hidden className="mx-1 h-5 w-px bg-white/15" />
          <LanguageSwitcher />
          <Button asChild size="sm" className="rounded-full">
            <Link href="/demo">{t("demo")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
