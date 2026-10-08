import type { Dictionary } from "@/i18n/types";
import { links } from "@/i18n/dictionaries/en";
import LinkButton from "@/components/ui/LinkButton";
import CopyEmail from "@/components/ui/CopyEmail";
import EmailMenu from "@/components/ui/EmailMenu";
import IconLink, { LINKEDIN_PATH } from "@/components/ui/IconLink";

/** "Hiring?" call to action, shown at the bottom of the home and projects pages. */
export default function ContactSection({ t, id }: { t: Dictionary; id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border bg-bg-subtle">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">{t.home.contactTitle}</h2>
            <p className="mt-2 text-ink-muted">{t.home.contactText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <CopyEmail email={t.profile.email} copyLabel={t.home.copyEmail} copiedLabel={t.home.copied} />
              <CopyEmail email={t.profile.phone.display} copyLabel={t.home.copyEmail} copiedLabel={t.home.copied} />
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3 md:flex-nowrap">
            <EmailMenu email={t.profile.email} label={t.home.sendEmail} subject={t.home.emailSubject} appLabel={t.home.emailApp} />
            <LinkButton href={t.resumePdf} download variant="ghost">
              {t.home.downloadResume}
            </LinkButton>
            <IconLink href={links.linkedin} label="LinkedIn">
              <path d={LINKEDIN_PATH} />
            </IconLink>
          </div>
        </div>
      </div>
    </section>
  );
}
