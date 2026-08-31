import Image from "next/image";
import type { Metadata } from "next";
import { getT } from "next-i18next/server";
import { dehydrate, HydrationBoundary, noop } from "@tanstack/react-query";
import { FooterPanel, FormPanel, ImagePanel, Main } from "./page.styles";
import MultiStepForm from "@/components/multi-step-form";
import Footer from "@/components/footer";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { DEFAULT_SEO_STEP, parseStepParam } from "@/lib/seo/steps";
import { breakpoints } from "@/lib/mantine/theme";
import { makeQueryClient } from "@/lib/query/client";
import { sheltersQueryOptions } from "@/lib/api/shelters";

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<{ step?: string | string[] }>;
}): Promise<Metadata> {
  const { t, lng } = await getT();
  const step = parseStepParam((await searchParams).step);

  return buildPageMetadata({
    title: t(`seo.steps.${step}.title`),
    description: t(`seo.steps.${step}.description`),
    siteName: t("seo.siteName"),
    imageAlt: t("seo.imageAlt"),
    language: lng,
    path: step === DEFAULT_SEO_STEP ? "/" : `/?step=${step}`
  });
}

export default async function Home() {
  const { t } = await getT();
  const queryClient = makeQueryClient();

  await queryClient.query(sheltersQueryOptions()).catch(noop);

  return (
    <Main>
      <FormPanel>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MultiStepForm />
        </HydrationBoundary>
      </FormPanel>

      <FooterPanel>
        <Footer />
      </FooterPanel>

      <ImagePanel>
        <Image
          src="/dog.png"
          alt={t("app.dogAlt")}
          fill
          priority
          sizes={`(max-width: ${breakpoints.sm}) 100vw, 40vw`}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </ImagePanel>
    </Main>
  );
}
