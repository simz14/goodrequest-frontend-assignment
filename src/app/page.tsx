import Image from "next/image";
import { getT } from "next-i18next/server";
import { LanguageSwitcher } from "@/components/language-switcher";
import { languages } from "../../i18n.config";
import { FormPanel, ImagePanel, Main } from "./page.styles";
import MultiStepForm from "@/components/multi-step-form";

export default async function Home() {
  const { t } = await getT();

  return (
    <Main>
      <FormPanel>
        <MultiStepForm />
        <LanguageSwitcher supportedLngs={languages} />
      </FormPanel>

      <ImagePanel>
        <Image
          src="/dog.png"
          alt={t("app.dogAlt")}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          style={{ objectFit: "cover" }}
        />
      </ImagePanel>
    </Main>
  );
}
