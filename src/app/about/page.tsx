import type { Metadata } from "next";
import { getT } from "next-i18next/server";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Footer from "@/components/footer";
import BackLink from "@/components/back-link";
import { routes } from "@/lib/constants/routes";
import AboutResults from "@/components/about-results";
import { StyledTypography } from "@/components/ui/typography.styles";
import {
  AboutContent,
  AboutFooter,
  AboutHeader,
  AboutMain
} from "./page.styles";

export async function generateMetadata(): Promise<Metadata> {
  const { t, lng } = await getT();

  return buildPageMetadata({
    title: t("seo.about.title"),
    description: t("seo.about.description"),
    siteName: t("seo.siteName"),
    imageAlt: t("seo.imageAlt"),
    language: lng,
    path: "/about"
  });
}

export default async function About() {
  const { t } = await getT();

  return (
    <AboutMain>
      <AboutContent>
        <AboutHeader>
          <BackLink href={routes.home} />
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
