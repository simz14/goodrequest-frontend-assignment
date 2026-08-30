"use client";

import { IconCheck } from "@tabler/icons-react";
import { useT } from "next-i18next/client";
import { StyledTypography } from "@/components/ui/typography.styles";
import { useContribution } from "./contribution-context";
import {
  StyledSuccess,
  StyledSuccessIcon
} from "./contribution-success.styles";
import { StyledActionButton } from "./index.styles";

export default function ContributionSuccess() {
  const { t } = useT();
  const { restart } = useContribution();

  return (
    <StyledSuccess role="status">
      <StyledSuccessIcon aria-hidden>
        <IconCheck size={36} />
      </StyledSuccessIcon>

      <StyledTypography $variant="heading-lg" $color="primary" as="h1">
        {t("submit.success.title")}
      </StyledTypography>

      <StyledTypography $variant="text-md" $color="secondary">
        {t("submit.success.description")}
      </StyledTypography>

      <StyledActionButton type="button" onClick={restart}>
        {t("submit.success.restart")}
      </StyledActionButton>
    </StyledSuccess>
  );
}
