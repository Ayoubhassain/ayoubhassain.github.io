import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/site-metadata";
import { withBasePath } from "@/lib/base-path";
import PageContainer from "@/components/layout/PageContainer";
import LinkButton from "@/components/ui/LinkButton";
import ContactSection from "@/components/ContactSection";
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
  const a = t.about;

  return (
    <>
      <PageContainer>
        {/* Intro: photo, who I am, quick facts and links */}
        <div className="grid items-start gap-8 md:grid-cols-[16rem_1fr] md:gap-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath("/ayoub-hassain.jpg")}
            alt={t.profile.photoAlt}
            width={640}
            height={800}
            className="w-36 rounded-2xl border border-border object-cover shadow-sm md:sticky md:top-24 md:w-full md:rounded-3xl"
          />

          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase">{a.label}</p>
            <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{a.title}</h1>

            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
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

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href={`/${locale}/contact`} variant="primary">
                {t.home.contactMe}
              </LinkButton>
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
        </div>

        {/* Path in brief: from prépa to the next job */}
        <section className="mt-20">
          <h2 className={LABEL}>{a.journeyTitle}</h2>
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
        </section>

        {/* How I work */}
        <section className="mt-20">
          <h2 className={LABEL}>{a.workTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {a.work.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-border bg-bg-subtle p-6">
                <p className="mb-3 text-sm font-semibold text-accent">0{index + 1}</p>
                <h3 className="mb-2 font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </PageContainer>
      <ContactSection t={t} />
    </>
  );
}

const LABEL = "mb-8 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase";
