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
              className="order-1 h-28 w-28 rounded-full border border-border object-cover object-top shadow-sm md:order-2 md:h-auto md:w-72 md:rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* About: who I am, in a few lines */}
      <section id="about" className="scroll-mt-20 border-b border-border">
        <div className={`${SECTION} grid gap-8 md:grid-cols-[14rem_1fr] md:gap-12`}>
          <p className={LABEL}>{a.label}</p>
          <div>
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
              {a.intro.split("\n\n").map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {a.quick.map((item) => (
                <li key={item} className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Path in brief: from prépa to the next job */}
      <section className="border-b border-border">
        <div className={SECTION}>
          <div className="mb-10 flex items-baseline justify-between gap-4">
            <p className={LABEL}>{a.journeyTitle}</p>
            <Link href={`/${locale}/resume`} className="text-sm text-ink-muted transition-colors hover:text-accent">
              {t.home.seeResume}
            </Link>
          </div>
          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
            {a.journey.map((step) => (
              <li
                key={step.title}
                className={`relative border-t-2 pt-5 ${step.next ? "border-dashed border-available/60" : "border-border"}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -top-[7px] left-0 h-3 w-3 rounded-full ring-4 ring-bg ${step.next ? "bg-available" : "bg-accent"}`}
                />
                <p className={`text-sm font-semibold ${step.next ? "text-available" : "text-accent"}`}>
                  {step.period}
                  {step.place && <span className="font-normal text-ink-light"> · {step.place}</span>}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bg-subtle">
        <div className={SECTION}>
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <p className={LABEL}>{t.home.inDepth}</p>
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

      {/* How I work */}
      <section className="border-b border-border">
        <div className={SECTION}>
          <p className={`${LABEL} mb-8`}>{a.workTitle}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {a.work.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-border bg-bg-subtle p-6">
                <p className="mb-3 text-sm font-semibold text-accent">0{index + 1}</p>
                <h3 className="mb-2 font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className={SECTION}>
          <p className={`${LABEL} mb-8`}>{t.home.focusedOn}</p>
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

      <ContactSection t={t} id="contact" />
    </div>
  );
}

const SECTION = "mx-auto max-w-5xl px-6 py-12 md:py-16";
const LABEL = "text-xs font-semibold tracking-[0.15em] text-accent uppercase";
