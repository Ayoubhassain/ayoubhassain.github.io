import Tag from "./Tag";

export type SkillCategory = {
  name: string;
  description?: string;
  skills: string[];
};

type SkillsGridProps = {
  categories: SkillCategory[];
  compact?: boolean;
};

export default function SkillsGrid({ categories, compact = false }: SkillsGridProps) {
  if (compact) {
    // light version: 3 columns, no cards, no descriptions
    return (
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-3 text-sm font-semibold text-ink">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {categories.map((category) => (
        <div
          key={category.name}
          className="rounded-2xl border border-border bg-bg p-6 shadow-sm"
        >
          <h3 className="mb-1 text-sm font-semibold tracking-wide text-ink">{category.name}</h3>

          {category.description && (
            <p className="mb-4 text-xs leading-relaxed text-ink-muted">{category.description}</p>
          )}

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
