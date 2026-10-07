import { type Project } from "@/data/projects";
import Card from "./Card";
import Tag from "./Tag";
import LinkButton from "./LinkButton";

type ProjectCardLabels = {
  problem: string;
  built: string;
  learned: string;
  github: string;
  liveDemo: string;
};

type ProjectCardProps = {
  project: Project;
  labels: ProjectCardLabels;
};

export default function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">

      <h2 className="mb-2 text-2xl font-bold text-ink">{project.title}</h2>
      <p className="mb-8 text-ink-muted">{project.description}</p>

      <div className="mb-8 space-y-6 border-t border-border pt-8">
        <CaseStudyRow label={labels.problem}  text={project.problem}  />
        <CaseStudyRow label={labels.built}    text={project.solution} />
        <CaseStudyRow label={labels.learned}  text={project.learned}  />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.github && (
          <LinkButton href={project.github} external>
            {labels.github}
          </LinkButton>
        )}
        {project.privateNote && (
          <span className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink-light">
            {project.privateNote}
          </span>
        )}
        {project.url && (
          <LinkButton href={project.url} external>
            {labels.liveDemo}
          </LinkButton>
        )}
      </div>

    </Card>
  );
}

function CaseStudyRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold tracking-[0.12em] text-ink-light uppercase">
        {label}
      </p>
      <p className="leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}
