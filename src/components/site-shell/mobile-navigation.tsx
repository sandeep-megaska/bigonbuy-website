"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/config/site";
import { NavigationLink } from "./navigation-link";

/** A simple disclosure menu below the header for small screens. */
export function MobileNavigation() {
  const pathname = usePathname();
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isOpen = openPathname === pathname;

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPathname(null);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setOpenPathname(isOpen ? null : pathname)}
        className="inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm font-medium"
      >
        Menu
        <svg aria-hidden="true" viewBox="0 0 12 12" className={`size-3 transition-transform duration-[var(--duration-fast)] ${isOpen ? "rotate-180" : ""}`}>
          <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <nav
        id="mobile-navigation"
        aria-label="Primary navigation"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-b border-[var(--color-border)] bg-[var(--color-canvas)] shadow-[var(--shadow-raised)]"
      >
        <ul className="grid list-none gap-1 px-[var(--page-gutter)] py-3">
          {primaryNavigation.map((item) => (
            <li key={item.href}>
              <NavigationLink
                href={item.href}
                nested
                className="flex min-h-12 items-center rounded-[var(--radius-medium)] px-3 text-base font-medium no-underline hover:bg-[var(--color-canvas-subtle)]"
                activeClassName="bg-[var(--color-brand-soft)]"
                onNavigate={() => setOpenPathname(null)}
              >
                {item.label}
              </NavigationLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
