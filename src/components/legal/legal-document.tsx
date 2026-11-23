import Link from "next/link";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/content/page-header";
import { Container, Section, Text } from "@/components/foundation";
import { legalNavigation } from "@/config/site";

export const LEGAL_EFFECTIVE_DATE = "23 November 2026";

export interface LegalSection {
  readonly id: string;
  readonly title: string;
  readonly content: ReactNode;
}

export function LegalDocument({
  title,
  summary,
  currentPath,
  sections,
}: Readonly<{ title: string; summary: string; currentPath: string; sections: readonly LegalSection[] }>) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} lead={summary}>
        <p className="text-sm text-[var(--color-foreground-subtle)]">Effective {LEGAL_EFFECTIVE_DATE}</p>
        <nav aria-label="Legal documents">
          <ul className="flex list-none flex-wrap gap-2 p-0">
            {legalNavigation.map((item) => {
              const current = item.href === currentPath;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-[var(--radius-medium)] border px-4 text-sm font-semibold no-underline ${current ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)]" : "border-[var(--color-border)] hover:border-[var(--color-brand)]"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </PageHeader>

      <Section spacing="standard">
        <Container width="reading">
          <nav aria-labelledby="contents-heading" className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <Text as="h2" role="label" id="contents-heading" className="uppercase text-[var(--color-foreground-subtle)]">On this page</Text>
            <ol className="mt-3 grid gap-1 pl-5 text-sm">
              {sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`} className="text-[var(--color-brand)] underline">{section.title}</a></li>
              ))}
            </ol>
          </nav>
          <article className="mt-10 grid gap-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
                <Text as="h2" role="h3" id={`${section.id}-heading`}>{section.title}</Text>
                <div className="prose-content mt-4 text-[var(--color-foreground-muted)]">{section.content}</div>
              </section>
            ))}
          </article>
        </Container>
      </Section>
    </>
  );
}
