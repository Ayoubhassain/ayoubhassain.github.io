import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/site-metadata";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

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
    path: "/projects",
    title: t.pageMeta.projects.title,
    description: t.pageMeta.projects.description,
  });
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <PageContainer>
      <SectionHeader
        label={t.projectsPage.label}
        title={t.projectsPage.title}
        subtitle={t.projectsPage.subtitle}
      />

      <ul className="space-y-8">
        {t.projects.map((project) => (
          <li key={project.id} id={project.id} className="scroll-mt-24">
            <ProjectCard project={project} labels={t.projectCard} />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
