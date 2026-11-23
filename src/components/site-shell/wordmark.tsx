import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

/** The bigONbuy logo (traced from the original artwork in public/brand). */
export function Wordmark({ inverse = false }: Readonly<{ inverse?: boolean }>) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.groupName} home`}
      className="inline-flex min-h-11 shrink-0 items-center rounded-[var(--radius-small)] no-underline"
    >
      <Image
        src={inverse ? siteConfig.brand.logoInversePath : siteConfig.brand.logoPath}
        alt=""
        width={913}
        height={184}
        priority={!inverse}
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}
