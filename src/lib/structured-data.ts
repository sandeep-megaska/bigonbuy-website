import { siteConfig, getProductsFor, type Company } from "@/config/site";
import { getAbsoluteUrl } from "@/lib/site-url";

export function organizationSchema(company: Company) {
  return {
    "@type": "Organization",
    "@id": getAbsoluteUrl(`/companies/${company.slug}#organization`),
    name: company.legalName,
    legalName: company.legalName,
    url: getAbsoluteUrl(`/companies/${company.slug}`),
    ...(company.cin ? { identifier: { "@type": "PropertyValue", propertyID: "CIN", value: company.cin } } : {}),
    ...(company.registeredOffice
      ? { address: { "@type": "PostalAddress", streetAddress: company.registeredOffice, addressCountry: "IN" } }
      : {}),
    founder: siteConfig.founders.map((person) => ({ "@type": "Person", name: person.name })),
    brand: getProductsFor(company.id).map((product) => ({ "@type": "Brand", name: product.name, url: product.url })),
  };
}

export function jsonLd(data: unknown): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
