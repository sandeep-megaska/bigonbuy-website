import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Wordmark({ inverse = false }: Readonly<{ inverse?: boolean }>) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.groupName} home`}
      className="inline-flex min-h-11 shrink-0 flex-col justify-center gap-1 rounded-[var(--radius-small)] no-underline"
    >
      <span
        aria-hidden="true"
        className={`text-lg font-semibold tracking-[0.14em] ${inverse ? "text-[var(--color-foreground-inverse)]" : "text-[var(--color-foreground)]"}`}
      >
        {siteConfig.groupName}
      </span>
      <span aria-hidden="true" className="bg-brand-gradient block h-0.5 w-10 rounded-full" />
    </Link>
  );
}
