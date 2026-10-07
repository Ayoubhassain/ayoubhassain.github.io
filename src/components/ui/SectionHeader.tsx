import ScrambleText from "./ScrambleText";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  label?: string;
  action?: React.ReactNode;
};

export default function SectionHeader({ title, subtitle, label, action }: SectionHeaderProps) {
  return (
    <div className="mb-12 flex items-start justify-between gap-6">
      <div>
        {label && (
          <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase">
            {label}
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
          <ScrambleText text={title} delay={40} />
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0 pt-1">{action}</div>}
    </div>
  );
}
