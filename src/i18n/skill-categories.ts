import type { Locale } from "./config";
import type { SkillCategory } from "@/components/ui/SkillsGrid";

const SKILL_ITEMS = {
  frontend:  ["Angular", "TypeScript", "RxJS", "JavaScript", "HTML", "CSS"],
  backend:   ["Node.js", "Express", "Java", "Spring Boot", "JPA/Hibernate", "REST APIs"],
  databases: ["PostgreSQL", "MySQL", "SQL", "Data migrations"],
  cloud:     ["Docker", "Kubernetes", "Helm", "Argo CD", "Terraform", "Ansible", "GCP", "Linux"],
  cicd:      ["GitHub Actions", "GitLab CI", "Jenkins", "Maven", "Git", "Prometheus", "Grafana"],
  quality:   ["Playwright (E2E)", "Page Objects", "Unit & integration tests", "Code review", "Agile/Scrum"],
} as const;

const LABELS: Record<Locale, Record<keyof typeof SKILL_ITEMS, { name: string; description: string }>> = {
  en: {
    frontend:  { name: "Front end",              description: "Interfaces shipped to production." },
    backend:   { name: "Back end",               description: "APIs and business logic." },
    databases: { name: "Databases",              description: "Modeling, queries and migrations." },
    cloud:     { name: "Cloud & infrastructure", description: "From container to cluster." },
    cicd:      { name: "CI/CD & monitoring",     description: "From commit to production." },
    quality:   { name: "Testing & methods",      description: "How I make sure it works." },
  },
  fr: {
    frontend:  { name: "Front-end",              description: "Interfaces livrées en production." },
    backend:   { name: "Back-end",               description: "API et logique métier." },
    databases: { name: "Bases de données",       description: "Modélisation, requêtes et migrations." },
    cloud:     { name: "Cloud & infrastructure", description: "Du conteneur au cluster." },
    cicd:      { name: "CI/CD & supervision",    description: "Du commit à la production." },
    quality:   { name: "Tests & méthodes",       description: "Comment je m'assure que ça marche." },
  },
};

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return (Object.keys(SKILL_ITEMS) as (keyof typeof SKILL_ITEMS)[]).map((key) => ({
    name:        LABELS[locale][key].name,
    description: LABELS[locale][key].description,
    skills:      [...SKILL_ITEMS[key]],
  }));
}
