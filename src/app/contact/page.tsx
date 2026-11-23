import type { Metadata } from "next";
import { ExternalLink } from "@/components/content/external-link";
import { PageHeader } from "@/components/content/page-header";
import { Container, Section, Text } from "@/components/foundation";
import { companies, products, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/contact",
  title: "Contact",
  description: `Contact ${siteConfig.groupName} for partnerships, legal and compliance, press and careers. Product support is handled on each product’s own site.`,
});

export default function ContactPage() {
  const groupRoutes = siteConfig.contacts;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact the group"
        lead="For company matters, write to the right inbox below. If you are a customer of one of our products, please use that product’s support so your request reaches the right team."
      />

      <Section spacing="standard" aria-labelledby="group-contact-heading">
        <Container width="standard">
          <Text as="h2" role="h2" id="group-contact-heading">Company enquiries</Text>
          <ul className="mt-8 grid list-none gap-5 p-0 sm:grid-cols-2">
            {groupRoutes.map((route) => (
              <li key={route.id} className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <Text as="h3" role="body-large" className="font-semibold">{route.label}</Text>
                <Text className="mt-1 text-[var(--color-foreground-muted)]">{route.description}</Text>
                <a href={`mailto:${route.email}`} className="mt-4 inline-flex min-h-11 items-center font-medium text-[var(--color-brand)] underline">
                  {route.email}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section spacing="standard" theme="subtle" aria-labelledby="support-heading">
        <Container width="standard">
          <Text as="h2" role="h2" id="support-heading">Product support</Text>
          <Text className="mt-3 max-w-[var(--content-reading)] text-[var(--color-foreground-muted)]">
            Orders, accounts, billing and app questions are handled by each product. The group inboxes above cannot
            look up orders or change accounts.
          </Text>
          <ul className="mt-8 grid list-none gap-5 p-0 md:grid-cols-3">
            {products.map((product) => (
              <li key={product.id} className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <Text as="h3" role="body-large" className="font-semibold">{product.name}</Text>
                <Text role="body-small" className="mt-1 text-[var(--color-foreground-muted)]">{product.category}</Text>
                <ExternalLink href={product.supportUrl} className="mt-4 inline-flex min-h-11 items-center">
                  {product.name} support
                </ExternalLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section spacing="compact" aria-labelledby="registered-heading">
        <Container width="standard">
          <Text as="h2" role="h3" id="registered-heading">Registered offices</Text>
          <ul className="mt-4 grid list-none gap-4 p-0 text-sm sm:grid-cols-2">
            {companies.filter((company) => company.registeredOffice).map((company) => (
              <li key={company.id}>
                <p className="font-semibold">{company.legalName}</p>
                {company.registeredOffice ? (
                  <address className="mt-1 not-italic text-[var(--color-foreground-muted)]">{company.registeredOffice}</address>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
