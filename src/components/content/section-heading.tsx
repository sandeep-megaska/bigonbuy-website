import type { ReactNode } from "react";
import { Text } from "@/components/foundation";

/** Eyebrow, heading and optional lead for a page section. Quiet by design: type does the work. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  className = "",
}: Readonly<{ id: string; eyebrow: string; title: string; lead?: ReactNode; className?: string }>) {
  return (
    <div className={`grid gap-4 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-10 ${className}`}>
      <Text role="label" className="pt-2 uppercase text-[var(--color-foreground-subtle)]">{eyebrow}</Text>
      <div className="max-w-[var(--content-reading)]">
        <Text as="h2" role="h3" id={id} className="text-[length:clamp(1.625rem,2.6vw,2.375rem)]">{title}</Text>
        {lead ? <Text className="mt-4 text-[var(--color-foreground-muted)]">{lead}</Text> : null}
      </div>
    </div>
  );
}
