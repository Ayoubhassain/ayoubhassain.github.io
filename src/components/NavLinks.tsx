"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLink = { href: string; label: string; exact?: boolean };

/** The home link is only active on the home page itself, the others on their page and below. */
export function isActive(link: NavLink, pathname: string) {
  const path = pathname.replace(/\/$/, "");
  return link.exact ? path === link.href : path.startsWith(link.href);
}

/** Menu links on tablet and desktop: grey pill on hover, and on the current page. */
export default function NavLinks({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-1 sm:flex">
      {links.map((link) => {
        const active = isActive(link, pathname);
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
