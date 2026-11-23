import type { Metadata } from "next";
import { PageHeader } from "@/components/content/page-header";
import { Container, Section, Text } from "@/components/foundation";
import { getContact, siteConfig, mailtoHref } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/careers",
  title: "Careers",
  description: `Working at ${siteConfig.groupName}: write to us about roles across LoopD2C, Chatji and Megaska.`,
});

export default function CareersPage() {
  const careers = getContact("careers");

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Work with us"
        lead="Our work spans a fashion brand and the software that runs it. We don’t list open roles here."
      />
      <Section spacing="standard" aria-labelledby="apply-heading">
        <Container width="reading">
          <div className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <Text as="h2" role="h3" id="apply-heading">How to get in touch</Text>
            <Text className="mt-3 text-[var(--color-foreground-muted)]">
              Write to us with a short note about yourself, the kind of work you want to do and a link to your
              CV, portfolio or code. We reply when there is a fit.
            </Text>
            <a
              href={mailtoHref(careers)}
              className="mt-6 inline-flex min-h-11 items-center rounded-[var(--radius-medium)] border border-[var(--color-brand)] bg-[var(--color-brand)] px-5 text-sm font-semibold text-[var(--color-foreground-inverse)] no-underline hover:bg-[var(--color-brand-hover)]"
            >
              Email {careers.email}
            </a>
            <Text role="body-small" className="mt-3 text-[var(--color-foreground-subtle)]">
              Please use the subject line “{careers.subject}”.
            </Text>
            <Text role="body-small" className="mt-6 text-[var(--color-foreground-subtle)]">
              {siteConfig.groupName} never asks candidates for payment at any stage of hiring. If someone does, please report it to{" "}
              <a href={mailtoHref(getContact("legal"))} className="underline">{getContact("legal").email}</a>.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
}
