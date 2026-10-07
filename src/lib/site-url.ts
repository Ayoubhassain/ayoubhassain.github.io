// Public URL of the site. On GitHub Actions, GITHUB_REPOSITORY ("owner/repo") is set automatically.
const repository = process.env.GITHUB_REPOSITORY ?? "Ayoubhassain/portfolio";
const [owner, repo] = repository.split("/");

export const SITE_URL =
  repo.toLowerCase() === `${owner.toLowerCase()}.github.io`
    ? `https://${owner.toLowerCase()}.github.io`
    : `https://${owner.toLowerCase()}.github.io/${repo}`;
