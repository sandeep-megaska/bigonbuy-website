import type { ComponentPropsWithoutRef } from "react";

type StackDirection = "vertical" | "horizontal";
type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
type StackAlign = "start" | "center" | "end" | "stretch";

const directionClasses: Record<StackDirection, string> = {
  vertical: "flex-col",
  horizontal: "flex-row",
};

const gapClasses: Record<StackGap, string> = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-5",
  lg: "gap-8",
  xl: "gap-12",
};

const alignmentClasses: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export interface StackProps extends ComponentPropsWithoutRef<"div"> {
  readonly direction?: StackDirection;
  readonly gap?: StackGap;
  readonly align?: StackAlign;
  readonly wrap?: boolean;
}

export function Stack({
  direction = "vertical",
  gap = "md",
  align = "stretch",
  wrap = false,
  className = "",
  ...props
}: StackProps) {
  return (
    <div
      className={`flex ${directionClasses[direction]} ${gapClasses[gap]} ${alignmentClasses[align]} ${wrap ? "flex-wrap" : "flex-nowrap"} ${className}`}
      {...props}
    />
  );
}
