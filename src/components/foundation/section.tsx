import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { SectionSpacing } from "@/config/design";

type SectionElement = "section" | "div" | "article";
type SectionTheme = "default" | "subtle" | "inverse";

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-[var(--section-compact)]",
  standard: "py-[var(--section-standard)]",
  spacious: "py-[var(--section-spacious)]",
  editorial: "py-[var(--section-editorial)]",
  // Page heroes sit right under the sticky header: a balanced top and bottom (above the torn edge).
  hero: "pt-[var(--section-hero-top)] pb-[var(--section-hero-bottom)]",
};

const themeClasses: Record<SectionTheme, string> = {
  default: "bg-[var(--color-canvas)] text-[var(--color-foreground)]",
  subtle: "bg-[var(--color-canvas-subtle)] text-[var(--color-foreground)]",
  inverse: "bg-[var(--color-surface-inverse)] text-[var(--color-foreground-inverse)]",
};

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  readonly as?: SectionElement;
  readonly spacing?: SectionSpacing;
  readonly theme?: SectionTheme;
  /**
   * The page's closing band (final CTA), directly above the footer. A dark closing band and the
   * dark footer read as one surface, so the footer swaps its top padding for a hairline divider.
   */
  readonly closing?: boolean;
}

export function Section({
  as = "section",
  spacing = "standard",
  theme = "default",
  closing = false,
  className = "",
  ...props
}: SectionProps) {
  const Component: ElementType = as;

  return (
    <Component
      data-theme={theme === "inverse" ? "inverse" : undefined}
      data-surface={theme}
      data-closing={closing ? "" : undefined}
      className={`${spacingClasses[spacing]} ${themeClasses[theme]} ${className}`}
      {...props}
    />
  );
}
