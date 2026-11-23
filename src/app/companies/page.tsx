import type { Metadata } from "next";
import { CompanyDetails } from "@/components/company/company-details";
import { PageHeader } from "@/components/content/page-header";
import { Container, Section } from "@/components/foundation";
import { companies, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/companies",
  title: "Companies",
  description: `Legal names, Corporate Identification Numbers and registered offices of the ${siteConfig.groupName} companies, and the brands each one owns.`,
});

export default function CompaniesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Companies"
        title="Our companies"
        lead={`${siteConfig.groupName} consists of ${companies.length} private limited companies registered in ${siteConfig.country}, both owned by their founders. Details below are as held by the Registrar of Companies.`}
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
