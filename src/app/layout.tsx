import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Default metadata, used by the root URL when the link is shared (LinkedIn, WhatsApp, email).
// Each page overrides the title and description.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ayoub Hassain — Full Stack & DevOps",
  description: "Ingénieur full stack et DevOps diplômé de l'ENSEEIHT, basé à Paris. Angular, Node.js, Java/Spring Boot, Docker, Kubernetes.",
  openGraph: {
    title: "Ayoub Hassain — Full Stack & DevOps",
    description: "Ingénieur full stack et DevOps diplômé de l'ENSEEIHT, basé à Paris.",
    url: SITE_URL,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [`${SITE_URL}/og-image.png`] },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark")}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-bg font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
