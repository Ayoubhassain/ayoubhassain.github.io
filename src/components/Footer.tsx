import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { links } from "@/i18n/dictionaries/en";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-ink-muted">
        <span>© {year} {t.profile.name}</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={`mailto:${t.profile.email}`}
            className="transition-colors hover:text-accent"
          >
            {t.profile.email}
          </a>
          <a href={t.profile.phone.href} className="whitespace-nowrap transition-colors hover:text-accent">
            {t.profile.phone.display}
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
