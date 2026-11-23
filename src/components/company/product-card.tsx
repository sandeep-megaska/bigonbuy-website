import { Text } from "@/components/foundation";
import { getCompany, type Product } from "@/config/site";

export function ProductCard({ product }: Readonly<{ product: Product }>) {
  const company = getCompany(product.companyId);

  return (
    <article className="relative flex h-full flex-col rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-[border-color,box-shadow] duration-[var(--duration-standard)] focus-within:border-[var(--color-brand)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-raised)]">
      <Text role="label" className="uppercase text-[var(--color-foreground-subtle)]">{product.category}</Text>
      <Text as="h3" role="h3" className="mt-3">
        <a href={product.url} className="no-underline after:absolute after:inset-0 after:rounded-[var(--radius-large)] focus-visible:outline-none">
          {product.name}
          <span className="sr-only"> (opens {product.domain})</span>
        </a>
      </Text>
      <Text className="mt-3 flex-1 text-[var(--color-foreground-muted)]">{product.description}</Text>
      <div className="mt-6 grid gap-1 border-t border-[var(--color-border)] pt-4 text-sm">
        <p className="font-medium text-[var(--color-brand)]">
          {product.domain} <span aria-hidden="true">↗</span>
        </p>
        <p className="text-[var(--color-foreground-subtle)]">Operated by {company.legalName}</p>
      </div>
    </article>
  );
}
