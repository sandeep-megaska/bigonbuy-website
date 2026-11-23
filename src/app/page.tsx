import type { Metadata } from "next";
import Link from "next/link";
import { CompanyDetails } from "@/components/company/company-details";
import { ProductList } from "@/components/company/product-list";
import { SectionHeading } from "@/components/content/section-heading";
import { ButtonLink, Container, Section, Text } from "@/components/foundation";
import { Leadership } from "@/components/people/leadership";
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

      <Section spacing="hero" data-surface="sheet" className="!pb-[var(--section-home-hero-bottom)] bg-[var(--color-surface)]" aria-labelledby="home-heading">
        <Container width="standard">
          <span aria-hidden="true" className="brand-rule" />
          <h1
            id="home-heading"
            className="mt-6 max-w-[15ch] text-[length:clamp(2.75rem,6.4vw,5.5rem)] font-semibold leading-[1] tracking-[-0.045em]"
          >
            {siteConfig.tagline}
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <Text role="body-large" className="max-w-[36rem] text-[var(--color-foreground-muted)]">
              A founder-owned group of two companies: one runs Megaska, a swimwear and apparel brand; the other
              builds LoopD2C and Chatji, software for brands like it.
            </Text>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/about">About the group</ButtonLink>
              <ButtonLink href="/companies" variant="secondary">Company details</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="standard" aria-labelledby="products-heading" className="border-t border-[var(--color-border)]">
        <Container width="standard">
          <SectionHeading id="products-heading" eyebrow="Brands and products" title="Three businesses, each with its own home." />
          <div className="mt-12">
            <ProductList products={products} />
          </div>
        </Container>
      </Section>

      <Section spacing="standard" theme="subtle" aria-labelledby="companies-heading">
        <Container width="standard">
          <SectionHeading
            id="companies-heading"
            eyebrow="Companies"
            title="Two companies, one set of founders."
            lead={`Both are private limited companies registered in ${siteConfig.country}, owned and directed by their founders.`}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {companies.map((company) => (
              <CompanyDetails key={company.id} company={company} headingLevel="h3" showLink />
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="standard" aria-labelledby="leadership-heading">
        <Container width="standard">
          <SectionHeading id="leadership-heading" eyebrow="Leadership" title="Led by its founders." />
          <div className="mt-12">
            <Leadership compact />
          </div>
          <Link href="/about#leadership" className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-brand)] underline">
            Read about the founders
          </Link>
        </Container>
      </Section>

      <Section spacing="standard" theme="inverse" closing aria-labelledby="contact-band-heading">
        <Container width="standard" className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[var(--content-reading)]">
            <Text as="h2" role="h2" id="contact-band-heading">Working with us</Text>
            <Text className="mt-4 text-[var(--color-foreground-muted)]">
              Partners, platforms, banks and press can reach us directly. Product customers are best served by each
              product’s own support.
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
