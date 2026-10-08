import { type Project } from "@/data/projects";
import type { Dictionary } from "@/i18n/types";
import { withBasePath } from "@/lib/base-path";
import Tag from "./Tag";
import { GITHUB_PATH } from "./IconLink";

type ProjectCardProps = {
  project: Project;
  labels: Dictionary["projectCard"];
};

export default function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg shadow-sm transition-shadow hover:shadow-md">
      {project.image && (
        <div className="flex h-40 items-center justify-center border-b border-border bg-white px-6 py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath(project.image)}
            alt={`${labels.architecture} — ${project.title}`}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 self-start rounded-full bg-bg-subtle px-3 py-1 text-xs font-medium text-ink-muted">
          {labels.kinds[project.kind]}
        </span>

        <h2 className="text-xl font-bold text-ink transition-colors group-hover:text-accent">
          {project.title}
        </h2>
        <p className="mt-2 leading-relaxed text-ink-muted">{project.description}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-lg font-bold leading-tight text-ink">{metric.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-ink-muted">{metric.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>

        <details className="group/details mt-5">
          <summary className="cursor-pointer list-none text-sm font-medium text-accent hover:text-accent-hover [&::-webkit-details-marker]:hidden">
            <span className="group-open/details:hidden">{labels.details} ↓</span>
            <span className="hidden group-open/details:inline">{labels.hideDetails} ↑</span>
          </summary>
          <div className="mt-4 space-y-5">
            <CaseStudyRow label={labels.problem} text={project.problem} />
            <CaseStudyRow label={labels.built} text={project.solution} />
            <CaseStudyRow label={labels.learned} text={project.learned} />
          </div>
        </details>

        {project.github && (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d={GITHUB_PATH} />
              </svg>
              {labels.github}
            </a>
            <a
              href={`${project.github}#architecture`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-bg-subtle hover:text-accent"
            >
              {labels.architecture}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

function CaseStudyRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-1.5 text-xs font-semibold tracking-[0.12em] text-ink-light uppercase">{label}</p>
      <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}
