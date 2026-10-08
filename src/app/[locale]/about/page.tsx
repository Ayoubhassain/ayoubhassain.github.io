import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getSkillCategories } from "@/i18n/skill-categories";
import { buildPageMetadata } from "@/lib/site-metadata";
import { withBasePath } from "@/lib/base-path";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillsGrid from "@/components/ui/SkillsGrid";
import LinkButton from "@/components/ui/LinkButton";
import CopyEmail from "@/components/ui/CopyEmail";
import IconLink, { GITHUB_PATH, LINKEDIN_PATH } from "@/components/ui/IconLink";
import { links } from "@/i18n/dictionaries/en";

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
    path: "/about",
    title: t.pageMeta.about.title,
    description: t.pageMeta.about.description,
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  const skillCategories = getSkillCategories(locale as Locale);

  return (
    <PageContainer>
      <SectionHeader label={t.about.label} title={t.about.title} />

      <dl className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {t.about.facts.map((fact) => (
          <div key={fact.label} className="bg-bg px-5 py-4">
            <dt className="text-xl font-bold tracking-tight text-ink">{fact.value}</dt>
            <dd className="mt-1 text-sm text-ink-muted">{fact.label}</dd>
          </div>
        ))}
      </dl>

      <div className="grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="max-w-2xl">
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
            {t.profile.bio.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CopyEmail email={t.profile.email} copyLabel={t.home.copyEmail} copiedLabel={t.home.copied} />
            <LinkButton href={t.resumePdf} download variant="ghost">
              {t.home.downloadResume}
            </LinkButton>
            <IconLink href={links.linkedin} label="LinkedIn">
              <path d={LINKEDIN_PATH} />
            </IconLink>
            <IconLink href={links.github} label="GitHub">
              <path d={GITHUB_PATH} />
            </IconLink>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/ayoub-hassain.jpg")}
          alt={t.profile.photoAlt}
          width={640}
          height={800}
          className="hidden w-64 rounded-3xl border border-border object-cover shadow-sm md:block"
        />
      </div>

      <section className="mt-16">
        <h2 className={LABEL}>{t.about.workTitle}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {t.about.work.map((item, index) => (
            <div key={item.title} className="rounded-2xl border border-border bg-bg-subtle p-6">
              <p className="mb-3 text-sm font-semibold text-accent">0{index + 1}</p>
              <h3 className="mb-2 font-semibold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className={LABEL}>{t.about.skills}</h2>
        <SkillsGrid categories={skillCategories} compact />
      </section>

      <section className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className={LABEL}>{t.resume.education}</h2>
          <ul className="space-y-5">
            {t.education.map((entry) => (
              <li key={entry.company}>
                <p className="font-semibold text-ink">{entry.company}</p>
                <p className="text-ink-muted">{entry.role}</p>
                <p className="text-sm text-ink-light">{entry.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={LABEL}>{t.about.languages}</h2>
          <ul className="space-y-3 text-ink-muted">
            {t.profile.spokenLanguages.map(({ name, level }) => (
              <li key={name}>
                <span className="font-medium text-ink">{name}</span>
                <span className="text-ink-light"> — </span>
                {level}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageContainer>
  );
}

const LABEL = "mb-6 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase";
