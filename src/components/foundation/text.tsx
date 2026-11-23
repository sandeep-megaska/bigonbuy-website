import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { TypographyRole } from "@/config/design";

type TextElement = "h1" | "h2" | "h3" | "p" | "span" | "div" | "code";

const roleClasses: Record<TypographyRole, string> = {
  display: "text-[length:var(--text-display)] leading-[var(--leading-display)] tracking-[var(--tracking-display)] font-semibold",
  h1: "text-[length:var(--text-h1)] leading-[var(--leading-heading)] tracking-[var(--tracking-heading)] font-semibold",
  h2: "text-[length:var(--text-h2)] leading-[var(--leading-heading)] tracking-[var(--tracking-heading)] font-semibold",
  h3: "text-[length:var(--text-h3)] leading-[var(--leading-heading)] tracking-[var(--tracking-heading)] font-semibold",
  "body-large": "text-[length:var(--text-body-large)] leading-[var(--leading-body)]",
  body: "text-[length:var(--text-body)] leading-[var(--leading-body)]",
  "body-small": "text-[length:var(--text-body-small)] leading-[var(--leading-body)]",
  label: "text-[length:var(--text-label)] leading-[var(--leading-label)] tracking-[var(--tracking-label)] font-semibold",
  caption: "text-[length:var(--text-caption)] leading-[var(--leading-caption)]",
  code: "font-mono text-[length:var(--text-body-small)] leading-[var(--leading-body)]",
};

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
  readonly as?: TextElement;
  readonly role?: TypographyRole;
}

export function Text({
  as = "p",
  role = "body",
  className = "",
  ...props
}: TextProps) {
  const Component: ElementType = as;
  return <Component className={`${roleClasses[role]} ${className}`} {...props} />;
}
