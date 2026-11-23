/**
 * The single source of truth for the BIGONBUY group's identity: legal entities, products,
 * people and contact routes. Every page reads from here; do not hardcode these values elsewhere.
 *
 * Rules (see AGENTS.md): only publish facts the group has confirmed. Unknown values stay `null`
 * and the UI omits them rather than showing a placeholder. No statistics, customer counts,
 * testimonials, logos, ratings, funding or partnerships. No GSTIN or phone number unless provided.
 */

export type CompanyId = "technologies" | "trading";
export type ProductId = "loopd2c" | "chatji" | "megaska";

export interface Company {
  readonly id: CompanyId;
  /** URL slug for /companies/[slug]. */
  readonly slug: string;
  /** Exact legal name as registered with the Ministry of Corporate Affairs. */
  readonly legalName: string;
  readonly shortName: string;
  readonly cin: string | null;
  readonly registeredOffice: string | null;
  readonly country: string;
  readonly entityType: string;
  /** One sentence on what the entity does, without claims. */
  readonly summary: string;
  readonly productIds: readonly ProductId[];
}

export interface Product {
  readonly id: ProductId;
  readonly name: string;
  readonly companyId: CompanyId;
  readonly url: string;
  readonly domain: string;
  readonly category: string;
  readonly description: string;
  /** A short, verifiable status line (no metrics). */
  readonly status: string;
  /** Where customers of this product get help. Product support never routes to bigonbuy.com. */
  readonly supportUrl: string;
  readonly externalListing: { readonly label: string; readonly url: string | null } | null;
}

export interface Person {
  readonly name: string;
  readonly role: string;
}

export interface ContactRoute {
  readonly id: "partners" | "legal" | "press" | "careers";
  readonly label: string;
  readonly description: string;
  readonly email: string;
}

export const siteConfig = {
  groupName: "BIGONBUY",
  domain: "bigonbuy.com",
  productionUrl: "https://www.bigonbuy.com",
  tagline: "The company behind LoopD2C, Chatji and Megaska.",
  description:
    "BIGONBUY is a group of two Indian private limited companies that run LoopD2C, Chatji and Megaska. This site lists the legal entities, their registered details, founders and contact routes.",
  country: "India",
  jurisdictionCity: "Jaipur, Rajasthan",

  companies: [
    {
      id: "technologies",
      slug: "bigonbuy-technologies",
      legalName: "BIGONBUY Technologies Private Limited",
      shortName: "BIGONBUY Technologies",
      cin: "U62099RJ2026PTC119310",
      registeredOffice:
        "P.No 3, Mahadev Nagar, Nandpuri Market, Shyam Nagar, Jaipur, Rajasthan 302019, India",
      country: "India",
      entityType: "Private limited company",
      summary: "Builds and operates software for direct-to-consumer brands.",
      productIds: ["loopd2c", "chatji"],
    },
    {
      id: "trading",
      slug: "bigonbuy-trading",
      legalName: "BIGONBUY Trading Private Limited",
      shortName: "BIGONBUY Trading",
      // TODO(owner): add the CIN and registered office before this site is used for verification.
      cin: null,
      registeredOffice: null,
      country: "India",
      entityType: "Private limited company",
      summary: "Owns and operates the Megaska direct-to-consumer fashion brand.",
      productIds: ["megaska"],
    },
  ],

  products: [
    {
      id: "loopd2c",
      name: "LoopD2C",
      companyId: "technologies",
      url: "https://www.loopd2c.com",
      domain: "loopd2c.com",
      category: "Shopify app",
      description:
        "A Shopify app for the commerce journey after “Add to bag”: OTP checkout login, prepaid offers and cash-on-delivery rules, exchanges and returns, reviews, and WhatsApp updates.",
      status: "Listed on the Shopify App Store",
      supportUrl: "https://www.loopd2c.com/company/contact",
      // TODO(owner): add the Shopify App Store listing URL.
      externalListing: { label: "Shopify App Store", url: null },
    },
    {
      id: "chatji",
      name: "Chatji",
      companyId: "technologies",
      url: "https://chatji.ai",
      domain: "chatji.ai",
      category: "WhatsApp business messaging",
      description: "An AI chatbot and business messaging product for WhatsApp.",
      status: "Product site at chatji.ai",
      supportUrl: "https://chatji.ai",
      externalListing: null,
    },
    {
      id: "megaska",
      name: "Megaska",
      companyId: "trading",
      url: "https://megaska.com",
      domain: "megaska.com",
      category: "D2C fashion brand",
      description: "A direct-to-consumer swimwear and apparel brand, sold through its own Shopify store.",
      status: "Live Shopify store",
      supportUrl: "https://megaska.com",
      externalListing: null,
    },
  ],

  founders: [
    { name: "Sandeep Damodaran", role: "Co-founder and Director" },
    { name: "Varun Dixit", role: "Co-founder and Director" },
  ],

  // TODO(owner): confirm each mailbox exists before launch.
  contacts: [
    {
      id: "partners",
      label: "Partnerships and business",
      description: "Partners, platforms, banks and payment providers.",
      email: "hello@bigonbuy.com",
    },
    {
      id: "legal",
      label: "Legal and compliance",
      description: "Verification requests, notices, privacy and grievances.",
      email: "legal@bigonbuy.com",
    },
    {
      id: "press",
      label: "Press",
      description: "Media enquiries about the group or its founders.",
      email: "hello@bigonbuy.com",
    },
    {
      id: "careers",
      label: "Careers",
      description: "Applications and questions about working with us.",
      email: "careers@bigonbuy.com",
    },
  ],
} as const satisfies {
  groupName: string;
  domain: string;
  productionUrl: string;
  tagline: string;
  description: string;
  country: string;
  jurisdictionCity: string;
  companies: readonly Company[];
  products: readonly Product[];
  founders: readonly Person[];
  contacts: readonly ContactRoute[];
};

export const companies: readonly Company[] = siteConfig.companies;
export const products: readonly Product[] = siteConfig.products;

export function getCompany(id: CompanyId): Company {
  const company = companies.find((item) => item.id === id);
  if (!company) throw new Error(`Unknown company: ${id}`);
  return company;
}

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((item) => item.slug === slug);
}

export function getProductsFor(companyId: CompanyId): readonly Product[] {
  return products.filter((product) => product.companyId === companyId);
}

export function getContact(id: ContactRoute["id"]): ContactRoute {
  const contact = siteConfig.contacts.find((item) => item.id === id);
  if (!contact) throw new Error(`Unknown contact route: ${id}`);
  return contact;
}

export const primaryNavigation = [
  { href: "/companies", label: "Companies" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNavigation = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Use" },
] as const;
