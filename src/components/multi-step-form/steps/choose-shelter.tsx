import {
  FormChipGroup,
  FormNumberInput,
  FormRadioGroup,
  FormSelect
} from "@/components/form";
import { useQuery } from "@tanstack/react-query";
import { useT } from "next-i18next/client";
import { useMemo } from "react";
import { DonationType } from "../types";
import {
  StyledAmountBlock,
  StyledAmountField,
  StyledAmountOptions,
  StyledCurrency,
  StyledFormSection,
  StyledGroup,
  StyledRadioCard,
  StyledSection,
  StyledSelectField
} from "../index.styles";
import { StyledTypography } from "@/components/ui/typography.styles";
import { sheltersQueryOptions } from "@/lib/api/shelters";

const donationTypes = [
  { value: DonationType.SHELTER, label: "form.donationTypeShelterLabel" },
  { value: DonationType.FOUNDATION, label: "form.donationTypeFoundationLabel" }
];

const amounts = [5, 10, 20, 30, 50, 100];

export default function ChooseShelterStep() {
  const { t, i18n } = useT();
  const {
    data: shelters,
    isPending,
    isError
  } = useQuery(sheltersQueryOptions());

  const shelterOptions = useMemo(
    () =>
      shelters?.map(({ id, name }) => ({ value: String(id), label: name })) ??
      [],
    [shelters]
  );

  const shelterPlaceholder = isPending
    ? t("form.shelterLoading")
    : isError
      ? t("form.shelterError")
      : t("form.shelterPlaceholder");

  const amountOptions = useMemo(() => {
    const formatter = new Intl.NumberFormat(i18n.resolvedLanguage, {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    });

    return amounts.map((value) => ({ value, label: formatter.format(value) }));
  }, [i18n.resolvedLanguage]);

  return (
    <StyledSection>
      <StyledTypography $variant="heading-lg" $color="primary" as="h1">
        {t("chooseShelter.title")}
      </StyledTypography>
      <StyledFormSection>
        <FormRadioGroup name="donationType" aria-label={t("form.donationType")}>
          <StyledGroup>
            {donationTypes.map((donationType) => (
              <StyledRadioCard
                key={donationType.value}
                value={donationType.value}
              >
                {t(donationType.label)}
              </StyledRadioCard>
            ))}
          </StyledGroup>
        </FormRadioGroup>

        <StyledSelectField>
          <FormSelect
            name="shelter"
            data={shelterOptions}
            placeholder={shelterPlaceholder}
            label={t("form.shelter")}
            disabled={isPending || isError}
            searchable
          />
        </StyledSelectField>

        <StyledAmountBlock>
          <StyledAmountField>
            <FormNumberInput
              name="amount"
              aria-label={t("form.amount")}
              placeholder="0"
              hideControls
              allowNegative={false}
              decimalScale={2}
              thousandSeparator=" "
              rightSection={<StyledCurrency>€</StyledCurrency>}
              rightSectionPointerEvents="none"
            />
          </StyledAmountField>

          <StyledAmountOptions
            role="group"
            aria-label={t("form.amountOptions")}
          >
            <FormChipGroup name="amount" options={amountOptions} />
          </StyledAmountOptions>
        </StyledAmountBlock>
      </StyledFormSection>
    </StyledSection>
  );
}
