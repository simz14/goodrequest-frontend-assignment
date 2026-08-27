import {
  FormChipGroup,
  FormNumberInput,
  FormRadioGroup,
  FormSelect
} from "@/components/form";
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
  StyledSelectField
} from "../index.styles";

type Shelter = {
  id: number;
  name: string;
};

const donationTypes = [
  { value: DonationType.SHELTER, label: "form.donationTypeShelterLabel" },
  { value: DonationType.FOUNDATION, label: "form.donationTypeFoundationLabel" }
];

const mockedShelters: Shelter[] = [
  { id: 1, name: "Útulok pre psov - TEZAS" },
  { id: 2, name: "Útulok pre psov - TEZA" },
  { id: 3, name: "Útulok pre psov - TEZ" }
];

const shelterOptions = mockedShelters.map(({ id, name }) => ({
  value: String(id),
  label: name
}));

const amounts = [5, 10, 20, 30, 50, 100];

export default function ChooseShelterStep() {
  const { t, i18n } = useT();

  const amountOptions = useMemo(() => {
    const formatter = new Intl.NumberFormat(i18n.resolvedLanguage, {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    });

    return amounts.map((value) => ({ value, label: formatter.format(value) }));
  }, [i18n.resolvedLanguage]);

  return (
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
          placeholder={t("form.shelterPlaceholder")}
          label={t("form.shelter")}
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

        <StyledAmountOptions role="group" aria-label={t("form.amountOptions")}>
          <FormChipGroup name="amount" options={amountOptions} />
        </StyledAmountOptions>
      </StyledAmountBlock>
    </StyledFormSection>
  );
}
