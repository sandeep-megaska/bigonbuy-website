import Link from "next/link";
import { Container, Text } from "@/components/foundation";
import { companies, getWebsiteOperator, legalNavigation, primaryNavigation, siteConfig } from "@/config/site";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  const year = new Date().getUTCFullYear();

  return (
    <footer data-theme="inverse" className="bg-[var(--color-surface-inverse)] text-[var(--color-foreground-inverse)]">
      <Container width="wide" className="site-footer-inner">
        <div className="site-footer-body grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="grid gap-6">
            <Wordmark inverse />
            <ul className="grid list-none gap-5 p-0 sm:grid-cols-2">
              {companies.map((company) => (
                <li key={company.id} className="text-sm">
                  <p className="font-semibold text-[var(--color-foreground-inverse)]">{company.legalName}</p>
                  {company.cin ? (
                    <p className="mt-1 text-[var(--color-foreground-muted)]">
                      CIN <span className="font-mono">{company.cin}</span>
                    </p>
                  ) : null}
                  <Link
                    href={`/companies/${company.slug}`}
                    className="mt-1 inline-flex min-h-11 items-center text-[var(--color-foreground-muted)] underline hover:text-[var(--color-foreground-inverse)]"
                  >
                    Company details<span className="sr-only">: {company.legalName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-6">
            <div>
              <Text as="h2" role="label">Group</Text>
              <ul className="mt-2 grid list-none p-0">
                {[{ href: "/", label: "Home" }, ...primaryNavigation].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-11 items-center text-sm text-[var(--color-foreground-muted)] no-underline hover:text-[var(--color-foreground-inverse)] hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Text as="h2" role="label">Products</Text>
              <ul className="mt-2 grid list-none p-0">
                {siteConfig.products.map((product) => (
                  <li key={product.id}>
                    <a href={product.url} className="inline-flex min-h-11 items-center text-sm text-[var(--color-foreground-muted)] no-underline hover:text-[var(--color-foreground-inverse)] hover:underline">
                      {product.name}
                      <span className="sr-only"> (external site)</span>
                      <span aria-hidden="true" className="ml-1">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-foreground-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {getWebsiteOperator().legalName}. Website operated by {getWebsiteOperator().shortName}.</p>
          <ul className="flex list-none flex-wrap gap-x-5 p-0">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-[var(--color-foreground-inverse)]">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
