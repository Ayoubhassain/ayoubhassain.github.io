import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/site-metadata";
import { withBasePath } from "@/lib/base-path";
import { links } from "@/i18n/dictionaries/en";
import LinkButton from "@/components/ui/LinkButton";
import Tag from "@/components/ui/Tag";
import CopyEmail from "@/components/ui/CopyEmail";

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
    path: "",
    title: t.pageMeta.home.title,
    description: t.pageMeta.home.description,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  const featuredIds = ["spark-cluster-gcp", "ecommerce-fullstack", "serverless-containers-vs-microvms"];
  const featured = featuredIds
    .map((id) => t.projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => project !== undefined);

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
            <div className="order-2 md:order-1">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle px-3 py-1.5 text-xs font-medium text-ink">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-available opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-available" />
                </span>
                {t.home.available}
              </p>

              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase">
                {t.home.tagline}
              </p>

              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-ink md:text-7xl">
                {t.profile.name}
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl">
                {t.profile.headline}
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-light md:text-lg">
                {t.home.proofPoint}
              </p>

              <p className="mt-4 text-sm text-ink-light">{t.home.locationLine}</p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <LinkButton href={`/${locale}/projects`} variant="primary">
                  {t.home.viewProjects}
                </LinkButton>
                <LinkButton href={t.resumePdf} download variant="ghost">
                  {t.home.downloadResume}
                </LinkButton>
                <LinkButton href="#contact" variant="ghost">
                  {t.home.contactMe}
                </LinkButton>
                <div className="flex items-center gap-2">
                  <IconLink href={links.linkedin} label="LinkedIn">
                    <path d={LINKEDIN_PATH} />
                  </IconLink>
                  <IconLink href={links.github} label="GitHub">
                    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
                  </IconLink>
                </div>
              </div>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath("/ayoub-hassain.jpg")}
              alt={t.profile.photoAlt}
              width={640}
              height={800}
              className="order-1 h-28 w-28 rounded-full border border-border object-cover object-top shadow-sm md:order-2 md:h-auto md:w-72 md:rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className={SECTION}>
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
              {t.home.experience}
            </p>
            <Link
              href={`/${locale}/resume`}
              className="text-sm text-ink-muted transition-colors hover:text-accent"
            >
              {t.home.seeResume}
            </Link>
          </div>

          <ol className="divide-y divide-border border-y border-border">
            {t.experience.map((entry) => (
              <li
                key={entry.company}
                className="grid gap-1 py-6 md:grid-cols-[14rem_1fr_auto] md:items-baseline md:gap-8"
              >
                <span className="font-semibold text-ink">{entry.company}</span>
                <div>
                  <p className="text-ink">{entry.role}</p>
                  {entry.summary && (
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{entry.summary}</p>
                  )}
                </div>
                <span className="text-sm text-ink-light md:text-right">{entry.period}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bg-subtle">
        <div className={SECTION}>
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
              {t.home.inDepth}
            </p>
            <Link
              href={`/${locale}/projects`}
              className="text-sm text-ink-muted transition-colors hover:text-accent"
            >
              {t.home.allProjects}
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((project) => (
              <Link
                key={project.id}
                href={`/${locale}/projects#${project.id}`}
                className="group flex flex-col rounded-2xl border border-border bg-bg p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-ink-light uppercase">
                  {t.home.project}
                </p>
                <h2 className="text-xl font-bold text-ink group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.stack.slice(0, 4).map((tech) => (
                    <Tag key={tech} label={tech} />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className={SECTION}>
          <p className="mb-8 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase">
            {t.home.focusedOn}
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {t.profile.stack.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-sm font-semibold text-ink">{group.label}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag label={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-bg-subtle">
        <div className={SECTION}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                {t.home.contactTitle}
              </h2>
              <p className="mt-2 text-ink-muted">{t.home.contactText}</p>
              <div className="mt-5">
                <CopyEmail email={t.profile.email} copyLabel={t.home.copyEmail} copiedLabel={t.home.copied} />
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3 md:flex-nowrap">
              <LinkButton href={`mailto:${t.profile.email}`} variant="primary">
                {t.home.sendEmail}
              </LinkButton>
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
    </div>
  );
}

const SECTION = "mx-auto max-w-5xl px-6 py-12 md:py-16";

const LINKEDIN_PATH = "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z";

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:bg-bg-subtle hover:text-accent"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
