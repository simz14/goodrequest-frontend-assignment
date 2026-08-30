import { FormCheckbox } from "@/components/form";
import { useQuery } from "@tanstack/react-query";
import { useT } from "next-i18next/client";
import { useMemo } from "react";
import { StyledTypography } from "@/components/ui/typography.styles";
import { useFormContext, useWatch } from "react-hook-form";
import { StyledSection } from "../index.styles";
import { sheltersQueryOptions } from "@/lib/api/shelters";
import {
  StyledSummary,
  StyledSummaryGroup,
  StyledSummaryRow,
  StyledSummaryValue
} from "./summary.styles";
import type { FormValues } from "../schema";
import { formatPhoneNumber } from "@/lib/format/phone";

function SummaryRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <StyledSummaryRow>
      <StyledTypography $variant="text-md" $color="secondary">
        {label}
      </StyledTypography>
      <StyledSummaryValue $variant="text-md-semibold" $color="primary">
        {value}
      </StyledSummaryValue>
    </StyledSummaryRow>
  );
}

export default function SummaryStep() {
  const { t, i18n } = useT();
  const { control } = useFormContext<FormValues>();
  const {
    donationType,
    shelter,
    amount,
    firstName,
    lastName,
    email,
    phoneNumber
  } = useWatch({ control });

  const { data: shelters } = useQuery(sheltersQueryOptions());

  const shelterName = shelters?.find(({ id }) => String(id) === shelter)?.name;

  const formatAmount = useMemo(() => {
    const formatter = new Intl.NumberFormat(i18n.resolvedLanguage, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });

    return (value: number) => formatter.format(value);
  }, [i18n.resolvedLanguage]);

  const parsedAmount = Number(amount);

  return (
    <StyledSection>
      <StyledTypography $variant="heading-lg" $color="primary" as="h1">
        {t("summary.title")}
      </StyledTypography>

      <StyledSummary>
        <StyledTypography $variant="text-md-semibold" $color="primary" as="h2">
          {t("summary.sectionTitle")}
        </StyledTypography>

        <StyledSummaryGroup>
          <SummaryRow
            label={t("summary.fields.donationType")}
            value={
              donationType &&
              t(`summary.donationTypes.${donationType.toLowerCase()}`)
            }
          />
          <SummaryRow label={t("summary.fields.shelter")} value={shelterName} />
          <SummaryRow
            label={t("summary.fields.amount")}
            value={
              Number.isFinite(parsedAmount)
                ? formatAmount(parsedAmount)
                : undefined
            }
          />
        </StyledSummaryGroup>

        <StyledSummaryGroup>
          <SummaryRow
            label={t("summary.fields.fullName")}
            value={[firstName, lastName].filter(Boolean).join(" ")}
          />
          <SummaryRow label={t("summary.fields.email")} value={email} />
          <SummaryRow
            label={t("summary.fields.phoneNumber")}
            value={phoneNumber && formatPhoneNumber(phoneNumber)}
          />
        </StyledSummaryGroup>
      </StyledSummary>

      <FormCheckbox name="consent" label={t("form.consent")} />
    </StyledSection>
  );
}
