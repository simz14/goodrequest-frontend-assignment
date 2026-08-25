import { getT } from "next-i18next/server";
import { LanguageSwitcher } from "@/components/language-switcher";
import { languages } from "../../i18n.config";
import { Main, Text } from "./page.styles";

export default async function Home() {
  const { t } = await getT();

  return (
    <Main>
      <Text>{t("app.title")}</Text>
      <LanguageSwitcher supportedLngs={languages} />
    </Main>
  );
}
