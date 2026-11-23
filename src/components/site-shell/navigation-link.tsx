"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";

export function isRouteMatch(pathname: string, href: string, nested = false) {
  const normalize = (value: string) => {
    if (value === "/") return value;
    return value.endsWith("/") ? value.slice(0, -1) : value;
  };

  const current = normalize(pathname);
  const target = normalize(href);

  if (current === target) return true;
  return nested && target !== "/" && current.startsWith(`${target}/`);
}

export interface NavigationLinkProps
  extends Omit<ComponentPropsWithoutRef<typeof Link>, "className"> {
  readonly nested?: boolean;
  readonly className?: string;
  readonly activeClassName?: string;
  readonly onNavigate?: () => void;
}

export function NavigationLink({
  href,
  nested = false,
  className = "",
  activeClassName = "",
  onNavigate,
  onClick,
  ...props
}: NavigationLinkProps) {
  const pathname = usePathname();
  const hrefPath = typeof href === "string" ? href : href.pathname ?? "/";
  const active = isRouteMatch(pathname, hrefPath, nested);
  const exact = isRouteMatch(pathname, hrefPath);

  return (
    <Link
      href={href}
      aria-current={exact ? "page" : undefined}
      className={`${className} ${active ? activeClassName : ""}`}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) onNavigate?.();
      }}
      {...props}
    />
  );
}
