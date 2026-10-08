import Link from "next/link";
import { withBasePath } from "@/lib/base-path";

type LinkButtonVariant = "primary" | "ghost";

type LinkButtonProps = {
  href: string;
  variant?: LinkButtonVariant;
  external?: boolean;
  download?: boolean;
  children: React.ReactNode;
};

const variantStyles: Record<LinkButtonVariant, string> = {
  primary: "bg-accent text-bg hover:bg-accent-hover",
  ghost:   "border border-border text-ink hover:border-accent hover:bg-bg-subtle hover:text-accent",
};

export default function LinkButton({
  href,
  variant = "ghost",
  external = false,
  download = false,
  children,
}: LinkButtonProps) {
  const className = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${variantStyles[variant]}`;

  if (download) {
    return (
      <a href={withBasePath(href)} download className={className}>
        {children}
      </a>
    );
  }

  if (external || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
