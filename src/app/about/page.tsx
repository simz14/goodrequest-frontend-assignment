import { getT } from "next-i18next/server";
import Footer from "@/components/footer";
import { StyledTypography } from "@/components/ui/typography.styles";
import { AboutContent, AboutMain } from "./page.styles";

export default async function About() {
  const { t } = await getT();

  return (
    <AboutMain>
      <AboutContent>
        <StyledTypography $variant="heading-lg" $color="primary" as="h1">
          {t("about.title")}
        </StyledTypography>
      </AboutContent>
      <Footer />
    </AboutMain>
  );
}
