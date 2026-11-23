import type { Metadata } from "next";
import { CompanyDetails } from "@/components/company/company-details";
import { PageHeader } from "@/components/content/page-header";
import { Container, Section } from "@/components/foundation";
import { companies, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/companies",
  title: "Companies",
  description: `Legal names, Corporate Identification Numbers and registered offices of the ${siteConfig.groupName} companies, and the products each one runs.`,
});

export default function CompaniesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Companies"
        title="Legal entities"
        lead={`The ${siteConfig.groupName} group consists of ${companies.length} private limited companies registered in ${siteConfig.country}. Each one is listed below with its registered details and the products it operates.`}
      />
      <Section spacing="standard" aria-label="Company details">
        <Container width="standard" className="grid gap-6">
          {companies.map((company) => (
            <CompanyDetails key={company.id} company={company} showLink />
          ))}
        </Container>
      </Section>
    </>
  );
}
