import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/site-metadata";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
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
    path: "/interview",
    title: t.pageMeta.qanda.title,
    description: t.pageMeta.qanda.description,
  });
}

export default async function InterviewPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <>
      <PageContainer>
        <SectionHeader
          label={t.qandaPage.label}
          title={t.qandaPage.title}
          subtitle={t.qandaPage.subtitle}
        />

        <div className="divide-y divide-border rounded-2xl border border-border bg-bg shadow-sm">
          {t.qanda.map(({ question, answer }, index) => (
            <details key={question} open={index === 0} className="group">
              <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 transition-colors hover:bg-bg-subtle [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 font-semibold text-ink">{question}</span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-ink-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 pl-16 leading-relaxed text-ink-muted">{answer}</p>
            </details>
          ))}
        </div>
      </PageContainer>
      <ContactSection t={t} />
    </>
  );
}
