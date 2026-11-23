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
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We ran a brand, then built the tools to run it."
        lead="BIGONBUY started as the team behind Megaska, a direct-to-consumer fashion brand on Shopify."
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
              We built our own tools to handle that work. Those tools became two products: LoopD2C, a Shopify
              app for the journey after “Add to bag”, and Chatji, a WhatsApp AI chatbot and business messaging product.
            </Text>
            <Text>
              Today the brand and the software sit in separate companies. {getCompany("trading").legalName} operates Megaska,
              and {getCompany("technologies").legalName} builds and operates LoopD2C and Chatji.{" "}
              <Link href="/companies" className="font-medium text-[var(--color-brand)] underline">See company details</Link>.
            </Text>
          </Stack>
        </Container>
      </Section>

      <Section spacing="standard" theme="subtle" aria-labelledby="founders-heading">
        <Container width="standard">
          <Text as="h2" role="h2" id="founders-heading">Founders</Text>
          <Text className="mt-3 max-w-[var(--content-reading)] text-[var(--color-foreground-muted)]">
            Both founders are co-founders and directors of both companies.
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
