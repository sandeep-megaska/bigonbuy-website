import Image from "next/image";
import { Text } from "@/components/foundation";
import { siteConfig } from "@/config/site";

/** Founder profiles. `compact` shows name and title only (home page); full shows bio and education. */
export function Leadership({ compact = false, headingLevel = "h3" }: Readonly<{ compact?: boolean; headingLevel?: "h2" | "h3" }>) {
  return (
    <ul className={`grid list-none gap-0 p-0 md:grid-cols-2 ${compact ? "md:gap-10" : "md:gap-16"}`}>
      {siteConfig.founders.map((person) => (
        <li key={person.name} className="border-t border-[var(--color-foreground)] pt-6 pb-10 last:pb-0 md:pb-0">
          {person.photo ? (
            <Image
              src={person.photo}
              alt={`${person.name}, ${person.shortTitle}`}
              width={800}
              height={1000}
              sizes={compact ? "(min-width: 768px) 12rem, 10rem" : "(min-width: 768px) 18rem, 70vw"}
              className={`mb-6 aspect-[4/5] w-full rounded-[var(--radius-medium)] bg-[var(--color-canvas-subtle)] object-cover grayscale-[15%] ${compact ? "max-w-[10rem] md:max-w-[12rem]" : "max-w-[18rem]"}`}
            />
          ) : null}
          <Text role="label" className="uppercase text-[var(--color-brand)]">{person.title}</Text>
          <Text as={headingLevel} role="h3" className="mt-3">{person.name}</Text>
          {compact ? null : (
            <>
              <div className="mt-5 grid gap-4 text-[var(--color-foreground-muted)]">
                {person.bio.map((paragraph) => (
                  <Text key={paragraph}>{paragraph}</Text>
                ))}
              </div>
              <dl className="mt-6 grid gap-1 text-sm">
                <div className="flex gap-2">
                  <dt className="font-semibold">Education</dt>
                  <dd className="m-0 text-[var(--color-foreground-muted)]">{person.education}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold">Board</dt>
                  <dd className="m-0 text-[var(--color-foreground-muted)]">{person.boardRole} of both companies</dd>
                </div>
              </dl>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
