"use client";

import { useEffect, useRef, useState } from "react";

type EmailMenuProps = {
  email: string;
  label: string;
  subject: string;
  appLabel: string;
};

/**
 * "Send an email" button. A plain mailto: link does nothing when the visitor
 * has no mail app set up, so it opens a small menu: Gmail, Outlook (web) or
 * the default mail app.
 */
export default function EmailMenu({ email, label, subject, appLabel }: EmailMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const to = encodeURIComponent(email);
  const su = encodeURIComponent(subject);
  const options = [
    { label: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`, external: true },
    { label: "Outlook", href: `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${su}`, external: true },
    { label: appLabel, href: `mailto:${email}?subject=${su}`, external: false },
  ];

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
      >
        {label}
        <svg
          viewBox="0 0 16 16"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 z-20 mt-2 min-w-full w-max overflow-hidden rounded-xl border border-border bg-bg py-1 shadow-lg"
        >
          {options.map((option) => (
            <a
              key={option.label}
              role="menuitem"
              href={option.href}
              target={option.external ? "_blank" : undefined}
              rel={option.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-bg-subtle hover:text-accent"
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
