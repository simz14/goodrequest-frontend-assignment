import Image from "next/image";
import type { Metadata } from "next";
import { getT } from "next-i18next/server";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Footer from "@/components/footer";
import BackLink from "@/components/back-link";
import ContactMethods from "@/components/contact-methods";
import { StyledTypography } from "@/components/ui/typography.styles";
import {
  ContactContent,
  ContactFooter,
  ContactHeader,
  ContactImage,
  ContactInset,
  ContactMain
} from "./page.styles";

const IMAGE_MAX_WIDTH = 960;

export async function generateMetadata(): Promise<Metadata> {
  const { t, lng } = await getT();

  return buildPageMetadata({
    title: t("seo.contact.title"),
    description: t("seo.contact.description"),
    siteName: t("seo.siteName"),
    imageAlt: t("seo.imageAlt"),
    language: lng,
    path: "/contact"
  });
}

export default async function Contact() {
  const { t } = await getT();

  return (
    <ContactMain>
      <ContactContent>
        <ContactHeader>
          <BackLink href="/" />
          <StyledTypography $variant="heading-lg" $color="primary" as="h1">
            {t("contact.title")}
          </StyledTypography>
        </ContactHeader>

        <ContactInset>
          <ContactMethods />

          <ContactImage>
            <Image
              src="/dog2.png"
              alt={t("app.dogAlt")}
              fill
              priority
              sizes={`(max-width: 768px) 100vw, (max-width: 1024px) calc(100vw - 160px), ${IMAGE_MAX_WIDTH}px`}
              style={{ objectFit: "cover" }}
            />
          </ContactImage>
        </ContactInset>
      </ContactContent>

      <ContactFooter>
        <Footer />
      </ContactFooter>
    </ContactMain>
  );
}
