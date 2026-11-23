/**
 * The single source of truth for the BIGONBUY group's identity: legal entities, products,
 * people and contact routes. Every page reads from here; do not hardcode these values elsewhere.
 *
 * Rules (see AGENTS.md): only publish facts the group has confirmed. Unknown values stay `null`
 * and the UI omits them rather than showing a placeholder. No statistics, customer counts,
 * testimonials, logos, ratings, funding or partnerships. No GSTIN or phone number unless provided.
 */

/** The group's single public mailbox (to be set up on the bigonbuy.com domain). */
export const CONTACT_EMAIL = "contact@bigonbuy.com";

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
  /** Exactly as held in the Registrar of Companies record (MCA). Update only after MCA is updated. */
  readonly registeredOffice: string | null;
  readonly country: string;
  readonly entityType: string;
  /** As stated on the Certificate of Incorporation. */
  readonly incorporatedOn: string | null;
  /** Shareholders, by name. */
  readonly ownedBy: readonly string[];
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
  /** What the owning company holds: the brand, the domain, or both. */
  readonly ownership: string;
  readonly description: string;
  /** A short, verifiable status line (no metrics). */
  readonly status: string;
  /** Where customers of this product get help. Product support never routes to bigonbuy.com. */
  readonly supportUrl: string;
  readonly externalListing: { readonly label: string; readonly url: string | null } | null;
}

export interface Person {
  readonly name: string;
  /** Leadership title used across the site. */
  readonly title: string;
  /** Short form for compact places, e.g. "CEO". */
  readonly shortTitle: string;
  /** Statutory position on each company's board (as filed with MCA). */
  readonly boardRole: string;
  readonly education: string;
  /** Professional bio paragraphs. Facts supplied by the founders only. */
  readonly bio: readonly string[];
}

export interface ContactRoute {
  readonly id: "partners" | "legal" | "press" | "careers";
  readonly label: string;
  readonly description: string;
  readonly email: string;
  /** Pre-filled subject so one shared inbox can be sorted by topic. */
  readonly subject: string;
}

export const siteConfig = {
  groupName: "BIGONBUY",
  domain: "bigonbuy.com",
  productionUrl: "https://www.bigonbuy.com",
  tagline: "We build and run direct-to-consumer businesses.",
  /** The group's one-line positioning, used on About. */
  positioning: "Engineering discipline, applied to commerce.",
  description:
    "BIGONBUY is the corporate home of BIGONBUY Trading Private Limited, which owns the Megaska fashion brand, and BIGONBUY Technologies Private Limited, which owns LoopD2C and Chatji.",
  brand: {
    logoPath: "/brand/bigonbuy-logo.svg",
    logoInversePath: "/brand/bigonbuy-logo-inverse.svg",
  },
  country: "India",
  jurisdictionCity: "Jaipur, Rajasthan",
  /** The company that develops and operates bigonbuy.com (named in the privacy policy and terms). */
  websiteOperatorId: "technologies",

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
      entityType: "Private company limited by shares",
      incorporatedOn: "30 October 2026",
      ownedBy: ["Sandeep Damodaran", "Varun Dixit"],
      summary: "Builds and runs software for direct-to-consumer brands: LoopD2C and Chatji.",
      productIds: ["loopd2c", "chatji"],
    },
    {
      id: "trading",
      slug: "bigonbuy-trading",
      legalName: "BIGONBUY Trading Private Limited",
      shortName: "BIGONBUY Trading",
      cin: "U74999RJ2021PTC074459",
      // As held by the Registrar of Companies. The founders intend this to match the Technologies
      // address; change it here only once the correction is filed and reflected on MCA.
      registeredOffice: "Plot No. 3 Mahadev Nagar, Nandpuri Market, Jaipur, Rajasthan 302006, India",
      country: "India",
      entityType: "Private company limited by shares",
      incorporatedOn: "8 April 2021",
      ownedBy: ["Sandeep Damodaran", "Varun Dixit"],
      summary: "Owns and runs Megaska, a direct-to-consumer swimwear and apparel brand.",
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
      ownership: "Product and the loopd2c.com domain",
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
      ownership: "Product and the chatji.ai domain",
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
      ownership: "Megaska brand and the megaska.com domain",
      description: "A direct-to-consumer swimwear and apparel brand, sold through its own Shopify store.",
      status: "Live Shopify store",
      supportUrl: "https://megaska.com",
      externalListing: null,
    },
  ],

  founders: [
    {
      name: "Sandeep Damodaran",
      title: "Co-founder and Chief Executive Officer",
      shortTitle: "CEO",
      boardRole: "Director",
      education: "Electrical engineering",
      bio: [
        "Sandeep spent more than two decades in the Middle East, the last ten years as a project manager in the oil and gas sector, a sector where projects succeed or fail on planning and accountability.",
        "At BIGONBUY he sets the group’s direction and leads its technology work, including the products built by BIGONBUY Technologies.",
      ],
    },
    {
      name: "Varun Dixit",
      title: "Co-founder and Managing Director",
      shortTitle: "Managing Director",
      boardRole: "Director",
      education: "Production engineering; MBA",
      bio: [
        "Varun is a production engineer with an MBA. He worked alongside Sandeep in the oil and gas sector as a planning engineer, responsible for planning, scheduling and forecasting on large projects.",
        "At BIGONBUY he leads planning, forecasting and operations across both companies.",
      ],
    },
  ],

  // One shared inbox for every route; the subject line tells requests apart.
  contacts: [
    {
      id: "partners",
      label: "Partnerships and business",
      description: "Partners, platforms, banks and payment providers.",
      email: CONTACT_EMAIL,
      subject: "Partnership enquiry",
    },
    {
      id: "legal",
      label: "Legal and compliance",
      description: "Verification requests, notices, privacy and grievances.",
      email: CONTACT_EMAIL,
      subject: "Legal and compliance",
    },
    {
      id: "press",
      label: "Press",
      description: "Media enquiries about the group or its founders.",
      email: CONTACT_EMAIL,
      subject: "Press enquiry",
    },
    {
      id: "careers",
      label: "Careers",
      description: "Applications and questions about working with us.",
      email: CONTACT_EMAIL,
      subject: "Careers",
    },
  ],
} as const satisfies {
  groupName: string;
  brand: { logoPath: string; logoInversePath: string };
  domain: string;
  productionUrl: string;
  tagline: string;
  positioning: string;
  description: string;
  country: string;
  jurisdictionCity: string;
  websiteOperatorId: CompanyId;
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

export function mailtoHref(route: ContactRoute): string {
  return `mailto:${route.email}?subject=${encodeURIComponent(route.subject)}`;
}

/** The company that develops and operates this website. */
export function getWebsiteOperator(): Company {
  return getCompany(siteConfig.websiteOperatorId);
}
