import { notFound, redirect } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** The About content now lives on the home page: keep old links working. */
export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  redirect(`/${locale}#about`);
}
