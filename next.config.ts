import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portfolio";
// A repo named "<user>.github.io" is served at the root, any other repo under "/<repo>".
const isUserSite = repoName.toLowerCase().endsWith(".github.io");
const basePath = isGithubPages && !isUserSite ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  ...(isGithubPages ? { output: "export" } : {}),
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
