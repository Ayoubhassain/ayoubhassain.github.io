"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive, type NavLink } from "@/components/NavLinks";

/** Menu button for phones: the links are hidden in the header below the "sm" breakpoint. */
export default function MobileMenu({ links, label }: { links: NavLink[]; label: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-bg-subtle"
      >
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </button>

      {open && (
        <ul id="mobile-menu" className="absolute inset-x-0 top-full border-b border-border bg-bg px-4 py-3 shadow-sm">
          {links.map((link) => {
            const active = isActive(link, pathname);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base transition-colors hover:bg-bg-subtle ${
                    active ? "bg-bg-subtle font-medium text-ink" : "text-ink-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
