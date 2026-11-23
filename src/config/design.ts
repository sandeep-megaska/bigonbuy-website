/** Semantic design identifiers shared by documentation and typed UI APIs. */
export const designConfig = {
  breakpoints: ["sm", "md", "lg", "xl", "2xl"],
  contentWidths: ["reading", "standard", "wide", "full"],
  horizontalGutters: ["compact", "standard", "wide"],
  sectionSpacing: ["compact", "standard", "spacious", "editorial", "hero"],
  radii: ["small", "medium", "large", "panel", "pill"],
  shadows: ["subtle", "raised", "floating"],
  typographyRoles: [
    "display",
    "h1",
    "h2",
    "h3",
    "body-large",
    "body",
    "body-small",
    "label",
    "caption",
    "code",
  ],
  colorRoles: [
    "canvas",
    "canvas-subtle",
    "surface",
    "surface-raised",
    "surface-inverse",
    "foreground",
    "foreground-muted",
    "foreground-subtle",
    "foreground-inverse",
    "border",
    "border-strong",
    "brand",
    "brand-soft",
    "accent",
    "accent-soft",
    "success",
    "warning",
    "danger",
    "info",
    "focus-ring",
  ],
  motionDurations: ["fast", "standard", "slow"],
} as const;

export type BreakpointName = (typeof designConfig.breakpoints)[number];
export type ContentWidth = (typeof designConfig.contentWidths)[number];
export type HorizontalGutter = (typeof designConfig.horizontalGutters)[number];
export type SectionSpacing = (typeof designConfig.sectionSpacing)[number];
export type RadiusName = (typeof designConfig.radii)[number];
export type ShadowName = (typeof designConfig.shadows)[number];
export type TypographyRole = (typeof designConfig.typographyRoles)[number];
export type ColorRole = (typeof designConfig.colorRoles)[number];
export type MotionDuration = (typeof designConfig.motionDurations)[number];
