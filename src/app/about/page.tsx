import { getT } from "next-i18next/server";
import Footer from "@/components/footer";
import BackLink from "@/components/back-link";
import AboutResults from "@/components/about-results";
import { StyledTypography } from "@/components/ui/typography.styles";
import {
  AboutContent,
  AboutFooter,
  AboutHeader,
  AboutMain
} from "./page.styles";

export default async function About() {
  const { t } = await getT();

  return (
    <AboutMain>
      <AboutContent>
        <AboutHeader>
          <BackLink href="/" />
          <StyledTypography $variant="heading-lg" $color="primary" as="h1">
            {t("about.title")}
          </StyledTypography>
        </AboutHeader>

        <StyledTypography $variant="text-md" $color="primary">
          {t("about.intro")}
        </StyledTypography>

        <AboutResults />

        <StyledTypography $variant="text-md" $color="primary">
          {t("about.outro")}
        </StyledTypography>
      </AboutContent>

      <AboutFooter>
        <Footer />
      </AboutFooter>
    </AboutMain>
  );
}
