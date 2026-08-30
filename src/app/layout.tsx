import { Inter } from "next/font/google";
import { getResources, getT, initServerI18next } from "next-i18next/server";
import { I18nProvider } from "next-i18next/client";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "@/lib/mantine/provider";
import i18nConfig from "../../i18n.config";
import QueryProvider from "@/lib/query/provider";
import { PageContent } from "./layout.styles";

initServerI18next(i18nConfig);

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap"
});

export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const { i18n, lng } = await getT();

  const resources = getResources(i18n);

  return (
    <html lang={lng} className={inter.variable} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <I18nProvider
          language={lng}
          resources={resources}
          fallbackLng={i18nConfig.fallbackLng}
        >
          <QueryProvider>
            <ThemeProvider>
              <StyledComponentsRegistry>
                <PageContent>{children}</PageContent>
              </StyledComponentsRegistry>
            </ThemeProvider>
          </QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
