"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { useT } from "next-i18next/client";
import { routes } from "@/lib/constants/routes";
import { StyledBackLink } from "./back-link.styles";

const ICON_SIZE = 16;

export default function BackLink({ href = routes.home }: { href?: string }) {
  const { t } = useT();

  return (
    <StyledBackLink href={href}>
      <IconArrowLeft size={ICON_SIZE} />
      {t("actions.back")}
    </StyledBackLink>
  );
}
