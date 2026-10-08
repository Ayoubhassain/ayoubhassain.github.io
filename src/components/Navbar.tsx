import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import NavLinks, { type NavLink } from "@/components/NavLinks";
import MobileMenu from "@/components/MobileMenu";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  const t = getDictionary(locale);
  const [first, ...rest] = t.profile.name.split(" ");

  const navLinks: NavLink[] = [
    { href: `/${locale}`,           label: t.nav.home, exact: true },
    { href: `/${locale}/projects`,  label: t.nav.projects },
    { href: `/${locale}/resume`,    label: t.nav.resume },
    { href: `/${locale}/interview`, label: t.nav.qanda },
    { href: `/${locale}/contact`,   label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-3 text-lg tracking-tight">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold tracking-normal text-bg"
          >
            {first[0]}
            {rest.join(" ")[0]}
          </span>
          <span className="hidden sm:inline">
            <span className="font-bold text-ink">{first}</span>{" "}
            <span className="font-light text-ink-muted">{rest.join(" ")}</span>
          </span>
          <span className="sr-only sm:hidden">{t.profile.name}</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <NavLinks links={navLinks} />
          <ThemeToggle lightLabel={t.nav.themeLight} darkLabel={t.nav.themeDark} />
          <LocaleSwitcher />
          <MobileMenu links={navLinks} label={t.nav.menu} />
        </div>
      </nav>
    </header>
  );
}
