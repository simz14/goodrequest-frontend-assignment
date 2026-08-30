"use client";

import { useChangeLanguage, useT } from "next-i18next/client";
import { languages } from "@/lib/i18n/languages";
import { StyledLanguageButton, StyledLanguageSwitcher } from "./index.styles";

export default function LanguageSwitcher() {
  const { t, i18n } = useT();
  const changeLanguage = useChangeLanguage();

  return (
    <StyledLanguageSwitcher role="group" aria-label={t("language.label")}>
      {languages.map((language) => {
        const isActive = language === i18n.resolvedLanguage;

        return (
          <StyledLanguageButton
            key={language}
            type="button"
            lang={language}
            $active={isActive}
            aria-pressed={isActive}
            aria-label={t(`language.${language}`)}
            onClick={() => void changeLanguage(language)}
          >
            {language.toUpperCase()}
          </StyledLanguageButton>
        );
      })}
    </StyledLanguageSwitcher>
  );
}
