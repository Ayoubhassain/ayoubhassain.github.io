import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getSkillCategories } from "@/i18n/skill-categories";
import { type Project } from "@/data/projects";
import { buildPageMetadata } from "@/lib/site-metadata";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import SkillsGrid from "@/components/ui/SkillsGrid";
import Tag from "@/components/ui/Tag";
import LinkButton from "@/components/ui/LinkButton";

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

  return (
    <PageContainer>
      <SectionHeader
        label={t.resume.label}
        title={t.resume.title}
        subtitle={t.resume.subtitle}
        action={
          <div className="flex flex-wrap gap-2">
            <LinkButton href="/resume-en.pdf" download variant="ghost">
              {t.resume.downloadEn}
            </LinkButton>
            <LinkButton href="/resume-fr.pdf" download variant="ghost">
              {t.resume.downloadFr}
            </LinkButton>
          </div>
        }
      />

      <div className="space-y-14">
        <ResumeSection title={t.resume.experience}>
          {t.experience.map((entry) => (
            <ExperienceCard key={`${entry.role}-${entry.company}`} {...entry} />
          ))}
        </ResumeSection>

        <ResumeSection title={t.resume.education}>
          {t.education.map((entry) => (
            <ExperienceCard key={`${entry.role}-${entry.company}`} {...entry} />
          ))}
        </ResumeSection>

        <ResumeSection title={t.resume.projects}>
          {t.projects.map((project) => (
            <ProjectRow key={project.id} project={project} liveLabel={t.resume.live} />
          ))}
        </ResumeSection>

        <ResumeSection title={t.resume.skills}>
          <SkillsGrid categories={skillCategories} />
        </ResumeSection>
      </div>
    </PageContainer>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-ink-muted">
        {title}
      </h2>
      <div className="mb-5 h-px w-8 bg-accent" />
      <div className="border-l border-border pl-6">{children}</div>
    </div>
  );
}

function ProjectRow({ project, liveLabel }: { project: Project; liveLabel: string }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="font-medium text-ink">{project.title}</span>
        <div className="flex gap-4 text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted underline underline-offset-2 transition-colors hover:text-ink"
            >
              GitHub
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted underline underline-offset-2 transition-colors hover:text-ink"
            >
              {liveLabel}
            </a>
          )}
        </div>
      </div>
      <p className="mb-2 text-sm text-ink-muted">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
