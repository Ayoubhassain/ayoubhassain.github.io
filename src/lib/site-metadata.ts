import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

import { SITE_URL } from "./site-url";

const OG_IMAGE = `${SITE_URL}/og-image.png`;

type PageMetadataInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
};

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
