"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentLocale = (segments[1] ?? "en") as Locale;

  function hrefFor(locale: Locale) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${locale}/${rest}` : `/${locale}`;
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-bg-subtle p-1 text-xs font-medium">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={hrefFor(locale)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            currentLocale === locale
              ? "bg-ink text-bg"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
