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
    contact: {
      title: "Contact — Ayoub Hassain",
      description:
        "Get in touch with Ayoub Hassain, full stack and DevOps engineer, available from November 2026.",
    },
  },
  nav: {
    about:     "About",
    projects:  "Projects",
    resume:    "Resume",
    qanda:     "Q&A",
    contact:   "Contact",
    themeLight: "Switch to light mode",
    themeDark:  "Switch to night mode",
  },
  home: {
    tagline:        "Full Stack & DevOps Engineer",
    proofPoint:
      "Recently at Padoa: new features in Angular and Node.js on a production SaaS platform, end-to-end tests with Playwright, and CI/CD up to Kubernetes.",
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
    allProjects:    "All projects →",
    contactTitle:   "Hiring for a full stack or DevOps role?",
    contactText:    "I'm available from November 2026. Let's talk.",
    sendEmail:      "Send an email",
    copyEmail:      "Copy",
    copied:         "Copied!",
  },
  about: {
    label:          "About",
    title:          "From code to production.",
    subtitle:       "",
    skills:         "Skills",
    languages:      "Languages",
    facts: [
      { value: "ENSEEIHT", label: "Engineer, graduated 2026" },
      { value: "3", label: "experiences: Padoa, BCP, SQLI" },
      { value: "Paris", label: "based in France" },
      { value: "Nov. 2026", label: "available" },
    ],
    workTitle:      "How I work",
    work: [
      { title: "Tests from the start", text: "End-to-end tests with Playwright and Page Objects, written with the feature, run in the CI." },
      { title: "Up to production", text: "CI/CD with GitHub Actions, Docker and Kubernetes, then monitoring with Prometheus and Grafana." },
      { title: "As a team", text: "Code reviews, Agile/Scrum rituals, and fixing production bugs with the team." },
    ],
  },
  projectsPage: {
    label:    "Projects",
    title:    "What I've built",
    subtitle: "Infrastructure, web applications and APIs — academic and personal projects.",
    filterAll:    "All",
    filterDev:    "Development",
    filterDevops: "DevOps & cloud",
  },
  resume: {
    label:      "Resume",
    title:      "My background",
    subtitle:   "Experience, education, projects and skills.",
    experience: "Experience",
    education:  "Education",
    projects:   "Projects",
    skills:     "Skills",
    downloadEn: "Resume in English (PDF)",
    downloadFr: "Resume in French (PDF)",
    live:       "Live",
    seeProject: "See the project →",
  },
  qandaPage: {
    label:    "Q&A",
    title:    "Q&A",
    subtitle: "Questions recruiters often ask me, and my answers.",
  },
  contactPage: {
    label:        "Contact",
    title:        "Let's work together.",
    subtitle:     "I'm available for a full-time full stack or DevOps role from November 2026. The quickest way to reach me is by email, phone or LinkedIn.",
    emailTitle:   "Email",
    emailText:    "Write to me directly, or copy the address.",
    phoneTitle:   "Phone",
    phoneText:    "Call me or leave a message.",
    call:         "Call",
    linkedinText: "My professional profile and experience.",
    githubText:   "The code of my projects.",
    resumeTitle:  "Resume",
    resumeText:   "One page, in English or French.",
    lookingTitle: "What I'm looking for",
    looking: ["A full-time position (CDI)", "Full stack developer or DevOps engineer", "Available from November 2026", "Based in Paris"],
    open:         "Open",
  },
  projectCard: {
    problem:  "Goal",
    built:    "What I built",
    learned:  "What I learned",
    github:   "GitHub",
    liveDemo: "Live demo",
    details:      "Show details",
    hideDetails:  "Hide details",
    architecture: "Architecture",
    kinds: { personal: "Personal project", team: "Team project · ENSEEIHT", course: "Extended course project" },
  },
  profile: {
    name:     "Ayoub Hassain",
    photoAlt: "Portrait of Ayoub Hassain",
    title:    "Full Stack & DevOps Engineer",
    headline:
      "I build web applications end to end, and ship them to production.",
    bio:
      "I'm a software engineer from ENSEEIHT (Toulouse INP).\n\nAcross three experiences, I have built and evolved web applications on both sides: Angular and TypeScript on the front end, Node.js and Java/Spring Boot on the back end. At Padoa, I also worked on what happens after the code is written: automated end-to-end tests, CI pipelines, Docker and Kubernetes deployments, and production monitoring.\n\nI'm looking for a full-time role from November 2026. I'm also interested in AI and how it changes the way we build software.",
    location: "Paris, France",
    email:    "ayoubhassain2233@gmail.com",
    phone:    { display: "+33 7 68 82 85 10", href: "tel:+33768828510" },
    stack: [
      { label: "Development", items: ["Angular", "TypeScript", "Node.js", "Java", "Spring Boot"] },
      { label: "Data", items: ["PostgreSQL", "MySQL"] },
      { label: "DevOps & cloud", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
    ],
    spokenLanguages: [
      { name: "French",  level: "Native" },
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
        "Software engineering: Java, C++, object-oriented design, databases, networks, cloud computing.",
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
        "Make a distributed computing cluster reproducible: go from an empty cloud project to a running Spark job without any manual step, with a single SSH entry point.",
      solution:
        "Terraform creates the VPC, the firewall rules and 5 VMs (master, workers, edge node, NFS storage) and writes the Ansible inventory itself. Ansible installs Java and Spark, runs the master and workers as systemd services and mounts a shared NFS volume, reaching every node through the edge node. A Java WordCount ran in 28 s on 1 core and 19 s on 2.",
      learned:
        "Separating provisioning from configuration, generating the inventory instead of copying IPs by hand, and reading a benchmark to find the real bottleneck: beyond 2 cores, the data, not the CPU, was the limit.",
      kind: "team",
      category: "devops",
      metrics: [{ value: "5", label: "VMs provisioned" }, { value: "28 s → 19 s", label: "from 1 to 2 cores" }, { value: "6", label: "Ansible playbooks" }],
      image: "/projects/spark-cluster-gcp.png",
      stack: ["GCP", "Terraform", "Ansible", "Apache Spark", "NFS", "Linux"],
      github: links.github + "/spark-cluster-gcp",
    },
    {
      id: "ecommerce-fullstack",
      title: "E-commerce Platform",
      description: "A Spring Boot and Angular shop that I extended with JWT authentication, an admin area and integration tests.",
      problem:
        "Start from an existing e-commerce base (catalog, cart, checkout) and turn it into an application closer to production: user accounts, roles, an admin back office, and an API that does not trust the browser.",
      solution:
        "Built on the luv2code course project. I added sign up and login with Spring Security and JWT (BCrypt, USER and ADMIN roles), an admin area to manage products and orders, a My orders page, server-side price calculation at checkout, closed data that Spring Data REST exposed publicly, and integration tests with MockMvc and H2. MySQL runs with Docker Compose.",
      learned:
        "Security has to live on the backend: the Angular guard only hides pages, while the JWT filter and the role rules decide what the API allows.",
      kind: "course",
      category: "dev",
      metrics: [{ value: "JWT", label: "USER and ADMIN roles" }, { value: "7", label: "admin API routes" }, { value: "11", label: "integration tests" }],
      image: "/projects/ecommerce-fullstack.png",
      stack: ["Java", "Spring Boot", "Spring Security", "JWT", "Angular", "MySQL", "Docker"],
      github: links.github + "/ecommerce-fullstack",
    },
    {
      id: "pokemon-rest-api",
      title: "Pokémon REST API",
      description: "A REST API in Node.js and Express, with JWT authentication, data validation and a MariaDB database.",
      problem:
        "Write an API that is not just functional but clean: protected routes, validated input, clear error messages, and business rules in one place.",
      solution:
        "A CRUD API in Node.js/Express with Sequelize and MariaDB, plus search by name. Users log in with a bcrypt-hashed password and get a JWT that protects every route. Sequelize validators check each field (ranges, unique name, valid URL, allowed types) and the API returns consistent JSON errors.",
      learned:
        "Putting business rules in the data model keeps routes simple, and secrets belong in environment variables, never in the code.",
      kind: "personal",
      category: "dev",
      metrics: [{ value: "6", label: "REST routes" }, { value: "JWT", label: "+ bcrypt passwords" }, { value: "5", label: "validated fields" }],
      image: "/projects/pokemon-rest-api.png",
      stack: ["Node.js", "Express", "Sequelize", "MariaDB", "JWT", "bcrypt"],
      github: links.github + "/pokemon-rest-api",
    },
    {
      id: "serverless-containers-vs-microvms",
      title: "Serverless: Containers vs. MicroVMs",
      description: "Measuring the energy cost of isolating serverless functions in MicroVMs, on Kubernetes with Apache OpenWhisk.",
      problem:
        "MicroVMs isolate serverless functions much better than standard containers, but how much energy does that isolation cost, and does it depend on the language? The goal was to measure it instead of guessing.",
      solution:
        "A 6-person team project. Two Kubernetes clusters run Apache OpenWhisk: one with standard containers (runc), one isolating each function in a MicroVM with Kata Containers. Kepler measures the energy, Prometheus stores it, Grafana displays it. A CPU benchmark in Node.js, Python and Java ran 5 cold and 5 warm invocations per language on each cluster. Warm invocations cost about the same on both (75 to 85 J), but cold starts cost 1.4 to 1.75 times more under MicroVM (137 to 175 J vs 98 to 103 J).",
      learned:
        "Isolation is paid at startup, not during execution: keeping functions warm matters even more with MicroVMs. The JVM also lost its edge under MicroVM, where Node.js was the most efficient.",
      kind: "team",
      category: "devops",
      metrics: [{ value: "60", label: "energy measurements" }, { value: "3", label: "languages compared" }, { value: "×1.4–1.75", label: "energy at cold start" }],
      image: "/projects/serverless-containers-vs-microvms.png",
      stack: ["Kubernetes", "OpenWhisk", "Kata Containers", "Kepler", "Prometheus", "Grafana"],
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
