import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Navbar locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} />
    </>
  );
}
