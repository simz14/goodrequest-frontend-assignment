"use client";

import { Skeleton } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useT } from "next-i18next/client";
import { useMemo } from "react";
import { StyledTypography } from "@/components/ui/typography.styles";
import { resultsQueryOptions } from "@/lib/api/results";
import {
  StyledResult,
  StyledResults,
  StyledResultsList,
  StyledResultsMessage,
  StyledResultsSkeletons
} from "./about-results.styles";

const SKELETON_HEIGHT = 68;
const SKELETON_WIDTH = 160;

function Result({ label, value }: { label: string; value: string }) {
  return (
    <StyledResult>
      <StyledTypography $variant="text-md" $color="primary" as="dt">
        {label}
      </StyledTypography>
      <StyledTypography $variant="heading-xl" $color="brand" as="dd">
        {value}
      </StyledTypography>
    </StyledResult>
  );
}

export default function AboutResults() {
  const { t, i18n } = useT();
  const { data, isPending, isError } = useQuery(resultsQueryOptions());

  const { formatCurrency, formatCount } = useMemo(() => {
    const language = i18n.resolvedLanguage;

    const currency = new Intl.NumberFormat(language, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
    const count = new Intl.NumberFormat(language);

    return {
      formatCurrency: (value: number) => currency.format(value),
      formatCount: (value: number) => count.format(value)
    };
  }, [i18n.resolvedLanguage]);

  return (
    <StyledResults aria-live="polite" aria-busy={isPending}>
      {isPending && (
        <StyledResultsSkeletons aria-hidden>
          <StyledResult>
            <Skeleton height={SKELETON_HEIGHT} width={SKELETON_WIDTH} />
          </StyledResult>
          <StyledResult>
            <Skeleton height={SKELETON_HEIGHT} width={SKELETON_WIDTH} />
          </StyledResult>
        </StyledResultsSkeletons>
      )}

      {isError && (
        <StyledResultsMessage>
          <StyledTypography $variant="text-md" $color="secondary">
            {t("about.results.error")}
          </StyledTypography>
        </StyledResultsMessage>
      )}

      {data && (
        <StyledResultsList>
          <Result
            label={t("about.results.contribution")}
            value={formatCurrency(data.contribution)}
          />
          <Result
            label={t("about.results.contributors")}
            value={formatCount(data.contributors)}
          />
        </StyledResultsList>
      )}
    </StyledResults>
  );
}
