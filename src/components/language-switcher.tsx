"use client";

import { useChangeLanguage, useT } from "next-i18next/client";
import type { Language } from "../../i18n.config";

export function LanguageSwitcher({
  supportedLngs
}: {
  supportedLngs: readonly Language[];
}) {
  const { t, i18n } = useT();
  const changeLanguage = useChangeLanguage();

  return (
    <div>
      <span>{t("language.label")}</span>
      {supportedLngs.map((language) => (
        <button
          key={language}
          type="button"
          aria-pressed={language === i18n.resolvedLanguage}
          onClick={() => changeLanguage(language)}
        >
          {t(`language.${language}`)}
        </button>
      ))}
    </div>
  );
}
