import type { Dictionary } from "../types";

// Replace Ayoubhassain with your GitHub username (this is the only place to change it).
const GITHUB_USER = "Ayoubhassain";

const links = {
  github:   `https://github.com/${GITHUB_USER}`,
  linkedin: "https://www.linkedin.com/in/ayoub-hassain1",
};

export const en: Dictionary = {
  pageMeta: {
    home: {
      title: "Ayoub Hassain — Full Stack & DevOps Engineer",
      description:
        "ENSEEIHT engineer building web applications from the database to the UI, and shipping them with tests, CI/CD, Docker and Kubernetes.",
    },
    about: {
      title: "About — Ayoub Hassain",
      description:
        "Full stack & DevOps engineer from ENSEEIHT, based in Paris. Angular, Node.js, Java/Spring Boot, Docker, Kubernetes.",
    },
    projects: {
      title: "Projects — Ayoub Hassain",
      description:
        "Selected projects: a Spark cluster on GCP with Terraform and Ansible, an e-commerce platform in Spring Boot and Angular, a REST API in Node.js, and a containers vs. MicroVMs benchmark.",
    },
    resume: {
      title: "Resume — Ayoub Hassain",
      description:
        "Experience, education, projects and skills — Padoa, Banque Centrale Populaire and SQLI.",
    },
    qanda: {
      title: "Q&A — Ayoub Hassain",
      description:
        "How I work, what I enjoy building, and what I'm looking for next.",
    },
  },
  nav: {
    about:     "About",
    projects:  "Projects",
    resume:    "Resume",
    qanda:     "Q&A",
    themeLight: "Switch to light mode",
    themeDark:  "Switch to night mode",
  },
  home: {
    tagline:        "Full Stack & DevOps Engineer",
    proofPoint:
      "Recently: final-year internship at Padoa, on a production SaaS platform — new features in Angular and Node.js, end-to-end tests with Playwright, and CI/CD up to Kubernetes.",
    locationLine:   "Paris, France · ENSEEIHT",
    viewProjects:   "View projects",
    downloadResume: "Download resume",
    contactMe:      "Contact me",
    inDepth:        "In depth",
    project:        "Project",
    focusedOn:      "Core stack",
    available:      "Available from November 2026",
    experience:     "Experience",
    seeResume:      "Full resume →",
  },
  about: {
    label:          "About",
    title:          "About me",
    subtitle:       "A bit about who I am and what I work with.",
    basedIn:        "Based in",
    reachMe:        "You can reach me at",
    skills:         "Skills",
    languages:      "Languages",
  },
  projectsPage: {
    label:    "Projects",
    title:    "What I've built",
    subtitle: "Infrastructure, web applications and APIs — academic and personal projects.",
  },
  resume: {
    label:      "Resume",
    title:      "Resume",
    subtitle:   "Experience, education, projects and skills.",
    experience: "Experience",
    education:  "Education",
    projects:   "Projects",
    skills:     "Skills",
    downloadEn: "↓ EN",
    downloadFr: "↓ FR",
    live:       "Live",
  },
  qandaPage: {
    label:    "Q&A",
    title:    "Q&A",
    subtitle: "Questions recruiters often ask me, and my answers.",
  },
  projectCard: {
    problem:  "Goal",
    built:    "What I built",
    learned:  "What I learned",
    github:   "GitHub",
    liveDemo: "Live demo",
  },
  profile: {
    name:     "Ayoub Hassain",
    photoAlt: "Portrait of Ayoub Hassain",
    title:    "Full Stack & DevOps Engineer",
    headline:
      "Engineer from ENSEEIHT. I build web applications from the database to the UI, and ship them to production with tests, CI/CD and Kubernetes.",
    bio:
      "I'm a computer science and telecommunications engineer from ENSEEIHT (Toulouse INP), with a major in Infrastructure and Big Data.\n\nAcross three experiences, I have built and evolved web applications on both sides: Angular and TypeScript on the front end, Node.js and Java/Spring Boot on the back end. At Padoa, I also worked on what happens after the code is written: automated end-to-end tests, CI pipelines, Docker and Kubernetes deployments, and production monitoring.\n\nI'm looking for a full-time role from November 2026. I'm also interested in AI and how it changes the way we build software.",
    location: "Paris, France",
    email:    "ayoubhassain2233@gmail.com",
    stack: ["Angular", "TypeScript", "Node.js", "Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    spokenLanguages: [
      { name: "Arabic",  level: "Native" },
      { name: "French",  level: "Bilingual" },
      { name: "English", level: "Professional (C1)" },
      { name: "German",  level: "Basic (A2)" },
    ],
  },
  experience: [
    {
      role: "Full Stack / DevOps Engineer — final-year internship",
      company: "Padoa",
      summary: "Full stack and DevOps on an occupational-health SaaS in production: Angular, Node.js, Playwright, Kubernetes.",
      period: "Mar 2026 – Sep 2026",
      description:
        "New features on a production occupational-health SaaS platform (Angular/RxJS, TypeScript, Node.js/Express, PostgreSQL), in an Agile/Scrum team. Migrated legal forms to the reference-list system: data model changes, back-end and front-end updates, and data migration with SQL scripts. Built an interface to manage Word quote templates. Wrote Playwright end-to-end tests on business workflows (fixtures, Page Objects). Worked on CI/CD with GitHub Actions, Docker, and Kubernetes deployment with Helm and Argo CD. Code reviews and production bug fixing with logs and Prometheus/Grafana.",
    },
    {
      role: "Full Stack Developer — internship",
      company: "Banque Centrale Populaire",
      summary: "Built a cheque management application for the accounting team, in Spring Boot and Angular.",
      period: "Jun 2025 – Sep 2025",
      description:
        "Designed and built a cheque management application for the bank's accounting team, with a Java/Spring Boot back end and an Angular front end. Creation, search, editing and tracking of cheques, with scanning, calibrated printing and amounts written in words. REST API, MySQL persistence with JPA/Hibernate, continuous integration (tests, Maven build, Docker image) and server deployment (Tomcat/Nginx).",
    },
    {
      role: "Front-End Developer — internship",
      company: "SQLI",
      summary: "Angular interfaces for an internal HR application.",
      period: "Jul 2024 – Sep 2024",
      description:
        "Angular/TypeScript interfaces for an internal HR application: forms, dynamic views and REST API integration. Took part in testing, bug fixing and feature changes within the project team.",
    },
  ],
  education: [
    {
      role: "Engineering Degree in Computer Science and Telecommunications",
      company: "Toulouse INP – ENSEEIHT",
      period: "2023 – 2026",
      description:
        "Java, C++, object-oriented design, databases, networks, cloud computing. Major in Infrastructure and Big Data.",
    },
    {
      role: "Classes préparatoires MPSI – MP*",
      company: "Lycée Mohammed VI d'Excellence, Benguérir",
      period: "2021 – 2023",
      description:
        "Intensive preparation in mathematics, physics and computer science for the French engineering schools' entrance exams.",
    },
  ],
  projects: [
    {
      id: "spark-cluster-gcp",
      title: "Spark Cluster on GCP",
      description: "An Apache Spark cluster deployed on Google Cloud from scratch, with Terraform and Ansible.",
      problem:
        "Make a distributed computing cluster reproducible: going from an empty cloud project to a running Spark job without any manual step, while keeping the worker nodes off the internet.",
      solution:
        "Terraform provisions the VMs, the VPC and a private subnet on GCP. Ansible then installs Java and Spark, configures the master and the workers, and mounts a shared NFS volume. The cluster is validated with a WordCount job: 28 s with one executor, 19 s with two.",
      learned:
        "Infrastructure as Code end to end: separating provisioning from configuration, isolating compute nodes in a private network, and rebuilding a whole cluster from a single command.",
      stack: ["GCP", "Terraform", "Ansible", "Apache Spark", "NFS", "Linux"],
      github: links.github + "/spark-cluster-gcp",
    },
    {
      id: "ecommerce-fullstack",
      title: "E-commerce Platform",
      description: "A full stack e-commerce application with a Spring Boot REST API and an Angular front end.",
      problem:
        "Build a complete web application, from the data model to the user interface, with real features: accounts, catalog, cart, orders and an admin area.",
      solution:
        "A Spring Boot REST API with JPA/Hibernate and PostgreSQL, and an Angular front end. Authentication, product catalog and search, cart and orders, and an admin area to manage products and orders.",
      learned:
        "Designing a REST API and its data model first, so the front end stays simple and each feature fits cleanly into the existing structure.",
      stack: ["Java", "Spring Boot", "JPA/Hibernate", "Angular", "TypeScript", "PostgreSQL"],
      github: links.github + "/ecommerce-fullstack",
    },
    {
      id: "pokemon-rest-api",
      title: "Pokémon REST API",
      description: "A REST API in Node.js and Express, with JWT authentication, validation and integration tests.",
      problem:
        "Write an API that is not just functional but clean: protected routes, validated input, tested endpoints, and a setup anyone can run.",
      solution:
        "A CRUD API in Node.js/Express backed by PostgreSQL. JWT protects the routes, incoming data is validated before reaching the database, and integration tests cover the main endpoints. Everything runs with Docker Compose.",
      learned:
        "How much testing and validation change the confidence you have in an API, and why a one-command Docker setup matters for the next developer.",
      stack: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
      github: links.github + "/pokemon-rest-api",
    },
    {
      id: "serverless-containers-vs-microvms",
      title: "Serverless: Containers vs. MicroVMs",
      description: "A benchmark of the energy cost of stronger isolation for serverless functions on Kubernetes.",
      problem:
        "MicroVMs isolate serverless functions better than containers, but at what cost? The goal was to measure it instead of guessing.",
      solution:
        "Two Kubernetes clusters running Apache OpenWhisk: one with standard containers (containerd/runc), one isolating each function in a MicroVM (Kata Containers on QEMU). Kepler measures energy, Prometheus stores it, Grafana displays it. Over 60 tests, MicroVMs used 6 to 9 times more energy on warm starts.",
      learned:
        "How container runtimes and MicroVMs differ under the hood, and how to build a fair benchmark to back an architecture decision with numbers.",
      stack: ["Kubernetes", "OpenWhisk", "Kata Containers", "Kepler", "Prometheus", "Grafana"],
      github: links.github + "/serverless-containers-vs-microvms",
    },
  ],
  qanda: [
    {
      question: "What kind of work do you enjoy most?",
      answer:
        "Features that go all the way to production. At Padoa, the migration of legal forms to the reference-list system is a good example: it touched the data model, the back end, the front end and the existing data, and it had to work without breaking anything for the users.",
    },
    {
      question: "Are you more of a developer or a DevOps engineer?",
      answer:
        "A developer who cares about what happens after the code is written. Most of my work is full stack, but I have also written CI workflows, deployed with Docker and Kubernetes, and provisioned infrastructure with Terraform and Ansible. Knowing both sides helps me write code that is easier to test, deploy and monitor.",
    },
    {
      question: "How do you approach testing?",
      answer:
        "As part of the feature, not as an extra step. At Padoa I wrote Playwright end-to-end tests on business workflows, with fixtures and Page Objects so the tests stay readable and easy to maintain, and they run in the CI on every change.",
    },
    {
      question: "What are you looking for next?",
      answer:
        "A full-time full stack or DevOps role from November 2026, in a team that ships to production regularly and takes code quality seriously. I'm also interested in AI and how it can be used in real products and in the way we build software.",
    },
  ],
  resumePdf: "/resume-en.pdf",
};

export { links };
