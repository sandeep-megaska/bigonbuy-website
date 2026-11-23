import { Text } from "@/components/foundation";
import { getCompany, type Product } from "@/config/site";

/** Brands and products as editorial rows divided by hairlines. Each row links to the product's own site. */
export function ProductList({ products }: Readonly<{ products: readonly Product[] }>) {
  return (
    <ul className="list-none border-t border-[var(--color-foreground)] p-0">
      {products.map((product) => (
        <li key={product.id} className="border-b border-[var(--color-border)]">
          <a
            href={product.url}
            className="group grid gap-3 py-8 no-underline md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_auto] md:items-baseline md:gap-10"
          >
            <span>
              <Text as="h3" role="h3" className="transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--color-brand)]">
                {product.name}
              </Text>
              <Text role="caption" className="mt-2 uppercase tracking-[var(--tracking-label)] text-[var(--color-foreground-subtle)]">
                {product.category}
              </Text>
            </span>
            <span className="max-w-[var(--content-reading)]">
              <Text className="text-[var(--color-foreground-muted)]">{product.description}</Text>
              <Text role="body-small" className="mt-2 text-[var(--color-foreground-subtle)]">
                {getCompany(product.companyId).legalName}
              </Text>
            </span>
            <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-brand)]">
              {product.domain}
              <span aria-hidden="true" className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              <span className="sr-only"> (external site)</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
