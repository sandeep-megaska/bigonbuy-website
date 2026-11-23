import type { ComponentPropsWithoutRef } from "react";
import type { ContentWidth } from "@/config/design";

const widthClasses: Record<ContentWidth, string> = {
  reading: "max-w-[var(--content-reading)]",
  standard: "max-w-[var(--content-standard)]",
  wide: "max-w-[var(--content-wide)]",
  full: "max-w-none",
};

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  readonly width?: ContentWidth;
}

export function Container({
  width = "standard",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      data-container={width}
      className={`mx-auto w-full px-[var(--page-gutter)] ${widthClasses[width]} ${className}`}
      {...props}
    />
  );
}
