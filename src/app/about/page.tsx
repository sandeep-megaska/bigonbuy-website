import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/content/page-header";
import { Container, Section, Stack, Text } from "@/components/foundation";
import { companies, getCompany, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/about",
  title: "About and founders",
  description: `How ${siteConfig.groupName} started: a D2C brand, the tools built to run it, and the founders behind LoopD2C, Chatji and Megaska.`,
});

export default function AboutPage() {
  const trading = getCompany("trading");
  const technologies = getCompany("technologies");

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We ran a brand, then built the tools to run it."
        lead="BIGONBUY started with Megaska, a direct-to-consumer swimwear and apparel brand on Shopify. The software we wrote to run it became LoopD2C and Chatji."
      />

      <Section spacing="standard" aria-labelledby="story-heading">
        <Container width="reading">
          <Text as="h2" role="h2" id="story-heading">Our story</Text>
          <Stack gap="md" className="mt-6 text-[var(--color-foreground-muted)]">
            <Text>
              Running Megaska meant handling the same work every day: customers signing in at checkout,
              cash-on-delivery orders, exchanges and returns, and a steady stream of customer messages on WhatsApp.
            </Text>
            <Text>
              We built our own tools for that work. They became two products: LoopD2C, a Shopify app for the journey
              after “Add to bag”, and Chatji, a WhatsApp AI chatbot and business messaging product.
            </Text>
            <Text>
              The brand and the software now sit in separate companies, both owned by the founders.
            </Text>
          </Stack>

          <Text as="h3" role="h3" className="mt-12">Timeline</Text>
          <ol className="mt-6 grid list-none gap-0 border-l-2 border-[var(--color-border)] p-0">
            {[trading, technologies].map((company) => (
              <li key={company.id} className="relative pb-8 pl-6 last:pb-0">
                <span aria-hidden="true" className="absolute -left-[0.4375rem] top-1.5 size-3 rounded-full bg-[var(--color-logo-red)]" />
                <p className="text-sm font-semibold text-[var(--color-brand)]">{company.incorporatedOn}</p>
                <p className="mt-1 font-semibold">{company.legalName} incorporated</p>
                <p className="mt-1 text-[var(--color-foreground-muted)]">{company.summary}</p>
              </li>
            ))}
          </ol>
          <Link href="/companies" className="mt-8 inline-flex min-h-11 items-center font-medium text-[var(--color-brand)] underline">
            See registered details
          </Link>
        </Container>
      </Section>

      <Section spacing="standard" theme="subtle" aria-labelledby="founders-heading">
        <Container width="standard">
          <Text as="h2" role="h2" id="founders-heading">Founders</Text>
          <Text className="mt-3 max-w-[var(--content-reading)] text-[var(--color-foreground-muted)]">
            Sandeep and Varun founded both companies, own them, and serve as directors of each.
          </Text>
          <ul className="mt-8 grid list-none gap-5 p-0 sm:grid-cols-2">
            {siteConfig.founders.map((person) => (
              <li key={person.name} className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <Text as="h3" role="h3">{person.name}</Text>
                <Text className="mt-2 text-[var(--color-foreground-muted)]">{person.role}</Text>
                <Text role="body-small" className="mt-1 text-[var(--color-foreground-subtle)]">
                  {companies.map((company) => company.shortName).join(" and ")}
                </Text>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
