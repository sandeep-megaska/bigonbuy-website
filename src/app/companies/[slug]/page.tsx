import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CompanyDetails } from "@/components/company/company-details";
import { PageHeader } from "@/components/content/page-header";
import { Container, Section, Text } from "@/components/foundation";
import { companies, getCompanyBySlug, getContact, siteConfig, mailtoHref } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { jsonLd, organizationSchema } from "@/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const company = getCompanyBySlug((await params).slug);
  if (!company) return {};
  const cin = company.cin ? ` (CIN ${company.cin})` : "";
  return createPageMetadata({
    path: `/companies/${company.slug}`,
    title: company.legalName,
    description: `Registered details of ${company.legalName}${cin}: incorporation, registered office, owners, and the brands and domains it owns.`,
  });
}

export default async function CompanyPage({ params }: Props) {
  const company = getCompanyBySlug((await params).slug);
  if (!company) notFound();
  const legal = getContact("legal");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({ "@context": "https://schema.org", ...organizationSchema(company) })}
      />
      <PageHeader eyebrow="Company" title={company.legalName} lead={company.summary} />

      <Section spacing="standard" aria-label="Registered details">
        <Container width="standard">
          <CompanyDetails company={company} />
        </Container>
      </Section>

      <Section spacing="standard" theme="subtle" aria-labelledby="people-heading">
        <Container width="standard" className="grid gap-10 md:grid-cols-2">
          <div>
            <Text as="h2" role="h3" id="people-heading">Directors</Text>
            <ul className="mt-4 grid list-none gap-3 p-0">
              {siteConfig.founders.map((person) => (
                <li key={person.name}>
                  <span className="font-semibold">{person.name}</span>
                  <span className="text-[var(--color-foreground-muted)]"> · {person.boardRole}, {person.title}</span>
                </li>
              ))}
            </ul>
            <Link href="/about#leadership" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-brand)] underline">
              Leadership
            </Link>
          </div>
          <div>
            <Text as="h2" role="h3">Verification requests</Text>
            <Text className="mt-4 text-[var(--color-foreground-muted)]">
              Banks, payment providers and platforms can request supporting documents for {company.legalName} by
              writing to <a href={mailtoHref(legal)} className="font-medium text-[var(--color-brand)] underline">{legal.email}</a>.
              Company records can also be checked independently on the Ministry of Corporate Affairs portal.
            </Text>
            <a
              href="https://www.mca.gov.in"
              rel="noopener"
              className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-brand)] underline"
            >
              Ministry of Corporate Affairs<span className="sr-only"> (external site)</span>
              <span aria-hidden="true" className="ml-0.5">↗</span>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
