import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/site-metadata";
import Link from "next/link";
import { getSkillCategories } from "@/i18n/skill-categories";
import type { ExperienceEntry } from "@/components/ui/ExperienceCard";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillsGrid from "@/components/ui/SkillsGrid";
import Tag from "@/components/ui/Tag";
import LinkButton from "@/components/ui/LinkButton";
import ContactSection from "@/components/ContactSection";

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
    path: "/resume",
    title: t.pageMeta.resume.title,
    description: t.pageMeta.resume.description,
  });
}

export default async function ResumePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  const skillCategories = getSkillCategories(locale as Locale);
  const mainPdf = locale === "fr" ? "/resume-fr.pdf" : "/resume-en.pdf";
  const otherPdf = locale === "fr" ? "/resume-en.pdf" : "/resume-fr.pdf";
  const mainLabel = locale === "fr" ? t.resume.downloadFr : t.resume.downloadEn;
  const otherLabel = locale === "fr" ? t.resume.downloadEn : t.resume.downloadFr;

  return (
    <>
      <PageContainer>
        <SectionHeader label={t.resume.label} title={t.resume.title} subtitle={t.resume.subtitle} />

        <div className="-mt-4 mb-14 flex flex-wrap gap-3">
          <LinkButton href={mainPdf} download variant="primary">
            ↓ {mainLabel}
          </LinkButton>
          <LinkButton href={otherPdf} download variant="ghost">
            ↓ {otherLabel}
          </LinkButton>
        </div>

        <section className="mb-14">
          <h2 className={LABEL}>{t.resume.experience}</h2>
          <Timeline entries={t.experience} />
        </section>

        <section className="mb-14">
          <h2 className={LABEL}>{t.resume.education}</h2>
          <Timeline entries={t.education} />
        </section>

        <section className="mb-14">
          <h2 className={LABEL}>{t.resume.projects}</h2>
          <ul className="divide-y divide-border rounded-2xl border border-border">
            {t.projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/${locale}/projects#${project.id}`}
                  className="group flex flex-col gap-3 px-6 py-5 transition-colors hover:bg-bg-subtle md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="font-semibold text-ink transition-colors group-hover:text-accent">{project.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{project.description}</p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-accent">{t.resume.seeProject}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className={LABEL}>{t.resume.skills}</h2>
          <SkillsGrid categories={skillCategories} compact />
        </section>

        <section>
          <h2 className={LABEL}>{t.about.languages}</h2>
          <div className="flex flex-wrap gap-2">
            {t.profile.spokenLanguages.map(({ name, level }) => (
              <Tag key={name} label={`${name} · ${level}`} />
            ))}
          </div>
        </section>
      </PageContainer>
      <ContactSection t={t} />
    </>
  );
}

/** Vertical timeline; each sentence of the description becomes a bullet point. */
function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-8">
      {entries.map((entry) => (
        <li key={`${entry.company}-${entry.period}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent ring-1 ring-border"
          />
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <p className="text-lg font-semibold text-ink">
              {entry.company}
              <span className="font-normal text-ink-muted"> · {entry.role}</span>
            </p>
            <p className="shrink-0 text-sm text-ink-light">{entry.period}</p>
          </div>
          <ul className="mt-3 space-y-2">
            {splitSentences(entry.description).map((sentence) => (
              <li key={sentence} className="flex gap-3 leading-relaxed text-ink-muted">
                <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-light" />
                <span>{sentence}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function splitSentences(text: string): string[] {
  return text.split(/(?<=\.)\s+(?=[A-ZÀ-Ý])/).map((s) => s.trim()).filter(Boolean);
}

const LABEL = "mb-6 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase";
