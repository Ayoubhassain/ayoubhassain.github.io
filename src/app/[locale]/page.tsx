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
import ContactSection from "@/components/ContactSection";
import IconLink, { GITHUB_PATH, LINKEDIN_PATH } from "@/components/ui/IconLink";

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
  const a = t.about;
  const featuredIds = ["spark-cluster-gcp", "ecommerce-fullstack", "serverless-containers-vs-microvms"];
  const featured = featuredIds
    .map((id) => t.projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => project !== undefined);

  return (
    <div>
      {/* Who I am: the first thing a recruiter reads */}
      <section id="about" className="scroll-mt-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 pt-12 pb-16 md:grid-cols-[1fr_auto] md:gap-16 md:pt-20 md:pb-24">
          <div className="order-2 md:order-1">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle px-3 py-1.5 text-xs font-medium text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-available opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-available" />
              </span>
              {t.home.available}
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl">{t.profile.name}</h1>
            <p className="mt-3 text-lg font-medium text-accent md:text-xl">{t.profile.title}</p>

            <p className="mt-8 max-w-xl text-2xl leading-snug text-ink md:text-[1.7rem]">{t.profile.headline}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">{a.intro}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {a.quick.map((item) => (
                <li key={item} className="rounded-full border border-border px-3 py-1 text-sm text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
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
                  <path d={GITHUB_PATH} />
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
            className="order-1 h-28 w-28 rounded-full border border-border object-cover object-top shadow-sm md:order-2 md:h-auto md:w-80 md:rounded-[2rem]"
          />
        </div>
      </section>

      {/* What I do: skills grouped by what they are used for */}
      <section className="border-t border-border">
        <div className={SECTION}>
          <h2 className={H2}>{a.workTitle}</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {a.work.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{item.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Tag label={tag} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Path: a real sequence, from prépa to the next job */}
      <section className="border-t border-border">
        <div className={SECTION}>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className={H2}>{a.journeyTitle}</h2>
            <Link href={`/${locale}/resume`} className="shrink-0 text-sm text-ink-muted transition-colors hover:text-accent">
              {t.home.seeResume}
            </Link>
          </div>
          <ol className="mt-12 grid gap-y-10 sm:grid-cols-2 md:grid-cols-3">
            {a.journey.map((step) => (
              <li
                key={step.title}
                className={`relative border-t-2 pt-5 sm:pr-8 ${step.next ? "border-dashed border-available/60" : "border-border"}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -top-[7px] left-0 h-3 w-3 rounded-full ring-4 ring-bg ${step.next ? "bg-available" : "bg-accent"}`}
                />
                <p className={`text-sm font-semibold ${step.next ? "text-available" : "text-accent"}`}>
                  {step.period}
                  {step.place && <span className="font-normal text-ink-light">, {step.place}</span>}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* A few projects, with their architecture diagram */}
      <section className="bg-bg-subtle">
        <div className={SECTION}>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className={H2}>{t.home.inDepth}</h2>
            <Link href={`/${locale}/projects`} className="shrink-0 text-sm text-ink-muted transition-colors hover:text-accent">
              {t.home.allProjects}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((project) => (
              <Link
                key={project.id}
                href={`/${locale}/projects#${project.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg shadow-sm transition-shadow hover:shadow-md"
              >
                {project.image && (
                  <div className="flex h-36 items-center justify-center border-b border-border bg-white px-5 py-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={withBasePath(project.image)} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-accent">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <Tag key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection t={t} id="contact" />
    </div>
  );
}

const SECTION = "mx-auto max-w-5xl px-6 py-16 md:py-20";
const H2 = "text-2xl font-bold tracking-tight text-ink md:text-3xl";
