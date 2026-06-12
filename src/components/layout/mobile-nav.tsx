"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  const links = [
    { label: t("solutions"), href: "/solutions" },
    { label: t("why"), href: "/pourquoi-smartresto" },
    { label: t("caseStudies"), href: "/etude-de-cas" },
    { label: t("deployment"), href: "/deploiement" },
    { label: tf("contact"), href: "/contact" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo className="h-10" />
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-4 px-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-4" onClick={() => setOpen(false)}>
            <Link href="/demo">{t("demo")}</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
