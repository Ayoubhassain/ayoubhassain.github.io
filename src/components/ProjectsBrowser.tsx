"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import type { Dictionary } from "@/i18n/types";
import ProjectCard from "@/components/ui/ProjectCard";

type Filter = "all" | ProjectCategory;

type ProjectsBrowserProps = {
  projects: Project[];
  labels: Dictionary["projectCard"];
  filters: { all: string; dev: string; devops: string };
};

export default function ProjectsBrowser({ projects, labels, filters }: ProjectsBrowserProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const options: { value: Filter; label: string }[] = [
    { value: "all", label: filters.all },
    { value: "dev", label: filters.dev },
    { value: "devops", label: filters.devops },
  ];

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={filter === option.value}
            onClick={() => setFilter(option.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === option.value
                ? "bg-accent text-bg"
                : "border border-border text-ink-muted hover:bg-bg-subtle hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <ul className="grid items-start gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <li key={project.id} id={project.id} className="scroll-mt-24">
            <ProjectCard project={project} labels={labels} />
          </li>
        ))}
      </ul>
    </>
  );
}
