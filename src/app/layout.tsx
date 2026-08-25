import { Geist, Geist_Mono } from "next/font/google";
import { getResources, getT, initServerI18next } from "next-i18next/server";
import { I18nProvider } from "next-i18next/client";

import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import i18nConfig from "../../i18n.config";

initServerI18next(i18nConfig);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const { i18n, lng } = await getT();

  const resources = getResources(i18n);

  return (
    <html lang={lng} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <I18nProvider
          language={lng}
          resources={resources}
          fallbackLng={i18nConfig.fallbackLng}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </I18nProvider>
      </body>
    </html>
  );
}
