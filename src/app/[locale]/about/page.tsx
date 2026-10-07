import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getSkillCategories } from "@/i18n/skill-categories";
import { buildPageMetadata } from "@/lib/site-metadata";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillsGrid from "@/components/ui/SkillsGrid";

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
      <SectionHeader
        label={t.about.label}
        title={t.about.title}
        subtitle={t.about.subtitle}
      />

      <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink-muted">
        <p>{t.profile.bio}</p>
        <p>
          {t.about.basedIn}{" "}
          {t.profile.location}
          {". "}
          {t.about.reachMe}{" "}
          <a
            href={`mailto:${t.profile.email}`}
            className="text-accent underline underline-offset-4 transition-colors hover:text-accent-hover"
          >
            {t.profile.email}
          </a>
          .
        </p>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase">
          {t.about.skills}
        </h2>
        <SkillsGrid categories={skillCategories} />
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase">
          {t.about.languages}
        </h2>
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
    </PageContainer>
  );
}
