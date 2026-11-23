import Link from "next/link";
import { ExternalLink } from "@/components/content/external-link";
import { Text } from "@/components/foundation";
import { getProductsFor, type Company } from "@/config/site";

/**
 * The registered-details block for one legal entity: legal name, CIN, incorporation, registered
 * office, owners, and the brands and domains it owns. Rows with unconfirmed values (null) are omitted, never filled with placeholders.
 */
export function CompanyDetails({
  company,
  headingLevel = "h2",
  showLink = false,
}: Readonly<{ company: Company; headingLevel?: "h2" | "h3"; showLink?: boolean }>) {
  const companyProducts = getProductsFor(company.id);
  const headingId = `${company.slug}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className="flex h-full flex-col rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-subtle)] sm:p-8"
    >
      <Text as={headingLevel} role="h3" id={headingId}>{company.legalName}</Text>
      <Text className="mt-2 text-[var(--color-foreground-muted)]">{company.summary}</Text>

      <dl className="mt-6 grid gap-4 border-t border-[var(--color-border)] pt-6 text-sm">
        <DetailRow term="Legal name">{company.legalName}</DetailRow>
        {company.cin ? (
          <DetailRow term="Corporate Identification Number (CIN)">
            <span className="font-mono">{company.cin}</span>
          </DetailRow>
        ) : null}
        <DetailRow term="Entity type">{company.entityType}, {company.country}</DetailRow>
        {company.incorporatedOn ? <DetailRow term="Date of incorporation">{company.incorporatedOn}</DetailRow> : null}
        {company.registeredOffice ? (
          <DetailRow term="Registered office">
            <address className="not-italic">{company.registeredOffice}</address>
          </DetailRow>
        ) : null}
        {company.ownedBy.length > 0 ? (
          <DetailRow term="Owned by">{company.ownedBy.join(" and ")} (founders)</DetailRow>
        ) : null}
        <DetailRow term="Brands and domains owned">
          <ul className="grid list-none gap-2 p-0">
            {companyProducts.map((product) => (
              <li key={product.id}>
                <span className="font-semibold text-[var(--color-foreground)]">{product.name}</span>
                <span> · {product.category}</span>
                <span className="block">
                  {product.ownership} · <ExternalLink href={product.url}>{product.domain}</ExternalLink>
                </span>
              </li>
            ))}
          </ul>
        </DetailRow>
      </dl>

      {showLink ? (
        <Link
          href={`/companies/${company.slug}`}
          className="mt-6 inline-flex min-h-11 items-center self-start text-sm font-semibold text-[var(--color-brand)] underline"
        >
          Full company details<span className="sr-only">: {company.legalName}</span>
        </Link>
      ) : null}
    </article>
  );
}

function DetailRow({ term, children }: Readonly<{ term: string; children: React.ReactNode }>) {
  return (
    <div className="grid gap-1 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-4">
      <dt className="font-semibold text-[var(--color-foreground)]">{term}</dt>
      <dd className="m-0 text-[var(--color-foreground-muted)]">{children}</dd>
    </div>
  );
}
