"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  links: { href: string; label: string }[];
};

/** Menu links: grey pill on hover, and on the page you are currently on. */
export default function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-1 sm:flex">
      {links.map((link) => {
        const active = !link.href.includes("#") && pathname.startsWith(link.href);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-[15px] transition-colors hover:bg-border hover:text-ink ${
                active ? "bg-border text-ink" : "text-ink-muted"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
