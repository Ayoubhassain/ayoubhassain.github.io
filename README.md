# portfolio

My personal portfolio — Ayoub Hassain, Full Stack & DevOps Engineer.

Built with Next.js, React, TypeScript and Tailwind CSS. Available in English and French, with a light and a dark theme. Exported as a static site and deployed to GitHub Pages with GitHub Actions.

## Pages

- **Home:** who I am, featured projects.
- **About:** background, skills, languages.
- **Projects:** each project told as goal, what I built, what I learned.
- **Resume:** experience, education, projects, skills, and the PDF resume in English and French.
- **Q&A:** questions recruiters often ask me.

## Edit the content

All the text lives in two files: `src/i18n/dictionaries/en.ts` and `src/i18n/dictionaries/fr.ts`. Skills are in `src/i18n/skill-categories.ts`. The PDF resumes are in `public/`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy

Every push to `main` builds the static site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).
