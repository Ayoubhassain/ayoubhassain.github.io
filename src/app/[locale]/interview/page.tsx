import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/site-metadata";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

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
    <PageContainer>
      <SectionHeader
        label={t.qandaPage.label}
        title={t.qandaPage.title}
        subtitle={t.qandaPage.subtitle}
      />

      <ul className="space-y-4">
        {t.qanda.map(({ question, answer }) => (
          <li key={question}>
            <Card>
              <p className="font-mono mb-3 text-xs text-accent">Q: {question}</p>
              <p className="text-sm text-ink-muted leading-relaxed">{answer}</p>
            </Card>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
