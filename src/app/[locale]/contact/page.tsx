import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/site-metadata";
import { links } from "@/i18n/dictionaries/en";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import LinkButton from "@/components/ui/LinkButton";
import CopyEmail from "@/components/ui/CopyEmail";
import { GITHUB_PATH, LINKEDIN_PATH } from "@/components/ui/IconLink";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return buildPageMetadata({
    locale: locale as Locale,
    path: "/contact",
    title: t.pageMeta.contact.title,
    description: t.pageMeta.contact.description,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  const c = t.contactPage;

  return (
    <PageContainer>
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle px-3 py-1.5 text-xs font-medium text-ink">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-available opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-available" />
        </span>
        {t.home.available}
      </p>

      <SectionHeader label={c.label} title={c.title} subtitle={c.subtitle} />

      <div className="grid gap-4 md:grid-cols-2">
        {/* Email, the main way to get in touch */}
        <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm md:col-span-2">
          <h2 className="text-lg font-semibold text-ink">{c.emailTitle}</h2>
          <p className="mt-1 text-sm text-ink-muted">{c.emailText}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <CopyEmail email={t.profile.email} copyLabel={t.home.copyEmail} copiedLabel={t.home.copied} />
            <LinkButton href={`mailto:${t.profile.email}`} variant="primary">
              {t.home.sendEmail}
            </LinkButton>
          </div>
        </div>

        <ProfileCard href={links.linkedin} title="LinkedIn" text={c.linkedinText} open={c.open} path={LINKEDIN_PATH} />
        <ProfileCard href={links.github} title="GitHub" text={c.githubText} open={c.open} path={GITHUB_PATH} />

        <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">{c.resumeTitle}</h2>
          <p className="mt-1 text-sm text-ink-muted">{c.resumeText}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <LinkButton href="/resume-fr.pdf" download variant="ghost">
              {t.resume.downloadFr}
            </LinkButton>
            <LinkButton href="/resume-en.pdf" download variant="ghost">
              {t.resume.downloadEn}
            </LinkButton>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-bg-subtle p-6">
          <h2 className="text-lg font-semibold text-ink">{c.lookingTitle}</h2>
          <ul className="mt-4 space-y-2">
            {c.looking.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}

function ProfileCard({ href, title, text, open, path }: { href: string; title: string; text: string; open: string; path: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-bg p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bg-subtle text-ink transition-colors group-hover:text-accent">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d={path} />
        </svg>
      </span>
      <span className="flex-1">
        <span className="block text-lg font-semibold text-ink transition-colors group-hover:text-accent">{title}</span>
        <span className="block text-sm text-ink-muted">{text}</span>
      </span>
      <span className="text-sm font-medium text-accent">{open} →</span>
    </a>
  );
}
