"use client";

import { useState } from "react";

type CopyEmailProps = {
  email: string;
  copyLabel: string;
  copiedLabel: string;
};

/** Shows the email in full with a copy button, for visitors without a mail app. */
export default function CopyEmail({ email, copyLabel, copiedLabel }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable: the address stays visible and selectable
    }
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-bg py-1 pl-4 pr-1 text-sm">
      <span className="select-all font-medium text-ink">{email}</span>
      <button
        type="button"
        onClick={copy}
        className="rounded-full px-3 py-1.5 text-ink-muted transition-colors hover:bg-bg-subtle hover:text-ink"
      >
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
