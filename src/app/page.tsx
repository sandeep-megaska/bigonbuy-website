import type { Metadata } from "next";
import { CompanyDetails } from "@/components/company/company-details";
import { ProductCard } from "@/components/company/product-card";
import { ButtonLink, Container, Section, Stack, Text } from "@/components/foundation";
import { companies, products, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { getAbsoluteUrl } from "@/lib/site-url";
import { jsonLd, organizationSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  ...createPageMetadata({ path: "/", title: siteConfig.tagline, description: siteConfig.description }),
  title: { absolute: `${siteConfig.groupName} | ${siteConfig.tagline}` },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: siteConfig.groupName, url: getAbsoluteUrl("/"), description: siteConfig.description },
    ...companies.map(organizationSchema),
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />

      <Section spacing="hero" data-surface="sheet" className="border-b border-[var(--color-border)] bg-[var(--color-surface)]" aria-labelledby="home-heading">
        <Container width="standard">
          <Stack gap="md" className="max-w-[48rem]">
            <span aria-hidden="true" className="brand-rule" />
            <Text as="h1" role="h1" id="home-heading">{siteConfig.tagline}</Text>
            <Text role="body-large" className="text-[var(--color-foreground-muted)]">
              {siteConfig.groupName} is two companies with the same founders. One runs Megaska, a swimwear and apparel
              brand. The other builds LoopD2C and Chatji, software for brands like ours.
            </Text>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/about">About us</ButtonLink>
              <ButtonLink href="/companies" variant="secondary">Company details</ButtonLink>
            </div>
          </Stack>
        </Container>
      </Section>

      <Section spacing="standard" aria-labelledby="products-heading">
        <Container width="standard">
          <Text as="h2" role="h2" id="products-heading">Our brands and products</Text>
          <Text className="mt-3 max-w-[var(--content-reading)] text-[var(--color-foreground-muted)]">
            Each one has its own website, support and terms.
          </Text>
          <ul className="mt-8 grid list-none gap-5 p-0 md:grid-cols-3">
            {products.map((product) => (
              <li key={product.id}><ProductCard product={product} /></li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section spacing="standard" theme="subtle" aria-labelledby="companies-heading">
        <Container width="standard">
          <Text as="h2" role="h2" id="companies-heading">Our companies</Text>
          <Text className="mt-3 max-w-[var(--content-reading)] text-[var(--color-foreground-muted)]">
            Both are private limited companies registered in {siteConfig.country}, owned by their founders.
          </Text>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {companies.map((company) => (
              <CompanyDetails key={company.id} company={company} headingLevel="h3" showLink />
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="standard" theme="inverse" closing aria-labelledby="contact-band-heading">
        <Container width="standard" className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[var(--content-reading)]">
            <Text as="h2" role="h2" id="contact-band-heading">Working with us</Text>
            <Text className="mt-3 text-[var(--color-foreground-muted)]">
              Partners, platforms, banks and press can reach the right team directly. Product customers are best
              served by each product’s own support.
            </Text>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="inverse">Contact</ButtonLink>
            <ButtonLink href="/careers" variant="ghost">Careers</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
