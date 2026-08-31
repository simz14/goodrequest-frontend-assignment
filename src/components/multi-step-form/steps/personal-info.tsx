import { FormPhoneInput, FormTextInput } from "@/components/form";
import { StyledTypography } from "@/components/ui/typography.styles";
import { Collapse } from "@mantine/core";
import { IconChevronDown, IconPlus, IconTrash } from "@tabler/icons-react";
import { useT } from "next-i18next/client";
import { useId, useState } from "react";
import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import { emptyDonor, MAX_DONORS, type FormValues } from "../schema";
import { StyledSection } from "../shared.styles";
import {
  StyledChevron,
  StyledDonorHeader,
  StyledDonorHeading,
  StyledDonorItem,
  StyledDonorList,
  StyledDonorPreview,
  StyledDonorToggle,
  StyledAddDonorButton,
  StyledFullWidthField,
  StyledRemoveDonorButton,
  StyledWrapper
} from "./personal-info.styles";

export default function PersonalInfoStep() {
  const { t } = useT();
  const panelId = useId();
  const { control, getValues } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({ control, name: "donors" });
  const { errors } = useFormState({ control, name: "donors" });
  const [openIndex, setOpenIndex] = useState(0);
  const donorErrors = errors.donors;
  const invalidIndex = fields.findIndex((_, index) => donorErrors?.[index]);
  const [revealedIndex, setRevealedIndex] = useState(invalidIndex);

  if (revealedIndex !== invalidIndex) {
    setRevealedIndex(invalidIndex);
    if (invalidIndex >= 0) setOpenIndex(invalidIndex);
  }

  const removeDonor = (index: number) => {
    remove(index);
    setOpenIndex((current) => (index <= current ? current - 1 : current));
  };

  const addDonor = () => {
    append(emptyDonor);
    setOpenIndex(fields.length);
  };

  const previewOf = (index: number) => {
    const { firstName, lastName, email } = getValues(`donors.${index}`);

    return [[firstName, lastName].filter(Boolean).join(" "), email]
      .filter(Boolean)
      .join(" · ");
  };

  return (
    <StyledSection>
      <StyledTypography $variant="heading-lg" $color="primary" as="h1">
        {t("personalInfo.title")}
      </StyledTypography>

      <StyledDonorList>
        {fields.map((field, index) => {
          const isOpen = openIndex === index;
          const isCollapsible = fields.length > 1;
          const title =
            index === 0
              ? t("form.sectionAboutYou")
              : t("form.donorHeading", { number: index + 1 });

          return (
            <StyledDonorItem key={field.id}>
              <StyledDonorHeader>
                <StyledDonorHeading
                  $variant="text-md-semibold"
                  $color="primary"
                  as="h2"
                >
                  {isCollapsible ? (
                    <StyledDonorToggle
                      type="button"
                      onClick={() => setOpenIndex(index)}
                      aria-expanded={isOpen}
                      aria-controls={`${panelId}-${index}`}
                      $hasError={!isOpen && Boolean(donorErrors?.[index])}
                    >
                      {title}
                      {!isOpen && (
                        <StyledDonorPreview>
                          {previewOf(index)}
                        </StyledDonorPreview>
                      )}
                      <StyledChevron $open={isOpen} aria-hidden>
                        <IconChevronDown size={18} />
                      </StyledChevron>
                    </StyledDonorToggle>
                  ) : (
                    title
                  )}
                </StyledDonorHeading>

                {index > 0 && (
                  <StyledRemoveDonorButton
                    type="button"
                    variant="subtle"
                    color="gray"
                    onClick={() => removeDonor(index)}
                    aria-label={`${t("form.removeDonor")} – ${title}`}
                    leftSection={<IconTrash size={16} />}
                  >
                    {t("form.removeDonor")}
                  </StyledRemoveDonorButton>
                )}
              </StyledDonorHeader>

              <Collapse id={`${panelId}-${index}`} expanded={isOpen}>
                <StyledWrapper>
                  <FormTextInput
                    name={`donors.${index}.firstName`}
                    label={t("form.firstName")}
                    placeholder={t("form.firstNamePlaceholder")}
                  />
                  <FormTextInput
                    name={`donors.${index}.lastName`}
                    label={t("form.lastName")}
                    placeholder={t("form.lastNamePlaceholder")}
                  />

                  <StyledFullWidthField
                    name={`donors.${index}.email`}
                    label={t("form.email")}
                    placeholder={t("form.emailPlaceholder")}
                  />

                  <FormPhoneInput name={`donors.${index}.phone`} />
                </StyledWrapper>
              </Collapse>
            </StyledDonorItem>
          );
        })}
      </StyledDonorList>

      {fields.length < MAX_DONORS && (
        <StyledAddDonorButton
          type="button"
          variant="default"
          onClick={addDonor}
          leftSection={<IconPlus size={18} />}
        >
          {t("form.addDonor")}
        </StyledAddDonorButton>
      )}
    </StyledSection>
  );
}
