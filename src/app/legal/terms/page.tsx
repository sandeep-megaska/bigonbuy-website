import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal/legal-document";
import { getContact, getWebsiteOperator, siteConfig, mailtoHref } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/legal/terms",
  title: "Terms of Use",
  description: `Terms for using ${siteConfig.domain}. Products have their own terms on their own websites.`,
});

export default function TermsPage() {
  const operator = getWebsiteOperator();
  const legal = getContact("legal");

  const sections: LegalSection[] = [
    {
      id: "about",
      title: "About these terms",
      content: (
        <>
          <p>
            These terms apply to your use of {siteConfig.domain}, operated by {operator.legalName}. By using this
            site you agree to them.
          </p>
          <p>
            This is an information site. Nothing is sold here. LoopD2C, Chatji and Megaska each have their own terms
            on their own websites, and those terms govern your use of them.
          </p>
        </>
      ),
    },
    {
      id: "information",
      title: "Information on this site",
      content: (
        <p>
          We keep company details on this site accurate and current, but the official record of each company is held
          by the Ministry of Corporate Affairs, Government of India. The site is provided “as is”, without warranties
          of any kind, to the extent the law allows.
        </p>
      ),
    },
    {
      id: "intellectual-property",
      title: "Names and content",
      content: (
        <p>
          {siteConfig.groupName}, LoopD2C, Chatji and Megaska are names used by the {siteConfig.groupName} companies.
          You may quote or link to this site, but may not use these names or the site’s content to suggest an
          affiliation, endorsement or partnership that does not exist.
        </p>
      ),
    },
    {
      id: "links",
      title: "Links to other websites",
      content: (
        <p>
          This site links to our product sites and to third-party sites such as government registries. We are not
          responsible for third-party sites and their content.
        </p>
      ),
    },
    {
      id: "liability",
      title: "Limitation of liability",
      content: (
        <p>
          To the extent permitted by law, the {siteConfig.groupName} companies are not liable for any indirect or
          consequential loss arising from your use of this website.
        </p>
      ),
    },
    {
      id: "law",
      title: "Governing law",
      content: (
        <p>
          These terms are governed by the laws of India. Courts at {siteConfig.jurisdictionCity} have exclusive
          jurisdiction over any dispute about this website.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Changes and contact",
      content: (
        <p>
          We may update these terms and will post the new version here. Questions: <a href={mailtoHref(legal)}>{legal.email}</a>.
          See also our <Link href="/legal/privacy">Privacy Policy</Link>.
        </p>
      ),
    },
  ];

  return (
    <LegalDocument
      title="Terms of Use"
      summary={`The terms for using ${siteConfig.domain}. Product terms live on each product’s own website.`}
      currentPath="/legal/terms"
      sections={sections}
    />
  );
}
