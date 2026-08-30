import type { Metadata } from "next";
import type { Language } from "@/lib/i18n/languages";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const OG_IMAGE = {
  url: "/dog2.png",
  width: 1120,
  height: 376
};

const OG_LOCALES: Record<Language, string> = {
  en: "en_US",
  sk: "sk_SK"
};

export type PageMetadataInput = {
  title: string;
  description: string;
  siteName: string;
  imageAlt: string;
  language: string;
  path: string;
};

export const buildPageMetadata = ({
  title,
  description,
  siteName,
  imageAlt,
  language,
  path
}: PageMetadataInput): Metadata => ({
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url: path,
    siteName,
    title,
    description,
    locale: OG_LOCALES[language as Language] ?? language,
    images: [{ ...OG_IMAGE, alt: imageAlt }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url]
  }
});
