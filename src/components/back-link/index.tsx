"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { useT } from "next-i18next/client";
import { StyledBackLink } from "./index.styles";

const ICON_SIZE = 16;

export default function BackLink({ href = "/" }: { href?: string }) {
  const { t } = useT();

  return (
    <StyledBackLink href={href}>
      <IconArrowLeft size={ICON_SIZE} />
      {t("actions.back")}
    </StyledBackLink>
  );
}
