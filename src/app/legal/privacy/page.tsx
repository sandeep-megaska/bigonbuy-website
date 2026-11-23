import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal/legal-document";
import { getContact, getWebsiteOperator, siteConfig, mailtoHref } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/legal/privacy",
  title: "Privacy Policy",
  description: `How ${siteConfig.domain} handles personal data. This policy covers this website only, not LoopD2C, Chatji or Megaska.`,
});

export default function PrivacyPage() {
  const operator = getWebsiteOperator();
  const legal = getContact("legal");
  const mail = <a href={mailtoHref(legal)}>{legal.email}</a>;

  const sections: LegalSection[] = [
    {
      id: "scope",
      title: "Scope",
      content: (
        <>
          <p>
            This policy applies only to the website at {siteConfig.domain}, operated by {operator.legalName}
            {operator.cin ? ` (CIN ${operator.cin})` : ""}, {operator.registeredOffice}.
          </p>
          <p>
            It does not cover LoopD2C, Chatji or Megaska. Each of those has its own privacy policy on its own
            website, and that policy applies when you use the product.
          </p>
        </>
      ),
    },
    {
      id: "what-we-collect",
      title: "What we collect",
      content: (
        <>
          <p>This website has no accounts, forms, advertising or analytics, and sets no cookies of its own.</p>
          <ul>
            <li>
              <strong>Server logs.</strong> Our hosting provider records technical request data (such as IP address,
              browser type, page requested and time) to deliver the site and protect it from abuse.
            </li>
            <li>
              <strong>Emails you send us.</strong> If you write to one of our addresses, we receive your email address,
              name and whatever you include in the message.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-use-it",
      title: "How we use it",
      content: (
        <ul>
          <li>To run, secure and troubleshoot this website.</li>
          <li>To reply to your message and keep a record of our correspondence.</li>
          <li>To meet legal, regulatory and verification obligations.</li>
        </ul>
      ),
    },
    {
      id: "sharing",
      title: "Sharing and processors",
      content: (
        <>
          <p>
            We do not sell personal data. We share it only with service providers that host this site or our email,
            acting on our instructions, or where the law requires it. These providers may process data outside India.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "Retention",
      content: (
        <p>
          Hosting logs are kept for the short period our provider retains them. We keep emails for as long as needed
          to deal with your enquiry and to meet legal or record-keeping requirements.
        </p>
      ),
    },
    {
      id: "your-rights",
      title: "Your rights and grievances",
      content: (
        <>
          <p>
            Under the Digital Personal Data Protection Act, 2023 and other applicable law, you can ask to access,
            correct or erase personal data we hold about you, and raise a grievance. Write to {mail}.
          </p>
          <p>Our Grievance Officer can be reached at the same address.</p>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes and contact",
      content: (
        <p>
          We will post any changes on this page with a new effective date. Questions about this policy: {mail}.
          See also our <Link href="/legal/terms">Terms of Use</Link>.
        </p>
      ),
    },
  ];

  return (
    <LegalDocument
      title="Privacy Policy"
      summary={`How ${siteConfig.domain} handles personal data. This website collects very little, and this policy covers this website only.`}
      currentPath="/legal/privacy"
      sections={sections}
    />
  );
}
