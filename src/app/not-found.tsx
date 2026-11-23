import Link from "next/link";
import { PageHeader } from "@/components/content/page-header";

export default function NotFound() {
  return (
    <PageHeader eyebrow="404" title="Page not found" lead="This page doesn’t exist on bigonbuy.com. Product pages live on each product’s own site.">
      <div className="flex flex-wrap gap-x-6 text-sm font-semibold">
        <Link href="/" className="inline-flex min-h-11 items-center text-[var(--color-brand)] underline">Home</Link>
        <Link href="/companies" className="inline-flex min-h-11 items-center text-[var(--color-brand)] underline">Companies</Link>
        <Link href="/contact" className="inline-flex min-h-11 items-center text-[var(--color-brand)] underline">Contact</Link>
      </div>
    </PageHeader>
  );
}
