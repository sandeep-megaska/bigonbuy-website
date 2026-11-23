import type { ReactNode } from "react";

/** A link to another site (product sites, registries). Announces that it leaves bigonbuy.com. */
export function ExternalLink({
  href,
  children,
  className = "",
}: Readonly<{ href: string; children: ReactNode; className?: string }>) {
  return (
    <a href={href} rel="noopener" className={`font-medium text-[var(--color-brand)] underline ${className}`}>
      {children}
      <span className="sr-only"> (external site)</span>
      <span aria-hidden="true" className="ml-0.5 no-underline">↗</span>
    </a>
  );
}
