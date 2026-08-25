import type { I18nConfig } from "next-i18next/proxy";

export const languages = ["en", "sk"] as const;
export type Language = (typeof languages)[number];

const resourceLoader: I18nConfig["resourceLoader"] =
  process.env.NODE_ENV === "development"
    ? async (language, namespace) => {
        const { readFile } = await import("fs/promises");
        const { resolve } = await import("path");
        const file = resolve(
          process.cwd(),
          `src/lib/i18n/locales/${language}/${namespace}.json`
        );
        return JSON.parse(await readFile(file, "utf-8"));
      }
    : (language, namespace) =>
        import(`./src/lib/i18n/locales/${language}/${namespace}.json`);

const i18nConfig: I18nConfig = {
  supportedLngs: [...languages],
  fallbackLng: "en",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  localeInPath: false,
  resourceLoader
};

export default i18nConfig;
