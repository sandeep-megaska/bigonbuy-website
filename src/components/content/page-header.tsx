import type { ReactNode } from "react";
import { Container, Section, Stack, Text } from "@/components/foundation";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: Readonly<{ eyebrow: string; title: string; lead?: string; children?: ReactNode }>) {
  return (
    <Section spacing="hero" data-surface="sheet" className="border-b border-[var(--color-border)] bg-[var(--color-surface)]" aria-labelledby="page-heading">
      <Container width="standard">
        <Stack gap="md" className="max-w-[var(--content-reading)]">
          <span aria-hidden="true" className="brand-rule" />
          <Text role="label" className="uppercase text-[var(--color-foreground-subtle)]">{eyebrow}</Text>
          <Text as="h1" role="h1" id="page-heading">{title}</Text>
          {lead ? <Text role="body-large" className="text-[var(--color-foreground-muted)]">{lead}</Text> : null}
          {children}
        </Stack>
      </Container>
    </Section>
  );
}
