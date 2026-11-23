import type { Metadata } from "next";
import Link from "next/link";
import { CompanyDetails } from "@/components/company/company-details";
import { ProductCard } from "@/components/company/product-card";
import { Container, Section, Stack, Text } from "@/components/foundation";
import { companies, products, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { getAbsoluteUrl } from "@/lib/site-url";
import { jsonLd, organizationSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  ...createPageMetadata({ path: "/", title: "Company information", description: siteConfig.description }),
  title: { absolute: `${siteConfig.groupName} | Company information` },
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
            <Text role="label" className="uppercase text-[var(--color-foreground-subtle)]">Company information</Text>
            <Text as="h1" role="h1" id="home-heading">
              {siteConfig.groupName} is the group behind LoopD2C, Chatji and Megaska.
            </Text>
            <Text role="body-large" className="text-[var(--color-foreground-muted)]">
              Two private limited companies, registered in India. This site lists who we are, how each
              company is registered and which products it runs. Product details live on each product’s own site.
            </Text>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm font-semibold">
              <Link href="/companies" className="inline-flex min-h-11 items-center text-[var(--color-brand)] underline">Company details</Link>
              <Link href="/contact" className="inline-flex min-h-11 items-center text-[var(--color-brand)] underline">Contact</Link>
            </div>
          </Stack>
        </Container>
      </Section>

      <Section spacing="standard" aria-labelledby="products-heading">
        <Container width="standard">
          <Text as="h2" role="h2" id="products-heading">Our products</Text>
          <Text className="mt-3 max-w-[var(--content-reading)] text-[var(--color-foreground-muted)]">
            Each product has its own website, support and terms.
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
            Both companies share the same founders and are registered in {siteConfig.country}.
          </Text>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {companies.map((company) => (
              <CompanyDetails key={company.id} company={company} headingLevel="h3" showLink />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
