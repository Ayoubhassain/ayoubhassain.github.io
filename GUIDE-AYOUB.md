# Mettre ton portfolio en ligne (à supprimer avant de pousser, ou à garder pour toi)

## 1. Ton pseudo GitHub
Déjà fait : ton pseudo **Ayoubhassain** est renseigné dans `src/i18n/dictionaries/en.ts` (`GITHUB_USER`).

L'URL du site est calculée automatiquement à partir du nom du dépôt.

## 2. Créer le dépôt
- Recommandé : dépôt public nommé `ayoubhassain.github.io` → site sur `https://ayoubhassain.github.io`.
- Sinon, un dépôt `portfolio` → site sur `https://ayoubhassain.github.io/portfolio`.

```bash
cd ayoub-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Ayoubhassain/ayoubhassain.github.io.git
git push -u origin main
```

## 3. Activer GitHub Pages
Settings → Pages → Source : **GitHub Actions**. Le workflow se lance à chaque push sur `main` (onglet Actions pour suivre).

## 4. Modifier le contenu
- Textes : `src/i18n/dictionaries/fr.ts` et `en.ts`.
- Compétences : `src/i18n/skill-categories.ts`.
- CV : remplace `public/resume-fr.pdf` et `public/resume-en.pdf`.
- Couleur : `src/app/globals.css` (`--color-accent`, actuellement le bleu de ton CV).

## 5. En local (facultatif)
Node 20 : `npm install` puis `npm run dev` → http://localhost:3000
