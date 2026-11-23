import { Container } from "@/components/foundation";
import { primaryNavigation } from "@/config/site";
import { MobileNavigation } from "./mobile-navigation";
import { NavigationLink } from "./navigation-link";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-canvas)]/95 backdrop-blur-sm">
      <Container width="wide" className="relative flex h-[var(--header-height)] items-center justify-between gap-6">
        <Wordmark />
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex list-none items-center gap-1 p-0">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <NavigationLink
                  href={item.href}
                  nested
                  className="inline-flex min-h-11 items-center rounded-[var(--radius-medium)] px-3 text-sm font-medium text-[var(--color-foreground-muted)] no-underline hover:bg-[var(--color-canvas-subtle)] hover:text-[var(--color-foreground)]"
                  activeClassName="bg-[var(--color-brand-soft)] !text-[var(--color-foreground)]"
                >
                  {item.label}
                </NavigationLink>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNavigation />
      </Container>
    </header>
  );
}
