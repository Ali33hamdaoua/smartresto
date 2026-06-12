import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

/** SmartResto brand logo (public/logo.png). Height-driven; width auto-scales. */
export function Logo({ className, priority }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={siteConfig.name}
      width={157}
      height={172}
      priority={priority}
      className={cn("h-8 w-auto", className)}
    />
  );
}
