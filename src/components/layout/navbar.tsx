"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownNavigation } from "@/components/ui/dropdown-navigation";
import { Logo } from "@/components/shared/logo";
import { NAV_MENU } from "@/data/navigation";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    // `dark` scopes dark tokens to the pill so the existing nav/dropdown stay legible on the glass.
    <header className="dark fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 lg:w-auto">
      <div className="flex items-center justify-between gap-x-5 rounded-full border border-white/10 bg-[#1b1b1d]/75 py-2 pl-5 pr-2 shadow-[0_8px_30px_rgb(0,0,0,0.25)] backdrop-blur-xl lg:gap-x-6">
        <Link href="/" className="shrink-0" aria-label="SmartResto — Accueil">
          <Logo className="h-12" priority />
        </Link>

        {/* Your existing dropdown navigation — unchanged */}
        <nav className="hidden lg:block">
          <DropdownNavigation navItems={NAV_MENU} />
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <span aria-hidden className="mr-1 h-5 w-px bg-white/15" />
          <Button asChild size="sm" className="rounded-full">
            <Link href="/demo">Demander une démo</Link>
          </Button>
        </div>

        {/* Your existing mobile sheet — unchanged */}
        <MobileNav />
      </div>
    </header>
  );
}
