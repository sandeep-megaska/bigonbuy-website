import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/content/page-header";
import { SectionHeading } from "@/components/content/section-heading";
import { Container, Section, Text } from "@/components/foundation";
import { Leadership } from "@/components/people/leadership";
import { getCompany, getProductsFor, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/about",
  title: "About and leadership",
  description: `${siteConfig.groupName} is a founder-owned group that builds and runs direct-to-consumer businesses. Meet its leadership: ${siteConfig.founders.map((person) => `${person.name}, ${person.shortTitle}`).join(", and ")}.`,
});

const principles = [
  {
    title: "We build for problems we have had ourselves.",
    body: "Our software began inside our own brand. LoopD2C and Chatji exist because running Megaska needed them.",
  },
  {
    title: "We plan before we promise.",
    body: "Our founders come from large engineering projects, where work is scoped, scheduled and tracked before it is committed to. We run our companies the same way.",
  },
  {
    title: "We are here for the long term.",
    body: "Both companies are owned by their founders. Decisions are made for the business we want to be running years from now.",
  },
] as const;

export default function AboutPage() {
  const trading = getCompany("trading");
  const technologies = getCompany("technologies");

  return (
    <>
      <PageHeader
        eyebrow="About"
        title={siteConfig.positioning}
        lead={`${siteConfig.groupName} is a founder-owned group that builds and runs direct-to-consumer businesses: a fashion brand, and the software that brands like it run on.`}
      />

      <Section spacing="standard" aria-labelledby="what-heading">
        <Container width="standard">
          <SectionHeading id="what-heading" eyebrow="What we do" title="A brand, and the technology behind it." />
          <ul className="mt-12 grid list-none gap-10 p-0 md:grid-cols-2">
            {[trading, technologies].map((company) => (
              <li key={company.id} className="border-t border-[var(--color-foreground)] pt-6">
                <Text as="h3" role="body-large" className="font-semibold">{company.legalName}</Text>
                <Text className="mt-3 text-[var(--color-foreground-muted)]">{company.summary}</Text>
                <Text role="body-small" className="mt-4 text-[var(--color-foreground-subtle)]">
                  {getProductsFor(company.id).map((product) => product.domain).join(" · ")}
                </Text>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section spacing="standard" theme="subtle" aria-labelledby="principles-heading">
        <Container width="standard">
          <SectionHeading id="principles-heading" eyebrow="How we work" title="Three things we hold to." />
          <ol className="mt-12 grid list-none gap-10 p-0 md:grid-cols-3">
            {principles.map((principle, index) => (
              <li key={principle.title} className="border-t border-[var(--color-border-strong)] pt-6">
                <span aria-hidden="true" className="font-mono text-sm text-[var(--color-brand)]">{String(index + 1).padStart(2, "0")}</span>
                <Text as="h3" role="body-large" className="mt-3 font-semibold">{principle.title}</Text>
                <Text className="mt-3 text-[var(--color-foreground-muted)]">{principle.body}</Text>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section spacing="standard" id="leadership" aria-labelledby="leadership-heading" className="scroll-mt-24">
        <Container width="standard">
          <SectionHeading
            id="leadership-heading"
            eyebrow="Leadership"
            title="Founders, owners and directors of both companies."
          />
          <div className="mt-12">
            <Leadership />
          </div>
        </Container>
      </Section>

      <Section spacing="standard" theme="subtle" aria-labelledby="timeline-heading">
        <Container width="standard">
          <SectionHeading id="timeline-heading" eyebrow="Milestones" title="Incorporation" />
          <ol className="mt-12 grid list-none gap-10 p-0 md:grid-cols-2">
            {[trading, technologies].map((company) => (
              <li key={company.id} className="border-t border-[var(--color-border-strong)] pt-6">
                <Text role="label" className="uppercase text-[var(--color-brand)]">{company.incorporatedOn}</Text>
                <Text as="h3" role="body-large" className="mt-3 font-semibold">{company.legalName}</Text>
                <Text className="mt-2 text-[var(--color-foreground-muted)]">Incorporated under the Companies Act, 2013. CIN {company.cin}.</Text>
              </li>
            ))}
          </ol>
          <Link href="/companies" className="mt-10 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-brand)] underline">
            See registered details
          </Link>
        </Container>
      </Section>
    </>
  );
}
