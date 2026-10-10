import type { Dictionary } from "../types";
import { links } from "./en";

export const fr: Dictionary = {
  pageMeta: {
    home: {
      title: "Ayoub Hassain — Ingénieur Full Stack & DevOps",
      description:
        "Ingénieur ENSEEIHT : je développe des applications web de la base de données à l'interface, et je les mets en production avec tests, CI/CD, Docker et Kubernetes.",
    },
    about: {
      title: "À propos — Ayoub Hassain",
      description:
        "Ingénieur full stack et DevOps diplômé de l'ENSEEIHT, basé à Paris. Angular, Node.js, Java/Spring Boot, Docker, Kubernetes.",
    },
    projects: {
      title: "Projets — Ayoub Hassain",
      description:
        "Projets sélectionnés : cluster Spark sur GCP avec Terraform et Ansible, plateforme e-commerce Spring Boot et Angular, API REST Node.js, et benchmark conteneurs vs MicroVMs.",
    },
    resume: {
      title: "CV — Ayoub Hassain",
      description:
        "Expérience, formation, projets et compétences — Padoa, Banque Centrale Populaire et SQLI.",
    },
    qanda: {
      title: "Questions & Réponses — Ayoub Hassain",
      description:
        "Ma façon de travailler, ce que j'aime construire et ce que je recherche.",
    },
    contact: {
      title: "Contact — Ayoub Hassain",
      description:
        "Contacter Ayoub Hassain, ingénieur full stack et DevOps, disponible à partir de novembre 2026.",
    },
  },
  nav: {
    home:      "Accueil",
    about:     "À propos",
    projects:  "Projets",
    resume:    "CV",
    qanda:     "Q&R",
    contact:   "Contact",
    menu:      "Menu",
    themeLight: "Passer en mode clair",
    themeDark:  "Passer en mode nuit",
  },
  home: {
    tagline:        "Ingénieur Full Stack & DevOps",
    proofPoint:
      "Récemment chez Padoa : nouvelles fonctionnalités en Angular et Node.js sur un SaaS en production, tests E2E avec Playwright et CI/CD jusqu'au déploiement Kubernetes.",
    locationLine:   "Paris · ENSEEIHT",
    viewProjects:   "Voir mes projets",
    downloadResume: "Télécharger mon CV",
    contactMe:      "Me contacter",
    inDepth:        "Quelques projets",
    project:        "Projet",
    focusedOn:      "Stack principale",
    available:      "Disponible à partir de novembre 2026",
    experience:     "Expériences",
    seeResume:      "CV complet →",
    allProjects:    "Tous les projets →",
    contactTitle:   "Un poste full stack ou DevOps à pourvoir\u00a0?",
    contactText:    "Je suis disponible à partir de novembre 2026. Parlons-en.",
    sendEmail:      "Envoyer un email",
    emailSubject:   "Prise de contact via votre portfolio",
    emailApp:       "Application mail",
    copyEmail:      "Copier",
    copied:         "Copié !",
  },
  about: {
    label:          "À propos",
    title:          "Bonjour, je suis Ayoub.",
    subtitle:       "",
    skills:         "Compétences",
    languages:      "Langues",
    intro:
      "Ingénieur en génie logiciel, diplômé de l'ENSEEIHT (Toulouse INP). J'ai fait trois stages en développement web, le dernier chez Padoa sur un SaaS en production. Je m'intéresse aussi à l'IA et à la façon dont elle change le développement logiciel.",
    quick: ["Basé à Paris", "Français, anglais (C1), allemand (A2)"],
    journeyTitle:   "Mon parcours",
    journey: [
      { kind: "work", period: "Nov. 2026", place: "", title: "La suite", text: "Un CDI de développeur full stack ou d'ingénieur DevOps.", next: true },
      { kind: "work", period: "2026", place: "Paris", title: "Padoa", text: "Stage de fin d'études full stack / DevOps sur un SaaS de santé au travail en production." },
      { kind: "work", period: "2025", place: "Oujda", title: "Banque Centrale Populaire", text: "Stage full stack : application de gestion des chèques en Spring Boot et Angular." },
      { kind: "work", period: "2024", place: "Oujda", title: "SQLI", text: "Stage front-end : interfaces Angular et TypeScript pour une application RH." },
      { kind: "education", period: "2023 – 2026", place: "Toulouse", title: "ENSEEIHT", text: "Diplôme d'ingénieur, génie logiciel : Java, conception objet, bases de données, réseaux, cloud." },
      { kind: "education", period: "2021 – 2023", place: "Benguérir", title: "Classes préparatoires", text: "MPSI puis MP* : deux ans de mathématiques et de physique intensives." },
    ],
    workTitle:      "Ce que je fais",
    work: [
      { title: "Développer des applications web", text: "Front-end en Angular et TypeScript, back-end en Node.js ou Java/Spring Boot, avec PostgreSQL ou MySQL.", tags: ["Angular", "TypeScript", "Node.js", "Java", "Spring Boot", "PostgreSQL"] },
      { title: "Tester dès le départ", text: "Tests E2E avec Playwright et Page Objects, écrits avec la fonctionnalité et lancés dans la CI.", tags: ["Playwright", "Page Objects", "Tests d'intégration"] },
      { title: "Aller jusqu'à la production", text: "CI/CD avec GitHub Actions, Docker et Kubernetes, puis suivi avec Prometheus et Grafana.", tags: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "Grafana"] },
    ],
  },
  projectsPage: {
    label:    "Projets",
    title:    "Mes projets",
    subtitle: "Infrastructure, applications web et API — projets académiques et personnels.",
    filterAll:    "Tous",
    filterDev:    "Développement",
    filterDevops: "DevOps & cloud",
  },
  resume: {
    label:      "CV",
    title:      "Mon parcours",
    subtitle:   "Expérience, formation, projets et compétences.",
    experience: "Expérience",
    education:  "Formation",
    projects:   "Projets",
    skills:     "Compétences",
    downloadEn: "CV en anglais (PDF)",
    downloadFr: "CV en français (PDF)",
    live:       "Démo",
    seeProject: "Voir le projet →",
  },
  qandaPage: {
    label:    "Q&R",
    title:    "Questions & Réponses",
    subtitle: "Les questions que les recruteurs me posent souvent, et mes réponses.",
  },
  contactPage: {
    label:        "Contact",
    title:        "Travaillons ensemble.",
    subtitle:     "Je suis disponible pour un CDI full stack ou DevOps à partir de novembre 2026. Le plus simple pour me joindre : par email, par téléphone ou sur LinkedIn.",
    emailTitle:   "Email",
    emailText:    "Écrivez-moi directement, ou copiez l'adresse.",
    phoneTitle:   "Téléphone",
    phoneText:    "Appelez-moi ou laissez un message.",
    call:         "Appeler",
    linkedinText: "Mon profil professionnel et mon parcours.",
    githubText:   "Le code de mes projets.",
    resumeTitle:  "CV",
    resumeText:   "Une page, en français ou en anglais.",
    lookingTitle: "Ce que je recherche",
    looking: ["Un CDI", "Développeur full stack ou ingénieur DevOps", "À partir de novembre 2026", "Basé à Paris"],
    open:         "Ouvrir",
  },
  projectCard: {
    problem:  "L'objectif",
    built:    "Ce que j'ai fait",
    learned:  "Ce que j'en retiens",
    github:   "GitHub",
    liveDemo: "Voir la démo",
    details:      "Voir le détail",
    hideDetails:  "Masquer le détail",
    architecture: "Architecture",
    kinds: { personal: "Projet personnel", team: "Projet d'équipe · ENSEEIHT", course: "Basé sur une formation en ligne" },
  },
  profile: {
    name:     "Ayoub Hassain",
    photoAlt: "Portrait d'Ayoub Hassain",
    title:    "Ingénieur Full Stack & DevOps",
    headline:
      "Je développe des applications web de bout en bout, et je les mets en production.",
    bio:
      "Ingénieur en génie logiciel, diplômé de l'ENSEEIHT (Toulouse INP).\n\nAu fil de trois expériences, j'ai conçu et fait évoluer des applications web des deux côtés : Angular et TypeScript en front-end, Node.js et Java/Spring Boot en back-end. Chez Padoa, j'ai aussi travaillé sur ce qui se passe après le code : tests E2E automatisés, pipelines CI, déploiements Docker et Kubernetes, supervision en production.\n\nJe recherche un CDI à partir de novembre 2026. Je m'intéresse aussi à l'IA et à la façon dont elle change le développement logiciel.",
    location: "Paris, France",
    email:    "ayoubhassain2233@gmail.com",
    phone:    { display: "+33 7 68 82 85 10", href: "tel:+33768828510" },
    stack: [
      { label: "Développement", items: ["Angular", "TypeScript", "Node.js", "Java", "Spring Boot"] },
      { label: "Données", items: ["PostgreSQL", "MySQL"] },
      { label: "DevOps & cloud", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
    ],
    spokenLanguages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Anglais",  level: "Professionnel (C1)" },
      { name: "Allemand", level: "Notions (A2)" },
    ],
  },
  experience: [
    {
      role: "Développeur Full Stack / DevOps — stage de fin d'études",
      company: "Padoa",
      summary: "Full stack et DevOps sur un SaaS de santé au travail en production : Angular, Node.js, Playwright, Kubernetes.",
      period: "Mars 2026 – Sept. 2026",
      description:
        "Nouvelles fonctionnalités d'une plateforme SaaS de santé au travail en production (Angular/RxJS, TypeScript, Node.js/Express, PostgreSQL), en équipe Agile/Scrum. Migration des formes juridiques vers le système de listes de référence : évolution du modèle de données, adaptation backend/frontend et reprise des données via scripts SQL. Interface de gestion de modèles de devis Word. Tests E2E Playwright sur les parcours métier (fixtures, Page Objects). CI/CD avec GitHub Actions, Docker et déploiement Kubernetes via Helm et Argo CD. Revues de code et correction d'anomalies en production (logs, Prometheus/Grafana).",
    },
    {
      role: "Développeur Full Stack — stage",
      company: "Banque Centrale Populaire",
      summary: "Application de gestion des chèques pour l'équipe comptabilité, en Spring Boot et Angular.",
      period: "Juin 2025 – Sept. 2025",
      description:
        "Conception et développement d'une application de gestion des chèques pour l'équipe comptabilité de la banque, avec un backend Java/Spring Boot et un frontend Angular. Création, recherche, modification et suivi des chèques, avec scan, impression calibrée et montants en lettres. API REST, persistance MySQL avec JPA/Hibernate, intégration continue (tests, build Maven, image Docker) et déploiement sur serveur (Tomcat/Nginx).",
    },
    {
      role: "Développeur Front-End — stage",
      company: "SQLI",
      summary: "Interfaces Angular pour une application RH interne.",
      period: "Juil. 2024 – Sept. 2024",
      description:
        "Interfaces Angular/TypeScript pour une application RH interne : formulaires, affichage dynamique et intégration d'API REST. Participation aux tests, corrections d'anomalies et évolutions fonctionnelles au sein de l'équipe projet.",
    },
  ],
  education: [
    {
      role: "Diplôme d'ingénieur en informatique et télécommunications",
      company: "Toulouse INP – ENSEEIHT",
      period: "2023 – 2026",
      description:
        "Génie logiciel : Java, conception orientée objet, bases de données, réseaux, cloud.",
    },
    {
      role: "Classes préparatoires MPSI – MP*",
      company: "Lycée Mohammed VI d'Excellence, Benguérir",
      period: "2021 – 2023",
      description:
        "Préparation intensive en mathématiques, physique et informatique aux concours des grandes écoles d'ingénieurs.",
    },
  ],
  projects: [
    {
      id: "spark-cluster-gcp",
      title: "Cluster Spark sur GCP",
      description: "Un cluster Apache Spark déployé de zéro sur Google Cloud, avec Terraform et Ansible.",
      problem:
        "Rendre un cluster de calcul distribué reproductible : passer d'un projet cloud vide à un job Spark qui tourne, sans étape manuelle, avec un seul point d'entrée SSH.",
      solution:
        "Terraform crée le VPC, les règles de pare-feu et 5 VM (master, workers, nœud edge, stockage NFS) et génère lui-même l'inventaire Ansible. Ansible installe Java et Spark, lance le master et les workers en services systemd et monte un volume NFS partagé, en passant par le nœud edge. Un WordCount Java tourne en 28 s sur 1 cœur et 19 s sur 2.",
      learned:
        "Séparer le provisioning de la configuration, générer l'inventaire au lieu de recopier des IP, et lire un benchmark pour trouver le vrai goulot : au-delà de 2 cœurs, ce sont les données, pas le CPU, qui limitaient.",
      kind: "team",
      category: "devops",
      metrics: [{ value: "5", label: "VM provisionnées" }, { value: "28 s → 19 s", label: "de 1 à 2 cœurs" }, { value: "6", label: "playbooks Ansible" }],
      image: "/projects/spark-cluster-gcp.png",
      stack: ["GCP", "Terraform", "Ansible", "Apache Spark", "NFS", "Linux"],
      github: links.github + "/spark-cluster-gcp",
    },
    {
      id: "ecommerce-fullstack",
      title: "Plateforme e-commerce",
      description: "Une boutique en ligne en Spring Boot et Angular : catalogue, panier, commandes, authentification JWT et espace admin.",
      problem:
        "Construire une boutique en ligne complète et proche d'une application de production : catalogue, panier, commandes, comptes utilisateurs, rôles, back-office d'administration, et une API qui ne fait pas confiance au navigateur.",
      solution:
        "Catalogue avec recherche et pagination, panier et commande, inscription et connexion avec Spring Security et JWT (BCrypt, rôles USER et ADMIN), un espace admin pour gérer produits et commandes, une page « Mes commandes », le calcul des prix côté serveur à la commande, des données sensibles non exposées par l'API, et des tests d'intégration avec MockMvc et H2. MySQL tourne avec Docker Compose.",
      learned:
        "La sécurité se joue côté backend : le guard Angular ne fait que cacher des pages, ce sont le filtre JWT et les règles de rôles qui décident de ce que l'API autorise.",
      kind: "personal",
      category: "dev",
      metrics: [{ value: "JWT", label: "rôles USER et ADMIN" }, { value: "7", label: "routes API admin" }, { value: "11", label: "tests d'intégration" }],
      image: "/projects/ecommerce-fullstack.png",
      stack: ["Java", "Spring Boot", "Spring Security", "JWT", "Angular", "MySQL", "Docker"],
      github: links.github + "/ecommerce-fullstack",
    },
    {
      id: "pokemon-rest-api",
      title: "API REST Pokémon",
      description: "Une API REST en Node.js et Express, avec authentification JWT, validation des données et base MariaDB.",
      problem:
        "Écrire une API qui ne soit pas seulement fonctionnelle mais propre : routes protégées, données validées, messages d'erreur clairs et règles métier centralisées.",
      solution:
        "Une API CRUD en Node.js/Express avec Sequelize et MariaDB, et une recherche par nom. Les utilisateurs se connectent avec un mot de passe haché par bcrypt et reçoivent un JWT qui protège toutes les routes. Les validateurs Sequelize contrôlent chaque champ (bornes, nom unique, URL valide, types autorisés) et l'API renvoie des erreurs JSON cohérentes.",
      learned:
        "Mettre les règles métier dans le modèle de données garde les routes simples, et les secrets ont leur place dans des variables d'environnement, jamais dans le code.",
      kind: "personal",
      category: "dev",
      metrics: [{ value: "6", label: "routes REST" }, { value: "JWT", label: "+ mots de passe bcrypt" }, { value: "5", label: "champs validés" }],
      image: "/projects/pokemon-rest-api.png",
      stack: ["Node.js", "Express", "Sequelize", "MariaDB", "JWT", "bcrypt"],
      github: links.github + "/pokemon-rest-api",
    },
    {
      id: "serverless-containers-vs-microvms",
      title: "Serverless : conteneurs vs MicroVMs",
      description: "Mesurer le coût énergétique de l'isolation des fonctions serverless en MicroVM, sur Kubernetes avec Apache OpenWhisk.",
      problem:
        "Les MicroVMs isolent bien mieux les fonctions serverless que les conteneurs classiques, mais combien coûte cette isolation en énergie, et cela dépend-il du langage ? L'objectif était de le mesurer plutôt que de le supposer.",
      solution:
        "Projet d'équipe à six. Deux clusters Kubernetes avec Apache OpenWhisk : l'un avec des conteneurs classiques (runc), l'autre qui isole chaque fonction dans une MicroVM avec Kata Containers. Kepler mesure l'énergie, Prometheus la stocke, Grafana l'affiche. Un benchmark CPU en Node.js, Python et Java, avec 5 démarrages à froid et 5 à chaud par langage et par cluster. À chaud, le coût est quasi identique (75 à 85 J) ; à froid, la MicroVM consomme 1,4 à 1,75 fois plus (137 à 175 J contre 98 à 103 J).",
      learned:
        "L'isolation se paie au démarrage, pas pendant l'exécution : garder les fonctions chaudes compte encore plus avec les MicroVMs. La JVM perd aussi son avantage en MicroVM, où Node.js est le plus efficace.",
      kind: "team",
      category: "devops",
      metrics: [{ value: "60", label: "mesures d'énergie" }, { value: "3", label: "langages comparés" }, { value: "×1,4–1,75", label: "d'énergie à froid" }],
      image: "/projects/serverless-containers-vs-microvms.png",
      stack: ["Kubernetes", "OpenWhisk", "Kata Containers", "Kepler", "Prometheus", "Grafana"],
    },
  ],
  qanda: [
    {
      question: "Quel type de travail préfères-tu ?",
      answer:
        "Les fonctionnalités qui vont jusqu'à la production. Chez Padoa, la migration des formes juridiques vers le système de listes de référence en est un bon exemple : elle touchait le modèle de données, le backend, le frontend et les données existantes, et devait fonctionner sans rien casser pour les utilisateurs.",
    },
    {
      question: "Plutôt développeur ou DevOps ?",
      answer:
        "Un développeur qui s'intéresse à ce qui se passe après le code. L'essentiel de mon travail est full stack, mais j'ai aussi écrit des workflows CI, déployé avec Docker et Kubernetes, et provisionné de l'infrastructure avec Terraform et Ansible. Connaître les deux côtés m'aide à écrire du code plus facile à tester, déployer et superviser.",
    },
    {
      question: "Comment abordes-tu les tests ?",
      answer:
        "Comme une partie de la fonctionnalité, pas comme une étape en plus. Chez Padoa, j'ai écrit des tests E2E Playwright sur les parcours métier, avec des fixtures et des Page Objects pour qu'ils restent lisibles et faciles à maintenir, et ils tournent dans la CI à chaque modification.",
    },
    {
      question: "Que recherches-tu ?",
      answer:
        "Un CDI full stack ou DevOps à partir de novembre 2026, dans une équipe qui livre régulièrement en production et qui prend la qualité du code au sérieux. Je m'intéresse aussi à l'IA et à la façon de l'utiliser dans de vrais produits et dans notre manière de développer.",
    },
  ],
  resumePdf: "/resume-fr.pdf",
};
