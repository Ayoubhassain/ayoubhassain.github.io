import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  const t = getDictionary(locale);
  const [first, ...rest] = t.profile.name.split(" ");

  const navLinks = [
    { href: `/${locale}/about`,     label: t.nav.about },
    { href: `/${locale}/projects`,  label: t.nav.projects },
    { href: `/${locale}/resume`,    label: t.nav.resume },
    { href: `/${locale}/interview`, label: t.nav.qanda },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
        <Link href={`/${locale}`} className="leading-none shrink-0">
          <span className="block text-lg font-bold tracking-tight text-ink">{first}</span>
          <span className="block text-lg font-light tracking-tight text-ink-muted">
            {rest.join(" ")}
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="hidden sm:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle lightLabel={t.nav.themeLight} darkLabel={t.nav.themeDark} />
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  );
}
