export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export default function ExperienceCard({ role, company, period, description }: ExperienceEntry) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <span className="font-semibold text-ink">{role}</span>
          <span className="ml-2 text-ink-muted">— {company}</span>
        </div>
        <span className="text-sm text-ink-light">{period}</span>
      </div>
      <p className="mt-3 leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}
