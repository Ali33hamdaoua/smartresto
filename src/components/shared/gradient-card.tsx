import { BorderRotate } from "@/components/ui/animated-gradient-border";
import { cn } from "@/lib/utils";

/** SmartResto brand gradient (warm orange) used for every card border. */
const BRAND_GRADIENT = {
  primary: "#7c2d12",
  secondary: "#ea580c",
  accent: "#fdba74",
};

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  /** Highlighted cards rotate continuously; normal cards rotate on hover. */
  active?: boolean;
}

/**
 * Card surface with an animated brand gradient border.
 * - Fill uses the themed `--card` token (stays correct in light/dark).
 * - Normal cards animate the border on hover (calm + performant);
 *   `active` cards rotate continuously to stand out.
 */
export function GradientCard({
  children,
  className,
  active = false,
}: GradientCardProps) {
  return (
    <BorderRotate
      animationMode={active ? "auto-rotate" : "rotate-on-hover"}
      animationSpeed={active ? 6 : 4}
      gradientColors={BRAND_GRADIENT}
      backgroundColor="var(--card)"
      borderWidth={2}
      borderRadius={16}
      className={cn("h-full text-card-foreground", className)}
    >
      {children}
    </BorderRotate>
  );
}
